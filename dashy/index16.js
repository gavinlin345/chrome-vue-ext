import{S as ve,i as we,s as ke,c as M,m as U,t as g,a as v,d as W,E as he,b as O,G as Ue,c3 as Re,q as y,V as R,K as Z,a7 as oe,r as d,u as j,L as b,a8 as qe,a9 as We,as as Qe,Z as ne,D as B,a5 as z,R as fe,T as Zt,N as ze,O as Se,P as He,U as Je,W as Oe,v as G,x as K,o as Fe,bf as Gt,aD as Me,ar as Kt,bw as Ze,aE as Xt,n as X,I as Ce,a0 as Yt,J as be,a3 as ue,y as Ge,z as Ut,B as Ve,C as Wt,aP as Qt,aa as se,ab as De,a1 as de,af as Ke,bZ as xt,b_ as zt,b$ as Ht,c0 as Jt,c1 as el,c2 as tl,ao as ll,c6 as nl,cy as bt,c8 as rl,_ as kt,$ as vt,cz as Ne,ag as sl,cA as ol,cB as il,ah as cl,av as al,e as ul,ay as fl,az as Ee,aB as _l}from"./overlayscrollbars.js";import{C as Xe}from"./Card.js";function pl(s){let e,t,l,n,o,i,c,r=s[0].item.title+"",a,u,f,m=s[0].item.itunes.episode?`Episode ${s[0].item.itunes.episode} • `:"",_,p,w=Re(s[0].item.date)+"",S,E,k=s[0].source.name+"",L,N,I;return{c(){e=y("img"),o=R(),i=y("div"),c=y("span"),a=Z(r),u=R(),f=y("span"),_=Z(m),p=R(),S=Z(w),E=Z(" • "),L=Z(k),oe(e.src,t=s[0].source.icon)||d(e,"src",t),d(e,"class","h-14 w-14 rounded-md object-cover"),d(e,"alt",l=s[0].source.name),d(c,"class","max-line-2 text-start leading-6"),d(f,"class","max-line-1 mt-0.5 w-full self-start text-start text-xs"),d(i,"class","flex w-full flex-col items-start justify-start")},m($,h){j($,e,h),j($,o,h),j($,i,h),b(i,c),b(c,a),b(i,u),b(i,f),b(f,_),b(f,p),b(f,S),b(f,E),b(f,L),N||(I=qe(n=We.call(null,e,s[0].source.name)),N=!0)},p($,h){h&1&&!oe(e.src,t=$[0].source.icon)&&d(e,"src",t),h&1&&l!==(l=$[0].source.name)&&d(e,"alt",l),n&&Qe(n.update)&&h&1&&n.update.call(null,$[0].source.name),h&1&&r!==(r=$[0].item.title+"")&&ne(a,r),h&1&&m!==(m=$[0].item.itunes.episode?`Episode ${$[0].item.itunes.episode} • `:"")&&ne(_,m),h&1&&w!==(w=Re($[0].item.date)+"")&&ne(S,w),h&1&&k!==(k=$[0].source.name+"")&&ne(L,k)},d($){$&&B(e),$&&B(o),$&&B(i),N=!1,I()}}}function ml(s){let e,t;return e=new Xe({props:{class:"group relative flex flex-row items-center gap-4 px-3.5 py-2.5",$$slots:{default:[pl]},$$scope:{ctx:s}}}),e.$on("click",s[5]),e.$on("click",s[6]),e.$on("click",s[7]),e.$on("click",s[8]),{c(){M(e.$$.fragment)},m(l,n){U(e,l,n),t=!0},p(l,[n]){const o={};n&513&&(o.$$scope={dirty:n,ctx:l}),e.$set(o)},i(l){t||(g(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){W(e,l)}}}function dl(s,e,t){let l;const{currentTime:n,selectedItem:o}=he("stores");O(s,o,m=>t(1,l=m));let{item:i}=e;const c=Ue(),r=()=>z(o,l=i,l),a=()=>c("refreshQueue",i),u=()=>c("select",i),f=()=>n.set(0);return s.$$set=m=>{"item"in m&&t(0,i=m.item)},[i,l,n,o,c,r,a,u,f]}class Ot extends ve{constructor(e){super(),we(this,e,dl,ml,ke,{item:0})}}function wt(s,e,t){const l=s.slice();return l[15]=e[t],l}function gl(s){let e;return{c(){e=Z("Validate")},m(t,l){j(t,e,l)},d(t){t&&B(e)}}}function hl(s){let e,t,l,n,o,i,c,r,a,u,f,m,_,p,w,S;const E=[vl,kl],k=[];function L(h,V){return h[1].source.name?0:1}c=L(s),r=k[c]=E[c](s);let N=s[1].items,I=[];for(let h=0;h<N.length;h+=1)I[h]=$t(wt(s,N,h));const $=h=>v(I[h],1,1,()=>{I[h]=null});return _=new Je({props:{class:"mt-4",disabled:!s[1].source.name,$$slots:{default:[$l]},$$scope:{ctx:s}}}),_.$on("click",s[14]),{c(){e=y("div"),t=y("div"),l=y("img"),i=R(),r.c(),a=R(),u=y("div"),f=y("div");for(let h=0;h<I.length;h+=1)I[h].c();m=R(),M(_.$$.fragment),oe(l.src,n=s[1].source.icon)||d(l,"src",n),d(l,"class","h-8 w-8"),d(l,"alt",o=s[1].source.name),d(t,"class","flex-center gap-3"),d(f,"class","flex flex-col gap-2"),Me(u,"width","100%"),Me(u,"margin-top","1rem"),Me(u,"flex-grow","1"),d(e,"class","flex-center w-full flex-1 flex-col overflow-hidden pt-4 pb-2")},m(h,V){j(h,e,V),b(e,t),b(t,l),b(t,i),k[c].m(t,null),b(e,a),b(e,u),b(u,f);for(let Q=0;Q<I.length;Q+=1)I[Q]&&I[Q].m(f,null);b(e,m),U(_,e,null),p=!0,w||(S=qe(Kt.call(null,u)),w=!0)},p(h,V){(!p||V&2&&!oe(l.src,n=h[1].source.icon))&&d(l,"src",n),(!p||V&2&&o!==(o=h[1].source.name))&&d(l,"alt",o);let Q=c;if(c=L(h),c===Q?k[c].p(h,V):(G(),v(k[Q],1,1,()=>{k[Q]=null}),K(),r=k[c],r?r.p(h,V):(r=k[c]=E[c](h),r.c()),g(r,1),r.m(t,null)),V&2){N=h[1].items;let P;for(P=0;P<N.length;P+=1){const H=wt(h,N,P);I[P]?(I[P].p(H,V),g(I[P],1)):(I[P]=$t(H),I[P].c(),g(I[P],1),I[P].m(f,null))}for(G(),P=N.length;P<I.length;P+=1)$(P);K()}const F={};V&2&&(F.disabled=!h[1].source.name),V&262144&&(F.$$scope={dirty:V,ctx:h}),_.$set(F)},i(h){if(!p){g(r);for(let V=0;V<N.length;V+=1)g(I[V]);g(_.$$.fragment,h),p=!0}},o(h){v(r),I=I.filter(Boolean);for(let V=0;V<I.length;V+=1)v(I[V]);v(_.$$.fragment,h),p=!1},d(h){h&&B(e),k[c].d(),Ze(I,h),W(_),w=!1,S()}}}function bl(s){let e,t,l,n;const o=[Cl,Sl,yl],i=[];function c(r,a){return r[2]?0:r[3]?2:1}return t=c(s),l=i[t]=o[t](s),{c(){e=y("div"),l.c(),d(e,"class","h-full w-full flex-1")},m(r,a){j(r,e,a),i[t].m(e,null),n=!0},p(r,a){let u=t;t=c(r),t===u?i[t].p(r,a):(G(),v(i[u],1,1,()=>{i[u]=null}),K(),l=i[t],l?l.p(r,a):(l=i[t]=o[t](r),l.c()),g(l,1),l.m(e,null))},i(r){n||(g(l),n=!0)},o(r){v(l),n=!1},d(r){r&&B(e),i[t].d()}}}function kl(s){let e,t,l,n,o;function i(r){s[12](r)}let c={placeholder:"Name",class:"py-2 text-sm leading-5"};return s[4]!==void 0&&(c.value=s[4]),e=new ze({props:c}),Se.push(()=>He(e,"value",i)),n=new fe({props:{icon:Xt,tooltip:"Confirm name",class:"text-xl"}}),n.$on("click",s[13]),{c(){M(e.$$.fragment),l=R(),M(n.$$.fragment)},m(r,a){U(e,r,a),j(r,l,a),U(n,r,a),o=!0},p(r,a){const u={};!t&&a&16&&(t=!0,u.value=r[4],Oe(()=>t=!1)),e.$set(u)},i(r){o||(g(e.$$.fragment,r),g(n.$$.fragment,r),o=!0)},o(r){v(e.$$.fragment,r),v(n.$$.fragment,r),o=!1},d(r){W(e,r),r&&B(l),W(n,r)}}}function vl(s){let e,t=s[1].source.name+"",l;return{c(){e=y("span"),l=Z(t),d(e,"class","text-xl font-semibold leading-6")},m(n,o){j(n,e,o),b(e,l)},p(n,o){o&2&&t!==(t=n[1].source.name+"")&&ne(l,t)},i:X,o:X,d(n){n&&B(e)}}}function wl(s){let e,t=s[15].title+"",l,n;return{c(){e=y("span"),l=Z(t),n=R(),d(e,"class","max-line-2 text-start text-sm")},m(o,i){j(o,e,i),b(e,l),j(o,n,i)},p(o,i){i&2&&t!==(t=o[15].title+"")&&ne(l,t)},d(o){o&&B(e),o&&B(n)}}}function $t(s){let e,t;return e=new Xe({props:{class:"flex flex-col items-start justify-start gap-1 px-3 py-2",$$slots:{default:[wl]},$$scope:{ctx:s}}}),{c(){M(e.$$.fragment)},m(l,n){U(e,l,n),t=!0},p(l,n){const o={};n&262146&&(o.$$scope={dirty:n,ctx:l}),e.$set(o)},i(l){t||(g(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){W(e,l)}}}function $l(s){let e;return{c(){e=Z("Add Source")},m(t,l){j(t,e,l)},d(t){t&&B(e)}}}function yl(s){let e,t,l,n,o,i;return t=new Ce({props:{class:"text-2xl",icon:Yt}}),{c(){e=y("div"),M(t.$$.fragment),l=R(),n=y("span"),o=Z(s[3]),d(n,"class","text-center"),d(e,"class","text flex h-full w-full flex-1 flex-col items-center justify-center gap-3 px-10")},m(c,r){j(c,e,r),U(t,e,null),b(e,l),b(e,n),b(n,o),i=!0},p(c,r){(!i||r&8)&&ne(o,c[3])},i(c){i||(g(t.$$.fragment,c),i=!0)},o(c){v(t.$$.fragment,c),i=!1},d(c){c&&B(e),W(t)}}}function Sl(s){let e;return{c(){e=y("div"),e.innerHTML="<span>Enter a valid podcast RSS feed URL and click Validate to continue.</span>",d(e,"class","flex h-full w-full flex-1 items-center justify-center px-10 text-center")},m(t,l){j(t,e,l)},p:X,i:X,o:X,d(t){t&&B(e)}}}function Cl(s){let e,t,l,n,o;return n=new Ce({props:{class:"animate-spin text-xl",icon:be}}),{c(){e=y("div"),t=y("span"),t.textContent="Checking your url",l=R(),M(n.$$.fragment),d(e,"class","flex h-full w-full flex-1 items-center justify-center gap-3 px-14")},m(i,c){j(i,e,c),b(e,t),b(e,l),U(n,e,null),o=!0},p:X,i(i){o||(g(n.$$.fragment,i),o=!0)},o(i){v(n.$$.fragment,i),o=!1},d(i){i&&B(e),W(n)}}}function Al(s){let e,t,l,n,o,i,c,r,a,u,f,m;l=new fe({props:{icon:Zt,class:"ml-1 shrink-0",tooltip:"Back"}}),l.$on("click",s[9]);function _(k){s[10](k)}let p={placeholder:"RSS url",class:"w-full text-sm leading-6"};s[0]!==void 0&&(p.value=s[0]),o=new ze({props:p}),Se.push(()=>He(o,"value",_)),r=new Je({props:{class:"shrink-0 leading-6",$$slots:{default:[gl]},$$scope:{ctx:s}}}),r.$on("click",s[11]);const w=[bl,hl],S=[];function E(k,L){return!k[1]||k[2]||k[3]?0:1}return u=E(s),f=S[u]=w[u](s),{c(){e=y("div"),t=y("div"),M(l.$$.fragment),n=R(),M(o.$$.fragment),c=R(),M(r.$$.fragment),a=R(),f.c(),d(t,"class","flex w-full items-center justify-between gap-3"),d(e,"class","overflow-overlay flex h-full w-full flex-col gap-1 px-1 scrollbar")},m(k,L){j(k,e,L),b(e,t),U(l,t,null),b(t,n),U(o,t,null),b(t,c),U(r,t,null),b(e,a),S[u].m(e,null),m=!0},p(k,[L]){const N={};!i&&L&1&&(i=!0,N.value=k[0],Oe(()=>i=!1)),o.$set(N);const I={};L&262144&&(I.$$scope={dirty:L,ctx:k}),r.$set(I);let $=u;u=E(k),u===$?S[u].p(k,L):(G(),v(S[$],1,1,()=>{S[$]=null}),K(),f=S[u],f?f.p(k,L):(f=S[u]=w[u](k),f.c()),g(f,1),f.m(e,null))},i(k){m||(g(l.$$.fragment,k),g(o.$$.fragment,k),g(r.$$.fragment,k),g(f),m=!0)},o(k){v(l.$$.fragment,k),v(o.$$.fragment,k),v(r.$$.fragment,k),v(f),m=!1},d(k){k&&B(e),W(l),W(o),W(r),S[u].d()}}}function Il(s,e,t){let l;const{customSources:n}=he("stores");O(s,n,k=>t(5,l=k));let o="",i=null,c=!1,r=!1,a="";const u=Ue(),f=async()=>{if(t(2,c=!0),t(3,r=""),l.find(k=>k.url===o)){t(3,r="You have already added this source"),t(2,c=!1);return}await Fe.get("/apps/podcast/validate",{params:{url:o}}).then(k=>{t(1,i=k.data),t(3,r=!1)}).catch(k=>{t(3,r="Unable to validate your url. Please check your url and try again.")}),t(2,c=!1)},m=()=>u("close");function _(k){o=k,t(0,o)}const p=()=>{f()};function w(k){a=k,t(4,a)}return[o,i,c,r,a,l,n,u,f,m,_,p,w,()=>{t(1,i.source.name=a,i)},()=>{if(!i.source.name)return;const k={id:Gt(),name:i.source.name,url:o,icon:i.source.icon,custom:!0,category:"Custom"};z(n,l=[k,...l],l),u("close")}]}class Pl extends ve{constructor(e){super(),we(this,e,Il,Al,ke,{})}}function yt(s,e,t){const l=s.slice();return l[26]=e[t],l}function St(s,e,t){const l=s.slice();return l[29]=e[t],l}function Tl(s){let e,t;return e=new Pl({}),e.$on("close",s[24]),{c(){M(e.$$.fragment)},m(l,n){U(e,l,n),t=!0},p:X,i(l){t||(g(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){W(e,l)}}}function jl(s){let e,t,l,n,o,i,c,r,a,u,f,m,_,p,w,S,E,k,L,N,I,$,h;function V(T){s[16](T)}let Q={placeholder:"Search podcasts",class:"w-full text-sm leading-6"};s[0]!==void 0&&(Q.value=s[0]),t=new ze({props:Q}),Se.push(()=>He(t,"value",V)),o=new Je({props:{class:"shrink-0 leading-6",$$slots:{default:[Bl]},$$scope:{ctx:s}}}),o.$on("click",s[17]);let F=s[4],P=[];for(let T=0;T<F.length;T+=1)P[T]=Ct(St(s,F,T));const H=[Nl,Ll],C=[];function q(T,J){return T[6].length===0?0:1}return L=q(s),N=C[L]=H[L](s),{c(){e=y("div"),M(t.$$.fragment),n=R(),M(o.$$.fragment),i=R(),c=y("div"),r=y("div"),a=y("button"),u=Z("Following"),m=R(),_=y("button"),p=Z("All Podcasts"),S=R();for(let T=0;T<P.length;T+=1)P[T].c();E=R(),k=y("div"),N.c(),d(e,"class","flex w-full items-center justify-between gap-3"),d(a,"class",f="curved-half flex w-full flex-row gap-3 px-3 py-1.5 text-sm transition hover:bg-[var(--bg)] "+(s[1]==="Following"&&"bg-[var(--bg)]")),d(_,"class",w="curved-half flex w-full flex-row gap-3 px-3 py-1.5 text-sm transition hover:bg-[var(--bg)] "+(s[1]==="All Sources"&&"bg-[var(--bg)]")),d(r,"class","flex w-[12rem] flex-col items-start"),d(k,"class","curved border-light overflow-overlay scrollbar flex h-full w-full flex-col bg-[var(--bg)] py-1"),d(c,"class","mt-3 flex flex-1 flex-row gap-2 overflow-hidden")},m(T,J){j(T,e,J),U(t,e,null),b(e,n),U(o,e,null),j(T,i,J),j(T,c,J),b(c,r),b(r,a),b(a,u),b(r,m),b(r,_),b(_,p),b(r,S);for(let te=0;te<P.length;te+=1)P[te]&&P[te].m(r,null);b(c,E),b(c,k),C[L].m(k,null),I=!0,$||(h=[se(a,"click",s[18]),se(_,"click",s[19])],$=!0)},p(T,J){const te={};!l&&J[0]&1&&(l=!0,te.value=T[0],Oe(()=>l=!1)),t.$set(te);const ge={};if(J[1]&2&&(ge.$$scope={dirty:J,ctx:T}),o.$set(ge),(!I||J[0]&2&&f!==(f="curved-half flex w-full flex-row gap-3 px-3 py-1.5 text-sm transition hover:bg-[var(--bg)] "+(T[1]==="Following"&&"bg-[var(--bg)]")))&&d(a,"class",f),(!I||J[0]&2&&w!==(w="curved-half flex w-full flex-row gap-3 px-3 py-1.5 text-sm transition hover:bg-[var(--bg)] "+(T[1]==="All Sources"&&"bg-[var(--bg)]")))&&d(_,"class",w),J[0]&18){F=T[4];let x;for(x=0;x<F.length;x+=1){const pe=St(T,F,x);P[x]?P[x].p(pe,J):(P[x]=Ct(pe),P[x].c(),P[x].m(r,null))}for(;x<P.length;x+=1)P[x].d(1);P.length=F.length}let ie=L;L=q(T),L===ie?C[L].p(T,J):(G(),v(C[ie],1,1,()=>{C[ie]=null}),K(),N=C[L],N?N.p(T,J):(N=C[L]=H[L](T),N.c()),g(N,1),N.m(k,null))},i(T){I||(g(t.$$.fragment,T),g(o.$$.fragment,T),g(N),I=!0)},o(T){v(t.$$.fragment,T),v(o.$$.fragment,T),v(N),I=!1},d(T){T&&B(e),W(t),W(o),T&&B(i),T&&B(c),Ze(P,T),C[L].d(),$=!1,De(h)}}}function Bl(s){let e;return{c(){e=Z("Add Podcast")},m(t,l){j(t,e,l)},d(t){t&&B(e)}}}function Ct(s){let e,t=s[29]+"",l,n,o,i;function c(){return s[20](s[29])}return{c(){e=y("button"),l=Z(t),d(e,"class",n="curved-half flex w-full flex-row gap-3 px-3 py-1.5 text-sm transition hover:bg-[var(--bg)] "+(s[1]===s[29]&&"bg-[var(--bg)]"))},m(r,a){j(r,e,a),b(e,l),o||(i=se(e,"click",c),o=!0)},p(r,a){s=r,a[0]&16&&t!==(t=s[29]+"")&&ne(l,t),a[0]&18&&n!==(n="curved-half flex w-full flex-row gap-3 px-3 py-1.5 text-sm transition hover:bg-[var(--bg)] "+(s[1]===s[29]&&"bg-[var(--bg)]"))&&d(e,"class",n)},d(r){r&&B(e),o=!1,i()}}}function Ll(s){let e=[],t=new Map,l,n,o=s[6];const i=c=>c[26].id;for(let c=0;c<o.length;c+=1){let r=yt(s,o,c),a=i(r);t.set(a,e[c]=At(a,r))}return{c(){for(let c=0;c<e.length;c+=1)e[c].c();l=de()},m(c,r){for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(c,r);j(c,l,r),n=!0},p(c,r){if(r[0]&6220){o=c[6],G();for(let a=0;a<e.length;a+=1)e[a].r();e=Ke(e,r,i,1,c,o,t,l.parentNode,xt,At,l,yt);for(let a=0;a<e.length;a+=1)e[a].a();K()}},i(c){if(!n){for(let r=0;r<o.length;r+=1)g(e[r]);n=!0}},o(c){for(let r=0;r<e.length;r+=1)v(e[r]);n=!1},d(c){for(let r=0;r<e.length;r+=1)e[r].d(c);c&&B(l)}}}function Nl(s){let e;return{c(){e=y("p"),e.textContent="No podcasts found",d(e,"class","flex-center h-full w-full text-center text-sm")},m(t,l){j(t,e,l)},p:X,i:X,o:X,d(t){t&&B(e)}}}function El(s){let e,t,l;function n(...o){return s[22](s[26],...o)}return t=new fe({props:{icon:el,class:"text-xl",tooltip:"Follow"}}),t.$on("click",n),{c(){e=y("div"),M(t.$$.fragment),d(e,"class","absolute right-5 ml-auto shrink-0 opacity-0 shadow-md transition group-hover:opacity-100")},m(o,i){j(o,e,i),U(t,e,null),l=!0},p(o,i){s=o},i(o){l||(g(t.$$.fragment,o),l=!0)},o(o){v(t.$$.fragment,o),l=!1},d(o){o&&B(e),W(t)}}}function Rl(s){let e,t,l;function n(...o){return s[21](s[26],...o)}return t=new fe({props:{icon:tl,class:"text-xl",tooltip:"Unfollow"}}),t.$on("click",n),{c(){e=y("div"),M(t.$$.fragment),d(e,"class","vertical-center absolute right-5 ml-auto shrink-0 opacity-0 shadow-md transition group-hover:opacity-100")},m(o,i){j(o,e,i),U(t,e,null),l=!0},p(o,i){s=o},i(o){l||(g(t.$$.fragment,o),l=!0)},o(o){v(t.$$.fragment,o),l=!1},d(o){o&&B(e),W(t)}}}function At(s,e){let t,l,n,o,i,c,r=e[26].name+"",a,u,f,m,_,p,w,S=X,E,k,L;function N(...F){return e[14](e[26],...F)}function I(...F){return e[15](e[26],...F)}const $=[Rl,El],h=[];function V(F,P){return P[0]&76&&(f=null),f==null&&(f=!!(F[2].find(N)||F[3].find(I))),f?0:1}m=V(e,[-1,-1]),_=h[m]=$[m](e);function Q(){return e[23](e[26])}return{key:s,first:null,c(){t=y("button"),l=y("img"),i=R(),c=y("span"),a=Z(r),u=R(),_.c(),p=R(),oe(l.src,n=e[26].icon)||d(l,"src",n),d(l,"class","h-6 w-6"),d(l,"alt",o=e[26].name),d(c,"class","fade-text w-full overflow-hidden whitespace-nowrap text-start"),d(t,"class","curved-half group relative flex w-full flex-row items-center gap-3 px-3.5 py-[0.575rem] transition hover:bg-[var(--bg)]"),this.first=t},m(F,P){j(F,t,P),b(t,l),b(t,i),b(t,c),b(c,a),b(t,u),h[m].m(t,null),b(t,p),E=!0,k||(L=se(t,"click",Q),k=!0)},p(F,P){e=F,(!E||P[0]&64&&!oe(l.src,n=e[26].icon))&&d(l,"src",n),(!E||P[0]&64&&o!==(o=e[26].name))&&d(l,"alt",o),(!E||P[0]&64)&&r!==(r=e[26].name+"")&&ne(a,r);let H=m;m=V(e,P),m===H?h[m].p(e,P):(G(),v(h[H],1,1,()=>{h[H]=null}),K(),_=h[m],_?_.p(e,P):(_=h[m]=$[m](e),_.c()),g(_,1),_.m(t,p))},r(){w=t.getBoundingClientRect()},f(){zt(t),S()},a(){S(),S=Ht(t,w,Jt,{duration:250})},i(F){E||(g(_),E=!0)},o(F){v(_),E=!1},d(F){F&&B(t),h[m].d(),k=!1,L()}}}function Fl(s){let e,t,l,n,o,i;const c=[jl,Tl],r=[];function a(u,f){return u[5]?1:0}return t=a(s),l=r[t]=c[t](s),{c(){e=y("div"),l.c(),d(e,"class","overflow-overlay transition-height scrollbar flex w-full flex-col px-1 py-1"),ue(e,"h-[22.8rem]",!s[7]),ue(e,"h-[34rem]",s[7])},m(u,f){j(u,e,f),r[t].m(e,null),i=!0},p(u,f){let m=t;t=a(u),t===m?r[t].p(u,f):(G(),v(r[m],1,1,()=>{r[m]=null}),K(),l=r[t],l?l.p(u,f):(l=r[t]=c[t](u),l.c()),g(l,1),l.m(e,null)),(!i||f[0]&128)&&ue(e,"h-[22.8rem]",!u[7]),(!i||f[0]&128)&&ue(e,"h-[34rem]",u[7])},i(u){i||(g(l),u&&Ge(()=>{i&&(o&&o.end(1),n=Ut(e,Ve,{duration:250,delay:250}),n.start())}),i=!0)},o(u){v(l),n&&n.invalidate(),u&&(o=Wt(e,Ve,{duration:250})),i=!1},d(u){u&&B(e),r[t].d(),u&&o&&o.end()}}}function Vl(s,e,t){let l,n,o,i;const{customSources:c,selectedSourceItems:r,selectedSources:a}=he("stores");O(s,c,C=>t(3,o=C)),O(s,a,C=>t(2,n=C));let u="",f=[],m=[],_="All Sources",p=!1;const w=he("alwaysAppView");O(s,w,C=>t(7,i=C)),Qt(()=>{Fe.get("/apps/podcast/sources").then(C=>{t(13,f=C.data),t(4,m=[...new Set(C.data.map(q=>q.category))])})});const S=C=>{z(a,n=[C,...n],n),r.update(q=>(q[C.id]=[],q))},E=C=>{C.custom?z(c,o=o.filter(q=>q.id!==C.id),o):z(a,n=n.filter(q=>q.id!==C.id),n),r.update(q=>(delete q[C.id],q))},k=(C,q)=>q.id===C.id,L=(C,q)=>q.id===C.id;function N(C){u=C,t(0,u)}const I=()=>{t(5,p=!0)},$=()=>t(1,_="Following"),h=()=>t(1,_="All Sources"),V=C=>t(1,_=C),Q=(C,q)=>{q.stopPropagation(),E(C)},F=(C,q)=>{q.stopPropagation(),S(C)},P=C=>{n.find(q=>q.id===C.id)?E(C):S(C)},H=()=>{t(5,p=!1)};return s.$$.update=()=>{s.$$.dirty[0]&8207&&t(6,l=_==="Following"?[...o.map(C=>({...C,custom:!0})),...n.map(C=>({...C,custom:!1}))].filter(C=>C.name.toLowerCase().includes(u.toLowerCase())):f.filter(C=>_==="All Sources"?C.name.toLowerCase().includes(u.toLowerCase()):C.name.toLowerCase().includes(u.toLowerCase())&&C.category===_))},[u,_,n,o,m,p,l,i,c,a,w,S,E,f,k,L,N,I,$,h,V,Q,F,P,H]}class ql extends ve{constructor(e){super(),we(this,e,Vl,Fl,ke,{},null,[-1,-1])}}function It(s,e,t){const l=s.slice();return l[19]=e[t],l}function Pt(s){let e,t,l;return t=new fe({props:{tooltip:"Show all",icon:s[0]?be:bt,class:"mr-2 ml-0.5 shrink-0 text-2xl "+(s[0]?"animate-spin":""),styles:!s[6]&&!s[5]&&"opacity: 1"}}),t.$on("click",s[15]),{c(){e=y("div"),M(t.$$.fragment),d(e,"class","contents shrink-0")},m(n,o){j(n,e,o),U(t,e,null),l=!0},p(n,o){const i={};o&1&&(i.icon=n[0]?be:bt),o&1&&(i.class="mr-2 ml-0.5 shrink-0 text-2xl "+(n[0]?"animate-spin":"")),o&96&&(i.styles=!n[6]&&!n[5]&&"opacity: 1"),t.$set(i)},i(n){l||(g(t.$$.fragment,n),l=!0)},o(n){v(t.$$.fragment,n),l=!1},d(n){n&&B(e),W(t)}}}function Tt(s,e){let t,l,n,o,i,c,r,a=X,u,f;function m(){return e[16](e[19])}return{key:s,first:null,c(){var _;t=y("button"),l=y("img"),i=R(),oe(l.src,n=e[19].icon)||d(l,"src",n),d(l,"class","h-7 w-7 object-cover"),d(l,"alt",o=e[19].name),d(t,"class","shrink-0 overflow-hidden opacity-60 transition"),ue(t,"opacity-[1]",e[19].id===((_=e[6])==null?void 0:_.id)),this.first=t},m(_,p){j(_,t,p),b(t,l),b(t,i),u||(f=[qe(c=We.call(null,t,e[19].name)),se(t,"click",m)],u=!0)},p(_,p){var w;e=_,p&16&&!oe(l.src,n=e[19].icon)&&d(l,"src",n),p&16&&o!==(o=e[19].name)&&d(l,"alt",o),c&&Qe(c.update)&&p&16&&c.update.call(null,e[19].name),p&80&&ue(t,"opacity-[1]",e[19].id===((w=e[6])==null?void 0:w.id))},r(){r=t.getBoundingClientRect()},f(){zt(t),a()},a(){a(),a=Ht(t,r,Jt,{duration:250})},d(_){_&&B(t),u=!1,De(f)}}}function jt(s){let e,t;return e=new fe({props:{icon:rl,class:"shrink-0 "+(s[2]?"rotate-180":"")+" transition",tooltip:"Show more"}}),e.$on("click",s[18]),{c(){M(e.$$.fragment)},m(l,n){U(e,l,n),t=!0},p(l,n){const o={};n&4&&(o.class="shrink-0 "+(l[2]?"rotate-180":"")+" transition"),e.$set(o)},i(l){t||(g(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){W(e,l)}}}function Dl(s){let e,t,l,n,o,i=[],c=new Map,r,a;t=new fe({props:{icon:ll,class:"ml-1 mr-1 shrink-0 text-[1.7rem]"}}),t.$on("click",s[14]);let u=s[4].length>0&&Pt(s),f=s[4];const m=p=>p[19].id;for(let p=0;p<f.length;p+=1){let w=It(s,f,p),S=m(w);c.set(S,i[p]=Tt(S,w))}let _=s[4].length>5&&jt(s);return{c(){e=y("div"),M(t.$$.fragment),l=R(),u&&u.c(),n=R(),o=y("div");for(let p=0;p<i.length;p+=1)i[p].c();r=R(),_&&_.c(),d(o,"class","flex w-full items-center justify-start gap-5 overflow-hidden"),d(e,"class","flex w-full items-center justify-start gap-4 px-3")},m(p,w){j(p,e,w),U(t,e,null),b(e,l),u&&u.m(e,null),b(e,n),b(e,o);for(let S=0;S<i.length;S+=1)i[S]&&i[S].m(o,null);s[17](o),b(e,r),_&&_.m(e,null),a=!0},p(p,[w]){if(p[4].length>0?u?(u.p(p,w),w&16&&g(u,1)):(u=Pt(p),u.c(),g(u,1),u.m(e,n)):u&&(G(),v(u,1,1,()=>{u=null}),K()),w&80){f=p[4];for(let S=0;S<i.length;S+=1)i[S].r();i=Ke(i,w,m,1,p,f,c,o,nl,Tt,null,It);for(let S=0;S<i.length;S+=1)i[S].a()}p[4].length>5?_?(_.p(p,w),w&16&&g(_,1)):(_=jt(p),_.c(),g(_,1),_.m(e,null)):_&&(G(),v(_,1,1,()=>{_=null}),K())},i(p){a||(g(t.$$.fragment,p),g(u),g(_),a=!0)},o(p){v(t.$$.fragment,p),v(u),v(_),a=!1},d(p){p&&B(e),W(t),u&&u.d();for(let w=0;w<i.length;w+=1)i[w].d();s[17](null),_&&_.d()}}}function Ml(s,e,t){let l,n,o,i,c;const{addPodcasts:r,customSources:a,selectedSource:u,selectedSources:f}=he("stores");O(s,r,$=>t(5,i=$)),O(s,a,$=>t(13,o=$)),O(s,u,$=>t(6,c=$)),O(s,f,$=>t(12,n=$));let{loadingSources:m=!1}=e,_=0,p=!1,w;const S=Ue(),E=()=>{z(r,i=!0,i),z(u,c=null,c)},k=()=>{S("showAll"),z(r,i=!1,i),z(u,c=null,c)},L=$=>z(u,c=$,c);function N($){Se[$?"unshift":"push"](()=>{w=$,t(3,w)})}const I=()=>{p?(w.scrollBy({left:-_,behavior:"smooth"}),t(1,_=0)):(w.scrollBy({left:200,behavior:"smooth"}),t(1,_+=200)),setTimeout(()=>{w.scrollWidth-w.scrollLeft<=w.clientWidth+5?t(2,p=!0):t(2,p=!1)},250)};return s.$$set=$=>{"loadingSources"in $&&t(0,m=$.loadingSources)},s.$$.update=()=>{s.$$.dirty&12288&&t(4,l=[...o,...n])},[m,_,p,w,l,i,c,r,a,u,f,S,n,o,E,k,L,N,I]}class Ul extends ve{constructor(e){super(),we(this,e,Ml,Dl,ke,{loadingSources:0})}}function Bt(s,e,t){const l=s.slice();return l[46]=e[t],l}function Lt(s,e,t){const l=s.slice();return l[46]=e[t],l}function Wl(s){let e,t,l,n,o,i,c=s[2]&&Nt(s),r=!s[2]&&Rt(s),a=s[1]&&qt(s);return{c(){e=y("div"),c&&c.c(),t=R(),r&&r.c(),l=R(),a&&a.c(),d(e,"class","transition-height flex w-full flex-col gap-1"),ue(e,"h-[22.8rem]",!s[10]),ue(e,"h-[34rem]",s[10])},m(u,f){j(u,e,f),c&&c.m(e,null),b(e,t),r&&r.m(e,null),b(e,l),a&&a.m(e,null),i=!0},p(u,f){u[2]?c?(c.p(u,f),f[0]&4&&g(c,1)):(c=Nt(u),c.c(),g(c,1),c.m(e,t)):c&&(G(),v(c,1,1,()=>{c=null}),K()),u[2]?r&&(G(),v(r,1,1,()=>{r=null}),K()):r?(r.p(u,f),f[0]&4&&g(r,1)):(r=Rt(u),r.c(),g(r,1),r.m(e,l)),u[1]?a?(a.p(u,f),f[0]&2&&g(a,1)):(a=qt(u),a.c(),g(a,1),a.m(e,null)):a&&(G(),v(a,1,1,()=>{a=null}),K()),(!i||f[0]&1024)&&ue(e,"h-[22.8rem]",!u[10]),(!i||f[0]&1024)&&ue(e,"h-[34rem]",u[10])},i(u){i||(g(c),g(r),g(a),u&&Ge(()=>{i&&(o&&o.end(1),n=Ut(e,Ve,{duration:250}),n.start())}),i=!0)},o(u){v(c),v(r),v(a),n&&n.invalidate(),u&&(o=Wt(e,Ve,{duration:250})),i=!1},d(u){u&&B(e),c&&c.d(),r&&r.d(),a&&a.d(),u&&o&&o.end()}}}function Ql(s){let e,t;return e=new ql({}),{c(){M(e.$$.fragment)},m(l,n){U(e,l,n),t=!0},p:X,i(l){t||(g(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){W(e,l)}}}function Nt(s){let e,t,l,n;const o=[Hl,zl],i=[];function c(r,a){return r[3]&&(!r[11][r[2].id]||r[11][r[2].id].length===0)?0:1}return t=c(s),l=i[t]=o[t](s),{c(){e=y("div"),l.c(),d(e,"class","overflow-overlay flex w-full flex-1 flex-col gap-1 scrollbar")},m(r,a){j(r,e,a),i[t].m(e,null),n=!0},p(r,a){let u=t;t=c(r),t===u?i[t].p(r,a):(G(),v(i[u],1,1,()=>{i[u]=null}),K(),l=i[t],l?l.p(r,a):(l=i[t]=o[t](r),l.c()),g(l,1),l.m(e,null))},i(r){n||(g(l),n=!0)},o(r){v(l),n=!1},d(r){r&&B(e),i[t].d()}}}function zl(s){let e,t,l=s[11][s[2].id]||s[21],n=[];for(let i=0;i<l.length;i+=1)n[i]=Et(Lt(s,l,i));const o=i=>v(n[i],1,1,()=>{n[i]=null});return{c(){for(let i=0;i<n.length;i+=1)n[i].c();e=de()},m(i,c){for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(i,c);j(i,e,c),t=!0},p(i,c){if(c[0]&2103332){l=i[11][i[2].id]||i[21];let r;for(r=0;r<l.length;r+=1){const a=Lt(i,l,r);n[r]?(n[r].p(a,c),g(n[r],1)):(n[r]=Et(a),n[r].c(),g(n[r],1),n[r].m(e.parentNode,e))}for(G(),r=l.length;r<n.length;r+=1)o(r);K()}},i(i){if(!t){for(let c=0;c<l.length;c+=1)g(n[c]);t=!0}},o(i){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)v(n[c]);t=!1},d(i){Ze(n,i),i&&B(e)}}}function Hl(s){let e,t,l,n,o;return t=new Ce({props:{icon:be,class:"animate-spin text-xl"}}),{c(){e=y("div"),M(t.$$.fragment),l=R(),n=y("span"),n.textContent="Loading episodes",d(n,"class","text-lg"),d(e,"class","flex h-full w-full flex-col items-center justify-center gap-3")},m(i,c){j(i,e,c),U(t,e,null),b(e,l),b(e,n),o=!0},p:X,i(i){o||(g(t.$$.fragment,i),o=!0)},o(i){v(t.$$.fragment,i),o=!1},d(i){i&&B(e),W(t)}}}function Et(s){let e,t;function l(){return s[32](s[46])}return e=new Ot({props:{item:s[46]}}),e.$on("select",s[31]),e.$on("refreshQueue",l),{c(){M(e.$$.fragment)},m(n,o){U(e,n,o),t=!0},p(n,o){s=n;const i={};o[0]&2052&&(i.item=s[46]),e.$set(i)},i(n){t||(g(e.$$.fragment,n),t=!0)},o(n){v(e.$$.fragment,n),t=!1},d(n){W(e,n)}}}function Rt(s){let e,t,l,n,o,i;const c=[Ol,Jl],r=[];function a(u,f){return u[3]&&u[8].length===0?0:1}return t=a(s),l=r[t]=c[t](s),{c(){e=y("div"),l.c(),d(e,"class","overflow-overlay flex w-full flex-1 flex-col gap-1 scrollbar")},m(u,f){j(u,e,f),r[t].m(e,null),n=!0,o||(i=se(e,"scroll",s[33]),o=!0)},p(u,f){let m=t;t=a(u),t===m?r[t].p(u,f):(G(),v(r[m],1,1,()=>{r[m]=null}),K(),l=r[t],l?l.p(u,f):(l=r[t]=c[t](u),l.c()),g(l,1),l.m(e,null))},i(u){n||(g(l),n=!0)},o(u){v(l),n=!1},d(u){u&&B(e),r[t].d(),o=!1,i()}}}function Jl(s){let e=Array.isArray(s[8]),t,l,n,o,i,c=e&&Ft(s);const r=[Gl,Zl],a=[];function u(f,m){return f[3]?0:f[6]===null?1:-1}return~(l=u(s))&&(n=a[l]=r[l](s)),{c(){c&&c.c(),t=R(),n&&n.c(),o=de()},m(f,m){c&&c.m(f,m),j(f,t,m),~l&&a[l].m(f,m),j(f,o,m),i=!0},p(f,m){m[0]&256&&(e=Array.isArray(f[8])),e?c?(c.p(f,m),m[0]&256&&g(c,1)):(c=Ft(f),c.c(),g(c,1),c.m(t.parentNode,t)):c&&(G(),v(c,1,1,()=>{c=null}),K());let _=l;l=u(f),l===_?~l&&a[l].p(f,m):(n&&(G(),v(a[_],1,1,()=>{a[_]=null}),K()),~l?(n=a[l],n?n.p(f,m):(n=a[l]=r[l](f),n.c()),g(n,1),n.m(o.parentNode,o)):n=null)},i(f){i||(g(c),g(n),i=!0)},o(f){v(c),v(n),i=!1},d(f){c&&c.d(f),f&&B(t),~l&&a[l].d(f),f&&B(o)}}}function Ol(s){let e,t,l;return t=new Ce({props:{icon:be,class:"animate-spin text-4xl"}}),{c(){e=y("div"),M(t.$$.fragment),d(e,"class","flex h-full w-full flex-col items-center justify-center")},m(n,o){j(n,e,o),U(t,e,null),l=!0},p:X,i(n){l||(g(t.$$.fragment,n),l=!0)},o(n){v(t.$$.fragment,n),l=!1},d(n){n&&B(e),W(t)}}}function Ft(s){let e=[],t=new Map,l,n,o=s[8];const i=c=>Math.random();for(let c=0;c<o.length;c+=1){let r=Bt(s,o,c),a=i();t.set(a,e[c]=Vt(a,r))}return{c(){for(let c=0;c<e.length;c+=1)e[c].c();l=de()},m(c,r){for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(c,r);j(c,l,r),n=!0},p(c,r){r[0]&256&&(o=c[8],G(),e=Ke(e,r,i,1,c,o,t,l.parentNode,sl,Vt,l,Bt),K())},i(c){if(!n){for(let r=0;r<o.length;r+=1)g(e[r]);n=!0}},o(c){for(let r=0;r<e.length;r+=1)v(e[r]);n=!1},d(c){for(let r=0;r<e.length;r+=1)e[r].d(c);c&&B(l)}}}function Vt(s,e){let t,l,n;return l=new Ot({props:{item:e[46]}}),{key:s,first:null,c(){t=de(),M(l.$$.fragment),this.first=t},m(o,i){j(o,t,i),U(l,o,i),n=!0},p(o,i){e=o;const c={};i[0]&256&&(c.item=e[46]),l.$set(c)},i(o){n||(g(l.$$.fragment,o),n=!0)},o(o){v(l.$$.fragment,o),n=!1},d(o){o&&B(t),W(l,o)}}}function Zl(s){let e;return{c(){e=y("span"),e.textContent="That's all folks!",d(e,"class","flex-center my-2 gap-3")},m(t,l){j(t,e,l)},p:X,i:X,o:X,d(t){t&&B(e)}}}function Gl(s){let e,t,l,n;return l=new Ce({props:{icon:be,class:"animate-spin"}}),{c(){e=y("span"),t=Z("Loading more "),M(l.$$.fragment),d(e,"class","flex-center my-2 gap-3")},m(o,i){j(o,e,i),b(e,t),U(l,e,null),n=!0},p:X,i(o){n||(g(l.$$.fragment,o),n=!0)},o(o){v(l.$$.fragment,o),n=!1},d(o){o&&B(e),W(l)}}}function qt(s){let e,t,l,n;return t=new Xe({props:{class:"flex w-full cursor-default flex-col items-start justify-between gap-4 px-3.5 py-2.5",$$slots:{default:[en]},$$scope:{ctx:s}}}),{c(){e=y("div"),M(t.$$.fragment),d(e,"class","flex w-full")},m(o,i){j(o,e,i),U(t,e,null),n=!0},p(o,i){const c={};i[0]&57490|i[1]&1048576&&(c.$$scope={dirty:i,ctx:o}),t.$set(c)},i(o){n||(g(t.$$.fragment,o),o&&Ge(()=>{n&&(l||(l=kt(e,vt,{duration:250},!0)),l.run(1))}),n=!0)},o(o){v(t.$$.fragment,o),o&&(l||(l=kt(e,vt,{duration:250},!1)),l.run(0)),n=!1},d(o){o&&B(e),W(t),o&&l&&l.end()}}}function Kl(s){let e,t;return e=new fe({props:{icon:be,class:"mr-2 shrink-0 animate-spin text-4xl"}}),{c(){M(e.$$.fragment)},m(l,n){U(e,l,n),t=!0},p:X,i(l){t||(g(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){W(e,l)}}}function Xl(s){let e,t,l,n;const o=[xl,Yl],i=[];function c(r,a){return r[13]?1:0}return e=c(s),t=i[e]=o[e](s),{c(){t.c(),l=de()},m(r,a){i[e].m(r,a),j(r,l,a),n=!0},p(r,a){let u=e;e=c(r),e===u?i[e].p(r,a):(G(),v(i[u],1,1,()=>{i[u]=null}),K(),t=i[e],t?t.p(r,a):(t=i[e]=o[e](r),t.c()),g(t,1),t.m(l.parentNode,l))},i(r){n||(g(t),n=!0)},o(r){v(t),n=!1},d(r){i[e].d(r),r&&B(l)}}}function Yl(s){let e,t;return e=new fe({props:{icon:ol,class:"mr-2 shrink-0 text-4xl"}}),e.$on("click",s[35]),{c(){M(e.$$.fragment)},m(l,n){U(e,l,n),t=!0},p:X,i(l){t||(g(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){W(e,l)}}}function xl(s){let e,t;return e=new fe({props:{icon:il,class:"mr-2 shrink-0 text-4xl"}}),e.$on("click",s[34]),{c(){M(e.$$.fragment)},m(l,n){U(e,l,n),t=!0},p:X,i(l){t||(g(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){W(e,l)}}}function en(s){var Te,je,Be,A,ee,ae,re,ye,Le,Ye,xe,et;let e,t,l,n,o,i,c,r,a=((je=(Te=s[1])==null?void 0:Te.item)==null?void 0:je.title)+"",u,f,m,_=(ee=(A=(Be=s[1])==null?void 0:Be.item)==null?void 0:A.itunes)!=null&&ee.episode?`Episode ${(ye=(re=(ae=s[1])==null?void 0:ae.item)==null?void 0:re.itunes)==null?void 0:ye.episode} • `:"",p,w,S=Re((Ye=(Le=s[1])==null?void 0:Le.item)==null?void 0:Ye.date)+"",E,k,L=((et=(xe=s[1])==null?void 0:xe.source)==null?void 0:et.name)+"",N,I,$,h,V,Q,F,P=Ne(s[14])+"",H,C,q,T,J,te,ge,ie,x=Ne(s[15])+"",pe,le,$e,Ae;const Ie=[Xl,Kl],ce=[];function Pe(D,Y){return D[4]?1:0}return $=Pe(s),h=ce[$]=Ie[$](s),{c(){var D,Y,_e,me;e=y("div"),t=y("img"),i=R(),c=y("div"),r=y("span"),u=Z(a),f=R(),m=y("span"),p=Z(_),w=R(),E=Z(S),k=Z(" • "),N=Z(L),I=R(),h.c(),V=R(),Q=y("div"),F=y("span"),H=Z(P),C=R(),q=y("div"),T=y("button"),J=y("div"),ge=R(),ie=y("span"),pe=Z(x),oe(t.src,l=(Y=(D=s[1])==null?void 0:D.source)==null?void 0:Y.icon)||d(t,"src",l),d(t,"class","h-14 w-14 rounded-md object-cover"),d(t,"alt",n=(me=(_e=s[1])==null?void 0:_e.source)==null?void 0:me.name),d(r,"class","max-line-2 text-start leading-[1.4rem]"),d(m,"class","max-line-1 mt-0.5 self-start text-start text-xs"),d(c,"class","flex w-full flex-col items-start justify-start"),d(e,"class","flex w-full flex-row items-center gap-4"),d(F,"class","text-sm"),d(J,"class","h-full rounded-full bg-white"),d(J,"style",te=`width: ${s[14]/s[15]*100}%`),d(T,"class","flex h-1.5 w-full overflow-hidden rounded-full border"),d(q,"class","flex w-full items-center justify-center gap-2"),d(ie,"class","text-sm"),d(Q,"class","flex w-full items-center justify-center gap-2")},m(D,Y){var _e,me;j(D,e,Y),b(e,t),b(e,i),b(e,c),b(c,r),b(r,u),b(c,f),b(c,m),b(m,p),b(m,w),b(m,E),b(m,k),b(m,N),b(e,I),ce[$].m(e,null),j(D,V,Y),j(D,Q,Y),b(Q,F),b(F,H),b(Q,C),b(Q,q),b(q,T),b(T,J),b(Q,ge),b(Q,ie),b(ie,pe),le=!0,$e||(Ae=[qe(o=We.call(null,t,(me=(_e=s[1])==null?void 0:_e.source)==null?void 0:me.name)),se(T,"click",s[30])],$e=!0)},p(D,Y){var me,tt,lt,nt,rt,st,ot,it,ct,at,ut,ft,_t,pt,mt,dt,gt,ht;(!le||Y[0]&2&&!oe(t.src,l=(tt=(me=D[1])==null?void 0:me.source)==null?void 0:tt.icon))&&d(t,"src",l),(!le||Y[0]&2&&n!==(n=(nt=(lt=D[1])==null?void 0:lt.source)==null?void 0:nt.name))&&d(t,"alt",n),o&&Qe(o.update)&&Y[0]&2&&o.update.call(null,(st=(rt=D[1])==null?void 0:rt.source)==null?void 0:st.name),(!le||Y[0]&2)&&a!==(a=((it=(ot=D[1])==null?void 0:ot.item)==null?void 0:it.title)+"")&&ne(u,a),(!le||Y[0]&2)&&_!==(_=(ut=(at=(ct=D[1])==null?void 0:ct.item)==null?void 0:at.itunes)!=null&&ut.episode?`Episode ${(pt=(_t=(ft=D[1])==null?void 0:ft.item)==null?void 0:_t.itunes)==null?void 0:pt.episode} • `:"")&&ne(p,_),(!le||Y[0]&2)&&S!==(S=Re((dt=(mt=D[1])==null?void 0:mt.item)==null?void 0:dt.date)+"")&&ne(E,S),(!le||Y[0]&2)&&L!==(L=((ht=(gt=D[1])==null?void 0:gt.source)==null?void 0:ht.name)+"")&&ne(N,L);let _e=$;$=Pe(D),$===_e?ce[$].p(D,Y):(G(),v(ce[_e],1,1,()=>{ce[_e]=null}),K(),h=ce[$],h?h.p(D,Y):(h=ce[$]=Ie[$](D),h.c()),g(h,1),h.m(e,null)),(!le||Y[0]&16384)&&P!==(P=Ne(D[14])+"")&&ne(H,P),(!le||Y[0]&49152&&te!==(te=`width: ${D[14]/D[15]*100}%`))&&d(J,"style",te),(!le||Y[0]&32768)&&x!==(x=Ne(D[15])+"")&&ne(pe,x)},i(D){le||(g(h),le=!0)},o(D){v(h),le=!1},d(D){D&&B(e),ce[$].d(),D&&B(V),D&&B(Q),$e=!1,De(Ae)}}}function Dt(s){let e=s[1],t,l=Mt(s);return{c(){l.c(),t=de()},m(n,o){l.m(n,o),j(n,t,o)},p(n,o){o[0]&2&&ke(e,e=n[1])?(l.d(1),l=Mt(n),l.c(),l.m(t.parentNode,t)):l.p(n,o)},d(n){n&&B(t),l.d(n)}}}function Mt(s){let e,t,l,n;return{c(){var o,i,c;e=y("audio"),oe(e.src,t=(c=(i=(o=s[1])==null?void 0:o.item)==null?void 0:i.enclosure)==null?void 0:c.url)||d(e,"src",t),e.hidden=!0,e.autoplay=s[5]},m(o,i){j(o,e,i),s[41](e),l||(n=[se(e,"play",s[36]),se(e,"pause",s[37]),se(e,"timeupdate",s[38]),se(e,"loadeddata",s[39]),se(e,"ended",s[40])],l=!0)},p(o,i){var c,r,a;i[0]&2&&!oe(e.src,t=(a=(r=(c=o[1])==null?void 0:c.item)==null?void 0:r.enclosure)==null?void 0:a.url)&&d(e,"src",t),i[0]&32&&(e.autoplay=o[5])},d(o){o&&B(e),s[41](null),l=!1,De(n)}}}function tn(s){let e,t,l,n,o,i,c,r,a;l=new Ul({props:{loadingSources:s[3]}});const u=[Ql,Wl],f=[];function m(p,w){return(p[9]||p[0].length===0)&&!p[2]?0:1}i=m(s),c=f[i]=u[i](s);let _=s[1]&&Dt(s);return{c(){e=y("div"),t=y("div"),M(l.$$.fragment),n=R(),o=y("div"),c.c(),r=R(),_&&_.c(),d(o,"class","transition-container mt-1 w-full"),d(t,"class","mt-3 flex w-full flex-col items-start gap-3"),d(e,"class","flex h-max w-[24rem] flex-row px-1 py-1")},m(p,w){j(p,e,w),b(e,t),U(l,t,null),b(t,n),b(t,o),f[i].m(o,null),b(o,r),_&&_.m(o,null),a=!0},p(p,w){const S={};w[0]&8&&(S.loadingSources=p[3]),l.$set(S);let E=i;i=m(p),i===E?f[i].p(p,w):(G(),v(f[E],1,1,()=>{f[E]=null}),K(),c=f[i],c?c.p(p,w):(c=f[i]=u[i](p),c.c()),g(c,1),c.m(o,r)),p[1]?_?_.p(p,w):(_=Dt(p),_.c(),_.m(o,null)):_&&(_.d(1),_=null)},i(p){a||(g(l.$$.fragment,p),g(c),a=!0)},o(p){v(l.$$.fragment,p),v(c),a=!1},d(p){p&&B(e),W(l),f[i].d(),_&&_.d()}}}function ln(s,e,t){let l,n,o,i,c,r,a,u,f,m,_,p,w;const{addPodcasts:S,audio:E,currentTime:k,customSources:L,duration:N,items:I,playing:$,queue:h,selectedItem:V,selectedSource:Q,selectedSourceItems:F,selectedSources:P}=he("stores");O(s,S,A=>t(9,a=A)),O(s,E,A=>t(7,l=A)),O(s,k,A=>t(14,p=A)),O(s,L,A=>t(44,c=A)),O(s,N,A=>t(15,w=A)),O(s,I,A=>t(8,r=A)),O(s,$,A=>t(13,_=A)),O(s,h,A=>t(12,m=A)),O(s,V,A=>t(1,o=A)),O(s,Q,A=>t(2,i=A)),O(s,F,A=>t(11,f=A)),O(s,P,A=>t(0,n=A));let H=!1,C=!1,q=!1,T=0;Qt(()=>{J()});const J=async()=>{T!==null&&(t(3,H=!0),Fe.post("/apps/podcast/fetch",{ids:n.map(A=>A.id),customSources:c,page:T}).then(A=>{var ee,ae,re;(ee=A.data)!=null&&ee.items?T===0?z(I,r=[...(ae=A.data)==null?void 0:ae.items],r):z(I,r=[...r,...(re=A.data)==null?void 0:re.items],r):z(I,r=[],r),A.data.pagination.current,A.data.pagination.pages,t(6,T=A.data.pagination.next),t(3,H=!1)}).catch(()=>{t(3,H=!1)}))},te=he("alwaysAppView");O(s,te,A=>t(10,u=A));const ge=async A=>{A!==null&&(t(3,H=!0),Fe.get("/apps/podcast/fetch",{params:{...i!=null&&i.custom?{customId:JSON.stringify(i)}:{id:i==null?void 0:i.id}}}).then(ee=>{var ae;if(!((ae=ee==null?void 0:ee.data)!=null&&ae.item)){t(3,H=!1);return}ee.data.item,[...n,...c].find(re=>re.id===A.id)&&F.update(re=>({...re,[A.id]:ee.data.item})),t(3,H=!1)}).catch(()=>{t(3,H=!1)}))},ie=A=>{var ee;l&&(A.target,z(E,l.currentTime=l.duration*(A.offsetX/((ee=A.target)==null?void 0:ee.clientWidth)),l))},x=()=>t(5,q=!0),pe=A=>{var re,ye;if(!(i!=null&&i.id))return;const ee=(re=f[i==null?void 0:i.id])==null?void 0:re.findIndex(Le=>Le.item.title===A.item.title);if(ee===-1)return;const ae=(ye=f[i==null?void 0:i.id])==null?void 0:ye.slice(ee+1,ee+11);z(h,m=ae,m)},le=A=>{if(A.target&&A.target.scrollHeight<=A.target.scrollTop+A.target.clientHeight){if(H)return;J()}},$e=()=>l==null?void 0:l.play(),Ae=()=>l==null?void 0:l.pause(),Ie=()=>z($,_=!0,_),ce=()=>z($,_=!1,_),Pe=()=>{z(k,p=(l==null?void 0:l.currentTime)||0,p),z(N,w=(l==null?void 0:l.duration)||0,w)},Te=()=>{t(4,C=!1),z(N,w=(l==null?void 0:l.duration)||0,w),p&&l&&z(E,l.currentTime=p,l)},je=()=>{z($,_=!1,_),z(k,p=0,p),z(N,w=0,w),m.length>0&&(z(V,o=m[0],o),z(h,m=m.slice(1),m))};function Be(A){Se[A?"unshift":"push"](()=>{l=A,E.set(l)})}return s.$$.update=()=>{s.$$.dirty[0]&4&&ge(i),s.$$.dirty[0]&2&&o&&t(4,C=!0),s.$$.dirty[0]&1&&n&&(t(6,T=0),J())},[n,o,i,H,C,q,T,l,r,a,u,f,m,_,p,w,S,E,k,L,N,I,$,h,V,Q,F,P,J,te,ie,x,pe,le,$e,Ae,Ie,ce,Pe,Te,je,Be]}class nn extends ve{constructor(e){super(),we(this,e,ln,tn,ke,{},null,[-1,-1])}}function rn(s){let e,t;return e=new _l({}),{c(){M(e.$$.fragment)},m(l,n){U(e,l,n),t=!0},i(l){t||(g(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){W(e,l)}}}function sn(s){let e,t;return e=new nn({}),{c(){M(e.$$.fragment)},m(l,n){U(e,l,n),t=!0},i(l){t||(g(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){W(e,l)}}}function on(s){let e,t,l,n;const o=[sn,rn],i=[];function c(r,a){return r[0]?0:1}return e=c(s),t=i[e]=o[e](s),{c(){t.c(),l=de()},m(r,a){i[e].m(r,a),j(r,l,a),n=!0},p(r,[a]){let u=e;e=c(r),e!==u&&(G(),v(i[u],1,1,()=>{i[u]=null}),K(),t=i[e],t||(t=i[e]=o[e](r),t.c()),g(t,1),t.m(l.parentNode,l))},i(r){n||(g(t),n=!0)},o(r){v(t),n=!1},d(r){i[e].d(r),r&&B(l)}}}function cn(s,e,t){let l,{config:n}=e;const o={path:"user_data/{uid}/profiles/{currentProfile}/apps/"+n.id,currentProfile:cl,uid:al},{create:i,createPersist:c,isFetched:r,start:a,stop:u}=fl(o);O(s,r,h=>t(0,l=h));const f=i("selectedSources",[]),m=i("selectedItem",null),_=i("selectedSource",null),p=c("allFollowingItems",[]),w=c("selectedSourceItems",{}),S=i("customSources",[]),E=Ee(null),k=Ee(!1),L=Ee(0),N=c("currentTime",0),I=Ee(!1),$=c("queue",[]);return a(),ul("stores",{selectedSources:f,selectedItem:m,selectedSource:_,items:p,selectedSourceItems:w,customSources:S,audio:E,playing:k,duration:L,currentTime:N,addPodcasts:I,queue:$}),s.$$set=h=>{"config"in h&&t(2,n=h.config)},[l,r,n]}class fn extends ve{constructor(e){super(),we(this,e,cn,on,ke,{config:2})}}export{fn as default};