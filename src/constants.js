const ALL = ['purrbot', 'waifupics', 'nekosbest', 'waifuim'];
const BASIC = ['purrbot', 'nekosbest'];
const NSFW_PROVIDERS = ['waifupics', 'waifuim'];

export const ACTIONS_CONFIG = {
    angry: { aliases: ['enojado', 'enojada', 'rage', 'mad'], support: BASIC, label: 'enfado', emoji: '😠' },
    blush: { aliases: ['sonrojarse', 'penita', 'shy', 'avergonzado'], support: ALL, label: 'sonrojo', emoji: '😳' },
    cry: { aliases: ['llorar', 'lloro', 'sad', 'triste', 'llanto'], support: ALL, label: 'llanto', emoji: '😭' },
    dance: { aliases: ['bailar', 'baile', 'dancing'], support: ['nekosbest', 'purrbot'], label: 'baile', emoji: '💃' },
    happy: { aliases: ['feliz', 'alegre', 'joy', 'smile'], support: ALL, label: 'felicidad', emoji: '😊' },
    hug: { aliases: ['abrazar', 'abrazo', 'abracito'], support: ALL, label: 'abrazo', emoji: '🤗' },
    kiss: { aliases: ['muak', 'besar', 'beso', 'kissu'], support: ALL, label: 'beso', emoji: '💋' },
    laugh: { aliases: ['reir', 'risa', 'jaja', 'xd'], support: ['nekosbest'], label: 'risa', emoji: '😂' },
    pat: { aliases: ['acariciar', 'cariño', 'headpat', 'patpat'], support: ALL, label: 'mimo', emoji: '🐾' },
    pout: { aliases: ['puchero', 'moflete', 'enojon'], support: ['nekosbest'], label: 'puchero', emoji: '😤' },
    shrug: { aliases: ['hombros', 'queseio', 'nose'], support: ['nekosbest'], label: 'encogerse', emoji: '🤷' },
    sip: { aliases: ['beber', 'tomar', 'cafecito', 'tea'], support: ['nekosbest'], label: 'sorbo', emoji: '🍵' },
    slap: { aliases: ['bofetada', 'cachetada', 'smack'], support: ALL, label: 'bofetada', emoji: '👋' },
    smile: { aliases: ['sonreir', 'sonrisa', 'grin'], support: ALL, label: 'sonrisa', emoji: '😄' },
    smug: { aliases: ['presumido', 'sobrado', 'listillo'], support: ['waifupics', 'nekosbest'], label: 'presumido', emoji: '😏' },
    think: { aliases: ['pensar', 'reflexionar', 'hm'], support: ['nekosbest'], label: 'pensamiento', emoji: '🤔' },
    wave: { aliases: ['saludar', 'hola', 'adios', 'bye'], support: ALL, label: 'saludo', emoji: '👋' },
    wink: { aliases: ['guiño', 'guino', 'coqueto'], support: ['waifupics', 'nekosbest'], label: 'guiño', emoji: '😉' },
    bite: { aliases: ['morder', 'mordisco', 'nom'], support: ['nekosbest', 'purrbot', 'waifupics'], label: 'mordisco', emoji: '🦷' },
    bonk: { aliases: ['martillo', 'castigo', 'horny'], support: ['waifupics'], label: 'bonk', emoji: '🔨' },
    bully: { aliases: ['acosar', 'molestar', 'troll'], support: ['waifupics', 'nekosbest'], label: 'bullying', emoji: '😈' },
    cringe: { aliases: ['cringear', 'verguenza', 'awkward'], support: ['waifupics'], label: 'cringe', emoji: '😬' },
    cuddle: { aliases: ['acurrucar', 'acurruco', 'snuggle'], support: ALL, label: 'mimo cariñoso', emoji: '🤗' },
    glomp: { aliases: ['abrazo-tackle', 'tackle-hug'], support: ['waifupics'], label: 'abrazo-tacle', emoji: '🏃' },
    handhold: { aliases: ['tomar-mano', 'manito', 'holdhands'], support: ['waifupics'], label: 'tomar mano', emoji: '🤝' },
    highfive: { aliases: ['choca-cinco', 'high5', 'hifive'], support: ['waifupics', 'nekosbest'], label: 'choca esos cinco', emoji: '🖐️' },
    kick: { aliases: ['patear', 'patada'], support: ['waifupics'], label: 'patada', emoji: '🦶' },
    kill: { aliases: ['matar', 'asesinar', 'destroy'], support: ['purrbot', 'waifupics'], label: 'ataque mortal', emoji: '💀' },
    lick: { aliases: ['lamer', 'lametada'], support: ['waifupics'], label: 'lametón', emoji: '👅' },
    poke: { aliases: ['tocar', 'picar', 'toque'], support: ['waifupics'], label: 'toque', emoji: '👆' },
    punch: { aliases: ['golpear', 'puñetazo', 'golpe'], support: ['nekosbest'], label: 'puñetazo', emoji: '👊' },
    shoot: { aliases: ['disparar', 'tiro', 'bang'], support: ['nekosbest'], label: 'disparo', emoji: '🔫' },
    stare: { aliases: ['mirar-fijo', 'observar'], support: ['nekosbest'], label: 'mirada fija', emoji: '👀' },
    tickle: { aliases: ['cosquillas', 'cosquillear', 'tickles'], support: ['nekosbest', 'purrbot'], label: 'ataque de cosquillas', emoji: '🤏' },
    yeet: { aliases: ['lanzar', 'tirar', 'throw'], support: ['waifupics'], label: 'lanzamiento', emoji: '🚀' },
    bored: { aliases: ['aburrido', 'aburrimiento'], support: ['nekosbest'], label: 'aburrimiento', emoji: '😴' },
    facepalm: { aliases: ['mano-cara', 'disappointment', 'fp'], support: ['nekosbest'], label: 'mano en cara', emoji: '🤦' },
    feed: { aliases: ['alimentar', 'comida', 'dar-de-comer'], support: ['nekosbest'], label: 'alimentar', emoji: '🍽️' },
    hold: { aliases: ['sostener', 'agarrar'], support: ['nekosbest'], label: 'sostener', emoji: '✋' },
    nod: { aliases: ['asentir', 'si', 'yes'], support: ['nekosbest'], label: 'asentimiento', emoji: '↕️' },
    nom: { aliases: ['comer', 'ñam', 'munch'], support: ['waifupics'], label: 'comiendo', emoji: '😋' },
    peck: { aliases: ['besito-rapido', 'picotear'], support: ['nekosbest'], label: 'besito rápido', emoji: '💨' },
    yawn: { aliases: ['bostezar', 'bostezo', 'sleepy'], support: ['nekosbest'], label: 'bostezo', emoji: '🥱' },
    waifu_nsfw: { aliases: ['waifunsfw', 'waifu-lewd'], support: NSFW_PROVIDERS, nsfw: true, label: 'waifu (NSFW)', emoji: '🔞' },
    neko_nsfw: { aliases: ['nekonsfw', 'neko-lewd'], support: NSFW_PROVIDERS, nsfw: true, label: 'neko (NSFW)', emoji: '🔞' },
    trap: { aliases: ['trapito', 'femboy'], support: ['waifupics'], nsfw: true, label: 'trap', emoji: '🔞' },
    blowjob: { aliases: ['bj', 'chupar', 'suck'], support: NSFW_PROVIDERS, nsfw: true, label: 'blowjob', emoji: '🔞' },
    hentai: { aliases: ['h', 'lewd', 'nsfw'], support: ['waifuim'], nsfw: true, label: 'hentai', emoji: '🔞' },
    paizuri: { aliases: ['tetas', 'oppai', 'boobs'], support: ['waifuim'], nsfw: true, label: 'paizuri', emoji: '🔞' },
    ecchi: { aliases: ['pervertido', 'suggestive'], support: ['waifuim'], nsfw: true, label: 'ecchi', emoji: '🔞' },
    ero: { aliases: ['erotico', 'erotic'], support: ['waifuim'], nsfw: true, label: 'ero', emoji: '🔞' },
    milf: { aliases: ['mature', 'onee-san'], support: ['waifuim'], nsfw: true, label: 'milf', emoji: '🔞' },
    oral: { aliases: ['oral-sex'], support: ['waifuim'], nsfw: true, label: 'oral', emoji: '🔞' },
    ass: { aliases: ['culo', 'booty'], support: ['waifuim'], nsfw: true, label: 'ass', emoji: '🔞' },
    uniforms: { aliases: ['uniforme', 'cosplay'], support: ['waifuim'], nsfw: true, label: 'uniforms', emoji: '🔞' }
};

export const COMMANDS = Object.entries(ACTIONS_CONFIG).reduce((acc, [key, val]) => {
    acc.push(key, ...val.aliases);
    return acc;
}, []);

export const API_ENDPOINTS = {
    nekosbest: (action) => `https://nekos.best/api/v2/${action}`,
    waifupics: (action) => {
        const type = ACTIONS_CONFIG[action]?.nsfw ? 'nsfw' : 'sfw';
        const tagsMap = {
            angry: 'bully', happy: 'smile', laugh: 'smile', pout: 'cringe', 
            shrug: 'cringe', sip: 'smile', think: 'smug', punch: 'kick', 
            shoot: 'kill', stare: 'wave', bored: 'smile', facepalm: 'cringe', 
            feed: 'nom', hold: 'handhold', nod: 'wave', peck: 'kiss', 
            yawn: 'sleep', waifu_nsfw: 'waifu', neko_nsfw: 'neko', trap: 'trap', 
            blowjob: 'blowjob', ecchi: 'waifu', hentai: 'waifu'
        };
        const tag = tagsMap[action] || action.replace('_nsfw', '');
        return `https://api.waifu.pics/${type}/${tag}`;
    },
    purrbot: (action) => {
        const valid = ['angry', 'bite', 'blush', 'comfy', 'cry', 'cuddle', 'dance', 'eevee', 'fluff', 'holo', 'hug', 'icon', 'kiss', 'kitsune', 'lick', 'neko', 'okami', 'pat', 'poke', 'pout', 'purr', 'slap', 'smile', 'tail', 'tickle'];
        return `https://api.purrbot.site/v2/img/sfw/${valid.includes(action) ? action : 'neko'}/gif`;
    },
    waifuim: (action) => {
        const isNsfw = ACTIONS_CONFIG[action]?.nsfw ? 'true' : 'false';
        const tagsMap = { ecchi: 'ero', hentai: 'hentai', paizuri: 'paizuri', ero: 'ero', milf: 'milf', oral: 'oral', ass: 'ass', uniforms: 'uniforms', blowjob: 'oral', waifu_nsfw: 'waifu', neko_nsfw: 'neko' };
        const tag = tagsMap[action] || action.replace('_nsfw', '');
        return `https://api.waifu.im/search?included_tags=${tag}&is_nsfw=${isNsfw}`;
    }
};

export const EXTRACTORS = {
    nekosbest: (d) => d.results?.[0]?.url,
    waifuim: (d) => d.images?.[0]?.url,
    purrbot: (d) => d.link,
    waifupics: (d) => d.url,
    default: (d) => d.url || d.link || d.image
};

export function getRandomProvider(action) {
    const config = ACTIONS_CONFIG[action];
    return config ? config.support[Math.floor(Math.random() * config.support.length)] : null;
}

export function isNsfw(action) {
    return ACTIONS_CONFIG[action]?.nsfw || false;
}

export function getActionInfo(action) {
    return ACTIONS_CONFIG[action] || null;
}

export function listActions() {
    return Object.entries(ACTIONS_CONFIG).map(([key, config]) => ({
        name: key,
        label: config.label,
        emoji: config.emoji,
        nsfw: config.nsfw || false,
        aliases: config.aliases,
        providers: config.support
    }));
}

export default { ACTIONS_CONFIG, COMMANDS, API_ENDPOINTS, EXTRACTORS, getRandomProvider, isNsfw, getActionInfo, listActions };
    
