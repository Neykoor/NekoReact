const ALL = ['purrbot', 'waifupics', 'nekosbest', 'waifuim', 'otakugifs', 'animeapi', 'nekosfun', 'kyoko'];
const BASIC = ['purrbot', 'nekosbest', 'otakugifs'];
const NSFW_PROVIDERS = ['waifupics', 'waifuim', 'animeapi', 'nekosfun'];
const GIF_PROVIDERS = ['purrbot', 'otakugifs', 'nekosfun', 'kyoko'];

export const ACTIONS_CONFIG = {
    angry: { aliases: ['enojado', 'enojada', 'rage', 'mad', 'furioso'], support: ALL, label: 'enfado', emoji: '😠' },
    annoyed: { aliases: ['molesto', 'fastidiado', 'irritado', 'cansado-de'], support: ALL, label: 'molestia', emoji: '😒' },
    anxiety: { aliases: ['ansioso', 'ansiedad', 'estresado', 'nerviosismo'], support: ALL, label: 'ansiedad', emoji: '😰' },
    awkward: { aliases: ['incómodo', 'torpe', 'incomodo', 'silencio-incómodo'], support: ALL, label: 'incomodidad', emoji: '😅' },
    betrayed: { aliases: ['traicionado', 'engañado', 'backstab', 'decepcion-extrema'], support: ALL, label: 'traición', emoji: '😤' },
    bitter: { aliases: ['amargado', 'resentido', 'rencoroso', 'amargura'], support: ALL, label: 'amargura', emoji: '😖' },
    blank: { aliases: ['en-blanco', 'vacío', 'sin-pensamientos', 'neutral'], support: ALL, label: 'mirada vacía', emoji: '😐' },
    blissful: { aliases: ['extático', 'eufórico', 'felicidad-extrema', 'nirvana'], support: ALL, label: 'éxtasis', emoji: '🤯' },
    blush: { aliases: ['sonrojarse', 'penita', 'shy', 'avergonzado', 'timido'], support: ALL, label: 'sonrojo', emoji: '😳' },
    bored: { aliases: ['aburrido', 'aburrimiento', 'nada-que-hacer', 'desinteres'], support: ALL, label: 'aburrimiento', emoji: '😴' },
    calm: { aliases: ['calmado', 'tranquilo', 'sereno', 'paz', 'relajado'], support: ALL, label: 'calma', emoji: '😌' },
    complacent: { aliases: ['complaciente', 'satisfecho', 'auto-conforme'], support: ALL, label: 'complacencia', emoji: '😏' },
    concerned: { aliases: ['preocupado', 'interesado', 'solícito', 'atento'], support: ALL, label: 'preocupación', emoji: '😟' },
    confused: { aliases: ['confundido', 'perdido', 'desorientado', 'what', 'wtf'], support: ALL, label: 'confusión', emoji: '😵‍💫' },
    content: { aliases: ['satisfecho', 'conforme', 'bien-así', 'aceptable'], support: ALL, label: 'satisfacción', emoji: '😊' },
    crazy: { aliases: ['loco', 'chiflado', 'maniaco', 'psicópata', 'demente'], support: ALL, label: 'locura', emoji: '🤪' },
    curious: { aliases: ['curioso', 'intrigado', 'interesado', 'pregunta', 'duda'], support: ALL, label: 'curiosidad', emoji: '🤔' },
    cynical: { aliases: ['cínico', 'sarcástico', 'mordaz', 'descreído'], support: ALL, label: 'cinismo', emoji: '🙄' },
    defeated: { aliases: ['derrotado', 'vencido', 'rendido', 'sin-fuerzas'], support: ALL, label: 'derrota', emoji: '😔' },
    delusional: { aliases: ['delirante', 'ilusorio', 'fantasioso', 'locuaz'], support: ALL, label: 'delirio', emoji: '🤯' },
    depressed: { aliases: ['deprimido', 'depresión', 'melancólico', 'abatido'], support: ALL, label: 'depresión', emoji: '😞' },
    desperate: { aliases: ['desesperado', 'angustiado', 'desesperación', 'urgente'], support: ALL, label: 'desesperación', emoji: '😫' },
    determined: { aliases: ['determinado', 'resuelto', 'firme', 'decidido'], support: ALL, label: 'determinación', emoji: '😤' },
    disappointed: { aliases: ['decepcionado', 'desilusionado', 'frustrado', 'esperanza-perdida'], support: ALL, label: 'decepción', emoji: '😞' },
    disgusted: { aliases: ['disgustado', 'asqueado', 'repugnancia', 'asco', 'ñá'], support: ALL, label: 'asco', emoji: '🤢' },
    dizzy: { aliases: ['mareado', 'aturdido', 'vertigo', 'cabeza-gira'], support: ALL, label: 'mareo', emoji: '😵' },
    embarrassed: { aliases: ['apenado', 'avergonzado-fuerte', 'mortificado', 'humillado'], support: ALL, label: 'apuro', emoji: '🫣' },
    empty: { aliases: ['vacío', 'hueco', 'sin-sentido', 'nada'], support: ALL, label: 'vacío', emoji: '🕳️' },
    envious: { aliases: ['envidioso', 'codicioso', 'deseoso', 'envidia'], support: ALL, label: 'envidia', emoji: '😒' },
    excited: { aliases: ['emocionado', 'entusiasmado', 'eufórico', 'hype', 'euforia'], support: ALL, label: 'emoción', emoji: '🤩' },
    exhausted: { aliases: ['agotado', 'extenuado', 'sin-energía', 'fundido'], support: ALL, label: 'agotamiento', emoji: '😩' },
    flustered: { aliases: ['aturdido', 'nervioso-romántico', 'coqueteo-nervioso'], support: ALL, label: 'aturdimiento', emoji: '🥴' },
    frustrated: { aliases: ['frustrado', 'irritado', 'impotente', 'bloqueado'], support: ALL, label: 'frustración', emoji: '😤' },
    grateful: { aliases: ['agradecido', 'gratitud', 'reconocido', 'gracias'], support: ALL, label: 'gratitud', emoji: '🙏' },
    guilty: { aliases: ['culpable', 'remordimiento', 'arrepentido', 'culpa'], support: ALL, label: 'culpa', emoji: '😔' },
    happy: { aliases: ['feliz', 'alegre', 'joy', 'smile', 'contento', 'alegria'], support: ALL, label: 'felicidad', emoji: '😊' },
    hopeful: { aliases: ['esperanzado', 'optimista', 'fe', 'esperanza'], support: ALL, label: 'esperanza', emoji: '🌟' },
    hopeless: { aliases: ['desesperanzado', 'sin-esperanza', 'pesimista'], support: ALL, label: 'desesperanza', emoji: '😶' },
    horrified: { aliases: ['horrorizado', 'aterrado', 'espantado', 'pavor'], support: ALL, label: 'horror', emoji: '😱' },
    hysterical: { aliases: ['histérico', 'descontrolado', 'crisis-risa', 'llanto-descontrolado'], support: ALL, label: 'histeria', emoji: '😂' },
    indifferent: { aliases: ['indiferente', 'me-da-igual', 'pasota', 'neutral'], support: ALL, label: 'indiferencia', emoji: '😐' },
    infatuated: { aliases: ['enamorado-obsesivo', 'chiflado-por', 'colado'], support: ALL, label: 'enamoramiento', emoji: '🥰' },
    irritated: { aliases: ['irritado', 'molesto', 'picado', 'fastidiado'], support: ALL, label: 'irritación', emoji: '😤' },
    jealous: { aliases: ['celoso', 'envidioso', 'envidia', 'celos', 'posesivo'], support: ALL, label: 'celos', emoji: '😤' },
    lonely: { aliases: ['solo', 'abandonado', 'aislado', 'nostalgia', 'soledad'], support: ALL, label: 'soledad', emoji: '🥺' },
    love: { aliases: ['amor', 'corazon', 'te-amo', 'loveu', 'amorcito', 'cariño'], support: ALL, label: 'amor', emoji: '❤️' },
    lustful: { aliases: ['lujurioso', 'deseo', 'caliente', 'excitado'], support: ALL, label: 'lujuria', emoji: '😏' },
    melancholic: { aliases: ['melancólico', 'nostálgico', 'saudade', 'añoranza'], support: ALL, label: 'melancolía', emoji: '🌧️' },
    mischievous: { aliases: ['travieso', 'pícaro', 'malicioso', 'diabólico'], support: ALL, label: 'travesura', emoji: '😈' }
};
Object.assign(ACTIONS_CONFIG, {
    backflip: { aliases: ['voltereta', 'back-flip', 'acrobacia', 'salto-atrás'], support: ALL, label: 'voltereta', emoji: '🤸' },
    beg: { aliases: ['rogar', 'suplicar', 'mendigar', 'implorar'], support: ALL, label: 'suplica', emoji: '🙏' },
    bow: { aliases: ['reverencia', 'inclinarse', 'respeto', 'honor', 'venia'], support: ALL, label: 'reverencia', emoji: '🙇' },
    burp: { aliases: ['eructo', 'eructar', 'gas', 'digestión'], support: ALL, label: 'eructo', emoji: '💨' },
    bye: { aliases: ['adios', 'chao', 'nos-vemos', 'hasta-luego', 'despedida'], support: ALL, label: 'despedida', emoji: '👋' },
    clap: { aliases: ['aplaudir', 'aplauso', 'bravo', 'aplausos', 'ovación'], support: ALL, label: 'aplauso', emoji: '👏' },
    come: { aliases: ['venir', 'acercarse', 'aquí', 'ven'], support: ALL, label: 'venir', emoji: '👋' },
    cough: { aliases: ['toser', 'tos', 'resfriado', 'gripa', 'catarro'], support: ALL, label: 'tos', emoji: '🤧' },
    crossarms: { aliases: ['cruzarse-brazos', 'brazos-cruzados', 'desafiante'], support: ALL, label: 'brazos cruzados', emoji: '🙅' },
    curtain: { aliases: ['cortina', 'telón', 'escenario', 'presentación'], support: ALL, label: 'cortina', emoji: '🎭' },
    dodge: { aliases: ['esquivar', 'evadir', 'eludir', 'agacharse'], support: ALL, label: 'esquivar', emoji: '🏃' },
    doubletake: { aliases: ['mirada-doble', 'reacción-tardía', 'wait-what'], support: ALL, label: 'mirada doble', emoji: '😳' },
    dramatic: { aliases: ['dramático', 'teatral', 'exagerado', 'ópera'], support: ALL, label: 'dramatismo', emoji: '🎭' },
    drool: { aliases: ['babeo', 'babear', 'saliva', 'hambriento'], support: ALL, label: 'babeo', emoji: '🤤' },
    faint: { aliases: ['desmayarse', 'desmayo', 'pérdida-conocimiento', 'caer'], support: ALL, label: 'desmayo', emoji: '😵' },
    fart: { aliases: ['pedo', 'flatulencia', 'gas', 'tirar-gas'], support: ALL, label: 'flatulencia', emoji: '💨' },
    flip: { aliases: ['voltear', 'mesa', 'table-flip', 'enojo-extremo'], support: ALL, label: 'voltear mesa', emoji: '(╯°□°）╯︵ ┻━┻' },
    frontflip: { aliases: ['voltereta-frontal', 'front-flip', 'salto-adelante'], support: ALL, label: 'voltereta frontal', emoji: '🤸' },
    greet: { aliases: ['saludo', 'saludar', 'bienvenido', 'welcome', 'recibir'], support: ALL, label: 'saludo formal', emoji: '🙋' },
    grovel: { aliases: ['arrastrarse', 'humillarse', 'postrarse', 'limosna'], support: ALL, label: 'humillación', emoji: '🙇' },
    handshake: { aliases: ['apretón', 'trato', 'deal', 'convenio', 'acuerdo'], support: ALL, label: 'apretón de manos', emoji: '🤝' },
    hide: { aliases: ['esconderse', 'ocultar', 'escondite', 'incógnito'], support: ALL, label: 'esconderse', emoji: '🙈' },
    hysteria: { aliases: ['histeria', 'crisis', 'ataque', 'descontrol'], support: ALL, label: 'histeria', emoji: '😂' },
    ignore: { aliases: ['ignorar', 'hacer-ojo-gordo', 'no-ver', 'evitar'], support: ALL, label: 'ignorar', emoji: '🙉' },
    lurk: { aliases: ['acechar', 'espiar', 'observar', 'merodear', 'escondido'], support: ALL, label: 'acechar', emoji: '👁️' },
    middlefinger: { aliases: ['dedo-medio', 'fuck-you', 'insulto-grave'], support: ALL, label: 'dedo medio', emoji: '🖕' },
    mime: { aliases: ['mimo', 'silencio', 'invisible-wall', 'actuar'], support: ALL, label: 'mimo', emoji: '🎭' },
    nod: { aliases: ['asentir', 'si', 'yes', 'ok', 'entendido', 'afirmar'], support: ALL, label: 'asentimiento', emoji: '↕️' },
    nom: { aliases: ['comer', 'ñam', 'munch', 'comiendo', 'masticar'], support: ALL, label: 'comiendo', emoji: '😋' },
    notice: { aliases: ['notar', 'darse-cuenta', 'observar', 'detectar'], support: ALL, label: 'notar', emoji: '👀' },
    peek: { aliases: ['asomar', 'mirar-escondido', 'ojear', 'espiar'], support: ALL, label: 'asomarse', emoji: '🫣' },
    point: { aliases: ['señalar', 'apuntar', 'ahí', 'mira', 'fíjate'], support: ALL, label: 'señalar', emoji: '👉' },
    pout: { aliases: ['puchero', 'moflete', 'enojón', 'malhumor', 'bronca'], support: ALL, label: 'puchero', emoji: '😤' },
    pray: { aliases: ['rezar', 'orar', 'plegaria', 'suplica', 'rogar'], support: ALL, label: 'oración', emoji: '🙏' },
    salute: { aliases: ['saludo-militar', 'atención', 'respeto', 'honor'], support: ALL, label: 'saludo militar', emoji: '🫡' },
    scan: { aliases: ['escanear', 'analizar', 'detectar', 'buscar'], support: ALL, label: 'escanear', emoji: '👁️‍🗨️' },
    scoot: { aliases: ['arrastrarse', 'deslizarse', 'moverse-silencioso'], support: ALL, label: 'arrastrarse', emoji: '🐍' },
    scroll: { aliases: ['desplazar', 'scroll', 'mover', 'navegar'], support: ALL, label: 'desplazar', emoji: '📜' },
    shake: { aliases: ['sacudir', 'agitar', 'temblar', 'vibrar'], support: ALL, label: 'sacudir', emoji: '🫨' },
    shh: { aliases: ['silencio', 'shhh', 'callar', 'secreto', 'silencioso'], support: ALL, label: 'silencio', emoji: '🤫' },
    shrug: { aliases: ['hombros', 'qué-se-yo', 'no-sé', 'no-lo-sé', 'indiferencia'], support: ALL, label: 'encogerse', emoji: '🤷' },
    sip: { aliases: ['sorber', 'beber', 'cafecito', 'tea', 'café'], support: ALL, label: 'sorbo', emoji: '🍵' },
    sit: { aliases: ['sentar', 'siéntate', 'reposar', 'descansar'], support: ALL, label: 'sentarse', emoji: '🪑' },
    slurp: { aliases: ['sorber-fuerte', 'beber-ruidoso', 'lamer'], support: ALL, label: 'sorbo ruidoso', emoji: '🥤' },
    smh: { aliases: ['negar-cabeza', 'no-puede-ser', 'increíble-negativo'], support: ALL, label: 'negar con cabeza', emoji: '😤' },
    snap: { aliases: ['chasquido', 'snap', 'dedos', 'click'], support: ALL, label: 'chasquido', emoji: '👌' },
    sneeze: { aliases: ['estornudar', 'estornudo', 'achoo', 'salud'], support: ALL, label: 'estornudo', emoji: '🤧' },
    sparkle: { aliases: ['brillar', 'destello', 'brillo', 'especial'], support: ALL, label: 'brillo', emoji: '✨' },
    spit: { aliases: ['escupir', 'spit', 'bleah', 'ptoey'], support: ALL, label: 'escupir', emoji: '😤' },
    stare: { aliases: ['mirar-fijo', 'observar', 'fijamente', 'ojear'], support: ALL, label: 'mirada fija', emoji: '👀' },
    stretch: { aliases: ['estirar', 'elongar', 'calentamiento', 'flexibilidad'], support: ALL, label: 'estiramiento', emoji: '🧘' },
    strut: { aliases: ['pavonearse', 'presumir-caminar', 'modelar'], support: ALL, label: 'pavoneo', emoji: '🦚' },
    stumble: { aliases: ['tropezar', 'tambalearse', 'casi-caer', 'inestable'], support: ALL, label: 'tropezón', emoji: '😵' },
    surrender: { aliases: ['rendirse', 'rendición', 'me-rindo', 'bandera-blanca'], support: ALL, label: 'rendición', emoji: '🏳️' },
    sweat: { aliases: ['sudar', 'sudor', 'nervios-sudor', 'calor'], support: ALL, label: 'sudor', emoji: '😅' },
    sweep: { aliases: ['barrer', 'limpieza', 'escoba', 'aseo'], support: ALL, label: 'barrer', emoji: '🧹' },
    swing: { aliases: ['columpio', 'balanceo', 'sube-baja', 'mecerse'], support: ALL, label: 'columpio', emoji: '🎪' },
    thumbsdown: { aliases: ['pulgar-abajo', 'no-me-gusta', 'dislike', 'rechazo'], support: ALL, label: 'pulgar abajo', emoji: '👎' },
    thumbsup: { aliases: ['pulgar-arriba', 'me-gusta', 'like', 'aprobación'], support: ALL, label: 'pulgar arriba', emoji: '👍' },
    twirl: { aliases: ['girar', 'piruetear', 'giro', 'dar-vueltas'], support: ALL, label: 'girar', emoji: '🌀' },
    vanish: { aliases: ['desaparecer', 'vanish', 'poof', 'desvanecerse'], support: ALL, label: 'desaparición', emoji: '💨' },
    wait: { aliases: ['esperar', 'paciencia', 'aguardar', 'demora'], support: ALL, label: 'esperar', emoji: '⏳' },
    walk: { aliases: ['caminar', 'pasear', 'andar', 'paso'], support: ALL, label: 'caminar', emoji: '🚶' },
    wander: { aliases: ['vagar', 'deambular', 'pasear', 'caminar-sin-rumbo'], support: ALL, label: 'deambular', emoji: '🚶‍♂️' },
    wave: { aliases: ['saludar', 'hola', 'adios', 'bye', 'holis'], support: ALL, label: 'saludo', emoji: '👋' },
    whistle: { aliases: ['silbar', 'silbido', 'guiso', 'llamar-atención'], support: ALL, label: 'silbido', emoji: '🎵' },
    wiggle: { aliases: ['moverse', 'contonearse', 'menear', 'bailoteo'], support: ALL, label: 'menearse', emoji: '💃' },
    wink: { aliases: ['guiño', 'coqueto', 'pícaro', 'ojito'], support: ALL, label: 'guiño', emoji: '😉' },
    yawn: { aliases: ['bostezar', 'bostezo', 'sleepy', 'sueño'], support: ALL, label: 'bostezo', emoji: '🥱' },
    zoom: { aliases: ['zoom', 'acercar', 'rapidez', 'velocidad'], support: ALL, label: 'zoom', emoji: '🚀' },
    caress: { aliases: ['acariciar-suave', 'sobar', 'palpar', 'tacto'], support: ALL, label: 'acaricia', emoji: '🤚' },
    carry: { aliases: ['cargar', 'levantar', 'princesa', 'novio-fuerte'], support: ALL, label: 'cargar en brazos', emoji: '💪' },
    cheekkiss: { aliases: ['beso-meilla', 'beso-cara', 'beso-amistoso'], support: ALL, label: 'beso en mejilla', emoji: '😚' },
    cuddle: { aliases: ['acurrucar', 'acurruco', 'snuggle', 'arrunchis'], support: ALL, label: 'mimo cariñoso', emoji: '🤗' },
    foreheadkiss: { aliases: ['beso-frente', 'beso-cabeza', 'cariño-puro'], support: ALL, label: 'beso en frente', emoji: '💝' }
});
    Object.assign(ACTIONS_CONFIG, {
    grouphug: { aliases: ['abrazo-grupal', 'todos-juntos', 'abrazo-masivo'], support: ALL, label: 'abrazo grupal', emoji: '👨‍👩‍👧‍👦' },
    handhold: { aliases: ['tomar-mano', 'manito', 'holdhands', 'manos'], support: ALL, label: 'tomar mano', emoji: '🤝' },
    handkiss: { aliases: ['beso-mano', 'caballero', 'dama', 'galante'], support: ALL, label: 'beso en mano', emoji: '💋' },
    headpat: { aliases: ['cabeza-palmada', 'pat-cabeza', 'cariño-cabeza'], support: ALL, label: 'palma en cabeza', emoji: '👋' },
    hug: { aliases: ['abrazar', 'abrazo', 'abracito', 'abrazo-fuerte'], support: ALL, label: 'abrazo', emoji: '🤗' },
    kiss: { aliases: ['muak', 'besar', 'beso', 'kissu', 'besito'], support: ALL, label: 'beso', emoji: '💋' },
    lap: { aliases: ['regazo', 'sentar-regazo', 'colchón-human'], support: ALL, label: 'regazo', emoji: '💺' },
    lean: { aliases: ['recostar', 'apoyar', 'descansar-hombro'], support: ALL, label: 'recostarse', emoji: '🥱' },
    lick: { aliases: ['lamer', 'lametada', 'lambida', 'lamida'], support: ALL, label: 'lametón', emoji: '👅' },
    massage: { aliases: ['masaje', 'masajear', 'relajar', 'cuerpo'], support: ALL, label: 'masaje', emoji: '💆' },
    nuzzle: { aliases: ['frotar', 'acariciar-nariz', 'esnuzar'], support: ALL, label: 'frotar nariz', emoji: '🐽' },
    pat: { aliases: ['acariciar', 'cariño', 'headpat', 'patpat', 'cabeza'], support: ALL, label: 'mimo', emoji: '🐾' },
    peck: { aliases: ['besito-rápido', 'picotear', 'beso-ligero'], support: ALL, label: 'besito rápido', emoji: '💨' },
    pillow: { aliases: ['almohada', 'pelea-almohadas', 'guerra-almohadas'], support: ALL, label: 'almohada', emoji: '🛏️' },
    pinch: { aliases: ['pellizcar', 'pellizco', 'agarrar', 'cacheteada'], support: ALL, label: 'pellizco', emoji: '🤏' },
    poke: { aliases: ['tocar', 'picar', 'toque', 'cutis', 'picotear'], support: ALL, label: 'toque', emoji: '👆' },
    princesscarry: { aliases: ['carga-princesa', 'princess-style', 'romántico'], support: ALL, label: 'carga princesa', emoji: '👸' },
    snuggle: { aliases: ['acomodar', 'acurrucarse', 'arrimarse', 'acomodarse'], support: ALL, label: 'acurrucarse', emoji: '🥰' },
    stroke: { aliases: ['acariciar-suave', 'sobar', 'palpar', 'caricia'], support: ALL, label: 'acaricia suave', emoji: '🤚' },
    tuckin: { aliases: ['arropar', 'dormir-bebe', 'cobijar', 'arrullar'], support: ALL, label: 'arropar', emoji: '🛏️' },
    whisper: { aliases: ['susurrar', 'oreja', 'secreto', 'chismear'], support: ALL, label: 'susurro', emoji: '🗣️' },
    ambush: { aliases: ['emboscada', 'sorpresa-ataque', 'ataque-sorpresa'], support: ALL, label: 'emboscada', emoji: '😶‍🌫️' },
    armbar: { aliases: ['llave-brazo', 'juji-gatame', 'brazo-llave'], support: ALL, label: 'llave de brazo', emoji: '🦾' },
    arrest: { aliases: ['arrestar', 'policía', 'preso', 'manos-arriba'], support: ALL, label: 'arresto', emoji: '👮' },
    baka: { aliases: ['idiota', 'tonto', 'estúpido', 'inútil', 'bobo'], support: ALL, label: 'insulto', emoji: '🤪' },
    bite: { aliases: ['morder', 'mordisco', 'nom', 'mordida', 'masticar'], support: ALL, label: 'mordisco', emoji: '🦷' },
    blackmail: { aliases: ['chantajear', 'chantaje', 'amenazar', 'coaccionar'], support: ALL, label: 'chantaje', emoji: '📸' },
    block: { aliases: ['bloquear', 'defensa', 'parar', 'detener-golpe'], support: ALL, label: 'bloqueo', emoji: '🛡️' },
    bonk: { aliases: ['martillo', 'castigo', 'horny', 'al-horny-jail'], support: ALL, label: 'bonk', emoji: '🔨' },
    bully: { aliases: ['acosar', 'molestar', 'troll', 'fastidiar', 'intimidar'], support: ALL, label: 'bullying', emoji: '😈' },
    chainsaw: { aliases: ['motosierra', 'desmembrar', 'gore', 'terror'], support: ALL, label: 'motosierra', emoji: '🪚' },
    choke: { aliases: ['ahogar', 'estrangular', 'sufocar', 'estrangulamiento'], support: ALL, label: 'estrangular', emoji: '✋' },
    crash: { aliases: ['chocar', 'colisión', 'golpe', 'impacto'], support: ALL, label: 'colisión', emoji: '💥' },
    crush: { aliases: ['aplastar', 'destruir', 'aniquilar', 'machacar'], support: ALL, label: 'aplastar', emoji: '🔨' },
    cut: { aliases: ['cortar', 'cuchillo', 'navaja', 'herir'], support: ALL, label: 'cortar', emoji: '🔪' },
    decapitate: { aliases: ['decapitar', 'cabeza-cortada', 'guillotina'], support: ALL, label: 'decapitación', emoji: '☠️' },
    disarm: { aliases: ['desarmar', 'quitar-arma', 'neutralizar'], support: ALL, label: 'desarmar', emoji: '🔫' },
    dropkick: { aliases: ['patada-voladora', 'drop-kick', 'vuelo-patada'], support: ALL, label: 'patada voladora', emoji: '🥋' },
    electrocute: { aliases: ['electrocutar', 'rayo', 'electricidad', 'shock'], support: ALL, label: 'electrocución', emoji: '⚡' },
    explode: { aliases: ['explotar', 'explosión', 'bomba', 'ka-boom'], support: ALL, label: 'explosión', emoji: '💣' },
    fight: { aliases: ['pelear', 'luchar', 'combate', 'pelea', 'batalla'], support: ALL, label: 'pelea', emoji: '🥊' },
    fire: { aliases: ['fuego', 'quemar', 'llamas', 'incendiar'], support: ALL, label: 'fuego', emoji: '🔥' },
    freeze: { aliases: ['congelar', 'hielo', 'helar', 'escarcha'], support: ALL, label: 'congelación', emoji: '🧊' },
    glomp: { aliases: ['abrazo-tackle', 'tackle-hug', 'abrazo-plancha'], support: ALL, label: 'abrazo-tacle', emoji: '🏃' },
    grab: { aliases: ['agarrar', 'tomar', 'sujetar', 'asir', 'capturar'], support: ALL, label: 'agarrar', emoji: '✊' },
    gutpunch: { aliases: ['golpe-estómago', 'puñetazo-barriga'], support: ALL, label: 'golpe al estómago', emoji: '👊' },
    headbang: { aliases: ['golpear-cabeza', 'cabezazo', 'facepalm-fuerte'], support: ALL, label: 'cabezazo', emoji: '🤦‍♂️' },
    headlock: { aliases: ['llave-cabeza', 'sujeción', 'inmovilizar'], support: ALL, label: 'llave de cabeza', emoji: '🤼' },
    judo: { aliases: ['yudo', 'proyección', 'ippon', 'llave-judo'], support: ALL, label: 'judo', emoji: '🥋' },
    karate: { aliases: ['karate', 'kárate', 'arte-marcial'], support: ALL, label: 'karate', emoji: '🥋' },
    kick: { aliases: ['patear', 'patada', 'puntapié', 'coz'], support: ALL, label: 'patada', emoji: '🦶' },
    kill: { aliases: ['matar', 'asesinar', 'destroy', 'aniquilar'], support: ALL, label: 'ataque mortal', emoji: '💀' },
    knee: { aliases: ['rodillazo', 'rodilla', 'golpe-rodilla'], support: ALL, label: 'rodillazo', emoji: '🦵' },
    knockdown: { aliases: ['derribar', 'noquear', 'knock-out', 'ko'], support: ALL, label: 'noquear', emoji: '😵' },
    poison: { aliases: ['envenenar', 'tóxico', 'veneno'], support: ALL, label: 'veneno', emoji: '☠️' },
    pummel: { aliases: ['apalear', 'golpear-repetido'], support: ALL, label: 'apalizar', emoji: '👊' },
    punch: { aliases: ['golpear', 'puñetazo', 'golpe', 'puño'], support: ALL, label: 'puñetazo', emoji: '👊' },
    push: { aliases: ['empujar', 'empujón', 'rechazar', 'apartar'], support: ALL, label: 'empujón', emoji: '👐' },
    scratch: { aliases: ['arañar', 'rasguño', 'uñas', 'rasguñar'], support: ALL, label: 'arañazo', emoji: '🐱' },
    shoot: { aliases: ['disparar', 'tiro', 'bang', 'pistola'], support: ALL, label: 'disparo', emoji: '🔫' },
    slap: { aliases: ['bofetada', 'cachetada', 'smack', 'golpe-cara'], support: ALL, label: 'bofetada', emoji: '👋' },
    smash: { aliases: ['aplastar', 'destruir', 'machacar', 'romper'], support: ALL, label: 'aplastar', emoji: '💥' },
    spank: { aliases: ['nalgada', 'azotar', 'castigo', 'chancla'], support: ALL, label: 'nalgada', emoji: '👋' },
    stab: { aliases: ['apuñalar', 'puñalada', 'cuchillada', 'daga'], support: ALL, label: 'apuñalar', emoji: '🗡️' },
    strangle: { aliases: ['estrangular', 'ahogar', 'sofocar', 'garrote'], support: ALL, label: 'estrangulamiento', emoji: '😵' },
    suplex: { aliases: ['súplex', 'proyección-vertical', 'llave-suplex'], support: ALL, label: 'súplex', emoji: '🤼' },
    tackle: { aliases: ['derribar', 'placaje', 'atropellar', 'tacle'], support: ALL, label: 'placaje', emoji: '🏈' },
    throw: { aliases: ['lanzar', 'tirar', 'arrojar', 'aventar'], support: ALL, label: 'lanzamiento', emoji: '🎯' },
    uppercut: { aliases: ['gancho', 'upper-cut', 'golpe-arriba'], support: ALL, label: 'gancho', emoji: '🥊' },
    whip: { aliases: ['azotar', 'látigo', 'fusta', 'azote'], support: ALL, label: 'látigo', emoji: '🪢' },
    yeet: { aliases: ['lanzar-lejos', 'tirar-lejos', 'expulsar'], support: ALL, label: 'lanzamiento épico', emoji: '🚀' },
    bake: { aliases: ['hornear', 'pastel', 'galletas', 'repostería'], support: ALL, label: 'hornear', emoji: '🧁' },
    barbecue: { aliases: ['asado', 'parrilla', 'bbq', 'carne-asada'], support: ALL, label: 'asado', emoji: '🍖' },
    bathe: { aliases: ['bañarse', 'baño', 'inodoro', 'limpieza'], support: ALL, label: 'bañarse', emoji: '🛁' },
    call: { aliases: ['llamar', 'teléfono', 'llamada', 'ring'], support: ALL, label: 'llamada', emoji: '📞' },
    celebrate: { aliases: ['celebrar', 'celebración', 'fiesta', 'victoria'], support: ALL, label: 'celebración', emoji: '🎉' },
    challenge: { aliases: ['desafiar', 'reto', 'duelo', 'competir'], support: ALL, label: 'desafío', emoji: '⚔️' },
    cheer: { aliases: ['animar', 'porra', 'vamos', 'apoyar'], support: ALL, label: 'porra', emoji: '📣' },
    clean: { aliases: ['limpiar', 'aseo', 'limpieza', 'fregar'], support: ALL, label: 'limpiar', emoji: '🧹' },
    code: { aliases: ['programar', 'código', 'hackear', 'pc'], support: ALL, label: 'programar', emoji: '💻' },
    cook: { aliases: ['cocinar', 'chef', 'cocina', 'comida'], support: ALL, label: 'cocinar', emoji: '👨‍🍳' },
    dab: { aliases: ['dab', 'pose', 'swagger', 'estilo'], support: ALL, label: 'dab', emoji: '😎' },
    dance: { aliases: ['bailar', 'baile', 'dancing', 'fiesta'], support: ALL, label: 'baile', emoji: '💃' },
    deal: { aliases: ['trato', 'convenio', 'pacto', 'acuerdo'], support: ALL, label: 'trato', emoji: '🤝' },
    dig: { aliases: ['cavar', 'excavar', 'hoyo', 'tierra'], support: ALL, label: 'cavar', emoji: '⛏️' },
    draw: { aliases: ['dibujar', 'arte', 'pintar', 'sketch'], support: ALL, label: 'dibujar', emoji: '🎨' },
    drink: { aliases: ['beber', 'tomar', 'trago', 'alcohol'], support: ALL, label: 'beber', emoji: '🍺' },
    drive: { aliases: ['manejar', 'conducir', 'auto', 'carro'], support: ALL, label: 'conducir', emoji: '🚗' },
    eat: { aliases: ['comer', 'alimentarse', 'dining'], support: ALL, label: 'comer', emoji: '🍽️' },
    exercise: { aliases: ['ejercicio', 'entrenar', 'gimnasio', 'fitness'], support: ALL, label: 'ejercicio', emoji: '🏋️' },
    facepalm: { aliases: ['mano-cara', 'disappointment', 'fp'], support: ALL, label: 'mano en cara', emoji: '🤦' },
    feed: { aliases: ['alimentar', 'dar-comida', 'comer-otro'], support: ALL, label: 'alimentar', emoji: '🍼' },
    fish: { aliases: ['pescar', 'pesca', 'pez', 'anzuelo'], support: ALL, label: 'pescar', emoji: '🎣' },
    fly: { aliases: ['volar', 'avión', 'cielo', 'superman'], support: ALL, label: 'volar', emoji: '✈️' },
    garden: { aliases: ['jardinería', 'plantar', 'flores', 'naturaleza'], support: ALL, label: 'jardinería', emoji: '🌻' },
    highfive: { aliases: ['choca-cinco', 'high5', 'hifive', 'cinco'], support: ALL, label: 'choca esos cinco', emoji: '🖐️' },
    waifu_nsfw: { aliases: ['waifunsfw', 'waifu-lewd', 'waifu-xxx'], support: NSFW_PROVIDERS, nsfw: true, label: 'waifu (NSFW)', emoji: '🔞' },
    neko_nsfw: { aliases: ['nekonsfw', 'neko-lewd', 'neko-xxx'], support: NSFW_PROVIDERS, nsfw: true, label: 'neko (NSFW)', emoji: '🔞' },
    trap: { aliases: ['trapito', 'femboy', 'otoko-no-ko'], support: NSFW_PROVIDERS, nsfw: true, label: 'trap', emoji: '🔞' },
    blowjob: { aliases: ['bj', 'chupar', 'suck', 'oral-nsfw'], support: NSFW_PROVIDERS, nsfw: true, label: 'blowjob', emoji: '🔞' },
    hentai: { aliases: ['h', 'lewd', 'nsfw', 'xxx', 'rule34'], support: NSFW_PROVIDERS, nsfw: true, label: 'hentai', emoji: '🔞' },
    paizuri: { aliases: ['tetas', 'oppai', 'boobs', 'breasts'], support: NSFW_PROVIDERS, nsfw: true, label: 'paizuri', emoji: '🔞' },
    ecchi: { aliases: ['pervertido', 'suggestive', 'lewd-light'], support: NSFW_PROVIDERS, nsfw: true, label: 'ecchi', emoji: '🔞' },
    ero: { aliases: ['erotico', 'erotic', 'sensual', 'sexy'], support: NSFW_PROVIDERS, nsfw: true, label: 'ero', emoji: '🔞' },
    milf: { aliases: ['mature', 'onee-san', 'adult-woman'], support: NSFW_PROVIDERS, nsfw: true, label: 'milf', emoji: '🔞' },
    oral: { aliases: ['oral-sex', 'blow', 'mouth'], support: NSFW_PROVIDERS, nsfw: true, label: 'oral', emoji: '🔞' },
    ass: { aliases: ['culo', 'booty', 'butt', 'nalgas'], support: NSFW_PROVIDERS, nsfw: true, label: 'ass', emoji: '🔞' },
    uniforms: { aliases: ['uniforme', 'cosplay-nsfw', 'costume'], support: NSFW_PROVIDERS, nsfw: true, label: 'uniforms', emoji: '🔞' },
    yuri: { aliases: ['lesbian', 'yuri-hentai', 'girl-x-girl'], support: NSFW_PROVIDERS, nsfw: true, label: 'yuri', emoji: '🔞' },
    yaoi: { aliases: ['gay', 'yaoi-hentai', 'boy-x-boy'], support: NSFW_PROVIDERS, nsfw: true, label: 'yaoo', emoji: '🔞' },
    bondage: { aliases: ['bdsm', 'tied', 'restrained', 'shibari'], support: NSFW_PROVIDERS, nsfw: true, label: 'bondage', emoji: '🔞' },
    maid: { aliases: ['sirvienta', 'maid-nsfw', 'meido'], support: NSFW_PROVIDERS, nsfw: true, label: 'maid', emoji: '🔞' },
    bikini: { aliases: ['swimsuit', 'bikini-nsfw', 'beach'], support: NSFW_PROVIDERS, nsfw: true, label: 'bikini', emoji: '🔞' },
    lingerie: { aliases: ['lenceria', 'underwear', 'panties'], support: NSFW_PROVIDERS, nsfw: true, label: 'lingerie', emoji: '🔞' },
    feet: { aliases: ['pies', 'foot', 'piescitos', 'soles'], support: NSFW_PROVIDERS, nsfw: true, label: 'feet', emoji: '🔞' },
    thighs: { aliases: ['muslos', 'thigh', 'piernas'], support: NSFW_PROVIDERS, nsfw: true, label: 'thighs', emoji: '🔞' },
    ahegao: { aliases: ['ahegao-face', 'lewd-face', 'o-face'], support: NSFW_PROVIDERS, nsfw: true, label: 'ahegao', emoji: '🔞' },
    cum: { aliases: ['semen', 'leche', 'finish'], support: NSFW_PROVIDERS, nsfw: true, label: 'cum', emoji: '🔞' },
    solo: { aliases: ['masturbation', 'solo-girl'], support: NSFW_PROVIDERS, nsfw: true, label: 'solo', emoji: '🔞' },
    sex: { aliases: ['fuck', 'coger', 'penetration'], support: NSFW_PROVIDERS, nsfw: true, label: 'sex', emoji: '🔞' },
    anal: { aliases: ['anal-sex', 'culo-sex', 'backdoor'], support: NSFW_PROVIDERS, nsfw: true, label: 'anal', emoji: '🔞' }
});
    export const API_ENDPOINTS = {
    nekosbest: (action) => `https://nekos.best/api/v2/${action}`,
    waifupics: (action) => {
        const config = ACTIONS_CONFIG[action];
        const type = config?.nsfw ? 'nsfw' : 'sfw';
        const tagsMap = {
            'angry': 'bully', 'baka': 'bully', 'bite': 'bite', 'blush': 'blush',
            'bonk': 'bonk', 'bully': 'bully', 'bye': 'wave', 'cheekkiss': 'kiss',
            'cry': 'cry', 'cuddle': 'cuddle', 'dance': 'dance', 'glomp': 'glomp',
            'happy': 'smile', 'highfive': 'highfive', 'holdhands': 'handhold',
            'hug': 'hug', 'kick': 'kick', 'kill': 'kill', 'kiss': 'kiss',
            'lick': 'lick', 'nom': 'nom', 'pat': 'pat', 'poke': 'poke',
            'pout': 'cringe', 'slap': 'slap', 'smile': 'smile', 'smug': 'smug',
            'tickle': 'tickle', 'wave': 'wave', 'wink': 'wink', 'yeet': 'yeet',
            'waifu_nsfw': 'waifu', 'neko_nsfw': 'neko', 'trap': 'trap', 'blowjob': 'blowjob'
        };
        const tag = tagsMap[action] || action.replace('_nsfw', '');
        return `https://api.waifu.pics/${type}/${tag}`;
    },
    purrbot: (action) => {
        const validActions = ['angry', 'bite', 'blush', 'comfy', 'cry', 'cuddle', 'dance', 'eevee', 'fluff', 'holo', 'hug', 'icon', 'kiss', 'kitsune', 'lick', 'neko', 'okami', 'pat', 'poke', 'pout', 'purr', 'slap', 'smile', 'tail', 'tickle'];
        return `https://api.purrbot.site/v2/img/sfw/${validActions.includes(action) ? action : 'neko'}/gif`;
    },
    waifuim: (action) => {
        const isNsfw = ACTIONS_CONFIG[action]?.nsfw ? 'true' : 'false';
        const tagsMap = {
            'waifu_nsfw': 'waifu', 'neko_nsfw': 'neko', 'paizuri': 'paizuri',
            'ecchi': 'ecchi', 'ero': 'ero', 'hentai': 'hentai', 'milf': 'milf',
            'oral': 'oral', 'ass': 'ass', 'uniforms': 'uniforms', 'yuri': 'yuri',
            'yaoi': 'yaoi', 'bondage': 'bondage', 'maid': 'maid', 'bikini': 'bikini',
            'lingerie': 'lingerie', 'feet': 'maid', 'thighs': 'uniforms', 'ahegao': 'ero',
            'cum': 'hentai', 'solo': 'hentai', 'sex': 'hentai', 'anal': 'ass'
        };
        return `https://api.waifu.im/search?included_tags=${tagsMap[action] || 'waifu'}&is_nsfw=${isNsfw}`;
    },
    otakugifs: (action) => {
        const map = {
            'angry': 'mad', 'baka': 'baka', 'bite': 'bite', 'blush': 'blush',
            'bored': 'bored', 'bye': 'bye', 'cheer': 'cheer', 'clap': 'clap',
            'confused': 'confused', 'cry': 'cry', 'cuddle': 'cuddle', 'dance': 'dance',
            'disappointed': 'disappointed', 'eat': 'eat', 'facepalm': 'facepalm',
            'happy': 'happy', 'highfive': 'highfive', 'hug': 'hug', 'kick': 'kick',
            'kiss': 'kiss', 'laugh': 'laugh', 'love': 'love', 'mad': 'mad',
            'nervous': 'nervous', 'nom': 'nom', 'pat': 'pat', 'poke': 'poke',
            'pout': 'pout', 'punch': 'punch', 'run': 'run', 'sad': 'sad',
            'scared': 'scared', 'shrug': 'shrug', 'sip': 'sip', 'slap': 'slap',
            'sleep': 'sleep', 'smile': 'smile', 'smug': 'smug', 'stare': 'stare',
            'think': 'think', 'tickle': 'tickle', 'wave': 'wave', 'wink': 'wink',
            'yawn': 'yawn', 'yeet': 'yeet'
        };
        return `https://api.otakugifs.xyz/gif?reaction=${map[action] || 'happy'}&format=gif`;
    },
    animeapi: (action) => {
        const endpoints = {
            'waifu_nsfw': 'nsfw/waifu', 'neko_nsfw': 'nsfw/neko', 'hentai': 'nsfw/hentai',
            'blowjob': 'nsfw/blowjob', 'trap': 'nsfw/trap', 'yuri': 'nsfw/yuri',
            'hug': 'sfw/hug', 'kiss': 'sfw/kiss', 'slap': 'sfw/slap',
            'cuddle': 'sfw/cuddle', 'pat': 'sfw/pat', 'poke': 'sfw/poke',
            'tickle': 'sfw/tickle', 'bite': 'sfw/bite', 'feed': 'sfw/feed',
            'smug': 'sfw/smug', 'bonk': 'sfw/bonk', 'wave': 'sfw/wave'
        };
        return `https://anime-api.com/api/${endpoints[action] || (ACTIONS_CONFIG[action]?.nsfw ? 'nsfw/waifu' : 'sfw/hug')}`;
    },
    nekosfun: (action) => {
        if (ACTIONS_CONFIG[action]?.nsfw) return `https://api.nekos.fun/v1/img/${action.replace('_nsfw', '')}`;
        const sfwMap = {
            'kiss': 'kiss', 'lick': 'lick', 'hug': 'hug', 'pat': 'pat',
            'cuddle': 'cuddle', 'cry': 'cry', 'slap': 'slap', 'pout': 'pout',
            'tickle': 'tickle', 'bite': 'bite', 'dance': 'dance', 'feed': 'feed',
            'happy': 'happy', 'highfive': 'highfive', 'laugh': 'laugh',
            'poke': 'poke', 'shrug': 'shrug', 'sleep': 'sleep', 'smile': 'smile',
            'smug': 'smug', 'wave': 'wave', 'wink': 'wink'
        };
        return `https://api.nekos.fun/v1/img/${sfwMap[action] || 'neko'}`;
    },
    kyoko: (action) => {
        const valid = ['angry', 'baka', 'bite', 'blush', 'bonk', 'cheekkiss', 'clap', 'confused', 'cool', 'cry', 'cuddle', 'dance', 'disgust', 'feed', 'happy', 'highfive', 'hug', 'kiss', 'laugh', 'lick', 'love', 'mad', 'nervous', 'nom', 'nope', 'panic', 'pat', 'peck', 'point', 'poke', 'pout', 'punch', 'run', 'sad', 'scared', 'shrug', 'sip', 'slap', 'sleep', 'smile', 'smug', 'stare', 'think', 'thumbsup', 'tickle', 'wave', 'wink', 'yeet'];
        return `https://kyoko.rei.my.id/api/v1/image.php?type=${valid.includes(action) ? action : 'neko'}`;
    }
};

export const EXTRACTORS = {
    nekosbest: (d) => d.results?.[0]?.url,
    waifuim: (d) => d.images?.[0]?.url,
    purrbot: (d) => d.link,
    waifupics: (d) => d.url,
    otakugifs: (d) => d.url,
    animeapi: (d) => d.url || d.link,
    nekosfun: (d) => d.image,
    kyoko: (d) => d.url || d.result?.[0],
    default: (d) => d.url || d.link || d.image || d.results?.[0]?.url
};

export const COMMANDS = Object.entries(ACTIONS_CONFIG).reduce((acc, [key, val]) => {
    acc.push(key, ...val.aliases);
    return acc;
}, []);

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
        name: key, label: config.label, emoji: config.emoji, nsfw: config.nsfw || false, aliases: config.aliases, providers: config.support
    }));
}

export function getActionsByCategory(category) {
    const categories = {
        'emociones': ['angry', 'annoyed', 'anxiety', 'awkward', 'betrayed', 'bitter', 'blank', 'blissful', 'blush', 'bored', 'calm', 'complacent', 'concerned', 'confused', 'content', 'crazy', 'curious', 'cynical', 'defeated', 'delusional', 'depressed', 'desperate', 'determined', 'disappointed', 'disgusted', 'dizzy', 'embarrassed', 'empty', 'envious', 'excited', 'exhausted', 'flustered', 'frustrated', 'grateful', 'guilty', 'happy', 'hopeful', 'hopeless', 'horrified', 'hysterical', 'indifferent', 'infatuated', 'irritated', 'jealous', 'lonely', 'love', 'lustful', 'melancholic', 'mischievous'],
        'gestos': ['backflip', 'beg', 'bow', 'burp', 'bye', 'clap', 'come', 'cough', 'crossarms', 'curtain', 'dodge', 'doubletake', 'dramatic', 'drool', 'faint', 'fart', 'flip', 'frontflip', 'greet', 'grovel', 'handshake', 'hide', 'hysteria', 'ignore', 'lurk', 'middlefinger', 'mime', 'nod', 'nom', 'notice', 'peek', 'point', 'pout', 'pray', 'salute', 'scan', 'scoot', 'scroll', 'shake', 'shh', 'shrug', 'sip', 'sit', 'slurp', 'smh', 'snap', 'sneeze', 'sparkle', 'spit', 'stare', 'stretch', 'strut', 'stumble', 'surrender', 'sweat', 'sweep', 'swing', 'thumbsdown', 'thumbsup', 'twirl', 'vanish', 'wait', 'walk', 'wander', 'wave', 'whistle', 'wiggle', 'wink', 'yawn', 'zoom'],
        'cariño': ['caress', 'carry', 'cheekkiss', 'cuddle', 'foreheadkiss', 'grouphug', 'handhold', 'handkiss', 'headpat', 'hug', 'kiss', 'lap', 'lean', 'lick', 'massage', 'nuzzle', 'pat', 'peck', 'pillow', 'pinch', 'poke', 'princesscarry', 'snuggle', 'stroke', 'tuckin', 'whisper'],
        'agresion': ['ambush', 'armbar', 'arrest', 'baka', 'bite', 'blackmail', 'block', 'bonk', 'bully', 'chainsaw', 'choke', 'crash', 'crush', 'cut', 'decapitate', 'disarm', 'dropkick', 'electrocute', 'explode', 'fight', 'fire', 'freeze', 'glomp', 'grab', 'gutpunch', 'headbang', 'headlock', 'judo', 'karate', 'kick', 'kill', 'knee', 'knockdown', 'poison', 'pummel', 'punch', 'push', 'scratch', 'shoot', 'slap', 'smash', 'spank', 'stab', 'strangle', 'suplex', 'tackle', 'throw', 'uppercut', 'whip', 'yeet'],
        'vida-diaria': ['bake', 'barbecue', 'bathe', 'call', 'celebrate', 'challenge', 'cheer', 'clean', 'code', 'cook', 'dab', 'dance', 'deal', 'dig', 'draw', 'drink', 'drive', 'eat', 'exercise', 'facepalm', 'feed', 'fish', 'fly', 'garden', 'highfive'],
        'nsfw': Object.keys(ACTIONS_CONFIG).filter(k => ACTIONS_CONFIG[k]?.nsfw)
    };
    return categories[category] || [];
}

export default { ACTIONS_CONFIG, COMMANDS, API_ENDPOINTS, EXTRACTORS, getRandomProvider, isNsfw, getActionInfo, listActions, getActionsByCategory };
                
