
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
      "chunk-CN7426JB.js",
      "chunk-E4WRMXXX.js"
    ],
    "route": "/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KQ4XVQOP.js",
      "chunk-E4WRMXXX.js"
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
    'index.csr.html': {size: 17900, hash: 'd00d21bdd2742ca6752355b880288e5b0f6522d2e433adda4b1d854740c9d29c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7058, hash: 'e8e4668e64edf1460cbba67492fdaa09cf9c5910a7625c77d04fbead2b6f7f37', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 97775, hash: '67b9ddb07c8b91466367500a1f882e7ca8999d2b8b0edb7ed2416ad9047e32f5', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'terms/index.html': {size: 43895, hash: '0d054e975018877a9017fdc078230f272ee64469f9e468d9391357c6203e3465', text: () => import('./assets-chunks/terms_index_html.mjs').then(m => m.default)},
    'cookies/index.html': {size: 46062, hash: '20de615d6563a4b73fff8833c63ee36849c6ef32684a1d4c4caccd6d0dfb64a8', text: () => import('./assets-chunks/cookies_index_html.mjs').then(m => m.default)},
    'faqs/index.html': {size: 44187, hash: '2f5f4a122cb77a788cc12c350818d70af978da4e156ea5a0efeebb8df7ace564', text: () => import('./assets-chunks/faqs_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 111621, hash: 'c5c63ebada79c2f1917ec069dbd9d2f23549b5c47b95194d61cc362cafd56d3c', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-GMAG773I.css': {size: 241019, hash: 'dMdVsZ2NyHY', text: () => import('./assets-chunks/styles-GMAG773I_css.mjs').then(m => m.default)}
  },
};
