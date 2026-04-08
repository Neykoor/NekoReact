import axios from 'axios';
import { API_ENDPOINTS, EXTRACTORS } from './constants.js';

export class NekoReact {
    constructor(sock, options = {}) {
        this.sock = sock;
        this.priority = options.priority || ['nekosbest', 'waifupics', 'purrbot', 'waifuim'];
        this.timeout = options.timeout || 5000;
    }

    async _resolveId(id) {
        if (this.sock.lid && typeof this.sock.lid.resolve === 'function') {
            return await this.sock.lid.resolve(id);
        }
        return id;
    }

    async _getGif(action) {
        for (const provider of this.priority) {
            try {
                const url = API_ENDPOINTS[provider](action);
                const { data } = await axios.get(url, { timeout: this.timeout });
                const extract = EXTRACTORS[provider] || EXTRACTORS.default;
                const result = extract(data);
                if (result) return result;
            } catch {
                continue;
            }
        }
        throw new Error(`Error: ${action} no disponible`);
    }

    async send(action, m, customText = null) {
        const from = m.key.participant || m.key.remoteJid;
        const to = m.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];

        if (!to) return;

        const user1 = await this._resolveId(from);
        const user2 = await this._resolveId(to);
        const gifUrl = await this._getGif(action);

        const t1 = user1.split('@')[0];
        const t2 = user2.split('@')[0];

        const caption = customText 
            ? customText.replace('{user1}', `@${t1}`).replace('{user2}', `@${t2}`)
            : `✨ @${t1} le dio un ${action} a @${t2}`;

        return await this.sock.sendMessage(m.key.remoteJid, {
            video: { url: gifUrl },
            gifPlayback: true,
            caption: caption,
            mentions: [user1, user2]
        });
    }
}
