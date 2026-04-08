import { API_ENDPOINTS, EXTRACTORS, ACTIONS_CONFIG } from './constants.js';

export class NekoReact {
    constructor(sock, options = {}) {
        this.sock = sock;
        this.priority = options.priority || ['nekosbest', 'waifupics', 'purrbot', 'waifuim'];
        this.timeout = options.timeout || 5000;
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

    async _getGif(action) {
        const primaryKey = this._getPrimaryKey(action);
        if (!primaryKey) throw new Error(`Acción "${action}" no configurada.`);

        const config = ACTIONS_CONFIG[primaryKey];
        const validProviders = this.priority.filter(p => config.support.includes(p));

        for (const provider of validProviders) {
            try {
                const url = API_ENDPOINTS[provider](primaryKey);
                const response = await fetch(url, { signal: AbortSignal.timeout(this.timeout) });
                
                if (!response.ok) continue;
                
                const data = await response.json();
                const extract = EXTRACTORS[provider] || EXTRACTORS.default;
                const result = extract(data);
                
                if (result) return { gif: result, label: config.label || primaryKey };
            } catch {
                continue;
            }
        }
        throw new Error(`Sin recursos para: ${primaryKey}`);
    }

    async send(action, m, customText = null) {
        const from = m.key.participant || m.key.remoteJid;
        
        const quoted = m.message?.extendedTextMessage?.contextInfo?.participant;
        const mention = m.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
        const to = mention || quoted;

        if (!to) return null;

        const [user1, user2] = await Promise.all([
            this._resolveId(from),
            this._resolveId(to)
        ]);

        const { gif, label } = await this._getGif(action);

        const t1 = user1.split('@')[0];
        const t2 = user2.split('@')[0];

        const caption = customText 
            ? customText.replace('{user1}', `@${t1}`).replace('{user2}', `@${t2}`)
            : `✨ @${t1} le dio un ${label} a @${t2}`;

        return await this.sock.sendMessage(m.key.remoteJid, {
            video: { url: gif },
            gifPlayback: true,
            caption: caption,
            mentions: [user1, user2]
        }, { quoted: m });
    }
}
