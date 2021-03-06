webpackJsonpjwplayer([4], {
  108: function (a, b, c) {
    var d, e;
    d = [c(71), c(47), c(54), c(65), c(66), c(63), c(109)], e = function (a, b, c, d, e, f, g) {
      function h(a) {
        var b = a / 1e3;
        return Math.floor(b).toLocaleString() + " kbps"
      }

      function i(a) {
        function i() {
          this.state === d.LOADING && this.setState(d.PLAYING)
        }

        function j(a, b) {
          switch (b.schemeIdUri) {
            case"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":
            case"edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":
              var c = "com.widevine.alpha", d = a.widevine.url;
              return d || (console.log("No licensing server specified for widevine. Defaulting to proxy."), d = "http://widevine-proxy.appspot.com/proxy"), new g.player.DrmSchemeInfo(c, d, !1, null, null);
            default:
              return console.log("Unrecognized scheme: " + b.schemeIdUri), null
          }
        }

        function k(a) {
          console.error(a);
          var b = "Unknown playback error";
          G.trigger(e.JWPLAYER_MEDIA_ERROR, {message: "Error playing file:" + b})
        }

        function l() {
          return this.levels
        }

        function m() {
          return this.currentQuality
        }

        function n(a) {
          this.setState(d.LOADING);
          var c = a.sources[0].file, e = a.sources[0].drm || {}, f = a.starttime, h = new g.util.EWMABandwidthEstimator, i = b.partial(j, e), k = new g.player.DashVideoSource(c, i, h), l = F.load(k);
          l.then(o.bind(this)), f && l.then(function () {
            this.seek(f)
          }.bind(this))
        }

        function o() {
          G.trigger(e.JWPLAYER_MEDIA_BUFFER_FULL);
          var a = F.getVideoTracks();
          a.length > 1 && (this.currentQuality = 0, this.levels = b.map(a, function (a) {
            return {label: h(a.bandwidth), level_id: a.id}
          }), this.levels.unshift({label: "Auto", level_id: "auto"}), G.trigger(e.JWPLAYER_MEDIA_LEVELS, {levels: this.levels, currentQuality: this.currentQuality}))
        }

        function p() {
          G.trigger(e.JWPLAYER_MEDIA_META, {duration: E.duration, height: E.videoHeight, width: E.videoWidth})
        }

        function q(a) {
          E.muted = a
        }

        function r() {
          E.pause(), this.setState(d.PAUSED)
        }

        function s() {
          E.play(), this.setState(d.BUFFERING), this.setVisibility(!0)
        }

        function t(a) {
          E.currentTime = a, this.trigger(e.JWPLAYER_MEDIA_SEEK, {position: E.currentTime, offset: a})
        }

        function u(a) {
          a = !!a, a ? c.style(C, {visibility: "visible", opacity: 1}) : c.style(C, {visibility: "", opacity: 0})
        }

        function v() {
          F.unload(), C === E.parentNode && C.removeChild(E)
        }

        function w() {
          E.pause(), thxzis.setState(d.IDLE)
        }

        function x(a) {
          C = a, C.appendChild(E)
        }

        function y() {
          return C
        }

        function z(a) {
          if (a = parseInt(a, 10), !(this.currentQuality === a || 0 > a || a >= this.levels.length)) {
            if (0 === a)F.enableAdaptation(!0); else {
              var b = this.levels[a].level_id;
              F.enableAdaptation(!1), this.setState(d.LOADING), F.selectVideoTrack(b)
            }
            this.currentQuality = a, this.trigger(e.JWPLAYER_MEDIA_LEVEL_CHANGED, {currentQuality: this.currentQuality, levels: this.levels})
          }
        }

        function A() {
          var a = E.currentTime;
          Math.abs(a - this.position) < 1 && G.state === d.BUFFERING && G.setState(d.PLAYING), this.position = a, G.trigger(e.JWPLAYER_MEDIA_TIME, {
            position: a,
            duration: E.duration,
            quality: 1
          }), a > E.duration - .1 && E.duration > 1 && (G.setState(d.IDLE), G.trigger(e.JWPLAYER_MEDIA_COMPLETE))
        }

        function B(a) {
          E.volume = a / 100
        }

        var C, D = document.getElementById(a), E = D ? D.querySelector("video") : void 0;
        E = E || document.createElement("video");
        var F = new g.player.Player(E), G = this;
        this.position = 0, this.levels = [], this.currentQuality = -1, b.extend(this, f, {
          load: n,
          mute: q,
          pause: r,
          getQualityLevels: l.bind(this),
          getCurrentQuality: m.bind(this),
          play: s,
          seek: t,
          remove: v,
          setContainer: x,
          getContainer: y,
          setCurrentQuality: z.bind(this),
          setVisibility: u,
          stop: w,
          volume: B,
          supportsFullscreen: b.constant(!0),
          getName: b.constant({name: "shaka"})
        }), F.addEventListener("error", k), E.addEventListener("loadedmetadata", p.bind(this)), E.addEventListener("timeupdate", A.bind(this)), E.addEventListener("playing", i.bind(this))
      }

      return g.polyfill.installAll(), i.supports = function (b, c) {
        var d = a(c);
        if (b.drm && !d("drm"))return !1;
        var e = !1;
        return b.file ? "dash" === b.type || "mpd" === b.type ? e = !0 : (b.file.indexOf(".mpd") > -1 || b.file.indexOf("mpd-time-csf") > -1) && (e = !0) : e = !0, window.MediaSource || (e = !1), e && d("dash")
      }, i.getName = b.constant({name: "shaka"}), {
        register: function (a) {
          a.api.registerProvider(i)
        }
      }
    }.apply(b, d), !(void 0 !== e && (a.exports = e))
  }, 109: function (a, b, c) {
    var d;
    !function () {
      var e = {};
      (function (a) {
        function b(a, b) {
          var c = a.split("."), d = Bd;
          c[0]in d || !d.execScript || d.execScript("var " + c[0]);
          for (var e; c.length && (e = c.shift());)c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
        }

        function c(a, b) {
          function c() {
          }

          c.prototype = b.prototype, a.cf = b.prototype, a.prototype = new c, a.prototype.constructor = a, a.$e = function (a, c, d) {
            return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
          }
        }

        function d(a) {
          var b = console[a];
          b ? b.bind || (console[a] = function () {
            b.apply(console, arguments)
          }) : console[a] = function () {
          }
        }

        function e(a) {
          Dd[a] = {Bb: Cd(), end: NaN}
        }

        function f(a) {
          (a = Dd[a]) && (a.end = Cd())
        }

        function g(a) {
          return (a = Dd[a]) && a.end ? a.end - a.Bb : NaN
        }

        function h(a, b, c) {
          this.id = a, this.bandwidth = b || 0, this.lang = c || "unknown", this.active = !1
        }

        function i(a, b) {
          this.id = a, this.lang = b || "unknown", this.enabled = this.active = !1
        }

        function j(a, b, c, d) {
          this.id = a, this.bandwidth = b || 0, this.width = c || 0, this.height = d || 0, this.active = !1
        }

        function k(a, b) {
          var c = a.width * a.height, d = b.width * b.height;
          return d > c ? -1 : c > d ? 1 : a.bandwidth < b.bandwidth ? -1 : a.bandwidth > b.bandwidth ? 1 : 0
        }

        function l() {
          var b = "CustomEvent"in a;
          if (b)try {
            new CustomEvent("")
          } catch (c) {
            b = !1
          }
          b || (a.CustomEvent = m)
        }

        function m(a, b) {
          var c = document.createEvent("CustomEvent"), d = b || {bubbles: !1, cancelable: !1, detail: null};
          return c.initCustomEvent(a, !!d.bubbles, !!d.cancelable, d.detail), c
        }

        function n() {
          var a = Element.prototype;
          a.requestFullscreen = a.requestFullscreen || a.mozRequestFullScreen || a.msRequestFullscreen || a.webkitRequestFullscreen, a = Document.prototype, a.exitFullscreen = a.exitFullscreen || a.mozCancelFullScreen || a.msExitFullscreen || a.webkitExitFullscreen, "fullscreenElement"in document || Object.defineProperty(document, "fullscreenElement", {
            get: function () {
              return document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement
            }
          }), document.addEventListener("webkitfullscreenchange", o), document.addEventListener("webkitfullscreenerror", o), document.addEventListener("mozfullscreenchange", o), document.addEventListener("mozfullscreenerror", o), document.addEventListener("MSFullscreenChange", o), document.addEventListener("MSFullscreenError", o)
        }

        function o(a) {
          var b = a.type.replace(/^(webkit|moz|MS)/, "").toLowerCase(), b = new Event(b, a);
          a.target.dispatchEvent(b)
        }

        function p() {
          return Promise.reject(Error("The key system specified is not supported."))
        }

        function q(a) {
          return null == a ? Promise.resolve() : Promise.reject(Error("MediaKeys not supported."))
        }

        function r() {
          throw new TypeError("Illegal constructor.")
        }

        function s() {
          throw new TypeError("Illegal constructor.")
        }

        function t() {
          var a = HTMLVideoElement.prototype;
          a.getVideoPlaybackQuality || (a.getVideoPlaybackQuality = function () {
            return "webkitDroppedFrameCount"in this ? {
              corruptedVideoFrames: 0,
              droppedVideoFrames: this.webkitDroppedFrameCount,
              totalVideoFrames: this.webkitDecodedFrameCount,
              creationTime: null,
              totalFrameDelay: null
            } : null
          })
        }

        function u(a, b) {
          for (var c = {}, d = 0; d < a.length; ++d) {
            var e = b ? b(a[d]) : a[d].toString();
            c[e] = a[d]
          }
          var f, d = [];
          for (f in c)d.push(c[f]);
          return d
        }

        function v() {
          return Date.now() + Ed
        }

        function w(a, b) {
          this.j = a, this.Lc = b == Fd, this.i = 0
        }

        function x(a) {
          var b = a.j.getUint8(a.i);
          return a.i += 1, b
        }

        function y(a) {
          var b = a.j.getUint32(a.i, a.Lc);
          return a.i += 4, b
        }

        function z(a) {
          var b, c;
          if (a.Lc ? (b = a.j.getUint32(a.i, !0), c = a.j.getUint32(a.i + 4, !0)) : (c = a.j.getUint32(a.i, !1), b = a.j.getUint32(a.i + 4, !1)), c > 2097151)throw new RangeError("DataViewReader: Overflow reading 64-bit value.");
          return a.i += 8, c * Math.pow(2, 32) + b
        }

        function A(a) {
          if (a.i + 16 > a.j.byteLength)throw new RangeError("DataViewReader: Read past end of DataView.");
          var b = new Uint8Array(a.j.buffer, a.i, 16);
          return a.i += 16, b
        }

        function B(a, b) {
          if (a.i + b > a.j.byteLength)throw new RangeError("DataViewReader: Skip past end of DataView.");
          a.i += b
        }

        function C(a) {
          this.j = a, this.Ya = new w(a, 0), Gd || (Gd = [new Uint8Array([255]), new Uint8Array([127, 255]), new Uint8Array([63, 255, 255]), new Uint8Array([31, 255, 255, 255]), new Uint8Array([15, 255, 255, 255, 255]), new Uint8Array([7, 255, 255, 255, 255, 255]), new Uint8Array([3, 255, 255, 255, 255, 255, 255]), new Uint8Array([1, 255, 255, 255, 255, 255, 255, 255])])
        }

        function D(a) {
          var b;
          if (b = E(a), 7 < b.length)throw new RangeError("EbmlParser: EBML ID must be at most 7 bytes.");
          for (var c = 0, d = 0; d < b.length; d++)c = 256 * c + b[d];
          b = c, c = E(a);
          a:{
            for (d = 0; d < Gd.length; d++)if (fa(c, Gd[d])) {
              d = !0;
              break a
            }
            d = !1
          }
          if (d)throw new RangeError("EbmlParser: Element cannot contain dynamically sized data.");
          if (8 == c.length && 224 & c[1])throw new RangeError("EbmlParser: Variable sized integer value must be at most 53 bits.");
          for (var d = c[0] & (1 << 8 - c.length) - 1, e = 1; e < c.length; e++)d = 256 * d + c[e];
          return c = d, c = a.Ya.i + c <= a.j.byteLength ? c : a.j.byteLength - a.Ya.i, d = new DataView(a.j.buffer, a.j.byteOffset + a.Ya.i, c), B(a.Ya, c), new F(b, d)
        }

        function E(a) {
          var b, c = x(a.Ya);
          for (b = 1; 8 >= b && !(c & 1 << 8 - b); b++);
          if (b > 8)throw new RangeError("EbmlParser: Variable sized integer must fit within 8 bytes.");
          var d = new Uint8Array(b);
          for (d[0] = c, c = 1; b > c; c++)d[c] = x(a.Ya);
          return d
        }

        function F(a, b) {
          this.id = a, this.j = b
        }

        function G(a) {
          if (8 < a.j.byteLength)throw new RangeError("EbmlElement: Unsigned integer has too many bytes.");
          if (8 == a.j.byteLength && 224 & a.j.getUint8(0))throw new RangeError("EbmlParser: Unsigned integer must be at most 53 bits.");
          for (var b = 0, c = 0; c < a.j.byteLength; c++)var d = a.j.getUint8(c), b = 256 * b + d;
          return b
        }

        function H(a) {
          this.ad = Math.exp(Math.log(.5) / a), this.vc = this.Cc = 0
        }

        function I(a) {
          return a.Cc / (1 - Math.pow(a.ad, a.vc))
        }

        function J(a) {
          var b, c = new CustomEvent(a.type, {detail: a.detail, bubbles: !!a.bubbles});
          for (b in a)b in c || (c[b] = a[b]);
          return c
        }

        function K(a) {
          return new CustomEvent("error", {detail: a, bubbles: !0})
        }

        function L(a, b, c) {
          return M(b), M(c), c == b || a >= Hd && c == b.split("-")[0] || a >= Id && c.split("-")[0] == b.split("-")[0] ? !0 : !1
        }

        function M(a) {
          a = a.toLowerCase().split("-");
          var b = Jd[a[0]];
          return b && (a[0] = b), a.join("-")
        }

        function N(a) {
          return Object.keys(a).map(function (b) {
            return a[b]
          })
        }

        function O() {
          this.da = {}
        }

        function P(a) {
          var b, c = [];
          for (b in a.da)c.push.apply(c, a.da[b]);
          return c
        }

        function Q() {
          this.fb = new O
        }

        function R(a, b, c, d) {
          b = new T(b, c, d), a.fb.push(c, b)
        }

        function S(a) {
          for (var b = P(a.fb), c = 0; c < b.length; ++c)b[c].Yb();
          a.fb.clear()
        }

        function T(a, b, c) {
          this.target = a, this.type = b, this.rd = c, this.target.addEventListener(b, c, !1)
        }

        function U(a) {
          this.Kc = new O, this.parent = a
        }

        function V(a, b) {
          b.currentTarget = a;
          for (var c = a.Kc.get(b.type) || [], d = 0; d < c.length; ++d) {
            var e = c[d];
            try {
              e.handleEvent ? e.handleEvent(b) : e.call(a, b)
            } catch (f) {
            }
          }
          return a.parent && b.bubbles && V(a.parent, b), b.defaultPrevented
        }

        function W() {
          U.call(this, null), this.Dc = new H(3), this.Gd = new H(10), this.fe = 50, this.Pd = 5e5, this.ge = .5, this.ee = 65536, this.od = 0
        }

        function X() {
          var a, b, c = new Promise(function (c, d) {
            a = c, b = d
          });
          return c.resolve = a, c.reject = b, c
        }

        function Y() {
          this.tc = new X, this.ga = !1, this.za = null, this.La = [], this.Ma = null
        }

        function Z(a, b) {
          var c, d = a.La[0](b);
          d ? (c = d[0], a.Ma = d[1]) : (c = Promise.resolve(), a.Ma = null), c.then(_(a, function (a) {
            this.za ? (this.La = [], this.Ma = null, $(this)) : (this.La.shift(), this.La.length ? Z(this, a) : (this.tc.resolve(a), this.Ma = null))
          }))["catch"](_(a, function (a) {
            this.La = [], this.Ma = null, this.za ? $(this) : this.tc.reject(a)
          }))
        }

        function $(b) {
          var c = Error("Task aborted.");
          c.type = "aborted", b.tc.reject(c), a.setTimeout(function () {
            this.za.resolve(), this.za = null
          }.bind(b), 5)
        }

        function _(a, b) {
          return b.bind(a)
        }

        function aa(a) {
          return String.fromCharCode.apply(null, a)
        }

        function ba(a) {
          for (var b = new Uint8Array(a.length), c = 0; c < a.length; ++c)b[c] = a.charCodeAt(c);
          return b
        }

        function ca(b, c) {
          var d = void 0 == c ? !0 : c, e = a.btoa(aa(b)).replace(/\+/g, "-").replace(/\//g, "_");
          return d ? e : e.replace(/=*$/, "")
        }

        function da(b) {
          return ba(a.atob(b.replace(/-/g, "+").replace(/_/g, "/")))
        }

        function ea(a) {
          for (var b = "", c = 0; c < a.length; ++c) {
            var d = a[c].toString(16);
            1 == d.length && (d = "0" + d), b += d
          }
          return b
        }

        function fa(a, b) {
          if (!a && !b)return !0;
          if (!a || !b || a.length != b.length)return !1;
          for (var c = 0; c < a.length; ++c)if (a[c] != b[c])return !1;
          return !0
        }

        function ga(a, b, c, d, e, f, g, h, i, j, k) {
          this.keySystem = a, this.ce = b, this.withCredentials = c, this.Sa = [], this.pd = e || null, this.qd = f || null, this.Qd = g == Kd, this.Fe = h == Ld, this.Md = i || "", this.Ye = j || "", this.Dd = k || null, d && this.Sa.push(d)
        }

        function ha(a) {
          this.body = a, this.headers = {}
        }

        function ia() {
          this.minBandwidth = this.maxBandwidth = this.maxWidth = this.maxHeight = null
        }

        function ja() {
          return new ga("", "", !1, null)
        }

        function ka(a, b) {
          a.Sa = u(a.Sa.concat(b.Sa), function (a) {
            return Array.prototype.join.apply(a.initData)
          })
        }

        function la(a, b) {
          try {
            var c = new na(a, b);
            return Promise.resolve(c)
          } catch (d) {
            return Promise.reject(d)
          }
        }

        function ma(a) {
          var b = this.mediaKeys;
          return b && b != a && pa(b, null), delete this.mediaKeys, (this.mediaKeys = a) && pa(a, this), Promise.resolve()
        }

        function na(a, b) {
          this.jb = this.keySystem = a;
          var c = !0;
          "org.w3.clearkey" == a && (this.jb = "webkit-org.w3.clearkey", c = !1);
          var d, e = !1;
          d = document.getElementsByTagName("video"), d = d.length ? d[0] : document.createElement("video");
          for (var f = 0; f < b.length; ++f) {
            var g = b[f], h = {
              audioCapabilities: [],
              videoCapabilities: [],
              persistentState: "optional",
              distinctiveIdentifier: "optional",
              initDataTypes: g.initDataTypes
            }, i = !1;
            if (g.audioCapabilities)for (var j = 0; j < g.audioCapabilities.length; ++j) {
              var k = g.audioCapabilities[j];
              k.contentType && (i = !0, d.canPlayType(k.contentType.split(";")[0], this.jb) && (h.audioCapabilities.push(k), e = !0))
            }
            if (g.videoCapabilities)for (j = 0; j < g.videoCapabilities.length; ++j)k = g.videoCapabilities[j], k.contentType && (i = !0, d.canPlayType(k.contentType, this.jb) && (h.videoCapabilities.push(k), e = !0));
            if (i || (e = d.canPlayType("video/mp4", this.jb) || d.canPlayType("video/webm", this.jb)), "required" == g.persistentState && (c ? h.persistentState = "required" : e = !1), e)return void(this.Od = h)
          }
          throw Error("None of the requested configurations were supported.")
        }

        function oa(a) {
          this.Ta = a, this.Ia = null, this.l = new Q, this.vd = [], this.Ed = {}
        }

        function pa(a, b) {
          a.Ia = b, S(a.l), b && (R(a.l, b, "webkitneedkey", a.Ee.bind(a)), R(a.l, b, "webkitkeymessage", a.De.bind(a)), R(a.l, b, "webkitkeyadded", a.Be.bind(a)), R(a.l, b, "webkitkeyerror", a.Ce.bind(a)))
        }

        function qa(a, b) {
          var c = a.Ed[b];
          return c ? c : (c = a.vd.shift()) ? (c.sessionId = b, a.Ed[b] = c) : null
        }

        function ra(a, b, c) {
          U.call(this, null), this.Ia = a, this.nd = !1, this.S = this.ba = null, this.Ta = b, this.wc = c, this.sessionId = "", this.expiration = NaN, this.closed = new X, this.keyStatuses = new va
        }

        function sa(a, b, c) {
          if (a.nd)return Promise.reject(Error("The session is already initialized."));
          a.nd = !0;
          try {
            var d;
            if ("persistent-license" == a.wc)if (c)d = ba("LOAD_SESSION|" + c); else {
              var e = new Uint8Array(b);
              d = ba("PERSISTENT|" + aa(e))
            } else d = new Uint8Array(b)
          } catch (f) {
            return Promise.reject(f)
          }
          a.ba = new X;
          try {
            a.Ia.webkitGenerateKeyRequest(a.Ta, d)
          } catch (g) {
            if ("InvalidStateError" != g.name)return a.ba = null, Promise.reject(g);
            setTimeout(function () {
              try {
                this.Ia.webkitGenerateKeyRequest(this.Ta, d)
              } catch (a) {
                this.ba.reject(a), this.ba = null
              }
            }.bind(a), 10)
          }
          return a.ba
        }

        function ta(a, b) {
          var c = a.keyStatuses;
          c.size = void 0 == b ? 0 : 1, c.wa = b, c = J({type: "keystatuseschange"}), a.dispatchEvent(c)
        }

        function ua(a) {
          this.Kd = a, this.md = 0
        }

        function va() {
          this.size = 0, this.wa = void 0
        }

        function wa() {
          Navigator.prototype.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration || (HTMLMediaElement.prototype.webkitGenerateKeyRequest ? (Md = ba("FAKE_KEY_ID"), Navigator.prototype.requestMediaKeySystemAccess = la, delete HTMLMediaElement.prototype.mediaKeys, HTMLMediaElement.prototype.mediaKeys = null, HTMLMediaElement.prototype.setMediaKeys = ma, a.MediaKeys = oa, a.MediaKeySystemAccess = na) : (Navigator.prototype.requestMediaKeySystemAccess = p, delete HTMLMediaElement.prototype.mediaKeys, HTMLMediaElement.prototype.mediaKeys = null, HTMLMediaElement.prototype.setMediaKeys = q, a.MediaKeys = r, a.MediaKeySystemAccess = s))
        }

        function xa(a) {
          this.systemIds = [], this.cencKeyIds = [], a = new w(new DataView(a.buffer), 0);
          try {
            for (; a.Qa();) {
              var b = a.i, c = y(a), d = y(a);
              if (1 == c ? c = z(a) : 0 == c && (c = a.j.byteLength - b), 1886614376 != d)B(a, c - (a.i - b)); else {
                var e = x(a);
                if (e > 1)B(a, c - (a.i - b)); else {
                  B(a, 3);
                  var f = ea(A(a)), g = [];
                  if (e > 0)for (var h = y(a), i = 0; h > i; ++i) {
                    var j = ea(A(a));
                    g.push(j)
                  }
                  var k = y(a);
                  B(a, k), this.cencKeyIds.push.apply(this.cencKeyIds, g), this.systemIds.push(f), a.i != b + c && B(a, c - (a.i - b))
                }
              }
            }
          } catch (l) {
          }
        }

        function ya(a) {
          var b;
          a instanceof ya ? (za(this, a.Ja), this.cb = a.cb, this.ra = a.ra, Aa(this, a.ub), this.ja = a.ja, Ba(this, a.Xa.clone()), this.Pa = a.Pa) : a && (b = String(a).match(Nd)) ? (za(this, b[1] || "", !0), this.cb = Ca(b[2] || ""), this.ra = Ca(b[3] || "", !0), Aa(this, b[4]), this.ja = Ca(b[5] || "", !0), Ba(this, b[6] || "", !0), this.Pa = Ca(b[7] || "")) : this.Xa = new Fa(null)
        }

        function za(a, b, c) {
          a.Ja = c ? Ca(b, !0) : b, a.Ja && (a.Ja = a.Ja.replace(/:$/, ""))
        }

        function Aa(a, b) {
          if (b) {
            if (b = Number(b), isNaN(b) || 0 > b)throw Error("Bad port number " + b);
            a.ub = b
          } else a.ub = null
        }

        function Ba(a, b, c) {
          b instanceof Fa ? a.Xa = b : (c || (b = Da(b, Rd)), a.Xa = new Fa(b))
        }

        function Ca(a, b) {
          return a ? b ? decodeURI(a) : decodeURIComponent(a) : ""
        }

        function Da(a, b, c) {
          return "string" == typeof a ? (a = encodeURI(a).replace(b, Ea), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        }

        function Ea(a) {
          return a = a.charCodeAt(0), "%" + (a >> 4 & 15).toString(16) + (15 & a).toString(16)
        }

        function Fa(a) {
          this.Ea = a || null
        }

        function Ga() {
          this.id = this.url = null, this.type = "static", this.ua = this.Yc = this.e = null, this.F = 5, this.bb = this.pa = this.Mc = null, this.Vc = 1, this.v = []
        }

        function Ha() {
          this.p = this.A = this.H = this.e = this.duration = this.start = this.id = null, this.Aa = []
        }

        function Ia() {
          this.aa = this.n = this.height = this.width = this.contentType = this.lang = this.id = null, this.Kb = !1, this.p = this.A = this.H = this.e = null, this.qa = [], this.Z = []
        }

        function Ja() {
          this.value = null
        }

        function Ka() {
          this.contentType = this.lang = this.id = null
        }

        function La() {
          this.p = this.A = this.H = this.e = this.aa = this.n = this.height = this.width = this.bandwidth = this.lang = this.id = null, this.qa = []
        }

        function Ma() {
          this.value = this.schemeIdUri = null, this.children = [], this.pssh = null
        }

        function Na() {
          this.parsedPssh = this.psshBox = null
        }

        function Oa() {
          this.url = null
        }

        function Pa() {
          this.url = null
        }

        function Qa() {
          this.e = null, this.o = 1, this.M = this.Za = this.Ga = this.w = null
        }

        function Ra() {
          this.Y = this.url = null
        }

        function Sa() {
          this.Y = this.url = null
        }

        function Ta() {
          this.e = null, this.o = 1, this.q = this.w = null, this.fa = 1, this.M = null, this.Ka = []
        }

        function Ua() {
          this.ob = this.Ob = null
        }

        function Va() {
          this.o = 1, this.q = this.w = null, this.fa = 1, this.xa = this.ib = this.Ha = this.pb = null
        }

        function Wa() {
          this.uc = []
        }

        function Xa() {
          this.repeat = this.duration = this.startTime = null
        }

        function Ya(a, b) {
          this.Bb = a, this.end = b
        }

        function Za(a, b) {
          var c = b ? new ya(b) : null;
          return a ? c ? a.resolve(c) : a : c
        }

        function $a(a, b, c) {
          var d = db(c);
          return (b = ab(b, c.constructor.TAG_NAME)) && d.parse(a, b), d
        }

        function _a(a, b, c) {
          var d = null;
          return (b = ab(b, c.TAG_NAME)) && (d = new c, d.parse(a, b)), d
        }

        function ab(a, b) {
          for (var c = null, d = 0; d < a.childNodes.length; d++)if (a.childNodes[d].tagName == b) {
            if (c)return null;
            c = a.childNodes[d]
          }
          return c
        }

        function bb(a, b, c) {
          for (var d = [], e = 0; e < b.childNodes.length; e++)if (b.childNodes[e].tagName == c.TAG_NAME) {
            var f = new c;
            f.parse.call(f, a, b.childNodes[e]), d.push(f)
          }
          return d
        }

        function cb(a) {
          return a = a.firstChild, a.nodeType != Node.TEXT_NODE ? null : a.nodeValue
        }

        function db(a) {
          return a ? a.clone() : null
        }

        function eb(a, b, c, d) {
          return a = c(a.getAttribute(b)), null != a ? a : void 0 !== d ? d : null
        }

        function fb(a) {
          return a ? (a = Date.parse(a), isNaN(a) ? null : Math.floor(a / 1e3)) : null
        }

        function gb(b) {
          if (!b)return null;
          var c = /^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/.exec(b);
          if (!c)return null;
          b = 0;
          var d = jb(c[1]);
          return d && (b += 31536e3 * d), (d = jb(c[2])) && (b += 2592e3 * d), (d = jb(c[3])) && (b += 86400 * d), (d = jb(c[4])) && (b += 3600 * d), (d = jb(c[5])) && (b += 60 * d), c = a.parseFloat(c[6]), (c = isNaN(c) ? null : c) && (b += c), b
        }

        function hb(a) {
          var b = /([0-9]+)-([0-9]+)/.exec(a);
          return b ? (a = jb(b[1]), null == a ? null : (b = jb(b[2]), null == b ? null : new Ya(a, b))) : null
        }

        function ib(b) {
          return b = a.parseInt(b, 10), b > 0 ? b : null
        }

        function jb(b) {
          return b = a.parseInt(b, 10), b >= 0 ? b : null
        }

        function kb(a) {
          return a
        }

        function lb(a, b, c) {
          for (var d = a.p, e = [], f = 0; c > f; ++f) {
            var g = f + b, h = (g - 1) * d.q, i = h / d.o, h = (h + d.q) / d.o, g = mb(a, g - 1 + d.fa, (g - 1) * d.q);
            if (!g)return null;
            e.push(new ob(i, h, 0, null, new ya(g)))
          }
          return e
        }

        function mb(a, b, c) {
          if (!a.p)return null;
          var d = a.p.pb;
          return d ? (b = nb(d, a.id, b, a.bandwidth, c)) ? a.e ? a.e.resolve(b) : b : null : a.e ? new ya(a.e) : null
        }

        function nb(b, c, d, e, f) {
          var g = {RepresentationID: c, Number: d, Bandwidth: e, Time: f};
          b = b.replace(/\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)d)?\$/g, function (b, c, d) {
            if ("$$" == b)return "$";
            var e = g[c];
            return null == e ? b : ("RepresentationID" == c && d && (d = void 0), b = e.toString(), d = a.parseInt(d, 10) || 1, d = Math.max(0, d - b.length), Array(d + 1).join("0") + b)
          });
          try {
            return new ya(b)
          } catch (h) {
            if (h instanceof URIError)return null;
            throw h
          }
        }

        function ob(a, b, c, d, e) {
          this.startTime = a, this.endTime = b, this.ab = c, this.Fb = d, this.url = e
        }

        function pb(a, b, c) {
          return new ob(b, c, a.ab, a.Fb, a.url)
        }

        function qb(a, b) {
          for (var c = a.length - 1; c >= 0; --c) {
            var d = a[c];
            if (b >= d.startTime && (null == d.endTime || b < d.endTime))return c
          }
          return -1
        }

        function rb(a, b) {
          return a.map(function (a) {
            return pb(a, a.startTime + b, null != a.endTime ? a.endTime + b : null)
          })
        }

        function sb() {
        }

        function tb(a) {
          this.g = a, this.na = 0
        }

        function ub(a) {
          if (0 == a.g.length)throw new RangeError("SegmentIndex: There is no last SegmentReference.");
          return a.g[a.g.length - 1]
        }

        function vb(a, b) {
          if (a.na != b.na && (b = new tb(rb(b.g, a.na - b.na))), 0 == a.length())a.g = b.g.slice(0); else if (0 != b.length() && null != ub(a).endTime && !(null != ub(b).endTime && ub(b).endTime < ub(a).endTime)) {
            if (ub(a).endTime <= b.first().startTime)var c = pb(ub(a), ub(a).startTime, b.first().startTime), c = a.g.slice(0, -1).concat([c]); else {
              var d;
              for (d = 0; d < a.g.length && !(a.g[d].endTime >= b.first().startTime); ++d);
              a.g[d].startTime < b.first().startTime ? (c = pb(a.g[d], a.g[d].startTime, b.first().startTime), c = a.g.slice(0, d).concat([c])) : (a.first().startTime > b.first().startTime || b.first(), c = a.g.slice(0, d))
            }
            a.g = c.concat(b.g)
          }
        }

        function wb(a, b, c, d) {
          tb.call(this, a), this.Ua = b, this.Ad = c, this.Lb = d, this.ka = this.tb = this.R = null, xb(this)
        }

        function xb(a) {
          if (0 != a.length()) {
            a.length();
            var b = null != ub(a).endTime ? ub(a).endTime : ub(a).startTime;
            if (a.Ua.pa > a.Lb)a.R = b; else {
              var c = a.Lb - (a.Ua.pa + a.Ad.start);
              0 > c ? a.R = b : c < Math.max(ub(a).startTime, ub(a).endTime || 0) ? (ub(a), a.R = b) : a.R = c
            }
            a.tb = ub(a).startTime, a.ka = a.first().startTime
          }
        }

        function yb(a, b) {
          if (zb(a, b), null == a.R || null == a.tb || null == a.ka)return {start: 0, end: 0};
          var c = b - a.Lb, d = a.R + c;
          return null != a.Ua.bb && (d = d - a.ka - a.Ua.bb, d > 0 && (a.ka += d)), c = a.tb + c, c = 0 < a.length() ? null != ub(a).endTime ? Math.min(c, ub(a).endTime) : c : a.ka, c = Math.max(c, a.ka), {
            start: a.ka,
            end: c
          }
        }

        function zb(a, b) {
          if (null != a.Ua.bb)if (null == a.R)a.length(); else {
            for (var c = a.R + (b - a.Lb), d = 0, e = 0; e < a.g.length; ++e) {
              var f = null;
              if (e < a.g.length - 1 ? f = a.g[e + 1].endTime : (f = a.g[e], f = null != f.endTime ? f.endTime + (f.endTime - f.startTime) : null), !(null != f && f < c - a.Ua.bb))break;
              ++d
            }
            d > 0 && a.g.splice(0, d)
          }
        }

        function Ab(a, b, c, d) {
          var e, f = 1, g = 0;
          if (a.pa > d)e = null; else {
            var h = a.Vc || 0, i = a.bb || 0;
            e = c.p, e = e.q / e.o;
            var j = d - (a.pa + b.start);
            0 > j ? e = null : (i = j - 2 * e - i, 0 > i && (i = 0), i = Math.ceil(i / e) * e, j -= e, 0 > j ? e = null : (h = Math.floor(j / e) * e - h, 0 > h && (h = 0), h = Math.floor(h / e) * e, e = {
              fd: i / e + 1,
              current: (h >= i ? h : i) / e + 1
            }))
          }
          if (e && (f = e.fd, g = e.current - e.fd + 1), f = lb(c, f, g), null == f)throw a = Error("Failed to generate SegmentReferences."), a.type = "stream", a;
          wb.call(this, f, a, b, d), this.G = c, this.sb = this.V = 0 < this.length() ? a.pa + b.start + ub(this).endTime : null, this.rb = e ? e.current + 1 : null
        }

        function Bb(a, b) {
          if (null != a.V && null != a.sb && null != a.rb) {
            var c = a.G.p, c = c.q / c.o, d = Math.floor((a.sb + (b - a.Lb) - a.V) / c);
            if (0 != d) {
              var e = lb(a.G, a.rb, d);
              Array.prototype.push.apply(a.g, rb(e, a.na)), a.V += d * c, a.rb += d
            }
          }
        }

        function Cb(a, b, c, d) {
          this.Q = a, this.X = b, this.G = c, this.Mb = d, this.b = null
        }

        function Db(a, b, c) {
          this.Q = a, this.X = b, this.G = c, this.b = null
        }

        function Eb(a, b, c, d) {
          this.Q = a, this.X = b, this.G = c, this.Mb = d, this.b = null
        }

        function Fb(a) {
          this.Ue = a, this.b = null
        }

        function Gb() {
        }

        function Hb(a) {
          this.url = a, this.h = new Ib, this.Sb = this.Hd = this.Ac = 0, this.m = null, this.B = new X, this.L = null
        }

        function Ib() {
          this.body = null, this.Nb = 1, this.cd = 1e3, this.Ie = 2, this.Je = .5, this.kc = 0, this.method = "GET", this.responseType = "arraybuffer", this.jc = {}, this.Id = this.withCredentials = !1
        }

        function Jb(a) {
          Kb(a), a.h.body = null, a.B = null, a.L = null
        }

        function Kb(a) {
          a.m && (a.m.onload = null, a.m.onreadystatechange = null, a.m.onerror = null, a.m.ontimeout = null), a.m = null
        }

        function Lb(a) {
          var b = a.url.split("/"), c = parseInt(b[2], 10), d = parseInt(b[3], 10), e = new fd(null, null);
          return gd(e).then(function () {
            return nd(e, c, d)
          }).then(_(a, function (a) {
            var b = JSON.parse(JSON.stringify(new XMLHttpRequest));
            return b.response = a, a = this.B, a.resolve(b), hd(e), Jb(this), a
          }))["catch"](_(a, function (a) {
            return hd(e), Jb(this), Promise.reject(a)
          }))
        }

        function Mb(a, b, c) {
          return b = Error(b), b.type = c, b.status = a.m.status, b.url = a.url, b.method = a.h.method, b.body = a.h.body, b.Ze = a.m, b
        }

        function Nb(b) {
          Kb(b), a.setTimeout(b.pc.bind(b), b.Sb * (1 + (2 * Math.random() - 1) * b.h.Je)), b.Sb *= b.h.Ie
        }

        function Ob(a) {
          Hb.call(this, a), this.h.responseType = "text", this.h.Nb = 3, this.h.kc = Td, this.h.Id = !0
        }

        function Pb(a, b, c, d) {
          Hb.call(this, a), this.h.body = b, this.h.method = "POST", this.h.Nb = 3, this.h.withCredentials = c, this.h.kc = Ud, a = d || {};
          for (var e in a)this.h.jc[e] = a[e]
        }

        function Qb(a, b, c, d, e) {
          Hb.call(this, a), (b || c) && (this.h.jc.Range = "bytes=" + (b + "-" + (null != c ? c : ""))), d && (this.h.Nb = d), e && (this.h.cd = e), this.h.kc = Vd
        }

        function Rb(a, b, c) {
          this.url = a, this.ab = b, this.Fb = c, this.vb = this.$a = null
        }

        function Sb(a) {
          a.$a && (a.$a.abort(), a.$a = null, a.vb = null)
        }

        function Tb(a, b, c, d, e, f) {
          this.Q = a, this.X = b, this.cc = c, this.hb = d, this.gc = e, this.Mb = f, this.b = this.B = null
        }

        function Ub(a) {
          this.Pb = a
        }

        function Vb(a, b, c) {
          this.sd = a, this.la = b, this.P = c, this.l = new Q, this.ca = [], this.ya = 0, this.Va = this.C = null, R(this.l, this.la, "updateend", this.te.bind(this))
        }

        function Wb(a, b) {
          for (var c = a.la.buffered, d = 0; d < c.length; ++d) {
            var e = c.start(d) - Wd, f = c.end(d) + Wd;
            if (b >= e && f >= b)return c.end(d) - b
          }
          return 0
        }

        function Xb(a) {
          return a.C.start(), a.C.tc.then(_(a, function () {
            this.C = null
          }))["catch"](_(a, function (a) {
            return this.C = null, Promise.reject(a)
          }))
        }

        function Yb(a, b) {
          try {
            a.la.appendBuffer(b)
          } catch (c) {
            return Promise.reject(c)
          }
          return a.Va = new X, a.Va
        }

        function Zb() {
          this.K = Xd++, this.id = this.I = this.N = null, this.timestampOffset = 0, this.height = this.width = this.bandwidth = null, this.aa = this.n = "", this.enabled = !0
        }

        function $b(a) {
          var b = a.n || "";
          return a.aa && (b += '; codecs="' + a.aa + '"'), b
        }

        function _b() {
          this.K = Yd++, this.id = null, this.contentType = this.lang = "", this.Kb = !1, this.f = [], this.Na = []
        }

        function ac() {
          this.id = null, this.start = 0, this.duration = null, this.u = []
        }

        function bc() {
          this.ia = !1, this.Zb = this.zb = null, this.F = 0, this.t = []
        }

        function cc() {
          this.id = 0, this.T = null, this.Fa = this.contentType = ""
        }

        function dc(a) {
          this.kb = a
        }

        function ec(a) {
          if (a.v.length) {
            null == a.v[0].start && (a.v[0].start = 0);
            var b = function (a) {
              return 0 == a || !!a
            };
            "dynamic" == a.type && (a.ua = null), b(a.ua) && 1 == a.v.length && !b(a.v[0].duration) && (a.v[0].duration = a.ua);
            for (var c = 0, d = !0, e = 0; e < a.v.length; ++e) {
              var f = a.v[e - 1], g = a.v[e], h = a.v[e + 1] || {start: a.ua};
              !b(g.start) && f && b(f.start) && b(f.duration) && (g.start = f.start + f.duration), !b(g.duration) && b(h.start) && (g.duration = h.start - g.start), null != g.start && null != g.duration ? c += g.duration : d = !1
            }
            b(a.ua) || (e = a.v[a.v.length - 1], d ? a.ua = c : b(e.start) && b(e.duration) ? a.ua = e.start + e.duration : "dynamic" != a.type && (a.ua = c))
          }
        }

        function fc(a, b, c) {
          return (b = nb(b, a.id, null, a.bandwidth, null)) ? (c = new c, c.url = a.e && b ? a.e.resolve(b) : b, c) : null
        }

        function gc(a) {
          var b = new ya(a.url), c = 0, d = null;
          return a.Y && (c = a.Y.Bb, d = a.Y.end), new Rb(b, c, d)
        }

        function hc(a, b, c) {
          U.call(this, a), this.a = b, this.c = c, this.D = this.nb = null, this.l = new Q, this.Qb = {}, this.xb = [], this.wd = 0, this.eb = new X, this.$c = null
        }

        function ic(a) {
          for (var b = new O, c = a.c.gd(), d = 0; d < c.length; ++d) {
            var e = c[d];
            e.T.keySystem || e.Fa && !Ac(e.Fa) || b.push(e.contentType, e)
          }
          for (var d = {}, e = !1, f = 0; f < c.length; ++f) {
            var g = c[f];
            if (g.T.keySystem && !b.has(g.contentType)) {
              var h = g.T.keySystem, i = d[h];
              if (i || (i = g.T, i = {
                  audioCapabilities: void 0,
                  videoCapabilities: void 0,
                  initDataTypes: void 0,
                  distinctiveIdentifier: i.Qd ? "required" : "optional",
                  persistentState: i.Fe || a.c.Ib() ? "required" : "optional"
                }, d[h] = i), g.Fa && (h = g.contentType + "Capabilities", h in i)) {
                e = !0, i[h] || (i[h] = []);
                var j;
                "audio" == g.contentType ? j = g.T.Md : "video" == g.contentType && (j = g.T.Ye), i[h].push({contentType: g.Fa, robustness: j})
              }
            }
          }
          if (!e) {
            if (!c.length)throw a = Error("No DRM scheme info provided!"), a.type = "drm", a;
            a.D = c[0].T
          }
          return 0 == Object.keys(d).length ? (a.c.Tc(b), a.eb.resolve(), Promise.resolve()) : (j = new X, d = kc(a, d, j), d = d.then(a.Nd.bind(a, c, b)), d = d.then(a.Se.bind(a)), j.reject(null), d)
        }

        function jc(b, c) {
          return null == b.$c && (b.$c = a.setTimeout(function () {
            var a = Error("Timeout waiting for sessions.");
            a.type = "storage", this.eb.reject(a)
          }.bind(b), c)), b.eb
        }

        function kc(a, b, c) {
          for (var d in b) {
            var e = b[d];
            c = c["catch"](function () {
              return navigator.requestMediaKeySystemAccess(d, [e])
            })
          }
          return a.c.Ib() && (c = c["catch"](function () {
            throw Error("Either none of the requested key systems are supported or none of the requested key systems support persistent state.")
          })), c
        }

        function lc(a) {
          for (var b = a.c.fc(), c = 0; c < b.length; ++c) {
            var d = mc(a), e = d.load(b[c]);
            a.xb.push(d), e["catch"](_(a, function (a) {
              a = K(a), this.dispatchEvent(a)
            }))
          }
        }

        function mc(a) {
          var b = null;
          if (a.c.Ib())try {
            b = a.nb.createSession("persistent-license")
          } catch (c) {
            throw Error("Persistent licenses are not supported by this key system or platform.")
          } else b = a.nb.createSession();
          return R(a.l, b, "message", a.re.bind(a)), R(a.l, b, "keystatuseschange", a.ke.bind(a)), b
        }

        function nc(a, b, c, d) {
          d = new ha(d), c.qd && c.qd(d), new Pb(c.ce, d.body, c.withCredentials, d.headers).send().then(_(a, function (a) {
            return c.pd && (a = c.pd(a)), b.update(a)
          })).then(_(a, function () {
            var a = J({type: "sessionReady", detail: b});
            this.dispatchEvent(a), this.wd++, this.wd >= this.xb.length && this.eb.resolve()
          }))["catch"](_(a, function (a) {
            a.af = b, a = K(a), this.dispatchEvent(a)
          }))
        }

        function oc(a, b, c, d, e) {
          U.call(this, a), this.a = b, this.$ = new Vb(c, d, e), this.P = e, this.Ic = this.b = this.O = null, this.td = 0, this.Wc = !1, this.ha = null, this.Rb = !1, this.ya = null, this.Nc = this.ec = this.ga = !1
        }

        function pc(a, b) {
          a.O && !a.Rb && (a.Rb = !0, a.bc(), a.$.abort().then(_(a, function () {
            var a = this.a.currentTime;
            return !b && 0 < Wb(this.$, a) && 0 <= qb(this.$.ca, a) ? Promise.resolve() : (this.Nc = !0, this.$.clear())
          })).then(_(a, function () {
            this.Rb = !1, this.ea(0)
          }))["catch"](_(a, function (a) {
            this.Rb = !1, a = K(a), this.dispatchEvent(a)
          })))
        }

        function qc(a, b, c) {
          a = a.$;
          var d = a.ca.length;
          return a = d > 0 ? a.ca[d - 1] : null, null != a ? null != a.endTime ? c.find(a.endTime) : null : c.find(b)
        }

        function rc(a) {
          if (!a.ga && null != a.ya) {
            a.ga = !0, a.$.Ba(a.ya);
            var b = J({type: "started", bubbles: !1, na: a.ya});
            a.dispatchEvent(b)
          }
        }

        function sc(a, b) {
          var c = b.n.split("/")[0], c = J({
            type: "adaptation",
            bubbles: !0,
            contentType: c,
            size: "video" != c ? null : {width: b.width, height: b.height},
            bandwidth: b.bandwidth
          });
          a.dispatchEvent(c)
        }

        function tc(a) {
          var b = J({type: "ended"});
          a.dispatchEvent(b)
        }

        function uc(a, b) {
          U.call(this, a), this.a = b, this.Eb = !0, this.oa = this.b = this.O = null
        }

        function vc() {
          this.streamStats = null, this.droppedFrames = this.decodedFrames = NaN, this.bufferingTime = this.playTime = this.estimatedBandwidth = 0, this.playbackLatency = NaN, this.bufferingHistory = [], this.bandwidthHistory = [], this.streamHistory = []
        }

        function wc(a, b) {
          var c = new xc(b);
          a.streamHistory.push(new yc(c)), (c.videoHeight || !a.streamStats) && (a.streamStats = c)
        }

        function xc(a) {
          this.videoWidth = a.width, this.videoHeight = a.height, this.videoMimeType = a.n, this.videoBandwidth = a.bandwidth
        }

        function yc(a) {
          this.timestamp = v() / 1e3, this.value = a
        }

        function zc(a) {
          U.call(this, null), this.a = a, this.c = null, this.l = new Q, this.Oa = null, this.ta = "en", this.xc = this.Tb = null, this.gb = !1, this.J = new vc, this.zc = !0, this.ic = 1, this.lc = new ia
        }

        function Ac(b) {
          return "text/vtt" == b ? !!a.VTTCue : MediaSource.isTypeSupported(b)
        }

        function Bc(b) {
          b.Tb && (a.clearTimeout(b.Tb), b.Tb = null)
        }

        function Cc(b) {
          Dc(b), b.xc = a.setTimeout(b.Ae.bind(b), 100)
        }

        function Dc(b) {
          b.xc && (a.clearTimeout(b.xc), b.xc = null)
        }

        function Ec(a) {
          f("buffering");
          var b = a.J;
          b.bufferingTime += g("buffering") / 1e3, a.gb = !1, a.dispatchEvent(J({type: "bufferingEnd"}))
        }

        function Fc() {
        }

        function Gc(a, b) {
          var c = a.bandwidth || Number.MAX_VALUE, d = b.bandwidth || Number.MAX_VALUE;
          return d > c ? -1 : c > d ? 1 : 0
        }

        function Hc(a) {
          this.va = a
        }

        function Ic(a) {
          function b(a, b) {
            return a.concat(b)
          }

          var c = a.t.map(function (a) {
            return a.u
          }).reduce(b, []).map(function (a) {
            return a.f
          }).reduce(b, []);
          return a = c.map(function (a) {
            return a.N.create()
          }), Promise.all(a).then(function (a) {
            for (var b = {}, d = 0; d < c.length; ++d)b[c[d].K] = a[d];
            return Promise.resolve(b)
          })
        }

        function Jc(a, b, c, d, e) {
          var f = new O;
          a.t.forEach(function (a, b) {
            f.push(a.id || "" + b, a)
          });
          var g = new O;
          for (b.t.forEach(function (a, b) {
            g.push(a.id || "" + b, a)
          }), a = f.keys(), b = 0; b < a.length; ++b) {
            var h = a[b], i = f.get(h);
            1 < i.length || (h = g.get(h)) && 0 != h.length && 1 == h.length && (Kc(i[0], h[0], c, d, e), i[0].duration = h[0].duration)
          }
        }

        function Kc(a, b, c, d, e) {
          var f = new O;
          a.u.forEach(function (a, b) {
            f.push(a.id || "" + b, a)
          });
          var g = new O;
          for (b.u.forEach(function (a, b) {
            g.push(a.id || "" + b, a)
          }), a = f.keys(), b = 0; b < a.length; ++b) {
            var h = a[b], i = f.get(h);
            1 < i.length || (h = g.get(h)) && 0 != h.length && 1 == h.length && Lc(i[0], h[0], c, d, e)
          }
        }

        function Lc(a, b, c, d, e) {
          var f = new O;
          a.f.forEach(function (a, b) {
            f.push(a.id || "" + b, a)
          });
          var g = new O;
          b.f.forEach(function (a, b) {
            g.push(a.id || "" + b, a)
          }), b = {};
          for (var h = f.keys(), i = 0; i < h.length; ++i) {
            var j = h[i];
            b[j] = j;
            var k = f.get(j);
            1 < k.length || ((j = g.get(j)) && 0 != j.length ? 1 == j.length && (Mc(k[0], j[0], c, d), k[0].I = j[0].I, j[0].I = null, k[0].timestampOffset = j[0].timestampOffset) : (e.push(k[0]), a.f.splice(a.f.indexOf(k[0]), 1)))
          }
          for (h = g.keys(), i = 0; i < h.length; ++i)j = h[i], b[j] || (b[j] = j, j = g.get(j), a.f.push(j[0]))
        }

        function Mc(a, b, c, d) {
          a = c[a.K], b = d[b.K], a.length(), a.Jc(b) && a.length()
        }

        function Nc() {
          this.c = this.P = null, this.l = new Q, this.qb = Number.POSITIVE_INFINITY, this.Eb = !0
        }

        function Oc(a) {
          var b = a.c.getVideoTracks();
          if (0 == b.length)return null;
          b.sort(k);
          var c;
          a:{
            c = a.c.getAudioTracks();
            for (var d = 0; d < c.length; ++d)if (c[d].active) {
              c = c[d];
              break a
            }
            c = null
          }
          c = c ? c.bandwidth : 0, a = a.P.getBandwidth();
          for (var d = b[0], e = 0; e < b.length; ++e) {
            var f = b[e], g = e + 1 < b.length ? b[e + 1] : {bandwidth: Number.POSITIVE_INFINITY};
            if (f.bandwidth && (g = (g.bandwidth + c) / .85, a >= (f.bandwidth + c) / .95 && g >= a && (d = f, d.active)))break
          }
          return d
        }

        function Pc(a, b, c) {
          U.call(this, null), this.de = a, this.Jd = b, this.D = c ? c : ja(), this.ma = null
        }

        function Qc(a, b, c) {
          U.call(this, null), this.d = a, this.L = b, this.sa = new Q, this.W = new MediaSource, this.video = null, this.r = new O, this.Ab = c, this.lb = !1, this.ta = "", this.sc = !1, this.J = null, this.$b = new X, this.Ra = this.ac = null, this.zd = 1, this.s = {}, this.ud = Number.POSITIVE_INFINITY, this.mb = Number.NEGATIVE_INFINITY, this.Jb = 0, this.dd = !1, this.Da = {}, this.Ub = this.ha = null
        }

        function Rc(a, b) {
          var c = b.n.split("/")[0], d = a.s[c];
          if (d && d.O == b) {
            var e = a.r.get(b.n.split("/")[0]), f = e.map(function (a) {
              return a.f
            }).reduce(function (a, b) {
              return a.concat(b)
            }, []).filter(function (a) {
              return a.enabled
            });
            if (0 == f.length)return void e.push(b);
            a.Da[c].Uc == b && delete a.Da[c], d.Xb(f[0], a.d.F, !0), b.destroy()
          }
          b.destroy()
        }

        function Sc(a, b, c, d) {
          if (!a.r.has(b) || !a.s[b])return !1;
          for (var e = a.r.get(b), f = 0; f < e.length; ++f)for (var g = e[f], h = 0; h < g.f.length; ++h) {
            var i = g.f[h];
            if (i.K == c)return "text" == b || a.dd ? (wc(a.J, i), a.s[b].Xb(i, a.d.F, d), !0) : (c = a.Da[b], a.Da[b] = {Uc: i, ed: null != c && c.ed || d}, !0)
          }
          return !1
        }

        function Tc(a, b) {
          for (var c = 0; 2 >= c; ++c)for (var d = 0; d < b.length; ++d) {
            var e = b[d];
            if (L(c, a.ta, e.lang))return b.splice(d, 1), void b.splice(0, 0, e)
          }
          for (d = 0; d < b.length; ++d)if (e = b[d], e.Kb) {
            b.splice(d, 1), b.splice(0, 0, e);
            break
          }
        }

        function Uc(a) {
          for (var b = [], c = ["audio", "video", "text"], d = 0; d < c.length; ++d) {
            var e = c[d];
            a.r.has(e) && b.push(a.r.get(e)[0])
          }
          a.Ab.start(a.L, a);
          var f = Vc(a, b), b = N(f).map(function (a) {
            return a.N.create()
          });
          return Promise.all(b).then(_(a, function (a) {
            return a.every(function (a) {
              return a.length()
            }) && (a = cd(this, a)) ? Wc(this, f) ? (Yc(this, f, a), Promise.resolve()) : (a = Error("Failed to create Stream objects."), a.type = "stream", Promise.reject(a)) : (a = Error("Some streams are not available."), a.type = "stream", Promise.reject(a))
          }))["catch"](_(a, function (a) {
            return "aborted" != a.type ? (Object.keys(this.s), this.d.ia ? (this.ea(0), Promise.resolve()) : Promise.reject(a)) : void 0
          }))
        }

        function Vc(a, b) {
          for (var c = {}, d = 0; d < b.length; ++d) {
            var e = b[d], f = e.f[0];
            if ("video" == e.contentType)for (var g = a.Ab.getInitialVideoTrackId(), h = 0; h < e.f.length && (f = e.f[h], f.K != g); ++h); else"audio" == e.contentType && (f = e.f[Math.floor(e.f.length / 2)]);
            c[e.contentType] = f
          }
          return c
        }

        function Wc(a, b) {
          var c, d = {};
          for (c in b) {
            var e = b[c], e = "text" == c ? new uc(a, a.video) : Xc(a, e);
            if (!e)return N(d).forEach(function (a) {
              a.destroy()
            }), !1;
            d[c] = e
          }
          return a.s = d, !0
        }

        function Xc(a, b) {
          var c;
          try {
            c = a.W.addSourceBuffer($b(b))
          } catch (d) {
            return null
          }
          try {
            c.timestampOffset = b.timestampOffset
          } catch (e) {
            return null
          }
          return new oc(a, a.video, a.W, c, a.L)
        }

        function Yc(a, b, c) {
          a.zd = a.video.playbackRate, a.video.playbackRate = 0;
          var d;
          a.d.ia ? (a.W.duration = c.end + 2592e3, d = c.end) : (a.W.duration = c.end - c.start, d = c.start), R(a.sa, a.video, "seeking", a.qe.bind(a)), a.video.currentTime != d && (a.video.currentTime = d, a.Ra = d), _c(a, c.start, c.end);
          for (var e in a.s)c = a.s[e], R(a.sa, c, "started", a.ve.bind(a)), R(a.sa, c, "ended", a.ue.bind(a)), d = b[e], wc(a.J, d), c.Xb(d, a.d.F, !1);
          a.Db(a.sc)
        }

        function Zc(a) {
          for (var b = bd(a), c = 0; c < b.length; ++c)b[c].Ba(a.mb);
          $c(a, b), b = P(a.r).map(function (a) {
            return a.f
          }).reduce(function (a, b) {
            return a.concat(b)
          }, []).map(function (a) {
            var b = [a.N.create()];
            return a.I && b.push(a.I.create()), Promise.all(b)
          }), Promise.all(b).then(_(a, function (a) {
            for (var b = 0; b < a.length; ++b)a[b][0].Ba(this.mb);
            this.dd = !0;
            for (var c in this.Da)a = this.Da[c], b = this.s[c], wc(this.J, a.Uc), b.Xb(a.Uc, this.d.F, a.ed);
            this.Da = {}
          }))["catch"](_(a, function (a) {
            "aborted" != a.type && (a = K(a), this.dispatchEvent(a))
          }))
        }

        function $c(a, b) {
          var c = cd(a, b);
          c && _c(a, c.start, c.end);
          var d;
          0 != a.mb ? (d = a.video.currentTime + a.mb, a.video.currentTime = d, a.Ra = d) : d = a.video.currentTime, a.d.ia && c && (a.Jb = c.end - d, a.Jb = Math.max(a.Jb, 0)), a.video.playbackRate = a.zd, null != a.d.zb && a.ea(a.Jb), dd(a)
        }

        function _c(a, b, c) {
          b = J({type: "seekrangechanged", bubbles: !0, start: b, end: c}), a.dispatchEvent(b)
        }

        function ad(a, b, c, d) {
          return b >= c - .01 ? !1 : (a.video.currentTime = Math.min(c + (a.d.ia ? a.d.F : 0), d), !0)
        }

        function bd(a) {
          return N(a.s).map(function (a) {
            return a.b
          }).filter(function (a) {
            return null != a
          })
        }

        function cd(a, b) {
          for (var c = 0, d = Number.POSITIVE_INFINITY, e = 0; e < b.length; ++e) {
            var f = b[e].Hc(), c = Math.max(c, f.start);
            null != f.end && (d = Math.min(d, f.end))
          }
          if (d == Number.POSITIVE_INFINITY) {
            if (d = a.d.t[0], !d.duration)return null;
            d = (d.start || 0) + d.duration
          }
          return a.d.ia && (d = Math.max(d - (a.d.F + a.Jb), c)), c > d ? null : {start: c, end: d}
        }

        function dd(b) {
          b.d.ia && (b.Ub = a.setTimeout(b.ye.bind(b), 1e3))
        }

        function ed(a, b, c, d) {
          c || (c = new W), d || (d = new Nc), Qc.call(this, null, c, d), this.he = a, this.kb = b
        }

        function fd(a, b) {
          U.call(this, b), this.Ca = null, this.P = a
        }

        function gd(b) {
          if (!a.indexedDB)return Promise.reject(Error("Offline storage requires IndexedDB support."));
          var c = new X, d = a.indexedDB.open("content_database", 1);
          return d.onupgradeneeded = _(b, function (a) {
            this.Ca = a.target.result, id(this, "group_store", {keyPath: "group_id"}), id(this, "stream_index_store", {keyPath: "stream_id"}), a = id(this, "content_store", {autoIncrement: "true"}), a.createIndex("segment", ["stream_id", "segment_id"], {unique: !0}), a.createIndex("stream", "stream_id", {unique: !1})
          }), d.onsuccess = _(b, function (a) {
            this.Ca = a.target.result, c.resolve()
          }), d.onerror = function () {
            c.reject(d.error)
          }, c
        }

        function hd(a) {
          a.Ca && a.Ca.close()
        }

        function id(a, b, c) {
          return a.Ca.objectStoreNames.contains(b) && a.Ca.deleteObjectStore(b), a.Ca.createObjectStore(b, c)
        }

        function jd(a, b, c, d, e) {
          for (var f = [], g = [], h = 0, i = 0, j = [], k = b.map(function (a) {
            return a.N.create()
          }), k = Promise.all(k), l = b.map(function (a) {
            return a.I.create()
          }), l = Promise.all(l), k = Promise.all([k, l]).then(function (a) {
            f = a[0], g = a[1], h = f.reduce(function (a, b) {
              return a + b.length()
            }, 0)
          }), l = 0; l < b.length; ++l)k = k.then(function (a) {
            return kd(this, b[a], f[a], g[a], h, i)
          }.bind(a, l)), k = k.then(function (a, b) {
            i += f[a].length(), j.push(b)
          }.bind(a, l));
          return k.then(_(a, function () {
            return ld(vd(this))
          })).then(_(a, function (a) {
            var b = new X, f = {group_id: a, stream_ids: j, session_ids: c, duration: d, key_system: e.keySystem}, g = vd(this).put(f);
            return g.onsuccess = function () {
              b.resolve(a)
            }, g.onerror = function () {
              b.reject(g.error)
            }, b
          }))
        }

        function kd(a, b, c, d, e, f) {
          var g = [ld(ud(a)), ld(td(a).index("stream"))], g = Promise.all(g).then(_(a, function (a) {
            return {Wb: Math.max(a[0], a[1]), wb: new ArrayBuffer(0), Sc: 0, g: [], Ec: null, We: e, Bd: f}
          })), g = g.then(a.$d.bind(a, c));
          return g = g.then(a.ae.bind(a, b, d))
        }

        function ld(a) {
          var b = new X, c = a.openCursor(null, "prev");
          return c.onsuccess = function (a) {
            a.target.result ? b.resolve(a.target.result.key + 1) : b.resolve(0)
          }, c.onerror = function () {
            b.reject(c.error)
          }, b
        }

        function md(a, b) {
          var c = new Uint8Array(a.byteLength + b.byteLength);
          return c.set(new Uint8Array(a), 0), c.set(new Uint8Array(b), a.byteLength), c.buffer
        }

        function nd(a, b, c) {
          return rd(td(a).index("segment"), [b, c]).then(function (a) {
            return Promise.resolve(a.content)
          })
        }

        function od(a, b) {
          return rd(ud(a), b)
        }

        function pd(a, b) {
          return rd(vd(a), b).then(function (a) {
            return a.hasOwnProperty("duration") || a.hasOwnProperty("key_system") ? Promise.resolve(a) : od(this, a.bf[0]).then(function (b) {
              return a.duration = b.duration, a.be = b.be, Promise.resolve(a)
            })
          }.bind(a))
        }

        function qd(a) {
          var b = new X, c = [], d = vd(a).openCursor();
          return d.onerror = function () {
            b.reject(d.error)
          }, d.onsuccess = function (a) {
            (a = a.target.result) ? (c.push(a.key), a["continue"]()) : b.resolve(c)
          }, b
        }

        function rd(a, b) {
          var c = new X, d = a.get(b);
          return d.onerror = function () {
            c.reject(d.error)
          }, d.onsuccess = function () {
            if (d.result)c.resolve(d.result); else {
              var a = Error("Item not found.");
              a.type = "storage", c.reject(a)
            }
          }, c
        }

        function sd(a, b) {
          var c = new X, d = ud(a)["delete"](b);
          d.onerror = function () {
            c.reject(d.error)
          };
          var e = td(a);
          return e.index("stream").openKeyCursor(IDBKeyRange.only(b)).onsuccess = function (a) {
            (a = a.target.result) && (e["delete"](a.primaryKey), a["continue"]())
          }, e.transaction.oncomplete = function () {
            c.resolve()
          }, c
        }

        function td(a) {
          return wd(a, "content_store")
        }

        function ud(a) {
          return wd(a, "stream_index_store")
        }

        function vd(a) {
          return wd(a, "group_store")
        }

        function wd(a, b) {
          return a.Ca.transaction([b], "readwrite").objectStore(b)
        }

        function xd(a) {
          this.mc = a, this.b = null
        }

        function yd(a, b, c) {
          b || (b = new W), c || (c = new Nc), Qc.call(this, null, b, c), this.jd = a, this.qc = [], this.timeoutMs = 3e4
        }

        function zd(a, b, c, d) {
          var e = new fd(a.L, a), f = gd(e);
          return f = f.then(_(a, function () {
            return jd(e, b, this.qc, d, c)
          })).then(function (a) {
            return hd(e), Promise.resolve(a)
          })["catch"](function (a) {
            return hd(e), Promise.reject(a)
          })
        }

        var Ad, Bd = this;
        d("error"), d("warn"), d("info"), d("log"), d("debug");
        var Cd = a.performance && a.performance.now ? a.performance.now.bind(a.performance) : Date.now, Dd = {};
        b("shaka.player.AudioTrack.compare", function (a, b) {
          return a.lang < b.lang ? -1 : a.lang > b.lang ? 1 : a.bandwidth < b.bandwidth ? -1 : a.bandwidth > b.bandwidth ? 1 : 0
        }), b("shaka.player.TextTrack.compare", function (a, b) {
          return a.lang < b.lang ? -1 : a.lang > b.lang ? 1 : 0
        }), b("shaka.player.VideoTrack.compare", k), b("shaka.polyfill.CustomEvent.install", l), b("shaka.polyfill.Fullscreen.install", n), r.prototype.createSession = function () {
        }, r.prototype.setServerCertificate = function () {
        }, s.prototype.getConfiguration = function () {
        }, s.prototype.createMediaKeys = function () {
        }, b("shaka.polyfill.VideoPlaybackQuality.install", t);
        var Ed = 0, Fd = 1;
        w.prototype.Qa = function () {
          return this.i < this.j.byteLength
        };
        var Gd;
        C.prototype.Qa = function () {
          return this.Ya.Qa()
        }, H.prototype.sample = function (a, b) {
          var c = Math.pow(this.ad, a);
          this.Cc = b * (1 - c) + c * this.Cc, this.vc += a
        };
        var Hd = 1, Id = 2, Jd = {
          aar: "aa",
          abk: "ab",
          afr: "af",
          aka: "ak",
          alb: "sq",
          amh: "am",
          ara: "ar",
          arg: "an",
          arm: "hy",
          asm: "as",
          ava: "av",
          ave: "ae",
          aym: "ay",
          aze: "az",
          bak: "ba",
          bam: "bm",
          baq: "eu",
          bel: "be",
          ben: "bn",
          bih: "bh",
          bis: "bi",
          bod: "bo",
          bos: "bs",
          bre: "br",
          bul: "bg",
          bur: "my",
          cat: "ca",
          ces: "cs",
          cha: "ch",
          che: "ce",
          chi: "zh",
          chu: "cu",
          chv: "cv",
          cor: "kw",
          cos: "co",
          cre: "cr",
          cym: "cy",
          cze: "cs",
          dan: "da",
          deu: "de",
          div: "dv",
          dut: "nl",
          dzo: "dz",
          ell: "el",
          eng: "en",
          epo: "eo",
          est: "et",
          eus: "eu",
          ewe: "ee",
          fao: "fo",
          fas: "fa",
          fij: "fj",
          fin: "fi",
          fra: "fr",
          fre: "fr",
          fry: "fy",
          ful: "ff",
          geo: "ka",
          ger: "de",
          gla: "gd",
          gle: "ga",
          glg: "gl",
          glv: "gv",
          gre: "el",
          grn: "gn",
          guj: "gu",
          hat: "ht",
          hau: "ha",
          heb: "he",
          her: "hz",
          hin: "hi",
          hmo: "ho",
          hrv: "hr",
          hun: "hu",
          hye: "hy",
          ibo: "ig",
          ice: "is",
          ido: "io",
          iii: "ii",
          iku: "iu",
          ile: "ie",
          ina: "ia",
          ind: "id",
          ipk: "ik",
          isl: "is",
          ita: "it",
          jav: "jv",
          jpn: "ja",
          kal: "kl",
          kan: "kn",
          kas: "ks",
          kat: "ka",
          kau: "kr",
          kaz: "kk",
          khm: "km",
          kik: "ki",
          kin: "rw",
          kir: "ky",
          kom: "kv",
          kon: "kg",
          kor: "ko",
          kua: "kj",
          kur: "ku",
          lao: "lo",
          lat: "la",
          lav: "lv",
          lim: "li",
          lin: "ln",
          lit: "lt",
          ltz: "lb",
          lub: "lu",
          lug: "lg",
          mac: "mk",
          mah: "mh",
          mal: "ml",
          mao: "mi",
          mar: "mr",
          may: "ms",
          mkd: "mk",
          mlg: "mg",
          mlt: "mt",
          mon: "mn",
          mri: "mi",
          msa: "ms",
          mya: "my",
          nau: "na",
          nav: "nv",
          nbl: "nr",
          nde: "nd",
          ndo: "ng",
          nep: "ne",
          nld: "nl",
          nno: "nn",
          nob: "nb",
          nor: "no",
          nya: "ny",
          oci: "oc",
          oji: "oj",
          ori: "or",
          orm: "om",
          oss: "os",
          pan: "pa",
          per: "fa",
          pli: "pi",
          pol: "pl",
          por: "pt",
          pus: "ps",
          que: "qu",
          roh: "rm",
          ron: "ro",
          rum: "ro",
          run: "rn",
          rus: "ru",
          sag: "sg",
          san: "sa",
          sin: "si",
          slk: "sk",
          slo: "sk",
          slv: "sl",
          sme: "se",
          smo: "sm",
          sna: "sn",
          snd: "sd",
          som: "so",
          sot: "st",
          spa: "es",
          sqi: "sq",
          srd: "sc",
          srp: "sr",
          ssw: "ss",
          sun: "su",
          swa: "sw",
          swe: "sv",
          tah: "ty",
          tam: "ta",
          tat: "tt",
          tel: "te",
          tgk: "tg",
          tgl: "tl",
          tha: "th",
          tib: "bo",
          tir: "ti",
          ton: "to",
          tsn: "tn",
          tso: "ts",
          tuk: "tk",
          tur: "tr",
          twi: "tw",
          uig: "ug",
          ukr: "uk",
          urd: "ur",
          uzb: "uz",
          ven: "ve",
          vie: "vi",
          vol: "vo",
          wel: "cy",
          wln: "wa",
          wol: "wo",
          xho: "xh",
          yid: "yi",
          yor: "yo",
          zha: "za",
          zho: "zh",
          zul: "zu"
        };
        Ad = O.prototype, Ad.push = function (a, b) {
          this.da.hasOwnProperty(a) ? this.da[a].push(b) : this.da[a] = [b]
        }, Ad.set = function (a, b) {
          this.da[a] = b
        }, Ad.has = function (a) {
          return this.da.hasOwnProperty(a)
        }, Ad.get = function (a) {
          return (a = this.da[a]) ? a.slice() : null
        }, Ad.remove = function (a, b) {
          var c = this.da[a];
          if (c)for (var d = 0; d < c.length; ++d)c[d] == b && (c.splice(d, 1), --d)
        }, Ad.keys = function () {
          var a, b = [];
          for (a in this.da)b.push(a);
          return b
        }, Ad.clear = function () {
          this.da = {}
        }, Q.prototype.destroy = function () {
          S(this), this.fb = null
        }, Q.prototype.Yb = function (a, b) {
          for (var c = this.fb.get(b) || [], d = 0; d < c.length; ++d) {
            var e = c[d];
            e.target == a && (e.Yb(), this.fb.remove(b, e))
          }
        }, T.prototype.Yb = function () {
          this.target && (this.target.removeEventListener(this.type, this.rd, !1), this.rd = this.target = null)
        }, b("shaka.util.FakeEventTarget", U), U.prototype.addEventListener = function (a, b, c) {
          c || this.Kc.push(a, b)
        }, U.prototype.removeEventListener = function (a, b, c) {
          c || this.Kc.remove(a, b)
        }, U.prototype.dispatchEvent = function (a) {
          return delete a.srcElement, delete a.target, delete a.currentTarget, Object.defineProperties(a, {
            srcElement: {value: null, writable: !0},
            target: {value: this, writable: !0},
            currentTarget: {value: null, writable: !0}
          }), V(this, a)
        }, c(W, U), b("shaka.util.EWMABandwidthEstimator", W), W.prototype.sample = function (a, b) {
          if (!(b < this.ee)) {
            a = Math.max(a, this.fe);
            var c = 8e3 * b / a, d = a / 1e3;
            this.Dc.sample(d, c), this.Gd.sample(d, c), this.dispatchEvent(J({type: "bandwidth"})), this.od = Date.now()
          }
        }, W.prototype.getBandwidth = function () {
          return this.Dc.vc < this.ge ? this.Pd : Math.min(I(this.Dc), I(this.Gd))
        }, W.prototype.getDataAge = function () {
          return (Date.now() - this.od) / 1e3
        }, W.prototype.supportsCaching = function () {
          return !1
        }, Y.prototype.append = function (a) {
          if (this.ga)throw Error("Cannot append to a running task!");
          this.La.push(a)
        }, Y.prototype.start = function () {
          if (this.ga)throw Error("Task already started!");
          this.ga = !0, this.La.unshift(function () {
          }), Z(this, void 0)
        }, Y.prototype.abort = function () {
          return this.za ? this.za : this.ga ? (this.Ma && this.Ma(), this.za = new X) : (this.ga = !0, Promise.resolve())
        }, Y.prototype.end = function () {
          this.La.splice(1)
        }, b("shaka.util.Uint8ArrayUtils.toString", aa), b("shaka.util.Uint8ArrayUtils.fromString", ba), b("shaka.util.Uint8ArrayUtils.toBase64", ca), b("shaka.util.Uint8ArrayUtils.fromBase64", da), b("shaka.util.Uint8ArrayUtils.fromHex", function (b) {
          for (var c = new Uint8Array(b.length / 2), d = 0; d < b.length; d += 2)c[d / 2] = a.parseInt(b.substr(d, 2), 16);
          return c
        }), b("shaka.util.Uint8ArrayUtils.toHex", ea), b("shaka.player.DrmSchemeInfo", ga);
        var Kd = 1;
        ga.DistinctiveIdentifier = {OPTIONAL: 0, REQUIRED: Kd};
        var Ld = 1;
        ga.PersistentState = {OPTIONAL: 0, REQUIRED: Ld}, ia.prototype.clone = function () {
          var a = new ia;
          return a.maxHeight = this.maxHeight, a.maxWidth = this.maxWidth, a.maxBandwidth = this.maxBandwidth, a.minBandwidth = this.minBandwidth, a
        }, ga.createUnencrypted = ja, ga.combine = ka, ga.prototype.key = function () {
          return JSON.stringify(this)
        }, na.prototype.createMediaKeys = function () {
          var a = new oa(this.jb);
          return Promise.resolve(a)
        }, na.prototype.getConfiguration = function () {
          return this.Od
        }, Ad = oa.prototype, Ad.createSession = function (a) {
          var b = a || "temporary";
          if ("temporary" != b && "persistent-license" != b)throw new TypeError("Session type " + a + " is unsupported on this platform.");
          return a = this.Ia || document.createElement("video"), a.src || (a.src = "about:blank"), b = new ra(a, this.Ta, b), this.vd.push(b), b
        }, Ad.setServerCertificate = function () {
          return Promise.reject(Error("setServerCertificate not supported on this platform."))
        }, Ad.Ee = function (a) {
          a = J({type: "encrypted", initDataType: "webm", initData: a.initData}), this.Ia.dispatchEvent(a)
        }, Ad.De = function (a) {
          var b = qa(this, a.sessionId);
          b && (a = J({
            type: "message",
            messageType: void 0 == b.keyStatuses.wa ? "licenserequest" : "licenserenewal",
            message: a.message
          }), b.ba && (b.ba.resolve(), b.ba = null), b.dispatchEvent(a))
        }, Ad.Be = function (a) {
          (a = qa(this, a.sessionId)) && a.ready()
        }, Ad.Ce = function (a) {
          var b = qa(this, a.sessionId);
          b && b.handleError(a)
        }, c(ra, U), Ad = ra.prototype, Ad.ready = function () {
          ta(this, "usable"), this.S && this.S.resolve(), this.S = null
        }, Ad.handleError = function (a) {
          var b = Error("EME v0.1b key error");
          b.errorCode = a.errorCode, b.errorCode.systemCode = a.systemCode, !a.sessionId && this.ba ? (b.method = "generateRequest", 45 == a.systemCode && (b.message = "Unsupported session type."), this.ba.reject(b), this.ba = null) : a.sessionId && this.S ? (b.method = "update", this.S.reject(b), this.S = null) : (b = a.systemCode, a.errorCode.code == MediaKeyError.MEDIA_KEYERR_OUTPUT ? ta(this, "output-not-allowed") : 1 == b ? ta(this, "expired") : ta(this, "internal-error"))
        }, Ad.Zc = function (a, b) {
          if (this.S)this.S.then(this.Zc.bind(this, a, b))["catch"](this.Zc.bind(this, a, b)); else {
            this.S = a;
            var c, d;
            "webkit-org.w3.clearkey" == this.Ta ? (c = aa(new Uint8Array(b)), d = JSON.parse(c), c = d.keys[0].kty, ("A128KW" != d.keys[0].alg || "oct" != c) && (this.S.reject(Error("Response is not a valid JSON Web Key Set.")), this.S = null), c = da(d.keys[0].k), d = da(d.keys[0].kid)) : (c = new Uint8Array(b), d = null);
            try {
              this.Ia.webkitAddKey(this.Ta, c, d, this.sessionId)
            } catch (e) {
              this.S.reject(e), this.S = null
            }
          }
        }, Ad.generateRequest = function (a, b) {
          return sa(this, b, null)
        }, Ad.load = function (a) {
          return "persistent-license" == this.wc ? sa(this, null, a) : Promise.reject(Error("Not a persistent session."))
        }, Ad.update = function (a) {
          var b = new X;
          return this.Zc(b, a), b
        }, Ad.close = function () {
          if ("persistent-license" != this.wc) {
            if (!this.sessionId)return this.closed.reject(Error("The session is not callable.")), this.closed;
            this.Ia.webkitCancelKeyRequest(this.Ta, this.sessionId)
          }
          return this.closed.resolve(), this.closed
        }, Ad.remove = function () {
          return "persistent-license" != this.wc ? Promise.reject(Error("Not a persistent session.")) : this.close()
        }, ua.prototype.next = function () {
          return this.md >= this.Kd.length ? {value: void 0, done: !0} : {value: this.Kd[this.md++], done: !1}
        };
        var Md;
        Ad = va.prototype, Ad.forEach = function (a) {
          this.wa && a(this.wa)
        }, Ad.get = function (a) {
          return this.has(a) ? this.wa : void 0
        }, Ad.has = function (a) {
          var b = Md;
          return this.wa && fa(new Uint8Array(a), b) ? !0 : !1
        }, Ad.keys = function () {
          var a = Md, b = [];
          return this.wa && b.push(a), new ua(b)
        }, Ad.values = function () {
          var a = [];
          return this.wa && a.push(this.wa), new ua(a)
        }, b("shaka.polyfill.MediaKeys.install", wa), b("shaka.polyfill.installAll", function () {
          l(), n(), wa(), t()
        });
        var Nd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
        Ad = ya.prototype, Ad.Ja = "", Ad.cb = "", Ad.ra = "", Ad.ub = null, Ad.ja = "", Ad.Pa = "", Ad.toString = function () {
          var a = [], b = this.Ja;
          if (b && a.push(Da(b, Od, !0), ":"), b = this.ra) {
            a.push("//");
            var c = this.cb;
            c && a.push(Da(c, Od, !0), "@"), a.push(encodeURIComponent(b).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), b = this.ub, null != b && a.push(":", String(b))
          }
          return (b = this.ja) && (this.ra && "/" != b.charAt(0) && a.push("/"), a.push(Da(b, "/" == b.charAt(0) ? Qd : Pd, !0))), (b = this.Xa.toString()) && a.push("?", b), (b = this.Pa) && a.push("#", Da(b, Sd)), a.join("")
        }, Ad.resolve = function (a) {
          var b = this.clone(), c = !!a.Ja;
          c ? za(b, a.Ja) : c = !!a.cb, c ? b.cb = a.cb : c = !!a.ra, c ? b.ra = a.ra : c = null != a.ub;
          var d = a.ja;
          if (c)Aa(b, a.ub); else if (c = !!a.ja) {
            if ("/" != d.charAt(0))if (this.ra && !this.ja)d = "/" + d; else {
              var e = b.ja.lastIndexOf("/");
              -1 != e && (d = b.ja.substr(0, e + 1) + d)
            }
            if (".." == d || "." == d)d = ""; else if (-1 != d.indexOf("./") || -1 != d.indexOf("/.")) {
              for (var e = 0 == d.lastIndexOf("/", 0), d = d.split("/"), f = [], g = 0; g < d.length;) {
                var h = d[g++];
                "." == h ? e && g == d.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), e && g == d.length && f.push("")) : (f.push(h), e = !0)
              }
              d = f.join("/")
            }
          }
          return c ? b.ja = d : c = "" !== a.Xa.toString(), c ? Ba(b, a.Xa.clone()) : c = !!a.Pa, c && (b.Pa = a.Pa), b
        }, Ad.clone = function () {
          return new ya(this)
        };
        var Od = /[#\/\?@]/g, Pd = /[\#\?:]/g, Qd = /[\#\?]/g, Rd = /[\#\?@]/g, Sd = /#/g;
        Ad = Fa.prototype, Ad.U = null, Ad.dc = null, Ad.add = function (a, b) {
          if (!this.U && (this.U = {}, this.dc = 0, this.Ea))for (var c = this.Ea.split("&"), d = 0; d < c.length; d++) {
            var e = c[d].indexOf("="), f = null, g = null;
            e >= 0 ? (f = c[d].substring(0, e), g = c[d].substring(e + 1)) : f = c[d], f = decodeURIComponent(f.replace(/\+/g, " ")), g = g || "", this.add(f, decodeURIComponent(g.replace(/\+/g, " ")))
          }
          return this.Ea = null, (c = this.U.hasOwnProperty(a) && this.U[a]) || (this.U[a] = c = []), c.push(b), this.dc++, this
        }, Ad.toString = function () {
          if (this.Ea)return this.Ea;
          if (!this.U)return "";
          var a, b = [];
          for (a in this.U)for (var c = encodeURIComponent(a), d = this.U[a], e = 0; e < d.length; e++) {
            var f = c;
            "" !== d[e] && (f += "=" + encodeURIComponent(d[e])), b.push(f)
          }
          return this.Ea = b.join("&")
        }, Ad.clone = function () {
          var a = new Fa;
          if (a.Ea = this.Ea, this.U) {
            var b, c = {};
            for (b in this.U)c[b] = this.U[b].concat();
            a.U = c, a.dc = this.dc
          }
          return a
        }, Qa.prototype.clone = function () {
          var a = new Qa;
          return a.e = this.e ? new ya(this.e) : null, a.o = this.o, a.w = this.w, a.Ga = db(this.Ga), a.Za = db(this.Za), a.M = db(this.M), a
        }, Ra.prototype.clone = function () {
          var a = new Ra;
          return a.url = this.url ? new ya(this.url) : null, a.Y = db(this.Y), a
        }, Sa.prototype.clone = function () {
          var a = new Sa;
          return a.url = this.url ? new ya(this.url) : null, a.Y = db(this.Y), a
        }, Ta.prototype.clone = function () {
          var a = new Ta;
          return a.e = this.e ? new ya(this.e) : null, a.o = this.o, a.w = this.w, a.q = this.q, a.fa = this.fa, a.M = db(this.M), a.Ka = this.Ka.map(function (a) {
            return a.clone()
          }), a
        }, Ua.prototype.clone = function () {
          var a = new Ua;
          return a.Ob = this.Ob ? new ya(this.Ob) : null, a.ob = db(this.ob), a
        }, Va.prototype.clone = function () {
          var a = new Va;
          return a.o = this.o, a.w = this.w, a.q = this.q, a.fa = this.fa, a.pb = this.pb, a.Ha = this.Ha, a.ib = this.ib, a.xa = db(this.xa), a
        }, Wa.prototype.clone = function () {
          var a = new Wa;
          return a.uc = this.uc.map(function (a) {
            return a.clone()
          }), a
        }, Xa.prototype.clone = function () {
          var a = new Xa;
          return a.startTime = this.startTime, a.duration = this.duration, a.repeat = this.repeat, a
        }, Ya.prototype.clone = function () {
          return new Ya(this.Bb, this.end)
        }, Ga.TAG_NAME = "MPD", Ha.TAG_NAME = "Period", Ia.TAG_NAME = "AdaptationSet", Ja.TAG_NAME = "Role", Ka.TAG_NAME = "ContentComponent", La.TAG_NAME = "Representation", Ma.TAG_NAME = "ContentProtection", Na.TAG_NAME = "cenc:pssh", Oa.TAG_NAME = "BaseURL", Pa.TAG_NAME = "Location", Qa.TAG_NAME = "SegmentBase", Ra.TAG_NAME = "RepresentationIndex", Sa.TAG_NAME = "Initialization", Ta.TAG_NAME = "SegmentList", Ua.TAG_NAME = "SegmentURL", Va.TAG_NAME = "SegmentTemplate", Wa.TAG_NAME = "SegmentTimeline", Xa.TAG_NAME = "S", Ga.prototype.parse = function (a, b) {
          this.url = new ya(a.e), this.id = eb(b, "id", kb), this.type = eb(b, "type", kb) || "static", this.ua = eb(b, "mediaPresentationDuration", gb), this.F = eb(b, "minBufferTime", gb, this.F), this.Mc = eb(b, "minimumUpdatePeriod", gb, this.Mc), this.pa = eb(b, "availabilityStartTime", fb, this.pa), this.bb = eb(b, "timeShiftBufferDepth", gb, this.bb), this.Vc = eb(b, "suggestedPresentationDelay", gb, this.Vc);
          var c = _a(this, b, Oa);
          this.e = Za(a.e, c ? c.url : null), (c = _a(this, b, Pa)) && (this.Yc = Za(a.e, c.url)), this.v = bb(this, b, Ha)
        }, Ha.prototype.parse = function (a, b) {
          this.id = eb(b, "id", kb), this.start = eb(b, "start", gb), this.duration = eb(b, "duration", gb);
          var c = _a(this, b, Oa);
          this.e = Za(a.e, c ? c.url : null), this.H = _a(this, b, Qa), this.A = _a(this, b, Ta), this.p = _a(this, b, Va), this.Aa = bb(this, b, Ia)
        }, Ia.prototype.parse = function (a, b) {
          var c = _a(this, b, Ka) || {}, d = _a(this, b, Ja);
          this.id = eb(b, "id", kb), this.lang = eb(b, "lang", kb, c.lang), this.contentType = eb(b, "contentType", kb, c.contentType), this.width = eb(b, "width", ib), this.height = eb(b, "height", ib), this.n = eb(b, "mimeType", kb), this.aa = eb(b, "codecs", kb), this.Kb = d && "main" == d.value, this.lang && (this.lang = M(this.lang)), c = _a(this, b, Oa), this.e = Za(a.e, c ? c.url : null), this.qa = bb(this, b, Ma), !this.contentType && this.n && (this.contentType = this.n.split("/")[0]), this.H = a.H ? $a(this, b, a.H) : _a(this, b, Qa), this.A = a.A ? $a(this, b, a.A) : _a(this, b, Ta), this.p = a.p ? $a(this, b, a.p) : _a(this, b, Va), this.Z = bb(this, b, La), !this.n && this.Z.length && (this.n = this.Z[0].n, !this.contentType && this.n && (this.contentType = this.n.split("/")[0]))
        }, Ja.prototype.parse = function (a, b) {
          this.value = eb(b, "value", kb)
        }, Ka.prototype.parse = function (a, b) {
          this.id = eb(b, "id", kb), this.lang = eb(b, "lang", kb), this.contentType = eb(b, "contentType", kb), this.lang && (this.lang = M(this.lang))
        }, La.prototype.parse = function (a, b) {
          this.id = eb(b, "id", kb), this.bandwidth = eb(b, "bandwidth", ib), this.width = eb(b, "width", ib, a.width), this.height = eb(b, "height", ib, a.height), this.n = eb(b, "mimeType", kb, a.n), this.aa = eb(b, "codecs", kb, a.aa), this.lang = a.lang;
          var c = _a(this, b, Oa);
          this.e = Za(a.e, c ? c.url : null), this.qa = bb(this, b, Ma), this.H = a.H ? $a(this, b, a.H) : _a(this, b, Qa), this.A = a.A ? $a(this, b, a.A) : _a(this, b, Ta), this.p = a.p ? $a(this, b, a.p) : _a(this, b, Va), 0 == this.qa.length && (this.qa = a.qa)
        }, Ma.prototype.parse = function (a, b) {
          this.schemeIdUri = eb(b, "schemeIdUri", kb), this.value = eb(b, "value", kb), this.pssh = _a(this, b, Na), this.children = Array.prototype.slice.call(b.childNodes)
        }, Na.prototype.parse = function (a, b) {
          var c = cb(b);
          if (c) {
            this.psshBox = da(c);
            try {
              this.parsedPssh = new xa(this.psshBox)
            } catch (d) {
              if (!(d instanceof RangeError))throw d
            }
          }
        }, Oa.prototype.parse = function (a, b) {
          this.url = cb(b)
        }, Pa.prototype.parse = function (a, b) {
          this.url = cb(b)
        }, Qa.prototype.parse = function (a, b) {
          this.e = a.e || this.e, this.o = eb(b, "timescale", ib, this.o), this.w = eb(b, "presentationTimeOffset", jb, this.w), this.Ga = eb(b, "indexRange", hb, this.Ga), this.Za = _a(this, b, Ra) || this.Za, this.M = _a(this, b, Sa) || this.M
        }, Ra.prototype.parse = function (a, b) {
          var c = eb(b, "sourceURL", kb);
          this.url = Za(a.e, c), this.Y = eb(b, "range", hb, db(a.Ga))
        }, Sa.prototype.parse = function (a, b) {
          var c = eb(b, "sourceURL", kb);
          this.url = Za(a.e, c), this.Y = eb(b, "range", hb)
        }, Ta.prototype.parse = function (a, b) {
          this.e = a.e || this.e, this.o = eb(b, "timescale", ib, this.o), this.w = eb(b, "presentationTimeOffset", jb, this.w), this.q = eb(b, "duration", ib, this.q), this.fa = eb(b, "startNumber", jb, this.fa), this.M = _a(this, b, Sa) || this.M, this.Ka = bb(this, b, Ua) || this.Ka
        }, Ua.prototype.parse = function (a, b) {
          var c = eb(b, "media", kb);
          this.Ob = Za(a.e, c), this.ob = eb(b, "mediaRange", hb)
        }, Va.prototype.parse = function (a, b) {
          this.o = eb(b, "timescale", ib, this.o), this.w = eb(b, "presentationTimeOffset", jb, this.w), this.q = eb(b, "duration", ib, this.q), this.fa = eb(b, "startNumber", jb, this.fa), this.pb = eb(b, "media", kb, this.pb), this.Ha = eb(b, "index", kb, this.Ha), this.ib = eb(b, "initialization", kb, this.ib), this.xa = _a(this, b, Wa) || this.xa
        }, Wa.prototype.parse = function (a, b) {
          this.uc = bb(this, b, Xa)
        }, Xa.prototype.parse = function (a, b) {
          this.startTime = eb(b, "t", jb), this.duration = eb(b, "d", jb), this.repeat = eb(b, "r", jb)
        }, sb.prototype.parse = function (a, b, c) {
          var d = null;
          try {
            d = this.Rc(a, b, c)
          } catch (e) {
            if (!(e instanceof RangeError))throw e
          }
          return d
        }, sb.prototype.Rc = function (a, b, c) {
          var d = [];
          a = new w(a, 0);
          var e = y(a);
          if (1936286840 != y(a))return null;
          1 == e && (e = z(a));
          var f = x(a);
          B(a, 3), B(a, 4);
          var g = y(a);
          if (0 == g)return null;
          var h, i;
          for (0 == f ? (h = y(a), i = y(a)) : (h = z(a), i = z(a)), B(a, 2), f = a.j.getUint16(a.i, a.Lc), a.i += 2, b = b + e + i, e = 0; f > e; e++) {
            var j = y(a);
            i = (2147483648 & j) >>> 31;
            var j = 2147483647 & j, k = y(a);
            if (y(a), 1 == i)return null;
            d.push(new ob(h / g, (h + k) / g, b, b + j - 1, c)), h += k, b += j
          }
          return d
        }, tb.prototype.destroy = function () {
          this.g = null
        }, Ad = tb.prototype, Ad.length = function () {
          return this.g.length
        }, Ad.first = function () {
          if (0 == this.g.length)throw new RangeError("SegmentIndex: There is no first SegmentReference.");
          return this.g[0]
        }, Ad.get = function (a) {
          if (0 > a || a >= this.g.length)throw new RangeError("SegmentIndex: The specified index is out of range.");
          return this.g[a]
        }, Ad.find = function (a) {
          return a = qb(this.g, a), a >= 0 ? this.g[a] : null
        }, Ad.Jc = function (a) {
          return vb(this, a), !0
        }, Ad.Ba = function (a) {
          var b = a - this.na;
          return 0 == b ? 0 : (this.g = rb(this.g, b), this.na = a, b)
        }, Ad.Hc = function () {
          return 0 < this.length() ? {start: this.first().startTime, end: ub(this).endTime} : {start: 0, end: 0}
        }, c(wb, tb), wb.prototype.destroy = function () {
          this.Ad = this.Ua = null, tb.prototype.destroy.call(this)
        }, wb.prototype.find = function (a) {
          return zb(this, v() / 1e3), tb.prototype.find.call(this, a)
        }, wb.prototype.Jc = function (a) {
          return vb(this, a), null == this.R && xb(this), !0
        }, wb.prototype.Ba = function (a) {
          return a = tb.prototype.Ba.call(this, a), null != this.R && (this.tb += a, this.ka += a, this.tb > this.R && (this.R += a)), a
        }, wb.prototype.Hc = function () {
          return yb(this, v() / 1e3)
        }, c(Ab, wb), Ab.prototype.destroy = function () {
          this.G = null, wb.prototype.destroy.call(this)
        }, Ab.prototype.find = function (a) {
          var b = v() / 1e3;
          return Bb(this, b), zb(this, b), tb.prototype.find.call(this, a)
        }, Ab.prototype.Jc = function (a) {
          return null == this.V && a instanceof Ab && null != a.V ? (this.V = a.V, this.sb = a.sb, this.rb = a.rb, vb(this, a), Bb(this, v() / 1e3), xb(this), !0) : !1
        }, Ab.prototype.Ba = function (a) {
          return a = wb.prototype.Ba.call(this, a), null != this.V && (this.V += a, this.sb += a), a
        }, Ab.prototype.Hc = function () {
          var a = v() / 1e3;
          return Bb(this, a), yb(this, a)
        }, Cb.prototype.destroy = function () {
          this.G = this.X = this.Q = null, this.b && (this.b.destroy(), this.b = null)
        }, Cb.prototype.create = function () {
          if (this.b)return Promise.resolve(this.b);
          if ("dynamic" == this.Q.type)try {
            this.b = new Ab(this.Q, this.X, this.G, this.Mb)
          } catch (a) {
            return Promise.reject(a)
          } else {
            var b = this.G.p, b = lb(this.G, 1, Math.ceil(this.X.duration / (b.q / b.o)));
            if (!b)return b = Error("Failed to generate SegmentReferences"), b.type = "stream", Promise.reject(b);
            this.b = new tb(b)
          }
          return Promise.resolve(this.b)
        }, Db.prototype.destroy = function () {
          this.G = this.X = this.Q = null, this.b && (this.b.destroy(), this.b = null)
        }, Db.prototype.create = function () {
          if (this.b)return Promise.resolve(this.b);
          for (var a = this.G.A, b = 0, c = [], d = 0; d < a.Ka.length; ++d) {
            var e = a.Ka[d], b = 0 == d ? 0 : b, f = null, g = null, h = b / a.o;
            a.q ? (f = b + a.q, g = f / a.o) : (g = h + this.X.duration, f = g * a.o);
            var b = f, f = 0, i = null;
            e.ob && (f = e.ob.Bb, i = e.ob.end), c.push(new ob(h, g, f, i, new ya(e.Ob)))
          }
          return this.b = new tb(c), Promise.resolve(this.b)
        }, Eb.prototype.destroy = function () {
          this.G = this.X = this.Q = null, this.b && (this.b.destroy(), this.b = null)
        }, Eb.prototype.create = function () {
          if (this.b)return Promise.resolve(this.b);
          for (var a = this.G.p, b = a.xa.uc, c = 0, d = [], e = 0; e < b.length && b[e].duration; ++e)for (var f = null != b[e].startTime ? b[e].startTime : c, g = b[e].repeat || 0, h = 0; g >= h; ++h) {
            var i = f + b[e].duration;
            0 < d.length && f != c && (d[d.length - 1].end = f), d.push({start: f, end: i}), c = f = i
          }
          for (b = [], c = 0; c < d.length; ++c) {
            if (g = d[c].start, e = g / a.o, f = d[c].end / a.o, g = mb(this.G, c + a.fa, g), !g)return a = Error("Failed to generate media URL."), a.type = "dash", Promise.reject(a);
            b.push(new ob(e, f, 0, null, new ya(g)))
          }
          return this.b = "dynamic" == this.Q.type ? new wb(b, this.Q, this.X, this.Mb) : new tb(b), Promise.resolve(this.b)
        }, Fb.prototype.destroy = function () {
          this.b && (this.b.destroy(), this.b = null)
        }, Fb.prototype.create = function () {
          if (this.b)return Promise.resolve(this.b);
          var a = new ob(0, null, 0, null, this.Ue);
          return this.b = new tb([a]), Promise.resolve(this.b)
        }, Gb.prototype.parse = function (a, b, c) {
          var d = null;
          try {
            d = this.Rc(a, b, c)
          } catch (e) {
            if (!(e instanceof RangeError))throw e
          }
          return d
        }, Gb.prototype.Rc = function (a, b, c) {
          if (b = new C(b), 440786851 != D(b).id)b = null; else {
            var d = D(b);
            if (408125543 != d.id)b = null; else {
              b = d.j.byteOffset;
              for (var d = new C(d.j), e = null; d.Qa();) {
                var f = D(d);
                if (357149030 == f.id) {
                  e = f;
                  break
                }
              }
              if (e) {
                for (d = new C(e.j), e = 1e6; d.Qa();)if (f = D(d), 2807729 == f.id) {
                  e = G(f);
                  break
                }
                d = e / 1e9
              } else d = null;
              b = d ? {Ke: b, Ve: d} : null
            }
          }
          if (!b)return null;
          if (e = D(new C(a)), 475249515 != e.id)return null;
          a = b.Ke, b = b.Ve;
          for (var d = [], e = new C(e.j), g = f = -1; e.Qa();) {
            var h = D(e);
            if (187 == h.id) {
              var i;
              if (i = new C(h.j), h = D(i), 179 != h.id)i = null; else if (h = G(h), i = D(i), 183 != i.id)i = null; else {
                i = new C(i.j);
                for (var j = 0; i.Qa();) {
                  var k = D(i);
                  if (241 == k.id) {
                    j = G(k);
                    break
                  }
                }
                i = {Xe: h, Ge: j}
              }
              i && (h = b * i.Xe, i = a + i.Ge, f >= 0 && d.push(new ob(f, h, g, i - 1, c)), f = h, g = i)
            }
          }
          return f >= 0 && d.push(new ob(f, null, g, null, c)), d
        }, Ad = Hb.prototype, Ad.pc = function () {
          if (this.m)return this.B;
          if (0 == this.url.lastIndexOf("data:", 0)) {
            var b = this.url.split(":")[1].split(";").pop().split(","), c = b.pop(), c = "base64" == b.pop() ? a.atob(c.replace(/-/g, "+").replace(/_/g, "/")) : a.decodeURIComponent(c);
            return "arraybuffer" == this.h.responseType && (c = ba(c).buffer), b = JSON.parse(JSON.stringify(new XMLHttpRequest)), b.response = c, b.responseText = c.toString(), c = this.B, c.resolve(b), Jb(this), c
          }
          if (0 == this.url.lastIndexOf("idb:", 0))return Lb(this);
          this.Ac++, this.Hd = Date.now(), this.Sb || (this.Sb = this.h.cd), this.m = new XMLHttpRequest, b = this.url, this.L && !this.L.supportsCaching() && (b = new ya(b), b.Xa.add("_", Date.now()), b = b.toString()), this.m.open(this.h.method, b, !0), this.m.responseType = this.h.responseType, this.m.timeout = this.h.kc, this.m.withCredentials = this.h.withCredentials, this.m.onload = this.le.bind(this), this.h.Id && (this.m.onreadystatechange = this.pe.bind(this)), this.m.onerror = this.Pc.bind(this),
            this.m.ontimeout = this.we.bind(this);
          for (c in this.h.jc)this.m.setRequestHeader(c, this.h.jc[c]);
          return this.m.send(this.h.body), this.B
        }, Ad.abort = function () {
          if (this.m && this.m.readyState != XMLHttpRequest.DONE) {
            this.m.abort();
            var a = Mb(this, "Request aborted.", "aborted");
            this.B.reject(a), Jb(this)
          }
        }, Ad.le = function (a) {
          this.L && this.L.sample(Date.now() - this.Hd, a.loaded), 200 <= this.m.status && 299 >= this.m.status ? (this.B.resolve(this.m), Jb(this)) : this.Ac < this.h.Nb ? Nb(this) : (a = Mb(this, "HTTP error.", "net"), this.B.reject(a), Jb(this))
        }, Ad.pe = function () {
          if (this.m.readyState == XMLHttpRequest.HEADERS_RECEIVED) {
            var a = Date.parse(this.m.getResponseHeader("Date"));
            a && (Ed = a - Date.now())
          }
        }, Ad.Pc = function () {
          var a = Mb(this, "Network failure.", "net");
          this.B.reject(a), Jb(this)
        }, Ad.we = function () {
          if (this.Ac < this.h.Nb)Nb(this); else {
            var a = Mb(this, "Request timed out.", "net");
            this.B.reject(a), Jb(this)
          }
        }, c(Ob, Hb);
        var Td = 0;
        Ob.prototype.send = function () {
          var a = this.url;
          return this.pc().then(function (b) {
            if (b = b.responseText, b = (new DOMParser).parseFromString(b, "text/xml")) {
              var c = {e: new ya(a)};
              b = _a(c, b, Ga)
            } else b = null;
            return b ? Promise.resolve(b) : (b = Error("MPD parse failure."), b.type = "mpd", Promise.reject(b))
          })
        }, c(Pb, Hb);
        var Ud = 0;
        Pb.prototype.send = function () {
          return this.pc().then(function (a) {
            return Promise.resolve(new Uint8Array(a.response))
          })
        }, c(Qb, Hb);
        var Vd = 0;
        Qb.prototype.send = function () {
          return this.pc().then(_(this, function (a) {
            return Promise.resolve(a.response)
          }))
        }, Rb.prototype.Gb = function () {
          if (this.vb)return this.vb;
          this.$a = new Qb(this.url.toString(), this.ab, this.Fb);
          var a = this.$a.send().then(_(this, function (a) {
            return this.$a = null, Promise.resolve(a)
          }));
          return this.vb = a = a["catch"](_(this, function (a) {
            return this.vb = this.$a = null, Promise.reject(a)
          }))
        }, Tb.prototype.destroy = function () {
          this.X = this.Q = null, Sb(this.hb), this.hb = null, this.gc && (Sb(this.gc), this.gc = null), this.b && (this.b.destroy(), this.b = null), this.B = null
        }, Tb.prototype.create = function () {
          if (this.B)return this.B;
          var a = [this.hb.Gb()];
          return "webm" == this.cc && a.push(this.gc.Gb()), this.B = Promise.all(a).then(_(this, function (a) {
            var b = a[0];
            a = a[1] || null;
            var c = null;
            return "mp4" == this.cc ? (c = new sb, c = c.parse(new DataView(b), this.hb.ab, this.hb.url)) : "webm" == this.cc && (c = new Gb, c = c.parse(new DataView(b), new DataView(a), this.hb.url)), c ? (b = "dynamic" == this.Q.type ? new wb(c, this.Q, this.X, this.Mb) : new tb(c), Promise.resolve(b)) : (b = Error("Failed to parse segment references from", this.cc, "container."), b.type = "stream", Promise.reject(b))
          }))
        }, Ub.prototype.destroy = function () {
          this.Pb && (Sb(this.Pb), this.Pb = null)
        }, Ub.prototype.create = function () {
          return this.Pb ? this.Pb.Gb() : Promise.resolve(null)
        };
        var Wd = 1 / 60;
        Vb.prototype.destroy = function () {
          this.abort(), this.ca = this.C = this.Va = null, this.l.destroy(), this.sd = this.la = this.l = null
        }, Ad = Vb.prototype, Ad.Gb = function (a, b) {
          if (this.C) {
            var c = Error("Cannot fetch: previous operation not complete.");
            return c.type = "stream", Promise.reject(c)
          }
          this.C = new Y, b && this.C.append(function () {
            return [Yb(this, b), this.yc.bind(this)]
          }.bind(this)), this.C.append(function () {
            var b = new Qb(a.url.toString(), a.ab, a.Fb, 3, 1e3 * (a.endTime ? a.endTime - a.startTime : 1));
            return b.L = this.P, [b.send(), b.abort.bind(b)]
          }.bind(this)), this.C.append(function (a) {
            return this.P.getBandwidth(), [Yb(this, a), this.yc.bind(this)]
          }.bind(this));
          var d = 0 == this.la.buffered.length && 0 == this.ca.length, e = null;
          return this.C.append(function () {
            if (d) {
              var b = a.startTime;
              e = this.la.buffered.start(0) - b
            }
            b = qb(this.ca, a.startTime), b >= 0 ? this.ca.splice(b + 1, 0, a) : this.ca.push(a)
          }.bind(this)), Xb(this).then(function () {
            return Promise.resolve(e)
          }.bind(this))
        }, Ad.clear = function () {
          if (this.C) {
            var a = Error("Cannot clear: previous operation not complete.");
            return a.type = "stream", Promise.reject(a)
          }
          return this.C = new Y, this.C.append(function () {
            var a;
            a:if (0 == this.la.buffered.length)a = Promise.resolve(); else {
              try {
                this.la.remove(0, Number.POSITIVE_INFINITY)
              } catch (b) {
                a = Promise.reject(b);
                break a
              }
              this.ca = [], a = this.Va = new X
            }
            return [a, this.yc.bind(this)]
          }.bind(this)), Xb(this)
        }, Ad.abort = function () {
          return this.C ? this.C.abort() : Promise.resolve()
        }, Ad.Ba = function (a) {
          var b = a - this.ya;
          0 != b && (this.ca = rb(this.ca, b), this.ya = a)
        }, Ad.yc = function () {
          "open" == this.sd.readyState && this.la.abort()
        }, Ad.te = function () {
          this.Va.resolve(), this.Va = null
        };
        var Xd = 0;
        Zb.prototype.destroy = function () {
          this.N && (this.N.destroy(), this.N = null), this.I && (this.I.destroy(), this.I = null)
        };
        var Yd = 0;
        _b.prototype.destroy = function () {
          for (var a = 0; a < this.f.length; ++a)this.f[a].destroy();
          this.Na = this.f = null
        }, _b.prototype.Fc = function () {
          for (var a = [], b = 0; b < this.Na.length; ++b) {
            var c = new cc;
            c.id = this.K, c.T = this.Na[b], c.contentType = this.contentType, c.Fa = this.f.length ? $b(this.f[0]) : "", a.push(c)
          }
          return a
        }, ac.prototype.Fc = function () {
          for (var a = [], b = 0; b < this.u.length; ++b)a.push.apply(a, this.u[b].Fc());
          return a
        }, ac.prototype.destroy = function () {
          for (var a = 0; a < this.u.length; ++a)this.u[a].destroy();
          this.u = null
        }, bc.prototype.destroy = function () {
          for (var a = 0; a < this.t.length; ++a)this.t[a].destroy();
          this.t = null
        }, dc.prototype.Wa = function (a) {
          for (var b = v() / 1e3, c = 0; c < a.v.length; ++c)for (var d = a.v[c], e = 0; e < d.Aa.length; ++e) {
            var f = d.Aa[e];
            if ("text" != f.contentType)for (var g = 0; g < f.Z.length; ++g) {
              var h = f.Z[g], i = 0, i = i + (h.H ? 1 : 0), i = i + (h.A ? 1 : 0), i = i + (h.p ? 1 : 0);
              0 == i ? (f.Z.splice(g, 1), --g) : 1 != i && (h.H ? (h.A = null, h.p = null) : h.A && (h.p = null))
            }
          }
          for (ec(a), c = 0; c < a.v.length; ++c)for (d = a.v[c], e = 0; e < d.Aa.length; ++e) {
            for (g = f = d.Aa[e], h = null, i = 0; i < g.Z.length; ++i) {
              var j = g.Z[i].n || "";
              h ? j != h && (g.Z.splice(i, 1), --i) : h = j
            }
            0 == f.Z.length && (d.Aa.splice(e, 1), --e)
          }
          for ("dynamic" == a.type && null == a.pa && (a.pa = b), c = new bc, "dynamic" == a.type && (c.ia = !0, c.zb = a.Mc, c.Zb = new ya(a.Yc ? a.Yc : a.url)), c.F = a.F || 5, d = 0; d < a.v.length && (e = a.v[d], null != e.start); ++d) {
            for (f = new ac, f.id = e.id, f.start = e.start || 0, f.duration = e.duration, g = 0; g < e.Aa.length; ++g) {
              for (h = e.Aa[g], i = new _b, i.id = h.id, i.lang = h.lang || "", i.contentType = h.contentType || "", i.Kb = h.Kb, j = 0; j < h.Z.length; ++j) {
                var k = h.Z[j], l = i.Na.slice(0), m = k, n = l, o = [];
                if (0 == m.qa.length)o.push(ja()); else if (this.kb)for (var p = 0; p < m.qa.length; ++p) {
                  var q = this.kb(m.qa[p]);
                  q && o.push(q)
                }
                if (0 == n.length)Array.prototype.push.apply(n, o); else for (m = 0; m < n.length; ++m) {
                  for (p = !1, q = 0; q < o.length; ++q)if (n[m].key() == o[q].key()) {
                    p = !0;
                    break
                  }
                  p || (n.splice(m, 1), --m)
                }
                if (!(0 == l.length && 0 < i.Na.length)) {
                  if (o = a, n = e, m = b, k.e) {
                    var p = null, q = 1, r = 0;
                    if (k.H)p = k.n.split("/")[1], "mp4" != p && "webm" != p ? p = null : (q = k.H, ("webm" != p || q.M) && (q.Ga || q.Za && q.Za.Y) ? (r = q.Za, r || (r = new Ra, r.url = new ya(k.e), r.Y = q.Ga ? q.Ga.clone() : null), r = gc(r), q = q.M ? gc(q.M) : null, n = new Tb(o, n, p, r, q, m), o = new Ub(q), m = new Zb, m.N = n, m.I = o, p = m) : p = null), q = k.H.o, r = k.H.w; else if (k.A)m = k.A, !m.q && 1 < m.Ka.length ? p = null : m.q || n.duration || 1 != m.Ka.length ? (m = m.M ? gc(m.M) : null, n = new Db(o, n, k), o = new Ub(m), m = new Zb, m.N = n, m.I = o, p = m) : p = null, q = k.A.o, r = k.A.w; else if (k.p) {
                      a:if (p = k.p, q = p, r = 0, r += q.Ha ? 1 : 0, r += q.xa ? 1 : 0, r += q.q ? 1 : 0, 0 == r ? q = !1 : (1 != r && (q.Ha ? (q.xa = null, q.q = null) : q.xa && (q.q = null)), q = !0), q) {
                        if (q = null, p.ib && (q = (p = k.p.ib) ? fc(k, p, Sa) : null, !q)) {
                          p = null;
                          break a
                        }
                        p = q ? gc(q) : null;
                        var s = n, q = k, r = m, n = q.p;
                        if (n.Ha)if (n = o, o = s, m = q, q = r, r = p, s = m.n.split("/")[1], "mp4" != s && "webm" != s || "webm" == s && !r || !mb(m, 1, 0))n = null; else {
                          var t = void 0;
                          (t = (t = m.p.Ha) ? fc(m, t, Ra) : null) ? (m = gc(t), n = new Tb(n, o, s, m, r, q)) : n = null
                        } else n = n.pb ? n.xa ? new Eb(o, s, q, r) : n.q ? "dynamic" != o.type && null == s.duration ? null : new Cb(o, s, q, r) : void 0 : null;
                        n ? (o = new Ub(p), m = new Zb, m.N = n, m.I = o, p = m) : p = null
                      } else p = null;
                      q = k.p.o, r = k.p.w
                    } else"text" == k.n.split("/")[0] && (p = new Zb, p.N = new Fb(new ya(k.e)));
                    p ? (p.id = k.id, r && (p.timestampOffset = -1 * r / q), p.bandwidth = k.bandwidth, p.width = k.width, p.height = k.height, p.n = k.n || "", p.aa = k.aa || "", k = p) : k = null
                  } else k = null;
                  k && (i.f.push(k), i.Na = l)
                }
              }
              f.u.push(i)
            }
            c.t.push(f)
          }
          return c
        }, c(hc, U), hc.prototype.destroy = function () {
          this.parent = null;
          for (var a = 0; a < this.xb.length; ++a)this.xb[a].close()["catch"](function () {
          });
          this.xb = [], this.Qb = this.D = this.nb = null, this.l.destroy(), this.a = this.c = this.l = null
        }, Ad = hc.prototype, Ad.Nd = function (a, b, c) {
          for (var d = c.keySystem, e = c.getConfiguration(), f = ["audio", "video"], g = 0; g < f.length; ++g) {
            var h = f[g];
            if (!b.has(h)) {
              var i = e[h + "Capabilities"];
              if (i && i.length) {
                for (var i = i[0], j = [], k = {}, l = 0; l < a.length; ++l) {
                  var m = a[l];
                  m.T.keySystem != d || m.Fa != i.contentType || m.id in k || (j.push(m), k[m.id] = !0, this.D ? ka(this.D, m.T) : this.D = m.T)
                }
                b.set(h, j)
              }
            }
          }
          return this.c.Tc(b), c.createMediaKeys()
        }, Ad.Se = function (a) {
          return this.nb = a, this.a.setMediaKeys(this.nb).then(_(this, function () {
            return this.D.Dd ? this.nb.setServerCertificate(this.D.Dd) : Promise.resolve()
          })).then(_(this, function () {
            if (0 < this.c.fc().length)lc(this); else {
              for (var a = 0; a < this.D.Sa.length; ++a) {
                var b = this.D.Sa[a];
                this.xd({type: "encrypted", initDataType: b.initDataType, initData: b.initData})
              }
              0 == this.D.Sa.length && R(this.l, this.a, "encrypted", this.xd.bind(this))
            }
          }))
        }, Ad.xd = function (a) {
          var b = new Uint8Array(a.initData), c = Array.prototype.join.apply(b);
          if (!this.Qb[c]) {
            try {
              var d = mc(this)
            } catch (e) {
              return d = K(e), this.dispatchEvent(d), void this.eb.reject(e)
            }
            a = d.generateRequest(a.initDataType, a.initData), this.Qb[c] = !0, a["catch"](_(this, function (a) {
              if (this.Qb) {
                this.Qb[c] = !1;
                var b = K(a);
                this.dispatchEvent(b), this.eb.reject(a)
              }
            })), this.xb.push(d)
          }
        }, Ad.re = function (a) {
          nc(this, a.target, this.D, a.message)
        }, Ad.ke = function (a) {
          var b = a.target.keyStatuses.values();
          for (a = b.next(); !a.done; a = b.next()) {
            var c = Zd[a.value];
            c && (c = Error(c), c.type = a.value, a = K(c), this.dispatchEvent(a))
          }
        };
        var Zd = {
          "output-not-allowed": "The required output protection is not available.",
          expired: "A required key has expired and the content cannot be decrypted.",
          "internal-error": "An unknown error has occurred in the CDM."
        };
        c(oc, U);
        var $d = 15;
        oc.prototype.destroy = function () {
          this.bc(), this.P = this.O = null, this.$.destroy(), this.parent = this.a = this.$ = null
        }, Ad = oc.prototype, Ad.ld = function () {
          return this.ga
        }, Ad.kd = function () {
          return this.ec
        }, Ad.Xb = function (a, b, c) {
          if (a != this.O) {
            var d = [a.N.create(), a.I.create()];
            Promise.all(d).then(_(this, function (d) {
              var e = this.O;
              this.O = a, this.b = d[0], this.Ic = d[1], this.td = b, this.Wc = !0, this.Rb || (e ? c && pc(this, !0) : this.ea(0))
            }))["catch"](_(this, function (a) {
              "aborted" != a.type && (a = K(a), this.dispatchEvent(a))
            }))
          }
        }, Ad.Cd = function () {
          return pc(this, !1)
        }, Ad.rc = function () {
        }, Ad.Gc = function () {
          return !0
        }, Ad.ze = function () {
          var a;
          if (a = 1 < this.$.la.buffered.length ? !0 : !1, a && this.ga)pc(this, !0); else {
            this.ha = null, a = this.O;
            var b = this.b, c = this.a.currentTime, d = Wb(this.$, c), e = this.ga ? $d : Math.min(this.td, $d) + (this.ya || 0);
            d >= e ? (rc(this), this.ea(1e3 / (Math.abs(this.a.playbackRate) || 1))) : (b = qc(this, c, b)) ? (b = this.$.Gb(b, this.Ic), this.Ic = null, this.Wc && (this.Wc = !1, sc(this, a)), b.then(_(this, function (a) {
              this.ec = !1, null == this.ya && (this.ya = a), this.Nc && 0 < Wb(this.$, c) && (this.Nc = !1, this.a.currentTime += .001), this.ea(0)
            }))["catch"](_(this, function (a) {
              if ("aborted" != a.type) {
                var b = K(a);
                this.dispatchEvent(b), b = [0, 404, 410], "net" == a.type && -1 != b.indexOf(a.Ze.status) && this.O && this.ea(5e3)
              }
            }))) : (rc(this), this.ec || (this.ec = !0, tc(this)), this.ea(1e3))
          }
        }, Ad.ea = function (b) {
          this.ha = a.setTimeout(this.ze.bind(this), b)
        }, Ad.bc = function () {
          null != this.ha && (a.clearTimeout(this.ha), this.ha = null)
        }, c(uc, U), uc.prototype.destroy = function () {
          this.oa && this.a.removeChild(this.oa), this.parent = this.a = this.O = this.b = this.oa = null
        }, Ad = uc.prototype, Ad.ld = function () {
          return !0
        }, Ad.kd = function () {
          return !0
        }, Ad.Xb = function (a) {
          a.N.create().then(_(this, function (b) {
            if (this.a) {
              if (this.O = a, this.b = b, 0 == b.length())return Promise.reject(Error("No subtitles URL available."));
              b = b.first().url.toString();
              var c = this.Gc();
              this.oa && (this.rc(!1), this.a.removeChild(this.oa)), this.oa = document.createElement("track"), this.a.appendChild(this.oa), this.oa.src = b, this.rc(c)
            }
          }))
        }, Ad.Cd = function () {
        }, Ad.rc = function (a) {
          this.Eb = a, this.oa && (this.oa.track.mode = a ? "showing" : "disabled")
        }, Ad.Gc = function () {
          return this.Eb
        }, c(zc, U), b("shaka.player.Player", zc), zc.version = "v1.4.1", zc.isBrowserSupported = function () {
          return !!(a.MediaSource && a.MediaKeys && a.navigator && a.navigator.requestMediaKeySystemAccess && a.MediaKeySystemAccess && a.MediaKeySystemAccess.prototype.getConfiguration && a.Promise && HTMLVideoElement.prototype.getVideoPlaybackQuality && Element.prototype.requestFullscreen && document.exitFullscreen && "fullscreenElement"in document && a.Uint8Array)
        }, zc.isTypeSupported = Ac, zc.prototype.destroy = function () {
          return this.Xc().then(_(this, function () {
            this.l.destroy(), this.a = this.l = null
          }))["catch"](function () {
          })
        }, zc.prototype.destroy = zc.prototype.destroy, zc.prototype.Xc = function () {
          if (!this.c)return Promise.resolve();
          this.gb && Ec(this), this.a.pause(), S(this.l), Dc(this), Bc(this), this.Oa.destroy(), this.Oa = null, this.a.src = "";
          var a = this.a.setMediaKeys(null);
          return this.c && (this.c.destroy(), this.c = null), this.gb = !1, this.J = new vc, a
        }, zc.prototype.unload = zc.prototype.Xc, zc.prototype.load = function (a) {
          var b = this.Xc();
          return this.a.autoplay && (e("load"), R(this.l, this.a, "timeupdate", this.je.bind(this))), a.Cb(this.zc), b.then(_(this, function () {
            return a.load(this.ta)
          })).then(_(this, function () {
            return this.c = a, this.c.yb(this.lc), this.Oa = new hc(this, this.a, this.c), ic(this.Oa)
          })).then(_(this, function () {
            return R(this.l, this.a, "error", this.Pc.bind(this)), R(this.l, this.a, "playing", this.oe.bind(this)), R(this.l, this.a, "pause", this.ne.bind(this)), this.c.bd(this, this.a)
          })).then(_(this, function () {
            Cc(this)
          }))["catch"](_(this, function (b) {
            a.destroy(), this.c = null, this.Oa && (this.Oa.destroy(), this.Oa = null);
            var c = K(b);
            return this.dispatchEvent(c), Promise.reject(b)
          }))
        }, zc.prototype.load = zc.prototype.load, Ad = zc.prototype, Ad.je = function () {
          f("load"), this.J.playbackLatency = g("load") / 1e3, this.l.Yb(this.a, "timeupdate")
        }, Ad.Pc = function (a) {
          this.a.error && (a = this.a.error.code, a != MediaError.MEDIA_ERR_ABORTED && (a = Error(_d[a] || "Unknown playback error."), a.type = "playback", a = K(a), this.dispatchEvent(a)))
        }, Ad.oe = function () {
          e("playing"), !this.Tb && 0 > this.ic && (this.a.playbackRate = 0, this.Qc(this.a.currentTime, Date.now(), this.ic)), this.gb && Ec(this)
        }, Ad.ne = function () {
          f("playing");
          var a = g("playing");
          if (!isNaN(a)) {
            var b = this.J;
            b.playTime += a / 1e3
          }
          Bc(this)
        }, Ad.getStats = function () {
          if (!this.a.paused) {
            f("playing");
            var a = g("playing");
            if (!isNaN(a)) {
              var b = this.J;
              b.playTime += a / 1e3, e("playing")
            }
          }
          return a = this.J, (b = this.a.getVideoPlaybackQuality()) && (a.decodedFrames = b.totalVideoFrames, a.droppedFrames = b.droppedVideoFrames), this.J
        }, zc.prototype.getStats = zc.prototype.getStats, zc.prototype.Sd = function () {
          var a = this.a.videoWidth, b = this.a.videoHeight;
          return a && b ? {width: a, height: b} : null
        }, zc.prototype.getCurrentResolution = zc.prototype.Sd, zc.prototype.getVideoTracks = function () {
          return this.c ? this.c.getVideoTracks() : []
        }, zc.prototype.getVideoTracks = zc.prototype.getVideoTracks, zc.prototype.getAudioTracks = function () {
          return this.c ? this.c.getAudioTracks() : []
        }, zc.prototype.getAudioTracks = zc.prototype.getAudioTracks, zc.prototype.Hb = function () {
          return this.c ? this.c.Hb() : []
        }, zc.prototype.getTextTracks = zc.prototype.Hb, zc.prototype.Vb = function (a, b) {
          return this.c ? this.c.Vb(a, void 0 == b ? !0 : b) : !1
        }, zc.prototype.selectVideoTrack = zc.prototype.Vb, zc.prototype.nc = function (a, b) {
          return this.c ? this.c.nc(a, void 0 == b ? !0 : b) : !1
        }, zc.prototype.selectAudioTrack = zc.prototype.nc, zc.prototype.oc = function (a) {
          return this.c ? this.c.oc(a, !1) : !1
        }, zc.prototype.selectTextTrack = zc.prototype.oc, zc.prototype.Db = function (a) {
          this.c && this.c.Db(a)
        }, zc.prototype.enableTextTrack = zc.prototype.Db, zc.prototype.Cb = function (a) {
          this.zc = a, this.c && this.c.Cb(a)
        }, zc.prototype.enableAdaptation = zc.prototype.Cb, zc.prototype.Rd = function () {
          return this.zc
        }, zc.prototype.getAdaptationEnabled = zc.prototype.Rd, zc.prototype.Td = function () {
          return this.a.currentTime
        }, zc.prototype.getCurrentTime = zc.prototype.Td, zc.prototype.Ud = function () {
          return this.a.duration
        }, zc.prototype.getDuration = zc.prototype.Ud, zc.prototype.Vd = function () {
          return this.a.muted
        }, zc.prototype.getMuted = zc.prototype.Vd, zc.prototype.Zd = function () {
          return this.a.volume
        }, zc.prototype.getVolume = zc.prototype.Zd, zc.prototype.play = function () {
          this.Fd(1), this.a.play()
        }, zc.prototype.play = zc.prototype.play, zc.prototype.pause = function () {
          this.a.pause()
        }, zc.prototype.pause = zc.prototype.pause, zc.prototype.requestFullscreen = function () {
          this.a.requestFullscreen()
        }, zc.prototype.requestFullscreen = zc.prototype.requestFullscreen, zc.prototype.seek = function (a) {
          this.a.currentTime = a
        }, zc.prototype.seek = zc.prototype.seek, zc.prototype.Qe = function (a) {
          $d = 0 > a ? 0 : a
        }, zc.prototype.setStreamBufferSize = zc.prototype.Qe, zc.prototype.Yd = function () {
          return $d
        }, zc.prototype.getStreamBufferSize = zc.prototype.Yd, zc.prototype.Le = function (a) {
          Ud = a
        }, zc.prototype.setLicenseRequestTimeout = zc.prototype.Le, zc.prototype.Me = function (a) {
          Td = a
        }, zc.prototype.setMpdRequestTimeout = zc.prototype.Me, zc.prototype.Pe = function (a) {
          Vd = a
        }, zc.prototype.setRangeRequestTimeout = zc.prototype.Pe, zc.prototype.Ne = function (a) {
          this.a.muted = a
        }, zc.prototype.setMuted = zc.prototype.Ne, zc.prototype.Re = function (a) {
          this.a.volume = a
        }, zc.prototype.setVolume = zc.prototype.Re, zc.prototype.Oe = function (a) {
          this.ta = M(a)
        }, zc.prototype.setPreferredLanguage = zc.prototype.Oe, zc.prototype.Fd = function (a) {
          Bc(this), a >= 0 ? this.a.playbackRate = a : this.a.paused || (this.a.playbackRate = 0, this.Qc(this.a.currentTime, Date.now(), a)), this.ic = a
        }, zc.prototype.setPlaybackRate = zc.prototype.Fd, zc.prototype.Wd = function () {
          return this.ic
        }, zc.prototype.getPlaybackRate = zc.prototype.Wd, zc.prototype.yb = function (a) {
          if (!(a instanceof ia))throw new TypeError("Argument must be a Restrictions instance.");
          this.lc = a.clone(), this.c && this.c.yb(this.lc)
        }, zc.prototype.setRestrictions = zc.prototype.yb, zc.prototype.Xd = function () {
          return this.lc.clone()
        }, zc.prototype.getRestrictions = zc.prototype.Xd, zc.prototype.hc = function () {
          return this.c ? this.c.hc() : !1
        }, zc.prototype.isLive = zc.prototype.hc, zc.prototype.Qc = function (b, c, d) {
          var e = .1 * Math.abs(d);
          this.a.buffered.length && this.a.buffered.start(0) + e < this.a.currentTime ? (this.a.currentTime = b + (Date.now() - c) / 1e3 * d, this.Tb = a.setTimeout(this.Qc.bind(this, b, c, d), 100)) : this.a.pause()
        },zc.prototype.Ae = function () {
          if (Cc(this), !this.a.ended && !this.a.seeking) {
            var a = this.a.buffered, b = a.length ? a.end(a.length - 1) : 0, a = b - this.a.currentTime, b = b + .05;
            this.gb ? a > this.c.hd() && (Ec(this), this.a.play()) : b < this.a.duration && .1 > a && !this.a.paused && (this.gb = !0, this.a.pause(), this.J.bufferingHistory.push(v() / 1e3), e("buffering"), this.dispatchEvent(J({type: "bufferingStart"})))
          }
        };
        var _d = {
          2: "A network failure occured while loading media content.",
          3: "The browser failed to decode the media content.",
          4: "The browser does not support the media content."
        };
        Fc.prototype.Wa = function (a) {
          for (var b = 0; b < a.length; ++b)for (var c = a[b], d = 0; d < c.u.length; ++d) {
            for (var e = c.u[d], f = e, g = 0; g < f.f.length; ++g)Ac($b(f.f[g])) || (f.f.splice(g, 1), --g);
            0 == e.f.length && (c.u.splice(d, 1), --d)
          }
          for (b = 0; b < a.length; ++b)for (c = a[b], d = 0; d < c.u.length; ++d)c.u[d].f.sort(Gc)
        }, Hc.prototype.destroy = function () {
          this.va.destroy(), this.va = null
        }, Hc.prototype.update = function (a) {
          var b = Ic(a), c = Ic(this.va);
          return Promise.all([b, c]).then(function (b) {
            var c = b[0];
            b = b[1];
            var d = new Fc;
            d.Wa(this.va.t), a.zb = this.va.zb, a.Zb = this.va.Zb ? new ya(this.va.Zb) : null, a.F = this.va.F;
            var e = [];
            return Jc(a, this.va, c, b, e), d.Wa(a.t), Promise.resolve(e)
          }.bind(this))
        }, b("shaka.media.SimpleAbrManager", Nc), Nc.prototype.destroy = function () {
          this.l.destroy(), this.c = this.P = this.l = null
        }, Nc.prototype.start = function (a, b) {
          this.P && this.c || (this.P = a, this.c = b, this.qb = Date.now() + 4e3, R(this.l, this.P, "bandwidth", this.Oc.bind(this)), R(this.l, this.c, "adaptation", this.ie.bind(this)))
        }, Nc.prototype.enable = function (a) {
          this.Eb = a
        }, Nc.prototype.getInitialVideoTrackId = function () {
          if (!this.c || !this.P)return null;
          var a = Oc(this);
          return a ? a.id : null
        }, Nc.prototype.Oc = function () {
          if (this.Eb && !(Date.now() < this.qb)) {
            var a = Oc(this);
            if (a) {
              if (a.active)return void(this.qb = Date.now() + 3e3);
              this.c.Vb(a.id, !1)
            }
            this.qb = Number.POSITIVE_INFINITY
          }
        }, Nc.prototype.ie = function () {
          this.qb == Number.POSITIVE_INFINITY && (this.qb = Date.now() + 3e4)
        }, c(Pc, U), b("shaka.player.HttpVideoSource", Pc), Pc.prototype.destroy = function () {
          this.ma && (this.ma.parentElement.removeChild(this.ma), this.ma = null), this.parent = this.D = null
        }, Ad = Pc.prototype, Ad.bd = function (a, b) {
          this.parent = a;
          var c = b.mediaKeys;
          return b.src = this.de, c = b.setMediaKeys(c), this.Jd && (this.ma = document.createElement("track"), this.ma.src = this.Jd, b.appendChild(this.ma), this.ma.track.mode = "showing"), c
        }, Ad.load = function () {
          return Promise.resolve()
        }, Ad.getVideoTracks = function () {
          return []
        }, Ad.getAudioTracks = function () {
          return []
        }, Ad.Hb = function () {
          return []
        }, Ad.hd = function () {
          return 5
        }, Ad.gd = function () {
          var a = new cc;
          return a.T = this.D, [a]
        }, Ad.Tc = function () {
        }, Ad.Vb = function () {
          return !1
        }, Ad.nc = function () {
          return !1
        }, Ad.oc = function () {
          return !1
        }, Ad.Db = function (a) {
          this.ma && (this.ma.track.mode = a ? "showing" : "disabled")
        }, Ad.Cb = function () {
        }, Ad.yb = function () {
        }, Ad.fc = function () {
          return []
        }, Ad.Ib = function () {
          return !1
        }, Ad.hc = function () {
          return !1
        }, c(Qc, U), b("shaka.player.StreamVideoSource", Qc), Qc.prototype.destroy = function () {
          this.Ub && (a.clearTimeout(this.Ub), this.Ub = null), this.bc(), this.Da = null, this.sa.destroy(), this.sa = null, N(this.s).forEach(function (a) {
            a.destroy()
          }), this.r = this.s = null, this.d && (this.d.destroy(), this.d = null), this.Ab.destroy(), this.parent = this.ac = this.$b = this.J = this.video = this.W = this.L = this.Ab = null
        }, Ad = Qc.prototype, Ad.bd = function (b, c) {
          if (!this.lb) {
            var d = Error("Cannot call attach() right now.");
            return d.type = "stream", Promise.reject(d)
          }
          return this.parent = b, this.video = c, this.J = b.getStats(), R(this.sa, this.W, "sourceopen", this.me.bind(this)), R(this.sa, this.L, "bandwidth", this.Oc.bind(this)), d = this.video.mediaKeys, this.video.src = a.URL.createObjectURL(this.W), d = this.video.setMediaKeys(d), Promise.all([this.$b, d])
        }, Ad.load = function (a) {
          return this.lb ? (a = Error("Cannot call load() right now."), a.type = "stream", Promise.reject(a)) : this.d && 0 != this.d.t.length ? (this.ta = a, (new Fc).Wa(this.d.t), 0 == this.d.t.length || 0 == this.d.t[0].u.length ? (a = Error("The manifest specifies content that cannot be displayed on this browser/platform."), a.type = "stream", Promise.reject(a)) : (this.lb = !0, Promise.resolve())) : (a = Error("The manifest does not specify any content."), a.type = "stream", Promise.reject(a))
        }, Ad.xe = function () {
          var a = Date.now(), b = this.ha = null;
          this.yd(this.d.Zb).then(_(this, function (a) {
            return b = new Hc(a), b.update(this.d)
          })).then(_(this, function (c) {
            b.destroy(), b = null;
            for (var d = 0; d < c.length; ++d)Rc(this, c[d]);
            this.ac && this.yb(this.ac), 0 == Object.keys(this.s).length ? Uc(this) : this.ea((Date.now() - a) / 1e3)
          }))["catch"](_(this, function (a) {
            b && (b.destroy(), b = null), "aborted" != a.type && (a = K(a), this.dispatchEvent(a), this.d && this.ea(0))
          }))
        }, Ad.yd = function () {
          return Promise.reject("Cannot update manifest with this VideoSource implementation.")
        }, Ad.getVideoTracks = function () {
          if (!this.r.has("video"))return [];
          for (var a = this.s.video, a = (a = a ? a.O : null) ? a.K : 0, b = [], c = this.r.get("video"), d = 0; d < c.length; ++d)for (var e = c[d], f = 0; f < e.f.length; ++f) {
            var g = e.f[f];
            if (g.enabled) {
              var h = g.K, g = new j(h, g.bandwidth, g.width, g.height);
              h == a && (g.active = !0), b.push(g)
            }
          }
          return b
        }, Qc.prototype.getVideoTracks = Qc.prototype.getVideoTracks, Qc.prototype.getAudioTracks = function () {
          if (!this.r.has("audio"))return [];
          for (var a = this.s.audio, a = (a = a ? a.O : null) ? a.K : 0, b = [], c = this.r.get("audio"), d = 0; d < c.length; ++d)for (var e = c[d], f = e.lang, g = 0; g < e.f.length; ++g) {
            var i = e.f[g], j = i.K, i = new h(j, i.bandwidth, f);
            j == a && (i.active = !0), b.push(i)
          }
          return b
        }, Qc.prototype.getAudioTracks = Qc.prototype.getAudioTracks, Qc.prototype.Hb = function () {
          if (!this.r.has("text"))return [];
          for (var a = this.s.text, b = a ? a.O : null, b = b ? b.K : 0, c = [], d = this.r.get("text"), e = 0; e < d.length; ++e)for (var f = d[e], g = f.lang, h = 0; h < f.f.length; ++h) {
            var j = f.f[h].K, k = new i(j, g);
            j == b && (k.active = !0, k.enabled = a.Gc()), c.push(k)
          }
          return c
        }, Qc.prototype.getTextTracks = Qc.prototype.Hb, Ad = Qc.prototype, Ad.hd = function () {
          return this.d && this.d.F || 0
        }, Ad.gd = function () {
          return this.lb ? this.d.t[0].Fc() : []
        }, Ad.Tc = function (a) {
          if (this.lb) {
            for (var b = {}, c = this.d.t[0], d = 0; d < c.u.length; ++d) {
              var e = c.u[d];
              b[e.K] = e
            }
            for (this.r.clear(), c = a.keys(), d = 0; d < c.length; ++d) {
              var e = c[d], f = a.get(e);
              if ("video" == e) {
                var g = f[0].id;
                this.r.push(e, b[g])
              } else if ("audio" == e)for (var g = f[0].Fa.split(";")[0], h = 0; h < f.length; ++h) {
                var i = f[h];
                i.Fa.split(";")[0] == g && this.r.push(e, b[i.id])
              } else for (h = 0; h < f.length; ++h)g = f[h].id, this.r.push(e, b[g])
            }
            this.sc = !0, (a = this.r.get("audio")) && (Tc(this, a), this.r.set("audio", a), a = a[0].lang || this.ta, L(2, this.ta, a) && (this.sc = !1)), (a = this.r.get("text")) && (Tc(this, a), this.r.set("text", a), a = a[0].lang || this.ta, L(2, this.ta, a) || (this.sc = !1))
          }
        }, Ad.Vb = function (a, b) {
          return Sc(this, "video", a, b)
        }, Ad.nc = function (a, b) {
          return Sc(this, "audio", a, b)
        }, Ad.oc = function (a, b) {
          return Sc(this, "text", a, b)
        }, Ad.Db = function (a) {
          var b = this.s.text;
          b && b.rc(a)
        }, Ad.Cb = function (a) {
          this.Ab.enable(a)
        }, Ad.yb = function (a) {
          if (this.lb) {
            this.ac = a;
            for (var b = 0; b < this.d.t.length; ++b)for (var c = this.d.t[b], d = 0; d < c.u.length; ++d)for (var e = c.u[d], f = 0; f < e.f.length; ++f) {
              var g = e.f[f];
              g.enabled = !0, a.maxWidth && g.width > a.maxWidth && (g.enabled = !1), a.maxHeight && g.height > a.maxHeight && (g.enabled = !1), a.maxBandwidth && g.bandwidth > a.maxBandwidth && (g.enabled = !1), a.minBandwidth && g.bandwidth < a.minBandwidth && (g.enabled = !1)
            }
          }
        }, Ad.fc = function () {
          return []
        }, Ad.Ib = function () {
          return !1
        }, Ad.hc = function () {
          return this.d ? this.d.ia : !1
        }, Ad.me = function () {
          this.sa.Yb(this.W, "sourceopen"), Uc(this).then(_(this, function () {
            this.$b.resolve()
          }))["catch"](_(this, function (a) {
            this.$b.reject(a)
          }))
        }, Ad.ve = function (a) {
          this.ud = Math.min(this.ud, a.na), this.mb = Math.max(this.mb, a.na);
          for (var b in this.s)if (!this.s[b].ld())return;
          Zc(this)
        }, Ad.ye = function () {
          this.Ub = null, dd(this);
          var a = cd(this, bd(this));
          a && (_c(this, a.start, a.end), this.video.paused || ad(this, this.video.currentTime, a.start, a.end))
        }, Ad.qe = function () {
          var a = this.video.currentTime;
          if (null != this.Ra) {
            if (a >= this.Ra - .01 && a <= this.Ra + .01)return void(this.Ra = null);
            this.Ra = null
          }
          var b = cd(this, bd(this));
          if (b) {
            var c = b.end;
            if ((b = ad(this, a, b.start, c)) || (c + .01 >= a ? b = !1 : (this.video.currentTime = c, b = !0)), !b)for (var d in this.s)this.s[d].Cd()
          }
        }, Ad.ue = function () {
          if (!this.d.ia) {
            for (var a in this.s)if (!this.s[a].kd())return;
            "open" == this.W.readyState && this.W.endOfStream()
          }
        }, Ad.Oc = function () {
          var a = this.J, b = this.L.getBandwidth();
          a.estimatedBandwidth = b, a.bandwidthHistory.push(new yc(b))
        }, Ad.ea = function (b) {
          if (null != this.d.zb) {
            var c = Math.max(this.d.zb, 3);
            b = Math.max(c - b, 0), this.ha = a.setTimeout(this.xe.bind(this), 1e3 * b)
          }
        }, Ad.bc = function () {
          this.ha && (a.clearTimeout(this.ha), this.ha = null)
        }, c(ed, Qc), b("shaka.player.DashVideoSource", ed), ed.prototype.destroy = function () {
          this.kb = null, Qc.prototype.destroy.call(this)
        }, ed.prototype.load = function (a) {
          return new Ob(this.he).send().then(_(this, function (b) {
            return this.d = new dc(this.kb).Wa(b), Qc.prototype.load.call(this, a)
          }))
        }, ed.prototype.yd = function (a) {
          return new Ob(a.toString()).send().then(_(this, function (a) {
            return a = new dc(this.kb).Wa(a), Promise.resolve(a)
          }))
        }, c(fd, U), Ad = fd.prototype, Ad.ae = function (a, b, c) {
          var d = new X;
          a = {stream_id: c.Wb, mime_type: a.n, codecs: a.aa, init_segment: b, references: c.g};
          var e = ud(this).put(a);
          return e.onsuccess = function () {
            d.resolve(c.Wb)
          }, e.onerror = function () {
            d.reject(e.error)
          }, d
        }, Ad.$d = function (a, b) {
          for (var c = Promise.resolve(), d = 0; d < a.length(); ++d)var e = a.get(d), f = this.Ld.bind(this, e, b), c = c.then(this.He.bind(this, e)), c = c.then(f);
          return c.then(function () {
            return Promise.resolve(b)
          })["catch"](_(this, function (a) {
            return sd(this, b.Wb), Promise.reject(a)
          }))
        }, Ad.Ld = function (a, b, c) {
          var d = new X;
          0 == b.wb.byteLength && (b.Ec = a), b.wb = md(b.wb, c), b.Bd++;
          var e = J({type: "progress", detail: b.Bd / b.We * 100, bubbles: !0});
          if (1048576 <= b.wb.byteLength || null == a.endTime) {
            c = {stream_id: b.Wb, segment_id: b.Sc, content: b.wb};
            var f = td(this).put(c);
            b.g.push({
              start_time: b.Ec.startTime,
              start_byte: b.Ec.ab,
              end_time: a.endTime,
              url: "idb://" + b.Wb + "/" + b.Sc
            }), b.Sc++, b.wb = new ArrayBuffer(0), f.onerror = function () {
              d.reject(f.error)
            }, f.onsuccess = _(this, function () {
              this.dispatchEvent(e), d.resolve()
            })
          } else this.dispatchEvent(e), d.resolve();
          return d
        }, Ad.He = function (a) {
          return a = new Qb(a.url.toString(), a.ab, a.Fb), a.L = this.P, a.send()
        }, Ad.Bc = function (a) {
          return pd(this, a).then(_(this, function (b) {
            var c, d = [];
            for (c in b.stream_ids)d.push(sd(this, b.stream_ids[c]));
            return b = vd(this), d.push(b["delete"](a)), Promise.all(d)
          }))
        }, xd.prototype.destroy = function () {
          this.mc = null, this.b && (this.b.destroy(), this.b = null)
        }, xd.prototype.create = function () {
          if (this.b)return Promise.resolve(this.b);
          for (var a = [], b = 0; b < this.mc.length; ++b) {
            var c = this.mc[b];
            a.push(new ob(c.start_time, c.end_time, c.start_byte, null, new ya(c.url)))
          }
          return this.mc = null, this.b = new tb(a), Promise.resolve(this.b)
        }, c(yd, Qc), b("shaka.player.OfflineVideoSource", yd), yd.retrieveGroupIds = function () {
          var a = new fd(null, null), b = gd(a).then(function () {
            return qd(a)
          });
          return b.then(function () {
            hd(a)
          })["catch"](function () {
            hd(a)
          }), b
        }, yd.prototype.Te = function (b, c, d, e) {
          var f, g = {}, h = [];
          b = new Ob(b);
          var i = M(c);
          return b.send().then(_(this, function (a) {
            return this.d = new dc(d).Wa(a), this.d.ia ? Promise.reject(Error("Unable to store live streams offline.")) : Qc.prototype.load.call(this, i)
          })).then(_(this, function () {
            var b = document.createElement("video");
            return b.src = a.URL.createObjectURL(this.W), f = new hc(null, b, this), R(this.sa, f, "sessionReady", this.se.bind(this)), ic(f)
          })).then(_(this, function () {
            for (var a = P(this.r), b = 0; b < a.length; ++b)for (var c = a[b], d = 0; d < c.f.length; ++d) {
              var f = c.f[d];
              g[f.K] = f
            }
            return e()
          })).then(_(this, function (a) {
            for (var b = 0; b < a.length; ++b) {
              var c = a[b], d = g[c];
              if (!d)return Promise.reject(Error("Invalid stream ID chosen: " + c));
              h.push(d)
            }
            var e = ["audio", "video"];
            return h = h.filter(function (a) {
              return 0 > e.indexOf(a.n.split("/")[0]) ? !1 : !0
            }), a = h.map(function (a) {
              return a.I.create()
            }), Promise.all(a)
          })).then(_(this, function (a) {
            for (var b = h, c = [], d = 0; d < b.length; ++d)try {
              c[d] = this.W.addSourceBuffer($b(b[d]))
            } catch (e) {
            }
            if (b.length != c.length)a = Error("Error initializing streams."), a.type = "storage", a = Promise.reject(a); else {
              for (d = 0; d < a.length; ++d)(b = a[d]) && c[d].appendBuffer(b);
              a = Promise.resolve()
            }
            return a
          })).then(_(this, function () {
            return jc(f, this.timeoutMs)
          })).then(_(this, function () {
            return zd(this, h, f.D, this.d.t[0].duration)
          }))
        }, yd.prototype.store = yd.prototype.Te, yd.prototype.se = function (a) {
          this.qc.push(a.detail.sessionId)
        }, yd.prototype.load = function (a) {
          var b, c, d = new fd(null, null);
          return gd(d).then(_(this, function () {
            return pd(d, this.jd)
          })).then(_(this, function (a) {
            var e = [];
            this.qc = a.session_ids, b = a.duration, c = a.key_system;
            for (var f = 0; f < a.stream_ids.length; ++f)e.push(od(d, a.stream_ids[f]));
            return Promise.all(e)
          })).then(_(this, function (d) {
            var e = b, f = c, g = new bc;
            g.F = 5;
            for (var h = new ac, i = 0; i < d.length; ++i) {
              var j = d[i], k = new Zb, l = new xd(j.references), m = new Uint8Array(j.init_segment), m = new ya("data:application/octet-stream;base64," + ca(m)), m = new Ub(new Rb(m, 0, null));
              k.N = l, k.I = m, k.n = j.mime_type, k.aa = j.codecs, j = new ga(f, "", !1, null), l = new _b, l.f.push(k), l.Na.push(j), l.contentType = k.n.split("/")[0], h.u.push(l), h.duration = e
            }
            return g.t.push(h), this.d = g, Qc.prototype.load.call(this, a)
          })).then(function () {
            return hd(d), Promise.resolve()
          })["catch"](function (a) {
            return hd(d), Promise.reject(a)
          })
        }, yd.prototype.Bc = function () {
          var a = new fd(null, null);
          return gd(a).then(a.Bc.bind(a, this.jd)).then(function () {
            return hd(a), Promise.resolve()
          })["catch"](function (b) {
            return hd(a), Promise.reject(b)
          })
        }, yd.prototype.deleteGroup = yd.prototype.Bc, yd.prototype.fc = function () {
          return this.qc
        }, yd.prototype.Ib = function () {
          return !0
        }
      }).bind(e, this)(), "undefined" != typeof a && a.exports ? a.exports = e.shaka : (d = function () {
        return e.shaka
      }.call(b, c, b, a), !(void 0 !== d && (a.exports = d)))
    }()
  }
});