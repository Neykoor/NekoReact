# 🎌 NekoReact

> Motor de interacciones anime para bots de WhatsApp con soporte multi-API, aliases en español y resolución de LIDs via LidSync.

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?style=flat-square&logo=node.js)](https://nodejs.org)
[![ESM](https://img.shields.io/badge/ESM-native-blue?style=flat-square)](https://nodejs.org/api/esm.html)
[![LidSync](https://img.shields.io/badge/LidSync-integrado-purple?style=flat-square)](https://github.com/Neykoor/LidSync)
[![License](https://img.shields.io/badge/Licencia-MIT-yellow?style=flat-square)](LICENSE)

**NekoReact** es una librería modular para enviar GIFs de interacciones anime en bots de WhatsApp basados en [Baileys](https://github.com/WhiskeySockets/Baileys). Soporta múltiples APIs con fallback automático, aliases de comandos en español e inglés, y normalización de JIDs via [LidSync](https://github.com/Neykoor/LidSync).

---

## ✨ Características

| Característica | Descripción |
|---|---|
| 🔄 **Multi-API con fallback** | Intenta providers en orden de prioridad; si uno falla, pasa al siguiente automáticamente |
| 🌐 **6 providers integrados** | nekosbest, waifupics, nekoslife, purrbot, waifuim, nekosapi |
| 🇪🇸 **Aliases en español** | Cada acción acepta comandos en inglés y español (`hug`, `abrazar`, `abrazo`) |
| 🧬 **LidSync integrado** | Resolución automática de JIDs multi-dispositivo cuando el socket lo soporta |
| ⚡ **fetch nativo** | Sin dependencias de HTTP externas — requiere Node.js 18+ |
| ⏱️ **Timeout configurable** | Control de tiempo de espera por request via `AbortSignal.timeout` |
| 🎛️ **Prioridad personalizable** | Define el orden de providers según tus preferencias |

---

## 📦 Instalación

```bash
npm install git+https://github.com/Neykoor/NekoReact.git
```

O agrega manualmente a tu `package.json`:

```json
"dependencies": {
    "nekoreact": "git+https://github.com/Neykoor/NekoReact.git",
    "lidsync": "git+https://github.com/Neykoor/LidSync.git"
}
```

> **Requisito:** Node.js 18+ (usa `fetch` nativo). El socket de Baileys debe tener [LidSync](https://github.com/Neykoor/LidSync) aplicado para resolución completa de JIDs.

---

## 🚀 Inicio Rápido

```js
import { NekoReact } from 'nekoreact';

const neko = new NekoReact(sock, {
    priority: ['nekosbest', 'waifupics', 'purrbot'],
    timeout: 5000
});

// En tu handler de mensajes
await neko.send('hug', m);
await neko.send('abrazar', m);  // Alias en español, misma acción
```

---

## 📚 Referencia de API

### `new NekoReact(sock, options?)`

| Opción | Tipo | Default | Descripción |
|---|---|---|---|
| `priority` | `string[]` | `['nekosbest', 'waifupics', 'purrbot', 'waifuim']` | Orden de providers a intentar |
| `timeout` | `number` | `5000` | Timeout en ms por request |

---

### `await neko.send(action, m, customText?)`

Envía un GIF de interacción al chat. Requiere que el mensaje tenga una mención (`@usuario`).

| Parámetro | Tipo | Descripción |
|---|---|---|
| `action` | `string` | Nombre de la acción o alias (ej. `'hug'`, `'abrazar'`) |
| `m` | `object` | Objeto de mensaje de Baileys |
| `customText` | `string?` | Texto personalizado. Soporta `{user1}` y `{user2}` como placeholders |

**Retorna:** El resultado de `sock.sendMessage`, o `null` si no hay mención.

```js
// Caption automático
await neko.send('hug', m);
// → ✨ @12345 le dio un hug a @67890

// Caption personalizado
await neko.send('slap', m, '👋 {user1} le pegó una bofetada a {user2}');
```

---

### `await neko._getGif(action)`

Obtiene una URL de GIF para la acción dada, intentando providers en orden de prioridad.

**Retorna:** `{ gif: string, label: string }`

**Throws:** `Acción "${action}" no configurada.` · `Sin recursos para: ${action}`

---

## 🎭 Acciones Disponibles

Todas las acciones aceptan el nombre en inglés y sus aliases en español.

| Acción | Aliases | Providers |
|---|---|---|
| `hug` | `abrazar`, `abrazo` | Todos |
| `kiss` | `muak`, `besar` | Todos |
| `slap` | `bofetada`, `cachetada` | Todos |
| `pat` | `acariciar`, `cariño` | Todos |
| `cry` | `llorar`, `lloro` | Todos |
| `cuddle` | `acurrucar` | Todos |
| `smile` | `sonreir`, `sonrisa` | Todos |
| `blush` | `sonrojarse`, `penita` | Todos |
| `wave` | `saludar`, `hola` | Todos |
| `wink` | `guiñar`, `guiño` | Todos |
| `bite` | `morder` | nekosbest, purrbot, waifupics |
| `dance` | `bailar`, `baile` | nekosbest, purrbot |
| `kill` | `matar` | purrbot, waifupics |
| `tickle` | `cosquillas` | nekosbest, purrbot, nekoslife |
| `bonk` | `golpe`, `tabla` | waifupics |
| `handhold` | `tomar`, `mano` | nekosbest, waifupics |
| `happy` | `feliz`, `alegre` | waifupics, nekosapi |
| `smug` | `presumir`, `altanero` | waifupics, nekosapi |
| `bully` | `molestar` | waifupics |
| ... | | |

Para la lista completa de acciones y aliases, consulta [`src/constants.js`](src/constants.js).

---

## 🌐 Providers

| Provider | Base URL |
|---|---|
| `nekosbest` | `https://nekos.best/api/v2/` |
| `waifupics` | `https://api.waifu.pics/sfw/` |
| `nekoslife` | `https://nekos.life/api/v2/img/` |
| `purrbot` | `https://purrbot.site/api/img/sfw/` |
| `waifuim` | `https://api.waifu.im/search` |
| `nekosapi` | `https://nekosapi.com/api/v2/images/` |

El fallback es automático: si un provider falla o no tiene la acción, NekoReact intenta el siguiente en el orden de `priority`.

---

## 🔗 Integración con LidSync

```js
import { pluginLid } from 'lidsync';
import store from './lib/store.js';
import { NekoReact } from 'nekoreact';

async function start() {
    let sock = await connectToWhatsApp();
    store.bind(sock.ev);
    sock = pluginLid(sock, { store });

    const neko = new NekoReact(sock);
}
```

Si el socket no tiene LidSync, NekoReact usa el JID original como fallback sin lanzar errores.

---

## ⚠️ Consideraciones

- **Node.js 18+ requerido:** NekoReact usa `fetch` y `AbortSignal.timeout` nativos.
- **Mención requerida:** `send()` retorna `null` si el mensaje no tiene un usuario mencionado.
- **Aliases únicos:** Cada alias resuelve a exactamente una acción canónica. En caso de ambigüedad, gana la primera coincidencia en `ACTIONS_CONFIG`.
- **Prioridad por defecto:** No incluye `nekoslife` ni `nekosapi` en el orden base — agrégalos en `options.priority` si los necesitas.

---

## 📄 Licencia

MIT — [Neykoor](https://github.com/Neykoor)
