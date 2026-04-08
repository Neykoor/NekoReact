export const ACTIONS = [
    'hug', 'kiss', 'slap', 'pat', 'cry', 'cuddle', 
    'bully', 'smug', 'bonk', 'yeet', 'blush', 'smile',
    'handhold', 'nom', 'bite', 'glomp', 'kill', 'happy',
    'wink', 'poke', 'dance', 'cringe'
];

export const API_ENDPOINTS = {
    nekosbest: (a) => `https://nekos.best/api/v2/${a}`,
    waifupics: (a) => `https://api.waifu.pics/sfw/${a}`,
    nekoslife: (a) => `https://nekos.life/api/v2/img/${a}`,
    purrbot: (a) => `https://purrbot.site/api/img/sfw/${a}/gif`,
    waifuim: (a) => `https://api.waifu.im/search?included_tags=${a}`,
    nekosapi: (a) => `https://nekosapi.com/api/v2/images/${a}`
};

export const EXTRACTORS = {
    nekosbest: (d) => d.results?.[0]?.url,
    waifuim: (d) => d.images?.[0]?.url,
    purrbot: (d) => d.link,
    nekosapi: (d) => d.data?.url,
    default: (d) => d.url 
};
