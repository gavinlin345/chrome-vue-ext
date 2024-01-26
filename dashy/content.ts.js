const s=()=>{n(`
      body::-webkit-scrollbar {
        width: 0px !important;
      }
    `)},n=e=>{const t=document.createElement("style");return t.innerHTML=e,document.head.appendChild(t),t},o=()=>{n(`
       .p-message_pane_input {
        padding: 0 !important;
       }
  
       .p-notification_bar--double_decker {
        display: none !important;
       }
       `)},a=()=>{n(`
      header {
        display: none !important;
      }
  
      .VjFXz {
        height: 10px !important;
      }`)},r=()=>{n(`
      .gmat-caption {
        display: none !important;
      }
  
      .capabilities-disclaimer {
        height: 10px;
      }

    `)},d=()=>{n(`
      #onetrust-consent-sdk {
        display: none !important;
      }

    `)},p=()=>{n(`
      .PvRhvb {
        display: none !important;
      }

      #ognwrapper {
        display: none !important;
      }

      .gkA7Yd-sKfxWe {
        width: 100% !important;
      }

      .IZ65Hb-n0tgWb {
        width: 100% !important;
        margin: 0 !important;
        padding: 10px !important;
      }

      body::-webkit-scrollbar {
        width: 0px !important;
      }

      .h1U9Be-xhiy4 .qAWA2 {
        width: 100% !important;
      }

      body {
        min-width: 0px !important;
      }

      .neVct-LS81yb-tJHJj {
        margin: 24px 16px !important;
      }

      .h1U9Be-xhiy4 .IZ65Hb-n0tgWb {
        box-shadow: none !important;
      }

      .h1U9Be-xhiy4>.Q0hgme-Bz112c-LgbsSe {
        top: 9px !important;
      }

      .IZ65Hb-NGme3c.Q0hgme-Bz112c-LgbsSe.Q0hgme-LgbsSe.VIpgJd-LgbsSe.zTETae-h1U9Be-hxXJme {
        left: 9px !important;
      }

      .IZ65Hb-n0tgWb di8rgd-r4nke {
        width: 98% !important;
      }

      .kPTQic-nUpftc .h1U9Be-xhiy4 {
        margin: 6px auto -12px auto !important;
      }

      .h1U9Be-xhiy4.qAWA2 {
        width: 100% !important;
      }
    `)},l=()=>{n(`
    #cbz-leaderboard-banner {
      display: none;
    }

    .cbz-div-header {
      margin-top: 0px !important;
    }
  `)},m=()=>{n(`
    .cmc-cookie-policy-banner {
      display: none !important;
    }

    .cmc-table > tbody > tr > td:first-child {
      display: none !important;
    }

    .cmc-table > thead > tr > th:first-child {
      display: none !important;
    }

    .sc-b28ea1c6-2.kaxzEy {
      margin-left: -1.5rem !important;
    }

    .sc-16891c57-0.dbAhjm {
      display: none !important;
    }

    .sc-2990cdea-7.hfkilQ {
      display: none !important;
    }

  `)},y=()=>{n(`
    #cookie-notice {
      display: none !important;
    }

    .tw-drop-shadow-geckoguide {
      display: none !important;
    }

    body > div:nth-child(6) > main > div.gecko-table-container > div.tw-my-4 {
      display: none !important;
    }

    body > div:nth-child(6) > main > div:nth-child(1) {
      display: none !important;
    }

    body > div.tw-flex.container.tw-justify-center.tw-items-center.tw-mt-2.tw-h-50px.md:tw-h-100px {
      display: none !important;
    }

    #geckoFloat > div.tw-static.tw-mr-2.5.tw-mb-2 > div.tw-absolute.tw-top-0.tw-left-0.tw-rounded-full.tw-bg-primary-200.tw-opacity-50.tw-flex.tw-p-6.tw-relative.tw-animate-ping-slow {
      display: none !important;
    }

    body > div.tw-flex.container.tw-justify-center.tw-items-center.tw-mt-2.tw-h-50px.md:tw-h-100px {
      display: none !important;
    }
  `)},c=()=>{n(`
    #onetrust-banner-sdk {
      display: none !important;
    }
  `)},h=new URLSearchParams(document.location.href),i=h.get("embedId");i?chrome.runtime.sendMessage({type:"send-config",embedId:i},e=>{const t=e;t!=null&&t.hideScrollbar&&s(),t!=null&&t.isCustomSize&&(document.documentElement.style.fontSize=(t==null?void 0:t.size)*100+"%"),(t==null?void 0:t.id)==="slack"&&o(),(t==null?void 0:t.id)==="google-translate"&&a(),(t==null?void 0:t.id)==="bard"&&r(),(t==null?void 0:t.id)==="jstor"&&d(),(t==null?void 0:t.id)==="google-keep"&&p(),(t==null?void 0:t.id)==="cricbuzz"&&l(),(t==null?void 0:t.id)==="coinmarketcap"&&m(),(t==null?void 0:t.id)==="coingecko"&&y(),(t==null?void 0:t.id)==="spotify"&&c(),chrome.runtime.sendMessage({type:"iframe-loaded",embedId:i})}):chrome.runtime.sendMessage({type:"site-loaded",url:location.href});
