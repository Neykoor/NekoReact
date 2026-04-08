import axios from 'axios';
import { API_ENDPOINTS, EXTRACTORS } from './constants.js';

export class NekoReact {
    
    constructor(sock, options = {}) {
        this.sock = sock;
        
        this.priority = options.priority || ['nekosbest', 'waifupics', 'purrbot', 'waifuim', 'nekoslife'];
    }

    
    async getReaction(action) {
        for (const provider of this.priority) {
            try {
                const url = API_ENDPOINTS[provider](action);
                const { data } = await axios.get(url, { timeout: 5000 });
                
                const extract = EXTRACTORS[provider] || EXTRACTORS.default;
                const result = extract(data);

                if (result) return result;
            } catch (err) {
                
            
                continue; 
            }
        }
        throw new Error(`Imposible obtener reacción para "${action}" en todos los proveedores.`);
    }

    
    async send(action, m, customText = null) {
        const from = m.key.participant || m.key.remoteJid;
        const to = m.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];

        if (!to) throw new Error("Debes mencionar a alguien para interactuar.");

        const realFrom = this.sock.lid ? await this.sock.lid.resolve(from) : from;
        const realTo = this.sock.lid ? await this.sock.lid.resolve(to) : to;

        const gifUrl = await this.getReaction(action);

        
        const nameFrom = realFrom.split('@')[0];
        const nameTo = realTo.split('@')[0];

        const caption = customText 
            ? customText.replace('{user1}', `@${nameFrom}`).replace('{user2}', `@${nameTo}`)
            : `✨ @${nameFrom} le dio un ${action} a @${nameTo}`;

        return await this.sock.sendMessage(m.key.remoteJid, {
            video: { url: gifUrl },
            gifPlayback: true,
            caption: caption,
            mentions: [realFrom, realTo]
        });
    }
}
