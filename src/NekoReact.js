import { API_ENDPOINTS, EXTRACTORS, ACTIONS_CONFIG } from './constants.js';
import fetch from 'node-fetch';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const execAsync = promisify(exec);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export class NekoReact {
    constructor(sock, options = {}) {
        this.sock = sock;
        this.priority = options.priority || ['purrbot', 'nekosbest', 'waifupics', 'waifuim', 'nekosapi'];
        this.timeout = options.timeout || 15000;
        this.tempDir = path.join(__dirname, '..', 'temp');
        this.ensureTempDir();
    }

    async ensureTempDir() {
        try {
            await fs.mkdir(this.tempDir, { recursive: true });
        } catch {}
    }

    async _resolveId(id) {
        if (!id) return null;
        try {
            if (this.sock?.lid?.resolve) {
                const resolved = await this.sock.lid.resolve(id);
                return resolved || id;
            }
        } catch (e) {
            console.error('[NekoReact] Error en LidSync:', e.message);
        }
        return id.split(':')[0].split('@')[0] + '@s.whatsapp.net';
    }

    _getPrimaryKey(input) {
        const clean = input?.toLowerCase().trim();
        if (ACTIONS_CONFIG[clean]) return clean;
        return Object.keys(ACTIONS_CONFIG).find(key => ACTIONS_CONFIG[key].aliases.includes(clean)) || null;
    }

    async _download(url) {
        try {
            const res = await fetch(url, {
                headers: { 
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                    'Accept': 'image/gif,image/*,*/*'
                },
                signal: AbortSignal.timeout(this.timeout)
            });
            if (!res.ok) return null;
            return Buffer.from(await res.arrayBuffer());
        } catch (e) {
            console.error('[NekoReact] Error descargando:', e.message);
            return null;
        }
    }

    async _convertGifToMp4(gifBuffer) {
        const id = crypto.randomUUID();
        const gifPath = path.join(this.tempDir, `${id}.gif`);
        const mp4Path = path.join(this.tempDir, `${id}.mp4`);
        
        try {
            await fs.writeFile(gifPath, gifBuffer);
            
            const cmd = `ffmpeg -i "${gifPath}" -an -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -f mp4 "${mp4Path}"`;
            
            await execAsync(cmd, { timeout: 30000 });
            
            const mp4Buffer = await fs.readFile(mp4Path);
            
            await Promise.all([
                fs.unlink(gifPath).catch(() => {}),
                fs.unlink(mp4Path).catch(() => {})
            ]);
            
            return mp4Buffer;
        } catch (e) {
            await Promise.all([
                fs.unlink(gifPath).catch(() => {}),
                fs.unlink(mp4Path).catch(() => {})
            ]);
            console.error('[NekoReact] Error conversión:', e.message);
            return null;
        }
    }

    async _getGif(action) {
        const key = this._getPrimaryKey(action);
        if (!key) throw new Error(`Acción "${action}" no configurada.`);

        const config = ACTIONS_CONFIG[key];
        const providers = [...new Set([...this.priority.filter(p => config.support.includes(p)), ...config.support])];

        for (const provider of providers) {
            try {
                const endpoint = API_ENDPOINTS[provider];
                if (!endpoint) continue;

                const apiUrl = endpoint(key);
                const res = await fetch(apiUrl, { 
                    signal: AbortSignal.timeout(this.timeout),
                    headers: { 'User-Agent': 'NekoReact/1.0' }
                });
                
                if (!res.ok) continue;

                const data = await res.json();
                const url = (EXTRACTORS[provider] || EXTRACTORS.default)(data);

                if (!url) continue;

                const buffer = await this._download(url);
                if (!buffer || buffer.length < 1000) continue;

                if (url.toLowerCase().endsWith('.gif') || !url.toLowerCase().endsWith('.mp4')) {
                    const mp4Buffer = await this._convertGifToMp4(buffer);
                    if (mp4Buffer && mp4Buffer.length > 1000) {
                        return { buffer: mp4Buffer, label: config.label || key };
                    }
                } else {
                    return { buffer, label: config.label || key };
                }

            } catch (e) {
                console.error(`[NekoReact] Error con ${provider}:`, e.message);
                continue;
            }
        }
        throw new Error(`No se encontró contenido válido para: ${key}`);
    }

    async send(action, m, customText = null) {
        const msg = m.message?.extendedTextMessage || m.message?.videoMessage || m.message?.imageMessage || m.message;
        const context = msg?.contextInfo;
        
        const from = m.key.participant || m.key.remoteJid;
        const to = context?.mentionedJid?.[0] || context?.participant;

        if (!to) return null;

        try {
            const [u1, u2] = await Promise.all([
                this._resolveId(from),
                this._resolveId(to)
            ]);
            
            const { buffer, label } = await this._getGif(action);

            const t1 = u1.split('@')[0];
            const t2 = u2.split('@')[0];

            const caption = customText 
                ? customText.replace('{user1}', `@${t1}`).replace('{user2}', `@${t2}`)
                : `✨ @${t1} le dio un ${label} a @${t2}`;

            return await this.sock.sendMessage(m.key.remoteJid, {
                video: buffer,
                mimetype: 'video/mp4',
                gifPlayback: true,
                caption,
                mentions: [u1, u2]
            }, { quoted: m });

        } catch (error) {
            console.error(`[NekoReact] Fallo en ${action}:`, error.message);
            throw error;
        }
    }
}
