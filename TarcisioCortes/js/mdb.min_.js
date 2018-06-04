var WOW;
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(t, e, i, n, a) {
            return jQuery.easing[jQuery.easing.def](t, e, i, n, a)
        },
        easeInQuad: function(t, e, i, n, a) {
            return n * (e /= a) * e + i
        },
        easeOutQuad: function(t, e, i, n, a) {
            return -n * (e /= a) * (e - 2) + i
        },
        easeInOutQuad: function(t, e, i, n, a) {
            return (e /= a / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
        },
        easeInCubic: function(t, e, i, n, a) {
            return n * (e /= a) * e * e + i
        },
        easeOutCubic: function(t, e, i, n, a) {
            return n * ((e = e / a - 1) * e * e + 1) + i
        },
        easeInOutCubic: function(t, e, i, n, a) {
            return (e /= a / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
        },
        easeInQuart: function(t, e, i, n, a) {
            return n * (e /= a) * e * e * e + i
        },
        easeOutQuart: function(t, e, i, n, a) {
            return -n * ((e = e / a - 1) * e * e * e - 1) + i
        },
        easeInOutQuart: function(t, e, i, n, a) {
            return (e /= a / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
        },
        easeInQuint: function(t, e, i, n, a) {
            return n * (e /= a) * e * e * e * e + i
        },
        easeOutQuint: function(t, e, i, n, a) {
            return n * ((e = e / a - 1) * e * e * e * e + 1) + i
        },
        easeInOutQuint: function(t, e, i, n, a) {
            return (e /= a / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i
        },
        easeInSine: function(t, e, i, n, a) {
            return -n * Math.cos(e / a * (Math.PI / 2)) + n + i
        },
        easeOutSine: function(t, e, i, n, a) {
            return n * Math.sin(e / a * (Math.PI / 2)) + i
        },
        easeInOutSine: function(t, e, i, n, a) {
            return -n / 2 * (Math.cos(Math.PI * e / a) - 1) + i
        },
        easeInExpo: function(t, e, i, n, a) {
            return 0 == e ? i : n * Math.pow(2, 10 * (e / a - 1)) + i
        },
        easeOutExpo: function(t, e, i, n, a) {
            return e == a ? i + n : n * (1 - Math.pow(2, -10 * e / a)) + i
        },
        easeInOutExpo: function(t, e, i, n, a) {
            return 0 == e ? i : e == a ? i + n : (e /= a / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (2 - Math.pow(2, -10 * --e)) + i
        },
        easeInCirc: function(t, e, i, n, a) {
            return -n * (Math.sqrt(1 - (e /= a) * e) - 1) + i
        },
        easeOutCirc: function(t, e, i, n, a) {
            return n * Math.sqrt(1 - (e = e / a - 1) * e) + i
        },
        easeInOutCirc: function(t, e, i, n, a) {
            return (e /= a / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
        },
        easeInElastic: function(t, e, i, n, a) {
            var r = 1.70158,
                o = 0,
                s = n;
            if (0 == e) return i;
            if (1 == (e /= a)) return i + n;
            if (o || (o = .3 * a), s < Math.abs(n)) {
                s = n;
                r = o / 4
            } else r = o / (2 * Math.PI) * Math.asin(n / s);
            return -s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / o) + i
        },
        easeOutElastic: function(t, e, i, n, a) {
            var r = 1.70158,
                o = 0,
                s = n;
            if (0 == e) return i;
            if (1 == (e /= a)) return i + n;
            if (o || (o = .3 * a), s < Math.abs(n)) {
                s = n;
                r = o / 4
            } else r = o / (2 * Math.PI) * Math.asin(n / s);
            return s * Math.pow(2, -10 * e) * Math.sin((e * a - r) * (2 * Math.PI) / o) + n + i
        },
        easeInOutElastic: function(t, e, i, n, a) {
            var r = 1.70158,
                o = 0,
                s = n;
            if (0 == e) return i;
            if (2 == (e /= a / 2)) return i + n;
            if (o || (o = a * (.3 * 1.5)), s < Math.abs(n)) {
                s = n;
                r = o / 4
            } else r = o / (2 * Math.PI) * Math.asin(n / s);
            return e < 1 ? s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / o) * -.5 + i : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / o) * .5 + n + i
        },
        easeInBack: function(t, e, i, n, a, r) {
            return void 0 == r && (r = 1.70158), n * (e /= a) * e * ((r + 1) * e - r) + i
        },
        easeOutBack: function(t, e, i, n, a, r) {
            return void 0 == r && (r = 1.70158), n * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + i
        },
        easeInOutBack: function(t, e, i, n, a, r) {
            return void 0 == r && (r = 1.70158), (e /= a / 2) < 1 ? n / 2 * (e * e * ((1 + (r *= 1.525)) * e - r)) + i : n / 2 * ((e -= 2) * e * ((1 + (r *= 1.525)) * e + r) + 2) + i
        },
        easeInBounce: function(t, e, i, n, a) {
            return n - jQuery.easing.easeOutBounce(t, a - e, 0, n, a) + i
        },
        easeOutBounce: function(t, e, i, n, a) {
            return (e /= a) < 1 / 2.75 ? n * (7.5625 * e * e) + i : e < 2 / 2.75 ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : e < 2.5 / 2.75 ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
        },
        easeInOutBounce: function(t, e, i, n, a) {
            return e < a / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, a) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - a, 0, n, a) + .5 * n + i
        }
    }), jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function(t) {
        function e(t) {
            var e = t.length,
                n = i.type(t);
            return "function" !== n && !i.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
        }
        if (!t.jQuery) {
            var i = function(t, e) {
                return new i.fn.init(t, e)
            };
            i.isWindow = function(t) {
                return null != t && t == t.window
            }, i.type = function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? a[o.call(t)] || "object" : typeof t
            }, i.isArray = Array.isArray || function(t) {
                return "array" === i.type(t)
            }, i.isPlainObject = function(t) {
                var e;
                if (!t || "object" !== i.type(t) || t.nodeType || i.isWindow(t)) return !1;
                try {
                    if (t.constructor && !r.call(t, "constructor") && !r.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (t) {
                    return !1
                }
                for (e in t);
                return void 0 === e || r.call(t, e)
            }, i.each = function(t, i, n) {
                var a = 0,
                    r = t.length,
                    o = e(t);
                if (n) {
                    if (o)
                        for (; r > a && !1 !== i.apply(t[a], n); a++);
                    else
                        for (a in t)
                            if (!1 === i.apply(t[a], n)) break
                } else if (o)
                    for (; r > a && !1 !== i.call(t[a], a, t[a]); a++);
                else
                    for (a in t)
                        if (!1 === i.call(t[a], a, t[a])) break; return t
            }, i.data = function(t, e, a) {
                if (void 0 === a) {
                    var r = (o = t[i.expando]) && n[o];
                    if (void 0 === e) return r;
                    if (r && e in r) return r[e]
                } else if (void 0 !== e) {
                    var o = t[i.expando] || (t[i.expando] = ++i.uuid);
                    return n[o] = n[o] || {}, n[o][e] = a, a
                }
            }, i.removeData = function(t, e) {
                var a = t[i.expando],
                    r = a && n[a];
                r && i.each(e, function(t, e) {
                    delete r[e]
                })
            }, i.extend = function() {
                var t, e, n, a, r, o, s = arguments[0] || {},
                    l = 1,
                    u = arguments.length,
                    d = !1;
                for ("boolean" == typeof s && (d = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== i.type(s) && (s = {}), l === u && (s = this, l--); u > l; l++)
                    if (null != (r = arguments[l]))
                        for (a in r) t = s[a], s !== (n = r[a]) && (d && n && (i.isPlainObject(n) || (e = i.isArray(n))) ? (e ? (e = !1, o = t && i.isArray(t) ? t : []) : o = t && i.isPlainObject(t) ? t : {}, s[a] = i.extend(d, o, n)) : void 0 !== n && (s[a] = n));
                return s
            }, i.queue = function(t, n, a) {
                if (t) {
                    n = (n || "fx") + "queue";
                    var r = i.data(t, n);
                    return a ? (!r || i.isArray(a) ? r = i.data(t, n, function(t, i) {
                        var n = i || [];
                        return null != t && (e(Object(t)) ? function(t, e) {
                            for (var i = +e.length, n = 0, a = t.length; i > n;) t[a++] = e[n++];
                            if (i != i)
                                for (; void 0 !== e[n];) t[a++] = e[n++];
                            t.length = a
                        }(n, "string" == typeof t ? [t] : t) : [].push.call(n, t)), n
                    }(a)) : r.push(a), r) : r || []
                }
            }, i.dequeue = function(t, e) {
                i.each(t.nodeType ? [t] : t, function(t, n) {
                    e = e || "fx";
                    var a = i.queue(n, e),
                        r = a.shift();
                    "inprogress" === r && (r = a.shift()), r && ("fx" === e && a.unshift("inprogress"), r.call(n, function() {
                        i.dequeue(n, e)
                    }))
                })
            }, i.fn = i.prototype = {
                init: function(t) {
                    if (t.nodeType) return this[0] = t, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function() {
                    var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function() {
                    function t() {
                        for (var t = this.offsetParent || document; t && "html" === !t.nodeType.toLowerCase && "static" === t.style.position;) t = t.offsetParent;
                        return t || document
                    }
                    var e = this[0],
                        t = t.apply(e),
                        n = this.offset(),
                        a = /^(?:body|html)$/i.test(t.nodeName) ? {
                            top: 0,
                            left: 0
                        } : i(t).offset();
                    return n.top -= parseFloat(e.style.marginTop) || 0, n.left -= parseFloat(e.style.marginLeft) || 0, t.style && (a.top += parseFloat(t.style.borderTopWidth) || 0, a.left += parseFloat(t.style.borderLeftWidth) || 0), {
                        top: n.top - a.top,
                        left: n.left - a.left
                    }
                }
            };
            var n = {};
            i.expando = "velocity" + (new Date).getTime(), i.uuid = 0;
            for (var a = {}, r = a.hasOwnProperty, o = a.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) a["[object " + s[l] + "]"] = s[l].toLowerCase();
            i.fn.init.prototype = i.fn, t.Velocity = {
                Utilities: i
            }
        }
    }(window), function(t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : t()
    }(function() {
        return function(t, e, i, n) {
            function a(t) {
                return f.isWrapped(t) ? t = [].slice.call(t) : f.isNode(t) && (t = [t]), t
            }

            function r(t) {
                var e = d.data(t, "velocity");
                return null === e ? n : e
            }

            function o(t, i, n, a) {
                function r(t, e) {
                    return 1 - 3 * e + 3 * t
                }

                function o(t, e) {
                    return 3 * e - 6 * t
                }

                function s(t) {
                    return 3 * t
                }

                function l(t, e, i) {
                    return ((r(e, i) * t + o(e, i)) * t + s(e)) * t
                }

                function u(t, e, i) {
                    return 3 * r(e, i) * t * t + 2 * o(e, i) * t + s(e)
                }

                function d(e, i) {
                    for (var a = 0; f > a; ++a) {
                        var r = u(i, t, n);
                        if (0 === r) return i;
                        i -= (l(i, t, n) - e) / r
                    }
                    return i
                }

                function c(e, i, a) {
                    var r, o, s = 0;
                    do {
                        (r = l(o = i + (a - i) / 2, t, n) - e) > 0 ? a = o : i = o
                    } while (Math.abs(r) > g && ++s < m);
                    return o
                }

                function h() {
                    k = !0, (t != i || n != a) && function() {
                        for (var e = 0; v > e; ++e) w[e] = l(e * b, t, n)
                    }()
                }
                var f = 4,
                    p = .001,
                    g = 1e-7,
                    m = 10,
                    v = 11,
                    b = 1 / (v - 1),
                    y = "Float32Array" in e;
                if (4 !== arguments.length) return !1;
                for (var x = 0; 4 > x; ++x)
                    if ("number" != typeof arguments[x] || isNaN(arguments[x]) || !isFinite(arguments[x])) return !1;
                t = Math.min(t, 1), n = Math.min(n, 1), t = Math.max(t, 0), n = Math.max(n, 0);
                var w = y ? new Float32Array(v) : new Array(v),
                    k = !1,
                    S = function(e) {
                        return k || h(), t === i && n === a ? e : 0 === e ? 0 : 1 === e ? 1 : l(function(e) {
                            for (var i = 0, a = 1, r = v - 1; a != r && w[a] <= e; ++a) i += b;
                            var o = i + (e - w[--a]) / (w[a + 1] - w[a]) * b,
                                s = u(o, t, n);
                            return s >= p ? d(e, o) : 0 == s ? o : c(e, i, i + b)
                        }(e), i, a)
                    };
                S.getControlPoints = function() {
                    return [{
                        x: t,
                        y: i
                    }, {
                        x: n,
                        y: a
                    }]
                };
                var C = "generateBezier(" + [t, i, n, a] + ")";
                return S.toString = function() {
                    return C
                }, S
            }

            function s(t, e) {
                var i = t;
                return f.isString(t) ? v.Easings[t] || (i = !1) : i = f.isArray(t) && 1 === t.length ? function(t) {
                    return function(e) {
                        return Math.round(e * t) * (1 / t)
                    }
                }.apply(null, t) : f.isArray(t) && 2 === t.length ? b.apply(null, t.concat([e])) : !(!f.isArray(t) || 4 !== t.length) && o.apply(null, t), !1 === i && (i = v.Easings[v.defaults.easing] ? v.defaults.easing : m), i
            }

            function l(t) {
                if (t) {
                    var e = (new Date).getTime(),
                        i = v.State.calls.length;
                    i > 1e4 && (v.State.calls = function(t) {
                        for (var e = -1, i = t ? t.length : 0, n = []; ++e < i;) {
                            var a = t[e];
                            a && n.push(a)
                        }
                        return n
                    }(v.State.calls));
                    for (var a = 0; i > a; a++)
                        if (v.State.calls[a]) {
                            var o = v.State.calls[a],
                                s = o[0],
                                c = o[2],
                                h = o[3],
                                p = !!h,
                                g = null;
                            h || (h = v.State.calls[a][3] = e - 16);
                            for (var m = Math.min((e - h) / c.duration, 1), b = 0, x = s.length; x > b; b++) {
                                var k = s[b],
                                    S = k.element;
                                if (r(S)) {
                                    var C = !1;
                                    if (c.display !== n && null !== c.display && "none" !== c.display) {
                                        if ("flex" === c.display) {
                                            d.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function(t, e) {
                                                y.setPropertyValue(S, "display", e)
                                            })
                                        }
                                        y.setPropertyValue(S, "display", c.display)
                                    }
                                    for (var M in c.visibility !== n && "hidden" !== c.visibility && y.setPropertyValue(S, "visibility", c.visibility), k)
                                        if ("element" !== M) {
                                            var P, A = k[M],
                                                I = f.isString(A.easing) ? v.Easings[A.easing] : A.easing;
                                            if (1 === m) P = A.endValue;
                                            else {
                                                var T = A.endValue - A.startValue;
                                                if (P = A.startValue + T * I(m, c, T), !p && P === A.currentValue) continue
                                            }
                                            if (A.currentValue = P, "tween" === M) g = P;
                                            else {
                                                if (y.Hooks.registered[M]) {
                                                    var D = y.Hooks.getRoot(M),
                                                        F = r(S).rootPropertyValueCache[D];
                                                    F && (A.rootPropertyValue = F)
                                                }
                                                var V = y.setPropertyValue(S, M, A.currentValue + (0 === parseFloat(P) ? "" : A.unitType), A.rootPropertyValue, A.scrollData);
                                                y.Hooks.registered[M] && (r(S).rootPropertyValueCache[D] = y.Normalizations.registered[D] ? y.Normalizations.registered[D]("extract", null, V[1]) : V[1]), "transform" === V[0] && (C = !0)
                                            }
                                        }
                                    c.mobileHA && r(S).transformCache.translate3d === n && (r(S).transformCache.translate3d = "(0px, 0px, 0px)", C = !0), C && y.flushTransformCache(S)
                                }
                            }
                            c.display !== n && "none" !== c.display && (v.State.calls[a][2].display = !1), c.visibility !== n && "hidden" !== c.visibility && (v.State.calls[a][2].visibility = !1), c.progress && c.progress.call(o[1], o[1], m, Math.max(0, h + c.duration - e), h, g), 1 === m && u(a)
                        }
                }
                v.State.isTicking && w(l)
            }

            function u(t, e) {
                if (!v.State.calls[t]) return !1;
                for (var i = v.State.calls[t][0], a = v.State.calls[t][1], o = v.State.calls[t][2], s = v.State.calls[t][4], l = !1, u = 0, c = i.length; c > u; u++) {
                    var h = i[u].element;
                    if (e || o.loop || ("none" === o.display && y.setPropertyValue(h, "display", o.display), "hidden" === o.visibility && y.setPropertyValue(h, "visibility", o.visibility)), !0 !== o.loop && (d.queue(h)[1] === n || !/\.velocityQueueEntryFlag/i.test(d.queue(h)[1])) && r(h)) {
                        r(h).isAnimating = !1, r(h).rootPropertyValueCache = {};
                        var f = !1;
                        d.each(y.Lists.transforms3D, function(t, e) {
                            var i = /^scale/.test(e) ? 1 : 0,
                                a = r(h).transformCache[e];
                            r(h).transformCache[e] !== n && new RegExp("^\\(" + i + "[^.]").test(a) && (f = !0, delete r(h).transformCache[e])
                        }), o.mobileHA && (f = !0, delete r(h).transformCache.translate3d), f && y.flushTransformCache(h), y.Values.removeClass(h, "velocity-animating")
                    }
                    if (!e && o.complete && !o.loop && u === c - 1) try {
                        o.complete.call(a, a)
                    } catch (t) {
                        setTimeout(function() {
                            throw t
                        }, 1)
                    }
                    s && !0 !== o.loop && s(a), r(h) && !0 === o.loop && !e && (d.each(r(h).tweensContainer, function(t, e) {
                        /^rotate/.test(t) && 360 === parseFloat(e.endValue) && (e.endValue = 0, e.startValue = 360), /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0, e.startValue = 100)
                    }), v(h, "reverse", {
                        loop: !0,
                        delay: o.delay
                    })), !1 !== o.queue && d.dequeue(h, o.queue)
                }
                v.State.calls[t] = !1;
                for (var p = 0, g = v.State.calls.length; g > p; p++)
                    if (!1 !== v.State.calls[p]) {
                        l = !0;
                        break
                    }!1 === l && (v.State.isTicking = !1, delete v.State.calls, v.State.calls = [])
            }
            var d, c = function() {
                    if (i.documentMode) return i.documentMode;
                    for (var t = 7; t > 4; t--) {
                        var e = i.createElement("div");
                        if (e.innerHTML = "\x3c!--[if IE " + t + "]><span></span><![endif]--\x3e", e.getElementsByTagName("span").length) return e = null, t
                    }
                    return n
                }(),
                h = function() {
                    var t = 0;
                    return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function(e) {
                        var i, n = (new Date).getTime();
                        return i = Math.max(0, 16 - (n - t)), t = n + i, setTimeout(function() {
                            e(n + i)
                        }, i)
                    }
                }(),
                f = {
                    isString: function(t) {
                        return "string" == typeof t
                    },
                    isArray: Array.isArray || function(t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    },
                    isFunction: function(t) {
                        return "[object Function]" === Object.prototype.toString.call(t)
                    },
                    isNode: function(t) {
                        return t && t.nodeType
                    },
                    isNodeList: function(t) {
                        return "object" == typeof t && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t)) && t.length !== n && (0 === t.length || "object" == typeof t[0] && t[0].nodeType > 0)
                    },
                    isWrapped: function(t) {
                        return t && (t.jquery || e.Zepto && e.Zepto.zepto.isZ(t))
                    },
                    isSVG: function(t) {
                        return e.SVGElement && t instanceof e.SVGElement
                    },
                    isEmptyObject: function(t) {
                        for (var e in t) return !1;
                        return !0
                    }
                },
                p = !1;
            if (t.fn && t.fn.jquery ? (d = t, p = !0) : d = e.Velocity.Utilities, 8 >= c && !p) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (!(7 >= c)) {
                var g = 400,
                    m = "swing",
                    v = {
                        State: {
                            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                            isAndroid: /Android/i.test(navigator.userAgent),
                            isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                            isChrome: e.chrome,
                            isFirefox: /Firefox/i.test(navigator.userAgent),
                            prefixElement: i.createElement("div"),
                            prefixMatches: {},
                            scrollAnchor: null,
                            scrollPropertyLeft: null,
                            scrollPropertyTop: null,
                            isTicking: !1,
                            calls: []
                        },
                        CSS: {},
                        Utilities: d,
                        Redirects: {},
                        Easings: {},
                        Promise: e.Promise,
                        defaults: {
                            queue: "",
                            duration: g,
                            easing: m,
                            begin: n,
                            complete: n,
                            progress: n,
                            display: n,
                            visibility: n,
                            loop: !1,
                            delay: !1,
                            mobileHA: !0,
                            _cacheValues: !0
                        },
                        init: function(t) {
                            d.data(t, "velocity", {
                                isSVG: f.isSVG(t),
                                isAnimating: !1,
                                computedStyle: null,
                                tweensContainer: null,
                                rootPropertyValueCache: {},
                                transformCache: {}
                            })
                        },
                        hook: null,
                        mock: !1,
                        version: {
                            major: 1,
                            minor: 2,
                            patch: 2
                        },
                        debug: !1
                    };
//                e.pageYOffset !== n ? (v.State.scrollAnchor = e, v.State.scrollPropertyLeft = "pageXOffset", v.State.scrollPropertyTop = "pageYOffset") : (v.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, v.State.scrollPropertyLeft = "scrollLeft", v.State.scrollPropertyTop = "scrollTop");
                var b = function() {
                    function t(t) {
                        return -t.tension * t.x - t.friction * t.v
                    }

                    function e(e, i, n) {
                        var a = {
                            x: e.x + n.dx * i,
                            v: e.v + n.dv * i,
                            tension: e.tension,
                            friction: e.friction
                        };
                        return {
                            dx: a.v,
                            dv: t(a)
                        }
                    }

                    function i(i, n) {
                        var a = {
                                dx: i.v,
                                dv: t(i)
                            },
                            r = e(i, .5 * n, a),
                            o = e(i, .5 * n, r),
                            s = e(i, n, o),
                            l = 1 / 6 * (a.dx + 2 * (r.dx + o.dx) + s.dx),
                            u = 1 / 6 * (a.dv + 2 * (r.dv + o.dv) + s.dv);
                        return i.x = i.x + l * n, i.v = i.v + u * n, i
                    }
                    return function t(e, n, a) {
                        var r, o, s, l = {
                                x: -1,
                                v: 0,
                                tension: null,
                                friction: null
                            },
                            u = [0],
                            d = 0;
                        for (e = parseFloat(e) || 500, n = parseFloat(n) || 20, a = a || null, l.tension = e, l.friction = n, (r = null !== a) ? o = (d = t(e, n)) / a * .016 : o = .016; s = i(s || l, o), u.push(1 + s.x), d += 16, Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4;);
                        return r ? function(t) {
                            return u[t * (u.length - 1) | 0]
                        } : d
                    }
                }();
                v.Easings = {
                    linear: function(t) {
                        return t
                    },
                    swing: function(t) {
                        return .5 - Math.cos(t * Math.PI) / 2
                    },
                    spring: function(t) {
                        return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
                    }
                }, d.each([
                    ["ease", [.25, .1, .25, 1]],
                    ["ease-in", [.42, 0, 1, 1]],
                    ["ease-out", [0, 0, .58, 1]],
                    ["ease-in-out", [.42, 0, .58, 1]],
                    ["easeInSine", [.47, 0, .745, .715]],
                    ["easeOutSine", [.39, .575, .565, 1]],
                    ["easeInOutSine", [.445, .05, .55, .95]],
                    ["easeInQuad", [.55, .085, .68, .53]],
                    ["easeOutQuad", [.25, .46, .45, .94]],
                    ["easeInOutQuad", [.455, .03, .515, .955]],
                    ["easeInCubic", [.55, .055, .675, .19]],
                    ["easeOutCubic", [.215, .61, .355, 1]],
                    ["easeInOutCubic", [.645, .045, .355, 1]],
                    ["easeInQuart", [.895, .03, .685, .22]],
                    ["easeOutQuart", [.165, .84, .44, 1]],
                    ["easeInOutQuart", [.77, 0, .175, 1]],
                    ["easeInQuint", [.755, .05, .855, .06]],
                    ["easeOutQuint", [.23, 1, .32, 1]],
                    ["easeInOutQuint", [.86, 0, .07, 1]],
                    ["easeInExpo", [.95, .05, .795, .035]],
                    ["easeOutExpo", [.19, 1, .22, 1]],
                    ["easeInOutExpo", [1, 0, 0, 1]],
                    ["easeInCirc", [.6, .04, .98, .335]],
                    ["easeOutCirc", [.075, .82, .165, 1]],
                    ["easeInOutCirc", [.785, .135, .15, .86]]
                ], function(t, e) {
                    v.Easings[e[0]] = o.apply(null, e[1])
                });
                var y = v.CSS = {
                    RegEx: {
                        isHex: /^#([A-f\d]{3}){1,2}$/i,
                        valueUnwrap: /^[A-z]+\((.*)\)$/i,
                        wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                        valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                    },
                    Lists: {
                        colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                        transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                        transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                    },
                    Hooks: {
                        templates: {
                            textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                            boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                            clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                            backgroundPosition: ["X Y", "0% 0%"],
                            transformOrigin: ["X Y Z", "50% 50% 0px"],
                            perspectiveOrigin: ["X Y", "50% 50%"]
                        },
                        registered: {},
                        register: function() {
                            for (var t = 0; t < y.Lists.colors.length; t++) {
                                var e = "color" === y.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
                                y.Hooks.templates[y.Lists.colors[t]] = ["Red Green Blue Alpha", e]
                            }
                            var i, n, a;
                            if (c)
                                for (i in y.Hooks.templates) {
                                    a = (n = y.Hooks.templates[i])[0].split(" ");
                                    var r = n[1].match(y.RegEx.valueSplit);
                                    "Color" === a[0] && (a.push(a.shift()), r.push(r.shift()), y.Hooks.templates[i] = [a.join(" "), r.join(" ")])
                                }
                            for (i in y.Hooks.templates)
                                for (var t in a = (n = y.Hooks.templates[i])[0].split(" ")) {
                                    var o = i + a[t],
                                        s = t;
                                    y.Hooks.registered[o] = [i, s]
                                }
                        },
                        getRoot: function(t) {
                            var e = y.Hooks.registered[t];
                            return e ? e[0] : t
                        },
                        cleanRootPropertyValue: function(t, e) {
                            return y.RegEx.valueUnwrap.test(e) && (e = e.match(y.RegEx.valueUnwrap)[1]), y.Values.isCSSNullValue(e) && (e = y.Hooks.templates[t][1]), e
                        },
                        extractValue: function(t, e) {
                            var i = y.Hooks.registered[t];
                            if (i) {
                                var n = i[0],
                                    a = i[1];
                                return (e = y.Hooks.cleanRootPropertyValue(n, e)).toString().match(y.RegEx.valueSplit)[a]
                            }
                            return e
                        },
                        injectValue: function(t, e, i) {
                            var n = y.Hooks.registered[t];
                            if (n) {
                                var a, r = n[0],
                                    o = n[1];
                                return (a = (i = y.Hooks.cleanRootPropertyValue(r, i)).toString().match(y.RegEx.valueSplit))[o] = e, a.join(" ")
                            }
                            return i
                        }
                    },
                    Normalizations: {
                        registered: {
                            clip: function(t, e, i) {
                                switch (t) {
                                    case "name":
                                        return "clip";
                                    case "extract":
                                        var n;
                                        return y.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : n = (n = i.toString().match(y.RegEx.valueUnwrap)) ? n[1].replace(/,(\s+)?/g, " ") : i, n;
                                    case "inject":
                                        return "rect(" + i + ")"
                                }
                            },
                            blur: function(t, e, i) {
                                switch (t) {
                                    case "name":
                                        return v.State.isFirefox ? "filter" : "-webkit-filter";
                                    case "extract":
                                        var n = parseFloat(i);
                                        if (!n && 0 !== n) {
                                            var a = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                            n = a ? a[1] : 0
                                        }
                                        return n;
                                    case "inject":
                                        return parseFloat(i) ? "blur(" + i + ")" : "none"
                                }
                            },
                            opacity: function(t, e, i) {
                                if (8 >= c) switch (t) {
                                    case "name":
                                        return "filter";
                                    case "extract":
                                        var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                        return n ? n[1] / 100 : 1;
                                    case "inject":
                                        return e.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                                } else switch (t) {
                                    case "name":
                                        return "opacity";
                                    case "extract":
                                    case "inject":
                                        return i
                                }
                            }
                        },
                        register: function() {
                            9 >= c || v.State.isGingerbread || (y.Lists.transformsBase = y.Lists.transformsBase.concat(y.Lists.transforms3D));
                            for (var t = 0; t < y.Lists.transformsBase.length; t++) ! function() {
                                var e = y.Lists.transformsBase[t];
                                y.Normalizations.registered[e] = function(t, i, a) {
                                    switch (t) {
                                        case "name":
                                            return "transform";
                                        case "extract":
                                            return r(i) === n || r(i).transformCache[e] === n ? /^scale/i.test(e) ? 1 : 0 : r(i).transformCache[e].replace(/[()]/g, "");
                                        case "inject":
                                            var o = !1;
                                            switch (e.substr(0, e.length - 1)) {
                                                case "translate":
                                                    o = !/(%|px|em|rem|vw|vh|\d)$/i.test(a);
                                                    break;
                                                case "scal":
                                                case "scale":
                                                    v.State.isAndroid && r(i).transformCache[e] === n && 1 > a && (a = 1), o = !/(\d)$/i.test(a);
                                                    break;
                                                case "skew":
                                                    o = !/(deg|\d)$/i.test(a);
                                                    break;
                                                case "rotate":
                                                    o = !/(deg|\d)$/i.test(a)
                                            }
                                            return o || (r(i).transformCache[e] = "(" + a + ")"), r(i).transformCache[e]
                                    }
                                }
                            }();
                            for (t = 0; t < y.Lists.colors.length; t++) ! function() {
                                var e = y.Lists.colors[t];
                                y.Normalizations.registered[e] = function(t, i, a) {
                                    switch (t) {
                                        case "name":
                                            return e;
                                        case "extract":
                                            var r;
                                            if (y.RegEx.wrappedValueAlreadyExtracted.test(a)) r = a;
                                            else {
                                                var o, s = {
                                                    black: "rgb(0, 0, 0)",
                                                    blue: "rgb(0, 0, 255)",
                                                    gray: "rgb(128, 128, 128)",
                                                    green: "rgb(0, 128, 0)",
                                                    red: "rgb(255, 0, 0)",
                                                    white: "rgb(255, 255, 255)"
                                                };
                                                /^[A-z]+$/i.test(a) ? o = s[a] !== n ? s[a] : s.black : y.RegEx.isHex.test(a) ? o = "rgb(" + y.Values.hexToRgb(a).join(" ") + ")" : /^rgba?\(/i.test(a) || (o = s.black), r = (o || a).toString().match(y.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                            }
                                            return 8 >= c || 3 !== r.split(" ").length || (r += " 1"), r;
                                        case "inject":
                                            return 8 >= c ? 4 === a.split(" ").length && (a = a.split(/\s+/).slice(0, 3).join(" ")) : 3 === a.split(" ").length && (a += " 1"), (8 >= c ? "rgb" : "rgba") + "(" + a.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                    }
                                }
                            }()
                        }
                    },
                    Names: {
                        camelCase: function(t) {
                            return t.replace(/-(\w)/g, function(t, e) {
                                return e.toUpperCase()
                            })
                        },
                        SVGAttribute: function(t) {
                            var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                            return (c || v.State.isAndroid && !v.State.isChrome) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t)
                        },
                        prefixCheck: function(t) {
                            if (v.State.prefixMatches[t]) return [v.State.prefixMatches[t], !0];
                            for (var e = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = e.length; n > i; i++) {
                                var a;
                                if (a = 0 === i ? t : e[i] + t.replace(/^\w/, function(t) {
                                        return t.toUpperCase()
                                    }), f.isString(v.State.prefixElement.style[a])) return v.State.prefixMatches[t] = a, [a, !0]
                            }
                            return [t, !1]
                        }
                    },
                    Values: {
                        hexToRgb: function(t) {
                            var e;
                            return t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, i, n) {
                                return e + e + i + i + n + n
                            }), (e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t)) ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
                        },
                        isCSSNullValue: function(t) {
                            return 0 == t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
                        },
                        getUnitType: function(t) {
                            return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
                        },
                        getDisplayType: function(t) {
                            var e = t && t.tagName.toString().toLowerCase();
                            return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
                        },
                        addClass: function(t, e) {
                            t.classList ? t.classList.add(e) : t.className += (t.className.length ? " " : "") + e
                        },
                        removeClass: function(t, e) {
                            t.classList ? t.classList.remove(e) : t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                        }
                    },
                    getPropertyValue: function(t, i, a, o) {
                        function s(t, i) {
                            function a() {
                                h && y.setPropertyValue(t, "display", "none")
                            }
                            var l = 0;
                            if (8 >= c) l = d.css(t, i);
                            else {
                                var u, h = !1;
                                if (/^(width|height)$/.test(i) && 0 === y.getPropertyValue(t, "display") && (h = !0, y.setPropertyValue(t, "display", y.Values.getDisplayType(t))), !o) {
                                    if ("height" === i && "border-box" !== y.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                        var f = t.offsetHeight - (parseFloat(y.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(y.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(y.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(y.getPropertyValue(t, "paddingBottom")) || 0);
                                        return a(), f
                                    }
                                    if ("width" === i && "border-box" !== y.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                        var p = t.offsetWidth - (parseFloat(y.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(y.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(y.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(y.getPropertyValue(t, "paddingRight")) || 0);
                                        return a(), p
                                    }
                                }
                                u = r(t) === n ? e.getComputedStyle(t, null) : r(t).computedStyle ? r(t).computedStyle : r(t).computedStyle = e.getComputedStyle(t, null), "borderColor" === i && (i = "borderTopColor"), ("" === (l = 9 === c && "filter" === i ? u.getPropertyValue(i) : u[i]) || null === l) && (l = t.style[i]), a()
                            }
                            if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
                                var g = s(t, "position");
                                ("fixed" === g || "absolute" === g && /top|left/i.test(i)) && (l = d(t).position()[i] + "px")
                            }
                            return l
                        }
                        var l;
                        if (y.Hooks.registered[i]) {
                            var u = i,
                                h = y.Hooks.getRoot(u);
                            a === n && (a = y.getPropertyValue(t, y.Names.prefixCheck(h)[0])), y.Normalizations.registered[h] && (a = y.Normalizations.registered[h]("extract", t, a)), l = y.Hooks.extractValue(u, a)
                        } else if (y.Normalizations.registered[i]) {
                            var f, p;
                            "transform" !== (f = y.Normalizations.registered[i]("name", t)) && (p = s(t, y.Names.prefixCheck(f)[0]), y.Values.isCSSNullValue(p) && y.Hooks.templates[i] && (p = y.Hooks.templates[i][1])), l = y.Normalizations.registered[i]("extract", t, p)
                        }
                        if (!/^[\d-]/.test(l))
                            if (r(t) && r(t).isSVG && y.Names.SVGAttribute(i))
                                if (/^(height|width)$/i.test(i)) try {
                                    l = t.getBBox()[i]
                                } catch (t) {
                                    l = 0
                                } else l = t.getAttribute(i);
                                else l = s(t, y.Names.prefixCheck(i)[0]);
                        return y.Values.isCSSNullValue(l) && (l = 0), v.debug >= 2 && console.log("Get " + i + ": " + l), l
                    },
                    setPropertyValue: function(t, i, n, a, o) {
                        var s = i;
                        if ("scroll" === i) o.container ? o.container["scroll" + o.direction] = n : "Left" === o.direction ? e.scrollTo(n, o.alternateValue) : e.scrollTo(o.alternateValue, n);
                        else if (y.Normalizations.registered[i] && "transform" === y.Normalizations.registered[i]("name", t)) y.Normalizations.registered[i]("inject", t, n), s = "transform", n = r(t).transformCache[i];
                        else {
                            if (y.Hooks.registered[i]) {
                                var l = i,
                                    u = y.Hooks.getRoot(i);
                                a = a || y.getPropertyValue(t, u), n = y.Hooks.injectValue(l, n, a), i = u
                            }
                            if (y.Normalizations.registered[i] && (n = y.Normalizations.registered[i]("inject", t, n), i = y.Normalizations.registered[i]("name", t)), s = y.Names.prefixCheck(i)[0], 8 >= c) try {
                                t.style[s] = n
                            } catch (t) {
                                v.debug && console.log("Browser does not support [" + n + "] for [" + s + "]")
                            } else r(t) && r(t).isSVG && y.Names.SVGAttribute(i) ? t.setAttribute(i, n) : t.style[s] = n;
                            v.debug >= 2 && console.log("Set " + i + " (" + s + "): " + n)
                        }
                        return [s, n]
                    },
                    flushTransformCache: function(t) {
                        function e(e) {
                            return parseFloat(y.getPropertyValue(t, e))
                        }
                        var i = "";
                        if ((c || v.State.isAndroid && !v.State.isChrome) && r(t).isSVG) {
                            var n = {
                                translate: [e("translateX"), e("translateY")],
                                skewX: [e("skewX")],
                                skewY: [e("skewY")],
                                scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")],
                                rotate: [e("rotateZ"), 0, 0]
                            };
                            d.each(r(t).transformCache, function(t) {
                                /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"), n[t] && (i += t + "(" + n[t].join(" ") + ") ", delete n[t])
                            })
                        } else {
                            var a, o;
                            d.each(r(t).transformCache, function(e) {
                                return a = r(t).transformCache[e], "transformPerspective" === e ? (o = a, !0) : (9 === c && "rotateZ" === e && (e = "rotate"), void(i += e + a + " "))
                            }), o && (i = "perspective" + o + " " + i)
                        }
                        y.setPropertyValue(t, "transform", i)
                    }
                };
                y.Hooks.register(), y.Normalizations.register(), v.hook = function(t, e, i) {
                    var o = n;
                    return t = a(t), d.each(t, function(t, a) {
                        if (r(a) === n && v.init(a), i === n) o === n && (o = v.CSS.getPropertyValue(a, e));
                        else {
                            var s = v.CSS.setPropertyValue(a, e, i);
                            "transform" === s[0] && v.CSS.flushTransformCache(a), o = s
                        }
                    }), o
                };
                var x = function() {
                    function t() {
                        return c ? A.promise || null : h
                    }

                    function o() {
                        function t(t) {
                            function h(t, e) {
                                var i = n,
                                    a = n,
                                    r = n;
                                return f.isArray(t) ? (i = t[0], !f.isArray(t[1]) && /^[\d-]/.test(t[1]) || f.isFunction(t[1]) || y.RegEx.isHex.test(t[1]) ? r = t[1] : (f.isString(t[1]) && !y.RegEx.isHex.test(t[1]) || f.isArray(t[1])) && (a = e ? t[1] : s(t[1], u.duration), t[2] !== n && (r = t[2]))) : i = t, e || (a = a || u.easing), f.isFunction(i) && (i = i.call(o, C, S)), f.isFunction(r) && (r = r.call(o, C, S)), [i || 0, a, r]
                            }

                            function p(t, e) {
                                var i, n;
                                return n = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(t) {
                                    return i = t, ""
                                }), i || (i = y.Values.getUnitType(t)), [n, i]
                            }

                            function g() {
                                var t = {
                                        myParent: o.parentNode || i.body,
                                        position: y.getPropertyValue(o, "position"),
                                        fontSize: y.getPropertyValue(o, "fontSize")
                                    },
                                    n = t.position === L.lastPosition && t.myParent === L.lastParent,
                                    a = t.fontSize === L.lastFontSize;
                                L.lastParent = t.myParent, L.lastPosition = t.position, L.lastFontSize = t.fontSize;
                                var s = 100,
                                    l = {};
                                if (a && n) l.emToPx = L.lastEmToPx, l.percentToPxWidth = L.lastPercentToPxWidth, l.percentToPxHeight = L.lastPercentToPxHeight;
                                else {
                                    var u = r(o).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                                    v.init(u), t.myParent.appendChild(u), d.each(["overflow", "overflowX", "overflowY"], function(t, e) {
                                        v.CSS.setPropertyValue(u, e, "hidden")
                                    }), v.CSS.setPropertyValue(u, "position", t.position), v.CSS.setPropertyValue(u, "fontSize", t.fontSize), v.CSS.setPropertyValue(u, "boxSizing", "content-box"), d.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(t, e) {
                                        v.CSS.setPropertyValue(u, e, s + "%")
                                    }), v.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(y.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(y.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = L.lastEmToPx = (parseFloat(y.getPropertyValue(u, "paddingLeft")) || 1) / s, t.myParent.removeChild(u)
                                }
                                return null === L.remToPx && (L.remToPx = parseFloat(y.getPropertyValue(i.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(e.innerWidth) / 100, L.vhToPx = parseFloat(e.innerHeight) / 100), l.remToPx = L.remToPx, l.vwToPx = L.vwToPx, l.vhToPx = L.vhToPx, v.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o), l
                            }
                            if (u.begin && 0 === C) try {
                                u.begin.call(m, m)
                            } catch (t) {
                                setTimeout(function() {
                                    throw t
                                }, 1)
                            }
                            if ("scroll" === P) {
                                var x, k, M, I = /^x$/i.test(u.axis) ? "Left" : "Top",
                                    T = parseFloat(u.offset) || 0;
                                u.container ? f.isWrapped(u.container) || f.isNode(u.container) ? (u.container = u.container[0] || u.container, M = (x = u.container["scroll" + I]) + d(o).position()[I.toLowerCase()] + T) : u.container = null : (x = v.State.scrollAnchor[v.State["scrollProperty" + I]], k = v.State.scrollAnchor[v.State["scrollProperty" + ("Left" === I ? "Top" : "Left")]], M = d(o).offset()[I.toLowerCase()] + T), c = {
                                    scroll: {
                                        rootPropertyValue: !1,
                                        startValue: x,
                                        currentValue: x,
                                        endValue: M,
                                        unitType: "",
                                        easing: u.easing,
                                        scrollData: {
                                            container: u.container,
                                            direction: I,
                                            alternateValue: k
                                        }
                                    },
                                    element: o
                                }, v.debug && console.log("tweensContainer (scroll): ", c.scroll, o)
                            } else if ("reverse" === P) {
                                if (!r(o).tweensContainer) return void d.dequeue(o, u.queue);
                                "none" === r(o).opts.display && (r(o).opts.display = "auto"), "hidden" === r(o).opts.visibility && (r(o).opts.visibility = "visible"), r(o).opts.loop = !1, r(o).opts.begin = null, r(o).opts.complete = null, w.easing || delete u.easing, w.duration || delete u.duration, u = d.extend({}, r(o).opts, u);
                                var D = d.extend(!0, {}, r(o).tweensContainer);
                                for (var F in D)
                                    if ("element" !== F) {
                                        var V = D[F].startValue;
                                        D[F].startValue = D[F].currentValue = D[F].endValue, D[F].endValue = V, f.isEmptyObject(w) || (D[F].easing = u.easing), v.debug && console.log("reverse tweensContainer (" + F + "): " + JSON.stringify(D[F]), o)
                                    }
                                c = D
                            } else if ("start" === P) {
                                for (var _ in r(o).tweensContainer && !0 === r(o).isAnimating && (D = r(o).tweensContainer), d.each(b, function(t, e) {
                                        if (RegExp("^" + y.Lists.colors.join("$|^") + "$").test(t)) {
                                            var i = h(e, !0),
                                                a = i[0],
                                                r = i[1],
                                                o = i[2];
                                            if (y.RegEx.isHex.test(a)) {
                                                for (var s = ["Red", "Green", "Blue"], l = y.Values.hexToRgb(a), u = o ? y.Values.hexToRgb(o) : n, d = 0; d < s.length; d++) {
                                                    var c = [l[d]];
                                                    r && c.push(r), u !== n && c.push(u[d]), b[t + s[d]] = c
                                                }
                                                delete b[t]
                                            }
                                        }
                                    }), b) {
                                    var R = h(b[_]),
                                        z = R[0],
                                        E = R[1],
                                        N = R[2];
                                    _ = y.Names.camelCase(_);
                                    var B = y.Hooks.getRoot(_),
                                        W = !1;
                                    if (r(o).isSVG || "tween" === B || !1 !== y.Names.prefixCheck(B)[1] || y.Normalizations.registered[B] !== n) {
                                        (u.display !== n && null !== u.display && "none" !== u.display || u.visibility !== n && "hidden" !== u.visibility) && /opacity|filter/.test(_) && !N && 0 !== z && (N = 0), u._cacheValues && D && D[_] ? (N === n && (N = D[_].endValue + D[_].unitType), W = r(o).rootPropertyValueCache[B]) : y.Hooks.registered[_] ? N === n ? (W = y.getPropertyValue(o, B), N = y.getPropertyValue(o, _, W)) : W = y.Hooks.templates[B][1] : N === n && (N = y.getPropertyValue(o, _));
                                        var H, j, q, Y = !1;
                                        if (N = (H = p(_, N))[0], q = H[1], z = (H = p(_, z))[0].replace(/^([+-\/*])=/, function(t, e) {
                                                return Y = e, ""
                                            }), j = H[1], N = parseFloat(N) || 0, z = parseFloat(z) || 0, "%" === j && (/^(fontSize|lineHeight)$/.test(_) ? (z /= 100, j = "em") : /^scale/.test(_) ? (z /= 100, j = "") : /(Red|Green|Blue)$/i.test(_) && (z = z / 100 * 255, j = "")), /[\/*]/.test(Y)) j = q;
                                        else if (q !== j && 0 !== N)
                                            if (0 === z) j = q;
                                            else {
                                                a = a || g();
                                                var $ = /margin|padding|left|right|width|text|word|letter/i.test(_) || /X$/.test(_) || "x" === _ ? "x" : "y";
                                                switch (q) {
                                                    case "%":
                                                        N *= "x" === $ ? a.percentToPxWidth : a.percentToPxHeight;
                                                        break;
                                                    case "px":
                                                        break;
                                                    default:
                                                        N *= a[q + "ToPx"]
                                                }
                                                switch (j) {
                                                    case "%":
                                                        N *= 1 / ("x" === $ ? a.percentToPxWidth : a.percentToPxHeight);
                                                        break;
                                                    case "px":
                                                        break;
                                                    default:
                                                        N *= 1 / a[j + "ToPx"]
                                                }
                                            }
                                        switch (Y) {
                                            case "+":
                                                z = N + z;
                                                break;
                                            case "-":
                                                z = N - z;
                                                break;
                                            case "*":
                                                z *= N;
                                                break;
                                            case "/":
                                                z = N / z
                                        }
                                        c[_] = {
                                            rootPropertyValue: W,
                                            startValue: N,
                                            currentValue: N,
                                            endValue: z,
                                            unitType: j,
                                            easing: E
                                        }, v.debug && console.log("tweensContainer (" + _ + "): " + JSON.stringify(c[_]), o)
                                    } else v.debug && console.log("Skipping [" + B + "] due to a lack of browser support.")
                                }
                                c.element = o
                            }
                            c.element && (y.Values.addClass(o, "velocity-animating"), O.push(c), "" === u.queue && (r(o).tweensContainer = c, r(o).opts = u), r(o).isAnimating = !0, C === S - 1 ? (v.State.calls.push([O, m, u, null, A.resolver]), !1 === v.State.isTicking && (v.State.isTicking = !0, l())) : C++)
                        }
                        var a, o = this,
                            u = d.extend({}, v.defaults, w),
                            c = {};
                        switch (r(o) === n && v.init(o), parseFloat(u.delay) && !1 !== u.queue && d.queue(o, u.queue, function(t) {
                            v.velocityQueueEntryFlag = !0, r(o).delayTimer = {
                                setTimeout: setTimeout(t, parseFloat(u.delay)),
                                next: t
                            }
                        }), u.duration.toString().toLowerCase()) {
                            case "fast":
                                u.duration = 200;
                                break;
                            case "normal":
                                u.duration = g;
                                break;
                            case "slow":
                                u.duration = 600;
                                break;
                            default:
                                u.duration = parseFloat(u.duration) || 1
                        }!1 !== v.mock && (!0 === v.mock ? u.duration = u.delay = 1 : (u.duration *= parseFloat(v.mock) || 1, u.delay *= parseFloat(v.mock) || 1)), u.easing = s(u.easing, u.duration), u.begin && !f.isFunction(u.begin) && (u.begin = null), u.progress && !f.isFunction(u.progress) && (u.progress = null), u.complete && !f.isFunction(u.complete) && (u.complete = null), u.display !== n && null !== u.display && (u.display = u.display.toString().toLowerCase(), "auto" === u.display && (u.display = v.CSS.Values.getDisplayType(o))), u.visibility !== n && null !== u.visibility && (u.visibility = u.visibility.toString().toLowerCase()), u.mobileHA = u.mobileHA && v.State.isMobile && !v.State.isGingerbread, !1 === u.queue ? u.delay ? setTimeout(t, u.delay) : t() : d.queue(o, u.queue, function(e, i) {
                            return !0 === i ? (A.promise && A.resolver(m), !0) : (v.velocityQueueEntryFlag = !0, void t())
                        }), "" !== u.queue && "fx" !== u.queue || "inprogress" === d.queue(o)[0] || d.dequeue(o)
                    }
                    var c, h, p, m, b, w, k = arguments[0] && (arguments[0].p || d.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || f.isString(arguments[0].properties));
                    if (f.isWrapped(this) ? (c = !1, p = 0, m = this, h = this) : (c = !0, p = 1, m = k ? arguments[0].elements || arguments[0].e : arguments[0]), m = a(m)) {
                        k ? (b = arguments[0].properties || arguments[0].p, w = arguments[0].options || arguments[0].o) : (b = arguments[p], w = arguments[p + 1]);
                        var S = m.length,
                            C = 0;
                        if (!/^(stop|finish)$/i.test(b) && !d.isPlainObject(w)) {
                            w = {};
                            for (var M = p + 1; M < arguments.length; M++) f.isArray(arguments[M]) || !/^(fast|normal|slow)$/i.test(arguments[M]) && !/^\d/.test(arguments[M]) ? f.isString(arguments[M]) || f.isArray(arguments[M]) ? w.easing = arguments[M] : f.isFunction(arguments[M]) && (w.complete = arguments[M]) : w.duration = arguments[M]
                        }
                        var P, A = {
                            promise: null,
                            resolver: null,
                            rejecter: null
                        };
                        switch (c && v.Promise && (A.promise = new v.Promise(function(t, e) {
                            A.resolver = t, A.rejecter = e
                        })), b) {
                            case "scroll":
                                P = "scroll";
                                break;
                            case "reverse":
                                P = "reverse";
                                break;
                            case "finish":
                            case "stop":
                                d.each(m, function(t, e) {
                                    r(e) && r(e).delayTimer && (clearTimeout(r(e).delayTimer.setTimeout), r(e).delayTimer.next && r(e).delayTimer.next(), delete r(e).delayTimer)
                                });
                                var I = [];
                                return d.each(v.State.calls, function(t, e) {
                                    e && d.each(e[1], function(i, a) {
                                        var o = w === n ? "" : w;
                                        return !0 !== o && e[2].queue !== o && (w !== n || !1 !== e[2].queue) || void d.each(m, function(i, n) {
                                            n === a && ((!0 === w || f.isString(w)) && (d.each(d.queue(n, f.isString(w) ? w : ""), function(t, e) {
                                                f.isFunction(e) && e(null, !0)
                                            }), d.queue(n, f.isString(w) ? w : "", [])), "stop" === b ? (r(n) && r(n).tweensContainer && !1 !== o && d.each(r(n).tweensContainer, function(t, e) {
                                                e.endValue = e.currentValue
                                            }), I.push(t)) : "finish" === b && (e[2].duration = 1))
                                        })
                                    })
                                }), "stop" === b && (d.each(I, function(t, e) {
                                    u(e, !0)
                                }), A.promise && A.resolver(m)), t();
                            default:
                                if (!d.isPlainObject(b) || f.isEmptyObject(b)) {
                                    if (f.isString(b) && v.Redirects[b]) {
                                        var T = (_ = d.extend({}, w)).duration,
                                            D = _.delay || 0;
                                        return !0 === _.backwards && (m = d.extend(!0, [], m).reverse()), d.each(m, function(t, e) {
                                            parseFloat(_.stagger) ? _.delay = D + parseFloat(_.stagger) * t : f.isFunction(_.stagger) && (_.delay = D + _.stagger.call(e, t, S)), _.drag && (_.duration = parseFloat(T) || (/^(callout|transition)/.test(b) ? 1e3 : g), _.duration = Math.max(_.duration * (_.backwards ? 1 - t / S : (t + 1) / S), .75 * _.duration, 200)), v.Redirects[b].call(e, e, _ || {}, t, S, m, A.promise ? A : n)
                                        }), t()
                                    }
                                    var F = "Velocity: First argument (" + b + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                    return A.promise ? A.rejecter(new Error(F)) : console.log(F), t()
                                }
                                P = "start"
                        }
                        var V, _, L = {
                                lastParent: null,
                                lastPosition: null,
                                lastFontSize: null,
                                lastPercentToPxWidth: null,
                                lastPercentToPxHeight: null,
                                lastEmToPx: null,
                                remToPx: null,
                                vwToPx: null,
                                vhToPx: null
                            },
                            O = [];
                        if (d.each(m, function(t, e) {
                                f.isNode(e) && o.call(e)
                            }), (_ = d.extend({}, v.defaults, w)).loop = parseInt(_.loop), V = 2 * _.loop - 1, _.loop)
                            for (var R = 0; V > R; R++) {
                                var z = {
                                    delay: _.delay,
                                    progress: _.progress
                                };
                                R === V - 1 && (z.display = _.display, z.visibility = _.visibility, z.complete = _.complete), x(m, "reverse", z)
                            }
                        return t()
                    }
                };
                (v = d.extend(x, v)).animate = x;
                var w = e.requestAnimationFrame || h;
                return v.State.isMobile || i.hidden === n || i.addEventListener("visibilitychange", function() {
                    i.hidden ? (w = function(t) {
                        return setTimeout(function() {
                            t(!0)
                        }, 16)
                    }, l()) : w = e.requestAnimationFrame || h
                }), t.Velocity = v, t !== e && (t.fn.velocity = x, t.fn.velocity.defaults = v.defaults), d.each(["Down", "Up"], function(t, e) {
                    v.Redirects["slide" + e] = function(t, i, a, r, o, s) {
                        var l = d.extend({}, i),
                            u = l.begin,
                            c = l.complete,
                            h = {
                                height: "",
                                marginTop: "",
                                marginBottom: "",
                                paddingTop: "",
                                paddingBottom: ""
                            },
                            f = {};
                        l.display === n && (l.display = "Down" === e ? "inline" === v.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"), l.begin = function() {
                            for (var i in u && u.call(o, o), h) {
                                f[i] = t.style[i];
                                var n = v.CSS.getPropertyValue(t, i);
                                h[i] = "Down" === e ? [n, 0] : [0, n]
                            }
                            f.overflow = t.style.overflow, t.style.overflow = "hidden"
                        }, l.complete = function() {
                            for (var e in f) t.style[e] = f[e];
                            c && c.call(o, o), s && s.resolver(o)
                        }, v(t, h, l)
                    }
                }), d.each(["In", "Out"], function(t, e) {
                    v.Redirects["fade" + e] = function(t, i, a, r, o, s) {
                        var l = d.extend({}, i),
                            u = {
                                opacity: "In" === e ? 1 : 0
                            },
                            c = l.complete;
                        l.complete = a !== r - 1 ? l.begin = null : function() {
                            c && c.call(o, o), s && s.resolver(o)
                        }, l.display === n && (l.display = "In" === e ? "auto" : "none"), v(this, u, l)
                    }
                }), v
            }
            jQuery.fn.velocity = jQuery.fn.animate
        }(window.jQuery || window.Zepto || window, window, document)
    })),
    function(t) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
        else if ("function" == typeof define && define.amd) define([], t);
        else {
            ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Chart = t()
        }
    }(function() {
        return function t(e, i, n) {
            function a(o, s) {
                if (!i[o]) {
                    if (!e[o]) {
                        var l = "function" == typeof require && require;
                        if (!s && l) return l(o, !0);
                        if (r) return r(o, !0);
                        var u = new Error("Cannot find module '" + o + "'");
                        throw u.code = "MODULE_NOT_FOUND", u
                    }
                    var d = i[o] = {
                        exports: {}
                    };
                    e[o][0].call(d.exports, function(t) {
                        var i = e[o][1][t];
                        return a(i || t)
                    }, d, d.exports, t, e, i, n)
                }
                return i[o].exports
            }
            for (var r = "function" == typeof require && require, o = 0; o < n.length; o++) a(n[o]);
            return a
        }({
            1: [function(t, e, i) {}, {}],
            2: [function(t, e, i) {
                var n = t(6);

                function a(t) {
                    if (t) {
                        var e = [0, 0, 0],
                            i = 1,
                            a = t.match(/^#([a-fA-F0-9]{3})$/);
                        if (a) {
                            a = a[1];
                            for (var r = 0; r < e.length; r++) e[r] = parseInt(a[r] + a[r], 16)
                        } else if (a = t.match(/^#([a-fA-F0-9]{6})$/)) {
                            a = a[1];
                            for (r = 0; r < e.length; r++) e[r] = parseInt(a.slice(2 * r, 2 * r + 2), 16)
                        } else if (a = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)) {
                            for (r = 0; r < e.length; r++) e[r] = parseInt(a[r + 1]);
                            i = parseFloat(a[4])
                        } else if (a = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)) {
                            for (r = 0; r < e.length; r++) e[r] = Math.round(2.55 * parseFloat(a[r + 1]));
                            i = parseFloat(a[4])
                        } else if (a = t.match(/(\w+)/)) {
                            if ("transparent" == a[1]) return [0, 0, 0, 0];
                            if (!(e = n[a[1]])) return
                        }
                        for (r = 0; r < e.length; r++) e[r] = d(e[r], 0, 255);
                        return i = i || 0 == i ? d(i, 0, 1) : 1, e[3] = i, e
                    }
                }

                function r(t) {
                    if (t) {
                        var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                        if (e) {
                            var i = parseFloat(e[4]);
                            return [d(parseInt(e[1]), 0, 360), d(parseFloat(e[2]), 0, 100), d(parseFloat(e[3]), 0, 100), d(isNaN(i) ? 1 : i, 0, 1)]
                        }
                    }
                }

                function o(t) {
                    if (t) {
                        var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                        if (e) {
                            var i = parseFloat(e[4]);
                            return [d(parseInt(e[1]), 0, 360), d(parseFloat(e[2]), 0, 100), d(parseFloat(e[3]), 0, 100), d(isNaN(i) ? 1 : i, 0, 1)]
                        }
                    }
                }

                function s(t, e) {
                    return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
                }

                function l(t, e) {
                    return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
                }

                function u(t, e) {
                    return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
                }

                function d(t, e, i) {
                    return Math.min(Math.max(e, t), i)
                }

                function c(t) {
                    var e = t.toString(16).toUpperCase();
                    return e.length < 2 ? "0" + e : e
                }
                e.exports = {
                    getRgba: a,
                    getHsla: r,
                    getRgb: function(t) {
                        var e = a(t);
                        return e && e.slice(0, 3)
                    },
                    getHsl: function(t) {
                        var e = r(t);
                        return e && e.slice(0, 3)
                    },
                    getHwb: o,
                    getAlpha: function(t) {
                        var e = a(t);
                        if (e) return e[3];
                        if (e = r(t)) return e[3];
                        if (e = o(t)) return e[3]
                    },
                    hexString: function(t) {
                        return "#" + c(t[0]) + c(t[1]) + c(t[2])
                    },
                    rgbString: function(t, e) {
                        if (e < 1 || t[3] && t[3] < 1) return s(t, e);
                        return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
                    },
                    rgbaString: s,
                    percentString: function(t, e) {
                        if (e < 1 || t[3] && t[3] < 1) return l(t, e);
                        var i = Math.round(t[0] / 255 * 100),
                            n = Math.round(t[1] / 255 * 100),
                            a = Math.round(t[2] / 255 * 100);
                        return "rgb(" + i + "%, " + n + "%, " + a + "%)"
                    },
                    percentaString: l,
                    hslString: function(t, e) {
                        if (e < 1 || t[3] && t[3] < 1) return u(t, e);
                        return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
                    },
                    hslaString: u,
                    hwbString: function(t, e) {
                        void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
                        return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
                    },
                    keyword: function(t) {
                        return h[t.slice(0, 3)]
                    }
                };
                var h = {};
                for (var f in n) h[n[f]] = f
            }, {
                6: 6
            }],
            3: [function(t, e, i) {
                var n = t(5),
                    a = t(2),
                    r = function(t) {
                        return t instanceof r ? t : this instanceof r ? (this.valid = !1, this.values = {
                            rgb: [0, 0, 0],
                            hsl: [0, 0, 0],
                            hsv: [0, 0, 0],
                            hwb: [0, 0, 0],
                            cmyk: [0, 0, 0, 0],
                            alpha: 1
                        }, void("string" == typeof t ? (e = a.getRgba(t)) ? this.setValues("rgb", e) : (e = a.getHsla(t)) ? this.setValues("hsl", e) : (e = a.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new r(t);
                        var e
                    };
                r.prototype = {
                    isValid: function() {
                        return this.valid
                    },
                    rgb: function() {
                        return this.setSpace("rgb", arguments)
                    },
                    hsl: function() {
                        return this.setSpace("hsl", arguments)
                    },
                    hsv: function() {
                        return this.setSpace("hsv", arguments)
                    },
                    hwb: function() {
                        return this.setSpace("hwb", arguments)
                    },
                    cmyk: function() {
                        return this.setSpace("cmyk", arguments)
                    },
                    rgbArray: function() {
                        return this.values.rgb
                    },
                    hslArray: function() {
                        return this.values.hsl
                    },
                    hsvArray: function() {
                        return this.values.hsv
                    },
                    hwbArray: function() {
                        var t = this.values;
                        return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
                    },
                    cmykArray: function() {
                        return this.values.cmyk
                    },
                    rgbaArray: function() {
                        var t = this.values;
                        return t.rgb.concat([t.alpha])
                    },
                    hslaArray: function() {
                        var t = this.values;
                        return t.hsl.concat([t.alpha])
                    },
                    alpha: function(t) {
                        return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
                    },
                    red: function(t) {
                        return this.setChannel("rgb", 0, t)
                    },
                    green: function(t) {
                        return this.setChannel("rgb", 1, t)
                    },
                    blue: function(t) {
                        return this.setChannel("rgb", 2, t)
                    },
                    hue: function(t) {
                        return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
                    },
                    saturation: function(t) {
                        return this.setChannel("hsl", 1, t)
                    },
                    lightness: function(t) {
                        return this.setChannel("hsl", 2, t)
                    },
                    saturationv: function(t) {
                        return this.setChannel("hsv", 1, t)
                    },
                    whiteness: function(t) {
                        return this.setChannel("hwb", 1, t)
                    },
                    blackness: function(t) {
                        return this.setChannel("hwb", 2, t)
                    },
                    value: function(t) {
                        return this.setChannel("hsv", 2, t)
                    },
                    cyan: function(t) {
                        return this.setChannel("cmyk", 0, t)
                    },
                    magenta: function(t) {
                        return this.setChannel("cmyk", 1, t)
                    },
                    yellow: function(t) {
                        return this.setChannel("cmyk", 2, t)
                    },
                    black: function(t) {
                        return this.setChannel("cmyk", 3, t)
                    },
                    hexString: function() {
                        return a.hexString(this.values.rgb)
                    },
                    rgbString: function() {
                        return a.rgbString(this.values.rgb, this.values.alpha)
                    },
                    rgbaString: function() {
                        return a.rgbaString(this.values.rgb, this.values.alpha)
                    },
                    percentString: function() {
                        return a.percentString(this.values.rgb, this.values.alpha)
                    },
                    hslString: function() {
                        return a.hslString(this.values.hsl, this.values.alpha)
                    },
                    hslaString: function() {
                        return a.hslaString(this.values.hsl, this.values.alpha)
                    },
                    hwbString: function() {
                        return a.hwbString(this.values.hwb, this.values.alpha)
                    },
                    keyword: function() {
                        return a.keyword(this.values.rgb, this.values.alpha)
                    },
                    rgbNumber: function() {
                        var t = this.values.rgb;
                        return t[0] << 16 | t[1] << 8 | t[2]
                    },
                    luminosity: function() {
                        for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
                            var n = t[i] / 255;
                            e[i] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
                        }
                        return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
                    },
                    contrast: function(t) {
                        var e = this.luminosity(),
                            i = t.luminosity();
                        return e > i ? (e + .05) / (i + .05) : (i + .05) / (e + .05)
                    },
                    level: function(t) {
                        var e = this.contrast(t);
                        return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
                    },
                    dark: function() {
                        var t = this.values.rgb;
                        return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
                    },
                    light: function() {
                        return !this.dark()
                    },
                    negate: function() {
                        for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
                        return this.setValues("rgb", t), this
                    },
                    lighten: function(t) {
                        var e = this.values.hsl;
                        return e[2] += e[2] * t, this.setValues("hsl", e), this
                    },
                    darken: function(t) {
                        var e = this.values.hsl;
                        return e[2] -= e[2] * t, this.setValues("hsl", e), this
                    },
                    saturate: function(t) {
                        var e = this.values.hsl;
                        return e[1] += e[1] * t, this.setValues("hsl", e), this
                    },
                    desaturate: function(t) {
                        var e = this.values.hsl;
                        return e[1] -= e[1] * t, this.setValues("hsl", e), this
                    },
                    whiten: function(t) {
                        var e = this.values.hwb;
                        return e[1] += e[1] * t, this.setValues("hwb", e), this
                    },
                    blacken: function(t) {
                        var e = this.values.hwb;
                        return e[2] += e[2] * t, this.setValues("hwb", e), this
                    },
                    greyscale: function() {
                        var t = this.values.rgb,
                            e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                        return this.setValues("rgb", [e, e, e]), this
                    },
                    clearer: function(t) {
                        var e = this.values.alpha;
                        return this.setValues("alpha", e - e * t), this
                    },
                    opaquer: function(t) {
                        var e = this.values.alpha;
                        return this.setValues("alpha", e + e * t), this
                    },
                    rotate: function(t) {
                        var e = this.values.hsl,
                            i = (e[0] + t) % 360;
                        return e[0] = i < 0 ? 360 + i : i, this.setValues("hsl", e), this
                    },
                    mix: function(t, e) {
                        var i = t,
                            n = void 0 === e ? .5 : e,
                            a = 2 * n - 1,
                            r = this.alpha() - i.alpha(),
                            o = ((a * r == -1 ? a : (a + r) / (1 + a * r)) + 1) / 2,
                            s = 1 - o;
                        return this.rgb(o * this.red() + s * i.red(), o * this.green() + s * i.green(), o * this.blue() + s * i.blue()).alpha(this.alpha() * n + i.alpha() * (1 - n))
                    },
                    toJSON: function() {
                        return this.rgb()
                    },
                    clone: function() {
                        var t, e, i = new r,
                            n = this.values,
                            a = i.values;
                        for (var o in n) n.hasOwnProperty(o) && (t = n[o], "[object Array]" === (e = {}.toString.call(t)) ? a[o] = t.slice(0) : "[object Number]" === e ? a[o] = t : console.error("unexpected color value:", t));
                        return i
                    }
                }, r.prototype.spaces = {
                    rgb: ["red", "green", "blue"],
                    hsl: ["hue", "saturation", "lightness"],
                    hsv: ["hue", "saturation", "value"],
                    hwb: ["hue", "whiteness", "blackness"],
                    cmyk: ["cyan", "magenta", "yellow", "black"]
                }, r.prototype.maxes = {
                    rgb: [255, 255, 255],
                    hsl: [360, 100, 100],
                    hsv: [360, 100, 100],
                    hwb: [360, 100, 100],
                    cmyk: [100, 100, 100, 100]
                }, r.prototype.getValues = function(t) {
                    for (var e = this.values, i = {}, n = 0; n < t.length; n++) i[t.charAt(n)] = e[t][n];
                    return 1 !== e.alpha && (i.a = e.alpha), i
                }, r.prototype.setValues = function(t, e) {
                    var i, a, r = this.values,
                        o = this.spaces,
                        s = this.maxes,
                        l = 1;
                    if (this.valid = !0, "alpha" === t) l = e;
                    else if (e.length) r[t] = e.slice(0, t.length), l = e[t.length];
                    else if (void 0 !== e[t.charAt(0)]) {
                        for (i = 0; i < t.length; i++) r[t][i] = e[t.charAt(i)];
                        l = e.a
                    } else if (void 0 !== e[o[t][0]]) {
                        var u = o[t];
                        for (i = 0; i < t.length; i++) r[t][i] = e[u[i]];
                        l = e.alpha
                    }
                    if (r.alpha = Math.max(0, Math.min(1, void 0 === l ? r.alpha : l)), "alpha" === t) return !1;
                    for (i = 0; i < t.length; i++) a = Math.max(0, Math.min(s[t][i], r[t][i])), r[t][i] = Math.round(a);
                    for (var d in o) d !== t && (r[d] = n[t][d](r[t]));
                    return !0
                }, r.prototype.setSpace = function(t, e) {
                    var i = e[0];
                    return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this)
                }, r.prototype.setChannel = function(t, e, i) {
                    var n = this.values[t];
                    return void 0 === i ? n[e] : i === n[e] ? this : (n[e] = i, this.setValues(t, n), this)
                }, "undefined" != typeof window && (window.Color = r), e.exports = r
            }, {
                2: 2,
                5: 5
            }],
            4: [function(t, e, i) {
                function n(t) {
                    var e, i, n = t[0] / 255,
                        a = t[1] / 255,
                        r = t[2] / 255,
                        o = Math.min(n, a, r),
                        s = Math.max(n, a, r),
                        l = s - o;
                    return s == o ? e = 0 : n == s ? e = (a - r) / l : a == s ? e = 2 + (r - n) / l : r == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = (o + s) / 2, [e, 100 * (s == o ? 0 : i <= .5 ? l / (s + o) : l / (2 - s - o)), 100 * i]
                }

                function a(t) {
                    var e, i, n = t[0],
                        a = t[1],
                        r = t[2],
                        o = Math.min(n, a, r),
                        s = Math.max(n, a, r),
                        l = s - o;
                    return i = 0 == s ? 0 : l / s * 1e3 / 10, s == o ? e = 0 : n == s ? e = (a - r) / l : a == s ? e = 2 + (r - n) / l : r == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, i, s / 255 * 1e3 / 10]
                }

                function o(t) {
                    var e = t[0],
                        i = t[1],
                        a = t[2];
                    return [n(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(i, a))), 100 * (a = 1 - 1 / 255 * Math.max(e, Math.max(i, a)))]
                }

                function s(t) {
                    var e, i = t[0] / 255,
                        n = t[1] / 255,
                        a = t[2] / 255;
                    return [100 * ((1 - i - (e = Math.min(1 - i, 1 - n, 1 - a))) / (1 - e) || 0), 100 * ((1 - n - e) / (1 - e) || 0), 100 * ((1 - a - e) / (1 - e) || 0), 100 * e]
                }

                function l(t) {
                    return M[JSON.stringify(t)]
                }

                function u(t) {
                    var e = t[0] / 255,
                        i = t[1] / 255,
                        n = t[2] / 255;
                    return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92) + .1805 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * e + .7152 * i + .0722 * n), 100 * (.0193 * e + .1192 * i + .9505 * n)]
                }

                function d(t) {
                    var e = u(t),
                        i = e[0],
                        n = e[1],
                        a = e[2];
                    return n /= 100, a /= 108.883, i = (i /= 95.047) > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (i - n), 200 * (n - (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))]
                }

                function c(t) {
                    var e, i, n, a, r, o = t[0] / 360,
                        s = t[1] / 100,
                        l = t[2] / 100;
                    if (0 == s) return [r = 255 * l, r, r];
                    e = 2 * l - (i = l < .5 ? l * (1 + s) : l + s - l * s), a = [0, 0, 0];
                    for (var u = 0; u < 3; u++)(n = o + 1 / 3 * -(u - 1)) < 0 && n++, n > 1 && n--, r = 6 * n < 1 ? e + 6 * (i - e) * n : 2 * n < 1 ? i : 3 * n < 2 ? e + (i - e) * (2 / 3 - n) * 6 : e, a[u] = 255 * r;
                    return a
                }

                function h(t) {
                    var e = t[0] / 60,
                        i = t[1] / 100,
                        n = t[2] / 100,
                        a = Math.floor(e) % 6,
                        r = e - Math.floor(e),
                        o = 255 * n * (1 - i),
                        s = 255 * n * (1 - i * r),
                        l = 255 * n * (1 - i * (1 - r));
                    n *= 255;
                    switch (a) {
                        case 0:
                            return [n, l, o];
                        case 1:
                            return [s, n, o];
                        case 2:
                            return [o, n, l];
                        case 3:
                            return [o, s, n];
                        case 4:
                            return [l, o, n];
                        case 5:
                            return [n, o, s]
                    }
                }

                function f(t) {
                    var e, i, n, a, o = t[0] / 360,
                        s = t[1] / 100,
                        l = t[2] / 100,
                        u = s + l;
                    switch (u > 1 && (s /= u, l /= u), i = 1 - l, n = 6 * o - (e = Math.floor(6 * o)), 0 != (1 & e) && (n = 1 - n), a = s + n * (i - s), e) {
                        default:
                            case 6:
                            case 0:
                            r = i,
                        g = a,
                        b = s;
                        break;
                        case 1:
                                r = a,
                            g = i,
                            b = s;
                            break;
                        case 2:
                                r = s,
                            g = i,
                            b = a;
                            break;
                        case 3:
                                r = s,
                            g = a,
                            b = i;
                            break;
                        case 4:
                                r = a,
                            g = s,
                            b = i;
                            break;
                        case 5:
                                r = i,
                            g = s,
                            b = a
                    }
                    return [255 * r, 255 * g, 255 * b]
                }

                function p(t) {
                    var e = t[0] / 100,
                        i = t[1] / 100,
                        n = t[2] / 100,
                        a = t[3] / 100;
                    return [255 * (1 - Math.min(1, e * (1 - a) + a)), 255 * (1 - Math.min(1, i * (1 - a) + a)), 255 * (1 - Math.min(1, n * (1 - a) + a))]
                }

                function m(t) {
                    var e, i, n, a = t[0] / 100,
                        r = t[1] / 100,
                        o = t[2] / 100;
                    return i = -.9689 * a + 1.8758 * r + .0415 * o, n = .0557 * a + -.204 * r + 1.057 * o, e = (e = 3.2406 * a + -1.5372 * r + -.4986 * o) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (i = Math.min(Math.max(0, i), 1)), 255 * (n = Math.min(Math.max(0, n), 1))]
                }

                function v(t) {
                    var e = t[0],
                        i = t[1],
                        n = t[2];
                    return i /= 100, n /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (e - i), 200 * (i - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))]
                }

                function y(t) {
                    var e, i, n, a, r = t[0],
                        o = t[1],
                        s = t[2];
                    return r <= 8 ? a = (i = 100 * r / 903.3) / 100 * 7.787 + 16 / 116 : (i = 100 * Math.pow((r + 16) / 116, 3), a = Math.pow(i / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (o / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(o / 500 + a, 3), i, n = n / 108.883 <= .008859 ? n = 108.883 * (a - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - s / 200, 3)]
                }

                function x(t) {
                    var e, i = t[0],
                        n = t[1],
                        a = t[2];
                    return (e = 360 * Math.atan2(a, n) / 2 / Math.PI) < 0 && (e += 360), [i, Math.sqrt(n * n + a * a), e]
                }

                function w(t) {
                    return m(y(t))
                }

                function k(t) {
                    var e, i = t[0],
                        n = t[1];
                    return e = t[2] / 360 * 2 * Math.PI, [i, n * Math.cos(e), n * Math.sin(e)]
                }

                function S(t) {
                    return C[t]
                }
                e.exports = {
                    rgb2hsl: n,
                    rgb2hsv: a,
                    rgb2hwb: o,
                    rgb2cmyk: s,
                    rgb2keyword: l,
                    rgb2xyz: u,
                    rgb2lab: d,
                    rgb2lch: function(t) {
                        return x(d(t))
                    },
                    hsl2rgb: c,
                    hsl2hsv: function(t) {
                        var e = t[0],
                            i = t[1] / 100,
                            n = t[2] / 100;
                        if (0 === n) return [0, 0, 0];
                        return [e, 100 * (2 * (i *= (n *= 2) <= 1 ? n : 2 - n) / (n + i)), 100 * ((n + i) / 2)]
                    },
                    hsl2hwb: function(t) {
                        return o(c(t))
                    },
                    hsl2cmyk: function(t) {
                        return s(c(t))
                    },
                    hsl2keyword: function(t) {
                        return l(c(t))
                    },
                    hsv2rgb: h,
                    hsv2hsl: function(t) {
                        var e, i, n = t[0],
                            a = t[1] / 100,
                            r = t[2] / 100;
                        return e = a * r, [n, 100 * (e = (e /= (i = (2 - a) * r) <= 1 ? i : 2 - i) || 0), 100 * (i /= 2)]
                    },
                    hsv2hwb: function(t) {
                        return o(h(t))
                    },
                    hsv2cmyk: function(t) {
                        return s(h(t))
                    },
                    hsv2keyword: function(t) {
                        return l(h(t))
                    },
                    hwb2rgb: f,
                    hwb2hsl: function(t) {
                        return n(f(t))
                    },
                    hwb2hsv: function(t) {
                        return a(f(t))
                    },
                    hwb2cmyk: function(t) {
                        return s(f(t))
                    },
                    hwb2keyword: function(t) {
                        return l(f(t))
                    },
                    cmyk2rgb: p,
                    cmyk2hsl: function(t) {
                        return n(p(t))
                    },
                    cmyk2hsv: function(t) {
                        return a(p(t))
                    },
                    cmyk2hwb: function(t) {
                        return o(p(t))
                    },
                    cmyk2keyword: function(t) {
                        return l(p(t))
                    },
                    keyword2rgb: S,
                    keyword2hsl: function(t) {
                        return n(S(t))
                    },
                    keyword2hsv: function(t) {
                        return a(S(t))
                    },
                    keyword2hwb: function(t) {
                        return o(S(t))
                    },
                    keyword2cmyk: function(t) {
                        return s(S(t))
                    },
                    keyword2lab: function(t) {
                        return d(S(t))
                    },
                    keyword2xyz: function(t) {
                        return u(S(t))
                    },
                    xyz2rgb: m,
                    xyz2lab: v,
                    xyz2lch: function(t) {
                        return x(v(t))
                    },
                    lab2xyz: y,
                    lab2rgb: w,
                    lab2lch: x,
                    lch2lab: k,
                    lch2xyz: function(t) {
                        return y(k(t))
                    },
                    lch2rgb: function(t) {
                        return w(k(t))
                    }
                };
                var C = {
                        aliceblue: [240, 248, 255],
                        antiquewhite: [250, 235, 215],
                        aqua: [0, 255, 255],
                        aquamarine: [127, 255, 212],
                        azure: [240, 255, 255],
                        beige: [245, 245, 220],
                        bisque: [255, 228, 196],
                        black: [0, 0, 0],
                        blanchedalmond: [255, 235, 205],
                        blue: [0, 0, 255],
                        blueviolet: [138, 43, 226],
                        brown: [165, 42, 42],
                        burlywood: [222, 184, 135],
                        cadetblue: [95, 158, 160],
                        chartreuse: [127, 255, 0],
                        chocolate: [210, 105, 30],
                        coral: [255, 127, 80],
                        cornflowerblue: [100, 149, 237],
                        cornsilk: [255, 248, 220],
                        crimson: [220, 20, 60],
                        cyan: [0, 255, 255],
                        darkblue: [0, 0, 139],
                        darkcyan: [0, 139, 139],
                        darkgoldenrod: [184, 134, 11],
                        darkgray: [169, 169, 169],
                        darkgreen: [0, 100, 0],
                        darkgrey: [169, 169, 169],
                        darkkhaki: [189, 183, 107],
                        darkmagenta: [139, 0, 139],
                        darkolivegreen: [85, 107, 47],
                        darkorange: [255, 140, 0],
                        darkorchid: [153, 50, 204],
                        darkred: [139, 0, 0],
                        darksalmon: [233, 150, 122],
                        darkseagreen: [143, 188, 143],
                        darkslateblue: [72, 61, 139],
                        darkslategray: [47, 79, 79],
                        darkslategrey: [47, 79, 79],
                        darkturquoise: [0, 206, 209],
                        darkviolet: [148, 0, 211],
                        deeppink: [255, 20, 147],
                        deepskyblue: [0, 191, 255],
                        dimgray: [105, 105, 105],
                        dimgrey: [105, 105, 105],
                        dodgerblue: [30, 144, 255],
                        firebrick: [178, 34, 34],
                        floralwhite: [255, 250, 240],
                        forestgreen: [34, 139, 34],
                        fuchsia: [255, 0, 255],
                        gainsboro: [220, 220, 220],
                        ghostwhite: [248, 248, 255],
                        gold: [255, 215, 0],
                        goldenrod: [218, 165, 32],
                        gray: [128, 128, 128],
                        green: [0, 128, 0],
                        greenyellow: [173, 255, 47],
                        grey: [128, 128, 128],
                        honeydew: [240, 255, 240],
                        hotpink: [255, 105, 180],
                        indianred: [205, 92, 92],
                        indigo: [75, 0, 130],
                        ivory: [255, 255, 240],
                        khaki: [240, 230, 140],
                        lavender: [230, 230, 250],
                        lavenderblush: [255, 240, 245],
                        lawngreen: [124, 252, 0],
                        lemonchiffon: [255, 250, 205],
                        lightblue: [173, 216, 230],
                        lightcoral: [240, 128, 128],
                        lightcyan: [224, 255, 255],
                        lightgoldenrodyellow: [250, 250, 210],
                        lightgray: [211, 211, 211],
                        lightgreen: [144, 238, 144],
                        lightgrey: [211, 211, 211],
                        lightpink: [255, 182, 193],
                        lightsalmon: [255, 160, 122],
                        lightseagreen: [32, 178, 170],
                        lightskyblue: [135, 206, 250],
                        lightslategray: [119, 136, 153],
                        lightslategrey: [119, 136, 153],
                        lightsteelblue: [176, 196, 222],
                        lightyellow: [255, 255, 224],
                        lime: [0, 255, 0],
                        limegreen: [50, 205, 50],
                        linen: [250, 240, 230],
                        magenta: [255, 0, 255],
                        maroon: [128, 0, 0],
                        mediumaquamarine: [102, 205, 170],
                        mediumblue: [0, 0, 205],
                        mediumorchid: [186, 85, 211],
                        mediumpurple: [147, 112, 219],
                        mediumseagreen: [60, 179, 113],
                        mediumslateblue: [123, 104, 238],
                        mediumspringgreen: [0, 250, 154],
                        mediumturquoise: [72, 209, 204],
                        mediumvioletred: [199, 21, 133],
                        midnightblue: [25, 25, 112],
                        mintcream: [245, 255, 250],
                        mistyrose: [255, 228, 225],
                        moccasin: [255, 228, 181],
                        navajowhite: [255, 222, 173],
                        navy: [0, 0, 128],
                        oldlace: [253, 245, 230],
                        olive: [128, 128, 0],
                        olivedrab: [107, 142, 35],
                        orange: [255, 165, 0],
                        orangered: [255, 69, 0],
                        orchid: [218, 112, 214],
                        palegoldenrod: [238, 232, 170],
                        palegreen: [152, 251, 152],
                        paleturquoise: [175, 238, 238],
                        palevioletred: [219, 112, 147],
                        papayawhip: [255, 239, 213],
                        peachpuff: [255, 218, 185],
                        peru: [205, 133, 63],
                        pink: [255, 192, 203],
                        plum: [221, 160, 221],
                        powderblue: [176, 224, 230],
                        purple: [128, 0, 128],
                        rebeccapurple: [102, 51, 153],
                        red: [255, 0, 0],
                        rosybrown: [188, 143, 143],
                        royalblue: [65, 105, 225],
                        saddlebrown: [139, 69, 19],
                        salmon: [250, 128, 114],
                        sandybrown: [244, 164, 96],
                        seagreen: [46, 139, 87],
                        seashell: [255, 245, 238],
                        sienna: [160, 82, 45],
                        silver: [192, 192, 192],
                        skyblue: [135, 206, 235],
                        slateblue: [106, 90, 205],
                        slategray: [112, 128, 144],
                        slategrey: [112, 128, 144],
                        snow: [255, 250, 250],
                        springgreen: [0, 255, 127],
                        steelblue: [70, 130, 180],
                        tan: [210, 180, 140],
                        teal: [0, 128, 128],
                        thistle: [216, 191, 216],
                        tomato: [255, 99, 71],
                        turquoise: [64, 224, 208],
                        violet: [238, 130, 238],
                        wheat: [245, 222, 179],
                        white: [255, 255, 255],
                        whitesmoke: [245, 245, 245],
                        yellow: [255, 255, 0],
                        yellowgreen: [154, 205, 50]
                    },
                    M = {};
                for (var P in C) M[JSON.stringify(C[P])] = P
            }, {}],
            5: [function(t, e, i) {
                var n = t(4),
                    a = function() {
                        return new u
                    };
                for (var r in n) {
                    a[r + "Raw"] = function(t) {
                        return function(e) {
                            return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), n[t](e)
                        }
                    }(r);
                    var o = /(\w+)2(\w+)/.exec(r),
                        s = o[1],
                        l = o[2];
                    (a[s] = a[s] || {})[l] = a[r] = function(t) {
                        return function(e) {
                            "number" == typeof e && (e = Array.prototype.slice.call(arguments));
                            var i = n[t](e);
                            if ("string" == typeof i || void 0 === i) return i;
                            for (var a = 0; a < i.length; a++) i[a] = Math.round(i[a]);
                            return i
                        }
                    }(r)
                }
                var u = function() {
                    this.convs = {}
                };
                u.prototype.routeSpace = function(t, e) {
                    var i = e[0];
                    return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i))
                }, u.prototype.setValues = function(t, e) {
                    return this.space = t, this.convs = {}, this.convs[t] = e, this
                }, u.prototype.getValues = function(t) {
                    var e = this.convs[t];
                    if (!e) {
                        var i = this.space,
                            n = this.convs[i];
                        e = a[i][t](n), this.convs[t] = e
                    }
                    return e
                }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(t) {
                    u.prototype[t] = function(e) {
                        return this.routeSpace(t, arguments)
                    }
                }), e.exports = a
            }, {
                4: 4
            }],
            6: [function(t, e, i) {
                e.exports = {
                    aliceblue: [240, 248, 255],
                    antiquewhite: [250, 235, 215],
                    aqua: [0, 255, 255],
                    aquamarine: [127, 255, 212],
                    azure: [240, 255, 255],
                    beige: [245, 245, 220],
                    bisque: [255, 228, 196],
                    black: [0, 0, 0],
                    blanchedalmond: [255, 235, 205],
                    blue: [0, 0, 255],
                    blueviolet: [138, 43, 226],
                    brown: [165, 42, 42],
                    burlywood: [222, 184, 135],
                    cadetblue: [95, 158, 160],
                    chartreuse: [127, 255, 0],
                    chocolate: [210, 105, 30],
                    coral: [255, 127, 80],
                    cornflowerblue: [100, 149, 237],
                    cornsilk: [255, 248, 220],
                    crimson: [220, 20, 60],
                    cyan: [0, 255, 255],
                    darkblue: [0, 0, 139],
                    darkcyan: [0, 139, 139],
                    darkgoldenrod: [184, 134, 11],
                    darkgray: [169, 169, 169],
                    darkgreen: [0, 100, 0],
                    darkgrey: [169, 169, 169],
                    darkkhaki: [189, 183, 107],
                    darkmagenta: [139, 0, 139],
                    darkolivegreen: [85, 107, 47],
                    darkorange: [255, 140, 0],
                    darkorchid: [153, 50, 204],
                    darkred: [139, 0, 0],
                    darksalmon: [233, 150, 122],
                    darkseagreen: [143, 188, 143],
                    darkslateblue: [72, 61, 139],
                    darkslategray: [47, 79, 79],
                    darkslategrey: [47, 79, 79],
                    darkturquoise: [0, 206, 209],
                    darkviolet: [148, 0, 211],
                    deeppink: [255, 20, 147],
                    deepskyblue: [0, 191, 255],
                    dimgray: [105, 105, 105],
                    dimgrey: [105, 105, 105],
                    dodgerblue: [30, 144, 255],
                    firebrick: [178, 34, 34],
                    floralwhite: [255, 250, 240],
                    forestgreen: [34, 139, 34],
                    fuchsia: [255, 0, 255],
                    gainsboro: [220, 220, 220],
                    ghostwhite: [248, 248, 255],
                    gold: [255, 215, 0],
                    goldenrod: [218, 165, 32],
                    gray: [128, 128, 128],
                    green: [0, 128, 0],
                    greenyellow: [173, 255, 47],
                    grey: [128, 128, 128],
                    honeydew: [240, 255, 240],
                    hotpink: [255, 105, 180],
                    indianred: [205, 92, 92],
                    indigo: [75, 0, 130],
                    ivory: [255, 255, 240],
                    khaki: [240, 230, 140],
                    lavender: [230, 230, 250],
                    lavenderblush: [255, 240, 245],
                    lawngreen: [124, 252, 0],
                    lemonchiffon: [255, 250, 205],
                    lightblue: [173, 216, 230],
                    lightcoral: [240, 128, 128],
                    lightcyan: [224, 255, 255],
                    lightgoldenrodyellow: [250, 250, 210],
                    lightgray: [211, 211, 211],
                    lightgreen: [144, 238, 144],
                    lightgrey: [211, 211, 211],
                    lightpink: [255, 182, 193],
                    lightsalmon: [255, 160, 122],
                    lightseagreen: [32, 178, 170],
                    lightskyblue: [135, 206, 250],
                    lightslategray: [119, 136, 153],
                    lightslategrey: [119, 136, 153],
                    lightsteelblue: [176, 196, 222],
                    lightyellow: [255, 255, 224],
                    lime: [0, 255, 0],
                    limegreen: [50, 205, 50],
                    linen: [250, 240, 230],
                    magenta: [255, 0, 255],
                    maroon: [128, 0, 0],
                    mediumaquamarine: [102, 205, 170],
                    mediumblue: [0, 0, 205],
                    mediumorchid: [186, 85, 211],
                    mediumpurple: [147, 112, 219],
                    mediumseagreen: [60, 179, 113],
                    mediumslateblue: [123, 104, 238],
                    mediumspringgreen: [0, 250, 154],
                    mediumturquoise: [72, 209, 204],
                    mediumvioletred: [199, 21, 133],
                    midnightblue: [25, 25, 112],
                    mintcream: [245, 255, 250],
                    mistyrose: [255, 228, 225],
                    moccasin: [255, 228, 181],
                    navajowhite: [255, 222, 173],
                    navy: [0, 0, 128],
                    oldlace: [253, 245, 230],
                    olive: [128, 128, 0],
                    olivedrab: [107, 142, 35],
                    orange: [255, 165, 0],
                    orangered: [255, 69, 0],
                    orchid: [218, 112, 214],
                    palegoldenrod: [238, 232, 170],
                    palegreen: [152, 251, 152],
                    paleturquoise: [175, 238, 238],
                    palevioletred: [219, 112, 147],
                    papayawhip: [255, 239, 213],
                    peachpuff: [255, 218, 185],
                    peru: [205, 133, 63],
                    pink: [255, 192, 203],
                    plum: [221, 160, 221],
                    powderblue: [176, 224, 230],
                    purple: [128, 0, 128],
                    rebeccapurple: [102, 51, 153],
                    red: [255, 0, 0],
                    rosybrown: [188, 143, 143],
                    royalblue: [65, 105, 225],
                    saddlebrown: [139, 69, 19],
                    salmon: [250, 128, 114],
                    sandybrown: [244, 164, 96],
                    seagreen: [46, 139, 87],
                    seashell: [255, 245, 238],
                    sienna: [160, 82, 45],
                    silver: [192, 192, 192],
                    skyblue: [135, 206, 235],
                    slateblue: [106, 90, 205],
                    slategray: [112, 128, 144],
                    slategrey: [112, 128, 144],
                    snow: [255, 250, 250],
                    springgreen: [0, 255, 127],
                    steelblue: [70, 130, 180],
                    tan: [210, 180, 140],
                    teal: [0, 128, 128],
                    thistle: [216, 191, 216],
                    tomato: [255, 99, 71],
                    turquoise: [64, 224, 208],
                    violet: [238, 130, 238],
                    wheat: [245, 222, 179],
                    white: [255, 255, 255],
                    whitesmoke: [245, 245, 245],
                    yellow: [255, 255, 0],
                    yellowgreen: [154, 205, 50]
                }
            }, {}],
            7: [function(t, e, i) {
                var n = t(28)();
                t(26)(n), t(40)(n), t(22)(n), t(25)(n), t(30)(n), t(21)(n), t(23)(n), t(24)(n), t(29)(n), t(32)(n), t(33)(n), t(31)(n), t(27)(n), t(34)(n), t(35)(n), t(36)(n), t(37)(n), t(38)(n), t(46)(n), t(44)(n), t(45)(n), t(47)(n), t(48)(n), t(49)(n), t(15)(n), t(16)(n), t(17)(n), t(18)(n), t(19)(n), t(20)(n), t(8)(n), t(9)(n), t(10)(n), t(11)(n), t(12)(n), t(13)(n), t(14)(n);
                var a = [];
                a.push(t(41)(n), t(42)(n), t(43)(n)), n.plugins.register(a), e.exports = n, "undefined" != typeof window && (window.Chart = n)
            }, {
                10: 10,
                11: 11,
                12: 12,
                13: 13,
                14: 14,
                15: 15,
                16: 16,
                17: 17,
                18: 18,
                19: 19,
                20: 20,
                21: 21,
                22: 22,
                23: 23,
                24: 24,
                25: 25,
                26: 26,
                27: 27,
                28: 28,
                29: 29,
                30: 30,
                31: 31,
                32: 32,
                33: 33,
                34: 34,
                35: 35,
                36: 36,
                37: 37,
                38: 38,
                40: 40,
                41: 41,
                42: 42,
                43: 43,
                44: 44,
                45: 45,
                46: 46,
                47: 47,
                48: 48,
                49: 49,
                8: 8,
                9: 9
            }],
            8: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    t.Bar = function(e, i) {
                        return i.type = "bar", new t(e, i)
                    }
                }
            }, {}],
            9: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    t.Bubble = function(e, i) {
                        return i.type = "bubble", new t(e, i)
                    }
                }
            }, {}],
            10: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    t.Doughnut = function(e, i) {
                        return i.type = "doughnut", new t(e, i)
                    }
                }
            }, {}],
            11: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    t.Line = function(e, i) {
                        return i.type = "line", new t(e, i)
                    }
                }
            }, {}],
            12: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    t.PolarArea = function(e, i) {
                        return i.type = "polarArea", new t(e, i)
                    }
                }
            }, {}],
            13: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    t.Radar = function(e, i) {
                        return i.type = "radar", new t(e, i)
                    }
                }
            }, {}],
            14: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    t.defaults.scatter = {
                        hover: {
                            mode: "single"
                        },
                        scales: {
                            xAxes: [{
                                type: "linear",
                                position: "bottom",
                                id: "x-axis-1"
                            }],
                            yAxes: [{
                                type: "linear",
                                position: "left",
                                id: "y-axis-1"
                            }]
                        },
                        tooltips: {
                            callbacks: {
                                title: function() {
                                    return ""
                                },
                                label: function(t) {
                                    return "(" + t.xLabel + ", " + t.yLabel + ")"
                                }
                            }
                        }
                    }, t.controllers.scatter = t.controllers.line, t.Scatter = function(e, i) {
                        return i.type = "scatter", new t(e, i)
                    }
                }
            }, {}],
            15: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    var e = t.helpers;
                    t.defaults.bar = {
                        hover: {
                            mode: "label"
                        },
                        scales: {
                            xAxes: [{
                                type: "category",
                                categoryPercentage: .8,
                                barPercentage: .9,
                                gridLines: {
                                    offsetGridLines: !0
                                }
                            }],
                            yAxes: [{
                                type: "linear"
                            }]
                        }
                    }, t.controllers.bar = t.DatasetController.extend({
                        dataElementType: t.elements.Rectangle,
                        initialize: function() {
                            var e;
                            t.DatasetController.prototype.initialize.apply(this, arguments), (e = this.getMeta()).stack = this.getDataset().stack, e.bar = !0
                        },
                        update: function(t) {
                            var e, i, n = this.getMeta().data;
                            for (this._ruler = this.getRuler(), e = 0, i = n.length; e < i; ++e) this.updateElement(n[e], e, t)
                        },
                        updateElement: function(t, i, n) {
                            var a = this,
                                r = a.chart,
                                o = a.getMeta(),
                                s = a.getDataset(),
                                l = t.custom || {},
                                u = r.options.elements.rectangle;
                            t._xScale = a.getScaleForId(o.xAxisID), t._yScale = a.getScaleForId(o.yAxisID), t._datasetIndex = a.index, t._index = i, t._model = {
                                datasetLabel: s.label,
                                label: r.data.labels[i],
                                borderSkipped: l.borderSkipped ? l.borderSkipped : u.borderSkipped,
                                backgroundColor: l.backgroundColor ? l.backgroundColor : e.getValueAtIndexOrDefault(s.backgroundColor, i, u.backgroundColor),
                                borderColor: l.borderColor ? l.borderColor : e.getValueAtIndexOrDefault(s.borderColor, i, u.borderColor),
                                borderWidth: l.borderWidth ? l.borderWidth : e.getValueAtIndexOrDefault(s.borderWidth, i, u.borderWidth)
                            }, a.updateElementGeometry(t, i, n), t.pivot()
                        },
                        updateElementGeometry: function(t, e, i) {
                            var n = this,
                                a = t._model,
                                r = n.getValueScale(),
                                o = r.getBasePixel(),
                                s = r.isHorizontal(),
                                l = n._ruler || n.getRuler(),
                                u = n.calculateBarValuePixels(n.index, e),
                                d = n.calculateBarIndexPixels(n.index, e, l);
                            a.horizontal = s, a.base = i ? o : u.base, a.x = s ? i ? o : u.head : d.center, a.y = s ? d.center : i ? o : u.head, a.height = s ? d.size : void 0, a.width = s ? void 0 : d.size
                        },
                        getValueScaleId: function() {
                            return this.getMeta().yAxisID
                        },
                        getIndexScaleId: function() {
                            return this.getMeta().xAxisID
                        },
                        getValueScale: function() {
                            return this.getScaleForId(this.getValueScaleId())
                        },
                        getIndexScale: function() {
                            return this.getScaleForId(this.getIndexScaleId())
                        },
                        getStackCount: function(t) {
                            var e, i, n = this.chart,
                                a = this.getIndexScale().options.stacked,
                                r = void 0 === t ? n.data.datasets.length : t + 1,
                                o = [];
                            for (e = 0; e < r; ++e)(i = n.getDatasetMeta(e)).bar && n.isDatasetVisible(e) && (!1 === a || !0 === a && -1 === o.indexOf(i.stack) || void 0 === a && (void 0 === i.stack || -1 === o.indexOf(i.stack))) && o.push(i.stack);
                            return o.length
                        },
                        getStackIndex: function(t) {
                            return this.getStackCount(t) - 1
                        },
                        getRuler: function() {
                            var t = this.getIndexScale(),
                                i = t.options,
                                n = this.getStackCount(),
                                a = (t.isHorizontal() ? t.width : t.height) / t.ticks.length,
                                r = a * i.categoryPercentage,
                                o = r / n,
                                s = o * i.barPercentage;
                            return {
                                stackCount: n,
                                tickSize: a,
                                categorySize: r,
                                categorySpacing: a - r,
                                fullBarSize: o,
                                barSize: s = Math.min(e.getValueOrDefault(i.barThickness, s), e.getValueOrDefault(i.maxBarThickness, 1 / 0)),
                                barSpacing: o - s,
                                scale: t
                            }
                        },
                        calculateBarValuePixels: function(t, e) {
                            var i, n, a, r, o, s, l = this.chart,
                                u = this.getMeta(),
                                d = this.getValueScale(),
                                c = l.data.datasets,
                                h = Number(c[t].data[e]),
                                f = d.options.stacked,
                                p = u.stack,
                                g = 0;
                            if (f || void 0 === f && void 0 !== p)
                                for (i = 0; i < t; ++i)(n = l.getDatasetMeta(i)).bar && n.stack === p && n.controller.getValueScaleId() === d.id && l.isDatasetVisible(i) && (a = Number(c[i].data[e]), (h < 0 && a < 0 || h >= 0 && a > 0) && (g += a));
                            return r = d.getPixelForValue(g), {
                                size: s = ((o = d.getPixelForValue(g + h)) - r) / 2,
                                base: r,
                                head: o,
                                center: o + s / 2
                            }
                        },
                        calculateBarIndexPixels: function(t, e, i) {
                            var n = i.scale,
                                a = this.chart.isCombo,
                                r = this.getStackIndex(t),
                                o = n.getPixelForValue(null, e, t, a),
                                s = i.barSize;
                            return o -= a ? i.tickSize / 2 : 0, o += i.fullBarSize * r, o += i.categorySpacing / 2, {
                                size: s,
                                base: o += i.barSpacing / 2,
                                head: o + s,
                                center: o + s / 2
                            }
                        },
                        draw: function() {
                            var t, i = this.chart,
                                n = this.getMeta().data,
                                a = this.getDataset(),
                                r = n.length,
                                o = 0;
                            for (e.canvas.clipArea(i.ctx, i.chartArea); o < r; ++o) null === (t = a.data[o]) || void 0 === t || isNaN(t) || n[o].draw();
                            e.canvas.unclipArea(i.ctx)
                        },
                        setHoverStyle: function(t) {
                            var i = this.chart.data.datasets[t._datasetIndex],
                                n = t._index,
                                a = t.custom || {},
                                r = t._model;
                            r.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : e.getValueAtIndexOrDefault(i.hoverBackgroundColor, n, e.getHoverColor(r.backgroundColor)), r.borderColor = a.hoverBorderColor ? a.hoverBorderColor : e.getValueAtIndexOrDefault(i.hoverBorderColor, n, e.getHoverColor(r.borderColor)), r.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : e.getValueAtIndexOrDefault(i.hoverBorderWidth, n, r.borderWidth)
                        },
                        removeHoverStyle: function(t) {
                            var i = this.chart.data.datasets[t._datasetIndex],
                                n = t._index,
                                a = t.custom || {},
                                r = t._model,
                                o = this.chart.options.elements.rectangle;
                            r.backgroundColor = a.backgroundColor ? a.backgroundColor : e.getValueAtIndexOrDefault(i.backgroundColor, n, o.backgroundColor), r.borderColor = a.borderColor ? a.borderColor : e.getValueAtIndexOrDefault(i.borderColor, n, o.borderColor), r.borderWidth = a.borderWidth ? a.borderWidth : e.getValueAtIndexOrDefault(i.borderWidth, n, o.borderWidth)
                        }
                    }), t.defaults.horizontalBar = {
                        hover: {
                            mode: "label"
                        },
                        scales: {
                            xAxes: [{
                                type: "linear",
                                position: "bottom"
                            }],
                            yAxes: [{
                                position: "left",
                                type: "category",
                                categoryPercentage: .8,
                                barPercentage: .9,
                                gridLines: {
                                    offsetGridLines: !0
                                }
                            }]
                        },
                        elements: {
                            rectangle: {
                                borderSkipped: "left"
                            }
                        },
                        tooltips: {
                            callbacks: {
                                title: function(t, e) {
                                    var i = "";
                                    return t.length > 0 && (t[0].yLabel ? i = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (i = e.labels[t[0].index])), i
                                },
                                label: function(t, e) {
                                    return (e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel
                                }
                            }
                        }
                    }, t.controllers.horizontalBar = t.controllers.bar.extend({
                        getValueScaleId: function() {
                            return this.getMeta().xAxisID
                        },
                        getIndexScaleId: function() {
                            return this.getMeta().yAxisID
                        }
                    })
                }
            }, {}],
            16: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    var e = t.helpers;
                    t.defaults.bubble = {
                        hover: {
                            mode: "single"
                        },
                        scales: {
                            xAxes: [{
                                type: "linear",
                                position: "bottom",
                                id: "x-axis-0"
                            }],
                            yAxes: [{
                                type: "linear",
                                position: "left",
                                id: "y-axis-0"
                            }]
                        },
                        tooltips: {
                            callbacks: {
                                title: function() {
                                    return ""
                                },
                                label: function(t, e) {
                                    var i = e.datasets[t.datasetIndex].label || "",
                                        n = e.datasets[t.datasetIndex].data[t.index];
                                    return i + ": (" + t.xLabel + ", " + t.yLabel + ", " + n.r + ")"
                                }
                            }
                        }
                    }, t.controllers.bubble = t.DatasetController.extend({
                        dataElementType: t.elements.Point,
                        update: function(t) {
                            var i = this,
                                n = i.getMeta().data;
                            e.each(n, function(e, n) {
                                i.updateElement(e, n, t)
                            })
                        },
                        updateElement: function(i, n, a) {
                            var r = this,
                                o = r.getMeta(),
                                s = r.getScaleForId(o.xAxisID),
                                l = r.getScaleForId(o.yAxisID),
                                u = i.custom || {},
                                d = r.getDataset(),
                                c = d.data[n],
                                h = r.chart.options.elements.point,
                                f = r.index;
                            e.extend(i, {
                                _xScale: s,
                                _yScale: l,
                                _datasetIndex: f,
                                _index: n,
                                _model: {
                                    x: a ? s.getPixelForDecimal(.5) : s.getPixelForValue("object" == typeof c ? c : NaN, n, f, r.chart.isCombo),
                                    y: a ? l.getBasePixel() : l.getPixelForValue(c, n, f),
                                    radius: a ? 0 : u.radius ? u.radius : r.getRadius(c),
                                    hitRadius: u.hitRadius ? u.hitRadius : e.getValueAtIndexOrDefault(d.hitRadius, n, h.hitRadius)
                                }
                            }), t.DatasetController.prototype.removeHoverStyle.call(r, i, h);
                            var p = i._model;
                            p.skip = u.skip ? u.skip : isNaN(p.x) || isNaN(p.y), i.pivot()
                        },
                        getRadius: function(t) {
                            return t.r || this.chart.options.elements.point.radius
                        },
                        setHoverStyle: function(i) {
                            t.DatasetController.prototype.setHoverStyle.call(this, i);
                            var n = this.chart.data.datasets[i._datasetIndex],
                                a = i._index,
                                r = i.custom || {};
                            i._model.radius = r.hoverRadius ? r.hoverRadius : e.getValueAtIndexOrDefault(n.hoverRadius, a, this.chart.options.elements.point.hoverRadius) + this.getRadius(n.data[a])
                        },
                        removeHoverStyle: function(e) {
                            t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.point);
                            var i = this.chart.data.datasets[e._datasetIndex].data[e._index],
                                n = e.custom || {};
                            e._model.radius = n.radius ? n.radius : this.getRadius(i)
                        }
                    })
                }
            }, {}],
            17: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    var e = t.helpers,
                        i = t.defaults;
                    i.doughnut = {
                        animation: {
                            animateRotate: !0,
                            animateScale: !1
                        },
                        aspectRatio: 1,
                        hover: {
                            mode: "single"
                        },
                        legendCallback: function(t) {
                            var e = [];
                            e.push('<ul class="' + t.id + '-legend">');
                            var i = t.data,
                                n = i.datasets,
                                a = i.labels;
                            if (n.length)
                                for (var r = 0; r < n[0].data.length; ++r) e.push('<li><span style="background-color:' + n[0].backgroundColor[r] + '"></span>'), a[r] && e.push(a[r]), e.push("</li>");
                            return e.push("</ul>"), e.join("")
                        },
                        legend: {
                            labels: {
                                generateLabels: function(t) {
                                    var i = t.data;
                                    return i.labels.length && i.datasets.length ? i.labels.map(function(n, a) {
                                        var r = t.getDatasetMeta(0),
                                            o = i.datasets[0],
                                            s = r.data[a],
                                            l = s && s.custom || {},
                                            u = e.getValueAtIndexOrDefault,
                                            d = t.options.elements.arc;
                                        return {
                                            text: n,
                                            fillStyle: l.backgroundColor ? l.backgroundColor : u(o.backgroundColor, a, d.backgroundColor),
                                            strokeStyle: l.borderColor ? l.borderColor : u(o.borderColor, a, d.borderColor),
                                            lineWidth: l.borderWidth ? l.borderWidth : u(o.borderWidth, a, d.borderWidth),
                                            hidden: isNaN(o.data[a]) || r.data[a].hidden,
                                            index: a
                                        }
                                    }) : []
                                }
                            },
                            onClick: function(t, e) {
                                var i, n, a, r = e.index,
                                    o = this.chart;
                                for (i = 0, n = (o.data.datasets || []).length; i < n; ++i)(a = o.getDatasetMeta(i)).data[r] && (a.data[r].hidden = !a.data[r].hidden);
                                o.update()
                            }
                        },
                        cutoutPercentage: 50,
                        rotation: -.5 * Math.PI,
                        circumference: 2 * Math.PI,
                        tooltips: {
                            callbacks: {
                                title: function() {
                                    return ""
                                },
                                label: function(t, i) {
                                    var n = i.labels[t.index],
                                        a = ": " + i.datasets[t.datasetIndex].data[t.index];
                                    return e.isArray(n) ? (n = n.slice())[0] += a : n += a, n
                                }
                            }
                        }
                    }, i.pie = e.clone(i.doughnut), e.extend(i.pie, {
                        cutoutPercentage: 0
                    }), t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
                        dataElementType: t.elements.Arc,
                        linkScales: e.noop,
                        getRingIndex: function(t) {
                            for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && ++e;
                            return e
                        },
                        update: function(t) {
                            var i = this,
                                n = i.chart,
                                a = n.chartArea,
                                r = n.options,
                                o = r.elements.arc,
                                s = a.right - a.left - o.borderWidth,
                                l = a.bottom - a.top - o.borderWidth,
                                u = Math.min(s, l),
                                d = {
                                    x: 0,
                                    y: 0
                                },
                                c = i.getMeta(),
                                h = r.cutoutPercentage,
                                f = r.circumference;
                            if (f < 2 * Math.PI) {
                                var p = r.rotation % (2 * Math.PI),
                                    g = (p += 2 * Math.PI * (p >= Math.PI ? -1 : p < -Math.PI ? 1 : 0)) + f,
                                    m = {
                                        x: Math.cos(p),
                                        y: Math.sin(p)
                                    },
                                    v = {
                                        x: Math.cos(g),
                                        y: Math.sin(g)
                                    },
                                    b = p <= 0 && 0 <= g || p <= 2 * Math.PI && 2 * Math.PI <= g,
                                    y = p <= .5 * Math.PI && .5 * Math.PI <= g || p <= 2.5 * Math.PI && 2.5 * Math.PI <= g,
                                    x = p <= -Math.PI && -Math.PI <= g || p <= Math.PI && Math.PI <= g,
                                    w = p <= .5 * -Math.PI && .5 * -Math.PI <= g || p <= 1.5 * Math.PI && 1.5 * Math.PI <= g,
                                    k = h / 100,
                                    S = {
                                        x: x ? -1 : Math.min(m.x * (m.x < 0 ? 1 : k), v.x * (v.x < 0 ? 1 : k)),
                                        y: w ? -1 : Math.min(m.y * (m.y < 0 ? 1 : k), v.y * (v.y < 0 ? 1 : k))
                                    },
                                    C = {
                                        x: b ? 1 : Math.max(m.x * (m.x > 0 ? 1 : k), v.x * (v.x > 0 ? 1 : k)),
                                        y: y ? 1 : Math.max(m.y * (m.y > 0 ? 1 : k), v.y * (v.y > 0 ? 1 : k))
                                    },
                                    M = {
                                        width: .5 * (C.x - S.x),
                                        height: .5 * (C.y - S.y)
                                    };
                                u = Math.min(s / M.width, l / M.height), d = {
                                    x: -.5 * (C.x + S.x),
                                    y: -.5 * (C.y + S.y)
                                }
                            }
                            n.borderWidth = i.getMaxBorderWidth(c.data), n.outerRadius = Math.max((u - n.borderWidth) / 2, 0), n.innerRadius = Math.max(h ? n.outerRadius / 100 * h : 0, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), n.offsetX = d.x * n.outerRadius, n.offsetY = d.y * n.outerRadius, c.total = i.calculateTotal(), i.outerRadius = n.outerRadius - n.radiusLength * i.getRingIndex(i.index), i.innerRadius = Math.max(i.outerRadius - n.radiusLength, 0), e.each(c.data, function(e, n) {
                                i.updateElement(e, n, t)
                            })
                        },
                        updateElement: function(t, i, n) {
                            var a = this,
                                r = a.chart,
                                o = r.chartArea,
                                s = r.options,
                                l = s.animation,
                                u = (o.left + o.right) / 2,
                                d = (o.top + o.bottom) / 2,
                                c = s.rotation,
                                h = s.rotation,
                                f = a.getDataset(),
                                p = n && l.animateRotate ? 0 : t.hidden ? 0 : a.calculateCircumference(f.data[i]) * (s.circumference / (2 * Math.PI)),
                                g = n && l.animateScale ? 0 : a.innerRadius,
                                m = n && l.animateScale ? 0 : a.outerRadius,
                                v = e.getValueAtIndexOrDefault;
                            e.extend(t, {
                                _datasetIndex: a.index,
                                _index: i,
                                _model: {
                                    x: u + r.offsetX,
                                    y: d + r.offsetY,
                                    startAngle: c,
                                    endAngle: h,
                                    circumference: p,
                                    outerRadius: m,
                                    innerRadius: g,
                                    label: v(f.label, i, r.data.labels[i])
                                }
                            });
                            var b = t._model;
                            this.removeHoverStyle(t), n && l.animateRotate || (b.startAngle = 0 === i ? s.rotation : a.getMeta().data[i - 1]._model.endAngle, b.endAngle = b.startAngle + b.circumference), t.pivot()
                        },
                        removeHoverStyle: function(e) {
                            t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                        },
                        calculateTotal: function() {
                            var t, i = this.getDataset(),
                                n = this.getMeta(),
                                a = 0;
                            return e.each(n.data, function(e, n) {
                                t = i.data[n], isNaN(t) || e.hidden || (a += Math.abs(t))
                            }), a
                        },
                        calculateCircumference: function(t) {
                            var e = this.getMeta().total;
                            return e > 0 && !isNaN(t) ? 2 * Math.PI * (t / e) : 0
                        },
                        getMaxBorderWidth: function(t) {
                            for (var e, i, n = 0, a = this.index, r = t.length, o = 0; o < r; o++) e = t[o]._model ? t[o]._model.borderWidth : 0, n = (i = t[o]._chart ? t[o]._chart.config.data.datasets[a].hoverBorderWidth : 0) > (n = e > n ? e : n) ? i : n;
                            return n
                        }
                    })
                }
            }, {}],
            18: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    var e = t.helpers;

                    function i(t, i) {
                        return e.getValueOrDefault(t.showLine, i.showLines)
                    }
                    t.defaults.line = {
                        showLines: !0,
                        spanGaps: !1,
                        hover: {
                            mode: "label"
                        },
                        scales: {
                            xAxes: [{
                                type: "category",
                                id: "x-axis-0"
                            }],
                            yAxes: [{
                                type: "linear",
                                id: "y-axis-0"
                            }]
                        }
                    }, t.controllers.line = t.DatasetController.extend({
                        datasetElementType: t.elements.Line,
                        dataElementType: t.elements.Point,
                        update: function(t) {
                            var n, a, r, o = this,
                                s = o.getMeta(),
                                l = s.dataset,
                                u = s.data || [],
                                d = o.chart.options,
                                c = d.elements.line,
                                h = o.getScaleForId(s.yAxisID),
                                f = o.getDataset(),
                                p = i(f, d);
                            for (p && (r = l.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), l._scale = h, l._datasetIndex = o.index, l._children = u, l._model = {
                                    spanGaps: f.spanGaps ? f.spanGaps : d.spanGaps,
                                    tension: r.tension ? r.tension : e.getValueOrDefault(f.lineTension, c.tension),
                                    backgroundColor: r.backgroundColor ? r.backgroundColor : f.backgroundColor || c.backgroundColor,
                                    borderWidth: r.borderWidth ? r.borderWidth : f.borderWidth || c.borderWidth,
                                    borderColor: r.borderColor ? r.borderColor : f.borderColor || c.borderColor,
                                    borderCapStyle: r.borderCapStyle ? r.borderCapStyle : f.borderCapStyle || c.borderCapStyle,
                                    borderDash: r.borderDash ? r.borderDash : f.borderDash || c.borderDash,
                                    borderDashOffset: r.borderDashOffset ? r.borderDashOffset : f.borderDashOffset || c.borderDashOffset,
                                    borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : f.borderJoinStyle || c.borderJoinStyle,
                                    fill: r.fill ? r.fill : void 0 !== f.fill ? f.fill : c.fill,
                                    steppedLine: r.steppedLine ? r.steppedLine : e.getValueOrDefault(f.steppedLine, c.stepped),
                                    cubicInterpolationMode: r.cubicInterpolationMode ? r.cubicInterpolationMode : e.getValueOrDefault(f.cubicInterpolationMode, c.cubicInterpolationMode)
                                }, l.pivot()), n = 0, a = u.length; n < a; ++n) o.updateElement(u[n], n, t);
                            for (p && 0 !== l._model.tension && o.updateBezierControlPoints(), n = 0, a = u.length; n < a; ++n) u[n].pivot()
                        },
                        getPointBackgroundColor: function(t, i) {
                            var n = this.chart.options.elements.point.backgroundColor,
                                a = this.getDataset(),
                                r = t.custom || {};
                            return r.backgroundColor ? n = r.backgroundColor : a.pointBackgroundColor ? n = e.getValueAtIndexOrDefault(a.pointBackgroundColor, i, n) : a.backgroundColor && (n = a.backgroundColor), n
                        },
                        getPointBorderColor: function(t, i) {
                            var n = this.chart.options.elements.point.borderColor,
                                a = this.getDataset(),
                                r = t.custom || {};
                            return r.borderColor ? n = r.borderColor : a.pointBorderColor ? n = e.getValueAtIndexOrDefault(a.pointBorderColor, i, n) : a.borderColor && (n = a.borderColor), n
                        },
                        getPointBorderWidth: function(t, i) {
                            var n = this.chart.options.elements.point.borderWidth,
                                a = this.getDataset(),
                                r = t.custom || {};
                            return isNaN(r.borderWidth) ? isNaN(a.pointBorderWidth) ? isNaN(a.borderWidth) || (n = a.borderWidth) : n = e.getValueAtIndexOrDefault(a.pointBorderWidth, i, n) : n = r.borderWidth, n
                        },
                        updateElement: function(t, i, n) {
                            var a, r, o = this,
                                s = o.getMeta(),
                                l = t.custom || {},
                                u = o.getDataset(),
                                d = o.index,
                                c = u.data[i],
                                h = o.getScaleForId(s.yAxisID),
                                f = o.getScaleForId(s.xAxisID),
                                p = o.chart.options.elements.point,
                                g = 1 === (o.chart.data.labels || []).length || 1 === u.data.length || o.chart.isCombo;
                            void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius), void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius), a = f.getPixelForValue("object" == typeof c ? c : NaN, i, d, g), r = n ? h.getBasePixel() : o.calculatePointY(c, i, d), t._xScale = f, t._yScale = h, t._datasetIndex = d, t._index = i, t._model = {
                                x: a,
                                y: r,
                                skip: l.skip || isNaN(a) || isNaN(r),
                                radius: l.radius || e.getValueAtIndexOrDefault(u.pointRadius, i, p.radius),
                                pointStyle: l.pointStyle || e.getValueAtIndexOrDefault(u.pointStyle, i, p.pointStyle),
                                backgroundColor: o.getPointBackgroundColor(t, i),
                                borderColor: o.getPointBorderColor(t, i),
                                borderWidth: o.getPointBorderWidth(t, i),
                                tension: s.dataset._model ? s.dataset._model.tension : 0,
                                steppedLine: !!s.dataset._model && s.dataset._model.steppedLine,
                                hitRadius: l.hitRadius || e.getValueAtIndexOrDefault(u.pointHitRadius, i, p.hitRadius)
                            }
                        },
                        calculatePointY: function(t, e, i) {
                            var n, a, r, o = this.chart,
                                s = this.getMeta(),
                                l = this.getScaleForId(s.yAxisID),
                                u = 0,
                                d = 0;
                            if (l.options.stacked) {
                                for (n = 0; n < i; n++)
                                    if (a = o.data.datasets[n], "line" === (r = o.getDatasetMeta(n)).type && r.yAxisID === l.id && o.isDatasetVisible(n)) {
                                        var c = Number(l.getRightValue(a.data[e]));
                                        c < 0 ? d += c || 0 : u += c || 0
                                    }
                                var h = Number(l.getRightValue(t));
                                return h < 0 ? l.getPixelForValue(d + h) : l.getPixelForValue(u + h)
                            }
                            return l.getPixelForValue(t)
                        },
                        updateBezierControlPoints: function() {
                            var t, i, n, a, r = this.getMeta(),
                                o = this.chart.chartArea,
                                s = r.data || [];

                            function l(t, e, i) {
                                return Math.max(Math.min(t, i), e)
                            }
                            if (r.dataset._model.spanGaps && (s = s.filter(function(t) {
                                    return !t._model.skip
                                })), "monotone" === r.dataset._model.cubicInterpolationMode) e.splineCurveMonotone(s);
                            else
                                for (t = 0, i = s.length; t < i; ++t) n = s[t]._model, a = e.splineCurve(e.previousItem(s, t)._model, n, e.nextItem(s, t)._model, r.dataset._model.tension), n.controlPointPreviousX = a.previous.x, n.controlPointPreviousY = a.previous.y, n.controlPointNextX = a.next.x, n.controlPointNextY = a.next.y;
                            if (this.chart.options.elements.line.capBezierPoints)
                                for (t = 0, i = s.length; t < i; ++t)(n = s[t]._model).controlPointPreviousX = l(n.controlPointPreviousX, o.left, o.right), n.controlPointPreviousY = l(n.controlPointPreviousY, o.top, o.bottom), n.controlPointNextX = l(n.controlPointNextX, o.left, o.right), n.controlPointNextY = l(n.controlPointNextY, o.top, o.bottom)
                        },
                        draw: function() {
                            var e = this.chart,
                                n = this.getMeta(),
                                a = n.data || [],
                                r = e.chartArea,
                                o = a.length,
                                s = 0;
                            for (t.canvasHelpers.clipArea(e.ctx, r), i(this.getDataset(), e.options) && n.dataset.draw(), t.canvasHelpers.unclipArea(e.ctx); s < o; ++s) a[s].draw(r)
                        },
                        setHoverStyle: function(t) {
                            var i = this.chart.data.datasets[t._datasetIndex],
                                n = t._index,
                                a = t.custom || {},
                                r = t._model;
                            r.radius = a.hoverRadius || e.getValueAtIndexOrDefault(i.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), r.backgroundColor = a.hoverBackgroundColor || e.getValueAtIndexOrDefault(i.pointHoverBackgroundColor, n, e.getHoverColor(r.backgroundColor)), r.borderColor = a.hoverBorderColor || e.getValueAtIndexOrDefault(i.pointHoverBorderColor, n, e.getHoverColor(r.borderColor)), r.borderWidth = a.hoverBorderWidth || e.getValueAtIndexOrDefault(i.pointHoverBorderWidth, n, r.borderWidth)
                        },
                        removeHoverStyle: function(t) {
                            var i = this,
                                n = i.chart.data.datasets[t._datasetIndex],
                                a = t._index,
                                r = t.custom || {},
                                o = t._model;
                            void 0 !== n.radius && void 0 === n.pointRadius && (n.pointRadius = n.radius), o.radius = r.radius || e.getValueAtIndexOrDefault(n.pointRadius, a, i.chart.options.elements.point.radius), o.backgroundColor = i.getPointBackgroundColor(t, a), o.borderColor = i.getPointBorderColor(t, a), o.borderWidth = i.getPointBorderWidth(t, a)
                        }
                    })
                }
            }, {}],
            19: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    var e = t.helpers;
                    t.defaults.polarArea = {
                        scale: {
                            type: "radialLinear",
                            angleLines: {
                                display: !1
                            },
                            gridLines: {
                                circular: !0
                            },
                            pointLabels: {
                                display: !1
                            },
                            ticks: {
                                beginAtZero: !0
                            }
                        },
                        animation: {
                            animateRotate: !0,
                            animateScale: !0
                        },
                        startAngle: -.5 * Math.PI,
                        aspectRatio: 1,
                        legendCallback: function(t) {
                            var e = [];
                            e.push('<ul class="' + t.id + '-legend">');
                            var i = t.data,
                                n = i.datasets,
                                a = i.labels;
                            if (n.length)
                                for (var r = 0; r < n[0].data.length; ++r) e.push('<li><span style="background-color:' + n[0].backgroundColor[r] + '"></span>'), a[r] && e.push(a[r]), e.push("</li>");
                            return e.push("</ul>"), e.join("")
                        },
                        legend: {
                            labels: {
                                generateLabels: function(t) {
                                    var i = t.data;
                                    return i.labels.length && i.datasets.length ? i.labels.map(function(n, a) {
                                        var r = t.getDatasetMeta(0),
                                            o = i.datasets[0],
                                            s = r.data[a].custom || {},
                                            l = e.getValueAtIndexOrDefault,
                                            u = t.options.elements.arc;
                                        return {
                                            text: n,
                                            fillStyle: s.backgroundColor ? s.backgroundColor : l(o.backgroundColor, a, u.backgroundColor),
                                            strokeStyle: s.borderColor ? s.borderColor : l(o.borderColor, a, u.borderColor),
                                            lineWidth: s.borderWidth ? s.borderWidth : l(o.borderWidth, a, u.borderWidth),
                                            hidden: isNaN(o.data[a]) || r.data[a].hidden,
                                            index: a
                                        }
                                    }) : []
                                }
                            },
                            onClick: function(t, e) {
                                var i, n, a, r = e.index,
                                    o = this.chart;
                                for (i = 0, n = (o.data.datasets || []).length; i < n; ++i)(a = o.getDatasetMeta(i)).data[r].hidden = !a.data[r].hidden;
                                o.update()
                            }
                        },
                        tooltips: {
                            callbacks: {
                                title: function() {
                                    return ""
                                },
                                label: function(t, e) {
                                    return e.labels[t.index] + ": " + t.yLabel
                                }
                            }
                        }
                    }, t.controllers.polarArea = t.DatasetController.extend({
                        dataElementType: t.elements.Arc,
                        linkScales: e.noop,
                        update: function(t) {
                            var i = this,
                                n = i.chart,
                                a = n.chartArea,
                                r = i.getMeta(),
                                o = n.options,
                                s = o.elements.arc,
                                l = Math.min(a.right - a.left, a.bottom - a.top);
                            n.outerRadius = Math.max((l - s.borderWidth / 2) / 2, 0), n.innerRadius = Math.max(o.cutoutPercentage ? n.outerRadius / 100 * o.cutoutPercentage : 1, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), i.outerRadius = n.outerRadius - n.radiusLength * i.index, i.innerRadius = i.outerRadius - n.radiusLength, r.count = i.countVisibleElements(), e.each(r.data, function(e, n) {
                                i.updateElement(e, n, t)
                            })
                        },
                        updateElement: function(t, i, n) {
                            for (var a = this, r = a.chart, o = a.getDataset(), s = r.options, l = s.animation, u = r.scale, d = e.getValueAtIndexOrDefault, c = r.data.labels, h = a.calculateCircumference(o.data[i]), f = u.xCenter, p = u.yCenter, g = 0, m = a.getMeta(), v = 0; v < i; ++v) isNaN(o.data[v]) || m.data[v].hidden || ++g;
                            var b = s.startAngle,
                                y = t.hidden ? 0 : u.getDistanceFromCenterForValue(o.data[i]),
                                x = b + h * g,
                                w = x + (t.hidden ? 0 : h),
                                k = l.animateScale ? 0 : u.getDistanceFromCenterForValue(o.data[i]);
                            e.extend(t, {
                                _datasetIndex: a.index,
                                _index: i,
                                _scale: u,
                                _model: {
                                    x: f,
                                    y: p,
                                    innerRadius: 0,
                                    outerRadius: n ? k : y,
                                    startAngle: n && l.animateRotate ? b : x,
                                    endAngle: n && l.animateRotate ? b : w,
                                    label: d(c, i, c[i])
                                }
                            }), a.removeHoverStyle(t), t.pivot()
                        },
                        removeHoverStyle: function(e) {
                            t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                        },
                        countVisibleElements: function() {
                            var t = this.getDataset(),
                                i = this.getMeta(),
                                n = 0;
                            return e.each(i.data, function(e, i) {
                                isNaN(t.data[i]) || e.hidden || n++
                            }), n
                        },
                        calculateCircumference: function(t) {
                            var e = this.getMeta().count;
                            return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0
                        }
                    })
                }
            }, {}],
            20: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    var e = t.helpers;
                    t.defaults.radar = {
                        aspectRatio: 1,
                        scale: {
                            type: "radialLinear"
                        },
                        elements: {
                            line: {
                                tension: 0
                            }
                        }
                    }, t.controllers.radar = t.DatasetController.extend({
                        datasetElementType: t.elements.Line,
                        dataElementType: t.elements.Point,
                        linkScales: e.noop,
                        update: function(t) {
                            var i = this,
                                n = i.getMeta(),
                                a = n.dataset,
                                r = n.data,
                                o = a.custom || {},
                                s = i.getDataset(),
                                l = i.chart.options.elements.line,
                                u = i.chart.scale;
                            void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), e.extend(n.dataset, {
                                _datasetIndex: i.index,
                                _scale: u,
                                _children: r,
                                _loop: !0,
                                _model: {
                                    tension: o.tension ? o.tension : e.getValueOrDefault(s.lineTension, l.tension),
                                    backgroundColor: o.backgroundColor ? o.backgroundColor : s.backgroundColor || l.backgroundColor,
                                    borderWidth: o.borderWidth ? o.borderWidth : s.borderWidth || l.borderWidth,
                                    borderColor: o.borderColor ? o.borderColor : s.borderColor || l.borderColor,
                                    fill: o.fill ? o.fill : void 0 !== s.fill ? s.fill : l.fill,
                                    borderCapStyle: o.borderCapStyle ? o.borderCapStyle : s.borderCapStyle || l.borderCapStyle,
                                    borderDash: o.borderDash ? o.borderDash : s.borderDash || l.borderDash,
                                    borderDashOffset: o.borderDashOffset ? o.borderDashOffset : s.borderDashOffset || l.borderDashOffset,
                                    borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle
                                }
                            }), n.dataset.pivot(), e.each(r, function(e, n) {
                                i.updateElement(e, n, t)
                            }, i), i.updateBezierControlPoints()
                        },
                        updateElement: function(t, i, n) {
                            var a = this,
                                r = t.custom || {},
                                o = a.getDataset(),
                                s = a.chart.scale,
                                l = a.chart.options.elements.point,
                                u = s.getPointPositionForValue(i, o.data[i]);
                            void 0 !== o.radius && void 0 === o.pointRadius && (o.pointRadius = o.radius), void 0 !== o.hitRadius && void 0 === o.pointHitRadius && (o.pointHitRadius = o.hitRadius), e.extend(t, {
                                _datasetIndex: a.index,
                                _index: i,
                                _scale: s,
                                _model: {
                                    x: n ? s.xCenter : u.x,
                                    y: n ? s.yCenter : u.y,
                                    tension: r.tension ? r.tension : e.getValueOrDefault(o.lineTension, a.chart.options.elements.line.tension),
                                    radius: r.radius ? r.radius : e.getValueAtIndexOrDefault(o.pointRadius, i, l.radius),
                                    backgroundColor: r.backgroundColor ? r.backgroundColor : e.getValueAtIndexOrDefault(o.pointBackgroundColor, i, l.backgroundColor),
                                    borderColor: r.borderColor ? r.borderColor : e.getValueAtIndexOrDefault(o.pointBorderColor, i, l.borderColor),
                                    borderWidth: r.borderWidth ? r.borderWidth : e.getValueAtIndexOrDefault(o.pointBorderWidth, i, l.borderWidth),
                                    pointStyle: r.pointStyle ? r.pointStyle : e.getValueAtIndexOrDefault(o.pointStyle, i, l.pointStyle),
                                    hitRadius: r.hitRadius ? r.hitRadius : e.getValueAtIndexOrDefault(o.pointHitRadius, i, l.hitRadius)
                                }
                            }), t._model.skip = r.skip ? r.skip : isNaN(t._model.x) || isNaN(t._model.y)
                        },
                        updateBezierControlPoints: function() {
                            var t = this.chart.chartArea,
                                i = this.getMeta();
                            e.each(i.data, function(n, a) {
                                var r = n._model,
                                    o = e.splineCurve(e.previousItem(i.data, a, !0)._model, r, e.nextItem(i.data, a, !0)._model, r.tension);
                                r.controlPointPreviousX = Math.max(Math.min(o.previous.x, t.right), t.left), r.controlPointPreviousY = Math.max(Math.min(o.previous.y, t.bottom), t.top), r.controlPointNextX = Math.max(Math.min(o.next.x, t.right), t.left), r.controlPointNextY = Math.max(Math.min(o.next.y, t.bottom), t.top), n.pivot()
                            })
                        },
                        setHoverStyle: function(t) {
                            var i = this.chart.data.datasets[t._datasetIndex],
                                n = t.custom || {},
                                a = t._index,
                                r = t._model;
                            r.radius = n.hoverRadius ? n.hoverRadius : e.getValueAtIndexOrDefault(i.pointHoverRadius, a, this.chart.options.elements.point.hoverRadius), r.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : e.getValueAtIndexOrDefault(i.pointHoverBackgroundColor, a, e.getHoverColor(r.backgroundColor)), r.borderColor = n.hoverBorderColor ? n.hoverBorderColor : e.getValueAtIndexOrDefault(i.pointHoverBorderColor, a, e.getHoverColor(r.borderColor)), r.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : e.getValueAtIndexOrDefault(i.pointHoverBorderWidth, a, r.borderWidth)
                        },
                        removeHoverStyle: function(t) {
                            var i = this.chart.data.datasets[t._datasetIndex],
                                n = t.custom || {},
                                a = t._index,
                                r = t._model,
                                o = this.chart.options.elements.point;
                            r.radius = n.radius ? n.radius : e.getValueAtIndexOrDefault(i.pointRadius, a, o.radius), r.backgroundColor = n.backgroundColor ? n.backgroundColor : e.getValueAtIndexOrDefault(i.pointBackgroundColor, a, o.backgroundColor), r.borderColor = n.borderColor ? n.borderColor : e.getValueAtIndexOrDefault(i.pointBorderColor, a, o.borderColor), r.borderWidth = n.borderWidth ? n.borderWidth : e.getValueAtIndexOrDefault(i.pointBorderWidth, a, o.borderWidth)
                        }
                    })
                }
            }, {}],
            21: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    var e = t.helpers;
                    t.defaults.global.animation = {
                        duration: 1e3,
                        easing: "easeOutQuart",
                        onProgress: e.noop,
                        onComplete: e.noop
                    }, t.Animation = t.Element.extend({
                        chart: null,
                        currentStep: 0,
                        numSteps: 60,
                        easing: "",
                        render: null,
                        onAnimationProgress: null,
                        onAnimationComplete: null
                    }), t.animationService = {
                        frameDuration: 17,
                        animations: [],
                        dropFrames: 0,
                        request: null,
                        addAnimation: function(t, e, i, n) {
                            var a, r, o = this.animations;
                            for (e.chart = t, n || (t.animating = !0), a = 0, r = o.length; a < r; ++a)
                                if (o[a].chart === t) return void(o[a] = e);
                            o.push(e), 1 === o.length && this.requestAnimationFrame()
                        },
                        cancelAnimation: function(t) {
                            var i = e.findIndex(this.animations, function(e) {
                                return e.chart === t
                            }); - 1 !== i && (this.animations.splice(i, 1), t.animating = !1)
                        },
                        requestAnimationFrame: function() {
                            var t = this;
                            null === t.request && (t.request = e.requestAnimFrame.call(window, function() {
                                t.request = null, t.startDigest()
                            }))
                        },
                        startDigest: function() {
                            var t = this,
                                e = Date.now(),
                                i = 0;
                            t.dropFrames > 1 && (i = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + i);
                            var n = Date.now();
                            t.dropFrames += (n - e) / t.frameDuration, t.animations.length > 0 && t.requestAnimationFrame()
                        },
                        advance: function(t) {
                            for (var i, n, a = this.animations, r = 0; r < a.length;) n = (i = a[r]).chart, i.currentStep = (i.currentStep || 0) + t, i.currentStep = Math.min(i.currentStep, i.numSteps), e.callback(i.render, [n, i], n), e.callback(i.onAnimationProgress, [i], n), i.currentStep >= i.numSteps ? (e.callback(i.onAnimationComplete, [i], n), n.animating = !1, a.splice(r, 1)) : ++r
                        }
                    }, Object.defineProperty(t.Animation.prototype, "animationObject", {
                        get: function() {
                            return this
                        }
                    }), Object.defineProperty(t.Animation.prototype, "chartInstance", {
                        get: function() {
                            return this.chart
                        },
                        set: function(t) {
                            this.chart = t
                        }
                    })
                }
            }, {}],
            22: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    var e = t.canvasHelpers = {};
                    e.drawPoint = function(e, i, n, a, r) {
                        var o, s, l, u, d, c;
                        if ("object" != typeof i || "[object HTMLImageElement]" !== (o = i.toString()) && "[object HTMLCanvasElement]" !== o) {
                            if (!(isNaN(n) || n <= 0)) {
                                switch (i) {
                                    default: e.beginPath(),
                                    e.arc(a, r, n, 0, 2 * Math.PI),
                                    e.closePath(),
                                    e.fill();
                                    break;
                                    case "triangle":
                                            e.beginPath(),
                                        d = (s = 3 * n / Math.sqrt(3)) * Math.sqrt(3) / 2,
                                        e.moveTo(a - s / 2, r + d / 3),
                                        e.lineTo(a + s / 2, r + d / 3),
                                        e.lineTo(a, r - 2 * d / 3),
                                        e.closePath(),
                                        e.fill();
                                        break;
                                    case "rect":
                                            c = 1 / Math.SQRT2 * n,
                                        e.beginPath(),
                                        e.fillRect(a - c, r - c, 2 * c, 2 * c),
                                        e.strokeRect(a - c, r - c, 2 * c, 2 * c);
                                        break;
                                    case "rectRounded":
                                            var h = n / Math.SQRT2,
                                            f = a - h,
                                            p = r - h,
                                            g = Math.SQRT2 * n;t.helpers.drawRoundedRectangle(e, f, p, g, g, n / 2),
                                        e.fill();
                                        break;
                                    case "rectRot":
                                            c = 1 / Math.SQRT2 * n,
                                        e.beginPath(),
                                        e.moveTo(a - c, r),
                                        e.lineTo(a, r + c),
                                        e.lineTo(a + c, r),
                                        e.lineTo(a, r - c),
                                        e.closePath(),
                                        e.fill();
                                        break;
                                    case "cross":
                                            e.beginPath(),
                                        e.moveTo(a, r + n),
                                        e.lineTo(a, r - n),
                                        e.moveTo(a - n, r),
                                        e.lineTo(a + n, r),
                                        e.closePath();
                                        break;
                                    case "crossRot":
                                            e.beginPath(),
                                        l = Math.cos(Math.PI / 4) * n,
                                        u = Math.sin(Math.PI / 4) * n,
                                        e.moveTo(a - l, r - u),
                                        e.lineTo(a + l, r + u),
                                        e.moveTo(a - l, r + u),
                                        e.lineTo(a + l, r - u),
                                        e.closePath();
                                        break;
                                    case "star":
                                            e.beginPath(),
                                        e.moveTo(a, r + n),
                                        e.lineTo(a, r - n),
                                        e.moveTo(a - n, r),
                                        e.lineTo(a + n, r),
                                        l = Math.cos(Math.PI / 4) * n,
                                        u = Math.sin(Math.PI / 4) * n,
                                        e.moveTo(a - l, r - u),
                                        e.lineTo(a + l, r + u),
                                        e.moveTo(a - l, r + u),
                                        e.lineTo(a + l, r - u),
                                        e.closePath();
                                        break;
                                    case "line":
                                            e.beginPath(),
                                        e.moveTo(a - n, r),
                                        e.lineTo(a + n, r),
                                        e.closePath();
                                        break;
                                    case "dash":
                                            e.beginPath(),
                                        e.moveTo(a, r),
                                        e.lineTo(a + n, r),
                                        e.closePath()
                                }
                                e.stroke()
                            }
                        } else e.drawImage(i, a - i.width / 2, r - i.height / 2, i.width, i.height)
                    }, e.clipArea = function(t, e) {
                        t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
                    }, e.unclipArea = function(t) {
                        t.restore()
                    }, e.lineTo = function(t, e, i, n) {
                        if (i.steppedLine) return "after" === i.steppedLine ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y), void t.lineTo(i.x, i.y);
                        i.tension ? t.bezierCurveTo(n ? e.controlPointPreviousX : e.controlPointNextX, n ? e.controlPointPreviousY : e.controlPointNextY, n ? i.controlPointNextX : i.controlPointPreviousX, n ? i.controlPointNextY : i.controlPointPreviousY, i.x, i.y) : t.lineTo(i.x, i.y)
                    }, t.helpers.canvas = e
                }
            }, {}],
            23: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    var e = t.helpers,
                        i = t.plugins,
                        n = t.platform;

                    function a(t) {
                        return "top" === t || "bottom" === t
                    }
                    t.types = {}, t.instances = {}, t.controllers = {}, e.extend(t.prototype, {
                        construct: function(i, a) {
                            var r = this;
                            a = function(i) {
                                var n = (i = i || {}).data = i.data || {};
                                return n.datasets = n.datasets || [], n.labels = n.labels || [], i.options = e.configMerge(t.defaults.global, t.defaults[i.type], i.options || {}), i
                            }(a);
                            var o = n.acquireContext(i, a),
                                s = o && o.canvas,
                                l = s && s.height,
                                u = s && s.width;
                            r.id = e.uid(), r.ctx = o, r.canvas = s, r.config = a, r.width = u, r.height = l, r.aspectRatio = l ? u / l : null, r.options = a.options, r._bufferedRender = !1, r.chart = r, r.controller = r, t.instances[r.id] = r, Object.defineProperty(r, "data", {
                                get: function() {
                                    return r.config.data
                                },
                                set: function(t) {
                                    r.config.data = t
                                }
                            }), o && s ? (r.initialize(), r.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                        },
                        initialize: function() {
                            var t = this;
                            return i.notify(t, "beforeInit"), e.retinaScale(t), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildScales(), t.initToolTip(), i.notify(t, "afterInit"), t
                        },
                        clear: function() {
                            return e.clear(this), this
                        },
                        stop: function() {
                            return t.animationService.cancelAnimation(this), this
                        },
                        resize: function(t) {
                            var n = this,
                                a = n.options,
                                r = n.canvas,
                                o = a.maintainAspectRatio && n.aspectRatio || null,
                                s = Math.floor(e.getMaximumWidth(r)),
                                l = Math.floor(o ? s / o : e.getMaximumHeight(r));
                            if ((n.width !== s || n.height !== l) && (r.width = n.width = s, r.height = n.height = l, r.style.width = s + "px", r.style.height = l + "px", e.retinaScale(n), !t)) {
                                var u = {
                                    width: s,
                                    height: l
                                };
                                i.notify(n, "resize", [u]), n.options.onResize && n.options.onResize(n, u), n.stop(), n.update(n.options.responsiveAnimationDuration)
                            }
                        },
                        ensureScalesHaveIDs: function() {
                            var t = this.options,
                                i = t.scales || {},
                                n = t.scale;
                            e.each(i.xAxes, function(t, e) {
                                t.id = t.id || "x-axis-" + e
                            }), e.each(i.yAxes, function(t, e) {
                                t.id = t.id || "y-axis-" + e
                            }), n && (n.id = n.id || "scale")
                        },
                        buildScales: function() {
                            var i = this,
                                n = i.options,
                                r = i.scales = {},
                                o = [];
                            n.scales && (o = o.concat((n.scales.xAxes || []).map(function(t) {
                                return {
                                    options: t,
                                    dtype: "category",
                                    dposition: "bottom"
                                }
                            }), (n.scales.yAxes || []).map(function(t) {
                                return {
                                    options: t,
                                    dtype: "linear",
                                    dposition: "left"
                                }
                            }))), n.scale && o.push({
                                options: n.scale,
                                dtype: "radialLinear",
                                isDefault: !0,
                                dposition: "chartArea"
                            }), e.each(o, function(n) {
                                var o = n.options,
                                    s = e.getValueOrDefault(o.type, n.dtype),
                                    l = t.scaleService.getScaleConstructor(s);
                                if (l) {
                                    a(o.position) !== a(n.dposition) && (o.position = n.dposition);
                                    var u = new l({
                                        id: o.id,
                                        options: o,
                                        ctx: i.ctx,
                                        chart: i
                                    });
                                    r[u.id] = u, n.isDefault && (i.scale = u)
                                }
                            }), t.scaleService.addScalesToLayout(this)
                        },
                        buildOrUpdateControllers: function() {
                            var i = this,
                                n = [],
                                a = [];
                            if (e.each(i.data.datasets, function(e, r) {
                                    var o = i.getDatasetMeta(r);
                                    if (o.type || (o.type = e.type || i.config.type), n.push(o.type), o.controller) o.controller.updateIndex(r);
                                    else {
                                        var s = t.controllers[o.type];
                                        if (void 0 === s) throw new Error('"' + o.type + '" is not a chart type.');
                                        o.controller = new s(i, r), a.push(o.controller)
                                    }
                                }, i), n.length > 1)
                                for (var r = 1; r < n.length; r++)
                                    if (n[r] !== n[r - 1]) {
                                        i.isCombo = !0;
                                        break
                                    }
                            return a
                        },
                        resetElements: function() {
                            var t = this;
                            e.each(t.data.datasets, function(e, i) {
                                t.getDatasetMeta(i).controller.reset()
                            }, t)
                        },
                        reset: function() {
                            this.resetElements(), this.tooltip.initialize()
                        },
                        update: function(t, n) {
                            var a, r, o = this;
                            if ((r = (a = o).options).scale ? a.scale.options = r.scale : r.scales && r.scales.xAxes.concat(r.scales.yAxes).forEach(function(t) {
                                    a.scales[t.id].options = t
                                }), a.tooltip._options = r.tooltips, !1 !== i.notify(o, "beforeUpdate")) {
                                o.tooltip._data = o.data;
                                var s = o.buildOrUpdateControllers();
                                e.each(o.data.datasets, function(t, e) {
                                    o.getDatasetMeta(e).controller.buildOrUpdateElements()
                                }, o), o.updateLayout(), e.each(s, function(t) {
                                    t.reset()
                                }), o.updateDatasets(), i.notify(o, "afterUpdate"), o._bufferedRender ? o._bufferedRequest = {
                                    lazy: n,
                                    duration: t
                                } : o.render(t, n)
                            }
                        },
                        updateLayout: function() {
                            !1 !== i.notify(this, "beforeLayout") && (t.layoutService.update(this, this.width, this.height), i.notify(this, "afterScaleUpdate"), i.notify(this, "afterLayout"))
                        },
                        updateDatasets: function() {
                            if (!1 !== i.notify(this, "beforeDatasetsUpdate")) {
                                for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
                                i.notify(this, "afterDatasetsUpdate")
                            }
                        },
                        updateDataset: function(t) {
                            var e = this.getDatasetMeta(t),
                                n = {
                                    meta: e,
                                    index: t
                                };
                            !1 !== i.notify(this, "beforeDatasetUpdate", [n]) && (e.controller.update(), i.notify(this, "afterDatasetUpdate", [n]))
                        },
                        render: function(n, a) {
                            var r = this;
                            if (!1 !== i.notify(r, "beforeRender")) {
                                var o = r.options.animation,
                                    s = function(t) {
                                        i.notify(r, "afterRender"), e.callback(o && o.onComplete, [t], r)
                                    };
                                if (o && (void 0 !== n && 0 !== n || void 0 === n && 0 !== o.duration)) {
                                    var l = new t.Animation({
                                        numSteps: (n || o.duration) / 16.66,
                                        easing: o.easing,
                                        render: function(t, i) {
                                            var n = e.easingEffects[i.easing],
                                                a = i.currentStep,
                                                r = a / i.numSteps;
                                            t.draw(n(r), r, a)
                                        },
                                        onAnimationProgress: o.onProgress,
                                        onAnimationComplete: s
                                    });
                                    t.animationService.addAnimation(r, l, n, a)
                                } else r.draw(), s(new t.Animation({
                                    numSteps: 0,
                                    chart: r
                                }));
                                return r
                            }
                        },
                        draw: function(t) {
                            var n = this;
                            n.clear(), void 0 !== t && null !== t || (t = 1), n.transition(t), !1 !== i.notify(n, "beforeDraw", [t]) && (e.each(n.boxes, function(t) {
                                t.draw(n.chartArea)
                            }, n), n.scale && n.scale.draw(), n.drawDatasets(t), n.tooltip.draw(), i.notify(n, "afterDraw", [t]))
                        },
                        transition: function(t) {
                            for (var e = 0, i = (this.data.datasets || []).length; e < i; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
                            this.tooltip.transition(t)
                        },
                        drawDatasets: function(t) {
                            var e = this;
                            if (!1 !== i.notify(e, "beforeDatasetsDraw", [t])) {
                                for (var n = (e.data.datasets || []).length - 1; n >= 0; --n) e.isDatasetVisible(n) && e.drawDataset(n, t);
                                i.notify(e, "afterDatasetsDraw", [t])
                            }
                        },
                        drawDataset: function(t, e) {
                            var n = this.getDatasetMeta(t),
                                a = {
                                    meta: n,
                                    index: t,
                                    easingValue: e
                                };
                            !1 !== i.notify(this, "beforeDatasetDraw", [a]) && (n.controller.draw(e), i.notify(this, "afterDatasetDraw", [a]))
                        },
                        getElementAtEvent: function(e) {
                            return t.Interaction.modes.single(this, e)
                        },
                        getElementsAtEvent: function(e) {
                            return t.Interaction.modes.label(this, e, {
                                intersect: !0
                            })
                        },
                        getElementsAtXAxis: function(e) {
                            return t.Interaction.modes["x-axis"](this, e, {
                                intersect: !0
                            })
                        },
                        getElementsAtEventForMode: function(e, i, n) {
                            var a = t.Interaction.modes[i];
                            return "function" == typeof a ? a(this, e, n) : []
                        },
                        getDatasetAtEvent: function(e) {
                            return t.Interaction.modes.dataset(this, e, {
                                intersect: !0
                            })
                        },
                        getDatasetMeta: function(t) {
                            var e = this.data.datasets[t];
                            e._meta || (e._meta = {});
                            var i = e._meta[this.id];
                            return i || (i = e._meta[this.id] = {
                                type: null,
                                data: [],
                                dataset: null,
                                controller: null,
                                hidden: null,
                                xAxisID: null,
                                yAxisID: null
                            }), i
                        },
                        getVisibleDatasetCount: function() {
                            for (var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e) this.isDatasetVisible(e) && t++;
                            return t
                        },
                        isDatasetVisible: function(t) {
                            var e = this.getDatasetMeta(t);
                            return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
                        },
                        generateLegend: function() {
                            return this.options.legendCallback(this)
                        },
                        destroy: function() {
                            var a, r, o, s = this,
                                l = s.canvas;
                            for (s.stop(), r = 0, o = s.data.datasets.length; r < o; ++r)(a = s.getDatasetMeta(r)).controller && (a.controller.destroy(), a.controller = null);
                            l && (s.unbindEvents(), e.clear(s), n.releaseContext(s.ctx), s.canvas = null, s.ctx = null), i.notify(s, "destroy"), delete t.instances[s.id]
                        },
                        toBase64Image: function() {
                            return this.canvas.toDataURL.apply(this.canvas, arguments)
                        },
                        initToolTip: function() {
                            var e = this;
                            e.tooltip = new t.Tooltip({
                                _chart: e,
                                _chartInstance: e,
                                _data: e.data,
                                _options: e.options.tooltips
                            }, e), e.tooltip.initialize()
                        },
                        bindEvents: function() {
                            var t = this,
                                i = t._listeners = {},
                                a = function() {
                                    t.eventHandler.apply(t, arguments)
                                };
                            e.each(t.options.events, function(e) {
                                n.addEventListener(t, e, a), i[e] = a
                            }), t.options.responsive && (a = function() {
                                t.resize()
                            }, n.addEventListener(t, "resize", a), i.resize = a)
                        },
                        unbindEvents: function() {
                            var t = this,
                                i = t._listeners;
                            i && (delete t._listeners, e.each(i, function(e, i) {
                                n.removeEventListener(t, i, e)
                            }))
                        },
                        updateHoverStyle: function(t, e, i) {
                            var n, a, r, o = i ? "setHoverStyle" : "removeHoverStyle";
                            for (a = 0, r = t.length; a < r; ++a)(n = t[a]) && this.getDatasetMeta(n._datasetIndex).controller[o](n)
                        },
                        eventHandler: function(t) {
                            var e = this,
                                n = e.tooltip;
                            if (!1 !== i.notify(e, "beforeEvent", [t])) {
                                e._bufferedRender = !0, e._bufferedRequest = null;
                                var a = e.handleEvent(t);
                                a |= n && n.handleEvent(t), i.notify(e, "afterEvent", [t]);
                                var r = e._bufferedRequest;
                                return r ? e.render(r.duration, r.lazy) : a && !e.animating && (e.stop(), e.render(e.options.hover.animationDuration, !0)), e._bufferedRender = !1, e._bufferedRequest = null, e
                            }
                        },
                        handleEvent: function(t) {
                            var i, n = this,
                                a = n.options || {},
                                r = a.hover;
                            return n.lastActive = n.lastActive || [], "mouseout" === t.type ? n.active = [] : n.active = n.getElementsAtEventForMode(t, r.mode, r), r.onHover && r.onHover.call(n, t.native, n.active), "mouseup" !== t.type && "click" !== t.type || a.onClick && a.onClick.call(n, t.native, n.active), n.lastActive.length && n.updateHoverStyle(n.lastActive, r.mode, !1), n.active.length && r.mode && n.updateHoverStyle(n.active, r.mode, !0), i = !e.arrayEquals(n.active, n.lastActive), n.lastActive = n.active, i
                        }
                    }), t.Controller = t
                }
            }, {}],
            24: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    var e = t.helpers,
                        i = ["push", "pop", "shift", "splice", "unshift"];

                    function n(t, e) {
                        var n = t._chartjs;
                        if (n) {
                            var a = n.listeners,
                                r = a.indexOf(e); - 1 !== r && a.splice(r, 1), a.length > 0 || (i.forEach(function(e) {
                                delete t[e]
                            }), delete t._chartjs)
                        }
                    }
                    t.DatasetController = function(t, e) {
                        this.initialize(t, e)
                    }, e.extend(t.DatasetController.prototype, {
                        datasetElementType: null,
                        dataElementType: null,
                        initialize: function(t, e) {
                            this.chart = t, this.index = e, this.linkScales(), this.addElements()
                        },
                        updateIndex: function(t) {
                            this.index = t
                        },
                        linkScales: function() {
                            var t = this.getMeta(),
                                e = this.getDataset();
                            null === t.xAxisID && (t.xAxisID = e.xAxisID || this.chart.options.scales.xAxes[0].id), null === t.yAxisID && (t.yAxisID = e.yAxisID || this.chart.options.scales.yAxes[0].id)
                        },
                        getDataset: function() {
                            return this.chart.data.datasets[this.index]
                        },
                        getMeta: function() {
                            return this.chart.getDatasetMeta(this.index)
                        },
                        getScaleForId: function(t) {
                            return this.chart.scales[t]
                        },
                        reset: function() {
                            this.update(!0)
                        },
                        destroy: function() {
                            this._data && n(this._data, this)
                        },
                        createMetaDataset: function() {
                            var t = this.datasetElementType;
                            return t && new t({
                                _chart: this.chart,
                                _datasetIndex: this.index
                            })
                        },
                        createMetaData: function(t) {
                            var e = this.dataElementType;
                            return e && new e({
                                _chart: this.chart,
                                _datasetIndex: this.index,
                                _index: t
                            })
                        },
                        addElements: function() {
                            var t, e, i = this.getMeta(),
                                n = this.getDataset().data || [],
                                a = i.data;
                            for (t = 0, e = n.length; t < e; ++t) a[t] = a[t] || this.createMetaData(t);
                            i.dataset = i.dataset || this.createMetaDataset()
                        },
                        addElementAndReset: function(t) {
                            var e = this.createMetaData(t);
                            this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
                        },
                        buildOrUpdateElements: function() {
                            var t, a, r = this,
                                o = r.getDataset(),
                                s = o.data || (o.data = []);
                            r._data !== s && (r._data && n(r._data, r), a = r, (t = s)._chartjs ? t._chartjs.listeners.push(a) : (Object.defineProperty(t, "_chartjs", {
                                configurable: !0,
                                enumerable: !1,
                                value: {
                                    listeners: [a]
                                }
                            }), i.forEach(function(i) {
                                var n = "onData" + i.charAt(0).toUpperCase() + i.slice(1),
                                    a = t[i];
                                Object.defineProperty(t, i, {
                                    configurable: !0,
                                    enumerable: !1,
                                    value: function() {
                                        var i = Array.prototype.slice.call(arguments),
                                            r = a.apply(this, i);
                                        return e.each(t._chartjs.listeners, function(t) {
                                            "function" == typeof t[n] && t[n].apply(t, i)
                                        }), r
                                    }
                                })
                            })), r._data = s), r.resyncElements()
                        },
                        update: e.noop,
                        transition: function(t) {
                            for (var e = this.getMeta(), i = e.data || [], n = i.length, a = 0; a < n; ++a) i[a].transition(t);
                            e.dataset && e.dataset.transition(t)
                        },
                        draw: function() {
                            var t = this.getMeta(),
                                e = t.data || [],
                                i = e.length,
                                n = 0;
                            for (t.dataset && t.dataset.draw(); n < i; ++n) e[n].draw()
                        },
                        removeHoverStyle: function(t, i) {
                            var n = this.chart.data.datasets[t._datasetIndex],
                                a = t._index,
                                r = t.custom || {},
                                o = e.getValueAtIndexOrDefault,
                                s = t._model;
                            s.backgroundColor = r.backgroundColor ? r.backgroundColor : o(n.backgroundColor, a, i.backgroundColor), s.borderColor = r.borderColor ? r.borderColor : o(n.borderColor, a, i.borderColor), s.borderWidth = r.borderWidth ? r.borderWidth : o(n.borderWidth, a, i.borderWidth)
                        },
                        setHoverStyle: function(t) {
                            var i = this.chart.data.datasets[t._datasetIndex],
                                n = t._index,
                                a = t.custom || {},
                                r = e.getValueAtIndexOrDefault,
                                o = e.getHoverColor,
                                s = t._model;
                            s.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : r(i.hoverBackgroundColor, n, o(s.backgroundColor)), s.borderColor = a.hoverBorderColor ? a.hoverBorderColor : r(i.hoverBorderColor, n, o(s.borderColor)), s.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : r(i.hoverBorderWidth, n, s.borderWidth)
                        },
                        resyncElements: function() {
                            var t = this.getMeta(),
                                e = this.getDataset().data,
                                i = t.data.length,
                                n = e.length;
                            n < i ? t.data.splice(n, i - n) : n > i && this.insertElements(i, n - i)
                        },
                        insertElements: function(t, e) {
                            for (var i = 0; i < e; ++i) this.addElementAndReset(t + i)
                        },
                        onDataPush: function() {
                            this.insertElements(this.getDataset().data.length - 1, arguments.length)
                        },
                        onDataPop: function() {
                            this.getMeta().data.pop()
                        },
                        onDataShift: function() {
                            this.getMeta().data.shift()
                        },
                        onDataSplice: function(t, e) {
                            this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
                        },
                        onDataUnshift: function() {
                            this.insertElements(0, arguments.length)
                        }
                    }), t.DatasetController.extend = e.inherits
                }
            }, {}],
            25: [function(t, e, i) {
                "use strict";
                var n = t(3);
                e.exports = function(t) {
                    var e = t.helpers;
                    t.elements = {}, t.Element = function(t) {
                        e.extend(this, t), this.initialize.apply(this, arguments)
                    }, e.extend(t.Element.prototype, {
                        initialize: function() {
                            this.hidden = !1
                        },
                        pivot: function() {
                            var t = this;
                            return t._view || (t._view = e.clone(t._model)), t._start = {}, t
                        },
                        transition: function(t) {
                            var e = this,
                                i = e._model,
                                a = e._start,
                                r = e._view;
                            return i && 1 !== t ? (r || (r = e._view = {}), a || (a = e._start = {}), function(t, e, i, a) {
                                var r, o, s, l, u, d, c, h, f, p = Object.keys(i);
                                for (r = 0, o = p.length; r < o; ++r)
                                    if (d = i[s = p[r]], e.hasOwnProperty(s) || (e[s] = d), (l = e[s]) !== d && "_" !== s[0]) {
                                        if (t.hasOwnProperty(s) || (t[s] = l), (c = typeof d) == typeof(u = t[s]))
                                            if ("string" === c) {
                                                if ((h = n(u)).valid && (f = n(d)).valid) {
                                                    e[s] = f.mix(h, a).rgbString();
                                                    continue
                                                }
                                            } else if ("number" === c && isFinite(u) && isFinite(d)) {
                                            e[s] = u + (d - u) * a;
                                            continue
                                        }
                                        e[s] = d
                                    }
                            }(a, r, i, t), e) : (e._view = i, e._start = null, e)
                        },
                        tooltipPosition: function() {
                            return {
                                x: this._model.x,
                                y: this._model.y
                            }
                        },
                        hasValue: function() {
                            return e.isNumber(this._model.x) && e.isNumber(this._model.y)
                        }
                    }), t.Element.extend = e.inherits
                }
            }, {
                3: 3
            }],
            26: [function(t, e, i) {
                "use strict";
                var n = t(3);
                e.exports = function(t) {
                    var e, i = t.helpers = {};
                    i.each = function(t, e, n, a) {
                        var r, o;
                        if (i.isArray(t))
                            if (o = t.length, a)
                                for (r = o - 1; r >= 0; r--) e.call(n, t[r], r);
                            else
                                for (r = 0; r < o; r++) e.call(n, t[r], r);
                        else if ("object" == typeof t) {
                            var s = Object.keys(t);
                            for (o = s.length, r = 0; r < o; r++) e.call(n, t[s[r]], s[r])
                        }
                    }, i.clone = function(t) {
                        var e = {};
                        return i.each(t, function(t, n) {
                            i.isArray(t) ? e[n] = t.slice(0) : e[n] = "object" == typeof t && null !== t ? i.clone(t) : t
                        }), e
                    }, i.extend = function(t) {
                        for (var e = function(e, i) {
                                t[i] = e
                            }, n = 1, a = arguments.length; n < a; n++) i.each(arguments[n], e);
                        return t
                    }, i.configMerge = function(e) {
                        var n = i.clone(e);
                        return i.each(Array.prototype.slice.call(arguments, 1), function(e) {
                            i.each(e, function(e, a) {
                                var r = n.hasOwnProperty(a),
                                    o = r ? n[a] : {};
                                "scales" === a ? n[a] = i.scaleMerge(o, e) : "scale" === a ? n[a] = i.configMerge(o, t.scaleService.getScaleDefaults(e.type), e) : !r || "object" != typeof o || i.isArray(o) || null === o || "object" != typeof e || i.isArray(e) ? n[a] = e : n[a] = i.configMerge(o, e)
                            })
                        }), n
                    }, i.scaleMerge = function(e, n) {
                        var a = i.clone(e);
                        return i.each(n, function(e, n) {
                            "xAxes" === n || "yAxes" === n ? a.hasOwnProperty(n) ? i.each(e, function(e, r) {
                                var o = i.getValueOrDefault(e.type, "xAxes" === n ? "category" : "linear"),
                                    s = t.scaleService.getScaleDefaults(o);
                                r >= a[n].length || !a[n][r].type ? a[n].push(i.configMerge(s, e)) : e.type && e.type !== a[n][r].type ? a[n][r] = i.configMerge(a[n][r], s, e) : a[n][r] = i.configMerge(a[n][r], e)
                            }) : (a[n] = [], i.each(e, function(e) {
                                var r = i.getValueOrDefault(e.type, "xAxes" === n ? "category" : "linear");
                                a[n].push(i.configMerge(t.scaleService.getScaleDefaults(r), e))
                            })) : a.hasOwnProperty(n) && "object" == typeof a[n] && null !== a[n] && "object" == typeof e ? a[n] = i.configMerge(a[n], e) : a[n] = e
                        }), a
                    }, i.getValueAtIndexOrDefault = function(t, e, n) {
                        return void 0 === t || null === t ? n : i.isArray(t) ? e < t.length ? t[e] : n : t
                    }, i.getValueOrDefault = function(t, e) {
                        return void 0 === t ? e : t
                    }, i.indexOf = Array.prototype.indexOf ? function(t, e) {
                        return t.indexOf(e)
                    } : function(t, e) {
                        for (var i = 0, n = t.length; i < n; ++i)
                            if (t[i] === e) return i;
                        return -1
                    }, i.where = function(t, e) {
                        if (i.isArray(t) && Array.prototype.filter) return t.filter(e);
                        var n = [];
                        return i.each(t, function(t) {
                            e(t) && n.push(t)
                        }), n
                    }, i.findIndex = Array.prototype.findIndex ? function(t, e, i) {
                        return t.findIndex(e, i)
                    } : function(t, e, i) {
                        i = void 0 === i ? t : i;
                        for (var n = 0, a = t.length; n < a; ++n)
                            if (e.call(i, t[n], n, t)) return n;
                        return -1
                    }, i.findNextWhere = function(t, e, i) {
                        void 0 !== i && null !== i || (i = -1);
                        for (var n = i + 1; n < t.length; n++) {
                            var a = t[n];
                            if (e(a)) return a
                        }
                    }, i.findPreviousWhere = function(t, e, i) {
                        void 0 !== i && null !== i || (i = t.length);
                        for (var n = i - 1; n >= 0; n--) {
                            var a = t[n];
                            if (e(a)) return a
                        }
                    }, i.inherits = function(t) {
                        var e = this,
                            n = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                                return e.apply(this, arguments)
                            },
                            a = function() {
                                this.constructor = n
                            };
                        return a.prototype = e.prototype, n.prototype = new a, n.extend = i.inherits, t && i.extend(n.prototype, t), n.__super__ = e.prototype, n
                    }, i.noop = function() {}, i.uid = (e = 0, function() {
                        return e++
                    }), i.isNumber = function(t) {
                        return !isNaN(parseFloat(t)) && isFinite(t)
                    }, i.almostEquals = function(t, e, i) {
                        return Math.abs(t - e) < i
                    }, i.almostWhole = function(t, e) {
                        var i = Math.round(t);
                        return i - e < t && i + e > t
                    }, i.max = function(t) {
                        return t.reduce(function(t, e) {
                            return isNaN(e) ? t : Math.max(t, e)
                        }, Number.NEGATIVE_INFINITY)
                    }, i.min = function(t) {
                        return t.reduce(function(t, e) {
                            return isNaN(e) ? t : Math.min(t, e)
                        }, Number.POSITIVE_INFINITY)
                    }, i.sign = Math.sign ? function(t) {
                        return Math.sign(t)
                    } : function(t) {
                        return 0 === (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1
                    }, i.log10 = Math.log10 ? function(t) {
                        return Math.log10(t)
                    } : function(t) {
                        return Math.log(t) / Math.LN10
                    }, i.toRadians = function(t) {
                        return t * (Math.PI / 180)
                    }, i.toDegrees = function(t) {
                        return t * (180 / Math.PI)
                    }, i.getAngleFromPoint = function(t, e) {
                        var i = e.x - t.x,
                            n = e.y - t.y,
                            a = Math.sqrt(i * i + n * n),
                            r = Math.atan2(n, i);
                        return r < -.5 * Math.PI && (r += 2 * Math.PI), {
                            angle: r,
                            distance: a
                        }
                    }, i.distanceBetweenPoints = function(t, e) {
                        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                    }, i.aliasPixel = function(t) {
                        return t % 2 == 0 ? 0 : .5
                    }, i.splineCurve = function(t, e, i, n) {
                        var a = t.skip ? e : t,
                            r = e,
                            o = i.skip ? e : i,
                            s = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)),
                            l = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
                            u = s / (s + l),
                            d = l / (s + l),
                            c = n * (u = isNaN(u) ? 0 : u),
                            h = n * (d = isNaN(d) ? 0 : d);
                        return {
                            previous: {
                                x: r.x - c * (o.x - a.x),
                                y: r.y - c * (o.y - a.y)
                            },
                            next: {
                                x: r.x + h * (o.x - a.x),
                                y: r.y + h * (o.y - a.y)
                            }
                        }
                    }, i.EPSILON = Number.EPSILON || 1e-14, i.splineCurveMonotone = function(t) {
                        var e, n, a, r, o, s, l, u, d, c = (t || []).map(function(t) {
                                return {
                                    model: t._model,
                                    deltaK: 0,
                                    mK: 0
                                }
                            }),
                            h = c.length;
                        for (e = 0; e < h; ++e)
                            if (!(a = c[e]).model.skip) {
                                if (n = e > 0 ? c[e - 1] : null, (r = e < h - 1 ? c[e + 1] : null) && !r.model.skip) {
                                    var f = r.model.x - a.model.x;
                                    a.deltaK = 0 !== f ? (r.model.y - a.model.y) / f : 0
                                }!n || n.model.skip ? a.mK = a.deltaK : !r || r.model.skip ? a.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(a.deltaK) ? a.mK = 0 : a.mK = (n.deltaK + a.deltaK) / 2
                            }
                        for (e = 0; e < h - 1; ++e) a = c[e], r = c[e + 1], a.model.skip || r.model.skip || (i.almostEquals(a.deltaK, 0, this.EPSILON) ? a.mK = r.mK = 0 : (o = a.mK / a.deltaK, s = r.mK / a.deltaK, (u = Math.pow(o, 2) + Math.pow(s, 2)) <= 9 || (l = 3 / Math.sqrt(u), a.mK = o * l * a.deltaK, r.mK = s * l * a.deltaK)));
                        for (e = 0; e < h; ++e)(a = c[e]).model.skip || (n = e > 0 ? c[e - 1] : null, r = e < h - 1 ? c[e + 1] : null, n && !n.model.skip && (d = (a.model.x - n.model.x) / 3, a.model.controlPointPreviousX = a.model.x - d, a.model.controlPointPreviousY = a.model.y - d * a.mK), r && !r.model.skip && (d = (r.model.x - a.model.x) / 3, a.model.controlPointNextX = a.model.x + d, a.model.controlPointNextY = a.model.y + d * a.mK))
                    }, i.nextItem = function(t, e, i) {
                        return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                    }, i.previousItem = function(t, e, i) {
                        return i ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
                    }, i.niceNum = function(t, e) {
                        var n = Math.floor(i.log10(t)),
                            a = t / Math.pow(10, n);
                        return (e ? a < 1.5 ? 1 : a < 3 ? 2 : a < 7 ? 5 : 10 : a <= 1 ? 1 : a <= 2 ? 2 : a <= 5 ? 5 : 10) * Math.pow(10, n)
                    };
                    var a = i.easingEffects = {
                        linear: function(t) {
                            return t
                        },
                        easeInQuad: function(t) {
                            return t * t
                        },
                        easeOutQuad: function(t) {
                            return -1 * t * (t - 2)
                        },
                        easeInOutQuad: function(t) {
                            return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                        },
                        easeInCubic: function(t) {
                            return t * t * t
                        },
                        easeOutCubic: function(t) {
                            return 1 * ((t = t / 1 - 1) * t * t + 1)
                        },
                        easeInOutCubic: function(t) {
                            return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                        },
                        easeInQuart: function(t) {
                            return t * t * t * t
                        },
                        easeOutQuart: function(t) {
                            return -1 * ((t = t / 1 - 1) * t * t * t - 1)
                        },
                        easeInOutQuart: function(t) {
                            return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                        },
                        easeInQuint: function(t) {
                            return 1 * (t /= 1) * t * t * t * t
                        },
                        easeOutQuint: function(t) {
                            return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
                        },
                        easeInOutQuint: function(t) {
                            return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                        },
                        easeInSine: function(t) {
                            return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
                        },
                        easeOutSine: function(t) {
                            return 1 * Math.sin(t / 1 * (Math.PI / 2))
                        },
                        easeInOutSine: function(t) {
                            return -.5 * (Math.cos(Math.PI * t / 1) - 1)
                        },
                        easeInExpo: function(t) {
                            return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
                        },
                        easeOutExpo: function(t) {
                            return 1 === t ? 1 : 1 * (1 - Math.pow(2, -10 * t / 1))
                        },
                        easeInOutExpo: function(t) {
                            return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
                        },
                        easeInCirc: function(t) {
                            return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
                        },
                        easeOutCirc: function(t) {
                            return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
                        },
                        easeInOutCirc: function(t) {
                            return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                        },
                        easeInElastic: function(t) {
                            var e = 1.70158,
                                i = 0,
                                n = 1;
                            return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i))
                        },
                        easeOutElastic: function(t) {
                            var e = 1.70158,
                                i = 0,
                                n = 1;
                            return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / i) + 1)
                        },
                        easeInOutElastic: function(t) {
                            var e = 1.70158,
                                i = 0,
                                n = 1;
                            return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = .3 * 1.5 * 1), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i) * .5 + 1)
                        },
                        easeInBack: function(t) {
                            var e = 1.70158;
                            return 1 * (t /= 1) * t * ((e + 1) * t - e)
                        },
                        easeOutBack: function(t) {
                            var e = 1.70158;
                            return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
                        },
                        easeInOutBack: function(t) {
                            var e = 1.70158;
                            return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                        },
                        easeInBounce: function(t) {
                            return 1 - a.easeOutBounce(1 - t)
                        },
                        easeOutBounce: function(t) {
                            return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t * 1 : t < 2 / 2.75 ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                        },
                        easeInOutBounce: function(t) {
                            return t < .5 ? .5 * a.easeInBounce(2 * t) : .5 * a.easeOutBounce(2 * t - 1) + .5
                        }
                    };

                    function r(t, e, i) {
                        var n;
                        return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n
                    }

                    function o(t) {
                        return void 0 !== t && null !== t && "none" !== t
                    }

                    function s(t, e, i) {
                        var n = document.defaultView,
                            a = t.parentNode,
                            s = n.getComputedStyle(t)[e],
                            l = n.getComputedStyle(a)[e],
                            u = o(s),
                            d = o(l),
                            c = Number.POSITIVE_INFINITY;
                        return u || d ? Math.min(u ? r(s, t, i) : c, d ? r(l, a, i) : c) : "none"
                    }
                    i.requestAnimFrame = "undefined" == typeof window ? function(t) {
                        t()
                    } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                        return window.setTimeout(t, 1e3 / 60)
                    }, i.getRelativePosition = function(t, e) {
                        var n, a, r = t.originalEvent || t,
                            o = t.currentTarget || t.srcElement,
                            s = o.getBoundingClientRect(),
                            l = r.touches;
                        l && l.length > 0 ? (n = l[0].clientX, a = l[0].clientY) : (n = r.clientX, a = r.clientY);
                        var u = parseFloat(i.getStyle(o, "padding-left")),
                            d = parseFloat(i.getStyle(o, "padding-top")),
                            c = parseFloat(i.getStyle(o, "padding-right")),
                            h = parseFloat(i.getStyle(o, "padding-bottom")),
                            f = s.right - s.left - u - c,
                            p = s.bottom - s.top - d - h;
                        return {
                            x: n = Math.round((n - s.left - u) / f * o.width / e.currentDevicePixelRatio),
                            y: a = Math.round((a - s.top - d) / p * o.height / e.currentDevicePixelRatio)
                        }
                    }, i.addEvent = function(t, e, i) {
                        t.addEventListener ? t.addEventListener(e, i) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i
                    }, i.removeEvent = function(t, e, n) {
                        t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = i.noop
                    }, i.getConstraintWidth = function(t) {
                        return s(t, "max-width", "clientWidth")
                    }, i.getConstraintHeight = function(t) {
                        return s(t, "max-height", "clientHeight")
                    }, i.getMaximumWidth = function(t) {
                        var e = t.parentNode,
                            n = parseInt(i.getStyle(e, "padding-left"), 10),
                            a = parseInt(i.getStyle(e, "padding-right"), 10),
                            r = e.clientWidth - n - a,
                            o = i.getConstraintWidth(t);
                        return isNaN(o) ? r : Math.min(r, o)
                    }, i.getMaximumHeight = function(t) {
                        var e = t.parentNode,
                            n = parseInt(i.getStyle(e, "padding-top"), 10),
                            a = parseInt(i.getStyle(e, "padding-bottom"), 10),
                            r = e.clientHeight - n - a,
                            o = i.getConstraintHeight(t);
                        return isNaN(o) ? r : Math.min(r, o)
                    }, i.getStyle = function(t, e) {
                        return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                    }, i.retinaScale = function(t) {
                        var e = t.currentDevicePixelRatio = window.devicePixelRatio || 1;
                        if (1 !== e) {
                            var i = t.canvas,
                                n = t.height,
                                a = t.width;
                            i.height = n * e, i.width = a * e, t.ctx.scale(e, e), i.style.height = n + "px", i.style.width = a + "px"
                        }
                    }, i.clear = function(t) {
                        t.ctx.clearRect(0, 0, t.width, t.height)
                    }, i.fontString = function(t, e, i) {
                        return e + " " + t + "px " + i
                    }, i.longestText = function(t, e, n, a) {
                        var r = (a = a || {}).data = a.data || {},
                            o = a.garbageCollect = a.garbageCollect || [];
                        a.font !== e && (r = a.data = {}, o = a.garbageCollect = [], a.font = e), t.font = e;
                        var s = 0;
                        i.each(n, function(e) {
                            void 0 !== e && null !== e && !0 !== i.isArray(e) ? s = i.measureText(t, r, o, s, e) : i.isArray(e) && i.each(e, function(e) {
                                void 0 === e || null === e || i.isArray(e) || (s = i.measureText(t, r, o, s, e))
                            })
                        });
                        var l = o.length / 2;
                        if (l > n.length) {
                            for (var u = 0; u < l; u++) delete r[o[u]];
                            o.splice(0, l)
                        }
                        return s
                    }, i.measureText = function(t, e, i, n, a) {
                        var r = e[a];
                        return r || (r = e[a] = t.measureText(a).width, i.push(a)), r > n && (n = r), n
                    }, i.numberOfLabelLines = function(t) {
                        var e = 1;
                        return i.each(t, function(t) {
                            i.isArray(t) && t.length > e && (e = t.length)
                        }), e
                    }, i.drawRoundedRectangle = function(t, e, i, n, a, r) {
                        t.beginPath(), t.moveTo(e + r, i), t.lineTo(e + n - r, i), t.quadraticCurveTo(e + n, i, e + n, i + r), t.lineTo(e + n, i + a - r), t.quadraticCurveTo(e + n, i + a, e + n - r, i + a), t.lineTo(e + r, i + a), t.quadraticCurveTo(e, i + a, e, i + a - r), t.lineTo(e, i + r), t.quadraticCurveTo(e, i, e + r, i), t.closePath()
                    }, i.color = n ? function(e) {
                        return e instanceof CanvasGradient && (e = t.defaults.global.defaultColor), n(e)
                    } : function(t) {
                        return console.error("Color.js not found!"), t
                    }, i.isArray = Array.isArray ? function(t) {
                        return Array.isArray(t)
                    } : function(t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    }, i.arrayEquals = function(t, e) {
                        var n, a, r, o;
                        if (!t || !e || t.length !== e.length) return !1;
                        for (n = 0, a = t.length; n < a; ++n)
                            if (r = t[n], o = e[n], r instanceof Array && o instanceof Array) {
                                if (!i.arrayEquals(r, o)) return !1
                            } else if (r !== o) return !1;
                        return !0
                    }, i.callback = function(t, e, i) {
                        t && "function" == typeof t.call && t.apply(i, e)
                    }, i.getHoverColor = function(t) {
                        return t instanceof CanvasPattern ? t : i.color(t).saturate(.5).darken(.1).rgbString()
                    }, i.callCallback = i.callback
                }
            }, {
                3: 3
            }],
            27: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    var e = t.helpers;

                    function i(t, i) {
                        return t.native ? {
                            x: t.x,
                            y: t.y
                        } : e.getRelativePosition(t, i)
                    }

                    function n(t, e) {
                        var i, n, a, r, o;
                        for (n = 0, r = t.data.datasets.length; n < r; ++n)
                            if (t.isDatasetVisible(n))
                                for (a = 0, o = (i = t.getDatasetMeta(n)).data.length; a < o; ++a) {
                                    var s = i.data[a];
                                    s._view.skip || e(s)
                                }
                    }

                    function a(t, e) {
                        var i = [];
                        return n(t, function(t) {
                            t.inRange(e.x, e.y) && i.push(t)
                        }), i
                    }

                    function r(t, i, a, r) {
                        var o = Number.POSITIVE_INFINITY,
                            s = [];
                        return r || (r = e.distanceBetweenPoints), n(t, function(t) {
                            if (!a || t.inRange(i.x, i.y)) {
                                var e = t.getCenterPoint(),
                                    n = r(i, e);
                                n < o ? (s = [t], o = n) : n === o && s.push(t)
                            }
                        }), s
                    }

                    function o(t, e, n) {
                        var o = i(e, t),
                            s = n.intersect ? a(t, o) : r(t, o, !1, function(t, e) {
                                return Math.abs(t.x - e.x)
                            }),
                            l = [];
                        return s.length ? (t.data.datasets.forEach(function(e, i) {
                            if (t.isDatasetVisible(i)) {
                                var n = t.getDatasetMeta(i).data[s[0]._index];
                                n && !n._view.skip && l.push(n)
                            }
                        }), l) : []
                    }
                    t.Interaction = {
                        modes: {
                            single: function(t, e) {
                                var a = i(e, t),
                                    r = [];
                                return n(t, function(t) {
                                    if (t.inRange(a.x, a.y)) return r.push(t), r
                                }), r.slice(0, 1)
                            },
                            label: o,
                            index: o,
                            dataset: function(t, e, n) {
                                var o = i(e, t),
                                    s = n.intersect ? a(t, o) : r(t, o, !1);
                                return s.length > 0 && (s = t.getDatasetMeta(s[0]._datasetIndex).data), s
                            },
                            "x-axis": function(t, e) {
                                return o(t, e, !0)
                            },
                            point: function(t, e) {
                                return a(t, i(e, t))
                            },
                            nearest: function(t, e, n) {
                                var a = r(t, i(e, t), n.intersect);
                                return a.length > 1 && a.sort(function(t, e) {
                                    var i = t.getArea() - e.getArea();
                                    return 0 === i && (i = t._datasetIndex - e._datasetIndex), i
                                }), a.slice(0, 1)
                            },
                            x: function(t, e, a) {
                                var r = i(e, t),
                                    o = [],
                                    s = !1;
                                return n(t, function(t) {
                                    t.inXRange(r.x) && o.push(t), t.inRange(r.x, r.y) && (s = !0)
                                }), a.intersect && !s && (o = []), o
                            },
                            y: function(t, e, a) {
                                var r = i(e, t),
                                    o = [],
                                    s = !1;
                                return n(t, function(t) {
                                    t.inYRange(r.y) && o.push(t), t.inRange(r.x, r.y) && (s = !0)
                                }), a.intersect && !s && (o = []), o
                            }
                        }
                    }
                }
            }, {}],
            28: [function(t, e, i) {
                "use strict";
                e.exports = function() {
                    var t = function(t, e) {
                        return this.construct(t, e), this
                    };
                    return t.defaults = {
                        global: {
                            responsive: !0,
                            responsiveAnimationDuration: 0,
                            maintainAspectRatio: !0,
                            events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                            hover: {
                                onHover: null,
                                mode: "nearest",
                                intersect: !0,
                                animationDuration: 400
                            },
                            onClick: null,
                            defaultColor: "rgba(0,0,0,0.1)",
                            defaultFontColor: "#666",
                            defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                            defaultFontSize: 12,
                            defaultFontStyle: "normal",
                            showLines: !0,
                            elements: {},
                            legendCallback: function(t) {
                                var e = [];
                                e.push('<ul class="' + t.id + '-legend">');
                                for (var i = 0; i < t.data.datasets.length; i++) e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>");
                                return e.push("</ul>"), e.join("")
                            }
                        }
                    }, t.Chart = t, t
                }
            }, {}],
            29: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    var e = t.helpers;

                    function i(t, i) {
                        return e.where(t, function(t) {
                            return t.position === i
                        })
                    }

                    function n(t, e) {
                        t.forEach(function(t, e) {
                            return t._tmpIndex_ = e, t
                        }), t.sort(function(t, i) {
                            var n = e ? i : t,
                                a = e ? t : i;
                            return n.weight === a.weight ? n._tmpIndex_ - a._tmpIndex_ : n.weight - a.weight
                        }), t.forEach(function(t) {
                            delete t._tmpIndex_
                        })
                    }
                    t.layoutService = {
                        defaults: {},
                        addBox: function(t, e) {
                            t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e)
                        },
                        removeBox: function(t, e) {
                            var i = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== i && t.boxes.splice(i, 1)
                        },
                        configure: function(t, e, i) {
                            for (var n, a = ["fullWidth", "position", "weight"], r = a.length, o = 0; o < r; ++o) n = a[o], i.hasOwnProperty(n) && (e[n] = i[n])
                        },
                        update: function(t, a, r) {
                            if (t) {
                                var o = t.options.layout,
                                    s = o ? o.padding : null,
                                    l = 0,
                                    u = 0,
                                    d = 0,
                                    c = 0;
                                isNaN(s) ? (l = s.left || 0, u = s.right || 0, d = s.top || 0, c = s.bottom || 0) : (l = s, u = s, d = s, c = s);
                                var h = i(t.boxes, "left"),
                                    f = i(t.boxes, "right"),
                                    p = i(t.boxes, "top"),
                                    g = i(t.boxes, "bottom"),
                                    m = i(t.boxes, "chartArea");
                                n(h, !0), n(f, !1), n(p, !0), n(g, !1);
                                var v = a - l - u,
                                    b = r - d - c,
                                    y = b / 2,
                                    x = (a - v / 2) / (h.length + f.length),
                                    w = (r - y) / (p.length + g.length),
                                    k = v,
                                    S = b,
                                    C = [];
                                e.each(h.concat(f, p, g), function(t) {
                                    var e, i = t.isHorizontal();
                                    i ? (e = t.update(t.fullWidth ? v : k, w), S -= e.height) : (e = t.update(x, y), k -= e.width), C.push({
                                        horizontal: i,
                                        minSize: e,
                                        box: t
                                    })
                                });
                                var M = 0,
                                    P = 0,
                                    A = 0,
                                    I = 0;
                                e.each(p.concat(g), function(t) {
                                    if (t.getPadding) {
                                        var e = t.getPadding();
                                        M = Math.max(M, e.left), P = Math.max(P, e.right)
                                    }
                                }), e.each(h.concat(f), function(t) {
                                    if (t.getPadding) {
                                        var e = t.getPadding();
                                        A = Math.max(A, e.top), I = Math.max(I, e.bottom)
                                    }
                                });
                                var T = l,
                                    D = u,
                                    F = d,
                                    V = c;
                                e.each(h.concat(f), N), e.each(h, function(t) {
                                    T += t.width
                                }), e.each(f, function(t) {
                                    D += t.width
                                }), e.each(p.concat(g), N), e.each(p, function(t) {
                                    F += t.height
                                }), e.each(g, function(t) {
                                    V += t.height
                                }), e.each(h.concat(f), function(t) {
                                    var i = e.findNextWhere(C, function(e) {
                                            return e.box === t
                                        }),
                                        n = {
                                            left: 0,
                                            right: 0,
                                            top: F,
                                            bottom: V
                                        };
                                    i && t.update(i.minSize.width, S, n)
                                }), T = l, D = u, F = d, V = c, e.each(h, function(t) {
                                    T += t.width
                                }), e.each(f, function(t) {
                                    D += t.width
                                }), e.each(p, function(t) {
                                    F += t.height
                                }), e.each(g, function(t) {
                                    V += t.height
                                });
                                var _ = Math.max(M - T, 0);
                                T += _, D += Math.max(P - D, 0);
                                var L = Math.max(A - F, 0);
                                F += L, V += Math.max(I - V, 0);
                                var O = r - F - V,
                                    R = a - T - D;
                                R === k && O === S || (e.each(h, function(t) {
                                    t.height = O
                                }), e.each(f, function(t) {
                                    t.height = O
                                }), e.each(p, function(t) {
                                    t.fullWidth || (t.width = R)
                                }), e.each(g, function(t) {
                                    t.fullWidth || (t.width = R)
                                }), S = O, k = R);
                                var z = l + _,
                                    E = d + L;
                                e.each(h.concat(p), B), z += k, E += S, e.each(f, B), e.each(g, B), t.chartArea = {
                                    left: T,
                                    top: F,
                                    right: T + k,
                                    bottom: F + S
                                }, e.each(m, function(e) {
                                    e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(k, S)
                                })
                            }

                            function N(t) {
                                var i = e.findNextWhere(C, function(e) {
                                    return e.box === t
                                });
                                if (i)
                                    if (t.isHorizontal()) {
                                        var n = {
                                            left: Math.max(T, M),
                                            right: Math.max(D, P),
                                            top: 0,
                                            bottom: 0
                                        };
                                        t.update(t.fullWidth ? v : k, b / 2, n)
                                    } else t.update(i.minSize.width, S)
                            }

                            function B(t) {
                                t.isHorizontal() ? (t.left = t.fullWidth ? l : T, t.right = t.fullWidth ? a - u : T + k, t.top = E, t.bottom = E + t.height, E = t.bottom) : (t.left = z, t.right = z + t.width, t.top = F, t.bottom = F + S, z = t.right)
                            }
                        }
                    }
                }
            }, {}],
            30: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    var e = t.helpers;
                    t.defaults.global.plugins = {}, t.plugins = {
                        _plugins: [],
                        _cacheId: 0,
                        register: function(t) {
                            var e = this._plugins;
                            [].concat(t).forEach(function(t) {
                                -1 === e.indexOf(t) && e.push(t)
                            }), this._cacheId++
                        },
                        unregister: function(t) {
                            var e = this._plugins;
                            [].concat(t).forEach(function(t) {
                                var i = e.indexOf(t); - 1 !== i && e.splice(i, 1)
                            }), this._cacheId++
                        },
                        clear: function() {
                            this._plugins = [], this._cacheId++
                        },
                        count: function() {
                            return this._plugins.length
                        },
                        getAll: function() {
                            return this._plugins
                        },
                        notify: function(t, e, i) {
                            var n, a, r, o, s, l = this.descriptors(t),
                                u = l.length;
                            for (n = 0; n < u; ++n)
                                if ("function" == typeof(s = (r = (a = l[n]).plugin)[e]) && ((o = [t].concat(i || [])).push(a.options), !1 === s.apply(r, o))) return !1;
                            return !0
                        },
                        descriptors: function(i) {
                            var n = i._plugins || (i._plugins = {});
                            if (n.id === this._cacheId) return n.descriptors;
                            var a = [],
                                r = [],
                                o = i && i.config || {},
                                s = t.defaults.global.plugins,
                                l = o.options && o.options.plugins || {};
                            return this._plugins.concat(o.plugins || []).forEach(function(t) {
                                if (-1 === a.indexOf(t)) {
                                    var i = t.id,
                                        n = l[i];
                                    !1 !== n && (!0 === n && (n = e.clone(s[i])), a.push(t), r.push({
                                        plugin: t,
                                        options: n || {}
                                    }))
                                }
                            }), n.descriptors = r, n.id = this._cacheId, r
                        }
                    }, t.pluginService = t.plugins, t.PluginBase = t.Element.extend({})
                }
            }, {}],
            31: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    var e = t.helpers;

                    function i(t, i, n) {
                        return e.isArray(i) ? e.longestText(t, n, i) : t.measureText(i).width
                    }

                    function n(i) {
                        var n = e.getValueOrDefault,
                            a = t.defaults.global,
                            r = n(i.fontSize, a.defaultFontSize),
                            o = n(i.fontStyle, a.defaultFontStyle),
                            s = n(i.fontFamily, a.defaultFontFamily);
                        return {
                            size: r,
                            style: o,
                            family: s,
                            font: e.fontString(r, o, s)
                        }
                    }
                    t.defaults.scale = {
                        display: !0,
                        position: "left",
                        gridLines: {
                            display: !0,
                            color: "rgba(0, 0, 0, 0.1)",
                            lineWidth: 1,
                            drawBorder: !0,
                            drawOnChartArea: !0,
                            drawTicks: !0,
                            tickMarkLength: 10,
                            zeroLineWidth: 1,
                            zeroLineColor: "rgba(0,0,0,0.25)",
                            zeroLineBorderDash: [],
                            zeroLineBorderDashOffset: 0,
                            offsetGridLines: !1,
                            borderDash: [],
                            borderDashOffset: 0
                        },
                        scaleLabel: {
                            labelString: "",
                            display: !1
                        },
                        ticks: {
                            beginAtZero: !1,
                            minRotation: 0,
                            maxRotation: 50,
                            mirror: !1,
                            padding: 0,
                            reverse: !1,
                            display: !0,
                            autoSkip: !0,
                            autoSkipPadding: 0,
                            labelOffset: 0,
                            callback: t.Ticks.formatters.values
                        }
                    }, t.Scale = t.Element.extend({
                        getPadding: function() {
                            return {
                                left: this.paddingLeft || 0,
                                top: this.paddingTop || 0,
                                right: this.paddingRight || 0,
                                bottom: this.paddingBottom || 0
                            }
                        },
                        beforeUpdate: function() {
                            e.callback(this.options.beforeUpdate, [this])
                        },
                        update: function(t, i, n) {
                            var a = this;
                            return a.beforeUpdate(), a.maxWidth = t, a.maxHeight = i, a.margins = e.extend({
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            }, n), a.longestTextCache = a.longestTextCache || {}, a.beforeSetDimensions(), a.setDimensions(), a.afterSetDimensions(), a.beforeDataLimits(), a.determineDataLimits(), a.afterDataLimits(), a.beforeBuildTicks(), a.buildTicks(), a.afterBuildTicks(), a.beforeTickToLabelConversion(), a.convertTicksToLabels(), a.afterTickToLabelConversion(), a.beforeCalculateTickRotation(), a.calculateTickRotation(), a.afterCalculateTickRotation(), a.beforeFit(), a.fit(), a.afterFit(), a.afterUpdate(), a.minSize
                        },
                        afterUpdate: function() {
                            e.callback(this.options.afterUpdate, [this])
                        },
                        beforeSetDimensions: function() {
                            e.callback(this.options.beforeSetDimensions, [this])
                        },
                        setDimensions: function() {
                            var t = this;
                            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
                        },
                        afterSetDimensions: function() {
                            e.callback(this.options.afterSetDimensions, [this])
                        },
                        beforeDataLimits: function() {
                            e.callback(this.options.beforeDataLimits, [this])
                        },
                        determineDataLimits: e.noop,
                        afterDataLimits: function() {
                            e.callback(this.options.afterDataLimits, [this])
                        },
                        beforeBuildTicks: function() {
                            e.callback(this.options.beforeBuildTicks, [this])
                        },
                        buildTicks: e.noop,
                        afterBuildTicks: function() {
                            e.callback(this.options.afterBuildTicks, [this])
                        },
                        beforeTickToLabelConversion: function() {
                            e.callback(this.options.beforeTickToLabelConversion, [this])
                        },
                        convertTicksToLabels: function() {
                            var t = this.options.ticks;
                            this.ticks = this.ticks.map(t.userCallback || t.callback)
                        },
                        afterTickToLabelConversion: function() {
                            e.callback(this.options.afterTickToLabelConversion, [this])
                        },
                        beforeCalculateTickRotation: function() {
                            e.callback(this.options.beforeCalculateTickRotation, [this])
                        },
                        calculateTickRotation: function() {
                            var t = this,
                                i = t.ctx,
                                a = t.options.ticks,
                                r = n(a);
                            i.font = r.font;
                            var o = a.minRotation || 0;
                            if (t.options.display && t.isHorizontal())
                                for (var s, l = e.longestText(i, r.font, t.ticks, t.longestTextCache), u = l, d = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; u > d && o < a.maxRotation;) {
                                    var c = e.toRadians(o);
                                    if (s = Math.cos(c), Math.sin(c) * l > t.maxHeight) {
                                        o--;
                                        break
                                    }
                                    o++, u = s * l
                                }
                            t.labelRotation = o
                        },
                        afterCalculateTickRotation: function() {
                            e.callback(this.options.afterCalculateTickRotation, [this])
                        },
                        beforeFit: function() {
                            e.callback(this.options.beforeFit, [this])
                        },
                        fit: function() {
                            var t = this,
                                a = t.minSize = {
                                    width: 0,
                                    height: 0
                                },
                                r = t.options,
                                o = r.ticks,
                                s = r.scaleLabel,
                                l = r.gridLines,
                                u = r.display,
                                d = t.isHorizontal(),
                                c = n(o),
                                h = 1.5 * n(s).size,
                                f = r.gridLines.tickMarkLength;
                            if (a.width = d ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : u && l.drawTicks ? f : 0, a.height = d ? u && l.drawTicks ? f : 0 : t.maxHeight, s.display && u && (d ? a.height += h : a.width += h), o.display && u) {
                                var p = e.longestText(t.ctx, c.font, t.ticks, t.longestTextCache),
                                    g = e.numberOfLabelLines(t.ticks),
                                    m = .5 * c.size;
                                if (d) {
                                    t.longestLabelWidth = p;
                                    var v = e.toRadians(t.labelRotation),
                                        b = Math.cos(v),
                                        y = Math.sin(v) * p + c.size * g + m * g;
                                    a.height = Math.min(t.maxHeight, a.height + y), t.ctx.font = c.font;
                                    var x = t.ticks[0],
                                        w = i(t.ctx, x, c.font),
                                        k = t.ticks[t.ticks.length - 1],
                                        S = i(t.ctx, k, c.font);
                                    0 !== t.labelRotation ? (t.paddingLeft = "bottom" === r.position ? b * w + 3 : b * m + 3, t.paddingRight = "bottom" === r.position ? b * m + 3 : b * S + 3) : (t.paddingLeft = w / 2 + 3, t.paddingRight = S / 2 + 3)
                                } else o.mirror ? p = 0 : p += t.options.ticks.padding, a.width = Math.min(t.maxWidth, a.width + p), t.paddingTop = c.size / 2, t.paddingBottom = c.size / 2
                            }
                            t.handleMargins(), t.width = a.width, t.height = a.height
                        },
                        handleMargins: function() {
                            var t = this;
                            t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0))
                        },
                        afterFit: function() {
                            e.callback(this.options.afterFit, [this])
                        },
                        isHorizontal: function() {
                            return "top" === this.options.position || "bottom" === this.options.position
                        },
                        isFullWidth: function() {
                            return this.options.fullWidth
                        },
                        getRightValue: function(t) {
                            return null === t || void 0 === t ? NaN : "number" != typeof t || isFinite(t) ? "object" == typeof t ? t instanceof Date || t.isValid ? t : this.getRightValue(this.isHorizontal() ? t.x : t.y) : t : NaN
                        },
                        getLabelForIndex: e.noop,
                        getPixelForValue: e.noop,
                        getValueForPixel: e.noop,
                        getPixelForTick: function(t, e) {
                            var i = this;
                            if (i.isHorizontal()) {
                                var n = (i.width - (i.paddingLeft + i.paddingRight)) / Math.max(i.ticks.length - (i.options.gridLines.offsetGridLines ? 0 : 1), 1),
                                    a = n * t + i.paddingLeft;
                                e && (a += n / 2);
                                var r = i.left + Math.round(a);
                                return r += i.isFullWidth() ? i.margins.left : 0
                            }
                            var o = i.height - (i.paddingTop + i.paddingBottom);
                            return i.top + t * (o / (i.ticks.length - 1))
                        },
                        getPixelForDecimal: function(t) {
                            var e = this;
                            if (e.isHorizontal()) {
                                var i = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft,
                                    n = e.left + Math.round(i);
                                return n += e.isFullWidth() ? e.margins.left : 0
                            }
                            return e.top + t * e.height
                        },
                        getBasePixel: function() {
                            return this.getPixelForValue(this.getBaseValue())
                        },
                        getBaseValue: function() {
                            var t = this.min,
                                e = this.max;
                            return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
                        },
                        draw: function(i) {
                            var a = this,
                                r = a.options;
                            if (r.display) {
                                var o, s, l = a.ctx,
                                    u = t.defaults.global,
                                    d = r.ticks,
                                    c = r.gridLines,
                                    h = r.scaleLabel,
                                    f = 0 !== a.labelRotation,
                                    p = d.autoSkip,
                                    g = a.isHorizontal();
                                d.maxTicksLimit && (s = d.maxTicksLimit);
                                var m = e.getValueOrDefault(d.fontColor, u.defaultFontColor),
                                    v = n(d),
                                    b = c.drawTicks ? c.tickMarkLength : 0,
                                    y = e.getValueOrDefault(h.fontColor, u.defaultFontColor),
                                    x = n(h),
                                    w = e.toRadians(a.labelRotation),
                                    k = Math.cos(w),
                                    S = a.longestLabelWidth * k;
                                l.fillStyle = m;
                                var C = [];
                                if (g) {
                                    if (o = !1, (S + d.autoSkipPadding) * a.ticks.length > a.width - (a.paddingLeft + a.paddingRight) && (o = 1 + Math.floor((S + d.autoSkipPadding) * a.ticks.length / (a.width - (a.paddingLeft + a.paddingRight)))), s && a.ticks.length > s)
                                        for (; !o || a.ticks.length / (o || 1) > s;) o || (o = 1), o += 1;
                                    p || (o = !1)
                                }
                                var M = "right" === r.position ? a.left : a.right - b,
                                    P = "right" === r.position ? a.left + b : a.right,
                                    A = "bottom" === r.position ? a.top : a.bottom - b,
                                    I = "bottom" === r.position ? a.top + b : a.bottom;
                                if (e.each(a.ticks, function(t, n) {
                                        if (void 0 !== t && null !== t) {
                                            var s = a.ticks.length === n + 1;
                                            if ((!(o > 1 && n % o > 0 || n % o == 0 && n + o >= a.ticks.length) || s) && void 0 !== t && null !== t) {
                                                var l, h, p, m, v, y, x, k, S, T, D, F, V, _;
                                                n === (void 0 !== a.zeroLineIndex ? a.zeroLineIndex : 0) ? (l = c.zeroLineWidth, h = c.zeroLineColor, p = c.zeroLineBorderDash, m = c.zeroLineBorderDashOffset) : (l = e.getValueAtIndexOrDefault(c.lineWidth, n), h = e.getValueAtIndexOrDefault(c.color, n), p = e.getValueOrDefault(c.borderDash, u.borderDash), m = e.getValueOrDefault(c.borderDashOffset, u.borderDashOffset));
                                                var L = "middle",
                                                    O = "middle";
                                                if (g) {
                                                    "bottom" === r.position ? (O = f ? "middle" : "top", L = f ? "right" : "center", _ = a.top + b) : (O = f ? "middle" : "bottom", L = f ? "left" : "center", _ = a.bottom - b);
                                                    var R = a.getPixelForTick(n) + e.aliasPixel(l);
                                                    V = a.getPixelForTick(n, c.offsetGridLines) + d.labelOffset, v = x = S = D = R, y = A, k = I, T = i.top, F = i.bottom
                                                } else {
                                                    var z, E = "left" === r.position,
                                                        N = d.padding;
                                                    d.mirror ? (L = E ? "left" : "right", z = N) : (L = E ? "right" : "left", z = b + N), V = E ? a.right - z : a.left + z;
                                                    var B = a.getPixelForTick(n);
                                                    B += e.aliasPixel(l), _ = a.getPixelForTick(n, c.offsetGridLines), v = M, x = P, S = i.left, D = i.right, y = k = T = F = B
                                                }
                                                C.push({
                                                    tx1: v,
                                                    ty1: y,
                                                    tx2: x,
                                                    ty2: k,
                                                    x1: S,
                                                    y1: T,
                                                    x2: D,
                                                    y2: F,
                                                    labelX: V,
                                                    labelY: _,
                                                    glWidth: l,
                                                    glColor: h,
                                                    glBorderDash: p,
                                                    glBorderDashOffset: m,
                                                    rotation: -1 * w,
                                                    label: t,
                                                    textBaseline: O,
                                                    textAlign: L
                                                })
                                            }
                                        }
                                    }), e.each(C, function(t) {
                                        if (c.display && (l.save(), l.lineWidth = t.glWidth, l.strokeStyle = t.glColor, l.setLineDash && (l.setLineDash(t.glBorderDash), l.lineDashOffset = t.glBorderDashOffset), l.beginPath(), c.drawTicks && (l.moveTo(t.tx1, t.ty1), l.lineTo(t.tx2, t.ty2)), c.drawOnChartArea && (l.moveTo(t.x1, t.y1), l.lineTo(t.x2, t.y2)), l.stroke(), l.restore()), d.display) {
                                            l.save(), l.translate(t.labelX, t.labelY), l.rotate(t.rotation), l.font = v.font, l.textBaseline = t.textBaseline, l.textAlign = t.textAlign;
                                            var i = t.label;
                                            if (e.isArray(i))
                                                for (var n = 0, a = 0; n < i.length; ++n) l.fillText("" + i[n], 0, a), a += 1.5 * v.size;
                                            else l.fillText(i, 0, 0);
                                            l.restore()
                                        }
                                    }), h.display) {
                                    var T, D, F = 0;
                                    if (g) T = a.left + (a.right - a.left) / 2, D = "bottom" === r.position ? a.bottom - x.size / 2 : a.top + x.size / 2;
                                    else {
                                        var V = "left" === r.position;
                                        T = V ? a.left + x.size / 2 : a.right - x.size / 2, D = a.top + (a.bottom - a.top) / 2, F = V ? -.5 * Math.PI : .5 * Math.PI
                                    }
                                    l.save(), l.translate(T, D), l.rotate(F), l.textAlign = "center", l.textBaseline = "middle", l.fillStyle = y, l.font = x.font, l.fillText(h.labelString, 0, 0), l.restore()
                                }
                                if (c.drawBorder) {
                                    l.lineWidth = e.getValueAtIndexOrDefault(c.lineWidth, 0), l.strokeStyle = e.getValueAtIndexOrDefault(c.color, 0);
                                    var _ = a.left,
                                        L = a.right,
                                        O = a.top,
                                        R = a.bottom,
                                        z = e.aliasPixel(l.lineWidth);
                                    g ? (O = R = "top" === r.position ? a.bottom : a.top, O += z, R += z) : (_ = L = "left" === r.position ? a.right : a.left, _ += z, L += z), l.beginPath(), l.moveTo(_, O), l.lineTo(L, R), l.stroke()
                                }
                            }
                        }
                    })
                }
            }, {}],
            32: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    var e = t.helpers;
                    t.scaleService = {
                        constructors: {},
                        defaults: {},
                        registerScaleType: function(t, i, n) {
                            this.constructors[t] = i, this.defaults[t] = e.clone(n)
                        },
                        getScaleConstructor: function(t) {
                            return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
                        },
                        getScaleDefaults: function(i) {
                            return this.defaults.hasOwnProperty(i) ? e.scaleMerge(t.defaults.scale, this.defaults[i]) : {}
                        },
                        updateScaleDefaults: function(t, i) {
                            var n = this.defaults;
                            n.hasOwnProperty(t) && (n[t] = e.extend(n[t], i))
                        },
                        addScalesToLayout: function(i) {
                            e.each(i.scales, function(e) {
                                e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, t.layoutService.addBox(i, e)
                            })
                        }
                    }
                }
            }, {}],
            33: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    var e = t.helpers;
                    t.Ticks = {
                        generators: {
                            linear: function(t, i) {
                                var n, a = [];
                                if (t.stepSize && t.stepSize > 0) n = t.stepSize;
                                else {
                                    var r = e.niceNum(i.max - i.min, !1);
                                    n = e.niceNum(r / (t.maxTicks - 1), !0)
                                }
                                var o = Math.floor(i.min / n) * n,
                                    s = Math.ceil(i.max / n) * n;
                                t.min && t.max && t.stepSize && e.almostWhole((t.max - t.min) / t.stepSize, n / 1e3) && (o = t.min, s = t.max);
                                var l = (s - o) / n;
                                l = e.almostEquals(l, Math.round(l), n / 1e3) ? Math.round(l) : Math.ceil(l), a.push(void 0 !== t.min ? t.min : o);
                                for (var u = 1; u < l; ++u) a.push(o + u * n);
                                return a.push(void 0 !== t.max ? t.max : s), a
                            },
                            logarithmic: function(t, i) {
                                var n, a, r = [],
                                    o = e.getValueOrDefault,
                                    s = o(t.min, Math.pow(10, Math.floor(e.log10(i.min)))),
                                    l = Math.floor(e.log10(i.max)),
                                    u = Math.ceil(i.max / Math.pow(10, l));
                                0 === s ? (n = Math.floor(e.log10(i.minNotZero)), a = Math.floor(i.minNotZero / Math.pow(10, n)), r.push(s), s = a * Math.pow(10, n)) : (n = Math.floor(e.log10(s)), a = Math.floor(s / Math.pow(10, n)));
                                do {
                                    r.push(s), 10 === ++a && (a = 1, ++n), s = a * Math.pow(10, n)
                                } while (n < l || n === l && a < u);
                                var d = o(t.max, s);
                                return r.push(d), r
                            }
                        },
                        formatters: {
                            values: function(t) {
                                return e.isArray(t) ? t : "" + t
                            },
                            linear: function(t, i, n) {
                                var a = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                                Math.abs(a) > 1 && t !== Math.floor(t) && (a = t - Math.floor(t));
                                var r = e.log10(Math.abs(a)),
                                    o = "";
                                if (0 !== t) {
                                    var s = -1 * Math.floor(r);
                                    s = Math.max(Math.min(s, 20), 0), o = t.toFixed(s)
                                } else o = "0";
                                return o
                            },
                            logarithmic: function(t, i, n) {
                                var a = t / Math.pow(10, Math.floor(e.log10(t)));
                                return 0 === t ? "0" : 1 === a || 2 === a || 5 === a || 0 === i || i === n.length - 1 ? t.toExponential() : ""
                            }
                        }
                    }
                }
            }, {}],
            34: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    var e = t.helpers;

                    function i(t, i) {
                        var n = e.color(t);
                        return n.alpha(i * n.alpha()).rgbaString()
                    }

                    function n(t, i) {
                        return i && (e.isArray(i) ? Array.prototype.push.apply(t, i) : t.push(i)), t
                    }

                    function a(i) {
                        var n = t.defaults.global,
                            a = e.getValueOrDefault;
                        return {
                            xPadding: i.xPadding,
                            yPadding: i.yPadding,
                            xAlign: i.xAlign,
                            yAlign: i.yAlign,
                            bodyFontColor: i.bodyFontColor,
                            _bodyFontFamily: a(i.bodyFontFamily, n.defaultFontFamily),
                            _bodyFontStyle: a(i.bodyFontStyle, n.defaultFontStyle),
                            _bodyAlign: i.bodyAlign,
                            bodyFontSize: a(i.bodyFontSize, n.defaultFontSize),
                            bodySpacing: i.bodySpacing,
                            titleFontColor: i.titleFontColor,
                            _titleFontFamily: a(i.titleFontFamily, n.defaultFontFamily),
                            _titleFontStyle: a(i.titleFontStyle, n.defaultFontStyle),
                            titleFontSize: a(i.titleFontSize, n.defaultFontSize),
                            _titleAlign: i.titleAlign,
                            titleSpacing: i.titleSpacing,
                            titleMarginBottom: i.titleMarginBottom,
                            footerFontColor: i.footerFontColor,
                            _footerFontFamily: a(i.footerFontFamily, n.defaultFontFamily),
                            _footerFontStyle: a(i.footerFontStyle, n.defaultFontStyle),
                            footerFontSize: a(i.footerFontSize, n.defaultFontSize),
                            _footerAlign: i.footerAlign,
                            footerSpacing: i.footerSpacing,
                            footerMarginTop: i.footerMarginTop,
                            caretSize: i.caretSize,
                            cornerRadius: i.cornerRadius,
                            backgroundColor: i.backgroundColor,
                            opacity: 0,
                            legendColorBackground: i.multiKeyBackground,
                            displayColors: i.displayColors,
                            borderColor: i.borderColor,
                            borderWidth: i.borderWidth
                        }
                    }
                    t.defaults.global.tooltips = {
                        enabled: !0,
                        custom: null,
                        mode: "nearest",
                        position: "average",
                        intersect: !0,
                        backgroundColor: "rgba(0,0,0,0.8)",
                        titleFontStyle: "bold",
                        titleSpacing: 2,
                        titleMarginBottom: 6,
                        titleFontColor: "#fff",
                        titleAlign: "left",
                        bodySpacing: 2,
                        bodyFontColor: "#fff",
                        bodyAlign: "left",
                        footerFontStyle: "bold",
                        footerSpacing: 2,
                        footerMarginTop: 6,
                        footerFontColor: "#fff",
                        footerAlign: "left",
                        yPadding: 6,
                        xPadding: 6,
                        caretPadding: 2,
                        caretSize: 5,
                        cornerRadius: 6,
                        multiKeyBackground: "#fff",
                        displayColors: !0,
                        borderColor: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        callbacks: {
                            beforeTitle: e.noop,
                            title: function(t, e) {
                                var i = "",
                                    n = e.labels,
                                    a = n ? n.length : 0;
                                if (t.length > 0) {
                                    var r = t[0];
                                    r.xLabel ? i = r.xLabel : a > 0 && r.index < a && (i = n[r.index])
                                }
                                return i
                            },
                            afterTitle: e.noop,
                            beforeBody: e.noop,
                            beforeLabel: e.noop,
                            label: function(t, e) {
                                var i = e.datasets[t.datasetIndex].label || "";
                                return i && (i += ": "), i += t.yLabel
                            },
                            labelColor: function(t, e) {
                                var i = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                                return {
                                    borderColor: i.borderColor,
                                    backgroundColor: i.backgroundColor
                                }
                            },
                            afterLabel: e.noop,
                            afterBody: e.noop,
                            beforeFooter: e.noop,
                            footer: e.noop,
                            afterFooter: e.noop
                        }
                    }, t.Tooltip = t.Element.extend({
                        initialize: function() {
                            this._model = a(this._options)
                        },
                        getTitle: function() {
                            var t = this._options.callbacks,
                                e = t.beforeTitle.apply(this, arguments),
                                i = t.title.apply(this, arguments),
                                a = t.afterTitle.apply(this, arguments),
                                r = [];
                            return r = n(r = n(r = n(r, e), i), a)
                        },
                        getBeforeBody: function() {
                            var t = this._options.callbacks.beforeBody.apply(this, arguments);
                            return e.isArray(t) ? t : void 0 !== t ? [t] : []
                        },
                        getBody: function(t, i) {
                            var a = this,
                                r = a._options.callbacks,
                                o = [];
                            return e.each(t, function(t) {
                                var e = {
                                    before: [],
                                    lines: [],
                                    after: []
                                };
                                n(e.before, r.beforeLabel.call(a, t, i)), n(e.lines, r.label.call(a, t, i)), n(e.after, r.afterLabel.call(a, t, i)), o.push(e)
                            }), o
                        },
                        getAfterBody: function() {
                            var t = this._options.callbacks.afterBody.apply(this, arguments);
                            return e.isArray(t) ? t : void 0 !== t ? [t] : []
                        },
                        getFooter: function() {
                            var t = this._options.callbacks,
                                e = t.beforeFooter.apply(this, arguments),
                                i = t.footer.apply(this, arguments),
                                a = t.afterFooter.apply(this, arguments),
                                r = [];
                            return r = n(r = n(r = n(r, e), i), a)
                        },
                        update: function(i) {
                            var n, r, o, s, l, u, d, c = this,
                                h = c._options,
                                f = c._model,
                                p = c._model = a(h),
                                g = c._active,
                                m = c._data,
                                v = {
                                    xAlign: f.xAlign,
                                    yAlign: f.yAlign
                                },
                                b = {
                                    x: f.x,
                                    y: f.y
                                },
                                y = {
                                    width: f.width,
                                    height: f.height
                                },
                                x = {
                                    x: f.caretX,
                                    y: f.caretY
                                };
                            if (g.length) {
                                p.opacity = 1;
                                var w = [];
                                x = t.Tooltip.positioners[h.position](g, c._eventPosition);
                                var k = [];
                                for (n = 0, r = g.length; n < r; ++n) k.push((o = g[n], s = void 0, l = void 0, void 0, void 0, s = o._xScale, l = o._yScale || o._scale, u = o._index, d = o._datasetIndex, {
                                    xLabel: s ? s.getLabelForIndex(u, d) : "",
                                    yLabel: l ? l.getLabelForIndex(u, d) : "",
                                    index: u,
                                    datasetIndex: d,
                                    x: o._model.x,
                                    y: o._model.y
                                }));
                                h.filter && (k = k.filter(function(t) {
                                    return h.filter(t, m)
                                })), h.itemSort && (k = k.sort(function(t, e) {
                                    return h.itemSort(t, e, m)
                                })), e.each(k, function(t) {
                                    w.push(h.callbacks.labelColor.call(c, t, c._chart))
                                }), p.title = c.getTitle(k, m), p.beforeBody = c.getBeforeBody(k, m), p.body = c.getBody(k, m), p.afterBody = c.getAfterBody(k, m), p.footer = c.getFooter(k, m), p.x = Math.round(x.x), p.y = Math.round(x.y), p.caretPadding = h.caretPadding, p.labelColors = w, p.dataPoints = k, b = function(t, e, i) {
                                    var n = t.x,
                                        a = t.y,
                                        r = t.caretSize,
                                        o = t.caretPadding,
                                        s = t.cornerRadius,
                                        l = i.xAlign,
                                        u = i.yAlign,
                                        d = r + o,
                                        c = s + o;
                                    return "right" === l ? n -= e.width : "center" === l && (n -= e.width / 2), "top" === u ? a += d : a -= "bottom" === u ? e.height + d : e.height / 2, "center" === u ? "left" === l ? n += d : "right" === l && (n -= d) : "left" === l ? n -= c : "right" === l && (n += c), {
                                        x: n,
                                        y: a
                                    }
                                }(p, y = function(t, i) {
                                    var n = t._chart.ctx,
                                        a = 2 * i.yPadding,
                                        r = 0,
                                        o = i.body,
                                        s = o.reduce(function(t, e) {
                                            return t + e.before.length + e.lines.length + e.after.length
                                        }, 0);
                                    s += i.beforeBody.length + i.afterBody.length;
                                    var l = i.title.length,
                                        u = i.footer.length,
                                        d = i.titleFontSize,
                                        c = i.bodyFontSize,
                                        h = i.footerFontSize;
                                    a += l * d, a += l ? (l - 1) * i.titleSpacing : 0, a += l ? i.titleMarginBottom : 0, a += s * c, a += s ? (s - 1) * i.bodySpacing : 0, a += u ? i.footerMarginTop : 0, a += u * h, a += u ? (u - 1) * i.footerSpacing : 0;
                                    var f = 0,
                                        p = function(t) {
                                            r = Math.max(r, n.measureText(t).width + f)
                                        };
                                    return n.font = e.fontString(d, i._titleFontStyle, i._titleFontFamily), e.each(i.title, p), n.font = e.fontString(c, i._bodyFontStyle, i._bodyFontFamily), e.each(i.beforeBody.concat(i.afterBody), p), f = i.displayColors ? c + 2 : 0, e.each(o, function(t) {
                                        e.each(t.before, p), e.each(t.lines, p), e.each(t.after, p)
                                    }), f = 0, n.font = e.fontString(h, i._footerFontStyle, i._footerFontFamily), e.each(i.footer, p), {
                                        width: r += 2 * i.xPadding,
                                        height: a
                                    }
                                }(this, p), v = function(t, e) {
                                    var i, n, a, r, o, s = t._model,
                                        l = t._chart,
                                        u = t._chart.chartArea,
                                        d = "center",
                                        c = "center";
                                    s.y < e.height ? c = "top" : s.y > l.height - e.height && (c = "bottom");
                                    var h = (u.left + u.right) / 2,
                                        f = (u.top + u.bottom) / 2;
                                    "center" === c ? (i = function(t) {
                                        return t <= h
                                    }, n = function(t) {
                                        return t > h
                                    }) : (i = function(t) {
                                        return t <= e.width / 2
                                    }, n = function(t) {
                                        return t >= l.width - e.width / 2
                                    }), a = function(t) {
                                        return t + e.width > l.width
                                    }, r = function(t) {
                                        return t - e.width < 0
                                    }, o = function(t) {
                                        return t <= f ? "top" : "bottom"
                                    }, i(s.x) ? (d = "left", a(s.x) && (d = "center", c = o(s.y))) : n(s.x) && (d = "right", r(s.x) && (d = "center", c = o(s.y)));
                                    var p = t._options;
                                    return {
                                        xAlign: p.xAlign ? p.xAlign : d,
                                        yAlign: p.yAlign ? p.yAlign : c
                                    }
                                }(this, y))
                            } else p.opacity = 0;
                            return p.xAlign = v.xAlign, p.yAlign = v.yAlign, p.x = b.x, p.y = b.y, p.width = y.width, p.height = y.height, p.caretX = x.x, p.caretY = x.y, c._model = p, i && h.custom && h.custom.call(c, p), c
                        },
                        drawCaret: function(t, e) {
                            var i = this._chart.ctx,
                                n = this._view,
                                a = this.getCaretPosition(t, e, n);
                            i.lineTo(a.x1, a.y1), i.lineTo(a.x2, a.y2), i.lineTo(a.x3, a.y3)
                        },
                        getCaretPosition: function(t, e, i) {
                            var n, a, r, o, s, l, u = i.caretSize,
                                d = i.cornerRadius,
                                c = i.xAlign,
                                h = i.yAlign,
                                f = t.x,
                                p = t.y,
                                g = e.width,
                                m = e.height;
                            if ("center" === h) s = p + m / 2, "left" === c ? (a = (n = f) - u, r = n, o = s + u, l = s - u) : (a = (n = f + g) + u, r = n, o = s - u, l = s + u);
                            else if ("left" === c ? (n = (a = f + d + u) - u, r = a + u) : "right" === c ? (n = (a = f + g - d - u) - u, r = a + u) : (n = (a = f + g / 2) - u, r = a + u), "top" === h) s = (o = p) - u, l = o;
                            else {
                                s = (o = p + m) + u, l = o;
                                var v = r;
                                r = n, n = v
                            }
                            return {
                                x1: n,
                                x2: a,
                                x3: r,
                                y1: o,
                                y2: s,
                                y3: l
                            }
                        },
                        drawTitle: function(t, n, a, r) {
                            var o = n.title;
                            if (o.length) {
                                a.textAlign = n._titleAlign, a.textBaseline = "top";
                                var s, l, u = n.titleFontSize,
                                    d = n.titleSpacing;
                                for (a.fillStyle = i(n.titleFontColor, r), a.font = e.fontString(u, n._titleFontStyle, n._titleFontFamily), s = 0, l = o.length; s < l; ++s) a.fillText(o[s], t.x, t.y), t.y += u + d, s + 1 === o.length && (t.y += n.titleMarginBottom - d)
                            }
                        },
                        drawBody: function(t, n, a, r) {
                            var o = n.bodyFontSize,
                                s = n.bodySpacing,
                                l = n.body;
                            a.textAlign = n._bodyAlign, a.textBaseline = "top";
                            var u = i(n.bodyFontColor, r);
                            a.fillStyle = u, a.font = e.fontString(o, n._bodyFontStyle, n._bodyFontFamily);
                            var d = 0,
                                c = function(e) {
                                    a.fillText(e, t.x + d, t.y), t.y += o + s
                                };
                            e.each(n.beforeBody, c);
                            var h = n.displayColors;
                            d = h ? o + 2 : 0, e.each(l, function(s, l) {
                                e.each(s.before, c), e.each(s.lines, function(e) {
                                    h && (a.fillStyle = i(n.legendColorBackground, r), a.fillRect(t.x, t.y, o, o), a.strokeStyle = i(n.labelColors[l].borderColor, r), a.strokeRect(t.x, t.y, o, o), a.fillStyle = i(n.labelColors[l].backgroundColor, r), a.fillRect(t.x + 1, t.y + 1, o - 2, o - 2), a.fillStyle = u), c(e)
                                }), e.each(s.after, c)
                            }), d = 0, e.each(n.afterBody, c), t.y -= s
                        },
                        drawFooter: function(t, n, a, r) {
                            var o = n.footer;
                            o.length && (t.y += n.footerMarginTop, a.textAlign = n._footerAlign, a.textBaseline = "top", a.fillStyle = i(n.footerFontColor, r), a.font = e.fontString(n.footerFontSize, n._footerFontStyle, n._footerFontFamily), e.each(o, function(e) {
                                a.fillText(e, t.x, t.y), t.y += n.footerFontSize + n.footerSpacing
                            }))
                        },
                        drawBackground: function(t, e, n, a, r) {
                            n.fillStyle = i(e.backgroundColor, r), n.strokeStyle = i(e.borderColor, r), n.lineWidth = e.borderWidth;
                            var o = e.xAlign,
                                s = e.yAlign,
                                l = t.x,
                                u = t.y,
                                d = a.width,
                                c = a.height,
                                h = e.cornerRadius;
                            n.beginPath(), n.moveTo(l + h, u), "top" === s && this.drawCaret(t, a), n.lineTo(l + d - h, u), n.quadraticCurveTo(l + d, u, l + d, u + h), "center" === s && "right" === o && this.drawCaret(t, a), n.lineTo(l + d, u + c - h), n.quadraticCurveTo(l + d, u + c, l + d - h, u + c), "bottom" === s && this.drawCaret(t, a), n.lineTo(l + h, u + c), n.quadraticCurveTo(l, u + c, l, u + c - h), "center" === s && "left" === o && this.drawCaret(t, a), n.lineTo(l, u + h), n.quadraticCurveTo(l, u, l + h, u), n.closePath(), n.fill(), e.borderWidth > 0 && n.stroke()
                        },
                        draw: function() {
                            var t = this._chart.ctx,
                                e = this._view;
                            if (0 !== e.opacity) {
                                var i = {
                                        width: e.width,
                                        height: e.height
                                    },
                                    n = {
                                        x: e.x,
                                        y: e.y
                                    },
                                    a = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                                    r = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                                this._options.enabled && r && (this.drawBackground(n, e, t, i, a), n.x += e.xPadding, n.y += e.yPadding, this.drawTitle(n, e, t, a), this.drawBody(n, e, t, a), this.drawFooter(n, e, t, a))
                            }
                        },
                        handleEvent: function(t) {
                            var i = this,
                                n = i._options,
                                a = !1;
                            if (i._lastActive = i._lastActive || [], "mouseout" === t.type ? i._active = [] : i._active = i._chart.getElementsAtEventForMode(t, n.mode, n), !(a = !e.arrayEquals(i._active, i._lastActive))) return !1;
                            if (i._lastActive = i._active, n.enabled || n.custom) {
                                i._eventPosition = {
                                    x: t.x,
                                    y: t.y
                                };
                                var r = i._model;
                                i.update(!0), i.pivot(), a |= r.x !== i._model.x || r.y !== i._model.y
                            }
                            return a
                        }
                    }), t.Tooltip.positioners = {
                        average: function(t) {
                            if (!t.length) return !1;
                            var e, i, n = 0,
                                a = 0,
                                r = 0;
                            for (e = 0, i = t.length; e < i; ++e) {
                                var o = t[e];
                                if (o && o.hasValue()) {
                                    var s = o.tooltipPosition();
                                    n += s.x, a += s.y, ++r
                                }
                            }
                            return {
                                x: Math.round(n / r),
                                y: Math.round(a / r)
                            }
                        },
                        nearest: function(t, i) {
                            var n, a, r, o = i.x,
                                s = i.y,
                                l = Number.POSITIVE_INFINITY;
                            for (a = 0, r = t.length; a < r; ++a) {
                                var u = t[a];
                                if (u && u.hasValue()) {
                                    var d = u.getCenterPoint(),
                                        c = e.distanceBetweenPoints(i, d);
                                    c < l && (l = c, n = u)
                                }
                            }
                            if (n) {
                                var h = n.tooltipPosition();
                                o = h.x, s = h.y
                            }
                            return {
                                x: o,
                                y: s
                            }
                        }
                    }
                }
            }, {}],
            35: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    var e = t.helpers,
                        i = t.defaults.global;
                    i.elements.arc = {
                        backgroundColor: i.defaultColor,
                        borderColor: "#fff",
                        borderWidth: 2
                    }, t.elements.Arc = t.Element.extend({
                        inLabelRange: function(t) {
                            var e = this._view;
                            return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
                        },
                        inRange: function(t, i) {
                            var n = this._view;
                            if (n) {
                                for (var a = e.getAngleFromPoint(n, {
                                        x: t,
                                        y: i
                                    }), r = a.angle, o = a.distance, s = n.startAngle, l = n.endAngle; l < s;) l += 2 * Math.PI;
                                for (; r > l;) r -= 2 * Math.PI;
                                for (; r < s;) r += 2 * Math.PI;
                                var u = r >= s && r <= l,
                                    d = o >= n.innerRadius && o <= n.outerRadius;
                                return u && d
                            }
                            return !1
                        },
                        getCenterPoint: function() {
                            var t = this._view,
                                e = (t.startAngle + t.endAngle) / 2,
                                i = (t.innerRadius + t.outerRadius) / 2;
                            return {
                                x: t.x + Math.cos(e) * i,
                                y: t.y + Math.sin(e) * i
                            }
                        },
                        getArea: function() {
                            var t = this._view;
                            return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
                        },
                        tooltipPosition: function() {
                            var t = this._view,
                                e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                                i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                            return {
                                x: t.x + Math.cos(e) * i,
                                y: t.y + Math.sin(e) * i
                            }
                        },
                        draw: function() {
                            var t = this._chart.ctx,
                                e = this._view,
                                i = e.startAngle,
                                n = e.endAngle;
                            t.beginPath(), t.arc(e.x, e.y, e.outerRadius, i, n), t.arc(e.x, e.y, e.innerRadius, n, i, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
                        }
                    })
                }
            }, {}],
            36: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    var e = t.helpers,
                        i = t.defaults.global;
                    t.defaults.global.elements.line = {
                        tension: .4,
                        backgroundColor: i.defaultColor,
                        borderWidth: 3,
                        borderColor: i.defaultColor,
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0,
                        borderJoinStyle: "miter",
                        capBezierPoints: !0,
                        fill: !0
                    }, t.elements.Line = t.Element.extend({
                        draw: function() {
                            var t, n, a, r, o = this._view,
                                s = this._chart.ctx,
                                l = o.spanGaps,
                                u = this._children.slice(),
                                d = i.elements.line,
                                c = -1;
                            for (this._loop && u.length && u.push(u[0]), s.save(), s.lineCap = o.borderCapStyle || d.borderCapStyle, s.setLineDash && s.setLineDash(o.borderDash || d.borderDash), s.lineDashOffset = o.borderDashOffset || d.borderDashOffset, s.lineJoin = o.borderJoinStyle || d.borderJoinStyle, s.lineWidth = o.borderWidth || d.borderWidth, s.strokeStyle = o.borderColor || i.defaultColor, s.beginPath(), c = -1, t = 0; t < u.length; ++t) n = u[t], a = e.previousItem(u, t), r = n._view, 0 === t ? r.skip || (s.moveTo(r.x, r.y), c = t) : (a = -1 === c ? a : u[c], r.skip || (c !== t - 1 && !l || -1 === c ? s.moveTo(r.x, r.y) : e.canvas.lineTo(s, a._view, n._view), c = t));
                            s.stroke(), s.restore()
                        }
                    })
                }
            }, {}],
            37: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    var e = t.helpers,
                        i = t.defaults.global,
                        n = i.defaultColor;

                    function a(t) {
                        var e = this._view;
                        return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hitRadius, 2)
                    }
                    i.elements.point = {
                        radius: 3,
                        pointStyle: "circle",
                        backgroundColor: n,
                        borderWidth: 1,
                        borderColor: n,
                        hitRadius: 1,
                        hoverRadius: 4,
                        hoverBorderWidth: 1
                    }, t.elements.Point = t.Element.extend({
                        inRange: function(t, e) {
                            var i = this._view;
                            return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2)
                        },
                        inLabelRange: a,
                        inXRange: a,
                        inYRange: function(t) {
                            var e = this._view;
                            return !!e && Math.pow(t - e.y, 2) < Math.pow(e.radius + e.hitRadius, 2)
                        },
                        getCenterPoint: function() {
                            var t = this._view;
                            return {
                                x: t.x,
                                y: t.y
                            }
                        },
                        getArea: function() {
                            return Math.PI * Math.pow(this._view.radius, 2)
                        },
                        tooltipPosition: function() {
                            var t = this._view;
                            return {
                                x: t.x,
                                y: t.y,
                                padding: t.radius + t.borderWidth
                            }
                        },
                        draw: function(a) {
                            var r = this._view,
                                o = this._model,
                                s = this._chart.ctx,
                                l = r.pointStyle,
                                u = r.radius,
                                d = r.x,
                                c = r.y,
                                h = t.helpers.color,
                                f = 0;
                            r.skip || (s.strokeStyle = r.borderColor || n, s.lineWidth = e.getValueOrDefault(r.borderWidth, i.elements.point.borderWidth), s.fillStyle = r.backgroundColor || n, void 0 !== a && (o.x < a.left || 1.01 * a.right < o.x || o.y < a.top || 1.01 * a.bottom < o.y) && (o.x < a.left ? f = (d - o.x) / (a.left - o.x) : 1.01 * a.right < o.x ? f = (o.x - d) / (o.x - a.right) : o.y < a.top ? f = (c - o.y) / (a.top - o.y) : 1.01 * a.bottom < o.y && (f = (o.y - c) / (o.y - a.bottom)), f = Math.round(100 * f) / 100, s.strokeStyle = h(s.strokeStyle).alpha(f).rgbString(), s.fillStyle = h(s.fillStyle).alpha(f).rgbString()), t.canvasHelpers.drawPoint(s, l, u, d, c))
                        }
                    })
                }
            }, {}],
            38: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    var e = t.defaults.global;

                    function i(t) {
                        return void 0 !== t._view.width
                    }

                    function n(t) {
                        var e, n, a, r, o = t._view;
                        if (i(t)) {
                            var s = o.width / 2;
                            e = o.x - s, n = o.x + s, a = Math.min(o.y, o.base), r = Math.max(o.y, o.base)
                        } else {
                            var l = o.height / 2;
                            e = Math.min(o.x, o.base), n = Math.max(o.x, o.base), a = o.y - l, r = o.y + l
                        }
                        return {
                            left: e,
                            top: a,
                            right: n,
                            bottom: r
                        }
                    }
                    e.elements.rectangle = {
                        backgroundColor: e.defaultColor,
                        borderWidth: 0,
                        borderColor: e.defaultColor,
                        borderSkipped: "bottom"
                    }, t.elements.Rectangle = t.Element.extend({
                        draw: function() {
                            var t, e, i, n, a, r, o, s = this._chart.ctx,
                                l = this._view,
                                u = l.borderWidth;
                            if (l.horizontal ? (t = l.base, e = l.x, i = l.y - l.height / 2, n = l.y + l.height / 2, a = e > t ? 1 : -1, r = 1, o = l.borderSkipped || "left") : (t = l.x - l.width / 2, e = l.x + l.width / 2, i = l.y, a = 1, r = (n = l.base) > i ? 1 : -1, o = l.borderSkipped || "bottom"), u) {
                                var d = Math.min(Math.abs(t - e), Math.abs(i - n)),
                                    c = (u = u > d ? d : u) / 2,
                                    h = t + ("left" !== o ? c * a : 0),
                                    f = e + ("right" !== o ? -c * a : 0),
                                    p = i + ("top" !== o ? c * r : 0),
                                    g = n + ("bottom" !== o ? -c * r : 0);
                                h !== f && (i = p, n = g), p !== g && (t = h, e = f)
                            }
                            s.beginPath(), s.fillStyle = l.backgroundColor, s.strokeStyle = l.borderColor, s.lineWidth = u;
                            var m = [
                                    [t, n],
                                    [t, i],
                                    [e, i],
                                    [e, n]
                                ],
                                v = ["bottom", "left", "top", "right"].indexOf(o, 0);

                            function b(t) {
                                return m[(v + t) % 4]
                            } - 1 === v && (v = 0);
                            var y = b(0);
                            s.moveTo(y[0], y[1]);
                            for (var x = 1; x < 4; x++) y = b(x), s.lineTo(y[0], y[1]);
                            s.fill(), u && s.stroke()
                        },
                        height: function() {
                            var t = this._view;
                            return t.base - t.y
                        },
                        inRange: function(t, e) {
                            var i = !1;
                            if (this._view) {
                                var a = n(this);
                                i = t >= a.left && t <= a.right && e >= a.top && e <= a.bottom
                            }
                            return i
                        },
                        inLabelRange: function(t, e) {
                            if (!this._view) return !1;
                            var a = n(this);
                            return i(this) ? t >= a.left && t <= a.right : e >= a.top && e <= a.bottom
                        },
                        inXRange: function(t) {
                            var e = n(this);
                            return t >= e.left && t <= e.right
                        },
                        inYRange: function(t) {
                            var e = n(this);
                            return t >= e.top && t <= e.bottom
                        },
                        getCenterPoint: function() {
                            var t, e, n = this._view;
                            return i(this) ? (t = n.x, e = (n.y + n.base) / 2) : (t = (n.x + n.base) / 2, e = n.y), {
                                x: t,
                                y: e
                            }
                        },
                        getArea: function() {
                            var t = this._view;
                            return t.width * Math.abs(t.y - t.base)
                        },
                        tooltipPosition: function() {
                            var t = this._view;
                            return {
                                x: t.x,
                                y: t.y
                            }
                        }
                    })
                }
            }, {}],
            39: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    var e = t.helpers,
                        i = {
                            touchstart: "mousedown",
                            touchmove: "mousemove",
                            touchend: "mouseup",
                            pointerenter: "mouseenter",
                            pointerdown: "mousedown",
                            pointermove: "mousemove",
                            pointerup: "mouseup",
                            pointerleave: "mouseout",
                            pointerout: "mouseout"
                        };

                    function n(t, i) {
                        var n = e.getStyle(t, i),
                            a = n && n.match(/^(\d+)(\.\d+)?px$/);
                        return a ? Number(a[1]) : void 0
                    }

                    function a(t, e, i, n, a) {
                        return {
                            type: t,
                            chart: e,
                            native: a || null,
                            x: void 0 !== i ? i : null,
                            y: void 0 !== n ? n : null
                        }
                    }

                    function r(t, i, n) {
                        var r, o, s = t._chartjs = {
                            ticking: !1
                        };
                        s.resizer = (r = function() {
                            s.ticking || (s.ticking = !0, e.requestAnimFrame.call(window, function() {
                                if (s.resizer) return s.ticking = !1, i(a("resize", n))
                            }))
                        }, (o = document.createElement("iframe")).className = "chartjs-hidden-iframe", o.style.cssText = "display:block;overflow:hidden;border:0;margin:0;top:0;left:0;bottom:0;right:0;height:100%;width:100%;position:absolute;pointer-events:none;z-index:-1;", o.tabIndex = -1, e.addEvent(o, "load", function() {
                            e.addEvent(o.contentWindow || o, "resize", r), r()
                        }), o), t.insertBefore(s.resizer, t.firstChild)
                    }
                    return {
                        acquireContext: function(t, e) {
                            "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
                            var i = t && t.getContext && t.getContext("2d");
                            return i && i.canvas === t ? (function(t, e) {
                                var i = t.style,
                                    a = t.getAttribute("height"),
                                    r = t.getAttribute("width");
                                if (t._chartjs = {
                                        initial: {
                                            height: a,
                                            width: r,
                                            style: {
                                                display: i.display,
                                                height: i.height,
                                                width: i.width
                                            }
                                        }
                                    }, i.display = i.display || "block", null === r || "" === r) {
                                    var o = n(t, "width");
                                    void 0 !== o && (t.width = o)
                                }
                                if (null === a || "" === a)
                                    if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
                                    else {
                                        var s = n(t, "height");
                                        void 0 !== o && (t.height = s)
                                    }
                            }(t, e), i) : null
                        },
                        releaseContext: function(t) {
                            var i = t.canvas;
                            if (i._chartjs) {
                                var n = i._chartjs.initial;
                                ["height", "width"].forEach(function(t) {
                                    var e = n[t];
                                    void 0 === e || null === e ? i.removeAttribute(t) : i.setAttribute(t, e)
                                }), e.each(n.style || {}, function(t, e) {
                                    i.style[e] = t
                                }), i.width = i.width, delete i._chartjs
                            }
                        },
                        addEventListener: function(t, n, o) {
                            var s = t.canvas;
                            if ("resize" !== n) {
                                var l = o._chartjs || (o._chartjs = {}),
                                    u = (l.proxies || (l.proxies = {}))[t.id + "_" + n] = function(n) {
                                        o(function(t, n) {
                                            var r = i[t.type] || t.type,
                                                o = e.getRelativePosition(t, n);
                                            return a(r, n, o.x, o.y, t)
                                        }(n, t))
                                    };
                                e.addEvent(s, n, u)
                            } else r(s.parentNode, o, t)
                        },
                        removeEventListener: function(t, i, n) {
                            var a = t.canvas;
                            if ("resize" !== i) {
                                var r = ((n._chartjs || {}).proxies || {})[t.id + "_" + i];
                                r && e.removeEvent(a, i, r)
                            } else ! function(t) {
                                if (t && t._chartjs) {
                                    var e = t._chartjs.resizer;
                                    e && (e.parentNode.removeChild(e), t._chartjs.resizer = null), delete t._chartjs
                                }
                            }(a.parentNode)
                        }
                    }
                }
            }, {}],
            40: [function(t, e, i) {
                "use strict";
                var n = t(39);
                e.exports = function(t) {
                    t.platform = {
                        acquireContext: function() {},
                        releaseContext: function() {},
                        addEventListener: function() {},
                        removeEventListener: function() {}
                    }, t.helpers.extend(t.platform, n(t))
                }
            }, {
                39: 39
            }],
            41: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    t.defaults.global.plugins.filler = {
                        propagate: !0
                    };
                    var e = t.defaults,
                        i = t.helpers,
                        n = {
                            dataset: function(t) {
                                var e = t.fill,
                                    i = t.chart,
                                    n = i.getDatasetMeta(e),
                                    a = n && i.isDatasetVisible(e) && n.dataset._children || [];
                                return a.length ? function(t, e) {
                                    return a[e]._view || null
                                } : null
                            },
                            boundary: function(t) {
                                var e = t.boundary,
                                    i = e ? e.x : null,
                                    n = e ? e.y : null;
                                return function(t) {
                                    return {
                                        x: null === i ? t.x : i,
                                        y: null === n ? t.y : n
                                    }
                                }
                            }
                        };

                    function a(t, e, i) {
                        var n, a = t._model || {},
                            r = a.fill;
                        if (void 0 === r && (r = !!a.backgroundColor), !1 === r || null === r) return !1;
                        if (!0 === r) return "origin";
                        if (n = parseFloat(r, 10), isFinite(n) && Math.floor(n) === n) return "-" !== r[0] && "+" !== r[0] || (n = e + n), !(n === e || n < 0 || n >= i) && n;
                        switch (r) {
                            case "bottom":
                                return "start";
                            case "top":
                                return "end";
                            case "zero":
                                return "origin";
                            case "origin":
                            case "start":
                            case "end":
                                return r;
                            default:
                                return !1
                        }
                    }

                    function r(t) {
                        var e, i = t.el._model || {},
                            n = t.el._scale || {},
                            a = t.fill,
                            r = null;
                        if (isFinite(a)) return null;
                        if ("start" === a ? r = void 0 === i.scaleBottom ? n.bottom : i.scaleBottom : "end" === a ? r = void 0 === i.scaleTop ? n.top : i.scaleTop : void 0 !== i.scaleZero ? r = i.scaleZero : n.getBasePosition ? r = n.getBasePosition() : n.getBasePixel && (r = n.getBasePixel()), void 0 !== r && null !== r) {
                            if (void 0 !== r.x && void 0 !== r.y) return r;
                            if ("number" == typeof r && isFinite(r)) return {
                                x: (e = n.isHorizontal()) ? r : null,
                                y: e ? null : r
                            }
                        }
                        return null
                    }

                    function o(t, e, i) {
                        var n, a = t[e].fill,
                            r = [e];
                        if (!i) return a;
                        for (; !1 !== a && -1 === r.indexOf(a);) {
                            if (!isFinite(a)) return a;
                            if (!(n = t[a])) return !1;
                            if (n.visible) return a;
                            r.push(a), a = n.fill
                        }
                        return !1
                    }

                    function s(t) {
                        var e = t.fill,
                            i = "dataset";
                        return !1 === e ? null : (isFinite(e) || (i = "boundary"), n[i](t))
                    }

                    function l(t) {
                        return t && !t.skip
                    }

                    function u(t, e, n, a, r) {
                        var o;
                        if (a && r) {
                            for (t.moveTo(e[0].x, e[0].y), o = 1; o < a; ++o) i.canvas.lineTo(t, e[o - 1], e[o]);
                            for (t.lineTo(n[r - 1].x, n[r - 1].y), o = r - 1; o > 0; --o) i.canvas.lineTo(t, n[o], n[o - 1], !0)
                        }
                    }
                    return {
                        id: "filler",
                        afterDatasetsUpdate: function(e, i) {
                            var n, l, u, d, c = (e.data.datasets || []).length,
                                h = i.propagate,
                                f = [];
                            for (l = 0; l < c; ++l) d = null, (u = (n = e.getDatasetMeta(l)).dataset) && u._model && u instanceof t.elements.Line && (d = {
                                visible: e.isDatasetVisible(l),
                                fill: a(u, l, c),
                                chart: e,
                                el: u
                            }), n.$filler = d, f.push(d);
                            for (l = 0; l < c; ++l)(d = f[l]) && (d.fill = o(f, l, h), d.boundary = r(d), d.mapper = s(d))
                        },
                        beforeDatasetDraw: function(t, i) {
                            var n = i.meta.$filler;
                            if (n) {
                                var a = n.el,
                                    r = a._view,
                                    o = a._children || [],
                                    s = n.mapper,
                                    d = r.backgroundColor || e.global.defaultColor;
                                s && d && o.length && function(t, e, i, n, a, r) {
                                    var o, s, d, c, h, f, p, g = e.length,
                                        m = n.spanGaps,
                                        v = [],
                                        b = [],
                                        y = 0,
                                        x = 0;
                                    for (t.beginPath(), o = 0, s = g + !!r; o < s; ++o) h = i(c = e[d = o % g]._view, d, n), f = l(c), p = l(h), f && p ? (y = v.push(c), x = b.push(h)) : y && x && (m ? (f && v.push(c), p && b.push(h)) : (u(t, v, b, y, x), y = x = 0, v = [], b = []));
                                    u(t, v, b, y, x), t.closePath(), t.fillStyle = a, t.fill()
                                }(t.ctx, o, s, r, d, a._loop)
                            }
                        }
                    }
                }
            }, {}],
            42: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    var e = t.helpers,
                        i = t.layoutService,
                        n = e.noop;

                    function a(t, e) {
                        return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth
                    }

                    function r(e, n) {
                        var a = new t.Legend({
                            ctx: e.ctx,
                            options: n,
                            chart: e
                        });
                        i.configure(e, a, n), i.addBox(e, a), e.legend = a
                    }
                    return t.defaults.global.legend = {
                        display: !0,
                        position: "top",
                        fullWidth: !0,
                        reverse: !1,
                        weight: 1e3,
                        onClick: function(t, e) {
                            var i = e.datasetIndex,
                                n = this.chart,
                                a = n.getDatasetMeta(i);
                            a.hidden = null === a.hidden ? !n.data.datasets[i].hidden : null, n.update()
                        },
                        onHover: null,
                        labels: {
                            boxWidth: 40,
                            padding: 10,
                            generateLabels: function(t) {
                                var i = t.data;
                                return e.isArray(i.datasets) ? i.datasets.map(function(i, n) {
                                    return {
                                        text: i.label,
                                        fillStyle: e.isArray(i.backgroundColor) ? i.backgroundColor[0] : i.backgroundColor,
                                        hidden: !t.isDatasetVisible(n),
                                        lineCap: i.borderCapStyle,
                                        lineDash: i.borderDash,
                                        lineDashOffset: i.borderDashOffset,
                                        lineJoin: i.borderJoinStyle,
                                        lineWidth: i.borderWidth,
                                        strokeStyle: i.borderColor,
                                        pointStyle: i.pointStyle,
                                        datasetIndex: n
                                    }
                                }, this) : []
                            }
                        }
                    }, t.Legend = t.Element.extend({
                        initialize: function(t) {
                            e.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
                        },
                        beforeUpdate: n,
                        update: function(t, e, i) {
                            var n = this;
                            return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                        },
                        afterUpdate: n,
                        beforeSetDimensions: n,
                        setDimensions: function() {
                            var t = this;
                            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                                width: 0,
                                height: 0
                            }
                        },
                        afterSetDimensions: n,
                        beforeBuildLabels: n,
                        buildLabels: function() {
                            var t = this,
                                e = t.options.labels,
                                i = e.generateLabels.call(t, t.chart);
                            e.filter && (i = i.filter(function(i) {
                                return e.filter(i, t.chart.data)
                            })), t.options.reverse && i.reverse(), t.legendItems = i
                        },
                        afterBuildLabels: n,
                        beforeFit: n,
                        fit: function() {
                            var i = this,
                                n = i.options,
                                r = n.labels,
                                o = n.display,
                                s = i.ctx,
                                l = t.defaults.global,
                                u = e.getValueOrDefault,
                                d = u(r.fontSize, l.defaultFontSize),
                                c = u(r.fontStyle, l.defaultFontStyle),
                                h = u(r.fontFamily, l.defaultFontFamily),
                                f = e.fontString(d, c, h),
                                p = i.legendHitBoxes = [],
                                g = i.minSize,
                                m = i.isHorizontal();
                            if (m ? (g.width = i.maxWidth, g.height = o ? 10 : 0) : (g.width = o ? 10 : 0, g.height = i.maxHeight), o)
                                if (s.font = f, m) {
                                    var v = i.lineWidths = [0],
                                        b = i.legendItems.length ? d + r.padding : 0;
                                    s.textAlign = "left", s.textBaseline = "top", e.each(i.legendItems, function(t, e) {
                                        var n = a(r, d) + d / 2 + s.measureText(t.text).width;
                                        v[v.length - 1] + n + r.padding >= i.width && (b += d + r.padding, v[v.length] = i.left), p[e] = {
                                            left: 0,
                                            top: 0,
                                            width: n,
                                            height: d
                                        }, v[v.length - 1] += n + r.padding
                                    }), g.height += b
                                } else {
                                    var y = r.padding,
                                        x = i.columnWidths = [],
                                        w = r.padding,
                                        k = 0,
                                        S = 0,
                                        C = d + y;
                                    e.each(i.legendItems, function(t, e) {
                                        var i = a(r, d) + d / 2 + s.measureText(t.text).width;
                                        S + C > g.height && (w += k + r.padding, x.push(k), k = 0, S = 0), k = Math.max(k, i), S += C, p[e] = {
                                            left: 0,
                                            top: 0,
                                            width: i,
                                            height: d
                                        }
                                    }), w += k, x.push(k), g.width += w
                                }
                            i.width = g.width, i.height = g.height
                        },
                        afterFit: n,
                        isHorizontal: function() {
                            return "top" === this.options.position || "bottom" === this.options.position
                        },
                        draw: function() {
                            var i = this,
                                n = i.options,
                                r = n.labels,
                                o = t.defaults.global,
                                s = o.elements.line,
                                l = i.width,
                                u = i.lineWidths;
                            if (n.display) {
                                var d, c = i.ctx,
                                    h = e.getValueOrDefault,
                                    f = h(r.fontColor, o.defaultFontColor),
                                    p = h(r.fontSize, o.defaultFontSize),
                                    g = h(r.fontStyle, o.defaultFontStyle),
                                    m = h(r.fontFamily, o.defaultFontFamily),
                                    v = e.fontString(p, g, m);
                                c.textAlign = "left", c.textBaseline = "top", c.lineWidth = .5, c.strokeStyle = f, c.fillStyle = f, c.font = v;
                                var b = a(r, p),
                                    y = i.legendHitBoxes,
                                    x = i.isHorizontal();
                                d = x ? {
                                    x: i.left + (l - u[0]) / 2,
                                    y: i.top + r.padding,
                                    line: 0
                                } : {
                                    x: i.left + r.padding,
                                    y: i.top + r.padding,
                                    line: 0
                                };
                                var w = p + r.padding;
                                e.each(i.legendItems, function(e, a) {
                                    var f = c.measureText(e.text).width,
                                        g = b + p / 2 + f,
                                        m = d.x,
                                        v = d.y;
                                    x ? m + g >= l && (v = d.y += w, d.line++, m = d.x = i.left + (l - u[d.line]) / 2) : v + w > i.bottom && (m = d.x = m + i.columnWidths[d.line] + r.padding, v = d.y = i.top + r.padding, d.line++),
                                        function(e, i, a) {
                                            if (!(isNaN(b) || b <= 0)) {
                                                c.save(), c.fillStyle = h(a.fillStyle, o.defaultColor), c.lineCap = h(a.lineCap, s.borderCapStyle), c.lineDashOffset = h(a.lineDashOffset, s.borderDashOffset), c.lineJoin = h(a.lineJoin, s.borderJoinStyle), c.lineWidth = h(a.lineWidth, s.borderWidth), c.strokeStyle = h(a.strokeStyle, o.defaultColor);
                                                var r = 0 === h(a.lineWidth, s.borderWidth);
                                                if (c.setLineDash && c.setLineDash(h(a.lineDash, s.borderDash)), n.labels && n.labels.usePointStyle) {
                                                    var l = p * Math.SQRT2 / 2,
                                                        u = l / Math.SQRT2,
                                                        d = e + u,
                                                        f = i + u;
                                                    t.canvasHelpers.drawPoint(c, a.pointStyle, l, d, f)
                                                } else r || c.strokeRect(e, i, b, p), c.fillRect(e, i, b, p);
                                                c.restore()
                                            }
                                        }(m, v, e), y[a].left = m, y[a].top = v,
                                        function(t, e, i, n) {
                                            c.fillText(i.text, b + p / 2 + t, e), i.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(b + p / 2 + t, e + p / 2), c.lineTo(b + p / 2 + t + n, e + p / 2), c.stroke())
                                        }(m, v, e, f), x ? d.x += g + r.padding : d.y += w
                                })
                            }
                        },
                        handleEvent: function(t) {
                            var e = this,
                                i = e.options,
                                n = "mouseup" === t.type ? "click" : t.type,
                                a = !1;
                            if ("mousemove" === n) {
                                if (!i.onHover) return
                            } else {
                                if ("click" !== n) return;
                                if (!i.onClick) return
                            }
                            var r = t.x,
                                o = t.y;
                            if (r >= e.left && r <= e.right && o >= e.top && o <= e.bottom)
                                for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
                                    var u = s[l];
                                    if (r >= u.left && r <= u.left + u.width && o >= u.top && o <= u.top + u.height) {
                                        if ("click" === n) {
                                            i.onClick.call(e, t.native, e.legendItems[l]), a = !0;
                                            break
                                        }
                                        if ("mousemove" === n) {
                                            i.onHover.call(e, t.native, e.legendItems[l]), a = !0;
                                            break
                                        }
                                    }
                                }
                            return a
                        }
                    }), {
                        id: "legend",
                        beforeInit: function(t) {
                            var e = t.options.legend;
                            e && r(t, e)
                        },
                        beforeUpdate: function(n) {
                            var a = n.options.legend,
                                o = n.legend;
                            a ? (a = e.configMerge(t.defaults.global.legend, a), o ? (i.configure(n, o, a), o.options = a) : r(n, a)) : o && (i.removeBox(n, o), delete n.legend)
                        },
                        afterEvent: function(t, e) {
                            var i = t.legend;
                            i && i.handleEvent(e)
                        }
                    }
                }
            }, {}],
            43: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    var e = t.helpers,
                        i = t.layoutService,
                        n = e.noop;

                    function a(e, n) {
                        var a = new t.Title({
                            ctx: e.ctx,
                            options: n,
                            chart: e
                        });
                        i.configure(e, a, n), i.addBox(e, a), e.titleBlock = a
                    }
                    return t.defaults.global.title = {
                        display: !1,
                        position: "top",
                        fullWidth: !0,
                        weight: 2e3,
                        fontStyle: "bold",
                        padding: 10,
                        text: ""
                    }, t.Title = t.Element.extend({
                        initialize: function(t) {
                            e.extend(this, t), this.legendHitBoxes = []
                        },
                        beforeUpdate: n,
                        update: function(t, e, i) {
                            var n = this;
                            return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                        },
                        afterUpdate: n,
                        beforeSetDimensions: n,
                        setDimensions: function() {
                            var t = this;
                            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                                width: 0,
                                height: 0
                            }
                        },
                        afterSetDimensions: n,
                        beforeBuildLabels: n,
                        buildLabels: n,
                        afterBuildLabels: n,
                        beforeFit: n,
                        fit: function() {
                            var i = this,
                                n = e.getValueOrDefault,
                                a = i.options,
                                r = t.defaults.global,
                                o = a.display,
                                s = n(a.fontSize, r.defaultFontSize),
                                l = i.minSize;
                            i.isHorizontal() ? (l.width = i.maxWidth, l.height = o ? s + 2 * a.padding : 0) : (l.width = o ? s + 2 * a.padding : 0, l.height = i.maxHeight), i.width = l.width, i.height = l.height
                        },
                        afterFit: n,
                        isHorizontal: function() {
                            var t = this.options.position;
                            return "top" === t || "bottom" === t
                        },
                        draw: function() {
                            var i = this,
                                n = i.ctx,
                                a = e.getValueOrDefault,
                                r = i.options,
                                o = t.defaults.global;
                            if (r.display) {
                                var s, l, u, d = a(r.fontSize, o.defaultFontSize),
                                    c = a(r.fontStyle, o.defaultFontStyle),
                                    h = a(r.fontFamily, o.defaultFontFamily),
                                    f = e.fontString(d, c, h),
                                    p = 0,
                                    g = i.top,
                                    m = i.left,
                                    v = i.bottom,
                                    b = i.right;
                                n.fillStyle = a(r.fontColor, o.defaultFontColor), n.font = f, i.isHorizontal() ? (s = m + (b - m) / 2, l = g + (v - g) / 2, u = b - m) : (s = "left" === r.position ? m + d / 2 : b - d / 2, l = g + (v - g) / 2, u = v - g, p = Math.PI * ("left" === r.position ? -.5 : .5)), n.save(), n.translate(s, l), n.rotate(p), n.textAlign = "center", n.textBaseline = "middle", n.fillText(r.text, 0, 0, u), n.restore()
                            }
                        }
                    }), {
                        id: "title",
                        beforeInit: function(t) {
                            var e = t.options.title;
                            e && a(t, e)
                        },
                        beforeUpdate: function(n) {
                            var r = n.options.title,
                                o = n.titleBlock;
                            r ? (r = e.configMerge(t.defaults.global.title, r), o ? (i.configure(n, o, r), o.options = r) : a(n, r)) : o && (t.layoutService.removeBox(n, o), delete n.titleBlock)
                        }
                    }
                }
            }, {}],
            44: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    var e = t.helpers,
                        i = t.Scale.extend({
                            getLabels: function() {
                                var t = this.chart.data;
                                return (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
                            },
                            determineDataLimits: function() {
                                var t, i = this,
                                    n = i.getLabels();
                                i.minIndex = 0, i.maxIndex = n.length - 1, void 0 !== i.options.ticks.min && (t = e.indexOf(n, i.options.ticks.min), i.minIndex = -1 !== t ? t : i.minIndex), void 0 !== i.options.ticks.max && (t = e.indexOf(n, i.options.ticks.max), i.maxIndex = -1 !== t ? t : i.maxIndex), i.min = n[i.minIndex], i.max = n[i.maxIndex]
                            },
                            buildTicks: function() {
                                var t = this,
                                    e = t.getLabels();
                                t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1)
                            },
                            getLabelForIndex: function(t, e) {
                                var i = this,
                                    n = i.chart.data,
                                    a = i.isHorizontal();
                                return n.yLabels && !a ? i.getRightValue(n.datasets[e].data[t]) : i.ticks[t - i.minIndex]
                            },
                            getPixelForValue: function(t, e, i, n) {
                                var a, r = this,
                                    o = Math.max(r.maxIndex + 1 - r.minIndex - (r.options.gridLines.offsetGridLines ? 0 : 1), 1);
                                if (void 0 !== t && null !== t && (a = r.isHorizontal() ? t.x : t.y), void 0 !== a || void 0 !== t && isNaN(e)) {
                                    var s = r.getLabels();
                                    t = a || t;
                                    var l = s.indexOf(t);
                                    e = -1 !== l ? l : e
                                }
                                if (r.isHorizontal()) {
                                    var u = r.width / o,
                                        d = u * (e - r.minIndex);
                                    return (r.options.gridLines.offsetGridLines && n || r.maxIndex === r.minIndex && n) && (d += u / 2), r.left + Math.round(d)
                                }
                                var c = r.height / o,
                                    h = c * (e - r.minIndex);
                                return r.options.gridLines.offsetGridLines && n && (h += c / 2), r.top + Math.round(h)
                            },
                            getPixelForTick: function(t, e) {
                                return this.getPixelForValue(this.ticks[t], t + this.minIndex, null, e)
                            },
                            getValueForPixel: function(t) {
                                var e = this,
                                    i = Math.max(e.ticks.length - (e.options.gridLines.offsetGridLines ? 0 : 1), 1),
                                    n = e.isHorizontal(),
                                    a = (n ? e.width : e.height) / i;
                                return t -= n ? e.left : e.top, e.options.gridLines.offsetGridLines && (t -= a / 2), t <= 0 ? 0 : Math.round(t / a)
                            },
                            getBasePixel: function() {
                                return this.bottom
                            }
                        });
                    t.scaleService.registerScaleType("category", i, {
                        position: "bottom"
                    })
                }
            }, {}],
            45: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    var e = t.helpers,
                        i = {
                            position: "left",
                            ticks: {
                                callback: t.Ticks.formatters.linear
                            }
                        },
                        n = t.LinearScaleBase.extend({
                            determineDataLimits: function() {
                                var t = this,
                                    i = t.options,
                                    n = t.chart,
                                    a = n.data.datasets,
                                    r = t.isHorizontal();

                                function o(e) {
                                    return r ? e.xAxisID === t.id : e.yAxisID === t.id
                                }
                                t.min = null, t.max = null;
                                var s = i.stacked;
                                if (void 0 === s && e.each(a, function(t, e) {
                                        if (!s) {
                                            var i = n.getDatasetMeta(e);
                                            n.isDatasetVisible(e) && o(i) && void 0 !== i.stack && (s = !0)
                                        }
                                    }), i.stacked || s) {
                                    var l = {};
                                    e.each(a, function(a, r) {
                                        var s = n.getDatasetMeta(r),
                                            u = [s.type, void 0 === i.stacked && void 0 === s.stack ? r : "", s.stack].join(".");
                                        void 0 === l[u] && (l[u] = {
                                            positiveValues: [],
                                            negativeValues: []
                                        });
                                        var d = l[u].positiveValues,
                                            c = l[u].negativeValues;
                                        n.isDatasetVisible(r) && o(s) && e.each(a.data, function(e, n) {
                                            var a = +t.getRightValue(e);
                                            isNaN(a) || s.data[n].hidden || (d[n] = d[n] || 0, c[n] = c[n] || 0, i.relativePoints ? d[n] = 100 : a < 0 ? c[n] += a : d[n] += a)
                                        })
                                    }), e.each(l, function(i) {
                                        var n = i.positiveValues.concat(i.negativeValues),
                                            a = e.min(n),
                                            r = e.max(n);
                                        t.min = null === t.min ? a : Math.min(t.min, a), t.max = null === t.max ? r : Math.max(t.max, r)
                                    })
                                } else e.each(a, function(i, a) {
                                    var r = n.getDatasetMeta(a);
                                    n.isDatasetVisible(a) && o(r) && e.each(i.data, function(e, i) {
                                        var n = +t.getRightValue(e);
                                        isNaN(n) || r.data[i].hidden || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n))
                                    })
                                });
                                t.min = isFinite(t.min) ? t.min : 0, t.max = isFinite(t.max) ? t.max : 1, this.handleTickRangeOptions()
                            },
                            getTickLimit: function() {
                                var i, n = this.options.ticks;
                                if (this.isHorizontal()) i = Math.min(n.maxTicksLimit ? n.maxTicksLimit : 11, Math.ceil(this.width / 50));
                                else {
                                    var a = e.getValueOrDefault(n.fontSize, t.defaults.global.defaultFontSize);
                                    i = Math.min(n.maxTicksLimit ? n.maxTicksLimit : 11, Math.ceil(this.height / (2 * a)))
                                }
                                return i
                            },
                            handleDirectionalChanges: function() {
                                this.isHorizontal() || this.ticks.reverse()
                            },
                            getLabelForIndex: function(t, e) {
                                return +this.getRightValue(this.chart.data.datasets[e].data[t])
                            },
                            getPixelForValue: function(t) {
                                var e, i = this,
                                    n = i.start,
                                    a = +i.getRightValue(t),
                                    r = i.end - n;
                                return i.isHorizontal() ? (e = i.left + i.width / r * (a - n), Math.round(e)) : (e = i.bottom - i.height / r * (a - n), Math.round(e))
                            },
                            getValueForPixel: function(t) {
                                var e = this,
                                    i = e.isHorizontal(),
                                    n = i ? e.width : e.height,
                                    a = (i ? t - e.left : e.bottom - t) / n;
                                return e.start + (e.end - e.start) * a
                            },
                            getPixelForTick: function(t) {
                                return this.getPixelForValue(this.ticksAsNumbers[t])
                            }
                        });
                    t.scaleService.registerScaleType("linear", n, i)
                }
            }, {}],
            46: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    var e = t.helpers,
                        i = e.noop;
                    t.LinearScaleBase = t.Scale.extend({
                        handleTickRangeOptions: function() {
                            var t = this,
                                i = t.options.ticks;
                            if (i.beginAtZero) {
                                var n = e.sign(t.min),
                                    a = e.sign(t.max);
                                n < 0 && a < 0 ? t.max = 0 : n > 0 && a > 0 && (t.min = 0)
                            }
                            void 0 !== i.min ? t.min = i.min : void 0 !== i.suggestedMin && (null === t.min ? t.min = i.suggestedMin : t.min = Math.min(t.min, i.suggestedMin)), void 0 !== i.max ? t.max = i.max : void 0 !== i.suggestedMax && (null === t.max ? t.max = i.suggestedMax : t.max = Math.max(t.max, i.suggestedMax)), t.min === t.max && (t.max++, i.beginAtZero || t.min--)
                        },
                        getTickLimit: i,
                        handleDirectionalChanges: i,
                        buildTicks: function() {
                            var i = this,
                                n = i.options.ticks,
                                a = i.getTickLimit(),
                                r = {
                                    maxTicks: a = Math.max(2, a),
                                    min: n.min,
                                    max: n.max,
                                    stepSize: e.getValueOrDefault(n.fixedStepSize, n.stepSize)
                                },
                                o = i.ticks = t.Ticks.generators.linear(r, i);
                            i.handleDirectionalChanges(), i.max = e.max(o), i.min = e.min(o), n.reverse ? (o.reverse(), i.start = i.max, i.end = i.min) : (i.start = i.min, i.end = i.max)
                        },
                        convertTicksToLabels: function() {
                            var e = this;
                            e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e)
                        }
                    })
                }
            }, {}],
            47: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    var e = t.helpers,
                        i = {
                            position: "left",
                            ticks: {
                                callback: t.Ticks.formatters.logarithmic
                            }
                        },
                        n = t.Scale.extend({
                            determineDataLimits: function() {
                                var t = this,
                                    i = t.options,
                                    n = i.ticks,
                                    a = t.chart,
                                    r = a.data.datasets,
                                    o = e.getValueOrDefault,
                                    s = t.isHorizontal();

                                function l(e) {
                                    return s ? e.xAxisID === t.id : e.yAxisID === t.id
                                }
                                t.min = null, t.max = null, t.minNotZero = null;
                                var u = i.stacked;
                                if (void 0 === u && e.each(r, function(t, e) {
                                        if (!u) {
                                            var i = a.getDatasetMeta(e);
                                            a.isDatasetVisible(e) && l(i) && void 0 !== i.stack && (u = !0)
                                        }
                                    }), i.stacked || u) {
                                    var d = {};
                                    e.each(r, function(n, r) {
                                        var o = a.getDatasetMeta(r),
                                            s = [o.type, void 0 === i.stacked && void 0 === o.stack ? r : "", o.stack].join(".");
                                        a.isDatasetVisible(r) && l(o) && (void 0 === d[s] && (d[s] = []), e.each(n.data, function(e, n) {
                                            var a = d[s],
                                                r = +t.getRightValue(e);
                                            isNaN(r) || o.data[n].hidden || (a[n] = a[n] || 0, i.relativePoints ? a[n] = 100 : a[n] += r)
                                        }))
                                    }), e.each(d, function(i) {
                                        var n = e.min(i),
                                            a = e.max(i);
                                        t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? a : Math.max(t.max, a)
                                    })
                                } else e.each(r, function(i, n) {
                                    var r = a.getDatasetMeta(n);
                                    a.isDatasetVisible(n) && l(r) && e.each(i.data, function(e, i) {
                                        var n = +t.getRightValue(e);
                                        isNaN(n) || r.data[i].hidden || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n), 0 !== n && (null === t.minNotZero || n < t.minNotZero) && (t.minNotZero = n))
                                    })
                                });
                                t.min = o(n.min, t.min), t.max = o(n.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(e.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(e.log10(t.max)) + 1)) : (t.min = 1, t.max = 10))
                            },
                            buildTicks: function() {
                                var i = this,
                                    n = i.options.ticks,
                                    a = {
                                        min: n.min,
                                        max: n.max
                                    },
                                    r = i.ticks = t.Ticks.generators.logarithmic(a, i);
                                i.isHorizontal() || r.reverse(), i.max = e.max(r), i.min = e.min(r), n.reverse ? (r.reverse(), i.start = i.max, i.end = i.min) : (i.start = i.min, i.end = i.max)
                            },
                            convertTicksToLabels: function() {
                                this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this)
                            },
                            getLabelForIndex: function(t, e) {
                                return +this.getRightValue(this.chart.data.datasets[e].data[t])
                            },
                            getPixelForTick: function(t) {
                                return this.getPixelForValue(this.tickValues[t])
                            },
                            getPixelForValue: function(t) {
                                var i, n, a, r = this,
                                    o = r.start,
                                    s = +r.getRightValue(t),
                                    l = r.options.ticks;
                                return r.isHorizontal() ? (a = e.log10(r.end) - e.log10(o), 0 === s ? n = r.left : (i = r.width, n = r.left + i / a * (e.log10(s) - e.log10(o)))) : (i = r.height, 0 !== o || l.reverse ? 0 === r.end && l.reverse ? (a = e.log10(r.start) - e.log10(r.minNotZero), n = s === r.end ? r.top : s === r.minNotZero ? r.top + .02 * i : r.top + .02 * i + .98 * i / a * (e.log10(s) - e.log10(r.minNotZero))) : 0 === s ? n = l.reverse ? r.top : r.bottom : (a = e.log10(r.end) - e.log10(o), i = r.height, n = r.bottom - i / a * (e.log10(s) - e.log10(o))) : (a = e.log10(r.end) - e.log10(r.minNotZero), n = s === o ? r.bottom : s === r.minNotZero ? r.bottom - .02 * i : r.bottom - .02 * i - .98 * i / a * (e.log10(s) - e.log10(r.minNotZero)))), n
                            },
                            getValueForPixel: function(t) {
                                var i, n, a = this,
                                    r = e.log10(a.end) - e.log10(a.start);
                                return a.isHorizontal() ? (n = a.width, i = a.start * Math.pow(10, (t - a.left) * r / n)) : (n = a.height, i = Math.pow(10, (a.bottom - t) * r / n) / a.start), i
                            }
                        });
                    t.scaleService.registerScaleType("logarithmic", n, i)
                }
            }, {}],
            48: [function(t, e, i) {
                "use strict";
                e.exports = function(t) {
                    var e = t.helpers,
                        i = t.defaults.global,
                        n = {
                            display: !0,
                            animate: !0,
                            position: "chartArea",
                            angleLines: {
                                display: !0,
                                color: "rgba(0, 0, 0, 0.1)",
                                lineWidth: 1
                            },
                            gridLines: {
                                circular: !1
                            },
                            ticks: {
                                showLabelBackdrop: !0,
                                backdropColor: "rgba(255,255,255,0.75)",
                                backdropPaddingY: 2,
                                backdropPaddingX: 2,
                                callback: t.Ticks.formatters.linear
                            },
                            pointLabels: {
                                display: !0,
                                fontSize: 10,
                                callback: function(t) {
                                    return t
                                }
                            }
                        };

                    function a(t) {
                        var e = t.options;
                        return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0
                    }

                    function r(t) {
                        var n = t.options.pointLabels,
                            a = e.getValueOrDefault(n.fontSize, i.defaultFontSize),
                            r = e.getValueOrDefault(n.fontStyle, i.defaultFontStyle),
                            o = e.getValueOrDefault(n.fontFamily, i.defaultFontFamily);
                        return {
                            size: a,
                            style: r,
                            family: o,
                            font: e.fontString(a, r, o)
                        }
                    }

                    function o(t, e, i, n, a) {
                        return t === n || t === a ? {
                            start: e - i / 2,
                            end: e + i / 2
                        } : t < n || t > a ? {
                            start: e - i - 5,
                            end: e
                        } : {
                            start: e,
                            end: e + i + 5
                        }
                    }

                    function s(t) {
                        return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
                    }

                    function l(t, i, n, a) {
                        if (e.isArray(i))
                            for (var r = n.y, o = 1.5 * a, s = 0; s < i.length; ++s) t.fillText(i[s], n.x, r), r += o;
                        else t.fillText(i, n.x, n.y)
                    }

                    function u(t, e, i) {
                        90 === t || 270 === t ? i.y -= e.h / 2 : (t > 270 || t < 90) && (i.y -= e.h)
                    }

                    function d(t) {
                        return e.isNumber(t) ? t : 0
                    }
                    var c = t.LinearScaleBase.extend({
                        setDimensions: function() {
                            var t = this,
                                n = t.options,
                                a = n.ticks;
                            t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
                            var r = e.min([t.height, t.width]),
                                o = e.getValueOrDefault(a.fontSize, i.defaultFontSize);
                            t.drawingArea = n.display ? r / 2 - (o / 2 + a.backdropPaddingY) : r / 2
                        },
                        determineDataLimits: function() {
                            var t = this,
                                i = t.chart,
                                n = Number.POSITIVE_INFINITY,
                                a = Number.NEGATIVE_INFINITY;
                            e.each(i.data.datasets, function(r, o) {
                                if (i.isDatasetVisible(o)) {
                                    var s = i.getDatasetMeta(o);
                                    e.each(r.data, function(e, i) {
                                        var r = +t.getRightValue(e);
                                        isNaN(r) || s.data[i].hidden || (n = Math.min(r, n), a = Math.max(r, a))
                                    })
                                }
                            }), t.min = n === Number.POSITIVE_INFINITY ? 0 : n, t.max = a === Number.NEGATIVE_INFINITY ? 0 : a, t.handleTickRangeOptions()
                        },
                        getTickLimit: function() {
                            var t = this.options.ticks,
                                n = e.getValueOrDefault(t.fontSize, i.defaultFontSize);
                            return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * n)))
                        },
                        convertTicksToLabels: function() {
                            var e = this;
                            t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e)
                        },
                        getLabelForIndex: function(t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        },
                        fit: function() {
                            var t, i;
                            this.options.pointLabels.display ? function(t) {
                                var i, n, s, l = r(t),
                                    u = Math.min(t.height / 2, t.width / 2),
                                    d = {
                                        r: t.width,
                                        l: 0,
                                        t: t.height,
                                        b: 0
                                    },
                                    c = {};
                                t.ctx.font = l.font, t._pointLabelSizes = [];
                                var h, f, p, g = a(t);
                                for (i = 0; i < g; i++) {
                                    s = t.getPointPosition(i, u), h = t.ctx, f = l.size, p = t.pointLabels[i] || "", n = e.isArray(p) ? {
                                        w: e.longestText(h, h.font, p),
                                        h: p.length * f + 1.5 * (p.length - 1) * f
                                    } : {
                                        w: h.measureText(p).width,
                                        h: f
                                    }, t._pointLabelSizes[i] = n;
                                    var m = t.getIndexAngle(i),
                                        v = e.toDegrees(m) % 360,
                                        b = o(v, s.x, n.w, 0, 180),
                                        y = o(v, s.y, n.h, 90, 270);
                                    b.start < d.l && (d.l = b.start, c.l = m), b.end > d.r && (d.r = b.end, c.r = m), y.start < d.t && (d.t = y.start, c.t = m), y.end > d.b && (d.b = y.end, c.b = m)
                                }
                                t.setReductions(u, d, c)
                            }(this) : (t = this, i = Math.min(t.height / 2, t.width / 2), t.drawingArea = Math.round(i), t.setCenterPoint(0, 0, 0, 0))
                        },
                        setReductions: function(t, e, i) {
                            var n = e.l / Math.sin(i.l),
                                a = Math.max(e.r - this.width, 0) / Math.sin(i.r),
                                r = -e.t / Math.cos(i.t),
                                o = -Math.max(e.b - this.height, 0) / Math.cos(i.b);
                            n = d(n), a = d(a), r = d(r), o = d(o), this.drawingArea = Math.min(Math.round(t - (n + a) / 2), Math.round(t - (r + o) / 2)), this.setCenterPoint(n, a, r, o)
                        },
                        setCenterPoint: function(t, e, i, n) {
                            var a = this,
                                r = a.width - e - a.drawingArea,
                                o = t + a.drawingArea,
                                s = i + a.drawingArea,
                                l = a.height - n - a.drawingArea;
                            a.xCenter = Math.round((o + r) / 2 + a.left), a.yCenter = Math.round((s + l) / 2 + a.top)
                        },
                        getIndexAngle: function(t) {
                            return t * (2 * Math.PI / a(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
                        },
                        getDistanceFromCenterForValue: function(t) {
                            var e = this;
                            if (null === t) return 0;
                            var i = e.drawingArea / (e.max - e.min);
                            return e.options.reverse ? (e.max - t) * i : (t - e.min) * i
                        },
                        getPointPosition: function(t, e) {
                            var i = this.getIndexAngle(t) - Math.PI / 2;
                            return {
                                x: Math.round(Math.cos(i) * e) + this.xCenter,
                                y: Math.round(Math.sin(i) * e) + this.yCenter
                            }
                        },
                        getPointPositionForValue: function(t, e) {
                            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                        },
                        getBasePosition: function() {
                            var t = this.min,
                                e = this.max;
                            return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0)
                        },
                        draw: function() {
                            var t = this,
                                n = t.options,
                                o = n.gridLines,
                                d = n.ticks,
                                c = e.getValueOrDefault;
                            if (n.display) {
                                var h = t.ctx,
                                    f = c(d.fontSize, i.defaultFontSize),
                                    p = c(d.fontStyle, i.defaultFontStyle),
                                    g = c(d.fontFamily, i.defaultFontFamily),
                                    m = e.fontString(f, p, g);
                                e.each(t.ticks, function(r, s) {
                                    if (s > 0 || n.reverse) {
                                        var l = t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]),
                                            u = t.yCenter - l;
                                        if (o.display && 0 !== s && function(t, i, n, r) {
                                                var o = t.ctx;
                                                if (o.strokeStyle = e.getValueAtIndexOrDefault(i.color, r - 1), o.lineWidth = e.getValueAtIndexOrDefault(i.lineWidth, r - 1), t.options.gridLines.circular) o.beginPath(), o.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI), o.closePath(), o.stroke();
                                                else {
                                                    var s = a(t);
                                                    if (0 === s) return;
                                                    o.beginPath();
                                                    var l = t.getPointPosition(0, n);
                                                    o.moveTo(l.x, l.y);
                                                    for (var u = 1; u < s; u++) l = t.getPointPosition(u, n), o.lineTo(l.x, l.y);
                                                    o.closePath(), o.stroke()
                                                }
                                            }(t, o, l, s), d.display) {
                                            var p = c(d.fontColor, i.defaultFontColor);
                                            if (h.font = m, d.showLabelBackdrop) {
                                                var g = h.measureText(r).width;
                                                h.fillStyle = d.backdropColor, h.fillRect(t.xCenter - g / 2 - d.backdropPaddingX, u - f / 2 - d.backdropPaddingY, g + 2 * d.backdropPaddingX, f + 2 * d.backdropPaddingY)
                                            }
                                            h.textAlign = "center", h.textBaseline = "middle", h.fillStyle = p, h.fillText(r, t.xCenter, u)
                                        }
                                    }
                                }), (n.angleLines.display || n.pointLabels.display) && function(t) {
                                    var n = t.ctx,
                                        o = e.getValueOrDefault,
                                        d = t.options,
                                        c = d.angleLines,
                                        h = d.pointLabels;
                                    n.lineWidth = c.lineWidth, n.strokeStyle = c.color;
                                    var f = t.getDistanceFromCenterForValue(d.reverse ? t.min : t.max),
                                        p = r(t);
                                    n.textBaseline = "top";
                                    for (var g = a(t) - 1; g >= 0; g--) {
                                        if (c.display) {
                                            var m = t.getPointPosition(g, f);
                                            n.beginPath(), n.moveTo(t.xCenter, t.yCenter), n.lineTo(m.x, m.y), n.stroke(), n.closePath()
                                        }
                                        if (h.display) {
                                            var v = t.getPointPosition(g, f + 5),
                                                b = o(h.fontColor, i.defaultFontColor);
                                            n.font = p.font, n.fillStyle = b;
                                            var y = t.getIndexAngle(g),
                                                x = e.toDegrees(y);
                                            n.textAlign = s(x), u(x, t._pointLabelSizes[g], v), l(n, t.pointLabels[g] || "", v, p.size)
                                        }
                                    }
                                }(t)
                            }
                        }
                    });
                    t.scaleService.registerScaleType("radialLinear", c, n)
                }
            }, {}],
            49: [function(t, e, i) {
                "use strict";
                var n = t(1);
                n = "function" == typeof n ? n : window.moment, e.exports = function(t) {
                    var e = t.helpers,
                        i = {
                            millisecond: {
                                size: 1,
                                steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
                            },
                            second: {
                                size: 1e3,
                                steps: [1, 2, 5, 10, 30]
                            },
                            minute: {
                                size: 6e4,
                                steps: [1, 2, 5, 10, 30]
                            },
                            hour: {
                                size: 36e5,
                                steps: [1, 2, 3, 6, 12]
                            },
                            day: {
                                size: 864e5,
                                steps: [1, 2, 5]
                            },
                            week: {
                                size: 6048e5,
                                maxStep: 4
                            },
                            month: {
                                size: 2628e6,
                                maxStep: 3
                            },
                            quarter: {
                                size: 7884e6,
                                maxStep: 4
                            },
                            year: {
                                size: 3154e7,
                                maxStep: !1
                            }
                        };

                    function a(t, e) {
                        var i = t.options.time;
                        if ("string" == typeof i.parser) return n(e, i.parser);
                        if ("function" == typeof i.parser) return i.parser(e);
                        if ("function" == typeof e.getMonth || "number" == typeof e) return n(e);
                        if (e.isValid && e.isValid()) return e;
                        var a = i.format;
                        return "string" != typeof a && a.call ? (console.warn("options.time.format is deprecated and replaced by options.time.parser."), a(e)) : n(e, a)
                    }
                    t.Ticks.generators.time = function(t, e) {
                        var i, a, r = t.isoWeekday;
                        return "week" === t.unit && !1 !== r ? (i = n(e.min).startOf("isoWeek").isoWeekday(r).valueOf(), a = n(e.max).startOf("isoWeek").isoWeekday(r), e.max - a > 0 && a.add(1, "week"), a = a.valueOf()) : (i = n(e.min).startOf(t.unit).valueOf(), a = n(e.max).startOf(t.unit), e.max - a > 0 && a.add(1, t.unit), a = a.valueOf()),
                            function(t, e, i) {
                                var a = [];
                                if (t.maxTicks) {
                                    var r = t.stepSize;
                                    a.push(void 0 !== t.min ? t.min : i.min);
                                    for (var o = n(i.min); o.add(r, t.unit).valueOf() < i.max;) a.push(o.valueOf());
                                    var s = t.max || i.max;
                                    a[a.length - 1] !== s && a.push(s)
                                }
                                return a
                            }(t, 0, {
                                min: i,
                                max: a
                            })
                    };
                    var r = t.Scale.extend({
                        initialize: function() {
                            if (!n) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                            t.Scale.prototype.initialize.call(this)
                        },
                        determineDataLimits: function() {
                            var t, i = this,
                                n = i.options.time,
                                r = Number.MAX_SAFE_INTEGER,
                                o = Number.MIN_SAFE_INTEGER,
                                s = i.chart.data,
                                l = {
                                    labels: [],
                                    datasets: []
                                };
                            e.each(s.labels, function(e, s) {
                                var u = a(i, e);
                                u.isValid() && (n.round && u.startOf(n.round), t = u.valueOf(), r = Math.min(t, r), o = Math.max(t, o), l.labels[s] = t)
                            }), e.each(s.datasets, function(s, u) {
                                var d = [];
                                "object" == typeof s.data[0] && null !== s.data[0] && i.chart.isDatasetVisible(u) ? e.each(s.data, function(e, s) {
                                    var l = a(i, i.getRightValue(e));
                                    l.isValid() && (n.round && l.startOf(n.round), t = l.valueOf(), r = Math.min(t, r), o = Math.max(t, o), d[s] = t)
                                }) : d = l.labels.slice(), l.datasets[u] = d
                            }), i.dataMin = r, i.dataMax = o, i._parsedData = l
                        },
                        buildTicks: function() {
                            var n, r, o = this,
                                s = o.options.time,
                                l = o.dataMin,
                                u = o.dataMax;
                            if (s.min) {
                                var d = a(o, s.min);
                                s.round && d.round(s.round), n = d.valueOf()
                            }
                            s.max && (r = a(o, s.max).valueOf());
                            var c = o.getLabelCapacity(n || l),
                                h = s.unit || function(t, e, n, a) {
                                    for (var r, o = Object.keys(i), s = o.length, l = o.indexOf(t); l < s; l++) {
                                        r = o[l];
                                        var u = i[r],
                                            d = u.steps && u.steps[u.steps.length - 1] || u.maxStep;
                                        if (void 0 === d || Math.ceil((n - e) / (d * u.size)) <= a) break
                                    }
                                    return r
                                }(s.minUnit, n || l, r || u, c);
                            o.displayFormat = s.displayFormats[h];
                            var f = s.stepSize || function(t, e, n, a) {
                                var r = i[n],
                                    o = r.size,
                                    s = Math.ceil((e - t) / o),
                                    l = 1,
                                    u = e - t;
                                if (r.steps)
                                    for (var d = r.steps.length, c = 0; c < d && s > a; c++) l = r.steps[c], s = Math.ceil(u / (o * l));
                                else
                                    for (; s > a && a > 0;) ++l, s = Math.ceil(u / (o * l));
                                return l
                            }(n || l, r || u, h, c);
                            o.ticks = t.Ticks.generators.time({
                                maxTicks: c,
                                min: n,
                                max: r,
                                stepSize: f,
                                unit: h,
                                isoWeekday: s.isoWeekday
                            }, {
                                min: l,
                                max: u
                            }), o.max = e.max(o.ticks), o.min = e.min(o.ticks)
                        },
                        getLabelForIndex: function(t, e) {
                            var i = this,
                                n = i.chart.data.labels && t < i.chart.data.labels.length ? i.chart.data.labels[t] : "",
                                r = i.chart.data.datasets[e].data[t];
                            return null !== r && "object" == typeof r && (n = i.getRightValue(r)), i.options.time.tooltipFormat && (n = a(i, n).format(i.options.time.tooltipFormat)), n
                        },
                        tickFormatFunction: function(t, i, n) {
                            var a = t.format(this.displayFormat),
                                r = this.options.ticks,
                                o = e.getValueOrDefault(r.callback, r.userCallback);
                            return o ? o(a, i, n) : a
                        },
                        convertTicksToLabels: function() {
                            var t = this;
                            t.ticksAsTimestamps = t.ticks, t.ticks = t.ticks.map(function(t) {
                                return n(t)
                            }).map(t.tickFormatFunction, t)
                        },
                        getPixelForOffset: function(t) {
                            var e = this,
                                i = e.max - e.min,
                                n = i ? (t - e.min) / i : 0;
                            if (e.isHorizontal()) {
                                var a = e.width * n;
                                return e.left + Math.round(a)
                            }
                            var r = e.height * n;
                            return e.top + Math.round(r)
                        },
                        getPixelForValue: function(t, e, i) {
                            var n = null;
                            if (void 0 !== e && void 0 !== i && (n = this._parsedData.datasets[i][e]), null === n && (t && t.isValid || (t = a(this, this.getRightValue(t))), t && t.isValid && t.isValid() && (n = t.valueOf())), null !== n) return this.getPixelForOffset(n)
                        },
                        getPixelForTick: function(t) {
                            return this.getPixelForOffset(this.ticksAsTimestamps[t])
                        },
                        getValueForPixel: function(t) {
                            var e = this,
                                i = e.isHorizontal() ? e.width : e.height,
                                a = (t - (e.isHorizontal() ? e.left : e.top)) / i;
                            return n(e.min + a * (e.max - e.min))
                        },
                        getLabelWidth: function(i) {
                            var n = this.options.ticks,
                                a = this.ctx.measureText(i).width,
                                r = Math.cos(e.toRadians(n.maxRotation)),
                                o = Math.sin(e.toRadians(n.maxRotation));
                            return a * r + e.getValueOrDefault(n.fontSize, t.defaults.global.defaultFontSize) * o
                        },
                        getLabelCapacity: function(t) {
                            var e = this;
                            e.displayFormat = e.options.time.displayFormats.millisecond;
                            var i = e.tickFormatFunction(n(t), 0, []),
                                a = e.getLabelWidth(i);
                            return (e.isHorizontal() ? e.width : e.height) / a
                        }
                    });
                    t.scaleService.registerScaleType("time", r, {
                        position: "bottom",
                        time: {
                            parser: !1,
                            format: !1,
                            unit: !1,
                            round: !1,
                            displayFormat: !1,
                            isoWeekday: !1,
                            minUnit: "millisecond",
                            displayFormats: {
                                millisecond: "h:mm:ss.SSS a",
                                second: "h:mm:ss a",
                                minute: "h:mm:ss a",
                                hour: "MMM D, hA",
                                day: "ll",
                                week: "ll",
                                month: "MMM YYYY",
                                quarter: "[Q]Q - YYYY",
                                year: "YYYY"
                            }
                        },
                        ticks: {
                            autoSkip: !1
                        }
                    })
                }
            }, {
                1: 1
            }]
        }, {}, [7])(7)
    }),
    function(t) {
        WOW = function() {
            return {
                init: function() {
                    var e = [],
                        i = 1;

                    function n() {
                        var i = window.innerHeight,
                            n = window.scrollY;
                        t(".wow").each(function() {
                            if ("visible" != t(this).css("visibility") && (i + n - 100 > a(this) && n < a(this) || i + n - 100 > a(this) + t(this).height() && n < a(this) + t(this).height() || i + n == t(document).height() && a(this) + 100 > t(document).height())) {
                                var r = t(this).index(".wow"),
                                    o = t(this).attr("data-wow-delay");
                                if (o) {
                                    o = t(this).attr("data-wow-delay").slice(0, -1);
                                    var s = this;
                                    parseFloat(o);
                                    t(s).addClass("animated"), t(s).css({
                                        visibility: "visible"
                                    }), t(s).css({
                                        "animation-delay": o
                                    }), t(s).css({
                                        "animation-name": e[r]
                                    });
                                    var l = 1e3 * t(this).css("animation-duration").slice(0, -1);
                                    t(this).attr("data-wow-delay") && (l += 1e3 * t(this).attr("data-wow-delay").slice(0, -1));
                                    s = this;
                                    setTimeout(function() {
                                        t(s).removeClass("animated")
                                    }, l)
                                } else {
                                    t(this).addClass("animated"), t(this).css({
                                        visibility: "visible"
                                    }), t(this).css({
                                        "animation-name": e[r]
                                    });
                                    l = 1e3 * t(this).css("animation-duration").slice(0, -1), s = this;
                                    setTimeout(function() {
                                        t(s).removeClass("animated")
                                    }, l)
                                }
                            }
                        })
                    }

                    function a(t) {
                        var e = t.getBoundingClientRect(),
                            i = document.body,
                            n = document.documentElement,
                            a = window.pageYOffset || n.scrollTop || i.scrollTop,
                            r = n.clientTop || i.clientTop || 0,
                            o = e.top + a - r;
                        return Math.round(o)
                    }
                    t(".wow").each(function() {
                        t(this).css({
                            visibility: "hidden"
                        }), e[t(this).index(".wow")] = t(this).css("animation-name"), t(this).css({
                            "animation-name": "none"
                        })
                    }), t(window).scroll(function() {
                        var e, r;
                        i ? (e = window.innerHeight, r = window.scrollY, t(".wow.animated").each(function() {
                            if (e + r - 100 > a(this) && r > a(this) + 100 || e + r - 100 < a(this) && r < a(this) + 100 || a(this) + t(this).height > t(document).height() - 100) t(this).removeClass("animated"), t(this).css({
                                "animation-name": "none"
                            }), t(this).css({
                                visibility: "hidden"
                            });
                            else {
                                var i = 1e3 * t(this).css("animation-duration").slice(0, -1);
                                t(this).attr("data-wow-delay") && (i += 1e3 * t(this).attr("data-wow-delay").slice(0, -1));
                                var n = this;
                                setTimeout(function() {
                                    t(n).removeClass("animated")
                                }, i)
                            }
                        }), n(), i--) : n()
                    }), t(".wow").each(function() {
                        var i = t(this).index(".wow"),
                            n = t(this).attr("data-wow-delay");
                        n ? (n = t(this).attr("data-wow-delay").slice(0, -1), parseFloat(n), t(this).addClass("animated"), t(this).css({
                            visibility: "visible"
                        }), t(this).css({
                            "animation-delay": n + "s"
                        }), t(this).css({
                            "animation-name": e[i]
                        })) : (t(this).addClass("animated"), t(this).css({
                            visibility: "visible"
                        }), t(this).css({
                            "animation-name": e[i]
                        }))
                    })
                }
            }
        }
    }(jQuery);
var OFFSET_TOP = 50;
$(window).scroll(function() {
        $(".navbar").length && ($(".navbar").offset().top > OFFSET_TOP ? $(".scrolling-navbar").addClass("top-nav-collapse") : $(".scrolling-navbar").removeClass("top-nav-collapse"))
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define([], function() {
            return e.apply(t)
        }) : "object" == typeof exports ? module.exports = e.call(t) : t.Waves = e.call(t)
    }("object" == typeof global ? global : this, function() {
        "use strict";
        var t = t || {},
            e = document.querySelectorAll.bind(document),
            i = Object.prototype.toString,
            n = "ontouchstart" in window;

        function a(t) {
            var e = typeof t;
            return "function" === e || "object" === e && !!t
        }

        function r(t) {
            var n, r = i.call(t);
            return "[object String]" === r ? e(t) : a(t) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(r) && t.hasOwnProperty("length") ? t : a(n = t) && n.nodeType > 0 ? [t] : []
        }

        function o(t) {
            var e, i, n = {
                    top: 0,
                    left: 0
                },
                a = t && t.ownerDocument;
            return e = a.documentElement, void 0 !== t.getBoundingClientRect && (n = t.getBoundingClientRect()), i = function(t) {
                return null !== (e = t) && e === e.window ? t : 9 === t.nodeType && t.defaultView;
                var e
            }(a), {
                top: n.top + i.pageYOffset - e.clientTop,
                left: n.left + i.pageXOffset - e.clientLeft
            }
        }

        function s(t) {
            var e = "";
            for (var i in t) t.hasOwnProperty(i) && (e += i + ":" + t[i] + ";");
            return e
        }
        var l = {
                duration: 750,
                delay: 200,
                show: function(t, e, i) {
                    if (2 === t.button) return !1;
                    e = e || this;
                    var n = document.createElement("div");
                    n.className = "waves-ripple waves-rippling", e.appendChild(n);
                    var a = o(e),
                        r = 0,
                        u = 0;
                    "touches" in t && t.touches.length ? (r = t.touches[0].pageY - a.top, u = t.touches[0].pageX - a.left) : (r = t.pageY - a.top, u = t.pageX - a.left), u = u >= 0 ? u : 0, r = r >= 0 ? r : 0;
                    var d = "scale(" + e.clientWidth / 100 * 3 + ")",
                        c = "translate(0,0)";
                    i && (c = "translate(" + i.x + "px, " + i.y + "px)"), n.setAttribute("data-hold", Date.now()), n.setAttribute("data-x", u), n.setAttribute("data-y", r), n.setAttribute("data-scale", d), n.setAttribute("data-translate", c);
                    var h = {
                        top: r + "px",
                        left: u + "px"
                    };
                    n.classList.add("waves-notransition"), n.setAttribute("style", s(h)), n.classList.remove("waves-notransition"), h["-webkit-transform"] = d + " " + c, h["-moz-transform"] = d + " " + c, h["-ms-transform"] = d + " " + c, h["-o-transform"] = d + " " + c, h.transform = d + " " + c, h.opacity = "1";
                    var f = "mousemove" === t.type ? 2500 : l.duration;
                    h["-webkit-transition-duration"] = f + "ms", h["-moz-transition-duration"] = f + "ms", h["-o-transition-duration"] = f + "ms", h["transition-duration"] = f + "ms", n.setAttribute("style", s(h))
                },
                hide: function(t, e) {
                    for (var i = (e = e || this).getElementsByClassName("waves-rippling"), n = 0, a = i.length; n < a; n++) d(t, e, i[n])
                }
            },
            u = {
                input: function(t) {
                    var e = t.parentNode;
                    if ("div" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
                        var i = document.createElement("div");
                        i.className = "waves-input-wrapper", e.replaceChild(i, t), i.appendChild(t);
                        var n = window.getComputedStyle(t, null);
                        n.color, n.backgroundColor
                    }
                },
                img: function(t) {
                    var e = t.parentNode;
                    if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
                        var i = document.createElement("i");
                        e.replaceChild(i, t), i.appendChild(t)
                    }
                }
            };

        function d(t, e, i) {
            if (i) {
                i.classList.remove("waves-rippling");
                var n = i.getAttribute("data-x"),
                    a = i.getAttribute("data-y"),
                    r = i.getAttribute("data-scale"),
                    o = i.getAttribute("data-translate"),
                    u = 350 - (Date.now() - Number(i.getAttribute("data-hold")));
                u < 0 && (u = 0), "mousemove" === t.type && (u = 150);
                var d = "mousemove" === t.type ? 2500 : l.duration;
                setTimeout(function() {
                    var t = {
                        top: a + "px",
                        left: n + "px",
                        opacity: "0",
                        "-webkit-transition-duration": d + "ms",
                        "-moz-transition-duration": d + "ms",
                        "-o-transition-duration": d + "ms",
                        "transition-duration": d + "ms",
                        "-webkit-transform": r + " " + o,
                        "-moz-transform": r + " " + o,
                        "-ms-transform": r + " " + o,
                        "-o-transform": r + " " + o,
                        transform: r + " " + o
                    };
                    i.setAttribute("style", s(t)), setTimeout(function() {
                        try {
                            e.removeChild(i)
                        } catch (t) {
                            return !1
                        }
                    }, d)
                }, u)
            }
        }
        var c = {
            touches: 0,
            allowEvent: function(t) {
                var e = !0;
                return /^(mousedown|mousemove)$/.test(t.type) && c.touches && (e = !1), e
            },
            registerEvent: function(t) {
                var e = t.type;
                "touchstart" === e ? c.touches += 1 : /^(touchend|touchcancel)$/.test(e) && setTimeout(function() {
                    c.touches && (c.touches -= 1)
                }, 500)
            }
        };

        function h(t) {
            var e = function(t) {
                if (!1 === c.allowEvent(t)) return null;
                for (var e = null, i = t.target || t.srcElement; null !== i.parentElement;) {
                    if (i.classList.contains("waves-effect") && !(i instanceof SVGElement)) {
                        e = i;
                        break
                    }
                    i = i.parentElement
                }
                return e
            }(t);
            if (null !== e) {
                if (e.disabled || e.getAttribute("disabled") || e.classList.contains("disabled")) return;
                if (c.registerEvent(t), "touchstart" === t.type && l.delay) {
                    var i = !1,
                        a = setTimeout(function() {
                            a = null, l.show(t, e)
                        }, l.delay),
                        r = function(n) {
                            a && (clearTimeout(a), a = null, l.show(t, e)), i || (i = !0, l.hide(n, e))
                        };
                    e.addEventListener("touchmove", function(t) {
                        a && (clearTimeout(a), a = null), r(t)
                    }, !1), e.addEventListener("touchend", r, !1), e.addEventListener("touchcancel", r, !1)
                } else l.show(t, e), n && (e.addEventListener("touchend", l.hide, !1), e.addEventListener("touchcancel", l.hide, !1)), e.addEventListener("mouseup", l.hide, !1), e.addEventListener("mouseleave", l.hide, !1)
            }
        }
        return t.init = function(t) {
            var e = document.body;
            "duration" in (t = t || {}) && (l.duration = t.duration), "delay" in t && (l.delay = t.delay), n && (e.addEventListener("touchstart", h, !1), e.addEventListener("touchcancel", c.registerEvent, !1), e.addEventListener("touchend", c.registerEvent, !1)), e.addEventListener("mousedown", h, !1)
        }, t.attach = function(t, e) {
            var n, a;
            t = r(t), "[object Array]" === i.call(e) && (e = e.join(" ")), e = e ? " " + e : "";
            for (var o = 0, s = t.length; o < s; o++) a = (n = t[o]).tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(a) && (u[a](n), n = n.parentElement), -1 === n.className.indexOf("waves-effect") && (n.className += " waves-effect" + e)
        }, t.ripple = function(t, e) {
            var i = (t = r(t)).length;
            if ((e = e || {}).wait = e.wait || 0, e.position = e.position || null, i)
                for (var n, a, s, u = {}, d = 0, c = {
                        type: "mousedown",
                        button: 1
                    }, h = function(t, e) {
                        return function() {
                            l.hide(t, e)
                        }
                    }; d < i; d++)
                    if (n = t[d], a = e.position || {
                            x: n.clientWidth / 2,
                            y: n.clientHeight / 2
                        }, s = o(n), u.x = s.left + a.x, u.y = s.top + a.y, c.pageX = u.x, c.pageY = u.y, l.show(c, n), e.wait >= 0 && null !== e.wait) {
                        setTimeout(h({
                            type: "mouseup",
                            button: 1
                        }, n), e.wait)
                    }
        }, t.calm = function(t) {
            for (var e = {
                    type: "mouseup",
                    button: 1
                }, i = 0, n = (t = r(t)).length; i < n; i++) l.hide(e, t[i])
        }, t.displayEffect = function(e) {
            console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), t.init(e)
        }, t
    }), Waves.attach(".btn:not(.btn-flat), .btn-floating", ["waves-light"]), Waves.attach(".btn-flat", ["waves-effect"]), Waves.attach(".view a .mask", ["waves-light"]), Waves.attach(".waves-light", ["waves-light"]), Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .navbar input, .nav-tabs .nav-item:not(.dropdown)", ["waves-light"]), Waves.attach(".pager li a", ["waves-light"]), Waves.attach(".pagination .page-item .page-link", ["waves-effect"]), Waves.init(),
    function(t) {
        t(document).ready(function() {
            var e = ["text", "password", "email", "url", "tel", "number", "search", "search-md"].map(function(t) {
                    return "input[type=" + t + "]"
                }).join(", ") + ", textarea",
                i = function(t) {
                    var e = t.siblings("label, i"),
                        i = t.val().length,
                        n = t.attr("placeholder");
                    e[(i || n ? "add" : "remove") + "Class"]("active")
                },
                n = function(t) {
                    if (t.hasClass("validate")) {
                        var e = t.val(),
                            i = !e.length,
                            n = !t[0].validity.badInput;
                        if (i && n) t.removeClass("valid").removeClass("invalid");
                        else {
                            var a = t.is(":valid"),
                                r = Number(t.attr("length")) || 0;
                            a && (!r || r > e.length) ? t.removeClass("invalid").addClass("valid") : t.removeClass("valid").addClass("invalid")
                        }
                    }
                },
                a = function() {
                    var e = t(void 0);
                    if (e.val().length) {
                        var i = t(".hiddendiv"),
                            n = e.css("font-family"),
                            a = e.css("font-size");
                        a && i.css("font-size", a), n && i.css("font-family", n), "off" === e.attr("wrap") && i.css("overflow-wrap", "normal").css("white-space", "pre"), i.text(e.val() + "\n");
                        var r = i.html().replace(/\n/g, "<br>");
                        i.html(r), i.css("width", e.is(":visible") ? e.width() : t(window).width() / 2), e.css("height", i.height())
                    }
                };
            t(e).each(function(e, n) {
                var a = t(n),
                    r = a.siblings("label, i");
                i(a), n.validity.badInput && r.addClass("active")
            }), t(document).on("focus", e, function(e) {
                t(e.target).siblings("label, i").addClass("active")
            }), t(document).on("blur", e, function(e) {
                var i = t(e.target),
                    a = !i.val(),
                    r = !e.target.validity.badInput,
                    o = void 0 === i.attr("placeholder");
                a && r && o && i.siblings("label, i").removeClass("active"), n(i)
            }), t(document).on("change", e, function(e) {
                var a = t(e.target);
                i(a), n(a)
            }), t("input[autofocus]").siblings("label, i").addClass("active"), t(document).on("reset", function(i) {
                var n = t(i.target);
                n.is("form") && (n.find(e).removeClass("valid").removeClass("invalid").each(function(e, i) {
                    var n = t(i),
                        a = !n.val(),
                        r = !n.attr("placeholder");
                    a && r && n.siblings("label, i").removeClass("active")
                }), n.find("select.initialized").each(function(e, i) {
                    var n = t(i),
                        a = n.siblings("input.select-dropdown"),
                        r = n.children("[selected]").val();
                    n.val(r), a.val(r)
                }))
            }), t(".hiddendiv").first().length || ($hiddenDiv = t('<div class="hiddendiv common"></div>'), t("body").append($hiddenDiv)), t(".materialize-textarea").each(a), t("body").on("keyup keydown", ".materialize-textarea", a)
        })
    }(jQuery), $("body").on("shown.bs.modal", ".modal", function() {
        $(".modal-backdrop").length || ($modal_dialog = $(this).children(".modal-dialog"), $modal_dialog.hasClass("modal-side") && ($(this).addClass("modal-scrolling"), $("body").addClass("scrollable")), $modal_dialog.hasClass("modal-frame") && ($(this).addClass("modal-content-clickable"), $("body").addClass("scrollable")))
    }), $("body").on("hidden.bs.modal", ".modal", function() {
        $("body").removeClass("scrollable")
    });