        const checkAdBlocker = () => {
    return new Promise((resolve, reject) => {
        let testAd = document.createElement("img");
        testAd.onload = () => {
            resolve(false); // No ad blocker detected
        };
        testAd.onerror = () => {
            resolve(true); // Ad blocker detected
        };
        testAd.src = "/ads.js";
    });
};

const isValidURL = (str) => {
    try {
        new URL(str);
    } catch (_) {
        return false;
    }

    return true;
};

function openit() {
    // Function removed to prevent ad redirects
    return;
}

const getOS = () => {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
        windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
        iosPlatforms = ["iPhone", "iPad", "iPod"],
        os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = "Mac OS";
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = "iOS";
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = "Windows";
    } else if (/Android/.test(userAgent)) {
        os = "Android";
    } else if (!os && /Linux/.test(platform)) {
        os = "Linux";
    }

    return os;
};

checkAdBlocker()
    .then((isBlocking) => {
        if (isBlocking) {
            using_adblocker = true;
        } else {
            using_adblocker = false;
        }
    })
    .catch((error) => {
        console.error(error);
    });

var os = getOS();
var download_count = 0;
var inprogressTimer = null;

function a(url) {
    s = document.createElement("script");
    s.src = url;
    try {
        (document.body || document.documentElement).appendChild(s);
    } catch (e) {}
}

  
        !(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
        ? t(exports)
        : "function" == typeof define && define.amd
        ? define(["exports"], t)
        : t(
              ((e =
                  "undefined" != typeof globalThis
                      ? globalThis
                      : e || self).Popper = {})
          );
})(this, function (e) {
    "use strict";
    function t(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
            var t = e.ownerDocument;
            return (t && t.defaultView) || window;
        }
        return e;
    }
    function n(e) {
        return e instanceof t(e).Element || e instanceof Element;
    }
    function r(e) {
        return e instanceof t(e).HTMLElement || e instanceof HTMLElement;
    }
    function o(e) {
        return (
            "undefined" != typeof ShadowRoot &&
            (e instanceof t(e).ShadowRoot || e instanceof ShadowRoot)
        );
    }
    var i = Math.max,
        a = Math.min,
        s = Math.round;
    function f() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands)
            ? e.brands
                  .map(function (e) {
                      return e.brand + "/" + e.version;
                  })
                  .join(" ")
            : navigator.userAgent;
    }
    function c() {
        return !/^((?!chrome|android).)*safari/i.test(f());
    }
    function p(e, o, i) {
        void 0 === o && (o = !1), void 0 === i && (i = !1);
        var a = e.getBoundingClientRect(),
            f = 1,
            p = 1;
        o &&
            r(e) &&
            ((f = (e.offsetWidth > 0 && s(a.width) / e.offsetWidth) || 1),
            (p = (e.offsetHeight > 0 && s(a.height) / e.offsetHeight) || 1));
        var u = (n(e) ? t(e) : window).visualViewport,
            l = !c() && i,
            d = (a.left + (l && u ? u.offsetLeft : 0)) / f,
            h = (a.top + (l && u ? u.offsetTop : 0)) / p,
            m = a.width / f,
            v = a.height / p;
        return {
            width: m,
            height: v,
            top: h,
            right: d + m,
            bottom: h + v,
            left: d,
            x: d,
            y: h,
        };
    }
    function u(e) {
        var n = t(e);
        return { scrollLeft: n.pageXOffset, scrollTop: n.pageYOffset };
    }
    function l(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
    }
    function d(e) {
        return (
            (n(e) ? e.ownerDocument : e.document) || window.document
        ).documentElement;
    }
    function h(e) {
        return p(d(e)).left + u(e).scrollLeft;
    }
    function m(e) {
        return t(e).getComputedStyle(e);
    }
    function v(e) {
        var t = m(e),
            n = t.overflow,
            r = t.overflowX,
            o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r);
    }
    function y(e, n, o) {
        void 0 === o && (o = !1);
        var i,
            a,
            f = r(n),
            c =
                r(n) &&
                (function (e) {
                    var t = e.getBoundingClientRect(),
                        n = s(t.width) / e.offsetWidth || 1,
                        r = s(t.height) / e.offsetHeight || 1;
                    return 1 !== n || 1 !== r;
                })(n),
            m = d(n),
            y = p(e, c, o),
            g = { scrollLeft: 0, scrollTop: 0 },
            b = { x: 0, y: 0 };
        return (
            (f || (!f && !o)) &&
                (("body" !== l(n) || v(m)) &&
                    (g =
                        (i = n) !== t(i) && r(i)
                            ? {
                                  scrollLeft: (a = i).scrollLeft,
                                  scrollTop: a.scrollTop,
                              }
                            : u(i)),
                r(n)
                    ? (((b = p(n, !0)).x += n.clientLeft), (b.y += n.clientTop))
                    : m && (b.x = h(m))),
            {
                x: y.left + g.scrollLeft - b.x,
                y: y.top + g.scrollTop - b.y,
                width: y.width,
                height: y.height,
            }
        );
    }
    function g(e) {
        var t = p(e),
            n = e.offsetWidth,
            r = e.offsetHeight;
        return (
            Math.abs(t.width - n) <= 1 && (n = t.width),
            Math.abs(t.height - r) <= 1 && (r = t.height),
            { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
        );
    }
    function b(e) {
        return "html" === l(e)
            ? e
            : e.assignedSlot || e.parentNode || (o(e) ? e.host : null) || d(e);
    }
    function x(e) {
        return ["html", "body", "#document"].indexOf(l(e)) >= 0
            ? e.ownerDocument.body
            : r(e) && v(e)
            ? e
            : x(b(e));
    }
    function w(e, n) {
        var r;
        void 0 === n && (n = []);
        var o = x(e),
            i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
            a = t(o),
            s = i ? [a].concat(a.visualViewport || [], v(o) ? o : []) : o,
            f = n.concat(s);
        return i ? f : f.concat(w(b(s)));
    }
    function O(e) {
        return ["table", "td", "th"].indexOf(l(e)) >= 0;
    }
    function j(e) {
        return r(e) && "fixed" !== m(e).position ? e.offsetParent : null;
    }
    function E(e) {
        for (var n = t(e), i = j(e); i && O(i) && "static" === m(i).position; )
            i = j(i);
        return i &&
            ("html" === l(i) || ("body" === l(i) && "static" === m(i).position))
            ? n
            : i ||
                  (function (e) {
                      var t = /firefox/i.test(f());
                      if (
                          /Trident/i.test(f()) &&
                          r(e) &&
                          "fixed" === m(e).position
                      )
                          return null;
                      var n = b(e);
                      for (
                          o(n) && (n = n.host);
                          r(n) && ["html", "body"].indexOf(l(n)) < 0;

                      ) {
                          var i = m(n);
                          if (
                              "none" !== i.transform ||
                              "none" !== i.perspective ||
                              "paint" === i.contain ||
                              -1 !==
                                  ["transform", "perspective"].indexOf(
                                      i.willChange
                                  ) ||
                              (t && "filter" === i.willChange) ||
                              (t && i.filter && "none" !== i.filter)
                          )
                              return n;
                          n = n.parentNode;
                      }
                      return null;
                  })(e) ||
                  n;
    }
    var D = "top",
        A = "bottom",
        L = "right",
        P = "left",
        M = "auto",
        k = [D, A, L, P],
        W = "start",
        B = "end",
        H = "viewport",
        T = "popper",
        R = k.reduce(function (e, t) {
            return e.concat([t + "-" + W, t + "-" + B]);
        }, []),
        S = [].concat(k, [M]).reduce(function (e, t) {
            return e.concat([t, t + "-" + W, t + "-" + B]);
        }, []),
        V = [
            "beforeRead",
            "read",
            "afterRead",
            "beforeMain",
            "main",
            "afterMain",
            "beforeWrite",
            "write",
            "afterWrite",
        ];
    function q(e) {
        var t = new Map(),
            n = new Set(),
            r = [];
        function o(e) {
            n.add(e.name),
                []
                    .concat(e.requires || [], e.requiresIfExists || [])
                    .forEach(function (e) {
                        if (!n.has(e)) {
                            var r = t.get(e);
                            r && o(r);
                        }
                    }),
                r.push(e);
        }
        return (
            e.forEach(function (e) {
                t.set(e.name, e);
            }),
            e.forEach(function (e) {
                n.has(e.name) || o(e);
            }),
            r
        );
    }
    function C(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && o(n)) {
            var r = t;
            do {
                if (r && e.isSameNode(r)) return !0;
                r = r.parentNode || r.host;
            } while (r);
        }
        return !1;
    }
    function N(e, r, o) {
        return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height,
        });
    }
    function I(e, r, o) {
        return r === H
            ? N(
                  (function (e, n) {
                      var r = t(e),
                          o = d(e),
                          i = r.visualViewport,
                          a = o.clientWidth,
                          s = o.clientHeight,
                          f = 0,
                          p = 0;
                      if (i) {
                          (a = i.width), (s = i.height);
                          var u = c();
                          (u || (!u && "fixed" === n)) &&
                              ((f = i.offsetLeft), (p = i.offsetTop));
                      }
                      return { width: a, height: s, x: f + h(e), y: p };
                  })(e, o)
              )
            : n(r)
            ? (function (e, t) {
                  var n = p(e, !1, "fixed" === t);
                  return (
                      (n.top = n.top + e.clientTop),
                      (n.left = n.left + e.clientLeft),
                      (n.bottom = n.top + e.clientHeight),
                      (n.right = n.left + e.clientWidth),
                      (n.width = e.clientWidth),
                      (n.height = e.clientHeight),
                      (n.x = n.left),
                      (n.y = n.top),
                      n
                  );
              })(r, o)
            : N(
                  (function (e) {
                      var t,
                          n = d(e),
                          r = u(e),
                          o = null == (t = e.ownerDocument) ? void 0 : t.body,
                          a = i(
                              n.scrollWidth,
                              n.clientWidth,
                              o ? o.scrollWidth : 0,
                              o ? o.clientWidth : 0
                          ),
                          s = i(
                              n.scrollHeight,
                              n.clientHeight,
                              o ? o.scrollHeight : 0,
                              o ? o.clientHeight : 0
                          ),
                          f = -r.scrollLeft + h(e),
                          c = -r.scrollTop;
                      return (
                          "rtl" === m(o || n).direction &&
                              (f +=
                                  i(n.clientWidth, o ? o.clientWidth : 0) - a),
                          { width: a, height: s, x: f, y: c }
                      );
                  })(d(e))
              );
    }
    function _(e, t, o, s) {
        var f =
                "clippingParents" === t
                    ? (function (e) {
                          var t = w(b(e)),
                              o =
                                  ["absolute", "fixed"].indexOf(
                                      m(e).position
                                  ) >= 0 && r(e)
                                      ? E(e)
                                      : e;
                          return n(o)
                              ? t.filter(function (e) {
                                    return n(e) && C(e, o) && "body" !== l(e);
                                })
                              : [];
                      })(e)
                    : [].concat(t),
            c = [].concat(f, [o]),
            p = c[0],
            u = c.reduce(function (t, n) {
                var r = I(e, n, s);
                return (
                    (t.top = i(r.top, t.top)),
                    (t.right = a(r.right, t.right)),
                    (t.bottom = a(r.bottom, t.bottom)),
                    (t.left = i(r.left, t.left)),
                    t
                );
            }, I(e, p, s));
        return (
            (u.width = u.right - u.left),
            (u.height = u.bottom - u.top),
            (u.x = u.left),
            (u.y = u.top),
            u
        );
    }
    function F(e) {
        return e.split("-")[0];
    }
    function U(e) {
        return e.split("-")[1];
    }
    function z(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
    }
    function X(e) {
        var t,
            n = e.reference,
            r = e.element,
            o = e.placement,
            i = o ? F(o) : null,
            a = o ? U(o) : null,
            s = n.x + n.width / 2 - r.width / 2,
            f = n.y + n.height / 2 - r.height / 2;
        switch (i) {
            case D:
                t = { x: s, y: n.y - r.height };
                break;
            case A:
                t = { x: s, y: n.y + n.height };
                break;
            case L:
                t = { x: n.x + n.width, y: f };
                break;
            case P:
                t = { x: n.x - r.width, y: f };
                break;
            default:
                t = { x: n.x, y: n.y };
        }
        var c = i ? z(i) : null;
        if (null != c) {
            var p = "y" === c ? "height" : "width";
            switch (a) {
                case W:
                    t[c] = t[c] - (n[p] / 2 - r[p] / 2);
                    break;
                case B:
                    t[c] = t[c] + (n[p] / 2 - r[p] / 2);
            }
        }
        return t;
    }
    function Y(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
    }
    function G(e, t) {
        return t.reduce(function (t, n) {
            return (t[n] = e), t;
        }, {});
    }
    function J(e, t) {
        void 0 === t && (t = {});
        var r = t,
            o = r.placement,
            i = void 0 === o ? e.placement : o,
            a = r.strategy,
            s = void 0 === a ? e.strategy : a,
            f = r.boundary,
            c = void 0 === f ? "clippingParents" : f,
            u = r.rootBoundary,
            l = void 0 === u ? H : u,
            h = r.elementContext,
            m = void 0 === h ? T : h,
            v = r.altBoundary,
            y = void 0 !== v && v,
            g = r.padding,
            b = void 0 === g ? 0 : g,
            x = Y("number" != typeof b ? b : G(b, k)),
            w = m === T ? "reference" : T,
            O = e.rects.popper,
            j = e.elements[y ? w : m],
            E = _(n(j) ? j : j.contextElement || d(e.elements.popper), c, l, s),
            P = p(e.elements.reference),
            M = X({
                reference: P,
                element: O,
                strategy: "absolute",
                placement: i,
            }),
            W = N(Object.assign({}, O, M)),
            B = m === T ? W : P,
            R = {
                top: E.top - B.top + x.top,
                bottom: B.bottom - E.bottom + x.bottom,
                left: E.left - B.left + x.left,
                right: B.right - E.right + x.right,
            },
            S = e.modifiersData.offset;
        if (m === T && S) {
            var V = S[i];
            Object.keys(R).forEach(function (e) {
                var t = [L, A].indexOf(e) >= 0 ? 1 : -1,
                    n = [D, A].indexOf(e) >= 0 ? "y" : "x";
                R[e] += V[n] * t;
            });
        }
        return R;
    }
    var K = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function Q() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return !t.some(function (e) {
            return !(e && "function" == typeof e.getBoundingClientRect);
        });
    }
    function Z(e) {
        void 0 === e && (e = {});
        var t = e,
            r = t.defaultModifiers,
            o = void 0 === r ? [] : r,
            i = t.defaultOptions,
            a = void 0 === i ? K : i;
        return function (e, t, r) {
            void 0 === r && (r = a);
            var i,
                s,
                f = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, K, a),
                    modifiersData: {},
                    elements: { reference: e, popper: t },
                    attributes: {},
                    styles: {},
                },
                c = [],
                p = !1,
                u = {
                    state: f,
                    setOptions: function (r) {
                        var i = "function" == typeof r ? r(f.options) : r;
                        l(),
                            (f.options = Object.assign({}, a, f.options, i)),
                            (f.scrollParents = {
                                reference: n(e)
                                    ? w(e)
                                    : e.contextElement
                                    ? w(e.contextElement)
                                    : [],
                                popper: w(t),
                            });
                        var s,
                            p,
                            d = (function (e) {
                                var t = q(e);
                                return V.reduce(function (e, n) {
                                    return e.concat(
                                        t.filter(function (e) {
                                            return e.phase === n;
                                        })
                                    );
                                }, []);
                            })(
                                ((s = [].concat(o, f.options.modifiers)),
                                (p = s.reduce(function (e, t) {
                                    var n = e[t.name];
                                    return (
                                        (e[t.name] = n
                                            ? Object.assign({}, n, t, {
                                                  options: Object.assign(
                                                      {},
                                                      n.options,
                                                      t.options
                                                  ),
                                                  data: Object.assign(
                                                      {},
                                                      n.data,
                                                      t.data
                                                  ),
                                              })
                                            : t),
                                        e
                                    );
                                }, {})),
                                Object.keys(p).map(function (e) {
                                    return p[e];
                                }))
                            );
                        return (
                            (f.orderedModifiers = d.filter(function (e) {
                                return e.enabled;
                            })),
                            f.orderedModifiers.forEach(function (e) {
                                var t = e.name,
                                    n = e.options,
                                    r = void 0 === n ? {} : n,
                                    o = e.effect;
                                if ("function" == typeof o) {
                                    var i = o({
                                            state: f,
                                            name: t,
                                            instance: u,
                                            options: r,
                                        }),
                                        a = function () {};
                                    c.push(i || a);
                                }
                            }),
                            u.update()
                        );
                    },
                    forceUpdate: function () {
                        if (!p) {
                            var e = f.elements,
                                t = e.reference,
                                n = e.popper;
                            if (Q(t, n)) {
                                (f.rects = {
                                    reference: y(
                                        t,
                                        E(n),
                                        "fixed" === f.options.strategy
                                    ),
                                    popper: g(n),
                                }),
                                    (f.reset = !1),
                                    (f.placement = f.options.placement),
                                    f.orderedModifiers.forEach(function (e) {
                                        return (f.modifiersData[e.name] =
                                            Object.assign({}, e.data));
                                    });
                                for (
                                    var r = 0;
                                    r < f.orderedModifiers.length;
                                    r++
                                )
                                    if (!0 !== f.reset) {
                                        var o = f.orderedModifiers[r],
                                            i = o.fn,
                                            a = o.options,
                                            s = void 0 === a ? {} : a,
                                            c = o.name;
                                        "function" == typeof i &&
                                            (f =
                                                i({
                                                    state: f,
                                                    options: s,
                                                    name: c,
                                                    instance: u,
                                                }) || f);
                                    } else (f.reset = !1), (r = -1);
                            }
                        }
                    },
                    update:
                        ((i = function () {
                            return new Promise(function (e) {
                                u.forceUpdate(), e(f);
                            });
                        }),
                        function () {
                            return (
                                s ||
                                    (s = new Promise(function (e) {
                                        Promise.resolve().then(function () {
                                            (s = void 0), e(i());
                                        });
                                    })),
                                s
                            );
                        }),
                    destroy: function () {
                        l(), (p = !0);
                    },
                };
            if (!Q(e, t)) return u;
            function l() {
                c.forEach(function (e) {
                    return e();
                }),
                    (c = []);
            }
            return (
                u.setOptions(r).then(function (e) {
                    !p && r.onFirstUpdate && r.onFirstUpdate(e);
                }),
                u
            );
        };
    }
    var $ = { passive: !0 };
    var ee = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (e) {
            var n = e.state,
                r = e.instance,
                o = e.options,
                i = o.scroll,
                a = void 0 === i || i,
                s = o.resize,
                f = void 0 === s || s,
                c = t(n.elements.popper),
                p = [].concat(
                    n.scrollParents.reference,
                    n.scrollParents.popper
                );
            return (
                a &&
                    p.forEach(function (e) {
                        e.addEventListener("scroll", r.update, $);
                    }),
                f && c.addEventListener("resize", r.update, $),
                function () {
                    a &&
                        p.forEach(function (e) {
                            e.removeEventListener("scroll", r.update, $);
                        }),
                        f && c.removeEventListener("resize", r.update, $);
                }
            );
        },
        data: {},
    };
    var te = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (e) {
                var t = e.state,
                    n = e.name;
                t.modifiersData[n] = X({
                    reference: t.rects.reference,
                    element: t.rects.popper,
                    strategy: "absolute",
                    placement: t.placement,
                });
            },
            data: {},
        },
        ne = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function re(e) {
        var n,
            r = e.popper,
            o = e.popperRect,
            i = e.placement,
            a = e.variation,
            f = e.offsets,
            c = e.position,
            p = e.gpuAcceleration,
            u = e.adaptive,
            l = e.roundOffsets,
            h = e.isFixed,
            v = f.x,
            y = void 0 === v ? 0 : v,
            g = f.y,
            b = void 0 === g ? 0 : g,
            x = "function" == typeof l ? l({ x: y, y: b }) : { x: y, y: b };
        (y = x.x), (b = x.y);
        var w = f.hasOwnProperty("x"),
            O = f.hasOwnProperty("y"),
            j = P,
            M = D,
            k = window;
        if (u) {
            var W = E(r),
                H = "clientHeight",
                T = "clientWidth";
            if (
                (W === t(r) &&
                    "static" !== m((W = d(r))).position &&
                    "absolute" === c &&
                    ((H = "scrollHeight"), (T = "scrollWidth")),
                (W = W),
                i === D || ((i === P || i === L) && a === B))
            )
                (M = A),
                    (b -=
                        (h && W === k && k.visualViewport
                            ? k.visualViewport.height
                            : W[H]) - o.height),
                    (b *= p ? 1 : -1);
            if (i === P || ((i === D || i === A) && a === B))
                (j = L),
                    (y -=
                        (h && W === k && k.visualViewport
                            ? k.visualViewport.width
                            : W[T]) - o.width),
                    (y *= p ? 1 : -1);
        }
        var R,
            S = Object.assign({ position: c }, u && ne),
            V =
                !0 === l
                    ? (function (e, t) {
                          var n = e.x,
                              r = e.y,
                              o = t.devicePixelRatio || 1;
                          return { x: s(n * o) / o || 0, y: s(r * o) / o || 0 };
                      })({ x: y, y: b }, t(r))
                    : { x: y, y: b };
        return (
            (y = V.x),
            (b = V.y),
            p
                ? Object.assign(
                      {},
                      S,
                      (((R = {})[M] = O ? "0" : ""),
                      (R[j] = w ? "0" : ""),
                      (R.transform =
                          (k.devicePixelRatio || 1) <= 1
                              ? "translate(" + y + "px, " + b + "px)"
                              : "translate3d(" + y + "px, " + b + "px, 0)"),
                      R)
                  )
                : Object.assign(
                      {},
                      S,
                      (((n = {})[M] = O ? b + "px" : ""),
                      (n[j] = w ? y + "px" : ""),
                      (n.transform = ""),
                      n)
                  )
        );
    }
    var oe = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (e) {
            var t = e.state,
                n = e.options,
                r = n.gpuAcceleration,
                o = void 0 === r || r,
                i = n.adaptive,
                a = void 0 === i || i,
                s = n.roundOffsets,
                f = void 0 === s || s,
                c = {
                    placement: F(t.placement),
                    variation: U(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: o,
                    isFixed: "fixed" === t.options.strategy,
                };
            null != t.modifiersData.popperOffsets &&
                (t.styles.popper = Object.assign(
                    {},
                    t.styles.popper,
                    re(
                        Object.assign({}, c, {
                            offsets: t.modifiersData.popperOffsets,
                            position: t.options.strategy,
                            adaptive: a,
                            roundOffsets: f,
                        })
                    )
                )),
                null != t.modifiersData.arrow &&
                    (t.styles.arrow = Object.assign(
                        {},
                        t.styles.arrow,
                        re(
                            Object.assign({}, c, {
                                offsets: t.modifiersData.arrow,
                                position: "absolute",
                                adaptive: !1,
                                roundOffsets: f,
                            })
                        )
                    )),
                (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                    "data-popper-placement": t.placement,
                }));
        },
        data: {},
    };
    var ie = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (e) {
            var t = e.state;
            Object.keys(t.elements).forEach(function (e) {
                var n = t.styles[e] || {},
                    o = t.attributes[e] || {},
                    i = t.elements[e];
                r(i) &&
                    l(i) &&
                    (Object.assign(i.style, n),
                    Object.keys(o).forEach(function (e) {
                        var t = o[e];
                        !1 === t
                            ? i.removeAttribute(e)
                            : i.setAttribute(e, !0 === t ? "" : t);
                    }));
            });
        },
        effect: function (e) {
            var t = e.state,
                n = {
                    popper: {
                        position: t.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0",
                    },
                    arrow: { position: "absolute" },
                    reference: {},
                };
            return (
                Object.assign(t.elements.popper.style, n.popper),
                (t.styles = n),
                t.elements.arrow &&
                    Object.assign(t.elements.arrow.style, n.arrow),
                function () {
                    Object.keys(t.elements).forEach(function (e) {
                        var o = t.elements[e],
                            i = t.attributes[e] || {},
                            a = Object.keys(
                                t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
                            ).reduce(function (e, t) {
                                return (e[t] = ""), e;
                            }, {});
                        r(o) &&
                            l(o) &&
                            (Object.assign(o.style, a),
                            Object.keys(i).forEach(function (e) {
                                o.removeAttribute(e);
                            }));
                    });
                }
            );
        },
        requires: ["computeStyles"],
    };
    var ae = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function (e) {
                var t = e.state,
                    n = e.options,
                    r = e.name,
                    o = n.offset,
                    i = void 0 === o ? [0, 0] : o,
                    a = S.reduce(function (e, n) {
                        return (
                            (e[n] = (function (e, t, n) {
                                var r = F(e),
                                    o = [P, D].indexOf(r) >= 0 ? -1 : 1,
                                    i =
                                        "function" == typeof n
                                            ? n(
                                                  Object.assign({}, t, {
                                                      placement: e,
                                                  })
                                              )
                                            : n,
                                    a = i[0],
                                    s = i[1];
                                return (
                                    (a = a || 0),
                                    (s = (s || 0) * o),
                                    [P, L].indexOf(r) >= 0
                                        ? { x: s, y: a }
                                        : { x: a, y: s }
                                );
                            })(n, t.rects, i)),
                            e
                        );
                    }, {}),
                    s = a[t.placement],
                    f = s.x,
                    c = s.y;
                null != t.modifiersData.popperOffsets &&
                    ((t.modifiersData.popperOffsets.x += f),
                    (t.modifiersData.popperOffsets.y += c)),
                    (t.modifiersData[r] = a);
            },
        },
        se = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function fe(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
            return se[e];
        });
    }
    var ce = { start: "end", end: "start" };
    function pe(e) {
        return e.replace(/start|end/g, function (e) {
            return ce[e];
        });
    }
    function ue(e, t) {
        void 0 === t && (t = {});
        var n = t,
            r = n.placement,
            o = n.boundary,
            i = n.rootBoundary,
            a = n.padding,
            s = n.flipVariations,
            f = n.allowedAutoPlacements,
            c = void 0 === f ? S : f,
            p = U(r),
            u = p
                ? s
                    ? R
                    : R.filter(function (e) {
                          return U(e) === p;
                      })
                : k,
            l = u.filter(function (e) {
                return c.indexOf(e) >= 0;
            });
        0 === l.length && (l = u);
        var d = l.reduce(function (t, n) {
            return (
                (t[n] = J(e, {
                    placement: n,
                    boundary: o,
                    rootBoundary: i,
                    padding: a,
                })[F(n)]),
                t
            );
        }, {});
        return Object.keys(d).sort(function (e, t) {
            return d[e] - d[t];
        });
    }
    var le = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (e) {
            var t = e.state,
                n = e.options,
                r = e.name;
            if (!t.modifiersData[r]._skip) {
                for (
                    var o = n.mainAxis,
                        i = void 0 === o || o,
                        a = n.altAxis,
                        s = void 0 === a || a,
                        f = n.fallbackPlacements,
                        c = n.padding,
                        p = n.boundary,
                        u = n.rootBoundary,
                        l = n.altBoundary,
                        d = n.flipVariations,
                        h = void 0 === d || d,
                        m = n.allowedAutoPlacements,
                        v = t.options.placement,
                        y = F(v),
                        g =
                            f ||
                            (y === v || !h
                                ? [fe(v)]
                                : (function (e) {
                                      if (F(e) === M) return [];
                                      var t = fe(e);
                                      return [pe(e), t, pe(t)];
                                  })(v)),
                        b = [v].concat(g).reduce(function (e, n) {
                            return e.concat(
                                F(n) === M
                                    ? ue(t, {
                                          placement: n,
                                          boundary: p,
                                          rootBoundary: u,
                                          padding: c,
                                          flipVariations: h,
                                          allowedAutoPlacements: m,
                                      })
                                    : n
                            );
                        }, []),
                        x = t.rects.reference,
                        w = t.rects.popper,
                        O = new Map(),
                        j = !0,
                        E = b[0],
                        k = 0;
                    k < b.length;
                    k++
                ) {
                    var B = b[k],
                        H = F(B),
                        T = U(B) === W,
                        R = [D, A].indexOf(H) >= 0,
                        S = R ? "width" : "height",
                        V = J(t, {
                            placement: B,
                            boundary: p,
                            rootBoundary: u,
                            altBoundary: l,
                            padding: c,
                        }),
                        q = R ? (T ? L : P) : T ? A : D;
                    x[S] > w[S] && (q = fe(q));
                    var C = fe(q),
                        N = [];
                    if (
                        (i && N.push(V[H] <= 0),
                        s && N.push(V[q] <= 0, V[C] <= 0),
                        N.every(function (e) {
                            return e;
                        }))
                    ) {
                        (E = B), (j = !1);
                        break;
                    }
                    O.set(B, N);
                }
                if (j)
                    for (
                        var I = function (e) {
                                var t = b.find(function (t) {
                                    var n = O.get(t);
                                    if (n)
                                        return n
                                            .slice(0, e)
                                            .every(function (e) {
                                                return e;
                                            });
                                });
                                if (t) return (E = t), "break";
                            },
                            _ = h ? 3 : 1;
                        _ > 0;
                        _--
                    ) {
                        if ("break" === I(_)) break;
                    }
                t.placement !== E &&
                    ((t.modifiersData[r]._skip = !0),
                    (t.placement = E),
                    (t.reset = !0));
            }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
    };
    function de(e, t, n) {
        return i(e, a(t, n));
    }
    var he = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
            var t = e.state,
                n = e.options,
                r = e.name,
                o = n.mainAxis,
                s = void 0 === o || o,
                f = n.altAxis,
                c = void 0 !== f && f,
                p = n.boundary,
                u = n.rootBoundary,
                l = n.altBoundary,
                d = n.padding,
                h = n.tether,
                m = void 0 === h || h,
                v = n.tetherOffset,
                y = void 0 === v ? 0 : v,
                b = J(t, {
                    boundary: p,
                    rootBoundary: u,
                    padding: d,
                    altBoundary: l,
                }),
                x = F(t.placement),
                w = U(t.placement),
                O = !w,
                j = z(x),
                M = "x" === j ? "y" : "x",
                k = t.modifiersData.popperOffsets,
                B = t.rects.reference,
                H = t.rects.popper,
                T =
                    "function" == typeof y
                        ? y(
                              Object.assign({}, t.rects, {
                                  placement: t.placement,
                              })
                          )
                        : y,
                R =
                    "number" == typeof T
                        ? { mainAxis: T, altAxis: T }
                        : Object.assign({ mainAxis: 0, altAxis: 0 }, T),
                S = t.modifiersData.offset
                    ? t.modifiersData.offset[t.placement]
                    : null,
                V = { x: 0, y: 0 };
            if (k) {
                if (s) {
                    var q,
                        C = "y" === j ? D : P,
                        N = "y" === j ? A : L,
                        I = "y" === j ? "height" : "width",
                        _ = k[j],
                        X = _ + b[C],
                        Y = _ - b[N],
                        G = m ? -H[I] / 2 : 0,
                        K = w === W ? B[I] : H[I],
                        Q = w === W ? -H[I] : -B[I],
                        Z = t.elements.arrow,
                        $ = m && Z ? g(Z) : { width: 0, height: 0 },
                        ee = t.modifiersData["arrow#persistent"]
                            ? t.modifiersData["arrow#persistent"].padding
                            : { top: 0, right: 0, bottom: 0, left: 0 },
                        te = ee[C],
                        ne = ee[N],
                        re = de(0, B[I], $[I]),
                        oe = O
                            ? B[I] / 2 - G - re - te - R.mainAxis
                            : K - re - te - R.mainAxis,
                        ie = O
                            ? -B[I] / 2 + G + re + ne + R.mainAxis
                            : Q + re + ne + R.mainAxis,
                        ae = t.elements.arrow && E(t.elements.arrow),
                        se = ae
                            ? "y" === j
                                ? ae.clientTop || 0
                                : ae.clientLeft || 0
                            : 0,
                        fe = null != (q = null == S ? void 0 : S[j]) ? q : 0,
                        ce = _ + ie - fe,
                        pe = de(
                            m ? a(X, _ + oe - fe - se) : X,
                            _,
                            m ? i(Y, ce) : Y
                        );
                    (k[j] = pe), (V[j] = pe - _);
                }
                if (c) {
                    var ue,
                        le = "x" === j ? D : P,
                        he = "x" === j ? A : L,
                        me = k[M],
                        ve = "y" === M ? "height" : "width",
                        ye = me + b[le],
                        ge = me - b[he],
                        be = -1 !== [D, P].indexOf(x),
                        xe = null != (ue = null == S ? void 0 : S[M]) ? ue : 0,
                        we = be ? ye : me - B[ve] - H[ve] - xe + R.altAxis,
                        Oe = be ? me + B[ve] + H[ve] - xe - R.altAxis : ge,
                        je =
                            m && be
                                ? (function (e, t, n) {
                                      var r = de(e, t, n);
                                      return r > n ? n : r;
                                  })(we, me, Oe)
                                : de(m ? we : ye, me, m ? Oe : ge);
                    (k[M] = je), (V[M] = je - me);
                }
                t.modifiersData[r] = V;
            }
        },
        requiresIfExists: ["offset"],
    };
    var me = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
            var t,
                n = e.state,
                r = e.name,
                o = e.options,
                i = n.elements.arrow,
                a = n.modifiersData.popperOffsets,
                s = F(n.placement),
                f = z(s),
                c = [P, L].indexOf(s) >= 0 ? "height" : "width";
            if (i && a) {
                var p = (function (e, t) {
                        return Y(
                            "number" !=
                                typeof (e =
                                    "function" == typeof e
                                        ? e(
                                              Object.assign({}, t.rects, {
                                                  placement: t.placement,
                                              })
                                          )
                                        : e)
                                ? e
                                : G(e, k)
                        );
                    })(o.padding, n),
                    u = g(i),
                    l = "y" === f ? D : P,
                    d = "y" === f ? A : L,
                    h =
                        n.rects.reference[c] +
                        n.rects.reference[f] -
                        a[f] -
                        n.rects.popper[c],
                    m = a[f] - n.rects.reference[f],
                    v = E(i),
                    y = v
                        ? "y" === f
                            ? v.clientHeight || 0
                            : v.clientWidth || 0
                        : 0,
                    b = h / 2 - m / 2,
                    x = p[l],
                    w = y - u[c] - p[d],
                    O = y / 2 - u[c] / 2 + b,
                    j = de(x, O, w),
                    M = f;
                n.modifiersData[r] =
                    (((t = {})[M] = j), (t.centerOffset = j - O), t);
            }
        },
        effect: function (e) {
            var t = e.state,
                n = e.options.element,
                r = void 0 === n ? "[data-popper-arrow]" : n;
            null != r &&
                ("string" != typeof r ||
                    (r = t.elements.popper.querySelector(r))) &&
                C(t.elements.popper, r) &&
                (t.elements.arrow = r);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
    };
    function ve(e, t, n) {
        return (
            void 0 === n && (n = { x: 0, y: 0 }),
            {
                top: e.top - t.height - n.y,
                right: e.right - t.width + n.x,
                bottom: e.bottom - t.height + n.y,
                left: e.left - t.width - n.x,
            }
        );
    }
    function ye(e) {
        return [D, L, A, P].some(function (t) {
            return e[t] >= 0;
        });
    }
    var ge = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (e) {
                var t = e.state,
                    n = e.name,
                    r = t.rects.reference,
                    o = t.rects.popper,
                    i = t.modifiersData.preventOverflow,
                    a = J(t, { elementContext: "reference" }),
                    s = J(t, { altBoundary: !0 }),
                    f = ve(a, r),
                    c = ve(s, o, i),
                    p = ye(f),
                    u = ye(c);
                (t.modifiersData[n] = {
                    referenceClippingOffsets: f,
                    popperEscapeOffsets: c,
                    isReferenceHidden: p,
                    hasPopperEscaped: u,
                }),
                    (t.attributes.popper = Object.assign(
                        {},
                        t.attributes.popper,
                        {
                            "data-popper-reference-hidden": p,
                            "data-popper-escaped": u,
                        }
                    ));
            },
        },
        be = Z({ defaultModifiers: [ee, te, oe, ie] }),
        xe = [ee, te, oe, ie, ae, le, he, me, ge],
        we = Z({ defaultModifiers: xe });
    (e.applyStyles = ie),
        (e.arrow = me),
        (e.computeStyles = oe),
        (e.createPopper = we),
        (e.createPopperLite = be),
        (e.defaultModifiers = xe),
        (e.detectOverflow = J),
        (e.eventListeners = ee),
        (e.flip = le),
        (e.hide = ge),
        (e.offset = ae),
        (e.popperGenerator = Z),
        (e.popperOffsets = te),
        (e.preventOverflow = he),
        Object.defineProperty(e, "__esModule", { value: !0 });
});

    
        const createPopover = (target, popover) => {
    if (oldPopper) {
        oldPopper.destroy();
    }
    oldPopper = Popper.createPopper(target, popover, {
        placement: "bottom-start",
    });
};

function darkThemeEnabled() {
    if (
        localStorage.getItem("color-theme") === "dark" ||
        (!("color-theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
        return true;
}

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (darkThemeEnabled()) {
    document.documentElement.classList.add("dark");
    themeSwitcher.checked = true;
    themeSwitcherMobile.checked = true;
} else {
    document.documentElement.classList.remove("dark");
}

themeSwitcher.addEventListener("click", function () {
    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem("color-theme") === "light") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
        }
    }
});

if (themeSwitcherMobile) {
    themeSwitcherMobile.addEventListener("click", function () {
        // if set via local storage previously
        if (localStorage.getItem("color-theme")) {
            if (localStorage.getItem("color-theme") === "light") {
                document.documentElement.classList.add("dark");
                localStorage.setItem("color-theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("color-theme", "light");
            }

            // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains("dark")) {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("color-theme", "light");
            } else {
                document.documentElement.classList.add("dark");
                localStorage.setItem("color-theme", "dark");
            }
        }
    });
}

    
        if (qualityList) {
    qualityList.addEventListener("click", function (e) {
        if (e.target.tagName !== "LI") {
            return;
        }

        qualityItems.forEach((list) => list.classList.remove("active"));
        e.target.classList.add("active");

        const _currentQualityBtn = document.querySelector(".open-quality");
        _currentQualityBtn.querySelector("span").innerHTML = e.target.innerText;
        _currentQualityBtn.dataset.quality = e.target.dataset.value;

        hideAllQualityPopover();
        const popover = document.querySelector(".popover-quality");
        popover.classList.add("hidden");
    });
}

if (btnQuality) {
    btnQuality.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(".btn-quality");
        const popover = document.querySelector(".popover-quality");
        createPopover(target, popover);

        if (btnQuality.classList.contains("open-quality")) {
            target.classList.remove("open-quality");
            popover.classList.add("hidden");
        } else {
            target.classList.add("open-quality");
            popover.classList.remove("hidden");
        }
    });
}

if (menuControl) {
    menuControl.addEventListener("click", (evt) => {
        evt.preventDefault();
        html.classList.add("open-nav");
    });
}

if (mobileToggle) {
    mobileToggle.addEventListener("click", (evt) => {
        evt.preventDefault();
        html.classList.remove("open-nav");
    });
}

   
        (function () {
    const url = new URL(window.location.href);
    const clickID = url.searchParams.get("click_id");
    const sourceID = url.searchParams.get("source_id");

    // Push notification SDK code removed to prevent browser notification permission prompts
})();

var touchDevice =
    navigator.maxTouchPoints || "ontouchstart" in document.documentElement;

var download_is_processing = false;
var inserted_custom_script = false;

function quicklink() {
    var link_now = new URL(window.location.href);
    var r = link_now.searchParams.get("r");
    var f = link_now.searchParams.get("f");

    var mapping = {
        ddownr: {
            1: "mp3",
            3: "m4a",
            4: "m4a",
            5: "720",
            6: "1080",
            7: "1080",
            8: "8k",
            9: "360",
            10: "480",
            11: "4k",
        },
        coconvert: {
            1: "mp3",
            2: "m4a",
            3: "webm",
            4: "360",
            5: "480",
            6: "720",
            7: "1080",
            8: "1080",
            9: "4k",
            10: "8k",
            11: "aac",
            12: "flac",
            13: "opus",
            14: "ogg",
            15: "wav",
        },
        loader: {
            1: "mp3",
            2: "m4a",
            3: "webm",
            4: "360",
            5: "480",
            6: "720",
            7: "1080",
            8: "1080",
            9: "4k",
            10: "8k",
            11: "aac",
            12: "flac",
            13: "opus",
            14: "ogg",
            15: "wav",
        },
    };

    if (r != null) {
        document.getElementById("link").value = decodeURIComponent(
            link_now.searchParams.get("link")
        );

        if (mapping[r] && mapping[r][f]) {
            f = mapping[r][f];
        }
        document.getElementById("format").value = f;

        d();
    }
}

var copyrighted = [];
var downloaded_formats = [];

// Configuration for country-based redirects
const redirectConfig = {
    // Example: 'CountryCode': PercentageChance (0-100)
    // 'BR': 50, // Brazil: 30% chance
    // 'IL': 50, // Israel: 20% chance
    // 'JP': 50, // Japan: 10% chance
    // 'CA': 50, // Canada: 30% chance
    // 'AU': 50, // Australia: 30% chance
    // 'NZ': 50, // New Zealand: 30% chance
    // 'SG': 50, // Singapore: 30% chance
    // 'IN': 50, // India: 30% chance
    // 'MY': 50, // Malaysia: 30% chance
    // 'PH': 50, // Philippines: 30% chance
    // 'TH': 50, // Thailand: 30% chance
    // 'VN': 50, // Vietnam: 30% chance
    // 'ID': 50, // Indonesia: 30% chance
    // 'HR': 50, // Croatia: 30% chance
    // 'RO': 50, // Romania: 30% chance
    // 'BG': 50, // Bulgaria: 30% chance
    // 'TR': 50, // Turkey: 30% chance
    // 'GR': 50, // Greece: 30% chance
    // 'PT': 50, // Portugal: 30% chance
    // 'PL': 50, // Poland: 30% chance
    // 'AT': 50, // Austria: 30% chance
    // 'CH': 50, // Switzerland: 30% chance
    // 'BE': 50, // Belgium: 30% chance
    // 'NL': 50, // Netherlands: 30% chance
    // 'NO': 50, // Norway: 30% chance
    // 'SE': 50, // Sweden: 30% chance
    // 'DK': 50, // Denmark: 30% chance
    // 'FI': 50, // Finland: 30% chance
    // 'IS': 50, // Iceland: 30% chance
    // 'LT': 50, // Lithuania: 30% chance
    // 'EE': 50, // Estonia: 30% chance
    // 'LV': 50, // Latvia: 30% chance
    // 'CZ': 50, // Czechia: 30% chance
    // 'SK': 50, // Slovakia: 30% chance
    // 'HU': 50, // Hungary: 30% chance
    // 'RO': 50, // Romania: 30% chance

    // Add more countries and percentages as needed
};

// Global state for tracking download-specific information
let downloadStates = {};

// --- START DEBUG LOGGING ---
console.log("DEBUG: downloadStates initialized globally", downloadStates);
// --- END DEBUG LOGGING ---

// Function to determine if a redirect should happen based on country and probability
function determineRedirect(userCountry, downloadId) {
    // Always return false to prevent redirections
    console.log(`Download ${downloadId}: Redirects disabled.`);
    return false;
}

const checkCopyright = (url, i, format) => {
    fetch(
        "https://loader.to/ajax/copyright.php?url=" +
        encodeURIComponent(url) +
        "&format=" +
        format +
        "&randy=" +
        i,
        {
            cache: "no-store",
        }
    )
        .then((response) => response.json())
        .then((data) => {
            if (data.copyright == 1) {
                console.log("COPYRIGHTED");
                copyrighted.push(i);

                // Add the format to downloaded_formats array
                let obj = {
                    id: i,
                    format: format,
                };

                downloaded_formats.push(obj);
                console.log(downloaded_formats);
            }
        })
        .catch((error) => console.error(error));
};

// Add this function at the top level, before fetchProgress
function animateProgressIncrements(progressBar, startValue, targetValue, duration, updateText, btnDownloadText) {
    // Clear any existing animation
    if (progressBar.animationInterval) {
        clearInterval(progressBar.animationInterval);
    }
    
    const steps = 10; // Number of micro-steps
    const increment = (targetValue - startValue) / steps;
    const stepDuration = duration / steps;
    let currentStep = 0;
    
    progressBar.animationInterval = setInterval(() => {
        currentStep++;
        if (currentStep >= steps) {
            // Final step - set to exact target
            progressBar.style.width = targetValue + "%";
            if (updateText) {
                btnDownloadText.innerText = `Download in Progress ... ${targetValue.toFixed(2)}%`;
            }
            clearInterval(progressBar.animationInterval);
            progressBar.animationInterval = null;
        } else {
            // Intermediate step
            const currentValue = startValue + (increment * currentStep);
            progressBar.style.width = currentValue + "%";
            if (updateText) {
                btnDownloadText.innerText = `Download in Progress ... ${currentValue.toFixed(2)}%`;
            }
        }
    }, stepDuration);
}

const fetchProgress = (i, downloadCount, progress_url) => {
    const downloadBox = document.getElementById(
        "download-item" + downloadCount
    );
    let btnDownload = downloadBox.querySelector(
        ".section-result .btn-download"
    );
    let btnDownloadText = btnDownload.querySelector("span");
    let progressBar = btnDownload.querySelector(".progress");

    // Add animation styles to progress bar for smooth transitions
    if (!progressBar.hasAttribute("data-smooth-progress")) {
        progressBar.setAttribute("data-smooth-progress", "true");
        progressBar.style.transition = "width 1.4s ease-in-out";
    }

    // Prevent clicks during download by adding click handler that stops default behavior
    if (!btnDownload.hasAttribute("data-has-progress-handler")) {
        btnDownload.setAttribute("data-has-progress-handler", "true");
        btnDownload.addEventListener("click", function(e) {
            if (btnDownload.classList.contains("disabled") || 
                btnDownloadText.innerText.includes("Progress") || 
                btnDownloadText.innerText.includes("Converting")) {
                e.preventDefault();
                return false;
            }
        });
    }

    const downloadId = i;
    // --- START DEBUG LOGGING ---
    console.log(`DEBUG: fetchProgress START for ID: ${downloadId}, downloadCount: ${downloadCount}, URL: ${progress_url}`);
    // --- END DEBUG LOGGING ---
    
    const state = downloadStates[downloadId];

    // Gracefully handle if state doesn't exist (e.g., page reload during download)
    if (!state) {
        console.warn(`No state found for download ID: ${downloadId}. Proceeding without redirect logic.`);
        // Fallback to ensure the rest of the function can execute, but without state tracking.
        // Or, you could choose to stop polling here if state is critical.
    } else {
        // --- START DEBUG LOGGING ---
        console.log(`DEBUG: fetchProgress State found for ID: ${downloadId}`, JSON.stringify(state));
        // --- END DEBUG LOGGING ---
        state.progressCalls++; // Increment counter only if state exists
        // --- START DEBUG LOGGING ---
        console.log(`DEBUG: fetchProgress Incremented calls for ID: ${downloadId} to ${state.progressCalls}`);
        // --- END DEBUG LOGGING ---

        // Redirect logic removed
    }


    const fetchWithTimeout = (url, options, timeout = 2000) => {
        return Promise.race([
            fetch(url, options),
            new Promise((_, reject) =>
                setTimeout(
                    () => reject(new Error("Request timed out")),
                    timeout
                )
            ),
        ]);
    };

    fetchWithTimeout(progress_url || "https://loader.to/api/progress?id=" + i, {
        cache: "no-store",
    })
        .then((response) => response.json())
        .then((data) => {
            const responseText = data?.text || "";
            if (
                responseText.toLowerCase() === "finished" ||
                responseText.toLowerCase() === "error" ||
                data.success === 1
            ) {
                progressBar.style.width = "100%";

                // Handle the specific error case
                if (
                    data.success === 1 &&
                    data.download_url === null &&
                    data.text
                ) {
                    btnDownload.classList.add("failed");
                    btnDownloadText.innerHTML = `<span class="error-message">${data.text}</span>`;
                    btnDownload.classList.remove("animate-pulse");
                    // --- START DEBUG LOGGING ---
                    console.log(`DEBUG: fetchProgress API Error for ID: ${downloadId}: ${data.text}. Stopping poll.`);
                    // --- END DEBUG LOGGING ---
                    return; // Stop polling
                }
            }

            if (responseText.toLowerCase() === "downloading") {
                let downP = data.progress / 10;
                let prevDownP = parseFloat(progressBar.dataset.downp || 0);
                let targetDownP = parseFloat((downP > prevDownP ? downP : prevDownP).toFixed(2));
                
                // Store the target percentage
                progressBar.dataset.targetDownp = targetDownP;
                
                // If this is a significant jump, create smooth increments with animation
                if (targetDownP - prevDownP > 2) {
                    // Use the animation function for smooth transitions
                    animateProgressIncrements(progressBar, prevDownP, targetDownP, 1400, true, btnDownloadText);
                    // Update the stored value right away, but visual updates happen in the animation
                    progressBar.dataset.downp = targetDownP;
                } else {
                    // For smaller jumps, just update directly
                    progressBar.style.width = targetDownP + "%";
                    progressBar.dataset.downp = targetDownP;
                    btnDownloadText.innerText = `Download in Progress ... ${targetDownP}%`;
                }
                
                // Ensure button is properly disabled during download
                btnDownload.classList.add("disabled");
                btnDownload.classList.add("cursor-not-allowed");
                // Remove href temporarily to prevent navigation
                btnDownload.setAttribute("data-original-href", btnDownload.href || "");
                btnDownload.removeAttribute("href");
                
            } else if (responseText.toLowerCase() === "converting") {
                let convP = data.progress / 10;
                let prevConvP = parseFloat(progressBar.dataset.convp || 0);
                let targetConvP = parseFloat((convP > prevConvP ? convP : prevConvP).toFixed(2));
                
                // Store the target percentage
                progressBar.dataset.targetConvp = targetConvP;
                
                // If this is a significant jump, create smooth increments with animation
                if (targetConvP - prevConvP > 2) {
                    // Use the animation function for smooth transitions, but don't update text for "Converting..."
                    animateProgressIncrements(progressBar, prevConvP, targetConvP, 1400, false, null);
                    // Update stored values right away
                    progressBar.dataset.convp = targetConvP;
                    progressBar.dataset.downp = targetConvP; // Note: Using existing downp pattern
                } else {
                    // For smaller jumps, just update directly
                    progressBar.style.width = targetConvP + "%";
                    progressBar.dataset.convp = targetConvP;
                    progressBar.dataset.downp = targetConvP; // Note: Using existing downp pattern
                }
                
                // Always update text for converting
                btnDownloadText.innerText = `Converting ...`;
                
                // Ensure button is properly disabled during conversion
                btnDownload.classList.add("disabled");
                btnDownload.classList.add("cursor-not-allowed");
                // Remove href temporarily to prevent navigation
                btnDownload.setAttribute("data-original-href", btnDownload.href || "");
                btnDownload.removeAttribute("href");
            } else if (data.success == 1 && data.download_url == null) {
                progressBar.style.width = "100%";
                btnDownload.classList.add("failed");
                // Using data.text if available for specific error, otherwise generic errorText
                const errorText = data.text || "Download failed. Please try again.";
                btnDownloadText.innerHTML = `<span class="error-message">${errorText}</span>`;
                btnDownload.classList.remove("animate-pulse");
                // --- START DEBUG LOGGING ---
                console.log(`DEBUG: fetchProgress API Error (No Download URL) for ID: ${downloadId}. Text: ${data.text}. Stopping poll.`);
                // --- END DEBUG LOGGING ---
                return; // Stop polling
            }

            if (responseText.toLowerCase() === "finished") {
                const hasDownloadUrl = data.download_url != null;
                
                // Restore original href if it was saved, or set the new download URL
                if (btnDownload.hasAttribute("data-original-href") && !hasDownloadUrl) {
                    btnDownload.href = btnDownload.getAttribute("data-original-href");
                    btnDownload.removeAttribute("data-original-href");
                } else {
                    btnDownload.href = hasDownloadUrl
                        ? data.download_url
                        : "https://www.byclickdownloader.com/?source=loader2&innerpage=error";
                }

                // Use specific 'downloadText' variable if available, otherwise generic text
                btnDownloadText.innerHTML =
                    hasDownloadUrl && data.download_url.includes("loader.to")
                        ? "Redirection"
                        : "Download";

                if (hasDownloadUrl) {
                    btnDownload.classList.remove("disabled");
                    btnDownload.classList.remove("cursor-not-allowed");
                    btnDownload.classList.remove("animate-pulse");
                } else {
                    // Keep failed state if no download URL and text indicated failure earlier
                    if (!btnDownload.classList.contains('failed')) {
                        btnDownload.classList.add("disabled");
                        btnDownload.classList.add("cursor-not-allowed");
                    }
                    btnDownload.classList.remove("animate-pulse"); // Ensure pulse stops regardless
                }

                // --- START DEBUG LOGGING ---
                console.log(`DEBUG: fetchProgress API Finished for ID: ${downloadId}. Has URL: ${hasDownloadUrl}. Stopping poll.`);
                // --- END DEBUG LOGGING ---
                return; // Stop polling
            }

            // Check redirect state again before making recursive call
            const currentState = downloadStates[downloadId]; // Re-fetch state in case it was deleted or modified
            // Removed redirect check

            if (
                responseText.toLowerCase() !== "finished" &&
                responseText.toLowerCase() !== "error" &&
                !(data.success === 1 && data.download_url === null && data.text) // Existing error condition
            ) {
                // --- START DEBUG LOGGING ---
                console.log(`DEBUG: fetchProgress Scheduling next poll for ID: ${downloadId}`);
                // --- END DEBUG LOGGING ---
                let originTitle = document.title.replace(/\(\d+\)/, "");
                document.title = originTitle + "(" + download_count + ")";
                setTimeout(fetchProgress.bind(null, i, downloadCount, progress_url), 1500);
            } else {
                // --- START DEBUG LOGGING ---
                console.log(`DEBUG: fetchProgress NOT scheduling next poll for ID: ${downloadId}. Reason: ${responseText}`);
                // --- END DEBUG LOGGING ---
                // Optional: Clean up state if download is finished or errored normally
                // if (downloadStates[downloadId]) {
                //    delete downloadStates[downloadId];
                // }
            }
        })
        .catch((error) => {
            // clearInterval(inprogressTimer);
            // --- START DEBUG LOGGING ---
            console.error(`DEBUG: fetchProgress CATCH error for ID: ${downloadId}`, error);
            // --- END DEBUG LOGGING ---
            // btnDownload.classList.add("failed");
            // btnDownloadText.innerHTML = errorText;

            // Always retry on error, redirect check removed
            setTimeout(fetchProgress.bind(null, i, downloadCount, progress_url), 1500);
        });
};

const loadNext = (limit, id, url) => {
    var old_limit = parseInt(limit) - 25;

    fetch(
        "https://loader.to/api/ajax/playlistJSON?limit=" +
        old_limit +
        "&api=dfcb6d76f2f6a9894gjkege8a4ab232222" +
        "&url=" +
        encodeURIComponent(link),
        {
            cache: "no-store",
        }
    )
        .then((response) => response.json())
        .then((data) => {
            var prev_data = data;

            fetch(
                "https://loader.to/api/ajax/playlistJSON?limit=" +
                limit +
                "&api=dfcb6d76f2f6a9894gjkege8a4ab232222" +
                "&url=" +
                encodeURIComponent(link),
                {
                    cache: "no-store",
                }
            )
                .then((response) => response.json())
                .then((data) => {
                    //if response data is equal to previous data we make "load more" button disabled so this is the end of playlist
                    if (
                        Object.keys(data).length !=
                        Object.keys(prev_data).length
                    ) {
                        //filtering out new data from response
                        const serialized_Items_Prev = prev_data.map((i) =>
                            JSON.stringify(i)
                        );
                        const NewItems = data.filter(
                            (i) =>
                                !serialized_Items_Prev.includes(
                                    JSON.stringify(i)
                                )
                        );

                        //rendering cards with filtered out data
                        for (let i = 0; i < NewItems.length; i++) {
                            let videoData = NewItems[i];
                            render_popup_card(
                                link,
                                videoData.url,
                                videoData.info["thumbnail_url"],
                                videoData.info["title"]
                            );
                        }
                        let new_limit = parseInt(limit) + 25;
                        document
                            .getElementById("loadmore_" + url)
                            .setAttribute(
                                "onclick",
                                "loadNext('" +
                                new_limit +
                                "', 'popup_cards_" +
                                url +
                                "','" +
                                url +
                                "')"
                            );
                    } else {
                        document
                            .getElementById("loadmore_" + url)
                            .setAttribute("disabled", "true");
                        document
                            .getElementById("loadmore_" + url)
                            .classList.add("pointer-events-none");
                        document
                            .getElementById("loadmore_" + url)
                            .classList.add("opacity-50");
                    }
                })
                .catch((error) => console.error(error));
        })
        .catch((error) => console.error(error));

    // fetch("https://loader.to/ajax/playlist.php?limit=" + limit + "&url=" + encodeURIComponent(url) + "&api=dfcb6d76f2f6a9894gjkege8a4ab232222", {
};

const parseYtId = (s) => {
    let e;
    if (s.indexOf("youtube.com/shorts/") > -1) {
        e = /\/shorts\/([a-zA-Z0-9\-_]{11})/.exec(s);
    } else if (s.indexOf("youtube.com/") > -1) {
        e = /v=([a-zA-Z0-9\-_]{11})/.exec(s);
    } else if (s.indexOf("youtu.be/") > -1) {
        e = /\/([a-zA-Z0-9\-_]{11})/.exec(s);
    }
    if (e) {
        return e[1];
    }
    return null;
};

const isYouTube = (url) => {
    let regex =
        /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
    return regex.test(url);
};

const downloadPlaceHolder = document.querySelector(
    ".section-single-result--placeholder"
);
const downloadResultList = document.querySelector(".section-result-list");

const downloadFromParseYoutubeId = (link, data, format = null) => {
    // checkCopyright(link, data.id, format);
    download_count++;

    let result = document.createElement("div");
    result.classList.add("section-result");
    result.classList.add("section-single-result");
    result.id = "download-item" + download_count;
    result.innerHTML = singleResultTemplate;

    // if (!inserted_custom_script) {
    //     (function (d, z, s) {
    //         s.src = "https://" + d + "/401/" + z;
    //         try {
    //             (document.body || document.documentElement).appendChild(s);
    //         } catch (e) {}
    //     })("cogaijaimt.net", 8192484, document.createElement("script"));

    //     inserted_custom_script = true;
    // }

    // If your script is external, set the src attribute

    // let script = document.createElement("script");
    // script.type = "text/javascript";
    // script.async = true;
    // script.src = "//egalitysarking.com/tC8ko5GSNF955/80662"; // Example script URL

    // If the script is inline, you can set its content directly
    // script.textContent = 'console.log("Script runs here!");'; // Example inline script
    // if (!touchDevice) {
    //     result.appendChild(script); // Append the script to the result div
    // }

    let videoThumb = result.querySelector(".video-thumb img");
    videoThumb.src = data.info.image;

    let videoTitle = result.querySelector(".video-title");
    videoTitle.innerHTML = data.info.title;

    let videoUrl = result.querySelector(".video-url");
    let inputLink = document.querySelector(".input-url").value;
    videoUrl.innerHTML = `<span>URL:</span> ${inputLink}`;

    let tagList = result.querySelector(".tag-list");
    tagList.innerHTML = renderTagList(format);

    // create result
    downloadResultList.prepend(result);

    let btnDownloadConverted = result.querySelector(
        ".section-result .btn-download"
    );
    btnDownloadConverted.className = "btn-download";

    download_is_processing = true;

    // clearInterval(inprogressTimer);
    // inprogressTimer = setInterval(() => fetchProgress(data.id), 750);
    fetchProgress(data.id, download_count, data.progress_url);
    return;
};

const downloadFromYoutubeId = (data, link, format) => {
    dataSize = Object.keys(data).length;
    download_count++;

    // checkCopyright(link, data.id, format);

    //it was needed to write this hack to detect if is it playlist in response or just single video. Original api point gives "is_playlist" flag in response data. But in given /api/ajax/playlistJSON point gives no data about is it playlist or not in response.
    // --- START DEBUG LOGGING ---
    console.log(`DEBUG: downloadFromYoutubeId START - Link: ${link}, Format: ${format}, Data Size: ${dataSize}`);
    console.log(`DEBUG: downloadFromYoutubeId Data:`, data);
    // --- END DEBUG LOGGING ---
    if (dataSize > 1) {
        // --- START DEBUG LOGGING ---
        console.log(`DEBUG: downloadFromYoutubeId - Playlist detected (size > 1). Rendering playlist UI.`);
        // --- END DEBUG LOGGING ---
        // render card playlist
        let playlistResult = document.createElement("div");
        playlistResult.innerHTML = playlistResultTemplate;
        playlistResult.id = "playlist-" + download_count;
        playlistResult.className =
            "section section-result section-playlist-result active";
        let _title = playlistResult.querySelector(".playlist-title");
        _title.innerHTML = `Playlist title (${dataSize} videos)`;
        let _tagList = playlistResult.querySelector(".tag-list");
        let tag = document.createElement("a");
        tag.innerHTML = videoQualities[format];
        _tagList.append(tag);
        let _resultList = document.querySelector(".section-result-list");
        _resultList.prepend(playlistResult);

        // generate items;
        let videoList = playlistResult.querySelector(".list-video");
        data.forEach((video, key) => {
            let item = document.createElement("div");
            item.innerHTML = playlistItemTemplate;
            item.className = "video-item";
            item.dataset.url = video?.url;

            let _img = item.querySelector("img");
            let _videoUrl = item.querySelector(".item-url");
            let _videoTitle = item.querySelector(".video-title");
            let _btnQuality = item.querySelector(".btn-child-quality");
            let _counter = item.querySelector(".counter");

            _img.src = video?.info?.thumbnail_url || "";
            _videoUrl.innerText = video?.url || "";
            _videoTitle.innerHTML = video?.info?.title || "";
            _btnQuality.dataset.quality = format;
            _btnQuality.querySelector(
                "span"
            ).innerText = `${videoQualities[format]}`;
            _counter.innerText = key + 1;

            videoList.append(item);
        });
    } else {
        // --- START DEBUG LOGGING ---
        console.log(`DEBUG: downloadFromYoutubeId - Single video detected (size <= 1). Logic starting...`);
        // --- END DEBUG LOGGING ---
        // This branch seems to assume dataSize <= 1 means it's a single item *already processed* by download.php.
        // However, the caller might pass an array with one item from playlistJSON.
        // The logic inside _startDownloadYoutubeLink handles the actual download.php call for single items.
        // This branch might be redundant or based on previous API behavior.
        // Let's check if data is an array with one element, which should have been handled by the caller
        if (Array.isArray(data) && data.length === 1 && data[0].id) {
            console.warn(`DEBUG: downloadFromYoutubeId received single-item array, which should ideally be handled by caller. Attempting to use ID: ${data[0].id}`);
            // --- START DEBUG LOGGING ---
            console.log(`DEBUG: downloadFromYoutubeId - Single item array case. State should already be initialized by caller.`);
            // --- END DEBUG LOGGING ---
            // We don't have the download.php response here, so we can't call downloadFromParseYoutubeId directly.
            // The state initialization should have happened in the caller.
            // Let's just rely on the UI setup done previously and assume fetchProgress will pick it up.
            // If this causes issues, the caller's logic needs adjustment.
        } else if (!Array.isArray(data) && data.id) {
            // This case assumes 'data' is already the response from download.php (e.g., non-YouTube link flow)
            console.log(`DEBUG: downloadFromYoutubeId received non-array data with ID: ${data.id}. Assuming it's ready for downloadFromParseYoutubeId.`);
            // --- START DEBUG LOGGING ---
            console.log(`DEBUG: downloadFromYoutubeId - Non-array data case (likely non-YT flow). Calling downloadFromParseYoutubeId.`);
            // --- END DEBUG LOGGING ---
            // State initialization should happen BEFORE calling this function in this flow.
            downloadFromParseYoutubeId(link, data, format);
        } else {
            console.error(`DEBUG: downloadFromYoutubeId - Unexpected data structure in 'else' block. Cannot proceed. Data:`, data);
            // --- START DEBUG LOGGING ---
            console.error(`DEBUG: downloadFromYoutubeId - Unexpected data structure. Cannot determine how to proceed.`);
            // --- END DEBUG LOGGING ---
            // Maybe show an error or remove placeholder
        }

        //        fetch(
        //            "https://loader.to/ajax/download.php?copyright=0&format=" +
        //                format +
        //                "&url=" +
        //                encodeURIComponent(link) +
        //                "&api=dfcb6d76f2f6a9894gjkege8a4ab232222",
        //            {
        // cache: "no-store",
        //            }
        //        )
        //            .then((response) => response.json())
        //            .then((data) => {
        //                let content = atob(data.content);
        //
        //                const placeholder = document.createElement("div");
        //                placeholder.innerHTML = content;
        //
        //                downloadFromParseYoutubeId(link, data, format);
        //            })
        //            .catch((error) => console.error(error));
    }
};

const downloadWithoutDetectId = (data) => {
    download_count++;

    document.getElementById("placeholder").innerHTML = atob(data.content);
    document.getElementById("placeholder").removeAttribute("id");
    document.getElementById("load").removeAttribute("disabled");
    p(data.id);

    // document.getElementById("card-" + data.id).scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'center',
    //     inline: 'center'
    // });

    //parsing old card html from response data
    let cardHtml = document.createElement("html");
    cardHtml.innerHTML = atob(data.content);

    //rendering new card dummy
    let card_id = data.id;
    render_card(card_id, data.repeat_download);

    let oldCardTitleLinks = cardHtml.getElementsByTagName("small")[0];
    document.getElementById("card-title-links_" + card_id).innerHTML =
        oldCardTitleLinks.innerHTML;

    document.getElementById("card-title-text_" + card_id).innerHTML =
        data.info["title"];

    //inserting new pic
    document.getElementById("card-image_" + card_id).src = data.info["image"];

    //reset new card download button
    let newDownloadButton = document.getElementById(
        "card-downloadButton_" + card_id
    );
    newDownloadButton.className = "";
    newDownloadButton.className =
        "text-white w-full cursor-pointer bg-yblue hover:bg-blue-800  focus:outline-none font-semibold rounded-[10px] text-lg px-5 py-4 text-center mr-2 flex items-center justify-center uppercase opacity-50 transition-all pointer-events-none mt-8";
    newDownloadButton.href = "#";
    newDownloadButton.disabled = true;
    document
        .getElementById("download-spinner_" + card_id)
        .classList.remove("hidden");
    document.getElementById("progressbar_" + card_id).classList.add("bg-yblue");
    document
        .getElementById("progressbar_" + card_id)
        .classList.remove("bg-yorange");
    document.getElementById("progress-text_" + card_id).innerHTML = "Download";

    document.getElementById("newcard-" + card_id).classList.remove("hidden");
};

const renderTagList = (format = null) => {
    let quality = format || getQuality();
    let tags = [];
    if (Object.keys(videoQualities).includes(quality)) {
        tags.push("Video");
        tags.push(videoQualities[quality]);
    }

    if (audioQualities.includes(quality)) {
        tags.push("Audio");
        tags.push(quality.toUpperCase());
    }
    return tags
        .map((tag) => `<a href="javascript:void(0);">${tag}</a>`)
        .join("");
};

const getQuality = () => {
    let btnQuality = document.querySelector(".btn-quality");
    return btnQuality.dataset.quality || "1080";
};

const removeAlert = () => {
    const alertEl = document.querySelector(".alert");
    if (!alertEl) {
        return;
    }
    alertEl.remove();
};

const removePlaceHolder = () => {
    const placeholder = document.querySelector(
        ".section-single-result--placeholder"
    );
    placeholder && placeholder.remove();
};

const insertPlaceHolder = () => {
    const plh = document.createElement("div");
    plh.className = "section-result section-single-result--placeholder";
    plh.innerHTML = placeholderTemplate;
    downloadResultList.prepend(plh);
};

async function parseCFTrace() {
    try {
        const response = await fetch(
            `https://${location.hostname}/cdn-cgi/trace`
        );
        const traceText = await response.text();

        // Transform the response text into a JSON object
        let traceData = traceText
            .replace(/[\r\n]+/g, '","')
            .replace(/=+/g, '":"');
        traceData =
            '{"' + traceData.slice(0, traceData.lastIndexOf('","')) + '"}';
        const jsonData = JSON.parse(traceData);

        // Optional: Set a cookie for the country code if "loc" exists
        if (jsonData.loc && jsonData.loc !== "XX") {
            const date = new Date();
            date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000); // 1 year
            document.cookie = `countryCookie=${jsonData.loc
                }; expires=${date.toUTCString()}; path=/`;
        }

        return jsonData.loc || "Unknown"; // Return the country code
    } catch (error) {
        console.error("Error fetching or parsing trace:", error);
        return "Unknown";
    }
}

var countryCode;

// Example usage
(async () => {
    countryCode = await parseCFTrace();
    console.log("Country code:", countryCode);
})();

const handlePlaylistQualityClick = (e) => {
    const group = e.target.closest(".button-playlist-group");
    const plTarget = group.querySelector(".btn-child-quality");
    const plPopover = document.querySelector(".popover-quality");
    const plBtnDownload = group.querySelector(".btn-child-download");
    const plBtnQuality = group.querySelector(".btn-child-quality");

    e.preventDefault();
    plPopover.classList.add("hidden");
    hideAllQualityPopover(plBtnQuality);

    createPopover(plTarget, plPopover);
    if (plBtnQuality.classList.contains("open-quality")) {
        plTarget.classList.remove("open-quality");
        plPopover.classList.add("hidden");
    } else {
        plTarget.classList.add("open-quality");
        plPopover.classList.remove("hidden");
    }
};

const hideAllQualityPopover = (exclude) => {
    let _qualityList = document.querySelectorAll(".open-quality");
    _qualityList &&
        _qualityList?.length &&
        _qualityList.forEach((_btnQuality) => {
            if (exclude && _btnQuality.isEqualNode(exclude)) {
                return;
            }
            _btnQuality.classList.remove("open-quality");
        });
};

const collapsePlaylist = (evt) => {
    evt.preventDefault();
    let _playlist = evt.target.closest(".section-playlist-result");
    if (_playlist.classList.contains("active")) {
        _playlist.classList.remove("active");
    } else {
        _playlist.classList.add("active");
    }
};

const downloadItemInPlaylist = (evt) => {
    evt.preventDefault();
    let _item = evt.target.closest(".video-item");
    if (!_item) {
        return;
    }
    let _btnQuality = _item.querySelector(".btn-child-quality");
    hideAllQualityPopover(_btnQuality);
    _startDownloadYoutubeLink(
        _item.dataset.url,
        _btnQuality?.dataset?.quality || "720"
    );
};

const _startDownloadYoutubeLink = (link, format) => {
    if (is_youtube_allowed == false) {
        alert("Youtube downloading is not allowed");
        return;
    }
    // --- START DEBUG LOGGING ---
    console.log(`DEBUG: _startDownloadYoutubeLink START - Link: ${link}, Format: ${format}`);
    // --- END DEBUG LOGGING ---
    insertPlaceHolder();

    let encodeYoutubeUrl = encodeURIComponent(
        "https://www.youtube.com/watch?v=" + parseYtId(link)
    );
    fetch(
        `https://loader.to/ajax/download.php?copyright=0&format=${format}&url=${encodeYoutubeUrl}&api=dfcb6d76f2f6a9894gjkege8a4ab232222`,
        {
            cache: "no-store",
        }
    )
        .then((response) => response.json())
        .then((data) => {
            // --- START NEW CODE ---
            if (data && data.id) {
                const downloadId = data.id;
                // --- START DEBUG LOGGING ---
                console.log(`DEBUG: _startDownloadYoutubeLink API success. Received ID: ${downloadId}. Determining redirect...`);
                // --- END DEBUG LOGGING ---
                const shouldRedirect = determineRedirect(countryCode, downloadId); // Use determined countryCode
                downloadStates[downloadId] = {
                    progressCalls: 0,
                    shouldRedirect: shouldRedirect,
                    format: format,
                    link: link
                };
                console.log(`Download ${downloadId} state initialized:`, downloadStates[downloadId]);
                downloadFromParseYoutubeId(link, data, format); // Proceed with download UI setup
                // --- START DEBUG LOGGING ---
                console.log(`DEBUG: _startDownloadYoutubeLink State initialized for ID: ${downloadId}. Current states:`, JSON.stringify(downloadStates));
                // --- END DEBUG LOGGING ---
            } else {
                console.error("Failed to get download ID from API response:", data);
                // --- START DEBUG LOGGING ---
                console.error(`DEBUG: _startDownloadYoutubeLink API FAILED to get ID. Data:`, data);
                // --- END DEBUG LOGGING ---
                // Handle error appropriately - maybe show an error message to the user
                removePlaceHolder();
                // Potentially re-enable the main download button if needed here
            }
            // --- END NEW CODE ---
        })
        .catch((error) => {
            console.error(error);
            removePlaceHolder(); // Clean up placeholder on error
            // --- START DEBUG LOGGING ---
            console.error(`DEBUG: _startDownloadYoutubeLink CATCH error. Link: ${link}`, error);
            // --- END DEBUG LOGGING ---
            // Optionally re-enable the main download button
            const mainBtnDownload = document.getElementById("load"); // Assuming 'load' is the main button ID
            if (mainBtnDownload) {
                mainBtnDownload.removeAttribute("disabled");
            }
            alert("An error occurred while starting the download. Please try again."); // Inform user
        })
        .finally(() => {
            // --- START NEW CODE ---
            // Re-enable the main button once the initial fetch is done
            const mainBtnDownload = document.getElementById("load");
            if (mainBtnDownload) {
                mainBtnDownload.removeAttribute("disabled");
            }
            // --- END NEW CODE ---
            // removePlaceHolder(); // Removed from here, handled in success/error/start
            // btnDownload.removeAttribute("disabled"); // This likely refers to the main button, handle above or in original caller
            scrollToElement(".section-download");
        });
};

const scrollToElement = (selector) => {
    let _el = document.querySelector(selector);
    _el &&
        _el.scrollIntoView({
            block: "center",
            behavior: "smooth",
            inline: "center",
        });
};

window.addEventListener("DOMContentLoaded", function () {
    if (btnDownload) {
        btnDownload.addEventListener("click", function (evt) {
            evt.preventDefault();

            btnDownload.disabled = true;

            const link = inputLink.value;
            const format = mainBtnQuality.dataset.quality || "720";

            if (!isValidURL(link)) {
                btnDownload.removeAttribute("disabled");
                removePlaceHolder(); // Remove placeholder if URL is invalid
                alert("Please enter a valid URL."); // More specific message
                return; // Stop processing
            }

            if (link.length == 0) {
                alert("Please Insert a Download URL");
                btnDownload.removeAttribute("disabled");
                removePlaceHolder(); // Remove placeholder if URL is empty
                return;
            }

            // --- START DEBUG LOGGING ---
            console.log(`DEBUG: Main download button clicked. Link: ${link}, Format: ${format}`);
            // --- END DEBUG LOGGING ---

            // --- START MODIFIED CODE ---
            // Moved placeholder insertion into the functions that actually start the download
            // insertPlaceHolder();
            // --- END MODIFIED CODE ---


            if (parseYtId(link) != null) {
                // --- START DEBUG LOGGING ---
                console.log(`DEBUG: Main click - YouTube ID detected. Calling _startDownloadYoutubeLink.`);
                // --- END DEBUG LOGGING ---
                _startDownloadYoutubeLink(link, format);
            } else if (isYouTube(link)) {
                if (is_youtube_allowed == false) {
                    alert("Youtube downloading is not allowed");
                    return;
                }
                // --- START DEBUG LOGGING ---
                console.log(`DEBUG: Main click - YouTube URL (non-ID) detected. Fetching playlist/video info...`);
                // --- END DEBUG LOGGING ---

                fetch(
                    "https://loader.to/api/ajax/playlistJSON?format=" +
                    format +
                    "&api=dfcb6d76f2f6a9894gjkege8a4ab232222&limit=25" +
                    "&url=" +
                    encodeURIComponent(link),
                    {
                        cache: "no-store",
                    }
                )
                    .then((response) => response.json())
                    .then((data) => {
                        // --- START DEBUG LOGGING ---
                        console.log(`DEBUG: Main click - Playlist/YT fetch response received. Link: ${link}, Data:`, data);
                        // --- END DEBUG LOGGING ---
                        // --- START NEW CODE ---
                        // Need to handle potential playlists and single videos differently for state init
                        if (Array.isArray(data) && data.length > 1) {
                            // --- START DEBUG LOGGING ---
                            console.log(`DEBUG: Main click - Playlist detected (Size: ${data.length}). State will be initialized when individual items are downloaded via UI click.`);
                            // --- END DEBUG LOGGING ---
                            downloadFromYoutubeId(data, link, format); // Existing playlist handling
                        } else if (Array.isArray(data) && data.length === 1) {
                            // API returned an array with one item, treat as single video
                            const singleVideoData = data[0];
                            if (singleVideoData && singleVideoData.id) {
                                const downloadId = singleVideoData.id;
                                const shouldRedirect = determineRedirect(countryCode, downloadId);
                                // --- START DEBUG LOGGING ---
                                console.log(`DEBUG: Main click - Single item array detected. Initializing state for ID: ${downloadId}`);
                                // --- END DEBUG LOGGING ---
                                downloadStates[downloadId] = {
                                    progressCalls: 0,
                                    shouldRedirect: shouldRedirect,
                                    format: format,
                                    link: link // Or use singleVideoData.url if appropriate
                                };
                                console.log(`Download ${downloadId} state initialized (from playlist endpoint):`, downloadStates[downloadId]);
                                // --- START DEBUG LOGGING ---
                                console.log(`DEBUG: Main click - Single item array - State initialized for ID: ${downloadId}. Current states:`, JSON.stringify(downloadStates));
                                // --- END DEBUG LOGGING ---
                                // Since downloadFromYoutubeId expects the full array, but we want the single-item logic,
                                // maybe call downloadFromParseYoutubeId directly or adjust downloadFromYoutubeId
                                // For simplicity, let's call downloadFromYoutubeId which should handle the single item case now correctly
                                // We need the original download.php response structure for downloadFromParseYoutubeId
                                // Let's stick to downloadFromYoutubeId for now, assuming it can handle single item arrays
                                downloadFromYoutubeId(data, link, format); // Let it handle the single item array
                            } else {
                                console.error("Failed to get download ID from playlist API response (single item):", singleVideoData);
                                removePlaceHolder();
                                btnDownload.removeAttribute("disabled");
                                // --- START DEBUG LOGGING ---
                                console.error(`DEBUG: Main click - Single item array - FAILED to get ID. Data:`, singleVideoData);
                                // --- END DEBUG LOGGING ---
                            }
                        } else if (data && data.id) { // Non-array response assumed to be from download.php structure via fallback? Check API.
                            // This case might not happen if playlistJSON always returns arrays, but handle defensively
                            const downloadId = data.id;
                            const shouldRedirect = determineRedirect(countryCode, downloadId);
                            // --- START DEBUG LOGGING ---
                            console.log(`DEBUG: Main click - Non-array YT response detected? Initializing state for ID: ${downloadId}`);
                            // --- END DEBUG LOGGING ---
                            downloadStates[downloadId] = {
                                progressCalls: 0,
                                shouldRedirect: shouldRedirect,
                                format: format,
                                link: link
                            };
                            console.log(`Download ${downloadId} state initialized (from playlist endpoint - non-array):`, downloadStates[downloadId]);
                            // --- START DEBUG LOGGING ---
                            console.log(`DEBUG: Main click - Non-array YT response - State initialized for ID: ${downloadId}. Current states:`, JSON.stringify(downloadStates));
                            // --- END DEBUG LOGGING ---
                            downloadFromParseYoutubeId(link, data, format); // Assuming this structure matches download.php
                        } else {
                            // Handle unexpected response format
                            console.error("Unexpected response format from playlist API:", data);
                            removePlaceHolder();
                            btnDownload.removeAttribute("disabled");
                            alert("Received an unexpected response from the server.");
                            // --- START DEBUG LOGGING ---
                            console.error(`DEBUG: Main click - Unexpected YT/Playlist API response format. Data:`, data);
                            // --- END DEBUG LOGGING ---
                        }
                        // --- END NEW CODE ---
                    })
                    .catch((error) => {
                        console.error(error);
                        removePlaceHolder(); // Clean up placeholder on error
                        btnDownload.removeAttribute("disabled");
                        // --- START DEBUG LOGGING ---
                        console.error(`DEBUG: Main click - CATCH error during YT/Playlist fetch. Link: ${link}`, error);
                        // --- END DEBUG LOGGING ---
                        alert("An error occurred while processing the playlist. Please try again.");
                    })
                    .finally(() => {
                        // --- START NEW CODE ---
                        // Re-enable the main button regardless of success/failure of initial call
                        btnDownload.removeAttribute("disabled");
                        // --- END NEW CODE ---
                        // removePlaceHolder(); // Moved to success/error handlers
                        // btnDownload.removeAttribute("disabled"); // Moved to success/error handlers
                    });
            } else {
                fetch(
                    "https://loader.to/ajax/download.php?format=" +
                    format +
                    "&url=" +
                    encodeURIComponent(link) +
                    "&api=dfcb6d76f2f6a9894gjkege8a4ab232222",
                    {
                        cache: "no-store",
                    }
                )
                    .then((response) => response.json())
                    .then((data) => {
                        // --- START NEW CODE ---
                        if (data && data.id) {
                            const downloadId = data.id;
                            const shouldRedirect = determineRedirect(countryCode, downloadId);
                            downloadStates[downloadId] = {
                                progressCalls: 0,
                                shouldRedirect: shouldRedirect,
                                format: format,
                                link: link
                            };
                            console.log(`Download ${downloadId} state initialized (non-YouTube):`, downloadStates[downloadId]);
                            downloadFromParseYoutubeId(link, data, format);
                        } else {
                            console.error("Failed to get download ID from API response (non-YouTube):", data);
                            removePlaceHolder();
                            btnDownload.removeAttribute("disabled");
                            alert("Failed to start download process.");
                        }
                        // --- END NEW CODE ---
                    })
                    .catch((error) => {
                        console.error(error);
                        removePlaceHolder(); // Clean up placeholder on error
                        btnDownload.removeAttribute("disabled");
                        // --- START DEBUG LOGGING ---
                        console.error(`DEBUG: Main click - CATCH error during Non-YT fetch. Link: ${link}`, error);
                        // --- END DEBUG LOGGING ---
                        alert("An error occurred while processing the link. Please try again.");
                    })
                    .finally(() => {
                        // --- START NEW CODE ---
                        // Re-enable the main button regardless of success/failure of initial call
                        btnDownload.removeAttribute("disabled");
                        // --- END NEW CODE ---
                        // removePlaceHolder(); // Moved
                        // btnDownload.removeAttribute("disabled"); // Moved
                    });
            }
        });
    }

    if (contactForm) {
        const formContact = document.querySelector(".contact-form");
        formContact.addEventListener("submit", (evt) => {
            evt.preventDefault();
            var formdata = new FormData();
            let domain = window.location.hostname;
            formdata.append("website", domain);
            formdata.append(
                "subject",
                document.querySelector(".input-subject").value
            );
            formdata.append(
                "email",
                document.querySelector(".input-email").value
            );
            formdata.append(
                "message",
                document.querySelector(".input-message").value
            );

            var requestOptions = {
                method: "POST",
                body: formdata,
                redirect: "follow",
            };

            let alert = document.querySelector(".alert");
            if (alert) {
                alert.remove();
            }
            fetch("https://Downclips.com/api/contact", requestOptions)
                .then((response) => response.json())
                .then((response) => {
                    let alertEl = document.createElement("div");
                    alertEl.innerHTML = alertSuccess;
                    alertEl.classList.add("alert");
                    alertEl.querySelector(".alert-msg").innerHTML =
                        response?.result?.message ||
                        response?.message ||
                        "We will contact you soon!";
                    contactForm.prepend(alertEl);
                })
                .catch((error) => {
                    let alertEl = document.createElement("div");
                    alertEl.innerHTML = alertError;
                    alertEl.classList.add("alert");
                    alertEl.querySelector(".alert-msg").innerHTML =
                        error?.result?.message || "Something went wrong!";
                    contactForm.prepend(alertEl);
                })
                .finally(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                });
        });
    }
});

// Language switching functionality
const setupLanguageSwitching = () => {
    const langLinks = document.querySelectorAll('.lang-list a');
    
    langLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Show loading overlay
            showLoadingOverlay();
            
            const targetLang = this.getAttribute('hreflang');
            // Instead of using the link's href, we'll use URL parameters
            const currentUrl = new URL(window.location.href);
            currentUrl.searchParams.set('lang', targetLang);
            const targetUrl = currentUrl.toString();
            
            // Save the selected language in localStorage
            localStorage.setItem('selectedLanguage', targetLang);
            
            // Change the HTML lang attribute
            document.documentElement.lang = targetLang;
            
            // Update canonical and alternate URLs if they exist
            const canonical = document.querySelector('link[rel="canonical"]');
            if (canonical) {
                const canonicalUrl = new URL(canonical.href);
                canonicalUrl.searchParams.set('lang', targetLang);
                canonical.href = canonicalUrl.toString();
            }
            
            // Update meta language tag
            const metaLanguage = document.querySelector('meta[name="language"]');
            if (metaLanguage) {
                metaLanguage.content = targetLang;
            }
            
            // Get translations for the selected language
            getTranslationsForLanguage(targetLang)
                .then(translations => {
                    // Apply translations to the page
                    applyTranslations(translations);
                    
                    // Update URL without refreshing
                    history.pushState({}, '', targetUrl);
                    
                    console.log(`Language changed to ${targetLang}`);
                    
                    // Hide loading overlay
                    hideLoadingOverlay();
                    
                    // Highlight the current language in the list
                    highlightCurrentLanguage(targetLang);
                })
                .catch(error => {
                    console.error('Error fetching language content:', error);
                    // Hide loading overlay
                    hideLoadingOverlay();
                    // Still update the UI as best we can
                    highlightCurrentLanguage(targetLang);
                    // Update URL
                    history.pushState({}, '', targetUrl);
                });
        });
    });
};

// Function to get translations for a language
const getTranslationsForLanguage = (lang) => {
    // Define translations for different languages
    const translations = {
        'en': {
            'title': 'Reliable, Fast, And Free YouTube video downloader',
            'meta_description': 'Try this unique tool for quick, hassle-free downloads from YouTube. Transform your offline video collection with this reliable and efficient downloader.',
            'download_button': 'Download',
            'search_placeholder': 'Paste YouTube URL here',
            'quality_label': 'Quality',
            'features_title': 'Key Features',
            'feature_1_title': 'Fast Downloads',
            'feature_1_desc': 'High-speed servers ensure quick downloads.',
            'feature_2_title': 'Multi-Format Support',
            'feature_2_desc': 'Download videos in various formats and qualities.',
            'feature_3_title': 'Easy to Use',
            'feature_3_desc': 'Simple interface for hassle-free downloads.',
            'languages': 'Languages'
        },
        'de': {
            'title': 'Zuverlässiger, schneller und kostenloser YouTube-Video-Downloader',
            'meta_description': 'Probieren Sie dieses einzigartige Tool für schnelle, problemlose Downloads von YouTube aus. Verwandeln Sie Ihre Offline-Videosammlung mit diesem zuverlässigen und effizienten Downloader.',
            'download_button': 'Herunterladen',
            'search_placeholder': 'YouTube-URL hier einfügen',
            'quality_label': 'Qualität',
            'features_title': 'Hauptmerkmale',
            'feature_1_title': 'Schnelle Downloads',
            'feature_1_desc': 'Hochgeschwindigkeitsserver sorgen für schnelle Downloads.',
            'feature_2_title': 'Multi-Format-Unterstützung',
            'feature_2_desc': 'Laden Sie Videos in verschiedenen Formaten und Qualitäten herunter.',
            'feature_3_title': 'Einfach zu bedienen',
            'feature_3_desc': 'Einfache Oberfläche für problemlose Downloads.',
            'languages': 'Sprachen'
        },
        'fr': {
            'title': 'Téléchargeur de vidéos YouTube fiable, rapide et gratuit',
            'meta_description': 'Essayez cet outil unique pour des téléchargements rapides et sans tracas depuis YouTube. Transformez votre collection de vidéos hors ligne avec ce téléchargeur fiable et efficace.',
            'download_button': 'Télécharger',
            'search_placeholder': 'Collez l\'URL YouTube ici',
            'quality_label': 'Qualité',
            'features_title': 'Caractéristiques principales',
            'feature_1_title': 'Téléchargements rapides',
            'feature_1_desc': 'Des serveurs à haute vitesse assurent des téléchargements rapides.',
            'feature_2_title': 'Prise en charge multi-format',
            'feature_2_desc': 'Téléchargez des vidéos dans différents formats et qualités.',
            'feature_3_title': 'Facile à utiliser',
            'feature_3_desc': 'Interface simple pour des téléchargements sans tracas.',
            'languages': 'Langues'
        },
        'es': {
            'title': 'Descargador de videos de YouTube confiable, rápido y gratuito',
            'meta_description': 'Pruebe esta herramienta única para descargas rápidas y sin complicaciones desde YouTube. Transforme su colección de videos sin conexión con este descargador confiable y eficiente.',
            'download_button': 'Descargar',
            'search_placeholder': 'Pegue la URL de YouTube aquí',
            'quality_label': 'Calidad',
            'features_title': 'Características principales',
            'feature_1_title': 'Descargas rápidas',
            'feature_1_desc': 'Los servidores de alta velocidad garantizan descargas rápidas.',
            'feature_2_title': 'Soporte multiformato',
            'feature_2_desc': 'Descargue videos en varios formatos y calidades.',
            'feature_3_title': 'Fácil de usar',
            'feature_3_desc': 'Interfaz sencilla para descargas sin complicaciones.',
            'languages': 'Idiomas'
        }
        // Add more languages as needed
    };
    
    // Return the translations for the requested language, or English as fallback
    return Promise.resolve(translations[lang] || translations['en']);
};

// Function to apply translations to the page
const applyTranslations = (translations) => {
    // Update document title
    document.title = translations.title;
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.content = translations.meta_description;
    }
    
    // Update og meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
        ogTitle.content = translations.title;
    }
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
        ogDesc.content = translations.meta_description;
    }
    
    // Update download button text
    const downloadBtn = document.querySelector('.btn-download span');
    if (downloadBtn) {
        downloadBtn.textContent = translations.download_button;
    }
    
    // Update input placeholder
    const inputField = document.querySelector('.input-url');
    if (inputField) {
        inputField.placeholder = translations.search_placeholder;
    }
    
    // Update quality button text
    const qualityBtn = document.querySelector('.btn-quality span');
    if (qualityBtn) {
        qualityBtn.textContent = translations.quality_label;
    }
    
    // Update features section
    const featuresTitle = document.querySelector('.section-features .section-head h2');
    if (featuresTitle) {
        featuresTitle.textContent = translations.features_title;
    }
    
    // Update feature items (assuming there are at least 3 feature items)
    const featureItems = document.querySelectorAll('.feature-item');
    if (featureItems.length >= 3) {
        // Feature 1
        const feature1Title = featureItems[0].querySelector('.feature-name');
        const feature1Desc = featureItems[0].querySelector('.feature-desc');
        if (feature1Title && feature1Desc) {
            feature1Title.textContent = translations.feature_1_title;
            feature1Desc.textContent = translations.feature_1_desc;
        }
        
        // Feature 2
        const feature2Title = featureItems[1].querySelector('.feature-name');
        const feature2Desc = featureItems[1].querySelector('.feature-desc');
        if (feature2Title && feature2Desc) {
            feature2Title.textContent = translations.feature_2_title;
            feature2Desc.textContent = translations.feature_2_desc;
        }
        
        // Feature 3
        const feature3Title = featureItems[2].querySelector('.feature-name');
        const feature3Desc = featureItems[2].querySelector('.feature-desc');
        if (feature3Title && feature3Desc) {
            feature3Title.textContent = translations.feature_3_title;
            feature3Desc.textContent = translations.feature_3_desc;
        }
    }
    
    // Update languages title
    const languagesTitle = document.querySelector('.footer-langs h5');
    if (languagesTitle) {
        languagesTitle.textContent = translations.languages;
    }
};

// Create loading overlay
const showLoadingOverlay = () => {
    // Check if overlay already exists
    if (document.getElementById('language-loading-overlay')) {
        document.getElementById('language-loading-overlay').style.display = 'flex';
        return;
    }
    
    // Create overlay element
    const overlay = document.createElement('div');
    overlay.id = 'language-loading-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '10000';
    
    // Create spinner
    const spinner = document.createElement('div');
    spinner.style.width = '40px';
    spinner.style.height = '40px';
    spinner.style.border = '4px solid #f3f3f3';
    spinner.style.borderTop = '4px solid #6c5ce7';
    spinner.style.borderRadius = '50%';
    spinner.style.animation = 'spin 1s linear infinite';
    
    // Add keyframes for spinner animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    // Add spinner to overlay
    overlay.appendChild(spinner);
    
    // Add overlay to document
    document.body.appendChild(overlay);
};

// Hide loading overlay
const hideLoadingOverlay = () => {
    const overlay = document.getElementById('language-loading-overlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
};

// Highlight current language in the language list
const highlightCurrentLanguage = (lang) => {
    const langLinks = document.querySelectorAll('.lang-list a');
    
    langLinks.forEach(link => {
        if (link.getAttribute('hreflang') === lang) {
            link.style.fontWeight = 'bold';
            link.style.color = '#6c5ce7';
        } else {
            link.style.fontWeight = '';
            link.style.color = '';
        }
    });
};

// Initialize language switching on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check URL for language parameter first
    const urlLang = getLanguageFromUrl();
    
    // Then check localStorage for saved preference
    const savedLanguage = localStorage.getItem('selectedLanguage');
    
    // Get current language from HTML or default to English
    const currentLang = document.documentElement.lang || 'en';
    
    // Determine which language to use (URL param takes precedence)
    const targetLang = urlLang || savedLanguage || currentLang;
    
    // If the target language is different from the current one, switch to it
    if (targetLang && targetLang !== currentLang) {
        // Update HTML lang attribute
        document.documentElement.lang = targetLang;
        
        // Save to localStorage
        localStorage.setItem('selectedLanguage', targetLang);
        
        // Get and apply translations
        getTranslationsForLanguage(targetLang)
            .then(translations => {
                applyTranslations(translations);
                console.log(`Initialized language: ${targetLang}`);
                
                // Update URL if language came from localStorage and not URL
                if (savedLanguage && !urlLang) {
                    const currentUrl = new URL(window.location.href);
                    currentUrl.searchParams.set('lang', targetLang);
                    history.replaceState({}, '', currentUrl.toString());
                }
                
                // Highlight the current language
                highlightCurrentLanguage(targetLang);
            })
            .catch(error => {
                console.error('Error initializing language:', error);
            });
    } else {
        // Just highlight the current language
        highlightCurrentLanguage(currentLang);
    }
    
    // Set up language switching
    setupLanguageSwitching();
    
    // Handle browser's back/forward buttons
    window.addEventListener('popstate', function(event) {
        // Get language from the URL after navigation
        const newLang = getLanguageFromUrl() || 'en';
        
        // Show loading overlay
        showLoadingOverlay();
        
        // Apply the language
        document.documentElement.lang = newLang;
        
        // Update meta language tag
        const metaLanguage = document.querySelector('meta[name="language"]');
        if (metaLanguage) {
            metaLanguage.content = newLang;
        }
        
        // Get and apply translations
        getTranslationsForLanguage(newLang)
            .then(translations => {
                applyTranslations(translations);
                
                // Highlight the current language
                highlightCurrentLanguage(newLang);
                
                // Hide loading overlay
                hideLoadingOverlay();
                
                console.log(`Navigated to ${newLang} via browser history`);
            })
            .catch(error => {
                console.error('Error handling history navigation:', error);
                // Hide loading overlay before continuing
                hideLoadingOverlay();
            });
    });
});

// Function to re-setup event listeners after content change
const setupEventListeners = () => {
    // Re-attach event listeners for buttons, quality selectors, etc.
    
    // Example: re-setup download button events
    const downloadBtn = document.querySelector('.btn-download');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            // Re-implement download functionality
            // This would be specific to your site
        });
    }
    
    // Setup language switching again for the newly loaded links
    setupLanguageSwitching();
    
    // Highlight the current language
    const currentLang = document.documentElement.lang || getLanguageFromUrl() || 'en';
    highlightCurrentLanguage(currentLang);
};

// Function to get language from URL
const getLanguageFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('lang');
};


