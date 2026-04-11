import { API_ENDPOINTS, EXTRACTORS, ACTIONS_CONFIG_FINAL as ACTIONS_CONFIG } from './constants.js';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const execAsync = promisify(exec);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const MESSAGE_TEMPLATES = {
    emotions: {
        angry: ["{user} está furioso... ¡cuidado!", "{user} está que arde de enojo", "{user} está harto de todo", "La ira de {user} es incontenible", "{user} está a punto de explotar"],
        annoyed: ["{user} está molesto", "{user} no puede con la situación", "{user} está fastidiado", "{user} está cansado de esto"],
        anxiety: ["{user} está muy ansioso", "{user} tiene nervios de punta", "{user} está preocupado"],
        awkward: ["{user} se siente incómodo", "Momento incómodo para {user}", "{user} no sabe qué hacer"],
        blush: ["{user} se sonrojó", "{user} está todo rojo", "{user} está avergonzado", "{user} no puede ocultar su timidez"],
        bored: ["{user} está aburrido", "Nada interesa a {user} ahora", "{user} espera que pase algo"],
        cry: ["{user} está llorando", "{user} tiene el corazón roto", "Las lágrimas de {user} no paran", "{user} está muy triste"],
        happy: ["{user} está muy feliz", "{user} brilla de alegría", "{user} está en su mejor momento", "{user} está celebrando la vida"],
        laugh: ["{user} no puede parar de reír", "{user} se ríe a carcajadas", "{user} está desternillado"],
        love: ["{user} está enamorado", "{user} siente mariposas", "{user} está lleno de amor", "El corazón de {user} late fuerte"],
        nervous: ["{user} está nervioso", "{user} suda de la preocupación", "{user} tiembla de ansiedad"],
        sad: ["{user} está deprimido", "{user} siente la lluvia en su alma", "{user} necesita un abrazo"],
        scared: ["{user} está aterrorizado", "{user} tiene mucho miedo", "{user} no puede mirar"],
        shy: ["{user} es muy tímido", "{user} se esconde de la vergüenza", "{user} no puede hablar"],
        sleepy: ["{user} tiene mucho sueño", "{user} necesita una siesta", "{user} está a punto de dormirse"],
        smug: ["{user} está muy presumido", "{user} sabe algo que tú no", "{user} está en su momento de gloria"],
        surprised: ["{user} está sorprendido", "{user} no puede creerlo", "{user} está impactado"],
        calm: ["{user} se calma", "{user} respira hondo", "{user} toma las cosas con calma"],
        confused: ["{user} está confundido", "{user} no entiende nada", "{user} está perdido"],
        disgusted: ["{user} está disgustado", "{user} siente asco", "{user} no puede soportarlo"],
        embarrassed: ["{user} está avergonzado", "{user} no sabe dónde meterse", "{user} quiere desaparecer"],
        excited: ["{user} está emocionado", "{user} no puede contener la emoción", "{user} está hypeado"],
        tired: ["{user} está agotado", "{user} necesita descansar", "{user} no da más"],
        worried: ["{user} está preocupado", "{user} no puede dejar de pensar", "{user} tiene miedo de lo que viene"]
    },
    interaction: {
        hug: ["{user1} abraza fuertemente a {user2}", "{user1} le da un abrazo a {user2}", "{user1} envuelve a {user2} en un abrazo", "Un abrazo cálido de {user1} para {user2}"],
        kiss: ["{user1} besa apasionadamente a {user2}", "{user1} le da un beso a {user2}", "{user1} besa tiernamente a {user2}", "Un beso especial de {user1} para {user2}"],
        pat: ["{user1} acaricia la cabeza de {user2}", "{user1} da palmaditas a {user2}", "{user1} mima a {user2} con cariño"],
        cuddle: ["{user1} se acurruca con {user2}", "{user1} abraza fuerte a {user2}", "{user1} y {user2} se acurrucan juntos", "Un momento de mimos entre {user1} y {user2}"],
        poke: ["{user1} toca a {user2}", "{user1} le hace cosquillas a {user2}", "{user1} pica suavemente a {user2}"],
        wave: ["{user1} saluda a {user2}", "{user1} le hace ondas a {user2}", "{user1} saluda distante a {user2}"],
        wink: ["{user1} le guiña a {user2}", "{user1} coquetea con {user2}", "{user1} le tira un ojito a {user2}"],
        bite: ["{user1} muerde a {user2}", "{user1} le da un mordisco a {user2}", "{user1} muerde fuerte a {user2}"],
        bonk: ["{user1} le da un bonk a {user2}", "{user1} manda a {user2} al horny jail", "{user1} golpea a {user2} con un martillo"],
        bully: ["{user1} acosa a {user2}", "{user1} se burla de {user2}", "{user1} molesta a {user2}"],
        kick: ["{user1} patea a {user2}", "{user1} le da una patada a {user2}", "{user1} golpea con el pie a {user2}"],
        kill: ["{user1} elimina a {user2}", "{user1} acaba con {user2}", "{user1} ataca mortalmente a {user2}"],
        punch: ["{user1} golpea a {user2}", "{user1} le da un puñetazo a {user2}", "{user1} noquea a {user2}"],
        slap: ["{user1} abofetea a {user2}", "{user1} le da una cachetada a {user2}", "{user1} golpea la cara de {user2}"],
        lick: ["{user1} lame a {user2}", "{user1} le da una lametada a {user2}", "{user1} lame suavemente a {user2}"],
        tickle: ["{user1} hace cosquillas a {user2}", "{user1} le hace cosquillitas a {user2}", "{user1} ataca con cosquillas a {user2}"],
        feed: ["{user1} le da de comer a {user2}", "{user1} alimenta a {user2}", "{user1} comparte comida con {user2}"],
        dance: ["{user1} baila con {user2}", "{user1} celebra con {user2}", "{user1} y {user2} bailan juntos"],
        yeet: ["{user1} hace YEET a {user2}", "{user1} lanza épico a {user2}", "{user1} manda a {user2} al espacio"],
        highfive: ["{user1} choca cinco con {user2}", "{user1} celebra con {user2}", "{user1} y {user2} se chocan las manos"],
        baka: ["{user1} llama idiota a {user2}", "{user1} le dice tonto a {user2}", "{user1} insulta a {user2}"],
        brofist: ["{user1} choca el puño con {user2}", "{user1} y {user2} se chocan los puños", "Puños de {user1} y {user2} se encuentran"],
        celebrate: ["{user1} celebra con {user2}", "{user1} y {user2} celebran juntos", "Fiesta entre {user1} y {user2}"],
        cheer: ["{user1} anima a {user2}", "{user1} aplaude a {user2}", "{user1} celebra por {user2}"],
        clap: ["{user1} aplaude a {user2}", "{user1} aplaude fuerte a {user2}", "{user1} ovaciona a {user2}"],
        handhold: ["{user1} toma la mano de {user2}", "{user1} y {user2} se toman de la mano", "Las manos de {user1} y {user2} se unen"],
        nom: ["{user1} come a {user2}", "{user1} le da un mordisco a {user2}", "{user1} ñam ñam a {user2}"],
        run: ["{user1} corre de {user2}", "{user1} huye de {user2}", "{user1} se escapa de {user2}"],
        shoot: ["{user1} dispara a {user2}", "{user1} le mete un tiro a {user2}", "{user1} elimina a {user2} con estilo"],
        stare: ["{user1} mira fijamente a {user2}", "{user1} observa a {user2}", "{user1} no quita la vista de {user2}"],
        thumbsup: ["{user1} aprueba a {user2}", "{user1} le da pulgar arriba a {user2}", "{user1} está de acuerdo con {user2}"]
    },
    nsfw: {
        waifu_nsfw: ["{user} disfruta de una waifu picante", "{user} se deleita con su waifu", "Una waifu especial para {user}"],
        hentai: ["{user} disfruta del hentai", "{user} aprecia el arte", "Contenido especial para {user}"]
    }
};

export class NekoReact {
    constructor(sock, options = {}) {
        this.sock = sock;
        this.priority = options.priority || ['nekosbest', 'waifupics', 'purrbot', 'waifuim'];
        this.timeout = options.timeout || 15000;
        this.tempDir = path.join(__dirname, '..', 'temp');
        this.ensureTempDir();
    }

    async ensureTempDir() {
        try { await fs.mkdir(this.tempDir, { recursive: true }); } catch {}
    }

    async _resolveId(id) {
        if (!id) return null;
        try {
            if (this.sock?.lid?.resolve) {
                const resolved = await this.sock.lid.resolve(id);
                return resolved || id;
            }
        } catch (e) {}
        return id.split(':')[0].split('@')[0] + '@s.whatsapp.net';
    }

    _getPrimaryKey(input) {
        const clean = input?.toLowerCase().trim();
        if (ACTIONS_CONFIG[clean]) return clean;
        return Object.keys(ACTIONS_CONFIG).find(key => 
            ACTIONS_CONFIG[key].aliases.includes(clean)
        ) || null;
    }

    _getRandomMessage(category, action) {
        const templates = MESSAGE_TEMPLATES[category]?.[action];
        if (!templates || !Array.isArray(templates)) return null;
        return templates[Math.floor(Math.random() * templates.length)];
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
        } catch (e) { return null; }
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
            await Promise.all([fs.unlink(gifPath).catch(() => {}), fs.unlink(mp4Path).catch(() => {})]);
            return mp4Buffer;
        } catch (e) {
            await Promise.all([fs.unlink(gifPath).catch(() => {}), fs.unlink(mp4Path).catch(() => {})]);
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
                const res = await fetch(apiUrl, { signal: AbortSignal.timeout(this.timeout) });
                if (!res.ok) continue;
                const data = await res.json();
                const url = (EXTRACTORS[provider] || EXTRACTORS.default)(data);
                if (!url) continue;
                const buffer = await this._download(url);
                if (!buffer || buffer.length < 1000) continue;
                if (url.toLowerCase().endsWith('.gif') || !url.toLowerCase().endsWith('.mp4')) {
                    const mp4Buffer = await this._convertGifToMp4(buffer);
                    if (mp4Buffer) return { buffer: mp4Buffer, label: config.label || key, key };
                } else {
                    return { buffer, label: config.label || key, key };
                }
            } catch (e) { continue; }
        }
        throw new Error(`Sin recursos para: ${key}`);
    }


    async send(m, action, options = {}) {
        const msg = m.message?.extendedTextMessage || m.message?.videoMessage || m.message?.imageMessage || m.message;
        const context = msg?.contextInfo;
        const from = m.key.participant || m.key.remoteJid;
        const mentions = context?.mentionedJid || [];
        const quotedParticipant = context?.participant;
        
        let to = null;
        let messageType = 'emotions';
        let mentionsList = [await this._resolveId(from)];
        
        if (mentions.length >= 1) {
            to = mentions[0];
            messageType = 'interaction';
            const [u1, u2] = await Promise.all([from, to].map(id => this._resolveId(id)));
            mentionsList = [u1, u2];
        } else if (quotedParticipant && quotedParticipant !== from) {
            to = quotedParticipant;
            messageType = 'interaction';
            const [u1, u2] = await Promise.all([from, to].map(id => this._resolveId(id)));
            mentionsList = [u1, u2];
        }
        
        try {
            const { buffer, label, key } = await this._getGif(action);
            const config = ACTIONS_CONFIG[key];
            let category = config?.nsfw ? 'nsfw' : messageType;
            let caption;

            
            let customText = typeof options === 'string' ? options : options.text;

            if (customText && typeof customText === 'string') {
                
                const u1 = mentionsList[0]?.split('@')[0] || 'Desconocido';
                const u2 = mentionsList[1]?.split('@')[0] || '';
                caption = customText.replace('{user1}', `@${u1}`).replace('{user2}', u2 ? `@${u2}` : '');
            } else {
                const template = this._getRandomMessage(category, key);
                if (template) {
                    caption = template.replace(/{user(\d*)}/g, (match, num) => {
                        const idx = num ? parseInt(num) - 1 : 0;
                        return mentionsList[idx] ? `@${mentionsList[idx].split('@')[0]}` : match;
                    }).replace(/{user}/g, `@${mentionsList[0]?.split('@')[0] || 'Desconocido'}`);
                } else {
                    const u1 = mentionsList[0]?.split('@')[0] || 'Desconocido';
                    const u2 = mentionsList[1]?.split('@')[0] || 'Desconocido';
                    caption = messageType === 'emotions' ? `@${u1} ${label}` : `@${u1} le dio un ${label} a @${u2}`;
                }
            }
            
            return await this.sock.sendMessage(m.key.remoteJid, {
                video: buffer,
                gifPlayback: true,
                caption,
                mentions: mentionsList
            }, { quoted: m });
        } catch (error) { throw error; }
    }
}

export default NekoReact;
