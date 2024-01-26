import{S as de,i as pe,s as _e,I as H,a0 as bt,q as h,c as E,V as R,r as g,u as x,m as I,L as m,t as _,a as v,D,d as L,b as N,f as Ne,cM as ue,cN as kt,ay as gt,ah as Ye,av as Ae,cO as $e,K as V,v as Y,x as A,aP as ye,U as He,R as vt,cP as wt,a5 as ee,n as j,ak as he,O as se,P as ae,W as ce,a1 as re,E as ht,a2 as $t,cQ as Ve,cR as yt,y as K,_ as Me,aq as Te,p as J,bf as ge,cg as xt,bB as ve,bC as we,bE as Dt,cS as Mt,ch as Tt,aI as q,Q as Re,z as te,B as U,C as ne,Z as me,b1 as Rt,aa as S,aQ as G,ab as le,cT as Ct,J as Et,cU as It,bx as Lt,cV as St,aB as jt}from"./overlayscrollbars.js";function Pt(i){let e;return{c(){e=h("span"),e.textContent="Screen recording is not supported on this browser, try with latest version of Chrome or Firefox.",g(e,"class","leading-5")},m(t,n){x(t,e,n)},d(t){t&&D(e)}}}function Ut(i){let e;return{c(){e=h("span"),e.textContent="Screen recording is not supported in the side panel. Open Dashy in a new tab to use this widget.",g(e,"class","leading-5")},m(t,n){x(t,e,n)},d(t){t&&D(e)}}}function Bt(i){let e,t,n,l;t=new H({props:{icon:bt,class:"text-3xl"}});function a(r,u){return r[0]?Ut:Pt}let o=a(i),c=o(i);return{c(){e=h("div"),E(t.$$.fragment),n=R(),c.c(),g(e,"class","flex h-40 w-[24rem] items-center justify-between gap-5 py-2 px-6")},m(r,u){x(r,e,u),I(t,e,null),m(e,n),c.m(e,null),l=!0},p(r,[u]){o!==(o=a(r))&&(c.d(1),c=o(r),c&&(c.c(),c.m(e,null)))},i(r){l||(_(t.$$.fragment,r),l=!0)},o(r){v(t.$$.fragment,r),l=!1},d(r){r&&D(e),L(t),c.d()}}}function Nt(i,e,t){let n;return N(i,Ne,l=>t(0,n=l)),[n]}class Yt extends de{constructor(e){super(),pe(this,e,Nt,Bt,_e,{})}}const At={path:"user_data/{uid}/profiles/{currentProfile}/apps/screenrecorder",currentProfile:Ye,uid:Ae},{create:Ht,createPersist:Ln,isFetched:Vt,start:Sn,stop:jn}=gt(At),X=Ht("activeConversion",null),Ce=ue("screen_record_audio",!1),fe=ue("screen_record_mic",null),Ee=ue("screen_record_countdown",!1),Ie=ue("screen_record_countdown_timer",3),Le=ue("screen_record_time_limit",null),Ot=kt(!1);function Se(i){let e,t;return e=new He({props:{size:"md",$$slots:{default:[qt]},$$scope:{ctx:i}}}),e.$on("click",i[5]),{c(){E(e.$$.fragment)},m(n,l){I(e,n,l),t=!0},p(n,l){const a={};l&128&&(a.$$scope={dirty:l,ctx:n}),e.$set(a)},i(n){t||(_(e.$$.fragment,n),t=!0)},o(n){v(e.$$.fragment,n),t=!1},d(n){L(e,n)}}}function qt(i){let e;return{c(){e=V("Grant permissions")},m(t,n){x(t,e,n)},d(t){t&&D(e)}}}function je(i){let e,t;return e=new He({props:{size:"md",$$slots:{default:[Gt]},$$scope:{ctx:i}}}),e.$on("click",i[4]),{c(){E(e.$$.fragment)},m(n,l){I(e,n,l),t=!0},p(n,l){const a={};l&128&&(a.$$scope={dirty:l,ctx:n}),e.$set(a)},i(n){t||(_(e.$$.fragment,n),t=!0)},o(n){v(e.$$.fragment,n),t=!1},d(n){L(e,n)}}}function Gt(i){let e;return{c(){e=V("Grant permissions")},m(t,n){x(t,e,n)},d(t){t&&D(e)}}}function Pe(i){let e,t,n,l,a,o;const c=[Qt,zt],r=[];function u(s,f){return s[0].length>0?0:1}return t=u(i),n=r[t]=c[t](i),a=new vt({props:{icon:wt,tooltip:"Refresh"}}),a.$on("click",i[3]),{c(){e=h("div"),n.c(),l=R(),E(a.$$.fragment),g(e,"class","flex-center gap-3")},m(s,f){x(s,e,f),r[t].m(e,null),m(e,l),I(a,e,null),o=!0},p(s,f){let d=t;t=u(s),t===d?r[t].p(s,f):(Y(),v(r[d],1,1,()=>{r[d]=null}),A(),n=r[t],n?n.p(s,f):(n=r[t]=c[t](s),n.c()),_(n,1),n.m(e,l))},i(s){o||(_(n),_(a.$$.fragment,s),o=!0)},o(s){v(n),v(a.$$.fragment,s),o=!1},d(s){s&&D(e),r[t].d(),L(a)}}}function zt(i){let e;return{c(){e=h("span"),e.textContent="No audio devices",g(e,"class","text-base")},m(t,n){x(t,e,n)},p:j,i:j,o:j,d(t){t&&D(e)}}}function Qt(i){let e,t,n;function l(o){i[6](o)}let a={options:i[0].map(Ue),class:"max-w-[10rem]"};return i[2]!==void 0&&(a.value=i[2]),e=new he({props:a}),se.push(()=>ae(e,"value",l)),{c(){E(e.$$.fragment)},m(o,c){I(e,o,c),n=!0},p(o,c){const r={};c&1&&(r.options=o[0].map(Ue)),!t&&c&4&&(t=!0,r.value=o[2],ce(()=>t=!1)),e.$set(r)},i(o){n||(_(e.$$.fragment,o),n=!0)},o(o){v(e.$$.fragment,o),n=!1},d(o){L(e,o)}}}function Wt(i){let e,t,n,l,a,o,c,r;n=new H({props:{icon:$e,class:"text-lg"}});let u=i[1]==="denied"&&Se(i),s=i[1]==="prompt"&&je(i),f=i[1]==="granted"&&Pe(i);return{c(){e=h("div"),t=h("div"),E(n.$$.fragment),l=V(`
		Audio device`),a=R(),u&&u.c(),o=R(),s&&s.c(),c=R(),f&&f.c(),g(t,"class","flex-center h-[30px] gap-3"),g(e,"class","mt-3 flex items-start justify-start gap-3")},m(d,b){x(d,e,b),m(e,t),I(n,t,null),m(t,l),m(e,a),u&&u.m(e,null),m(e,o),s&&s.m(e,null),m(e,c),f&&f.m(e,null),r=!0},p(d,[b]){d[1]==="denied"?u?(u.p(d,b),b&2&&_(u,1)):(u=Se(d),u.c(),_(u,1),u.m(e,o)):u&&(Y(),v(u,1,1,()=>{u=null}),A()),d[1]==="prompt"?s?(s.p(d,b),b&2&&_(s,1)):(s=je(d),s.c(),_(s,1),s.m(e,c)):s&&(Y(),v(s,1,1,()=>{s=null}),A()),d[1]==="granted"?f?(f.p(d,b),b&2&&_(f,1)):(f=Pe(d),f.c(),_(f,1),f.m(e,null)):f&&(Y(),v(f,1,1,()=>{f=null}),A())},i(d){r||(_(n.$$.fragment,d),_(u),_(s),_(f),r=!0)},o(d){v(n.$$.fragment,d),v(u),v(s),v(f),r=!1},d(d){d&&D(e),L(n),u&&u.d(),s&&s.d(),f&&f.d()}}}const Ue=i=>({label:i.label,value:i.deviceId});function Ft(i,e,t){let n;N(i,fe,s=>t(2,n=s));let l=[],a="prompt";const o=async()=>{var d;const s=await navigator.mediaDevices.enumerateDevices();t(0,l=s.filter(b=>b.kind==="audioinput"&&b.deviceId!=="")),l.find(b=>b.deviceId===n)||ee(fe,n=((d=l.find(b=>b.deviceId==="default"))==null?void 0:d.deviceId)||"",n)},c=async()=>{const s=await navigator.mediaDevices.getUserMedia({audio:!0});t(1,a=(await navigator.permissions.query({name:"microphone"})).state),o(),s==null||s.getTracks().forEach(f=>f.stop())};ye(async()=>{t(1,a=(await navigator.permissions.query({name:"microphone"})).state),o()});const r=()=>window.open("https://support.google.com/chrome/answer/2693767?hl=en&co=GENIE.Platform%3DDesktop&oco=0","_blank");function u(s){n=s,fe.set(n)}return[l,a,n,o,c,r,u]}class Jt extends de{constructor(e){super(),pe(this,e,Ft,Wt,_e,{})}}function Kt(i){let e,t,n,l,a,o,c,r,u,s,f,d,b,w,y,C,M,$,T;n=new H({props:{icon:Ve}});function z(k){i[35](k)}let O={round:!0,filled:!0};i[10]!==void 0&&(O.checked=i[10]),c=new Re({props:O}),se.push(()=>ae(c,"checked",z)),c.$on("pointerdown",wn),f=new H({props:{icon:$e}});function W(k){i[36](k)}let F={round:!0,filled:!0};return i[11]!==void 0&&(F.checked=i[11]),y=new Re({props:F}),se.push(()=>ae(y,"checked",W)),y.$on("pointerdown",hn),{c(){e=h("div"),t=h("div"),E(n.$$.fragment),l=R(),a=h("span"),a.textContent="Countdown",o=R(),E(c.$$.fragment),u=R(),s=h("div"),E(f.$$.fragment),d=R(),b=h("span"),b.textContent="Record audio",w=R(),E(y.$$.fragment),g(a,"class","ml-1.5 mr-4"),g(t,"class","flex-center gap-3"),g(t,"id","screen-recorder-countdown"),g(b,"class","ml-1.5 mr-[0.2rem]"),g(s,"class","flex-center mt-3 gap-3"),g(s,"id","screen-recorder-record-audio"),g(e,"class","flex h-full flex-col items-start justify-center")},m(k,B){x(k,e,B),m(e,t),I(n,t,null),m(t,l),m(t,a),m(t,o),I(c,t,null),m(e,u),m(e,s),I(f,s,null),m(s,d),m(s,b),m(s,w),I(y,s,null),T=!0},p(k,B){const Z={};!r&&B[0]&1024&&(r=!0,Z.checked=k[10],ce(()=>r=!1)),c.$set(Z);const Q={};!C&&B[0]&2048&&(C=!0,Q.checked=k[11],ce(()=>C=!1)),y.$set(Q)},i(k){T||(_(n.$$.fragment,k),_(c.$$.fragment,k),_(f.$$.fragment,k),_(y.$$.fragment,k),k&&K(()=>{T&&($&&$.end(1),M=te(e,U,{delay:200,duration:200}),M.start())}),T=!0)},o(k){v(n.$$.fragment,k),v(c.$$.fragment,k),v(f.$$.fragment,k),v(y.$$.fragment,k),M&&M.invalidate(),k&&($=ne(e,U,{duration:200})),T=!1},d(k){k&&D(e),L(n),L(c),L(f),L(y),k&&$&&$.end()}}}function Zt(i){let e,t,n,l;const a=[on,rn,nn,tn,en],o=[];function c(r,u){var s,f,d,b,w;return r[4]?0:((s=r[1])==null?void 0:s.status)==="recording"||r[0]?1:((f=r[1])==null?void 0:f.status)==="waiting"||((d=r[1])==null?void 0:d.status)==="processing"?2:((b=r[1])==null?void 0:b.status)==="done"?3:((w=r[1])==null?void 0:w.status)==="failed"?4:-1}return~(e=c(i))&&(t=o[e]=a[e](i)),{c(){t&&t.c(),n=re()},m(r,u){~e&&o[e].m(r,u),x(r,n,u),l=!0},p(r,u){let s=e;e=c(r),e===s?~e&&o[e].p(r,u):(t&&(Y(),v(o[s],1,1,()=>{o[s]=null}),A()),~e?(t=o[e],t?t.p(r,u):(t=o[e]=a[e](r),t.c()),_(t,1),t.m(n.parentNode,n)):t=null)},i(r){l||(_(t),l=!0)},o(r){v(t),l=!1},d(r){~e&&o[e].d(r),r&&D(n)}}}function Xt(i){let e,t,n,l,a,o,c,r,u,s;return{c(){e=h("div"),t=h("span"),t.textContent="Recording will start in",n=R(),l=h("span"),a=V(i[3]),o=R(),c=h("span"),c.textContent="seconds",g(c,"class","text-base font-normal"),g(l,"class","text-3xl font-bold"),g(e,"class","flex h-full flex-col items-start justify-center")},m(f,d){x(f,e,d),m(e,t),m(e,n),m(e,l),m(l,a),m(l,o),m(l,c),s=!0},p(f,d){(!s||d[0]&8)&&me(a,f[3])},i(f){s||(f&&K(()=>{s&&(u&&u.end(1),r=te(e,U,{delay:200,duration:200}),r.start())}),s=!0)},o(f){r&&r.invalidate(),f&&(u=ne(e,U,{duration:200})),s=!1},d(f){f&&D(e),f&&u&&u.end()}}}function en(i){let e,t,n,l,a,o,c,r,u,s,f;return{c(){e=h("div"),t=h("span"),t.textContent="Error",n=R(),l=h("span"),l.textContent="Something went wrong",a=R(),o=h("button"),o.textContent="Cancel this recording",g(t,"class","text-3xl font-bold"),g(o,"class","mt-3 text-sm underline"),g(e,"class","flex h-full flex-col items-start justify-center")},m(d,b){x(d,e,b),m(e,t),m(e,n),m(e,l),m(e,a),m(e,o),u=!0,s||(f=S(o,"click",i[34]),s=!0)},p:j,i(d){u||(d&&K(()=>{u&&(r&&r.end(1),c=te(e,U,{delay:200,duration:200}),c.start())}),u=!0)},o(d){c&&c.invalidate(),d&&(r=ne(e,U,{duration:200})),u=!1},d(d){d&&D(e),d&&r&&r.end(),s=!1,f()}}}function tn(i){let e,t,n;const l=[sn,ln],a=[];function o(c,r){return c[7]?0:1}return e=o(i),t=a[e]=l[e](i),{c(){t.c(),n=re()},m(c,r){a[e].m(c,r),x(c,n,r)},p(c,r){let u=e;e=o(c),e===u?a[e].p(c,r):(Y(),v(a[u],1,1,()=>{a[u]=null}),A(),t=a[e],t?t.p(c,r):(t=a[e]=l[e](c),t.c()),_(t,1),t.m(n.parentNode,n))},i(c){_(t)},o(c){v(t)},d(c){a[e].d(c),c&&D(n)}}}function nn(i){let e,t,n,l;return{c(){e=h("div"),e.innerHTML=`<span class="text-3xl font-bold">Processing</span> 
          <span>This may take a while</span>`,g(e,"class","flex h-full flex-col items-start justify-center")},m(a,o){x(a,e,o),l=!0},p:j,i(a){l||(a&&K(()=>{l&&(n&&n.end(1),t=te(e,U,{delay:200,duration:200}),t.start())}),l=!0)},o(a){t&&t.invalidate(),a&&(n=ne(e,U,{duration:200})),l=!1},d(a){a&&D(e),a&&n&&n.end()}}}function rn(i){let e,t,n,l,a,o;const c=[cn,an],r=[];function u(s,f){return s[0]?0:1}return t=u(i),n=r[t]=c[t](i),{c(){e=h("div"),n.c(),g(e,"class","flex h-full flex-col items-start justify-center")},m(s,f){x(s,e,f),r[t].m(e,null),o=!0},p(s,f){let d=t;t=u(s),t===d?r[t].p(s,f):(Y(),v(r[d],1,1,()=>{r[d]=null}),A(),n=r[t],n?n.p(s,f):(n=r[t]=c[t](s),n.c()),_(n,1),n.m(e,null))},i(s){o||(_(n),s&&K(()=>{o&&(a&&a.end(1),l=te(e,U,{delay:200,duration:200}),l.start())}),o=!0)},o(s){v(n),l&&l.invalidate(),s&&(a=ne(e,U,{duration:200})),o=!1},d(s){s&&D(e),r[t].d(),s&&a&&a.end()}}}function on(i){let e,t,n,l,a,o,c,r,u;return{c(){e=h("div"),t=h("span"),n=V(i[5]),l=V("%"),a=R(),o=h("span"),o.textContent="Uploading video",g(t,"class","text-3xl font-bold"),g(e,"class","flex h-full flex-col items-start justify-center")},m(s,f){x(s,e,f),m(e,t),m(t,n),m(t,l),m(e,a),m(e,o),u=!0},p(s,f){(!u||f[0]&32)&&me(n,s[5])},i(s){u||(s&&K(()=>{u&&(r&&r.end(1),c=te(e,U,{delay:200,duration:200}),c.start())}),u=!0)},o(s){c&&c.invalidate(),s&&(r=ne(e,U,{duration:200})),u=!1},d(s){s&&D(e),s&&r&&r.end()}}}function ln(i){let e,t,n,l,a,o,c,r,u,s,f;return{c(){e=h("div"),t=h("span"),t.textContent="Ready!",n=R(),l=h("span"),l.textContent="Download the video",a=R(),o=h("button"),o.textContent="Cancel this recording",g(t,"class","mb-1 text-3xl font-bold"),g(o,"class","mt-3 text-sm underline"),g(e,"class","flex h-full flex-col items-start justify-center")},m(d,b){x(d,e,b),m(e,t),m(e,n),m(e,l),m(e,a),m(e,o),u=!0,s||(f=S(o,"click",i[33]),s=!0)},p:j,i(d){u||(d&&K(()=>{u&&(r&&r.end(1),c=te(e,U,{delay:200,duration:200}),c.start())}),u=!0)},o(d){c&&c.invalidate(),d&&(r=ne(e,U,{duration:200})),u=!1},d(d){d&&D(e),d&&r&&r.end(),s=!1,f()}}}function sn(i){let e,t,n,l,a,o,c,r,u;return{c(){e=h("div"),t=h("span"),n=V(i[6]),l=V("%"),a=R(),o=h("span"),o.textContent="Downloading video",g(t,"class","text-3xl font-bold"),g(e,"class","flex h-full flex-col items-start justify-center")},m(s,f){x(s,e,f),m(e,t),m(t,n),m(t,l),m(e,a),m(e,o),u=!0},p(s,f){(!u||f[0]&64)&&me(n,s[6])},i(s){u||(s&&K(()=>{u&&(r&&r.end(1),c=te(e,U,{delay:200,duration:200}),c.start())}),u=!0)},o(s){c&&c.invalidate(),s&&(r=ne(e,U,{duration:200})),u=!1},d(s){s&&D(e),s&&r&&r.end()}}}function an(i){let e,t,n,l,a,o,c;return{c(){e=h("span"),e.textContent="Recording",t=R(),n=h("span"),n.textContent="In a different device",l=R(),a=h("button"),a.textContent="Stop recording",g(e,"class","text-3xl font-bold"),g(a,"class","mt-3 text-sm underline")},m(r,u){x(r,e,u),x(r,t,u),x(r,n,u),x(r,l,u),x(r,a,u),o||(c=S(a,"click",i[32]),o=!0)},p:j,i:j,o:j,d(r){r&&D(e),r&&D(t),r&&D(n),r&&D(l),r&&D(a),o=!1,c()}}}function cn(i){let e,t=J.utc(i[2]*1e3).format("mm:ss")+"",n,l,a,o,c,r,u,s;const f=[fn,un],d=[];function b(w,y){return w[11]?0:1}return c=b(i),r=d[c]=f[c](i),{c(){e=h("span"),n=V(t),l=R(),a=h("span"),a.textContent="Recording in progress",o=R(),r.c(),u=re(),g(e,"class","text-3xl font-bold")},m(w,y){x(w,e,y),m(e,n),x(w,l,y),x(w,a,y),x(w,o,y),d[c].m(w,y),x(w,u,y),s=!0},p(w,y){(!s||y[0]&4)&&t!==(t=J.utc(w[2]*1e3).format("mm:ss")+"")&&me(n,t);let C=c;c=b(w),c===C?d[c].p(w,y):(Y(),v(d[C],1,1,()=>{d[C]=null}),A(),r=d[c],r?r.p(w,y):(r=d[c]=f[c](w),r.c()),_(r,1),r.m(u.parentNode,u))},i(w){s||(_(r),s=!0)},o(w){v(r),s=!1},d(w){w&&D(e),w&&D(l),w&&D(a),w&&D(o),d[c].d(w),w&&D(u)}}}function un(i){let e,t,n,l;return t=new H({props:{icon:St,class:"mr-2 animate-pulse"}}),{c(){e=h("span"),E(t.$$.fragment),n=V(`
                Not recording audio`),g(e,"class","mt-3 flex items-center justify-start text-sm")},m(a,o){x(a,e,o),I(t,e,null),m(e,n),l=!0},p:j,i(a){l||(_(t.$$.fragment,a),l=!0)},o(a){v(t.$$.fragment,a),l=!1},d(a){a&&D(e),L(t)}}}function fn(i){let e,t,n,l;return t=new H({props:{icon:$e,class:"mr-2 animate-pulse"}}),{c(){e=h("span"),E(t.$$.fragment),n=V(`
                Recording audio`),g(e,"class","mt-3 flex items-center justify-start text-sm")},m(a,o){x(a,e,o),I(t,e,null),m(e,n),l=!0},p:j,i(a){l||(_(t.$$.fragment,a),l=!0)},o(a){v(t.$$.fragment,a),l=!1},d(a){a&&D(e),L(t)}}}function dn(i){let e,t,n,l,a;return t=new H({props:{icon:Rt}}),{c(){e=h("button"),E(t.$$.fragment),g(e,"class","flex-center text-6xl opacity-75 transition hover:scale-105 hover:opacity-100"),g(e,"id","screen-recorder-record")},m(o,c){x(o,e,c),I(t,e,null),n=!0,l||(a=[S(e,"click",i[14]),S(e,"pointerdown",G(i[30])),S(e,"pointerup",G(i[31]))],l=!0)},p:j,i(o){n||(_(t.$$.fragment,o),n=!0)},o(o){v(t.$$.fragment,o),n=!1},d(o){o&&D(e),L(t),l=!1,le(a)}}}function pn(i){let e,t,n,l;const a=[gn,kn,bn,mn,_n],o=[];function c(r,u){var s,f,d,b,w;return r[4]?0:((s=r[1])==null?void 0:s.status)==="done"?1:((f=r[1])==null?void 0:f.status)==="waiting"||((d=r[1])==null?void 0:d.status)==="processing"?2:((b=r[1])==null?void 0:b.status)==="failed"?3:((w=r[1])==null?void 0:w.status)==="recording"||r[0]?4:-1}return~(e=c(i))&&(t=o[e]=a[e](i)),{c(){t&&t.c(),n=re()},m(r,u){~e&&o[e].m(r,u),x(r,n,u),l=!0},p(r,u){let s=e;e=c(r),e===s?~e&&o[e].p(r,u):(t&&(Y(),v(o[s],1,1,()=>{o[s]=null}),A()),~e?(t=o[e],t?t.p(r,u):(t=o[e]=a[e](r),t.c()),_(t,1),t.m(n.parentNode,n)):t=null)},i(r){l||(_(t),l=!0)},o(r){v(t),l=!1},d(r){~e&&o[e].d(r),r&&D(n)}}}function _n(i){let e,t,n;return{c(){e=h("button"),e.innerHTML='<div class="animate-breath relative h-16 w-16 rounded-full border-[1px] border-solid border-[rgba(255,0,0)]"><div class="absolute-middle absolute h-12 w-12 rounded-full bg-[rgba(255,0,0)]"></div></div>',g(e,"class","flex-center text-6xl opacity-75 transition hover:scale-105 hover:opacity-100"),g(e,"id","screen-recorder-stop")},m(l,a){x(l,e,a),t||(n=[S(e,"click",i[38]),S(e,"pointerdown",G(i[28])),S(e,"pointerup",G(i[29]))],t=!0)},p:j,i:j,o:j,d(l){l&&D(e),t=!1,le(n)}}}function mn(i){let e,t,n,l,a;return t=new H({props:{icon:Ct}}),{c(){e=h("button"),E(t.$$.fragment),g(e,"class","flex-center text-6xl opacity-75 transition hover:scale-105 hover:opacity-100"),g(e,"id","screen-recorder-record")},m(o,c){x(o,e,c),I(t,e,null),n=!0,l||(a=[S(e,"click",i[37]),S(e,"pointerdown",G(i[26])),S(e,"pointerup",G(i[27]))],l=!0)},p:j,i(o){n||(_(t.$$.fragment,o),n=!0)},o(o){v(t.$$.fragment,o),n=!1},d(o){o&&D(e),L(t),l=!1,le(a)}}}function bn(i){let e,t,n,l,a;return t=new H({props:{icon:Et}}),{c(){e=h("button"),E(t.$$.fragment),g(e,"class","flex-center animate-spin text-6xl opacity-75 transition hover:scale-105 hover:animate-spin hover:opacity-100"),g(e,"id","screen-recorder-record")},m(o,c){x(o,e,c),I(t,e,null),n=!0,l||(a=[S(e,"click",i[16]),S(e,"pointerdown",G(i[24])),S(e,"pointerup",G(i[25]))],l=!0)},p:j,i(o){n||(_(t.$$.fragment,o),n=!0)},o(o){v(t.$$.fragment,o),n=!1},d(o){o&&D(e),L(t),l=!1,le(a)}}}function kn(i){let e,t,n,l,a,o;return t=new H({props:{icon:It}}),{c(){e=h("button"),E(t.$$.fragment),g(e,"class",n="flex-center text-6xl opacity-75 transition hover:scale-105 hover:opacity-100 "+(i[7]?"animate-bounce":"")),g(e,"id","screen-recorder-record")},m(c,r){x(c,e,r),I(t,e,null),l=!0,a||(o=[S(e,"click",i[16]),S(e,"pointerdown",G(i[22])),S(e,"pointerup",G(i[23]))],a=!0)},p(c,r){(!l||r[0]&128&&n!==(n="flex-center text-6xl opacity-75 transition hover:scale-105 hover:opacity-100 "+(c[7]?"animate-bounce":"")))&&g(e,"class",n)},i(c){l||(_(t.$$.fragment,c),l=!0)},o(c){v(t.$$.fragment,c),l=!1},d(c){c&&D(e),L(t),a=!1,le(o)}}}function gn(i){let e,t,n,l,a;return t=new H({props:{icon:Lt}}),{c(){e=h("button"),E(t.$$.fragment),g(e,"class","flex-center animate-bounce text-6xl opacity-75 transition hover:scale-105 hover:opacity-100"),g(e,"id","screen-recorder-record")},m(o,c){x(o,e,c),I(t,e,null),n=!0,l||(a=[S(e,"pointerdown",G(i[20])),S(e,"pointerup",G(i[21]))],l=!0)},p:j,i(o){n||(_(t.$$.fragment,o),n=!0)},o(o){v(t.$$.fragment,o),n=!1},d(o){o&&D(e),L(t),l=!1,le(a)}}}function Be(i){let e,t,n,l,a,o,c,r,u,s,f,d,b,w,y,C,M,$,T;a=new Jt({}),r=new H({props:{icon:Ve,class:"text-lg"}});function z(k){i[39](k)}let O={options:i[17],class:"ml-7"};i[9]!==void 0&&(O.value=i[9]),s=new he({props:O}),se.push(()=>ae(s,"value",z)),w=new H({props:{icon:yt,class:"text-lg"}});function W(k){i[40](k)}let F={options:i[18],class:"ml-[1.55rem]"};return i[8]!==void 0&&(F.value=i[8]),C=new he({props:F}),se.push(()=>ae(C,"value",W)),{c(){e=h("div"),t=h("span"),t.textContent="More options",n=R(),l=h("div"),E(a.$$.fragment),o=R(),c=h("div"),E(r.$$.fragment),u=V(`
        Count for
        `),E(s.$$.fragment),d=R(),b=h("div"),E(w.$$.fragment),y=V(`
        Time limit
        `),E(C.$$.fragment),g(t,"class","flex-center ml-1 mb-4 w-max gap-3 text-lg font-semibold"),g(c,"class","flex-center mt-4 h-[30px] w-max gap-3"),g(b,"class","flex-center mt-4 h-[30px] w-max gap-3"),g(l,"class","ml-[2px]"),g(e,"class","mb-6 h-max w-full items-start px-4")},m(k,B){x(k,e,B),m(e,t),m(e,n),m(e,l),I(a,l,null),m(l,o),m(l,c),I(r,c,null),m(c,u),I(s,c,null),m(l,d),m(l,b),I(w,b,null),m(b,y),I(C,b,null),T=!0},p(k,B){const Z={};!f&&B[0]&512&&(f=!0,Z.value=k[9],ce(()=>f=!1)),s.$set(Z);const Q={};!M&&B[0]&256&&(M=!0,Q.value=k[8],ce(()=>M=!1)),C.$set(Q)},i(k){T||(_(a.$$.fragment,k),_(r.$$.fragment,k),_(s.$$.fragment,k),_(w.$$.fragment,k),_(C.$$.fragment,k),k&&K(()=>{T&&($||($=Me(e,Te,{duration:300},!0)),$.run(1))}),T=!0)},o(k){v(a.$$.fragment,k),v(r.$$.fragment,k),v(s.$$.fragment,k),v(w.$$.fragment,k),v(C.$$.fragment,k),k&&($||($=Me(e,Te,{duration:300},!1)),$.run(0)),T=!1},d(k){k&&D(e),L(a),L(r),L(s),L(w),L(C),k&&$&&$.end()}}}function vn(i){let e,t,n,l,a,o,c,r,u,s;const f=[Xt,Zt,Kt],d=[];function b($,T){return $[3]!==null&&$[3]!==0?0:$[1]||$[4]||$[0]?1:2}n=b(i),l=d[n]=f[n](i);const w=[pn,dn],y=[];function C($,T){return $[1]||$[0]?0:1}o=C(i),c=y[o]=w[o](i);let M=i[12]&&Be(i);return{c(){e=h("div"),t=h("div"),l.c(),a=R(),c.c(),r=R(),M&&M.c(),u=re(),g(t,"class","transition-container h-full"),g(e,"class","flex h-40 w-[24rem] items-center justify-between py-2 pl-6 pr-10")},m($,T){x($,e,T),m(e,t),d[n].m(t,null),m(e,a),y[o].m(e,null),x($,r,T),M&&M.m($,T),x($,u,T),s=!0},p($,T){let z=n;n=b($),n===z?d[n].p($,T):(Y(),v(d[z],1,1,()=>{d[z]=null}),A(),l=d[n],l?l.p($,T):(l=d[n]=f[n]($),l.c()),_(l,1),l.m(t,null));let O=o;o=C($),o===O?y[o].p($,T):(Y(),v(y[O],1,1,()=>{y[O]=null}),A(),c=y[o],c?c.p($,T):(c=y[o]=w[o]($),c.c()),_(c,1),c.m(e,null)),$[12]?M?(M.p($,T),T[0]&4096&&_(M,1)):(M=Be($),M.c(),_(M,1),M.m(u.parentNode,u)):M&&(Y(),v(M,1,1,()=>{M=null}),A())},i($){s||(_(l),_(c),_(M),s=!0)},o($){v(l),v(c),v(M),s=!1},d($){$&&D(e),d[n].d(),y[o].d(),$&&D(r),M&&M.d($),$&&D(u)}}}const wn=i=>i.stopPropagation(),hn=i=>i.stopPropagation();function $n(i,e,t){let n,l,a,o,c,r,u,s,f,d;N(i,X,p=>t(1,n=p)),N(i,Ye,p=>t(49,l=p)),N(i,Ae,p=>t(50,a=p)),N(i,Ot,p=>t(19,o=p)),N(i,Le,p=>t(8,c=p)),N(i,Ie,p=>t(9,r=p)),N(i,Ee,p=>t(10,u=p)),N(i,Ce,p=>t(11,s=p)),N(i,fe,p=>t(51,f=p));let b,w,y,C=0,M=!1,$=null,T=null,z=null,O=null,W=!1,F=0,k=0,B=!1;const Z=ht("appView");N(i,Z,p=>t(12,d=p));let Q="webm";ye(()=>{Q=MediaRecorder.isTypeSupported("video/webm")?"webm":MediaRecorder.isTypeSupported("video/mp4")?"mp4":"webm"});const Oe=async()=>{if(s&&(y=await navigator.mediaDevices.getUserMedia({audio:{deviceId:f||"default"}}),!y))return;if(b=await navigator.mediaDevices.getDisplayMedia({video:{}}).catch(P=>{console.error(P)}),!b){y&&y.getTracks().forEach(P=>P.stop());return}const p=s?new MediaStream([...b.getTracks(),...y.getTracks()]):b;if(w=new MediaRecorder(p),u){t(3,T=r);const P=setInterval(()=>{t(3,T=T-1),T===0&&clearInterval(P)},1e3);await new Promise(oe=>setTimeout(oe,1e3*r))}if(w.start(),O=J(),t(0,M=!0),o&&Q!=="mp4"){const P=ge();ee(X,n={id:ge(),status:"recording",input:`user_data/${a}/${l}/screenrecord/${P}/input.webm`,name:`Screen_Recording_${J().format("YYYYMMDD_HHmmss")}.mp4`,createdAt:Date.now(),output:`user_data/${a}/${l}/screenrecord/${P}/output.mp4`},n)}$=setInterval(()=>{if(c&&C>=c||o&&C>=300){ie();return}t(2,C=J().diff(J(O),"seconds")),document.title=J.utc(C*1e3).format("mm:ss")},1e3),w.addEventListener("dataavailable",be),b.getVideoTracks()[0].addEventListener("ended",()=>{ie()})},be=async p=>{if(z=new Blob([p.data],{type:"video/webm"}),w.state==="inactive"){{const P=document.createElement("a");P.href=URL.createObjectURL(z),P.download="Screen_Recording_"+J().format("YYYYMMDD_HHmmss")+`.${Q}`,P.click(),URL.revokeObjectURL(P.href)}w.removeEventListener("dataavailable",be)}},ie=()=>{t(2,C=0),t(0,M=!1),o&&t(4,W=!0),document.title="Dashy",clearInterval($),w.stop(),b==null||b.getTracks().forEach(p=>p.stop()),y==null||y.getTracks().forEach(p=>p.stop())},En=async()=>{t(4,W=!0);const p=ge(),P=xt(ve(we,`user_data/${a}/${l}/screenrecord/${p}/input.webm`),z);P.on("state_changed",oe=>{t(5,F=Math.round(oe.bytesTransferred/oe.totalBytes*100))}),P.then(()=>{console.log("Uploaded a blob or file!"),ee(X,n={id:p,status:"waiting",input:`user_data/${a}/${l}/screenrecord/${p}/input.webm`,name:`Screen_Recording_${J().format("YYYYMMDD_HHmmss")}.mp4`,createdAt:Date.now(),output:`user_data/${a}/${l}/screenrecord/${p}/output.mp4`},n),t(4,W=!1)})};$t(()=>{clearInterval($),b&&b.getTracks().forEach(p=>p.stop()),y&&y.getTracks().forEach(p=>p.stop()),w==null||w.removeEventListener("dataavailable",be)});const qe=async()=>{if(!(n!=null&&n.output))return;t(7,B=!0);const p=await Dt(ve(we,n.output)),P=await Mt({url:p,method:"GET",responseType:"blob",onDownloadProgress:_t=>{const{loaded:mt,total:xe}=_t;if(!xe)return;const De=Math.floor(mt/xe*100);t(6,k=De),De===100&&n!=null&&n.output&&Tt(ve(we,n==null?void 0:n.output)).then(()=>{ee(X,n=null,n),t(7,B=!1),t(6,k=0)})}}),oe=new Blob([P.data],{type:"video/mp4"}),ke=document.createElement("a");ke.href=URL.createObjectURL(oe),ke.download=n.name,ke.click()},Ge=[{label:"3 seconds",value:3},{label:"5 seconds",value:5},{label:"15 seconds",value:15},{label:"30 seconds",value:30}],ze=[{label:"No limit",value:null},{label:"1 minute",value:60},{label:"5 minutes",value:300},{label:"10 minutes",value:600},{label:"15 minutes",value:900},{label:"30 minutes",value:1800}];function Qe(p){q.call(this,i,p)}function We(p){q.call(this,i,p)}function Fe(p){q.call(this,i,p)}function Je(p){q.call(this,i,p)}function Ke(p){q.call(this,i,p)}function Ze(p){q.call(this,i,p)}function Xe(p){q.call(this,i,p)}function et(p){q.call(this,i,p)}function tt(p){q.call(this,i,p)}function nt(p){q.call(this,i,p)}function rt(p){q.call(this,i,p)}function ot(p){q.call(this,i,p)}const lt=()=>{ee(X,n=null,n)},it=()=>{ee(X,n=null,n)},st=()=>{ee(X,n=null,n)};function at(p){u=p,Ee.set(u)}function ct(p){s=p,Ce.set(s)}const ut=()=>ee(X,n=null,n),ft=()=>M&&ie();function dt(p){r=p,Ie.set(r)}function pt(p){c=p,Le.set(c)}return i.$$.update=()=>{i.$$.dirty[0]&524291&&M&&o&&!n&&ie(),i.$$.dirty[0]&2&&(n||(t(4,W=!1),t(5,F=0),t(6,k=0),t(7,B=!1)))},[M,n,C,T,W,F,k,B,c,r,u,s,d,Z,Oe,ie,qe,Ge,ze,o,Qe,We,Fe,Je,Ke,Ze,Xe,et,tt,nt,rt,ot,lt,it,st,at,ct,ut,ft,dt,pt]}class yn extends de{constructor(e){super(),pe(this,e,$n,vn,_e,{},null,[-1,-1])}}function xn(i){let e,t;return e=new Yt({}),{c(){E(e.$$.fragment)},m(n,l){I(e,n,l),t=!0},p:j,i(n){t||(_(e.$$.fragment,n),t=!0)},o(n){v(e.$$.fragment,n),t=!1},d(n){L(e,n)}}}function Dn(i){let e,t,n,l;const a=[Tn,Mn],o=[];function c(r,u){return r[2]?0:1}return e=c(i),t=o[e]=a[e](i),{c(){t.c(),n=re()},m(r,u){o[e].m(r,u),x(r,n,u),l=!0},p(r,u){let s=e;e=c(r),e!==s&&(Y(),v(o[s],1,1,()=>{o[s]=null}),A(),t=o[e],t||(t=o[e]=a[e](r),t.c()),_(t,1),t.m(n.parentNode,n))},i(r){l||(_(t),l=!0)},o(r){v(t),l=!1},d(r){o[e].d(r),r&&D(n)}}}function Mn(i){let e,t;return e=new jt({}),{c(){E(e.$$.fragment)},m(n,l){I(e,n,l),t=!0},i(n){t||(_(e.$$.fragment,n),t=!0)},o(n){v(e.$$.fragment,n),t=!1},d(n){L(e,n)}}}function Tn(i){let e,t;return e=new yn({}),{c(){E(e.$$.fragment)},m(n,l){I(e,n,l),t=!0},i(n){t||(_(e.$$.fragment,n),t=!0)},o(n){v(e.$$.fragment,n),t=!1},d(n){L(e,n)}}}function Rn(i){let e,t,n,l;const a=[Dn,xn],o=[];function c(r,u){return r[0]&&!r[1]?0:1}return e=c(i),t=o[e]=a[e](i),{c(){t.c(),n=re()},m(r,u){o[e].m(r,u),x(r,n,u),l=!0},p(r,[u]){let s=e;e=c(r),e===s?o[e].p(r,u):(Y(),v(o[s],1,1,()=>{o[s]=null}),A(),t=o[e],t?t.p(r,u):(t=o[e]=a[e](r),t.c()),_(t,1),t.m(n.parentNode,n))},i(r){l||(_(t),l=!0)},o(r){v(t),l=!1},d(r){o[e].d(r),r&&D(n)}}}function Cn(i,e,t){let n,l;N(i,Ne,o=>t(1,n=o)),N(i,Vt,o=>t(2,l=o));let a=!0;return ye(()=>{if(!navigator.mediaDevices||!navigator.mediaDevices.getDisplayMedia){t(0,a=!1);return}}),[a,n,l]}class Pn extends de{constructor(e){super(),pe(this,e,Cn,Rn,_e,{})}}export{Pn as default};
