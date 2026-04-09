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

const MESSAGE_TEMPLATES = {
    emotions: {
        angry: ["😠 {user} está furioso... ¡cuidado!", "🔥 {user} está que arde de enojo", "😤 {user} está harto de todo", "💢 ¡La ira de {user} es incontenible!", "🌋 {user} está a punto de explotar..."],
        annoyed: ["😒 {user} está molesto", "🙄 {user} no puede con la situación", "😑 {user} está fastidiado", "💤 {user} está cansado de esto..."],
        anxiety: ["😰 {user} está muy ansioso", "💦 {user} tiene nervios de punta", "🥺 {user} está preocupado..."],
        awkward: ["😅 {user} se siente incómodo...", "🫣 Momento incómodo para {user}", "😬 {user} no sabe qué hacer..."],
        blush: ["😳 {user} se sonrojó...", "🌸 {user} está todo rojo", "💗 ¡{user} está avergonzado!", "🙈 {user} no puede ocultar su timidez"],
        bored: ["😴 {user} está aburrido...", "🥱 Nada interesa a {user} ahora", "⏳ {user} espera que pase algo"],
        cry: ["😭 {user} está llorando...", "💔 {user} tiene el corazón roto", "😢 Las lágrimas de {user} no paran", "🥹 {user} está muy triste..."],
        happy: ["😊 {user} está muy feliz", "✨ ¡{user} brilla de alegría!", "🌟 {user} está en su mejor momento", "🎉 {user} está celebrando la vida"],
        laugh: ["😂 {user} no puede parar de reír", "🤣 ¡{user} se ríe a carcajadas!", "😆 {user} está desternillado"],
        love: ["❤️ {user} está enamorado...", "💕 {user} siente mariposas", "🥰 {user} está lleno de amor", "💖 El corazón de {user} late fuerte"],
        nervous: ["😰 {user} está nervioso...", "💧 {user} suda de la preocupación", "🫨 {user} tiembla de ansiedad"],
        sad: ["😢 {user} está deprimido...", "🌧️ {user} siente la lluvia en su alma", "💙 {user} necesita un abrazo"],
        scared: ["😱 {user} está aterrorizado", "👻 {user} tiene mucho miedo", "🫣 {user} no puede mirar..."],
        shy: ["🙈 {user} es muy tímido...", "🌸 {user} se esconde de la vergüenza", "💗 {user} no puede hablar..."],
        sleepy: ["😪 {user} tiene mucho sueño...", "💤 {user} necesita una siesta", "🌙 {user} está a punto de dormirse"],
        smug: ["😏 {user} está muy presumido", "😼 {user} sabe algo que tú no", "😌 {user} está en su momento de gloria"],
        surprised: ["😮 {user} está sorprendido", "🤯 ¡{user} no puede creerlo!", "😲 {user} está impactado"]
    },
    interaction: {
        caress: ["🤚 {user1} acaricia suavemente a {user2}", "💫 {user1} da una caricia a {user2}", "🌸 {user1} acaricia a {user2} con ternura"],
        cheekkiss: ["😚 {user1} besa la mejilla de {user2}", "💋 {user1} da un beso cariñoso a {user2}", "🌸 {user1} besa suavemente a {user2}"],
        cuddle: ["🤗 {user1} se acurruca con {user2}", "💕 {user1} abraza fuerte a {user2}", "🥰 {user1} y {user2} se acurrucan juntos", "🌸 Un momento de mimos entre {user1} y {user2}"],
        handhold: ["🤝 {user1} toma la mano de {user2}", "💕 {user1} y {user2} se toman de la mano", "🌸 Las manos de {user1} y {user2} se unen"],
        hug: ["🤗 {user1} abraza fuertemente a {user2}", "💕 ¡{user1} le da un abrazo a {user2}!", "🌸 {user1} envuelve a {user2} en un abrazo", "🥰 Un abrazo cálido de {user1} para {user2}"],
        kiss: ["💋 {user1} besa apasionadamente a {user2}", "💕 ¡{user1} le da un beso a {user2}!", "😘 {user1} besa tiernamente a {user2}", "🌸 Un beso especial de {user1} para {user2}"],
        lick: ["👅 {user1} lame a {user2}", "😋 {user1} le da una lametada a {user2}", "💦 {user1} lame suavemente a {user2}"],
        pat: ["🐾 {user1} acaricia la cabeza de {user2}", "💕 {user1} da palmaditas a {user2}", "🌸 {user1} mima a {user2} con cariño"],
        poke: ["👆 {user1} toca a {user2}", "😊 {user1} le hace cosquillas a {user2}", "💫 {user1} pica suavemente a {user2}"],
        snuggle: ["🥰 {user1} se arrima a {user2}", "💕 {user1} busca calor con {user2}", "🌸 {user1} se acomoda junto a {user2}"],
        baka: ["🤪 {user1} llama idiota a {user2}", "😤 ¡{user1} le dice tonto a {user2}!", "💢 {user1} insulta a {user2}"],
        bite: ["🦷 {user1} muerde a {user2}", "😬 ¡{user1} le da un mordisco a {user2}!", "🩸 {user1} muerde fuerte a {user2}"],
        bonk: ["🔨 {user1} le da un bonk a {user2}", "😵 ¡{user1} manda a {user2} al horny jail!", "💥 {user1} golpea a {user2} con un martillo"],
        bully: ["😈 {user1} acosa a {user2}", "💢 {user1} se burla de {user2}", "😤 {user1} molesta a {user2}"],
        kick: ["🦶 {user1} patea a {user2}", "💥 ¡{user1} le da una patada a {user2}!", "😵 {user1} golpea con el pie a {user2}"],
        kill: ["💀 {user1} elimina a {user2}", "☠️ ¡{user1} acaba con {user2}!", "🔪 {user1} ataca mortalmente a {user2}"],
        punch: ["👊 {user1} golpea a {user2}", "💥 ¡{user1} le da un puñetazo a {user2}!", "😵 {user1} noquea a {user2}"],
        slap: ["👋 {user1} abofetea a {user2}", "💥 ¡{user1} le da una cachetada a {user2}!", "😵 {user1} golpea la cara de {user2}"],
        spank: ["👋 {user1} nalguea a {user2}", "💥 ¡{user1} le da una nalgada a {user2}!", "😳 {user1} castiga a {user2}"],
        throw: ["🎯 {user1} lanza a {user2}", "🚀 ¡{user1} tira lejos a {user2}!", "💨 {user1} expulsa a {user2}"],
        yeet: ["🚀 {user1} hace YEET a {user2}", "💨 ¡{user1} lanza épico a {user2}!", "🌌 {user1} manda a {user2} al espacio"],
        bye: ["👋 {user1} se despide de {user2}", "😢 {user1} dice adiós a {user2}", "✨ {user1} se va de {user2}"],
        greet: ["🙋 {user1} saluda a {user2}", "👋 {user1} da la bienvenida a {user2}", "✨ {user1} saluda cordialmente a {user2}"],
        highfive: ["🖐️ {user1} choca cinco con {user2}", "✋ ¡{user1} celebra con {user2}!", "🎉 {user1} y {user2} se chocan las manos"],
        wave: ["👋 {user1} saluda a {user2}", "🌊 {user1} le hace ondas a {user2}", "✨ {user1} saluda distante a {user2}"],
        wink: ["😉 {user1} le guiña a {user2}", "😜 {user1} coquetea con {user2}", "💕 {user1} le tira un ojito a {user2}"]
    },
    nsfw: {
        waifu_nsfw: ["🔞 {user} disfruta de una waifu picante", "💋 {user} se deleita con su waifu", "🌶️ Una waifu especial para {user}"],
        neko_nsfw: ["🔞 {user} quiere una neko traviesa", "🐱 {user} disfruta de su neko", "💕 Una neko especial para {user}"],
        trap: ["🔞 {user} aprecia la belleza del trap", "💕 {user} disfruta del contenido", "🌸 Algo especial para {user}"],
        blowjob: ["🔞 {user} recibe atención especial", "💋 {user} disfruta del momento", "🌶️ Un momento íntimo para {user}"],
        hentai: ["🔞 {user} disfruta del hentai", "💕 {user} aprecia el arte", "🌸 Contenido especial para {user}"],
        paizuri: ["🔞 {user} disfruta de la vista", "💕 {user} aprecia el momento", "🌸 Algo especial para {user}"],
        ecchi: ["🔞 {user} disfruta del contenido suave", "💕 {user} aprecia la sugerencia", "🌸 Un momento picante para {user}"],
        ero: ["🔞 {user} disfruta del contenido erótico", "💕 {user} se deleita con la vista", "🌸 Contenido especial para {user}"],
        milf: ["🔞 {user} aprecia la madurez", "💕 {user} disfruta del contenido", "🌸 Algo especial para {user}"],
        oral: ["🔞 {user} disfruta del momento", "💕 {user} recibe atención especial", "🌸 Un momento íntimo para {user}"],
        ass: ["🔞 {user} disfruta de la vista", "💕 {user} aprecia el momento", "🌸 Contenido especial para {user}"],
        uniforms: ["🔞 {user} disfruta del uniforme", "💕 {user} aprecia el atuendo", "🌸 Algo especial para {user}"],
        yuri: ["🔞 {user} disfruta del yuri", "💕 {user} aprecia el amor entre chicas", "🌸 Contenido especial para {user}"],
        yaoi: ["🔞 {user} disfruta del yaoi", "💕 {user} aprecia el amor entre chicos", "🌸 Contenido especial para {user}"],
        bondage: ["🔞 {user} disfruta del contenido atado", "💕 {user} aprecia el arte del shibari", "🌸 Algo especial para {user}"],
        maid: ["🔞 {user} disfruta de la sirvienta", "💕 {user} aprecia el servicio", "🌸 Una maid especial para {user}"],
        bikini: ["🔞 {user} disfruta del traje de baño", "💕 {user} aprecia la vista", "🌸 Algo especial para {user}"],
        lingerie: ["🔞 {user} disfruta de la lencería", "💕 {user} aprecia el atuendo", "🌸 Algo especial para {user}"],
        feet: ["🔞 {user} aprecia los pies", "💕 {user} disfruta del contenido", "🌸 Algo especial para {user}"],
        thighs: ["🔞 {user} disfruta de los muslos", "💕 {user} aprecia la vista", "🌸 Algo especial para {user}"],
        ahegao: ["🔞 {user} disfruta de la expresión", "💕 {user} aprecia la cara de placer", "🌸 Algo especial para {user}"],
        cum: ["🔞 {user} llega al clímax", "💕 {user} disfruta del final", "🌸 Un momento especial para {user}"],
        solo: ["🔞 {user} disfruta del solo", "💕 {user} aprecia el momento íntimo", "🌸 Algo especial para {user}"],
        sex: ["🔞 {user} disfruta del momento", "💕 {user} vive la pasión", "🌸 Un momento íntimo para {user}"],
        anal: ["🔞 {user} disfruta del momento", "💕 {user} vive la experiencia", "🌸 Algo especial para {user}"]
    }
};export class NekoReact {
    constructor(sock, options = {}) {
        this.sock = sock;
        this.priority = options.priority || ['purrbot', 'nekosbest', 'waifupics', 'waifuim', 'nekosfun'];
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

    _getRandomMessage(category, action) {
        const templates = MESSAGE_TEMPLATES[category]?.[action] || MESSAGE_TEMPLATES[category]?.default;
        if (!templates) return null;
        if (Array.isArray(templates)) {
            return templates[Math.floor(Math.random() * templates.length)];
        }
        return templates;
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
                        return { buffer: mp4Buffer, label: config.label || key, key };
                    }
                } else {
                    return { buffer, label: config.label || key, key };
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
            let messageCategory = messageType;
            if (config?.nsfw) {
                messageCategory = 'nsfw';
            }
            let caption;
            if (customText) {
                caption = customText
                    .replace('{user1}', `@${mentionsList[0].split('@')[0]}`)
                    .replace('{user2}', mentionsList[1] ? `@${mentionsList[1].split('@')[0]}` : '');
            } else {
                const template = this._getRandomMessage(messageCategory, key);
                if (template) {
                    caption = template.replace(/{user(\d*)}/g, (match, num) => {
                        const idx = num ? parseInt(num) - 1 : 0;
                        return mentionsList[idx] ? `@${mentionsList[idx].split('@')[0]}` : match;
                    });
                } else {
                    if (messageCategory === 'emotions' || mentionsList.length === 1) {
                        caption = `✨ @${mentionsList[0].split('@')[0]} ${label}`;
                    } else {
                        caption = `✨ @${mentionsList[0].split('@')[0]} le dio un ${label} a @${mentionsList[1].split('@')[0]}`;
                    }
                }
            }
            return await this.sock.sendMessage(m.key.remoteJid, {
                video: buffer,
                mimetype: 'video/mp4',
                gifPlayback: true,
                caption,
                mentions: mentionsList
            }, { quoted: m });
        } catch (error) {
            console.error(`[NekoReact] Fallo en ${action}:`, error.message);
            throw error;
        }
    }
                    }
                                               
