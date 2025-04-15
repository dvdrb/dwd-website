import './polyfills.server.mjs';
import{h as H,k as N,l as j,o as R}from"./chunk-IGJZ6RXT.mjs";import{a as B,b as W,c as G}from"./chunk-I2ZIW5RW.mjs";import{M as V,N as L,x as C}from"./chunk-267LKKFM.mjs";import{Ec as z,Gc as b,Jb as n,Kb as _,Lb as A,Mb as I,Nb as O,Ob as T,Rb as F,Sa as d,Xa as S,ba as x,cb as g,db as v,gb as M,oa as p,ob as D,pa as m,pb as f,tb as e,ub as t,vb as h,wb as k,yb as u,zb as c}from"./chunk-2MPIDPWJ.mjs";import"./chunk-S6KH3LOX.mjs";var U=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=v({type:a});static \u0275inj=x({imports:[C,C]})}return a})();var X=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=v({type:a});static \u0275inj=x({})}return a})();var q=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=v({type:a});static \u0275inj=x({imports:[C,X,B]})}return a})();function ie(a,s){if(a&1){let i=k();e(0,"div",9)(1,"div",10),u("mouseleave",function(){let o=p(i).index,l=c();return m(l.isCollapsed[o]=!0)})("mouseenter",function(){let o=p(i).index,l=c();return m(l.isCollapsed[o]=!1)}),e(2,"h1",11),n(3),t(),e(4,"p",12),n(5),t()(),e(6,"div",13)(7,"div",14,0),u("mouseleave",function(){let o=p(i).index,l=c();return m(l.isCollapsed[o]=!0)})("mouseenter",function(){let o=p(i).index,l=c();return m(l.isCollapsed[o]=!1)}),T("ngbCollapseChange",function(o){let l=p(i).index,y=c();return O(y.isCollapsed[l],o)||(y.isCollapsed[l]=o),m(o)}),e(9,"div",15)(10,"div",16),n(11),t()()()()()}if(a&2){let i=s.$implicit,r=s.index,o=c();d(),D("aria-expanded",!o.isCollapsed[r]),d(2),_(i.number),d(2),_(i.title),d(2),I("ngbCollapse",o.isCollapsed[r]),f("horizontal",!0),d(4),A(" ",i.description," ")}}function ae(a,s){if(a&1){let i=k();e(0,"div",9)(1,"div",17),u("click",function(){let o=p(i).index,l=c();return m(l.isCollapsed[o]=!l.isCollapsed[o])}),e(2,"h1",11),n(3),t(),e(4,"p",12),n(5),t()(),e(6,"div")(7,"div",18,0),T("ngbCollapseChange",function(o){let l=p(i).index,y=c();return O(y.isCollapsed[l],o)||(y.isCollapsed[l]=o),m(o)}),e(9,"div",19)(10,"div",16),n(11),t()()()()()}if(a&2){let i=s.$implicit,r=s.index,o=c();d(),D("aria-expanded",!o.isCollapsed[r]),d(2),_(i.number),d(2),_(i.title),d(2),I("ngbCollapse",o.isCollapsed[r]),d(4),A(" ",i.description," ")}}var E=class a{isCollapsed=Array(4).fill(!0);steps=[{number:"01",title:"Consult your idea",description:"We start by understanding your vision and goals-then help shape them into a clear, actionable plan."},{number:"02",title:"Choose",description:"We recommend the most effective technologies based on your needs, scalability, and timeline."},{number:"03",title:"Design",description:"From wireframes to UI/UX, we design intuitive, user-focused experiences that stand out."},{number:"04",title:"Develop",description:"Our developers bring your product to life with clean code and reliable architecture."}];static \u0275fac=function(i){return new(i||a)};static \u0275cmp=g({type:a,selectors:[["app-development"]],decls:14,vars:2,consts:[["collapse","ngbCollapse"],[1,"development-container","d-none","d-lg-block"],[1,"title"],[1,"title-blue"],[1,"d-flex"],["class","container",4,"ngFor","ngForOf"],[1,"development-container","d-lg-none"],[1,"title-blue","m-0"],[1,"d-flex","flex-column"],[1,"container"],["aria-controls","collapseExample",1,"collapse-container","d-flex","flex-column","justify-content-between",3,"mouseleave","mouseenter"],[1,"number"],[1,"step-title"],[2,"min-height","150px"],[2,"max-width","300px",3,"mouseleave","mouseenter","ngbCollapseChange","ngbCollapse","horizontal"],[1,"card",2,"width","300px"],[1,"card-body"],["aria-controls","collapseExample",1,"collapse-container","d-flex","flex-column","justify-content-between",3,"click"],[2,"max-width","100%",3,"ngbCollapseChange","ngbCollapse"],[1,"card"]],template:function(i,r){i&1&&(e(0,"div",1)(1,"p",2)(2,"span",3),n(3," The Development process"),t(),n(4," that we go through with the client "),t(),e(5,"div",4),M(6,ie,12,6,"div",5),t()(),e(7,"div",6)(8,"div",2)(9,"p",7),n(10,"The Development process"),t(),n(11," that we go through with the client "),t(),e(12,"div",8),M(13,ae,12,5,"div",5),t()()),i&2&&(d(6),f("ngForOf",r.steps),d(7),f("ngForOf",r.steps))},dependencies:[U,b,z,q,L,V],styles:[".development-container[_ngcontent-%COMP%]{background-color:#1a1a1a;padding:60px 90px;border-bottom:.5px solid #e09292;border-top:.5px solid #ffffff}.collapse-container[_ngcontent-%COMP%]{color:#fff;width:150px;height:150px;border-left:1px solid #1268b3;padding-left:30px}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row}.card[_ngcontent-%COMP%]{background-color:#1a1a1a;height:150px;border:none;color:#fff}.title[_ngcontent-%COMP%]{font-family:Space Grotesk,sans-serif;font-size:20px;font-weight:500;line-height:24px;text-transform:uppercase;color:#fff;margin-bottom:50px}.title-blue[_ngcontent-%COMP%]{color:#1268b3}.number[_ngcontent-%COMP%]{font-family:IBM Plex Sans,sans-serif;font-size:40px;font-weight:700;line-height:48px;text-transform:uppercase}.step-title[_ngcontent-%COMP%], .card-body[_ngcontent-%COMP%]{font-family:Space Grotesk,sans-serif;font-size:16px;font-weight:400;line-height:24px}@media (max-width: 1070px){.development-container[_ngcontent-%COMP%]{padding:60px 30px}}@media (max-width: 992px){.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.collapse-container[_ngcontent-%COMP%]{color:#fff;width:150px;height:150px;border-left:none;padding-left:0;border-top:1px solid #1268b3;padding-top:20px;margin-right:50px;margin-bottom:35px}.number[_ngcontent-%COMP%]{font-family:IBM Plex Sans,sans-serif;font-size:32px;font-weight:700;line-height:48px;text-transform:uppercase;letter-spacing:-1%;align-self:flex-start}.title[_ngcontent-%COMP%]{font-family:Space Grotesk,sans-serif;font-size:20px;font-weight:500;line-height:24px;text-transform:uppercase;color:#fff;margin-bottom:50px;justify-self:center;width:200px}.card[_ngcontent-%COMP%]{width:210px;height:auto;padding-right:0!important;padding-left:0!important;margin-top:40px;margin-bottom:40px}.step-title[_ngcontent-%COMP%]{font-family:Space Grotesk,sans-serif;font-size:14px;font-weight:400;line-height:24px;align-self:flex-start}.card-body[_ngcontent-%COMP%]{font-family:Space Grotesk,sans-serif;font-size:12px;font-weight:400;line-height:24px}}"]})};var P=class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=g({type:a,selectors:[["app-solutions"]],decls:46,vars:0,consts:[[1,"solutions-container","d-none","d-md-flex"],[1,"gap-1"],[1,"title"],[1,"subtitle"],[1,"gap-2","d-flex"],[1,"card"],[1,"card-title"],[1,"card-content","px-4"],[1,"card-subtitle"],[1,"card-description"],[1,"solutions-container","d-md-none"],[1,"gap-2","d-flex","flex-column"],[1,"card-title","mt-5"]],template:function(i,r){i&1&&(e(0,"div",0)(1,"div",1)(2,"p",2),n(3,"industries"),t(),e(4,"p",3),n(5,"Solutions for Every Industry"),t()(),e(6,"div",4)(7,"div",5)(8,"p",6),n(9,"Finance"),t(),e(10,"div",7)(11,"p",8),n(12,"Finance, Banking, & Insurance"),t(),e(13,"p",9),n(14," At Done Web Design, we empower financial services companies, from startups to established banks, to navigate the complexities of modern technology, customer demands, and regional regulations. Our solutions include cutting-edge payment systems, open banking, digital and mobile banking applications, innovative lending platforms, blockchain-based solutions, and sophisticated investment and trading platforms. "),t()()(),e(15,"div",5)(16,"p",6),n(17,"ecommerce"),t(),e(18,"div",7)(19,"p",8),n(20,"eCommerce, Retail, & Consumer Goods"),t(),e(21,"p",9),n(22," Done Web Design specializes in crafting tailored eCommerce platforms for both online and offline retailers. We design and implement custom software that boosts operational efficiency, reduces costs, and enhances transparency. With over 12 years of experience in digital shelf analytics, we deliver solutions that drive higher conversion rates and increased revenue, perfectly balancing the needs of merchants and consumers. "),t()()()()(),e(23,"div",10)(24,"div",1)(25,"p",2),n(26,"industries"),t(),e(27,"p",3),n(28,"Solutions for Every Industry"),t()(),e(29,"div",11)(30,"div",5)(31,"p",6),n(32,"Finance"),t(),e(33,"div",7)(34,"p",8),n(35,"Finance, Banking, & Insurance"),t(),e(36,"p",9),n(37," At Done Web Design, we empower financial services companies, from startups to established banks, to navigate the complexities of modern technology, customer demands, and regional regulations. Our solutions include cutting-edge payment systems, open banking, digital and mobile banking applications, innovative lending platforms, blockchain-based solutions, and sophisticated investment and trading platforms. "),t()()(),e(38,"div",5)(39,"p",12),n(40,"ecommerce"),t(),e(41,"div",7)(42,"p",8),n(43,"eCommerce, Retail, & Consumer Goods"),t(),e(44,"p",9),n(45," Done Web Design specializes in crafting tailored eCommerce platforms for both online and offline retailers. We design and implement custom software that boosts operational efficiency, reduces costs, and enhances transparency. With over 12 years of experience in digital shelf analytics, we deliver solutions that drive higher conversion rates and increased revenue, perfectly balancing the needs of merchants and consumers. "),t()()()()())},dependencies:[b],styles:[".solutions-container[_ngcontent-%COMP%]{background-color:#1a1a1a;border:none;padding:52px 90px;gap:10px;display:flex;flex-direction:column}.title[_ngcontent-%COMP%]{font-family:Space Grotesk,sans-serif;font-size:20px;font-weight:500;line-height:24px;text-transform:uppercase;color:#1268b3;margin-bottom:0}.subtitle[_ngcontent-%COMP%]{font-family:IBM Plex Sans,sans-serif;font-size:40px;font-weight:700;line-height:48px;letter-spacing:-1%;color:#fff}.gap-2[_ngcontent-%COMP%]{gap:12px}.card[_ngcontent-%COMP%]{border:none;background-color:#1a1a1a;gap:32px}.card-title[_ngcontent-%COMP%]{font-family:Space Grotesk,sans-serif;font-size:20px;font-weight:500;line-height:100%;text-transform:uppercase;color:#1268b3}.card-content[_ngcontent-%COMP%]{border-left:1px solid #ffffff;gap:20px;display:flex;flex-direction:column}.card-subtitle[_ngcontent-%COMP%]{font-family:IBM Plex Sans,sans-serif;font-size:20px;font-weight:600;line-height:24px;color:#fff}.card-description[_ngcontent-%COMP%]{font-family:Space Grotesk,sans-serif;font-size:16px;font-weight:400;line-height:24px;color:#fff}@media (max-width: 768px){.title[_ngcontent-%COMP%]{font-family:Space Grotesk,sans-serif;font-size:16px;font-weight:500;line-height:24px;text-transform:uppercase;color:#1268b3;margin-bottom:0}.subtitle[_ngcontent-%COMP%]{font-family:IBM Plex Sans,sans-serif;font-size:20px;font-weight:700;line-height:48px;letter-spacing:-1%;color:#fff}.card-subtitle[_ngcontent-%COMP%]{font-family:IBM Plex Sans,sans-serif;font-size:16px;font-weight:600;line-height:24px;color:#fff}.card-description[_ngcontent-%COMP%]{font-family:Space Grotesk,sans-serif;font-size:12px;font-weight:400;line-height:24px;color:#fff}.solutions-container[_ngcontent-%COMP%]{background-color:#1a1a1a;border:none;padding:52px 50px;gap:10px;display:flex;flex-direction:column}}"]})};var K=()=>["/"],Y=class a{constructor(s,i){this.router=s;this.route=i}ngOnInit(){this.route.fragment.subscribe(s=>{s&&this.scrollToElement(s)})}ngAfterViewInit(){setTimeout(()=>{let s=this.route.snapshot.fragment;s&&this.scrollToElement(s)},500)}scrollToElement(s){this.router.navigate(["/"],{fragment:s}).then(()=>{setTimeout(()=>{let i=document.getElementById(s);i&&i.scrollIntoView({behavior:"smooth",block:"center"})},100)})}static \u0275fac=function(i){return new(i||a)(S(N),S(H))};static \u0275cmp=g({type:a,selectors:[["app-homepage"]],decls:41,vars:6,consts:[[1,"home-container","d-none","d-lg-block"],[1,"logo"],["src","/dwd-logo-2.png","alt","DWD Logo"],[1,"hero-text"],[1,"title"],[1,"with-us","title"],[1,"d-flex","justify-content-between"],[1,"description"],[1,"book-call-btn","d-flex","justify-content-center","align-items-center",3,"click","routerLink","fragment"],[1,"material-icons-outlined"],[1,"home-container","d-flex","d-lg-none"],[1,""],["id","development-process"],["id","industries"],["id","top-challenges"],["id","contact-us"]],template:function(i,r){i&1&&(e(0,"div")(1,"div",0)(2,"div",1),h(3,"img",2),t(),e(4,"div",3)(5,"p",4),n(6,"The path to your success,"),t(),e(7,"p",5),n(8,"With us."),t(),e(9,"div",6)(10,"p",7),n(11," Done Web Design - "),e(12,"span"),n(13," We build websites that get results. Fast, modern, and made to grow your Brand."),t()(),e(14,"button",8),u("click",function(){return r.scrollToElement("contact-us")}),e(15,"span",9),n(16," call "),t(),n(17," Book a call "),t()()()(),e(18,"div",10)(19,"div",3)(20,"p",4),n(21,"The path to your success,"),t(),e(22,"p",5),n(23,"With us."),t(),e(24,"div",11)(25,"p",7),n(26," Done Web Design - "),e(27,"span"),n(28," We build websites that get results. Fast, modern, and made to grow your Brand."),t()(),e(29,"button",8),u("click",function(){return r.scrollToElement("contact-us")}),e(30,"span",9),n(31," call "),t(),n(32," Book a call "),t()()()(),e(33,"section",12),h(34,"app-development"),t(),e(35,"section",13),h(36,"app-solutions"),t(),e(37,"section",14),h(38,"app-challanges"),t(),e(39,"section",15),h(40,"app-contact-us"),t()()),i&2&&(d(14),f("routerLink",F(4,K))("fragment","contact-us"),d(15),f("routerLink",F(5,K))("fragment","contact-us"))},dependencies:[b,R,j,E,P,W,G],styles:[".home-container[_ngcontent-%COMP%]{background-image:url(/background.png);background-size:cover;background-position:center;background-repeat:no-repeat;height:650px;display:flex;align-items:center;padding:90px;background-color:#1a1a1a}@media (max-width: 992px){.home-container[_ngcontent-%COMP%]{padding:80px;height:540px;display:flex;flex-direction:column;align-items:center;justify-content:center}}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:70px;width:120px;height:60px;gap:10px;margin-bottom:48px}.title[_ngcontent-%COMP%]{font-size:65px;color:#fff;margin:0;line-height:80px;font-weight:700;font-family:IBM Plex Sans,sans-serif}@media (max-width: 992px){.title[_ngcontent-%COMP%]{font-size:40px;line-height:40px}}.hero-text[_ngcontent-%COMP%]   .with-us[_ngcontent-%COMP%]{color:#4a90e2;text-decoration:none;margin-bottom:24px}.description[_ngcontent-%COMP%]{font-family:Space Grotesk,sans-serif;margin-top:20px;color:#fff;font-size:16px;max-width:650px;font-weight:700;margin-bottom:32px;line-height:24px}@media (max-width: 992px){.description[_ngcontent-%COMP%]{font-size:12px;line-height:24px}}.description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400;font-size:16px;line-height:24px;font-family:Space Grotesk,sans-serif}@media (max-width: 992px){.description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;line-height:24px}}.book-call-btn[_ngcontent-%COMP%]{border:none;width:200px;height:50px;background-color:#4a90e2;color:#fff;padding:8px 12px;border-radius:4px;font-family:Space Grotesk,sans-serif;font-size:16px;font-weight:600;line-height:24px;cursor:pointer;display:flex;align-items:center;gap:8px;transition:background-color .3s ease}.book-call-btn[_ngcontent-%COMP%]:hover{background-color:#357abd}.phone-icon[_ngcontent-%COMP%]{font-size:18px}section[_ngcontent-%COMP%]{scroll-margin-top:80px}"]})};export{Y as HomepageComponent};
