const a=[{id:1,priority:1,action:{type:"modifyHeaders",requestHeaders:[{header:"Sec-Fetch-Dest",operation:"set",value:"document"}],responseHeaders:[{header:"X-Frame-Options",operation:"remove"},{header:"Frame-Options",operation:"remove"},{header:"Content-Security-Policy",operation:"remove"},{header:"ALLOW-FROM",operation:"set",value:"*"}]},condition:{resourceTypes:Object.values(chrome.declarativeNetRequest.ResourceType)}},{id:2,priority:2,action:{type:"modifyHeaders",requestHeaders:[{header:"User-Agent",operation:"set",value:"Mozilla/5.0 (Linux; Android 10; Pixel 3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Mobile Safari/537.36"}]},condition:{resourceTypes:["sub_frame"],initiatorDomains:[chrome.runtime.id],regexFilter:"embedPlatform=mobile"}}];let n=!1;var s;(s=chrome==null?void 0:chrome.sidePanel)==null||s.setPanelBehavior({openPanelOnActionClick:!0}).catch(e=>console.error(e));chrome.runtime.onInstalled.addListener(()=>{chrome.tabs.create({url:"dashy.html"})});chrome.runtime.setUninstallURL("https://www.dashyapp.com/uninstall");chrome.runtime.onMessage.addListener((e,t)=>{if(e.type==="enable-iframe"&&t.id===chrome.runtime.id&&chrome.declarativeNetRequest.updateDynamicRules({removeRuleIds:a.map(i=>i.id),addRules:a}).then(()=>{chrome.runtime.sendMessage({type:"enabled-iframe"})}),e.type==="disable-iframe"&&t.id===chrome.runtime.id&&chrome.declarativeNetRequest.updateDynamicRules({removeRuleIds:a.map(i=>i.id),addRules:[]}).then(()=>{chrome.runtime.sendMessage({type:"disabled-iframe"})}),e.type==="setNtpSearchBoxFocus")return n=e.value,chrome.runtime.sendMessage({success:!0}),!0});const o=[],d=()=>`chrome-extension://${chrome.runtime.id}/dashy.html`,c=e=>{if(o.includes(e.id))return null;n&&chrome.tabs.create({url:`${d()}?focus=true`,active:!0},t=>{o.unshift(t.id),o.splice(100),chrome.tabs.remove(e.id),chrome.tabs.update(t.id,{url:"chrome://newtab/"})})};let r;chrome.tabs.onCreated.addListener(e=>{if(r){c(e);return}r=!1});self.addEventListener("fetch",e=>{const{url:t}=e.request;t.startsWith(location.origin+"/dashy.html")&&!t.match("focus")&&(r=!0,setTimeout(()=>{r=!1},50))});
