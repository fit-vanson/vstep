function strlen(e) {
    var t = e + "", n = 0, i = 0;
    if (!this.php_js || !this.php_js.ini || !this.php_js.ini["unicode.semantics"] || "on" !== this.php_js.ini["unicode.semantics"].local_value.toLowerCase()) return e.length;
    var r = function (e, t) {
        var n = e.charCodeAt(t), i = "", r = "";
        if (55296 <= n && n <= 56319) {
            if (e.length <= t + 1) throw"High surrogate without following low surrogate";
            if (56320 > (i = e.charCodeAt(t + 1)) || i > 57343) throw"High surrogate without following low surrogate";
            return e.charAt(t) + e.charAt(t + 1)
        }
        if (56320 <= n && n <= 57343) {
            if (0 === t) throw"Low surrogate without preceding high surrogate";
            if (55296 > (r = e.charCodeAt(t - 1)) || r > 56319) throw"Low surrogate without preceding high surrogate";
            return !1
        }
        return e.charAt(t)
    };
    for (n = 0, i = 0; n < t.length; n++) !1 !== r(t, n) && i++;
    return i
}

function array_diff(e) {
    var t = {}, n = arguments.length, i = "", r = 1, o = "", a = {};
    e:for (i in e) for (r = 1; r < n; r++) {
        for (o in a = arguments[r]) if (a[o] === e[i]) continue e;
        t[i] = e[i]
    }
    return t
}

function strtotime(e, t) {
    var n, i, r, o, a, s, l, u, c, d;
    if (!e) return !1;
    if ((i = (e = e.replace(/^\s+|\s+$/g, "").replace(/\s{2,}/g, " ").replace(/[\t\r\n]/g, "").toLowerCase()).match(/^(\d{1,4})([\-\.\/\:])(\d{1,2})([\-\.\/\:])(\d{1,4})(?:\s(\d{1,2}):(\d{2})?:?(\d{2})?)?(?:\s([A-Z]+)?)?$/)) && i[2] === i[4]) if (i[1] > 1901) switch (i[2]) {
        case"-":
            return !(i[3] > 12 || i[5] > 31) && new Date(i[1], parseInt(i[3], 10) - 1, i[5], i[6] || 0, i[7] || 0, i[8] || 0, i[9] || 0) / 1e3;
        case".":
            return !1;
        case"/":
            return !(i[3] > 12 || i[5] > 31) && new Date(i[1], parseInt(i[3], 10) - 1, i[5], i[6] || 0, i[7] || 0, i[8] || 0, i[9] || 0) / 1e3
    } else if (i[5] > 1901) switch (i[2]) {
        case"-":
        case".":
            return !(i[3] > 12 || i[1] > 31) && new Date(i[5], parseInt(i[3], 10) - 1, i[1], i[6] || 0, i[7] || 0, i[8] || 0, i[9] || 0) / 1e3;
        case"/":
            return !(i[1] > 12 || i[3] > 31) && new Date(i[5], parseInt(i[1], 10) - 1, i[3], i[6] || 0, i[7] || 0, i[8] || 0, i[9] || 0) / 1e3
    } else switch (i[2]) {
        case"-":
            return !(i[3] > 12 || i[5] > 31 || i[1] < 70 && i[1] > 38) && (o = i[1] >= 0 && i[1] <= 38 ? +i[1] + 2e3 : i[1], new Date(o, parseInt(i[3], 10) - 1, i[5], i[6] || 0, i[7] || 0, i[8] || 0, i[9] || 0) / 1e3);
        case".":
            return i[5] >= 70 ? !(i[3] > 12 || i[1] > 31) && new Date(i[5], parseInt(i[3], 10) - 1, i[1], i[6] || 0, i[7] || 0, i[8] || 0, i[9] || 0) / 1e3 : i[5] < 60 && !i[6] && (!(i[1] > 23 || i[3] > 59) && (r = new Date, new Date(r.getFullYear(), r.getMonth(), r.getDate(), i[1] || 0, i[3] || 0, i[5] || 0, i[9] || 0) / 1e3));
        case"/":
            return !(i[1] > 12 || i[3] > 31 || i[5] < 70 && i[5] > 38) && (o = i[5] >= 0 && i[5] <= 38 ? +i[5] + 2e3 : i[5], new Date(o, parseInt(i[1], 10) - 1, i[3], i[6] || 0, i[7] || 0, i[8] || 0, i[9] || 0) / 1e3);
        case":":
            return !(i[1] > 23 || i[3] > 59 || i[5] > 59) && (r = new Date, new Date(r.getFullYear(), r.getMonth(), r.getDate(), i[1] || 0, i[3] || 0, i[5] || 0) / 1e3)
    }
    if ("now" === e) return null === t || isNaN(t) ? (new Date).getTime() / 1e3 | 0 : 0 | t;
    if (!isNaN(n = Date.parse(e))) return n / 1e3 | 0;
    if ((i = e.match(/^([0-9]{4}-[0-9]{2}-[0-9]{2})[ t]([0-9]{2}:[0-9]{2}:[0-9]{2}(\.[0-9]+)?)([\+-][0-9]{2}(:[0-9]{2})?|z)/)) && ("z" == i[4] ? i[4] = "Z" : i[4].match(/^([\+-][0-9]{2})$/) && (i[4] = i[4] + ":00"), !isNaN(n = Date.parse(i[1] + "T" + i[2] + i[4])))) return n / 1e3 | 0;

    function h(e) {
        var t = e.split(" "), n = t[0], i = t[1].substring(0, 3), r = /\d+/.test(n),
            o = ("last" === n ? -1 : 1) * ("ago" === t[2] ? -1 : 1);
        if (r && (o *= parseInt(n, 10)), l.hasOwnProperty(i) && !t[1].match(/^mon(day|\.)?$/i)) return a["set" + l[i]](a["get" + l[i]]() + o);
        if ("wee" === i) return a.setDate(a.getDate() + 7 * o);
        if ("next" === n || "last" === n) !function (e, t, n) {
            var i, r = s[t];
            void 0 !== r && (0 == (i = r - a.getDay()) ? i = 7 * n : i > 0 && "last" === e ? i -= 7 : i < 0 && "next" === e && (i += 7), a.setDate(a.getDate() + i))
        }(n, i, o); else if (!r) return !1;
        return !0
    }

    if (a = t ? new Date(1e3 * t) : new Date, s = {
        sun: 0,
        mon: 1,
        tue: 2,
        wed: 3,
        thu: 4,
        fri: 5,
        sat: 6
    }, l = {
        yea: "FullYear",
        mon: "Month",
        day: "Date",
        hou: "Hours",
        min: "Minutes",
        sec: "Seconds"
    }, "([+-]?\\d+\\s" + (c = "(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)") + "|(last|next)\\s" + c + ")(\\sago)?", !(i = e.match(new RegExp("([+-]?\\d+\\s(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)|(last|next)\\s(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?))(\\sago)?", "gi")))) return !1;
    for (d = 0, u = i.length; d < u; d++) if (!h(i[d])) return !1;
    return a.getTime() / 1e3
}

function is_numeric(e) {
    return ("number" == typeof e || "string" == typeof e && -1 === " \n\r\t\f\v            ​\u2028\u2029　".indexOf(e.slice(-1))) && "" !== e && !isNaN(e)
}

var DateFormatter, laravelValidation;
!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [], i = e.document, r = Object.getPrototypeOf, o = n.slice, a = n.concat, s = n.push, l = n.indexOf, u = {},
        c = u.toString, d = u.hasOwnProperty, h = d.toString, f = h.call(Object), p = {}, m = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        }, g = function (e) {
            return null != e && e === e.window
        }, v = {type: !0, src: !0, noModule: !0};

    function y(e, t, n) {
        var r, o = (t = t || i).createElement("script");
        if (o.text = e, n) for (r in v) n[r] && (o[r] = n[r]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[c.call(e)] || "object" : typeof e
    }

    var _ = function (e, t) {
        return new _.fn.init(e, t)
    }, w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function x(e) {
        var t = !!e && "length" in e && e.length, n = b(e);
        return !m(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    _.fn = _.prototype = {
        jquery: "3.3.1", constructor: _, length: 0, toArray: function () {
            return o.call(this)
        }, get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = _.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return _.each(this, e)
        }, map: function (e) {
            return this.pushStack(_.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(o.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: s, sort: n.sort, splice: n.splice
    }, _.extend = _.fn.extend = function () {
        var e, t, n, i, r, o, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === l && (a = this, s--); s < l; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], a !== (i = e[t]) && (u && i && (_.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && _.isPlainObject(n) ? n : {}, a[t] = _.extend(u, o, i)) : void 0 !== i && (a[t] = i));
        return a
    }, _.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e) || (t = r(e)) && ("function" != typeof (n = d.call(t, "constructor") && t.constructor) || h.call(n) !== f))
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, globalEval: function (e) {
            y(e)
        }, each: function (e, t) {
            var n, i = 0;
            if (x(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(w, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (x(Object(e)) ? _.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : l.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        }, grep: function (e, t, n) {
            for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]);
            return i
        }, map: function (e, t, n) {
            var i, r, o = 0, s = [];
            if (x(e)) for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && s.push(r); else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
            return a.apply([], s)
        }, guid: 1, support: p
    }), "function" == typeof Symbol && (_.fn[Symbol.iterator] = n[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    });
    var D = function (e) {
        var t, n, i, r, o, a, s, l, u, c, d, h, f, p, m, g, v, y, b, _ = "sizzle" + 1 * new Date, w = e.document, x = 0,
            D = 0, T = ae(), C = ae(), k = ae(), E = function (e, t) {
                return e === t && (d = !0), 0
            }, S = {}.hasOwnProperty, A = [], O = A.pop, M = A.push, N = A.push, I = A.slice, L = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                return -1
            },
            j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            F = "[\\x20\\t\\r\\n\\f]", P = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            R = "\\[" + F + "*(" + P + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + F + "*\\]",
            U = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
            Y = new RegExp(F + "+", "g"), H = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
            W = new RegExp("^" + F + "*," + F + "*"), q = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
            V = new RegExp("=" + F + "*([^\\]'\"]*?)" + F + "*\\]", "g"), B = new RegExp(U),
            z = new RegExp("^" + P + "$"), $ = {
                ID: new RegExp("^#(" + P + ")"),
                CLASS: new RegExp("^\\.(" + P + ")"),
                TAG: new RegExp("^(" + P + "|[*])"),
                ATTR: new RegExp("^" + R),
                PSEUDO: new RegExp("^" + U),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + j + ")$", "i"),
                needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
            }, G = /^(?:input|select|textarea|button)$/i, K = /^h\d$/i, X = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /[+~]/,
            J = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig"), ee = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, ie = function () {
                h()
            }, re = ye(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {dir: "parentNode", next: "legend"});
        try {
            N.apply(A = I.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
        } catch (e) {
            N = {
                apply: A.length ? function (e, t) {
                    M.apply(e, I.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];) ;
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, i, r) {
            var o, s, u, c, d, p, v, y = t && t.ownerDocument, x = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return i;
            if (!r && ((t ? t.ownerDocument || t : w) !== f && h(t), t = t || f, m)) {
                if (11 !== x && (d = Q.exec(e))) if (o = d[1]) {
                    if (9 === x) {
                        if (!(u = t.getElementById(o))) return i;
                        if (u.id === o) return i.push(u), i
                    } else if (y && (u = y.getElementById(o)) && b(t, u) && u.id === o) return i.push(u), i
                } else {
                    if (d[2]) return N.apply(i, t.getElementsByTagName(e)), i;
                    if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return N.apply(i, t.getElementsByClassName(o)), i
                }
                if (n.qsa && !k[e + " "] && (!g || !g.test(e))) {
                    if (1 !== x) y = t, v = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = _), s = (p = a(e)).length; s--;) p[s] = "#" + c + " " + ve(p[s]);
                        v = p.join(","), y = Z.test(e) && me(t.parentNode) || t
                    }
                    if (v) try {
                        return N.apply(i, y.querySelectorAll(v)), i
                    } catch (e) {
                    } finally {
                        c === _ && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(H, "$1"), t, i, r)
        }

        function ae() {
            var e = [];
            return function t(n, r) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
            }
        }

        function se(e) {
            return e[_] = !0, e
        }

        function le(e) {
            var t = f.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ue(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
        }

        function ce(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function he(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function fe(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function pe(e) {
            return se(function (t) {
                return t = +t, se(function (n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function me(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        for (t in n = oe.support = {}, o = oe.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, h = oe.setDocument = function (e) {
            var t, r, a = e ? e.ownerDocument || e : w;
            return a !== f && 9 === a.nodeType && a.documentElement ? (p = (f = a).documentElement, m = !o(f), w !== f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ie, !1) : r.attachEvent && r.attachEvent("onunload", ie)), n.attributes = le(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = le(function (e) {
                return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = X.test(f.getElementsByClassName), n.getById = le(function (e) {
                return p.appendChild(e).id = _, !f.getElementsByName || !f.getElementsByName(_).length
            }), n.getById ? (i.filter.ID = function (e) {
                var t = e.replace(J, ee);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, i.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && m) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (i.filter.ID = function (e) {
                var t = e.replace(J, ee);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, i.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && m) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        for (r = t.getElementsByName(e), i = 0; o = r[i++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
            }, v = [], g = [], (n.qsa = X.test(f.querySelectorAll)) && (le(function (e) {
                p.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + F + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + F + "*(?:value|" + j + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || g.push(".#.+[+~]")
            }), le(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = f.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + F + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
            })), (n.matchesSelector = X.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && le(function (e) {
                n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", U)
            }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = X.test(p.compareDocumentPosition), b = t || X.test(p.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, E = t ? function (e, t) {
                if (e === t) return d = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === f || e.ownerDocument === w && b(w, e) ? -1 : t === f || t.ownerDocument === w && b(w, t) ? 1 : c ? L(c, e) - L(c, t) : 0 : 4 & i ? -1 : 1)
            } : function (e, t) {
                if (e === t) return d = !0, 0;
                var n, i = 0, r = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!r || !o) return e === f ? -1 : t === f ? 1 : r ? -1 : o ? 1 : c ? L(c, e) - L(c, t) : 0;
                if (r === o) return ce(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) s.unshift(n);
                for (; a[i] === s[i];) i++;
                return i ? ce(a[i], s[i]) : a[i] === w ? -1 : s[i] === w ? 1 : 0
            }, f) : f
        }, oe.matches = function (e, t) {
            return oe(e, null, null, t)
        }, oe.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== f && h(e), t = t.replace(V, "='$1']"), n.matchesSelector && m && !k[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
                var i = y.call(e, t);
                if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {
            }
            return oe(t, f, null, [e]).length > 0
        }, oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== f && h(e), b(e, t)
        }, oe.attr = function (e, t) {
            (e.ownerDocument || e) !== f && h(e);
            var r = i.attrHandle[t.toLowerCase()],
                o = r && S.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;
            return void 0 !== o ? o : n.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, oe.escape = function (e) {
            return (e + "").replace(te, ne)
        }, oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, oe.uniqueSort = function (e) {
            var t, i = [], r = 0, o = 0;
            if (d = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(E), d) {
                for (; t = e[o++];) t === e[o] && (r = i.push(o));
                for (; r--;) e.splice(i[r], 1)
            }
            return c = null, e
        }, r = oe.getText = function (e) {
            var t, n = "", i = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else for (; t = e[i++];) n += r(t);
            return n
        }, (i = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: $,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(J, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(J, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return $.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && B.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(J, ee).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = T[e + " "];
                    return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && T(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, t, n) {
                    return function (i) {
                        var r = oe.attr(i, e);
                        return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(Y, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                    }
                }, CHILD: function (e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === i && 0 === r ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var u, c, d, h, f, p, m = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(), y = !l && !s, b = !1;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (h = t; h = h[m];) if (s ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                    p = m = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [a ? g.firstChild : g.lastChild], a && y) {
                                for (b = (f = (u = (c = (d = (h = g)[_] || (h[_] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === x && u[1]) && u[2], h = f && g.childNodes[f]; h = ++f && h && h[m] || (b = f = 0) || p.pop();) if (1 === h.nodeType && ++b && h === t) {
                                    c[e] = [x, f, b];
                                    break
                                }
                            } else if (y && (b = f = (u = (c = (d = (h = t)[_] || (h[_] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === x && u[1]), !1 === b) for (; (h = ++f && h && h[m] || (b = f = 0) || p.pop()) && ((s ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((c = (d = h[_] || (h[_] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] = [x, b]), h !== t));) ;
                            return (b -= r) === i || b % i == 0 && b / i >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return r[_] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
                        for (var i, o = r(e, t), a = o.length; a--;) e[i = L(e, o[a])] = !(n[i] = o[a])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: se(function (e) {
                    var t = [], n = [], i = s(e.replace(H, "$1"));
                    return i[_] ? se(function (e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;) (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }), has: se(function (e) {
                    return function (t) {
                        return oe(e, t).length > 0
                    }
                }), contains: se(function (e) {
                    return e = e.replace(J, ee), function (t) {
                        return (t.textContent || t.innerText || r(t)).indexOf(e) > -1
                    }
                }), lang: se(function (e) {
                    return z.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(J, ee).toLowerCase(), function (t) {
                        var n;
                        do {
                            if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === p
                }, focus: function (e) {
                    return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: fe(!1), disabled: fe(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !i.pseudos.empty(e)
                }, header: function (e) {
                    return K.test(e.nodeName)
                }, input: function (e) {
                    return G.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: pe(function () {
                    return [0]
                }), last: pe(function (e, t) {
                    return [t - 1]
                }), eq: pe(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: pe(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: pe(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: pe(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }), gt: pe(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }).pseudos.nth = i.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) i.pseudos[t] = de(t);
        for (t in {submit: !0, reset: !0}) i.pseudos[t] = he(t);

        function ge() {
        }

        function ve(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function ye(e, t, n) {
            var i = t.dir, r = t.next, o = r || i, a = n && "parentNode" === o, s = D++;
            return t.first ? function (t, n, r) {
                for (; t = t[i];) if (1 === t.nodeType || a) return e(t, n, r);
                return !1
            } : function (t, n, l) {
                var u, c, d, h = [x, s];
                if (l) {
                    for (; t = t[i];) if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                } else for (; t = t[i];) if (1 === t.nodeType || a) if (c = (d = t[_] || (t[_] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t; else {
                    if ((u = c[o]) && u[0] === x && u[1] === s) return h[2] = u[2];
                    if (c[o] = h, h[2] = e(t, n, l)) return !0
                }
                return !1
            }
        }

        function be(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var r = e.length; r--;) if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function _e(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++) (o = e[s]) && (n && !n(o, i, r) || (a.push(o), u && t.push(s)));
            return a
        }

        function we(e, t, n, i, r, o) {
            return i && !i[_] && (i = we(i)), r && !r[_] && (r = we(r, o)), se(function (o, a, s, l) {
                var u, c, d, h = [], f = [], p = a.length, m = o || function (e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++) oe(e, t[i], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []), g = !e || !o && t ? m : _e(m, h, e, s, l),
                    v = n ? r || (o ? e : p || i) ? [] : a : g;
                if (n && n(g, v, s, l), i) for (u = _e(v, f), i(u, [], s, l), c = u.length; c--;) (d = u[c]) && (v[f[c]] = !(g[f[c]] = d));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (u = [], c = v.length; c--;) (d = v[c]) && u.push(g[c] = d);
                            r(null, v = [], u, l)
                        }
                        for (c = v.length; c--;) (d = v[c]) && (u = r ? L(o, d) : h[c]) > -1 && (o[u] = !(a[u] = d))
                    }
                } else v = _e(v === a ? v.splice(p, v.length) : v), r ? r(null, a, v, l) : N.apply(a, v)
            })
        }

        function xe(e) {
            for (var t, n, r, o = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], l = a ? 1 : 0, c = ye(function (e) {
                return e === t
            }, s, !0), d = ye(function (e) {
                return L(t, e) > -1
            }, s, !0), h = [function (e, n, i) {
                var r = !a && (i || n !== u) || ((t = n).nodeType ? c(e, n, i) : d(e, n, i));
                return t = null, r
            }]; l < o; l++) if (n = i.relative[e[l].type]) h = [ye(be(h), n)]; else {
                if ((n = i.filter[e[l].type].apply(null, e[l].matches))[_]) {
                    for (r = ++l; r < o && !i.relative[e[r].type]; r++) ;
                    return we(l > 1 && be(h), l > 1 && ve(e.slice(0, l - 1).concat({value: " " === e[l - 2].type ? "*" : ""})).replace(H, "$1"), n, l < r && xe(e.slice(l, r)), r < o && xe(e = e.slice(r)), r < o && ve(e))
                }
                h.push(n)
            }
            return be(h)
        }

        function De(e, t) {
            var n = t.length > 0, r = e.length > 0, o = function (o, a, s, l, c) {
                var d, p, g, v = 0, y = "0", b = o && [], _ = [], w = u, D = o || r && i.find.TAG("*", c),
                    T = x += null == w ? 1 : Math.random() || .1, C = D.length;
                for (c && (u = a === f || a || c); y !== C && null != (d = D[y]); y++) {
                    if (r && d) {
                        for (p = 0, a || d.ownerDocument === f || (h(d), s = !m); g = e[p++];) if (g(d, a || f, s)) {
                            l.push(d);
                            break
                        }
                        c && (x = T)
                    }
                    n && ((d = !g && d) && v--, o && b.push(d))
                }
                if (v += y, n && y !== v) {
                    for (p = 0; g = t[p++];) g(b, _, a, s);
                    if (o) {
                        if (v > 0) for (; y--;) b[y] || _[y] || (_[y] = O.call(l));
                        _ = _e(_)
                    }
                    N.apply(l, _), c && !o && _.length > 0 && v + t.length > 1 && oe.uniqueSort(l)
                }
                return c && (x = T, u = w), b
            };
            return n ? se(o) : o
        }

        return ge.prototype = i.filters = i.pseudos, i.setFilters = new ge, a = oe.tokenize = function (e, t) {
            var n, r, o, a, s, l, u, c = C[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, l = [], u = i.preFilter; s;) {
                for (a in n && !(r = W.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), n = !1, (r = q.exec(s)) && (n = r.shift(), o.push({
                    value: n,
                    type: r[0].replace(H, " ")
                }), s = s.slice(n.length)), i.filter) !(r = $[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: a,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? oe.error(e) : C(e, l).slice(0)
        }, s = oe.compile = function (e, t) {
            var n, i = [], r = [], o = k[e + " "];
            if (!o) {
                for (t || (t = a(e)), n = t.length; n--;) (o = xe(t[n]))[_] ? i.push(o) : r.push(o);
                (o = k(e, De(r, i))).selector = e
            }
            return o
        }, l = oe.select = function (e, t, n, r) {
            var o, l, u, c, d, h = "function" == typeof e && e, f = !r && a(e = h.selector || e);
            if (n = n || [], 1 === f.length) {
                if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && m && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(u.matches[0].replace(J, ee), t) || [])[0])) return n;
                    h && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (o = $.needsContext.test(e) ? 0 : l.length; o-- && (u = l[o], !i.relative[c = u.type]);) if ((d = i.find[c]) && (r = d(u.matches[0].replace(J, ee), Z.test(l[0].type) && me(t.parentNode) || t))) {
                    if (l.splice(o, 1), !(e = r.length && ve(l))) return N.apply(n, r), n;
                    break
                }
            }
            return (h || s(e, f))(r, t, !m, n, !t || Z.test(e) && me(t.parentNode) || t), n
        }, n.sortStable = _.split("").sort(E).join("") === _, n.detectDuplicates = !!d, h(), n.sortDetached = le(function (e) {
            return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
        }), le(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ue("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && le(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ue("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), le(function (e) {
            return null == e.getAttribute("disabled")
        }) || ue(j, function (e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), oe
    }(e);
    _.find = D, _.expr = D.selectors, _.expr[":"] = _.expr.pseudos, _.uniqueSort = _.unique = D.uniqueSort, _.text = D.getText, _.isXMLDoc = D.isXML, _.contains = D.contains, _.escapeSelector = D.escape;
    var T = function (e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (r && _(e).is(n)) break;
            i.push(e)
        }
        return i
    }, C = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }, k = _.expr.match.needsContext;

    function E(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function A(e, t, n) {
        return m(t) ? _.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? _.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? _.grep(e, function (e) {
            return l.call(t, e) > -1 !== n
        }) : _.filter(t, e, n)
    }

    _.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? _.find.matchesSelector(i, e) ? [i] : [] : _.find.matches(e, _.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, _.fn.extend({
        find: function (e) {
            var t, n, i = this.length, r = this;
            if ("string" != typeof e) return this.pushStack(_(e).filter(function () {
                for (t = 0; t < i; t++) if (_.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) _.find(e, r[t], n);
            return i > 1 ? _.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(A(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(A(this, e || [], !0))
        }, is: function (e) {
            return !!A(this, "string" == typeof e && k.test(e) ? _(e) : e || [], !1).length
        }
    });
    var O, M = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (_.fn.init = function (e, t, n) {
        var r, o;
        if (!e) return this;
        if (n = n || O, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : M.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof _ ? t[0] : t, _.merge(this, _.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), S.test(r[1]) && _.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (o = i.getElementById(r[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(_) : _.makeArray(e, this)
    }).prototype = _.fn, O = _(i);
    var N = /^(?:parents|prev(?:Until|All))/, I = {children: !0, contents: !0, next: !0, prev: !0};

    function L(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    _.fn.extend({
        has: function (e) {
            var t = _(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (_.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var n, i = 0, r = this.length, o = [], a = "string" != typeof e && _(e);
            if (!k.test(e)) for (; i < r; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && _.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? _.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? l.call(_(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), _.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return T(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return T(e, "parentNode", n)
        }, next: function (e) {
            return L(e, "nextSibling")
        }, prev: function (e) {
            return L(e, "previousSibling")
        }, nextAll: function (e) {
            return T(e, "nextSibling")
        }, prevAll: function (e) {
            return T(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return T(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return T(e, "previousSibling", n)
        }, siblings: function (e) {
            return C((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return C(e.firstChild)
        }, contents: function (e) {
            return E(e, "iframe") ? e.contentDocument : (E(e, "template") && (e = e.content || e), _.merge([], e.childNodes))
        }
    }, function (e, t) {
        _.fn[e] = function (n, i) {
            var r = _.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = _.filter(i, r)), this.length > 1 && (I[e] || _.uniqueSort(r), N.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var j = /[^\x20\t\r\n\f]+/g;

    function F(e) {
        return e
    }

    function P(e) {
        throw e
    }

    function R(e, t, n, i) {
        var r;
        try {
            e && m(r = e.promise) ? r.call(e).done(t).fail(n) : e && m(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    _.Callbacks = function (e) {
        e = "string" == typeof e ? function (e) {
            var t = {};
            return _.each(e.match(j) || [], function (e, n) {
                t[n] = !0
            }), t
        }(e) : _.extend({}, e);
        var t, n, i, r, o = [], a = [], s = -1, l = function () {
            for (r = r || e.once, i = t = !0; a.length; s = -1) for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
            e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
        }, u = {
            add: function () {
                return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                    _.each(n, function (n, i) {
                        m(i) ? e.unique && u.has(i) || o.push(i) : i && i.length && "string" !== b(i) && t(i)
                    })
                }(arguments), n && !t && l()), this
            }, remove: function () {
                return _.each(arguments, function (e, t) {
                    for (var n; (n = _.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                }), this
            }, has: function (e) {
                return e ? _.inArray(e, o) > -1 : o.length > 0
            }, empty: function () {
                return o && (o = []), this
            }, disable: function () {
                return r = a = [], o = n = "", this
            }, disabled: function () {
                return !o
            }, lock: function () {
                return r = a = [], n || t || (o = n = ""), this
            }, locked: function () {
                return !!r
            }, fireWith: function (e, n) {
                return r || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || l()), this
            }, fire: function () {
                return u.fireWith(this, arguments), this
            }, fired: function () {
                return !!i
            }
        };
        return u
    }, _.extend({
        Deferred: function (t) {
            var n = [["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2], ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]],
                i = "pending", r = {
                    state: function () {
                        return i
                    }, always: function () {
                        return o.done(arguments).fail(arguments), this
                    }, catch: function (e) {
                        return r.then(null, e)
                    }, pipe: function () {
                        var e = arguments;
                        return _.Deferred(function (t) {
                            _.each(n, function (n, i) {
                                var r = m(e[i[4]]) && e[i[4]];
                                o[i[1]](function () {
                                    var e = r && r.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, then: function (t, i, r) {
                        var o = 0;

                        function a(t, n, i, r) {
                            return function () {
                                var s = this, l = arguments, u = function () {
                                    var e, u;
                                    if (!(t < o)) {
                                        if ((e = i.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                        u = e && ("object" == typeof e || "function" == typeof e) && e.then, m(u) ? r ? u.call(e, a(o, n, F, r), a(o, n, P, r)) : (o++, u.call(e, a(o, n, F, r), a(o, n, P, r), a(o, n, F, n.notifyWith))) : (i !== F && (s = void 0, l = [e]), (r || n.resolveWith)(s, l))
                                    }
                                }, c = r ? u : function () {
                                    try {
                                        u()
                                    } catch (e) {
                                        _.Deferred.exceptionHook && _.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (i !== P && (s = void 0, l = [e]), n.rejectWith(s, l))
                                    }
                                };
                                t ? c() : (_.Deferred.getStackHook && (c.stackTrace = _.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }

                        return _.Deferred(function (e) {
                            n[0][3].add(a(0, e, m(r) ? r : F, e.notifyWith)), n[1][3].add(a(0, e, m(t) ? t : F)), n[2][3].add(a(0, e, m(i) ? i : P))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? _.extend(e, r) : r
                    }
                }, o = {};
            return _.each(n, function (e, t) {
                var a = t[2], s = t[5];
                r[t[1]] = a.add, s && a.add(function () {
                    i = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), r.promise(o), t && t.call(o, o), o
        }, when: function (e) {
            var t = arguments.length, n = t, i = Array(n), r = o.call(arguments), a = _.Deferred(), s = function (e) {
                return function (n) {
                    i[e] = this, r[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(i, r)
                }
            };
            if (t <= 1 && (R(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || m(r[n] && r[n].then))) return a.then();
            for (; n--;) R(r[n], s(n), a.reject);
            return a.promise()
        }
    });
    var U = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    _.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && U.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, _.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var Y = _.Deferred();

    function H() {
        i.removeEventListener("DOMContentLoaded", H), e.removeEventListener("load", H), _.ready()
    }

    _.fn.ready = function (e) {
        return Y.then(e).catch(function (e) {
            _.readyException(e)
        }), this
    }, _.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --_.readyWait : _.isReady) || (_.isReady = !0, !0 !== e && --_.readyWait > 0 || Y.resolveWith(i, [_]))
        }
    }), _.ready.then = Y.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(_.ready) : (i.addEventListener("DOMContentLoaded", H), e.addEventListener("load", H));
    var W = function (e, t, n, i, r, o, a) {
        var s = 0, l = e.length, u = null == n;
        if ("object" === b(n)) for (s in r = !0, n) W(e, t, s, n[s], !0, o, a); else if (void 0 !== i && (r = !0, m(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
            return u.call(_(e), n)
        })), t)) for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
    }, q = /^-ms-/, V = /-([a-z])/g;

    function B(e, t) {
        return t.toUpperCase()
    }

    function z(e) {
        return e.replace(q, "ms-").replace(V, B)
    }

    var $ = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = _.expando + G.uid++
    }

    G.uid = 1, G.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[z(t)] = n; else for (i in t) r[z(i)] = t[i];
            return r
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][z(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(z) : (t = z(t)) in i ? [t] : t.match(j) || []).length;
                    for (; n--;) delete i[t[n]]
                }
                (void 0 === t || _.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !_.isEmptyObject(t)
        }
    };
    var K = new G, X = new G, Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Z = /[A-Z]/g;

    function J(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
            try {
                n = function (e) {
                    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Q.test(e) ? JSON.parse(e) : e)
                }(n)
            } catch (e) {
            }
            X.set(e, t, n)
        } else n = void 0;
        return n
    }

    _.extend({
        hasData: function (e) {
            return X.hasData(e) || K.hasData(e)
        }, data: function (e, t, n) {
            return X.access(e, t, n)
        }, removeData: function (e, t) {
            X.remove(e, t)
        }, _data: function (e, t, n) {
            return K.access(e, t, n)
        }, _removeData: function (e, t) {
            K.remove(e, t)
        }
    }), _.fn.extend({
        data: function (e, t) {
            var n, i, r, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = X.get(o), 1 === o.nodeType && !K.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = z(i.slice(5)), J(o, i, r[i]));
                    K.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function () {
                X.set(this, e)
            }) : W(this, function (t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = X.get(o, e))) return n;
                    if (void 0 !== (n = J(o, e))) return n
                } else this.each(function () {
                    X.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                X.remove(this, e)
            })
        }
    }), _.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = K.get(e, t), n && (!i || Array.isArray(n) ? i = K.access(e, t, _.makeArray(n)) : i.push(n)), i || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = _.queue(e, t), i = n.length, r = n.shift(), o = _._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function () {
                _.dequeue(e, t)
            }, o)), !i && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return K.get(e, n) || K.access(e, n, {
                empty: _.Callbacks("once memory").add(function () {
                    K.remove(e, [t + "queue", n])
                })
            })
        }
    }), _.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? _.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = _.queue(this, e, t);
                _._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && _.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                _.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, i = 1, r = _.Deferred(), o = this, a = this.length, s = function () {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (n = K.get(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"], ie = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && _.contains(e.ownerDocument, e) && "none" === _.css(e, "display")
        }, re = function (e, t, n, i) {
            var r, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in r = n.apply(e, i || []), t) e.style[o] = a[o];
            return r
        };

    function oe(e, t, n, i) {
        var r, o, a = 20, s = i ? function () {
                return i.cur()
            } : function () {
                return _.css(e, t, "")
            }, l = s(), u = n && n[3] || (_.cssNumber[t] ? "" : "px"),
            c = (_.cssNumber[t] || "px" !== u && +l) && te.exec(_.css(e, t));
        if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; a--;) _.style(e, t, c + u), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, _.style(e, t, c + u), n = n || []
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }

    var ae = {};

    function se(e) {
        var t, n = e.ownerDocument, i = e.nodeName, r = ae[i];
        return r || (t = n.body.appendChild(n.createElement(i)), r = _.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), ae[i] = r, r)
    }

    function le(e, t) {
        for (var n, i, r = [], o = 0, a = e.length; o < a; o++) (i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = K.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && ie(i) && (r[o] = se(i))) : "none" !== n && (r[o] = "none", K.set(i, "display", n)));
        for (o = 0; o < a; o++) null != r[o] && (e[o].style.display = r[o]);
        return e
    }

    _.fn.extend({
        show: function () {
            return le(this, !0)
        }, hide: function () {
            return le(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ie(this) ? _(this).show() : _(this).hide()
            })
        }
    });
    var ue = /^(?:checkbox|radio)$/i, ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, de = /^$|^module$|\/(?:java|ecma)script/i,
        he = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function fe(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && E(e, t) ? _.merge([e], n) : n
    }

    function pe(e, t) {
        for (var n = 0, i = e.length; n < i; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
    }

    he.optgroup = he.option, he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td;
    var me = /<|&#?\w+;/;

    function ge(e, t, n, i, r) {
        for (var o, a, s, l, u, c, d = t.createDocumentFragment(), h = [], f = 0, p = e.length; f < p; f++) if ((o = e[f]) || 0 === o) if ("object" === b(o)) _.merge(h, o.nodeType ? [o] : o); else if (me.test(o)) {
            for (a = a || d.appendChild(t.createElement("div")), s = (ce.exec(o) || ["", ""])[1].toLowerCase(), l = he[s] || he._default, a.innerHTML = l[1] + _.htmlPrefilter(o) + l[2], c = l[0]; c--;) a = a.lastChild;
            _.merge(h, a.childNodes), (a = d.firstChild).textContent = ""
        } else h.push(t.createTextNode(o));
        for (d.textContent = "", f = 0; o = h[f++];) if (i && _.inArray(o, i) > -1) r && r.push(o); else if (u = _.contains(o.ownerDocument, o), a = fe(d.appendChild(o), "script"), u && pe(a), n) for (c = 0; o = a[c++];) de.test(o.type || "") && n.push(o);
        return d
    }

    !function () {
        var e = i.createDocumentFragment().appendChild(i.createElement("div")), t = i.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), p.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var ve = i.documentElement, ye = /^key/, be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        _e = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function xe() {
        return !1
    }

    function De() {
        try {
            return i.activeElement
        } catch (e) {
        }
    }

    function Te(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (i = i || n, n = void 0), t) Te(e, s, n, i, t[s], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = xe; else if (!r) return e;
        return 1 === o && (a = r, (r = function (e) {
            return _().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = _.guid++)), e.each(function () {
            _.event.add(this, t, r, i, n)
        })
    }

    _.event = {
        global: {}, add: function (e, t, n, i, r) {
            var o, a, s, l, u, c, d, h, f, p, m, g = K.get(e);
            if (g) for (n.handler && (n = (o = n).handler, r = o.selector), r && _.find.matchesSelector(ve, r), n.guid || (n.guid = _.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function (t) {
                return void 0 !== _ && _.event.triggered !== t.type ? _.event.dispatch.apply(e, arguments) : void 0
            }), u = (t = (t || "").match(j) || [""]).length; u--;) f = m = (s = _e.exec(t[u]) || [])[1], p = (s[2] || "").split(".").sort(), f && (d = _.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = _.event.special[f] || {}, c = _.extend({
                type: f,
                origType: m,
                data: i,
                handler: n,
                guid: n.guid,
                selector: r,
                needsContext: r && _.expr.match.needsContext.test(r),
                namespace: p.join(".")
            }, o), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, a) || e.addEventListener && e.addEventListener(f, a)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), _.event.global[f] = !0)
        }, remove: function (e, t, n, i, r) {
            var o, a, s, l, u, c, d, h, f, p, m, g = K.hasData(e) && K.get(e);
            if (g && (l = g.events)) {
                for (u = (t = (t || "").match(j) || [""]).length; u--;) if (f = m = (s = _e.exec(t[u]) || [])[1], p = (s[2] || "").split(".").sort(), f) {
                    for (d = _.event.special[f] || {}, h = l[f = (i ? d.delegateType : d.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = h.length; o--;) c = h[o], !r && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, d.remove && d.remove.call(e, c));
                    a && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, g.handle) || _.removeEvent(e, f, g.handle), delete l[f])
                } else for (f in l) _.event.remove(e, f + t[u], n, i, !0);
                _.isEmptyObject(l) && K.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t, n, i, r, o, a, s = _.event.fix(e), l = new Array(arguments.length),
                u = (K.get(this, "events") || {})[s.type] || [], c = _.event.special[s.type] || {};
            for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = _.event.handlers.call(this, s, u), t = 0; (r = a[t++]) && !s.isPropagationStopped();) for (s.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (i = ((_.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        }, handlers: function (e, t) {
            var n, i, r, o, a, s = [], l = t.delegateCount, u = e.target;
            if (l && u.nodeType && !("click" === e.type && e.button >= 1)) for (; u !== this; u = u.parentNode || this) if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[r = (i = t[n]).selector + " "] && (a[r] = i.needsContext ? _(r, this).index(u) > -1 : _.find(r, this, null, [u]).length), a[r] && o.push(i);
                o.length && s.push({elem: u, handlers: o})
            }
            return u = this, l < t.length && s.push({elem: u, handlers: t.slice(l)}), s
        }, addProp: function (e, t) {
            Object.defineProperty(_.Event.prototype, e, {
                enumerable: !0, configurable: !0, get: m(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                }, set: function (t) {
                    Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                }
            })
        }, fix: function (e) {
            return e[_.expando] ? e : new _.Event(e)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== De() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === De() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && E(this, "input")) return this.click(), !1
                }, _default: function (e) {
                    return E(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, _.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, _.Event = function (e, t) {
        if (!(this instanceof _.Event)) return new _.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : xe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && _.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[_.expando] = !0
    }, _.Event.prototype = {
        constructor: _.Event,
        isDefaultPrevented: xe,
        isPropagationStopped: xe,
        isImmediatePropagationStopped: xe,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && ye.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && be.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, _.event.addProp), _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        _.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, i = e.relatedTarget, r = e.handleObj;
                return i && (i === this || _.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), _.fn.extend({
        on: function (e, t, n, i) {
            return Te(this, e, t, n, i)
        }, one: function (e, t, n, i) {
            return Te(this, e, t, n, i, 1)
        }, off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, _(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = xe), this.each(function () {
                _.event.remove(this, e, n, t)
            })
        }
    });
    var Ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ke = /<script|<style|<link/i, Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ae(e, t) {
        return E(e, "table") && E(11 !== t.nodeType ? t : t.firstChild, "tr") && _(e).children("tbody")[0] || e
    }

    function Oe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Me(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Ne(e, t) {
        var n, i, r, o, a, s, l, u;
        if (1 === t.nodeType) {
            if (K.hasData(e) && (o = K.access(e), a = K.set(t, o), u = o.events)) for (r in delete a.handle, a.events = {}, u) for (n = 0, i = u[r].length; n < i; n++) _.event.add(t, r, u[r][n]);
            X.hasData(e) && (s = X.access(e), l = _.extend({}, s), X.set(t, l))
        }
    }

    function Ie(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ue.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function Le(e, t, n, i) {
        t = a.apply([], t);
        var r, o, s, l, u, c, d = 0, h = e.length, f = h - 1, g = t[0], v = m(g);
        if (v || h > 1 && "string" == typeof g && !p.checkClone && Ee.test(g)) return e.each(function (r) {
            var o = e.eq(r);
            v && (t[0] = g.call(this, r, o.html())), Le(o, t, n, i)
        });
        if (h && (o = (r = ge(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
            for (l = (s = _.map(fe(r, "script"), Oe)).length; d < h; d++) u = r, d !== f && (u = _.clone(u, !0, !0), l && _.merge(s, fe(u, "script"))), n.call(e[d], u, d);
            if (l) for (c = s[s.length - 1].ownerDocument, _.map(s, Me), d = 0; d < l; d++) u = s[d], de.test(u.type || "") && !K.access(u, "globalEval") && _.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? _._evalUrl && _._evalUrl(u.src) : y(u.textContent.replace(Se, ""), c, u))
        }
        return e
    }

    function je(e, t, n) {
        for (var i, r = t ? _.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || _.cleanData(fe(i)), i.parentNode && (n && _.contains(i.ownerDocument, i) && pe(fe(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    _.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ce, "<$1></$2>")
        }, clone: function (e, t, n) {
            var i, r, o, a, s = e.cloneNode(!0), l = _.contains(e.ownerDocument, e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || _.isXMLDoc(e))) for (a = fe(s), i = 0, r = (o = fe(e)).length; i < r; i++) Ie(o[i], a[i]);
            if (t) if (n) for (o = o || fe(e), a = a || fe(s), i = 0, r = o.length; i < r; i++) Ne(o[i], a[i]); else Ne(e, s);
            return (a = fe(s, "script")).length > 0 && pe(a, !l && fe(e, "script")), s
        }, cleanData: function (e) {
            for (var t, n, i, r = _.event.special, o = 0; void 0 !== (n = e[o]); o++) if ($(n)) {
                if (t = n[K.expando]) {
                    if (t.events) for (i in t.events) r[i] ? _.event.remove(n, i) : _.removeEvent(n, i, t.handle);
                    n[K.expando] = void 0
                }
                n[X.expando] && (n[X.expando] = void 0)
            }
        }
    }), _.fn.extend({
        detach: function (e) {
            return je(this, e, !0)
        }, remove: function (e) {
            return je(this, e)
        }, text: function (e) {
            return W(this, function (e) {
                return void 0 === e ? _.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return Le(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ae(this, e).appendChild(e)
            })
        }, prepend: function () {
            return Le(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ae(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return Le(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return Le(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (_.cleanData(fe(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return _.clone(this, e, t)
            })
        }, html: function (e) {
            return W(this, function (e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !he[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = _.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (_.cleanData(fe(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return Le(this, arguments, function (t) {
                var n = this.parentNode;
                _.inArray(this, e) < 0 && (_.cleanData(fe(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        _.fn[e] = function (e) {
            for (var n, i = [], r = _(e), o = r.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), _(r[a])[t](n), s.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Fe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), Pe = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    }, Re = new RegExp(ne.join("|"), "i");

    function Ue(e, t, n) {
        var i, r, o, a, s = e.style;
        return (n = n || Pe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || _.contains(e.ownerDocument, e) || (a = _.style(e, t)), !p.pixelBoxStyles() && Fe.test(a) && Re.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Ye(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    !function () {
        function t() {
            if (c) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ve.appendChild(u).appendChild(c);
                var t = e.getComputedStyle(c);
                r = "1%" !== t.top, l = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", ve.removeChild(u), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }

        var r, o, a, s, l, u = i.createElement("div"), c = i.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === c.style.backgroundClip, _.extend(p, {
            boxSizingReliable: function () {
                return t(), o
            }, pixelBoxStyles: function () {
                return t(), s
            }, pixelPosition: function () {
                return t(), r
            }, reliableMarginLeft: function () {
                return t(), l
            }, scrollboxSize: function () {
                return t(), a
            }
        }))
    }();
    var He = /^(none|table(?!-c[ea]).+)/, We = /^--/,
        qe = {position: "absolute", visibility: "hidden", display: "block"},
        Ve = {letterSpacing: "0", fontWeight: "400"}, Be = ["Webkit", "Moz", "ms"], ze = i.createElement("div").style;

    function $e(e) {
        var t = _.cssProps[e];
        return t || (t = _.cssProps[e] = function (e) {
            if (e in ze) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Be.length; n--;) if ((e = Be[n] + t) in ze) return e
        }(e) || e), t
    }

    function Ge(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function Ke(e, t, n, i, r, o) {
        var a = "width" === t ? 1 : 0, s = 0, l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (l += _.css(e, n + ne[a], !0, r)), i ? ("content" === n && (l -= _.css(e, "padding" + ne[a], !0, r)), "margin" !== n && (l -= _.css(e, "border" + ne[a] + "Width", !0, r))) : (l += _.css(e, "padding" + ne[a], !0, r), "padding" !== n ? l += _.css(e, "border" + ne[a] + "Width", !0, r) : s += _.css(e, "border" + ne[a] + "Width", !0, r));
        return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5))), l
    }

    function Xe(e, t, n) {
        var i = Pe(e), r = Ue(e, t, i), o = "border-box" === _.css(e, "boxSizing", !1, i), a = o;
        if (Fe.test(r)) {
            if (!n) return r;
            r = "auto"
        }
        return a = a && (p.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === _.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (r = parseFloat(r) || 0) + Ke(e, t, n || (o ? "border" : "content"), a, i, r) + "px"
    }

    function Qe(e, t, n, i, r) {
        return new Qe.prototype.init(e, t, n, i, r)
    }

    _.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Ue(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = z(t), l = We.test(t), u = e.style;
                if (l || (t = $e(s)), a = _.cssHooks[t] || _.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : u[t];
                "string" == (o = typeof n) && (r = te.exec(n)) && r[1] && (n = oe(e, t, r), o = "number"), null != n && n == n && ("number" === o && (n += r && r[3] || (_.cssNumber[s] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function (e, t, n, i) {
            var r, o, a, s = z(t);
            return We.test(t) || (t = $e(s)), (a = _.cssHooks[t] || _.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = Ue(e, t, i)), "normal" === r && t in Ve && (r = Ve[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), _.each(["height", "width"], function (e, t) {
        _.cssHooks[t] = {
            get: function (e, n, i) {
                if (n) return !He.test(_.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Xe(e, t, i) : re(e, qe, function () {
                    return Xe(e, t, i)
                })
            }, set: function (e, n, i) {
                var r, o = Pe(e), a = "border-box" === _.css(e, "boxSizing", !1, o), s = i && Ke(e, t, i, a, o);
                return a && p.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ke(e, t, "border", !1, o) - .5)), s && (r = te.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = _.css(e, t)), Ge(0, n, s)
            }
        }
    }), _.cssHooks.marginLeft = Ye(p.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Ue(e, "marginLeft")) || e.getBoundingClientRect().left - re(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), _.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        _.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + ne[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, "margin" !== e && (_.cssHooks[e + t].set = Ge)
    }), _.fn.extend({
        css: function (e, t) {
            return W(this, function (e, t, n) {
                var i, r, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (i = Pe(e), r = t.length; a < r; a++) o[t[a]] = _.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? _.style(e, t, n) : _.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), _.Tween = Qe, Qe.prototype = {
        constructor: Qe, init: function (e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || _.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (_.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = Qe.propHooks[this.prop];
            return e && e.get ? e.get(this) : Qe.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = Qe.propHooks[this.prop];
            return this.options.duration ? this.pos = t = _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Qe.propHooks._default.set(this), this
        }
    }, Qe.prototype.init.prototype = Qe.prototype, Qe.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = _.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            }, set: function (e) {
                _.fx.step[e.prop] ? _.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[_.cssProps[e.prop]] && !_.cssHooks[e.prop] ? e.elem[e.prop] = e.now : _.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, Qe.propHooks.scrollTop = Qe.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, _.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, _.fx = Qe.prototype.init, _.fx.step = {};
    var Ze, Je, et = /^(?:toggle|show|hide)$/, tt = /queueHooks$/;

    function nt() {
        Je && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(nt) : e.setTimeout(nt, _.fx.interval), _.fx.tick())
    }

    function it() {
        return e.setTimeout(function () {
            Ze = void 0
        }), Ze = Date.now()
    }

    function rt(e, t) {
        var n, i = 0, r = {height: e};
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ne[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function ot(e, t, n) {
        for (var i, r = (at.tweeners[t] || []).concat(at.tweeners["*"]), o = 0, a = r.length; o < a; o++) if (i = r[o].call(n, t, e)) return i
    }

    function at(e, t, n) {
        var i, r, o = 0, a = at.prefilters.length, s = _.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (r) return !1;
            for (var t = Ze || it(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++) u.tweens[o].run(i);
            return s.notifyWith(e, [u, i, n]), i < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
        }, u = s.promise({
            elem: e,
            props: _.extend({}, t),
            opts: _.extend(!0, {specialEasing: {}, easing: _.easing._default}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Ze || it(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var i = _.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(i), i
            },
            stop: function (t) {
                var n = 0, i = t ? u.tweens.length : 0;
                if (r) return this;
                for (r = !0; n < i; n++) u.tweens[n].run(1);
                return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
            }
        }), c = u.props;
        for (function (e, t) {
            var n, i, r, o, a;
            for (n in e) if (r = t[i = z(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = _.cssHooks[i]) && "expand" in a) for (n in o = a.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r); else t[i] = r
        }(c, u.opts.specialEasing); o < a; o++) if (i = at.prefilters[o].call(u, e, c, u.opts)) return m(i.stop) && (_._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
        return _.map(c, ot, u), m(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), _.fx.timer(_.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u
    }

    _.Animation = _.extend(at, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return oe(n.elem, e, te.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(j);
            for (var n, i = 0, r = e.length; i < r; i++) n = e[i], at.tweeners[n] = at.tweeners[n] || [], at.tweeners[n].unshift(t)
        }, prefilters: [function (e, t, n) {
            var i, r, o, a, s, l, u, c, d = "width" in t || "height" in t, h = this, f = {}, p = e.style,
                m = e.nodeType && ie(e), g = K.get(e, "fxshow");
            for (i in n.queue || (null == (a = _._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                a.unqueued || s()
            }), a.unqueued++, h.always(function () {
                h.always(function () {
                    a.unqueued--, _.queue(e, "fx").length || a.empty.fire()
                })
            })), t) if (r = t[i], et.test(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (m ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[i]) continue;
                    m = !0
                }
                f[i] = g && g[i] || _.style(e, i)
            }
            if ((l = !_.isEmptyObject(t)) || !_.isEmptyObject(f)) for (i in d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = g && g.display) && (u = K.get(e, "display")), "none" === (c = _.css(e, "display")) && (u ? c = u : (le([e], !0), u = e.style.display || u, c = _.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === _.css(e, "float") && (l || (h.done(function () {
                p.display = u
            }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function () {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            })), l = !1, f) l || (g ? "hidden" in g && (m = g.hidden) : g = K.access(e, "fxshow", {display: u}), o && (g.hidden = !m), m && le([e], !0), h.done(function () {
                for (i in m || le([e]), K.remove(e, "fxshow"), f) _.style(e, i, f[i])
            })), l = ot(m ? g[i] : 0, i, h), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
        }], prefilter: function (e, t) {
            t ? at.prefilters.unshift(e) : at.prefilters.push(e)
        }
    }), _.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? _.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return _.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in _.fx.speeds ? i.duration = _.fx.speeds[i.duration] : i.duration = _.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            m(i.old) && i.old.call(this), i.queue && _.dequeue(this, i.queue)
        }, i
    }, _.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(ie).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
        }, animate: function (e, t, n, i) {
            var r = _.isEmptyObject(e), o = _.speed(t, n, i), a = function () {
                var t = at(this, _.extend({}, e), o);
                (r || K.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0, r = null != e && e + "queueHooks", o = _.timers, a = K.get(this);
                if (r) a[r] && a[r].stop && i(a[r]); else for (r in a) a[r] && a[r].stop && tt.test(r) && i(a[r]);
                for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                !t && n || _.dequeue(this, e)
            })
        }, finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = K.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = _.timers, a = i ? i.length : 0;
                for (n.finish = !0, _.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), _.each(["toggle", "show", "hide"], function (e, t) {
        var n = _.fn[t];
        _.fn[t] = function (e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(rt(t, !0), e, i, r)
        }
    }), _.each({
        slideDown: rt("show"),
        slideUp: rt("hide"),
        slideToggle: rt("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        _.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), _.timers = [], _.fx.tick = function () {
        var e, t = 0, n = _.timers;
        for (Ze = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || _.fx.stop(), Ze = void 0
    }, _.fx.timer = function (e) {
        _.timers.push(e), _.fx.start()
    }, _.fx.interval = 13, _.fx.start = function () {
        Je || (Je = !0, nt())
    }, _.fx.stop = function () {
        Je = null
    }, _.fx.speeds = {slow: 600, fast: 200, _default: 400}, _.fn.delay = function (t, n) {
        return t = _.fx && _.fx.speeds[t] || t, n = n || "fx", this.queue(n, function (n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function () {
                e.clearTimeout(r)
            }
        })
    }, function () {
        var e = i.createElement("input"), t = i.createElement("select").appendChild(i.createElement("option"));
        e.type = "checkbox", p.checkOn = "" !== e.value, p.optSelected = t.selected, (e = i.createElement("input")).value = "t", e.type = "radio", p.radioValue = "t" === e.value
    }();
    var st, lt = _.expr.attrHandle;
    _.fn.extend({
        attr: function (e, t) {
            return W(this, _.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                _.removeAttr(this, e)
            })
        }
    }), _.extend({
        attr: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? _.prop(e, t, n) : (1 === o && _.isXMLDoc(e) || (r = _.attrHooks[t.toLowerCase()] || (_.expr.match.bool.test(t) ? st : void 0)), void 0 !== n ? null === n ? void _.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = _.find.attr(e, t)) ? void 0 : i)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!p.radioValue && "radio" === t && E(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, i = 0, r = t && t.match(j);
            if (r && 1 === e.nodeType) for (; n = r[i++];) e.removeAttribute(n)
        }
    }), st = {
        set: function (e, t, n) {
            return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = lt[t] || _.find.attr;
        lt[t] = function (e, t, i) {
            var r, o, a = t.toLowerCase();
            return i || (o = lt[a], lt[a] = r, r = null != n(e, t, i) ? a : null, lt[a] = o), r
        }
    });
    var ut = /^(?:input|select|textarea|button)$/i, ct = /^(?:a|area)$/i;

    function dt(e) {
        return (e.match(j) || []).join(" ")
    }

    function ht(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function ft(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(j) || []
    }

    _.fn.extend({
        prop: function (e, t) {
            return W(this, _.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[_.propFix[e] || e]
            })
        }
    }), _.extend({
        prop: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && _.isXMLDoc(e) || (t = _.propFix[t] || t, r = _.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = _.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ut.test(e.nodeName) || ct.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), p.optSelected || (_.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        _.propFix[this.toLowerCase()] = this
    }), _.fn.extend({
        addClass: function (e) {
            var t, n, i, r, o, a, s, l = 0;
            if (m(e)) return this.each(function (t) {
                _(this).addClass(e.call(this, t, ht(this)))
            });
            if ((t = ft(e)).length) for (; n = this[l++];) if (r = ht(n), i = 1 === n.nodeType && " " + dt(r) + " ") {
                for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                r !== (s = dt(i)) && n.setAttribute("class", s)
            }
            return this
        }, removeClass: function (e) {
            var t, n, i, r, o, a, s, l = 0;
            if (m(e)) return this.each(function (t) {
                _(this).removeClass(e.call(this, t, ht(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = ft(e)).length) for (; n = this[l++];) if (r = ht(n), i = 1 === n.nodeType && " " + dt(r) + " ") {
                for (a = 0; o = t[a++];) for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                r !== (s = dt(i)) && n.setAttribute("class", s)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e, i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each(function (n) {
                _(this).toggleClass(e.call(this, n, ht(this), t), t)
            }) : this.each(function () {
                var t, r, o, a;
                if (i) for (r = 0, o = _(this), a = ft(e); t = a[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else void 0 !== e && "boolean" !== n || ((t = ht(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + dt(ht(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var pt = /\r/g;
    _.fn.extend({
        val: function (e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = m(e), this.each(function (n) {
                var r;
                1 === this.nodeType && (null == (r = i ? e.call(this, n, _(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = _.map(r, function (e) {
                    return null == e ? "" : e + ""
                })), (t = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = _.valHooks[r.type] || _.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(pt, "") : null == n ? "" : n : void 0
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = _.find.attr(e, "value");
                    return null != t ? t : dt(_.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, i, r = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [],
                        l = a ? o + 1 : r.length;
                    for (i = o < 0 ? l : a ? o : 0; i < l; i++) if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                        if (t = _(n).val(), a) return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    for (var n, i, r = e.options, o = _.makeArray(t), a = r.length; a--;) ((i = r[a]).selected = _.inArray(_.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), _.each(["radio", "checkbox"], function () {
        _.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = _.inArray(_(e).val(), t) > -1
            }
        }, p.checkOn || (_.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), p.focusin = "onfocusin" in e;
    var mt = /^(?:focusinfocus|focusoutblur)$/, gt = function (e) {
        e.stopPropagation()
    };
    _.extend(_.event, {
        trigger: function (t, n, r, o) {
            var a, s, l, u, c, h, f, p, v = [r || i], y = d.call(t, "type") ? t.type : t,
                b = d.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = p = l = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !mt.test(y + _.event.triggered) && (y.indexOf(".") > -1 && (y = (b = y.split(".")).shift(), b.sort()), c = y.indexOf(":") < 0 && "on" + y, (t = t[_.expando] ? t : new _.Event(y, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : _.makeArray(n, [t]), f = _.event.special[y] || {}, o || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                if (!o && !f.noBubble && !g(r)) {
                    for (u = f.delegateType || y, mt.test(u + y) || (s = s.parentNode); s; s = s.parentNode) v.push(s), l = s;
                    l === (r.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || e)
                }
                for (a = 0; (s = v[a++]) && !t.isPropagationStopped();) p = s, t.type = a > 1 ? u : f.bindType || y, (h = (K.get(s, "events") || {})[t.type] && K.get(s, "handle")) && h.apply(s, n), (h = c && s[c]) && h.apply && $(s) && (t.result = h.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = y, o || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(v.pop(), n) || !$(r) || c && m(r[y]) && !g(r) && ((l = r[c]) && (r[c] = null), _.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, gt), r[y](), t.isPropagationStopped() && p.removeEventListener(y, gt), _.event.triggered = void 0, l && (r[c] = l)), t.result
            }
        }, simulate: function (e, t, n) {
            var i = _.extend(new _.Event, n, {type: e, isSimulated: !0});
            _.event.trigger(i, null, t)
        }
    }), _.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                _.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return _.event.trigger(e, t, n, !0)
        }
    }), p.focusin || _.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            _.event.simulate(t, e.target, _.event.fix(e))
        };
        _.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this, r = K.access(i, t);
                r || i.addEventListener(e, n, !0), K.access(i, t, (r || 0) + 1)
            }, teardown: function () {
                var i = this.ownerDocument || this, r = K.access(i, t) - 1;
                r ? K.access(i, t, r) : (i.removeEventListener(e, n, !0), K.remove(i, t))
            }
        }
    });
    var vt = e.location, yt = Date.now(), bt = /\?/;
    _.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || _.error("Invalid XML: " + t), n
    };
    var _t = /\[\]$/, wt = /\r?\n/g, xt = /^(?:submit|button|image|reset|file)$/i,
        Dt = /^(?:input|select|textarea|keygen)/i;

    function Tt(e, t, n, i) {
        var r;
        if (Array.isArray(t)) _.each(t, function (t, r) {
            n || _t.test(e) ? i(e, r) : Tt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        }); else if (n || "object" !== b(t)) i(e, t); else for (r in t) Tt(e + "[" + r + "]", t[r], n, i)
    }

    _.param = function (e, t) {
        var n, i = [], r = function (e, t) {
            var n = m(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !_.isPlainObject(e)) _.each(e, function () {
            r(this.name, this.value)
        }); else for (n in e) Tt(n, e[n], t, r);
        return i.join("&")
    }, _.fn.extend({
        serialize: function () {
            return _.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = _.prop(this, "elements");
                return e ? _.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !_(this).is(":disabled") && Dt.test(this.nodeName) && !xt.test(e) && (this.checked || !ue.test(e))
            }).map(function (e, t) {
                var n = _(this).val();
                return null == n ? null : Array.isArray(n) ? _.map(n, function (e) {
                    return {name: t.name, value: e.replace(wt, "\r\n")}
                }) : {name: t.name, value: n.replace(wt, "\r\n")}
            }).get()
        }
    });
    var Ct = /%20/g, kt = /#.*$/, Et = /([?&])_=[^&]*/, St = /^(.*?):[ \t]*([^\r\n]*)$/gm, At = /^(?:GET|HEAD)$/,
        Ot = /^\/\//, Mt = {}, Nt = {}, It = "*/".concat("*"), Lt = i.createElement("a");

    function jt(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0, o = t.toLowerCase().match(j) || [];
            if (m(n)) for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function Ft(e, t, n, i) {
        var r = {}, o = e === Nt;

        function a(s) {
            var l;
            return r[s] = !0, _.each(e[s] || [], function (e, s) {
                var u = s(t, n, i);
                return "string" != typeof u || o || r[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), a(u), !1)
            }), l
        }

        return a(t.dataTypes[0]) || !r["*"] && a("*")
    }

    function Pt(e, t) {
        var n, i, r = _.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && _.extend(!0, e, i), e
    }

    Lt.href = vt.href, _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(vt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": _.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? Pt(Pt(e, _.ajaxSettings), t) : Pt(_.ajaxSettings, e)
        },
        ajaxPrefilter: jt(Mt),
        ajaxTransport: jt(Nt),
        ajax: function (t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, a, s, l, u, c, d, h, f, p = _.ajaxSetup({}, n), m = p.context || p,
                g = p.context && (m.nodeType || m.jquery) ? _(m) : _.event, v = _.Deferred(),
                y = _.Callbacks("once memory"), b = p.statusCode || {}, w = {}, x = {}, D = "canceled", T = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!s) for (s = {}; t = St.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return c ? a : null
                    }, setRequestHeader: function (e, t) {
                        return null == c && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == c && (p.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (c) T.always(e[T.status]); else for (t in e) b[t] = [b[t], e[t]];
                        return this
                    }, abort: function (e) {
                        var t = e || D;
                        return r && r.abort(t), C(0, t), this
                    }
                };
            if (v.promise(T), p.url = ((t || p.url || vt.href) + "").replace(Ot, vt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(j) || [""], null == p.crossDomain) {
                u = i.createElement("a");
                try {
                    u.href = p.url, u.href = u.href, p.crossDomain = Lt.protocol + "//" + Lt.host != u.protocol + "//" + u.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = _.param(p.data, p.traditional)), Ft(Mt, p, n, T), c) return T;
            for (h in (d = _.event && p.global) && 0 == _.active++ && _.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !At.test(p.type), o = p.url.replace(kt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ct, "+")) : (f = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (bt.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(Et, "$1"), f = (bt.test(o) ? "&" : "?") + "_=" + yt++ + f), p.url = o + f), p.ifModified && (_.lastModified[o] && T.setRequestHeader("If-Modified-Since", _.lastModified[o]), _.etag[o] && T.setRequestHeader("If-None-Match", _.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + It + "; q=0.01" : "") : p.accepts["*"]), p.headers) T.setRequestHeader(h, p.headers[h]);
            if (p.beforeSend && (!1 === p.beforeSend.call(m, T, p) || c)) return T.abort();
            if (D = "abort", y.add(p.complete), T.done(p.success), T.fail(p.error), r = Ft(Nt, p, n, T)) {
                if (T.readyState = 1, d && g.trigger("ajaxSend", [T, p]), c) return T;
                p.async && p.timeout > 0 && (l = e.setTimeout(function () {
                    T.abort("timeout")
                }, p.timeout));
                try {
                    c = !1, r.send(w, C)
                } catch (e) {
                    if (c) throw e;
                    C(-1, e)
                }
            } else C(-1, "No Transport");

            function C(t, n, i, s) {
                var u, h, f, w, x, D = n;
                c || (c = !0, l && e.clearTimeout(l), r = void 0, a = s || "", T.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, i && (w = function (e, t, n) {
                    for (var i, r, o, a, s = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i) for (r in s) if (s[r] && s[r].test(i)) {
                        l.unshift(r);
                        break
                    }
                    if (l[0] in n) o = l[0]; else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            a || (a = r)
                        }
                        o = o || a
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(p, T, i)), w = function (e, t, n, i) {
                    var r, o, a, s, l, u = {}, c = e.dataTypes.slice();
                    if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
                        if (!(a = u[l + " " + o] || u["* " + o])) for (r in u) if ((s = r.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                            !0 === a ? a = u[r] : !0 !== u[r] && (o = s[0], c.unshift(s[1]));
                            break
                        }
                        if (!0 !== a) if (a && e.throws) t = a(t); else try {
                            t = a(t)
                        } catch (e) {
                            return {state: "parsererror", error: a ? e : "No conversion from " + l + " to " + o}
                        }
                    }
                    return {state: "success", data: t}
                }(p, w, T, u), u ? (p.ifModified && ((x = T.getResponseHeader("Last-Modified")) && (_.lastModified[o] = x), (x = T.getResponseHeader("etag")) && (_.etag[o] = x)), 204 === t || "HEAD" === p.type ? D = "nocontent" : 304 === t ? D = "notmodified" : (D = w.state, h = w.data, u = !(f = w.error))) : (f = D, !t && D || (D = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || D) + "", u ? v.resolveWith(m, [h, D, T]) : v.rejectWith(m, [T, D, f]), T.statusCode(b), b = void 0, d && g.trigger(u ? "ajaxSuccess" : "ajaxError", [T, p, u ? h : f]), y.fireWith(m, [T, D]), d && (g.trigger("ajaxComplete", [T, p]), --_.active || _.event.trigger("ajaxStop")))
            }

            return T
        },
        getJSON: function (e, t, n) {
            return _.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return _.get(e, void 0, t, "script")
        }
    }), _.each(["get", "post"], function (e, t) {
        _[t] = function (e, n, i, r) {
            return m(n) && (r = r || i, i = n, n = void 0), _.ajax(_.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, _.isPlainObject(e) && e))
        }
    }), _._evalUrl = function (e) {
        return _.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
    }, _.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = _(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (e) {
            return m(e) ? this.each(function (t) {
                _(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = _(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = m(e);
            return this.each(function (n) {
                _(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                _(this).replaceWith(this.childNodes)
            }), this
        }
    }), _.expr.pseudos.hidden = function (e) {
        return !_.expr.pseudos.visible(e)
    }, _.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, _.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {
        }
    };
    var Rt = {0: 200, 1223: 204}, Ut = _.ajaxSettings.xhr();
    p.cors = !!Ut && "withCredentials" in Ut, p.ajax = Ut = !!Ut, _.ajaxTransport(function (t) {
        var n, i;
        if (p.cors || Ut && !t.crossDomain) return {
            send: function (r, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) s.setRequestHeader(a, r[a]);
                n = function (e) {
                    return function () {
                        n && (n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Rt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {binary: s.response} : {text: s.responseText}, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), i = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
                    4 === s.readyState && e.setTimeout(function () {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            }, abort: function () {
                n && n()
            }
        }
    }), _.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), _.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return _.globalEval(e), e
            }
        }
    }), _.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), _.ajaxTransport("script", function (e) {
        var t, n;
        if (e.crossDomain) return {
            send: function (r, o) {
                t = _("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
                    t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                }), i.head.appendChild(t[0])
            }, abort: function () {
                n && n()
            }
        }
    });
    var Yt = [], Ht = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Yt.pop() || _.expando + "_" + yt++;
            return this[e] = !0, e
        }
    }), _.ajaxPrefilter("json jsonp", function (t, n, i) {
        var r, o, a,
            s = !1 !== t.jsonp && (Ht.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ht.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ht, "$1" + r) : !1 !== t.jsonp && (t.url += (bt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
            return a || _.error(r + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
            a = arguments
        }, i.always(function () {
            void 0 === o ? _(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Yt.push(r)), a && m(o) && o(a[0]), a = o = void 0
        }), "script"
    }), p.createHTMLDocument = function () {
        var e = i.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), _.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((r = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(r)) : t = i), a = !n && [], (o = S.exec(e)) ? [t.createElement(o[1])] : (o = ge([e], t, a), a && a.length && _(a).remove(), _.merge([], o.childNodes)));
        var r, o, a
    }, _.fn.load = function (e, t, n) {
        var i, r, o, a = this, s = e.indexOf(" ");
        return s > -1 && (i = dt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && _.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(i ? _("<div>").append(_.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        _.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), _.expr.pseudos.animated = function (e) {
        return _.grep(_.timers, function (t) {
            return e === t.elem
        }).length
    }, _.offset = {
        setOffset: function (e, t, n) {
            var i, r, o, a, s, l, u = _.css(e, "position"), c = _(e), d = {};
            "static" === u && (e.style.position = "relative"), s = c.offset(), o = _.css(e, "top"), l = _.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (a = (i = c.position()).top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), m(t) && (t = t.call(e, n, _.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : c.css(d)
        }
    }, _.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                _.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n, i = this[0], r = {top: 0, left: 0};
                if ("fixed" === _.css(i, "position")) t = i.getBoundingClientRect(); else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === _.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = _(e).offset()).top += _.css(e, "borderTopWidth", !0), r.left += _.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - _.css(i, "marginTop", !0),
                    left: t.left - r.left - _.css(i, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === _.css(e, "position");) e = e.offsetParent;
                return e || ve
            })
        }
    }), _.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = "pageYOffset" === t;
        _.fn[e] = function (i) {
            return W(this, function (e, i, r) {
                var o;
                if (g(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];
                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
            }, e, i, arguments.length)
        }
    }), _.each(["top", "left"], function (e, t) {
        _.cssHooks[t] = Ye(p.pixelPosition, function (e, n) {
            if (n) return n = Ue(e, t), Fe.test(n) ? _(e).position()[t] + "px" : n
        })
    }), _.each({Height: "height", Width: "width"}, function (e, t) {
        _.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
            _.fn[i] = function (r, o) {
                var a = arguments.length && (n || "boolean" != typeof r),
                    s = n || (!0 === r || !0 === o ? "margin" : "border");
                return W(this, function (t, n, r) {
                    var o;
                    return g(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? _.css(t, n, s) : _.style(t, n, r, s)
                }, t, a ? r : void 0, a)
            }
        })
    }), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        _.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), _.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), _.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), _.proxy = function (e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return i = o.call(arguments, 2), (r = function () {
            return e.apply(t || this, i.concat(o.call(arguments)))
        }).guid = e.guid = e.guid || _.guid++, r
    }, _.holdReady = function (e) {
        e ? _.readyWait++ : _.ready(!0)
    }, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = E, _.isFunction = m, _.isWindow = g, _.camelCase = z, _.type = b, _.now = Date.now, _.isNumeric = function (e) {
        var t = _.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return _
    });
    var Wt = e.jQuery, qt = e.$;
    return _.noConflict = function (t) {
        return e.$ === _ && (e.$ = qt), t && e.jQuery === _ && (e.jQuery = Wt), _
    }, t || (e.jQuery = e.$ = _), _
}), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function () {
    "use strict";

    function e(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var n = getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function n(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function i(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case"HTML":
            case"BODY":
                return e.ownerDocument.body;
            case"#document":
                return e.body
        }
        var r = t(e), o = r.overflow, a = r.overflowX, s = r.overflowY;
        return /(auto|scroll|overlay)/.test(o + s + a) ? e : i(n(e))
    }

    function r(e) {
        return 11 === e ? $ : 10 === e ? G : $ || G
    }

    function o(e) {
        if (!e) return document.documentElement;
        for (var n = r(10) ? document.body : null, i = e.offsetParent; i === n && e.nextElementSibling;) i = (e = e.nextElementSibling).offsetParent;
        var a = i && i.nodeName;
        return a && "BODY" !== a && "HTML" !== a ? -1 !== ["TD", "TABLE"].indexOf(i.nodeName) && "static" === t(i, "position") ? o(i) : i : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function a(e) {
        return null === e.parentNode ? e : a(e.parentNode)
    }

    function s(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, i = n ? e : t, r = n ? t : e,
            l = document.createRange();
        l.setStart(i, 0), l.setEnd(r, 0);
        var u = l.commonAncestorContainer;
        if (e !== u && t !== u || i.contains(r)) return function (e) {
            var t = e.nodeName;
            return "BODY" !== t && ("HTML" === t || o(e.firstElementChild) === e)
        }(u) ? u : o(u);
        var c = a(e);
        return c.host ? s(c.host, t) : s(e, a(t).host)
    }

    function l(e) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || i)[t]
        }
        return e[t]
    }

    function u(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], i = l(t, "top"), r = l(t, "left"),
            o = n ? -1 : 1;
        return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
    }

    function c(e, t) {
        var n = "x" === t ? "Left" : "Top", i = "Left" == n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }

    function d(e, t, n, i) {
        return H(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], r(10) ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
    }

    function h() {
        var e = document.body, t = document.documentElement, n = r(10) && getComputedStyle(t);
        return {height: d("Height", e, t, n), width: d("Width", e, t, n)}
    }

    function f(e) {
        return Z({}, e, {right: e.left + e.width, bottom: e.top + e.height})
    }

    function p(e) {
        var n = {};
        try {
            if (r(10)) {
                n = e.getBoundingClientRect();
                var i = l(e, "top"), o = l(e, "left");
                n.top += i, n.left += o, n.bottom += i, n.right += o
            } else n = e.getBoundingClientRect()
        } catch (e) {
        }
        var a = {left: n.left, top: n.top, width: n.right - n.left, height: n.bottom - n.top},
            s = "HTML" === e.nodeName ? h() : {}, u = s.width || e.clientWidth || a.right - a.left,
            d = s.height || e.clientHeight || a.bottom - a.top, p = e.offsetWidth - u, m = e.offsetHeight - d;
        if (p || m) {
            var g = t(e);
            p -= c(g, "x"), m -= c(g, "y"), a.width -= p, a.height -= m
        }
        return f(a)
    }

    function m(e, n) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], a = r(10), s = "HTML" === n.nodeName,
            l = p(e), c = p(n), d = i(e), h = t(n), m = parseFloat(h.borderTopWidth, 10),
            g = parseFloat(h.borderLeftWidth, 10);
        o && "HTML" === n.nodeName && (c.top = H(c.top, 0), c.left = H(c.left, 0));
        var v = f({top: l.top - c.top - m, left: l.left - c.left - g, width: l.width, height: l.height});
        if (v.marginTop = 0, v.marginLeft = 0, !a && s) {
            var y = parseFloat(h.marginTop, 10), b = parseFloat(h.marginLeft, 10);
            v.top -= m - y, v.bottom -= m - y, v.left -= g - b, v.right -= g - b, v.marginTop = y, v.marginLeft = b
        }
        return (a && !o ? n.contains(d) : n === d && "BODY" !== d.nodeName) && (v = u(v, n)), v
    }

    function g(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n = e.ownerDocument.documentElement,
            i = m(e, n), r = H(n.clientWidth, window.innerWidth || 0), o = H(n.clientHeight, window.innerHeight || 0),
            a = t ? 0 : l(n), s = t ? 0 : l(n, "left");
        return f({top: a - i.top + i.marginTop, left: s - i.left + i.marginLeft, width: r, height: o})
    }

    function v(e) {
        var i = e.nodeName;
        return "BODY" !== i && "HTML" !== i && ("fixed" === t(e, "position") || v(n(e)))
    }

    function y(e) {
        if (!e || !e.parentElement || r()) return document.documentElement;
        for (var n = e.parentElement; n && "none" === t(n, "transform");) n = n.parentElement;
        return n || document.documentElement
    }

    function b(e, t, r, o) {
        var a = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], l = {top: 0, left: 0},
            u = a ? y(e) : s(e, t);
        if ("viewport" === o) l = g(u, a); else {
            var c;
            "scrollParent" === o ? "BODY" === (c = i(n(t))).nodeName && (c = e.ownerDocument.documentElement) : c = "window" === o ? e.ownerDocument.documentElement : o;
            var d = m(c, u, a);
            if ("HTML" !== c.nodeName || v(u)) l = d; else {
                var f = h(), p = f.height, b = f.width;
                l.top += d.top - d.marginTop, l.bottom = p + d.top, l.left += d.left - d.marginLeft, l.right = b + d.left
            }
        }
        return l.left += r, l.top += r, l.right -= r, l.bottom -= r, l
    }

    function _(e) {
        return e.width * e.height
    }

    function w(e, t, n, i, r) {
        var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var a = b(n, i, o, r), s = {
            top: {width: a.width, height: t.top - a.top},
            right: {width: a.right - t.right, height: a.height},
            bottom: {width: a.width, height: a.bottom - t.bottom},
            left: {width: t.left - a.left, height: a.height}
        }, l = Object.keys(s).map(function (e) {
            return Z({key: e}, s[e], {area: _(s[e])})
        }).sort(function (e, t) {
            return t.area - e.area
        }), u = l.filter(function (e) {
            var t = e.width, i = e.height;
            return t >= n.clientWidth && i >= n.clientHeight
        }), c = 0 < u.length ? u[0].key : l[0].key, d = e.split("-")[1];
        return c + (d ? "-" + d : "")
    }

    function x(e, t, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return m(n, i ? y(t) : s(t, n), i)
    }

    function D(e) {
        var t = getComputedStyle(e), n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {width: e.offsetWidth + i, height: e.offsetHeight + n}
    }

    function T(e) {
        var t = {left: "right", right: "left", bottom: "top", top: "bottom"};
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e]
        })
    }

    function C(e, t, n) {
        n = n.split("-")[0];
        var i = D(e), r = {width: i.width, height: i.height}, o = -1 !== ["right", "left"].indexOf(n),
            a = o ? "top" : "left", s = o ? "left" : "top", l = o ? "height" : "width", u = o ? "width" : "height";
        return r[a] = t[a] + t[l] / 2 - i[l] / 2, r[s] = n === s ? t[s] - i[u] : t[T(s)], r
    }

    function k(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function E(t, n, i) {
        return (void 0 === i ? t : t.slice(0, function (e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function (e) {
                return e[t] === n
            });
            var i = k(e, function (e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }(t, "name", i))).forEach(function (t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var i = t.function || t.fn;
            t.enabled && e(i) && (n.offsets.popper = f(n.offsets.popper), n.offsets.reference = f(n.offsets.reference), n = i(n, t))
        }), n
    }

    function S(e, t) {
        return e.some(function (e) {
            var n = e.name;
            return e.enabled && n === t
        })
    }

    function A(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var r = t[i], o = r ? "" + r + n : e;
            if (void 0 !== document.body.style[o]) return o
        }
        return null
    }

    function O(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function M(e, t, n, r) {
        n.updateBound = r, O(e).addEventListener("resize", n.updateBound, {passive: !0});
        var o = i(e);
        return function e(t, n, r, o) {
            var a = "BODY" === t.nodeName, s = a ? t.ownerDocument.defaultView : t;
            s.addEventListener(n, r, {passive: !0}), a || e(i(s.parentNode), n, r, o), o.push(s)
        }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
    }

    function N() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, O(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
            e.removeEventListener("scroll", t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
    }

    function I(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function L(e, t) {
        Object.keys(t).forEach(function (n) {
            var i = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && I(t[n]) && (i = "px"), e.style[n] = t[n] + i
        })
    }

    function j(e, t, n) {
        var i = k(e, function (e) {
            return e.name === t
        }), r = !!i && e.some(function (e) {
            return e.name === n && e.enabled && e.order < i.order
        });
        if (!r) {
            var o = "`" + t + "`";
            console.warn("`" + n + "` modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }

    function F(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n = ee.indexOf(e),
            i = ee.slice(n + 1).concat(ee.slice(0, n));
        return t ? i.reverse() : i
    }

    function P(e, t, n, i) {
        var r = [0, 0], o = -1 !== ["right", "left"].indexOf(i), a = e.split(/(\+|\-)/).map(function (e) {
            return e.trim()
        }), s = a.indexOf(k(a, function (e) {
            return -1 !== e.search(/,|\s/)
        }));
        a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            u = -1 === s ? [a] : [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))];
        return (u = u.map(function (e, i) {
            var r = (1 === i ? !o : o) ? "height" : "width", a = !1;
            return e.reduce(function (e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t)
            }, []).map(function (e) {
                return function (e, t, n, i) {
                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), o = +r[1], a = r[2];
                    if (!o) return e;
                    if (0 === a.indexOf("%")) {
                        var s;
                        switch (a) {
                            case"%p":
                                s = n;
                                break;
                            case"%":
                            case"%r":
                            default:
                                s = i
                        }
                        return f(s)[t] / 100 * o
                    }
                    return "vh" === a || "vw" === a ? ("vh" === a ? H(document.documentElement.clientHeight, window.innerHeight || 0) : H(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o : o
                }(e, r, t, n)
            })
        })).forEach(function (e, t) {
            e.forEach(function (n, i) {
                I(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
            })
        }), r
    }

    for (var R = Math.min, U = Math.round, Y = Math.floor, H = Math.max, W = "undefined" != typeof window && "undefined" != typeof document, q = ["Edge", "Trident", "Firefox"], V = 0, B = 0; B < q.length; B += 1) if (W && 0 <= navigator.userAgent.indexOf(q[B])) {
        V = 1;
        break
    }
    var z = W && window.Promise ? function (e) {
            var t = !1;
            return function () {
                t || (t = !0, window.Promise.resolve().then(function () {
                    t = !1, e()
                }))
            }
        } : function (e) {
            var t = !1;
            return function () {
                t || (t = !0, setTimeout(function () {
                    t = !1, e()
                }, V))
            }
        }, $ = W && !(!window.MSInputMethodContext || !document.documentMode), G = W && /MSIE 10/.test(navigator.userAgent),
        K = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }, X = function () {
            function e(e, t) {
                for (var n, i = 0; i < t.length; i++) (n = t[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }

            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(), Q = function (e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }, Z = Object.assign || function (e) {
            for (var t, n = 1; n < arguments.length; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        J = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        ee = J.slice(3), te = "flip", ne = "clockwise", ie = "counterclockwise", re = function () {
            function t(n, i) {
                var r = this, o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                K(this, t), this.scheduleUpdate = function () {
                    return requestAnimationFrame(r.update)
                }, this.update = z(this.update.bind(this)), this.options = Z({}, t.Defaults, o), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = n && n.jquery ? n[0] : n, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(Z({}, t.Defaults.modifiers, o.modifiers)).forEach(function (e) {
                    r.options.modifiers[e] = Z({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                    return Z({name: e}, r.options.modifiers[e])
                }).sort(function (e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function (t) {
                    t.enabled && e(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state)
                }), this.update();
                var a = this.options.eventsEnabled;
                a && this.enableEventListeners(), this.state.eventsEnabled = a
            }

            return X(t, [{
                key: "update", value: function () {
                    return function () {
                        if (!this.state.isDestroyed) {
                            var e = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
                            e.offsets.reference = x(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = w(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = C(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = E(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy", value: function () {
                    return function () {
                        return this.state.isDestroyed = !0, S(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[A("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners", value: function () {
                    return function () {
                        this.state.eventsEnabled || (this.state = M(this.reference, this.options, this.state, this.scheduleUpdate))
                    }.call(this)
                }
            }, {
                key: "disableEventListeners", value: function () {
                    return N.call(this)
                }
            }]), t
        }();
    return re.Utils = ("undefined" == typeof window ? global : window).PopperUtils, re.placements = J, re.Defaults = {
        placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
        }, onUpdate: function () {
        }, modifiers: {
            shift: {
                order: 100, enabled: !0, fn: function (e) {
                    var t = e.placement, n = t.split("-")[0], i = t.split("-")[1];
                    if (i) {
                        var r = e.offsets, o = r.reference, a = r.popper, s = -1 !== ["bottom", "top"].indexOf(n),
                            l = s ? "left" : "top", u = s ? "width" : "height",
                            c = {start: Q({}, l, o[l]), end: Q({}, l, o[l] + o[u] - a[u])};
                        e.offsets.popper = Z({}, a, c[i])
                    }
                    return e
                }
            }, offset: {
                order: 200, enabled: !0, fn: function (e, t) {
                    var n, i = t.offset, r = e.placement, o = e.offsets, a = o.popper, s = o.reference,
                        l = r.split("-")[0];
                    return n = I(+i) ? [+i, 0] : P(i, a, s, l), "left" === l ? (a.top += n[0], a.left -= n[1]) : "right" === l ? (a.top += n[0], a.left += n[1]) : "top" === l ? (a.left += n[0], a.top -= n[1]) : "bottom" === l && (a.left += n[0], a.top += n[1]), e.popper = a, e
                }, offset: 0
            }, preventOverflow: {
                order: 300, enabled: !0, fn: function (e, t) {
                    var n = t.boundariesElement || o(e.instance.popper);
                    e.instance.reference === n && (n = o(n));
                    var i = A("transform"), r = e.instance.popper.style, a = r.top, s = r.left, l = r[i];
                    r.top = "", r.left = "", r[i] = "";
                    var u = b(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                    r.top = a, r.left = s, r[i] = l, t.boundaries = u;
                    var c = t.priority, d = e.offsets.popper, h = {
                        primary: function (e) {
                            var n = d[e];
                            return d[e] < u[e] && !t.escapeWithReference && (n = H(d[e], u[e])), Q({}, e, n)
                        }, secondary: function (e) {
                            var n = "right" === e ? "left" : "top", i = d[n];
                            return d[e] > u[e] && !t.escapeWithReference && (i = R(d[n], u[e] - ("right" === e ? d.width : d.height))), Q({}, n, i)
                        }
                    };
                    return c.forEach(function (e) {
                        var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                        d = Z({}, d, h[t](e))
                    }), e.offsets.popper = d, e
                }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"
            }, keepTogether: {
                order: 400, enabled: !0, fn: function (e) {
                    var t = e.offsets, n = t.popper, i = t.reference, r = e.placement.split("-")[0], o = Y,
                        a = -1 !== ["top", "bottom"].indexOf(r), s = a ? "right" : "bottom", l = a ? "left" : "top",
                        u = a ? "width" : "height";
                    return n[s] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[u]), n[l] > o(i[s]) && (e.offsets.popper[l] = o(i[s])), e
                }
            }, arrow: {
                order: 500, enabled: !0, fn: function (e, n) {
                    var i;
                    if (!j(e.instance.modifiers, "arrow", "keepTogether")) return e;
                    var r = n.element;
                    if ("string" == typeof r) {
                        if (!(r = e.instance.popper.querySelector(r))) return e
                    } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                    var o = e.placement.split("-")[0], a = e.offsets, s = a.popper, l = a.reference,
                        u = -1 !== ["left", "right"].indexOf(o), c = u ? "height" : "width", d = u ? "Top" : "Left",
                        h = d.toLowerCase(), p = u ? "left" : "top", m = u ? "bottom" : "right", g = D(r)[c];
                    l[m] - g < s[h] && (e.offsets.popper[h] -= s[h] - (l[m] - g)), l[h] + g > s[m] && (e.offsets.popper[h] += l[h] + g - s[m]), e.offsets.popper = f(e.offsets.popper);
                    var v = l[h] + l[c] / 2 - g / 2, y = t(e.instance.popper), b = parseFloat(y["margin" + d], 10),
                        _ = parseFloat(y["border" + d + "Width"], 10), w = v - e.offsets.popper[h] - b - _;
                    return w = H(R(s[c] - g, w), 0), e.arrowElement = r, e.offsets.arrow = (Q(i = {}, h, U(w)), Q(i, p, ""), i), e
                }, element: "[x-arrow]"
            }, flip: {
                order: 600, enabled: !0, fn: function (e, t) {
                    if (S(e.instance.modifiers, "inner")) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var n = b(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                        i = e.placement.split("-")[0], r = T(i), o = e.placement.split("-")[1] || "", a = [];
                    switch (t.behavior) {
                        case te:
                            a = [i, r];
                            break;
                        case ne:
                            a = F(i);
                            break;
                        case ie:
                            a = F(i, !0);
                            break;
                        default:
                            a = t.behavior
                    }
                    return a.forEach(function (s, l) {
                        if (i !== s || a.length === l + 1) return e;
                        i = e.placement.split("-")[0], r = T(i);
                        var u = e.offsets.popper, c = e.offsets.reference, d = Y,
                            h = "left" === i && d(u.right) > d(c.left) || "right" === i && d(u.left) < d(c.right) || "top" === i && d(u.bottom) > d(c.top) || "bottom" === i && d(u.top) < d(c.bottom),
                            f = d(u.left) < d(n.left), p = d(u.right) > d(n.right), m = d(u.top) < d(n.top),
                            g = d(u.bottom) > d(n.bottom),
                            v = "left" === i && f || "right" === i && p || "top" === i && m || "bottom" === i && g,
                            y = -1 !== ["top", "bottom"].indexOf(i),
                            b = !!t.flipVariations && (y && "start" === o && f || y && "end" === o && p || !y && "start" === o && m || !y && "end" === o && g);
                        (h || v || b) && (e.flipped = !0, (h || v) && (i = a[l + 1]), b && (o = function (e) {
                            return "end" === e ? "start" : "start" === e ? "end" : e
                        }(o)), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = Z({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)), e = E(e.instance.modifiers, e, "flip"))
                    }), e
                }, behavior: "flip", padding: 5, boundariesElement: "viewport"
            }, inner: {
                order: 700, enabled: !1, fn: function (e) {
                    var t = e.placement, n = t.split("-")[0], i = e.offsets, r = i.popper, o = i.reference,
                        a = -1 !== ["left", "right"].indexOf(n), s = -1 === ["top", "left"].indexOf(n);
                    return r[a ? "left" : "top"] = o[n] - (s ? r[a ? "width" : "height"] : 0), e.placement = T(t), e.offsets.popper = f(r), e
                }
            }, hide: {
                order: 800, enabled: !0, fn: function (e) {
                    if (!j(e.instance.modifiers, "hide", "preventOverflow")) return e;
                    var t = e.offsets.reference, n = k(e.instance.modifiers, function (e) {
                        return "preventOverflow" === e.name
                    }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            }, computeStyle: {
                order: 850, enabled: !0, fn: function (e, t) {
                    var n = t.x, i = t.y, r = e.offsets.popper, a = k(e.instance.modifiers, function (e) {
                        return "applyStyle" === e.name
                    }).gpuAcceleration;
                    void 0 !== a && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s, l, u = void 0 === a ? t.gpuAcceleration : a, c = p(o(e.instance.popper)),
                        d = {position: r.position},
                        h = {left: Y(r.left), top: U(r.top), bottom: U(r.bottom), right: Y(r.right)},
                        f = "bottom" === n ? "top" : "bottom", m = "right" === i ? "left" : "right", g = A("transform");
                    if (l = "bottom" == f ? -c.height + h.bottom : h.top, s = "right" == m ? -c.width + h.right : h.left, u && g) d[g] = "translate3d(" + s + "px, " + l + "px, 0)", d[f] = 0, d[m] = 0, d.willChange = "transform"; else {
                        var v = "bottom" == f ? -1 : 1, y = "right" == m ? -1 : 1;
                        d[f] = l * v, d[m] = s * y, d.willChange = f + ", " + m
                    }
                    var b = {"x-placement": e.placement};
                    return e.attributes = Z({}, b, e.attributes), e.styles = Z({}, d, e.styles), e.arrowStyles = Z({}, e.offsets.arrow, e.arrowStyles), e
                }, gpuAcceleration: !0, x: "bottom", y: "right"
            }, applyStyle: {
                order: 900, enabled: !0, fn: function (e) {
                    return L(e.instance.popper, e.styles), function (e, t) {
                        Object.keys(t).forEach(function (n) {
                            !1 === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n])
                        })
                    }(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && L(e.arrowElement, e.arrowStyles), e
                }, onLoad: function (e, t, n, i, r) {
                    var o = x(r, t, e, n.positionFixed),
                        a = w(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", a), L(t, {position: n.positionFixed ? "fixed" : "absolute"}), n
                }, gpuAcceleration: void 0
            }
        }
    }, re
}), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t(e.bootstrap = {}, e.jQuery, e.Popper)
}(this, function (e, t, n) {
    "use strict";

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function r(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function o(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}, i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function (t) {
                var i, r, o;
                i = e, o = n[r = t], r in i ? Object.defineProperty(i, r, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[r] = o
            })
        }
        return e
    }

    t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
    var a, s, l, u, c, d, h, f, p, m, g, v, y, b, _, w, x, D, T, C, k, E, S, A, O, M, N, I, L, j, F, P, R, U, Y, H, W,
        q, V, B, z, $, G, K, X, Q, Z, J, ee, te, ne, ie, re, oe, ae, se, le, ue, ce, de, he, fe, pe, me, ge, ve, ye, be,
        _e, we, xe, De, Te, Ce, ke, Ee, Se, Ae, Oe, Me, Ne, Ie, Le, je, Fe, Pe, Re, Ue, Ye, He, We, qe, Ve, Be, ze, $e,
        Ge, Ke, Xe, Qe, Ze, Je, et, tt, nt, it, rt, ot, at, st, lt, ut, ct, dt, ht, ft, pt, mt, gt, vt, yt, bt, _t, wt,
        xt = function (e) {
            var t = "transitionend";
            var n = {
                TRANSITION_END: "bsTransitionEnd", getUID: function (e) {
                    for (; e += ~~(1e6 * Math.random()), document.getElementById(e);) ;
                    return e
                }, getSelectorFromElement: function (t) {
                    var n = t.getAttribute("data-target");
                    n && "#" !== n || (n = t.getAttribute("href") || "");
                    try {
                        return 0 < e(document).find(n).length ? n : null
                    } catch (t) {
                        return null
                    }
                }, getTransitionDurationFromElement: function (t) {
                    if (!t) return 0;
                    var n = e(t).css("transition-duration");
                    return parseFloat(n) ? (n = n.split(",")[0], 1e3 * parseFloat(n)) : 0
                }, reflow: function (e) {
                    return e.offsetHeight
                }, triggerTransitionEnd: function (n) {
                    e(n).trigger(t)
                }, supportsTransitionEnd: function () {
                    return Boolean(t)
                }, isElement: function (e) {
                    return (e[0] || e).nodeType
                }, typeCheckConfig: function (e, t, i) {
                    for (var r in i) if (Object.prototype.hasOwnProperty.call(i, r)) {
                        var o = i[r], a = t[r],
                            s = a && n.isElement(a) ? "element" : (l = a, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
                        if (!new RegExp(o).test(s)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + s + '" but expected type "' + o + '".')
                    }
                    var l
                }
            };
            return e.fn.emulateTransitionEnd = function (t) {
                var i = this, r = !1;
                return e(this).one(n.TRANSITION_END, function () {
                    r = !0
                }), setTimeout(function () {
                    r || n.triggerTransitionEnd(i)
                }, t), this
            }, e.event.special[n.TRANSITION_END] = {
                bindType: t, delegateType: t, handle: function (t) {
                    if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                }
            }, n
        }(t), Dt = (s = "alert", u = "." + (l = "bs.alert"), c = (a = t).fn[s], d = {
            CLOSE: "close" + u,
            CLOSED: "closed" + u,
            CLICK_DATA_API: "click" + u + ".data-api"
        }, "alert", "fade", "show", h = function () {
            function e(e) {
                this._element = e
            }

            var t = e.prototype;
            return t.close = function (e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, t.dispose = function () {
                a.removeData(this._element, l), this._element = null
            }, t._getRootElement = function (e) {
                var t = xt.getSelectorFromElement(e), n = !1;
                return t && (n = a(t)[0]), n || (n = a(e).closest(".alert")[0]), n
            }, t._triggerCloseEvent = function (e) {
                var t = a.Event(d.CLOSE);
                return a(e).trigger(t), t
            }, t._removeElement = function (e) {
                var t = this;
                if (a(e).removeClass("show"), a(e).hasClass("fade")) {
                    var n = xt.getTransitionDurationFromElement(e);
                    a(e).one(xt.TRANSITION_END, function (n) {
                        return t._destroyElement(e, n)
                    }).emulateTransitionEnd(n)
                } else this._destroyElement(e)
            }, t._destroyElement = function (e) {
                a(e).detach().trigger(d.CLOSED).remove()
            }, e._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = a(this), i = n.data(l);
                    i || (i = new e(this), n.data(l, i)), "close" === t && i[t](this)
                })
            }, e._handleDismiss = function (e) {
                return function (t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, r(e, null, [{
                key: "VERSION", get: function () {
                    return "4.1.1"
                }
            }]), e
        }(), a(document).on(d.CLICK_DATA_API, '[data-dismiss="alert"]', h._handleDismiss(new h)), a.fn[s] = h._jQueryInterface, a.fn[s].Constructor = h, a.fn[s].noConflict = function () {
            return a.fn[s] = c, h._jQueryInterface
        }, h),
        Tt = (p = "button", g = "." + (m = "bs.button"), v = ".data-api", y = (f = t).fn[p], b = "active", "btn", _ = '[data-toggle^="button"]', '[data-toggle="buttons"]', "input", ".active", w = ".btn", x = {
            CLICK_DATA_API: "click" + g + v,
            FOCUS_BLUR_DATA_API: "focus" + g + v + " blur" + g + v
        }, D = function () {
            function e(e) {
                this._element = e
            }

            var t = e.prototype;
            return t.toggle = function () {
                var e = !0, t = !0, n = f(this._element).closest('[data-toggle="buttons"]')[0];
                if (n) {
                    var i = f(this._element).find("input")[0];
                    if (i) {
                        if ("radio" === i.type) if (i.checked && f(this._element).hasClass(b)) e = !1; else {
                            var r = f(n).find(".active")[0];
                            r && f(r).removeClass(b)
                        }
                        if (e) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !f(this._element).hasClass(b), f(i).trigger("change")
                        }
                        i.focus(), t = !1
                    }
                }
                t && this._element.setAttribute("aria-pressed", !f(this._element).hasClass(b)), e && f(this._element).toggleClass(b)
            }, t.dispose = function () {
                f.removeData(this._element, m), this._element = null
            }, e._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = f(this).data(m);
                    n || (n = new e(this), f(this).data(m, n)), "toggle" === t && n[t]()
                })
            }, r(e, null, [{
                key: "VERSION", get: function () {
                    return "4.1.1"
                }
            }]), e
        }(), f(document).on(x.CLICK_DATA_API, _, function (e) {
            e.preventDefault();
            var t = e.target;
            f(t).hasClass("btn") || (t = f(t).closest(w)), D._jQueryInterface.call(f(t), "toggle")
        }).on(x.FOCUS_BLUR_DATA_API, _, function (e) {
            var t = f(e.target).closest(w)[0];
            f(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
        }), f.fn[p] = D._jQueryInterface, f.fn[p].Constructor = D, f.fn[p].noConflict = function () {
            return f.fn[p] = y, D._jQueryInterface
        }, D), Ct = (C = "carousel", E = "." + (k = "bs.carousel"), S = ".data-api", A = (T = t).fn[C], O = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }, M = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }, N = "next", I = "prev", "left", "right", L = {
            SLIDE: "slide" + E,
            SLID: "slid" + E,
            KEYDOWN: "keydown" + E,
            MOUSEENTER: "mouseenter" + E,
            MOUSELEAVE: "mouseleave" + E,
            TOUCHEND: "touchend" + E,
            LOAD_DATA_API: "load" + E + S,
            CLICK_DATA_API: "click" + E + S
        }, "carousel", j = "active", "slide", "carousel-item-right", "carousel-item-left", "carousel-item-next", "carousel-item-prev", F = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        }, P = function () {
            function e(e, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(t), this._element = T(e)[0], this._indicatorsElement = T(this._element).find(F.INDICATORS)[0], this._addEventListeners()
            }

            var t = e.prototype;
            return t.next = function () {
                this._isSliding || this._slide(N)
            }, t.nextWhenVisible = function () {
                !document.hidden && T(this._element).is(":visible") && "hidden" !== T(this._element).css("visibility") && this.next()
            }, t.prev = function () {
                this._isSliding || this._slide(I)
            }, t.pause = function (e) {
                e || (this._isPaused = !0), T(this._element).find(F.NEXT_PREV)[0] && (xt.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, t.cycle = function (e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, t.to = function (e) {
                var t = this;
                this._activeElement = T(this._element).find(F.ACTIVE_ITEM)[0];
                var n = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) T(this._element).one(L.SLID, function () {
                    return t.to(e)
                }); else {
                    if (n === e) return this.pause(), void this.cycle();
                    var i = n < e ? N : I;
                    this._slide(i, this._items[e])
                }
            }, t.dispose = function () {
                T(this._element).off(E), T.removeData(this._element, k), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, t._getConfig = function (e) {
                return e = o({}, O, e), xt.typeCheckConfig(C, e, M), e
            }, t._addEventListeners = function () {
                var e = this;
                this._config.keyboard && T(this._element).on(L.KEYDOWN, function (t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && (T(this._element).on(L.MOUSEENTER, function (t) {
                    return e.pause(t)
                }).on(L.MOUSELEAVE, function (t) {
                    return e.cycle(t)
                }), "ontouchstart" in document.documentElement && T(this._element).on(L.TOUCHEND, function () {
                    e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
                        return e.cycle(t)
                    }, 500 + e._config.interval)
                }))
            }, t._keydown = function (e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, t._getItemIndex = function (e) {
                return this._items = T.makeArray(T(e).parent().find(F.ITEM)), this._items.indexOf(e)
            }, t._getItemByDirection = function (e, t) {
                var n = e === N, i = e === I, r = this._getItemIndex(t), o = this._items.length - 1;
                if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
                var a = (r + (e === I ? -1 : 1)) % this._items.length;
                return -1 === a ? this._items[this._items.length - 1] : this._items[a]
            }, t._triggerSlideEvent = function (e, t) {
                var n = this._getItemIndex(e), i = this._getItemIndex(T(this._element).find(F.ACTIVE_ITEM)[0]),
                    r = T.Event(L.SLIDE, {relatedTarget: e, direction: t, from: i, to: n});
                return T(this._element).trigger(r), r
            }, t._setActiveIndicatorElement = function (e) {
                if (this._indicatorsElement) {
                    T(this._indicatorsElement).find(F.ACTIVE).removeClass(j);
                    var t = this._indicatorsElement.children[this._getItemIndex(e)];
                    t && T(t).addClass(j)
                }
            }, t._slide = function (e, t) {
                var n, i, r, o = this, a = T(this._element).find(F.ACTIVE_ITEM)[0], s = this._getItemIndex(a),
                    l = t || a && this._getItemByDirection(e, a), u = this._getItemIndex(l), c = Boolean(this._interval);
                if (e === N ? (n = "carousel-item-left", i = "carousel-item-next", r = "left") : (n = "carousel-item-right", i = "carousel-item-prev", r = "right"), l && T(l).hasClass(j)) this._isSliding = !1; else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && a && l) {
                    this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(l);
                    var d = T.Event(L.SLID, {relatedTarget: l, direction: r, from: s, to: u});
                    if (T(this._element).hasClass("slide")) {
                        T(l).addClass(i), xt.reflow(l), T(a).addClass(n), T(l).addClass(n);
                        var h = xt.getTransitionDurationFromElement(a);
                        T(a).one(xt.TRANSITION_END, function () {
                            T(l).removeClass(n + " " + i).addClass(j), T(a).removeClass(j + " " + i + " " + n), o._isSliding = !1, setTimeout(function () {
                                return T(o._element).trigger(d)
                            }, 0)
                        }).emulateTransitionEnd(h)
                    } else T(a).removeClass(j), T(l).addClass(j), this._isSliding = !1, T(this._element).trigger(d);
                    c && this.cycle()
                }
            }, e._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = T(this).data(k), i = o({}, O, T(this).data());
                    "object" == typeof t && (i = o({}, i, t));
                    var r = "string" == typeof t ? t : i.slide;
                    if (n || (n = new e(this, i), T(this).data(k, n)), "number" == typeof t) n.to(t); else if ("string" == typeof r) {
                        if (void 0 === n[r]) throw new TypeError('No method named "' + r + '"');
                        n[r]()
                    } else i.interval && (n.pause(), n.cycle())
                })
            }, e._dataApiClickHandler = function (t) {
                var n = xt.getSelectorFromElement(this);
                if (n) {
                    var i = T(n)[0];
                    if (i && T(i).hasClass("carousel")) {
                        var r = o({}, T(i).data(), T(this).data()), a = this.getAttribute("data-slide-to");
                        a && (r.interval = !1), e._jQueryInterface.call(T(i), r), a && T(i).data(k).to(a), t.preventDefault()
                    }
                }
            }, r(e, null, [{
                key: "VERSION", get: function () {
                    return "4.1.1"
                }
            }, {
                key: "Default", get: function () {
                    return O
                }
            }]), e
        }(), T(document).on(L.CLICK_DATA_API, F.DATA_SLIDE, P._dataApiClickHandler), T(window).on(L.LOAD_DATA_API, function () {
            T(F.DATA_RIDE).each(function () {
                var e = T(this);
                P._jQueryInterface.call(e, e.data())
            })
        }), T.fn[C] = P._jQueryInterface, T.fn[C].Constructor = P, T.fn[C].noConflict = function () {
            return T.fn[C] = A, P._jQueryInterface
        }, P), kt = (U = "collapse", H = "." + (Y = "bs.collapse"), W = (R = t).fn[U], q = {
            toggle: !0,
            parent: ""
        }, V = {toggle: "boolean", parent: "(string|element)"}, B = {
            SHOW: "show" + H,
            SHOWN: "shown" + H,
            HIDE: "hide" + H,
            HIDDEN: "hidden" + H,
            CLICK_DATA_API: "click" + H + ".data-api"
        }, z = "show", $ = "collapse", G = "collapsing", K = "collapsed", "width", "height", X = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        }, Q = function () {
            function e(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = R.makeArray(R('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = R(X.DATA_TOGGLE), i = 0; i < n.length; i++) {
                    var r = n[i], o = xt.getSelectorFromElement(r);
                    null !== o && 0 < R(o).filter(e).length && (this._selector = o, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }

            var t = e.prototype;
            return t.toggle = function () {
                R(this._element).hasClass(z) ? this.hide() : this.show()
            }, t.show = function () {
                var t, n, i = this;
                if (!(this._isTransitioning || R(this._element).hasClass(z) || (this._parent && 0 === (t = R.makeArray(R(this._parent).find(X.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), t && (n = R(t).not(this._selector).data(Y)) && n._isTransitioning))) {
                    var r = R.Event(B.SHOW);
                    if (R(this._element).trigger(r), !r.isDefaultPrevented()) {
                        t && (e._jQueryInterface.call(R(t).not(this._selector), "hide"), n || R(t).data(Y, null));
                        var o = this._getDimension();
                        R(this._element).removeClass($).addClass(G), (this._element.style[o] = 0) < this._triggerArray.length && R(this._triggerArray).removeClass(K).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var a = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                            s = xt.getTransitionDurationFromElement(this._element);
                        R(this._element).one(xt.TRANSITION_END, function () {
                            R(i._element).removeClass(G).addClass($).addClass(z), i._element.style[o] = "", i.setTransitioning(!1), R(i._element).trigger(B.SHOWN)
                        }).emulateTransitionEnd(s), this._element.style[o] = this._element[a] + "px"
                    }
                }
            }, t.hide = function () {
                var e = this;
                if (!this._isTransitioning && R(this._element).hasClass(z)) {
                    var t = R.Event(B.HIDE);
                    if (R(this._element).trigger(t), !t.isDefaultPrevented()) {
                        var n = this._getDimension();
                        if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", xt.reflow(this._element), R(this._element).addClass(G).removeClass($).removeClass(z), 0 < this._triggerArray.length) for (var i = 0; i < this._triggerArray.length; i++) {
                            var r = this._triggerArray[i], o = xt.getSelectorFromElement(r);
                            null !== o && (R(o).hasClass(z) || R(r).addClass(K).attr("aria-expanded", !1))
                        }
                        this.setTransitioning(!0), this._element.style[n] = "";
                        var a = xt.getTransitionDurationFromElement(this._element);
                        R(this._element).one(xt.TRANSITION_END, function () {
                            e.setTransitioning(!1), R(e._element).removeClass(G).addClass($).trigger(B.HIDDEN)
                        }).emulateTransitionEnd(a)
                    }
                }
            }, t.setTransitioning = function (e) {
                this._isTransitioning = e
            }, t.dispose = function () {
                R.removeData(this._element, Y), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, t._getConfig = function (e) {
                return (e = o({}, q, e)).toggle = Boolean(e.toggle), xt.typeCheckConfig(U, e, V), e
            }, t._getDimension = function () {
                return R(this._element).hasClass("width") ? "width" : "height"
            }, t._getParent = function () {
                var t = this, n = null;
                xt.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = R(this._config.parent)[0];
                var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                return R(n).find(i).each(function (n, i) {
                    t._addAriaAndCollapsedClass(e._getTargetFromElement(i), [i])
                }), n
            }, t._addAriaAndCollapsedClass = function (e, t) {
                if (e) {
                    var n = R(e).hasClass(z);
                    0 < t.length && R(t).toggleClass(K, !n).attr("aria-expanded", n)
                }
            }, e._getTargetFromElement = function (e) {
                var t = xt.getSelectorFromElement(e);
                return t ? R(t)[0] : null
            }, e._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = R(this), i = n.data(Y), r = o({}, q, n.data(), "object" == typeof t && t ? t : {});
                    if (!i && r.toggle && /show|hide/.test(t) && (r.toggle = !1), i || (i = new e(this, r), n.data(Y, i)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION", get: function () {
                    return "4.1.1"
                }
            }, {
                key: "Default", get: function () {
                    return q
                }
            }]), e
        }(), R(document).on(B.CLICK_DATA_API, X.DATA_TOGGLE, function (e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var t = R(this), n = xt.getSelectorFromElement(this);
            R(n).each(function () {
                var e = R(this), n = e.data(Y) ? "toggle" : t.data();
                Q._jQueryInterface.call(e, n)
            })
        }), R.fn[U] = Q._jQueryInterface, R.fn[U].Constructor = Q, R.fn[U].noConflict = function () {
            return R.fn[U] = W, Q._jQueryInterface
        }, Q),
        Et = (J = "dropdown", te = "." + (ee = "bs.dropdown"), ne = ".data-api", ie = (Z = t).fn[J], re = new RegExp("38|40|27"), oe = {
            HIDE: "hide" + te,
            HIDDEN: "hidden" + te,
            SHOW: "show" + te,
            SHOWN: "shown" + te,
            CLICK: "click" + te,
            CLICK_DATA_API: "click" + te + ne,
            KEYDOWN_DATA_API: "keydown" + te + ne,
            KEYUP_DATA_API: "keyup" + te + ne
        }, ae = "disabled", se = "show", "dropup", "dropright", "dropleft", le = "dropdown-menu-right", "position-static", ue = '[data-toggle="dropdown"]', ".dropdown form", ce = ".dropdown-menu", ".navbar-nav", ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", "top-start", "top-end", "bottom-start", "bottom-end", "right-start", "left-start", de = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        }, he = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        }, fe = function () {
            function e(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }

            var t = e.prototype;
            return t.toggle = function () {
                if (!this._element.disabled && !Z(this._element).hasClass(ae)) {
                    var t = e._getParentFromElement(this._element), i = Z(this._menu).hasClass(se);
                    if (e._clearMenus(), !i) {
                        var r = {relatedTarget: this._element}, o = Z.Event(oe.SHOW, r);
                        if (Z(t).trigger(o), !o.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if (void 0 === n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                var a = this._element;
                                "parent" === this._config.reference ? a = t : xt.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && Z(t).addClass("position-static"), this._popper = new n(a, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === Z(t).closest(".navbar-nav").length && Z(document.body).children().on("mouseover", null, Z.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), Z(this._menu).toggleClass(se), Z(t).toggleClass(se).trigger(Z.Event(oe.SHOWN, r))
                        }
                    }
                }
            }, t.dispose = function () {
                Z.removeData(this._element, ee), Z(this._element).off(te), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, t.update = function () {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, t._addEventListeners = function () {
                var e = this;
                Z(this._element).on(oe.CLICK, function (t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, t._getConfig = function (e) {
                return e = o({}, this.constructor.Default, Z(this._element).data(), e), xt.typeCheckConfig(J, e, this.constructor.DefaultType), e
            }, t._getMenuElement = function () {
                if (!this._menu) {
                    var t = e._getParentFromElement(this._element);
                    this._menu = Z(t).find(ce)[0]
                }
                return this._menu
            }, t._getPlacement = function () {
                var e = Z(this._element).parent(), t = "bottom-start";
                return e.hasClass("dropup") ? (t = "top-start", Z(this._menu).hasClass(le) && (t = "top-end")) : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : Z(this._menu).hasClass(le) && (t = "bottom-end"), t
            }, t._detectNavbar = function () {
                return 0 < Z(this._element).closest(".navbar").length
            }, t._getPopperConfig = function () {
                var e = this, t = {};
                "function" == typeof this._config.offset ? t.fn = function (t) {
                    return t.offsets = o({}, t.offsets, e._config.offset(t.offsets) || {}), t
                } : t.offset = this._config.offset;
                var n = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: t,
                        flip: {enabled: this._config.flip},
                        preventOverflow: {boundariesElement: this._config.boundary}
                    }
                };
                return "static" === this._config.display && (n.modifiers.applyStyle = {enabled: !1}), n
            }, e._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = Z(this).data(ee);
                    if (n || (n = new e(this, "object" == typeof t ? t : null), Z(this).data(ee, n)), "string" == typeof t) {
                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                        n[t]()
                    }
                })
            }, e._clearMenus = function (t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var n = Z.makeArray(Z(ue)), i = 0; i < n.length; i++) {
                    var r = e._getParentFromElement(n[i]), o = Z(n[i]).data(ee), a = {relatedTarget: n[i]};
                    if (o) {
                        var s = o._menu;
                        if (Z(r).hasClass(se) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && Z.contains(r, t.target))) {
                            var l = Z.Event(oe.HIDE, a);
                            Z(r).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && Z(document.body).children().off("mouseover", null, Z.noop), n[i].setAttribute("aria-expanded", "false"), Z(s).removeClass(se), Z(r).removeClass(se).trigger(Z.Event(oe.HIDDEN, a)))
                        }
                    }
                }
            }, e._getParentFromElement = function (e) {
                var t, n = xt.getSelectorFromElement(e);
                return n && (t = Z(n)[0]), t || e.parentNode
            }, e._dataApiKeydownHandler = function (t) {
                if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || Z(t.target).closest(ce).length)) : re.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !Z(this).hasClass(ae))) {
                    var n = e._getParentFromElement(this), i = Z(n).hasClass(se);
                    if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
                        var r = Z(n).find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)").get();
                        if (0 !== r.length) {
                            var o = r.indexOf(t.target);
                            38 === t.which && 0 < o && o--, 40 === t.which && o < r.length - 1 && o++, o < 0 && (o = 0), r[o].focus()
                        }
                    } else {
                        if (27 === t.which) {
                            var a = Z(n).find(ue)[0];
                            Z(a).trigger("focus")
                        }
                        Z(this).trigger("click")
                    }
                }
            }, r(e, null, [{
                key: "VERSION", get: function () {
                    return "4.1.1"
                }
            }, {
                key: "Default", get: function () {
                    return de
                }
            }, {
                key: "DefaultType", get: function () {
                    return he
                }
            }]), e
        }(), Z(document).on(oe.KEYDOWN_DATA_API, ue, fe._dataApiKeydownHandler).on(oe.KEYDOWN_DATA_API, ce, fe._dataApiKeydownHandler).on(oe.CLICK_DATA_API + " " + oe.KEYUP_DATA_API, fe._clearMenus).on(oe.CLICK_DATA_API, ue, function (e) {
            e.preventDefault(), e.stopPropagation(), fe._jQueryInterface.call(Z(this), "toggle")
        }).on(oe.CLICK_DATA_API, ".dropdown form", function (e) {
            e.stopPropagation()
        }), Z.fn[J] = fe._jQueryInterface, Z.fn[J].Constructor = fe, Z.fn[J].noConflict = function () {
            return Z.fn[J] = ie, fe._jQueryInterface
        }, fe), St = (me = "modal", ve = "." + (ge = "bs.modal"), ye = (pe = t).fn[me], be = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }, _e = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }, we = {
            HIDE: "hide" + ve,
            HIDDEN: "hidden" + ve,
            SHOW: "show" + ve,
            SHOWN: "shown" + ve,
            FOCUSIN: "focusin" + ve,
            RESIZE: "resize" + ve,
            CLICK_DISMISS: "click.dismiss" + ve,
            KEYDOWN_DISMISS: "keydown.dismiss" + ve,
            MOUSEUP_DISMISS: "mouseup.dismiss" + ve,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + ve,
            CLICK_DATA_API: "click" + ve + ".data-api"
        }, "modal-scrollbar-measure", "modal-backdrop", xe = "modal-open", De = "fade", Te = "show", Ce = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top",
            NAVBAR_TOGGLER: ".navbar-toggler"
        }, ke = function () {
            function e(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = pe(e).find(Ce.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
            }

            var t = e.prototype;
            return t.toggle = function (e) {
                return this._isShown ? this.hide() : this.show(e)
            }, t.show = function (e) {
                var t = this;
                if (!this._isTransitioning && !this._isShown) {
                    pe(this._element).hasClass(De) && (this._isTransitioning = !0);
                    var n = pe.Event(we.SHOW, {relatedTarget: e});
                    pe(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), pe(document.body).addClass(xe), this._setEscapeEvent(), this._setResizeEvent(), pe(this._element).on(we.CLICK_DISMISS, Ce.DATA_DISMISS, function (e) {
                        return t.hide(e)
                    }), pe(this._dialog).on(we.MOUSEDOWN_DISMISS, function () {
                        pe(t._element).one(we.MOUSEUP_DISMISS, function (e) {
                            pe(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function () {
                        return t._showElement(e)
                    }))
                }
            }, t.hide = function (e) {
                var t = this;
                if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                    var n = pe.Event(we.HIDE);
                    if (pe(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = pe(this._element).hasClass(De);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), pe(document).off(we.FOCUSIN), pe(this._element).removeClass(Te), pe(this._element).off(we.CLICK_DISMISS), pe(this._dialog).off(we.MOUSEDOWN_DISMISS), i) {
                            var r = xt.getTransitionDurationFromElement(this._element);
                            pe(this._element).one(xt.TRANSITION_END, function (e) {
                                return t._hideModal(e)
                            }).emulateTransitionEnd(r)
                        } else this._hideModal()
                    }
                }
            }, t.dispose = function () {
                pe.removeData(this._element, ge), pe(window, document, this._element, this._backdrop).off(ve), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
            }, t.handleUpdate = function () {
                this._adjustDialog()
            }, t._getConfig = function (e) {
                return e = o({}, be, e), xt.typeCheckConfig(me, e, _e), e
            }, t._showElement = function (e) {
                var t = this, n = pe(this._element).hasClass(De);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && xt.reflow(this._element), pe(this._element).addClass(Te), this._config.focus && this._enforceFocus();
                var i = pe.Event(we.SHOWN, {relatedTarget: e}), r = function () {
                    t._config.focus && t._element.focus(), t._isTransitioning = !1, pe(t._element).trigger(i)
                };
                if (n) {
                    var o = xt.getTransitionDurationFromElement(this._element);
                    pe(this._dialog).one(xt.TRANSITION_END, r).emulateTransitionEnd(o)
                } else r()
            }, t._enforceFocus = function () {
                var e = this;
                pe(document).off(we.FOCUSIN).on(we.FOCUSIN, function (t) {
                    document !== t.target && e._element !== t.target && 0 === pe(e._element).has(t.target).length && e._element.focus()
                })
            }, t._setEscapeEvent = function () {
                var e = this;
                this._isShown && this._config.keyboard ? pe(this._element).on(we.KEYDOWN_DISMISS, function (t) {
                    27 === t.which && (t.preventDefault(), e.hide())
                }) : this._isShown || pe(this._element).off(we.KEYDOWN_DISMISS)
            }, t._setResizeEvent = function () {
                var e = this;
                this._isShown ? pe(window).on(we.RESIZE, function (t) {
                    return e.handleUpdate(t)
                }) : pe(window).off(we.RESIZE)
            }, t._hideModal = function () {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                    pe(document.body).removeClass(xe), e._resetAdjustments(), e._resetScrollbar(), pe(e._element).trigger(we.HIDDEN)
                })
            }, t._removeBackdrop = function () {
                this._backdrop && (pe(this._backdrop).remove(), this._backdrop = null)
            }, t._showBackdrop = function (e) {
                var t = this, n = pe(this._element).hasClass(De) ? De : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && pe(this._backdrop).addClass(n), pe(this._backdrop).appendTo(document.body), pe(this._element).on(we.CLICK_DISMISS, function (e) {
                        t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                    }), n && xt.reflow(this._backdrop), pe(this._backdrop).addClass(Te), !e) return;
                    if (!n) return void e();
                    var i = xt.getTransitionDurationFromElement(this._backdrop);
                    pe(this._backdrop).one(xt.TRANSITION_END, e).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    pe(this._backdrop).removeClass(Te);
                    var r = function () {
                        t._removeBackdrop(), e && e()
                    };
                    if (pe(this._element).hasClass(De)) {
                        var o = xt.getTransitionDurationFromElement(this._backdrop);
                        pe(this._backdrop).one(xt.TRANSITION_END, r).emulateTransitionEnd(o)
                    } else r()
                } else e && e()
            }, t._adjustDialog = function () {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, t._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, t._checkScrollbar = function () {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, t._setScrollbar = function () {
                var e = this;
                if (this._isBodyOverflowing) {
                    pe(Ce.FIXED_CONTENT).each(function (t, n) {
                        var i = pe(n)[0].style.paddingRight, r = pe(n).css("padding-right");
                        pe(n).data("padding-right", i).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                    }), pe(Ce.STICKY_CONTENT).each(function (t, n) {
                        var i = pe(n)[0].style.marginRight, r = pe(n).css("margin-right");
                        pe(n).data("margin-right", i).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
                    }), pe(Ce.NAVBAR_TOGGLER).each(function (t, n) {
                        var i = pe(n)[0].style.marginRight, r = pe(n).css("margin-right");
                        pe(n).data("margin-right", i).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px")
                    });
                    var t = document.body.style.paddingRight, n = pe(document.body).css("padding-right");
                    pe(document.body).data("padding-right", t).css("padding-right", parseFloat(n) + this._scrollbarWidth + "px")
                }
            }, t._resetScrollbar = function () {
                pe(Ce.FIXED_CONTENT).each(function (e, t) {
                    var n = pe(t).data("padding-right");
                    void 0 !== n && pe(t).css("padding-right", n).removeData("padding-right")
                }), pe(Ce.STICKY_CONTENT + ", " + Ce.NAVBAR_TOGGLER).each(function (e, t) {
                    var n = pe(t).data("margin-right");
                    void 0 !== n && pe(t).css("margin-right", n).removeData("margin-right")
                });
                var e = pe(document.body).data("padding-right");
                void 0 !== e && pe(document.body).css("padding-right", e).removeData("padding-right")
            }, t._getScrollbarWidth = function () {
                var e = document.createElement("div");
                e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, e._jQueryInterface = function (t, n) {
                return this.each(function () {
                    var i = pe(this).data(ge), r = o({}, be, pe(this).data(), "object" == typeof t && t ? t : {});
                    if (i || (i = new e(this, r), pe(this).data(ge, i)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t](n)
                    } else r.show && i.show(n)
                })
            }, r(e, null, [{
                key: "VERSION", get: function () {
                    return "4.1.1"
                }
            }, {
                key: "Default", get: function () {
                    return be
                }
            }]), e
        }(), pe(document).on(we.CLICK_DATA_API, Ce.DATA_TOGGLE, function (e) {
            var t, n = this, i = xt.getSelectorFromElement(this);
            i && (t = pe(i)[0]);
            var r = pe(t).data(ge) ? "toggle" : o({}, pe(t).data(), pe(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var a = pe(t).one(we.SHOW, function (e) {
                e.isDefaultPrevented() || a.one(we.HIDDEN, function () {
                    pe(n).is(":visible") && n.focus()
                })
            });
            ke._jQueryInterface.call(pe(t), r, this)
        }), pe.fn[me] = ke._jQueryInterface, pe.fn[me].Constructor = ke, pe.fn[me].noConflict = function () {
            return pe.fn[me] = ye, ke._jQueryInterface
        }, ke),
        At = (Se = "tooltip", Oe = "." + (Ae = "bs.tooltip"), Me = (Ee = t).fn[Se], Ne = "bs-tooltip", Ie = new RegExp("(^|\\s)" + Ne + "\\S+", "g"), Fe = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !(je = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}),
            selector: !(Le = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)"
            }),
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        }, "out", Re = {
            HIDE: "hide" + Oe,
            HIDDEN: "hidden" + Oe,
            SHOW: (Pe = "show") + Oe,
            SHOWN: "shown" + Oe,
            INSERTED: "inserted" + Oe,
            CLICK: "click" + Oe,
            FOCUSIN: "focusin" + Oe,
            FOCUSOUT: "focusout" + Oe,
            MOUSEENTER: "mouseenter" + Oe,
            MOUSELEAVE: "mouseleave" + Oe
        }, Ue = "fade", Ye = "show", ".tooltip-inner", ".arrow", He = "hover", We = "focus", "click", "manual", qe = function () {
            function e(e, t) {
                if (void 0 === n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }

            var t = e.prototype;
            return t.enable = function () {
                this._isEnabled = !0
            }, t.disable = function () {
                this._isEnabled = !1
            }, t.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled
            }, t.toggle = function (e) {
                if (this._isEnabled) if (e) {
                    var t = this.constructor.DATA_KEY, n = Ee(e.currentTarget).data(t);
                    n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), Ee(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (Ee(this.getTipElement()).hasClass(Ye)) return void this._leave(null, this);
                    this._enter(null, this)
                }
            }, t.dispose = function () {
                clearTimeout(this._timeout), Ee.removeData(this.element, this.constructor.DATA_KEY), Ee(this.element).off(this.constructor.EVENT_KEY), Ee(this.element).closest(".modal").off("hide.bs.modal"), this.tip && Ee(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, t.show = function () {
                var e = this;
                if ("none" === Ee(this.element).css("display")) throw new Error("Please use show on visible elements");
                var t = Ee.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    Ee(this.element).trigger(t);
                    var i = Ee.contains(this.element.ownerDocument.documentElement, this.element);
                    if (t.isDefaultPrevented() || !i) return;
                    var r = this.getTipElement(), o = xt.getUID(this.constructor.NAME);
                    r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && Ee(r).addClass(Ue);
                    var a = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                        s = this._getAttachment(a);
                    this.addAttachmentClass(s);
                    var l = !1 === this.config.container ? document.body : Ee(this.config.container);
                    Ee(r).data(this.constructor.DATA_KEY, this), Ee.contains(this.element.ownerDocument.documentElement, this.tip) || Ee(r).appendTo(l), Ee(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, r, {
                        placement: s,
                        modifiers: {
                            offset: {offset: this.config.offset},
                            flip: {behavior: this.config.fallbackPlacement},
                            arrow: {element: ".arrow"},
                            preventOverflow: {boundariesElement: this.config.boundary}
                        },
                        onCreate: function (t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function (t) {
                            e._handlePopperPlacementChange(t)
                        }
                    }), Ee(r).addClass(Ye), "ontouchstart" in document.documentElement && Ee(document.body).children().on("mouseover", null, Ee.noop);
                    var u = function () {
                        e.config.animation && e._fixTransition();
                        var t = e._hoverState;
                        e._hoverState = null, Ee(e.element).trigger(e.constructor.Event.SHOWN), "out" === t && e._leave(null, e)
                    };
                    if (Ee(this.tip).hasClass(Ue)) {
                        var c = xt.getTransitionDurationFromElement(this.tip);
                        Ee(this.tip).one(xt.TRANSITION_END, u).emulateTransitionEnd(c)
                    } else u()
                }
            }, t.hide = function (e) {
                var t = this, n = this.getTipElement(), i = Ee.Event(this.constructor.Event.HIDE), r = function () {
                    t._hoverState !== Pe && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), Ee(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
                };
                if (Ee(this.element).trigger(i), !i.isDefaultPrevented()) {
                    if (Ee(n).removeClass(Ye), "ontouchstart" in document.documentElement && Ee(document.body).children().off("mouseover", null, Ee.noop), this._activeTrigger.click = !1, this._activeTrigger[We] = !1, this._activeTrigger[He] = !1, Ee(this.tip).hasClass(Ue)) {
                        var o = xt.getTransitionDurationFromElement(n);
                        Ee(n).one(xt.TRANSITION_END, r).emulateTransitionEnd(o)
                    } else r();
                    this._hoverState = ""
                }
            }, t.update = function () {
                null !== this._popper && this._popper.scheduleUpdate()
            }, t.isWithContent = function () {
                return Boolean(this.getTitle())
            }, t.addAttachmentClass = function (e) {
                Ee(this.getTipElement()).addClass(Ne + "-" + e)
            }, t.getTipElement = function () {
                return this.tip = this.tip || Ee(this.config.template)[0], this.tip
            }, t.setContent = function () {
                var e = Ee(this.getTipElement());
                this.setElementContent(e.find(".tooltip-inner"), this.getTitle()), e.removeClass(Ue + " " + Ye)
            }, t.setElementContent = function (e, t) {
                var n = this.config.html;
                "object" == typeof t && (t.nodeType || t.jquery) ? n ? Ee(t).parent().is(e) || e.empty().append(t) : e.text(Ee(t).text()) : e[n ? "html" : "text"](t)
            }, t.getTitle = function () {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
            }, t._getAttachment = function (e) {
                return je[e.toUpperCase()]
            }, t._setListeners = function () {
                var e = this;
                this.config.trigger.split(" ").forEach(function (t) {
                    if ("click" === t) Ee(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                        return e.toggle(t)
                    }); else if ("manual" !== t) {
                        var n = t === He ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                            i = t === He ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        Ee(e.element).on(n, e.config.selector, function (t) {
                            return e._enter(t)
                        }).on(i, e.config.selector, function (t) {
                            return e._leave(t)
                        })
                    }
                    Ee(e.element).closest(".modal").on("hide.bs.modal", function () {
                        return e.hide()
                    })
                }), this.config.selector ? this.config = o({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, t._fixTitle = function () {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, t._enter = function (e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || Ee(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), Ee(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? We : He] = !0), Ee(t.getTipElement()).hasClass(Ye) || t._hoverState === Pe ? t._hoverState = Pe : (clearTimeout(t._timeout), t._hoverState = Pe, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function () {
                    t._hoverState === Pe && t.show()
                }, t.config.delay.show) : t.show())
            }, t._leave = function (e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || Ee(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), Ee(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? We : He] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function () {
                    "out" === t._hoverState && t.hide()
                }, t.config.delay.hide) : t.hide())
            }, t._isWithActiveTrigger = function () {
                for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
                return !1
            }, t._getConfig = function (e) {
                return "number" == typeof (e = o({}, this.constructor.Default, Ee(this.element).data(), "object" == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), xt.typeCheckConfig(Se, e, this.constructor.DefaultType), e
            }, t._getDelegateConfig = function () {
                var e = {};
                if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, t._cleanTipClass = function () {
                var e = Ee(this.getTipElement()), t = e.attr("class").match(Ie);
                null !== t && 0 < t.length && e.removeClass(t.join(""))
            }, t._handlePopperPlacementChange = function (e) {
                this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, t._fixTransition = function () {
                var e = this.getTipElement(), t = this.config.animation;
                null === e.getAttribute("x-placement") && (Ee(e).removeClass(Ue), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
            }, e._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = Ee(this).data(Ae), i = "object" == typeof t && t;
                    if ((n || !/dispose|hide/.test(t)) && (n || (n = new e(this, i), Ee(this).data(Ae, n)), "string" == typeof t)) {
                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                        n[t]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION", get: function () {
                    return "4.1.1"
                }
            }, {
                key: "Default", get: function () {
                    return Fe
                }
            }, {
                key: "NAME", get: function () {
                    return Se
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return Ae
                }
            }, {
                key: "Event", get: function () {
                    return Re
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return Oe
                }
            }, {
                key: "DefaultType", get: function () {
                    return Le
                }
            }]), e
        }(), Ee.fn[Se] = qe._jQueryInterface, Ee.fn[Se].Constructor = qe, Ee.fn[Se].noConflict = function () {
            return Ee.fn[Se] = Me, qe._jQueryInterface
        }, qe),
        Ot = (Be = "popover", $e = "." + (ze = "bs.popover"), Ge = (Ve = t).fn[Be], Ke = "bs-popover", Xe = new RegExp("(^|\\s)" + Ke + "\\S+", "g"), Qe = o({}, At.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }), Ze = o({}, At.DefaultType, {content: "(string|element|function)"}), "fade", ".popover-header", ".popover-body", Je = {
            HIDE: "hide" + $e,
            HIDDEN: "hidden" + $e,
            SHOW: "show" + $e,
            SHOWN: "shown" + $e,
            INSERTED: "inserted" + $e,
            CLICK: "click" + $e,
            FOCUSIN: "focusin" + $e,
            FOCUSOUT: "focusout" + $e,
            MOUSEENTER: "mouseenter" + $e,
            MOUSELEAVE: "mouseleave" + $e
        }, et = function (e) {
            var t, n;

            function i() {
                return e.apply(this, arguments) || this
            }

            n = e, (t = i).prototype = Object.create(n.prototype), (t.prototype.constructor = t).__proto__ = n;
            var o = i.prototype;
            return o.isWithContent = function () {
                return this.getTitle() || this._getContent()
            }, o.addAttachmentClass = function (e) {
                Ve(this.getTipElement()).addClass(Ke + "-" + e)
            }, o.getTipElement = function () {
                return this.tip = this.tip || Ve(this.config.template)[0], this.tip
            }, o.setContent = function () {
                var e = Ve(this.getTipElement());
                this.setElementContent(e.find(".popover-header"), this.getTitle());
                var t = this._getContent();
                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(".popover-body"), t), e.removeClass("fade show")
            }, o._getContent = function () {
                return this.element.getAttribute("data-content") || this.config.content
            }, o._cleanTipClass = function () {
                var e = Ve(this.getTipElement()), t = e.attr("class").match(Xe);
                null !== t && 0 < t.length && e.removeClass(t.join(""))
            }, i._jQueryInterface = function (e) {
                return this.each(function () {
                    var t = Ve(this).data(ze), n = "object" == typeof e ? e : null;
                    if ((t || !/destroy|hide/.test(e)) && (t || (t = new i(this, n), Ve(this).data(ze, t)), "string" == typeof e)) {
                        if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, r(i, null, [{
                key: "VERSION", get: function () {
                    return "4.1.1"
                }
            }, {
                key: "Default", get: function () {
                    return Qe
                }
            }, {
                key: "NAME", get: function () {
                    return Be
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return ze
                }
            }, {
                key: "Event", get: function () {
                    return Je
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return $e
                }
            }, {
                key: "DefaultType", get: function () {
                    return Ze
                }
            }]), i
        }(At), Ve.fn[Be] = et._jQueryInterface, Ve.fn[Be].Constructor = et, Ve.fn[Be].noConflict = function () {
            return Ve.fn[Be] = Ge, et._jQueryInterface
        }, et), Mt = (nt = "scrollspy", rt = "." + (it = "bs.scrollspy"), ot = (tt = t).fn[nt], at = {
            offset: 10,
            method: "auto",
            target: ""
        }, st = {offset: "number", method: "string", target: "(string|element)"}, lt = {
            ACTIVATE: "activate" + rt,
            SCROLL: "scroll" + rt,
            LOAD_DATA_API: "load" + rt + ".data-api"
        }, "dropdown-item", ut = "active", ct = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }, "offset", dt = "position", ht = function () {
            function e(e, t) {
                var n = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + ct.NAV_LINKS + "," + this._config.target + " " + ct.LIST_ITEMS + "," + this._config.target + " " + ct.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, tt(this._scrollElement).on(lt.SCROLL, function (e) {
                    return n._process(e)
                }), this.refresh(), this._process()
            }

            var t = e.prototype;
            return t.refresh = function () {
                var e = this, t = this._scrollElement === this._scrollElement.window ? "offset" : dt,
                    n = "auto" === this._config.method ? t : this._config.method, i = n === dt ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), tt.makeArray(tt(this._selector)).map(function (e) {
                    var t, r = xt.getSelectorFromElement(e);
                    if (r && (t = tt(r)[0]), t) {
                        var o = t.getBoundingClientRect();
                        if (o.width || o.height) return [tt(t)[n]().top + i, r]
                    }
                    return null
                }).filter(function (e) {
                    return e
                }).sort(function (e, t) {
                    return e[0] - t[0]
                }).forEach(function (t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, t.dispose = function () {
                tt.removeData(this._element, it), tt(this._scrollElement).off(rt), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, t._getConfig = function (e) {
                if ("string" != typeof (e = o({}, at, "object" == typeof e && e ? e : {})).target) {
                    var t = tt(e.target).attr("id");
                    t || (t = xt.getUID(nt), tt(e.target).attr("id", t)), e.target = "#" + t
                }
                return xt.typeCheckConfig(nt, e, st), e
            }, t._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, t._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, t._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, t._process = function () {
                var e = this._getScrollTop() + this._config.offset, t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), n <= e) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                }
            }, t._activate = function (e) {
                this._activeTarget = e, this._clear();
                var t = this._selector.split(",");
                t = t.map(function (t) {
                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                });
                var n = tt(t.join(","));
                n.hasClass("dropdown-item") ? (n.closest(ct.DROPDOWN).find(ct.DROPDOWN_TOGGLE).addClass(ut), n.addClass(ut)) : (n.addClass(ut), n.parents(ct.NAV_LIST_GROUP).prev(ct.NAV_LINKS + ", " + ct.LIST_ITEMS).addClass(ut), n.parents(ct.NAV_LIST_GROUP).prev(ct.NAV_ITEMS).children(ct.NAV_LINKS).addClass(ut)), tt(this._scrollElement).trigger(lt.ACTIVATE, {relatedTarget: e})
            }, t._clear = function () {
                tt(this._selector).filter(ct.ACTIVE).removeClass(ut)
            }, e._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = tt(this).data(it);
                    if (n || (n = new e(this, "object" == typeof t && t), tt(this).data(it, n)), "string" == typeof t) {
                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                        n[t]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION", get: function () {
                    return "4.1.1"
                }
            }, {
                key: "Default", get: function () {
                    return at
                }
            }]), e
        }(), tt(window).on(lt.LOAD_DATA_API, function () {
            for (var e = tt.makeArray(tt(ct.DATA_SPY)), t = e.length; t--;) {
                var n = tt(e[t]);
                ht._jQueryInterface.call(n, n.data())
            }
        }), tt.fn[nt] = ht._jQueryInterface, tt.fn[nt].Constructor = ht, tt.fn[nt].noConflict = function () {
            return tt.fn[nt] = ot, ht._jQueryInterface
        }, ht), Nt = (mt = "." + (pt = "bs.tab"), gt = (ft = t).fn.tab, vt = {
            HIDE: "hide" + mt,
            HIDDEN: "hidden" + mt,
            SHOW: "show" + mt,
            SHOWN: "shown" + mt,
            CLICK_DATA_API: "click" + mt + ".data-api"
        }, "dropdown-menu", yt = "active", "disabled", "fade", "show", ".dropdown", ".nav, .list-group", bt = ".active", _t = "> li > .active", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', ".dropdown-toggle", "> .dropdown-menu .active", wt = function () {
            function e(e) {
                this._element = e
            }

            var t = e.prototype;
            return t.show = function () {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && ft(this._element).hasClass(yt) || ft(this._element).hasClass("disabled"))) {
                    var t, n, i = ft(this._element).closest(".nav, .list-group")[0],
                        r = xt.getSelectorFromElement(this._element);
                    if (i) {
                        var o = "UL" === i.nodeName ? _t : bt;
                        n = (n = ft.makeArray(ft(i).find(o)))[n.length - 1]
                    }
                    var a = ft.Event(vt.HIDE, {relatedTarget: this._element}), s = ft.Event(vt.SHOW, {relatedTarget: n});
                    if (n && ft(n).trigger(a), ft(this._element).trigger(s), !s.isDefaultPrevented() && !a.isDefaultPrevented()) {
                        r && (t = ft(r)[0]), this._activate(this._element, i);
                        var l = function () {
                            var t = ft.Event(vt.HIDDEN, {relatedTarget: e._element}),
                                i = ft.Event(vt.SHOWN, {relatedTarget: n});
                            ft(n).trigger(t), ft(e._element).trigger(i)
                        };
                        t ? this._activate(t, t.parentNode, l) : l()
                    }
                }
            }, t.dispose = function () {
                ft.removeData(this._element, pt), this._element = null
            }, t._activate = function (e, t, n) {
                var i = this, r = ("UL" === t.nodeName ? ft(t).find(_t) : ft(t).children(bt))[0],
                    o = n && r && ft(r).hasClass("fade"), a = function () {
                        return i._transitionComplete(e, r, n)
                    };
                if (r && o) {
                    var s = xt.getTransitionDurationFromElement(r);
                    ft(r).one(xt.TRANSITION_END, a).emulateTransitionEnd(s)
                } else a()
            }, t._transitionComplete = function (e, t, n) {
                if (t) {
                    ft(t).removeClass("show " + yt);
                    var i = ft(t.parentNode).find("> .dropdown-menu .active")[0];
                    i && ft(i).removeClass(yt), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                }
                if (ft(e).addClass(yt), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), xt.reflow(e), ft(e).addClass("show"), e.parentNode && ft(e.parentNode).hasClass("dropdown-menu")) {
                    var r = ft(e).closest(".dropdown")[0];
                    r && ft(r).find(".dropdown-toggle").addClass(yt), e.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, e._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = ft(this), i = n.data(pt);
                    if (i || (i = new e(this), n.data(pt, i)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION", get: function () {
                    return "4.1.1"
                }
            }]), e
        }(), ft(document).on(vt.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (e) {
            e.preventDefault(), wt._jQueryInterface.call(ft(this), "show")
        }), ft.fn.tab = wt._jQueryInterface, ft.fn.tab.Constructor = wt, ft.fn.tab.noConflict = function () {
            return ft.fn.tab = gt, wt._jQueryInterface
        }, wt);
    !function (e) {
        if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(t), e.Util = xt, e.Alert = Dt, e.Button = Tt, e.Carousel = Ct, e.Collapse = kt, e.Dropdown = Et, e.Modal = St, e.Popover = Ot, e.Scrollspy = Mt, e.Tab = Nt, e.Tooltip = At, Object.defineProperty(e, "__esModule", {value: !0})
}), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
}(this, function () {
    "use strict";

    function e() {
        return Ie.apply(null, arguments)
    }

    function t(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }

    function n(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    }

    function i(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }

    function r(e, t) {
        for (var n in t) i(t, n) && (e[n] = t[n]);
        return i(t, "toString") && (e.toString = t.toString), i(t, "valueOf") && (e.valueOf = t.valueOf), e
    }

    function o(e, t, n, i) {
        return ee(e, t, n, i, !0).utc()
    }

    function a(e) {
        return null == e._pf && (e._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }), e._pf
    }

    function s(e) {
        if (null == e._isValid) {
            var t = a(e);
            e._isValid = !(isNaN(e._d.getTime()) || !(t.overflow < 0) || t.empty || t.invalidMonth || t.invalidWeekday || t.nullInput || t.invalidFormat || t.userInvalidated), e._strict && (e._isValid = e._isValid && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour)
        }
        return e._isValid
    }

    function l(e) {
        var t = o(NaN);
        return null != e ? r(a(t), e) : a(t).userInvalidated = !0, t
    }

    function u(e, t) {
        var n, i, r;
        if (void 0 !== t._isAMomentObject && (e._isAMomentObject = t._isAMomentObject), void 0 !== t._i && (e._i = t._i), void 0 !== t._f && (e._f = t._f), void 0 !== t._l && (e._l = t._l), void 0 !== t._strict && (e._strict = t._strict), void 0 !== t._tzm && (e._tzm = t._tzm), void 0 !== t._isUTC && (e._isUTC = t._isUTC), void 0 !== t._offset && (e._offset = t._offset), void 0 !== t._pf && (e._pf = a(t)), void 0 !== t._locale && (e._locale = t._locale), je.length > 0) for (n in je) void 0 !== (r = t[i = je[n]]) && (e[i] = r);
        return e
    }

    function c(t) {
        u(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), !1 === Fe && (Fe = !0, e.updateOffset(this), Fe = !1)
    }

    function d(e) {
        return e instanceof c || null != e && null != e._isAMomentObject
    }

    function h(e) {
        return 0 > e ? Math.ceil(e) : Math.floor(e)
    }

    function f(e) {
        var t = +e, n = 0;
        return 0 !== t && isFinite(t) && (n = h(t)), n
    }

    function p(e, t, n) {
        var i, r = Math.min(e.length, t.length), o = Math.abs(e.length - t.length), a = 0;
        for (i = 0; r > i; i++) (n && e[i] !== t[i] || !n && f(e[i]) !== f(t[i])) && a++;
        return a + o
    }

    function m() {
    }

    function g(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }

    function v(e) {
        var t = null;
        if (!Pe[e] && "undefined" != typeof module && module && module.exports) try {
            t = Le._abbr, require("./locale/" + e), y(t)
        } catch (e) {
        }
        return Pe[e]
    }

    function y(e, t) {
        var n;
        return e && ((n = void 0 === t ? _(e) : b(e, t)) && (Le = n)), Le._abbr
    }

    function b(e, t) {
        return null !== t ? (t.abbr = e, Pe[e] = Pe[e] || new m, Pe[e].set(t), y(e), Pe[e]) : (delete Pe[e], null)
    }

    function _(e) {
        var n;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Le;
        if (!t(e)) {
            if (n = v(e)) return n;
            e = [e]
        }
        return function (e) {
            for (var t, n, i, r, o = 0; o < e.length;) {
                for (t = (r = g(e[o]).split("-")).length, n = (n = g(e[o + 1])) ? n.split("-") : null; t > 0;) {
                    if (i = v(r.slice(0, t).join("-"))) return i;
                    if (n && n.length >= t && p(r, n, !0) >= t - 1) break;
                    t--
                }
                o++
            }
            return null
        }(e)
    }

    function w(e, t) {
        var n = e.toLowerCase();
        Re[n] = Re[n + "s"] = Re[t] = e
    }

    function x(e) {
        return "string" == typeof e ? Re[e] || Re[e.toLowerCase()] : void 0
    }

    function D(e) {
        var t, n, r = {};
        for (n in e) i(e, n) && ((t = x(n)) && (r[t] = e[n]));
        return r
    }

    function T(t, n) {
        return function (i) {
            return null != i ? (k(this, t, i), e.updateOffset(this, n), this) : C(this, t)
        }
    }

    function C(e, t) {
        return e._d["get" + (e._isUTC ? "UTC" : "") + t]()
    }

    function k(e, t, n) {
        return e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
    }

    function E(e, t) {
        var n;
        if ("object" == typeof e) for (n in e) this.set(n, e[n]); else if ("function" == typeof this[e = x(e)]) return this[e](t);
        return this
    }

    function S(e, t, n) {
        var i = "" + Math.abs(e), r = t - i.length;
        return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
    }

    function A(e, t, n, i) {
        var r = i;
        "string" == typeof i && (r = function () {
            return this[i]()
        }), e && (We[e] = r), t && (We[t[0]] = function () {
            return S(r.apply(this, arguments), t[1], t[2])
        }), n && (We[n] = function () {
            return this.localeData().ordinal(r.apply(this, arguments), e)
        })
    }

    function O(e) {
        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }

    function M(e, t) {
        return e.isValid() ? (t = N(t, e.localeData()), He[t] = He[t] || function (e) {
            var t, n, i = e.match(Ue);
            for (t = 0, n = i.length; n > t; t++) We[i[t]] ? i[t] = We[i[t]] : i[t] = O(i[t]);
            return function (r) {
                var o = "";
                for (t = 0; n > t; t++) o += i[t] instanceof Function ? i[t].call(r, e) : i[t];
                return o
            }
        }(t), He[t](e)) : e.localeData().invalidDate()
    }

    function N(e, t) {
        function n(e) {
            return t.longDateFormat(e) || e
        }

        var i = 5;
        for (Ye.lastIndex = 0; i >= 0 && Ye.test(e);) e = e.replace(Ye, n), Ye.lastIndex = 0, i -= 1;
        return e
    }

    function I(e, t, n) {
        nt[e] = function (e) {
            return "function" == typeof e && "[object Function]" === Object.prototype.toString.call(e)
        }(t) ? t : function (e) {
            return e && n ? n : t
        }
    }

    function L(e, t) {
        return i(nt, e) ? nt[e](t._strict, t._locale) : new RegExp(function (e) {
            return e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, i, r) {
                return t || n || i || r
            }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }(e))
    }

    function j(e, t) {
        var n, i = t;
        for ("string" == typeof e && (e = [e]), "number" == typeof t && (i = function (e, n) {
            n[t] = f(e)
        }), n = 0; n < e.length; n++) it[e[n]] = i
    }

    function F(e, t) {
        j(e, function (e, n, i, r) {
            i._w = i._w || {}, t(e, i._w, i, r)
        })
    }

    function P(e, t, n) {
        null != t && i(it, e) && it[e](t, n._a, n, e)
    }

    function R(e, t) {
        return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
    }

    function U(e, t) {
        var n;
        return "string" == typeof t && "number" != typeof (t = e.localeData().monthsParse(t)) ? e : (n = Math.min(e.date(), R(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e)
    }

    function Y(t) {
        return null != t ? (U(this, t), e.updateOffset(this, !0), this) : C(this, "Month")
    }

    function H(e) {
        var t, n = e._a;
        return n && -2 === a(e).overflow && (t = n[ot] < 0 || n[ot] > 11 ? ot : n[at] < 1 || n[at] > R(n[rt], n[ot]) ? at : n[st] < 0 || n[st] > 24 || 24 === n[st] && (0 !== n[lt] || 0 !== n[ut] || 0 !== n[ct]) ? st : n[lt] < 0 || n[lt] > 59 ? lt : n[ut] < 0 || n[ut] > 59 ? ut : n[ct] < 0 || n[ct] > 999 ? ct : -1, a(e)._overflowDayOfYear && (rt > t || t > at) && (t = at), a(e).overflow = t), e
    }

    function W(t) {
        !1 === e.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
    }

    function q(e, t) {
        var n = !0;
        return r(function () {
            return n && (W(e + "\n" + (new Error).stack), n = !1), t.apply(this, arguments)
        }, t)
    }

    function V(e) {
        var t, n, i = e._i, r = pt.exec(i);
        if (r) {
            for (a(e).iso = !0, t = 0, n = mt.length; n > t; t++) if (mt[t][1].exec(i)) {
                e._f = mt[t][0];
                break
            }
            for (t = 0, n = gt.length; n > t; t++) if (gt[t][1].exec(i)) {
                e._f += (r[6] || " ") + gt[t][0];
                break
            }
            i.match(et) && (e._f += "Z"), Q(e)
        } else e._isValid = !1
    }

    function B(e) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return 1970 > e && t.setUTCFullYear(e), t
    }

    function z(e) {
        return $(e) ? 366 : 365
    }

    function $(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }

    function G(e, t, n) {
        var i, r = n - t, o = n - e.day();
        return o > r && (o -= 7), r - 7 > o && (o += 7), i = te(e).add(o, "d"), {
            week: Math.ceil(i.dayOfYear() / 7),
            year: i.year()
        }
    }

    function K(e, t, n) {
        return null != e ? e : null != t ? t : n
    }

    function X(e) {
        var t, n, i, r, o = [];
        if (!e._d) {
            for (i = function (e) {
                var t = new Date;
                return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
            }(e), e._w && null == e._a[at] && null == e._a[ot] && function (e) {
                var t, n, i, r, o, a, s;
                null != (t = e._w).GG || null != t.W || null != t.E ? (o = 1, a = 4, n = K(t.GG, e._a[rt], G(te(), 1, 4).year), i = K(t.W, 1), r = K(t.E, 1)) : (o = e._locale._week.dow, a = e._locale._week.doy, n = K(t.gg, e._a[rt], G(te(), o, a).year), i = K(t.w, 1), null != t.d ? (r = t.d, o > r && ++i) : r = null != t.e ? t.e + o : o), s = function (e, t, n, i, r) {
                    var o, a = 6 + r - i, s = B(e, 0, 1 + a).getUTCDay();
                    return r > s && (s += 7), {
                        year: (o = 1 + a + 7 * (t - 1) - s + (n = null != n ? 1 * n : r)) > 0 ? e : e - 1,
                        dayOfYear: o > 0 ? o : z(e - 1) + o
                    }
                }(n, i, r, a, o), e._a[rt] = s.year, e._dayOfYear = s.dayOfYear
            }(e), e._dayOfYear && (r = K(e._a[rt], i[rt]), e._dayOfYear > z(r) && (a(e)._overflowDayOfYear = !0), n = B(r, 0, e._dayOfYear), e._a[ot] = n.getUTCMonth(), e._a[at] = n.getUTCDate()), t = 0; 3 > t && null == e._a[t]; ++t) e._a[t] = o[t] = i[t];
            for (; 7 > t; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            24 === e._a[st] && 0 === e._a[lt] && 0 === e._a[ut] && 0 === e._a[ct] && (e._nextDay = !0, e._a[st] = 0), e._d = (e._useUTC ? B : function (e, t, n, i, r, o, a) {
                var s = new Date(e, t, n, i, r, o, a);
                return 1970 > e && s.setFullYear(e), s
            }).apply(null, o), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[st] = 24)
        }
    }

    function Q(t) {
        if (t._f !== e.ISO_8601) {
            t._a = [], a(t).empty = !0;
            var n, i, r, o, s, l = "" + t._i, u = l.length, c = 0;
            for (r = N(t._f, t._locale).match(Ue) || [], n = 0; n < r.length; n++) o = r[n], (i = (l.match(L(o, t)) || [])[0]) && ((s = l.substr(0, l.indexOf(i))).length > 0 && a(t).unusedInput.push(s), l = l.slice(l.indexOf(i) + i.length), c += i.length), We[o] ? (i ? a(t).empty = !1 : a(t).unusedTokens.push(o), P(o, i, t)) : t._strict && !i && a(t).unusedTokens.push(o);
            a(t).charsLeftOver = u - c, l.length > 0 && a(t).unusedInput.push(l), !0 === a(t).bigHour && t._a[st] <= 12 && t._a[st] > 0 && (a(t).bigHour = void 0), t._a[st] = function (e, t, n) {
                var i;
                return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((i = e.isPM(n)) && 12 > t && (t += 12), i || 12 !== t || (t = 0), t) : t
            }(t._locale, t._a[st], t._meridiem), X(t), H(t)
        } else V(t)
    }

    function Z(e) {
        var i = e._i, o = e._f;
        return e._locale = e._locale || _(e._l), null === i || void 0 === o && "" === i ? l({nullInput: !0}) : ("string" == typeof i && (e._i = i = e._locale.preparse(i)), d(i) ? new c(H(i)) : (t(o) ? function (e) {
            var t, n, i, o, l;
            if (0 === e._f.length) return a(e).invalidFormat = !0, void (e._d = new Date(NaN));
            for (o = 0; o < e._f.length; o++) l = 0, t = u({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[o], Q(t), s(t) && (l += a(t).charsLeftOver, l += 10 * a(t).unusedTokens.length, a(t).score = l, (null == i || i > l) && (i = l, n = t));
            r(e, n || t)
        }(e) : o ? Q(e) : n(i) ? e._d = i : J(e), e))
    }

    function J(i) {
        var r = i._i;
        void 0 === r ? i._d = new Date : n(r) ? i._d = new Date(+r) : "string" == typeof r ? function (t) {
            var n = vt.exec(t._i);
            null !== n ? t._d = new Date(+n[1]) : (V(t), !1 === t._isValid && (delete t._isValid, e.createFromInputFallback(t)))
        }(i) : t(r) ? (i._a = function (e, t) {
            var n, i = [];
            for (n = 0; n < e.length; ++n) i.push(t(e[n], n));
            return i
        }(r.slice(0), function (e) {
            return parseInt(e, 10)
        }), X(i)) : "object" == typeof r ? function (e) {
            if (!e._d) {
                var t = D(e._i);
                e._a = [t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], X(e)
            }
        }(i) : "number" == typeof r ? i._d = new Date(r) : e.createFromInputFallback(i)
    }

    function ee(e, t, n, i, r) {
        var o = {};
        return "boolean" == typeof n && (i = n, n = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = r, o._l = n, o._i = e, o._f = t, o._strict = i, function (e) {
            var t = new c(H(Z(e)));
            return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
        }(o)
    }

    function te(e, t, n, i) {
        return ee(e, t, n, i, !1)
    }

    function ne(e, n) {
        var i, r;
        if (1 === n.length && t(n[0]) && (n = n[0]), !n.length) return te();
        for (i = n[0], r = 1; r < n.length; ++r) (!n[r].isValid() || n[r][e](i)) && (i = n[r]);
        return i
    }

    function ie(e) {
        var t = D(e), n = t.year || 0, i = t.quarter || 0, r = t.month || 0, o = t.week || 0, a = t.day || 0,
            s = t.hour || 0, l = t.minute || 0, u = t.second || 0, c = t.millisecond || 0;
        this._milliseconds = +c + 1e3 * u + 6e4 * l + 36e5 * s, this._days = +a + 7 * o, this._months = +r + 3 * i + 12 * n, this._data = {}, this._locale = _(), this._bubble()
    }

    function re(e) {
        return e instanceof ie
    }

    function oe(e, t) {
        A(e, 0, 0, function () {
            var e = this.utcOffset(), n = "+";
            return 0 > e && (e = -e, n = "-"), n + S(~~(e / 60), 2) + t + S(~~e % 60, 2)
        })
    }

    function ae(e) {
        var t = (e || "").match(et) || [], n = ((t[t.length - 1] || []) + "").match(wt) || ["-", 0, 0],
            i = 60 * n[1] + f(n[2]);
        return "+" === n[0] ? i : -i
    }

    function se(t, i) {
        var r, o;
        return i._isUTC ? (r = i.clone(), o = (d(t) || n(t) ? +t : +te(t)) - +r, r._d.setTime(+r._d + o), e.updateOffset(r, !1), r) : te(t).local()
    }

    function le(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
    }

    function ue() {
        return this._isUTC && 0 === this._offset
    }

    function ce(e, t) {
        var n, r, o, a = e, s = null;
        return re(e) ? a = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : "number" == typeof e ? (a = {}, t ? a[t] = e : a.milliseconds = e) : (s = xt.exec(e)) ? (n = "-" === s[1] ? -1 : 1, a = {
            y: 0,
            d: f(s[at]) * n,
            h: f(s[st]) * n,
            m: f(s[lt]) * n,
            s: f(s[ut]) * n,
            ms: f(s[ct]) * n
        }) : (s = Dt.exec(e)) ? (n = "-" === s[1] ? -1 : 1, a = {
            y: de(s[2], n),
            M: de(s[3], n),
            d: de(s[4], n),
            h: de(s[5], n),
            m: de(s[6], n),
            s: de(s[7], n),
            w: de(s[8], n)
        }) : null == a ? a = {} : "object" == typeof a && ("from" in a || "to" in a) && (o = function (e, t) {
            var n;
            return t = se(t, e), e.isBefore(t) ? n = he(e, t) : ((n = he(t, e)).milliseconds = -n.milliseconds, n.months = -n.months), n
        }(te(a.from), te(a.to)), (a = {}).ms = o.milliseconds, a.M = o.months), r = new ie(a), re(e) && i(e, "_locale") && (r._locale = e._locale), r
    }

    function de(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t
    }

    function he(e, t) {
        var n = {milliseconds: 0, months: 0};
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
    }

    function fe(e, t) {
        return function (n, i) {
            var r;
            return null === i || isNaN(+i) || (function (e, t) {
                ft[e] || (W(t), ft[e] = !0)
            }(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), r = n, n = i, i = r), pe(this, ce(n = "string" == typeof n ? +n : n, i), e), this
        }
    }

    function pe(t, n, i, r) {
        var o = n._milliseconds, a = n._days, s = n._months;
        r = null == r || r, o && t._d.setTime(+t._d + o * i), a && k(t, "Date", C(t, "Date") + a * i), s && U(t, C(t, "Month") + s * i), r && e.updateOffset(t, a || s)
    }

    function me() {
        var e = this.clone().utc();
        return 0 < e.year() && e.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : M(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : M(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function ge(e) {
        var t;
        return void 0 === e ? this._locale._abbr : (null != (t = _(e)) && (this._locale = t), this)
    }

    function ve() {
        return this._locale
    }

    function ye(e, t) {
        A(0, [e, e.length], 0, t)
    }

    function be(e, t, n) {
        return G(te([e, 11, 31 + t - n]), t, n).week
    }

    function _e(e, t) {
        A(e, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }

    function we(e, t) {
        return t._meridiemParse
    }

    function xe(e, t) {
        t[ct] = f(1e3 * ("0." + e))
    }

    function De(e) {
        return e
    }

    function Te(e, t, n, i) {
        var r = _(), a = o().set(i, t);
        return r[n](a, e)
    }

    function Ce(e, t, n, i, r) {
        if ("number" == typeof e && (t = e, e = void 0), e = e || "", null != t) return Te(e, t, n, r);
        var o, a = [];
        for (o = 0; i > o; o++) a[o] = Te(e, o, n, r);
        return a
    }

    function ke(e, t, n, i) {
        var r = ce(t, n);
        return e._milliseconds += i * r._milliseconds, e._days += i * r._days, e._months += i * r._months, e._bubble()
    }

    function Ee(e) {
        return 0 > e ? Math.floor(e) : Math.ceil(e)
    }

    function Se(e) {
        return 4800 * e / 146097
    }

    function Ae(e) {
        return 146097 * e / 4800
    }

    function Oe(e) {
        return function () {
            return this.as(e)
        }
    }

    function Me(e) {
        return function () {
            return this._data[e]
        }
    }

    function Ne() {
        var e, t, n = rn(this._milliseconds) / 1e3, i = rn(this._days), r = rn(this._months);
        e = h(n / 60), t = h(e / 60), n %= 60, e %= 60;
        var o = h(r / 12), a = r %= 12, s = i, l = t, u = e, c = n, d = this.asSeconds();
        return d ? (0 > d ? "-" : "") + "P" + (o ? o + "Y" : "") + (a ? a + "M" : "") + (s ? s + "D" : "") + (l || u || c ? "T" : "") + (l ? l + "H" : "") + (u ? u + "M" : "") + (c ? c + "S" : "") : "P0D"
    }

    var Ie, Le, je = e.momentProperties = [], Fe = !1, Pe = {}, Re = {},
        Ue = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        Ye = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, He = {}, We = {}, qe = /\d/, Ve = /\d\d/, Be = /\d{3}/,
        ze = /\d{4}/, $e = /[+-]?\d{6}/, Ge = /\d\d?/, Ke = /\d{1,3}/, Xe = /\d{1,4}/, Qe = /[+-]?\d{1,6}/, Ze = /\d+/,
        Je = /[+-]?\d+/, et = /Z|[+-]\d\d:?\d\d/gi,
        tt = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        nt = {}, it = {}, rt = 0, ot = 1, at = 2, st = 3, lt = 4, ut = 5, ct = 6;
    A("M", ["MM", 2], "Mo", function () {
        return this.month() + 1
    }), A("MMM", 0, 0, function (e) {
        return this.localeData().monthsShort(this, e)
    }), A("MMMM", 0, 0, function (e) {
        return this.localeData().months(this, e)
    }), w("month", "M"), I("M", Ge), I("MM", Ge, Ve), I("MMM", tt), I("MMMM", tt), j(["M", "MM"], function (e, t) {
        t[ot] = f(e) - 1
    }), j(["MMM", "MMMM"], function (e, t, n, i) {
        var r = n._locale.monthsParse(e, i, n._strict);
        null != r ? t[ot] = r : a(n).invalidMonth = e
    });
    var dt = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ht = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), ft = {};
    e.suppressDeprecationWarnings = !1;
    var pt = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        mt = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]],
        gt = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]],
        vt = /^\/?Date\((\-?\d+)/i;
    e.createFromInputFallback = q("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }), A(0, ["YY", 2], 0, function () {
        return this.year() % 100
    }), A(0, ["YYYY", 4], 0, "year"), A(0, ["YYYYY", 5], 0, "year"), A(0, ["YYYYYY", 6, !0], 0, "year"), w("year", "y"), I("Y", Je), I("YY", Ge, Ve), I("YYYY", Xe, ze), I("YYYYY", Qe, $e), I("YYYYYY", Qe, $e), j(["YYYYY", "YYYYYY"], rt), j("YYYY", function (t, n) {
        n[rt] = 2 === t.length ? e.parseTwoDigitYear(t) : f(t)
    }), j("YY", function (t, n) {
        n[rt] = e.parseTwoDigitYear(t)
    }), e.parseTwoDigitYear = function (e) {
        return f(e) + (f(e) > 68 ? 1900 : 2e3)
    };
    var yt = T("FullYear", !1);
    A("w", ["ww", 2], "wo", "week"), A("W", ["WW", 2], "Wo", "isoWeek"), w("week", "w"), w("isoWeek", "W"), I("w", Ge), I("ww", Ge, Ve), I("W", Ge), I("WW", Ge, Ve), F(["w", "ww", "W", "WW"], function (e, t, n, i) {
        t[i.substr(0, 1)] = f(e)
    });
    A("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), w("dayOfYear", "DDD"), I("DDD", Ke), I("DDDD", Be), j(["DDD", "DDDD"], function (e, t, n) {
        n._dayOfYear = f(e)
    }), e.ISO_8601 = function () {
    };
    var bt = q("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function () {
            var e = te.apply(null, arguments);
            return this > e ? this : e
        }),
        _t = q("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function () {
            var e = te.apply(null, arguments);
            return e > this ? this : e
        });
    oe("Z", ":"), oe("ZZ", ""), I("Z", et), I("ZZ", et), j(["Z", "ZZ"], function (e, t, n) {
        n._useUTC = !0, n._tzm = ae(e)
    });
    var wt = /([\+\-]|\d\d)/gi;
    e.updateOffset = function () {
    };
    var xt = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
        Dt = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
    ce.fn = ie.prototype;
    var Tt = fe(1, "add"), Ct = fe(-1, "subtract");
    e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    var kt = q("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
        return void 0 === e ? this.localeData() : this.locale(e)
    });
    A(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100
    }), A(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100
    }), ye("gggg", "weekYear"), ye("ggggg", "weekYear"), ye("GGGG", "isoWeekYear"), ye("GGGGG", "isoWeekYear"), w("weekYear", "gg"), w("isoWeekYear", "GG"), I("G", Je), I("g", Je), I("GG", Ge, Ve), I("gg", Ge, Ve), I("GGGG", Xe, ze), I("gggg", Xe, ze), I("GGGGG", Qe, $e), I("ggggg", Qe, $e), F(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, i) {
        t[i.substr(0, 2)] = f(e)
    }), F(["gg", "GG"], function (t, n, i, r) {
        n[r] = e.parseTwoDigitYear(t)
    }), A("Q", 0, 0, "quarter"), w("quarter", "Q"), I("Q", qe), j("Q", function (e, t) {
        t[ot] = 3 * (f(e) - 1)
    }), A("D", ["DD", 2], "Do", "date"), w("date", "D"), I("D", Ge), I("DD", Ge, Ve), I("Do", function (e, t) {
        return e ? t._ordinalParse : t._ordinalParseLenient
    }), j(["D", "DD"], at), j("Do", function (e, t) {
        t[at] = f(e.match(Ge)[0])
    });
    var Et = T("Date", !0);
    A("d", 0, "do", "day"), A("dd", 0, 0, function (e) {
        return this.localeData().weekdaysMin(this, e)
    }), A("ddd", 0, 0, function (e) {
        return this.localeData().weekdaysShort(this, e)
    }), A("dddd", 0, 0, function (e) {
        return this.localeData().weekdays(this, e)
    }), A("e", 0, 0, "weekday"), A("E", 0, 0, "isoWeekday"), w("day", "d"), w("weekday", "e"), w("isoWeekday", "E"), I("d", Ge), I("e", Ge), I("E", Ge), I("dd", tt), I("ddd", tt), I("dddd", tt), F(["dd", "ddd", "dddd"], function (e, t, n) {
        var i = n._locale.weekdaysParse(e);
        null != i ? t.d = i : a(n).invalidWeekday = e
    }), F(["d", "e", "E"], function (e, t, n, i) {
        t[i] = f(e)
    });
    var St = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        At = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Ot = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    A("H", ["HH", 2], 0, "hour"), A("h", ["hh", 2], 0, function () {
        return this.hours() % 12 || 12
    }), _e("a", !0), _e("A", !1), w("hour", "h"), I("a", we), I("A", we), I("H", Ge), I("h", Ge), I("HH", Ge, Ve), I("hh", Ge, Ve), j(["H", "HH"], st), j(["a", "A"], function (e, t, n) {
        n._isPm = n._locale.isPM(e), n._meridiem = e
    }), j(["h", "hh"], function (e, t, n) {
        t[st] = f(e), a(n).bigHour = !0
    });
    var Mt = T("Hours", !0);
    A("m", ["mm", 2], 0, "minute"), w("minute", "m"), I("m", Ge), I("mm", Ge, Ve), j(["m", "mm"], lt);
    var Nt = T("Minutes", !1);
    A("s", ["ss", 2], 0, "second"), w("second", "s"), I("s", Ge), I("ss", Ge, Ve), j(["s", "ss"], ut);
    var It, Lt = T("Seconds", !1);
    for (A("S", 0, 0, function () {
        return ~~(this.millisecond() / 100)
    }), A(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10)
    }), A(0, ["SSS", 3], 0, "millisecond"), A(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond()
    }), A(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond()
    }), A(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond()
    }), A(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond()
    }), A(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond()
    }), A(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond()
    }), w("millisecond", "ms"), I("S", Ke, qe), I("SS", Ke, Ve), I("SSS", Ke, Be), It = "SSSS"; It.length <= 9; It += "S") I(It, Ze);
    for (It = "S"; It.length <= 9; It += "S") j(It, xe);
    var jt = T("Milliseconds", !1);
    A("z", 0, 0, "zoneAbbr"), A("zz", 0, 0, "zoneName");
    var Ft = c.prototype;
    Ft.add = Tt, Ft.calendar = function (e, t) {
        var n = e || te(), i = se(n, this).startOf("day"), r = this.diff(i, "days", !0),
            o = -6 > r ? "sameElse" : -1 > r ? "lastWeek" : 0 > r ? "lastDay" : 1 > r ? "sameDay" : 2 > r ? "nextDay" : 7 > r ? "nextWeek" : "sameElse";
        return this.format(t && t[o] || this.localeData().calendar(o, this, te(n)))
    }, Ft.clone = function () {
        return new c(this)
    }, Ft.diff = function (e, t, n) {
        var i, r, o = se(e, this), a = 6e4 * (o.utcOffset() - this.utcOffset());
        return "year" === (t = x(t)) || "month" === t || "quarter" === t ? (r = function (e, t) {
            var n, i, r = 12 * (t.year() - e.year()) + (t.month() - e.month()), o = e.clone().add(r, "months");
            return 0 > t - o ? (n = e.clone().add(r - 1, "months"), i = (t - o) / (o - n)) : (n = e.clone().add(r + 1, "months"), i = (t - o) / (n - o)), -(r + i)
        }(this, o), "quarter" === t ? r /= 3 : "year" === t && (r /= 12)) : (i = this - o, r = "second" === t ? i / 1e3 : "minute" === t ? i / 6e4 : "hour" === t ? i / 36e5 : "day" === t ? (i - a) / 864e5 : "week" === t ? (i - a) / 6048e5 : i), n ? r : h(r)
    }, Ft.endOf = function (e) {
        return void 0 === (e = x(e)) || "millisecond" === e ? this : this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms")
    }, Ft.format = function (t) {
        var n = M(this, t || e.defaultFormat);
        return this.localeData().postformat(n)
    }, Ft.from = function (e, t) {
        return this.isValid() ? ce({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }, Ft.fromNow = function (e) {
        return this.from(te(), e)
    }, Ft.to = function (e, t) {
        return this.isValid() ? ce({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }, Ft.toNow = function (e) {
        return this.to(te(), e)
    }, Ft.get = E, Ft.invalidAt = function () {
        return a(this).overflow
    }, Ft.isAfter = function (e, t) {
        return "millisecond" === (t = x(void 0 !== t ? t : "millisecond")) ? +this > +(e = d(e) ? e : te(e)) : (d(e) ? +e : +te(e)) < +this.clone().startOf(t)
    }, Ft.isBefore = function (e, t) {
        var n;
        return "millisecond" === (t = x(void 0 !== t ? t : "millisecond")) ? +(e = d(e) ? e : te(e)) > +this : (n = d(e) ? +e : +te(e), +this.clone().endOf(t) < n)
    }, Ft.isBetween = function (e, t, n) {
        return this.isAfter(e, n) && this.isBefore(t, n)
    }, Ft.isSame = function (e, t) {
        var n;
        return "millisecond" === (t = x(t || "millisecond")) ? +this == +(e = d(e) ? e : te(e)) : (n = +te(e), +this.clone().startOf(t) <= n && n <= +this.clone().endOf(t))
    }, Ft.isValid = function () {
        return s(this)
    }, Ft.lang = kt, Ft.locale = ge, Ft.localeData = ve, Ft.max = _t, Ft.min = bt, Ft.parsingFlags = function () {
        return r({}, a(this))
    }, Ft.set = E, Ft.startOf = function (e) {
        switch (e = x(e)) {
            case"year":
                this.month(0);
            case"quarter":
            case"month":
                this.date(1);
            case"week":
            case"isoWeek":
            case"day":
                this.hours(0);
            case"hour":
                this.minutes(0);
            case"minute":
                this.seconds(0);
            case"second":
                this.milliseconds(0)
        }
        return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
    }, Ft.subtract = Ct, Ft.toArray = function () {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
    }, Ft.toObject = function () {
        var e = this;
        return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
        }
    }, Ft.toDate = function () {
        return this._offset ? new Date(+this) : this._d
    }, Ft.toISOString = me, Ft.toJSON = me, Ft.toString = function () {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }, Ft.unix = function () {
        return Math.floor(+this / 1e3)
    }, Ft.valueOf = function () {
        return +this._d - 6e4 * (this._offset || 0)
    }, Ft.year = yt, Ft.isLeapYear = function () {
        return $(this.year())
    }, Ft.weekYear = function (e) {
        var t = G(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
        return null == e ? t : this.add(e - t, "y")
    }, Ft.isoWeekYear = function (e) {
        var t = G(this, 1, 4).year;
        return null == e ? t : this.add(e - t, "y")
    }, Ft.quarter = Ft.quarters = function (e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
    }, Ft.month = Y, Ft.daysInMonth = function () {
        return R(this.year(), this.month())
    }, Ft.week = Ft.weeks = function (e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d")
    }, Ft.isoWeek = Ft.isoWeeks = function (e) {
        var t = G(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d")
    }, Ft.weeksInYear = function () {
        var e = this.localeData()._week;
        return be(this.year(), e.dow, e.doy)
    }, Ft.isoWeeksInYear = function () {
        return be(this.year(), 1, 4)
    }, Ft.date = Et, Ft.day = Ft.days = function (e) {
        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (e = function (e, t) {
            return "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
        }(e, this.localeData()), this.add(e - t, "d")) : t
    }, Ft.weekday = function (e) {
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, "d")
    }, Ft.isoWeekday = function (e) {
        return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
    }, Ft.dayOfYear = function (e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add(e - t, "d")
    }, Ft.hour = Ft.hours = Mt, Ft.minute = Ft.minutes = Nt, Ft.second = Ft.seconds = Lt, Ft.millisecond = Ft.milliseconds = jt, Ft.utcOffset = function (t, n) {
        var i, r = this._offset || 0;
        return null != t ? ("string" == typeof t && (t = ae(t)), Math.abs(t) < 16 && (t *= 60), !this._isUTC && n && (i = le(this)), this._offset = t, this._isUTC = !0, null != i && this.add(i, "m"), r !== t && (!n || this._changeInProgress ? pe(this, ce(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, e.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? r : le(this)
    }, Ft.utc = function (e) {
        return this.utcOffset(0, e)
    }, Ft.local = function (e) {
        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(le(this), "m")), this
    }, Ft.parseZone = function () {
        return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(ae(this._i)), this
    }, Ft.hasAlignedHourOffset = function (e) {
        return e = e ? te(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0
    }, Ft.isDST = function () {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }, Ft.isDSTShifted = function () {
        if (void 0 !== this._isDSTShifted) return this._isDSTShifted;
        var e = {};
        if (u(e, this), (e = Z(e))._a) {
            var t = e._isUTC ? o(e._a) : te(e._a);
            this._isDSTShifted = this.isValid() && p(e._a, t.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    }, Ft.isLocal = function () {
        return !this._isUTC
    }, Ft.isUtcOffset = function () {
        return this._isUTC
    }, Ft.isUtc = ue, Ft.isUTC = ue, Ft.zoneAbbr = function () {
        return this._isUTC ? "UTC" : ""
    }, Ft.zoneName = function () {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }, Ft.dates = q("dates accessor is deprecated. Use date instead.", Et), Ft.months = q("months accessor is deprecated. Use month instead", Y), Ft.years = q("years accessor is deprecated. Use year instead", yt), Ft.zone = q("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", function (e, t) {
        return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
    });
    var Pt = Ft, Rt = m.prototype;
    Rt._calendar = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    }, Rt.calendar = function (e, t, n) {
        var i = this._calendar[e];
        return "function" == typeof i ? i.call(t, n) : i
    }, Rt._longDateFormat = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    }, Rt.longDateFormat = function (e) {
        var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
            return e.slice(1)
        }), this._longDateFormat[e])
    }, Rt._invalidDate = "Invalid date", Rt.invalidDate = function () {
        return this._invalidDate
    }, Rt._ordinal = "%d", Rt.ordinal = function (e) {
        return this._ordinal.replace("%d", e)
    }, Rt._ordinalParse = /\d{1,2}/, Rt.preparse = De, Rt.postformat = De, Rt._relativeTime = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    }, Rt.relativeTime = function (e, t, n, i) {
        var r = this._relativeTime[n];
        return "function" == typeof r ? r(e, t, n, i) : r.replace(/%d/i, e)
    }, Rt.pastFuture = function (e, t) {
        var n = this._relativeTime[e > 0 ? "future" : "past"];
        return "function" == typeof n ? n(t) : n.replace(/%s/i, t)
    }, Rt.set = function (e) {
        var t, n;
        for (n in e) "function" == typeof (t = e[n]) ? this[n] = t : this["_" + n] = t;
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }, Rt.months = function (e) {
        return this._months[e.month()]
    }, Rt._months = dt, Rt.monthsShort = function (e) {
        return this._monthsShort[e.month()]
    }, Rt._monthsShort = ht, Rt.monthsParse = function (e, t, n) {
        var i, r, a;
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; 12 > i; i++) {
            if (r = o([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (a = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(a.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[i].test(e)) return i;
            if (n && "MMM" === t && this._shortMonthsParse[i].test(e)) return i;
            if (!n && this._monthsParse[i].test(e)) return i
        }
    }, Rt.week = function (e) {
        return G(e, this._week.dow, this._week.doy).week
    }, Rt._week = {dow: 0, doy: 6}, Rt.firstDayOfYear = function () {
        return this._week.doy
    }, Rt.firstDayOfWeek = function () {
        return this._week.dow
    }, Rt.weekdays = function (e) {
        return this._weekdays[e.day()]
    }, Rt._weekdays = St, Rt.weekdaysMin = function (e) {
        return this._weekdaysMin[e.day()]
    }, Rt._weekdaysMin = Ot, Rt.weekdaysShort = function (e) {
        return this._weekdaysShort[e.day()]
    }, Rt._weekdaysShort = At, Rt.weekdaysParse = function (e) {
        var t, n, i;
        for (this._weekdaysParse = this._weekdaysParse || [], t = 0; 7 > t; t++) if (this._weekdaysParse[t] || (n = te([2e3, 1]).day(t), i = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[t] = new RegExp(i.replace(".", ""), "i")), this._weekdaysParse[t].test(e)) return t
    }, Rt.isPM = function (e) {
        return "p" === (e + "").toLowerCase().charAt(0)
    }, Rt._meridiemParse = /[ap]\.?m?\.?/i, Rt.meridiem = function (e, t, n) {
        return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
    }, y("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function (e) {
            var t = e % 10;
            return e + (1 === f(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        }
    }), e.lang = q("moment.lang is deprecated. Use moment.locale instead.", y), e.langData = q("moment.langData is deprecated. Use moment.localeData instead.", _);
    var Ut = Math.abs, Yt = Oe("ms"), Ht = Oe("s"), Wt = Oe("m"), qt = Oe("h"), Vt = Oe("d"), Bt = Oe("w"),
        zt = Oe("M"), $t = Oe("y"), Gt = Me("milliseconds"), Kt = Me("seconds"), Xt = Me("minutes"), Qt = Me("hours"),
        Zt = Me("days"), Jt = Me("months"), en = Me("years"), tn = Math.round, nn = {s: 45, m: 45, h: 22, d: 26, M: 11},
        rn = Math.abs, on = ie.prototype;
    return on.abs = function () {
        var e = this._data;
        return this._milliseconds = Ut(this._milliseconds), this._days = Ut(this._days), this._months = Ut(this._months), e.milliseconds = Ut(e.milliseconds), e.seconds = Ut(e.seconds), e.minutes = Ut(e.minutes), e.hours = Ut(e.hours), e.months = Ut(e.months), e.years = Ut(e.years), this
    }, on.add = function (e, t) {
        return ke(this, e, t, 1)
    }, on.subtract = function (e, t) {
        return ke(this, e, t, -1)
    }, on.as = function (e) {
        var t, n, i = this._milliseconds;
        if ("month" === (e = x(e)) || "year" === e) return t = this._days + i / 864e5, n = this._months + Se(t), "month" === e ? n : n / 12;
        switch (t = this._days + Math.round(Ae(this._months)), e) {
            case"week":
                return t / 7 + i / 6048e5;
            case"day":
                return t + i / 864e5;
            case"hour":
                return 24 * t + i / 36e5;
            case"minute":
                return 1440 * t + i / 6e4;
            case"second":
                return 86400 * t + i / 1e3;
            case"millisecond":
                return Math.floor(864e5 * t) + i;
            default:
                throw new Error("Unknown unit " + e)
        }
    }, on.asMilliseconds = Yt, on.asSeconds = Ht, on.asMinutes = Wt, on.asHours = qt, on.asDays = Vt, on.asWeeks = Bt, on.asMonths = zt, on.asYears = $t, on.valueOf = function () {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * f(this._months / 12)
    }, on._bubble = function () {
        var e, t, n, i, r, o = this._milliseconds, a = this._days, s = this._months, l = this._data;
        return o >= 0 && a >= 0 && s >= 0 || 0 >= o && 0 >= a && 0 >= s || (o += 864e5 * Ee(Ae(s) + a), a = 0, s = 0), l.milliseconds = o % 1e3, e = h(o / 1e3), l.seconds = e % 60, t = h(e / 60), l.minutes = t % 60, n = h(t / 60), l.hours = n % 24, a += h(n / 24), s += r = h(Se(a)), a -= Ee(Ae(r)), i = h(s / 12), s %= 12, l.days = a, l.months = s, l.years = i, this
    }, on.get = function (e) {
        return this[(e = x(e)) + "s"]()
    }, on.milliseconds = Gt, on.seconds = Kt, on.minutes = Xt, on.hours = Qt, on.days = Zt, on.weeks = function () {
        return h(this.days() / 7)
    }, on.months = Jt, on.years = en, on.humanize = function (e) {
        var t = this.localeData(), n = function (e, t, n) {
            var i = ce(e).abs(), r = tn(i.as("s")), o = tn(i.as("m")), a = tn(i.as("h")), s = tn(i.as("d")),
                l = tn(i.as("M")), u = tn(i.as("y")),
                c = r < nn.s && ["s", r] || 1 === o && ["m"] || o < nn.m && ["mm", o] || 1 === a && ["h"] || a < nn.h && ["hh", a] || 1 === s && ["d"] || s < nn.d && ["dd", s] || 1 === l && ["M"] || l < nn.M && ["MM", l] || 1 === u && ["y"] || ["yy", u];
            return c[2] = t, c[3] = +e > 0, c[4] = n, function (e, t, n, i, r) {
                return r.relativeTime(t || 1, !!n, e, i)
            }.apply(null, c)
        }(this, !e, t);
        return e && (n = t.pastFuture(+this, n)), t.postformat(n)
    }, on.toISOString = Ne, on.toString = Ne, on.toJSON = Ne, on.locale = ge, on.localeData = ve, on.toIsoString = q("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Ne), on.lang = kt, A("X", 0, 0, "unix"), A("x", 0, 0, "valueOf"), I("x", Je), I("X", /[+-]?\d+(\.\d{1,3})?/), j("X", function (e, t, n) {
        n._d = new Date(1e3 * parseFloat(e, 10))
    }), j("x", function (e, t, n) {
        n._d = new Date(f(e))
    }), e.version = "2.10.6", function (e) {
        Ie = e
    }(te), e.fn = Pt, e.min = function () {
        return ne("isBefore", [].slice.call(arguments, 0))
    }, e.max = function () {
        return ne("isAfter", [].slice.call(arguments, 0))
    }, e.utc = o, e.unix = function (e) {
        return te(1e3 * e)
    }, e.months = function (e, t) {
        return Ce(e, t, "months", 12, "month")
    }, e.isDate = n, e.locale = y, e.invalid = l, e.duration = ce, e.isMoment = d, e.weekdays = function (e, t) {
        return Ce(e, t, "weekdays", 7, "day")
    }, e.parseZone = function () {
        return te.apply(null, arguments).parseZone()
    }, e.localeData = _, e.isDuration = re, e.monthsShort = function (e, t) {
        return Ce(e, t, "monthsShort", 12, "month")
    }, e.weekdaysMin = function (e, t) {
        return Ce(e, t, "weekdaysMin", 7, "day")
    }, e.defineLocale = b, e.weekdaysShort = function (e, t) {
        return Ce(e, t, "weekdaysShort", 7, "day")
    }, e.normalizeUnits = x, e.relativeTimeThreshold = function (e, t) {
        return void 0 !== nn[e] && (void 0 === t ? nn[e] : (nn[e] = t, !0))
    }, e
}), function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.swal = t() : e.swal = t()
}(this, function () {
    return function (e) {
        function t(i) {
            if (n[i]) return n[i].exports;
            var r = n[i] = {i: i, l: !1, exports: {}};
            return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
        }

        var n = {};
        return t.m = e, t.c = n, t.d = function (e, n, i) {
            t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: i})
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 8)
    }([function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = "swal-button";
        t.CLASS_NAMES = {
            MODAL: "swal-modal",
            OVERLAY: "swal-overlay",
            SHOW_MODAL: "swal-overlay--show-modal",
            MODAL_TITLE: "swal-title",
            MODAL_TEXT: "swal-text",
            ICON: "swal-icon",
            ICON_CUSTOM: "swal-icon--custom",
            CONTENT: "swal-content",
            FOOTER: "swal-footer",
            BUTTON_CONTAINER: "swal-button-container",
            BUTTON: i,
            CONFIRM_BUTTON: i + "--confirm",
            CANCEL_BUTTON: i + "--cancel",
            DANGER_BUTTON: i + "--danger",
            BUTTON_LOADING: i + "--loading",
            BUTTON_LOADER: i + "__loader"
        }, t.default = t.CLASS_NAMES
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.getNode = function (e) {
            var t = "." + e;
            return document.querySelector(t)
        }, t.stringToNode = function (e) {
            var t = document.createElement("div");
            return t.innerHTML = e.trim(), t.firstChild
        }, t.insertAfter = function (e, t) {
            var n = t.nextSibling;
            t.parentNode.insertBefore(e, n)
        }, t.removeNode = function (e) {
            e.parentElement.removeChild(e)
        }, t.throwErr = function (e) {
            throw"SweetAlert: " + (e = e.replace(/ +(?= )/g, "")).trim()
        }, t.isPlainObject = function (e) {
            if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
            var t = Object.getPrototypeOf(e);
            return null === t || t === Object.prototype
        }, t.ordinalSuffixOf = function (e) {
            var t = e % 10, n = e % 100;
            return 1 === t && 11 !== n ? e + "st" : 2 === t && 12 !== n ? e + "nd" : 3 === t && 13 !== n ? e + "rd" : e + "th"
        }
    }, function (e, t, n) {
        "use strict";

        function i(e) {
            for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
        }

        Object.defineProperty(t, "__esModule", {value: !0}), i(n(25));
        var r = n(26);
        t.overlayMarkup = r.default, i(n(27)), i(n(28)), i(n(29));
        var o = n(0), a = o.default.MODAL_TITLE, s = o.default.MODAL_TEXT, l = o.default.ICON, u = o.default.FOOTER;
        t.iconMarkup = '\n  <div class="' + l + '"></div>', t.titleMarkup = '\n  <div class="' + a + '"></div>\n', t.textMarkup = '\n  <div class="' + s + '"></div>', t.footerMarkup = '\n  <div class="' + u + '"></div>\n'
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = n(1);
        t.CONFIRM_KEY = "confirm", t.CANCEL_KEY = "cancel";
        var r = {visible: !0, text: null, value: null, className: "", closeModal: !0},
            o = Object.assign({}, r, {visible: !1, text: "Cancel", value: null}),
            a = Object.assign({}, r, {text: "OK", value: !0});
        t.defaultButtonList = {cancel: o, confirm: a};
        var s = function (e) {
            switch (e) {
                case t.CONFIRM_KEY:
                    return a;
                case t.CANCEL_KEY:
                    return o;
                default:
                    var n = e.charAt(0).toUpperCase() + e.slice(1);
                    return Object.assign({}, r, {text: n, value: e})
            }
        }, l = function (e, t) {
            var n = s(e);
            return !0 === t ? Object.assign({}, n, {visible: !0}) : "string" == typeof t ? Object.assign({}, n, {
                visible: !0,
                text: t
            }) : i.isPlainObject(t) ? Object.assign({visible: !0}, n, t) : Object.assign({}, n, {visible: !1})
        }, u = function (e) {
            var n = {};
            switch (e.length) {
                case 1:
                    n[t.CANCEL_KEY] = Object.assign({}, o, {visible: !1});
                    break;
                case 2:
                    n[t.CANCEL_KEY] = l(t.CANCEL_KEY, e[0]), n[t.CONFIRM_KEY] = l(t.CONFIRM_KEY, e[1]);
                    break;
                default:
                    i.throwErr("Invalid number of 'buttons' in array (" + e.length + ").\n      If you want more than 2 buttons, you need to use an object!")
            }
            return n
        };
        t.getButtonListOpts = function (e) {
            var n = t.defaultButtonList;
            return "string" == typeof e ? n[t.CONFIRM_KEY] = l(t.CONFIRM_KEY, e) : Array.isArray(e) ? n = u(e) : i.isPlainObject(e) ? n = function (e) {
                for (var t = {}, n = 0, i = Object.keys(e); n < i.length; n++) {
                    var r = i[n], a = e[r], s = l(r, a);
                    t[r] = s
                }
                return t.cancel || (t.cancel = o), t
            }(e) : !0 === e ? n = u([!0, !0]) : !1 === e ? n = u([!1, !1]) : void 0 === e && (n = t.defaultButtonList), n
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = n(1), r = n(2), o = n(0), a = o.default.MODAL, s = o.default.OVERLAY, l = n(30), u = n(31), c = n(32),
            d = n(33);
        t.injectElIntoModal = function (e) {
            var t = i.getNode(a), n = i.stringToNode(e);
            return t.appendChild(n), n
        };
        var h = function (e, t) {
            !function (e) {
                e.className = a, e.textContent = ""
            }(e);
            var n = t.className;
            n && e.classList.add(n)
        };
        t.initModalContent = function (e) {
            var t = i.getNode(a);
            h(t, e), l.default(e.icon), u.initTitle(e.title), u.initText(e.text), d.default(e.content), c.default(e.buttons, e.dangerMode)
        };
        t.default = function () {
            var e = i.getNode(s), t = i.stringToNode(r.modalMarkup);
            e.appendChild(t)
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = n(3), r = {isOpen: !1, promise: null, actions: {}, timer: null}, o = Object.assign({}, r);
        t.resetState = function () {
            o = Object.assign({}, r)
        }, t.setActionValue = function (e) {
            if ("string" == typeof e) return a(i.CONFIRM_KEY, e);
            for (var t in e) a(t, e[t])
        };
        var a = function (e, t) {
            o.actions[e] || (o.actions[e] = {}), Object.assign(o.actions[e], {value: t})
        };
        t.setActionOptionsFor = function (e, t) {
            var n = (void 0 === t ? {} : t).closeModal, i = void 0 === n || n;
            Object.assign(o.actions[e], {closeModal: i})
        }, t.default = o
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = n(1), r = n(3), o = n(0), a = o.default.OVERLAY, s = o.default.SHOW_MODAL, l = o.default.BUTTON,
            u = o.default.BUTTON_LOADING, c = n(5);
        t.openModal = function () {
            i.getNode(a).classList.add(s), c.default.isOpen = !0
        };
        t.onAction = function (e) {
            void 0 === e && (e = r.CANCEL_KEY);
            var t = c.default.actions[e], n = t.value;
            if (!1 === t.closeModal) {
                var o = l + "--" + e;
                i.getNode(o).classList.add(u)
            } else i.getNode(a).classList.remove(s), c.default.isOpen = !1;
            c.default.promise.resolve(n)
        }, t.getState = function () {
            var e = Object.assign({}, c.default);
            return delete e.promise, delete e.timer, e
        }, t.stopLoading = function () {
            for (var e = document.querySelectorAll("." + l), t = 0; t < e.length; t++) e[t].classList.remove(u)
        }
    }, function (e, t) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }, function (e, t, n) {
        (function (t) {
            e.exports = t.sweetAlert = n(9)
        }).call(t, n(7))
    }, function (e, t, n) {
        (function (t) {
            e.exports = t.swal = n(10)
        }).call(t, n(7))
    }, function (e, t, n) {
        "undefined" != typeof window && n(11), n(16);
        var i = n(23).default;
        e.exports = i
    }, function (e, t, n) {
        var i = n(12);
        "string" == typeof i && (i = [[e.i, i, ""]]);
        var r = {insertAt: "top", transform: void 0};
        n(14)(i, r), i.locals && (e.exports = i.locals)
    }, function (e, t, n) {
        (e.exports = n(13)(void 0)).push([e.i, '.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button[not:disabled]:hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel[not:disabled]:hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger[not:disabled]:hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}', ""])
    }, function (e, t) {
        function n(e, t) {
            var n = e[1] || "", i = e[3];
            if (!i) return n;
            if (t && "function" == typeof btoa) {
                var r = function (e) {
                    return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
                }(i);
                return [n].concat(i.sources.map(function (e) {
                    return "/*# sourceURL=" + i.sourceRoot + e + " */"
                })).concat([r]).join("\n")
            }
            return [n].join("\n")
        }

        e.exports = function (e) {
            var t = [];
            return t.toString = function () {
                return this.map(function (t) {
                    var i = n(t, e);
                    return t[2] ? "@media " + t[2] + "{" + i + "}" : i
                }).join("")
            }, t.i = function (e, n) {
                "string" == typeof e && (e = [[null, e, ""]]);
                for (var i = {}, r = 0; r < this.length; r++) {
                    var o = this[r][0];
                    "number" == typeof o && (i[o] = !0)
                }
                for (r = 0; r < e.length; r++) {
                    var a = e[r];
                    "number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
                }
            }, t
        }
    }, function (e, t, n) {
        function i(e, t) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n], r = h[i.id];
                if (r) {
                    r.refs++;
                    for (var o = 0; o < r.parts.length; o++) r.parts[o](i.parts[o]);
                    for (; o < i.parts.length; o++) r.parts.push(c(i.parts[o], t))
                } else {
                    var a = [];
                    for (o = 0; o < i.parts.length; o++) a.push(c(i.parts[o], t));
                    h[i.id] = {id: i.id, refs: 1, parts: a}
                }
            }
        }

        function r(e, t) {
            for (var n = [], i = {}, r = 0; r < e.length; r++) {
                var o = e[r], a = t.base ? o[0] + t.base : o[0], s = {css: o[1], media: o[2], sourceMap: o[3]};
                i[a] ? i[a].parts.push(s) : n.push(i[a] = {id: a, parts: [s]})
            }
            return n
        }

        function o(e, t) {
            var n = p(e.insertInto);
            if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var i = v[v.length - 1];
            if ("top" === e.insertAt) i ? i.nextSibling ? n.insertBefore(t, i.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), v.push(t); else {
                if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                n.appendChild(t)
            }
        }

        function a(e) {
            if (null === e.parentNode) return !1;
            e.parentNode.removeChild(e);
            var t = v.indexOf(e);
            t >= 0 && v.splice(t, 1)
        }

        function s(e) {
            var t = document.createElement("style");
            return e.attrs.type = "text/css", u(t, e.attrs), o(e, t), t
        }

        function l(e) {
            var t = document.createElement("link");
            return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", u(t, e.attrs), o(e, t), t
        }

        function u(e, t) {
            Object.keys(t).forEach(function (n) {
                e.setAttribute(n, t[n])
            })
        }

        function c(e, t) {
            var n, i, r, o;
            if (t.transform && e.css) {
                if (!(o = t.transform(e.css))) return function () {
                };
                e.css = o
            }
            if (t.singleton) {
                var u = g++;
                n = m || (m = s(t)), i = d.bind(null, n, u, !1), r = d.bind(null, n, u, !0)
            } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = l(t), i = function (e, t, n) {
                var i = n.css, r = n.sourceMap, o = void 0 === t.convertToAbsoluteUrls && r;
                (t.convertToAbsoluteUrls || o) && (i = y(i)), r && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
                var a = new Blob([i], {type: "text/css"}), s = e.href;
                e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
            }.bind(null, n, t), r = function () {
                a(n), n.href && URL.revokeObjectURL(n.href)
            }) : (n = s(t), i = function (e, t) {
                var n = t.css, i = t.media;
                if (i && e.setAttribute("media", i), e.styleSheet) e.styleSheet.cssText = n; else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n))
                }
            }.bind(null, n), r = function () {
                a(n)
            });
            return i(e), function (t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    i(e = t)
                } else r()
            }
        }

        function d(e, t, n, i) {
            var r = n ? "" : i.css;
            if (e.styleSheet) e.styleSheet.cssText = b(t, r); else {
                var o = document.createTextNode(r), a = e.childNodes;
                a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
            }
        }

        var h = {}, f = function (e) {
            var t;
            return function () {
                return void 0 === t && (t = function () {
                    return window && document && document.all && !window.atob
                }.apply(this, arguments)), t
            }
        }(), p = function (e) {
            var t = {};
            return function (e) {
                return void 0 === t[e] && (t[e] = function (e) {
                    return document.querySelector(e)
                }.call(this, e)), t[e]
            }
        }(), m = null, g = 0, v = [], y = n(15);
        e.exports = function (e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || (t.singleton = f()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
            var n = r(e, t);
            return i(n, t), function (e) {
                for (var o = [], a = 0; a < n.length; a++) {
                    var s = n[a];
                    (l = h[s.id]).refs--, o.push(l)
                }
                e && i(r(e, t), t);
                for (a = 0; a < o.length; a++) {
                    var l;
                    if (0 === (l = o[a]).refs) {
                        for (var u = 0; u < l.parts.length; u++) l.parts[u]();
                        delete h[l.id]
                    }
                }
            }
        };
        var b = function () {
            var e = [];
            return function (t, n) {
                return e[t] = n, e.filter(Boolean).join("\n")
            }
        }()
    }, function (e, t) {
        e.exports = function (e) {
            var t = "undefined" != typeof window && window.location;
            if (!t) throw new Error("fixUrls requires window.location");
            if (!e || "string" != typeof e) return e;
            var n = t.protocol + "//" + t.host, i = n + t.pathname.replace(/\/[^\/]*$/, "/");
            return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
                var r, o = t.trim().replace(/^"(.*)"$/, function (e, t) {
                    return t
                }).replace(/^'(.*)'$/, function (e, t) {
                    return t
                });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o) ? e : (r = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : i + o.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")")
            })
        }
    }, function (e, t, n) {
        var i = n(17);
        "undefined" == typeof window || window.Promise || (window.Promise = i), n(21), String.prototype.includes || (String.prototype.includes = function (e, t) {
            "use strict";
            return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
        }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            value: function (e, t) {
                if (null == this) throw new TypeError('"this" is null or not defined');
                var n = Object(this), i = n.length >>> 0;
                if (0 === i) return !1;
                for (var r = 0 | t, o = Math.max(r >= 0 ? r : i - Math.abs(r), 0); o < i;) {
                    if (function (e, t) {
                        return e === t || "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t)
                    }(n[o], e)) return !0;
                    o++
                }
                return !1
            }
        }), "undefined" != typeof window && [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function (e) {
            e.hasOwnProperty("remove") || Object.defineProperty(e, "remove", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: function () {
                    this.parentNode.removeChild(this)
                }
            })
        })
    }, function (e, t, n) {
        (function (t) {
            !function (n) {
                function i() {
                }

                function r(e) {
                    if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof e) throw new TypeError("not a function");
                    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], c(e, this)
                }

                function o(e, t) {
                    for (; 3 === e._state;) e = e._value;
                    0 !== e._state ? (e._handled = !0, r._immediateFn(function () {
                        var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                        if (null !== n) {
                            var i;
                            try {
                                i = n(e._value)
                            } catch (e) {
                                return void s(t.promise, e)
                            }
                            a(t.promise, i)
                        } else (1 === e._state ? a : s)(t.promise, e._value)
                    })) : e._deferreds.push(t)
                }

                function a(e, t) {
                    try {
                        if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                        if (t && ("object" == typeof t || "function" == typeof t)) {
                            var n = t.then;
                            if (t instanceof r) return e._state = 3, e._value = t, void l(e);
                            if ("function" == typeof n) return void c(function (e, t) {
                                return function () {
                                    e.apply(t, arguments)
                                }
                            }(n, t), e)
                        }
                        e._state = 1, e._value = t, l(e)
                    } catch (t) {
                        s(e, t)
                    }
                }

                function s(e, t) {
                    e._state = 2, e._value = t, l(e)
                }

                function l(e) {
                    2 === e._state && 0 === e._deferreds.length && r._immediateFn(function () {
                        e._handled || r._unhandledRejectionFn(e._value)
                    });
                    for (var t = 0, n = e._deferreds.length; t < n; t++) o(e, e._deferreds[t]);
                    e._deferreds = null
                }

                function u(e, t, n) {
                    this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
                }

                function c(e, t) {
                    var n = !1;
                    try {
                        e(function (e) {
                            n || (n = !0, a(t, e))
                        }, function (e) {
                            n || (n = !0, s(t, e))
                        })
                    } catch (e) {
                        if (n) return;
                        n = !0, s(t, e)
                    }
                }

                var d = setTimeout;
                r.prototype.catch = function (e) {
                    return this.then(null, e)
                }, r.prototype.then = function (e, t) {
                    var n = new this.constructor(i);
                    return o(this, new u(e, t, n)), n
                }, r.all = function (e) {
                    var t = Array.prototype.slice.call(e);
                    return new r(function (e, n) {
                        function i(o, a) {
                            try {
                                if (a && ("object" == typeof a || "function" == typeof a)) {
                                    var s = a.then;
                                    if ("function" == typeof s) return void s.call(a, function (e) {
                                        i(o, e)
                                    }, n)
                                }
                                t[o] = a, 0 == --r && e(t)
                            } catch (e) {
                                n(e)
                            }
                        }

                        if (0 === t.length) return e([]);
                        for (var r = t.length, o = 0; o < t.length; o++) i(o, t[o])
                    })
                }, r.resolve = function (e) {
                    return e && "object" == typeof e && e.constructor === r ? e : new r(function (t) {
                        t(e)
                    })
                }, r.reject = function (e) {
                    return new r(function (t, n) {
                        n(e)
                    })
                }, r.race = function (e) {
                    return new r(function (t, n) {
                        for (var i = 0, r = e.length; i < r; i++) e[i].then(t, n)
                    })
                }, r._immediateFn = "function" == typeof t && function (e) {
                    t(e)
                } || function (e) {
                    d(e, 0)
                }, r._unhandledRejectionFn = function (e) {
                    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                }, r._setImmediateFn = function (e) {
                    r._immediateFn = e
                }, r._setUnhandledRejectionFn = function (e) {
                    r._unhandledRejectionFn = e
                }, void 0 !== e && e.exports ? e.exports = r : n.Promise || (n.Promise = r)
            }(this)
        }).call(t, n(18).setImmediate)
    }, function (e, t, n) {
        function i(e, t) {
            this._id = e, this._clearFn = t
        }

        var r = Function.prototype.apply;
        t.setTimeout = function () {
            return new i(r.call(setTimeout, window, arguments), clearTimeout)
        }, t.setInterval = function () {
            return new i(r.call(setInterval, window, arguments), clearInterval)
        }, t.clearTimeout = t.clearInterval = function (e) {
            e && e.close()
        }, i.prototype.unref = i.prototype.ref = function () {
        }, i.prototype.close = function () {
            this._clearFn.call(window, this._id)
        }, t.enroll = function (e, t) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = t
        }, t.unenroll = function (e) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
        }, t._unrefActive = t.active = function (e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout(function () {
                e._onTimeout && e._onTimeout()
            }, t))
        }, n(19), t.setImmediate = setImmediate, t.clearImmediate = clearImmediate
    }, function (e, t, n) {
        (function (e, t) {
            !function (e, n) {
                "use strict";

                function i(e) {
                    delete s[e]
                }

                function r(e) {
                    if (l) setTimeout(r, 0, e); else {
                        var t = s[e];
                        if (t) {
                            l = !0;
                            try {
                                !function (e) {
                                    var t = e.callback, i = e.args;
                                    switch (i.length) {
                                        case 0:
                                            t();
                                            break;
                                        case 1:
                                            t(i[0]);
                                            break;
                                        case 2:
                                            t(i[0], i[1]);
                                            break;
                                        case 3:
                                            t(i[0], i[1], i[2]);
                                            break;
                                        default:
                                            t.apply(n, i)
                                    }
                                }(t)
                            } finally {
                                i(e), l = !1
                            }
                        }
                    }
                }

                if (!e.setImmediate) {
                    var o, a = 1, s = {}, l = !1, u = e.document, c = Object.getPrototypeOf && Object.getPrototypeOf(e);
                    c = c && c.setTimeout ? c : e, "[object process]" === {}.toString.call(e.process) ? o = function (e) {
                        t.nextTick(function () {
                            r(e)
                        })
                    } : function () {
                        if (e.postMessage && !e.importScripts) {
                            var t = !0, n = e.onmessage;
                            return e.onmessage = function () {
                                t = !1
                            }, e.postMessage("", "*"), e.onmessage = n, t
                        }
                    }() ? function () {
                        var t = "setImmediate$" + Math.random() + "$", n = function (n) {
                            n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && r(+n.data.slice(t.length))
                        };
                        e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), o = function (n) {
                            e.postMessage(t + n, "*")
                        }
                    }() : e.MessageChannel ? function () {
                        var e = new MessageChannel;
                        e.port1.onmessage = function (e) {
                            r(e.data)
                        }, o = function (t) {
                            e.port2.postMessage(t)
                        }
                    }() : u && "onreadystatechange" in u.createElement("script") ? function () {
                        var e = u.documentElement;
                        o = function (t) {
                            var n = u.createElement("script");
                            n.onreadystatechange = function () {
                                r(t), n.onreadystatechange = null, e.removeChild(n), n = null
                            }, e.appendChild(n)
                        }
                    }() : o = function (e) {
                        setTimeout(r, 0, e)
                    }, c.setImmediate = function (e) {
                        "function" != typeof e && (e = new Function("" + e));
                        for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                        var i = {callback: e, args: t};
                        return s[a] = i, o(a), a++
                    }, c.clearImmediate = i
                }
            }("undefined" == typeof self ? void 0 === e ? this : e : self)
        }).call(t, n(7), n(20))
    }, function (e, t) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }

        function i() {
            throw new Error("clearTimeout has not been defined")
        }

        function r(e) {
            if (u === setTimeout) return setTimeout(e, 0);
            if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(e, 0);
            try {
                return u(e, 0)
            } catch (t) {
                try {
                    return u.call(null, e, 0)
                } catch (t) {
                    return u.call(this, e, 0)
                }
            }
        }

        function o() {
            p && h && (p = !1, h.length ? f = h.concat(f) : m = -1, f.length && a())
        }

        function a() {
            if (!p) {
                var e = r(o);
                p = !0;
                for (var t = f.length; t;) {
                    for (h = f, f = []; ++m < t;) h && h[m].run();
                    m = -1, t = f.length
                }
                h = null, p = !1, function (e) {
                    if (c === clearTimeout) return clearTimeout(e);
                    if ((c === i || !c) && clearTimeout) return c = clearTimeout, clearTimeout(e);
                    try {
                        c(e)
                    } catch (t) {
                        try {
                            return c.call(null, e)
                        } catch (t) {
                            return c.call(this, e)
                        }
                    }
                }(e)
            }
        }

        function s(e, t) {
            this.fun = e, this.array = t
        }

        function l() {
        }

        var u, c, d = e.exports = {};
        !function () {
            try {
                u = "function" == typeof setTimeout ? setTimeout : n
            } catch (e) {
                u = n
            }
            try {
                c = "function" == typeof clearTimeout ? clearTimeout : i
            } catch (e) {
                c = i
            }
        }();
        var h, f = [], p = !1, m = -1;
        d.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            f.push(new s(e, t)), 1 !== f.length || p || r(a)
        }, s.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = l, d.addListener = l, d.once = l, d.off = l, d.removeListener = l, d.removeAllListeners = l, d.emit = l, d.prependListener = l, d.prependOnceListener = l, d.listeners = function (e) {
            return []
        }, d.binding = function (e) {
            throw new Error("process.binding is not supported")
        }, d.cwd = function () {
            return "/"
        }, d.chdir = function (e) {
            throw new Error("process.chdir is not supported")
        }, d.umask = function () {
            return 0
        }
    }, function (e, t, n) {
        "use strict";
        n(22).polyfill()
    }, function (e, t, n) {
        "use strict";

        function i(e, t) {
            if (null == e) throw new TypeError("Cannot convert first argument to object");
            for (var n = Object(e), i = 1; i < arguments.length; i++) {
                var r = arguments[i];
                if (null != r) for (var o = Object.keys(Object(r)), a = 0, s = o.length; a < s; a++) {
                    var l = o[a], u = Object.getOwnPropertyDescriptor(r, l);
                    void 0 !== u && u.enumerable && (n[l] = r[l])
                }
            }
            return n
        }

        e.exports = {
            assign: i, polyfill: function () {
                Object.assign || Object.defineProperty(Object, "assign", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: i
                })
            }
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = n(24), r = n(6), o = n(5), a = n(36), s = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            if ("undefined" != typeof window) {
                var n = a.getOpts.apply(void 0, e);
                return new Promise(function (e, t) {
                    o.default.promise = {resolve: e, reject: t}, i.default(n), setTimeout(function () {
                        r.openModal()
                    })
                })
            }
        };
        s.close = r.onAction, s.getState = r.getState, s.setActionValue = o.setActionValue, s.stopLoading = r.stopLoading, s.setDefaults = a.setDefaults, t.default = s
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = n(1), r = n(0).default.MODAL, o = n(4), a = n(34), s = n(35), l = n(1);
        t.init = function (e) {
            i.getNode(r) || (document.body || l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"), a.default(), o.default()), o.initModalContent(e), s.default(e)
        }, t.default = t.init
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = n(0).default.MODAL;
        t.modalMarkup = '\n  <div class="' + i + '" role="dialog" aria-modal="true"></div>', t.default = t.modalMarkup
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = '<div \n    class="' + n(0).default.OVERLAY + '"\n    tabIndex="-1">\n  </div>';
        t.default = i
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = n(0).default.ICON;
        t.errorIconMarkup = function () {
            var e = i + "--error", t = e + "__line";
            return '\n    <div class="' + e + '__x-mark">\n      <span class="' + t + " " + t + '--left"></span>\n      <span class="' + t + " " + t + '--right"></span>\n    </div>\n  '
        }, t.warningIconMarkup = function () {
            var e = i + "--warning";
            return '\n    <span class="' + e + '__body">\n      <span class="' + e + '__dot"></span>\n    </span>\n  '
        }, t.successIconMarkup = function () {
            var e = i + "--success";
            return '\n    <span class="' + e + "__line " + e + '__line--long"></span>\n    <span class="' + e + "__line " + e + '__line--tip"></span>\n\n    <div class="' + e + '__ring"></div>\n    <div class="' + e + '__hide-corners"></div>\n  '
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = n(0).default.CONTENT;
        t.contentMarkup = '\n  <div class="' + i + '">\n\n  </div>\n'
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = n(0), r = i.default.BUTTON_CONTAINER, o = i.default.BUTTON, a = i.default.BUTTON_LOADER;
        t.buttonMarkup = '\n  <div class="' + r + '">\n\n    <button\n      class="' + o + '"\n    ></button>\n\n    <div class="' + a + '">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = n(4), r = n(2), o = n(0), a = o.default.ICON, s = o.default.ICON_CUSTOM,
            l = ["error", "warning", "success", "info"],
            u = {error: r.errorIconMarkup(), warning: r.warningIconMarkup(), success: r.successIconMarkup()};
        t.default = function (e) {
            if (e) {
                var t = i.injectElIntoModal(r.iconMarkup);
                l.includes(e) ? function (e, t) {
                    var n = a + "--" + e;
                    t.classList.add(n);
                    var i = u[e];
                    i && (t.innerHTML = i)
                }(e, t) : function (e, t) {
                    t.classList.add(s);
                    var n = document.createElement("img");
                    n.src = e, t.appendChild(n)
                }(e, t)
            }
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = n(2), r = n(4), o = function (e) {
            navigator.userAgent.includes("AppleWebKit") && (e.style.display = "none", e.offsetHeight, e.style.display = "")
        };
        t.initTitle = function (e) {
            if (e) {
                var t = r.injectElIntoModal(i.titleMarkup);
                t.textContent = e, o(t)
            }
        }, t.initText = function (e) {
            if (e) {
                var t = document.createDocumentFragment();
                e.split("\n").forEach(function (e, n, i) {
                    t.appendChild(document.createTextNode(e)), n < i.length - 1 && t.appendChild(document.createElement("br"))
                });
                var n = r.injectElIntoModal(i.textMarkup);
                n.appendChild(t), o(n)
            }
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = n(1), r = n(4), o = n(0), a = o.default.BUTTON, s = o.default.DANGER_BUTTON, l = n(3), u = n(2),
            c = n(6), d = n(5), h = function (e, t, n) {
                var r = t.text, o = t.value, h = t.className, f = t.closeModal, p = i.stringToNode(u.buttonMarkup),
                    m = p.querySelector("." + a), g = a + "--" + e;
                m.classList.add(g), h && (Array.isArray(h) ? h : h.split(" ")).filter(function (e) {
                    return e.length > 0
                }).forEach(function (e) {
                    m.classList.add(e)
                }), n && e === l.CONFIRM_KEY && m.classList.add(s), m.textContent = r;
                var v = {};
                return v[e] = o, d.setActionValue(v), d.setActionOptionsFor(e, {closeModal: f}), m.addEventListener("click", function () {
                    return c.onAction(e)
                }), p
            };
        t.default = function (e, t) {
            var n = r.injectElIntoModal(u.footerMarkup);
            for (var i in e) {
                var o = e[i], a = h(i, o, t);
                o.visible && n.appendChild(a)
            }
            0 === n.children.length && n.remove()
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = n(3), r = n(4), o = n(2), a = n(5), s = n(6), l = n(0).default.CONTENT, u = function (e) {
            e.addEventListener("input", function (e) {
                var t = e.target.value;
                a.setActionValue(t)
            }), e.addEventListener("keyup", function (e) {
                if ("Enter" === e.key) return s.onAction(i.CONFIRM_KEY)
            }), setTimeout(function () {
                e.focus(), a.setActionValue("")
            }, 0)
        };
        t.default = function (e) {
            if (e) {
                var t = r.injectElIntoModal(o.contentMarkup), n = e.element, i = e.attributes;
                "string" == typeof n ? function (e, t, n) {
                    var i = document.createElement(t), r = l + "__" + t;
                    for (var o in i.classList.add(r), n) {
                        var a = n[o];
                        i[o] = a
                    }
                    "input" === t && u(i), e.appendChild(i)
                }(t, n, i) : t.appendChild(n)
            }
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = n(1), r = n(2);
        t.default = function () {
            var e = i.stringToNode(r.overlayMarkup);
            document.body.appendChild(e)
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = n(5), r = n(6), o = n(1), a = n(3), s = n(0), l = s.default.MODAL, u = s.default.BUTTON,
            c = s.default.OVERLAY, d = function (e) {
                if (i.default.isOpen) switch (e.key) {
                    case"Escape":
                        return r.onAction(a.CANCEL_KEY)
                }
            }, h = function (e) {
                if (i.default.isOpen) switch (e.key) {
                    case"Tab":
                        return function (e) {
                            e.preventDefault(), p()
                        }(e)
                }
            }, f = function (e) {
                if (i.default.isOpen) return "Tab" === e.key && e.shiftKey ? function (e) {
                    e.preventDefault(), m()
                }(e) : void 0
            }, p = function () {
                var e = o.getNode(u);
                e && (e.tabIndex = 0, e.focus())
            }, m = function () {
                var e = o.getNode(l).querySelectorAll("." + u), t = e[e.length - 1];
                t && t.focus()
            }, g = function () {
                var e = o.getNode(l).querySelectorAll("." + u);
                e.length && (function (e) {
                    e[e.length - 1].addEventListener("keydown", h)
                }(e), function (e) {
                    e[0].addEventListener("keydown", f)
                }(e))
            }, v = function (e) {
                if (o.getNode(c) === e.target) return r.onAction(a.CANCEL_KEY)
            };
        t.default = function (e) {
            e.closeOnEsc ? document.addEventListener("keyup", d) : document.removeEventListener("keyup", d), e.dangerMode ? p() : m(), g(), function (e) {
                var t = o.getNode(c);
                t.removeEventListener("click", v), e && t.addEventListener("click", v)
            }(e.closeOnClickOutside), function (e) {
                i.default.timer && clearTimeout(i.default.timer), e && (i.default.timer = window.setTimeout(function () {
                    return r.onAction(a.CANCEL_KEY)
                }, e))
            }(e.timer)
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = n(1), r = n(3), o = n(37), a = n(38), s = {
            title: null,
            text: null,
            icon: null,
            buttons: r.defaultButtonList,
            content: null,
            className: null,
            closeOnClickOutside: !0,
            closeOnEsc: !0,
            dangerMode: !1,
            timer: null
        }, l = Object.assign({}, s);
        t.setDefaults = function (e) {
            l = Object.assign({}, s, e)
        };
        var u = function (e) {
            var t = e && e.button, n = e && e.buttons;
            return void 0 !== t && void 0 !== n && i.throwErr("Cannot set both 'button' and 'buttons' options!"), void 0 !== t ? {confirm: t} : n
        }, c = function (e) {
            return i.ordinalSuffixOf(e + 1)
        }, d = function (e, t) {
            i.throwErr(c(t) + " argument ('" + e + "') is invalid")
        }, h = function (e, t) {
            var n = e + 1, r = t[n];
            i.isPlainObject(r) || void 0 === r || i.throwErr("Expected " + c(n) + " argument ('" + r + "') to be a plain object")
        }, f = function (e, t, n, r) {
            var o = t instanceof Element;
            if ("string" === typeof t) {
                if (0 === n) return {text: t};
                if (1 === n) return {text: t, title: r[0]};
                if (2 === n) return h(n, r), {icon: t};
                d(t, n)
            } else {
                if (o && 0 === n) return h(n, r), {content: t};
                if (i.isPlainObject(t)) return function (e, t) {
                    var n = e + 1, r = t[n];
                    void 0 !== r && i.throwErr("Unexpected " + c(n) + " argument (" + r + ")")
                }(n, r), t;
                d(t, n)
            }
        };
        t.getOpts = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = {};
            e.forEach(function (t, i) {
                var r = f(0, t, i, e);
                Object.assign(n, r)
            });
            var i = u(n);
            n.buttons = r.getButtonListOpts(i), delete n.button, n.content = o.getContentOpts(n.content);
            var c = Object.assign({}, s, l, n);
            return Object.keys(c).forEach(function (e) {
                a.DEPRECATED_OPTS[e] && a.logDeprecation(e)
            }), c
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = n(1), r = {element: "input", attributes: {placeholder: ""}};
        t.getContentOpts = function (e) {
            return i.isPlainObject(e) ? Object.assign({}, e) : e instanceof Element ? {element: e} : "input" === e ? r : null
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.logDeprecation = function (e) {
            var n = t.DEPRECATED_OPTS[e], i = n.onlyRename, r = n.replacement, o = n.subOption, a = n.link,
                s = 'SweetAlert warning: "' + e + '" option has been ' + (i ? "renamed" : "deprecated") + ".";
            r && (s += " Please use" + (o ? ' "' + o + '" in ' : " ") + '"' + r + '" instead.');
            var l = "https://sweetalert.js.org";
            s += a ? " More details: " + l + a : " More details: " + l + "/guides/#upgrading-from-1x", console.warn(s)
        }, t.DEPRECATED_OPTS = {
            type: {replacement: "icon", link: "/docs/#icon"},
            imageUrl: {replacement: "icon", link: "/docs/#icon"},
            customClass: {replacement: "className", onlyRename: !0, link: "/docs/#classname"},
            imageSize: {},
            showCancelButton: {replacement: "buttons", link: "/docs/#buttons"},
            showConfirmButton: {replacement: "button", link: "/docs/#button"},
            confirmButtonText: {replacement: "button", link: "/docs/#button"},
            confirmButtonColor: {},
            cancelButtonText: {replacement: "buttons", link: "/docs/#buttons"},
            closeOnConfirm: {replacement: "button", subOption: "closeModal", link: "/docs/#button"},
            closeOnCancel: {replacement: "buttons", subOption: "closeModal", link: "/docs/#buttons"},
            showLoaderOnConfirm: {replacement: "buttons"},
            animation: {},
            inputType: {replacement: "content", link: "/docs/#content"},
            inputValue: {replacement: "content", link: "/docs/#content"},
            inputPlaceholder: {replacement: "content", link: "/docs/#content"},
            html: {replacement: "content", link: "/docs/#content"},
            allowEscapeKey: {replacement: "closeOnEsc", onlyRename: !0, link: "/docs/#closeonesc"},
            allowClickOutside: {replacement: "closeOnClickOutside", onlyRename: !0, link: "/docs/#closeonclickoutside"}
        }
    }])
}), function () {
    var e = {
        initialize: function () {
            this.registerEvents()
        }, registerEvents: function () {
            $("body").on("click", "a[data-method]", this.handleMethod)
        }, handleMethod: function (t) {
            var n = $(this), i = n.data("method").toUpperCase();
            -1 !== $.inArray(i, ["PUT", "DELETE"]) && (n.data("confirm-text") && e.verifyConfirm(n, function (t) {
                if (!t) return !1;
                e.createForm(n).submit()
            }), t.preventDefault())
        }, verifyConfirm: function (e, t) {
            swal({
                title: e.data("confirm-title"),
                text: e.data("confirm-text"),
                type: "warning",
                button: e.data("confirm-delete") ? e.data("confirm-delete") : "Yes, delete it!"
            }).then(function (e) {
                t(e)
            })
        }, getCsrfToken: function () {
            return $('meta[name="csrf-token"]').attr("content")
        }, createForm: function (t) {
            var n = $("<form>", {method: "POST", action: t.attr("href")}),
                i = $("<input>", {name: "_token", type: "hidden", value: e.getCsrfToken()}),
                r = $("<input>", {name: "_method", type: "hidden", value: t.data("method")});
            return n.append(i, r).appendTo("body")
        }
    };
    e.initialize()
}(), function (e) {
    if ("function" == typeof define && define.amd) define(e); else if ("object" == typeof exports) module.exports = e(); else {
        var t = window.Cookies, n = window.Cookies = e();
        n.noConflict = function () {
            return window.Cookies = t, n
        }
    }
}(function () {
    function e() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) t[i] = n[i]
        }
        return t
    }

    return function t(n) {
        function i(t, r, o) {
            var a;
            if (arguments.length > 1) {
                if ("number" == typeof (o = e({path: "/"}, i.defaults, o)).expires) {
                    var s = new Date;
                    s.setMilliseconds(s.getMilliseconds() + 864e5 * o.expires), o.expires = s
                }
                try {
                    a = JSON.stringify(r), /^[\{\[]/.test(a) && (r = a)
                } catch (e) {
                }
                return r = n.write ? n.write(r, t) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape), document.cookie = [t, "=", r, o.expires && "; expires=" + o.expires.toUTCString(), o.path && "; path=" + o.path, o.domain && "; domain=" + o.domain, o.secure ? "; secure" : ""].join("")
            }
            t || (a = {});
            for (var l = document.cookie ? document.cookie.split("; ") : [], u = /(%[0-9A-Z]{2})+/g, c = 0; c < l.length; c++) {
                var d = l[c].split("="), h = d[0].replace(u, decodeURIComponent), f = d.slice(1).join("=");
                '"' === f.charAt(0) && (f = f.slice(1, -1));
                try {
                    if (f = n.read ? n.read(f, h) : n(f, h) || f.replace(u, decodeURIComponent), this.json) try {
                        f = JSON.parse(f)
                    } catch (e) {
                    }
                    if (t === h) {
                        a = f;
                        break
                    }
                    t || (a[h] = f)
                } catch (e) {
                }
            }
            return a
        }

        return i.get = i.set = i, i.getJSON = function () {
            return i.apply({json: !0}, [].slice.call(arguments))
        }, i.defaults = {}, i.remove = function (t, n) {
            i(t, "", e(n, {expires: -1}))
        }, i.withConverter = t, i
    }(function () {
    })
}), function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function (e) {
    e.extend(e.fn, {
        validate: function (t) {
            if (this.length) {
                var n = e.data(this[0], "validator");
                return n || (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.on("click.validate", ":submit", function (t) {
                    n.settings.submitHandler && (n.submitButton = t.target), e(this).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(this).attr("formnovalidate") && (n.cancelSubmit = !0)
                }), this.on("submit.validate", function (t) {
                    function i() {
                        var i, r;
                        return !n.settings.submitHandler || (n.submitButton && (i = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), r = n.settings.submitHandler.call(n, n.currentForm, t), n.submitButton && i.remove(), void 0 !== r && r)
                    }

                    return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1)
                })), n)
            }
            t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        }, valid: function () {
            var t, n, i;
            return e(this[0]).is("form") ? t = this.validate().form() : (i = [], t = !0, n = e(this[0].form).validate(), this.each(function () {
                t = n.element(this) && t, i = i.concat(n.errorList)
            }), n.errorList = i), t
        }, rules: function (t, n) {
            var i, r, o, a, s, l, u = this[0];
            if (t) switch (r = (i = e.data(u.form, "validator").settings).rules, o = e.validator.staticRules(u), t) {
                case"add":
                    e.extend(o, e.validator.normalizeRule(n)), delete o.messages, r[u.name] = o, n.messages && (i.messages[u.name] = e.extend(i.messages[u.name], n.messages));
                    break;
                case"remove":
                    return n ? (l = {}, e.each(n.split(/\s/), function (t, n) {
                        l[n] = o[n], delete o[n], "required" === n && e(u).removeAttr("aria-required")
                    }), l) : (delete r[u.name], o)
            }
            return (a = e.validator.normalizeRules(e.extend({}, e.validator.classRules(u), e.validator.attributeRules(u), e.validator.dataRules(u), e.validator.staticRules(u)), u)).required && (s = a.required, delete a.required, a = e.extend({required: s}, a), e(u).attr("aria-required", "true")), a.remote && (s = a.remote, delete a.remote, a = e.extend(a, {remote: s})), a
        }
    }), e.extend(e.expr[":"], {
        blank: function (t) {
            return !e.trim("" + e(t).val())
        }, filled: function (t) {
            return !!e.trim("" + e(t).val())
        }, unchecked: function (t) {
            return !e(t).prop("checked")
        }
    }), e.validator = function (t, n) {
        this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init()
    }, e.validator.format = function (t, n) {
        return 1 === arguments.length ? function () {
            var n = e.makeArray(arguments);
            return n.unshift(t), e.validator.format.apply(this, n)
        } : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function (e, n) {
            t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function () {
                return n
            })
        }), t)
    }, e.extend(e.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: e([]),
            errorLabelContainer: e([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (e) {
                this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)))
            },
            onfocusout: function (e) {
                this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
            },
            onkeyup: function (t, n) {
                9 === n.which && "" === this.elementValue(t) || -1 !== e.inArray(n.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (t.name in this.submitted || t === this.lastElement) && this.element(t)
            },
            onclick: function (e) {
                e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
            },
            highlight: function (t, n, i) {
                "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(i) : e(t).addClass(n).removeClass(i)
            },
            unhighlight: function (t, n, i) {
                "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(i) : e(t).removeClass(n).addClass(i)
            }
        },
        setDefaults: function (t) {
            e.extend(e.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: e.validator.format("Please enter no more than {0} characters."),
            minlength: e.validator.format("Please enter at least {0} characters."),
            rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
            range: e.validator.format("Please enter a value between {0} and {1}."),
            max: e.validator.format("Please enter a value less than or equal to {0}."),
            min: e.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var t, n = this.groups = {};

                function i(t) {
                    var n = e.data(this.form, "validator"), i = "on" + t.type.replace(/^validate/, ""), r = n.settings;
                    r[i] && !e(this).is(r.ignore) && r[i].call(n, this, t)
                }

                e.each(this.settings.groups, function (t, i) {
                    "string" == typeof i && (i = i.split(/\s/)), e.each(i, function (e, i) {
                        n[i] = t
                    })
                }), t = this.settings.rules, e.each(t, function (n, i) {
                    t[n] = e.validator.normalizeRule(i)
                }), e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", i).on("click.validate", "select, option, [type='radio'], [type='checkbox']", i), this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), e(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            }, form: function () {
                return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            }, checkForm: function () {
                this.prepareForm();
                for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                return this.valid()
            }, element: function (t) {
                var n = this.clean(t), i = this.validationTargetFor(n), r = !0;
                return this.lastElement = i, void 0 === i ? delete this.invalid[n.name] : (this.prepareElement(i), this.currentElements = e(i), (r = !1 !== this.check(i)) ? delete this.invalid[i.name] : this.invalid[i.name] = !0), e(t).attr("aria-invalid", !r), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), r
            }, showErrors: function (t) {
                if (t) {
                    for (var n in e.extend(this.errorMap, t), this.errorList = [], t) this.errorList.push({
                        message: t[n],
                        element: this.findByName(n)[0]
                    });
                    this.successList = e.grep(this.successList, function (e) {
                        return !(e.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            }, resetForm: function () {
                e.fn.resetForm && e(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors();
                var t, n = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                if (this.settings.unhighlight) for (t = 0; n[t]; t++) this.settings.unhighlight.call(this, n[t], this.settings.errorClass, ""); else n.removeClass(this.settings.errorClass)
            }, numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            }, objectLength: function (e) {
                var t, n = 0;
                for (t in e) n++;
                return n
            }, hideErrors: function () {
                this.hideThese(this.toHide)
            }, hideThese: function (e) {
                e.not(this.containers).text(""), this.addWrapper(e).hide()
            }, valid: function () {
                return 0 === this.size()
            }, size: function () {
                return this.errorList.length
            }, focusInvalid: function () {
                if (this.settings.focusInvalid) try {
                    e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (e) {
                }
            }, findLastActive: function () {
                var t = this.lastActive;
                return t && 1 === e.grep(this.errorList, function (e) {
                    return e.element.name === t.name
                }).length && t
            }, elements: function () {
                var t = this, n = {};
                return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
                    return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in n || !t.objectLength(e(this).rules())) && (n[this.name] = !0, !0)
                })
            }, clean: function (t) {
                return e(t)[0]
            }, errors: function () {
                var t = this.settings.errorClass.split(" ").join(".");
                return e(this.settings.errorElement + "." + t, this.errorContext)
            }, reset: function () {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]), this.currentElements = e([])
            }, prepareForm: function () {
                this.reset(), this.toHide = this.errors().add(this.containers)
            }, prepareElement: function (e) {
                this.reset(), this.toHide = this.errorsFor(e)
            }, elementValue: function (t) {
                var n, i = e(t), r = t.type;
                return "radio" === r || "checkbox" === r ? this.findByName(t.name).filter(":checked").val() : "number" === r && void 0 !== t.validity ? !t.validity.badInput && i.val() : "string" == typeof (n = i.val()) ? n.replace(/\r/g, "") : n
            }, check: function (t) {
                t = this.validationTargetFor(this.clean(t));
                var n, i, r, o = e(t).rules(), a = e.map(o, function (e, t) {
                    return t
                }).length, s = !1, l = this.elementValue(t);
                for (i in o) {
                    r = {method: i, parameters: o[i]};
                    try {
                        if ("dependency-mismatch" === (n = e.validator.methods[i].call(this, l, t, r.parameters)) && 1 === a) {
                            s = !0;
                            continue
                        }
                        if (s = !1, "pending" === n) return void (this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!n) return this.formatAndAdd(t, r), !1
                    } catch (e) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method."), e
                    }
                }
                if (!s) return this.objectLength(o) && this.successList.push(t), !0
            }, customDataMessage: function (t, n) {
                return e(t).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || e(t).data("msg")
            }, customMessage: function (e, t) {
                var n = this.settings.messages[e];
                return n && (n.constructor === String ? n : n[t])
            }, findDefined: function () {
                for (var e = 0; e < arguments.length; e++) if (void 0 !== arguments[e]) return arguments[e]
            }, defaultMessage: function (t, n) {
                return this.findDefined(this.customMessage(t.name, n), this.customDataMessage(t, n), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n], "<strong>Warning: No message defined for " + t.name + "</strong>")
            }, formatAndAdd: function (t, n) {
                var i = this.defaultMessage(t, n.method), r = /\$?\{(\d+)\}/g;
                "function" == typeof i ? i = i.call(this, n.parameters, t) : r.test(i) && (i = e.validator.format(i.replace(r, "{$1}"), n.parameters)), this.errorList.push({
                    message: i,
                    element: t,
                    method: n.method
                }), this.errorMap[t.name] = i, this.submitted[t.name] = i
            }, addWrapper: function (e) {
                return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
            }, defaultShowErrors: function () {
                var e, t, n;
                for (e = 0; this.errorList[e]; e++) n = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                if (this.settings.unhighlight) for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            }, validElements: function () {
                return this.currentElements.not(this.invalidElements())
            }, invalidElements: function () {
                return e(this.errorList).map(function () {
                    return this.element
                })
            }, showLabel: function (t, n) {
                var i, r, o, a = this.errorsFor(t), s = this.idOrName(t), l = e(t).attr("aria-describedby");
                a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(n)) : (i = a = e("<" + this.settings.errorElement + ">").attr("id", s + "-error").addClass(this.settings.errorClass).html(n || ""), this.settings.wrapper && (i = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement(i, e(t)) : i.insertAfter(t), a.is("label") ? a.attr("for", s) : 0 === a.parents("label[for='" + s + "']").length && (o = a.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"), l ? l.match(new RegExp("\\b" + o + "\\b")) || (l += " " + o) : l = o, e(t).attr("aria-describedby", l), (r = this.groups[t.name]) && e.each(this.groups, function (t, n) {
                    n === r && e("[name='" + t + "']", this.currentForm).attr("aria-describedby", a.attr("id"))
                }))), !n && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, t)), this.toShow = this.toShow.add(a)
            }, errorsFor: function (t) {
                var n = this.idOrName(t), i = e(t).attr("aria-describedby"),
                    r = "label[for='" + n + "'], label[for='" + n + "'] *";
                return i && (r = r + ", #" + i.replace(/\s+/g, ", #")), this.errors().filter(r)
            }, idOrName: function (e) {
                return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
            }, validationTargetFor: function (t) {
                return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0]
            }, checkable: function (e) {
                return /radio|checkbox/i.test(e.type)
            }, findByName: function (t) {
                return e(this.currentForm).find("[name='" + t + "']")
            }, getLength: function (t, n) {
                switch (n.nodeName.toLowerCase()) {
                    case"select":
                        return e("option:selected", n).length;
                    case"input":
                        if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
                }
                return t.length
            }, depend: function (e, t) {
                return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
            }, dependTypes: {
                boolean: function (e) {
                    return e
                }, string: function (t, n) {
                    return !!e(t, n.form).length
                }, function: function (e, t) {
                    return e(t)
                }
            }, optional: function (t) {
                var n = this.elementValue(t);
                return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch"
            }, startRequest: function (e) {
                this.pending[e.name] || (this.pendingRequest++, this.pending[e.name] = !0)
            }, stopRequest: function (t, n) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            }, previousValue: function (t) {
                return e.data(t, "previousValue") || e.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, "remote")
                })
            }, destroy: function () {
                this.resetForm(), e(this.currentForm).off(".validate").removeData("validator")
            }
        },
        classRuleSettings: {
            required: {required: !0},
            email: {email: !0},
            url: {url: !0},
            date: {date: !0},
            dateISO: {dateISO: !0},
            number: {number: !0},
            digits: {digits: !0},
            creditcard: {creditcard: !0}
        },
        addClassRules: function (t, n) {
            t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t)
        },
        classRules: function (t) {
            var n = {}, i = e(t).attr("class");
            return i && e.each(i.split(" "), function () {
                this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this])
            }), n
        },
        normalizeAttributeRule: function (e, t, n, i) {
            /min|max/.test(n) && (null === t || /number|range|text/.test(t)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? e[n] = i : t === n && "range" !== t && (e[n] = !0)
        },
        attributeRules: function (t) {
            var n, i, r = {}, o = e(t), a = t.getAttribute("type");
            for (n in e.validator.methods) "required" === n ? ("" === (i = t.getAttribute(n)) && (i = !0), i = !!i) : i = o.attr(n), this.normalizeAttributeRule(r, a, n, i);
            return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
        },
        dataRules: function (t) {
            var n, i, r = {}, o = e(t), a = t.getAttribute("type");
            for (n in e.validator.methods) i = o.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()), this.normalizeAttributeRule(r, a, n, i);
            return r
        },
        staticRules: function (t) {
            var n = {}, i = e.data(t.form, "validator");
            return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}), n
        },
        normalizeRules: function (t, n) {
            return e.each(t, function (i, r) {
                if (!1 !== r) {
                    if (r.param || r.depends) {
                        var o = !0;
                        switch (typeof r.depends) {
                            case"string":
                                o = !!e(r.depends, n.form).length;
                                break;
                            case"function":
                                o = r.depends.call(n, n)
                        }
                        o ? t[i] = void 0 === r.param || r.param : delete t[i]
                    }
                } else delete t[i]
            }), e.each(t, function (i, r) {
                t[i] = e.isFunction(r) ? r(n) : r
            }), e.each(["minlength", "maxlength"], function () {
                t[this] && (t[this] = Number(t[this]))
            }), e.each(["rangelength", "range"], function () {
                var n;
                t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(n[0]), Number(n[1])]))
            }), e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
        },
        normalizeRule: function (t) {
            if ("string" == typeof t) {
                var n = {};
                e.each(t.split(/\s/), function () {
                    n[this] = !0
                }), t = n
            }
            return t
        },
        addMethod: function (t, n, i) {
            e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== i ? i : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
        },
        methods: {
            required: function (t, n, i) {
                if (!this.depend(i, n)) return "dependency-mismatch";
                if ("select" === n.nodeName.toLowerCase()) {
                    var r = e(n).val();
                    return r && r.length > 0
                }
                return this.checkable(n) ? this.getLength(t, n) > 0 : t.length > 0
            }, email: function (e, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
            }, url: function (e, t) {
                return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e)
            }, date: function (e, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
            }, dateISO: function (e, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
            }, number: function (e, t) {
                return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
            }, digits: function (e, t) {
                return this.optional(t) || /^\d+$/.test(e)
            }, creditcard: function (e, t) {
                if (this.optional(t)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(e)) return !1;
                var n, i, r = 0, o = 0, a = !1;
                if ((e = e.replace(/\D/g, "")).length < 13 || e.length > 19) return !1;
                for (n = e.length - 1; n >= 0; n--) i = e.charAt(n), o = parseInt(i, 10), a && (o *= 2) > 9 && (o -= 9), r += o, a = !a;
                return r % 10 == 0
            }, minlength: function (t, n, i) {
                var r = e.isArray(t) ? t.length : this.getLength(t, n);
                return this.optional(n) || r >= i
            }, maxlength: function (t, n, i) {
                var r = e.isArray(t) ? t.length : this.getLength(t, n);
                return this.optional(n) || r <= i
            }, rangelength: function (t, n, i) {
                var r = e.isArray(t) ? t.length : this.getLength(t, n);
                return this.optional(n) || r >= i[0] && r <= i[1]
            }, min: function (e, t, n) {
                return this.optional(t) || e >= n
            }, max: function (e, t, n) {
                return this.optional(t) || e <= n
            }, range: function (e, t, n) {
                return this.optional(t) || e >= n[0] && e <= n[1]
            }, equalTo: function (t, n, i) {
                var r = e(i);
                return this.settings.onfocusout && r.off(".validate-equalTo").on("blur.validate-equalTo", function () {
                    e(n).valid()
                }), t === r.val()
            }, remote: function (t, n, i) {
                if (this.optional(n)) return "dependency-mismatch";
                var r, o, a = this.previousValue(n);
                return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), a.originalMessage = this.settings.messages[n.name].remote, this.settings.messages[n.name].remote = a.message, i = "string" == typeof i && {url: i} || i, a.old === t ? a.valid : (a.old = t, r = this, this.startRequest(n), (o = {})[n.name] = t, e.ajax(e.extend(!0, {
                    mode: "abort",
                    port: "validate" + n.name,
                    dataType: "json",
                    data: o,
                    context: r.currentForm,
                    success: function (i) {
                        var o, s, l, u = !0 === i || "true" === i;
                        r.settings.messages[n.name].remote = a.originalMessage, u ? (l = r.formSubmitted, r.prepareElement(n), r.formSubmitted = l, r.successList.push(n), delete r.invalid[n.name], r.showErrors()) : (o = {}, s = i || r.defaultMessage(n, "remote"), o[n.name] = a.message = e.isFunction(s) ? s(t) : s, r.invalid[n.name] = !0, r.showErrors(o)), a.valid = u, r.stopRequest(n, u)
                    }
                }, i)), "pending")
            }
        }
    });
    var t, n = {};
    e.ajaxPrefilter ? e.ajaxPrefilter(function (e, t, i) {
        var r = e.port;
        "abort" === e.mode && (n[r] && n[r].abort(), n[r] = i)
    }) : (t = e.ajax, e.ajax = function (i) {
        var r = ("mode" in i ? i : e.ajaxSettings).mode, o = ("port" in i ? i : e.ajaxSettings).port;
        return "abort" === r ? (n[o] && n[o].abort(), n[o] = t.apply(this, arguments), n[o]) : t.apply(this, arguments)
    })
}), function () {
    "use strict";
    var e, t, n, i, r;
    e = function (e, t) {
        return "string" == typeof e && "string" == typeof t && e.toLowerCase() === t.toLowerCase()
    }, t = function (e, n, i) {
        var r = e.toString();
        return i = i || "0", r.length < n ? t(i + r, n) : r
    }, n = function (e) {
        var t, i;
        for (e = e || {}, t = 1; t < arguments.length; t++) if (i = arguments[t]) for (var r in i) i.hasOwnProperty(r) && ("object" == typeof i[r] ? n(e[r], i[r]) : e[r] = i[r]);
        return e
    }, i = function (e, t) {
        for (var n = 0; n < t.length; n++) if (t[n].toLowerCase() === e.toLowerCase()) return n;
        return -1
    }, r = {
        dateSettings: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            meridiem: ["AM", "PM"],
            ordinal: function (e) {
                var t = e % 10, n = {1: "st", 2: "nd", 3: "rd"};
                return 1 !== Math.floor(e % 100 / 10) && n[t] ? n[t] : "th"
            }
        },
        separators: /[ \-+\/\.T:@]/g,
        validParts: /[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,
        intParts: /[djwNzmnyYhHgGis]/g,
        tzParts: /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        tzClip: /[^-+\dA-Z]/g
    }, (DateFormatter = function (e) {
        var t = n(r, e);
        this.dateSettings = t.dateSettings, this.separators = t.separators, this.validParts = t.validParts, this.intParts = t.intParts, this.tzParts = t.tzParts, this.tzClip = t.tzClip
    }).prototype = {
        constructor: DateFormatter, getMonth: function (e) {
            var t;
            return 0 === (t = i(e, this.dateSettings.monthsShort) + 1) && (t = i(e, this.dateSettings.months) + 1), t
        }, parseDate: function (t, n) {
            var i, r, o, a, s, l, u, c, d, h, f = !1, p = !1, m = this.dateSettings,
                g = {date: null, year: null, month: null, day: null, hour: 0, min: 0, sec: 0};
            if (!t) return null;
            if (t instanceof Date) return t;
            if ("U" === n) return (o = parseInt(t)) ? new Date(1e3 * o) : t;
            switch (typeof t) {
                case"number":
                    return new Date(t);
                case"string":
                    break;
                default:
                    return null
            }
            if (!(i = n.match(this.validParts)) || 0 === i.length) throw new Error("Invalid date format definition.");
            for (r = t.replace(this.separators, "\0").split("\0"), o = 0; o < r.length; o++) switch (a = r[o], s = parseInt(a), i[o]) {
                case"y":
                case"Y":
                    if (!s) return null;
                    d = a.length, g.year = 2 === d ? parseInt((s < 70 ? "20" : "19") + a) : s, f = !0;
                    break;
                case"m":
                case"n":
                case"M":
                case"F":
                    if (isNaN(s)) {
                        if (!((l = this.getMonth(a)) > 0)) return null;
                        g.month = l
                    } else {
                        if (!(s >= 1 && s <= 12)) return null;
                        g.month = s
                    }
                    f = !0;
                    break;
                case"d":
                case"j":
                    if (!(s >= 1 && s <= 31)) return null;
                    g.day = s, f = !0;
                    break;
                case"g":
                case"h":
                    if (h = r[u = i.indexOf("a") > -1 ? i.indexOf("a") : i.indexOf("A") > -1 ? i.indexOf("A") : -1], -1 !== u) c = e(h, m.meridiem[0]) ? 0 : e(h, m.meridiem[1]) ? 12 : -1, s >= 1 && s <= 12 && -1 !== c ? g.hour = s % 12 == 0 ? c : s + c : s >= 0 && s <= 23 && (g.hour = s); else {
                        if (!(s >= 0 && s <= 23)) return null;
                        g.hour = s
                    }
                    p = !0;
                    break;
                case"G":
                case"H":
                    if (!(s >= 0 && s <= 23)) return null;
                    g.hour = s, p = !0;
                    break;
                case"i":
                    if (!(s >= 0 && s <= 59)) return null;
                    g.min = s, p = !0;
                    break;
                case"s":
                    if (!(s >= 0 && s <= 59)) return null;
                    g.sec = s, p = !0
            }
            if (!0 === f && g.year && g.month && g.day) g.date = new Date(g.year, g.month - 1, g.day, g.hour, g.min, g.sec, 0); else {
                if (!0 !== p) return null;
                g.date = new Date(0, 0, 0, g.hour, g.min, g.sec, 0)
            }
            return g.date
        }, guessDate: function (e, t) {
            if ("string" != typeof e) return e;
            var n, i, r, o, a, s, l = e.replace(this.separators, "\0").split("\0"), u = t.match(this.validParts),
                c = new Date, d = 0;
            if (!/^[djmn]/g.test(u[0])) return e;
            for (r = 0; r < l.length; r++) {
                if (d = 2, a = l[r], s = parseInt(a.substr(0, 2)), isNaN(s)) return null;
                switch (r) {
                    case 0:
                        "m" === u[0] || "n" === u[0] ? c.setMonth(s - 1) : c.setDate(s);
                        break;
                    case 1:
                        "m" === u[0] || "n" === u[0] ? c.setDate(s) : c.setMonth(s - 1);
                        break;
                    case 2:
                        if (i = c.getFullYear(), d = (n = a.length) < 4 ? n : 4, !(i = parseInt(n < 4 ? i.toString().substr(0, 4 - n) + a : a.substr(0, 4)))) return null;
                        c.setFullYear(i);
                        break;
                    case 3:
                        c.setHours(s);
                        break;
                    case 4:
                        c.setMinutes(s);
                        break;
                    case 5:
                        c.setSeconds(s)
                }
                (o = a.substr(d)).length > 0 && l.splice(r + 1, 0, o)
            }
            return c
        }, parseFormat: function (e, n) {
            var i, r = this, o = r.dateSettings, a = /\\?(.?)/gi, s = function (e, t) {
                return i[e] ? i[e]() : t
            };
            return i = {
                d: function () {
                    return t(i.j(), 2)
                }, D: function () {
                    return o.daysShort[i.w()]
                }, j: function () {
                    return n.getDate()
                }, l: function () {
                    return o.days[i.w()]
                }, N: function () {
                    return i.w() || 7
                }, w: function () {
                    return n.getDay()
                }, z: function () {
                    var e = new Date(i.Y(), i.n() - 1, i.j()), t = new Date(i.Y(), 0, 1);
                    return Math.round((e - t) / 864e5)
                }, W: function () {
                    var e = new Date(i.Y(), i.n() - 1, i.j() - i.N() + 3), n = new Date(e.getFullYear(), 0, 4);
                    return t(1 + Math.round((e - n) / 864e5 / 7), 2)
                }, F: function () {
                    return o.months[n.getMonth()]
                }, m: function () {
                    return t(i.n(), 2)
                }, M: function () {
                    return o.monthsShort[n.getMonth()]
                }, n: function () {
                    return n.getMonth() + 1
                }, t: function () {
                    return new Date(i.Y(), i.n(), 0).getDate()
                }, L: function () {
                    var e = i.Y();
                    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0 ? 1 : 0
                }, o: function () {
                    var e = i.n(), t = i.W();
                    return i.Y() + (12 === e && t < 9 ? 1 : 1 === e && t > 9 ? -1 : 0)
                }, Y: function () {
                    return n.getFullYear()
                }, y: function () {
                    return i.Y().toString().slice(-2)
                }, a: function () {
                    return i.A().toLowerCase()
                }, A: function () {
                    var e = i.G() < 12 ? 0 : 1;
                    return o.meridiem[e]
                }, B: function () {
                    var e = 3600 * n.getUTCHours(), i = 60 * n.getUTCMinutes(), r = n.getUTCSeconds();
                    return t(Math.floor((e + i + r + 3600) / 86.4) % 1e3, 3)
                }, g: function () {
                    return i.G() % 12 || 12
                }, G: function () {
                    return n.getHours()
                }, h: function () {
                    return t(i.g(), 2)
                }, H: function () {
                    return t(i.G(), 2)
                }, i: function () {
                    return t(n.getMinutes(), 2)
                }, s: function () {
                    return t(n.getSeconds(), 2)
                }, u: function () {
                    return t(1e3 * n.getMilliseconds(), 6)
                }, e: function () {
                    return /\((.*)\)/.exec(String(n))[1] || "Coordinated Universal Time"
                }, I: function () {
                    return new Date(i.Y(), 0) - Date.UTC(i.Y(), 0) != new Date(i.Y(), 6) - Date.UTC(i.Y(), 6) ? 1 : 0
                }, O: function () {
                    var e = n.getTimezoneOffset(), i = Math.abs(e);
                    return (e > 0 ? "-" : "+") + t(100 * Math.floor(i / 60) + i % 60, 4)
                }, P: function () {
                    var e = i.O();
                    return e.substr(0, 3) + ":" + e.substr(3, 2)
                }, T: function () {
                    return (String(n).match(r.tzParts) || [""]).pop().replace(r.tzClip, "") || "UTC"
                }, Z: function () {
                    return 60 * -n.getTimezoneOffset()
                }, c: function () {
                    return "Y-m-d\\TH:i:sP".replace(a, s)
                }, r: function () {
                    return "D, d M Y H:i:s O".replace(a, s)
                }, U: function () {
                    return n.getTime() / 1e3 || 0
                }
            }, s(e, e)
        }, formatDate: function (e, t) {
            var n, i, r, o, a, s = "";
            if ("string" == typeof e && !(e = this.parseDate(e, t))) return null;
            if (e instanceof Date) {
                for (r = t.length, n = 0; n < r; n++) "S" !== (a = t.charAt(n)) && "\\" !== a && (n > 0 && "\\" === t.charAt(n - 1) ? s += a : (o = this.parseFormat(a, e), n !== r - 1 && this.intParts.test(a) && "S" === t.charAt(n + 1) && (i = parseInt(o) || 0, o += this.dateSettings.ordinal(i)), s += o));
                return s
            }
            return ""
        }
    }
}(), laravelValidation = {
    implicitRules: ["Required", "Confirmed"], init: function () {
        $.validator.classRuleSettings = {}, $.validator.attributeRules = function () {
            this.rules = {}
        }, $.validator.dataRules = this.arrayRules, $.validator.prototype.arrayRulesCache = {}, this.setupValidations()
    }, arrayRules: function (e) {
        var t = {}, n = $.data(e.form, "validator"), i = n.arrayRulesCache;
        return -1 === e.name.indexOf("[") ? t : (e.name in i || (i[e.name] = {}), $.each(n.settings.rules, function (n, r) {
            if (n in i[e.name]) $.extend(t, i[e.name][n]); else {
                i[e.name][n] = {};
                var o = laravelValidation.helpers.regexFromWildcard(n);
                if (e.name.match(o)) {
                    var a = $.validator.normalizeRule(r) || {};
                    i[e.name][n] = a, $.extend(t, a)
                }
            }
        }), t)
    }, setupValidations: function () {
        $.validator.addMethod("laravelValidation", function (e, t, n) {
            var i = this, r = !0, o = this.previousValue(t), a = [];
            return $.each(n, function (e, t) {
                t[3] || -1 !== laravelValidation.implicitRules.indexOf(t[0]) ? a.unshift(t) : a.push(t)
            }), $.each(a, function (n, a) {
                var s = a[3] || -1 !== laravelValidation.implicitRules.indexOf(a[0]), l = a[0], u = a[2];
                return !s && i.optional(t) ? (r = "dependency-mismatch", !1) : !0 !== (r = void 0 !== laravelValidation.methods[l] && laravelValidation.methods[l].call(i, e, t, a[1], function (n) {
                    if (i.settings.messages[t.name].laravelValidationRemote = o.originalMessage, n) {
                        var r = i.formSubmitted;
                        i.prepareElement(t), i.formSubmitted = r, i.successList.push(t), delete i.invalid[t.name], i.showErrors()
                    } else {
                        var a = {};
                        a[t.name] = o.message = $.isFunction(u) ? u(e) : u, i.invalid[t.name] = !0, i.showErrors(a)
                    }
                    i.showErrors(i.errorMap), o.valid = n
                })) ? (i.settings.messages[t.name] || (i.settings.messages[t.name] = {}), i.settings.messages[t.name].laravelValidation = u, !1) : void 0
            }), r
        }, ""), $.validator.addMethod("laravelValidationRemote", function (e, t, n) {
            var i = !1, r = n[0][1], o = t.name, a = r[1], s = r[2];
            if ($.each(n, function (e, t) {
                i = i || t[3]
            }), !i && this.optional(t)) return "dependency-mismatch";
            var l, u, c = this.previousValue(t);
            this.settings.messages[t.name] || (this.settings.messages[t.name] = {}), c.originalMessage = this.settings.messages[t.name].laravelValidationRemote, this.settings.messages[t.name].laravelValidationRemote = c.message;
            var d = "string" == typeof d && {url: d} || d;
            if (c.old === e) return c.valid;
            c.old = e, l = this, this.startRequest(t), (u = $(l.currentForm).serializeArray()).push({
                name: "_jsvalidation",
                value: o
            }), u.push({name: "_jsvalidation_validate_all", value: s});
            var h = $(l.currentForm).attr("method");
            return $(l.currentForm).find('input[name="_method"]').length && (h = $(l.currentForm).find('input[name="_method"]').val()), $.ajax($.extend(!0, {
                mode: "abort",
                port: "validate" + t.name,
                dataType: "json",
                data: u,
                context: l.currentForm,
                url: $(l.currentForm).attr("action"),
                type: h,
                beforeSend: function (e) {
                    if ("get" !== $(l.currentForm).attr("method").toLowerCase() && a) return e.setRequestHeader("X-XSRF-TOKEN", a)
                }
            }, d)).always(function (n, i) {
                var r, o, a, s;
                if ("error" === i) s = !1, n = laravelValidation.helpers.parseErrorResponse(n); else {
                    if ("success" !== i) return;
                    s = !0 === n || "true" === n
                }
                l.settings.messages[t.name].laravelValidationRemote = c.originalMessage, s ? (a = l.formSubmitted, l.prepareElement(t), l.formSubmitted = a, l.successList.push(t), delete l.invalid[t.name], l.showErrors()) : (r = {}, o = n || l.defaultMessage(t, "remote"), r[t.name] = c.message = $.isFunction(o) ? o(e) : o[0], l.invalid[t.name] = !0, l.showErrors(r)), l.showErrors(l.errorMap), c.valid = s, l.stopRequest(t, s)
            }), "pending"
        }, "")
    }
}, $(function () {
    laravelValidation.init()
}), $.extend(!0, laravelValidation, {
    helpers: {
        numericRules: ["Integer", "Numeric"], fileinfo: function (e, t) {
            var n = e.value;
            return t = void 0 !== t ? t : 0, null !== e.files && void 0 !== e.files[t] && {
                file: n,
                extension: n.substr(n.lastIndexOf(".") + 1),
                size: e.files[t].size / 1024,
                type: e.files[t].type
            }
        }, selector: function (e) {
            var t = [];
            $.isArray(e) || (e = [e]);
            for (var n = 0; n < e.length; n++) t.push("[name='" + e[n] + "']");
            return t.join()
        }, hasNumericRules: function (e) {
            return this.hasRules(e, this.numericRules)
        }, hasRules: function (e, t) {
            var n = !1;
            "string" == typeof t && (t = [t]);
            var i = $.data(e.form, "validator"), r = [], o = i.arrayRulesCache;
            return e.name in o && $.each(o[e.name], function (e, t) {
                r.push(t)
            }), e.name in i.settings.rules && r.push(i.settings.rules[e.name]), $.each(r, function (e, i) {
                if ("laravelValidation" in i) for (var r = i.laravelValidation, o = 0; o < r.length; o++) if (-1 !== $.inArray(r[o][0], t)) return n = !0, !1
            }), n
        }, strlen: function (e) {
            return strlen(e)
        }, getSize: function (e, t, n) {
            return this.hasNumericRules(t) && this.is_numeric(n) ? parseFloat(n) : $.isArray(n) ? parseFloat(n.length) : "file" === t.type ? parseFloat(Math.floor(this.fileinfo(t).size)) : parseFloat(this.strlen(n))
        }, getLaravelValidation: function (e, t) {
            var n = void 0;
            return $.each($.validator.staticRules(t), function (t, i) {
                "laravelValidation" === t && $.each(i, function (t, i) {
                    i[0] === e && (n = i)
                })
            }), n
        }, parseTime: function (e, t) {
            var n = !1, i = new DateFormatter;
            if ("object" === $.type(t)) {
                var r = this.getLaravelValidation("DateFormat", t);
                t = void 0 !== r ? r[1][0] : null
            }
            return null == t ? n = this.strtotime(e) : (n = i.parseDate(e, t)) && (n = Math.round(n.getTime() / 1e3)), n
        }, guessDate: function (e, t) {
            return (new DateFormatter).guessDate(e, t)
        }, strtotime: function (e, t) {
            return strtotime(e, t)
        }, is_numeric: function (e) {
            return is_numeric(e)
        }, arrayDiff: function (e, t) {
            return array_diff(e, t)
        }, dependentElement: function (e, t, n) {
            var i = e.findByName(n);
            if (void 0 !== i[0] && e.settings.onfocusout) {
                var r = "blur";
                "SELECT" !== i[0].tagName && "OPTION" !== i[0].tagName && "checkbox" !== i[0].type && "radio" !== i[0].type || (r = "click");
                var o = ".validate-laravelValidation";
                i.off(o).off(r + o + "-" + t.name).on(r + o + "-" + t.name, function () {
                    $(t).valid()
                })
            }
            return i[0]
        }, parseErrorResponse: function (e) {
            var t = ["Whoops, looks like something went wrong."];
            if ("responseText" in e) {
                var n = e.responseText.match(/<h1\s*>(.*)<\/h1\s*>/i);
                $.isArray(n) && (t = [n[1]])
            }
            return t
        }, escapeRegExp: function (e) {
            return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        }, regexFromWildcard: function (e) {
            var t = e.split("[*]");
            1 === t.length && t.push("");
            var n = t.map(function (e, t) {
                return t % 2 == 0 ? e += "[" : e = "]" + e, laravelValidation.helpers.escapeRegExp(e)
            });
            return new RegExp("^" + n.join(".*") + "$")
        }
    }
}), $.extend(!0, laravelValidation, {
    helpers: {
        isTimezone: function (e) {
            var t = {
                africa: ["abidjan", "accra", "addis_ababa", "algiers", "asmara", "bamako", "bangui", "banjul", "bissau", "blantyre", "brazzaville", "bujumbura", "cairo", "casablanca", "ceuta", "conakry", "dakar", "dar_es_salaam", "djibouti", "douala", "el_aaiun", "freetown", "gaborone", "harare", "johannesburg", "juba", "kampala", "khartoum", "kigali", "kinshasa", "lagos", "libreville", "lome", "luanda", "lubumbashi", "lusaka", "malabo", "maputo", "maseru", "mbabane", "mogadishu", "monrovia", "nairobi", "ndjamena", "niamey", "nouakchott", "ouagadougou", "porto-novo", "sao_tome", "tripoli", "tunis", "windhoek"],
                america: ["adak", "anchorage", "anguilla", "antigua", "araguaina", "argentina/buenos_aires", "argentina/catamarca", "argentina/cordoba", "argentina/jujuy", "argentina/la_rioja", "argentina/mendoza", "argentina/rio_gallegos", "argentina/salta", "argentina/san_juan", "argentina/san_luis", "argentina/tucuman", "argentina/ushuaia", "aruba", "asuncion", "atikokan", "bahia", "bahia_banderas", "barbados", "belem", "belize", "blanc-sablon", "boa_vista", "bogota", "boise", "cambridge_bay", "campo_grande", "cancun", "caracas", "cayenne", "cayman", "chicago", "chihuahua", "costa_rica", "creston", "cuiaba", "curacao", "danmarkshavn", "dawson", "dawson_creek", "denver", "detroit", "dominica", "edmonton", "eirunepe", "el_salvador", "fortaleza", "glace_bay", "godthab", "goose_bay", "grand_turk", "grenada", "guadeloupe", "guatemala", "guayaquil", "guyana", "halifax", "havana", "hermosillo", "indiana/indianapolis", "indiana/knox", "indiana/marengo", "indiana/petersburg", "indiana/tell_city", "indiana/vevay", "indiana/vincennes", "indiana/winamac", "inuvik", "iqaluit", "jamaica", "juneau", "kentucky/louisville", "kentucky/monticello", "kralendijk", "la_paz", "lima", "los_angeles", "lower_princes", "maceio", "managua", "manaus", "marigot", "martinique", "matamoros", "mazatlan", "menominee", "merida", "metlakatla", "mexico_city", "miquelon", "moncton", "monterrey", "montevideo", "montreal", "montserrat", "nassau", "new_york", "nipigon", "nome", "noronha", "north_dakota/beulah", "north_dakota/center", "north_dakota/new_salem", "ojinaga", "panama", "pangnirtung", "paramaribo", "phoenix", "port-au-prince", "port_of_spain", "porto_velho", "puerto_rico", "rainy_river", "rankin_inlet", "recife", "regina", "resolute", "rio_branco", "santa_isabel", "santarem", "santiago", "santo_domingo", "sao_paulo", "scoresbysund", "shiprock", "sitka", "st_barthelemy", "st_johns", "st_kitts", "st_lucia", "st_thomas", "st_vincent", "swift_current", "tegucigalpa", "thule", "thunder_bay", "tijuana", "toronto", "tortola", "vancouver", "whitehorse", "winnipeg", "yakutat", "yellowknife"],
                antarctica: ["casey", "davis", "dumontdurville", "macquarie", "mawson", "mcmurdo", "palmer", "rothera", "south_pole", "syowa", "vostok"],
                arctic: ["longyearbyen"],
                asia: ["aden", "almaty", "amman", "anadyr", "aqtau", "aqtobe", "ashgabat", "baghdad", "bahrain", "baku", "bangkok", "beirut", "bishkek", "brunei", "choibalsan", "chongqing", "colombo", "damascus", "dhaka", "dili", "dubai", "dushanbe", "gaza", "harbin", "hebron", "ho_chi_minh", "hong_kong", "hovd", "irkutsk", "jakarta", "jayapura", "jerusalem", "kabul", "kamchatka", "karachi", "kashgar", "kathmandu", "khandyga", "kolkata", "krasnoyarsk", "kuala_lumpur", "kuching", "kuwait", "macau", "magadan", "makassar", "manila", "muscat", "nicosia", "novokuznetsk", "novosibirsk", "omsk", "oral", "phnom_penh", "pontianak", "pyongyang", "qatar", "qyzylorda", "rangoon", "riyadh", "sakhalin", "samarkand", "seoul", "shanghai", "singapore", "taipei", "tashkent", "tbilisi", "tehran", "thimphu", "tokyo", "ulaanbaatar", "urumqi", "ust-nera", "vientiane", "vladivostok", "yakutsk", "yekaterinburg", "yerevan"],
                atlantic: ["azores", "bermuda", "canary", "cape_verde", "faroe", "madeira", "reykjavik", "south_georgia", "st_helena", "stanley"],
                australia: ["adelaide", "brisbane", "broken_hill", "currie", "darwin", "eucla", "hobart", "lindeman", "lord_howe", "melbourne", "perth", "sydney"],
                europe: ["amsterdam", "andorra", "athens", "belgrade", "berlin", "bratislava", "brussels", "bucharest", "budapest", "busingen", "chisinau", "copenhagen", "dublin", "gibraltar", "guernsey", "helsinki", "isle_of_man", "istanbul", "jersey", "kaliningrad", "kiev", "lisbon", "ljubljana", "london", "luxembourg", "madrid", "malta", "mariehamn", "minsk", "monaco", "moscow", "oslo", "paris", "podgorica", "prague", "riga", "rome", "samara", "san_marino", "sarajevo", "simferopol", "skopje", "sofia", "stockholm", "tallinn", "tirane", "uzhgorod", "vaduz", "vatican", "vienna", "vilnius", "volgograd", "warsaw", "zagreb", "zaporozhye", "zurich"],
                indian: ["antananarivo", "chagos", "christmas", "cocos", "comoro", "kerguelen", "mahe", "maldives", "mauritius", "mayotte", "reunion"],
                pacific: ["apia", "auckland", "chatham", "chuuk", "easter", "efate", "enderbury", "fakaofo", "fiji", "funafuti", "galapagos", "gambier", "guadalcanal", "guam", "honolulu", "johnston", "kiritimati", "kosrae", "kwajalein", "majuro", "marquesas", "midway", "nauru", "niue", "norfolk", "noumea", "pago_pago", "palau", "pitcairn", "pohnpei", "port_moresby", "rarotonga", "saipan", "tahiti", "tarawa", "tongatapu", "wake", "wallis"],
                utc: [""]
            }, n = e.split("/", 2), i = n[0].toLowerCase(), r = "";
            return n[1] && (r = n[1].toLowerCase()), i in t && (0 === t[i].length || -1 !== t[i].indexOf(r))
        }
    }
}), $.extend(!0, laravelValidation, {
    methods: {
        helpers: laravelValidation.helpers, jsRemoteTimer: 0, Sometimes: function () {
            return !0
        }, Bail: function () {
            return !0
        }, Nullable: function () {
            return !0
        }, Filled: function (e, t) {
            return $.validator.methods.required.call(this, e, t, !0)
        }, Required: function (e, t) {
            return $.validator.methods.required.call(this, e, t)
        }, RequiredWith: function (e, t, n) {
            var i = this, r = !1, o = this;
            return $.each(n, function (e, n) {
                var a = laravelValidation.helpers.dependentElement(o, t, n);
                r = r || void 0 !== a && $.validator.methods.required.call(i, o.elementValue(a), a, !0)
            }), !r || $.validator.methods.required.call(this, e, t, !0)
        }, RequiredWithAll: function (e, t, n) {
            var i = this, r = !0, o = this;
            return $.each(n, function (e, n) {
                var a = laravelValidation.helpers.dependentElement(o, t, n);
                r = r && void 0 !== a && $.validator.methods.required.call(i, o.elementValue(a), a, !0)
            }), !r || $.validator.methods.required.call(this, e, t, !0)
        }, RequiredWithout: function (e, t, n) {
            var i = this, r = !1, o = this;
            return $.each(n, function (e, n) {
                var a = laravelValidation.helpers.dependentElement(o, t, n);
                r = r || void 0 === a || !$.validator.methods.required.call(i, o.elementValue(a), a, !0)
            }), !r || $.validator.methods.required.call(this, e, t, !0)
        }, RequiredWithoutAll: function (e, t, n) {
            var i = this, r = !0, o = this;
            return $.each(n, function (e, n) {
                var a = laravelValidation.helpers.dependentElement(o, t, n);
                r = r && (void 0 === a || !$.validator.methods.required.call(i, o.elementValue(a), a, !0))
            }), !r || $.validator.methods.required.call(this, e, t, !0)
        }, RequiredIf: function (e, t, n) {
            var i = laravelValidation.helpers.dependentElement(this, t, n[0]);
            if (void 0 !== i) {
                var r = String(this.elementValue(i));
                if (void 0 !== r) {
                    var o = n.slice(1);
                    if (-1 !== $.inArray(r, o)) return $.validator.methods.required.call(this, e, t, !0)
                }
            }
            return !0
        }, RequiredUnless: function (e, t, n) {
            var i = laravelValidation.helpers.dependentElement(this, t, n[0]);
            if (void 0 !== i) {
                var r = String(this.elementValue(i));
                if (void 0 !== r) {
                    var o = n.slice(1);
                    if (-1 !== $.inArray(r, o)) return !0
                }
            }
            return $.validator.methods.required.call(this, e, t, !0)
        }, Confirmed: function (e, t, n) {
            return laravelValidation.methods.Same.call(this, e, t, n)
        }, Same: function (e, t, n) {
            var i = laravelValidation.helpers.dependentElement(this, t, n[0]);
            return void 0 !== i && String(e) === String(this.elementValue(i))
        }, InArray: function (e, t, n) {
            if (void 0 === n[0]) return !1;
            for (var i = this.elements(), r = !1, o = laravelValidation.helpers.regexFromWildcard(n[0]), a = 0; a < i.length; a++) {
                var s = i[a].name;
                if (s.match(o)) {
                    var l = laravelValidation.methods.Same.call(this, e, t, [s]);
                    r = r || l
                }
            }
            return r
        }, Distinct: function (e, t, n) {
            if (void 0 === n[0]) return !1;
            for (var i = this.elements(), r = !1, o = laravelValidation.helpers.regexFromWildcard(n[0]), a = 0; a < i.length; a++) {
                var s = i[a].name;
                if (s !== t.name && s.match(o)) {
                    var l = laravelValidation.methods.Same.call(this, e, t, [s]);
                    r = r || l
                }
            }
            return !r
        }, Different: function (e, t, n) {
            return !laravelValidation.methods.Same.call(this, e, t, n)
        }, Accepted: function (e) {
            return new RegExp("^(?:(yes|on|1|true))$", "i").test(e)
        }, Array: function (e) {
            return $.isArray(e)
        }, Boolean: function (e) {
            return new RegExp("^(?:(true|false|1|0))$", "i").test(e)
        }, Integer: function (e) {
            return new RegExp("^(?:-?\\d+)$", "i").test(e)
        }, Numeric: function (e, t) {
            return $.validator.methods.number.call(this, e, t, !0)
        }, String: function (e) {
            return "string" == typeof e
        }, Digits: function (e, t, n) {
            return $.validator.methods.number.call(this, e, t, !0) && e.length === parseInt(n, 10)
        }, DigitsBetween: function (e, t, n) {
            return $.validator.methods.number.call(this, e, t, !0) && e.length >= parseFloat(n[0]) && e.length <= parseFloat(n[1])
        }, Size: function (e, t, n) {
            return laravelValidation.helpers.getSize(this, t, e) === parseFloat(n[0])
        }, Between: function (e, t, n) {
            return laravelValidation.helpers.getSize(this, t, e) >= parseFloat(n[0]) && laravelValidation.helpers.getSize(this, t, e) <= parseFloat(n[1])
        }, Min: function (e, t, n) {
            return laravelValidation.helpers.getSize(this, t, e) >= parseFloat(n[0])
        }, Max: function (e, t, n) {
            return laravelValidation.helpers.getSize(this, t, e) <= parseFloat(n[0])
        }, In: function (e, t, n) {
            if ($.isArray(e) && laravelValidation.helpers.hasRules(t, "Array")) {
                var i = laravelValidation.helpers.arrayDiff(e, n);
                return 0 === Object.keys(i).length
            }
            return -1 !== n.indexOf(e.toString())
        }, NotIn: function (e, t, n) {
            return -1 === n.indexOf(e.toString())
        }, Ip: function (e) {
            return /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(e) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(e)
        }, Email: function (e, t) {
            return $.validator.methods.email.call(this, e, t, !0)
        }, Url: function (e, t) {
            return $.validator.methods.url.call(this, e, t, !0)
        }, File: function (e, t) {
            return !(window.File && window.FileReader && window.FileList && window.Blob) || "files" in t && t.files.length > 0
        }, Mimes: function (e, t, n) {
            if (!(window.File && window.FileReader && window.FileList && window.Blob)) return !0;
            var i = $.map(n, function (e) {
                return e.toLowerCase()
            }), r = laravelValidation.helpers.fileinfo(t);
            return !1 !== r && -1 !== i.indexOf(r.extension.toLowerCase())
        }, Mimetypes: function (e, t, n) {
            if (!(window.File && window.FileReader && window.FileList && window.Blob)) return !0;
            var i = $.map(n, function (e) {
                return e.toLowerCase()
            }), r = laravelValidation.helpers.fileinfo(t);
            return !1 !== r && -1 !== i.indexOf(r.type.toLowerCase())
        }, Image: function (e, t) {
            return laravelValidation.methods.Mimes.call(this, e, t, ["jpg", "png", "gif", "bmp", "svg", "jpeg"])
        }, Dimensions: function (value, element, params, callback) {
            if (!(window.File && window.FileReader && window.FileList && window.Blob)) return !0;
            if (null === element.files || void 0 === element.files[0]) return !1;
            var fr = new FileReader;
            return fr.onload = function () {
                var img = new Image;
                img.onload = function () {
                    var height = parseFloat(img.naturalHeight), width = parseFloat(img.naturalWidth),
                        ratio = width / height,
                        notValid = params.width && parseFloat(params.width !== width) || params.min_width && parseFloat(params.min_width) > width || params.max_width && parseFloat(params.max_width) < width || params.height && parseFloat(params.height) !== height || params.min_height && parseFloat(params.min_height) > height || params.max_height && parseFloat(params.max_height) < height || params.ratio && ratio !== parseFloat(eval(params.ratio));
                    callback(!notValid)
                }, img.onerror = function () {
                    callback(!1)
                }, img.src = fr.result
            }, fr.readAsDataURL(element.files[0]), "pending"
        }, Alpha: function (e) {
            return "string" == typeof e && new RegExp("^(?:^[a-zà-ü]+$)$", "i").test(e)
        }, AlphaNum: function (e) {
            return "string" == typeof e && new RegExp("^(?:^[a-z0-9à-ü]+$)$", "i").test(e)
        }, AlphaDash: function (e) {
            return "string" == typeof e && new RegExp("^(?:^[a-z0-9à-ü_-]+$)$", "i").test(e)
        }, Regex: function (e, t, n) {
            var i = ["x", "s", "u", "X", "U", "A"], r = new RegExp("^(?:/)(.*\\/?[^/]*|[^/]*)(?:/)([gmixXsuUAJ]*)?$"),
                o = n[0].match(r);
            if (null === o) return !1;
            var a = [];
            if (void 0 !== o[2]) {
                a = o[2].split("");
                for (var s = 0; s < a.length < s; s++) if (-1 !== i.indexOf(a[s])) return !0
            }
            return new RegExp("^(?:" + o[1] + ")$", a.join()).test(e)
        }, Date: function (e) {
            return !1 !== laravelValidation.helpers.strtotime(e)
        }, DateFormat: function (e, t, n) {
            return !1 !== laravelValidation.helpers.parseTime(e, n[0])
        }, Before: function (e, t, n) {
            var i = parseFloat(n);
            if (isNaN(i)) {
                var r = laravelValidation.helpers.dependentElement(this, t, n);
                if (void 0 === r) return !1;
                i = laravelValidation.helpers.parseTime(this.elementValue(r), r)
            }
            var o = laravelValidation.helpers.parseTime(e, t);
            return !1 !== o && o < i
        }, After: function (e, t, n) {
            var i = parseFloat(n);
            if (isNaN(i)) {
                var r = laravelValidation.helpers.dependentElement(this, t, n);
                if (void 0 === r) return !1;
                i = laravelValidation.helpers.parseTime(this.elementValue(r), r)
            }
            var o = laravelValidation.helpers.parseTime(e, t);
            return !1 !== o && o > i
        }, Timezone: function (e) {
            return laravelValidation.helpers.isTimezone(e)
        }, Json: function (e) {
            var t = !0;
            try {
                JSON.parse(e)
            } catch (e) {
                t = !1
            }
            return t
        }
    }
}), function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function (e, t) {
    function n() {
        return new Date(Date.UTC.apply(Date, arguments))
    }

    function i() {
        var e = new Date;
        return n(e.getFullYear(), e.getMonth(), e.getDate())
    }

    function r(e) {
        return function () {
            return this[e].apply(this, arguments)
        }
    }

    function o(t) {
        var n = {};
        if (f[t] || (t = t.split("-")[0], f[t])) {
            var i = f[t];
            return e.each(h, function (e, t) {
                t in i && (n[t] = i[t])
            }), n
        }
    }

    var a = function () {
        var t = {
            get: function (e) {
                return this.slice(e)[0]
            }, contains: function (e) {
                for (var t = e && e.valueOf(), n = 0, i = this.length; i > n; n++) if (this[n].valueOf() === t) return n;
                return -1
            }, remove: function (e) {
                this.splice(e, 1)
            }, replace: function (t) {
                t && (e.isArray(t) || (t = [t]), this.clear(), this.push.apply(this, t))
            }, clear: function () {
                this.length = 0
            }, copy: function () {
                var e = new a;
                return e.replace(this), e
            }
        };
        return function () {
            var n = [];
            return n.push.apply(n, arguments), e.extend(n, t), n
        }
    }(), s = function (t, n) {
        e(t).data("datepicker", this), this._process_options(n), this.dates = new a, this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = e(t), this.isInput = this.element.is("input"), this.inputField = this.isInput ? this.element : this.element.find("input"), this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn"), this.hasInput = this.component && this.inputField.length, this.component && 0 === this.component.length && (this.component = !1), this.isInline = !this.component && this.element.is("div"), this.picker = e(p.template), this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow), this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function (e, t) {
            return parseInt(t) + 1
        }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted), this.setDatesDisabled(this.o.datesDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
    };
    s.prototype = {
        constructor: s, _resolveViewName: function (e, n) {
            return 0 === e || "days" === e || "month" === e ? 0 : 1 === e || "months" === e || "year" === e ? 1 : 2 === e || "years" === e || "decade" === e ? 2 : 3 === e || "decades" === e || "century" === e ? 3 : 4 === e || "centuries" === e || "millennium" === e ? 4 : n !== t && n
        }, _check_template: function (n) {
            try {
                return n !== t && "" !== n && ((n.match(/[<>]/g) || []).length <= 0 || e(n).length > 0)
            } catch (e) {
                return !1
            }
        }, _process_options: function (t) {
            this._o = e.extend({}, this._o, t);
            var r = this.o = e.extend({}, this._o), o = r.language;
            f[o] || (o = o.split("-")[0], f[o] || (o = d.language)), r.language = o, r.startView = this._resolveViewName(r.startView, 0), r.minViewMode = this._resolveViewName(r.minViewMode, 0), r.maxViewMode = this._resolveViewName(r.maxViewMode, 4), r.startView = Math.min(r.startView, r.maxViewMode), r.startView = Math.max(r.startView, r.minViewMode), !0 !== r.multidate && (r.multidate = Number(r.multidate) || !1, !1 !== r.multidate && (r.multidate = Math.max(0, r.multidate))), r.multidateSeparator = String(r.multidateSeparator), r.weekStart %= 7, r.weekEnd = (r.weekStart + 6) % 7;
            var a = p.parseFormat(r.format);
            r.startDate !== -1 / 0 && (r.startDate ? r.startDate instanceof Date ? r.startDate = this._local_to_utc(this._zero_time(r.startDate)) : r.startDate = p.parseDate(r.startDate, a, r.language, r.assumeNearbyYear) : r.startDate = -1 / 0), r.endDate !== 1 / 0 && (r.endDate ? r.endDate instanceof Date ? r.endDate = this._local_to_utc(this._zero_time(r.endDate)) : r.endDate = p.parseDate(r.endDate, a, r.language, r.assumeNearbyYear) : r.endDate = 1 / 0), r.daysOfWeekDisabled = r.daysOfWeekDisabled || [], e.isArray(r.daysOfWeekDisabled) || (r.daysOfWeekDisabled = r.daysOfWeekDisabled.split(/[,\s]*/)), r.daysOfWeekDisabled = e.map(r.daysOfWeekDisabled, function (e) {
                return parseInt(e, 10)
            }), r.daysOfWeekHighlighted = r.daysOfWeekHighlighted || [], e.isArray(r.daysOfWeekHighlighted) || (r.daysOfWeekHighlighted = r.daysOfWeekHighlighted.split(/[,\s]*/)), r.daysOfWeekHighlighted = e.map(r.daysOfWeekHighlighted, function (e) {
                return parseInt(e, 10)
            }), r.datesDisabled = r.datesDisabled || [], e.isArray(r.datesDisabled) || (r.datesDisabled = [r.datesDisabled]), r.datesDisabled = e.map(r.datesDisabled, function (e) {
                return p.parseDate(e, a, r.language, r.assumeNearbyYear)
            });
            var s = String(r.orientation).toLowerCase().split(/\s+/g), l = r.orientation.toLowerCase();
            if (s = e.grep(s, function (e) {
                return /^auto|left|right|top|bottom$/.test(e)
            }), r.orientation = {x: "auto", y: "auto"}, l && "auto" !== l) if (1 === s.length) switch (s[0]) {
                case"top":
                case"bottom":
                    r.orientation.y = s[0];
                    break;
                case"left":
                case"right":
                    r.orientation.x = s[0]
            } else l = e.grep(s, function (e) {
                return /^left|right$/.test(e)
            }), r.orientation.x = l[0] || "auto", l = e.grep(s, function (e) {
                return /^top|bottom$/.test(e)
            }), r.orientation.y = l[0] || "auto";
            if (r.defaultViewDate) {
                var u = r.defaultViewDate.year || (new Date).getFullYear(), c = r.defaultViewDate.month || 0,
                    h = r.defaultViewDate.day || 1;
                r.defaultViewDate = n(u, c, h)
            } else r.defaultViewDate = i()
        }, _events: [], _secondaryEvents: [], _applyEvents: function (e) {
            for (var n, i, r, o = 0; o < e.length; o++) n = e[o][0], 2 === e[o].length ? (i = t, r = e[o][1]) : 3 === e[o].length && (i = e[o][1], r = e[o][2]), n.on(r, i)
        }, _unapplyEvents: function (e) {
            for (var n, i, r, o = 0; o < e.length; o++) n = e[o][0], 2 === e[o].length ? (r = t, i = e[o][1]) : 3 === e[o].length && (r = e[o][1], i = e[o][2]), n.off(i, r)
        }, _buildEvents: function () {
            var t = {
                keyup: e.proxy(function (t) {
                    -1 === e.inArray(t.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                }, this), keydown: e.proxy(this.keydown, this), paste: e.proxy(this.paste, this)
            };
            !0 === this.o.showOnFocus && (t.focus = e.proxy(this.show, this)), this.isInput ? this._events = [[this.element, t]] : this.component && this.hasInput ? this._events = [[this.inputField, t], [this.component, {click: e.proxy(this.show, this)}]] : this._events = [[this.element, {
                click: e.proxy(this.show, this),
                keydown: e.proxy(this.keydown, this)
            }]], this._events.push([this.element, "*", {
                blur: e.proxy(function (e) {
                    this._focused_from = e.target
                }, this)
            }], [this.element, {
                blur: e.proxy(function (e) {
                    this._focused_from = e.target
                }, this)
            }]), this.o.immediateUpdates && this._events.push([this.element, {
                "changeYear changeMonth": e.proxy(function (e) {
                    this.update(e.date)
                }, this)
            }]), this._secondaryEvents = [[this.picker, {click: e.proxy(this.click, this)}], [e(window), {resize: e.proxy(this.place, this)}], [e(document), {
                mousedown: e.proxy(function (e) {
                    this.element.is(e.target) || this.element.find(e.target).length || this.picker.is(e.target) || this.picker.find(e.target).length || this.isInline || this.hide()
                }, this)
            }]]
        }, _attachEvents: function () {
            this._detachEvents(), this._applyEvents(this._events)
        }, _detachEvents: function () {
            this._unapplyEvents(this._events)
        }, _attachSecondaryEvents: function () {
            this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
        }, _detachSecondaryEvents: function () {
            this._unapplyEvents(this._secondaryEvents)
        }, _trigger: function (t, n) {
            var i = n || this.dates.get(-1), r = this._utc_to_local(i);
            this.element.trigger({
                type: t,
                date: r,
                dates: e.map(this.dates, this._utc_to_local),
                format: e.proxy(function (e, t) {
                    0 === arguments.length ? (e = this.dates.length - 1, t = this.o.format) : "string" == typeof e && (t = e, e = this.dates.length - 1), t = t || this.o.format;
                    var n = this.dates.get(e);
                    return p.formatDate(n, t, this.o.language)
                }, this)
            })
        }, show: function () {
            return this.inputField.prop("disabled") || this.inputField.prop("readonly") && !1 === this.o.enableOnReadonly ? void 0 : (this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && e(this.element).blur(), this)
        }, hide: function () {
            return this.isInline || !this.picker.is(":visible") ? this : (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && this.inputField.val() && this.setValue(), this._trigger("hide"), this)
        }, destroy: function () {
            return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this
        }, paste: function (t) {
            var n;
            if (t.originalEvent.clipboardData && t.originalEvent.clipboardData.types && -1 !== e.inArray("text/plain", t.originalEvent.clipboardData.types)) n = t.originalEvent.clipboardData.getData("text/plain"); else {
                if (!window.clipboardData) return;
                n = window.clipboardData.getData("Text")
            }
            this.setDate(n), this.update(), t.preventDefault()
        }, _utc_to_local: function (e) {
            return e && new Date(e.getTime() + 6e4 * e.getTimezoneOffset())
        }, _local_to_utc: function (e) {
            return e && new Date(e.getTime() - 6e4 * e.getTimezoneOffset())
        }, _zero_time: function (e) {
            return e && new Date(e.getFullYear(), e.getMonth(), e.getDate())
        }, _zero_utc_time: function (e) {
            return e && new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()))
        }, getDates: function () {
            return e.map(this.dates, this._utc_to_local)
        }, getUTCDates: function () {
            return e.map(this.dates, function (e) {
                return new Date(e)
            })
        }, getDate: function () {
            return this._utc_to_local(this.getUTCDate())
        }, getUTCDate: function () {
            var e = this.dates.get(-1);
            return void 0 !== e ? new Date(e) : null
        }, clearDates: function () {
            this.inputField && this.inputField.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
        }, setDates: function () {
            var t = e.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, t), this._trigger("changeDate"), this.setValue(), this
        }, setUTCDates: function () {
            var t = e.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, e.map(t, this._utc_to_local)), this._trigger("changeDate"), this.setValue(), this
        }, setDate: r("setDates"), setUTCDate: r("setUTCDates"), remove: r("destroy"), setValue: function () {
            var e = this.getFormattedDate();
            return this.inputField.val(e), this
        }, getFormattedDate: function (n) {
            n === t && (n = this.o.format);
            var i = this.o.language;
            return e.map(this.dates, function (e) {
                return p.formatDate(e, n, i)
            }).join(this.o.multidateSeparator)
        }, getStartDate: function () {
            return this.o.startDate
        }, setStartDate: function (e) {
            return this._process_options({startDate: e}), this.update(), this.updateNavArrows(), this
        }, getEndDate: function () {
            return this.o.endDate
        }, setEndDate: function (e) {
            return this._process_options({endDate: e}), this.update(), this.updateNavArrows(), this
        }, setDaysOfWeekDisabled: function (e) {
            return this._process_options({daysOfWeekDisabled: e}), this.update(), this.updateNavArrows(), this
        }, setDaysOfWeekHighlighted: function (e) {
            return this._process_options({daysOfWeekHighlighted: e}), this.update(), this
        }, setDatesDisabled: function (e) {
            this._process_options({datesDisabled: e}), this.update(), this.updateNavArrows()
        }, place: function () {
            if (this.isInline) return this;
            var t = this.picker.outerWidth(), n = this.picker.outerHeight(), i = e(this.o.container), r = i.width(),
                o = "body" === this.o.container ? e(document).scrollTop() : i.scrollTop(), a = i.offset(), s = [];
            this.element.parents().each(function () {
                var t = e(this).css("z-index");
                "auto" !== t && 0 !== t && s.push(parseInt(t))
            });
            var l = Math.max.apply(Math, s) + this.o.zIndexOffset,
                u = this.component ? this.component.parent().offset() : this.element.offset(),
                c = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                d = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1), h = u.left - a.left,
                f = u.top - a.top;
            "body" !== this.o.container && (f += o), this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (h -= t - d)) : u.left < 0 ? (this.picker.addClass("datepicker-orient-left"), h -= u.left - 10) : h + t > r ? (this.picker.addClass("datepicker-orient-right"), h += d - t) : this.picker.addClass("datepicker-orient-left");
            var p = this.o.orientation.y;
            if ("auto" === p && (p = 0 > -o + f - n ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + p), "top" === p ? f -= n + parseInt(this.picker.css("padding-top")) : f += c, this.o.rtl) {
                var m = r - (h + d);
                this.picker.css({top: f, right: m, zIndex: l})
            } else this.picker.css({top: f, left: h, zIndex: l});
            return this
        }, _allow_update: !0, update: function () {
            if (!this._allow_update) return this;
            var t = this.dates.copy(), n = [], i = !1;
            return arguments.length ? (e.each(arguments, e.proxy(function (e, t) {
                t instanceof Date && (t = this._local_to_utc(t)), n.push(t)
            }, this)), i = !0) : (n = (n = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val()) && this.o.multidate ? n.split(this.o.multidateSeparator) : [n], delete this.element.data().date), n = e.map(n, e.proxy(function (e) {
                return p.parseDate(e, this.o.format, this.o.language, this.o.assumeNearbyYear)
            }, this)), n = e.grep(n, e.proxy(function (e) {
                return !this.dateWithinRange(e) || !e
            }, this), !0), this.dates.replace(n), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate, i ? this.setValue() : n.length && String(t) !== String(this.dates) && this._trigger("changeDate"), !this.dates.length && t.length && this._trigger("clearDate"), this.fill(), this.element.change(), this
        }, fillDow: function () {
            var t = this.o.weekStart, n = "<tr>";
            for (this.o.calendarWeeks && (this.picker.find(".datepicker-days .datepicker-switch").attr("colspan", function (e, t) {
                return parseInt(t) + 1
            }), n += '<th class="cw">&#160;</th>'); t < this.o.weekStart + 7;) n += '<th class="dow', e.inArray(t, this.o.daysOfWeekDisabled) > -1 && (n += " disabled"), n += '">' + f[this.o.language].daysMin[t++ % 7] + "</th>";
            n += "</tr>", this.picker.find(".datepicker-days thead").append(n)
        }, fillMonths: function () {
            for (var e = this._utc_to_local(this.viewDate), t = "", n = 0; 12 > n;) {
                t += '<span class="month' + (e && e.getMonth() === n ? " focused" : "") + '">' + f[this.o.language].monthsShort[n++] + "</span>"
            }
            this.picker.find(".datepicker-months td").html(t)
        }, setRange: function (t) {
            t && t.length ? this.range = e.map(t, function (e) {
                return e.valueOf()
            }) : delete this.range, this.fill()
        }, getClassNames: function (t) {
            var n = [], i = this.viewDate.getUTCFullYear(), r = this.viewDate.getUTCMonth(), o = new Date;
            return t.getUTCFullYear() < i || t.getUTCFullYear() === i && t.getUTCMonth() < r ? n.push("old") : (t.getUTCFullYear() > i || t.getUTCFullYear() === i && t.getUTCMonth() > r) && n.push("new"), this.focusDate && t.valueOf() === this.focusDate.valueOf() && n.push("focused"), this.o.todayHighlight && t.getUTCFullYear() === o.getFullYear() && t.getUTCMonth() === o.getMonth() && t.getUTCDate() === o.getDate() && n.push("today"), -1 !== this.dates.contains(t) && n.push("active"), this.dateWithinRange(t) || n.push("disabled"), this.dateIsDisabled(t) && n.push("disabled", "disabled-date"), -1 !== e.inArray(t.getUTCDay(), this.o.daysOfWeekHighlighted) && n.push("highlighted"), this.range && (t > this.range[0] && t < this.range[this.range.length - 1] && n.push("range"), -1 !== e.inArray(t.valueOf(), this.range) && n.push("selected"), t.valueOf() === this.range[0] && n.push("range-start"), t.valueOf() === this.range[this.range.length - 1] && n.push("range-end")), n
        }, _fill_yearsView: function (n, i, r, o, a, s, l, u) {
            var c, d, h, f, p, m, g, v, y, b, _;
            for (c = "", d = this.picker.find(n), h = parseInt(a / r, 10) * r, p = parseInt(s / o, 10) * o, m = parseInt(l / o, 10) * o, f = e.map(this.dates, function (e) {
                return parseInt(e.getUTCFullYear() / o, 10) * o
            }), d.find(".datepicker-switch").text(h + "-" + (h + 9 * o)), g = h - o, v = -1; 11 > v; v += 1) y = [i], b = null, -1 === v ? y.push("old") : 10 === v && y.push("new"), -1 !== e.inArray(g, f) && y.push("active"), (p > g || g > m) && y.push("disabled"), g === this.viewDate.getFullYear() && y.push("focused"), u !== e.noop && ((_ = u(new Date(g, 0, 1))) === t ? _ = {} : "boolean" == typeof _ ? _ = {enabled: _} : "string" == typeof _ && (_ = {classes: _}), !1 === _.enabled && y.push("disabled"), _.classes && (y = y.concat(_.classes.split(/\s+/))), _.tooltip && (b = _.tooltip)), c += '<span class="' + y.join(" ") + '"' + (b ? ' title="' + b + '"' : "") + ">" + g + "</span>", g += o;
            d.find("td").html(c)
        }, fill: function () {
            var i, r, o = new Date(this.viewDate), a = o.getUTCFullYear(), s = o.getUTCMonth(),
                l = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
                u = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
                c = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                d = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
                h = f[this.o.language].today || f.en.today || "", m = f[this.o.language].clear || f.en.clear || "",
                g = f[this.o.language].titleFormat || f.en.titleFormat;
            if (!isNaN(a) && !isNaN(s)) {
                this.picker.find(".datepicker-days .datepicker-switch").text(p.formatDate(o, g, this.o.language)), this.picker.find("tfoot .today").text(h).toggle(!1 !== this.o.todayBtn), this.picker.find("tfoot .clear").text(m).toggle(!1 !== this.o.clearBtn), this.picker.find("thead .datepicker-title").text(this.o.title).toggle("" !== this.o.title), this.updateNavArrows(), this.fillMonths();
                var v = n(a, s - 1, 28), y = p.getDaysInMonth(v.getUTCFullYear(), v.getUTCMonth());
                v.setUTCDate(y), v.setUTCDate(y - (v.getUTCDay() - this.o.weekStart + 7) % 7);
                var b = new Date(v);
                v.getUTCFullYear() < 100 && b.setUTCFullYear(v.getUTCFullYear()), b.setUTCDate(b.getUTCDate() + 42), b = b.valueOf();
                for (var _, w = []; v.valueOf() < b;) {
                    if (v.getUTCDay() === this.o.weekStart && (w.push("<tr>"), this.o.calendarWeeks)) {
                        var x = new Date(+v + (this.o.weekStart - v.getUTCDay() - 7) % 7 * 864e5),
                            D = new Date(Number(x) + (11 - x.getUTCDay()) % 7 * 864e5),
                            T = new Date(Number(T = n(D.getUTCFullYear(), 0, 1)) + (11 - T.getUTCDay()) % 7 * 864e5),
                            C = (D - T) / 864e5 / 7 + 1;
                        w.push('<td class="cw">' + C + "</td>")
                    }
                    (_ = this.getClassNames(v)).push("day"), this.o.beforeShowDay !== e.noop && ((r = this.o.beforeShowDay(this._utc_to_local(v))) === t ? r = {} : "boolean" == typeof r ? r = {enabled: r} : "string" == typeof r && (r = {classes: r}), !1 === r.enabled && _.push("disabled"), r.classes && (_ = _.concat(r.classes.split(/\s+/))), r.tooltip && (i = r.tooltip)), _ = e.isFunction(e.uniqueSort) ? e.uniqueSort(_) : e.unique(_), w.push('<td class="' + _.join(" ") + '"' + (i ? ' title="' + i + '"' : "") + ">" + v.getUTCDate() + "</td>"), i = null, v.getUTCDay() === this.o.weekEnd && w.push("</tr>"), v.setUTCDate(v.getUTCDate() + 1)
                }
                this.picker.find(".datepicker-days tbody").empty().append(w.join(""));
                var k = f[this.o.language].monthsTitle || f.en.monthsTitle || "Months",
                    E = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? k : a).end().find("span").removeClass("active");
                if (e.each(this.dates, function (e, t) {
                    t.getUTCFullYear() === a && E.eq(t.getUTCMonth()).addClass("active")
                }), (l > a || a > c) && E.addClass("disabled"), a === l && E.slice(0, u).addClass("disabled"), a === c && E.slice(d + 1).addClass("disabled"), this.o.beforeShowMonth !== e.noop) {
                    var S = this;
                    e.each(E, function (n, i) {
                        var r = new Date(a, n, 1), o = S.o.beforeShowMonth(r);
                        o === t ? o = {} : "boolean" == typeof o ? o = {enabled: o} : "string" == typeof o && (o = {classes: o}), !1 !== o.enabled || e(i).hasClass("disabled") || e(i).addClass("disabled"), o.classes && e(i).addClass(o.classes), o.tooltip && e(i).prop("title", o.tooltip)
                    })
                }
                this._fill_yearsView(".datepicker-years", "year", 10, 1, a, l, c, this.o.beforeShowYear), this._fill_yearsView(".datepicker-decades", "decade", 100, 10, a, l, c, this.o.beforeShowDecade), this._fill_yearsView(".datepicker-centuries", "century", 1e3, 100, a, l, c, this.o.beforeShowCentury)
            }
        }, updateNavArrows: function () {
            if (this._allow_update) {
                var e = new Date(this.viewDate), t = e.getUTCFullYear(), n = e.getUTCMonth();
                switch (this.viewMode) {
                    case 0:
                        this.o.startDate !== -1 / 0 && t <= this.o.startDate.getUTCFullYear() && n <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({visibility: "hidden"}) : this.picker.find(".prev").css({visibility: "visible"}), this.o.endDate !== 1 / 0 && t >= this.o.endDate.getUTCFullYear() && n >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({visibility: "hidden"}) : this.picker.find(".next").css({visibility: "visible"});
                        break;
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        this.o.startDate !== -1 / 0 && t <= this.o.startDate.getUTCFullYear() || this.o.maxViewMode < 2 ? this.picker.find(".prev").css({visibility: "hidden"}) : this.picker.find(".prev").css({visibility: "visible"}), this.o.endDate !== 1 / 0 && t >= this.o.endDate.getUTCFullYear() || this.o.maxViewMode < 2 ? this.picker.find(".next").css({visibility: "hidden"}) : this.picker.find(".next").css({visibility: "visible"})
                }
            }
        }, click: function (t) {
            var r, o, a, s, l, u, c;
            t.preventDefault(), t.stopPropagation(), (r = e(t.target)).hasClass("datepicker-switch") && this.showMode(1);
            var d = r.closest(".prev, .next");
            d.length > 0 && (o = p.modes[this.viewMode].navStep * (d.hasClass("prev") ? -1 : 1), 0 === this.viewMode ? (this.viewDate = this.moveMonth(this.viewDate, o), this._trigger("changeMonth", this.viewDate)) : (this.viewDate = this.moveYear(this.viewDate, o), 1 === this.viewMode && this._trigger("changeYear", this.viewDate)), this.fill()), r.hasClass("today") && !r.hasClass("day") && (this.showMode(-2), this._setDate(i(), "linked" === this.o.todayBtn ? null : "view")), r.hasClass("clear") && this.clearDates(), r.hasClass("disabled") || (r.hasClass("day") && (a = parseInt(r.text(), 10) || 1, s = this.viewDate.getUTCFullYear(), l = this.viewDate.getUTCMonth(), r.hasClass("old") && (0 === l ? (l = 11, s -= 1, u = !0, c = !0) : (l -= 1, u = !0)), r.hasClass("new") && (11 === l ? (l = 0, s += 1, u = !0, c = !0) : (l += 1, u = !0)), this._setDate(n(s, l, a)), c && this._trigger("changeYear", this.viewDate), u && this._trigger("changeMonth", this.viewDate)), r.hasClass("month") && (this.viewDate.setUTCDate(1), a = 1, l = r.parent().find("span").index(r), s = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(l), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode ? (this._setDate(n(s, l, a)), this.showMode()) : this.showMode(-1), this.fill()), (r.hasClass("year") || r.hasClass("decade") || r.hasClass("century")) && (this.viewDate.setUTCDate(1), a = 1, l = 0, s = parseInt(r.text(), 10) || 0, this.viewDate.setUTCFullYear(s), r.hasClass("year") && (this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(n(s, l, a))), r.hasClass("decade") && (this._trigger("changeDecade", this.viewDate), 3 === this.o.minViewMode && this._setDate(n(s, l, a))), r.hasClass("century") && (this._trigger("changeCentury", this.viewDate), 4 === this.o.minViewMode && this._setDate(n(s, l, a))), this.showMode(-1), this.fill())), this.picker.is(":visible") && this._focused_from && e(this._focused_from).focus(), delete this._focused_from
        }, _toggle_multidate: function (e) {
            var t = this.dates.contains(e);
            if (e || this.dates.clear(), -1 !== t ? (!0 === this.o.multidate || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(t) : !1 === this.o.multidate ? (this.dates.clear(), this.dates.push(e)) : this.dates.push(e), "number" == typeof this.o.multidate) for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
        }, _setDate: function (e, t) {
            t && "date" !== t || this._toggle_multidate(e && new Date(e)), t && "view" !== t || (this.viewDate = e && new Date(e)), this.fill(), this.setValue(), t && "view" === t || this._trigger("changeDate"), this.inputField && this.inputField.change(), !this.o.autoclose || t && "date" !== t || this.hide()
        }, moveDay: function (e, t) {
            var n = new Date(e);
            return n.setUTCDate(e.getUTCDate() + t), n
        }, moveWeek: function (e, t) {
            return this.moveDay(e, 7 * t)
        }, moveMonth: function (e, t) {
            if (!function (e) {
                return e && !isNaN(e.getTime())
            }(e)) return this.o.defaultViewDate;
            if (!t) return e;
            var n, i, r = new Date(e.valueOf()), o = r.getUTCDate(), a = r.getUTCMonth(), s = Math.abs(t);
            if (t = t > 0 ? 1 : -1, 1 === s) i = -1 === t ? function () {
                return r.getUTCMonth() === a
            } : function () {
                return r.getUTCMonth() !== n
            }, n = a + t, r.setUTCMonth(n), (0 > n || n > 11) && (n = (n + 12) % 12); else {
                for (var l = 0; s > l; l++) r = this.moveMonth(r, t);
                n = r.getUTCMonth(), r.setUTCDate(o), i = function () {
                    return n !== r.getUTCMonth()
                }
            }
            for (; i();) r.setUTCDate(--o), r.setUTCMonth(n);
            return r
        }, moveYear: function (e, t) {
            return this.moveMonth(e, 12 * t)
        }, moveAvailableDate: function (e, t, n) {
            do {
                if (e = this[n](e, t), !this.dateWithinRange(e)) return !1;
                n = "moveDay"
            } while (this.dateIsDisabled(e));
            return e
        }, weekOfDateIsDisabled: function (t) {
            return -1 !== e.inArray(t.getUTCDay(), this.o.daysOfWeekDisabled)
        }, dateIsDisabled: function (t) {
            return this.weekOfDateIsDisabled(t) || e.grep(this.o.datesDisabled, function (e) {
                return function (e, t) {
                    return e.getUTCFullYear() === t.getUTCFullYear() && e.getUTCMonth() === t.getUTCMonth() && e.getUTCDate() === t.getUTCDate()
                }(t, e)
            }).length > 0
        }, dateWithinRange: function (e) {
            return e >= this.o.startDate && e <= this.o.endDate
        }, keydown: function (e) {
            if (this.picker.is(":visible")) {
                var t, n, i = !1, r = this.focusDate || this.viewDate;
                switch (e.keyCode) {
                    case 27:
                        this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), e.preventDefault(), e.stopPropagation();
                        break;
                    case 37:
                    case 38:
                    case 39:
                    case 40:
                        if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break;
                        t = 37 === e.keyCode || 38 === e.keyCode ? -1 : 1, 0 === this.viewMode ? e.ctrlKey ? (n = this.moveAvailableDate(r, t, "moveYear")) && this._trigger("changeYear", this.viewDate) : e.shiftKey ? (n = this.moveAvailableDate(r, t, "moveMonth")) && this._trigger("changeMonth", this.viewDate) : 37 === e.keyCode || 39 === e.keyCode ? n = this.moveAvailableDate(r, t, "moveDay") : this.weekOfDateIsDisabled(r) || (n = this.moveAvailableDate(r, t, "moveWeek")) : 1 === this.viewMode ? ((38 === e.keyCode || 40 === e.keyCode) && (t *= 4), n = this.moveAvailableDate(r, t, "moveMonth")) : 2 === this.viewMode && ((38 === e.keyCode || 40 === e.keyCode) && (t *= 4), n = this.moveAvailableDate(r, t, "moveYear")), n && (this.focusDate = this.viewDate = n, this.setValue(), this.fill(), e.preventDefault());
                        break;
                    case 13:
                        if (!this.o.forceParse) break;
                        r = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(r), i = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (e.preventDefault(), e.stopPropagation(), this.o.autoclose && this.hide());
                        break;
                    case 9:
                        this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
                }
                i && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.inputField && this.inputField.change())
            } else (40 === e.keyCode || 27 === e.keyCode) && (this.show(), e.stopPropagation())
        }, showMode: function (e) {
            e && (this.viewMode = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, this.viewMode + e))), this.picker.children("div").hide().filter(".datepicker-" + p.modes[this.viewMode].clsName).show(), this.updateNavArrows()
        }
    };
    var l = function (t, n) {
        e(t).data("datepicker", this), this.element = e(t), this.inputs = e.map(n.inputs, function (e) {
            return e.jquery ? e[0] : e
        }), delete n.inputs, c.call(e(this.inputs), n).on("changeDate", e.proxy(this.dateUpdated, this)), this.pickers = e.map(this.inputs, function (t) {
            return e(t).data("datepicker")
        }), this.updateDates()
    };
    l.prototype = {
        updateDates: function () {
            this.dates = e.map(this.pickers, function (e) {
                return e.getUTCDate()
            }), this.updateRanges()
        }, updateRanges: function () {
            var t = e.map(this.dates, function (e) {
                return e.valueOf()
            });
            e.each(this.pickers, function (e, n) {
                n.setRange(t)
            })
        }, dateUpdated: function (t) {
            if (!this.updating) {
                this.updating = !0;
                var n = e(t.target).data("datepicker");
                if (void 0 !== n) {
                    var i = n.getUTCDate(), r = e.inArray(t.target, this.inputs), o = r - 1, a = r + 1,
                        s = this.inputs.length;
                    if (-1 !== r) {
                        if (e.each(this.pickers, function (e, t) {
                            t.getUTCDate() || t.setUTCDate(i)
                        }), i < this.dates[o]) for (; o >= 0 && i < this.dates[o];) this.pickers[o--].setUTCDate(i); else if (i > this.dates[a]) for (; s > a && i > this.dates[a];) this.pickers[a++].setUTCDate(i);
                        this.updateDates(), delete this.updating
                    }
                }
            }
        }, remove: function () {
            e.map(this.pickers, function (e) {
                e.remove()
            }), delete this.element.data().datepicker
        }
    };
    var u = e.fn.datepicker, c = function (n) {
        var i, r = Array.apply(null, arguments);
        if (r.shift(), this.each(function () {
            var t = e(this), a = t.data("datepicker"), u = "object" == typeof n && n;
            if (!a) {
                var c = function (t, n) {
                    function i(e, t) {
                        return t.toLowerCase()
                    }

                    var r = e(t).data(), o = {}, a = new RegExp("^" + n.toLowerCase() + "([A-Z])");
                    for (var s in n = new RegExp("^" + n.toLowerCase()), r) n.test(s) && (o[s.replace(a, i)] = r[s]);
                    return o
                }(this, "date"), h = o(e.extend({}, d, c, u).language), f = e.extend({}, d, h, c, u);
                t.hasClass("input-daterange") || f.inputs ? (e.extend(f, {inputs: f.inputs || t.find("input").toArray()}), a = new l(this, f)) : a = new s(this, f), t.data("datepicker", a)
            }
            "string" == typeof n && "function" == typeof a[n] && (i = a[n].apply(a, r))
        }), i === t || i instanceof s || i instanceof l) return this;
        if (this.length > 1) throw new Error("Using only allowed for the collection of a single element (" + n + " function)");
        return i
    };
    e.fn.datepicker = c;
    var d = e.fn.datepicker.defaults = {
        assumeNearbyYear: !1,
        autoclose: !1,
        beforeShowDay: e.noop,
        beforeShowMonth: e.noop,
        beforeShowYear: e.noop,
        beforeShowDecade: e.noop,
        beforeShowCentury: e.noop,
        calendarWeeks: !1,
        clearBtn: !1,
        toggleActive: !1,
        daysOfWeekDisabled: [],
        daysOfWeekHighlighted: [],
        datesDisabled: [],
        endDate: 1 / 0,
        forceParse: !0,
        format: "mm/dd/yyyy",
        keyboardNavigation: !0,
        language: "en",
        minViewMode: 0,
        maxViewMode: 4,
        multidate: !1,
        multidateSeparator: ",",
        orientation: "auto",
        rtl: !1,
        startDate: -1 / 0,
        startView: 0,
        todayBtn: !1,
        todayHighlight: !1,
        weekStart: 0,
        disableTouchKeyboard: !1,
        enableOnReadonly: !0,
        showOnFocus: !0,
        zIndexOffset: 10,
        container: "body",
        immediateUpdates: !1,
        title: "",
        templates: {leftArrow: "&laquo;", rightArrow: "&raquo;"}
    }, h = e.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    e.fn.datepicker.Constructor = s;
    var f = e.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear",
            titleFormat: "MM yyyy"
        }
    }, p = {
        modes: [{clsName: "days", navFnc: "Month", navStep: 1}, {
            clsName: "months",
            navFnc: "FullYear",
            navStep: 1
        }, {clsName: "years", navFnc: "FullYear", navStep: 10}, {
            clsName: "decades",
            navFnc: "FullDecade",
            navStep: 100
        }, {clsName: "centuries", navFnc: "FullCentury", navStep: 1e3}],
        isLeapYear: function (e) {
            return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
        },
        getDaysInMonth: function (e, t) {
            return [31, p.isLeapYear(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
        },
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
        parseFormat: function (e) {
            if ("function" == typeof e.toValue && "function" == typeof e.toDisplay) return e;
            var t = e.replace(this.validParts, "\0").split("\0"), n = e.match(this.validParts);
            if (!t || !t.length || !n || 0 === n.length) throw new Error("Invalid date format.");
            return {separators: t, parts: n}
        },
        parseDate: function (r, o, a, l) {
            function u(e, t) {
                return !0 === t && (t = 10), 100 > e && ((e += 2e3) > (new Date).getFullYear() + t && (e -= 100)), e
            }

            function c() {
                var e = this.slice(0, y[m].length), t = y[m].slice(0, e.length);
                return e.toLowerCase() === t.toLowerCase()
            }

            if (!r) return t;
            if (r instanceof Date) return r;
            if ("string" == typeof o && (o = p.parseFormat(o)), o.toValue) return o.toValue(r, o, a);
            var d, h, m, g, v = /([\-+]\d+)([dmwy])/, y = r.match(/([\-+]\d+)([dmwy])/g),
                b = {d: "moveDay", m: "moveMonth", w: "moveWeek", y: "moveYear"},
                _ = {yesterday: "-1d", today: "+0d", tomorrow: "+1d"};
            if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(r)) {
                for (r = new Date, m = 0; m < y.length; m++) d = v.exec(y[m]), h = parseInt(d[1]), g = b[d[2]], r = s.prototype[g](r, h);
                return n(r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate())
            }
            if (void 0 !== _[r] && (y = (r = _[r]).match(/([\-+]\d+)([dmwy])/g), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(r))) {
                for (r = new Date, m = 0; m < y.length; m++) d = v.exec(y[m]), h = parseInt(d[1]), g = b[d[2]], r = s.prototype[g](r, h);
                return n(r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate())
            }
            y = r && r.match(this.nonpunctuation) || [], r = new Date;
            var w, x, D = {}, T = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"], C = {
                yyyy: function (e, t) {
                    return e.setUTCFullYear(l ? u(t, l) : t)
                }, yy: function (e, t) {
                    return e.setUTCFullYear(l ? u(t, l) : t)
                }, m: function (e, t) {
                    if (isNaN(e)) return e;
                    for (t -= 1; 0 > t;) t += 12;
                    for (t %= 12, e.setUTCMonth(t); e.getUTCMonth() !== t;) e.setUTCDate(e.getUTCDate() - 1);
                    return e
                }, d: function (e, t) {
                    return e.setUTCDate(t)
                }
            };
            C.M = C.MM = C.mm = C.m, C.dd = C.d, r = i();
            var k = o.parts.slice();
            if (y.length !== k.length && (k = e(k).filter(function (t, n) {
                return -1 !== e.inArray(n, T)
            }).toArray()), y.length === k.length) {
                var E, S, A;
                for (m = 0, E = k.length; E > m; m++) {
                    if (w = parseInt(y[m], 10), d = k[m], isNaN(w)) switch (d) {
                        case"MM":
                            x = e(f[a].months).filter(c), w = e.inArray(x[0], f[a].months) + 1;
                            break;
                        case"M":
                            x = e(f[a].monthsShort).filter(c), w = e.inArray(x[0], f[a].monthsShort) + 1
                    }
                    D[d] = w
                }
                for (m = 0; m < T.length; m++) (A = T[m]) in D && !isNaN(D[A]) && (S = new Date(r), C[A](S, D[A]), isNaN(S) || (r = S))
            }
            return r
        },
        formatDate: function (t, n, i) {
            if (!t) return "";
            if ("string" == typeof n && (n = p.parseFormat(n)), n.toDisplay) return n.toDisplay(t, n, i);
            var r = {
                d: t.getUTCDate(),
                D: f[i].daysShort[t.getUTCDay()],
                DD: f[i].days[t.getUTCDay()],
                m: t.getUTCMonth() + 1,
                M: f[i].monthsShort[t.getUTCMonth()],
                MM: f[i].months[t.getUTCMonth()],
                yy: t.getUTCFullYear().toString().substring(2),
                yyyy: t.getUTCFullYear()
            };
            r.dd = (r.d < 10 ? "0" : "") + r.d, r.mm = (r.m < 10 ? "0" : "") + r.m, t = [];
            for (var o = e.extend([], n.separators), a = 0, s = n.parts.length; s >= a; a++) o.length && t.push(o.shift()), t.push(r[n.parts[a]]);
            return t.join("")
        },
        headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
    };
    p.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + p.headTemplate + "<tbody></tbody>" + p.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + p.headTemplate + p.contTemplate + p.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + p.headTemplate + p.contTemplate + p.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + p.headTemplate + p.contTemplate + p.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + p.headTemplate + p.contTemplate + p.footTemplate + "</table></div></div>", e.fn.datepicker.DPGlobal = p, e.fn.datepicker.noConflict = function () {
        return e.fn.datepicker = u, this
    }, e.fn.datepicker.version = "1.6.4", e(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function (t) {
        var n = e(this);
        n.data("datepicker") || (t.preventDefault(), c.call(n, "show"))
    }), e(function () {
        c.call(e('[data-provide="datepicker-inline"]'))
    })
}), function (e, t) {
    "function" == typeof define && define.amd ? define(["exports", "b"], t) : "object" == typeof exports && "string" != typeof exports.nodeName ? t(exports, require("b")) : t(e.commonJsStrict = {}, e.b)
}(this, function (e, t) {
    "function" != typeof Promise && function () {
        "use strict";

        function e(e) {
            return "function" == typeof e
        }

        var t, n, i = Array.isArray ? Array.isArray : function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }, r = 0, o = function (e, t) {
            v[r] = e, v[r + 1] = t, 2 === (r += 2) && (n ? n(y) : h())
        };
        var a = "undefined" != typeof window ? window : void 0, s = a || {},
            l = s.MutationObserver || s.WebKitMutationObserver,
            u = "undefined" != typeof process && "[object process]" === {}.toString.call(process),
            c = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

        function d() {
            return function () {
                setTimeout(y, 1)
            }
        }

        var h, f, p, m, g, v = new Array(1e3);

        function y() {
            for (var e = 0; e < r; e += 2) {
                (0, v[e])(v[e + 1]), v[e] = void 0, v[e + 1] = void 0
            }
            r = 0
        }

        function b() {
        }

        u ? h = function () {
            process.nextTick(y)
        } : l ? (p = 0, m = new l(y), g = document.createTextNode(""), m.observe(g, {characterData: !0}), h = function () {
            g.data = p = ++p % 2
        }) : c ? ((f = new MessageChannel).port1.onmessage = y, h = function () {
            f.port2.postMessage(0)
        }) : h = void 0 === a && "function" == typeof require ? function () {
            try {
                var e = require("vertx");
                return t = e.runOnLoop || e.runOnContext, function () {
                    t(y)
                }
            } catch (e) {
                return d()
            }
        }() : d();
        var _ = void 0, w = 1, x = 2, D = new M;

        function T(t, n) {
            if (n.constructor === t.constructor) !function (e, t) {
                t._state === w ? E(e, t._result) : t._state === x ? S(e, t._result) : A(t, void 0, function (t) {
                    C(e, t)
                }, function (t) {
                    S(e, t)
                })
            }(t, n); else {
                var i = function (e) {
                    try {
                        return e.then
                    } catch (e) {
                        return D.error = e, D
                    }
                }(n);
                i === D ? S(t, D.error) : void 0 === i ? E(t, n) : e(i) ? function (e, t, n) {
                    o(function (e) {
                        var i = !1, r = function (e, t, n, i) {
                            try {
                                e.call(t, n, i)
                            } catch (e) {
                                return e
                            }
                        }(n, t, function (n) {
                            i || (i = !0, t !== n ? C(e, n) : E(e, n))
                        }, function (t) {
                            i || (i = !0, S(e, t))
                        }, e._label);
                        !i && r && (i = !0, S(e, r))
                    }, e)
                }(t, n, i) : E(t, n)
            }
        }

        function C(e, t) {
            var n;
            e === t ? S(e, new TypeError("You cannot resolve a promise with itself")) : "function" == typeof (n = t) || "object" == typeof n && null !== n ? T(e, t) : E(e, t)
        }

        function k(e) {
            e._onerror && e._onerror(e._result), O(e)
        }

        function E(e, t) {
            e._state === _ && (e._result = t, e._state = w, 0 !== e._subscribers.length && o(O, e))
        }

        function S(e, t) {
            e._state === _ && (e._state = x, e._result = t, o(k, e))
        }

        function A(e, t, n, i) {
            var r = e._subscribers, a = r.length;
            e._onerror = null, r[a] = t, r[a + w] = n, r[a + x] = i, 0 === a && e._state && o(O, e)
        }

        function O(e) {
            var t = e._subscribers, n = e._state;
            if (0 !== t.length) {
                for (var i, r, o = e._result, a = 0; a < t.length; a += 3) i = t[a], r = t[a + n], i ? I(n, i, r, o) : r(o);
                e._subscribers.length = 0
            }
        }

        function M() {
            this.error = null
        }

        var N = new M;

        function I(t, n, i, r) {
            var o, a, s, l, u = e(i);
            if (u) {
                if ((o = function (e, t) {
                    try {
                        return e(t)
                    } catch (e) {
                        return N.error = e, N
                    }
                }(i, r)) === N ? (l = !0, a = o.error, o = null) : s = !0, n === o) return void S(n, new TypeError("A promises callback cannot return that same promise."))
            } else o = r, s = !0;
            n._state !== _ || (u && s ? C(n, o) : l ? S(n, a) : t === w ? E(n, o) : t === x && S(n, o))
        }

        function L(e, t) {
            this._instanceConstructor = e, this.promise = new e(b), this._validateInput(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._init(), 0 === this.length ? E(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && E(this.promise, this._result))) : S(this.promise, this._validationError())
        }

        L.prototype._validateInput = function (e) {
            return i(e)
        }, L.prototype._validationError = function () {
            return new Error("Array Methods must be provided an Array")
        }, L.prototype._init = function () {
            this._result = new Array(this.length)
        };
        var j = L;
        L.prototype._enumerate = function () {
            for (var e = this.length, t = this.promise, n = this._input, i = 0; t._state === _ && i < e; i++) this._eachEntry(n[i], i)
        }, L.prototype._eachEntry = function (e, t) {
            var n, i = this._instanceConstructor;
            "object" == typeof (n = e) && null !== n ? e.constructor === i && e._state !== _ ? (e._onerror = null, this._settledAt(e._state, t, e._result)) : this._willSettleAt(i.resolve(e), t) : (this._remaining--, this._result[t] = e)
        }, L.prototype._settledAt = function (e, t, n) {
            var i = this.promise;
            i._state === _ && (this._remaining--, e === x ? S(i, n) : this._result[t] = n), 0 === this._remaining && E(i, this._result)
        }, L.prototype._willSettleAt = function (e, t) {
            var n = this;
            A(e, void 0, function (e) {
                n._settledAt(w, t, e)
            }, function (e) {
                n._settledAt(x, t, e)
            })
        };
        var F = function (e) {
            return new j(this, e).promise
        };
        var P = function (e) {
            var t = new this(b);
            if (!i(e)) return S(t, new TypeError("You must pass an array to race.")), t;
            var n = e.length;

            function r(e) {
                C(t, e)
            }

            function o(e) {
                S(t, e)
            }

            for (var a = 0; t._state === _ && a < n; a++) A(this.resolve(e[a]), void 0, r, o);
            return t
        };
        var R = function (e) {
            if (e && "object" == typeof e && e.constructor === this) return e;
            var t = new this(b);
            return C(t, e), t
        };
        var U = function (e) {
            var t = new this(b);
            return S(t, e), t
        }, Y = 0;
        var H = W;

        function W(t) {
            this._id = Y++, this._state = void 0, this._result = void 0, this._subscribers = [], b !== t && (e(t) || function () {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }(), this instanceof W || function () {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }(), function (e, t) {
                try {
                    t(function (t) {
                        C(e, t)
                    }, function (t) {
                        S(e, t)
                    })
                } catch (t) {
                    S(e, t)
                }
            }(this, t))
        }

        W.all = F, W.race = P, W.resolve = R, W.reject = U, W._setScheduler = function (e) {
            n = e
        }, W._setAsap = function (e) {
            o = e
        }, W._asap = o, W.prototype = {
            constructor: W, then: function (e, t) {
                var n = this._state;
                if (n === w && !e || n === x && !t) return this;
                var i = new this.constructor(b), r = this._result;
                if (n) {
                    var a = arguments[n - 1];
                    o(function () {
                        I(n, i, a, r)
                    })
                } else A(this, i, e, t);
                return i
            }, catch: function (e) {
                return this.then(null, e)
            }
        };
        var q = function () {
            var e;
            if ("undefined" != typeof global) e = global; else if ("undefined" != typeof self) e = self; else try {
                e = Function("return this")()
            } catch (e) {
                throw new Error("polyfill failed because global object is unavailable in this environment")
            }
            var t = e.Promise;
            t && "[object Promise]" === Object.prototype.toString.call(t.resolve()) && !t.cast || (e.Promise = H)
        }, V = {Promise: H, polyfill: q};
        "function" == typeof define && define.amd ? define(function () {
            return V
        }) : "undefined" != typeof module && module.exports ? module.exports = V : void 0 !== this && (this.ES6Promise = V), q()
    }.call(this);
    var n, i, r, o = ["Webkit", "Moz", "ms"], a = document.createElement("div").style;

    function s(e) {
        if (e in a) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = o.length; n--;) if ((e = o[n] + t) in a) return e
    }

    function l(e) {
        e = e || {};
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            if (n) for (var i in n) n.hasOwnProperty(i) && ("object" == typeof n[i] ? e[i] = l({}, n[i]) : e[i] = n[i])
        }
        return e
    }

    function u(e) {
        if ("createEvent" in document) {
            var t = document.createEvent("HTMLEvents");
            t.initEvent("change", !1, !0), e.dispatchEvent(t)
        } else e.fireEvent("onchange")
    }

    function c(e, t, n) {
        if ("string" == typeof t) {
            var i = t;
            (t = {})[i] = n
        }
        for (var r in t) e.style[r] = t[r]
    }

    function d(e, t) {
        var n, i = t || new Image;
        return n = new Promise(function (e, t) {
            i.setAttribute("crossOrigin", "anonymous"), i.onload = function () {
                setTimeout(function () {
                    e(i)
                }, 1)
            }
        }), i.src = e, n
    }

    i = s("transform"), n = s("transformOrigin"), r = s("userSelect");
    var h = function (e, t, n) {
        this.x = parseFloat(e), this.y = parseFloat(t), this.scale = parseFloat(n)
    };
    h.parse = function (e) {
        return e.style ? h.parse(e.style[i]) : e.indexOf("matrix") > -1 || e.indexOf("none") > -1 ? h.fromMatrix(e) : h.fromString(e)
    }, h.fromMatrix = function (e) {
        var t = e.substring(7).split(",");
        return t.length && "none" !== e || (t = [1, 0, 0, 1, 0, 0]), new h(parseInt(t[4], 10), parseInt(t[5], 10), parseFloat(t[0]))
    }, h.fromString = function (e) {
        var t = e.split(") "), n = t[0].substring("translate3d".length + 1).split(","),
            i = t.length > 1 ? t[1].substring(6) : 1, r = n.length > 1 ? n[0] : 0, o = n.length > 1 ? n[1] : 0;
        return new h(r, o, i)
    }, h.prototype.toString = function () {
        return "translate3d(" + this.x + "px, " + this.y + "px, 0px) scale(" + this.scale + ")"
    };
    var f = function (e) {
        if (!e || !e.style[n]) return this.x = 0, void (this.y = 0);
        var t = e.style[n].split(" ");
        this.x = parseFloat(t[0]), this.y = parseFloat(t[1])
    };

    function p() {
        var e, t, o, a, s = this.options.viewport.type ? "cr-vp-" + this.options.viewport.type : null;
        this.data = {}, this.elements = {}, e = this.elements.boundary = document.createElement("div"), o = this.elements.viewport = document.createElement("div"), t = this.elements.img = document.createElement("img"), a = this.elements.overlay = document.createElement("div"), e.classList.add("cr-boundary"), c(e, {
            width: this.options.boundary.width + "px",
            height: this.options.boundary.height + "px"
        }), o.classList.add("cr-viewport"), s && o.classList.add(s), c(o, {
            width: this.options.viewport.width + "px",
            height: this.options.viewport.height + "px"
        }), t.classList.add("cr-image"), a.classList.add("cr-overlay"), this.element.appendChild(e), e.appendChild(t), e.appendChild(o), e.appendChild(a), this.element.classList.add(["croppie-container"]), this.options.customClass && this.element.classList.add(this.options.customClass), function () {
            var e, t, n, o, a = this, s = !1;

            function l(n) {
                n.preventDefault(), s || (s = !0, e = n.pageX, t = n.pageY, transform = h.parse(a.elements.img), window.addEventListener("mousemove", d), window.addEventListener("touchmove", d), window.addEventListener("mouseup", f), window.addEventListener("touchend", f), document.body.style[r] = "none", o = a.elements.viewport.getBoundingClientRect())
            }

            function d(r) {
                r.preventDefault();
                var s = r.pageX || r.touches[0].pageX, l = r.pageY || r.touches[0].pageY, d = s - e, h = l - t,
                    f = a.elements.img.getBoundingClientRect(), p = transform.y + h, g = transform.x + d, y = {};
                if ("touchmove" == r.type && r.touches.length > 1) {
                    var b = r.touches[0], _ = r.touches[1],
                        w = Math.sqrt((b.pageX - _.pageX) * (b.pageX - _.pageX) + (b.pageY - _.pageY) * (b.pageY - _.pageY));
                    n || (n = w / a._currentZoom);
                    var x = w / n;
                    return m.call(a, x), void u(a.elements.zoomer)
                }
                o.top > f.top + h && o.bottom < f.bottom + h && (transform.y = p), o.left > f.left + d && o.right < f.right + d && (transform.x = g), y[i] = transform.toString(), c(a.elements.img, y), v.call(a), t = l, e = s
            }

            function f() {
                s = !1, window.removeEventListener("mousemove", d), window.removeEventListener("touchmove", d), window.removeEventListener("mouseup", f), window.removeEventListener("touchend", f), document.body.style[r] = "", g.call(a), D.call(a), n = 0
            }

            a.elements.overlay.addEventListener("mousedown", l), a.elements.overlay.addEventListener("touchstart", l)
        }.call(this), this.options.showZoom && function () {
            var e, t, r, o = this, a = o.elements.zoomerWrap = document.createElement("div"),
                s = o.elements.zoomer = document.createElement("input");

            function l() {
                g.call(o), e = new f(o.elements.img), t = o.elements.viewport.getBoundingClientRect(), r = h.parse(o.elements.img)
            }

            function u() {
                (function (e) {
                    var t = e.transform, r = e.viewportRect, o = e.origin;
                    this._currentZoom = e.value, t.scale = this._currentZoom;
                    var a = function (e) {
                        var t = this._currentZoom, n = e.width, i = e.height, r = this.options.boundary.width / 2,
                            o = this.options.boundary.height / 2, a = this._originalImageWidth,
                            s = this._originalImageHeight, l = a * t, u = s * t, c = n / 2, d = i / 2,
                            h = -1 * (c / t - r), f = -1 * (d / t - o), p = 1 / t * c, m = 1 / t * d;
                        return {
                            translate: {
                                maxX: h,
                                minX: h - (l * (1 / t) - n * (1 / t)),
                                maxY: f,
                                minY: f - (u * (1 / t) - i * (1 / t))
                            }, origin: {maxX: l * (1 / t) - p, minX: p, maxY: u * (1 / t) - m, minY: m}
                        }
                    }.call(this, r), s = a.translate, l = a.origin;
                    t.x >= s.maxX && (o.x = l.minX, t.x = s.maxX);
                    t.x <= s.minX && (o.x = l.maxX, t.x = s.minX);
                    t.y >= s.maxY && (o.y = l.minY, t.y = s.maxY);
                    t.y <= s.minY && (o.y = l.maxY, t.y = s.minY);
                    var u = {};
                    u[i] = t.toString(), u[n] = o.toString(), c(this.elements.img, u), x.call(this), D.call(this)
                }).call(o, {
                    value: parseFloat(s.value),
                    origin: e || new f(o.elements.img),
                    viewportRect: t || o.elements.viewport.getBoundingClientRect(),
                    transform: r || h.parse(o.elements.img)
                })
            }

            function d(e) {
                var t = e.deltaY / -2e3, n = o._currentZoom + t;
                e.preventDefault(), l(), m.call(o, n), u()
            }

            a.classList.add("cr-slider-wrap"), s.type = "range", s.classList.add("cr-slider"), s.step = "0.01", s.value = 1, o.element.appendChild(a), a.appendChild(s), o._currentZoom = 1, o.elements.zoomer.addEventListener("mousedown", l), o.elements.zoomer.addEventListener("touchstart", l), o.elements.zoomer.addEventListener("input", u), o.elements.zoomer.addEventListener("change", u), o.options.mouseWheelZoom && (o.elements.boundary.addEventListener("mousewheel", d), o.elements.boundary.addEventListener("DOMMouseScroll", d))
        }.call(this)
    }

    function m(e) {
        this.options.showZoom && (this.elements.zoomer.value = k(e))
    }

    function g() {
        var e = this._currentZoom, t = this.elements.img.getBoundingClientRect(),
            r = this.elements.viewport.getBoundingClientRect(), o = h.parse(this.elements.img.style[i]),
            a = new f(this.elements.img), s = r.top - t.top + r.height / 2, l = r.left - t.left + r.width / 2, u = {},
            d = {};
        u.y = s / e, u.x = l / e, d.y = (u.y - a.y) * (1 - e), d.x = (u.x - a.x) * (1 - e), o.x -= d.x, o.y -= d.y;
        var p = {};
        p[n] = u.x + "px " + u.y + "px", p[i] = o.toString(), c(this.elements.img, p)
    }

    function v() {
        var e = this.elements.boundary.getBoundingClientRect(), t = this.elements.img.getBoundingClientRect();
        c(this.elements.overlay, {
            width: t.width + "px",
            height: t.height + "px",
            top: t.top - e.top + "px",
            left: t.left - e.left + "px"
        })
    }

    f.prototype.toString = function () {
        return this.x + "px " + this.y + "px"
    };
    var y, b, _, w, x = (y = v, b = 500, function () {
        var e = this, t = arguments, n = _ && !w;
        clearTimeout(w), w = setTimeout(function () {
            w = null, _ || y.apply(e, t)
        }, b), n && y.apply(e, t)
    });

    function D() {
        T.call(this) && this.options.update.call(this, this.get())
    }

    function T() {
        return this.elements.img.offsetHeight > 0 && this.elements.img.offsetWidth > 0
    }

    function C() {
        var e, t, r, o, a, s = 0, l = 1.5, d = 1, p = {}, g = this.elements.img, y = this.elements.zoomer,
            b = new h(0, 0, d), _ = new f;
        T.call(this) && !this.data.bound && (this.data.bound = !0, p[i] = b.toString(), p[n] = _.toString(), c(g, p), e = g.getBoundingClientRect(), t = this.elements.viewport.getBoundingClientRect(), r = this.elements.boundary.getBoundingClientRect(), this._originalImageWidth = e.width, this._originalImageHeight = e.height, this.options.showZoom && (o = t.width / e.width, a = t.height / e.height, (s = Math.max(o, a)) > l && (l = s + 1), y.min = k(s), y.max = k(l), d = Math.max(r.width / e.width, r.height / e.height), m.call(this, d), u(y)), this._currentZoom = b.scale = d, p[i] = b.toString(), c(g, p), this.data.points.length ? function (e) {
            if (4 != e.length) throw"Croppie - Invalid number of points supplied: " + e;
            var t = e[2] - e[0], r = this.elements.viewport.getBoundingClientRect(),
                o = this.elements.boundary.getBoundingClientRect(), a = {left: r.left - o.left, top: r.top - o.top},
                s = r.width / t, l = e[1], u = e[0], d = -1 * e[1] + a.top, f = -1 * e[0] + a.left, p = {};
            p[n] = u + "px " + l + "px", p[i] = new h(f, d, s).toString(), c(this.elements.img, p), m.call(this, s), this._currentZoom = s
        }.call(this, this.data.points) : function () {
            var e = this.elements.img.getBoundingClientRect(), t = this.elements.viewport.getBoundingClientRect(),
                n = this.elements.boundary.getBoundingClientRect(), r = t.left - n.left, o = t.top - n.top,
                a = r - (e.width - t.width) / 2, s = o - (e.height - t.height) / 2, l = new h(a, s, this._currentZoom);
            c(this.elements.img, i, l.toString())
        }.call(this), v.call(this))
    }

    function k(e) {
        return parseFloat(e).toFixed(2)
    }

    function E() {
        var e = this.elements.img.getBoundingClientRect(), t = this.elements.viewport.getBoundingClientRect(),
            n = t.left - e.left, i = t.top - e.top, r = n + t.width, o = i + t.height, a = this._currentZoom;
        return (a === 1 / 0 || isNaN(a)) && (a = 1), n = Math.max(0, n / a), i = Math.max(0, i / a), r = Math.max(0, r / a), o = Math.max(0, o / a), {
            points: [k(n), k(i), k(r), k(o)],
            zoom: a
        }
    }

    function S(e) {
        var t, n = E.call(this), i = e || {type: "canvas", size: "viewport"}, r = "string" == typeof i ? i : i.type;
        return "viewport" === (i.size || "viewport") && (t = this.elements.viewport.getBoundingClientRect(), n.outputWidth = t.width, n.outputHeight = t.height), n.circle = "circle" === this.options.viewport.type, n.url = this.data.url, new Promise(function (e, t) {
            "canvas" === r ? d(n.url).then(function (t) {
                e(function (e, t) {
                    var n = t.points, i = n[0], r = n[1], o = n[2] - n[0], a = n[3] - n[1], s = t.circle,
                        l = document.createElement("canvas"), u = l.getContext("2d"), c = o, d = a;
                    return t.outputWidth && t.outputHeight && (c = t.outputWidth, d = t.outputHeight), l.width = c, l.height = d, s && (u.save(), u.beginPath(), u.arc(c / 2, d / 2, c / 2, 0, 2 * Math.PI, !0), u.closePath(), u.clip()), u.drawImage(e, i, r, o, a, 0, 0, c, d), l.toDataURL()
                }(t, n))
            }) : e(function (e) {
                var t = e.points, n = document.createElement("div"), i = document.createElement("img"), r = t[2] - t[0],
                    o = t[3] - t[1];
                return n.classList.add("croppie-result"), n.appendChild(i), c(i, {
                    left: -1 * t[0] + "px",
                    top: -1 * t[1] + "px"
                }), i.src = e.url, c(n, {width: r + "px", height: o + "px"}), n
            }(n))
        })
    }

    if (this.jQuery) {
        var A = this.jQuery;
        A.fn.croppie = function (e) {
            if ("string" === typeof e) {
                var t = Array.prototype.slice.call(arguments, 1), n = A(this).data("croppie");
                return "get" === e ? n.get() : "result" === e ? n.result.apply(n, t) : this.each(function () {
                    var n = A(this).data("croppie");
                    if (n) {
                        var i = n[e];
                        if (!A.isFunction(i)) throw"Croppie " + e + " method not found";
                        i.apply(n, t), "destroy" === e && A(this).removeData("croppie")
                    }
                })
            }
            return this.each(function () {
                var t = new O(this, e);
                A(this).data("croppie", t)
            })
        }
    }

    function O(e, t) {
        this.element = e, this.options = l({}, O.defaults, t), p.call(this)
    }

    O.defaults = {
        viewport: {width: 100, height: 100, type: "square"},
        boundary: {width: 300, height: 300},
        customClass: "",
        showZoom: !0,
        mouseWheelZoom: !0,
        update: function () {
        }
    }, l(O.prototype, {
        bind: function (e, t) {
            return function (e, t) {
                var n, i = this, r = [];
                if ("string" == typeof e) n = e, e = {}; else if (Array.isArray(e)) r = e.slice(); else {
                    if (void 0 === e && i.data.url) return C.call(i), D.call(i), null;
                    n = e.url, r = e.points || []
                }
                i.data.bound = !1, i.data.url = n || i.data.url, i.data.points = (r || i.data.points).map(function (e) {
                    return parseFloat(e)
                });
                var o = d(n, i.elements.img);
                return o.then(function () {
                    C.call(i), D.call(i), t && t()
                }), o
            }.call(this, e, t)
        }, get: function () {
            return E.call(this)
        }, result: function (e) {
            return S.call(this, e)
        }, refresh: function () {
            return function () {
                console.warn("Croppie.refresh() is deprecated.  Please use Croppie.bind() without any arguments instead.  refresh() will be removed in a later release."), C.call(this)
            }.call(this)
        }, destroy: function () {
            return function () {
                this.element.removeChild(this.elements.boundary), this.options.showZoom && this.element.removeChild(this.elements.zoomerWrap), delete this.elements
            }.call(this)
        }
    }), e.Croppie = window.Croppie = O
});
