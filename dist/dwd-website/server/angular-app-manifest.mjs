
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PZTE2FQD.js",
      "chunk-IPAPKDGI.js"
    ],
    "route": "/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LO5JTCEK.js",
      "chunk-IPAPKDGI.js"
    ],
    "route": "/about-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YOAWKOHU.js"
    ],
    "route": "/cookies"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5C33CZGN.js"
    ],
    "route": "/terms"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JV4IZNRS.js"
    ],
    "route": "/faqs"
  },
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 34210, hash: 'd7c33f4537a237587230c861e6b3eb53c19d8a4812cab7493df4affcb167f848', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 23099, hash: 'f8015de606b1b56db7ba857113d2fbdbdf1fce38117763d5e577bd89bea81a20', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'cookies/index.html': {size: 61546, hash: '2b5983514d15e8e61e27fe83e328251deb709333501076561b143ad5639aef4b', text: () => import('./assets-chunks/cookies_index_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 113259, hash: '52c2f7aef85bd1368c66cd72497d8a8de090167be564cb544204f132e2f94a96', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'faqs/index.html': {size: 59671, hash: '1666ce85bc60a2b4ee0243aa43ed466133ca492b26dfcad65990098eda95430f', text: () => import('./assets-chunks/faqs_index_html.mjs').then(m => m.default)},
    'terms/index.html': {size: 59379, hash: 'bc175b9b83b18d562a0fa79a235dc1b93376f83479d4fd2c282d1fcdd717595b', text: () => import('./assets-chunks/terms_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 127105, hash: '931fc07d5efa8ecfd9d3f8945ddd4a40597f714cd87bdca9d5cb151d510aaec3', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-NKXJIVUT.css': {size: 238308, hash: '5MHQ+D0qb+A', text: () => import('./assets-chunks/styles-NKXJIVUT_css.mjs').then(m => m.default)}
  },
};
