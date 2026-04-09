import { API_ENDPOINTS, EXTRACTORS, ACTIONS_CONFIG } from './constants.js';
import { downloadContentFromMessage } from '@whiskeysockets/baileys'; 
import fetch from 'node-fetch';

export class NekoReact {
    constructor(sock, options = {}) {
        this.sock = sock;
        this.priority = options.priority || ['purrbot', 'waifupics', 'nekosbest', 'waifuim', 'nekosapi'];
        this.timeout = options.timeout || 10000; // Aumentado a 10s
    }

    async _resolveId(id) {
        try {
            if (this.sock?.lid?.resolve) {
                return await this.sock.lid.resolve(id) || id;
            }
        } catch {}
        return id;
    }

    _getPrimaryKey(input) {
        const cleanInput = input?.toLowerCase().trim();
        if (ACTIONS_CONFIG[cleanInput]) return cleanInput;
        for (const [key, config] of Object.entries(ACTIONS_CONFIG)) {
            if (config.aliases.includes(cleanInput)) return key;
        }
        return null;
    }

    
    async _downloadVideo(url) {
        try {
            const response = await fetch(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                },
                signal: AbortSignal.timeout(this.timeout)
            });

            if (!response.ok) return null;
            
            const arrayBuffer = await response.arrayBuffer();
            return Buffer.from(arrayBuffer);
        } catch (err) {
            console.error('Error descargando video:', err.message);
            return null;
        }
    }

    async _getGif(action) {
        const primaryKey = this._getPrimaryKey(action);
        if (!primaryKey) throw new Error(`Acción "${action}" no configurada.`);

        const config = ACTIONS_CONFIG[primaryKey];
        const validProviders = this.priority.filter(p => config.support.includes(p));

        
        config.support.forEach(p => {
            if (!validProviders.includes(p)) validProviders.push(p);
        });

        for (const provider of validProviders) {
            try {
                const endpointFn = API_ENDPOINTS[provider];
                if (!endpointFn) continue;

                const url = endpointFn(primaryKey);
                console.log(`[NekoReact] Intentando con ${provider}: ${url}`);

                const response = await fetch(url, { 
                    signal: AbortSignal.timeout(this.timeout),
                    headers: { 'Accept': 'application/json' }
                });

                if (!response.ok) continue;

                const data = await response.json();
                const extract = EXTRACTORS[provider] || EXTRACTORS.default;
                const result = extract(data);

                
                if (result && /\.(mp4|webm)(\\?|$)/i.test(result)) {
                    console.log(`[NekoReact] URL encontrada: ${result}`);
                    
                    
                    const videoBuffer = await this._downloadVideo(result);
                    
                    if (videoBuffer && videoBuffer.length > 1000) { 
                        return { 
                            videoBuffer,  
                            label: config.label || primaryKey 
                        };
                    }
                }
            } catch (err) {
                console.error(`[NekoReact] Error con ${provider}:`, err.message);
                continue;
            }
        }
        throw new Error(`No se encontró un video válido para: ${primaryKey}`);
    }

    async send(action, m, customText = null) {
        const from = m.key.participant || m.key.remoteJid;
        const quoted = m.message?.extendedTextMessage?.contextInfo?.participant;
        const mention = m.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
        const to = mention || quoted;

        if (!to) {
            await this.sock.sendMessage(m.key.remoteJid, {
                text: '❌ Debes mencionar a alguien o responder a un mensaje para usar este comando.'
            }, { quoted: m });
            return null;
        }

        try {
            const [user1, user2] = await Promise.all([
                this._resolveId(from),
                this._resolveId(to)
            ]);

            const { videoBuffer, label } = await this._getGif(action);

            const t1 = user1.split('@')[0];
            const t2 = user2.split('@')[0];

            const caption = customText 
                ? customText.replace('{user1}', `@${t1}`).replace('{user2}', `@${t2}`)
                : `✨ @${t1} le dio un ${label} a @${t2}`;

            console.log(`[NekoReact] Enviando video de ${videoBuffer.length} bytes`);

        
            const result = await this.sock.sendMessage(m.key.remoteJid, {
                video: videoBuffer,        
                mimetype: 'video/mp4',     
                gifPlayback: true,         
                caption: caption,
                mentions: [user1, user2]
            }, { quoted: m });

            return result;

        } catch (error) {
            console.error('[NekoReact] Error:', error);
            await this.sock.sendMessage(m.key.remoteJid, {
                text: `❌ Error: ${error.message}`
            }, { quoted: m });
            return null;
        }
    }
}
