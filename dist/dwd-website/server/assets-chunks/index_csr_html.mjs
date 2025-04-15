export default `<!DOCTYPE html>
<html data-beasties-container="">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>DWD-website</title>

    <!-- update the version number as needed -->
    <script defer="" src="/__/firebase/11.6.0/firebase-app-compat.js"></script>
    <!-- include only the Firebase features as you need -->
    <script defer="" src="/__/firebase/11.6.0/firebase-auth-compat.js"></script>
    <script defer="" src="/__/firebase/11.6.0/firebase-database-compat.js"></script>
    <script defer="" src="/__/firebase/11.6.0/firebase-firestore-compat.js"></script>
    <script defer="" src="/__/firebase/11.6.0/firebase-functions-compat.js"></script>
    <script defer="" src="/__/firebase/11.6.0/firebase-messaging-compat.js"></script>
    <script defer="" src="/__/firebase/11.6.0/firebase-storage-compat.js"></script>
    <script defer="" src="/__/firebase/11.6.0/firebase-analytics-compat.js"></script>
    <script defer="" src="/__/firebase/11.6.0/firebase-remote-config-compat.js"></script>
    <script defer="" src="/__/firebase/11.6.0/firebase-performance-compat.js"></script>
    <!-- 
      initialize the SDK after all desired features are loaded, set useEmulator to false
      to avoid connecting the SDK to running emulators.
    -->
    <script defer="" src="/__/firebase/init.js?useEmulator=true"></script>

    <style media="screen">
      body {
        background: #eceff1;
        color: rgba(0, 0, 0, 0.87);
        font-family: Roboto, Helvetica, Arial, sans-serif;
        margin: 0;
        padding: 0;
      }
      #message {
        background: white;
        max-width: 360px;
        margin: 100px auto 16px;
        padding: 32px 24px;
        border-radius: 3px;
      }
      #message h2 {
        color: #ffa100;
        font-weight: bold;
        font-size: 16px;
        margin: 0 0 8px;
      }
      #message h1 {
        font-size: 22px;
        font-weight: 300;
        color: rgba(0, 0, 0, 0.6);
        margin: 0 0 16px;
      }
      #message p {
        line-height: 140%;
        margin: 16px 0 24px;
        font-size: 14px;
      }
      #message a {
        display: block;
        text-align: center;
        background: #039be5;
        text-transform: uppercase;
        text-decoration: none;
        color: white;
        padding: 16px;
        border-radius: 4px;
      }
      #message,
      #message a {
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      }
      #load {
        color: rgba(0, 0, 0, 0.4);
        text-align: center;
        font-size: 13px;
      }
      @media (max-width: 600px) {
        body,
        #message {
          margin-top: 0;
          background: white;
          box-shadow: none;
        }
        body {
          border-top: 16px solid #ffa100;
        }
      }
    </style>
  <style>html{--mat-sys-background:#faf9fd;--mat-sys-error:#ba1a1a;--mat-sys-error-container:#ffdad6;--mat-sys-inverse-on-surface:#f2f0f4;--mat-sys-inverse-primary:#abc7ff;--mat-sys-inverse-surface:#2f3033;--mat-sys-on-background:#1a1b1f;--mat-sys-on-error:#ffffff;--mat-sys-on-error-container:#93000a;--mat-sys-on-primary:#ffffff;--mat-sys-on-primary-container:#00458f;--mat-sys-on-primary-fixed:#001b3f;--mat-sys-on-primary-fixed-variant:#00458f;--mat-sys-on-secondary:#ffffff;--mat-sys-on-secondary-container:#3e4759;--mat-sys-on-secondary-fixed:#131c2b;--mat-sys-on-secondary-fixed-variant:#3e4759;--mat-sys-on-surface:#1a1b1f;--mat-sys-on-surface-variant:#44474e;--mat-sys-on-tertiary:#ffffff;--mat-sys-on-tertiary-container:#0000ef;--mat-sys-on-tertiary-fixed:#00006e;--mat-sys-on-tertiary-fixed-variant:#0000ef;--mat-sys-outline:#74777f;--mat-sys-outline-variant:#c4c6d0;--mat-sys-primary:#005cbb;--mat-sys-primary-container:#d7e3ff;--mat-sys-primary-fixed:#d7e3ff;--mat-sys-primary-fixed-dim:#abc7ff;--mat-sys-scrim:#000000;--mat-sys-secondary:#565e71;--mat-sys-secondary-container:#dae2f9;--mat-sys-secondary-fixed:#dae2f9;--mat-sys-secondary-fixed-dim:#bec6dc;--mat-sys-shadow:#000000;--mat-sys-surface:#faf9fd;--mat-sys-surface-bright:#faf9fd;--mat-sys-surface-container:#efedf0;--mat-sys-surface-container-high:#e9e7eb;--mat-sys-surface-container-highest:#e3e2e6;--mat-sys-surface-container-low:#f4f3f6;--mat-sys-surface-container-lowest:#ffffff;--mat-sys-surface-dim:#dbd9dd;--mat-sys-surface-tint:#005cbb;--mat-sys-surface-variant:#e0e2ec;--mat-sys-tertiary:#343dff;--mat-sys-tertiary-container:#e0e0ff;--mat-sys-tertiary-fixed:#e0e0ff;--mat-sys-tertiary-fixed-dim:#bec2ff;--mat-sys-neutral-variant20:#2d3038;--mat-sys-neutral10:#1a1b1f}html{--mat-sys-level0:0px 0px 0px 0px rgba(0, 0, 0, .2), 0px 0px 0px 0px rgba(0, 0, 0, .14), 0px 0px 0px 0px rgba(0, 0, 0, .12)}html{--mat-sys-level1:0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12)}html{--mat-sys-level2:0px 3px 3px -2px rgba(0, 0, 0, .2), 0px 3px 4px 0px rgba(0, 0, 0, .14), 0px 1px 8px 0px rgba(0, 0, 0, .12)}html{--mat-sys-level3:0px 3px 5px -1px rgba(0, 0, 0, .2), 0px 6px 10px 0px rgba(0, 0, 0, .14), 0px 1px 18px 0px rgba(0, 0, 0, .12)}html{--mat-sys-level4:0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12)}html{--mat-sys-level5:0px 7px 8px -4px rgba(0, 0, 0, .2), 0px 12px 17px 2px rgba(0, 0, 0, .14), 0px 5px 22px 4px rgba(0, 0, 0, .12)}html{--mat-sys-body-large:400 1rem / 1.5rem Roboto;--mat-sys-body-large-font:Roboto;--mat-sys-body-large-line-height:1.5rem;--mat-sys-body-large-size:1rem;--mat-sys-body-large-tracking:.031rem;--mat-sys-body-large-weight:400;--mat-sys-body-medium:400 .875rem / 1.25rem Roboto;--mat-sys-body-medium-font:Roboto;--mat-sys-body-medium-line-height:1.25rem;--mat-sys-body-medium-size:.875rem;--mat-sys-body-medium-tracking:.016rem;--mat-sys-body-medium-weight:400;--mat-sys-body-small:400 .75rem / 1rem Roboto;--mat-sys-body-small-font:Roboto;--mat-sys-body-small-line-height:1rem;--mat-sys-body-small-size:.75rem;--mat-sys-body-small-tracking:.025rem;--mat-sys-body-small-weight:400;--mat-sys-display-large:400 3.562rem / 4rem Roboto;--mat-sys-display-large-font:Roboto;--mat-sys-display-large-line-height:4rem;--mat-sys-display-large-size:3.562rem;--mat-sys-display-large-tracking:-.016rem;--mat-sys-display-large-weight:400;--mat-sys-display-medium:400 2.812rem / 3.25rem Roboto;--mat-sys-display-medium-font:Roboto;--mat-sys-display-medium-line-height:3.25rem;--mat-sys-display-medium-size:2.812rem;--mat-sys-display-medium-tracking:0;--mat-sys-display-medium-weight:400;--mat-sys-display-small:400 2.25rem / 2.75rem Roboto;--mat-sys-display-small-font:Roboto;--mat-sys-display-small-line-height:2.75rem;--mat-sys-display-small-size:2.25rem;--mat-sys-display-small-tracking:0;--mat-sys-display-small-weight:400;--mat-sys-headline-large:400 2rem / 2.5rem Roboto;--mat-sys-headline-large-font:Roboto;--mat-sys-headline-large-line-height:2.5rem;--mat-sys-headline-large-size:2rem;--mat-sys-headline-large-tracking:0;--mat-sys-headline-large-weight:400;--mat-sys-headline-medium:400 1.75rem / 2.25rem Roboto;--mat-sys-headline-medium-font:Roboto;--mat-sys-headline-medium-line-height:2.25rem;--mat-sys-headline-medium-size:1.75rem;--mat-sys-headline-medium-tracking:0;--mat-sys-headline-medium-weight:400;--mat-sys-headline-small:400 1.5rem / 2rem Roboto;--mat-sys-headline-small-font:Roboto;--mat-sys-headline-small-line-height:2rem;--mat-sys-headline-small-size:1.5rem;--mat-sys-headline-small-tracking:0;--mat-sys-headline-small-weight:400;--mat-sys-label-large:500 .875rem / 1.25rem Roboto;--mat-sys-label-large-font:Roboto;--mat-sys-label-large-line-height:1.25rem;--mat-sys-label-large-size:.875rem;--mat-sys-label-large-tracking:.006rem;--mat-sys-label-large-weight:500;--mat-sys-label-large-weight-prominent:700;--mat-sys-label-medium:500 .75rem / 1rem Roboto;--mat-sys-label-medium-font:Roboto;--mat-sys-label-medium-line-height:1rem;--mat-sys-label-medium-size:.75rem;--mat-sys-label-medium-tracking:.031rem;--mat-sys-label-medium-weight:500;--mat-sys-label-medium-weight-prominent:700;--mat-sys-label-small:500 .688rem / 1rem Roboto;--mat-sys-label-small-font:Roboto;--mat-sys-label-small-line-height:1rem;--mat-sys-label-small-size:.688rem;--mat-sys-label-small-tracking:.031rem;--mat-sys-label-small-weight:500;--mat-sys-title-large:400 1.375rem / 1.75rem Roboto;--mat-sys-title-large-font:Roboto;--mat-sys-title-large-line-height:1.75rem;--mat-sys-title-large-size:1.375rem;--mat-sys-title-large-tracking:0;--mat-sys-title-large-weight:400;--mat-sys-title-medium:500 1rem / 1.5rem Roboto;--mat-sys-title-medium-font:Roboto;--mat-sys-title-medium-line-height:1.5rem;--mat-sys-title-medium-size:1rem;--mat-sys-title-medium-tracking:.009rem;--mat-sys-title-medium-weight:500;--mat-sys-title-small:500 .875rem / 1.25rem Roboto;--mat-sys-title-small-font:Roboto;--mat-sys-title-small-line-height:1.25rem;--mat-sys-title-small-size:.875rem;--mat-sys-title-small-tracking:.006rem;--mat-sys-title-small-weight:500}html{--mat-sys-corner-extra-large:28px;--mat-sys-corner-extra-large-top:28px 28px 0 0;--mat-sys-corner-extra-small:4px;--mat-sys-corner-extra-small-top:4px 4px 0 0;--mat-sys-corner-full:9999px;--mat-sys-corner-large:16px;--mat-sys-corner-large-end:0 16px 16px 0;--mat-sys-corner-large-start:16px 0 0 16px;--mat-sys-corner-large-top:16px 16px 0 0;--mat-sys-corner-medium:12px;--mat-sys-corner-none:0;--mat-sys-corner-small:8px}html{--mat-sys-dragged-state-layer-opacity:.16;--mat-sys-focus-state-layer-opacity:.12;--mat-sys-hover-state-layer-opacity:.08;--mat-sys-pressed-state-layer-opacity:.12}:root{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-black:#000;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-gray-100:#f8f9fa;--bs-gray-200:#e9ecef;--bs-gray-300:#dee2e6;--bs-gray-400:#ced4da;--bs-gray-500:#adb5bd;--bs-gray-600:#6c757d;--bs-gray-700:#495057;--bs-gray-800:#343a40;--bs-gray-900:#212529;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-primary-rgb:13,110,253;--bs-secondary-rgb:108,117,125;--bs-success-rgb:25,135,84;--bs-info-rgb:13,202,240;--bs-warning-rgb:255,193,7;--bs-danger-rgb:220,53,69;--bs-light-rgb:248,249,250;--bs-dark-rgb:33,37,41;--bs-primary-text-emphasis:#052c65;--bs-secondary-text-emphasis:#2b2f32;--bs-success-text-emphasis:#0a3622;--bs-info-text-emphasis:#055160;--bs-warning-text-emphasis:#664d03;--bs-danger-text-emphasis:#58151c;--bs-light-text-emphasis:#495057;--bs-dark-text-emphasis:#495057;--bs-primary-bg-subtle:#cfe2ff;--bs-secondary-bg-subtle:#e2e3e5;--bs-success-bg-subtle:#d1e7dd;--bs-info-bg-subtle:#cff4fc;--bs-warning-bg-subtle:#fff3cd;--bs-danger-bg-subtle:#f8d7da;--bs-light-bg-subtle:#fcfcfd;--bs-dark-bg-subtle:#ced4da;--bs-primary-border-subtle:#9ec5fe;--bs-secondary-border-subtle:#c4c8cb;--bs-success-border-subtle:#a3cfbb;--bs-info-border-subtle:#9eeaf9;--bs-warning-border-subtle:#ffe69c;--bs-danger-border-subtle:#f1aeb5;--bs-light-border-subtle:#e9ecef;--bs-dark-border-subtle:#adb5bd;--bs-white-rgb:255,255,255;--bs-black-rgb:0,0,0;--bs-font-sans-serif:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--bs-gradient:linear-gradient(180deg, rgba(255, 255, 255, .15), rgba(255, 255, 255, 0));--bs-body-font-family:var(--bs-font-sans-serif);--bs-body-font-size:1rem;--bs-body-font-weight:400;--bs-body-line-height:1.5;--bs-body-color:#212529;--bs-body-color-rgb:33,37,41;--bs-body-bg:#fff;--bs-body-bg-rgb:255,255,255;--bs-emphasis-color:#000;--bs-emphasis-color-rgb:0,0,0;--bs-secondary-color:rgba(33, 37, 41, .75);--bs-secondary-color-rgb:33,37,41;--bs-secondary-bg:#e9ecef;--bs-secondary-bg-rgb:233,236,239;--bs-tertiary-color:rgba(33, 37, 41, .5);--bs-tertiary-color-rgb:33,37,41;--bs-tertiary-bg:#f8f9fa;--bs-tertiary-bg-rgb:248,249,250;--bs-heading-color:inherit;--bs-link-color:#0d6efd;--bs-link-color-rgb:13,110,253;--bs-link-decoration:underline;--bs-link-hover-color:#0a58ca;--bs-link-hover-color-rgb:10,88,202;--bs-code-color:#d63384;--bs-highlight-color:#212529;--bs-highlight-bg:#fff3cd;--bs-border-width:1px;--bs-border-style:solid;--bs-border-color:#dee2e6;--bs-border-color-translucent:rgba(0, 0, 0, .175);--bs-border-radius:.375rem;--bs-border-radius-sm:.25rem;--bs-border-radius-lg:.5rem;--bs-border-radius-xl:1rem;--bs-border-radius-xxl:2rem;--bs-border-radius-2xl:var(--bs-border-radius-xxl);--bs-border-radius-pill:50rem;--bs-box-shadow:0 .5rem 1rem rgba(0, 0, 0, .15);--bs-box-shadow-sm:0 .125rem .25rem rgba(0, 0, 0, .075);--bs-box-shadow-lg:0 1rem 3rem rgba(0, 0, 0, .175);--bs-box-shadow-inset:inset 0 1px 2px rgba(0, 0, 0, .075);--bs-focus-ring-width:.25rem;--bs-focus-ring-opacity:.25;--bs-focus-ring-color:rgba(13, 110, 253, .25);--bs-form-valid-color:#198754;--bs-form-valid-border-color:#198754;--bs-form-invalid-color:#dc3545;--bs-form-invalid-border-color:#dc3545}*,:after,:before{box-sizing:border-box}@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-body-font-family);font-size:var(--bs-body-font-size);font-weight:var(--bs-body-font-weight);line-height:var(--bs-body-line-height);color:var(--bs-body-color);text-align:var(--bs-body-text-align);background-color:var(--bs-body-bg);-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}:root{--bs-breakpoint-xs:0;--bs-breakpoint-sm:576px;--bs-breakpoint-md:768px;--bs-breakpoint-lg:992px;--bs-breakpoint-xl:1200px;--bs-breakpoint-xxl:1400px}:root{--bs-btn-close-filter: }:root{--bs-carousel-indicator-active-bg:#fff;--bs-carousel-caption-color:#fff;--bs-carousel-control-icon-filter: }html,body{height:100%}body{margin:0}html{scroll-behavior:smooth}</style><link rel="stylesheet" href="styles-AJR4XJSF.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-AJR4XJSF.css"></noscript></head>
  <body ngcm="">
    <app-root></app-root>
  <link rel="modulepreload" href="chunk-HZCHTXH6.js"><link rel="modulepreload" href="chunk-7UHOS57C.js"><link rel="modulepreload" href="chunk-B35GLJHO.js"><link rel="modulepreload" href="chunk-DSH4HAK7.js"><link rel="modulepreload" href="chunk-4CLCTAJ7.js"><script src="polyfills-2UIMN3KP.js" type="module"></script><script src="main-SGOTVKTB.js" type="module"></script></body>
</html>
`;