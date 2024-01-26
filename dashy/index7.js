import{S as _e,i as pe,s as ee,q as I,V as M,r as p,u as C,L as w,t as _,v as j,a as h,x as B,D as L,b as O,f as Ie,bc as ie,bd as Ce,be as Le,bf as oe,a2 as Re,R as Q,al as Pe,an as Se,bg as We,bh as Ae,K as G,c as P,a7 as U,m as S,Z as ne,d as W,aD as $,y as De,_ as le,B as te,I as ge,J as je,a0 as Be,a1 as be,O as Y,P as y,W as x,bi as Fe,aI as re,bj as Ue,bk as Ee,bl as Ge,a5 as Te,bm as V,a3 as A,aa as X,aQ as he,ab as we,aP as He,bn as Ne,n as qe}from"./overlayscrollbars.js";import{R as Je,G as Ke}from"./Resize.js";function se(n){let e,t,l,s,a,i,r=n[0].name+"",o,f,c,u,m,g,F,v,E,k,R;return u=new Q({props:{icon:Pe,size:"lg",tooltip:"Settings",class:"shrink-0",id:`settings-${n[0].id}`}}),u.$on("click",n[14]),u.$on("pointerdown",Xe),g=new Q({props:{icon:Se,size:"lg",tooltip:"Reload",class:"shrink-0",id:`reload-${n[0].id}`}}),g.$on("click",n[15]),g.$on("pointerdown",Ze),v=new Q({props:{icon:We,size:"lg",tooltip:"Minimize",class:"shrink-0",id:`minimize-${n[0].id}`}}),v.$on("click",n[16]),v.$on("pointerdown",Ye),k=new Q({props:{icon:Ae,size:"lg",tooltip:"Close",class:"shrink-0",id:`close-${n[0].id}`}}),k.$on("click",n[17]),k.$on("pointerdown",ye),{c(){e=I("div"),t=I("img"),a=M(),i=I("span"),o=G(r),f=M(),c=I("div"),P(u.$$.fragment),m=M(),P(g.$$.fragment),F=M(),P(v.$$.fragment),E=M(),P(k.$$.fragment),U(t.src,l=n[0].iconImg)||p(t,"src",l),p(t,"class","h-6 w-6 mr-2 object-contain"),p(t,"alt",s=n[0].name),p(i,"class","max-line-1 mr-3"),p(c,"class","flex flex-row gap-4 ml-auto"),p(e,"class","w-full h-full flex items-center justify-start shrink-0 px-3")},m(b,z){C(b,e,z),w(e,t),w(e,a),w(e,i),w(i,o),w(e,f),w(e,c),S(u,c,null),w(c,m),S(g,c,null),w(c,F),S(v,c,null),w(c,E),S(k,c,null),R=!0},p(b,z){(!R||z&1&&!U(t.src,l=b[0].iconImg))&&p(t,"src",l),(!R||z&1&&s!==(s=b[0].name))&&p(t,"alt",s),(!R||z&1)&&r!==(r=b[0].name+"")&&ne(o,r);const T={};z&1&&(T.id=`settings-${b[0].id}`),u.$set(T);const H={};z&1&&(H.id=`reload-${b[0].id}`),g.$set(H);const N={};z&1&&(N.id=`minimize-${b[0].id}`),v.$set(N);const q={};z&1&&(q.id=`close-${b[0].id}`),k.$set(q)},i(b){R||(_(u.$$.fragment,b),_(g.$$.fragment,b),_(v.$$.fragment,b),_(k.$$.fragment,b),R=!0)},o(b){h(u.$$.fragment,b),h(g.$$.fragment,b),h(v.$$.fragment,b),h(k.$$.fragment,b),R=!1},d(b){b&&L(e),W(u),W(g),W(v),W(k)}}}function ae(n){let e,t,l=(!n[2]||n[3])&&fe(n);return{c(){e=I("div"),l&&l.c(),$(e,"width",(n[7]?24:n[5]||24)+"rem"),$(e,"height",(n[6]||30)+"rem")},m(s,a){C(s,e,a),l&&l.m(e,null),t=!0},p(s,a){!s[2]||s[3]?l?(l.p(s,a),a&12&&_(l,1)):(l=fe(s),l.c(),_(l,1),l.m(e,null)):l&&(j(),h(l,1,1,()=>{l=null}),B()),(!t||a&160)&&$(e,"width",(s[7]?24:s[5]||24)+"rem"),(!t||a&64)&&$(e,"height",(s[6]||30)+"rem")},i(s){t||(_(l),t=!0)},o(s){h(l),t=!1},d(s){s&&L(e),l&&l.d()}}}function fe(n){let e,t,l,s,a=!n[3]&&ue(n),i=n[3]&&ce(n);return{c(){e=I("div"),a&&a.c(),t=M(),i&&i.c(),p(e,"class","w-full h-full flex items-center justify-center")},m(r,o){C(r,e,o),a&&a.m(e,null),w(e,t),i&&i.m(e,null),s=!0},p(r,o){r[3]?a&&(j(),h(a,1,1,()=>{a=null}),B()):a?(a.p(r,o),o&8&&_(a,1)):(a=ue(r),a.c(),_(a,1),a.m(e,t)),r[3]?i?(i.p(r,o),o&8&&_(i,1)):(i=ce(r),i.c(),_(i,1),i.m(e,null)):i&&(j(),h(i,1,1,()=>{i=null}),B())},i(r){s||(_(a),_(i),r&&De(()=>{s&&(l||(l=le(e,te,{duration:300},!0)),l.run(1))}),s=!0)},o(r){h(a),h(i),r&&(l||(l=le(e,te,{duration:300},!1)),l.run(0)),s=!1},d(r){r&&L(e),a&&a.d(),i&&i.d(),r&&l&&l.end()}}}function ue(n){let e,t,l=n[0].name+"",s,a,i,r;return i=new ge({props:{icon:je,class:"animate-spin ml-3"}}),{c(){e=I("span"),t=G("Loading "),s=G(l),a=M(),P(i.$$.fragment)},m(o,f){C(o,e,f),w(e,t),w(e,s),C(o,a,f),S(i,o,f),r=!0},p(o,f){(!r||f&1)&&l!==(l=o[0].name+"")&&ne(s,l)},i(o){r||(_(i.$$.fragment,o),r=!0)},o(o){h(i.$$.fragment,o),r=!1},d(o){o&&L(e),o&&L(a),W(i,o)}}}function ce(n){let e,t,l=n[0].name+"",s,a,i,r;return i=new ge({props:{icon:Be,class:"ml-2"}}),{c(){e=I("span"),t=G("Failed to load "),s=G(l),a=M(),P(i.$$.fragment),p(e,"class","flex-center")},m(o,f){C(o,e,f),w(e,t),w(e,s),w(e,a),S(i,e,null),r=!0},p(o,f){(!r||f&1)&&l!==(l=o[0].name+"")&&ne(s,l)},i(o){r||(_(i.$$.fragment,o),r=!0)},o(o){h(i.$$.fragment,o),r=!1},d(o){o&&L(e),W(i)}}}function Oe(n){let e,t,l,s,a;return{c(){e=I("iframe"),U(e.src,t=V(n[0].url,n[4],n[0].loadMobile))||p(e,"src",t),p(e,"class","border-0 block align-bottom bg-white"),$(e,"width",(n[7]?24:n[5]||24)+"rem"),$(e,"height",(n[6]||30)+"rem"),p(e,"title",l=n[0].name),p(e,"allow","camera; microphone; encrypted-media; picture-in-picture; storage-access; fullscreen; display-capture; document-domain;"),A(e,"hidden",!n[2]||n[3]),A(e,"pointer-events-none",n[9]||n[10])},m(i,r){C(i,e,r),s||(a=[X(e,"pointerdown",he(n[13])),X(e,"error",n[19])],s=!0)},p(i,r){r&17&&!U(e.src,t=V(i[0].url,i[4],i[0].loadMobile))&&p(e,"src",t),r&160&&$(e,"width",(i[7]?24:i[5]||24)+"rem"),r&64&&$(e,"height",(i[6]||30)+"rem"),r&1&&l!==(l=i[0].name)&&p(e,"title",l),r&12&&A(e,"hidden",!i[2]||i[3]),r&1536&&A(e,"pointer-events-none",i[9]||i[10])},d(i){i&&L(e),s=!1,we(a)}}}function Qe(n){let e,t,l,s,a;return{c(){e=I("iframe"),U(e.src,t=V(n[0].url,n[4],n[0].loadMobile))||p(e,"src",t),p(e,"class","border-0 block align-bottom bg-white"),$(e,"width",(n[7]?24:n[5]||24)+"rem"),$(e,"height",(n[6]||30)+"rem"),p(e,"title",l=n[0].name),p(e,"sandbox","allow-downloads allow-presentation allow-modals allow-same-origin allow-scripts allow-popups allow-forms"),p(e,"allow","camera; microphone; encrypted-media; picture-in-picture; storage-access; fullscreen; display-capture; document-domain;"),A(e,"hidden",!n[2]||n[3]),A(e,"pointer-events-none",n[9]||n[10])},m(i,r){C(i,e,r),s||(a=[X(e,"pointerdown",he(n[12])),X(e,"error",n[18])],s=!0)},p(i,r){r&17&&!U(e.src,t=V(i[0].url,i[4],i[0].loadMobile))&&p(e,"src",t),r&160&&$(e,"width",(i[7]?24:i[5]||24)+"rem"),r&64&&$(e,"height",(i[6]||30)+"rem"),r&1&&l!==(l=i[0].name)&&p(e,"title",l),r&12&&A(e,"hidden",!i[2]||i[3]),r&1536&&A(e,"pointer-events-none",i[9]||i[10])},d(i){i&&L(e),s=!1,we(a)}}}function de(n){let e;function t(a,i){var r;return(r=a[0])!=null&&r.disableRedirect?Qe:Oe}let l=t(n),s=l(n);return{c(){s.c(),e=be()},m(a,i){s.m(a,i),C(a,e,i)},p(a,i){l===(l=t(a))&&s?s.p(a,i):(s.d(1),s=l(a),s&&(s.c(),s.m(e.parentNode,e)))},d(a){s.d(a),a&&L(e)}}}function me(n){let e,t,l,s;function a(o){n[20](o)}function i(o){n[21](o)}let r={};return n[5]!==void 0&&(r.w=n[5]),n[6]!==void 0&&(r.h=n[6]),e=new Je({props:r}),Y.push(()=>y(e,"w",a)),Y.push(()=>y(e,"h",i)),e.$on("resize",n[11]),{c(){P(e.$$.fragment)},m(o,f){S(e,o,f),s=!0},p(o,f){const c={};!t&&f&32&&(t=!0,c.w=o[5],x(()=>t=!1)),!l&&f&64&&(l=!0,c.h=o[6],x(()=>l=!1)),e.$set(c)},i(o){s||(_(e.$$.fragment,o),s=!0)},o(o){h(e.$$.fragment,o),s=!1},d(o){W(e,o)}}}function Ve(n){let e,t,l,s=n[4],a,i,r,o=n[7]&&se(n),f=(!n[2]||n[3])&&ae(n),c=de(n),u=n[2]&&!n[7]&&me(n);return{c(){e=I("div"),o&&o.c(),t=M(),f&&f.c(),l=M(),c.c(),a=M(),u&&u.c(),p(e,"class",i=n[7]?"flex flex-col pt-2.5 gap-2":"")},m(m,g){C(m,e,g),o&&o.m(e,null),w(e,t),f&&f.m(e,null),w(e,l),c.m(e,null),w(e,a),u&&u.m(e,null),r=!0},p(m,[g]){m[7]?o?(o.p(m,g),g&128&&_(o,1)):(o=se(m),o.c(),_(o,1),o.m(e,t)):o&&(j(),h(o,1,1,()=>{o=null}),B()),!m[2]||m[3]?f?(f.p(m,g),g&12&&_(f,1)):(f=ae(m),f.c(),_(f,1),f.m(e,l)):f&&(j(),h(f,1,1,()=>{f=null}),B()),g&16&&ee(s,s=m[4])?(c.d(1),c=de(m),c.c(),c.m(e,a)):c.p(m,g),m[2]&&!m[7]?u?(u.p(m,g),g&132&&_(u,1)):(u=me(m),u.c(),_(u,1),u.m(e,null)):u&&(j(),h(u,1,1,()=>{u=null}),B()),(!r||g&128&&i!==(i=m[7]?"flex flex-col pt-2.5 gap-2":""))&&p(e,"class",i)},i(m){r||(_(o),_(f),_(u),r=!0)},o(m){h(o),h(f),h(u),r=!1},d(m){m&&L(e),o&&o.d(),f&&f.d(),c.d(m),u&&u.d()}}}const Xe=n=>n.stopPropagation(),Ze=n=>n.stopPropagation(),Ye=n=>n.stopPropagation(),ye=n=>n.stopPropagation();function xe(n,e,t){let l,s,a,i;O(n,Ie,d=>t(7,l=d)),O(n,ie,d=>t(8,s=d)),O(n,Ce,d=>t(9,a=d)),O(n,Le,d=>t(10,i=d));let{config:r}=e,o=!1,f=!1,c=oe("short"),u=r.w||24,m=r.h||30;const g=()=>{t(5,u=r.w||24),t(6,m=r.h||30)},F=()=>{t(2,o=!1),t(3,f=!1),t(4,c=oe("short"))};let v=setTimeout(()=>{t(3,f=!0)},1e4);const E=(d,D)=>{d.type==="iframe-loaded"&&D.id===chrome.runtime.id&&d.embedId===c&&(t(2,o=!0),clearTimeout(v))},k=(d,D,J)=>{d.type==="send-config"&&d.embedId===c&&D.id===chrome.runtime.id&&J(r)},R=d=>{const{id:D}=d.detail;D===r.id&&F()},b=d=>{const{w:D,h:J}=d.detail;Fe.update(Z=>(Z=Z.map(K=>(K.id===r.id&&(K.w=D,K.h=J),K)),Z))};window.addEventListener("reload-widget",R),chrome.runtime.onMessage.addListener(E),chrome.runtime.onMessage.addListener(k),Re(()=>{chrome.runtime.onMessage.removeListener(E),chrome.runtime.onMessage.removeListener(k),window.removeEventListener("reload-widget",R)});function z(d){re.call(this,n,d)}function T(d){re.call(this,n,d)}const H=()=>{Ue.set(r.id),Ee.set(!0)},N=()=>{F()},q=()=>Ge.update(d=>[...d,r.id]),ke=()=>{Te(ie,s=s.filter(d=>d!==r.id),s)},$e=()=>{console.log("error")},ve=()=>{console.log("error")};function ze(d){u=d,t(5,u)}function Me(d){m=d,t(6,m)}return n.$$set=d=>{"config"in d&&t(0,r=d.config)},n.$$.update=()=>{n.$$.dirty&1&&r&&g()},[r,F,o,f,c,u,m,l,s,a,i,b,z,T,H,N,q,ke,$e,ve,ze,Me]}class en extends _e{constructor(e){super(),pe(this,e,xe,Ve,ee,{config:0,reload:1})}get reload(){return this.$$.ctx[1]}}function nn(n){let e,t,l;function s(i){n[4](i)}let a={config:n[1]};return n[0]!==void 0&&(a.reload=n[0]),e=new en({props:a}),Y.push(()=>y(e,"reload",s)),{c(){P(e.$$.fragment)},m(i,r){S(e,i,r),l=!0},p(i,r){const o={};r&2&&(o.config=i[1]),!t&&r&1&&(t=!0,o.reload=i[0],x(()=>t=!1)),e.$set(o)},i(i){l||(_(e.$$.fragment,i),l=!0)},o(i){h(e.$$.fragment,i),l=!1},d(i){W(e,i)}}}function on(n){let e,t;return e=new Ke({}),{c(){P(e.$$.fragment)},m(l,s){S(e,l,s),t=!0},p:qe,i(l){t||(_(e.$$.fragment,l),t=!0)},o(l){h(e.$$.fragment,l),t=!1},d(l){W(e,l)}}}function ln(n){let e,t,l,s;const a=[on,nn],i=[];function r(o,f){return o[3]&&!o[2]?0:1}return e=r(n),t=i[e]=a[e](n),{c(){t.c(),l=be()},m(o,f){i[e].m(o,f),C(o,l,f),s=!0},p(o,[f]){let c=e;e=r(o),e===c?i[e].p(o,f):(j(),h(i[c],1,1,()=>{i[c]=null}),B(),t=i[e],t?t.p(o,f):(t=i[e]=a[e](o),t.c()),_(t,1),t.m(l.parentNode,l))},i(o){s||(_(t),s=!0)},o(o){h(t),s=!1},d(o){i[e].d(o),o&&L(l)}}}function tn(n,e,t){let{config:l}=e,{reload:s=()=>{}}=e;const a=Ne();let i=!a;He(async()=>{});function r(o){s=o,t(0,s)}return n.$$set=o=>{"config"in o&&t(1,l=o.config),"reload"in o&&t(0,s=o.reload)},[s,l,i,a,r]}class an extends _e{constructor(e){super(),pe(this,e,tn,ln,ee,{config:1,reload:0})}}export{an as default};
