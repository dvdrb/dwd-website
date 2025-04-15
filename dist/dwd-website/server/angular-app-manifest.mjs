
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
      "chunk-2Q74TYX4.js",
      "chunk-KU7SKL45.js"
    ],
    "route": "/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GZPORGFD.js",
      "chunk-KU7SKL45.js"
    ],
    "route": "/about-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KYU2K2B7.js"
    ],
    "route": "/cookie-policy"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KQLBIWBQ.js"
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
    'index.csr.html': {size: 14701, hash: '95b20a4a9bfa4ab9e275d35aa65f6f880b2811a75765822f0aa400d89a3287cc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3879, hash: 'a9607db61adef736717363f1a3d522d7139b8882e2b9a9f4a52ad548786ce179', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 94442, hash: 'fff4cf54789a71622d921d16c7b50596484631b88c8b880ded7901f3e12f7a0a', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 34204, hash: '4152bf43b739111caea6e224d49b5c5e820523537e81b38da70ef2bc4628f59f', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'faqs/index.html': {size: 40854, hash: 'cc8a25b2e17b94341c0fcf4e1861f27cb95c2d76da13b9d03333d0728b77400c', text: () => import('./assets-chunks/faqs_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 108288, hash: '652e1b9ab7fb6fcc04d06331166d97ba4d5b1254680d59f9e132afa87704d9b6', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-AJR4XJSF.css': {size: 240994, hash: 'INM1nXgjCAY', text: () => import('./assets-chunks/styles-AJR4XJSF_css.mjs').then(m => m.default)}
  },
};
