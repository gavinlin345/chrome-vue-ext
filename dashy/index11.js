import{S as C,i as j,s as q,U as fe,q as P,V as x,c as F,r as g,u as v,L as $,m as G,t as b,a as k,D as S,d as I,K as N,aD as ne,a3 as T,aa as V,a8 as ie,a9 as ue,v as B,x as D,Z as oe,as as _e,ab as pe,b as R,f as me,E as L,G as he,I as ge,aC as de,a7 as W,aF as Z,n as z,R as be,aM as O,aN as Q,af as J,ag as K,aP as ke,aR as ae,bH as E,bI as U,bJ as we,a5 as Y,ar as $e,a1 as A,ah as ye,av as ve,e as Se,ay as He,aB as Pe}from"./overlayscrollbars.js";function Te(o){let e;return{c(){e=N("Grant Permissions")},m(r,t){v(r,e,t)},d(r){r&&S(e)}}}function Fe(o){let e,r,t,n,s;return n=new fe({props:{class:"mt-4",$$slots:{default:[Te]},$$scope:{ctx:o}}}),n.$on("click",o[1]),{c(){e=P("div"),r=P("span"),r.textContent="Dashy needs your permission to view your browser history. Dashy does not store your data.",t=x(),F(n.$$.fragment),g(r,"class","text-sm text-center py-2"),g(e,"class","max-w-[24rem] p-4 h-max flex flex-col items-center justify-center")},m(a,i){v(a,e,i),$(e,r),$(e,t),G(n,e,null),s=!0},p(a,[i]){const l={};i&4&&(l.$$scope={dirty:i,ctx:a}),n.$set(l)},i(a){s||(b(n.$$.fragment,a),s=!0)},o(a){k(n.$$.fragment,a),s=!1},d(a){a&&S(e),I(n)}}}function Ge(o,e,r){let{checkForPermissions:t}=e;const n=async()=>{await chrome.permissions.request({permissions:["history","tabs","topSites"]})&&t()};return o.$$set=s=>{"checkForPermissions"in s&&r(0,t=s.checkForPermissions)},[t,n]}class Ie extends C{constructor(e){super(),j(this,e,Ge,Fe,q,{checkForPermissions:0})}}function Be(o){let e,r,t,n;return r=new ge({props:{icon:de,class:"cursor-grab "+(o[2]==="list"?"text-lg":"text-3xl")+" active:cursor-grabbing"}}),{c(){e=P("div"),F(r.$$.fragment),g(e,"class",t="flex-center shrink-0 "+(o[2]==="list"?"h-5 w-5":"h-8 w-8"))},m(s,a){v(s,e,a),G(r,e,null),n=!0},p(s,a){const i={};a&4&&(i.class="cursor-grab "+(s[2]==="list"?"text-lg":"text-3xl")+" active:cursor-grabbing"),r.$set(i),(!n||a&4&&t!==(t="flex-center shrink-0 "+(s[2]==="list"?"h-5 w-5":"h-8 w-8")))&&g(e,"class",t)},i(s){n||(b(r.$$.fragment,s),n=!0)},o(s){k(r.$$.fragment,s),n=!1},d(s){s&&S(e),I(r)}}}function De(o){let e,r,t,n;return{c(){e=P("img"),W(e.src,r=Z(o[1]))||g(e,"src",r),g(e,"alt",t=o[0]||o[1]),g(e,"class",n=(o[2]==="list"?"h-5 w-5":"h-8 w-8")+" shrink-0 cursor-grab active:cursor-grabbing"),g(e,"draggable","false")},m(s,a){v(s,e,a)},p(s,a){a&2&&!W(e.src,r=Z(s[1]))&&g(e,"src",r),a&3&&t!==(t=s[0]||s[1])&&g(e,"alt",t),a&4&&n!==(n=(s[2]==="list"?"h-5 w-5":"h-8 w-8")+" shrink-0 cursor-grab active:cursor-grabbing")&&g(e,"class",n)},i:z,o:z,d(s){s&&S(e)}}}function Me(o){let e,r,t,n,s,a=(o[0]||o[1])+"",i,l,c,_,p,f,h,w;const y=[De,Be],H=[];function m(u,d){return u[1]?0:1}return r=m(o),t=H[r]=y[r](o),{c(){e=P("button"),t.c(),n=x(),s=P("span"),i=N(a),g(s,"title",l=o[0]||o[1]),g(s,"class",c="max-line-1 w-full whitespace-pre-wrap text-center "+(o[2]==="list"?"text-sm text-start":"text-xs")),ne(s,"word-break","break-word"),T(s,"self-start",o[2]==="list"?!1:o[0]?o[0].length>12:o[1].length>12),g(e,"class",_="flex group/bookmark grow-0 items-center text-[var(--text)] no-underline "+(o[2]==="list"?"flex-row border-light gap-2 curved-half px-2 py-1.5 w-full":"flex-col gap-2 w-[4.25rem]")),g(e,"draggable","true")},m(u,d){v(u,e,d),H[r].m(e,null),$(e,n),$(e,s),$(s,i),f=!0,h||(w=[V(e,"click",o[6]),V(e,"contextmenu",o[7]),ie(p=ue.call(null,e,{title:o[0],classNames:"max-line-2",styles:"padding: 0.15rem 0.75rem; overflow: hidden; max-width: 10rem; font-size: 0.75rem;",show:o[2]!=="list"}))],h=!0)},p(u,[d]){let M=r;r=m(u),r===M?H[r].p(u,d):(B(),k(H[M],1,1,()=>{H[M]=null}),D(),t=H[r],t?t.p(u,d):(t=H[r]=y[r](u),t.c()),b(t,1),t.m(e,n)),(!f||d&3)&&a!==(a=(u[0]||u[1])+"")&&oe(i,a),(!f||d&3&&l!==(l=u[0]||u[1]))&&g(s,"title",l),(!f||d&4&&c!==(c="max-line-1 w-full whitespace-pre-wrap text-center "+(u[2]==="list"?"text-sm text-start":"text-xs")))&&g(s,"class",c),(!f||d&7)&&T(s,"self-start",u[2]==="list"?!1:u[0]?u[0].length>12:u[1].length>12),(!f||d&4&&_!==(_="flex group/bookmark grow-0 items-center text-[var(--text)] no-underline "+(u[2]==="list"?"flex-row border-light gap-2 curved-half px-2 py-1.5 w-full":"flex-col gap-2 w-[4.25rem]")))&&g(e,"class",_),p&&_e(p.update)&&d&5&&p.update.call(null,{title:u[0],classNames:"max-line-2",styles:"padding: 0.15rem 0.75rem; overflow: hidden; max-width: 10rem; font-size: 0.75rem;",show:u[2]!=="list"})},i(u){f||(b(t),f=!0)},o(u){k(t),f=!1},d(u){u&&S(e),H[r].d(),h=!1,pe(w)}}}function Ne(o,e,r){let t,n,s,a;R(o,me,p=>r(3,a=p));const{view:i}=L("stores");R(o,i,p=>r(2,s=p));let{item:l=null}=e;he();const c=()=>a?chrome.tabs.create({url:t}):chrome.tabs.update({url:t}),_=p=>{s!=="list"&&p.stopPropagation()};return o.$$set=p=>{"item"in p&&r(5,l=p.item)},o.$$.update=()=>{o.$$.dirty&32&&r(1,t=l.url),o.$$.dirty&32&&r(0,n=l.title)},[n,t,s,a,i,l,c,_]}class ce extends C{constructor(e){super(),j(this,e,Ne,Me,q,{item:5})}}function X(o,e,r){const t=o.slice();return t[9]=e[r],t[11]=r,t}function ee(o,e,r){const t=o.slice();return t[9]=e[r],t[11]=r,t}function te(o,e,r){const t=o.slice();return t[13]=e[r],t}function re(o,e){let r,t,n,s,a,i,l,c;n=new ae({props:{icon:e[13]==="Top Sites"?E:e[13]==="History"?U:we,class:"w-4 h-4"}});function _(){return e[7](e[13])}return{key:o,first:null,c(){r=P("button"),t=P("span"),F(n.$$.fragment),s=x(),a=N(e[13]),g(t,"class","transition-opacity flex-center gap-2 text-sm"),T(t,"opacity-80",e[0]!==e[13]),g(r,"class","relative flex-1 curved py-1.5 items-center"),T(r,"bg-[var(--border-color-lighter)]",e[0]===e[13]),T(r,"border",e[0]===e[13]),T(r,"border-light",e[0]!==e[13]),this.first=r},m(p,f){v(p,r,f),$(r,t),G(n,t,null),$(t,s),$(t,a),i=!0,l||(c=V(r,"click",_),l=!0)},p(p,f){e=p,(!i||f&1)&&T(t,"opacity-80",e[0]!==e[13]),(!i||f&1)&&T(r,"bg-[var(--border-color-lighter)]",e[0]===e[13]),(!i||f&1)&&T(r,"border",e[0]===e[13]),(!i||f&1)&&T(r,"border-light",e[0]!==e[13])},i(p){i||(b(n.$$.fragment,p),i=!0)},o(p){k(n.$$.fragment,p),i=!1},d(p){p&&S(r),I(n),l=!1,c()}}}function xe(o){let e,r,t,n,s,a,i,l;const c=[Ce,Ae],_=[];function p(f,h){return f[0]==="History"?0:1}return t=p(o),n=_[t]=c[t](o),{c(){e=P("div"),r=P("div"),n.c(),g(r,"class",s="flex "+(o[4]==="list"?"flex flex-col":"grid grid-cols-4 gap-y-5 mt-2 justify-items-center")+" gap-2"),ne(e,"max-height","100%")},m(f,h){v(f,e,h),$(e,r),_[t].m(r,null),a=!0,i||(l=ie($e.call(null,e)),i=!0)},p(f,h){let w=t;t=p(f),t===w?_[t].p(f,h):(B(),k(_[w],1,1,()=>{_[w]=null}),D(),n=_[t],n?n.p(f,h):(n=_[t]=c[t](f),n.c()),b(n,1),n.m(r,null)),(!a||h&16&&s!==(s="flex "+(f[4]==="list"?"flex flex-col":"grid grid-cols-4 gap-y-5 mt-2 justify-items-center")+" gap-2"))&&g(r,"class",s)},i(f){a||(b(n),a=!0)},o(f){k(n),a=!1},d(f){f&&S(e),_[t].d(),i=!1,l()}}}function Re(o){let e,r,t,n,s=" ",a,i,l=o[0]==="History"?"Your history":"Top sites",c,_,p=" ",f,h;return r=new ae({props:{icon:o[0]==="History"?U:E,class:"mb-4 text-3xl"}}),{c(){e=P("div"),F(r.$$.fragment),t=x(),n=P("span"),a=N(s),i=x(),c=N(l),_=N(" will appear here once you start browsing the web."),f=N(p),g(n,"class","mx-8 text-center"),g(e,"class","flex-center my-3 flex h-full flex-col gap-2")},m(w,y){v(w,e,y),G(r,e,null),$(e,t),$(e,n),$(n,a),$(n,i),$(n,c),$(n,_),$(n,f),h=!0},p(w,y){const H={};y&1&&(H.icon=w[0]==="History"?U:E),r.$set(H),(!h||y&1)&&l!==(l=w[0]==="History"?"Your history":"Top sites")&&oe(c,l)},i(w){h||(b(r.$$.fragment,w),h=!0)},o(w){k(r.$$.fragment,w),h=!1},d(w){w&&S(e),I(r)}}}function Ae(o){let e=[],r=new Map,t,n,s=o[2];const a=i=>i[11];for(let i=0;i<s.length;i+=1){let l=X(o,s,i),c=a(l);r.set(c,e[i]=le(c,l))}return{c(){for(let i=0;i<e.length;i+=1)e[i].c();t=A()},m(i,l){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(i,l);v(i,t,l),n=!0},p(i,l){l&4&&(s=i[2],B(),e=J(e,l,a,1,i,s,r,t.parentNode,K,le,t,X),D())},i(i){if(!n){for(let l=0;l<s.length;l+=1)b(e[l]);n=!0}},o(i){for(let l=0;l<e.length;l+=1)k(e[l]);n=!1},d(i){for(let l=0;l<e.length;l+=1)e[l].d(i);i&&S(t)}}}function Ce(o){let e=[],r=new Map,t,n,s=o[1];const a=i=>i[11];for(let i=0;i<s.length;i+=1){let l=ee(o,s,i),c=a(l);r.set(c,e[i]=se(c,l))}return{c(){for(let i=0;i<e.length;i+=1)e[i].c();t=A()},m(i,l){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(i,l);v(i,t,l),n=!0},p(i,l){l&2&&(s=i[1],B(),e=J(e,l,a,1,i,s,r,t.parentNode,K,se,t,ee),D())},i(i){if(!n){for(let l=0;l<s.length;l+=1)b(e[l]);n=!0}},o(i){for(let l=0;l<e.length;l+=1)k(e[l]);n=!1},d(i){for(let l=0;l<e.length;l+=1)e[l].d(i);i&&S(t)}}}function le(o,e){let r,t,n;return t=new ce({props:{item:e[9]}}),{key:o,first:null,c(){r=A(),F(t.$$.fragment),this.first=r},m(s,a){v(s,r,a),G(t,s,a),n=!0},p(s,a){e=s;const i={};a&4&&(i.item=e[9]),t.$set(i)},i(s){n||(b(t.$$.fragment,s),n=!0)},o(s){k(t.$$.fragment,s),n=!1},d(s){s&&S(r),I(t,s)}}}function se(o,e){let r,t,n;return t=new ce({props:{item:e[9]}}),{key:o,first:null,c(){r=A(),F(t.$$.fragment),this.first=r},m(s,a){v(s,r,a),G(t,s,a),n=!0},p(s,a){e=s;const i={};a&2&&(i.item=e[9]),t.$set(i)},i(s){n||(b(t.$$.fragment,s),n=!0)},o(s){k(t.$$.fragment,s),n=!1},d(s){s&&S(r),I(t,s)}}}function je(o){let e,r,t=[],n=new Map,s,a,i,l,c,_,p,f=["Top Sites","History"];const h=m=>m[13];for(let m=0;m<2;m+=1){let u=te(o,f,m),d=h(u);n.set(d,t[m]=re(d,u))}a=new be({props:{icon:o[4]==="grid"?O:Q,tooltip:o[4]==="grid"?"Switch to list view":"Switch to grid view",class:"mx-1 shrink-0 text-xl"}}),a.$on("click",o[8]);const w=[Re,xe],y=[];function H(m,u){return m[0]==="History"&&m[1].length===0||m[0]==="Top Sites"&&m[2].length===0?0:1}return l=H(o),c=y[l]=w[l](o),{c(){e=P("div"),r=P("div");for(let m=0;m<2;m+=1)t[m].c();s=x(),F(a.$$.fragment),i=x(),c.c(),g(r,"class","tabs flex flex-row justify-evenly w-full gap-2 mb-2"),g(e,"class",_="w-[24rem] flex flex-col p-2 "+(o[3]?"h-[40rem]":"h-[20.75rem]"))},m(m,u){v(m,e,u),$(e,r);for(let d=0;d<2;d+=1)t[d]&&t[d].m(r,null);$(r,s),G(a,r,null),$(e,i),y[l].m(e,null),p=!0},p(m,[u]){u&1&&(f=["Top Sites","History"],B(),t=J(t,u,h,1,m,f,n,r,K,re,s,te),D());const d={};u&16&&(d.icon=m[4]==="grid"?O:Q),u&16&&(d.tooltip=m[4]==="grid"?"Switch to list view":"Switch to grid view"),a.$set(d);let M=l;l=H(m),l===M?y[l].p(m,u):(B(),k(y[M],1,1,()=>{y[M]=null}),D(),c=y[l],c?c.p(m,u):(c=y[l]=w[l](m),c.c()),b(c,1),c.m(e,null)),(!p||u&8&&_!==(_="w-[24rem] flex flex-col p-2 "+(m[3]?"h-[40rem]":"h-[20.75rem]")))&&g(e,"class",_)},i(m){if(!p){for(let u=0;u<2;u+=1)b(t[u]);b(a.$$.fragment,m),b(c),p=!0}},o(m){for(let u=0;u<2;u+=1)k(t[u]);k(a.$$.fragment,m),k(c),p=!1},d(m){m&&S(e);for(let u=0;u<2;u+=1)t[u].d();I(a),y[l].d()}}}function qe(o,e,r){let t,n;const{view:s}=L("stores");R(o,s,f=>r(4,n=f));let a="Top Sites",i=[],l=[];const c=L("alwaysAppView");return R(o,c,f=>r(3,t=f)),ke(()=>{chrome.topSites.get(f=>{r(2,l=f)}),chrome.history.search({text:"",maxResults:100},f=>{r(1,i=f)})}),[a,i,l,t,n,s,c,f=>{r(0,a=f)},()=>Y(s,n=n==="grid"?"list":"grid",n)]}class Ve extends C{constructor(e){super(),j(this,e,qe,je,q,{})}}function Le(o){let e,r;return e=new Ie({props:{checkForPermissions:o[4]}}),{c(){F(e.$$.fragment)},m(t,n){G(e,t,n),r=!0},p:z,i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){I(e,t)}}}function ze(o){let e,r,t,n;const s=[Ue,Ee],a=[];function i(l,c){return l[1]?0:1}return e=i(o),r=a[e]=s[e](o),{c(){r.c(),t=A()},m(l,c){a[e].m(l,c),v(l,t,c),n=!0},p(l,c){let _=e;e=i(l),e!==_&&(B(),k(a[_],1,1,()=>{a[_]=null}),D(),r=a[e],r||(r=a[e]=s[e](l),r.c()),b(r,1),r.m(t.parentNode,t))},i(l){n||(b(r),n=!0)},o(l){k(r),n=!1},d(l){a[e].d(l),l&&S(t)}}}function Ee(o){let e,r;return e=new Pe({}),{c(){F(e.$$.fragment)},m(t,n){G(e,t,n),r=!0},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){I(e,t)}}}function Ue(o){let e,r;return e=new Ve({}),{c(){F(e.$$.fragment)},m(t,n){G(e,t,n),r=!0},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){I(e,t)}}}function Ye(o){let e,r,t,n;const s=[ze,Le],a=[];function i(l,c){return l[0]?0:1}return e=i(o),r=a[e]=s[e](o),{c(){r.c(),t=A()},m(l,c){a[e].m(l,c),v(l,t,c),n=!0},p(l,[c]){let _=e;e=i(l),e===_?a[e].p(l,c):(B(),k(a[_],1,1,()=>{a[_]=null}),D(),r=a[e],r?r.p(l,c):(r=a[e]=s[e](l),r.c()),b(r,1),r.m(t.parentNode,t))},i(l){n||(b(r),n=!0)},o(l){k(r),n=!1},d(l){a[e].d(l),l&&S(t)}}}function Je(o,e,r){let t,n,{config:s}=e;const a={path:`user_data/{uid}/profiles/{currentProfile}/apps/${s.id}`,currentProfile:ye,uid:ve},{create:i,isFetched:l,createPersist:c}=He(a);R(o,l,h=>r(1,n=h));const _=c("history:permissonsGranted",!1);R(o,_,h=>r(0,t=h));const p=c("view","list");f();async function f(){const h=["history","topSites"],w=await chrome.permissions.getAll();h.every(y=>w.permissions.includes(y))?Y(_,t=!0,t):Y(_,t=!1,t)}return Se("stores",{permissonsGranted:_,view:p}),o.$$set=h=>{"config"in h&&r(5,s=h.config)},[t,n,l,_,f,s]}class We extends C{constructor(e){super(),j(this,e,Je,Ye,q,{config:5})}}export{We as default};