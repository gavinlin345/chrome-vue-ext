import{S as ve,i as ye,s as Ne,I as x,q as A,V as T,c as M,a1 as je,r as b,c9 as De,u as C,L as z,m as j,t as k,v as W,a as y,x as q,D as I,d as P,G as mt,ca as Ge,cb as He,aG as we,aE as Ot,K as X,Z as re,bF as Ut,cc as Vt,aI as le,O as Q,cd as $,a3 as H,ce as Se,aa as V,a8 as ne,ab as pe,b as Y,ah as pt,av as gt,cf as bt,a2 as ht,af as kt,ag as Wt,bf as wt,bB as Ue,bC as Ve,cg as qt,bE as Rt,ch as vt,R as We,ci as Gt,ac as yt,n as J,cj as Ht,J as Jt,bh as Zt,P as ue,bb as Kt,ck as Qt,W as ce,as as ge,y as Ce,_ as te,aq as Te,E as ze,p as Ae,a9 as Me,B as me,cl as Xt,aQ as Yt,bw as Je,U as Nt,az as $t,a5 as ie,cm as xt,bv as Ct,bH as el,cn as tl,aD as ll,ar as nl,aP as It,ao as sl,co as Ze,bZ as il,b_ as rl,b$ as ol,c0 as al,cp as fl,cq as ul,e as cl,aB as dl}from"./overlayscrollbars.js";import{S as Ke}from"./SlideDown.js";import{t as _l}from"./index33.js";function ml(n){let e,t,l,s,r;return{c(){e=A("input"),b(e,"aria-label",t=n[18].ariaLabel||n[4]),b(e,"placeholder",n[4]),b(e,"class",l=$(`curved-half resize-none ${n[16]} ${n[15]} placeholder:opacity-80 focus:outline-none focus:ring-0 ${n[18].class}`)+" svelte-1s3h3sm"),b(e,"style",n[5]),b(e,"type","text"),b(e,"maxlength",n[6]),e.disabled=n[8],H(e,"invalid",!n[1])},m(o,i){C(o,e,i),n[34](e),Se(e,n[0]),s||(r=[V(e,"input",n[35]),V(e,"keyup",n[26]),V(e,"keypress",n[27]),V(e,"focus",n[28]),V(e,"blur",n[29]),V(e,"focus",n[36]),V(e,"blur",n[37]),ne(n[17].call(null,e))],s=!0)},p(o,i){i[0]&262160&&t!==(t=o[18].ariaLabel||o[4])&&b(e,"aria-label",t),i[0]&16&&b(e,"placeholder",o[4]),i[0]&360448&&l!==(l=$(`curved-half resize-none ${o[16]} ${o[15]} placeholder:opacity-80 focus:outline-none focus:ring-0 ${o[18].class}`)+" svelte-1s3h3sm")&&b(e,"class",l),i[0]&32&&b(e,"style",o[5]),i[0]&64&&b(e,"maxlength",o[6]),i[0]&256&&(e.disabled=o[8]),i[0]&1&&e.value!==o[0]&&Se(e,o[0]),i[0]&360450&&H(e,"invalid",!o[1])},d(o){o&&I(e),n[34](null),s=!1,pe(r)}}}function pl(n){let e,t,l,s,r;return{c(){e=A("input"),b(e,"aria-label",t=n[18].ariaLabel||n[4]),b(e,"placeholder",n[4]),b(e,"class",l=$(De(`curved-half resize-none ${n[16]} ${n[15]} placeholder:opacity-80 focus:outline-none focus:ring-0 ${n[18].class}`))+" svelte-1s3h3sm"),b(e,"style",n[5]),b(e,"type","password"),b(e,"maxlength",n[6]),e.disabled=n[8],H(e,"invalid",!n[1])},m(o,i){C(o,e,i),n[30](e),Se(e,n[0]),s||(r=[V(e,"input",n[31]),V(e,"keyup",n[22]),V(e,"keypress",n[23]),V(e,"focus",n[24]),V(e,"blur",n[25]),V(e,"focus",n[32]),V(e,"blur",n[33]),ne(n[17].call(null,e))],s=!0)},p(o,i){i[0]&262160&&t!==(t=o[18].ariaLabel||o[4])&&b(e,"aria-label",t),i[0]&16&&b(e,"placeholder",o[4]),i[0]&360448&&l!==(l=$(De(`curved-half resize-none ${o[16]} ${o[15]} placeholder:opacity-80 focus:outline-none focus:ring-0 ${o[18].class}`))+" svelte-1s3h3sm")&&b(e,"class",l),i[0]&32&&b(e,"style",o[5]),i[0]&64&&b(e,"maxlength",o[6]),i[0]&256&&(e.disabled=o[8]),i[0]&1&&e.value!==o[0]&&Se(e,o[0]),i[0]&360450&&H(e,"invalid",!o[1])},d(o){o&&I(e),n[30](null),s=!1,pe(r)}}}function Qe(n){let e,t;return e=new we({props:{ref:n[2],placement:"bottom",trigger:"focus",transition:"slide",class:"flex items-center gap-2 px-3 py-1.5",offset:[0,5],$$slots:{default:[gl]},$$scope:{ctx:n}}}),{c(){M(e.$$.fragment)},m(l,s){j(e,l,s),t=!0},p(l,s){const r={};s[0]&4&&(r.ref=l[2]),s[0]&2048|s[1]&256&&(r.$$scope={dirty:s,ctx:l}),e.$set(r)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){y(e.$$.fragment,l),t=!1},d(l){P(e,l)}}}function gl(n){let e,t,l,s;return e=new x({props:{icon:Ot}}),{c(){M(e.$$.fragment),t=T(),l=X(n[11])},m(r,o){j(e,r,o),C(r,t,o),C(r,l,o),s=!0},p(r,o){(!s||o[0]&2048)&&re(l,r[11])},i(r){s||(k(e.$$.fragment,r),s=!0)},o(r){y(e.$$.fragment,r),s=!1},d(r){P(e,r),r&&I(t),r&&I(l)}}}function Xe(n){let e,t;return e=new we({props:{ref:n[2],placement:"bottom",trigger:"focus",transition:"slide",class:"flex items-center gap-2 px-3 py-1.5",offset:[0,5],$$slots:{default:[bl]},$$scope:{ctx:n}}}),{c(){M(e.$$.fragment)},m(l,s){j(e,l,s),t=!0},p(l,s){const r={};s[0]&4&&(r.ref=l[2]),s[0]&4096|s[1]&256&&(r.$$scope={dirty:s,ctx:l}),e.$set(r)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){y(e.$$.fragment,l),t=!1},d(l){P(e,l)}}}function bl(n){let e,t,l,s;return e=new x({props:{icon:Ut}}),{c(){M(e.$$.fragment),t=T(),l=X(n[12])},m(r,o){j(e,r,o),C(r,t,o),C(r,l,o),s=!0},p(r,o){(!s||o[0]&4096)&&re(l,r[12])},i(r){s||(k(e.$$.fragment,r),s=!0)},o(r){y(e.$$.fragment,r),s=!1},d(r){P(e,r),r&&I(t),r&&I(l)}}}function hl(n){let e,t,l,s,r,o,i,a;function u(p,h){return p[7]?pl:ml}let c=u(n),m=c(n);l=new x({props:{icon:n[13],class:"vertical-center absolute  transform "+(n[3]?"opacity-100":"opacity-50")+" transition "+n[18].iconClass+" left-3 text-"+n[14]}});let f=n[2]&&n[11]&&n[1]&&!n[0]&&Qe(n),d=n[2]&&n[12]&&!n[1]&&Xe(n);return{c(){e=A("div"),m.c(),t=T(),M(l.$$.fragment),r=T(),f&&f.c(),o=T(),d&&d.c(),i=je(),b(e,"class",s=De(`relative w-max ${n[18].wrapperClass}`))},m(p,h){C(p,e,h),m.m(e,null),z(e,t),j(l,e,null),C(p,r,h),f&&f.m(p,h),C(p,o,h),d&&d.m(p,h),C(p,i,h),a=!0},p(p,h){c===(c=u(p))&&m?m.p(p,h):(m.d(1),m=c(p),m&&(m.c(),m.m(e,t)));const _={};h[0]&8192&&(_.icon=p[13]),h[0]&278536&&(_.class="vertical-center absolute  transform "+(p[3]?"opacity-100":"opacity-50")+" transition "+p[18].iconClass+" left-3 text-"+p[14]),l.$set(_),(!a||h[0]&262144&&s!==(s=De(`relative w-max ${p[18].wrapperClass}`)))&&b(e,"class",s),p[2]&&p[11]&&p[1]&&!p[0]?f?(f.p(p,h),h[0]&2055&&k(f,1)):(f=Qe(p),f.c(),k(f,1),f.m(o.parentNode,o)):f&&(W(),y(f,1,1,()=>{f=null}),q()),p[2]&&p[12]&&!p[1]?d?(d.p(p,h),h[0]&4102&&k(d,1)):(d=Xe(p),d.c(),k(d,1),d.m(i.parentNode,i)):d&&(W(),y(d,1,1,()=>{d=null}),q())},i(p){a||(k(l.$$.fragment,p),k(f),k(d),a=!0)},o(p){y(l.$$.fragment,p),y(f),y(d),a=!1},d(p){p&&I(e),m.d(),P(l),p&&I(r),f&&f.d(p),p&&I(o),d&&d.d(p),p&&I(i)}}}function kl(n,e,t){let{element:l=null}=e,{value:s=""}=e,{placeholder:r=""}=e,{styles:o=""}=e,{maxLength:i=1e3}=e,{isPassword:a=!1}=e,{disabled:u=!1}=e,{autofocus:c=!1}=e,{onlyNumbers:m=!1}=e,{regex:f=null}=e,{minLength:d=0}=e,{validationMessage:p=""}=e,{errorMessage:h=""}=e,{isValid:_=!0}=e,{features:g=null}=e,{icon:w=Vt}=e,{isFocused:S=!1}=e,{size:R="lg"}=e,{text:Z=R==="sm"?"text-xs":R==="md"?"text-sm":"text-base"}=e,{padding:K=R==="sm"?"py-1.5 px-3 pl-9":"pr-3 py-2 pl-10"}=e;const D=mt(),E=v=>{c&&v.focus();const Ie=Be=>{Be.key==="Escape"&&(v.blur(),D("escape"))},ke=g==null?void 0:g(v);return v.addEventListener("keydown",Ie),{destroy(){v.removeEventListener("keydown",Ie),ke==null||ke.destroy()}}};function G(v){le.call(this,n,v)}function ee(v){le.call(this,n,v)}function be(v){le.call(this,n,v)}function oe(v){le.call(this,n,v)}function he(v){le.call(this,n,v)}function de(v){le.call(this,n,v)}function B(v){le.call(this,n,v)}function O(v){le.call(this,n,v)}function U(v){Q[v?"unshift":"push"](()=>{l=v,t(2,l)})}function L(){s=this.value,t(0,s),t(20,m)}const F=()=>{t(3,S=!0)},ae=()=>{t(3,S=!1),s&&t(1,_=f?s.length>=d&&f.test(s):s.length>=d)};function fe(v){Q[v?"unshift":"push"](()=>{l=v,t(2,l)})}function Pe(){s=this.value,t(0,s),t(20,m)}const Ee=()=>{t(3,S=!0)},Fe=()=>{t(3,S=!1),t(1,_=f?s.length>=d&&f.test(s):s.length>=d)};return n.$$set=v=>{t(18,e=Ge(Ge({},e),He(v))),"element"in v&&t(2,l=v.element),"value"in v&&t(0,s=v.value),"placeholder"in v&&t(4,r=v.placeholder),"styles"in v&&t(5,o=v.styles),"maxLength"in v&&t(6,i=v.maxLength),"isPassword"in v&&t(7,a=v.isPassword),"disabled"in v&&t(8,u=v.disabled),"autofocus"in v&&t(19,c=v.autofocus),"onlyNumbers"in v&&t(20,m=v.onlyNumbers),"regex"in v&&t(9,f=v.regex),"minLength"in v&&t(10,d=v.minLength),"validationMessage"in v&&t(11,p=v.validationMessage),"errorMessage"in v&&t(12,h=v.errorMessage),"isValid"in v&&t(1,_=v.isValid),"features"in v&&t(21,g=v.features),"icon"in v&&t(13,w=v.icon),"isFocused"in v&&t(3,S=v.isFocused),"size"in v&&t(14,R=v.size),"text"in v&&t(15,Z=v.text),"padding"in v&&t(16,K=v.padding)},n.$$.update=()=>{n.$$.dirty[0]&1048577&&m&&t(0,s=s.replace(/\D/g,"")),n.$$.dirty[0]&1539&&(_||t(1,_=f?s.length>=d&&f.test(s):s.length>=d))},e=He(e),[s,_,l,S,r,o,i,a,u,f,d,p,h,w,R,Z,K,E,e,c,m,g,G,ee,be,oe,he,de,B,O,U,L,F,ae,fe,Pe,Ee,Fe]}class wl extends ve{constructor(e){super(),ye(this,e,kl,hl,Ne,{element:2,value:0,placeholder:4,styles:5,maxLength:6,isPassword:7,disabled:8,autofocus:19,onlyNumbers:20,regex:9,minLength:10,validationMessage:11,errorMessage:12,isValid:1,features:21,icon:13,isFocused:3,size:14,text:15,padding:16},null,[-1,-1])}}function Ye(n,e,t){const l=n.slice();return l[20]=e[t],l}function $e(n){let e,t=[],l=new Map,s,r=n[0];const o=i=>i[20].id;for(let i=0;i<r.length;i+=1){let a=Ye(n,r,i),u=o(a);l.set(u,t[i]=tt(u,a))}return{c(){e=A("div");for(let i=0;i<t.length;i+=1)t[i].c();b(e,"class","flex w-full flex-col gap-3")},m(i,a){C(i,e,a);for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(e,null);s=!0},p(i,a){a&1641&&(r=i[0],W(),t=kt(t,a,o,1,i,r,l,e,Wt,tt,null,Ye),q())},i(i){if(!s){for(let a=0;a<r.length;a+=1)k(t[a]);s=!0}},o(i){for(let a=0;a<t.length;a+=1)y(t[a]);s=!1},d(i){i&&I(e);for(let a=0;a<t.length;a+=1)t[a].d()}}}function xe(n){let e,t,l,s;function r(){return n[12](n[20])}e=new We({props:{tooltip:"Download",class:"opacity-100",size:"lg",icon:Gt}}),e.$on("click",r);function o(){return n[13](n[20])}return l=new We({props:{tooltip:"Delete",class:"opacity-100",size:"lg",icon:yt}}),l.$on("click",o),{c(){M(e.$$.fragment),t=T(),M(l.$$.fragment)},m(i,a){j(e,i,a),C(i,t,a),j(l,i,a),s=!0},p(i,a){n=i},i(i){s||(k(e.$$.fragment,i),k(l.$$.fragment,i),s=!0)},o(i){y(e.$$.fragment,i),y(l.$$.fragment,i),s=!1},d(i){P(e,i),i&&I(t),P(l,i)}}}function et(n){let e,t,l,s,r,o,i,a;const u=[yl,vl],c=[];function m(f,d){return f[6]<100?0:1}return o=m(n),i=c[o]=u[o](n),{c(){e=A("div"),t=A("div"),l=A("div"),r=T(),i.c(),b(l,"class","h-full rounded-lg bg-white"),b(l,"style",s=`width: ${n[6]}%`),b(t,"class","h-full w-full rounded-lg bg-gray-400"),b(e,"class","flex h-2 w-full justify-between gap-3 rounded-lg")},m(f,d){C(f,e,d),z(e,t),z(t,l),z(e,r),c[o].m(e,null),a=!0},p(f,d){(!a||d&64&&s!==(s=`width: ${f[6]}%`))&&b(l,"style",s);let p=o;o=m(f),o===p?c[o].p(f,d):(W(),y(c[p],1,1,()=>{c[p]=null}),q(),i=c[o],i?i.p(f,d):(i=c[o]=u[o](f),i.c()),k(i,1),i.m(e,null))},i(f){a||(k(i),a=!0)},o(f){y(i),a=!1},d(f){f&&I(e),c[o].d()}}}function vl(n){let e,t,l;return t=new x({props:{icon:Jt,class:"animate-spin"}}),{c(){e=A("button"),M(t.$$.fragment),b(e,"class","flex items-center")},m(s,r){C(s,e,r),j(t,e,null),l=!0},p:J,i(s){l||(k(t.$$.fragment,s),l=!0)},o(s){y(t.$$.fragment,s),l=!1},d(s){s&&I(e),P(t)}}}function yl(n){let e,t,l,s,r;return t=new x({props:{icon:Zt}}),{c(){e=A("button"),M(t.$$.fragment),b(e,"class","flex items-center")},m(o,i){C(o,e,i),j(t,e,null),l=!0,s||(r=V(e,"click",n[9]),s=!0)},p:J,i(o){l||(k(t.$$.fragment,o),l=!0)},o(o){y(t.$$.fragment,o),l=!1},d(o){o&&I(e),P(t),s=!1,r()}}}function tt(n,e){var p;let t,l,s,r=e[20].name+"",o,i,a,u,c,m,f=((p=e[20])==null?void 0:p.url)&&xe(e),d=e[3]===e[20].id&&et(e);return{key:n,first:null,c(){t=A("div"),l=A("div"),s=A("span"),o=X(r),a=T(),f&&f.c(),u=T(),d&&d.c(),c=T(),b(s,"class","max-line-1 w-full text-left text-sm font-medium"),b(s,"title",i=e[20].name),b(l,"class","flex w-full justify-between gap-4"),b(t,"class","flex w-full flex-col items-center justify-between gap-2"),this.first=t},m(h,_){C(h,t,_),z(t,l),z(l,s),z(s,o),z(l,a),f&&f.m(l,null),z(t,u),d&&d.m(t,null),z(t,c),m=!0},p(h,_){var g;e=h,(!m||_&1)&&r!==(r=e[20].name+"")&&re(o,r),(!m||_&1&&i!==(i=e[20].name))&&b(s,"title",i),(g=e[20])!=null&&g.url?f?(f.p(e,_),_&1&&k(f,1)):(f=xe(e),f.c(),k(f,1),f.m(l,null)):f&&(W(),y(f,1,1,()=>{f=null}),q()),e[3]===e[20].id?d?(d.p(e,_),_&9&&k(d,1)):(d=et(e),d.c(),k(d,1),d.m(t,c)):d&&(W(),y(d,1,1,()=>{d=null}),q())},i(h){m||(k(f),k(d),m=!0)},o(h){y(f),y(d),m=!1},d(h){h&&I(t),f&&f.d(),d&&d.d()}}}function Nl(n){let e;return{c(){e=X(n[4])},m(t,l){C(t,e,l)},p(t,l){l&16&&re(e,t[4])},i:J,o:J,d(t){t&&I(e)}}}function Cl(n){let e,t,l;return t=new x({props:{icon:Ht}}),{c(){e=X("Drop files here to upload! "),M(t.$$.fragment)},m(s,r){C(s,e,r),j(t,s,r),l=!0},p:J,i(s){l||(k(t.$$.fragment,s),l=!0)},o(s){y(t.$$.fragment,s),l=!1},d(s){s&&I(e),P(t,s)}}}function Il(n){let e;return{c(){e=X("Max attachments per note is 5")},m(t,l){C(t,e,l)},p:J,i:J,o:J,d(t){t&&I(e)}}}function Ll(n){let e,t,l,s,r,o,i,a,u,c,m,f,d=n[0]&&$e(n);const p=[Il,Cl,Nl],h=[];function _(g,w){return g[0]&&g[0].length>=5?0:g[4]?2:1}return a=_(n),u=h[a]=p[a](n),{c(){e=A("div"),d&&d.c(),t=T(),l=A("div"),s=A("input"),o=T(),i=A("span"),u.c(),b(s,"type","file"),b(s,"id","file"),b(s,"class","absolute top-0 left-0 z-10 h-full w-full cursor-pointer opacity-0"),s.multiple=!1,s.disabled=r=n[2]||n[0]&&n[0].length>=5,b(i,"class","flex h-full w-full cursor-not-allowed items-center justify-center gap-3 text-sm"),H(i,"z-10",n[2]||n[0]&&n[0].length>=5),b(l,"class","relative flex h-12 w-full items-center justify-center rounded-lg border transition hover:bg-black hover:bg-opacity-10"),H(l,"mt-5",n[0]&&n[0].length>0),H(l,"opactity-50",n[2]||n[0]&&n[0].length>=5),b(e,"class","h-full w-72 p-4")},m(g,w){C(g,e,w),d&&d.m(e,null),z(e,t),z(e,l),z(l,s),n[14](s),z(l,o),z(l,i),h[a].m(i,null),c=!0,m||(f=V(s,"change",n[8]),m=!0)},p(g,[w]){g[0]?d?(d.p(g,w),w&1&&k(d,1)):(d=$e(g),d.c(),k(d,1),d.m(e,t)):d&&(W(),y(d,1,1,()=>{d=null}),q()),(!c||w&5&&r!==(r=g[2]||g[0]&&g[0].length>=5))&&(s.disabled=r);let S=a;a=_(g),a===S?h[a].p(g,w):(W(),y(h[S],1,1,()=>{h[S]=null}),q(),u=h[a],u?u.p(g,w):(u=h[a]=p[a](g),u.c()),k(u,1),u.m(i,null)),(!c||w&5)&&H(i,"z-10",g[2]||g[0]&&g[0].length>=5),(!c||w&1)&&H(l,"mt-5",g[0]&&g[0].length>0),(!c||w&5)&&H(l,"opactity-50",g[2]||g[0]&&g[0].length>=5)},i(g){c||(k(d),k(u),c=!0)},o(g){y(d),y(u),c=!1},d(g){g&&I(e),d&&d.d(),n[14](null),h[a].d(),m=!1,f()}}}function Al(n,e,t){let l,s,r,o;Y(n,pt,D=>t(17,l=D)),Y(n,gt,D=>t(18,s=D)),Y(n,bt,D=>t(5,r=D));let{noteId:i}=e,a,u=!1,c="Hello World.png",m="",f,d="";const p=mt(),h=_l(0);Y(n,h,D=>t(6,o=D));let{attachments:_}=e;const g=async()=>{const D=a.files[0];if(D.size>25*1024*1024){t(4,d="Max file size is 25MB. Try again.");return}c=D.name,t(3,m=wt()),t(0,_=[{id:m,name:c,url:""},..._||[]]);const E=Ue(Ve,`users/${s}/profiles/${l}/notes/${i}/${c}`);f=qt(E,D),t(2,u=!0),f.on("state_changed",G=>{h.set(G.bytesTransferred/G.totalBytes*100)},G=>{console.log(G)},()=>{Rt(f.snapshot.ref).then(G=>{t(0,_=_.map(ee=>ee.id===m?{...ee,url:G,ref:f.snapshot.ref.fullPath}:ee)),p("attachments",_),t(2,u=!1),h.set(0),t(1,a.value="",a),c="",t(3,m="")})})},w=()=>{f.cancel(),t(0,_=_.filter(D=>D.id!==m)),h.set(0),t(2,u=!1),t(1,a.value="",a),c="",t(3,m="")},S=D=>{t(0,_=_.filter(E=>E.id!==D.id)),vt(Ue(Ve,D.ref)),p("attachments",_)};ht(()=>{f&&f.cancel()});const R=D=>{const E=document.createElement("a");E.style.display="none",r==null||r.appendChild(E),E.setAttribute("href",D.url),E.setAttribute("target","_blank"),E.download=D.name,E.click(),r==null||r.removeChild(E)},Z=D=>{S(D)};function K(D){Q[D?"unshift":"push"](()=>{a=D,t(1,a)})}return n.$$set=D=>{"noteId"in D&&t(11,i=D.noteId),"attachments"in D&&t(0,_=D.attachments)},[_,a,u,m,d,r,o,h,g,w,S,i,R,Z,K]}class zl extends ve{constructor(e){super(),ye(this,e,Al,Ll,Ne,{noteId:11,attachments:0})}}function lt(n,e,t){const l=n.slice();return l[52]=e[t],l}function nt(n,e,t){const l=n.slice();return l[52]=e[t],l}function Dl(n){let e,t=(n[2]||"What's on your mind?")+"",l;return{c(){e=A("p"),l=X(t),b(e,"slot","less"),b(e,"class","max-line-1 w-full whitespace-pre-wrap pb-[2px] text-left text-[1.1rem] font-semibold leading-5 svelte-1bwcr7a"),H(e,"opacity-70",!n[2])},m(s,r){C(s,e,r),z(e,l)},p(s,r){r[0]&4&&t!==(t=(s[2]||"What's on your mind?")+"")&&re(l,t),r[0]&4&&H(e,"opacity-70",!s[2])},d(s){s&&I(e)}}}function Sl(n){let e,t,l,s;function r(a){n[23](a)}function o(a){n[24](a)}let i={slot:"more",placeholder:"What's on your mind?",class:"no-border placeholder w-full text-left text-[1.1rem] font-semibold leading-5",styles:"padding: 0; background: transparent;",maxlength:100};return n[2]!==void 0&&(i.value=n[2]),n[9]!==void 0&&(i.element=n[9]),e=new Ct({props:i}),Q.push(()=>ue(e,"value",r)),Q.push(()=>ue(e,"element",o)),e.$on("escape",n[25]),e.$on("resize",function(){ge(n[57])&&n[57].apply(this,arguments)}),{c(){M(e.$$.fragment)},m(a,u){j(e,a,u),s=!0},p(a,u){n=a;const c={};!t&&u[0]&4&&(t=!0,c.value=n[2],ce(()=>t=!1)),!l&&u[0]&512&&(l=!0,c.element=n[9],ce(()=>l=!1)),e.$set(c)},i(a){s||(k(e.$$.fragment,a),s=!0)},o(a){y(e.$$.fragment,a),s=!1},d(a){P(e,a)}}}function Tl(n){let e,t=(n[1]||"Add notes here")+"",l;return{c(){e=A("p"),l=X(t),b(e,"class","max-line-2 w-full whitespace-pre-wrap text-left text-[1rem] leading-6 svelte-1bwcr7a"),b(e,"slot","less"),H(e,"opacity-70",!n[1])},m(s,r){C(s,e,r),z(e,l)},p(s,r){r[0]&2&&t!==(t=(s[1]||"Add notes here")+"")&&re(l,t),r[0]&2&&H(e,"opacity-70",!s[1])},d(s){s&&I(e)}}}function Ml(n){let e,t,l,s;function r(a){n[29](a)}function o(a){n[30](a)}let i={slot:"more",placeholder:"Add notes here",class:"no-border placeholder w-full text-left text-[1rem] leading-6",styles:"padding: 0; background: transparent; max-height: 20rem; overflow: auto;",maxlength:1e4};return n[1]!==void 0&&(i.value=n[1]),n[6]!==void 0&&(i.element=n[6]),e=new Ct({props:i}),Q.push(()=>ue(e,"value",r)),Q.push(()=>ue(e,"element",o)),e.$on("escape",n[31]),e.$on("resize",function(){ge(n[57])&&n[57].apply(this,arguments)}),{c(){M(e.$$.fragment)},m(a,u){j(e,a,u),s=!0},p(a,u){n=a;const c={};!t&&u[0]&2&&(t=!0,c.value=n[1],ce(()=>t=!1)),!l&&u[0]&64&&(l=!0,c.element=n[6],ce(()=>l=!1)),e.$set(c)},i(a){s||(k(e.$$.fragment,a),s=!0)},o(a){y(e.$$.fragment,a),s=!1},d(a){P(e,a)}}}function st(n){let e,t,l,s,r,o,i,a;const u=[Pl,jl],c=[];function m(f,d){return f[3]?1:0}return t=m(n),l=c[t]=u[t](n),{c(){e=A("button"),l.c(),b(e,"class","relative flex items-center")},m(f,d){C(f,e,d),c[t].m(e,null),o=!0,i||(a=[V(e,"click",n[35]),ne(s=Me.call(null,e,n[3]?"Unpin":"Pin"))],i=!0)},p(f,d){let p=t;t=m(f),t===p?c[t].p(f,d):(W(),y(c[p],1,1,()=>{c[p]=null}),q(),l=c[t],l?l.p(f,d):(l=c[t]=u[t](f),l.c()),k(l,1),l.m(e,null)),s&&ge(s.update)&&d[0]&8&&s.update.call(null,f[3]?"Unpin":"Pin")},i(f){o||(k(l),f&&Ce(()=>{o&&(r||(r=te(e,me,{duration:300},!0)),r.run(1))}),o=!0)},o(f){y(l),f&&(r||(r=te(e,me,{duration:300},!1)),r.run(0)),o=!1},d(f){f&&I(e),c[t].d(),f&&r&&r.end(),i=!1,pe(a)}}}function jl(n){let e,t;return e=new x({props:{icon:el,class:"text-[1.1rem] "}}),{c(){M(e.$$.fragment)},m(l,s){j(e,l,s),t=!0},p:J,i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){y(e.$$.fragment,l),t=!1},d(l){P(e,l)}}}function Pl(n){let e,t;return e=new x({props:{icon:tl,class:"text-[1.1rem] "}}),{c(){M(e.$$.fragment)},m(l,s){j(e,l,s),t=!0},p:J,i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){y(e.$$.fragment,l),t=!1},d(l){P(e,l)}}}function it(n){let e,t,l,s,r,o,i,a,u,c;t=new x({props:{icon:Xt,class:"text-[1.1rem] "}});let m=n[5]&&n[5].length>0&&rt(n);return i=new we({props:{trigger:"click",class:"flex items-center justify-center rounded-lg",placement:"bottom-start",transition:"slide",offset:[0,10],$$slots:{default:[El]},$$scope:{ctx:n}}}),{c(){e=A("button"),M(t.$$.fragment),l=T(),m&&m.c(),o=T(),M(i.$$.fragment),b(e,"class","relative flex items-center")},m(f,d){C(f,e,d),j(t,e,null),z(e,l),m&&m.m(e,null),C(f,o,d),j(i,f,d),a=!0,u||(c=[V(e,"click",Yt(n[22])),ne(s=Me.call(null,e,"Attachments"+(n[5]&&n[5].length>0?" ("+n[5].length+")":"")))],u=!0)},p(f,d){f[5]&&f[5].length>0?m?m.p(f,d):(m=rt(f),m.c(),m.m(e,null)):m&&(m.d(1),m=null),s&&ge(s.update)&&d[0]&32&&s.update.call(null,"Attachments"+(f[5]&&f[5].length>0?" ("+f[5].length+")":""));const p={};d[0]&33|d[1]&134217728&&(p.$$scope={dirty:d,ctx:f}),i.$set(p)},i(f){a||(k(t.$$.fragment,f),f&&Ce(()=>{a&&(r||(r=te(e,me,{duration:300},!0)),r.run(1))}),k(i.$$.fragment,f),a=!0)},o(f){y(t.$$.fragment,f),f&&(r||(r=te(e,me,{duration:300},!1)),r.run(0)),y(i.$$.fragment,f),a=!1},d(f){f&&I(e),P(t),m&&m.d(),f&&r&&r.end(),f&&I(o),P(i,f),u=!1,pe(c)}}}function rt(n){let e,t=n[5].length+"",l;return{c(){e=A("span"),l=X(t),b(e,"class","ml-1 text-xs")},m(s,r){C(s,e,r),z(e,l)},p(s,r){r[0]&32&&t!==(t=s[5].length+"")&&re(l,t)},d(s){s&&I(e)}}}function El(n){let e,t;return e=new zl({props:{noteId:n[0].id,attachments:n[5]}}),e.$on("attachments",n[36]),{c(){M(e.$$.fragment)},m(l,s){j(e,l,s),t=!0},p(l,s){const r={};s[0]&1&&(r.noteId=l[0].id),s[0]&32&&(r.attachments=l[5]),e.$set(r)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){y(e.$$.fragment,l),t=!1},d(l){P(e,l)}}}function ot(n){let e,t,l,s,r,o,i,a,u,c,m,f,d,p,h;return o=new we({props:{trigger:"click",class:"flex w-40 flex-col gap-3 rounded-lg p-3 px-4",placement:"bottom-start",transition:"slide",offset:[0,10],$$slots:{default:[Fl]},$$scope:{ctx:n}}}),u=new x({props:{icon:yt,class:"text-[1rem"}}),m=new we({props:{trigger:"click",class:"flex flex-wrap items-center justify-center gap-4 p-2 px-3",placement:"bottom-start",transition:"slide",offset:[0,10],wrapperStyles:"background: rgba(255, 0, 0, 0.5);",$$slots:{default:[Ol]},$$scope:{ctx:n}}}),{c(){e=A("div"),t=A("button"),r=T(),M(o.$$.fragment),i=T(),a=A("button"),M(u.$$.fragment),c=T(),M(m.$$.fragment),b(t,"class",l=$(`relative h-[1.1rem] w-[1.1rem] rounded-full border-[1px] border-solid border-[var(--text)] ${n[4]?n[4]:"bg-transparent"}`)+" svelte-1bwcr7a"),b(a,"class","flex items-center"),b(e,"class","flex items-center gap-4")},m(_,g){C(_,e,g),z(e,t),z(e,r),j(o,e,null),z(e,i),z(e,a),j(u,a,null),z(e,c),j(m,e,null),d=!0,p||(h=[ne(s=Me.call(null,t,n[4]?"Change color":"Add color")),ne(Me.call(null,a,"Delete"))],p=!0)},p(_,g){(!d||g[0]&16&&l!==(l=$(`relative h-[1.1rem] w-[1.1rem] rounded-full border-[1px] border-solid border-[var(--text)] ${_[4]?_[4]:"bg-transparent"}`)+" svelte-1bwcr7a"))&&b(t,"class",l),s&&ge(s.update)&&g[0]&16&&s.update.call(null,_[4]?"Change color":"Add color");const w={};g[0]&16|g[1]&134217728&&(w.$$scope={dirty:g,ctx:_}),o.$set(w);const S={};g[0]&256|g[1]&134217728&&(S.$$scope={dirty:g,ctx:_}),m.$set(S)},i(_){d||(k(o.$$.fragment,_),k(u.$$.fragment,_),k(m.$$.fragment,_),_&&Ce(()=>{d&&(f||(f=te(e,me,{duration:300},!0)),f.run(1))}),d=!0)},o(_){y(o.$$.fragment,_),y(u.$$.fragment,_),y(m.$$.fragment,_),_&&(f||(f=te(e,me,{duration:300},!1)),f.run(0)),d=!1},d(_){_&&I(e),P(o),P(u),P(m),_&&f&&f.end(),p=!1,pe(h)}}}function at(n){let e,t,l;function s(){return n[38](n[52])}return{c(){e=A("button"),b(e,"class",$(`h-5 w-5 rounded-full border-[1px] border-solid border-[var(--text)] ${n[52]} `)+" svelte-1bwcr7a")},m(r,o){C(r,e,o),t||(l=V(e,"click",s),t=!0)},p(r,o){n=r},d(r){r&&I(e),t=!1,l()}}}function ft(n){let e,t,l;function s(){return n[39](n[52])}return{c(){e=A("button"),b(e,"class",$(`h-5 w-5 rounded-full border-[1px] border-solid border-[var(--text)] ${n[52]} `)+" svelte-1bwcr7a")},m(r,o){C(r,e,o),t||(l=V(e,"click",s),t=!0)},p(r,o){n=r},d(r){r&&I(e),t=!1,l()}}}function Fl(n){let e,t,l,s,r,o,i,a,u,c,m,f=n[15],d=[];for(let _=0;_<f.length;_+=1)d[_]=at(nt(n,f,_));let p=n[16],h=[];for(let _=0;_<p.length;_+=1)h[_]=ft(lt(n,p,_));return{c(){e=A("span"),e.textContent="Solids",t=T(),l=A("div"),s=A("button"),r=T();for(let _=0;_<d.length;_+=1)d[_].c();o=T(),i=A("span"),i.textContent="Gradients",a=T(),u=A("div");for(let _=0;_<h.length;_+=1)h[_].c();b(e,"class","text-sm"),b(s,"class",$("h-5 w-5 rounded-full border-[1px] border-solid border-[var(--text)] bg-transparent ")+" svelte-1bwcr7a"),b(l,"class","flex w-full flex-wrap items-center justify-center gap-4"),b(i,"class","mt-1 text-sm"),b(u,"class","flex w-full flex-wrap items-center justify-center gap-4")},m(_,g){C(_,e,g),C(_,t,g),C(_,l,g),z(l,s),z(l,r);for(let w=0;w<d.length;w+=1)d[w]&&d[w].m(l,null);C(_,o,g),C(_,i,g),C(_,a,g),C(_,u,g);for(let w=0;w<h.length;w+=1)h[w]&&h[w].m(u,null);c||(m=V(s,"click",n[37]),c=!0)},p(_,g){if(g[0]&32784){f=_[15];let w;for(w=0;w<f.length;w+=1){const S=nt(_,f,w);d[w]?d[w].p(S,g):(d[w]=at(S),d[w].c(),d[w].m(l,null))}for(;w<d.length;w+=1)d[w].d(1);d.length=f.length}if(g[0]&65552){p=_[16];let w;for(w=0;w<p.length;w+=1){const S=lt(_,p,w);h[w]?h[w].p(S,g):(h[w]=ft(S),h[w].c(),h[w].m(u,null))}for(;w<h.length;w+=1)h[w].d(1);h.length=p.length}},d(_){_&&I(e),_&&I(t),_&&I(l),Je(d,_),_&&I(o),_&&I(i),_&&I(a),_&&I(u),Je(h,_),c=!1,m()}}}function Bl(n){let e;return{c(){e=X("Confirm")},m(t,l){C(t,e,l)},d(t){t&&I(e)}}}function Ol(n){let e,t,l,s;return l=new Nt({props:{class:"flex items-center",size:"sm",$$slots:{default:[Bl]},$$scope:{ctx:n}}}),l.$on("click",n[40]),{c(){e=A("span"),e.textContent="Delete this note?",t=T(),M(l.$$.fragment),b(e,"class","text-sm")},m(r,o){C(r,e,o),C(r,t,o),j(l,r,o),s=!0},p(r,o){const i={};o[1]&134217728&&(i.$$scope={dirty:o,ctx:r}),l.$set(i)},i(r){s||(k(l.$$.fragment,r),s=!0)},o(r){y(l.$$.fragment,r),s=!1},d(r){r&&I(e),r&&I(t),P(l,r)}}}function Ul(n){let e,t,l,s,r,o,i,a,u,c,m,f,d,p,h,_,g,w,S,R,Z,K,D,E,G,ee;function be(L){n[26](L)}let oe={duration:200,$$slots:{more:[Sl,({updateHeight:L})=>({57:L}),({updateHeight:L})=>[0,L?67108864:0]],less:[Dl]},$$scope:{ctx:n}};n[8]!==void 0&&(oe.show=n[8]),l=new Ke({props:oe}),Q.push(()=>ue(l,"show",be)),l.$on("notransition",n[27]),l.$on("intronend",n[28]);function he(L){n[32](L)}let de={duration:200,$$slots:{more:[Ml,({updateHeight:L})=>({57:L}),({updateHeight:L})=>[0,L?67108864:0]],less:[Tl]},$$scope:{ctx:n}};n[8]!==void 0&&(de.show=n[8]),i=new Ke({props:de}),Q.push(()=>ue(i,"show",he)),i.$on("notransition",n[33]),i.$on("intronend",n[34]);let B=(n[8]||n[3])&&st(n),O=(n[8]||n[5]&&n[5].length>0)&&it(n),U=n[8]&&ot(n);return g=new x({props:{icon:Kt,class:"text-[0.9rem]"}}),{c(){e=A("button"),t=A("div"),M(l.$$.fragment),r=T(),o=A("div"),M(i.$$.fragment),u=T(),c=A("div"),m=A("div"),f=A("div"),B&&B.c(),d=T(),O&&O.c(),p=T(),U&&U.c(),h=T(),_=A("div"),M(g.$$.fragment),w=T(),S=A("span"),R=X(n[10]),b(t,"class","relative mt-1 mb-2 h-max w-full"),b(o,"class","relative h-max w-full"),b(f,"class","flex items-center gap-4"),b(m,"class","flex flex-col"),b(S,"class","block shrink-0 text-sm"),b(_,"class","flex items-center gap-2 opacity-70"),b(c,"class","mt-3 flex w-full flex-wrap items-end justify-between gap-4"),b(e,"class",Z=$(`curved container relative flex w-full flex-col items-start px-4 py-3 ${n[4]??"border-light bg-black bg-opacity-10 transition"} `)+" svelte-1bwcr7a")},m(L,F){C(L,e,F),z(e,t),j(l,t,null),z(e,r),z(e,o),j(i,o,null),z(e,u),z(e,c),z(c,m),z(m,f),B&&B.m(f,null),z(f,d),O&&O.m(f,null),z(f,p),U&&U.m(f,null),z(c,h),z(c,_),j(g,_,null),z(_,w),z(_,S),z(S,R),n[41](c),n[44](e),E=!0,G||(ee=[ne(K=Qt.call(null,e,{onClose:n[42]})),V(e,"click",n[43]),ne(n[18].call(null,e))],G=!0)},p(L,F){const ae={};F[0]&772|F[1]&201326592&&(ae.$$scope={dirty:F,ctx:L}),!s&&F[0]&256&&(s=!0,ae.show=L[8],ce(()=>s=!1)),l.$set(ae);const fe={};F[0]&322|F[1]&201326592&&(fe.$$scope={dirty:F,ctx:L}),!a&&F[0]&256&&(a=!0,fe.show=L[8],ce(()=>a=!1)),i.$set(fe),L[8]||L[3]?B?(B.p(L,F),F[0]&264&&k(B,1)):(B=st(L),B.c(),k(B,1),B.m(f,d)):B&&(W(),y(B,1,1,()=>{B=null}),q()),L[8]||L[5]&&L[5].length>0?O?(O.p(L,F),F[0]&288&&k(O,1)):(O=it(L),O.c(),k(O,1),O.m(f,p)):O&&(W(),y(O,1,1,()=>{O=null}),q()),L[8]?U?(U.p(L,F),F[0]&256&&k(U,1)):(U=ot(L),U.c(),k(U,1),U.m(f,null)):U&&(W(),y(U,1,1,()=>{U=null}),q()),(!E||F[0]&1024)&&re(R,L[10]),(!E||F[0]&16&&Z!==(Z=$(`curved container relative flex w-full flex-col items-start px-4 py-3 ${L[4]??"border-light bg-black bg-opacity-10 transition"} `)+" svelte-1bwcr7a"))&&b(e,"class",Z),K&&ge(K.update)&&F[0]&4352&&K.update.call(null,{onClose:L[42]})},i(L){E||(k(l.$$.fragment,L),k(i.$$.fragment,L),k(B),k(O),k(U),k(g.$$.fragment,L),L&&Ce(()=>{E&&(D||(D=te(e,Te,{duration:300},!0)),D.run(1))}),E=!0)},o(L){y(l.$$.fragment,L),y(i.$$.fragment,L),y(B),y(O),y(U),y(g.$$.fragment,L),L&&(D||(D=te(e,Te,{duration:300},!1)),D.run(0)),E=!1},d(L){L&&I(e),P(l),P(i),B&&B.d(),O&&O.d(),U&&U.d(),P(g),n[41](null),n[44](null),L&&D&&D.end(),G=!1,pe(ee)}}}function Vl(n,e,t){let l,s,r;Y(n,bt,N=>t(12,r=N));const o=ze("allNotes");Y(n,o,N=>t(47,s=N));let{note:i}=e,{id:a,content:u,title:c,pinned:m,isNew:f,color:d,attachments:p,updated:h}=i;const _=N=>{N&&(a=N.id,t(1,u=N.content),t(2,c=N.title),t(3,m=N.pinned),t(20,f=N.isNew),t(4,d=N.color),t(5,p=N.attachments),h=N.updated)},g=$t(!1);Y(n,g,N=>t(8,l=N));let w,S,R=!1,Z=Ae(h).fromNow(),K,{notesContainer:D}=e,E;const G=setInterval(()=>{t(10,Z=Ae(h).fromNow())},1e3*60),ee=["bg-blue-400","bg-yellow-400","bg-purple-400","bg-pink-400","bg-red-400","bg-indigo-400","bg-orange-400"],be=["bg-gradient-to-r from-blue-500 to-cyan-500","bg-gradient-to-r from-pink-500 to-rose-500","bg-gradient-to-r from-fuchsia-600 to-purple-600","bg-gradient-to-r from-blue-600 to-violet-600","bg-gradient-to-r from-red-500 to-orange-500","bg-gradient-to-r from-lime-500 to-lime-400","bg-gradient-to-r from-slate-500 to-slate-800","bg-gradient-to-r from-blue-800 to-indigo-900"],oe=()=>{p&&p.length>0&&p.forEach(N=>{vt(Ue(Ve,N.ref))}),ie(o,s=s.filter(N=>N.id!==a),s)},he=(N,se,_e,Le,qe,Re)=>{N===i.title&&se===i.content&&_e===i.pinned&&Le===i.color&&qe===i.isNew&&JSON.stringify(Re)===JSON.stringify(i==null?void 0:i.attachments)||(t(21,R=!0),h=Ae().toISOString(),t(10,Z=Ae(h).fromNow()),o.update(Oe=>{const Ft=Oe.findIndex(Bt=>Bt.id===i.id);return Oe[Ft]={...i,title:N,content:se,isNew:qe,pinned:_e,attachments:Re||[],color:Le,updated:h},Oe}))},de=()=>{t(21,R=!1),o.update(N=>{const se=N.findIndex(_e=>_e.id===i.id);return N[se]={...i,updated:h,isNew:!1},N})},B=async N=>{await xt(),f&&(N&&setTimeout(()=>{N.scrollIntoView({block:"nearest",inline:"center",behavior:"smooth",alignToTop:!1}),g.set(!0)},100),w&&setTimeout(()=>{w.focus()},150),o.update(se=>{const _e=se.findIndex(Le=>Le.id===i.id);return se[_e]={...i,isNew:!1},se}))};ht(()=>{clearInterval(G)});function O(N){le.call(this,n,N)}function U(N){c=N,t(2,c)}function L(N){w=N,t(9,w)}const F=()=>ie(g,l=!1,l);function ae(N){l=N,g.set(l)}const fe=()=>w&&c===""&&w.focus(),Pe=()=>w&&c===""&&w.focus();function Ee(N){u=N,t(1,u)}function Fe(N){S=N,t(6,S)}const v=()=>ie(g,l=!1,l);function Ie(N){l=N,g.set(l)}const ke=()=>S&&c!==""&&S.focus(),Be=()=>S&&c!==""&&S.focus(),Lt=()=>t(3,m=!m),At=({detail:N})=>t(5,p=N),zt=()=>t(4,d=null),Dt=N=>t(4,d=N),St=N=>t(4,d=N),Tt=()=>{ie(g,l=!1,l),oe()};function Mt(N){Q[N?"unshift":"push"](()=>{K=N,t(11,K)})}const jt=N=>{N&&(r!=null&&r.contains(N))||ie(g,l=!1,l)},Pt=()=>ie(g,l=!0,l);function Et(N){Q[N?"unshift":"push"](()=>{E=N,t(7,E)})}return n.$$set=N=>{"note"in N&&t(0,i=N.note),"notesContainer"in N&&t(19,D=N.notesContainer)},n.$$.update=()=>{n.$$.dirty[0]&1&&_(i),n.$$.dirty[0]&524736&&l&&S&&E&&D.scrollTo({top:E.offsetTop-100,behavior:"smooth"}),n.$$.dirty[0]&1048638&&he(c,u,m,d,f,p),n.$$.dirty[0]&2097408&&!l&&R&&de()},[i,u,c,m,d,p,S,E,l,w,Z,K,r,o,g,ee,be,oe,B,D,f,R,O,U,L,F,ae,fe,Pe,Ee,Fe,v,Ie,ke,Be,Lt,At,zt,Dt,St,Tt,Mt,jt,Pt,Et]}class Wl extends ve{constructor(e){super(),ye(this,e,Vl,Ul,Ne,{note:0,notesContainer:19},null,[-1,-1])}}function ut(n,e,t){const l=n.slice();return l[13]=e[t],l[15]=t,l}function ct(n){let e,t,l,s;const r=[Rl,ql],o=[];function i(a,u){return a[2].length===0?0:1}return e=i(n),t=o[e]=r[e](n),{c(){t.c(),l=je()},m(a,u){o[e].m(a,u),C(a,l,u),s=!0},p(a,u){let c=e;e=i(a),e===c?o[e].p(a,u):(W(),y(o[c],1,1,()=>{o[c]=null}),q(),t=o[e],t?t.p(a,u):(t=o[e]=r[e](a),t.c()),k(t,1),t.m(l.parentNode,l))},i(a){s||(k(t),s=!0)},o(a){y(t),s=!1},d(a){o[e].d(a),a&&I(l)}}}function ql(n){let e=[],t=new Map,l,s,r=n[2];const o=i=>i[13].id;for(let i=0;i<r.length;i+=1){let a=ut(n,r,i),u=o(a);t.set(u,e[i]=dt(u,a))}return{c(){for(let i=0;i<e.length;i+=1)e[i].c();l=je()},m(i,a){for(let u=0;u<e.length;u+=1)e[u]&&e[u].m(i,a);C(i,l,a),s=!0},p(i,a){if(a&6){r=i[2],W();for(let u=0;u<e.length;u+=1)e[u].r();e=kt(e,a,o,1,i,r,t,l.parentNode,il,dt,l,ut);for(let u=0;u<e.length;u+=1)e[u].a();q()}},i(i){if(!s){for(let a=0;a<r.length;a+=1)k(e[a]);s=!0}},o(i){for(let a=0;a<e.length;a+=1)y(e[a]);s=!1},d(i){for(let a=0;a<e.length;a+=1)e[a].d(i);i&&I(l)}}}function Rl(n){let e,t,l,s;const r=[Hl,Gl],o=[];function i(a,u){return a[0]?0:1}return t=i(n),l=o[t]=r[t](n),{c(){e=A("div"),l.c(),b(e,"class","flex w-full flex-col items-center justify-center gap-3 py-6")},m(a,u){C(a,e,u),o[t].m(e,null),s=!0},p(a,u){let c=t;t=i(a),t===c?o[t].p(a,u):(W(),y(o[c],1,1,()=>{o[c]=null}),q(),l=o[t],l?l.p(a,u):(l=o[t]=r[t](a),l.c()),k(l,1),l.m(e,null))},i(a){s||(k(l),s=!0)},o(a){y(l),s=!1},d(a){a&&I(e),o[t].d()}}}function dt(n,e){let t,l,s,r,o=J,i;return l=new Wl({props:{note:e[13],notesContainer:e[1]}}),{key:n,first:null,c(){t=A("div"),M(l.$$.fragment),s=T(),b(t,"class","w-full"),this.first=t},m(a,u){C(a,t,u),j(l,t,null),z(t,s),i=!0},p(a,u){e=a;const c={};u&4&&(c.note=e[13]),u&2&&(c.notesContainer=e[1]),l.$set(c)},r(){r=t.getBoundingClientRect()},f(){rl(t),o()},a(){o(),o=ol(t,r,al,{duration:300})},i(a){i||(k(l.$$.fragment,a),i=!0)},o(a){y(l.$$.fragment,a),i=!1},d(a){a&&I(t),P(l)}}}function Gl(n){let e,t,l,s;return l=new Nt({props:{$$slots:{default:[Jl]},$$scope:{ctx:n}}}),l.$on("click",n[8]),{c(){e=A("span"),e.innerHTML="You don&#39;t have any notes yet. <br/> Add a note to get started.",t=T(),M(l.$$.fragment),b(e,"class","mx-16 text-center text-sm")},m(r,o){C(r,e,o),C(r,t,o),j(l,r,o),s=!0},p(r,o){const i={};o&65536&&(i.$$scope={dirty:o,ctx:r}),l.$set(i)},i(r){s||(k(l.$$.fragment,r),s=!0)},o(r){y(l.$$.fragment,r),s=!1},d(r){r&&I(e),r&&I(t),P(l,r)}}}function Hl(n){let e;return{c(){e=A("span"),e.textContent="No matching notes found",b(e,"class","text-sm")},m(t,l){C(t,e,l)},p:J,i:J,o:J,d(t){t&&I(e)}}}function Jl(n){let e;return{c(){e=X("Add Note")},m(t,l){C(t,e,l)},d(t){t&&I(e)}}}function _t(n){let e,t,l,s,r,o,i;function a(c){n[11](c)}let u={iconClass:"text-[0.9rem]",icon:fl,placeholder:"Search notes",class:"w-full py-[0.23rem] pl-[2.2rem] text-[0.87rem] leading-6",wrapperClass:"w-full",animate:!1};return n[0]!==void 0&&(u.value=n[0]),t=new wl({props:u}),Q.push(()=>ue(t,"value",a)),r=new We({props:{class:"mr-2 flex items-center text-2xl shrink-0",icon:sl,tooltip:"Add note"}}),r.$on("click",n[8]),{c(){e=A("div"),M(t.$$.fragment),s=T(),M(r.$$.fragment),b(e,"class","mt-3 ml-0.5 flex w-full items-center justify-between gap-3")},m(c,m){C(c,e,m),j(t,e,null),z(e,s),j(r,e,null),i=!0},p(c,m){const f={};!l&&m&1&&(l=!0,f.value=c[0],ce(()=>l=!1)),t.$set(f)},i(c){i||(k(t.$$.fragment,c),k(r.$$.fragment,c),c&&Ce(()=>{i&&(o||(o=te(e,Te,{duration:300},!0)),o.run(1))}),i=!0)},o(c){y(t.$$.fragment,c),y(r.$$.fragment,c),c&&(o||(o=te(e,Te,{duration:300},!1)),o.run(0)),i=!1},d(c){c&&I(e),P(t),P(r),c&&o&&o.end()}}}function Zl(n){let e,t,l,s,r,o,i,a,u=n[2]&&ct(n),c=(n[3]||n[4])&&n[2].length>0&&_t(n);return{c(){e=A("div"),t=A("div"),l=A("div"),u&&u.c(),r=T(),c&&c.c(),b(l,"class",s="notes-wrapper flex h-full "+(n[3]?"max-h-[40rem]":"max-h-[16.75rem]")+" w-full flex-col items-start gap-2 svelte-r43yqw"),ll(t,"width","100%"),b(e,"class","flex h-full w-[24rem] flex-col items-start justify-between px-2 py-2")},m(m,f){C(m,e,f),z(e,t),z(t,l),u&&u.m(l,null),n[10](l),z(e,r),c&&c.m(e,null),o=!0,i||(a=ne(nl.call(null,t)),i=!0)},p(m,[f]){m[2]?u?(u.p(m,f),f&4&&k(u,1)):(u=ct(m),u.c(),k(u,1),u.m(l,null)):u&&(W(),y(u,1,1,()=>{u=null}),q()),(!o||f&8&&s!==(s="notes-wrapper flex h-full "+(m[3]?"max-h-[40rem]":"max-h-[16.75rem]")+" w-full flex-col items-start gap-2 svelte-r43yqw"))&&b(l,"class",s),(m[3]||m[4])&&m[2].length>0?c?(c.p(m,f),f&28&&k(c,1)):(c=_t(m),c.c(),k(c,1),c.m(e,null)):c&&(W(),y(c,1,1,()=>{c=null}),q())},i(m){o||(k(u),k(c),o=!0)},o(m){y(u),y(c),o=!1},d(m){m&&I(e),u&&u.d(),n[10](null),c&&c.d(),i=!1,a()}}}function Kl(n,e,t){let l,s,r,o;const i=ze("allNotes");Y(n,i,_=>t(9,s=_));let a="",u;const c=ze("appActive");Y(n,c,_=>t(4,o=_));const m=ze("appView");Y(n,m,_=>t(3,r=_)),It(()=>{ie(i,s=s.filter(_=>{const g=_.attachments&&_.attachments.length>0;return!(_.title===""&&_.content===""&&!g)}),s)});const f=()=>{ie(i,s=[{id:wt(),content:"",title:"",isNew:!0,updated:new Date().toISOString()},...s],s)},d=_=>_.sort((g,w)=>Ze(g,w,"updated")).sort((g,w)=>Ze(g,w,"pinned",!0,!0));function p(_){Q[_?"unshift":"push"](()=>{u=_,t(1,u)})}function h(_){a=_,t(0,a)}return n.$$.update=()=>{n.$$.dirty&513&&t(2,l=d(s).filter(_=>a?_.title.toLowerCase().includes(a.toLowerCase())||_.content.toLowerCase().includes(a.toLowerCase()):!0))},[a,u,l,r,o,i,c,m,f,s,p,h]}class Ql extends ve{constructor(e){super(),ye(this,e,Kl,Zl,Ne,{})}}function Xl(n){let e,t;return e=new dl({}),{c(){M(e.$$.fragment)},m(l,s){j(e,l,s),t=!0},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){y(e.$$.fragment,l),t=!1},d(l){P(e,l)}}}function Yl(n){let e,t;return e=new Ql({}),{c(){M(e.$$.fragment)},m(l,s){j(e,l,s),t=!0},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){y(e.$$.fragment,l),t=!1},d(l){P(e,l)}}}function $l(n){let e,t,l,s;const r=[Yl,Xl],o=[];function i(a,u){return a[0]?0:1}return e=i(n),t=o[e]=r[e](n),{c(){t.c(),l=je()},m(a,u){o[e].m(a,u),C(a,l,u),s=!0},p(a,[u]){let c=e;e=i(a),e!==c&&(W(),y(o[c],1,1,()=>{o[c]=null}),q(),t=o[e],t||(t=o[e]=r[e](a),t.c()),k(t,1),t.m(l.parentNode,l))},i(a){s||(k(t),s=!0)},o(a){y(t),s=!1},d(a){o[e].d(a),a&&I(l)}}}function xl(n,e,t){let l,{config:s}=e;const r=ul({path:`user_data/{userID}/profiles/{currentProfile}/apps/${s.id}/currentNotes`,currentProfile:pt,userID:gt},[]),o=r.isFetched;return Y(n,o,i=>t(0,l=i)),It(()=>{r.start()}),cl("allNotes",r),n.$$set=i=>{"config"in i&&t(2,s=i.config)},[l,o,s]}class nn extends ve{constructor(e){super(),ye(this,e,xl,$l,Ne,{config:2})}}export{nn as default};