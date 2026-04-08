const ALL = ['nekosbest', 'waifupics', 'nekoslife', 'purrbot', 'waifuim', 'nekosapi'];
const BASIC = ['nekosbest', 'purrbot'];
const NSFW_PROVIDERS = ['waifupics', 'waifuim', 'nekosapi'];

export const ACTIONS_CONFIG = {
    angry: { aliases: ['enojado', 'enojada'], support: BASIC },
    hug: { aliases: ['abrazar', 'abrazo'], support: ALL },
    kiss: { aliases: ['muak', 'besar'], support: ALL },
    slap: { aliases: ['bofetada', 'cachetada'], support: ALL },
    pat: { aliases: ['acariciar', 'cariño'], support: ALL },
    kill: { aliases: ['matar'], support: ['purrbot', 'waifupics'] },
    bite: { aliases: ['morder'], support: ['nekosbest', 'purrbot', 'waifupics'] },
    blush: { aliases: ['sonrojarse', 'penita'], support: ALL },
    wave: { aliases: ['saludar', 'hola'], support: ALL },
    smile: { aliases: ['sonreir', 'sonrisa'], support: ALL },
    cry: { aliases: ['llorar', 'lloro'], support: ALL },
    dance: { aliases: ['bailar', 'baile'], support: ['nekosbest', 'purrbot'] },
    cuddle: { aliases: ['acurrucar'], support: ALL },
    tickle: { aliases: ['cosquillas'], support: ['nekosbest', 'purrbot', 'nekoslife'] },
    waifu_nsfw: { aliases: ['waifunsfw'], support: NSFW_PROVIDERS, nsfw: true, label: 'waifu (NSFW)' },
    neko_nsfw: { aliases: ['nekonsfw'], support: NSFW_PROVIDERS, nsfw: true, label: 'neko (NSFW)' },
    trap: { aliases: ['trapito'], support: ['waifupics'], nsfw: true },
    blowjob: { aliases: ['bj', 'chupar'], support: NSFW_PROVIDERS, nsfw: true },
    hentai: { aliases: ['h'], support: ['waifuim', 'nekosapi'], nsfw: true },
    paizuri: { aliases: ['tetas', 'oppai'], support: ['waifuim'], nsfw: true },
    ecchi: { aliases: ['pervertido'], support: ['waifuim', 'nekosapi'], nsfw: true },
    ero: { aliases: ['erotico'], support: ['waifuim'], nsfw: true }
};

export const COMMANDS = Object.entries(ACTIONS_CONFIG).reduce((acc, [key, val]) => {
    acc.push(key, ...val.aliases);
    return acc;
}, []);

export const API_ENDPOINTS = {
    nekosbest: (a) => `https://nekos.best/api/v2/${a}`,
    waifupics: (a) => {
        const type = ACTIONS_CONFIG[a]?.nsfw ? 'nsfw' : 'sfw';
        const tag = a === 'waifu_nsfw' ? 'waifu' : a === 'neko_nsfw' ? 'neko' : a;
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
    nekosapi: (d) => d.data?.attributes?.file || d.items?.[0]?.image_url,
    default: (d) => d.url || d.link
};
