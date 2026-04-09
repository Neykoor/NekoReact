const ALL = ['purrbot', 'waifupics', 'nekosbest', 'waifuim', 'nekosapi', 'nekoslife'];
const BASIC = ['purrbot', 'nekosbest'];
const NSFW_PROVIDERS = ['waifupics', 'waifuim', 'nekosapi'];

export const ACTIONS_CONFIG = {
    angry: { aliases: ['enojado', 'enojada'], support: BASIC, label: 'enfado' },
    hug: { aliases: ['abrazar', 'abrazo'], support: ALL, label: 'abrazo' },
    kiss: { aliases: ['muak', 'besar'], support: ALL, label: 'beso' },
    slap: { aliases: ['bofetada', 'cachetada'], support: ALL, label: 'bofetada' },
    pat: { aliases: ['acariciar', 'cariño'], support: ALL, label: 'mimo' },
    kill: { aliases: ['matar'], support: ['purrbot', 'waifupics'], label: 'ataque mortal' },
    bite: { aliases: ['morder'], support: ['nekosbest', 'purrbot', 'waifupics'], label: 'mordisco' },
    blush: { aliases: ['sonrojarse', 'penita'], support: ALL, label: 'sonrojo' },
    wave: { aliases: ['saludar', 'hola'], support: ALL, label: 'saludo' },
    smile: { aliases: ['sonreir', 'sonrisa'], support: ALL, label: 'sonrisa' },
    cry: { aliases: ['llorar', 'lloro'], support: ALL, label: 'llanto' },
    dance: { aliases: ['bailar', 'baile'], support: ['nekosbest', 'purrbot'], label: 'baile' },
    cuddle: { aliases: ['acurrucar'], support: ALL, label: 'mimo' },
    tickle: { aliases: ['cosquillas'], support: ['nekosbest', 'purrbot', 'nekoslife'], label: 'ataque de cosquillas' },
    waifu_nsfw: { aliases: ['waifunsfw'], support: NSFW_PROVIDERS, nsfw: true, label: 'waifu (NSFW)' },
    neko_nsfw: { aliases: ['nekonsfw'], support: NSFW_PROVIDERS, nsfw: true, label: 'neko (NSFW)' },
    trap: { aliases: ['trapito'], support: ['waifupics'], nsfw: true, label: 'trap' },
    blowjob: { aliases: ['bj', 'chupar'], support: NSFW_PROVIDERS, nsfw: true, label: 'blowjob' },
    hentai: { aliases: ['h'], support: ['waifuim', 'nekosapi'], nsfw: true, label: 'hentai' },
    paizuri: { aliases: ['tetas', 'oppai'], support: ['waifuim'], nsfw: true, label: 'paizuri' },
    ecchi: { aliases: ['pervertido'], support: ['waifuim', 'nekosapi'], nsfw: true, label: 'ecchi' },
    ero: { aliases: ['erotico'], support: ['waifuim'], nsfw: true, label: 'ero' }
};

export const COMMANDS = Object.entries(ACTIONS_CONFIG).reduce((acc, [key, val]) => {
    acc.push(key, ...val.aliases);
    return acc;
}, []);

export const API_ENDPOINTS = {
    nekosbest: (a) => `https://nekos.best/api/v2/${a}`,
    waifupics: (a) => {
        const type = ACTIONS_CONFIG[a]?.nsfw ? 'nsfw' : 'sfw';
        const tag = a.replace('_nsfw', '');
        return `https://api.waifu.pics/${type}/${tag}`;
    },
    nekoslife: (a) => `https://nekos.life/api/v2/img/${a}`,
    purrbot: (a) => `https://purrbot.site/api/img/sfw/${a}/gif`,
    waifuim: (a) => {
        const isNsfw = ACTIONS_CONFIG[a]?.nsfw ? 'true' : 'false';
        const tag = a.replace('_nsfw', '');
        return `https://api.waifu.im/search?included_tags=${tag}&is_nsfw=${isNsfw}`;
    },
    nekosapi: (a) => {
        const rating = ACTIONS_CONFIG[a]?.nsfw ? 'explicit' : 'safe';
        const tag = a.replace('_nsfw', '');
        return `https://api.nekosapi.com/v3/images/random?tag=${tag}&rating=${rating}`;
    }
};

export const EXTRACTORS = {
    nekosbest: (d) => d.results?.[0]?.url,
    waifuim: (d) => d.images?.[0]?.url,
    purrbot: (d) => d.link,
    nekosapi: (d) => d.items?.[0]?.image_url,
    default: (d) => d.url || d.link
};
