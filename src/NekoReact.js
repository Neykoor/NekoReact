import { API_ENDPOINTS, EXTRACTORS, ACTIONS_CONFIG } from './constants.js';
import fetch from 'node-fetch';

export class NekoReact {
    constructor(sock, options = {}) {
        this.sock = sock;
        this.priority = options.priority || ['purrbot', 'nekosbest', 'waifupics', 'waifuim', 'nekosapi'];
        this.timeout = options.timeout || 10000;
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
        const clean = input?.toLowerCase().trim();
        if (ACTIONS_CONFIG[clean]) return clean;
        return Object.keys(ACTIONS_CONFIG).find(key => ACTIONS_CONFIG[key].aliases.includes(clean)) || null;
    }

    async _download(url) {
        try {
            const res = await fetch(url, {
                headers: { 'User-Agent': 'Mozilla/5.0' },
                signal: AbortSignal.timeout(this.timeout)
            });
            if (!res.ok) return null;
            return Buffer.from(await res.arrayBuffer());
        } catch {
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

                const res = await fetch(endpoint(key), { signal: AbortSignal.timeout(this.timeout) });
                if (!res.ok) continue;

                const data = await res.json();
                const url = (EXTRACTORS[provider] || EXTRACTORS.default)(data);

                if (url && /\.mp4(\?|$)/i.test(url)) {
                    const buffer = await this._download(url);
                    if (buffer && buffer.length > 1000) {
                        return { buffer, label: config.label || key };
                    }
                }
            } catch {
                continue;
            }
        }
        throw new Error(`No se encontró video MP4 para: ${key}`);
    }

    async send(action, m, customText = null) {
        const from = m.key.participant || m.key.remoteJid;
        const quoted = m.message?.extendedTextMessage?.contextInfo?.participant;
        const mention = m.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
        const to = mention || quoted;

        if (!to) return null;

        try {
            const [u1, u2] = await Promise.all([this._resolveId(from), this._resolveId(to)]);
            const { buffer, label } = await this._getGif(action);

            const caption = customText 
                ? customText.replace('{user1}', `@${u1.split('@')[0]}`).replace('{user2}', `@${u2.split('@')[0]}`)
                : `✨ @${u1.split('@')[0]} le dio un ${label} a @${u2.split('@')[0]}`;

            return await this.sock.sendMessage(m.key.remoteJid, {
                video: buffer,
                mimetype: 'video/mp4',
                gifPlayback: true,
                caption,
                mentions: [u1, u2]
            }, { quoted: m });

        } catch (error) {
            console.error(`[NekoReact] Fallo en ${action}:`, error.message);
            return null;
        }
    }
}
