import{S as ee,i as te,s as ne,q as y,V as P,K as L,a7 as G,r as k,u as v,L as h,Z as W,t as m,v as S,a as b,x as B,D as I,b as N,ah as re,ax as le,br as oe,I as X,aE as se,c as j,m as E,n as R,d as A,o as ae,aj as H,bU as ie,U as Y,a1 as ce,J as ue,R as O,an as fe,c2 as _e}from"./overlayscrollbars.js";function Q(o){let e,n;return e=new X({props:{icon:se}}),{c(){j(e.$$.fragment)},m(t,s){E(e,t,s),n=!0},p:R,i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function pe(o){let e;return{c(){e=y("span"),e.textContent="Not connected",k(e,"class","text-xs")},m(n,t){v(n,e,t)},p:R,d(n){n&&I(e)}}}function me(o){var s;let e,n=(o[1]&&((s=o[1])==null?void 0:s.id))+"",t;return{c(){e=y("span"),t=L(n),k(e,"class","max-line-1 text-xs")},m(l,a){v(l,e,a),h(e,t)},p(l,a){var f;a&2&&n!==(n=(l[1]&&((f=l[1])==null?void 0:f.id))+"")&&W(t,n)},d(l){l&&I(e)}}}function de(o){let e;return{c(){e=y("span"),e.textContent="Manage within widget",k(e,"class","text-xs")},m(n,t){v(n,e,t)},p:R,d(n){n&&I(e)}}}function ge(o){let e,n;return e=new Y({props:{class:o[5]?!1:"cursor-not-allowed opacity-50",styles:"padding: 0.25rem 0.75rem; ",$$slots:{default:[ke]},$$scope:{ctx:o}}}),e.$on("click",o[11]),{c(){j(e.$$.fragment)},m(t,s){E(e,t,s),n=!0},p(t,s){const l={};s&32&&(l.class=t[5]?!1:"cursor-not-allowed opacity-50"),s&4096&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function be(o){let e,n,t,s;const l=[he,$e],a=[];function f(r,u){return r[3]?1:0}return e=f(o),n=a[e]=l[e](o),{c(){n.c(),t=ce()},m(r,u){a[e].m(r,u),v(r,t,u),s=!0},p(r,u){let d=e;e=f(r),e===d?a[e].p(r,u):(S(),b(a[d],1,1,()=>{a[d]=null}),B(),n=a[e],n?n.p(r,u):(n=a[e]=l[e](r),n.c()),m(n,1),n.m(t.parentNode,t))},i(r){s||(m(n),s=!0)},o(r){b(n),s=!1},d(r){a[e].d(r),r&&I(t)}}}function ke(o){let e;return{c(){e=L("Manage")},m(n,t){v(n,e,t)},d(n){n&&I(e)}}}function $e(o){let e,n,t,s;const l=[ye,we],a=[];function f(r,u){return r[2]?1:0}return n=f(o),t=a[n]=l[n](o),{c(){e=y("div"),t.c(),k(e,"class","flex items-center gap-6")},m(r,u){v(r,e,u),a[n].m(e,null),s=!0},p(r,u){let d=n;n=f(r),n===d?a[n].p(r,u):(S(),b(a[d],1,1,()=>{a[d]=null}),B(),t=a[n],t?t.p(r,u):(t=a[n]=l[n](r),t.c()),m(t,1),t.m(e,null))},i(r){s||(m(t),s=!0)},o(r){b(t),s=!1},d(r){r&&I(e),a[n].d()}}}function he(o){let e,n;return e=new Y({props:{tooltip:o[5]?!1:"Join Dashy to use this feature",class:o[5]?"":"cursor-not-allowed opacity-50",styles:"padding: 0.25rem 0.75rem; ",$$slots:{default:[ve]},$$scope:{ctx:o}}}),e.$on("click",o[8]),{c(){j(e.$$.fragment)},m(t,s){E(e,t,s),n=!0},p(t,s){const l={};s&32&&(l.tooltip=t[5]?!1:"Join Dashy to use this feature"),s&32&&(l.class=t[5]?"":"cursor-not-allowed opacity-50"),s&4096&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function we(o){let e,n;return e=new X({props:{icon:ue,class:"animate-spin text-xl"}}),{c(){j(e.$$.fragment)},m(t,s){E(e,t,s),n=!0},p:R,i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function ye(o){let e,n,t,s;return e=new O({props:{tooltip:"Reconnect",icon:fe,class:"text-xl"}}),e.$on("click",o[9]),t=new O({props:{tooltip:"Disconnect",class:"text-xl ",icon:_e}}),t.$on("click",o[10]),{c(){j(e.$$.fragment),n=P(),j(t.$$.fragment)},m(l,a){E(e,l,a),v(l,n,a),E(t,l,a),s=!0},p:R,i(l){s||(m(e.$$.fragment,l),m(t.$$.fragment,l),s=!0)},o(l){b(e.$$.fragment,l),b(t.$$.fragment,l),s=!1},d(l){A(e,l),l&&I(n),A(t,l)}}}function ve(o){let e;return{c(){e=L("Connect")},m(n,t){v(n,e,t)},d(n){n&&I(e)}}}function Ie(o){var V;let e,n,t,s,l,a,f,r,u=((V=o[0])==null?void 0:V.name)+"",d,U,q,J,g,c,C,_=o[3]&&Q();function T(i,p){var w;return(w=i[0])!=null&&w.oauth?i[3]?me:pe:de}let M=T(o),$=M(o);const x=[be,ge],D=[];function K(i,p){var w;return(w=i[0])!=null&&w.oauth?0:1}return g=K(o),c=D[g]=x[g](o),{c(){var i,p;e=y("div"),n=y("div"),t=y("img"),a=P(),f=y("div"),r=y("span"),d=L(u),U=P(),_&&_.c(),q=P(),$.c(),J=P(),c.c(),G(t.src,s=(i=o[0])==null?void 0:i.icon)||k(t,"src",s),k(t,"alt",l=(p=o[0])==null?void 0:p.name),k(t,"class","w-8 object-cover"),k(r,"class","flex items-center justify-start gap-2"),k(f,"class","flex flex-col"),k(n,"class","flex items-center justify-start gap-4"),k(e,"class","flex w-full items-center justify-between gap-4")},m(i,p){v(i,e,p),h(e,n),h(n,t),h(n,a),h(n,f),h(f,r),h(r,d),h(r,U),_&&_.m(r,null),h(f,q),$.m(f,null),h(e,J),D[g].m(e,null),C=!0},p(i,[p]){var Z,z,F;(!C||p&1&&!G(t.src,s=(Z=i[0])==null?void 0:Z.icon))&&k(t,"src",s),(!C||p&1&&l!==(l=(z=i[0])==null?void 0:z.name))&&k(t,"alt",l),(!C||p&1)&&u!==(u=((F=i[0])==null?void 0:F.name)+"")&&W(d,u),i[3]?_?(_.p(i,p),p&8&&m(_,1)):(_=Q(),_.c(),m(_,1),_.m(r,null)):_&&(S(),b(_,1,1,()=>{_=null}),B()),M===(M=T(i))&&$?$.p(i,p):($.d(1),$=M(i),$&&($.c(),$.m(f,null)));let w=g;g=K(i),g===w?D[g].p(i,p):(S(),b(D[w],1,1,()=>{D[w]=null}),B(),c=D[g],c?c.p(i,p):(c=D[g]=x[g](i),c.c()),m(c,1),c.m(e,null))},i(i){C||(m(_),m(c),C=!0)},o(i){b(_),b(c),C=!1},d(i){i&&I(e),_&&_.d(),$.d(),D[g].d()}}}function De(o,e,n){let t,s,l,a,f;N(o,re,c=>n(4,l=c)),N(o,le,c=>n(7,a=c)),N(o,oe,c=>n(5,f=c));let{integration:r}=e,u=!1;const d=async()=>{n(2,u=!0),(await ae(`dashy/remove_integration/${r.id}`,{method:"DELETE",params:{profile:l}})).data.success&&(n(3,s=!1),n(2,u=!1))},U=()=>{if(!f)return;const c=r.oauth;c({user:H.currentUser,currentProfile:l,integration:r.integration,integration_id:r.id})},q=()=>{const c=r.oauth;c({user:H.currentUser,currentProfile:l,integration:r.integration,integration_id:r.id})},J=()=>{d()},g=()=>ie(r.app);return o.$$set=c=>{"integration"in c&&n(0,r=c.integration)},o.$$.update=()=>{o.$$.dirty&129&&n(1,t=a==null?void 0:a[r.id]),o.$$.dirty&2&&n(3,s=!!t)},[r,t,u,s,l,f,d,a,U,q,J,g]}class je extends ee{constructor(e){super(),te(this,e,De,Ie,ne,{integration:0})}}export{je as I};