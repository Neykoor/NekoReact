export const GIF_PROVIDERS = [
    'nekosbest',
    'waifupics',
    'otakugifs',
    'kyoko',
    'hmtai',
    'animereactions',
    'anyanime',
    'catboy'
];

const ALL = ['nekosbest', 'waifupics', 'otakugifs', 'kyoko', 'hmtai'];
const OTAKUGIFS_ONLY = ['otakugifs'];
const HMTAI_ONLY = ['hmtai'];
const ANIMEREACTIONS_ONLY = ['animereactions'];
const KYOKO_OTAKUGIFS = ['kyoko', 'otakugifs'];

export const ACTIONS_CONFIG = {
    angry: { aliases: ['enojado', 'rage', 'furioso'], support: ['nekosbest', 'otakugifs', 'kyoko', 'hmtai', 'animereactions'], label: 'enfado', emoji: '😠' },
    blush: { aliases: ['sonrojarse'], support: ['nekosbest', 'waifupics', 'otakugifs', 'kyoko', 'hmtai'], label: 'sonrojo', emoji: '😳' },
    bored: { aliases: ['aburrido', 'aburrimiento'], support: ['nekosbest', 'otakugifs', 'kyoko'], label: 'aburrimiento', emoji: '😴' },
    cry: { aliases: ['llorar', 'triste', 'llanto'], support: ['nekosbest', 'waifupics', 'otakugifs', 'kyoko', 'hmtai'], label: 'llanto', emoji: '😭' },
    happy: { aliases: ['feliz', 'alegre', 'joy', 'contento'], support: ['nekosbest', 'waifupics', 'otakugifs', 'kyoko', 'hmtai', 'animereactions'], label: 'felicidad', emoji: '😊' },
    laugh: { aliases: ['reir', 'risa', 'jaja', 'xd'], support: ['nekosbest', 'otakugifs', 'kyoko', 'hmtai'], label: 'risa', emoji: '😂' },
    sad: { aliases: ['tristeza'], support: ['otakugifs', 'animereactions'], label: 'tristeza', emoji: '😢' },
    smile: { aliases: ['sonreir', 'sonrisa', 'grin'], support: ['nekosbest', 'waifupics', 'otakugifs', 'kyoko', 'hmtai'], label: 'sonrisa', emoji: '😄' },
    smug: { aliases: ['presumido', 'sobrado', 'listillo'], support: ['nekosbest', 'waifupics', 'otakugifs', 'kyoko', 'hmtai', 'animereactions'], label: 'presumido', emoji: '😏' },
    surprised: { aliases: ['sorpresa', 'shock', 'omg'], support: ['otakugifs', 'animereactions'], label: 'sorpresa', emoji: '😲' },
    think: { aliases: ['pensar', 'reflexionar', 'hm'], support: ['nekosbest', 'otakugifs', 'kyoko', 'animereactions'], label: 'pensamiento', emoji: '🤔' },
    confused: { aliases: ['confundido', 'what', 'no-entiendo'], support: ['otakugifs', 'animereactions'], label: 'confusión', emoji: '😕' },
    sleep: { aliases: ['dormir', 'sueño'], support: ['nekosbest', 'otakugifs', 'kyoko', 'hmtai'], label: 'sueño', emoji: '😴' },
    stare: { aliases: ['mirar-fijamente', 'observar'], support: ['nekosbest', 'otakugifs', 'kyoko'], label: 'mirada-fija', emoji: '👀' },
    worried: { aliases: ['preocupado', 'ansioso'], support: ['animereactions'], label: 'preocupación', emoji: '😰' },
    hug: { aliases: ['abrazar', 'abrazo', 'abracito'], support: ALL, label: 'abrazo', emoji: '🤗' },
    kiss: { aliases: ['besar', 'beso', 'muak', 'kissu'], support: ALL, label: 'beso', emoji: '💋' },
    pat: { aliases: ['acariciar', 'headpat', 'cariño'], support: ALL, label: 'mimo', emoji: '🐾' },
    cuddle: { aliases: ['acurrucar', 'snuggle', 'acurruco'], support: ['nekosbest', 'waifupics', 'otakugifs', 'kyoko', 'hmtai'], label: 'acurruco', emoji: '🤗' },
    wave: { aliases: ['saludar', 'hola', 'adios', 'bye'], support: ['nekosbest', 'waifupics', 'otakugifs', 'kyoko', 'hmtai'], label: 'saludo', emoji: '👋' },
    wink: { aliases: ['guiño', 'coqueto', 'pícaro'], support: ['nekosbest', 'waifupics', 'otakugifs', 'kyoko', 'hmtai'], label: 'guiño', emoji: '😉' },
    bite: { aliases: ['morder', 'mordisco', 'nom'], support: ['nekosbest', 'waifupics', 'otakugifs', 'hmtai'], label: 'mordisco', emoji: '🦷' },
    lick: { aliases: ['lamer', 'lametada'], support: ['waifupics', 'otakugifs', 'hmtai'], label: 'lamida', emoji: '👅' },
    slap: { aliases: ['bofetada', 'cachetada'], support: ['nekosbest', 'waifupics', 'otakugifs', 'kyoko', 'hmtai'], label: 'bofetada', emoji: '👋' },
    punch: { aliases: ['golpear', 'puñetazo', 'golpe'], support: ['nekosbest', 'otakugifs', 'kyoko', 'hmtai'], label: 'puñetazo', emoji: '👊' },
    kick: { aliases: ['patear', 'patada'], support: ['nekosbest', 'waifupics', 'otakugifs', 'kyoko', 'hmtai'], label: 'patada', emoji: '🦶' },
    kill: { aliases: ['matar', 'asesinar', 'destroy'], support: ['waifupics', 'otakugifs', 'kyoko', 'hmtai'], label: 'ataque-mortal', emoji: '💀' },
    bonk: { aliases: ['martillo', 'castigo', 'horny-jail'], support: ['waifupics', 'otakugifs', 'hmtai'], label: 'bonk', emoji: '🔨' },
    bully: { aliases: ['acosar', 'molestar', 'troll'], support: ['nekosbest', 'waifupics', 'otakugifs', 'hmtai'], label: 'bullying', emoji: '😈' },
    poke: { aliases: ['tocar', 'picar'], support: ['nekosbest', 'waifupics', 'otakugifs', 'kyoko', 'hmtai'], label: 'toque', emoji: '👉' },
    tickle: { aliases: ['hacer-cosquillas', 'cosquillas'], support: ['nekosbest', 'otakugifs', 'hmtai'], label: 'cosquillas', emoji: '🤭' },
    feed: { aliases: ['dar-de-comer', 'comida', 'alimentar'], support: ['nekosbest', 'otakugifs', 'hmtai'], label: 'alimentar', emoji: '🍜' },
    dance: { aliases: ['bailar', 'baile'], support: ['nekosbest', 'waifupics', 'otakugifs', 'kyoko', 'hmtai', 'animereactions'], label: 'baile', emoji: '💃' },
    yeet: { aliases: ['lanzar', 'tirar', 'expulsar'], support: ['nekosbest', 'waifupics', 'otakugifs', 'hmtai'], label: 'lanzamiento', emoji: '🚀' },
    highfive: { aliases: ['chocar-cinco', 'high5'], support: ['nekosbest', 'waifupics', 'otakugifs', 'kyoko'], label: 'choca-cinco', emoji: '🙌' }
};

export const EXCLUSIVE_ACTIONS = {
    brofist: { aliases: ['bro-fist', 'puño-hermano'], support: OTAKUGIFS_ONLY, label: 'bro-fist', emoji: '👊' },
    celebrate: { aliases: ['celebrar', 'fiesta'], support: OTAKUGIFS_ONLY, label: 'celebración', emoji: '🎉' },
    cheer: { aliases: ['animar', 'aplaudir'], support: OTAKUGIFS_ONLY, label: 'aplauso', emoji: '📣' },
    clap: { aliases: ['aplauso', 'palmas'], support: OTAKUGIFS_ONLY, label: 'aplaudir', emoji: '👏' },
    cool: { aliases: ['fresco', 'genial', 'swag'], support: OTAKUGIFS_ONLY, label: 'cool', emoji: '😎' },
    huh: { aliases: ['que', 'eh', 'como'], support: OTAKUGIFS_ONLY, label: 'confundido', emoji: '🤨' },
    love: { aliases: ['amor', 'corazon', 'te-amo'], support: OTAKUGIFS_ONLY, label: 'amor', emoji: '❤️' },
    mad: { aliases: ['enojado-max'], support: OTAKUGIFS_ONLY, label: 'furioso', emoji: '😤' },
    nervous: { aliases: ['nervioso', 'ansiedad'], support: OTAKUGIFS_ONLY, label: 'nerviosismo', emoji: '😰' },
    nosebleed: { aliases: ['sangre-nariz', 'excitado'], support: ['otakugifs', 'hmtai'], label: 'sangrado-nasal', emoji: '🩸' },
    nuzzle: { aliases: ['acariciar-con-nariz', 'frotar'], support: OTAKUGIFS_ONLY, label: 'frotar-nariz', emoji: '🐱' },
    nyah: { aliases: ['nya', 'miau'], support: OTAKUGIFS_ONLY, label: 'nya', emoji: '😺' },
    peek: { aliases: ['asomar', 'mirar-escondido'], support: OTAKUGIFS_ONLY, label: 'asomarse', emoji: '🫣' },
    pinch: { aliases: ['pellizcar', 'pellizco'], support: OTAKUGIFS_ONLY, label: 'pellizco', emoji: '🤏' },
    run: { aliases: ['correr', 'huir'], support: ['otakugifs', 'kyoko'], label: 'correr', emoji: '🏃' },
    scared: { aliases: ['asustado', 'miedo', 'terror'], support: OTAKUGIFS_ONLY, label: 'miedo', emoji: '😱' },
    shout: { aliases: ['gritar', 'grito'], support: OTAKUGIFS_ONLY, label: 'grito', emoji: '📢' },
    shy: { aliases: ['timido', 'pena'], support: OTAKUGIFS_ONLY, label: 'timidez', emoji: '🙈' },
    sigh: { aliases: ['suspirar', 'suspiro'], support: OTAKUGIFS_ONLY, label: 'suspiro', emoji: '😮‍💨' },
    sip: { aliases: ['sorber', 'tomar'], support: OTAKUGIFS_ONLY, label: 'sorber', emoji: '🥤' },
    slowclap: { aliases: ['aplauso-lento', 'sarcasmo'], support: OTAKUGIFS_ONLY, label: 'aplauso-lento', emoji: '👏' },
    smack: { aliases: ['golpe-fuerte', 'cachetada-fuerte'], support: OTAKUGIFS_ONLY, label: 'golpe-fuerte', emoji: '💥' },
    sneeze: { aliases: ['estornudar', 'achu'], support: OTAKUGIFS_ONLY, label: 'estornudo', emoji: '🤧' },
    sorry: { aliases: ['perdon', 'lo-siento', 'disculpa'], support: OTAKUGIFS_ONLY, label: 'disculpa', emoji: '🙏' },
    stop: { aliases: ['detener', 'alto', 'no-mas'], support: OTAKUGIFS_ONLY, label: 'detener', emoji: '✋' },
    sweat: { aliases: ['sudar'], support: OTAKUGIFS_ONLY, label: 'sudor', emoji: '💦' },
    tired: { aliases: ['cansado', 'agotado'], support: OTAKUGIFS_ONLY, label: 'cansancio', emoji: '😫' },
    woah: { aliases: ['wow', 'increible', 'guau'], support: OTAKUGIFS_ONLY, label: 'asombro', emoji: '🤯' },
    yawn: { aliases: ['bostezar', 'bostezo'], support: OTAKUGIFS_ONLY, label: 'bostezo', emoji: '🥱' },
    yay: { aliases: ['hurra', 'victoria'], support: OTAKUGIFS_ONLY, label: 'celebración', emoji: '🙌' },
    yes: { aliases: ['si', 'correcto', 'aceptar'], support: OTAKUGIFS_ONLY, label: 'afirmativo', emoji: '👍' },
    no: { aliases: ['no', 'negar', 'rechazar'], support: OTAKUGIFS_ONLY, label: 'negativo', emoji: '👎' },
    tea: { aliases: ['te', 'tomar-te'], support: HMTAI_ONLY, label: 'té', emoji: '🍵' },
    glomp: { aliases: ['abrazo-tackle', 'abrazo-fuerte'], support: HMTAI_ONLY, label: 'tackle-abrazo', emoji: '🤗' },
    hold: { aliases: ['sostener', 'agarrar'], support: HMTAI_ONLY, label: 'sostener', emoji: '🤲' },
    throw: { aliases: ['lanzar-objeto', 'arrojar'], support: HMTAI_ONLY, label: 'lanzar', emoji: '🎯' },
    boop: { aliases: ['tocar-nariz'], support: HMTAI_ONLY, label: 'boop', emoji: '👉👃' },
    like: { aliases: ['me-gusta', 'aprobar'], support: HMTAI_ONLY, label: 'me-gusta', emoji: '👍' },
    threaten: { aliases: ['amenazar', 'intimidar'], support: HMTAI_ONLY, label: 'amenaza', emoji: '🔪' },
    depression: { aliases: ['depresion', 'deprimido'], support: HMTAI_ONLY, label: 'depresión', emoji: '😔' },
    calm: { aliases: ['calmarse', 'tranquilo', 'calma'], support: ANIMEREACTIONS_ONLY, label: 'calma', emoji: '😌' },
    embarrassed: { aliases: ['avergonzado', 'turbado'], support: ANIMEREACTIONS_ONLY, label: 'verguenza', emoji: '😳' },
    dumb: { aliases: ['tonto', 'idiota', 'estupido'], support: ANIMEREACTIONS_ONLY, label: 'tonto', emoji: '🤪' },
    lunch: { aliases: ['almuerzo', 'hora-de-comer'], support: ANIMEREACTIONS_ONLY, label: 'almuerzo', emoji: '🍱' },
    exercise: { aliases: ['ejercicio', 'calentamiento', 'gimnasio'], support: ANIMEREACTIONS_ONLY, label: 'ejercicio', emoji: '🏋️' },
    misc: { aliases: ['varios', 'miscelaneo', 'random'], support: ANIMEREACTIONS_ONLY, label: 'varios', emoji: '🎲' },
    disgusted: { aliases: ['disgustado', 'asco', 'ugh'], support: ['kyoko'], label: 'asco', emoji: '🤢' },
    eat: { aliases: ['comer', 'ñam', 'masticar'], support: ['kyoko', 'otakugifs'], label: 'comer', emoji: '🍽️' },
    facepalm: { aliases: ['disappointed', 'dios-mio'], support: ['nekosbest', 'kyoko', 'otakugifs'], label: 'facepalm', emoji: '🤦' },
    pout: { aliases: ['puchero', 'mofarse', 'besito-falso'], support: ['nekosbest', 'otakugifs', 'kyoko', 'hmtai'], label: 'puchero', emoji: '😡' },
    thumbsup: { aliases: ['pulgar-arriba', 'ok', 'bien'], support: ['nekosbest', 'otakugifs', 'kyoko'], label: 'aprobacion', emoji: '👍' },
    shrug: { aliases: ['no-se', 'quien-sabe', 'hombreras'], support: ['nekosbest', 'otakugifs'], label: 'indiferencia', emoji: '🤷' },
    shoot: { aliases: ['disparar', 'tiro', 'pistola'], support: ['nekosbest'], label: 'disparo', emoji: '🔫' },
    baka: { aliases: ['insulto-baka', 'menso'], support: ['nekosbest', 'hmtai'], label: 'insulto', emoji: '🐄' }
};

export const ACTIONS_CONFIG_FINAL = {
    ...ACTIONS_CONFIG,
    ...EXCLUSIVE_ACTIONS
};

export const API_ENDPOINTS = {
    nekosbest: (action) => `https://nekos.best/api/v2/${action}`,
    waifupics: (action) => {
        const map = {
            'angry': 'bully', 'laugh': 'smile', 'punch': 'slap',
            'yeet': 'yeet', 'shrug': 'shrug', 'baka': 'baka'
        };
        return `https://api.waifu.pics/sfw/${map[action] || action}`;
    },
    otakugifs: (action) => `https://api.otakugifs.xyz/gif?reaction=${action}&format=gif`,
    kyoko: (action) => `https://kyoko.rei.my.id/api/v1/image.php?type=${action}`,
    hmtai: (action) => `https://hmtai.hatsunia.cfd/sfw/${action}`,
    animereactions: (action) => `https://anime-reactions.uzairashraf.dev/api/reactions/random?category=${action}`,
    anyanime: () => `https://anyanime-api.kurizu.repl.co/`,
    catboy: () => `https://api.catboys.com/img`
};

export const EXTRACTORS = {
    nekosbest: (d) => d.results?.[0]?.url,
    waifupics: (d) => d.url,
    otakugifs: (d) => d.url,
    kyoko: (d) => d.url,
    hmtai: (d) => d.url,
    animereactions: (d) => d.reaction?.url || d.url,
    anyanime: (d) => d.gif || d.url,
    catboy: (d) => d.url,
    default: (d) => d.url || d.results?.[0]?.url || d.reaction?.url || d.gif
};

export const COMMANDS = Object.entries(ACTIONS_CONFIG_FINAL).reduce((acc, [key, val]) => {
    acc.push(key, ...val.aliases);
    return acc;
}, []);

export function getRandomProvider(action) {
    const config = ACTIONS_CONFIG_FINAL[action];
    if (!config?.support?.length) return null;
    return config.support[Math.floor(Math.random() * config.support.length)];
}

export function getActionInfo(action) {
    return ACTIONS_CONFIG_FINAL[action] || null;
}

export function listActions() {
    return Object.entries(ACTIONS_CONFIG_FINAL).map(([key, config]) => ({
        name: key,
        label: config.label,
        emoji: config.emoji,
        aliases: config.aliases,
        providers: config.support,
        providerCount: config.support.length
    }));
}

export default {
    ACTIONS_CONFIG: ACTIONS_CONFIG_FINAL,
    COMMANDS,
    API_ENDPOINTS,
    EXTRACTORS,
    getRandomProvider,
    getActionInfo,
    listActions
};
        
