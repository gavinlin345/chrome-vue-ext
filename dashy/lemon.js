(() => {
  (function () {
    let p = function () {
        let i = () => {};
        function h(e) {
          if (typeof e != "object" || e === null) throw new Error("Setup options provided must be of type object");
          e.eventHandler && (i = e.eventHandler);
        }
        function y() {
          r(),
            window.addEventListener(
              "message",
              function (e) {
                if (typeof e.data == "object" && e.data !== null) {
                  let n = e.data;
                  n.event !== null && b(n);
                }
                e.data === "mounted" && m(), e.data === "close" && l();
              }.bind(this),
              !1
            );
        }
        function b(e) {
          i && i(e);
        }
        function g() {
          r();
        }
        function r() {
          document.querySelectorAll(".lemonsqueezy-button").forEach(
            function (n) {
              n.addEventListener ? n.addEventListener("click", d.bind(this)) : n.attachEvent && n.attachEvent("onclick", d.bind(this));
            }.bind(this)
          );
        }
        function d(e) {
          e.preventDefault(),
            !document.body.classList.contains("lemonsqueezy-open") && (document.body.classList.add("lemonsqueezy-open"), s(e.currentTarget.href));
        }
        function s(e) {
          let n = new URL(e).searchParams.get("dark");
          u(n), (e = L(e)), v(e);
        }
        function L(e) {
          return (e = new URL(e)), e.searchParams.set("embed", 1), e.toString();
        }
        function v(e) {
          c(),
            (this.iframeContainer = document.createElement("div")),
            (this.iframeContainer.id = "lemonsqueezy-iframe-container"),
            (this.iframeContainer.style = `z-index: 2147483647;display: block;background-color: transparent;border: 0px none transparent;overflow-x: hidden;overflow-y: auto;
              visibility: visible;margin: 0px;padding: 0px;-webkit-tap-highlight-color: transparent;position: fixed;left: 0px;top: 0px;width: 100%;height: 100%;
              display: flex;align-items: center;justify-content: center;flex-direction: column; box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 9999px;
              `),
            (this.iframe = document.createElement("iframe")),
            (this.iframe.style = `width: 33rem; height: 60rem; max-height: 90vh; border: 0px none transparent; border-radius: 0.5rem;
              `),
            (this.iframe.src = e),
            this.iframeContainer.appendChild(this.iframe),
            document.body.appendChild(this.iframeContainer);
        }
        function c() {
          this.iframe &&
            (this.iframe.remove(),
            this.iframeContainer.remove(),
            delete this.iframe,
            delete this.iframeContainer,
            document.body.classList.remove("lemonsqueezy-open"));
        }
        function l() {
          c();
        }
        function u(e) {
          let n = document.createElement("style");
          (n.innerHTML = "@keyframes pulse { 0% { opacity: 1; transform: scale(0.1); } 100% { opacity: 0; transform: scale(1); } }"),
            document.head.appendChild(n);
          let o = document.createElement("div");
          o.setAttribute(
            "style",
            `z-index:99998; display: block; position: fixed; width: 33rem; height: 60rem; max-height: 90vh; margin: 0px; padding: 0px; top: 50%; left: 50%; transform: translate(-50%, -50%); border-radius: 0.5rem; box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 9999px;` +
              (e ? "background: rgba(0,0,0,1);" : "background: rgba(255,255,255,1);")
          ),
            o.setAttribute("class", "lemonsqueezy-loader");
          let a = document.createElement("main");
          a.setAttribute("style", "display: flex;align-items: center;justify-content: center;flex-direction: column;width: 100%;height: 100%;");
          let f = document.createElement("div");
          f.setAttribute(
            "style",
            "width: 40px;height: 40px;border-radius: 40px;animation: pulse 1s ease-out infinite forwards;" +
              (e ? "background-color: #FFC233;" : "background-color: #7047EB;")
          ),
            a.appendChild(f),
            o.appendChild(a),
            document.body.appendChild(o),
            document.body.classList.add("lemonsqueezy-loading");
        }
        function m() {
          document.querySelectorAll(".lemonsqueezy-loader").forEach((e) => e.remove()), document.body.classList.remove("lemonsqueezy-loading");
        }
        return { DumbSetup: y, Setup: h, Refresh: g, Loader: { Show: u, Hide: m }, Url: { Open: s, Close: l } };
      },
      t = window || t;
    (t.createLemonSqueezy = function () {
      t.LemonSqueezy ? t.LemonSqueezy.Refresh() : ((t.LemonSqueezy = new p()), t.LemonSqueezy.DumbSetup());
    }),
      (t.createLemonSqueezyCheckout = t.createLemonSqueezy),
      t.addEventListener ? t.addEventListener("load", t.createLemonSqueezy) : t.attachEvent && t.attachEvent("onload", window.createLemonSqueezy);
  })(document);
})();
