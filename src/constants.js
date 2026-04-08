const ALL = ['nekosbest', 'waifupics', 'nekoslife', 'purrbot', 'waifuim', 'nekosapi'];
const BASIC = ['nekosbest', 'purrbot'];

export const ACTIONS_CONFIG = {
    angry: { aliases: ['enojado', 'enojada', 'enfadado'], support: BASIC },
    bleh: { aliases: [], support: BASIC },
    bored: { aliases: ['aburrido', 'aburrida'], support: BASIC },
    clap: { aliases: ['aplaudir'], support: BASIC },
    coffee: { aliases: ['cafe'], support: BASIC },
    dramatic: { aliases: ['drama', 'dramatico'], support: BASIC },
    drunk: { aliases: ['borracho'], support: BASIC },
    cold: { aliases: ['frio'], support: BASIC },
    impregnate: { aliases: ['preg', 'preñar', 'embarazar'], support: BASIC },
    kisscheek: { aliases: ['besito', 'cachete'], support: BASIC },
    laugh: { aliases: ['reir'], support: BASIC },
    love: { aliases: ['amor'], support: BASIC },
    pout: { aliases: ['pucheros'], support: BASIC },
    punch: { aliases: ['golpear', 'puñetazo'], support: BASIC },
    run: { aliases: ['correr'], support: BASIC },
    sad: { aliases: ['triste'], support: BASIC },
    scared: { aliases: ['asustado'], support: BASIC },
    seduce: { aliases: ['seducir'], support: BASIC },
    shy: { aliases: ['timido', 'timida'], support: BASIC },
    sleep: { aliases: ['dormir'], support: BASIC },
    smoke: { aliases: ['fumar'], support: BASIC },
    spit: { aliases: ['escupir'], support: BASIC },
    step: { aliases: ['pisar'], support: BASIC },
    think: { aliases: ['pensar'], support: BASIC },
    thinkhard: { aliases: ['reflexionar'], support: BASIC },
    walk: { aliases: ['caminar'], support: BASIC },
    hug: { aliases: ['abrazar', 'abrazo'], support: ALL },
    kill: { aliases: ['matar'], support: ['purrbot', 'waifupics'] },
    eat: { aliases: ['nom', 'comer'], support: ['nekosbest', 'purrbot', 'waifupics'] },
    kiss: { aliases: ['muak', 'besar'], support: ALL },
    wink: { aliases: ['guiñar', 'guiño'], support: ALL },
    pat: { aliases: ['acariciar', 'cariño'], support: ALL },
    happy: { aliases: ['feliz', 'alegre'], support: ['waifupics', 'nekosapi'] },
    bully: { aliases: ['molestar'], support: ['waifupics'] },
    bite: { aliases: ['morder'], support: ['nekosbest', 'purrbot', 'waifupics'] },
    blush: { aliases: ['sonrojarse', 'penita'], support: ALL },
    wave: { aliases: ['saludar', 'hola'], support: ALL },
    bath: { aliases: ['bañarse', 'ducha'], support: BASIC },
    smug: { aliases: ['presumir', 'altanero'], support: ['waifupics', 'nekosapi'] },
    smile: { aliases: ['sonreir', 'sonrisa'], support: ALL },
    highfive: { aliases: ['choca', 'highfive'], support: ['waifupics'] },
    handhold: { aliases: ['tomar', 'mano'], support: ['nekosbest', 'waifupics'] },
    cringe: { aliases: ['mueca', 'grima'], support: BASIC },
    bonk: { aliases: ['golpe', 'tabla'], support: ['waifupics'] },
    cry: { aliases: ['llorar', 'lloro'], support: ALL },
    lick: { aliases: ['lamer'], support: BASIC },
    slap: { aliases: ['bofetada', 'cachetada'], support: ALL },
    dance: { aliases: ['bailar', 'baile'], support: ['nekosbest', 'purrbot'] },
    cuddle: { aliases: ['acurrucar'], support: ALL },
    sing: { aliases: ['cantar'], support: BASIC },
    tickle: { aliases: ['cosquillas'], support: ['nekosbest', 'purrbot', 'nekoslife'] },
    scream: { aliases: ['gritar'], support: BASIC },
    push: { aliases: ['empujar'], support: BASIC },
    nope: { aliases: ['no'], support: BASIC },
    jump: { aliases: ['saltar'], support: BASIC },
    heat: { aliases: ['calor'], support: BASIC },
    gaming: { aliases: ['jugar'], support: BASIC },
    draw: { aliases: ['dibujar'], support: BASIC },
    call: { aliases: ['llamar'], support: BASIC },
    snuggle: { aliases: ['acurrucarse'], support: BASIC },
    blowkiss: { aliases: ['besitoaire'], support: BASIC },
    trip: { aliases: ['tropezar'], support: BASIC },
    stare: { aliases: ['mirar'], support: BASIC },
    peek: { aliases: ['asomarse'], support: BASIC },
    sniff: { aliases: ['oler'], support: BASIC },
    curious: { aliases: ['curioso', 'curiosa'], support: BASIC },
    comfort: { aliases: ['consolar'], support: BASIC }
};

export const COMMANDS = Object.entries(ACTIONS_CONFIG).reduce((acc, [key, val]) => {
    acc.push(key, ...val.aliases);
    return acc;
}, []);

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
    
