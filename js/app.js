// // Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $

require('../libs/fancybox/jquery.fancybox.min.js');
require('../libs/jquery.maskedinput.min.js');
require('../libs/slick/slick.min.js');
document.addEventListener('DOMContentLoaded', () => {
  
    $.fancybox.defaults.hideScrollbar = true;
    $.fancybox.defaults.autoFocus = false;
    $.fancybox.defaults.backFocus = false;
    $.fancybox.defaults.trapFocus = false;
    $.fancybox.defaults.touch = false;

    $(`.promo__slider`).slick({
      dots: false,
      fade: true,
      arrows: true,
      infinite: true,
      swipe: true,
      draggable: true,
      speed: 300,
      slidesToShow: 1,
      asNavFor: '.promo__product',
      prevArrow: '<button type="button" class="slider-arrow slider-arrow--prev"></button>',
      nextArrow: '<button type="button" class="slider-arrow slider-arrow--next"></button>',
    });

    $(`.promo__product`).slick({
      dots: false,
      fade: true,
      arrows: false,
      infinite: true,
      swipe: false,
      draggable: false,
      speed: 300,
      slidesToShow: 1,
      asNavFor: '.promo__slider'
    });

    $(`.distributors__slider`).slick({
      dots: false,
      fade: false,
      arrows: true,
      infinite: true,
      swipe: true,
      draggable: true,
      speed: 300,
      slidesToShow: 6,
      variableWidth: true,
      appendArrows: '.distributors__nav',
      prevArrow: '<button type="button" class="slider-arrow slider-arrow--prev"><svg><use xlink:href="images/svg/sprite.svg#slider-arrow2"></use></svg></button>',
      nextArrow: '<button type="button" class="slider-arrow slider-arrow--next"><svg><use xlink:href="images/svg/sprite.svg#slider-arrow2"></use></svg></button>',

    });

    if ($(window).width() <= 992) {
      $(`.steps__slider`).slick({
        dots: false,
        fade: false,
        arrows: true,
        infinite: true,
        swipe: true,
        draggable: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        appendArrows: '.steps__nav',
        prevArrow: '<button type="button" class="slider-arrow slider-arrow--prev"><svg><use xlink:href="images/svg/sprite.svg#slider-arrow2"></use></svg></button>',
        nextArrow: '<button type="button" class="slider-arrow slider-arrow--next"><svg><use xlink:href="images/svg/sprite.svg#slider-arrow2"></use></svg></button>',
      });
    }

    $("input[type='tel']").mask("+7 (999) 999-99-99");

    $('.js-modal').click(function(e) {
      e.preventDefault();
      $.fancybox.open(modal);
    });

    $('.js-modal-sale').click(function(e) {
      e.preventDefault();
      $.fancybox.open(modalsale);
    });

    $('.js-modal-order').click(function(e) {
      e.preventDefault();
      const data = $(this).data('product');
      $('.input-product').val(data)
      $.fancybox.open(order);
    });

    $(".form").submit(function() { //Change
      var th = $(this);
      $.ajax({
          type: "POST",
          url: "mail.php", //Change
          data: th.serialize()
      }).done(function() {
          $.fancybox.close(true);
          $.fancybox.open(thanks)
          setTimeout(function() {
              // Done Functions
              th.trigger("reset");
          }, 1000);
      });
      return false;
  });

    $('.menu-btn').click(function() {
      $('.header').addClass('header--active');
    });

    $('.menu-close').click(function() {
      $('.header').toggleClass('header--active');
    });

    $('.js-scroll').click(function(event) {
      event.preventDefault();
      $('.header').removeClass('header--active');
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });

    ymaps.ready(function () {
			var myMap = new ymaps.Map('map', {
					center: [43.267643, 76.926106],
					zoom: 18,
					controls: ['smallMapDefaultSet']
				}),

        almaty = new ymaps.Placemark([43.267643, 76.926106], {
          hintContent: 'улица Райымбека 162А',
          balloonContent: 'улица Райымбека 162А', 
        }, {
          iconColor: '#DF0D00'
        }),
        nursultan = new ymaps.Placemark([51.141573, 71.425605], {
          hintContent: 'Нур-Султан',
          balloonContent: 'Нур-Султан', 
        }, {
          iconColor: '#DF0D00'
        }),
        atyrau = new ymaps.Placemark([47.085218, 51.905897], {
          hintContent: 'Атырау',
          balloonContent: 'Атырау', 
        }, {
          iconColor: '#DF0D00'
        });
			
			myMap.geoObjects.add(almaty).add(nursultan).add(atyrau);

      $('.contacts__tab').click(function(e) {
        e.preventDefault();
        const x = $(this).data('coord-x');
        const y = $(this).data('coord-y');
        const id = $(this).attr('href');
        $('.contacts__tab').removeClass('contacts__tab--active');
        $(this).addClass('contacts__tab--active');
        $('.contacts__item').removeClass('contacts__item--active')
        $(id).addClass('contacts__item--active');
        myMap.panTo([x, y], {
          flying: 1
      });
      });
		});
});













!function(e) {
    var t = {};
    function n(o) {
        if (t[o])
            return t[o].exports;
        var i = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, n),
            i.l = !0,
            i.exports
    }
    n.m = e,
        n.c = t,
        n.d = function(e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: o
            })
        }
        ,
        n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        n.t = function(e, t) {
            if (1 & t && (e = n(e)),
            8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var o = Object.create(null);
            if (n.r(o),
                Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                }),
            2 & t && "string" != typeof e)
                for (var i in e)
                    n.d(o, i, function(t) {
                        return e[t]
                    }
                        .bind(null, i));
            return o
        }
        ,
        n.n = function(e) {
            var t = e && e.__esModule ? function() {
                        return e.default
                    }
                    : function() {
                        return e
                    }
            ;
            return n.d(t, "a", t),
                t
        }
        ,
        n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        n.p = "",
        n(n.s = 1)
}([function(e, t, n) {
    var o;
    /*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
    !function(t, n) {
        "use strict";
        "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                return n(e)
            }
            : n(t)
    }("undefined" != typeof window ? window : this, (function(n, i) {
            "use strict";
            var s = []
                , r = Object.getPrototypeOf
                , a = s.slice
                , l = s.flat ? function(e) {
                    return s.flat.call(e)
                }
                : function(e) {
                    return s.concat.apply([], e)
                }
                , c = s.push
                , d = s.indexOf
                , u = {}
                , p = u.toString
                , f = u.hasOwnProperty
                , h = f.toString
                , g = h.call(Object)
                , v = {}
                , m = function(e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            }
                , y = function(e) {
                return null != e && e === e.window
            }
                , b = n.document
                , x = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };
            function w(e, t, n) {
                var o, i, s = (n = n || b).createElement("script");
                if (s.text = e,
                    t)
                    for (o in x)
                        (i = t[o] || t.getAttribute && t.getAttribute(o)) && s.setAttribute(o, i);
                n.head.appendChild(s).parentNode.removeChild(s)
            }
            function T(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[p.call(e)] || "object" : typeof e
            }
            var S = function(e, t) {
                return new S.fn.init(e,t)
            };
            function k(e) {
                var t = !!e && "length"in e && e.length
                    , n = T(e);
                return !m(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            S.fn = S.prototype = {
                jquery: "3.5.1",
                constructor: S,
                length: 0,
                toArray: function() {
                    return a.call(this)
                },
                get: function(e) {
                    return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function(e) {
                    var t = S.merge(this.constructor(), e);
                    return t.prevObject = this,
                        t
                },
                each: function(e) {
                    return S.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(S.map(this, (function(t, n) {
                            return e.call(t, n, t)
                        }
                    )))
                },
                slice: function() {
                    return this.pushStack(a.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                even: function() {
                    return this.pushStack(S.grep(this, (function(e, t) {
                            return (t + 1) % 2
                        }
                    )))
                },
                odd: function() {
                    return this.pushStack(S.grep(this, (function(e, t) {
                            return t % 2
                        }
                    )))
                },
                eq: function(e) {
                    var t = this.length
                        , n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: c,
                sort: s.sort,
                splice: s.splice
            },
                S.extend = S.fn.extend = function() {
                    var e, t, n, o, i, s, r = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
                    for ("boolean" == typeof r && (c = r,
                        r = arguments[a] || {},
                        a++),
                         "object" == typeof r || m(r) || (r = {}),
                         a === l && (r = this,
                             a--); a < l; a++)
                        if (null != (e = arguments[a]))
                            for (t in e)
                                o = e[t],
                                "__proto__" !== t && r !== o && (c && o && (S.isPlainObject(o) || (i = Array.isArray(o))) ? (n = r[t],
                                    s = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {},
                                    i = !1,
                                    r[t] = S.extend(c, s, o)) : void 0 !== o && (r[t] = o));
                    return r
                }
                ,
                S.extend({
                    expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(e) {
                        throw new Error(e)
                    },
                    noop: function() {},
                    isPlainObject: function(e) {
                        var t, n;
                        return !(!e || "[object Object]" !== p.call(e)) && (!(t = r(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && h.call(n) === g)
                    },
                    isEmptyObject: function(e) {
                        var t;
                        for (t in e)
                            return !1;
                        return !0
                    },
                    globalEval: function(e, t, n) {
                        w(e, {
                            nonce: t && t.nonce
                        }, n)
                    },
                    each: function(e, t) {
                        var n, o = 0;
                        if (k(e))
                            for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++)
                                ;
                        else
                            for (o in e)
                                if (!1 === t.call(e[o], o, e[o]))
                                    break;
                        return e
                    },
                    makeArray: function(e, t) {
                        var n = t || [];
                        return null != e && (k(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)),
                            n
                    },
                    inArray: function(e, t, n) {
                        return null == t ? -1 : d.call(t, e, n)
                    },
                    merge: function(e, t) {
                        for (var n = +t.length, o = 0, i = e.length; o < n; o++)
                            e[i++] = t[o];
                        return e.length = i,
                            e
                    },
                    grep: function(e, t, n) {
                        for (var o = [], i = 0, s = e.length, r = !n; i < s; i++)
                            !t(e[i], i) !== r && o.push(e[i]);
                        return o
                    },
                    map: function(e, t, n) {
                        var o, i, s = 0, r = [];
                        if (k(e))
                            for (o = e.length; s < o; s++)
                                null != (i = t(e[s], s, n)) && r.push(i);
                        else
                            for (s in e)
                                null != (i = t(e[s], s, n)) && r.push(i);
                        return l(r)
                    },
                    guid: 1,
                    support: v
                }),
            "function" == typeof Symbol && (S.fn[Symbol.iterator] = s[Symbol.iterator]),
                S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                        u["[object " + t + "]"] = t.toLowerCase()
                    }
                ));
            var C = /*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
                function(e) {
                    var t, n, o, i, s, r, a, l, c, d, u, p, f, h, g, v, m, y, b, x = "sizzle" + 1 * new Date, w = e.document, T = 0, S = 0, k = le(), C = le(), $ = le(), A = le(), P = function(e, t) {
                        return e === t && (u = !0),
                            0
                    }, E = {}.hasOwnProperty, L = [], D = L.pop, j = L.push, H = L.push, M = L.slice, O = function(e, t) {
                        for (var n = 0, o = e.length; n < o; n++)
                            if (e[n] === t)
                                return n;
                        return -1
                    }, I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", N = "[\\x20\\t\\r\\n\\f]", q = "(?:\\\\[\\da-fA-F]{1,6}" + N + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", z = "\\[" + N + "*(" + q + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + N + "*\\]", F = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)", R = new RegExp(N + "+","g"), W = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$","g"), _ = new RegExp("^" + N + "*," + N + "*"), B = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"), X = new RegExp(N + "|>"), Y = new RegExp(F), U = new RegExp("^" + q + "$"), V = {
                        ID: new RegExp("^#(" + q + ")"),
                        CLASS: new RegExp("^\\.(" + q + ")"),
                        TAG: new RegExp("^(" + q + "|[*])"),
                        ATTR: new RegExp("^" + z),
                        PSEUDO: new RegExp("^" + F),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)","i"),
                        bool: new RegExp("^(?:" + I + ")$","i"),
                        needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)","i")
                    }, Z = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + N + "?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
                        var n = "0x" + e.slice(1) - 65536;
                        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                    }, oe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    }, se = function() {
                        p()
                    }, re = xe((function(e) {
                            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                        }
                    ), {
                        dir: "parentNode",
                        next: "legend"
                    });
                    try {
                        H.apply(L = M.call(w.childNodes), w.childNodes),
                            L[w.childNodes.length].nodeType
                    } catch (e) {
                        H = {
                            apply: L.length ? function(e, t) {
                                    j.apply(e, M.call(t))
                                }
                                : function(e, t) {
                                    for (var n = e.length, o = 0; e[n++] = t[o++]; )
                                        ;
                                    e.length = n - 1
                                }
                        }
                    }
                    function ae(e, t, o, i) {
                        var s, a, c, d, u, h, m, y = t && t.ownerDocument, w = t ? t.nodeType : 9;
                        if (o = o || [],
                        "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w)
                            return o;
                        if (!i && (p(t),
                            t = t || f,
                            g)) {
                            if (11 !== w && (u = J.exec(e)))
                                if (s = u[1]) {
                                    if (9 === w) {
                                        if (!(c = t.getElementById(s)))
                                            return o;
                                        if (c.id === s)
                                            return o.push(c),
                                                o
                                    } else if (y && (c = y.getElementById(s)) && b(t, c) && c.id === s)
                                        return o.push(c),
                                            o
                                } else {
                                    if (u[2])
                                        return H.apply(o, t.getElementsByTagName(e)),
                                            o;
                                    if ((s = u[3]) && n.getElementsByClassName && t.getElementsByClassName)
                                        return H.apply(o, t.getElementsByClassName(s)),
                                            o
                                }
                            if (n.qsa && !A[e + " "] && (!v || !v.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                                if (m = e,
                                    y = t,
                                1 === w && (X.test(e) || B.test(e))) {
                                    for ((y = ee.test(e) && me(t.parentNode) || t) === t && n.scope || ((d = t.getAttribute("id")) ? d = d.replace(oe, ie) : t.setAttribute("id", d = x)),
                                             a = (h = r(e)).length; a--; )
                                        h[a] = (d ? "#" + d : ":scope") + " " + be(h[a]);
                                    m = h.join(",")
                                }
                                try {
                                    return H.apply(o, y.querySelectorAll(m)),
                                        o
                                } catch (t) {
                                    A(e, !0)
                                } finally {
                                    d === x && t.removeAttribute("id")
                                }
                            }
                        }
                        return l(e.replace(W, "$1"), t, o, i)
                    }
                    function le() {
                        var e = [];
                        return function t(n, i) {
                            return e.push(n + " ") > o.cacheLength && delete t[e.shift()],
                                t[n + " "] = i
                        }
                    }
                    function ce(e) {
                        return e[x] = !0,
                            e
                    }
                    function de(e) {
                        var t = f.createElement("fieldset");
                        try {
                            return !!e(t)
                        } catch (e) {
                            return !1
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t),
                                t = null
                        }
                    }
                    function ue(e, t) {
                        for (var n = e.split("|"), i = n.length; i--; )
                            o.attrHandle[n[i]] = t
                    }
                    function pe(e, t) {
                        var n = t && e
                            , o = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                        if (o)
                            return o;
                        if (n)
                            for (; n = n.nextSibling; )
                                if (n === t)
                                    return -1;
                        return e ? 1 : -1
                    }
                    function fe(e) {
                        return function(t) {
                            return "input" === t.nodeName.toLowerCase() && t.type === e
                        }
                    }
                    function he(e) {
                        return function(t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e
                        }
                    }
                    function ge(e) {
                        return function(t) {
                            return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label"in t && t.disabled === e
                        }
                    }
                    function ve(e) {
                        return ce((function(t) {
                                return t = +t,
                                    ce((function(n, o) {
                                            for (var i, s = e([], n.length, t), r = s.length; r--; )
                                                n[i = s[r]] && (n[i] = !(o[i] = n[i]))
                                        }
                                    ))
                            }
                        ))
                    }
                    function me(e) {
                        return e && void 0 !== e.getElementsByTagName && e
                    }
                    for (t in n = ae.support = {},
                        s = ae.isXML = function(e) {
                            var t = e.namespaceURI
                                , n = (e.ownerDocument || e).documentElement;
                            return !Z.test(t || n && n.nodeName || "HTML")
                        }
                        ,
                        p = ae.setDocument = function(e) {
                            var t, i, r = e ? e.ownerDocument || e : w;
                            return r != f && 9 === r.nodeType && r.documentElement ? (h = (f = r).documentElement,
                                g = !s(f),
                            w != f && (i = f.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", se, !1) : i.attachEvent && i.attachEvent("onunload", se)),
                                n.scope = de((function(e) {
                                        return h.appendChild(e).appendChild(f.createElement("div")),
                                        void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                                    }
                                )),
                                n.attributes = de((function(e) {
                                        return e.className = "i",
                                            !e.getAttribute("className")
                                    }
                                )),
                                n.getElementsByTagName = de((function(e) {
                                        return e.appendChild(f.createComment("")),
                                            !e.getElementsByTagName("*").length
                                    }
                                )),
                                n.getElementsByClassName = K.test(f.getElementsByClassName),
                                n.getById = de((function(e) {
                                        return h.appendChild(e).id = x,
                                        !f.getElementsByName || !f.getElementsByName(x).length
                                    }
                                )),
                                n.getById ? (o.filter.ID = function(e) {
                                        var t = e.replace(te, ne);
                                        return function(e) {
                                            return e.getAttribute("id") === t
                                        }
                                    }
                                        ,
                                        o.find.ID = function(e, t) {
                                            if (void 0 !== t.getElementById && g) {
                                                var n = t.getElementById(e);
                                                return n ? [n] : []
                                            }
                                        }
                                ) : (o.filter.ID = function(e) {
                                        var t = e.replace(te, ne);
                                        return function(e) {
                                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                            return n && n.value === t
                                        }
                                    }
                                        ,
                                        o.find.ID = function(e, t) {
                                            if (void 0 !== t.getElementById && g) {
                                                var n, o, i, s = t.getElementById(e);
                                                if (s) {
                                                    if ((n = s.getAttributeNode("id")) && n.value === e)
                                                        return [s];
                                                    for (i = t.getElementsByName(e),
                                                             o = 0; s = i[o++]; )
                                                        if ((n = s.getAttributeNode("id")) && n.value === e)
                                                            return [s]
                                                }
                                                return []
                                            }
                                        }
                                ),
                                o.find.TAG = n.getElementsByTagName ? function(e, t) {
                                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                                    }
                                    : function(e, t) {
                                        var n, o = [], i = 0, s = t.getElementsByTagName(e);
                                        if ("*" === e) {
                                            for (; n = s[i++]; )
                                                1 === n.nodeType && o.push(n);
                                            return o
                                        }
                                        return s
                                    }
                                ,
                                o.find.CLASS = n.getElementsByClassName && function(e, t) {
                                    if (void 0 !== t.getElementsByClassName && g)
                                        return t.getElementsByClassName(e)
                                }
                                ,
                                m = [],
                                v = [],
                            (n.qsa = K.test(f.querySelectorAll)) && (de((function(e) {
                                    var t;
                                    h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                                    e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + N + "*(?:''|\"\")"),
                                    e.querySelectorAll("[selected]").length || v.push("\\[" + N + "*(?:value|" + I + ")"),
                                    e.querySelectorAll("[id~=" + x + "-]").length || v.push("~="),
                                        (t = f.createElement("input")).setAttribute("name", ""),
                                        e.appendChild(t),
                                    e.querySelectorAll("[name='']").length || v.push("\\[" + N + "*name" + N + "*=" + N + "*(?:''|\"\")"),
                                    e.querySelectorAll(":checked").length || v.push(":checked"),
                                    e.querySelectorAll("a#" + x + "+*").length || v.push(".#.+[+~]"),
                                        e.querySelectorAll("\\\f"),
                                        v.push("[\\r\\n\\f]")
                                }
                            )),
                                de((function(e) {
                                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                        var t = f.createElement("input");
                                        t.setAttribute("type", "hidden"),
                                            e.appendChild(t).setAttribute("name", "D"),
                                        e.querySelectorAll("[name=d]").length && v.push("name" + N + "*[*^$|!~]?="),
                                        2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                                            h.appendChild(e).disabled = !0,
                                        2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                                            e.querySelectorAll("*,:x"),
                                            v.push(",.*:")
                                    }
                                ))),
                            (n.matchesSelector = K.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && de((function(e) {
                                    n.disconnectedMatch = y.call(e, "*"),
                                        y.call(e, "[s!='']:x"),
                                        m.push("!=", F)
                                }
                            )),
                                v = v.length && new RegExp(v.join("|")),
                                m = m.length && new RegExp(m.join("|")),
                                t = K.test(h.compareDocumentPosition),
                                b = t || K.test(h.contains) ? function(e, t) {
                                        var n = 9 === e.nodeType ? e.documentElement : e
                                            , o = t && t.parentNode;
                                        return e === o || !(!o || 1 !== o.nodeType || !(n.contains ? n.contains(o) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(o)))
                                    }
                                    : function(e, t) {
                                        if (t)
                                            for (; t = t.parentNode; )
                                                if (t === e)
                                                    return !0;
                                        return !1
                                    }
                                ,
                                P = t ? function(e, t) {
                                        if (e === t)
                                            return u = !0,
                                                0;
                                        var o = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                        return o || (1 & (o = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === o ? e == f || e.ownerDocument == w && b(w, e) ? -1 : t == f || t.ownerDocument == w && b(w, t) ? 1 : d ? O(d, e) - O(d, t) : 0 : 4 & o ? -1 : 1)
                                    }
                                    : function(e, t) {
                                        if (e === t)
                                            return u = !0,
                                                0;
                                        var n, o = 0, i = e.parentNode, s = t.parentNode, r = [e], a = [t];
                                        if (!i || !s)
                                            return e == f ? -1 : t == f ? 1 : i ? -1 : s ? 1 : d ? O(d, e) - O(d, t) : 0;
                                        if (i === s)
                                            return pe(e, t);
                                        for (n = e; n = n.parentNode; )
                                            r.unshift(n);
                                        for (n = t; n = n.parentNode; )
                                            a.unshift(n);
                                        for (; r[o] === a[o]; )
                                            o++;
                                        return o ? pe(r[o], a[o]) : r[o] == w ? -1 : a[o] == w ? 1 : 0
                                    }
                                ,
                                f) : f
                        }
                        ,
                        ae.matches = function(e, t) {
                            return ae(e, null, null, t)
                        }
                        ,
                        ae.matchesSelector = function(e, t) {
                            if (p(e),
                            n.matchesSelector && g && !A[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t)))
                                try {
                                    var o = y.call(e, t);
                                    if (o || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                        return o
                                } catch (e) {
                                    A(t, !0)
                                }
                            return ae(t, f, null, [e]).length > 0
                        }
                        ,
                        ae.contains = function(e, t) {
                            return (e.ownerDocument || e) != f && p(e),
                                b(e, t)
                        }
                        ,
                        ae.attr = function(e, t) {
                            (e.ownerDocument || e) != f && p(e);
                            var i = o.attrHandle[t.toLowerCase()]
                                , s = i && E.call(o.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                            return void 0 !== s ? s : n.attributes || !g ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
                        }
                        ,
                        ae.escape = function(e) {
                            return (e + "").replace(oe, ie)
                        }
                        ,
                        ae.error = function(e) {
                            throw new Error("Syntax error, unrecognized expression: " + e)
                        }
                        ,
                        ae.uniqueSort = function(e) {
                            var t, o = [], i = 0, s = 0;
                            if (u = !n.detectDuplicates,
                                d = !n.sortStable && e.slice(0),
                                e.sort(P),
                                u) {
                                for (; t = e[s++]; )
                                    t === e[s] && (i = o.push(s));
                                for (; i--; )
                                    e.splice(o[i], 1)
                            }
                            return d = null,
                                e
                        }
                        ,
                        i = ae.getText = function(e) {
                            var t, n = "", o = 0, s = e.nodeType;
                            if (s) {
                                if (1 === s || 9 === s || 11 === s) {
                                    if ("string" == typeof e.textContent)
                                        return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling)
                                        n += i(e)
                                } else if (3 === s || 4 === s)
                                    return e.nodeValue
                            } else
                                for (; t = e[o++]; )
                                    n += i(t);
                            return n
                        }
                        ,
                        (o = ae.selectors = {
                            cacheLength: 50,
                            createPseudo: ce,
                            match: V,
                            attrHandle: {},
                            find: {},
                            relative: {
                                ">": {
                                    dir: "parentNode",
                                    first: !0
                                },
                                " ": {
                                    dir: "parentNode"
                                },
                                "+": {
                                    dir: "previousSibling",
                                    first: !0
                                },
                                "~": {
                                    dir: "previousSibling"
                                }
                            },
                            preFilter: {
                                ATTR: function(e) {
                                    return e[1] = e[1].replace(te, ne),
                                        e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                        e.slice(0, 4)
                                },
                                CHILD: function(e) {
                                    return e[1] = e[1].toLowerCase(),
                                        "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]),
                                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                            e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]),
                                        e
                                },
                                PSEUDO: function(e) {
                                    var t, n = !e[6] && e[2];
                                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Y.test(n) && (t = r(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                                        e[2] = n.slice(0, t)),
                                        e.slice(0, 3))
                                }
                            },
                            filter: {
                                TAG: function(e) {
                                    var t = e.replace(te, ne).toLowerCase();
                                    return "*" === e ? function() {
                                            return !0
                                        }
                                        : function(e) {
                                            return e.nodeName && e.nodeName.toLowerCase() === t
                                        }
                                },
                                CLASS: function(e) {
                                    var t = k[e + " "];
                                    return t || (t = new RegExp("(^|" + N + ")" + e + "(" + N + "|$)")) && k(e, (function(e) {
                                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                        }
                                    ))
                                },
                                ATTR: function(e, t, n) {
                                    return function(o) {
                                        var i = ae.attr(o, e);
                                        return null == i ? "!=" === t : !t || (i += "",
                                            "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(R, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                    }
                                },
                                CHILD: function(e, t, n, o, i) {
                                    var s = "nth" !== e.slice(0, 3)
                                        , r = "last" !== e.slice(-4)
                                        , a = "of-type" === t;
                                    return 1 === o && 0 === i ? function(e) {
                                            return !!e.parentNode
                                        }
                                        : function(t, n, l) {
                                            var c, d, u, p, f, h, g = s !== r ? "nextSibling" : "previousSibling", v = t.parentNode, m = a && t.nodeName.toLowerCase(), y = !l && !a, b = !1;
                                            if (v) {
                                                if (s) {
                                                    for (; g; ) {
                                                        for (p = t; p = p[g]; )
                                                            if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType)
                                                                return !1;
                                                        h = g = "only" === e && !h && "nextSibling"
                                                    }
                                                    return !0
                                                }
                                                if (h = [r ? v.firstChild : v.lastChild],
                                                r && y) {
                                                    for (b = (f = (c = (d = (u = (p = v)[x] || (p[x] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === T && c[1]) && c[2],
                                                             p = f && v.childNodes[f]; p = ++f && p && p[g] || (b = f = 0) || h.pop(); )
                                                        if (1 === p.nodeType && ++b && p === t) {
                                                            d[e] = [T, f, b];
                                                            break
                                                        }
                                                } else if (y && (b = f = (c = (d = (u = (p = t)[x] || (p[x] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === T && c[1]),
                                                !1 === b)
                                                    for (; (p = ++f && p && p[g] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++b || (y && ((d = (u = p[x] || (p[x] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] = [T, b]),
                                                    p !== t)); )
                                                        ;
                                                return (b -= i) === o || b % o == 0 && b / o >= 0
                                            }
                                        }
                                },
                                PSEUDO: function(e, t) {
                                    var n, i = o.pseudos[e] || o.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                                    return i[x] ? i(t) : i.length > 1 ? (n = [e, e, "", t],
                                            o.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function(e, n) {
                                                    for (var o, s = i(e, t), r = s.length; r--; )
                                                        e[o = O(e, s[r])] = !(n[o] = s[r])
                                                }
                                            )) : function(e) {
                                                return i(e, 0, n)
                                            }
                                    ) : i
                                }
                            },
                            pseudos: {
                                not: ce((function(e) {
                                        var t = []
                                            , n = []
                                            , o = a(e.replace(W, "$1"));
                                        return o[x] ? ce((function(e, t, n, i) {
                                                for (var s, r = o(e, null, i, []), a = e.length; a--; )
                                                    (s = r[a]) && (e[a] = !(t[a] = s))
                                            }
                                        )) : function(e, i, s) {
                                            return t[0] = e,
                                                o(t, null, s, n),
                                                t[0] = null,
                                                !n.pop()
                                        }
                                    }
                                )),
                                has: ce((function(e) {
                                        return function(t) {
                                            return ae(e, t).length > 0
                                        }
                                    }
                                )),
                                contains: ce((function(e) {
                                        return e = e.replace(te, ne),
                                            function(t) {
                                                return (t.textContent || i(t)).indexOf(e) > -1
                                            }
                                    }
                                )),
                                lang: ce((function(e) {
                                        return U.test(e || "") || ae.error("unsupported lang: " + e),
                                            e = e.replace(te, ne).toLowerCase(),
                                            function(t) {
                                                var n;
                                                do {
                                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                                        return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                                return !1
                                            }
                                    }
                                )),
                                target: function(t) {
                                    var n = e.location && e.location.hash;
                                    return n && n.slice(1) === t.id
                                },
                                root: function(e) {
                                    return e === h
                                },
                                focus: function(e) {
                                    return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                                },
                                enabled: ge(!1),
                                disabled: ge(!0),
                                checked: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                                },
                                selected: function(e) {
                                    return e.parentNode && e.parentNode.selectedIndex,
                                    !0 === e.selected
                                },
                                empty: function(e) {
                                    for (e = e.firstChild; e; e = e.nextSibling)
                                        if (e.nodeType < 6)
                                            return !1;
                                    return !0
                                },
                                parent: function(e) {
                                    return !o.pseudos.empty(e)
                                },
                                header: function(e) {
                                    return G.test(e.nodeName)
                                },
                                input: function(e) {
                                    return Q.test(e.nodeName)
                                },
                                button: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && "button" === e.type || "button" === t
                                },
                                text: function(e) {
                                    var t;
                                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                                },
                                first: ve((function() {
                                        return [0]
                                    }
                                )),
                                last: ve((function(e, t) {
                                        return [t - 1]
                                    }
                                )),
                                eq: ve((function(e, t, n) {
                                        return [n < 0 ? n + t : n]
                                    }
                                )),
                                even: ve((function(e, t) {
                                        for (var n = 0; n < t; n += 2)
                                            e.push(n);
                                        return e
                                    }
                                )),
                                odd: ve((function(e, t) {
                                        for (var n = 1; n < t; n += 2)
                                            e.push(n);
                                        return e
                                    }
                                )),
                                lt: ve((function(e, t, n) {
                                        for (var o = n < 0 ? n + t : n > t ? t : n; --o >= 0; )
                                            e.push(o);
                                        return e
                                    }
                                )),
                                gt: ve((function(e, t, n) {
                                        for (var o = n < 0 ? n + t : n; ++o < t; )
                                            e.push(o);
                                        return e
                                    }
                                ))
                            }
                        }).pseudos.nth = o.pseudos.eq,
                        {
                            radio: !0,
                            checkbox: !0,
                            file: !0,
                            password: !0,
                            image: !0
                        })
                        o.pseudos[t] = fe(t);
                    for (t in {
                        submit: !0,
                        reset: !0
                    })
                        o.pseudos[t] = he(t);
                    function ye() {}
                    function be(e) {
                        for (var t = 0, n = e.length, o = ""; t < n; t++)
                            o += e[t].value;
                        return o
                    }
                    function xe(e, t, n) {
                        var o = t.dir
                            , i = t.next
                            , s = i || o
                            , r = n && "parentNode" === s
                            , a = S++;
                        return t.first ? function(t, n, i) {
                                for (; t = t[o]; )
                                    if (1 === t.nodeType || r)
                                        return e(t, n, i);
                                return !1
                            }
                            : function(t, n, l) {
                                var c, d, u, p = [T, a];
                                if (l) {
                                    for (; t = t[o]; )
                                        if ((1 === t.nodeType || r) && e(t, n, l))
                                            return !0
                                } else
                                    for (; t = t[o]; )
                                        if (1 === t.nodeType || r)
                                            if (d = (u = t[x] || (t[x] = {}))[t.uniqueID] || (u[t.uniqueID] = {}),
                                            i && i === t.nodeName.toLowerCase())
                                                t = t[o] || t;
                                            else {
                                                if ((c = d[s]) && c[0] === T && c[1] === a)
                                                    return p[2] = c[2];
                                                if (d[s] = p,
                                                    p[2] = e(t, n, l))
                                                    return !0
                                            }
                                return !1
                            }
                    }
                    function we(e) {
                        return e.length > 1 ? function(t, n, o) {
                                for (var i = e.length; i--; )
                                    if (!e[i](t, n, o))
                                        return !1;
                                return !0
                            }
                            : e[0]
                    }
                    function Te(e, t, n, o, i) {
                        for (var s, r = [], a = 0, l = e.length, c = null != t; a < l; a++)
                            (s = e[a]) && (n && !n(s, o, i) || (r.push(s),
                            c && t.push(a)));
                        return r
                    }
                    function Se(e, t, n, o, i, s) {
                        return o && !o[x] && (o = Se(o)),
                        i && !i[x] && (i = Se(i, s)),
                            ce((function(s, r, a, l) {
                                    var c, d, u, p = [], f = [], h = r.length, g = s || function(e, t, n) {
                                        for (var o = 0, i = t.length; o < i; o++)
                                            ae(e, t[o], n);
                                        return n
                                    }(t || "*", a.nodeType ? [a] : a, []), v = !e || !s && t ? g : Te(g, p, e, a, l), m = n ? i || (s ? e : h || o) ? [] : r : v;
                                    if (n && n(v, m, a, l),
                                        o)
                                        for (c = Te(m, f),
                                                 o(c, [], a, l),
                                                 d = c.length; d--; )
                                            (u = c[d]) && (m[f[d]] = !(v[f[d]] = u));
                                    if (s) {
                                        if (i || e) {
                                            if (i) {
                                                for (c = [],
                                                         d = m.length; d--; )
                                                    (u = m[d]) && c.push(v[d] = u);
                                                i(null, m = [], c, l)
                                            }
                                            for (d = m.length; d--; )
                                                (u = m[d]) && (c = i ? O(s, u) : p[d]) > -1 && (s[c] = !(r[c] = u))
                                        }
                                    } else
                                        m = Te(m === r ? m.splice(h, m.length) : m),
                                            i ? i(null, r, m, l) : H.apply(r, m)
                                }
                            ))
                    }
                    function ke(e) {
                        for (var t, n, i, s = e.length, r = o.relative[e[0].type], a = r || o.relative[" "], l = r ? 1 : 0, d = xe((function(e) {
                                return e === t
                            }
                        ), a, !0), u = xe((function(e) {
                                return O(t, e) > -1
                            }
                        ), a, !0), p = [function(e, n, o) {
                            var i = !r && (o || n !== c) || ((t = n).nodeType ? d(e, n, o) : u(e, n, o));
                            return t = null,
                                i
                        }
                        ]; l < s; l++)
                            if (n = o.relative[e[l].type])
                                p = [xe(we(p), n)];
                            else {
                                if ((n = o.filter[e[l].type].apply(null, e[l].matches))[x]) {
                                    for (i = ++l; i < s && !o.relative[e[i].type]; i++)
                                        ;
                                    return Se(l > 1 && we(p), l > 1 && be(e.slice(0, l - 1).concat({
                                        value: " " === e[l - 2].type ? "*" : ""
                                    })).replace(W, "$1"), n, l < i && ke(e.slice(l, i)), i < s && ke(e = e.slice(i)), i < s && be(e))
                                }
                                p.push(n)
                            }
                        return we(p)
                    }
                    return ye.prototype = o.filters = o.pseudos,
                        o.setFilters = new ye,
                        r = ae.tokenize = function(e, t) {
                            var n, i, s, r, a, l, c, d = C[e + " "];
                            if (d)
                                return t ? 0 : d.slice(0);
                            for (a = e,
                                     l = [],
                                     c = o.preFilter; a; ) {
                                for (r in n && !(i = _.exec(a)) || (i && (a = a.slice(i[0].length) || a),
                                    l.push(s = [])),
                                    n = !1,
                                (i = B.exec(a)) && (n = i.shift(),
                                    s.push({
                                        value: n,
                                        type: i[0].replace(W, " ")
                                    }),
                                    a = a.slice(n.length)),
                                    o.filter)
                                    !(i = V[r].exec(a)) || c[r] && !(i = c[r](i)) || (n = i.shift(),
                                        s.push({
                                            value: n,
                                            type: r,
                                            matches: i
                                        }),
                                        a = a.slice(n.length));
                                if (!n)
                                    break
                            }
                            return t ? a.length : a ? ae.error(e) : C(e, l).slice(0)
                        }
                        ,
                        a = ae.compile = function(e, t) {
                            var n, i = [], s = [], a = $[e + " "];
                            if (!a) {
                                for (t || (t = r(e)),
                                         n = t.length; n--; )
                                    (a = ke(t[n]))[x] ? i.push(a) : s.push(a);
                                (a = $(e, function(e, t) {
                                    var n = t.length > 0
                                        , i = e.length > 0
                                        , s = function(s, r, a, l, d) {
                                        var u, h, v, m = 0, y = "0", b = s && [], x = [], w = c, S = s || i && o.find.TAG("*", d), k = T += null == w ? 1 : Math.random() || .1, C = S.length;
                                        for (d && (c = r == f || r || d); y !== C && null != (u = S[y]); y++) {
                                            if (i && u) {
                                                for (h = 0,
                                                     r || u.ownerDocument == f || (p(u),
                                                         a = !g); v = e[h++]; )
                                                    if (v(u, r || f, a)) {
                                                        l.push(u);
                                                        break
                                                    }
                                                d && (T = k)
                                            }
                                            n && ((u = !v && u) && m--,
                                            s && b.push(u))
                                        }
                                        if (m += y,
                                        n && y !== m) {
                                            for (h = 0; v = t[h++]; )
                                                v(b, x, r, a);
                                            if (s) {
                                                if (m > 0)
                                                    for (; y--; )
                                                        b[y] || x[y] || (x[y] = D.call(l));
                                                x = Te(x)
                                            }
                                            H.apply(l, x),
                                            d && !s && x.length > 0 && m + t.length > 1 && ae.uniqueSort(l)
                                        }
                                        return d && (T = k,
                                            c = w),
                                            b
                                    };
                                    return n ? ce(s) : s
                                }(s, i))).selector = e
                            }
                            return a
                        }
                        ,
                        l = ae.select = function(e, t, n, i) {
                            var s, l, c, d, u, p = "function" == typeof e && e, f = !i && r(e = p.selector || e);
                            if (n = n || [],
                            1 === f.length) {
                                if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && o.relative[l[1].type]) {
                                    if (!(t = (o.find.ID(c.matches[0].replace(te, ne), t) || [])[0]))
                                        return n;
                                    p && (t = t.parentNode),
                                        e = e.slice(l.shift().value.length)
                                }
                                for (s = V.needsContext.test(e) ? 0 : l.length; s-- && (c = l[s],
                                    !o.relative[d = c.type]); )
                                    if ((u = o.find[d]) && (i = u(c.matches[0].replace(te, ne), ee.test(l[0].type) && me(t.parentNode) || t))) {
                                        if (l.splice(s, 1),
                                            !(e = i.length && be(l)))
                                            return H.apply(n, i),
                                                n;
                                        break
                                    }
                            }
                            return (p || a(e, f))(i, t, !g, n, !t || ee.test(e) && me(t.parentNode) || t),
                                n
                        }
                        ,
                        n.sortStable = x.split("").sort(P).join("") === x,
                        n.detectDuplicates = !!u,
                        p(),
                        n.sortDetached = de((function(e) {
                                return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
                            }
                        )),
                    de((function(e) {
                            return e.innerHTML = "<a href='#'></a>",
                            "#" === e.firstChild.getAttribute("href")
                        }
                    )) || ue("type|href|height|width", (function(e, t, n) {
                            if (!n)
                                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                        }
                    )),
                    n.attributes && de((function(e) {
                            return e.innerHTML = "<input/>",
                                e.firstChild.setAttribute("value", ""),
                            "" === e.firstChild.getAttribute("value")
                        }
                    )) || ue("value", (function(e, t, n) {
                            if (!n && "input" === e.nodeName.toLowerCase())
                                return e.defaultValue
                        }
                    )),
                    de((function(e) {
                            return null == e.getAttribute("disabled")
                        }
                    )) || ue(I, (function(e, t, n) {
                            var o;
                            if (!n)
                                return !0 === e[t] ? t.toLowerCase() : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                        }
                    )),
                        ae
                }(n);
            S.find = C,
                S.expr = C.selectors,
                S.expr[":"] = S.expr.pseudos,
                S.uniqueSort = S.unique = C.uniqueSort,
                S.text = C.getText,
                S.isXMLDoc = C.isXML,
                S.contains = C.contains,
                S.escapeSelector = C.escape;
            var $ = function(e, t, n) {
                for (var o = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                    if (1 === e.nodeType) {
                        if (i && S(e).is(n))
                            break;
                        o.push(e)
                    }
                return o
            }
                , A = function(e, t) {
                for (var n = []; e; e = e.nextSibling)
                    1 === e.nodeType && e !== t && n.push(e);
                return n
            }
                , P = S.expr.match.needsContext;
            function E(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }
            var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function D(e, t, n) {
                return m(t) ? S.grep(e, (function(e, o) {
                        return !!t.call(e, o, e) !== n
                    }
                )) : t.nodeType ? S.grep(e, (function(e) {
                        return e === t !== n
                    }
                )) : "string" != typeof t ? S.grep(e, (function(e) {
                        return d.call(t, e) > -1 !== n
                    }
                )) : S.filter(t, e, n)
            }
            S.filter = function(e, t, n) {
                var o = t[0];
                return n && (e = ":not(" + e + ")"),
                    1 === t.length && 1 === o.nodeType ? S.find.matchesSelector(o, e) ? [o] : [] : S.find.matches(e, S.grep(t, (function(e) {
                            return 1 === e.nodeType
                        }
                    )))
            }
                ,
                S.fn.extend({
                    find: function(e) {
                        var t, n, o = this.length, i = this;
                        if ("string" != typeof e)
                            return this.pushStack(S(e).filter((function() {
                                    for (t = 0; t < o; t++)
                                        if (S.contains(i[t], this))
                                            return !0
                                }
                            )));
                        for (n = this.pushStack([]),
                                 t = 0; t < o; t++)
                            S.find(e, i[t], n);
                        return o > 1 ? S.uniqueSort(n) : n
                    },
                    filter: function(e) {
                        return this.pushStack(D(this, e || [], !1))
                    },
                    not: function(e) {
                        return this.pushStack(D(this, e || [], !0))
                    },
                    is: function(e) {
                        return !!D(this, "string" == typeof e && P.test(e) ? S(e) : e || [], !1).length
                    }
                });
            var j, H = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (S.fn.init = function(e, t, n) {
                    var o, i;
                    if (!e)
                        return this;
                    if (n = n || j,
                    "string" == typeof e) {
                        if (!(o = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : H.exec(e)) || !o[1] && t)
                            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                        if (o[1]) {
                            if (t = t instanceof S ? t[0] : t,
                                S.merge(this, S.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : b, !0)),
                            L.test(o[1]) && S.isPlainObject(t))
                                for (o in t)
                                    m(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                            return this
                        }
                        return (i = b.getElementById(o[2])) && (this[0] = i,
                            this.length = 1),
                            this
                    }
                    return e.nodeType ? (this[0] = e,
                        this.length = 1,
                        this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
                }
            ).prototype = S.fn,
                j = S(b);
            var M = /^(?:parents|prev(?:Until|All))/
                , O = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            function I(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType; )
                    ;
                return e
            }
            S.fn.extend({
                has: function(e) {
                    var t = S(e, this)
                        , n = t.length;
                    return this.filter((function() {
                            for (var e = 0; e < n; e++)
                                if (S.contains(this, t[e]))
                                    return !0
                        }
                    ))
                },
                closest: function(e, t) {
                    var n, o = 0, i = this.length, s = [], r = "string" != typeof e && S(e);
                    if (!P.test(e))
                        for (; o < i; o++)
                            for (n = this[o]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                                    s.push(n);
                                    break
                                }
                    return this.pushStack(s.length > 1 ? S.uniqueSort(s) : s)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? d.call(S(e), this[0]) : d.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }),
                S.each({
                    parent: function(e) {
                        var t = e.parentNode;
                        return t && 11 !== t.nodeType ? t : null
                    },
                    parents: function(e) {
                        return $(e, "parentNode")
                    },
                    parentsUntil: function(e, t, n) {
                        return $(e, "parentNode", n)
                    },
                    next: function(e) {
                        return I(e, "nextSibling")
                    },
                    prev: function(e) {
                        return I(e, "previousSibling")
                    },
                    nextAll: function(e) {
                        return $(e, "nextSibling")
                    },
                    prevAll: function(e) {
                        return $(e, "previousSibling")
                    },
                    nextUntil: function(e, t, n) {
                        return $(e, "nextSibling", n)
                    },
                    prevUntil: function(e, t, n) {
                        return $(e, "previousSibling", n)
                    },
                    siblings: function(e) {
                        return A((e.parentNode || {}).firstChild, e)
                    },
                    children: function(e) {
                        return A(e.firstChild)
                    },
                    contents: function(e) {
                        return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (E(e, "template") && (e = e.content || e),
                            S.merge([], e.childNodes))
                    }
                }, (function(e, t) {
                        S.fn[e] = function(n, o) {
                            var i = S.map(this, t, n);
                            return "Until" !== e.slice(-5) && (o = n),
                            o && "string" == typeof o && (i = S.filter(o, i)),
                            this.length > 1 && (O[e] || S.uniqueSort(i),
                            M.test(e) && i.reverse()),
                                this.pushStack(i)
                        }
                    }
                ));
            var N = /[^\x20\t\r\n\f]+/g;
            function q(e) {
                return e
            }
            function z(e) {
                throw e
            }
            function F(e, t, n, o) {
                var i;
                try {
                    e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(o))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }
            S.Callbacks = function(e) {
                e = "string" == typeof e ? function(e) {
                    var t = {};
                    return S.each(e.match(N) || [], (function(e, n) {
                            t[n] = !0
                        }
                    )),
                        t
                }(e) : S.extend({}, e);
                var t, n, o, i, s = [], r = [], a = -1, l = function() {
                    for (i = i || e.once,
                             o = t = !0; r.length; a = -1)
                        for (n = r.shift(); ++a < s.length; )
                            !1 === s[a].apply(n[0], n[1]) && e.stopOnFalse && (a = s.length,
                                n = !1);
                    e.memory || (n = !1),
                        t = !1,
                    i && (s = n ? [] : "")
                }, c = {
                    add: function() {
                        return s && (n && !t && (a = s.length - 1,
                            r.push(n)),
                            function t(n) {
                                S.each(n, (function(n, o) {
                                        m(o) ? e.unique && c.has(o) || s.push(o) : o && o.length && "string" !== T(o) && t(o)
                                    }
                                ))
                            }(arguments),
                        n && !t && l()),
                            this
                    },
                    remove: function() {
                        return S.each(arguments, (function(e, t) {
                                for (var n; (n = S.inArray(t, s, n)) > -1; )
                                    s.splice(n, 1),
                                    n <= a && a--
                            }
                        )),
                            this
                    },
                    has: function(e) {
                        return e ? S.inArray(e, s) > -1 : s.length > 0
                    },
                    empty: function() {
                        return s && (s = []),
                            this
                    },
                    disable: function() {
                        return i = r = [],
                            s = n = "",
                            this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return i = r = [],
                        n || t || (s = n = ""),
                            this
                    },
                    locked: function() {
                        return !!i
                    },
                    fireWith: function(e, n) {
                        return i || (n = [e, (n = n || []).slice ? n.slice() : n],
                            r.push(n),
                        t || l()),
                            this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments),
                            this
                    },
                    fired: function() {
                        return !!o
                    }
                };
                return c
            }
                ,
                S.extend({
                    Deferred: function(e) {
                        var t = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]]
                            , o = "pending"
                            , i = {
                            state: function() {
                                return o
                            },
                            always: function() {
                                return s.done(arguments).fail(arguments),
                                    this
                            },
                            catch: function(e) {
                                return i.then(null, e)
                            },
                            pipe: function() {
                                var e = arguments;
                                return S.Deferred((function(n) {
                                        S.each(t, (function(t, o) {
                                                var i = m(e[o[4]]) && e[o[4]];
                                                s[o[1]]((function() {
                                                        var e = i && i.apply(this, arguments);
                                                        e && m(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this, i ? [e] : arguments)
                                                    }
                                                ))
                                            }
                                        )),
                                            e = null
                                    }
                                )).promise()
                            },
                            then: function(e, o, i) {
                                var s = 0;
                                function r(e, t, o, i) {
                                    return function() {
                                        var a = this
                                            , l = arguments
                                            , c = function() {
                                                var n, c;
                                                if (!(e < s)) {
                                                    if ((n = o.apply(a, l)) === t.promise())
                                                        throw new TypeError("Thenable self-resolution");
                                                    c = n && ("object" == typeof n || "function" == typeof n) && n.then,
                                                        m(c) ? i ? c.call(n, r(s, t, q, i), r(s, t, z, i)) : (s++,
                                                            c.call(n, r(s, t, q, i), r(s, t, z, i), r(s, t, q, t.notifyWith))) : (o !== q && (a = void 0,
                                                            l = [n]),
                                                            (i || t.resolveWith)(a, l))
                                                }
                                            }
                                            , d = i ? c : function() {
                                                try {
                                                    c()
                                                } catch (n) {
                                                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(n, d.stackTrace),
                                                    e + 1 >= s && (o !== z && (a = void 0,
                                                        l = [n]),
                                                        t.rejectWith(a, l))
                                                }
                                            }
                                        ;
                                        e ? d() : (S.Deferred.getStackHook && (d.stackTrace = S.Deferred.getStackHook()),
                                            n.setTimeout(d))
                                    }
                                }
                                return S.Deferred((function(n) {
                                        t[0][3].add(r(0, n, m(i) ? i : q, n.notifyWith)),
                                            t[1][3].add(r(0, n, m(e) ? e : q)),
                                            t[2][3].add(r(0, n, m(o) ? o : z))
                                    }
                                )).promise()
                            },
                            promise: function(e) {
                                return null != e ? S.extend(e, i) : i
                            }
                        }
                            , s = {};
                        return S.each(t, (function(e, n) {
                                var r = n[2]
                                    , a = n[5];
                                i[n[1]] = r.add,
                                a && r.add((function() {
                                        o = a
                                    }
                                ), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock),
                                    r.add(n[3].fire),
                                    s[n[0]] = function() {
                                        return s[n[0] + "With"](this === s ? void 0 : this, arguments),
                                            this
                                    }
                                    ,
                                    s[n[0] + "With"] = r.fireWith
                            }
                        )),
                            i.promise(s),
                        e && e.call(s, s),
                            s
                    },
                    when: function(e) {
                        var t = arguments.length
                            , n = t
                            , o = Array(n)
                            , i = a.call(arguments)
                            , s = S.Deferred()
                            , r = function(e) {
                            return function(n) {
                                o[e] = this,
                                    i[e] = arguments.length > 1 ? a.call(arguments) : n,
                                --t || s.resolveWith(o, i)
                            }
                        };
                        if (t <= 1 && (F(e, s.done(r(n)).resolve, s.reject, !t),
                        "pending" === s.state() || m(i[n] && i[n].then)))
                            return s.then();
                        for (; n--; )
                            F(i[n], r(n), s.reject);
                        return s.promise()
                    }
                });
            var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            S.Deferred.exceptionHook = function(e, t) {
                n.console && n.console.warn && e && R.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
            }
                ,
                S.readyException = function(e) {
                    n.setTimeout((function() {
                            throw e
                        }
                    ))
                }
            ;
            var W = S.Deferred();
            function _() {
                b.removeEventListener("DOMContentLoaded", _),
                    n.removeEventListener("load", _),
                    S.ready()
            }
            S.fn.ready = function(e) {
                return W.then(e).catch((function(e) {
                        S.readyException(e)
                    }
                )),
                    this
            }
                ,
                S.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function(e) {
                        (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0,
                        !0 !== e && --S.readyWait > 0 || W.resolveWith(b, [S]))
                    }
                }),
                S.ready.then = W.then,
                "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? n.setTimeout(S.ready) : (b.addEventListener("DOMContentLoaded", _),
                    n.addEventListener("load", _));
            var B = function(e, t, n, o, i, s, r) {
                var a = 0
                    , l = e.length
                    , c = null == n;
                if ("object" === T(n))
                    for (a in i = !0,
                        n)
                        B(e, t, a, n[a], !0, s, r);
                else if (void 0 !== o && (i = !0,
                m(o) || (r = !0),
                c && (r ? (t.call(e, o),
                    t = null) : (c = t,
                        t = function(e, t, n) {
                            return c.call(S(e), n)
                        }
                )),
                    t))
                    for (; a < l; a++)
                        t(e[a], n, r ? o : o.call(e[a], a, t(e[a], n)));
                return i ? e : c ? t.call(e) : l ? t(e[0], n) : s
            }
                , X = /^-ms-/
                , Y = /-([a-z])/g;
            function U(e, t) {
                return t.toUpperCase()
            }
            function V(e) {
                return e.replace(X, "ms-").replace(Y, U)
            }
            var Z = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
            function Q() {
                this.expando = S.expando + Q.uid++
            }
            Q.uid = 1,
                Q.prototype = {
                    cache: function(e) {
                        var t = e[this.expando];
                        return t || (t = {},
                        Z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0
                        }))),
                            t
                    },
                    set: function(e, t, n) {
                        var o, i = this.cache(e);
                        if ("string" == typeof t)
                            i[V(t)] = n;
                        else
                            for (o in t)
                                i[V(o)] = t[o];
                        return i
                    },
                    get: function(e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
                    },
                    access: function(e, t, n) {
                        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                            void 0 !== n ? n : t)
                    },
                    remove: function(e, t) {
                        var n, o = e[this.expando];
                        if (void 0 !== o) {
                            if (void 0 !== t) {
                                n = (t = Array.isArray(t) ? t.map(V) : (t = V(t))in o ? [t] : t.match(N) || []).length;
                                for (; n--; )
                                    delete o[t[n]]
                            }
                            (void 0 === t || S.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                        }
                    },
                    hasData: function(e) {
                        var t = e[this.expando];
                        return void 0 !== t && !S.isEmptyObject(t)
                    }
                };
            var G = new Q
                , K = new Q
                , J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
                , ee = /[A-Z]/g;
            function te(e, t, n) {
                var o;
                if (void 0 === n && 1 === e.nodeType)
                    if (o = "data-" + t.replace(ee, "-$&").toLowerCase(),
                    "string" == typeof (n = e.getAttribute(o))) {
                        try {
                            n = function(e) {
                                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : J.test(e) ? JSON.parse(e) : e)
                            }(n)
                        } catch (e) {}
                        K.set(e, t, n)
                    } else
                        n = void 0;
                return n
            }
            S.extend({
                hasData: function(e) {
                    return K.hasData(e) || G.hasData(e)
                },
                data: function(e, t, n) {
                    return K.access(e, t, n)
                },
                removeData: function(e, t) {
                    K.remove(e, t)
                },
                _data: function(e, t, n) {
                    return G.access(e, t, n)
                },
                _removeData: function(e, t) {
                    G.remove(e, t)
                }
            }),
                S.fn.extend({
                    data: function(e, t) {
                        var n, o, i, s = this[0], r = s && s.attributes;
                        if (void 0 === e) {
                            if (this.length && (i = K.get(s),
                            1 === s.nodeType && !G.get(s, "hasDataAttrs"))) {
                                for (n = r.length; n--; )
                                    r[n] && 0 === (o = r[n].name).indexOf("data-") && (o = V(o.slice(5)),
                                        te(s, o, i[o]));
                                G.set(s, "hasDataAttrs", !0)
                            }
                            return i
                        }
                        return "object" == typeof e ? this.each((function() {
                                K.set(this, e)
                            }
                        )) : B(this, (function(t) {
                                var n;
                                if (s && void 0 === t)
                                    return void 0 !== (n = K.get(s, e)) || void 0 !== (n = te(s, e)) ? n : void 0;
                                this.each((function() {
                                        K.set(this, e, t)
                                    }
                                ))
                            }
                        ), null, t, arguments.length > 1, null, !0)
                    },
                    removeData: function(e) {
                        return this.each((function() {
                                K.remove(this, e)
                            }
                        ))
                    }
                }),
                S.extend({
                    queue: function(e, t, n) {
                        var o;
                        if (e)
                            return t = (t || "fx") + "queue",
                                o = G.get(e, t),
                            n && (!o || Array.isArray(n) ? o = G.access(e, t, S.makeArray(n)) : o.push(n)),
                            o || []
                    },
                    dequeue: function(e, t) {
                        t = t || "fx";
                        var n = S.queue(e, t)
                            , o = n.length
                            , i = n.shift()
                            , s = S._queueHooks(e, t);
                        "inprogress" === i && (i = n.shift(),
                            o--),
                        i && ("fx" === t && n.unshift("inprogress"),
                            delete s.stop,
                            i.call(e, (function() {
                                    S.dequeue(e, t)
                                }
                            ), s)),
                        !o && s && s.empty.fire()
                    },
                    _queueHooks: function(e, t) {
                        var n = t + "queueHooks";
                        return G.get(e, n) || G.access(e, n, {
                            empty: S.Callbacks("once memory").add((function() {
                                    G.remove(e, [t + "queue", n])
                                }
                            ))
                        })
                    }
                }),
                S.fn.extend({
                    queue: function(e, t) {
                        var n = 2;
                        return "string" != typeof e && (t = e,
                            e = "fx",
                            n--),
                            arguments.length < n ? S.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                                    var n = S.queue(this, e, t);
                                    S._queueHooks(this, e),
                                    "fx" === e && "inprogress" !== n[0] && S.dequeue(this, e)
                                }
                            ))
                    },
                    dequeue: function(e) {
                        return this.each((function() {
                                S.dequeue(this, e)
                            }
                        ))
                    },
                    clearQueue: function(e) {
                        return this.queue(e || "fx", [])
                    },
                    promise: function(e, t) {
                        var n, o = 1, i = S.Deferred(), s = this, r = this.length, a = function() {
                            --o || i.resolveWith(s, [s])
                        };
                        for ("string" != typeof e && (t = e,
                            e = void 0),
                                 e = e || "fx"; r--; )
                            (n = G.get(s[r], e + "queueHooks")) && n.empty && (o++,
                                n.empty.add(a));
                        return a(),
                            i.promise(t)
                    }
                });
            var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
                , oe = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$","i")
                , ie = ["Top", "Right", "Bottom", "Left"]
                , se = b.documentElement
                , re = function(e) {
                return S.contains(e.ownerDocument, e)
            }
                , ae = {
                composed: !0
            };
            se.getRootNode && (re = function(e) {
                    return S.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
                }
            );
            var le = function(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && re(e) && "none" === S.css(e, "display")
            };
            function ce(e, t, n, o) {
                var i, s, r = 20, a = o ? function() {
                        return o.cur()
                    }
                    : function() {
                        return S.css(e, t, "")
                    }
                    , l = a(), c = n && n[3] || (S.cssNumber[t] ? "" : "px"), d = e.nodeType && (S.cssNumber[t] || "px" !== c && +l) && oe.exec(S.css(e, t));
                if (d && d[3] !== c) {
                    for (l /= 2,
                             c = c || d[3],
                             d = +l || 1; r--; )
                        S.style(e, t, d + c),
                        (1 - s) * (1 - (s = a() / l || .5)) <= 0 && (r = 0),
                            d /= s;
                    d *= 2,
                        S.style(e, t, d + c),
                        n = n || []
                }
                return n && (d = +d || +l || 0,
                    i = n[1] ? d + (n[1] + 1) * n[2] : +n[2],
                o && (o.unit = c,
                    o.start = d,
                    o.end = i)),
                    i
            }
            var de = {};
            function ue(e) {
                var t, n = e.ownerDocument, o = e.nodeName, i = de[o];
                return i || (t = n.body.appendChild(n.createElement(o)),
                    i = S.css(t, "display"),
                    t.parentNode.removeChild(t),
                "none" === i && (i = "block"),
                    de[o] = i,
                    i)
            }
            function pe(e, t) {
                for (var n, o, i = [], s = 0, r = e.length; s < r; s++)
                    (o = e[s]).style && (n = o.style.display,
                        t ? ("none" === n && (i[s] = G.get(o, "display") || null,
                        i[s] || (o.style.display = "")),
                        "" === o.style.display && le(o) && (i[s] = ue(o))) : "none" !== n && (i[s] = "none",
                            G.set(o, "display", n)));
                for (s = 0; s < r; s++)
                    null != i[s] && (e[s].style.display = i[s]);
                return e
            }
            S.fn.extend({
                show: function() {
                    return pe(this, !0)
                },
                hide: function() {
                    return pe(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                            le(this) ? S(this).show() : S(this).hide()
                        }
                    ))
                }
            });
            var fe, he, ge = /^(?:checkbox|radio)$/i, ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, me = /^$|^module$|\/(?:java|ecma)script/i;
            fe = b.createDocumentFragment().appendChild(b.createElement("div")),
                (he = b.createElement("input")).setAttribute("type", "radio"),
                he.setAttribute("checked", "checked"),
                he.setAttribute("name", "t"),
                fe.appendChild(he),
                v.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked,
                fe.innerHTML = "<textarea>x</textarea>",
                v.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue,
                fe.innerHTML = "<option></option>",
                v.option = !!fe.lastChild;
            var ye = {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            function be(e, t) {
                var n;
                return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
                    void 0 === t || t && E(e, t) ? S.merge([e], n) : n
            }
            function xe(e, t) {
                for (var n = 0, o = e.length; n < o; n++)
                    G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"))
            }
            ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead,
                ye.th = ye.td,
            v.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
            var we = /<|&#?\w+;/;
            function Te(e, t, n, o, i) {
                for (var s, r, a, l, c, d, u = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
                    if ((s = e[f]) || 0 === s)
                        if ("object" === T(s))
                            S.merge(p, s.nodeType ? [s] : s);
                        else if (we.test(s)) {
                            for (r = r || u.appendChild(t.createElement("div")),
                                     a = (ve.exec(s) || ["", ""])[1].toLowerCase(),
                                     l = ye[a] || ye._default,
                                     r.innerHTML = l[1] + S.htmlPrefilter(s) + l[2],
                                     d = l[0]; d--; )
                                r = r.lastChild;
                            S.merge(p, r.childNodes),
                                (r = u.firstChild).textContent = ""
                        } else
                            p.push(t.createTextNode(s));
                for (u.textContent = "",
                         f = 0; s = p[f++]; )
                    if (o && S.inArray(s, o) > -1)
                        i && i.push(s);
                    else if (c = re(s),
                        r = be(u.appendChild(s), "script"),
                    c && xe(r),
                        n)
                        for (d = 0; s = r[d++]; )
                            me.test(s.type || "") && n.push(s);
                return u
            }
            var Se = /^key/
                , ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
                , Ce = /^([^.]*)(?:\.(.+)|)/;
            function $e() {
                return !0
            }
            function Ae() {
                return !1
            }
            function Pe(e, t) {
                return e === function() {
                    try {
                        return b.activeElement
                    } catch (e) {}
                }() == ("focus" === t)
            }
            function Ee(e, t, n, o, i, s) {
                var r, a;
                if ("object" == typeof t) {
                    for (a in "string" != typeof n && (o = o || n,
                        n = void 0),
                        t)
                        Ee(e, a, n, o, t[a], s);
                    return e
                }
                if (null == o && null == i ? (i = n,
                    o = n = void 0) : null == i && ("string" == typeof n ? (i = o,
                    o = void 0) : (i = o,
                    o = n,
                    n = void 0)),
                !1 === i)
                    i = Ae;
                else if (!i)
                    return e;
                return 1 === s && (r = i,
                    (i = function(e) {
                            return S().off(e),
                                r.apply(this, arguments)
                        }
                    ).guid = r.guid || (r.guid = S.guid++)),
                    e.each((function() {
                            S.event.add(this, t, i, o, n)
                        }
                    ))
            }
            function Le(e, t, n) {
                n ? (G.set(e, t, !1),
                    S.event.add(e, t, {
                        namespace: !1,
                        handler: function(e) {
                            var o, i, s = G.get(this, t);
                            if (1 & e.isTrigger && this[t]) {
                                if (s.length)
                                    (S.event.special[t] || {}).delegateType && e.stopPropagation();
                                else if (s = a.call(arguments),
                                    G.set(this, t, s),
                                    o = n(this, t),
                                    this[t](),
                                    s !== (i = G.get(this, t)) || o ? G.set(this, t, !1) : i = {},
                                s !== i)
                                    return e.stopImmediatePropagation(),
                                        e.preventDefault(),
                                        i.value
                            } else
                                s.length && (G.set(this, t, {
                                    value: S.event.trigger(S.extend(s[0], S.Event.prototype), s.slice(1), this)
                                }),
                                    e.stopImmediatePropagation())
                        }
                    })) : void 0 === G.get(e, t) && S.event.add(e, t, $e)
            }
            S.event = {
                global: {},
                add: function(e, t, n, o, i) {
                    var s, r, a, l, c, d, u, p, f, h, g, v = G.get(e);
                    if (Z(e))
                        for (n.handler && (n = (s = n).handler,
                            i = s.selector),
                             i && S.find.matchesSelector(se, i),
                             n.guid || (n.guid = S.guid++),
                             (l = v.events) || (l = v.events = Object.create(null)),
                             (r = v.handle) || (r = v.handle = function(t) {
                                     return void 0 !== S && S.event.triggered !== t.type ? S.event.dispatch.apply(e, arguments) : void 0
                                 }
                             ),
                                 c = (t = (t || "").match(N) || [""]).length; c--; )
                            f = g = (a = Ce.exec(t[c]) || [])[1],
                                h = (a[2] || "").split(".").sort(),
                            f && (u = S.event.special[f] || {},
                                f = (i ? u.delegateType : u.bindType) || f,
                                u = S.event.special[f] || {},
                                d = S.extend({
                                    type: f,
                                    origType: g,
                                    data: o,
                                    handler: n,
                                    guid: n.guid,
                                    selector: i,
                                    needsContext: i && S.expr.match.needsContext.test(i),
                                    namespace: h.join(".")
                                }, s),
                            (p = l[f]) || ((p = l[f] = []).delegateCount = 0,
                            u.setup && !1 !== u.setup.call(e, o, h, r) || e.addEventListener && e.addEventListener(f, r)),
                            u.add && (u.add.call(e, d),
                            d.handler.guid || (d.handler.guid = n.guid)),
                                i ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                                S.event.global[f] = !0)
                },
                remove: function(e, t, n, o, i) {
                    var s, r, a, l, c, d, u, p, f, h, g, v = G.hasData(e) && G.get(e);
                    if (v && (l = v.events)) {
                        for (c = (t = (t || "").match(N) || [""]).length; c--; )
                            if (f = g = (a = Ce.exec(t[c]) || [])[1],
                                h = (a[2] || "").split(".").sort(),
                                f) {
                                for (u = S.event.special[f] || {},
                                         p = l[f = (o ? u.delegateType : u.bindType) || f] || [],
                                         a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                         r = s = p.length; s--; )
                                    d = p[s],
                                    !i && g !== d.origType || n && n.guid !== d.guid || a && !a.test(d.namespace) || o && o !== d.selector && ("**" !== o || !d.selector) || (p.splice(s, 1),
                                    d.selector && p.delegateCount--,
                                    u.remove && u.remove.call(e, d));
                                r && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, v.handle) || S.removeEvent(e, f, v.handle),
                                    delete l[f])
                            } else
                                for (f in l)
                                    S.event.remove(e, f + t[c], n, o, !0);
                        S.isEmptyObject(l) && G.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t, n, o, i, s, r, a = new Array(arguments.length), l = S.event.fix(e), c = (G.get(this, "events") || Object.create(null))[l.type] || [], d = S.event.special[l.type] || {};
                    for (a[0] = l,
                             t = 1; t < arguments.length; t++)
                        a[t] = arguments[t];
                    if (l.delegateTarget = this,
                    !d.preDispatch || !1 !== d.preDispatch.call(this, l)) {
                        for (r = S.event.handlers.call(this, l, c),
                                 t = 0; (i = r[t++]) && !l.isPropagationStopped(); )
                            for (l.currentTarget = i.elem,
                                     n = 0; (s = i.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                                l.rnamespace && !1 !== s.namespace && !l.rnamespace.test(s.namespace) || (l.handleObj = s,
                                    l.data = s.data,
                                void 0 !== (o = ((S.event.special[s.origType] || {}).handle || s.handler).apply(i.elem, a)) && !1 === (l.result = o) && (l.preventDefault(),
                                    l.stopPropagation()));
                        return d.postDispatch && d.postDispatch.call(this, l),
                            l.result
                    }
                },
                handlers: function(e, t) {
                    var n, o, i, s, r, a = [], l = t.delegateCount, c = e.target;
                    if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                        for (; c !== this; c = c.parentNode || this)
                            if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                                for (s = [],
                                         r = {},
                                         n = 0; n < l; n++)
                                    void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? S(i, this).index(c) > -1 : S.find(i, this, null, [c]).length),
                                    r[i] && s.push(o);
                                s.length && a.push({
                                    elem: c,
                                    handlers: s
                                })
                            }
                    return c = this,
                    l < t.length && a.push({
                        elem: c,
                        handlers: t.slice(l)
                    }),
                        a
                },
                addProp: function(e, t) {
                    Object.defineProperty(S.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: m(t) ? function() {
                                if (this.originalEvent)
                                    return t(this.originalEvent)
                            }
                            : function() {
                                if (this.originalEvent)
                                    return this.originalEvent[e]
                            }
                        ,
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function(e) {
                    return e[S.expando] ? e : new S.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        setup: function(e) {
                            var t = this || e;
                            return ge.test(t.type) && t.click && E(t, "input") && Le(t, "click", $e),
                                !1
                        },
                        trigger: function(e) {
                            var t = this || e;
                            return ge.test(t.type) && t.click && E(t, "input") && Le(t, "click"),
                                !0
                        },
                        _default: function(e) {
                            var t = e.target;
                            return ge.test(t.type) && t.click && E(t, "input") && G.get(t, "click") || E(t, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            },
                S.removeEvent = function(e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n)
                }
                ,
                S.Event = function(e, t) {
                    if (!(this instanceof S.Event))
                        return new S.Event(e,t);
                    e && e.type ? (this.originalEvent = e,
                        this.type = e.type,
                        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? $e : Ae,
                        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
                        this.currentTarget = e.currentTarget,
                        this.relatedTarget = e.relatedTarget) : this.type = e,
                    t && S.extend(this, t),
                        this.timeStamp = e && e.timeStamp || Date.now(),
                        this[S.expando] = !0
                }
                ,
                S.Event.prototype = {
                    constructor: S.Event,
                    isDefaultPrevented: Ae,
                    isPropagationStopped: Ae,
                    isImmediatePropagationStopped: Ae,
                    isSimulated: !1,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = $e,
                        e && !this.isSimulated && e.preventDefault()
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = $e,
                        e && !this.isSimulated && e.stopPropagation()
                    },
                    stopImmediatePropagation: function() {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = $e,
                        e && !this.isSimulated && e.stopImmediatePropagation(),
                            this.stopPropagation()
                    }
                },
                S.each({
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
                    code: !0,
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
                    which: function(e) {
                        var t = e.button;
                        return null == e.which && Se.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                    }
                }, S.event.addProp),
                S.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(e, t) {
                        S.event.special[e] = {
                            setup: function() {
                                return Le(this, e, Pe),
                                    !1
                            },
                            trigger: function() {
                                return Le(this, e),
                                    !0
                            },
                            delegateType: t
                        }
                    }
                )),
                S.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, (function(e, t) {
                        S.event.special[e] = {
                            delegateType: t,
                            bindType: t,
                            handle: function(e) {
                                var n, o = this, i = e.relatedTarget, s = e.handleObj;
                                return i && (i === o || S.contains(o, i)) || (e.type = s.origType,
                                    n = s.handler.apply(this, arguments),
                                    e.type = t),
                                    n
                            }
                        }
                    }
                )),
                S.fn.extend({
                    on: function(e, t, n, o) {
                        return Ee(this, e, t, n, o)
                    },
                    one: function(e, t, n, o) {
                        return Ee(this, e, t, n, o, 1)
                    },
                    off: function(e, t, n) {
                        var o, i;
                        if (e && e.preventDefault && e.handleObj)
                            return o = e.handleObj,
                                S(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler),
                                this;
                        if ("object" == typeof e) {
                            for (i in e)
                                this.off(i, t, e[i]);
                            return this
                        }
                        return !1 !== t && "function" != typeof t || (n = t,
                            t = void 0),
                        !1 === n && (n = Ae),
                            this.each((function() {
                                    S.event.remove(this, e, n, t)
                                }
                            ))
                    }
                });
            var De = /<script|<style|<link/i
                , je = /checked\s*(?:[^=]|=\s*.checked.)/i
                , He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function Me(e, t) {
                return E(e, "table") && E(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
            }
            function Oe(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
                    e
            }
            function Ie(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
                    e
            }
            function Ne(e, t) {
                var n, o, i, s, r, a;
                if (1 === t.nodeType) {
                    if (G.hasData(e) && (a = G.get(e).events))
                        for (i in G.remove(t, "handle events"),
                            a)
                            for (n = 0,
                                     o = a[i].length; n < o; n++)
                                S.event.add(t, i, a[i][n]);
                    K.hasData(e) && (s = K.access(e),
                        r = S.extend({}, s),
                        K.set(t, r))
                }
            }
            function qe(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && ge.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
            function ze(e, t, n, o) {
                t = l(t);
                var i, s, r, a, c, d, u = 0, p = e.length, f = p - 1, h = t[0], g = m(h);
                if (g || p > 1 && "string" == typeof h && !v.checkClone && je.test(h))
                    return e.each((function(i) {
                            var s = e.eq(i);
                            g && (t[0] = h.call(this, i, s.html())),
                                ze(s, t, n, o)
                        }
                    ));
                if (p && (s = (i = Te(t, e[0].ownerDocument, !1, e, o)).firstChild,
                1 === i.childNodes.length && (i = s),
                s || o)) {
                    for (a = (r = S.map(be(i, "script"), Oe)).length; u < p; u++)
                        c = i,
                        u !== f && (c = S.clone(c, !0, !0),
                        a && S.merge(r, be(c, "script"))),
                            n.call(e[u], c, u);
                    if (a)
                        for (d = r[r.length - 1].ownerDocument,
                                 S.map(r, Ie),
                                 u = 0; u < a; u++)
                            c = r[u],
                            me.test(c.type || "") && !G.access(c, "globalEval") && S.contains(d, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? S._evalUrl && !c.noModule && S._evalUrl(c.src, {
                                nonce: c.nonce || c.getAttribute("nonce")
                            }, d) : w(c.textContent.replace(He, ""), c, d))
                }
                return e
            }
            function Fe(e, t, n) {
                for (var o, i = t ? S.filter(t, e) : e, s = 0; null != (o = i[s]); s++)
                    n || 1 !== o.nodeType || S.cleanData(be(o)),
                    o.parentNode && (n && re(o) && xe(be(o, "script")),
                        o.parentNode.removeChild(o));
                return e
            }
            S.extend({
                htmlPrefilter: function(e) {
                    return e
                },
                clone: function(e, t, n) {
                    var o, i, s, r, a = e.cloneNode(!0), l = re(e);
                    if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                        for (r = be(a),
                                 o = 0,
                                 i = (s = be(e)).length; o < i; o++)
                            qe(s[o], r[o]);
                    if (t)
                        if (n)
                            for (s = s || be(e),
                                     r = r || be(a),
                                     o = 0,
                                     i = s.length; o < i; o++)
                                Ne(s[o], r[o]);
                        else
                            Ne(e, a);
                    return (r = be(a, "script")).length > 0 && xe(r, !l && be(e, "script")),
                        a
                },
                cleanData: function(e) {
                    for (var t, n, o, i = S.event.special, s = 0; void 0 !== (n = e[s]); s++)
                        if (Z(n)) {
                            if (t = n[G.expando]) {
                                if (t.events)
                                    for (o in t.events)
                                        i[o] ? S.event.remove(n, o) : S.removeEvent(n, o, t.handle);
                                n[G.expando] = void 0
                            }
                            n[K.expando] && (n[K.expando] = void 0)
                        }
                }
            }),
                S.fn.extend({
                    detach: function(e) {
                        return Fe(this, e, !0)
                    },
                    remove: function(e) {
                        return Fe(this, e)
                    },
                    text: function(e) {
                        return B(this, (function(e) {
                                return void 0 === e ? S.text(this) : this.empty().each((function() {
                                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                                    }
                                ))
                            }
                        ), null, e, arguments.length)
                    },
                    append: function() {
                        return ze(this, arguments, (function(e) {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Me(this, e).appendChild(e)
                            }
                        ))
                    },
                    prepend: function() {
                        return ze(this, arguments, (function(e) {
                                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                    var t = Me(this, e);
                                    t.insertBefore(e, t.firstChild)
                                }
                            }
                        ))
                    },
                    before: function() {
                        return ze(this, arguments, (function(e) {
                                this.parentNode && this.parentNode.insertBefore(e, this)
                            }
                        ))
                    },
                    after: function() {
                        return ze(this, arguments, (function(e) {
                                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                            }
                        ))
                    },
                    empty: function() {
                        for (var e, t = 0; null != (e = this[t]); t++)
                            1 === e.nodeType && (S.cleanData(be(e, !1)),
                                e.textContent = "");
                        return this
                    },
                    clone: function(e, t) {
                        return e = null != e && e,
                            t = null == t ? e : t,
                            this.map((function() {
                                    return S.clone(this, e, t)
                                }
                            ))
                    },
                    html: function(e) {
                        return B(this, (function(e) {
                                var t = this[0] || {}
                                    , n = 0
                                    , o = this.length;
                                if (void 0 === e && 1 === t.nodeType)
                                    return t.innerHTML;
                                if ("string" == typeof e && !De.test(e) && !ye[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                                    e = S.htmlPrefilter(e);
                                    try {
                                        for (; n < o; n++)
                                            1 === (t = this[n] || {}).nodeType && (S.cleanData(be(t, !1)),
                                                t.innerHTML = e);
                                        t = 0
                                    } catch (e) {}
                                }
                                t && this.empty().append(e)
                            }
                        ), null, e, arguments.length)
                    },
                    replaceWith: function() {
                        var e = [];
                        return ze(this, arguments, (function(t) {
                                var n = this.parentNode;
                                S.inArray(this, e) < 0 && (S.cleanData(be(this)),
                                n && n.replaceChild(t, this))
                            }
                        ), e)
                    }
                }),
                S.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, (function(e, t) {
                        S.fn[e] = function(e) {
                            for (var n, o = [], i = S(e), s = i.length - 1, r = 0; r <= s; r++)
                                n = r === s ? this : this.clone(!0),
                                    S(i[r])[t](n),
                                    c.apply(o, n.get());
                            return this.pushStack(o)
                        }
                    }
                ));
            var Re = new RegExp("^(" + ne + ")(?!px)[a-z%]+$","i")
                , We = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n),
                    t.getComputedStyle(e)
            }
                , _e = function(e, t, n) {
                var o, i, s = {};
                for (i in t)
                    s[i] = e.style[i],
                        e.style[i] = t[i];
                for (i in o = n.call(e),
                    t)
                    e.style[i] = s[i];
                return o
            }
                , Be = new RegExp(ie.join("|"),"i");
            function Xe(e, t, n) {
                var o, i, s, r, a = e.style;
                return (n = n || We(e)) && ("" !== (r = n.getPropertyValue(t) || n[t]) || re(e) || (r = S.style(e, t)),
                !v.pixelBoxStyles() && Re.test(r) && Be.test(t) && (o = a.width,
                    i = a.minWidth,
                    s = a.maxWidth,
                    a.minWidth = a.maxWidth = a.width = r,
                    r = n.width,
                    a.width = o,
                    a.minWidth = i,
                    a.maxWidth = s)),
                    void 0 !== r ? r + "" : r
            }
            function Ye(e, t) {
                return {
                    get: function() {
                        if (!e())
                            return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }
            !function() {
                function e() {
                    if (d) {
                        c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                            d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                            se.appendChild(c).appendChild(d);
                        var e = n.getComputedStyle(d);
                        o = "1%" !== e.top,
                            l = 12 === t(e.marginLeft),
                            d.style.right = "60%",
                            r = 36 === t(e.right),
                            i = 36 === t(e.width),
                            d.style.position = "absolute",
                            s = 12 === t(d.offsetWidth / 3),
                            se.removeChild(c),
                            d = null
                    }
                }
                function t(e) {
                    return Math.round(parseFloat(e))
                }
                var o, i, s, r, a, l, c = b.createElement("div"), d = b.createElement("div");
                d.style && (d.style.backgroundClip = "content-box",
                    d.cloneNode(!0).style.backgroundClip = "",
                    v.clearCloneStyle = "content-box" === d.style.backgroundClip,
                    S.extend(v, {
                        boxSizingReliable: function() {
                            return e(),
                                i
                        },
                        pixelBoxStyles: function() {
                            return e(),
                                r
                        },
                        pixelPosition: function() {
                            return e(),
                                o
                        },
                        reliableMarginLeft: function() {
                            return e(),
                                l
                        },
                        scrollboxSize: function() {
                            return e(),
                                s
                        },
                        reliableTrDimensions: function() {
                            var e, t, o, i;
                            return null == a && (e = b.createElement("table"),
                                t = b.createElement("tr"),
                                o = b.createElement("div"),
                                e.style.cssText = "position:absolute;left:-11111px",
                                t.style.height = "1px",
                                o.style.height = "9px",
                                se.appendChild(e).appendChild(t).appendChild(o),
                                i = n.getComputedStyle(t),
                                a = parseInt(i.height) > 3,
                                se.removeChild(e)),
                                a
                        }
                    }))
            }();
            var Ue = ["Webkit", "Moz", "ms"]
                , Ve = b.createElement("div").style
                , Ze = {};
            function Qe(e) {
                var t = S.cssProps[e] || Ze[e];
                return t || (e in Ve ? e : Ze[e] = function(e) {
                    for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--; )
                        if ((e = Ue[n] + t)in Ve)
                            return e
                }(e) || e)
            }
            var Ge = /^(none|table(?!-c[ea]).+)/
                , Ke = /^--/
                , Je = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }
                , et = {
                letterSpacing: "0",
                fontWeight: "400"
            };
            function tt(e, t, n) {
                var o = oe.exec(t);
                return o ? Math.max(0, o[2] - (n || 0)) + (o[3] || "px") : t
            }
            function nt(e, t, n, o, i, s) {
                var r = "width" === t ? 1 : 0
                    , a = 0
                    , l = 0;
                if (n === (o ? "border" : "content"))
                    return 0;
                for (; r < 4; r += 2)
                    "margin" === n && (l += S.css(e, n + ie[r], !0, i)),
                        o ? ("content" === n && (l -= S.css(e, "padding" + ie[r], !0, i)),
                        "margin" !== n && (l -= S.css(e, "border" + ie[r] + "Width", !0, i))) : (l += S.css(e, "padding" + ie[r], !0, i),
                            "padding" !== n ? l += S.css(e, "border" + ie[r] + "Width", !0, i) : a += S.css(e, "border" + ie[r] + "Width", !0, i));
                return !o && s >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - a - .5)) || 0),
                    l
            }
            function ot(e, t, n) {
                var o = We(e)
                    , i = (!v.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, o)
                    , s = i
                    , r = Xe(e, t, o)
                    , a = "offset" + t[0].toUpperCase() + t.slice(1);
                if (Re.test(r)) {
                    if (!n)
                        return r;
                    r = "auto"
                }
                return (!v.boxSizingReliable() && i || !v.reliableTrDimensions() && E(e, "tr") || "auto" === r || !parseFloat(r) && "inline" === S.css(e, "display", !1, o)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, o),
                (s = a in e) && (r = e[a])),
                (r = parseFloat(r) || 0) + nt(e, t, n || (i ? "border" : "content"), s, o, r) + "px"
            }
            function it(e, t, n, o, i) {
                return new it.prototype.init(e,t,n,o,i)
            }
            S.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = Xe(e, "opacity");
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
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function(e, t, n, o) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i, s, r, a = V(t), l = Ke.test(t), c = e.style;
                        if (l || (t = Qe(a)),
                            r = S.cssHooks[t] || S.cssHooks[a],
                        void 0 === n)
                            return r && "get"in r && void 0 !== (i = r.get(e, !1, o)) ? i : c[t];
                        "string" === (s = typeof n) && (i = oe.exec(n)) && i[1] && (n = ce(e, t, i),
                            s = "number"),
                        null != n && n == n && ("number" !== s || l || (n += i && i[3] || (S.cssNumber[a] ? "" : "px")),
                        v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                        r && "set"in r && void 0 === (n = r.set(e, n, o)) || (l ? c.setProperty(t, n) : c[t] = n))
                    }
                },
                css: function(e, t, n, o) {
                    var i, s, r, a = V(t);
                    return Ke.test(t) || (t = Qe(a)),
                    (r = S.cssHooks[t] || S.cssHooks[a]) && "get"in r && (i = r.get(e, !0, n)),
                    void 0 === i && (i = Xe(e, t, o)),
                    "normal" === i && t in et && (i = et[t]),
                        "" === n || n ? (s = parseFloat(i),
                            !0 === n || isFinite(s) ? s || 0 : i) : i
                }
            }),
                S.each(["height", "width"], (function(e, t) {
                        S.cssHooks[t] = {
                            get: function(e, n, o) {
                                if (n)
                                    return !Ge.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, t, o) : _e(e, Je, (function() {
                                            return ot(e, t, o)
                                        }
                                    ))
                            },
                            set: function(e, n, o) {
                                var i, s = We(e), r = !v.scrollboxSize() && "absolute" === s.position, a = (r || o) && "border-box" === S.css(e, "boxSizing", !1, s), l = o ? nt(e, t, o, a, s) : 0;
                                return a && r && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(s[t]) - nt(e, t, "border", !1, s) - .5)),
                                l && (i = oe.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                                    n = S.css(e, t)),
                                    tt(0, n, l)
                            }
                        }
                    }
                )),
                S.cssHooks.marginLeft = Ye(v.reliableMarginLeft, (function(e, t) {
                        if (t)
                            return (parseFloat(Xe(e, "marginLeft")) || e.getBoundingClientRect().left - _e(e, {
                                marginLeft: 0
                            }, (function() {
                                    return e.getBoundingClientRect().left
                                }
                            ))) + "px"
                    }
                )),
                S.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, (function(e, t) {
                        S.cssHooks[e + t] = {
                            expand: function(n) {
                                for (var o = 0, i = {}, s = "string" == typeof n ? n.split(" ") : [n]; o < 4; o++)
                                    i[e + ie[o] + t] = s[o] || s[o - 2] || s[0];
                                return i
                            }
                        },
                        "margin" !== e && (S.cssHooks[e + t].set = tt)
                    }
                )),
                S.fn.extend({
                    css: function(e, t) {
                        return B(this, (function(e, t, n) {
                                var o, i, s = {}, r = 0;
                                if (Array.isArray(t)) {
                                    for (o = We(e),
                                             i = t.length; r < i; r++)
                                        s[t[r]] = S.css(e, t[r], !1, o);
                                    return s
                                }
                                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
                            }
                        ), e, t, arguments.length > 1)
                    }
                }),
                S.Tween = it,
                it.prototype = {
                    constructor: it,
                    init: function(e, t, n, o, i, s) {
                        this.elem = e,
                            this.prop = n,
                            this.easing = i || S.easing._default,
                            this.options = t,
                            this.start = this.now = this.cur(),
                            this.end = o,
                            this.unit = s || (S.cssNumber[n] ? "" : "px")
                    },
                    cur: function() {
                        var e = it.propHooks[this.prop];
                        return e && e.get ? e.get(this) : it.propHooks._default.get(this)
                    },
                    run: function(e) {
                        var t, n = it.propHooks[this.prop];
                        return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                            this.now = (this.end - this.start) * t + this.start,
                        this.options.step && this.options.step.call(this.elem, this.now, this),
                            n && n.set ? n.set(this) : it.propHooks._default.set(this),
                            this
                    }
                },
                it.prototype.init.prototype = it.prototype,
                it.propHooks = {
                    _default: {
                        get: function(e) {
                            var t;
                            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                        },
                        set: function(e) {
                            S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
                        }
                    }
                },
                it.propHooks.scrollTop = it.propHooks.scrollLeft = {
                    set: function(e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                    }
                },
                S.easing = {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    _default: "swing"
                },
                S.fx = it.prototype.init,
                S.fx.step = {};
            var st, rt, at = /^(?:toggle|show|hide)$/, lt = /queueHooks$/;
            function ct() {
                rt && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ct) : n.setTimeout(ct, S.fx.interval),
                    S.fx.tick())
            }
            function dt() {
                return n.setTimeout((function() {
                        st = void 0
                    }
                )),
                    st = Date.now()
            }
            function ut(e, t) {
                var n, o = 0, i = {
                    height: e
                };
                for (t = t ? 1 : 0; o < 4; o += 2 - t)
                    i["margin" + (n = ie[o])] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e),
                    i
            }
            function pt(e, t, n) {
                for (var o, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), s = 0, r = i.length; s < r; s++)
                    if (o = i[s].call(n, t, e))
                        return o
            }
            function ft(e, t, n) {
                var o, i, s = 0, r = ft.prefilters.length, a = S.Deferred().always((function() {
                        delete l.elem
                    }
                )), l = function() {
                    if (i)
                        return !1;
                    for (var t = st || dt(), n = Math.max(0, c.startTime + c.duration - t), o = 1 - (n / c.duration || 0), s = 0, r = c.tweens.length; s < r; s++)
                        c.tweens[s].run(o);
                    return a.notifyWith(e, [c, o, n]),
                        o < 1 && r ? n : (r || a.notifyWith(e, [c, 1, 0]),
                            a.resolveWith(e, [c]),
                            !1)
                }, c = a.promise({
                    elem: e,
                    props: S.extend({}, t),
                    opts: S.extend(!0, {
                        specialEasing: {},
                        easing: S.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: st || dt(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var o = S.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(o),
                            o
                    },
                    stop: function(t) {
                        var n = 0
                            , o = t ? c.tweens.length : 0;
                        if (i)
                            return this;
                        for (i = !0; n < o; n++)
                            c.tweens[n].run(1);
                        return t ? (a.notifyWith(e, [c, 1, 0]),
                            a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]),
                            this
                    }
                }), d = c.props;
                for (!function(e, t) {
                    var n, o, i, s, r;
                    for (n in e)
                        if (i = t[o = V(n)],
                            s = e[n],
                        Array.isArray(s) && (i = s[1],
                            s = e[n] = s[0]),
                        n !== o && (e[o] = s,
                            delete e[n]),
                        (r = S.cssHooks[o]) && "expand"in r)
                            for (n in s = r.expand(s),
                                delete e[o],
                                s)
                                n in e || (e[n] = s[n],
                                    t[n] = i);
                        else
                            t[o] = i
                }(d, c.opts.specialEasing); s < r; s++)
                    if (o = ft.prefilters[s].call(c, e, d, c.opts))
                        return m(o.stop) && (S._queueHooks(c.elem, c.opts.queue).stop = o.stop.bind(o)),
                            o;
                return S.map(d, pt, c),
                m(c.opts.start) && c.opts.start.call(e, c),
                    c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
                    S.fx.timer(S.extend(l, {
                        elem: e,
                        anim: c,
                        queue: c.opts.queue
                    })),
                    c
            }
            S.Animation = S.extend(ft, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return ce(n.elem, e, oe.exec(t), n),
                            n
                    }
                    ]
                },
                tweener: function(e, t) {
                    m(e) ? (t = e,
                        e = ["*"]) : e = e.match(N);
                    for (var n, o = 0, i = e.length; o < i; o++)
                        n = e[o],
                            ft.tweeners[n] = ft.tweeners[n] || [],
                            ft.tweeners[n].unshift(t)
                },
                prefilters: [function(e, t, n) {
                    var o, i, s, r, a, l, c, d, u = "width"in t || "height"in t, p = this, f = {}, h = e.style, g = e.nodeType && le(e), v = G.get(e, "fxshow");
                    for (o in n.queue || (null == (r = S._queueHooks(e, "fx")).unqueued && (r.unqueued = 0,
                            a = r.empty.fire,
                            r.empty.fire = function() {
                                r.unqueued || a()
                            }
                    ),
                        r.unqueued++,
                        p.always((function() {
                                p.always((function() {
                                        r.unqueued--,
                                        S.queue(e, "fx").length || r.empty.fire()
                                    }
                                ))
                            }
                        ))),
                        t)
                        if (i = t[o],
                            at.test(i)) {
                            if (delete t[o],
                                s = s || "toggle" === i,
                            i === (g ? "hide" : "show")) {
                                if ("show" !== i || !v || void 0 === v[o])
                                    continue;
                                g = !0
                            }
                            f[o] = v && v[o] || S.style(e, o)
                        }
                    if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(f))
                        for (o in u && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                        null == (c = v && v.display) && (c = G.get(e, "display")),
                        "none" === (d = S.css(e, "display")) && (c ? d = c : (pe([e], !0),
                            c = e.style.display || c,
                            d = S.css(e, "display"),
                            pe([e]))),
                        ("inline" === d || "inline-block" === d && null != c) && "none" === S.css(e, "float") && (l || (p.done((function() {
                                h.display = c
                            }
                        )),
                        null == c && (d = h.display,
                            c = "none" === d ? "" : d)),
                            h.display = "inline-block")),
                        n.overflow && (h.overflow = "hidden",
                            p.always((function() {
                                    h.overflow = n.overflow[0],
                                        h.overflowX = n.overflow[1],
                                        h.overflowY = n.overflow[2]
                                }
                            ))),
                            l = !1,
                            f)
                            l || (v ? "hidden"in v && (g = v.hidden) : v = G.access(e, "fxshow", {
                                display: c
                            }),
                            s && (v.hidden = !g),
                            g && pe([e], !0),
                                p.done((function() {
                                        for (o in g || pe([e]),
                                            G.remove(e, "fxshow"),
                                            f)
                                            S.style(e, o, f[o])
                                    }
                                ))),
                                l = pt(g ? v[o] : 0, o, p),
                            o in v || (v[o] = l.start,
                            g && (l.end = l.start,
                                l.start = 0))
                }
                ],
                prefilter: function(e, t) {
                    t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
                }
            }),
                S.speed = function(e, t, n) {
                    var o = e && "object" == typeof e ? S.extend({}, e) : {
                        complete: n || !n && t || m(e) && e,
                        duration: e,
                        easing: n && t || t && !m(t) && t
                    };
                    return S.fx.off ? o.duration = 0 : "number" != typeof o.duration && (o.duration in S.fx.speeds ? o.duration = S.fx.speeds[o.duration] : o.duration = S.fx.speeds._default),
                    null != o.queue && !0 !== o.queue || (o.queue = "fx"),
                        o.old = o.complete,
                        o.complete = function() {
                            m(o.old) && o.old.call(this),
                            o.queue && S.dequeue(this, o.queue)
                        }
                        ,
                        o
                }
                ,
                S.fn.extend({
                    fadeTo: function(e, t, n, o) {
                        return this.filter(le).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, o)
                    },
                    animate: function(e, t, n, o) {
                        var i = S.isEmptyObject(e)
                            , s = S.speed(t, n, o)
                            , r = function() {
                            var t = ft(this, S.extend({}, e), s);
                            (i || G.get(this, "finish")) && t.stop(!0)
                        };
                        return r.finish = r,
                            i || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
                    },
                    stop: function(e, t, n) {
                        var o = function(e) {
                            var t = e.stop;
                            delete e.stop,
                                t(n)
                        };
                        return "string" != typeof e && (n = t,
                            t = e,
                            e = void 0),
                        t && this.queue(e || "fx", []),
                            this.each((function() {
                                    var t = !0
                                        , i = null != e && e + "queueHooks"
                                        , s = S.timers
                                        , r = G.get(this);
                                    if (i)
                                        r[i] && r[i].stop && o(r[i]);
                                    else
                                        for (i in r)
                                            r[i] && r[i].stop && lt.test(i) && o(r[i]);
                                    for (i = s.length; i--; )
                                        s[i].elem !== this || null != e && s[i].queue !== e || (s[i].anim.stop(n),
                                            t = !1,
                                            s.splice(i, 1));
                                    !t && n || S.dequeue(this, e)
                                }
                            ))
                    },
                    finish: function(e) {
                        return !1 !== e && (e = e || "fx"),
                            this.each((function() {
                                    var t, n = G.get(this), o = n[e + "queue"], i = n[e + "queueHooks"], s = S.timers, r = o ? o.length : 0;
                                    for (n.finish = !0,
                                             S.queue(this, e, []),
                                         i && i.stop && i.stop.call(this, !0),
                                             t = s.length; t--; )
                                        s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0),
                                            s.splice(t, 1));
                                    for (t = 0; t < r; t++)
                                        o[t] && o[t].finish && o[t].finish.call(this);
                                    delete n.finish
                                }
                            ))
                    }
                }),
                S.each(["toggle", "show", "hide"], (function(e, t) {
                        var n = S.fn[t];
                        S.fn[t] = function(e, o, i) {
                            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, o, i)
                        }
                    }
                )),
                S.each({
                    slideDown: ut("show"),
                    slideUp: ut("hide"),
                    slideToggle: ut("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, (function(e, t) {
                        S.fn[e] = function(e, n, o) {
                            return this.animate(t, e, n, o)
                        }
                    }
                )),
                S.timers = [],
                S.fx.tick = function() {
                    var e, t = 0, n = S.timers;
                    for (st = Date.now(); t < n.length; t++)
                        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || S.fx.stop(),
                        st = void 0
                }
                ,
                S.fx.timer = function(e) {
                    S.timers.push(e),
                        S.fx.start()
                }
                ,
                S.fx.interval = 13,
                S.fx.start = function() {
                    rt || (rt = !0,
                        ct())
                }
                ,
                S.fx.stop = function() {
                    rt = null
                }
                ,
                S.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                },
                S.fn.delay = function(e, t) {
                    return e = S.fx && S.fx.speeds[e] || e,
                        t = t || "fx",
                        this.queue(t, (function(t, o) {
                                var i = n.setTimeout(t, e);
                                o.stop = function() {
                                    n.clearTimeout(i)
                                }
                            }
                        ))
                }
                ,
                function() {
                    var e = b.createElement("input")
                        , t = b.createElement("select").appendChild(b.createElement("option"));
                    e.type = "checkbox",
                        v.checkOn = "" !== e.value,
                        v.optSelected = t.selected,
                        (e = b.createElement("input")).value = "t",
                        e.type = "radio",
                        v.radioValue = "t" === e.value
                }();
            var ht, gt = S.expr.attrHandle;
            S.fn.extend({
                attr: function(e, t) {
                    return B(this, S.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each((function() {
                            S.removeAttr(this, e)
                        }
                    ))
                }
            }),
                S.extend({
                    attr: function(e, t, n) {
                        var o, i, s = e.nodeType;
                        if (3 !== s && 8 !== s && 2 !== s)
                            return void 0 === e.getAttribute ? S.prop(e, t, n) : (1 === s && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ht : void 0)),
                                void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set"in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""),
                                    n) : i && "get"in i && null !== (o = i.get(e, t)) ? o : null == (o = S.find.attr(e, t)) ? void 0 : o)
                    },
                    attrHooks: {
                        type: {
                            set: function(e, t) {
                                if (!v.radioValue && "radio" === t && E(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t),
                                    n && (e.value = n),
                                        t
                                }
                            }
                        }
                    },
                    removeAttr: function(e, t) {
                        var n, o = 0, i = t && t.match(N);
                        if (i && 1 === e.nodeType)
                            for (; n = i[o++]; )
                                e.removeAttribute(n)
                    }
                }),
                ht = {
                    set: function(e, t, n) {
                        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n),
                            n
                    }
                },
                S.each(S.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                        var n = gt[t] || S.find.attr;
                        gt[t] = function(e, t, o) {
                            var i, s, r = t.toLowerCase();
                            return o || (s = gt[r],
                                gt[r] = i,
                                i = null != n(e, t, o) ? r : null,
                                gt[r] = s),
                                i
                        }
                    }
                ));
            var vt = /^(?:input|select|textarea|button)$/i
                , mt = /^(?:a|area)$/i;
            function yt(e) {
                return (e.match(N) || []).join(" ")
            }
            function bt(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }
            function xt(e) {
                return Array.isArray(e) ? e : "string" == typeof e && e.match(N) || []
            }
            S.fn.extend({
                prop: function(e, t) {
                    return B(this, S.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each((function() {
                            delete this[S.propFix[e] || e]
                        }
                    ))
                }
            }),
                S.extend({
                    prop: function(e, t, n) {
                        var o, i, s = e.nodeType;
                        if (3 !== s && 8 !== s && 2 !== s)
                            return 1 === s && S.isXMLDoc(e) || (t = S.propFix[t] || t,
                                i = S.propHooks[t]),
                                void 0 !== n ? i && "set"in i && void 0 !== (o = i.set(e, n, t)) ? o : e[t] = n : i && "get"in i && null !== (o = i.get(e, t)) ? o : e[t]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(e) {
                                var t = S.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : vt.test(e.nodeName) || mt.test(e.nodeName) && e.href ? 0 : -1
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                }),
            v.optSelected || (S.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex,
                        null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex)
                }
            }),
                S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                        S.propFix[this.toLowerCase()] = this
                    }
                )),
                S.fn.extend({
                    addClass: function(e) {
                        var t, n, o, i, s, r, a, l = 0;
                        if (m(e))
                            return this.each((function(t) {
                                    S(this).addClass(e.call(this, t, bt(this)))
                                }
                            ));
                        if ((t = xt(e)).length)
                            for (; n = this[l++]; )
                                if (i = bt(n),
                                    o = 1 === n.nodeType && " " + yt(i) + " ") {
                                    for (r = 0; s = t[r++]; )
                                        o.indexOf(" " + s + " ") < 0 && (o += s + " ");
                                    i !== (a = yt(o)) && n.setAttribute("class", a)
                                }
                        return this
                    },
                    removeClass: function(e) {
                        var t, n, o, i, s, r, a, l = 0;
                        if (m(e))
                            return this.each((function(t) {
                                    S(this).removeClass(e.call(this, t, bt(this)))
                                }
                            ));
                        if (!arguments.length)
                            return this.attr("class", "");
                        if ((t = xt(e)).length)
                            for (; n = this[l++]; )
                                if (i = bt(n),
                                    o = 1 === n.nodeType && " " + yt(i) + " ") {
                                    for (r = 0; s = t[r++]; )
                                        for (; o.indexOf(" " + s + " ") > -1; )
                                            o = o.replace(" " + s + " ", " ");
                                    i !== (a = yt(o)) && n.setAttribute("class", a)
                                }
                        return this
                    },
                    toggleClass: function(e, t) {
                        var n = typeof e
                            , o = "string" === n || Array.isArray(e);
                        return "boolean" == typeof t && o ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each((function(n) {
                                S(this).toggleClass(e.call(this, n, bt(this), t), t)
                            }
                        )) : this.each((function() {
                                var t, i, s, r;
                                if (o)
                                    for (i = 0,
                                             s = S(this),
                                             r = xt(e); t = r[i++]; )
                                        s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
                                else
                                    void 0 !== e && "boolean" !== n || ((t = bt(this)) && G.set(this, "__className__", t),
                                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : G.get(this, "__className__") || ""))
                            }
                        ))
                    },
                    hasClass: function(e) {
                        var t, n, o = 0;
                        for (t = " " + e + " "; n = this[o++]; )
                            if (1 === n.nodeType && (" " + yt(bt(n)) + " ").indexOf(t) > -1)
                                return !0;
                        return !1
                    }
                });
            var wt = /\r/g;
            S.fn.extend({
                val: function(e) {
                    var t, n, o, i = this[0];
                    return arguments.length ? (o = m(e),
                        this.each((function(n) {
                                var i;
                                1 === this.nodeType && (null == (i = o ? e.call(this, n, S(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = S.map(i, (function(e) {
                                        return null == e ? "" : e + ""
                                    }
                                ))),
                                (t = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                            }
                        ))) : i ? (t = S.valHooks[i.type] || S.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(wt, "") : null == n ? "" : n : void 0
                }
            }),
                S.extend({
                    valHooks: {
                        option: {
                            get: function(e) {
                                var t = S.find.attr(e, "value");
                                return null != t ? t : yt(S.text(e))
                            }
                        },
                        select: {
                            get: function(e) {
                                var t, n, o, i = e.options, s = e.selectedIndex, r = "select-one" === e.type, a = r ? null : [], l = r ? s + 1 : i.length;
                                for (o = s < 0 ? l : r ? s : 0; o < l; o++)
                                    if (((n = i[o]).selected || o === s) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                                        if (t = S(n).val(),
                                            r)
                                            return t;
                                        a.push(t)
                                    }
                                return a
                            },
                            set: function(e, t) {
                                for (var n, o, i = e.options, s = S.makeArray(t), r = i.length; r--; )
                                    ((o = i[r]).selected = S.inArray(S.valHooks.option.get(o), s) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1),
                                    s
                            }
                        }
                    }
                }),
                S.each(["radio", "checkbox"], (function() {
                        S.valHooks[this] = {
                            set: function(e, t) {
                                if (Array.isArray(t))
                                    return e.checked = S.inArray(S(e).val(), t) > -1
                            }
                        },
                        v.checkOn || (S.valHooks[this].get = function(e) {
                                return null === e.getAttribute("value") ? "on" : e.value
                            }
                        )
                    }
                )),
                v.focusin = "onfocusin"in n;
            var Tt = /^(?:focusinfocus|focusoutblur)$/
                , St = function(e) {
                e.stopPropagation()
            };
            S.extend(S.event, {
                trigger: function(e, t, o, i) {
                    var s, r, a, l, c, d, u, p, h = [o || b], g = f.call(e, "type") ? e.type : e, v = f.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (r = p = a = o = o || b,
                    3 !== o.nodeType && 8 !== o.nodeType && !Tt.test(g + S.event.triggered) && (g.indexOf(".") > -1 && (v = g.split("."),
                        g = v.shift(),
                        v.sort()),
                        c = g.indexOf(":") < 0 && "on" + g,
                        (e = e[S.expando] ? e : new S.Event(g,"object" == typeof e && e)).isTrigger = i ? 2 : 3,
                        e.namespace = v.join("."),
                        e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                        e.result = void 0,
                    e.target || (e.target = o),
                        t = null == t ? [e] : S.makeArray(t, [e]),
                        u = S.event.special[g] || {},
                    i || !u.trigger || !1 !== u.trigger.apply(o, t))) {
                        if (!i && !u.noBubble && !y(o)) {
                            for (l = u.delegateType || g,
                                 Tt.test(l + g) || (r = r.parentNode); r; r = r.parentNode)
                                h.push(r),
                                    a = r;
                            a === (o.ownerDocument || b) && h.push(a.defaultView || a.parentWindow || n)
                        }
                        for (s = 0; (r = h[s++]) && !e.isPropagationStopped(); )
                            p = r,
                                e.type = s > 1 ? l : u.bindType || g,
                            (d = (G.get(r, "events") || Object.create(null))[e.type] && G.get(r, "handle")) && d.apply(r, t),
                            (d = c && r[c]) && d.apply && Z(r) && (e.result = d.apply(r, t),
                            !1 === e.result && e.preventDefault());
                        return e.type = g,
                        i || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(h.pop(), t) || !Z(o) || c && m(o[g]) && !y(o) && ((a = o[c]) && (o[c] = null),
                            S.event.triggered = g,
                        e.isPropagationStopped() && p.addEventListener(g, St),
                            o[g](),
                        e.isPropagationStopped() && p.removeEventListener(g, St),
                            S.event.triggered = void 0,
                        a && (o[c] = a)),
                            e.result
                    }
                },
                simulate: function(e, t, n) {
                    var o = S.extend(new S.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    S.event.trigger(o, null, t)
                }
            }),
                S.fn.extend({
                    trigger: function(e, t) {
                        return this.each((function() {
                                S.event.trigger(e, t, this)
                            }
                        ))
                    },
                    triggerHandler: function(e, t) {
                        var n = this[0];
                        if (n)
                            return S.event.trigger(e, t, n, !0)
                    }
                }),
            v.focusin || S.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(e, t) {
                    var n = function(e) {
                        S.event.simulate(t, e.target, S.event.fix(e))
                    };
                    S.event.special[t] = {
                        setup: function() {
                            var o = this.ownerDocument || this.document || this
                                , i = G.access(o, t);
                            i || o.addEventListener(e, n, !0),
                                G.access(o, t, (i || 0) + 1)
                        },
                        teardown: function() {
                            var o = this.ownerDocument || this.document || this
                                , i = G.access(o, t) - 1;
                            i ? G.access(o, t, i) : (o.removeEventListener(e, n, !0),
                                G.remove(o, t))
                        }
                    }
                }
            ));
            var kt = n.location
                , Ct = {
                guid: Date.now()
            }
                , $t = /\?/;
            S.parseXML = function(e) {
                var t;
                if (!e || "string" != typeof e)
                    return null;
                try {
                    t = (new n.DOMParser).parseFromString(e, "text/xml")
                } catch (e) {
                    t = void 0
                }
                return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e),
                    t
            }
            ;
            var At = /\[\]$/
                , Pt = /\r?\n/g
                , Et = /^(?:submit|button|image|reset|file)$/i
                , Lt = /^(?:input|select|textarea|keygen)/i;
            function Dt(e, t, n, o) {
                var i;
                if (Array.isArray(t))
                    S.each(t, (function(t, i) {
                            n || At.test(e) ? o(e, i) : Dt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, o)
                        }
                    ));
                else if (n || "object" !== T(t))
                    o(e, t);
                else
                    for (i in t)
                        Dt(e + "[" + i + "]", t[i], n, o)
            }
            S.param = function(e, t) {
                var n, o = [], i = function(e, t) {
                    var n = m(t) ? t() : t;
                    o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
                if (null == e)
                    return "";
                if (Array.isArray(e) || e.jquery && !S.isPlainObject(e))
                    S.each(e, (function() {
                            i(this.name, this.value)
                        }
                    ));
                else
                    for (n in e)
                        Dt(n, e[n], t, i);
                return o.join("&")
            }
                ,
                S.fn.extend({
                    serialize: function() {
                        return S.param(this.serializeArray())
                    },
                    serializeArray: function() {
                        return this.map((function() {
                                var e = S.prop(this, "elements");
                                return e ? S.makeArray(e) : this
                            }
                        )).filter((function() {
                                var e = this.type;
                                return this.name && !S(this).is(":disabled") && Lt.test(this.nodeName) && !Et.test(e) && (this.checked || !ge.test(e))
                            }
                        )).map((function(e, t) {
                                var n = S(this).val();
                                return null == n ? null : Array.isArray(n) ? S.map(n, (function(e) {
                                        return {
                                            name: t.name,
                                            value: e.replace(Pt, "\r\n")
                                        }
                                    }
                                )) : {
                                    name: t.name,
                                    value: n.replace(Pt, "\r\n")
                                }
                            }
                        )).get()
                    }
                });
            var jt = /%20/g
                , Ht = /#.*$/
                , Mt = /([?&])_=[^&]*/
                , Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm
                , It = /^(?:GET|HEAD)$/
                , Nt = /^\/\//
                , qt = {}
                , zt = {}
                , Ft = "*/".concat("*")
                , Rt = b.createElement("a");
            function Wt(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t,
                        t = "*");
                    var o, i = 0, s = t.toLowerCase().match(N) || [];
                    if (m(n))
                        for (; o = s[i++]; )
                            "+" === o[0] ? (o = o.slice(1) || "*",
                                (e[o] = e[o] || []).unshift(n)) : (e[o] = e[o] || []).push(n)
                }
            }
            function _t(e, t, n, o) {
                var i = {}
                    , s = e === zt;
                function r(a) {
                    var l;
                    return i[a] = !0,
                        S.each(e[a] || [], (function(e, a) {
                                var c = a(t, n, o);
                                return "string" != typeof c || s || i[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
                                    r(c),
                                    !1)
                            }
                        )),
                        l
                }
                return r(t.dataTypes[0]) || !i["*"] && r("*")
            }
            function Bt(e, t) {
                var n, o, i = S.ajaxSettings.flatOptions || {};
                for (n in t)
                    void 0 !== t[n] && ((i[n] ? e : o || (o = {}))[n] = t[n]);
                return o && S.extend(!0, e, o),
                    e
            }
            Rt.href = kt.href,
                S.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: kt.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": Ft,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": JSON.parse,
                            "text xml": S.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function(e, t) {
                        return t ? Bt(Bt(e, S.ajaxSettings), t) : Bt(S.ajaxSettings, e)
                    },
                    ajaxPrefilter: Wt(qt),
                    ajaxTransport: Wt(zt),
                    ajax: function(e, t) {
                        "object" == typeof e && (t = e,
                            e = void 0),
                            t = t || {};
                        var o, i, s, r, a, l, c, d, u, p, f = S.ajaxSetup({}, t), h = f.context || f, g = f.context && (h.nodeType || h.jquery) ? S(h) : S.event, v = S.Deferred(), m = S.Callbacks("once memory"), y = f.statusCode || {}, x = {}, w = {}, T = "canceled", k = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (c) {
                                    if (!r)
                                        for (r = {}; t = Ot.exec(s); )
                                            r[t[1].toLowerCase() + " "] = (r[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                    t = r[e.toLowerCase() + " "]
                                }
                                return null == t ? null : t.join(", ")
                            },
                            getAllResponseHeaders: function() {
                                return c ? s : null
                            },
                            setRequestHeader: function(e, t) {
                                return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e,
                                    x[e] = t),
                                    this
                            },
                            overrideMimeType: function(e) {
                                return null == c && (f.mimeType = e),
                                    this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (c)
                                        k.always(e[k.status]);
                                    else
                                        for (t in e)
                                            y[t] = [y[t], e[t]];
                                return this
                            },
                            abort: function(e) {
                                var t = e || T;
                                return o && o.abort(t),
                                    C(0, t),
                                    this
                            }
                        };
                        if (v.promise(k),
                            f.url = ((e || f.url || kt.href) + "").replace(Nt, kt.protocol + "//"),
                            f.type = t.method || t.type || f.method || f.type,
                            f.dataTypes = (f.dataType || "*").toLowerCase().match(N) || [""],
                        null == f.crossDomain) {
                            l = b.createElement("a");
                            try {
                                l.href = f.url,
                                    l.href = l.href,
                                    f.crossDomain = Rt.protocol + "//" + Rt.host != l.protocol + "//" + l.host
                            } catch (e) {
                                f.crossDomain = !0
                            }
                        }
                        if (f.data && f.processData && "string" != typeof f.data && (f.data = S.param(f.data, f.traditional)),
                            _t(qt, f, t, k),
                            c)
                            return k;
                        for (u in (d = S.event && f.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
                            f.type = f.type.toUpperCase(),
                            f.hasContent = !It.test(f.type),
                            i = f.url.replace(Ht, ""),
                            f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(jt, "+")) : (p = f.url.slice(i.length),
                            f.data && (f.processData || "string" == typeof f.data) && (i += ($t.test(i) ? "&" : "?") + f.data,
                                delete f.data),
                            !1 === f.cache && (i = i.replace(Mt, "$1"),
                                p = ($t.test(i) ? "&" : "?") + "_=" + Ct.guid++ + p),
                                f.url = i + p),
                        f.ifModified && (S.lastModified[i] && k.setRequestHeader("If-Modified-Since", S.lastModified[i]),
                        S.etag[i] && k.setRequestHeader("If-None-Match", S.etag[i])),
                        (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && k.setRequestHeader("Content-Type", f.contentType),
                            k.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : f.accepts["*"]),
                            f.headers)
                            k.setRequestHeader(u, f.headers[u]);
                        if (f.beforeSend && (!1 === f.beforeSend.call(h, k, f) || c))
                            return k.abort();
                        if (T = "abort",
                            m.add(f.complete),
                            k.done(f.success),
                            k.fail(f.error),
                            o = _t(zt, f, t, k)) {
                            if (k.readyState = 1,
                            d && g.trigger("ajaxSend", [k, f]),
                                c)
                                return k;
                            f.async && f.timeout > 0 && (a = n.setTimeout((function() {
                                    k.abort("timeout")
                                }
                            ), f.timeout));
                            try {
                                c = !1,
                                    o.send(x, C)
                            } catch (e) {
                                if (c)
                                    throw e;
                                C(-1, e)
                            }
                        } else
                            C(-1, "No Transport");
                        function C(e, t, r, l) {
                            var u, p, b, x, w, T = t;
                            c || (c = !0,
                            a && n.clearTimeout(a),
                                o = void 0,
                                s = l || "",
                                k.readyState = e > 0 ? 4 : 0,
                                u = e >= 200 && e < 300 || 304 === e,
                            r && (x = function(e, t, n) {
                                for (var o, i, s, r, a = e.contents, l = e.dataTypes; "*" === l[0]; )
                                    l.shift(),
                                    void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (o)
                                    for (i in a)
                                        if (a[i] && a[i].test(o)) {
                                            l.unshift(i);
                                            break
                                        }
                                if (l[0]in n)
                                    s = l[0];
                                else {
                                    for (i in n) {
                                        if (!l[0] || e.converters[i + " " + l[0]]) {
                                            s = i;
                                            break
                                        }
                                        r || (r = i)
                                    }
                                    s = s || r
                                }
                                if (s)
                                    return s !== l[0] && l.unshift(s),
                                        n[s]
                            }(f, k, r)),
                            !u && S.inArray("script", f.dataTypes) > -1 && (f.converters["text script"] = function() {}
                            ),
                                x = function(e, t, n, o) {
                                    var i, s, r, a, l, c = {}, d = e.dataTypes.slice();
                                    if (d[1])
                                        for (r in e.converters)
                                            c[r.toLowerCase()] = e.converters[r];
                                    for (s = d.shift(); s; )
                                        if (e.responseFields[s] && (n[e.responseFields[s]] = t),
                                        !l && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                                            l = s,
                                            s = d.shift())
                                            if ("*" === s)
                                                s = l;
                                            else if ("*" !== l && l !== s) {
                                                if (!(r = c[l + " " + s] || c["* " + s]))
                                                    for (i in c)
                                                        if ((a = i.split(" "))[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                                                            !0 === r ? r = c[i] : !0 !== c[i] && (s = a[0],
                                                                d.unshift(a[1]));
                                                            break
                                                        }
                                                if (!0 !== r)
                                                    if (r && e.throws)
                                                        t = r(t);
                                                    else
                                                        try {
                                                            t = r(t)
                                                        } catch (e) {
                                                            return {
                                                                state: "parsererror",
                                                                error: r ? e : "No conversion from " + l + " to " + s
                                                            }
                                                        }
                                            }
                                    return {
                                        state: "success",
                                        data: t
                                    }
                                }(f, x, k, u),
                                u ? (f.ifModified && ((w = k.getResponseHeader("Last-Modified")) && (S.lastModified[i] = w),
                                (w = k.getResponseHeader("etag")) && (S.etag[i] = w)),
                                    204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = x.state,
                                        p = x.data,
                                        u = !(b = x.error))) : (b = T,
                                !e && T || (T = "error",
                                e < 0 && (e = 0))),
                                k.status = e,
                                k.statusText = (t || T) + "",
                                u ? v.resolveWith(h, [p, T, k]) : v.rejectWith(h, [k, T, b]),
                                k.statusCode(y),
                                y = void 0,
                            d && g.trigger(u ? "ajaxSuccess" : "ajaxError", [k, f, u ? p : b]),
                                m.fireWith(h, [k, T]),
                            d && (g.trigger("ajaxComplete", [k, f]),
                            --S.active || S.event.trigger("ajaxStop")))
                        }
                        return k
                    },
                    getJSON: function(e, t, n) {
                        return S.get(e, t, n, "json")
                    },
                    getScript: function(e, t) {
                        return S.get(e, void 0, t, "script")
                    }
                }),
                S.each(["get", "post"], (function(e, t) {
                        S[t] = function(e, n, o, i) {
                            return m(n) && (i = i || o,
                                o = n,
                                n = void 0),
                                S.ajax(S.extend({
                                    url: e,
                                    type: t,
                                    dataType: i,
                                    data: n,
                                    success: o
                                }, S.isPlainObject(e) && e))
                        }
                    }
                )),
                S.ajaxPrefilter((function(e) {
                        var t;
                        for (t in e.headers)
                            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
                    }
                )),
                S._evalUrl = function(e, t, n) {
                    return S.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: {
                            "text script": function() {}
                        },
                        dataFilter: function(e) {
                            S.globalEval(e, t, n)
                        }
                    })
                }
                ,
                S.fn.extend({
                    wrapAll: function(e) {
                        var t;
                        return this[0] && (m(e) && (e = e.call(this[0])),
                            t = S(e, this[0].ownerDocument).eq(0).clone(!0),
                        this[0].parentNode && t.insertBefore(this[0]),
                            t.map((function() {
                                    for (var e = this; e.firstElementChild; )
                                        e = e.firstElementChild;
                                    return e
                                }
                            )).append(this)),
                            this
                    },
                    wrapInner: function(e) {
                        return m(e) ? this.each((function(t) {
                                S(this).wrapInner(e.call(this, t))
                            }
                        )) : this.each((function() {
                                var t = S(this)
                                    , n = t.contents();
                                n.length ? n.wrapAll(e) : t.append(e)
                            }
                        ))
                    },
                    wrap: function(e) {
                        var t = m(e);
                        return this.each((function(n) {
                                S(this).wrapAll(t ? e.call(this, n) : e)
                            }
                        ))
                    },
                    unwrap: function(e) {
                        return this.parent(e).not("body").each((function() {
                                S(this).replaceWith(this.childNodes)
                            }
                        )),
                            this
                    }
                }),
                S.expr.pseudos.hidden = function(e) {
                    return !S.expr.pseudos.visible(e)
                }
                ,
                S.expr.pseudos.visible = function(e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                }
                ,
                S.ajaxSettings.xhr = function() {
                    try {
                        return new n.XMLHttpRequest
                    } catch (e) {}
                }
            ;
            var Xt = {
                0: 200,
                1223: 204
            }
                , Yt = S.ajaxSettings.xhr();
            v.cors = !!Yt && "withCredentials"in Yt,
                v.ajax = Yt = !!Yt,
                S.ajaxTransport((function(e) {
                        var t, o;
                        if (v.cors || Yt && !e.crossDomain)
                            return {
                                send: function(i, s) {
                                    var r, a = e.xhr();
                                    if (a.open(e.type, e.url, e.async, e.username, e.password),
                                        e.xhrFields)
                                        for (r in e.xhrFields)
                                            a[r] = e.xhrFields[r];
                                    for (r in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                                    e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"),
                                        i)
                                        a.setRequestHeader(r, i[r]);
                                    t = function(e) {
                                        return function() {
                                            t && (t = o = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null,
                                                "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Xt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                                    binary: a.response
                                                } : {
                                                    text: a.responseText
                                                }, a.getAllResponseHeaders()))
                                        }
                                    }
                                        ,
                                        a.onload = t(),
                                        o = a.onerror = a.ontimeout = t("error"),
                                        void 0 !== a.onabort ? a.onabort = o : a.onreadystatechange = function() {
                                            4 === a.readyState && n.setTimeout((function() {
                                                    t && o()
                                                }
                                            ))
                                        }
                                        ,
                                        t = t("abort");
                                    try {
                                        a.send(e.hasContent && e.data || null)
                                    } catch (e) {
                                        if (t)
                                            throw e
                                    }
                                },
                                abort: function() {
                                    t && t()
                                }
                            }
                    }
                )),
                S.ajaxPrefilter((function(e) {
                        e.crossDomain && (e.contents.script = !1)
                    }
                )),
                S.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function(e) {
                            return S.globalEval(e),
                                e
                        }
                    }
                }),
                S.ajaxPrefilter("script", (function(e) {
                        void 0 === e.cache && (e.cache = !1),
                        e.crossDomain && (e.type = "GET")
                    }
                )),
                S.ajaxTransport("script", (function(e) {
                        var t, n;
                        if (e.crossDomain || e.scriptAttrs)
                            return {
                                send: function(o, i) {
                                    t = S("<script>").attr(e.scriptAttrs || {}).prop({
                                        charset: e.scriptCharset,
                                        src: e.url
                                    }).on("load error", n = function(e) {
                                            t.remove(),
                                                n = null,
                                            e && i("error" === e.type ? 404 : 200, e.type)
                                        }
                                    ),
                                        b.head.appendChild(t[0])
                                },
                                abort: function() {
                                    n && n()
                                }
                            }
                    }
                ));
            var Ut, Vt = [], Zt = /(=)\?(?=&|$)|\?\?/;
            S.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Vt.pop() || S.expando + "_" + Ct.guid++;
                    return this[e] = !0,
                        e
                }
            }),
                S.ajaxPrefilter("json jsonp", (function(e, t, o) {
                        var i, s, r, a = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
                        if (a || "jsonp" === e.dataTypes[0])
                            return i = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                                a ? e[a] = e[a].replace(Zt, "$1" + i) : !1 !== e.jsonp && (e.url += ($t.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                                e.converters["script json"] = function() {
                                    return r || S.error(i + " was not called"),
                                        r[0]
                                }
                                ,
                                e.dataTypes[0] = "json",
                                s = n[i],
                                n[i] = function() {
                                    r = arguments
                                }
                                ,
                                o.always((function() {
                                        void 0 === s ? S(n).removeProp(i) : n[i] = s,
                                        e[i] && (e.jsonpCallback = t.jsonpCallback,
                                            Vt.push(i)),
                                        r && m(s) && s(r[0]),
                                            r = s = void 0
                                    }
                                )),
                                "script"
                    }
                )),
                v.createHTMLDocument = ((Ut = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
                2 === Ut.childNodes.length),
                S.parseHTML = function(e, t, n) {
                    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
                        t = !1),
                    t || (v.createHTMLDocument ? ((o = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href,
                        t.head.appendChild(o)) : t = b),
                        s = !n && [],
                        (i = L.exec(e)) ? [t.createElement(i[1])] : (i = Te([e], t, s),
                        s && s.length && S(s).remove(),
                            S.merge([], i.childNodes)));
                    var o, i, s
                }
                ,
                S.fn.load = function(e, t, n) {
                    var o, i, s, r = this, a = e.indexOf(" ");
                    return a > -1 && (o = yt(e.slice(a)),
                        e = e.slice(0, a)),
                        m(t) ? (n = t,
                            t = void 0) : t && "object" == typeof t && (i = "POST"),
                    r.length > 0 && S.ajax({
                        url: e,
                        type: i || "GET",
                        dataType: "html",
                        data: t
                    }).done((function(e) {
                            s = arguments,
                                r.html(o ? S("<div>").append(S.parseHTML(e)).find(o) : e)
                        }
                    )).always(n && function(e, t) {
                        r.each((function() {
                                n.apply(this, s || [e.responseText, t, e])
                            }
                        ))
                    }
                    ),
                        this
                }
                ,
                S.expr.pseudos.animated = function(e) {
                    return S.grep(S.timers, (function(t) {
                            return e === t.elem
                        }
                    )).length
                }
                ,
                S.offset = {
                    setOffset: function(e, t, n) {
                        var o, i, s, r, a, l, c = S.css(e, "position"), d = S(e), u = {};
                        "static" === c && (e.style.position = "relative"),
                            a = d.offset(),
                            s = S.css(e, "top"),
                            l = S.css(e, "left"),
                            ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1 ? (r = (o = d.position()).top,
                                i = o.left) : (r = parseFloat(s) || 0,
                                i = parseFloat(l) || 0),
                        m(t) && (t = t.call(e, n, S.extend({}, a))),
                        null != t.top && (u.top = t.top - a.top + r),
                        null != t.left && (u.left = t.left - a.left + i),
                            "using"in t ? t.using.call(e, u) : ("number" == typeof u.top && (u.top += "px"),
                            "number" == typeof u.left && (u.left += "px"),
                                d.css(u))
                    }
                },
                S.fn.extend({
                    offset: function(e) {
                        if (arguments.length)
                            return void 0 === e ? this : this.each((function(t) {
                                    S.offset.setOffset(this, e, t)
                                }
                            ));
                        var t, n, o = this[0];
                        return o ? o.getClientRects().length ? (t = o.getBoundingClientRect(),
                            n = o.ownerDocument.defaultView,
                            {
                                top: t.top + n.pageYOffset,
                                left: t.left + n.pageXOffset
                            }) : {
                            top: 0,
                            left: 0
                        } : void 0
                    },
                    position: function() {
                        if (this[0]) {
                            var e, t, n, o = this[0], i = {
                                top: 0,
                                left: 0
                            };
                            if ("fixed" === S.css(o, "position"))
                                t = o.getBoundingClientRect();
                            else {
                                for (t = this.offset(),
                                         n = o.ownerDocument,
                                         e = o.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position"); )
                                    e = e.parentNode;
                                e && e !== o && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0),
                                    i.left += S.css(e, "borderLeftWidth", !0))
                            }
                            return {
                                top: t.top - i.top - S.css(o, "marginTop", !0),
                                left: t.left - i.left - S.css(o, "marginLeft", !0)
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map((function() {
                                for (var e = this.offsetParent; e && "static" === S.css(e, "position"); )
                                    e = e.offsetParent;
                                return e || se
                            }
                        ))
                    }
                }),
                S.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, (function(e, t) {
                        var n = "pageYOffset" === t;
                        S.fn[e] = function(o) {
                            return B(this, (function(e, o, i) {
                                    var s;
                                    if (y(e) ? s = e : 9 === e.nodeType && (s = e.defaultView),
                                    void 0 === i)
                                        return s ? s[t] : e[o];
                                    s ? s.scrollTo(n ? s.pageXOffset : i, n ? i : s.pageYOffset) : e[o] = i
                                }
                            ), e, o, arguments.length)
                        }
                    }
                )),
                S.each(["top", "left"], (function(e, t) {
                        S.cssHooks[t] = Ye(v.pixelPosition, (function(e, n) {
                                if (n)
                                    return n = Xe(e, t),
                                        Re.test(n) ? S(e).position()[t] + "px" : n
                            }
                        ))
                    }
                )),
                S.each({
                    Height: "height",
                    Width: "width"
                }, (function(e, t) {
                        S.each({
                            padding: "inner" + e,
                            content: t,
                            "": "outer" + e
                        }, (function(n, o) {
                                S.fn[o] = function(i, s) {
                                    var r = arguments.length && (n || "boolean" != typeof i)
                                        , a = n || (!0 === i || !0 === s ? "margin" : "border");
                                    return B(this, (function(t, n, i) {
                                            var s;
                                            return y(t) ? 0 === o.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement,
                                                Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === i ? S.css(t, n, a) : S.style(t, n, i, a)
                                        }
                                    ), t, r ? i : void 0, r)
                                }
                            }
                        ))
                    }
                )),
                S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
                        S.fn[t] = function(e) {
                            return this.on(t, e)
                        }
                    }
                )),
                S.fn.extend({
                    bind: function(e, t, n) {
                        return this.on(e, null, t, n)
                    },
                    unbind: function(e, t) {
                        return this.off(e, null, t)
                    },
                    delegate: function(e, t, n, o) {
                        return this.on(t, e, n, o)
                    },
                    undelegate: function(e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                    },
                    hover: function(e, t) {
                        return this.mouseenter(e).mouseleave(t || e)
                    }
                }),
                S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                        S.fn[t] = function(e, n) {
                            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                        }
                    }
                ));
            var Qt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            S.proxy = function(e, t) {
                var n, o, i;
                if ("string" == typeof t && (n = e[t],
                    t = e,
                    e = n),
                    m(e))
                    return o = a.call(arguments, 2),
                        (i = function() {
                                return e.apply(t || this, o.concat(a.call(arguments)))
                            }
                        ).guid = e.guid = e.guid || S.guid++,
                        i
            }
                ,
                S.holdReady = function(e) {
                    e ? S.readyWait++ : S.ready(!0)
                }
                ,
                S.isArray = Array.isArray,
                S.parseJSON = JSON.parse,
                S.nodeName = E,
                S.isFunction = m,
                S.isWindow = y,
                S.camelCase = V,
                S.type = T,
                S.now = Date.now,
                S.isNumeric = function(e) {
                    var t = S.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                }
                ,
                S.trim = function(e) {
                    return null == e ? "" : (e + "").replace(Qt, "")
                }
                ,
            void 0 === (o = function() {
                return S
            }
                .apply(t, [])) || (e.exports = o);
            var Gt = n.jQuery
                , Kt = n.$;
            return S.noConflict = function(e) {
                return n.$ === S && (n.$ = Kt),
                e && n.jQuery === S && (n.jQuery = Gt),
                    S
            }
                ,
            void 0 === i && (n.jQuery = n.$ = S),
                S
        }
    ))
}
    , function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(0)
            , i = n.n(o);
        window.jQuery = i.a,
            window.$ = i.a,
            n(2),
            n(3),
            n(4),
            document.addEventListener("DOMContentLoaded", (function() {
                    i.a.fancybox.defaults.hideScrollbar = !0,
                        i.a.fancybox.defaults.autoFocus = !1,
                        i.a.fancybox.defaults.backFocus = !1,
                        i.a.fancybox.defaults.trapFocus = !1,
                        i.a.fancybox.defaults.touch = !1,
                        i()(".promo__slider").slick({
                            dots: !1,
                            fade: !0,
                            arrows: !0,
                            infinite: !0,
                            swipe: !0,
                            draggable: !0,
                            speed: 300,
                            slidesToShow: 1,
                            asNavFor: ".promo__product",
                            prevArrow: '<button type="button" class="slider-arrow slider-arrow--prev"></button>',
                            nextArrow: '<button type="button" class="slider-arrow slider-arrow--next"></button>'
                        }),
                        i()(".promo__product").slick({
                            dots: !1,
                            fade: !0,
                            arrows: !1,
                            infinite: !0,
                            swipe: !1,
                            draggable: !1,
                            speed: 300,
                            slidesToShow: 1,
                            asNavFor: ".promo__slider"
                        }),
                        i()(".distributors__slider").slick({
                            dots: !1,
                            fade: !1,
                            arrows: !0,
                            infinite: !0,
                            swipe: !0,
                            draggable: !0,
                            speed: 300,
                            slidesToShow: 6,
                            variableWidth: !0,
                            appendArrows: ".distributors__nav",
                            prevArrow: '<button type="button" class="slider-arrow slider-arrow--prev"><svg><use xlink:href="images/svg/sprite.svg#slider-arrow2"></use></svg></button>',
                            nextArrow: '<button type="button" class="slider-arrow slider-arrow--next"><svg><use xlink:href="images/svg/sprite.svg#slider-arrow2"></use></svg></button>'
                        }),
                    i()(window).width() <= 992 && i()(".steps__slider").slick({
                        dots: !1,
                        fade: !1,
                        arrows: !0,
                        infinite: !0,
                        swipe: !0,
                        draggable: !0,
                        speed: 300,
                        slidesToShow: 1,
                        variableWidth: !0,
                        appendArrows: ".steps__nav",
                        prevArrow: '<button type="button" class="slider-arrow slider-arrow--prev"><svg><use xlink:href="images/svg/sprite.svg#slider-arrow2"></use></svg></button>',
                        nextArrow: '<button type="button" class="slider-arrow slider-arrow--next"><svg><use xlink:href="images/svg/sprite.svg#slider-arrow2"></use></svg></button>'
                    }),
                        i()("input[type='tel']").mask("+7 (999) 999-99-99"),
                        i()(".js-modal").click((function(e) {
                                e.preventDefault(),
                                    i.a.fancybox.open(modal)
                            }
                        )),
                        i()(".js-modal-sale").click((function(e) {
                                e.preventDefault(),
                                    i.a.fancybox.open(modalsale)
                            }
                        )),
                        i()(".js-modal-order").click((function(e) {
                                e.preventDefault();
                                var t = i()(this).data("product");
                                i()(".input-product").val(t),
                                    i.a.fancybox.open(order)
                            }
                        )),
                        i()(".form").submit((function() {
                                var e = i()(this);
                                return i.a.ajax({
                                    type: "POST",
                                    url: "mail.php",
                                    data: e.serialize()
                                }).done((function() {
                                        i.a.fancybox.close(!0),
                                            i.a.fancybox.open(thanks),
                                            setTimeout((function() {
                                                    e.trigger("reset")
                                                }
                                            ), 1e3)
                                    }
                                )),
                                    !1
                            }
                        )),
                        i()(".menu-btn").click((function() {
                                i()(".header").addClass("header--active")
                            }
                        )),
                        i()(".menu-close").click((function() {
                                i()(".header").toggleClass("header--active")
                            }
                        )),
                        i()(".js-scroll").click((function(e) {
                                e.preventDefault(),
                                    i()(".header").removeClass("header--active");
                                var t = i()(this).attr("href")
                                    , n = i()(t).offset().top;
                                i()("body,html").animate({
                                    scrollTop: n
                                }, 1500)
                            }
                        )),
                        ymaps.ready((function() {
                                var e = new ymaps.Map("map",{
                                    center: [43.267643, 76.926106],
                                    zoom: 18,
                                    controls: ["smallMapDefaultSet"]
                                })
                                    , t = new ymaps.Placemark([43.267643, 76.926106],{
                                    hintContent: "улица Райымбека 162А",
                                    balloonContent: "улица Райымбека 162А"
                                },{
                                    iconColor: "#DF0D00"
                                })
                                    , n = new ymaps.Placemark([51.141573, 71.425605],{
                                    hintContent: "Нур-Султан",
                                    balloonContent: "Нур-Султан"
                                },{
                                    iconColor: "#DF0D00"
                                })
                                    , o = new ymaps.Placemark([47.085218, 51.905897],{
                                    hintContent: "Атырау",
                                    balloonContent: "Атырау"
                                },{
                                    iconColor: "#DF0D00"
                                });
                                e.geoObjects.add(t).add(n).add(o),
                                    i()(".contacts__tab").click((function(t) {
                                            t.preventDefault();
                                            var n = i()(this).data("coord-x")
                                                , o = i()(this).data("coord-y")
                                                , s = i()(this).attr("href");
                                            i()(".contacts__tab").removeClass("contacts__tab--active"),
                                                i()(this).addClass("contacts__tab--active"),
                                                i()(".contacts__item").removeClass("contacts__item--active"),
                                                i()(s).addClass("contacts__item--active"),
                                                e.panTo([n, o], {
                                                    flying: 1
                                                })
                                        }
                                    ))
                            }
                        ))
                }
            ))
    }
    , function(e, t) {
        !function(e, t, n, o) {
            "use strict";
            function i(e, t) {
                var o, i, s, r = [], a = 0;
                e && e.isDefaultPrevented() || (e.preventDefault(),
                    t = t || {},
                e && e.data && (t = f(e.data.options, t)),
                    o = t.$target || n(e.currentTarget).trigger("blur"),
                (s = n.fancybox.getInstance()) && s.$trigger && s.$trigger.is(o) || (t.selector ? r = n(t.selector) : (i = o.attr("data-fancybox") || "") ? r = (r = e.data ? e.data.items : []).length ? r.filter('[data-fancybox="' + i + '"]') : n('[data-fancybox="' + i + '"]') : r = [o],
                (a = n(r).index(o)) < 0 && (a = 0),
                    (s = n.fancybox.open(r, t, a)).$trigger = o))
            }
            if (e.console = e.console || {
                info: function(e) {}
            },
                n) {
                if (n.fn.fancybox)
                    return void console.info("fancyBox already initialized");
                var s = {
                    closeExisting: !1,
                    loop: !1,
                    gutter: 50,
                    keyboard: !0,
                    preventCaptionOverlap: !0,
                    arrows: !0,
                    infobar: !0,
                    smallBtn: "auto",
                    toolbar: "auto",
                    buttons: ["zoom", "slideShow", "thumbs", "close"],
                    idleTime: 3,
                    protect: !1,
                    modal: !1,
                    image: {
                        preload: !1
                    },
                    ajax: {
                        settings: {
                            data: {
                                fancybox: !0
                            }
                        }
                    },
                    iframe: {
                        tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                        preload: !0,
                        css: {},
                        attr: {
                            scrolling: "auto"
                        }
                    },
                    video: {
                        tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                        format: "",
                        autoStart: !0
                    },
                    defaultType: "image",
                    animationEffect: "zoom",
                    animationDuration: 366,
                    zoomOpacity: "auto",
                    transitionEffect: "fade",
                    transitionDuration: 366,
                    slideClass: "",
                    baseClass: "",
                    baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                    spinnerTpl: '<div class="fancybox-loading"></div>',
                    errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                    btnTpl: {
                        download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                        zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                        close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                        arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                        arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                        smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
                    },
                    parentEl: "body",
                    hideScrollbar: !0,
                    autoFocus: !0,
                    backFocus: !0,
                    trapFocus: !0,
                    fullScreen: {
                        autoStart: !1
                    },
                    touch: {
                        vertical: !0,
                        momentum: !0
                    },
                    hash: null,
                    media: {},
                    slideShow: {
                        autoStart: !1,
                        speed: 3e3
                    },
                    thumbs: {
                        autoStart: !1,
                        hideOnClose: !0,
                        parentEl: ".fancybox-container",
                        axis: "y"
                    },
                    wheel: "auto",
                    onInit: n.noop,
                    beforeLoad: n.noop,
                    afterLoad: n.noop,
                    beforeShow: n.noop,
                    afterShow: n.noop,
                    beforeClose: n.noop,
                    afterClose: n.noop,
                    onActivate: n.noop,
                    onDeactivate: n.noop,
                    clickContent: function(e, t) {
                        return "image" === e.type && "zoom"
                    },
                    clickSlide: "close",
                    clickOutside: "close",
                    dblclickContent: !1,
                    dblclickSlide: !1,
                    dblclickOutside: !1,
                    mobile: {
                        preventCaptionOverlap: !1,
                        idleTime: !1,
                        clickContent: function(e, t) {
                            return "image" === e.type && "toggleControls"
                        },
                        clickSlide: function(e, t) {
                            return "image" === e.type ? "toggleControls" : "close"
                        },
                        dblclickContent: function(e, t) {
                            return "image" === e.type && "zoom"
                        },
                        dblclickSlide: function(e, t) {
                            return "image" === e.type && "zoom"
                        }
                    },
                    lang: "en",
                    i18n: {
                        en: {
                            CLOSE: "Close",
                            NEXT: "Next",
                            PREV: "Previous",
                            ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                            PLAY_START: "Start slideshow",
                            PLAY_STOP: "Pause slideshow",
                            FULL_SCREEN: "Full screen",
                            THUMBS: "Thumbnails",
                            DOWNLOAD: "Download",
                            SHARE: "Share",
                            ZOOM: "Zoom"
                        },
                        de: {
                            CLOSE: "Schlie&szlig;en",
                            NEXT: "Weiter",
                            PREV: "Zur&uuml;ck",
                            ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                            PLAY_START: "Diaschau starten",
                            PLAY_STOP: "Diaschau beenden",
                            FULL_SCREEN: "Vollbild",
                            THUMBS: "Vorschaubilder",
                            DOWNLOAD: "Herunterladen",
                            SHARE: "Teilen",
                            ZOOM: "Vergr&ouml;&szlig;ern"
                        }
                    }
                }
                    , r = n(e)
                    , a = n(t)
                    , l = 0
                    , c = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || function(t) {
                    return e.setTimeout(t, 1e3 / 60)
                }
                    , d = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.oCancelAnimationFrame || function(t) {
                    e.clearTimeout(t)
                }
                    , u = function() {
                    var e, n = t.createElement("fakeelement"), o = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                    for (e in o)
                        if (void 0 !== n.style[e])
                            return o[e];
                    return "transitionend"
                }()
                    , p = function(e) {
                    return e && e.length && e[0].offsetHeight
                }
                    , f = function(e, t) {
                    var o = n.extend(!0, {}, e, t);
                    return n.each(t, (function(e, t) {
                            n.isArray(t) && (o[e] = t)
                        }
                    )),
                        o
                }
                    , h = function(e) {
                    var o, i;
                    return !(!e || e.ownerDocument !== t) && (n(".fancybox-container").css("pointer-events", "none"),
                        o = {
                            x: e.getBoundingClientRect().left + e.offsetWidth / 2,
                            y: e.getBoundingClientRect().top + e.offsetHeight / 2
                        },
                        i = t.elementFromPoint(o.x, o.y) === e,
                        n(".fancybox-container").css("pointer-events", ""),
                        i)
                }
                    , g = function(e, t, o) {
                    var i = this;
                    i.opts = f({
                        index: o
                    }, n.fancybox.defaults),
                    n.isPlainObject(t) && (i.opts = f(i.opts, t)),
                    n.fancybox.isMobile && (i.opts = f(i.opts, i.opts.mobile)),
                        i.id = i.opts.id || ++l,
                        i.currIndex = parseInt(i.opts.index, 10) || 0,
                        i.prevIndex = null,
                        i.prevPos = null,
                        i.currPos = 0,
                        i.firstRun = !0,
                        i.group = [],
                        i.slides = {},
                        i.addContent(e),
                    i.group.length && i.init()
                };
                n.extend(g.prototype, {
                    init: function() {
                        var o, i, s = this, r = s.group[s.currIndex].opts;
                        r.closeExisting && n.fancybox.close(!0),
                            n("body").addClass("fancybox-active"),
                        !n.fancybox.getInstance() && !1 !== r.hideScrollbar && !n.fancybox.isMobile && t.body.scrollHeight > e.innerHeight && (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (e.innerWidth - t.documentElement.clientWidth) + "px;}</style>"),
                            n("body").addClass("compensate-for-scrollbar")),
                            i = "",
                            n.each(r.buttons, (function(e, t) {
                                    i += r.btnTpl[t] || ""
                                }
                            )),
                            o = n(s.translate(s, r.baseTpl.replace("{{buttons}}", i).replace("{{arrows}}", r.btnTpl.arrowLeft + r.btnTpl.arrowRight))).attr("id", "fancybox-container-" + s.id).addClass(r.baseClass).data("FancyBox", s).appendTo(r.parentEl),
                            s.$refs = {
                                container: o
                            },
                            ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach((function(e) {
                                    s.$refs[e] = o.find(".fancybox-" + e)
                                }
                            )),
                            s.trigger("onInit"),
                            s.activate(),
                            s.jumpTo(s.currIndex)
                    },
                    translate: function(e, t) {
                        var n = e.opts.i18n[e.opts.lang] || e.opts.i18n.en;
                        return t.replace(/\{\{(\w+)\}\}/g, (function(e, t) {
                                return void 0 === n[t] ? e : n[t]
                            }
                        ))
                    },
                    addContent: function(e) {
                        var t, o = this, i = n.makeArray(e);
                        n.each(i, (function(e, t) {
                                var i, s, r, a, l, c = {}, d = {};
                                n.isPlainObject(t) ? (c = t,
                                    d = t.opts || t) : "object" === n.type(t) && n(t).length ? (d = (i = n(t)).data() || {},
                                    (d = n.extend(!0, {}, d, d.options)).$orig = i,
                                    c.src = o.opts.src || d.src || i.attr("href"),
                                c.type || c.src || (c.type = "inline",
                                    c.src = t)) : c = {
                                    type: "html",
                                    src: t + ""
                                },
                                    c.opts = n.extend(!0, {}, o.opts, d),
                                n.isArray(d.buttons) && (c.opts.buttons = d.buttons),
                                n.fancybox.isMobile && c.opts.mobile && (c.opts = f(c.opts, c.opts.mobile)),
                                    s = c.type || c.opts.type,
                                    a = c.src || "",
                                !s && a && ((r = a.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (s = "video",
                                c.opts.video.format || (c.opts.video.format = "video/" + ("ogv" === r[1] ? "ogg" : r[1]))) : a.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : a.match(/\.(pdf)((\?|#).*)?$/i) ? (s = "iframe",
                                    c = n.extend(!0, c, {
                                        contentType: "pdf",
                                        opts: {
                                            iframe: {
                                                preload: !1
                                            }
                                        }
                                    })) : "#" === a.charAt(0) && (s = "inline")),
                                    s ? c.type = s : o.trigger("objectNeedsType", c),
                                c.contentType || (c.contentType = n.inArray(c.type, ["html", "inline", "ajax"]) > -1 ? "html" : c.type),
                                    c.index = o.group.length,
                                "auto" == c.opts.smallBtn && (c.opts.smallBtn = n.inArray(c.type, ["html", "inline", "ajax"]) > -1),
                                "auto" === c.opts.toolbar && (c.opts.toolbar = !c.opts.smallBtn),
                                    c.$thumb = c.opts.$thumb || null,
                                c.opts.$trigger && c.index === o.opts.index && (c.$thumb = c.opts.$trigger.find("img:first"),
                                c.$thumb.length && (c.opts.$orig = c.opts.$trigger)),
                                c.$thumb && c.$thumb.length || !c.opts.$orig || (c.$thumb = c.opts.$orig.find("img:first")),
                                c.$thumb && !c.$thumb.length && (c.$thumb = null),
                                    c.thumb = c.opts.thumb || (c.$thumb ? c.$thumb[0].src : null),
                                "function" === n.type(c.opts.caption) && (c.opts.caption = c.opts.caption.apply(t, [o, c])),
                                "function" === n.type(o.opts.caption) && (c.opts.caption = o.opts.caption.apply(t, [o, c])),
                                c.opts.caption instanceof n || (c.opts.caption = void 0 === c.opts.caption ? "" : c.opts.caption + ""),
                                "ajax" === c.type && ((l = a.split(/\s+/, 2)).length > 1 && (c.src = l.shift(),
                                    c.opts.filter = l.shift())),
                                c.opts.modal && (c.opts = n.extend(!0, c.opts, {
                                    trapFocus: !0,
                                    infobar: 0,
                                    toolbar: 0,
                                    smallBtn: 0,
                                    keyboard: 0,
                                    slideShow: 0,
                                    fullScreen: 0,
                                    thumbs: 0,
                                    touch: 0,
                                    clickContent: !1,
                                    clickSlide: !1,
                                    clickOutside: !1,
                                    dblclickContent: !1,
                                    dblclickSlide: !1,
                                    dblclickOutside: !1
                                })),
                                    o.group.push(c)
                            }
                        )),
                        Object.keys(o.slides).length && (o.updateControls(),
                        (t = o.Thumbs) && t.isActive && (t.create(),
                            t.focus()))
                    },
                    addEvents: function() {
                        var t = this;
                        t.removeEvents(),
                            t.$refs.container.on("click.fb-close", "[data-fancybox-close]", (function(e) {
                                    e.stopPropagation(),
                                        e.preventDefault(),
                                        t.close(e)
                                }
                            )).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", (function(e) {
                                    e.stopPropagation(),
                                        e.preventDefault(),
                                        t.previous()
                                }
                            )).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", (function(e) {
                                    e.stopPropagation(),
                                        e.preventDefault(),
                                        t.next()
                                }
                            )).on("click.fb", "[data-fancybox-zoom]", (function(e) {
                                    t[t.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                                }
                            )),
                            r.on("orientationchange.fb resize.fb", (function(e) {
                                    e && e.originalEvent && "resize" === e.originalEvent.type ? (t.requestId && d(t.requestId),
                                        t.requestId = c((function() {
                                                t.update(e)
                                            }
                                        ))) : (t.current && "iframe" === t.current.type && t.$refs.stage.hide(),
                                        setTimeout((function() {
                                                t.$refs.stage.show(),
                                                    t.update(e)
                                            }
                                        ), n.fancybox.isMobile ? 600 : 250))
                                }
                            )),
                            a.on("keydown.fb", (function(e) {
                                    var o = (n.fancybox ? n.fancybox.getInstance() : null).current
                                        , i = e.keyCode || e.which;
                                    if (9 != i)
                                        return !o.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || n(e.target).is("input,textarea,video,audio,select") ? void 0 : 8 === i || 27 === i ? (e.preventDefault(),
                                            void t.close(e)) : 37 === i || 38 === i ? (e.preventDefault(),
                                            void t.previous()) : 39 === i || 40 === i ? (e.preventDefault(),
                                            void t.next()) : void t.trigger("afterKeydown", e, i);
                                    o.opts.trapFocus && t.focus(e)
                                }
                            )),
                        t.group[t.currIndex].opts.idleTime && (t.idleSecondsCounter = 0,
                            a.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", (function(e) {
                                    t.idleSecondsCounter = 0,
                                    t.isIdle && t.showControls(),
                                        t.isIdle = !1
                                }
                            )),
                            t.idleInterval = e.setInterval((function() {
                                    ++t.idleSecondsCounter >= t.group[t.currIndex].opts.idleTime && !t.isDragging && (t.isIdle = !0,
                                        t.idleSecondsCounter = 0,
                                        t.hideControls())
                                }
                            ), 1e3))
                    },
                    removeEvents: function() {
                        var t = this;
                        r.off("orientationchange.fb resize.fb"),
                            a.off("keydown.fb .fb-idle"),
                            this.$refs.container.off(".fb-close .fb-prev .fb-next"),
                        t.idleInterval && (e.clearInterval(t.idleInterval),
                            t.idleInterval = null)
                    },
                    previous: function(e) {
                        return this.jumpTo(this.currPos - 1, e)
                    },
                    next: function(e) {
                        return this.jumpTo(this.currPos + 1, e)
                    },
                    jumpTo: function(e, t) {
                        var o, i, s, r, a, l, c, d, u, f = this, h = f.group.length;
                        if (!(f.isDragging || f.isClosing || f.isAnimating && f.firstRun)) {
                            if (e = parseInt(e, 10),
                            !(s = f.current ? f.current.opts.loop : f.opts.loop) && (e < 0 || e >= h))
                                return !1;
                            if (o = f.firstRun = !Object.keys(f.slides).length,
                                a = f.current,
                                f.prevIndex = f.currIndex,
                                f.prevPos = f.currPos,
                                r = f.createSlide(e),
                            h > 1 && ((s || r.index < h - 1) && f.createSlide(e + 1),
                            (s || r.index > 0) && f.createSlide(e - 1)),
                                f.current = r,
                                f.currIndex = r.index,
                                f.currPos = r.pos,
                                f.trigger("beforeShow", o),
                                f.updateControls(),
                                r.forcedDuration = void 0,
                                n.isNumeric(t) ? r.forcedDuration = t : t = r.opts[o ? "animationDuration" : "transitionDuration"],
                                t = parseInt(t, 10),
                                i = f.isMoved(r),
                                r.$slide.addClass("fancybox-slide--current"),
                                o)
                                return r.opts.animationEffect && t && f.$refs.container.css("transition-duration", t + "ms"),
                                    f.$refs.container.addClass("fancybox-is-open").trigger("focus"),
                                    f.loadSlide(r),
                                    void f.preload("image");
                            l = n.fancybox.getTranslate(a.$slide),
                                c = n.fancybox.getTranslate(f.$refs.stage),
                                n.each(f.slides, (function(e, t) {
                                        n.fancybox.stop(t.$slide, !0)
                                    }
                                )),
                            a.pos !== r.pos && (a.isComplete = !1),
                                a.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),
                                i ? (u = l.left - (a.pos * l.width + a.pos * a.opts.gutter),
                                    n.each(f.slides, (function(e, o) {
                                            o.$slide.removeClass("fancybox-animated").removeClass((function(e, t) {
                                                    return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                                                }
                                            ));
                                            var i = o.pos * l.width + o.pos * o.opts.gutter;
                                            n.fancybox.setTranslate(o.$slide, {
                                                top: 0,
                                                left: i - c.left + u
                                            }),
                                            o.pos !== r.pos && o.$slide.addClass("fancybox-slide--" + (o.pos > r.pos ? "next" : "previous")),
                                                p(o.$slide),
                                                n.fancybox.animate(o.$slide, {
                                                    top: 0,
                                                    left: (o.pos - r.pos) * l.width + (o.pos - r.pos) * o.opts.gutter
                                                }, t, (function() {
                                                        o.$slide.css({
                                                            transform: "",
                                                            opacity: ""
                                                        }).removeClass("fancybox-slide--next fancybox-slide--previous"),
                                                        o.pos === f.currPos && f.complete()
                                                    }
                                                ))
                                        }
                                    ))) : t && r.opts.transitionEffect && (d = "fancybox-animated fancybox-fx-" + r.opts.transitionEffect,
                                    a.$slide.addClass("fancybox-slide--" + (a.pos > r.pos ? "next" : "previous")),
                                    n.fancybox.animate(a.$slide, d, t, (function() {
                                            a.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")
                                        }
                                    ), !1)),
                                r.isLoaded ? f.revealContent(r) : f.loadSlide(r),
                                f.preload("image")
                        }
                    },
                    createSlide: function(e) {
                        var t, o, i = this;
                        return o = (o = e % i.group.length) < 0 ? i.group.length + o : o,
                        !i.slides[e] && i.group[o] && (t = n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),
                            i.slides[e] = n.extend(!0, {}, i.group[o], {
                                pos: e,
                                $slide: t,
                                isLoaded: !1
                            }),
                            i.updateSlide(i.slides[e])),
                            i.slides[e]
                    },
                    scaleToActual: function(e, t, o) {
                        var i, s, r, a, l, c = this, d = c.current, u = d.$content, p = n.fancybox.getTranslate(d.$slide).width, f = n.fancybox.getTranslate(d.$slide).height, h = d.width, g = d.height;
                        c.isAnimating || c.isMoved() || !u || "image" != d.type || !d.isLoaded || d.hasError || (c.isAnimating = !0,
                            n.fancybox.stop(u),
                            e = void 0 === e ? .5 * p : e,
                            t = void 0 === t ? .5 * f : t,
                            (i = n.fancybox.getTranslate(u)).top -= n.fancybox.getTranslate(d.$slide).top,
                            i.left -= n.fancybox.getTranslate(d.$slide).left,
                            a = h / i.width,
                            l = g / i.height,
                            s = .5 * p - .5 * h,
                            r = .5 * f - .5 * g,
                        h > p && ((s = i.left * a - (e * a - e)) > 0 && (s = 0),
                        s < p - h && (s = p - h)),
                        g > f && ((r = i.top * l - (t * l - t)) > 0 && (r = 0),
                        r < f - g && (r = f - g)),
                            c.updateCursor(h, g),
                            n.fancybox.animate(u, {
                                top: r,
                                left: s,
                                scaleX: a,
                                scaleY: l
                            }, o || 366, (function() {
                                    c.isAnimating = !1
                                }
                            )),
                        c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop())
                    },
                    scaleToFit: function(e) {
                        var t, o = this, i = o.current, s = i.$content;
                        o.isAnimating || o.isMoved() || !s || "image" != i.type || !i.isLoaded || i.hasError || (o.isAnimating = !0,
                            n.fancybox.stop(s),
                            t = o.getFitPos(i),
                            o.updateCursor(t.width, t.height),
                            n.fancybox.animate(s, {
                                top: t.top,
                                left: t.left,
                                scaleX: t.width / s.width(),
                                scaleY: t.height / s.height()
                            }, e || 366, (function() {
                                    o.isAnimating = !1
                                }
                            )))
                    },
                    getFitPos: function(e) {
                        var t, o, i, s, r = e.$content, a = e.$slide, l = e.width || e.opts.width, c = e.height || e.opts.height, d = {};
                        return !!(e.isLoaded && r && r.length) && (t = n.fancybox.getTranslate(this.$refs.stage).width,
                            o = n.fancybox.getTranslate(this.$refs.stage).height,
                            t -= parseFloat(a.css("paddingLeft")) + parseFloat(a.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight")),
                            o -= parseFloat(a.css("paddingTop")) + parseFloat(a.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom")),
                        l && c || (l = t,
                            c = o),
                        (l *= i = Math.min(1, t / l, o / c)) > t - .5 && (l = t),
                        (c *= i) > o - .5 && (c = o),
                            "image" === e.type ? (d.top = Math.floor(.5 * (o - c)) + parseFloat(a.css("paddingTop")),
                                d.left = Math.floor(.5 * (t - l)) + parseFloat(a.css("paddingLeft"))) : "video" === e.contentType && (c > l / (s = e.opts.width && e.opts.height ? l / c : e.opts.ratio || 16 / 9) ? c = l / s : l > c * s && (l = c * s)),
                            d.width = l,
                            d.height = c,
                            d)
                    },
                    update: function(e) {
                        var t = this;
                        n.each(t.slides, (function(n, o) {
                                t.updateSlide(o, e)
                            }
                        ))
                    },
                    updateSlide: function(e, t) {
                        var o = this
                            , i = e && e.$content
                            , s = e.width || e.opts.width
                            , r = e.height || e.opts.height
                            , a = e.$slide;
                        o.adjustCaption(e),
                        i && (s || r || "video" === e.contentType) && !e.hasError && (n.fancybox.stop(i),
                            n.fancybox.setTranslate(i, o.getFitPos(e)),
                        e.pos === o.currPos && (o.isAnimating = !1,
                            o.updateCursor())),
                            o.adjustLayout(e),
                        a.length && (a.trigger("refresh"),
                        e.pos === o.currPos && o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", a.get(0).scrollHeight > a.get(0).clientHeight)),
                            o.trigger("onUpdate", e, t)
                    },
                    centerSlide: function(e) {
                        var t = this
                            , o = t.current
                            , i = o.$slide;
                        !t.isClosing && o && (i.siblings().css({
                            transform: "",
                            opacity: ""
                        }),
                            i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),
                            n.fancybox.animate(i, {
                                top: 0,
                                left: 0,
                                opacity: 1
                            }, void 0 === e ? 0 : e, (function() {
                                    i.css({
                                        transform: "",
                                        opacity: ""
                                    }),
                                    o.isComplete || t.complete()
                                }
                            ), !1))
                    },
                    isMoved: function(e) {
                        var t, o, i = e || this.current;
                        return !!i && (o = n.fancybox.getTranslate(this.$refs.stage),
                            t = n.fancybox.getTranslate(i.$slide),
                        !i.$slide.hasClass("fancybox-animated") && (Math.abs(t.top - o.top) > .5 || Math.abs(t.left - o.left) > .5))
                    },
                    updateCursor: function(e, t) {
                        var o, i, s = this, r = s.current, a = s.$refs.container;
                        r && !s.isClosing && s.Guestures && (a.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),
                            i = !!(o = s.canPan(e, t)) || s.isZoomable(),
                            a.toggleClass("fancybox-is-zoomable", i),
                            n("[data-fancybox-zoom]").prop("disabled", !i),
                            o ? a.addClass("fancybox-can-pan") : i && ("zoom" === r.opts.clickContent || n.isFunction(r.opts.clickContent) && "zoom" == r.opts.clickContent(r)) ? a.addClass("fancybox-can-zoomIn") : r.opts.touch && (r.opts.touch.vertical || s.group.length > 1) && "video" !== r.contentType && a.addClass("fancybox-can-swipe"))
                    },
                    isZoomable: function() {
                        var e, t = this, n = t.current;
                        if (n && !t.isClosing && "image" === n.type && !n.hasError) {
                            if (!n.isLoaded)
                                return !0;
                            if ((e = t.getFitPos(n)) && (n.width > e.width || n.height > e.height))
                                return !0
                        }
                        return !1
                    },
                    isScaledDown: function(e, t) {
                        var o = !1
                            , i = this.current
                            , s = i.$content;
                        return void 0 !== e && void 0 !== t ? o = e < i.width && t < i.height : s && (o = (o = n.fancybox.getTranslate(s)).width < i.width && o.height < i.height),
                            o
                    },
                    canPan: function(e, t) {
                        var o = this.current
                            , i = null
                            , s = !1;
                        return "image" === o.type && (o.isComplete || e && t) && !o.hasError && (s = this.getFitPos(o),
                            void 0 !== e && void 0 !== t ? i = {
                                width: e,
                                height: t
                            } : o.isComplete && (i = n.fancybox.getTranslate(o.$content)),
                        i && s && (s = Math.abs(i.width - s.width) > 1.5 || Math.abs(i.height - s.height) > 1.5)),
                            s
                    },
                    loadSlide: function(e) {
                        var t, o, i, s = this;
                        if (!e.isLoading && !e.isLoaded) {
                            if (e.isLoading = !0,
                            !1 === s.trigger("beforeLoad", e))
                                return e.isLoading = !1,
                                    !1;
                            switch (t = e.type,
                                (o = e.$slide).off("refresh").trigger("onReset").addClass(e.opts.slideClass),
                                t) {
                                case "image":
                                    s.setImage(e);
                                    break;
                                case "iframe":
                                    s.setIframe(e);
                                    break;
                                case "html":
                                    s.setContent(e, e.src || e.content);
                                    break;
                                case "video":
                                    s.setContent(e, e.opts.video.tpl.replace(/\{\{src\}\}/gi, e.src).replace("{{format}}", e.opts.videoFormat || e.opts.video.format || "").replace("{{poster}}", e.thumb || ""));
                                    break;
                                case "inline":
                                    n(e.src).length ? s.setContent(e, n(e.src)) : s.setError(e);
                                    break;
                                case "ajax":
                                    s.showLoading(e),
                                        i = n.ajax(n.extend({}, e.opts.ajax.settings, {
                                            url: e.src,
                                            success: function(t, n) {
                                                "success" === n && s.setContent(e, t)
                                            },
                                            error: function(t, n) {
                                                t && "abort" !== n && s.setError(e)
                                            }
                                        })),
                                        o.one("onReset", (function() {
                                                i.abort()
                                            }
                                        ));
                                    break;
                                default:
                                    s.setError(e)
                            }
                            return !0
                        }
                    },
                    setImage: function(e) {
                        var o, i = this;
                        setTimeout((function() {
                                var t = e.$image;
                                i.isClosing || !e.isLoading || t && t.length && t[0].complete || e.hasError || i.showLoading(e)
                            }
                        ), 50),
                            i.checkSrcset(e),
                            e.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide.addClass("fancybox-slide--image")),
                        !1 !== e.opts.preload && e.opts.width && e.opts.height && e.thumb && (e.width = e.opts.width,
                            e.height = e.opts.height,
                            (o = t.createElement("img")).onerror = function() {
                                n(this).remove(),
                                    e.$ghost = null
                            }
                            ,
                            o.onload = function() {
                                i.afterLoad(e)
                            }
                            ,
                            e.$ghost = n(o).addClass("fancybox-image").appendTo(e.$content).attr("src", e.thumb)),
                            i.setBigImage(e)
                    },
                    checkSrcset: function(t) {
                        var n, o, i, s, r = t.opts.srcset || t.opts.image.srcset;
                        if (r) {
                            i = e.devicePixelRatio || 1,
                                s = e.innerWidth * i,
                                (o = r.split(",").map((function(e) {
                                        var t = {};
                                        return e.trim().split(/\s+/).forEach((function(e, n) {
                                                var o = parseInt(e.substring(0, e.length - 1), 10);
                                                if (0 === n)
                                                    return t.url = e;
                                                o && (t.value = o,
                                                    t.postfix = e[e.length - 1])
                                            }
                                        )),
                                            t
                                    }
                                ))).sort((function(e, t) {
                                        return e.value - t.value
                                    }
                                ));
                            for (var a = 0; a < o.length; a++) {
                                var l = o[a];
                                if ("w" === l.postfix && l.value >= s || "x" === l.postfix && l.value >= i) {
                                    n = l;
                                    break
                                }
                            }
                            !n && o.length && (n = o[o.length - 1]),
                            n && (t.src = n.url,
                            t.width && t.height && "w" == n.postfix && (t.height = t.width / t.height * n.value,
                                t.width = n.value),
                                t.opts.srcset = r)
                        }
                    },
                    setBigImage: function(e) {
                        var o = this
                            , i = t.createElement("img")
                            , s = n(i);
                        e.$image = s.one("error", (function() {
                                o.setError(e)
                            }
                        )).one("load", (function() {
                                var t;
                                e.$ghost || (o.resolveImageSlideSize(e, this.naturalWidth, this.naturalHeight),
                                    o.afterLoad(e)),
                                o.isClosing || (e.opts.srcset && ((t = e.opts.sizes) && "auto" !== t || (t = (e.width / e.height > 1 && r.width() / r.height() > 1 ? "100" : Math.round(e.width / e.height * 100)) + "vw"),
                                    s.attr("sizes", t).attr("srcset", e.opts.srcset)),
                                e.$ghost && setTimeout((function() {
                                        e.$ghost && !o.isClosing && e.$ghost.hide()
                                    }
                                ), Math.min(300, Math.max(1e3, e.height / 1600))),
                                    o.hideLoading(e))
                            }
                        )).addClass("fancybox-image").attr("src", e.src).appendTo(e.$content),
                            (i.complete || "complete" == i.readyState) && s.naturalWidth && s.naturalHeight ? s.trigger("load") : i.error && s.trigger("error")
                    },
                    resolveImageSlideSize: function(e, t, n) {
                        var o = parseInt(e.opts.width, 10)
                            , i = parseInt(e.opts.height, 10);
                        e.width = t,
                            e.height = n,
                        o > 0 && (e.width = o,
                            e.height = Math.floor(o * n / t)),
                        i > 0 && (e.width = Math.floor(i * t / n),
                            e.height = i)
                    },
                    setIframe: function(e) {
                        var t, o = this, i = e.opts.iframe, s = e.$slide;
                        e.$content = n('<div class="fancybox-content' + (i.preload ? " fancybox-is-hidden" : "") + '"></div>').css(i.css).appendTo(s),
                            s.addClass("fancybox-slide--" + e.contentType),
                            e.$iframe = t = n(i.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(i.attr).appendTo(e.$content),
                            i.preload ? (o.showLoading(e),
                                t.on("load.fb error.fb", (function(t) {
                                        this.isReady = 1,
                                            e.$slide.trigger("refresh"),
                                            o.afterLoad(e)
                                    }
                                )),
                                s.on("refresh.fb", (function() {
                                        var n, o = e.$content, r = i.css.width, a = i.css.height;
                                        if (1 === t[0].isReady) {
                                            try {
                                                n = t.contents().find("body")
                                            } catch (e) {}
                                            n && n.length && n.children().length && (s.css("overflow", "visible"),
                                                o.css({
                                                    width: "100%",
                                                    "max-width": "100%",
                                                    height: "9999px"
                                                }),
                                            void 0 === r && (r = Math.ceil(Math.max(n[0].clientWidth, n.outerWidth(!0)))),
                                                o.css("width", r || "").css("max-width", ""),
                                            void 0 === a && (a = Math.ceil(Math.max(n[0].clientHeight, n.outerHeight(!0)))),
                                                o.css("height", a || ""),
                                                s.css("overflow", "auto")),
                                                o.removeClass("fancybox-is-hidden")
                                        }
                                    }
                                ))) : o.afterLoad(e),
                            t.attr("src", e.src),
                            s.one("onReset", (function() {
                                    try {
                                        n(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                                    } catch (e) {}
                                    n(this).off("refresh.fb").empty(),
                                        e.isLoaded = !1,
                                        e.isRevealed = !1
                                }
                            ))
                    },
                    setContent: function(e, t) {
                        var o = this;
                        o.isClosing || (o.hideLoading(e),
                        e.$content && n.fancybox.stop(e.$content),
                            e.$slide.empty(),
                            function(e) {
                                return e && e.hasOwnProperty && e instanceof n
                            }(t) && t.parent().length ? ((t.hasClass("fancybox-content") || t.parent().hasClass("fancybox-content")) && t.parents(".fancybox-slide").trigger("onReset"),
                                e.$placeholder = n("<div>").hide().insertAfter(t),
                                t.css("display", "inline-block")) : e.hasError || ("string" === n.type(t) && (t = n("<div>").append(n.trim(t)).contents()),
                            e.opts.filter && (t = n("<div>").html(t).find(e.opts.filter))),
                            e.$slide.one("onReset", (function() {
                                    n(this).find("video,audio").trigger("pause"),
                                    e.$placeholder && (e.$placeholder.after(t.removeClass("fancybox-content").hide()).remove(),
                                        e.$placeholder = null),
                                    e.$smallBtn && (e.$smallBtn.remove(),
                                        e.$smallBtn = null),
                                    e.hasError || (n(this).empty(),
                                        e.isLoaded = !1,
                                        e.isRevealed = !1)
                                }
                            )),
                            n(t).appendTo(e.$slide),
                        n(t).is("video,audio") && (n(t).addClass("fancybox-video"),
                            n(t).wrap("<div></div>"),
                            e.contentType = "video",
                            e.opts.width = e.opts.width || n(t).attr("width"),
                            e.opts.height = e.opts.height || n(t).attr("height")),
                            e.$content = e.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),
                            e.$content.siblings().hide(),
                        e.$content.length || (e.$content = e.$slide.wrapInner("<div></div>").children().first()),
                            e.$content.addClass("fancybox-content"),
                            e.$slide.addClass("fancybox-slide--" + e.contentType),
                            o.afterLoad(e))
                    },
                    setError: function(e) {
                        e.hasError = !0,
                            e.$slide.trigger("onReset").removeClass("fancybox-slide--" + e.contentType).addClass("fancybox-slide--error"),
                            e.contentType = "html",
                            this.setContent(e, this.translate(e, e.opts.errorTpl)),
                        e.pos === this.currPos && (this.isAnimating = !1)
                    },
                    showLoading: function(e) {
                        var t = this;
                        (e = e || t.current) && !e.$spinner && (e.$spinner = n(t.translate(t, t.opts.spinnerTpl)).appendTo(e.$slide).hide().fadeIn("fast"))
                    },
                    hideLoading: function(e) {
                        (e = e || this.current) && e.$spinner && (e.$spinner.stop().remove(),
                            delete e.$spinner)
                    },
                    afterLoad: function(e) {
                        var t = this;
                        t.isClosing || (e.isLoading = !1,
                            e.isLoaded = !0,
                            t.trigger("afterLoad", e),
                            t.hideLoading(e),
                        !e.opts.smallBtn || e.$smallBtn && e.$smallBtn.length || (e.$smallBtn = n(t.translate(e, e.opts.btnTpl.smallBtn)).appendTo(e.$content)),
                        e.opts.protect && e.$content && !e.hasError && (e.$content.on("contextmenu.fb", (function(e) {
                                return 2 == e.button && e.preventDefault(),
                                    !0
                            }
                        )),
                        "image" === e.type && n('<div class="fancybox-spaceball"></div>').appendTo(e.$content)),
                            t.adjustCaption(e),
                            t.adjustLayout(e),
                        e.pos === t.currPos && t.updateCursor(),
                            t.revealContent(e))
                    },
                    adjustCaption: function(e) {
                        var t, n = this, o = e || n.current, i = o.opts.caption, s = o.opts.preventCaptionOverlap, r = n.$refs.caption, a = !1;
                        r.toggleClass("fancybox-caption--separate", s),
                        s && i && i.length && (o.pos !== n.currPos ? ((t = r.clone().appendTo(r.parent())).children().eq(0).empty().html(i),
                            a = t.outerHeight(!0),
                            t.empty().remove()) : n.$caption && (a = n.$caption.outerHeight(!0)),
                            o.$slide.css("padding-bottom", a || ""))
                    },
                    adjustLayout: function(e) {
                        var t, n, o, i, s = e || this.current;
                        s.isLoaded && !0 !== s.opts.disableLayoutFix && (s.$content.css("margin-bottom", ""),
                        s.$content.outerHeight() > s.$slide.height() + .5 && (o = s.$slide[0].style["padding-bottom"],
                            i = s.$slide.css("padding-bottom"),
                        parseFloat(i) > 0 && (t = s.$slide[0].scrollHeight,
                            s.$slide.css("padding-bottom", 0),
                        Math.abs(t - s.$slide[0].scrollHeight) < 1 && (n = i),
                            s.$slide.css("padding-bottom", o))),
                            s.$content.css("margin-bottom", n))
                    },
                    revealContent: function(e) {
                        var t, o, i, s, r = this, a = e.$slide, l = !1, c = !1, d = r.isMoved(e), u = e.isRevealed;
                        return e.isRevealed = !0,
                            t = e.opts[r.firstRun ? "animationEffect" : "transitionEffect"],
                            i = e.opts[r.firstRun ? "animationDuration" : "transitionDuration"],
                            i = parseInt(void 0 === e.forcedDuration ? i : e.forcedDuration, 10),
                        !d && e.pos === r.currPos && i || (t = !1),
                        "zoom" === t && (e.pos === r.currPos && i && "image" === e.type && !e.hasError && (c = r.getThumbPos(e)) ? l = r.getFitPos(e) : t = "fade"),
                            "zoom" === t ? (r.isAnimating = !0,
                                l.scaleX = l.width / c.width,
                                l.scaleY = l.height / c.height,
                            "auto" == (s = e.opts.zoomOpacity) && (s = Math.abs(e.width / e.height - c.width / c.height) > .1),
                            s && (c.opacity = .1,
                                l.opacity = 1),
                                n.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"), c),
                                p(e.$content),
                                void n.fancybox.animate(e.$content, l, i, (function() {
                                        r.isAnimating = !1,
                                            r.complete()
                                    }
                                ))) : (r.updateSlide(e),
                                t ? (n.fancybox.stop(a),
                                    o = "fancybox-slide--" + (e.pos >= r.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + t,
                                    a.addClass(o).removeClass("fancybox-slide--current"),
                                    e.$content.removeClass("fancybox-is-hidden"),
                                    p(a),
                                "image" !== e.type && e.$content.hide().show(0),
                                    void n.fancybox.animate(a, "fancybox-slide--current", i, (function() {
                                            a.removeClass(o).css({
                                                transform: "",
                                                opacity: ""
                                            }),
                                            e.pos === r.currPos && r.complete()
                                        }
                                    ), !0)) : (e.$content.removeClass("fancybox-is-hidden"),
                                u || !d || "image" !== e.type || e.hasError || e.$content.hide().fadeIn("fast"),
                                    void (e.pos === r.currPos && r.complete())))
                    },
                    getThumbPos: function(e) {
                        var t, o, i, s, r, a = !1, l = e.$thumb;
                        return !(!l || !h(l[0])) && (t = n.fancybox.getTranslate(l),
                            o = parseFloat(l.css("border-top-width") || 0),
                            i = parseFloat(l.css("border-right-width") || 0),
                            s = parseFloat(l.css("border-bottom-width") || 0),
                            r = parseFloat(l.css("border-left-width") || 0),
                            a = {
                                top: t.top + o,
                                left: t.left + r,
                                width: t.width - i - r,
                                height: t.height - o - s,
                                scaleX: 1,
                                scaleY: 1
                            },
                        t.width > 0 && t.height > 0 && a)
                    },
                    complete: function() {
                        var e, t = this, o = t.current, i = {};
                        !t.isMoved() && o.isLoaded && (o.isComplete || (o.isComplete = !0,
                            o.$slide.siblings().trigger("onReset"),
                            t.preload("inline"),
                            p(o.$slide),
                            o.$slide.addClass("fancybox-slide--complete"),
                            n.each(t.slides, (function(e, o) {
                                    o.pos >= t.currPos - 1 && o.pos <= t.currPos + 1 ? i[o.pos] = o : o && (n.fancybox.stop(o.$slide),
                                        o.$slide.off().remove())
                                }
                            )),
                            t.slides = i),
                            t.isAnimating = !1,
                            t.updateCursor(),
                            t.trigger("afterShow"),
                        o.opts.video.autoStart && o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", (function() {
                                Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(),
                                    t.next()
                            }
                        )),
                        o.opts.autoFocus && "html" === o.contentType && ((e = o.$content.find("input[autofocus]:enabled:visible:first")).length ? e.trigger("focus") : t.focus(null, !0)),
                            o.$slide.scrollTop(0).scrollLeft(0))
                    },
                    preload: function(e) {
                        var t, n, o = this;
                        o.group.length < 2 || (n = o.slides[o.currPos + 1],
                        (t = o.slides[o.currPos - 1]) && t.type === e && o.loadSlide(t),
                        n && n.type === e && o.loadSlide(n))
                    },
                    focus: function(e, o) {
                        var i, s, r = this, a = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
                        r.isClosing || ((i = (i = !e && r.current && r.current.isComplete ? r.current.$slide.find("*:visible" + (o ? ":not(.fancybox-close-small)" : "")) : r.$refs.container.find("*:visible")).filter(a).filter((function() {
                                return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled")
                            }
                        ))).length ? (s = i.index(t.activeElement),
                            e && e.shiftKey ? (s < 0 || 0 == s) && (e.preventDefault(),
                                i.eq(i.length - 1).trigger("focus")) : (s < 0 || s == i.length - 1) && (e && e.preventDefault(),
                                i.eq(0).trigger("focus"))) : r.$refs.container.trigger("focus"))
                    },
                    activate: function() {
                        var e = this;
                        n(".fancybox-container").each((function() {
                                var t = n(this).data("FancyBox");
                                t && t.id !== e.id && !t.isClosing && (t.trigger("onDeactivate"),
                                    t.removeEvents(),
                                    t.isVisible = !1)
                            }
                        )),
                            e.isVisible = !0,
                        (e.current || e.isIdle) && (e.update(),
                            e.updateControls()),
                            e.trigger("onActivate"),
                            e.addEvents()
                    },
                    close: function(e, t) {
                        var o, i, s, r, a, l, d, u = this, f = u.current, h = function() {
                            u.cleanUp(e)
                        };
                        return !(u.isClosing || (u.isClosing = !0,
                            !1 === u.trigger("beforeClose", e) ? (u.isClosing = !1,
                                c((function() {
                                        u.update()
                                    }
                                )),
                                1) : (u.removeEvents(),
                                s = f.$content,
                                o = f.opts.animationEffect,
                                i = n.isNumeric(t) ? t : o ? f.opts.animationDuration : 0,
                                f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),
                                !0 !== e ? n.fancybox.stop(f.$slide) : o = !1,
                                f.$slide.siblings().trigger("onReset").remove(),
                            i && u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", i + "ms"),
                                u.hideLoading(f),
                                u.hideControls(!0),
                                u.updateCursor(),
                            "zoom" !== o || s && i && "image" === f.type && !u.isMoved() && !f.hasError && (d = u.getThumbPos(f)) || (o = "fade"),
                                "zoom" === o ? (n.fancybox.stop(s),
                                    r = n.fancybox.getTranslate(s),
                                    l = {
                                        top: r.top,
                                        left: r.left,
                                        scaleX: r.width / d.width,
                                        scaleY: r.height / d.height,
                                        width: d.width,
                                        height: d.height
                                    },
                                    a = f.opts.zoomOpacity,
                                "auto" == a && (a = Math.abs(f.width / f.height - d.width / d.height) > .1),
                                a && (d.opacity = 0),
                                    n.fancybox.setTranslate(s, l),
                                    p(s),
                                    n.fancybox.animate(s, d, i, h),
                                    0) : (o && i ? n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + o, i, h) : !0 === e ? setTimeout(h, i) : h(),
                                    0))))
                    },
                    cleanUp: function(t) {
                        var o, i, s, r = this, a = r.current.opts.$orig;
                        r.current.$slide.trigger("onReset"),
                            r.$refs.container.empty().remove(),
                            r.trigger("afterClose", t),
                        r.current.opts.backFocus && (a && a.length && a.is(":visible") || (a = r.$trigger),
                        a && a.length && (i = e.scrollX,
                            s = e.scrollY,
                            a.trigger("focus"),
                            n("html, body").scrollTop(s).scrollLeft(i))),
                            r.current = null,
                            (o = n.fancybox.getInstance()) ? o.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"),
                                n("#fancybox-style-noscroll").remove())
                    },
                    trigger: function(e, t) {
                        var o, i = Array.prototype.slice.call(arguments, 1), s = this, r = t && t.opts ? t : s.current;
                        if (r ? i.unshift(r) : r = s,
                            i.unshift(s),
                        n.isFunction(r.opts[e]) && (o = r.opts[e].apply(r, i)),
                        !1 === o)
                            return o;
                        "afterClose" !== e && s.$refs ? s.$refs.container.trigger(e + ".fb", i) : a.trigger(e + ".fb", i)
                    },
                    updateControls: function() {
                        var e = this
                            , o = e.current
                            , i = o.index
                            , s = e.$refs.container
                            , r = e.$refs.caption
                            , a = o.opts.caption;
                        o.$slide.trigger("refresh"),
                            a && a.length ? (e.$caption = r,
                                r.children().eq(0).html(a)) : e.$caption = null,
                        e.hasHiddenControls || e.isIdle || e.showControls(),
                            s.find("[data-fancybox-count]").html(e.group.length),
                            s.find("[data-fancybox-index]").html(i + 1),
                            s.find("[data-fancybox-prev]").prop("disabled", !o.opts.loop && i <= 0),
                            s.find("[data-fancybox-next]").prop("disabled", !o.opts.loop && i >= e.group.length - 1),
                            "image" === o.type ? s.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", o.opts.image.src || o.src).show() : o.opts.toolbar && s.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),
                        n(t.activeElement).is(":hidden,[disabled]") && e.$refs.container.trigger("focus")
                    },
                    hideControls: function(e) {
                        var t = ["infobar", "toolbar", "nav"];
                        !e && this.current.opts.preventCaptionOverlap || t.push("caption"),
                            this.$refs.container.removeClass(t.map((function(e) {
                                    return "fancybox-show-" + e
                                }
                            )).join(" ")),
                            this.hasHiddenControls = !0
                    },
                    showControls: function() {
                        var e = this
                            , t = e.current ? e.current.opts : e.opts
                            , n = e.$refs.container;
                        e.hasHiddenControls = !1,
                            e.idleSecondsCounter = 0,
                            n.toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && e.group.length > 1)).toggleClass("fancybox-show-caption", !!e.$caption).toggleClass("fancybox-show-nav", !!(t.arrows && e.group.length > 1)).toggleClass("fancybox-is-modal", !!t.modal)
                    },
                    toggleControls: function() {
                        this.hasHiddenControls ? this.showControls() : this.hideControls()
                    }
                }),
                    n.fancybox = {
                        version: "3.5.7",
                        defaults: s,
                        getInstance: function(e) {
                            var t = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox")
                                , o = Array.prototype.slice.call(arguments, 1);
                            return t instanceof g && ("string" === n.type(e) ? t[e].apply(t, o) : "function" === n.type(e) && e.apply(t, o),
                                t)
                        },
                        open: function(e, t, n) {
                            return new g(e,t,n)
                        },
                        close: function(e) {
                            var t = this.getInstance();
                            t && (t.close(),
                            !0 === e && this.close(e))
                        },
                        destroy: function() {
                            this.close(!0),
                                a.add("body").off("click.fb-start", "**")
                        },
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        use3d: function() {
                            var n = t.createElement("div");
                            return e.getComputedStyle && e.getComputedStyle(n) && e.getComputedStyle(n).getPropertyValue("transform") && !(t.documentMode && t.documentMode < 11)
                        }(),
                        getTranslate: function(e) {
                            var t;
                            return !(!e || !e.length) && {
                                top: (t = e[0].getBoundingClientRect()).top || 0,
                                left: t.left || 0,
                                width: t.width,
                                height: t.height,
                                opacity: parseFloat(e.css("opacity"))
                            }
                        },
                        setTranslate: function(e, t) {
                            var n = ""
                                , o = {};
                            if (e && t)
                                return void 0 === t.left && void 0 === t.top || (n = (void 0 === t.left ? e.position().left : t.left) + "px, " + (void 0 === t.top ? e.position().top : t.top) + "px",
                                    n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"),
                                    void 0 !== t.scaleX && void 0 !== t.scaleY ? n += " scale(" + t.scaleX + ", " + t.scaleY + ")" : void 0 !== t.scaleX && (n += " scaleX(" + t.scaleX + ")"),
                                n.length && (o.transform = n),
                                void 0 !== t.opacity && (o.opacity = t.opacity),
                                void 0 !== t.width && (o.width = t.width),
                                void 0 !== t.height && (o.height = t.height),
                                    e.css(o)
                        },
                        animate: function(e, t, o, i, s) {
                            var r, a = this;
                            n.isFunction(o) && (i = o,
                                o = null),
                                a.stop(e),
                                r = a.getTranslate(e),
                                e.on(u, (function(l) {
                                        (!l || !l.originalEvent || e.is(l.originalEvent.target) && "z-index" != l.originalEvent.propertyName) && (a.stop(e),
                                        n.isNumeric(o) && e.css("transition-duration", ""),
                                            n.isPlainObject(t) ? void 0 !== t.scaleX && void 0 !== t.scaleY && a.setTranslate(e, {
                                                top: t.top,
                                                left: t.left,
                                                width: r.width * t.scaleX,
                                                height: r.height * t.scaleY,
                                                scaleX: 1,
                                                scaleY: 1
                                            }) : !0 !== s && e.removeClass(t),
                                        n.isFunction(i) && i(l))
                                    }
                                )),
                            n.isNumeric(o) && e.css("transition-duration", o + "ms"),
                                n.isPlainObject(t) ? (void 0 !== t.scaleX && void 0 !== t.scaleY && (delete t.width,
                                    delete t.height,
                                e.parent().hasClass("fancybox-slide--image") && e.parent().addClass("fancybox-is-scaling")),
                                    n.fancybox.setTranslate(e, t)) : e.addClass(t),
                                e.data("timer", setTimeout((function() {
                                        e.trigger(u)
                                    }
                                ), o + 33))
                        },
                        stop: function(e, t) {
                            e && e.length && (clearTimeout(e.data("timer")),
                            t && e.trigger(u),
                                e.off(u).css("transition-duration", ""),
                                e.parent().removeClass("fancybox-is-scaling"))
                        }
                    },
                    n.fn.fancybox = function(e) {
                        var t;
                        return (t = (e = e || {}).selector || !1) ? n("body").off("click.fb-start", t).on("click.fb-start", t, {
                            options: e
                        }, i) : this.off("click.fb-start").on("click.fb-start", {
                            items: this,
                            options: e
                        }, i),
                            this
                    }
                    ,
                    a.on("click.fb-start", "[data-fancybox]", i),
                    a.on("click.fb-start", "[data-fancybox-trigger]", (function(e) {
                            n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                                $trigger: n(this)
                            })
                        }
                    )),
                    function() {
                        var e = null;
                        a.on("mousedown mouseup focus blur", ".fancybox-button", (function(t) {
                                switch (t.type) {
                                    case "mousedown":
                                        e = n(this);
                                        break;
                                    case "mouseup":
                                        e = null;
                                        break;
                                    case "focusin":
                                        n(".fancybox-button").removeClass("fancybox-focus"),
                                        n(this).is(e) || n(this).is("[disabled]") || n(this).addClass("fancybox-focus");
                                        break;
                                    case "focusout":
                                        n(".fancybox-button").removeClass("fancybox-focus")
                                }
                            }
                        ))
                    }()
            }
        }(window, document, jQuery),
            function(e) {
                "use strict";
                var t = {
                    youtube: {
                        matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                        params: {
                            autoplay: 1,
                            autohide: 1,
                            fs: 1,
                            rel: 0,
                            hd: 1,
                            wmode: "transparent",
                            enablejsapi: 1,
                            html5: 1
                        },
                        paramPlace: 8,
                        type: "iframe",
                        url: "https://www.youtube-nocookie.com/embed/$4",
                        thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
                    },
                    vimeo: {
                        matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                        params: {
                            autoplay: 1,
                            hd: 1,
                            show_title: 1,
                            show_byline: 1,
                            show_portrait: 0,
                            fullscreen: 1
                        },
                        paramPlace: 3,
                        type: "iframe",
                        url: "//player.vimeo.com/video/$2"
                    },
                    instagram: {
                        matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                        type: "image",
                        url: "//$1/p/$2/media/?size=l"
                    },
                    gmap_place: {
                        matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                        type: "iframe",
                        url: function(e) {
                            return "//maps.google." + e[2] + "/?ll=" + (e[9] ? e[9] + "&z=" + Math.floor(e[10]) + (e[12] ? e[12].replace(/^\//, "&") : "") : e[12] + "").replace(/\?/, "&") + "&output=" + (e[12] && e[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                        }
                    },
                    gmap_search: {
                        matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                        type: "iframe",
                        url: function(e) {
                            return "//maps.google." + e[2] + "/maps?q=" + e[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                        }
                    }
                }
                    , n = function(t, n, o) {
                    if (t)
                        return o = o || "",
                        "object" === e.type(o) && (o = e.param(o, !0)),
                            e.each(n, (function(e, n) {
                                    t = t.replace("$" + e, n || "")
                                }
                            )),
                        o.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + o),
                            t
                };
                e(document).on("objectNeedsType.fb", (function(o, i, s) {
                        var r, a, l, c, d, u, p, f = s.src || "", h = !1;
                        r = e.extend(!0, {}, t, s.opts.media),
                            e.each(r, (function(t, o) {
                                    if (l = f.match(o.matcher)) {
                                        if (h = o.type,
                                            p = t,
                                            u = {},
                                        o.paramPlace && l[o.paramPlace]) {
                                            "?" == (d = l[o.paramPlace])[0] && (d = d.substring(1)),
                                                d = d.split("&");
                                            for (var i = 0; i < d.length; ++i) {
                                                var r = d[i].split("=", 2);
                                                2 == r.length && (u[r[0]] = decodeURIComponent(r[1].replace(/\+/g, " ")))
                                            }
                                        }
                                        return c = e.extend(!0, {}, o.params, s.opts[t], u),
                                            f = "function" === e.type(o.url) ? o.url.call(this, l, c, s) : n(o.url, l, c),
                                            a = "function" === e.type(o.thumb) ? o.thumb.call(this, l, c, s) : n(o.thumb, l),
                                            "youtube" === t ? f = f.replace(/&t=((\d+)m)?(\d+)s/, (function(e, t, n, o) {
                                                    return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
                                                }
                                            )) : "vimeo" === t && (f = f.replace("&%23", "#")),
                                            !1
                                    }
                                }
                            )),
                            h ? (s.opts.thumb || s.opts.$thumb && s.opts.$thumb.length || (s.opts.thumb = a),
                            "iframe" === h && (s.opts = e.extend(!0, s.opts, {
                                iframe: {
                                    preload: !1,
                                    attr: {
                                        scrolling: "no"
                                    }
                                }
                            })),
                                e.extend(s, {
                                    type: h,
                                    src: f,
                                    origSrc: s.src,
                                    contentSource: p,
                                    contentType: "image" === h ? "image" : "gmap_place" == p || "gmap_search" == p ? "map" : "video"
                                })) : f && (s.type = s.opts.defaultType)
                    }
                ));
                var o = {
                    youtube: {
                        src: "https://www.youtube.com/iframe_api",
                        class: "YT",
                        loading: !1,
                        loaded: !1
                    },
                    vimeo: {
                        src: "https://player.vimeo.com/api/player.js",
                        class: "Vimeo",
                        loading: !1,
                        loaded: !1
                    },
                    load: function(e) {
                        var t, n = this;
                        this[e].loaded ? setTimeout((function() {
                                n.done(e)
                            }
                        )) : this[e].loading || (this[e].loading = !0,
                            (t = document.createElement("script")).type = "text/javascript",
                            t.src = this[e].src,
                            "youtube" === e ? window.onYouTubeIframeAPIReady = function() {
                                    n[e].loaded = !0,
                                        n.done(e)
                                }
                                : t.onload = function() {
                                    n[e].loaded = !0,
                                        n.done(e)
                                }
                            ,
                            document.body.appendChild(t))
                    },
                    done: function(t) {
                        var n, o;
                        "youtube" === t && delete window.onYouTubeIframeAPIReady,
                        (n = e.fancybox.getInstance()) && (o = n.current.$content.find("iframe"),
                            "youtube" === t && void 0 !== YT && YT ? new YT.Player(o.attr("id"),{
                                events: {
                                    onStateChange: function(e) {
                                        0 == e.data && n.next()
                                    }
                                }
                            }) : "vimeo" === t && void 0 !== Vimeo && Vimeo && new Vimeo.Player(o).on("ended", (function() {
                                    n.next()
                                }
                            )))
                    }
                };
                e(document).on({
                    "afterShow.fb": function(e, t, n) {
                        t.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && o.load(n.contentSource)
                    }
                })
            }(jQuery),
            function(e, t, n) {
                "use strict";
                var o = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || function(t) {
                    return e.setTimeout(t, 1e3 / 60)
                }
                    , i = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.oCancelAnimationFrame || function(t) {
                    e.clearTimeout(t)
                }
                    , s = function(t) {
                    var n = [];
                    for (var o in t = (t = t.originalEvent || t || e.e).touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t])
                        t[o].pageX ? n.push({
                            x: t[o].pageX,
                            y: t[o].pageY
                        }) : t[o].clientX && n.push({
                            x: t[o].clientX,
                            y: t[o].clientY
                        });
                    return n
                }
                    , r = function(e, t, n) {
                    return t && e ? "x" === n ? e.x - t.x : "y" === n ? e.y - t.y : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) : 0
                }
                    , a = function(e) {
                    if (e.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(e.get(0).onclick) || e.data("selectable"))
                        return !0;
                    for (var t = 0, o = e[0].attributes, i = o.length; t < i; t++)
                        if ("data-fancybox-" === o[t].nodeName.substr(0, 14))
                            return !0;
                    return !1
                }
                    , l = function(t) {
                    var n = e.getComputedStyle(t)["overflow-y"]
                        , o = e.getComputedStyle(t)["overflow-x"]
                        , i = ("scroll" === n || "auto" === n) && t.scrollHeight > t.clientHeight
                        , s = ("scroll" === o || "auto" === o) && t.scrollWidth > t.clientWidth;
                    return i || s
                }
                    , c = function(e) {
                    for (var t = !1; !(t = l(e.get(0))) && ((e = e.parent()).length && !e.hasClass("fancybox-stage") && !e.is("body")); )
                        ;
                    return t
                }
                    , d = function(e) {
                    var t = this;
                    t.instance = e,
                        t.$bg = e.$refs.bg,
                        t.$stage = e.$refs.stage,
                        t.$container = e.$refs.container,
                        t.destroy(),
                        t.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(t, "ontouchstart"))
                };
                d.prototype.destroy = function() {
                    var e = this;
                    e.$container.off(".fb.touch"),
                        n(t).off(".fb.touch"),
                    e.requestId && (i(e.requestId),
                        e.requestId = null),
                    e.tapped && (clearTimeout(e.tapped),
                        e.tapped = null)
                }
                    ,
                    d.prototype.ontouchstart = function(o) {
                        var i = this
                            , l = n(o.target)
                            , d = i.instance
                            , u = d.current
                            , p = u.$slide
                            , f = u.$content
                            , h = "touchstart" == o.type;
                        if (h && i.$container.off("mousedown.fb.touch"),
                        (!o.originalEvent || 2 != o.originalEvent.button) && p.length && l.length && !a(l) && !a(l.parent()) && (l.is("img") || !(o.originalEvent.clientX > l[0].clientWidth + l.offset().left))) {
                            if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated"))
                                return o.stopPropagation(),
                                    void o.preventDefault();
                            i.realPoints = i.startPoints = s(o),
                            i.startPoints.length && (u.touch && o.stopPropagation(),
                                i.startEvent = o,
                                i.canTap = !0,
                                i.$target = l,
                                i.$content = f,
                                i.opts = u.opts.touch,
                                i.isPanning = !1,
                                i.isSwiping = !1,
                                i.isZooming = !1,
                                i.isScrolling = !1,
                                i.canPan = d.canPan(),
                                i.startTime = (new Date).getTime(),
                                i.distanceX = i.distanceY = i.distance = 0,
                                i.canvasWidth = Math.round(p[0].clientWidth),
                                i.canvasHeight = Math.round(p[0].clientHeight),
                                i.contentLastPos = null,
                                i.contentStartPos = n.fancybox.getTranslate(i.$content) || {
                                    top: 0,
                                    left: 0
                                },
                                i.sliderStartPos = n.fancybox.getTranslate(p),
                                i.stagePos = n.fancybox.getTranslate(d.$refs.stage),
                                i.sliderStartPos.top -= i.stagePos.top,
                                i.sliderStartPos.left -= i.stagePos.left,
                                i.contentStartPos.top -= i.stagePos.top,
                                i.contentStartPos.left -= i.stagePos.left,
                                n(t).off(".fb.touch").on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(i, "ontouchend")).on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(i, "ontouchmove")),
                            n.fancybox.isMobile && t.addEventListener("scroll", i.onscroll, !0),
                            ((i.opts || i.canPan) && (l.is(i.$stage) || i.$stage.find(l).length) || (l.is(".fancybox-image") && o.preventDefault(),
                            n.fancybox.isMobile && l.parents(".fancybox-caption").length)) && (i.isScrollable = c(l) || c(l.parent()),
                            n.fancybox.isMobile && i.isScrollable || o.preventDefault(),
                            (1 === i.startPoints.length || u.hasError) && (i.canPan ? (n.fancybox.stop(i.$content),
                                i.isPanning = !0) : i.isSwiping = !0,
                                i.$container.addClass("fancybox-is-grabbing")),
                            2 === i.startPoints.length && "image" === u.type && (u.isLoaded || u.$ghost) && (i.canTap = !1,
                                i.isSwiping = !1,
                                i.isPanning = !1,
                                i.isZooming = !0,
                                n.fancybox.stop(i.$content),
                                i.centerPointStartX = .5 * (i.startPoints[0].x + i.startPoints[1].x) - n(e).scrollLeft(),
                                i.centerPointStartY = .5 * (i.startPoints[0].y + i.startPoints[1].y) - n(e).scrollTop(),
                                i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width,
                                i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height,
                                i.startDistanceBetweenFingers = r(i.startPoints[0], i.startPoints[1]))))
                        }
                    }
                    ,
                    d.prototype.onscroll = function(e) {
                        this.isScrolling = !0,
                            t.removeEventListener("scroll", this.onscroll, !0)
                    }
                    ,
                    d.prototype.ontouchmove = function(e) {
                        var t = this;
                        return void 0 !== e.originalEvent.buttons && 0 === e.originalEvent.buttons ? void t.ontouchend(e) : t.isScrolling ? void (t.canTap = !1) : (t.newPoints = s(e),
                            void ((t.opts || t.canPan) && t.newPoints.length && t.newPoints.length && (t.isSwiping && !0 === t.isSwiping || e.preventDefault(),
                                t.distanceX = r(t.newPoints[0], t.startPoints[0], "x"),
                                t.distanceY = r(t.newPoints[0], t.startPoints[0], "y"),
                                t.distance = r(t.newPoints[0], t.startPoints[0]),
                            t.distance > 0 && (t.isSwiping ? t.onSwipe(e) : t.isPanning ? t.onPan() : t.isZooming && t.onZoom()))))
                    }
                    ,
                    d.prototype.onSwipe = function(t) {
                        var s, r = this, a = r.instance, l = r.isSwiping, c = r.sliderStartPos.left || 0;
                        if (!0 !== l)
                            "x" == l && (r.distanceX > 0 && (r.instance.group.length < 2 || 0 === r.instance.current.index && !r.instance.current.opts.loop) ? c += Math.pow(r.distanceX, .8) : r.distanceX < 0 && (r.instance.group.length < 2 || r.instance.current.index === r.instance.group.length - 1 && !r.instance.current.opts.loop) ? c -= Math.pow(-r.distanceX, .8) : c += r.distanceX),
                                r.sliderLastPos = {
                                    top: "x" == l ? 0 : r.sliderStartPos.top + r.distanceY,
                                    left: c
                                },
                            r.requestId && (i(r.requestId),
                                r.requestId = null),
                                r.requestId = o((function() {
                                        r.sliderLastPos && (n.each(r.instance.slides, (function(e, t) {
                                                var o = t.pos - r.instance.currPos;
                                                n.fancybox.setTranslate(t.$slide, {
                                                    top: r.sliderLastPos.top,
                                                    left: r.sliderLastPos.left + o * r.canvasWidth + o * t.opts.gutter
                                                })
                                            }
                                        )),
                                            r.$container.addClass("fancybox-is-sliding"))
                                    }
                                ));
                        else if (Math.abs(r.distance) > 10) {
                            if (r.canTap = !1,
                                a.group.length < 2 && r.opts.vertical ? r.isSwiping = "y" : a.isDragging || !1 === r.opts.vertical || "auto" === r.opts.vertical && n(e).width() > 800 ? r.isSwiping = "x" : (s = Math.abs(180 * Math.atan2(r.distanceY, r.distanceX) / Math.PI),
                                    r.isSwiping = s > 45 && s < 135 ? "y" : "x"),
                            "y" === r.isSwiping && n.fancybox.isMobile && r.isScrollable)
                                return void (r.isScrolling = !0);
                            a.isDragging = r.isSwiping,
                                r.startPoints = r.newPoints,
                                n.each(a.slides, (function(e, t) {
                                        var o, i;
                                        n.fancybox.stop(t.$slide),
                                            o = n.fancybox.getTranslate(t.$slide),
                                            i = n.fancybox.getTranslate(a.$refs.stage),
                                            t.$slide.css({
                                                transform: "",
                                                opacity: "",
                                                "transition-duration": ""
                                            }).removeClass("fancybox-animated").removeClass((function(e, t) {
                                                    return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                                                }
                                            )),
                                        t.pos === a.current.pos && (r.sliderStartPos.top = o.top - i.top,
                                            r.sliderStartPos.left = o.left - i.left),
                                            n.fancybox.setTranslate(t.$slide, {
                                                top: o.top - i.top,
                                                left: o.left - i.left
                                            })
                                    }
                                )),
                            a.SlideShow && a.SlideShow.isActive && a.SlideShow.stop()
                        }
                    }
                    ,
                    d.prototype.onPan = function() {
                        var e = this;
                        r(e.newPoints[0], e.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5) ? e.startPoints = e.newPoints : (e.canTap = !1,
                            e.contentLastPos = e.limitMovement(),
                        e.requestId && i(e.requestId),
                            e.requestId = o((function() {
                                    n.fancybox.setTranslate(e.$content, e.contentLastPos)
                                }
                            )))
                    }
                    ,
                    d.prototype.limitMovement = function() {
                        var e, t, n, o, i, s, r = this, a = r.canvasWidth, l = r.canvasHeight, c = r.distanceX, d = r.distanceY, u = r.contentStartPos, p = u.left, f = u.top, h = u.width, g = u.height;
                        return i = h > a ? p + c : p,
                            s = f + d,
                            e = Math.max(0, .5 * a - .5 * h),
                            t = Math.max(0, .5 * l - .5 * g),
                            n = Math.min(a - h, .5 * a - .5 * h),
                            o = Math.min(l - g, .5 * l - .5 * g),
                        c > 0 && i > e && (i = e - 1 + Math.pow(-e + p + c, .8) || 0),
                        c < 0 && i < n && (i = n + 1 - Math.pow(n - p - c, .8) || 0),
                        d > 0 && s > t && (s = t - 1 + Math.pow(-t + f + d, .8) || 0),
                        d < 0 && s < o && (s = o + 1 - Math.pow(o - f - d, .8) || 0),
                            {
                                top: s,
                                left: i
                            }
                    }
                    ,
                    d.prototype.limitPosition = function(e, t, n, o) {
                        var i = this.canvasWidth
                            , s = this.canvasHeight;
                        return n > i ? e = (e = e > 0 ? 0 : e) < i - n ? i - n : e : e = Math.max(0, i / 2 - n / 2),
                            o > s ? t = (t = t > 0 ? 0 : t) < s - o ? s - o : t : t = Math.max(0, s / 2 - o / 2),
                            {
                                top: t,
                                left: e
                            }
                    }
                    ,
                    d.prototype.onZoom = function() {
                        var t = this
                            , s = t.contentStartPos
                            , a = s.width
                            , l = s.height
                            , c = s.left
                            , d = s.top
                            , u = r(t.newPoints[0], t.newPoints[1]) / t.startDistanceBetweenFingers
                            , p = Math.floor(a * u)
                            , f = Math.floor(l * u)
                            , h = (a - p) * t.percentageOfImageAtPinchPointX
                            , g = (l - f) * t.percentageOfImageAtPinchPointY
                            , v = (t.newPoints[0].x + t.newPoints[1].x) / 2 - n(e).scrollLeft()
                            , m = (t.newPoints[0].y + t.newPoints[1].y) / 2 - n(e).scrollTop()
                            , y = v - t.centerPointStartX
                            , b = {
                            top: d + (g + (m - t.centerPointStartY)),
                            left: c + (h + y),
                            scaleX: u,
                            scaleY: u
                        };
                        t.canTap = !1,
                            t.newWidth = p,
                            t.newHeight = f,
                            t.contentLastPos = b,
                        t.requestId && i(t.requestId),
                            t.requestId = o((function() {
                                    n.fancybox.setTranslate(t.$content, t.contentLastPos)
                                }
                            ))
                    }
                    ,
                    d.prototype.ontouchend = function(e) {
                        var o = this
                            , r = o.isSwiping
                            , a = o.isPanning
                            , l = o.isZooming
                            , c = o.isScrolling;
                        if (o.endPoints = s(e),
                            o.dMs = Math.max((new Date).getTime() - o.startTime, 1),
                            o.$container.removeClass("fancybox-is-grabbing"),
                            n(t).off(".fb.touch"),
                            t.removeEventListener("scroll", o.onscroll, !0),
                        o.requestId && (i(o.requestId),
                            o.requestId = null),
                            o.isSwiping = !1,
                            o.isPanning = !1,
                            o.isZooming = !1,
                            o.isScrolling = !1,
                            o.instance.isDragging = !1,
                            o.canTap)
                            return o.onTap(e);
                        o.speed = 100,
                            o.velocityX = o.distanceX / o.dMs * .5,
                            o.velocityY = o.distanceY / o.dMs * .5,
                            a ? o.endPanning() : l ? o.endZooming() : o.endSwiping(r, c)
                    }
                    ,
                    d.prototype.endSwiping = function(e, t) {
                        var o = this
                            , i = !1
                            , s = o.instance.group.length
                            , r = Math.abs(o.distanceX)
                            , a = "x" == e && s > 1 && (o.dMs > 130 && r > 10 || r > 50);
                        o.sliderLastPos = null,
                            "y" == e && !t && Math.abs(o.distanceY) > 50 ? (n.fancybox.animate(o.instance.current.$slide, {
                                top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
                                opacity: 0
                            }, 200),
                                i = o.instance.close(!0, 250)) : a && o.distanceX > 0 ? i = o.instance.previous(300) : a && o.distanceX < 0 && (i = o.instance.next(300)),
                        !1 !== i || "x" != e && "y" != e || o.instance.centerSlide(200),
                            o.$container.removeClass("fancybox-is-sliding")
                    }
                    ,
                    d.prototype.endPanning = function() {
                        var e, t, o, i = this;
                        i.contentLastPos && (!1 === i.opts.momentum || i.dMs > 350 ? (e = i.contentLastPos.left,
                            t = i.contentLastPos.top) : (e = i.contentLastPos.left + 500 * i.velocityX,
                            t = i.contentLastPos.top + 500 * i.velocityY),
                            (o = i.limitPosition(e, t, i.contentStartPos.width, i.contentStartPos.height)).width = i.contentStartPos.width,
                            o.height = i.contentStartPos.height,
                            n.fancybox.animate(i.$content, o, 366))
                    }
                    ,
                    d.prototype.endZooming = function() {
                        var e, t, o, i, s = this, r = s.instance.current, a = s.newWidth, l = s.newHeight;
                        s.contentLastPos && (e = s.contentLastPos.left,
                            i = {
                                top: t = s.contentLastPos.top,
                                left: e,
                                width: a,
                                height: l,
                                scaleX: 1,
                                scaleY: 1
                            },
                            n.fancybox.setTranslate(s.$content, i),
                            a < s.canvasWidth && l < s.canvasHeight ? s.instance.scaleToFit(150) : a > r.width || l > r.height ? s.instance.scaleToActual(s.centerPointStartX, s.centerPointStartY, 150) : (o = s.limitPosition(e, t, a, l),
                                n.fancybox.animate(s.$content, o, 150)))
                    }
                    ,
                    d.prototype.onTap = function(t) {
                        var o, i = this, r = n(t.target), a = i.instance, l = a.current, c = t && s(t) || i.startPoints, d = c[0] ? c[0].x - n(e).scrollLeft() - i.stagePos.left : 0, u = c[0] ? c[0].y - n(e).scrollTop() - i.stagePos.top : 0, p = function(e) {
                            var o = l.opts[e];
                            if (n.isFunction(o) && (o = o.apply(a, [l, t])),
                                o)
                                switch (o) {
                                    case "close":
                                        a.close(i.startEvent);
                                        break;
                                    case "toggleControls":
                                        a.toggleControls();
                                        break;
                                    case "next":
                                        a.next();
                                        break;
                                    case "nextOrClose":
                                        a.group.length > 1 ? a.next() : a.close(i.startEvent);
                                        break;
                                    case "zoom":
                                        "image" == l.type && (l.isLoaded || l.$ghost) && (a.canPan() ? a.scaleToFit() : a.isScaledDown() ? a.scaleToActual(d, u) : a.group.length < 2 && a.close(i.startEvent))
                                }
                        };
                        if ((!t.originalEvent || 2 != t.originalEvent.button) && (r.is("img") || !(d > r[0].clientWidth + r.offset().left))) {
                            if (r.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))
                                o = "Outside";
                            else if (r.is(".fancybox-slide"))
                                o = "Slide";
                            else {
                                if (!a.current.$content || !a.current.$content.find(r).addBack().filter(r).length)
                                    return;
                                o = "Content"
                            }
                            if (i.tapped) {
                                if (clearTimeout(i.tapped),
                                    i.tapped = null,
                                Math.abs(d - i.tapX) > 50 || Math.abs(u - i.tapY) > 50)
                                    return this;
                                p("dblclick" + o)
                            } else
                                i.tapX = d,
                                    i.tapY = u,
                                    l.opts["dblclick" + o] && l.opts["dblclick" + o] !== l.opts["click" + o] ? i.tapped = setTimeout((function() {
                                            i.tapped = null,
                                            a.isAnimating || p("click" + o)
                                        }
                                    ), 500) : p("click" + o);
                            return this
                        }
                    }
                    ,
                    n(t).on("onActivate.fb", (function(e, t) {
                            t && !t.Guestures && (t.Guestures = new d(t))
                        }
                    )).on("beforeClose.fb", (function(e, t) {
                            t && t.Guestures && t.Guestures.destroy()
                        }
                    ))
            }(window, document, jQuery),
            function(e, t) {
                "use strict";
                t.extend(!0, t.fancybox.defaults, {
                    btnTpl: {
                        slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
                    },
                    slideShow: {
                        autoStart: !1,
                        speed: 3e3,
                        progress: !0
                    }
                });
                var n = function(e) {
                    this.instance = e,
                        this.init()
                };
                t.extend(n.prototype, {
                    timer: null,
                    isActive: !1,
                    $button: null,
                    init: function() {
                        var e = this
                            , n = e.instance
                            , o = n.group[n.currIndex].opts.slideShow;
                        e.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", (function() {
                                e.toggle()
                            }
                        )),
                            n.group.length < 2 || !o ? e.$button.hide() : o.progress && (e.$progress = t('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))
                    },
                    set: function(e) {
                        var n = this
                            , o = n.instance
                            , i = o.current;
                        i && (!0 === e || i.opts.loop || o.currIndex < o.group.length - 1) ? n.isActive && "video" !== i.contentType && (n.$progress && t.fancybox.animate(n.$progress.show(), {
                            scaleX: 1
                        }, i.opts.slideShow.speed),
                            n.timer = setTimeout((function() {
                                    o.current.opts.loop || o.current.index != o.group.length - 1 ? o.next() : o.jumpTo(0)
                                }
                            ), i.opts.slideShow.speed)) : (n.stop(),
                            o.idleSecondsCounter = 0,
                            o.showControls())
                    },
                    clear: function() {
                        var e = this;
                        clearTimeout(e.timer),
                            e.timer = null,
                        e.$progress && e.$progress.removeAttr("style").hide()
                    },
                    start: function() {
                        var e = this
                            , t = e.instance.current;
                        t && (e.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),
                            e.isActive = !0,
                        t.isComplete && e.set(!0),
                            e.instance.trigger("onSlideShowChange", !0))
                    },
                    stop: function() {
                        var e = this
                            , t = e.instance.current;
                        e.clear(),
                            e.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),
                            e.isActive = !1,
                            e.instance.trigger("onSlideShowChange", !1),
                        e.$progress && e.$progress.removeAttr("style").hide()
                    },
                    toggle: function() {
                        var e = this;
                        e.isActive ? e.stop() : e.start()
                    }
                }),
                    t(e).on({
                        "onInit.fb": function(e, t) {
                            t && !t.SlideShow && (t.SlideShow = new n(t))
                        },
                        "beforeShow.fb": function(e, t, n, o) {
                            var i = t && t.SlideShow;
                            o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear()
                        },
                        "afterShow.fb": function(e, t, n) {
                            var o = t && t.SlideShow;
                            o && o.isActive && o.set()
                        },
                        "afterKeydown.fb": function(n, o, i, s, r) {
                            var a = o && o.SlideShow;
                            !a || !i.opts.slideShow || 80 !== r && 32 !== r || t(e.activeElement).is("button,a,input") || (s.preventDefault(),
                                a.toggle())
                        },
                        "beforeClose.fb onDeactivate.fb": function(e, t) {
                            var n = t && t.SlideShow;
                            n && n.stop()
                        }
                    }),
                    t(e).on("visibilitychange", (function() {
                            var n = t.fancybox.getInstance()
                                , o = n && n.SlideShow;
                            o && o.isActive && (e.hidden ? o.clear() : o.set())
                        }
                    ))
            }(document, jQuery),
            function(e, t) {
                "use strict";
                var n = function() {
                    for (var t = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = {}, o = 0; o < t.length; o++) {
                        var i = t[o];
                        if (i && i[1]in e) {
                            for (var s = 0; s < i.length; s++)
                                n[t[0][s]] = i[s];
                            return n
                        }
                    }
                    return !1
                }();
                if (n) {
                    var o = {
                        request: function(t) {
                            (t = t || e.documentElement)[n.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)
                        },
                        exit: function() {
                            e[n.exitFullscreen]()
                        },
                        toggle: function(t) {
                            t = t || e.documentElement,
                                this.isFullscreen() ? this.exit() : this.request(t)
                        },
                        isFullscreen: function() {
                            return Boolean(e[n.fullscreenElement])
                        },
                        enabled: function() {
                            return Boolean(e[n.fullscreenEnabled])
                        }
                    };
                    t.extend(!0, t.fancybox.defaults, {
                        btnTpl: {
                            fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
                        },
                        fullScreen: {
                            autoStart: !1
                        }
                    }),
                        t(e).on(n.fullscreenchange, (function() {
                                var e = o.isFullscreen()
                                    , n = t.fancybox.getInstance();
                                n && (n.current && "image" === n.current.type && n.isAnimating && (n.isAnimating = !1,
                                    n.update(!0, !0, 0),
                                n.isComplete || n.complete()),
                                    n.trigger("onFullscreenChange", e),
                                    n.$refs.container.toggleClass("fancybox-is-fullscreen", e),
                                    n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !e).toggleClass("fancybox-button--fsexit", e))
                            }
                        ))
                }
                t(e).on({
                    "onInit.fb": function(e, t) {
                        n ? t && t.group[t.currIndex].opts.fullScreen ? (t.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", (function(e) {
                                e.stopPropagation(),
                                    e.preventDefault(),
                                    o.toggle()
                            }
                        )),
                        t.opts.fullScreen && !0 === t.opts.fullScreen.autoStart && o.request(),
                            t.FullScreen = o) : t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : t.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
                    },
                    "afterKeydown.fb": function(e, t, n, o, i) {
                        t && t.FullScreen && 70 === i && (o.preventDefault(),
                            t.FullScreen.toggle())
                    },
                    "beforeClose.fb": function(e, t) {
                        t && t.FullScreen && t.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit()
                    }
                })
            }(document, jQuery),
            function(e, t) {
                "use strict";
                var n = "fancybox-thumbs";
                t.fancybox.defaults = t.extend(!0, {
                    btnTpl: {
                        thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
                    },
                    thumbs: {
                        autoStart: !1,
                        hideOnClose: !0,
                        parentEl: ".fancybox-container",
                        axis: "y"
                    }
                }, t.fancybox.defaults);
                var o = function(e) {
                    this.init(e)
                };
                t.extend(o.prototype, {
                    $button: null,
                    $grid: null,
                    $list: null,
                    isVisible: !1,
                    isActive: !1,
                    init: function(e) {
                        var t = this
                            , n = e.group
                            , o = 0;
                        t.instance = e,
                            t.opts = n[e.currIndex].opts.thumbs,
                            e.Thumbs = t,
                            t.$button = e.$refs.toolbar.find("[data-fancybox-thumbs]");
                        for (var i = 0, s = n.length; i < s && (n[i].thumb && o++,
                            !(o > 1)); i++)
                            ;
                        o > 1 && t.opts ? (t.$button.removeAttr("style").on("click", (function() {
                                t.toggle()
                            }
                        )),
                            t.isActive = !0) : t.$button.hide()
                    },
                    create: function() {
                        var e, o = this, i = o.instance, s = o.opts.parentEl, r = [];
                        o.$grid || (o.$grid = t('<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>').appendTo(i.$refs.container.find(s).addBack().filter(s)),
                            o.$grid.on("click", "a", (function() {
                                    i.jumpTo(t(this).attr("data-index"))
                                }
                            ))),
                        o.$list || (o.$list = t('<div class="' + n + '__list">').appendTo(o.$grid)),
                            t.each(i.group, (function(t, n) {
                                    (e = n.thumb) || "image" !== n.type || (e = n.src),
                                        r.push('<a href="javascript:;" tabindex="0" data-index="' + t + '"' + (e && e.length ? ' style="background-image:url(' + e + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
                                }
                            )),
                            o.$list[0].innerHTML = r.join(""),
                        "x" === o.opts.axis && o.$list.width(parseInt(o.$grid.css("padding-right"), 10) + i.group.length * o.$list.children().eq(0).outerWidth(!0))
                    },
                    focus: function(e) {
                        var t, n, o = this, i = o.$list, s = o.$grid;
                        o.instance.current && (n = (t = i.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + o.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(),
                            "y" === o.opts.axis && (n.top < 0 || n.top > i.height() - t.outerHeight()) ? i.stop().animate({
                                scrollTop: i.scrollTop() + n.top
                            }, e) : "x" === o.opts.axis && (n.left < s.scrollLeft() || n.left > s.scrollLeft() + (s.width() - t.outerWidth())) && i.parent().stop().animate({
                                scrollLeft: n.left
                            }, e))
                    },
                    update: function() {
                        var e = this;
                        e.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible),
                            e.isVisible ? (e.$grid || e.create(),
                                e.instance.trigger("onThumbsShow"),
                                e.focus(0)) : e.$grid && e.instance.trigger("onThumbsHide"),
                            e.instance.update()
                    },
                    hide: function() {
                        this.isVisible = !1,
                            this.update()
                    },
                    show: function() {
                        this.isVisible = !0,
                            this.update()
                    },
                    toggle: function() {
                        this.isVisible = !this.isVisible,
                            this.update()
                    }
                }),
                    t(e).on({
                        "onInit.fb": function(e, t) {
                            var n;
                            t && !t.Thumbs && ((n = new o(t)).isActive && !0 === n.opts.autoStart && n.show())
                        },
                        "beforeShow.fb": function(e, t, n, o) {
                            var i = t && t.Thumbs;
                            i && i.isVisible && i.focus(o ? 0 : 250)
                        },
                        "afterKeydown.fb": function(e, t, n, o, i) {
                            var s = t && t.Thumbs;
                            s && s.isActive && 71 === i && (o.preventDefault(),
                                s.toggle())
                        },
                        "beforeClose.fb": function(e, t) {
                            var n = t && t.Thumbs;
                            n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
                        }
                    })
            }(document, jQuery),
            function(e, t) {
                "use strict";
                t.extend(!0, t.fancybox.defaults, {
                    btnTpl: {
                        share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
                    },
                    share: {
                        url: function(e, t) {
                            return !e.currentHash && "inline" !== t.type && "html" !== t.type && (t.origSrc || t.src) || window.location
                        },
                        tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
                    }
                }),
                    t(e).on("click", "[data-fancybox-share]", (function() {
                            var e, n, o = t.fancybox.getInstance(), i = o.current || null;
                            i && ("function" === t.type(i.opts.share.url) && (e = i.opts.share.url.apply(i, [o, i])),
                                n = i.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === i.type ? encodeURIComponent(i.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(e)).replace(/\{\{url_raw\}\}/g, function(e) {
                                    var t = {
                                        "&": "&amp;",
                                        "<": "&lt;",
                                        ">": "&gt;",
                                        '"': "&quot;",
                                        "'": "&#39;",
                                        "/": "&#x2F;",
                                        "`": "&#x60;",
                                        "=": "&#x3D;"
                                    };
                                    return String(e).replace(/[&<>"'`=\/]/g, (function(e) {
                                            return t[e]
                                        }
                                    ))
                                }(e)).replace(/\{\{descr\}\}/g, o.$caption ? encodeURIComponent(o.$caption.text()) : ""),
                                t.fancybox.open({
                                    src: o.translate(o, n),
                                    type: "html",
                                    opts: {
                                        touch: !1,
                                        animationEffect: !1,
                                        afterLoad: function(e, t) {
                                            o.$refs.container.one("beforeClose.fb", (function() {
                                                    e.close(null, 0)
                                                }
                                            )),
                                                t.$content.find(".fancybox-share__button").click((function() {
                                                        return window.open(this.href, "Share", "width=550, height=450"),
                                                            !1
                                                    }
                                                ))
                                        },
                                        mobile: {
                                            autoFocus: !1
                                        }
                                    }
                                }))
                        }
                    ))
            }(document, jQuery),
            function(e, t, n) {
                "use strict";
                function o() {
                    var t = e.location.hash.substr(1)
                        , n = t.split("-")
                        , o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) && parseInt(n.pop(-1), 10) || 1;
                    return {
                        hash: t,
                        index: o < 1 ? 1 : o,
                        gallery: n.join("-")
                    }
                }
                function i(e) {
                    "" !== e.gallery && n("[data-fancybox='" + n.escapeSelector(e.gallery) + "']").eq(e.index - 1).focus().trigger("click.fb-start")
                }
                function s(e) {
                    var t, n;
                    return !!e && ("" !== (n = (t = e.current ? e.current.opts : e.opts).hash || (t.$orig ? t.$orig.data("fancybox") || t.$orig.data("fancybox-trigger") : "")) && n)
                }
                n.escapeSelector || (n.escapeSelector = function(e) {
                        return (e + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, (function(e, t) {
                                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                            }
                        ))
                    }
                ),
                    n((function() {
                            !1 !== n.fancybox.defaults.hash && (n(t).on({
                                "onInit.fb": function(e, t) {
                                    var n, i;
                                    !1 !== t.group[t.currIndex].opts.hash && (n = o(),
                                    (i = s(t)) && n.gallery && i == n.gallery && (t.currIndex = n.index - 1))
                                },
                                "beforeShow.fb": function(n, o, i, r) {
                                    var a;
                                    i && !1 !== i.opts.hash && (a = s(o)) && (o.currentHash = a + (o.group.length > 1 ? "-" + (i.index + 1) : ""),
                                    e.location.hash !== "#" + o.currentHash && (r && !o.origHash && (o.origHash = e.location.hash),
                                    o.hashTimer && clearTimeout(o.hashTimer),
                                        o.hashTimer = setTimeout((function() {
                                                "replaceState"in e.history ? (e.history[r ? "pushState" : "replaceState"]({}, t.title, e.location.pathname + e.location.search + "#" + o.currentHash),
                                                r && (o.hasCreatedHistory = !0)) : e.location.hash = o.currentHash,
                                                    o.hashTimer = null
                                            }
                                        ), 300)))
                                },
                                "beforeClose.fb": function(n, o, i) {
                                    i && !1 !== i.opts.hash && (clearTimeout(o.hashTimer),
                                        o.currentHash && o.hasCreatedHistory ? e.history.back() : o.currentHash && ("replaceState"in e.history ? e.history.replaceState({}, t.title, e.location.pathname + e.location.search + (o.origHash || "")) : e.location.hash = o.origHash),
                                        o.currentHash = null)
                                }
                            }),
                                n(e).on("hashchange.fb", (function() {
                                        var e = o()
                                            , t = null;
                                        n.each(n(".fancybox-container").get().reverse(), (function(e, o) {
                                                var i = n(o).data("FancyBox");
                                                if (i && i.currentHash)
                                                    return t = i,
                                                        !1
                                            }
                                        )),
                                            t ? t.currentHash === e.gallery + "-" + e.index || 1 === e.index && t.currentHash == e.gallery || (t.currentHash = null,
                                                t.close()) : "" !== e.gallery && i(e)
                                    }
                                )),
                                setTimeout((function() {
                                        n.fancybox.getInstance() || i(o())
                                    }
                                ), 50))
                        }
                    ))
            }(window, document, jQuery),
            function(e, t) {
                "use strict";
                var n = (new Date).getTime();
                t(e).on({
                    "onInit.fb": function(e, t, o) {
                        t.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", (function(e) {
                                var o = t.current
                                    , i = (new Date).getTime();
                                t.group.length < 2 || !1 === o.opts.wheel || "auto" === o.opts.wheel && "image" !== o.type || (e.preventDefault(),
                                    e.stopPropagation(),
                                o.$slide.hasClass("fancybox-animated") || (e = e.originalEvent || e,
                                i - n < 250 || (n = i,
                                    t[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]())))
                            }
                        ))
                    }
                })
            }(document, jQuery)
    }
    , function(e, t) {
        var n, o, i, s, r, a;
        n = jQuery,
            i = function() {
                var e = document.createElement("input")
                    , t = "onpaste";
                return e.setAttribute(t, ""),
                    "function" == typeof e[t] ? "paste" : "input"
            }() + ".mask",
            s = navigator.userAgent,
            r = /iphone/i.test(s),
            a = /android/i.test(s),
            n.mask = {
                definitions: {
                    9: "[0-9]",
                    a: "[A-Za-z]",
                    "*": "[A-Za-z0-9]"
                },
                dataName: "rawMaskFn",
                placeholder: "_"
            },
            n.fn.extend({
                caret: function(e, t) {
                    var n;
                    if (0 !== this.length && !this.is(":hidden"))
                        return "number" == typeof e ? (t = "number" == typeof t ? t : e,
                            this.each((function() {
                                    this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && ((n = this.createTextRange()).collapse(!0),
                                        n.moveEnd("character", t),
                                        n.moveStart("character", e),
                                        n.select())
                                }
                            ))) : (this[0].setSelectionRange ? (e = this[0].selectionStart,
                            t = this[0].selectionEnd) : document.selection && document.selection.createRange && (n = document.selection.createRange(),
                            e = 0 - n.duplicate().moveStart("character", -1e5),
                            t = e + n.text.length),
                            {
                                begin: e,
                                end: t
                            })
                },
                unmask: function() {
                    return this.trigger("unmask")
                },
                mask: function(e, t) {
                    var s, l, c, d, u;
                    return !e && this.length > 0 ? n(this[0]).data(n.mask.dataName)() : (t = n.extend({
                        placeholder: n.mask.placeholder,
                        completed: null
                    }, t),
                        s = n.mask.definitions,
                        l = [],
                        c = u = e.length,
                        d = null,
                        n.each(e.split(""), (function(e, t) {
                                "?" == t ? (u--,
                                    c = e) : s[t] ? (l.push(RegExp(s[t])),
                                null === d && (d = l.length - 1)) : l.push(null)
                            }
                        )),
                        this.trigger("unmask").each((function() {
                                function p(e) {
                                    for (; u > ++e && !l[e]; )
                                        ;
                                    return e
                                }
                                function f(e, n) {
                                    var o, i;
                                    if (!(0 > e)) {
                                        for (o = e,
                                                 i = p(n); u > o; o++)
                                            if (l[o]) {
                                                if (!(u > i && l[o].test(y[i])))
                                                    break;
                                                y[o] = y[i],
                                                    y[i] = t.placeholder,
                                                    i = p(i)
                                            }
                                        g(),
                                            m.caret(Math.max(d, e))
                                    }
                                }
                                function h(e, n) {
                                    var o;
                                    for (o = e; n > o && u > o; o++)
                                        l[o] && (y[o] = t.placeholder)
                                }
                                function g() {
                                    m.val(y.join(""))
                                }
                                function v(e) {
                                    var n, o, i = m.val(), s = -1;
                                    for (n = 0,
                                             pos = 0; u > n; n++)
                                        if (l[n]) {
                                            for (y[n] = t.placeholder; pos++ < i.length; )
                                                if (o = i.charAt(pos - 1),
                                                    l[n].test(o)) {
                                                    y[n] = o,
                                                        s = n;
                                                    break
                                                }
                                            if (pos > i.length)
                                                break
                                        } else
                                            y[n] === i.charAt(pos) && n !== c && (pos++,
                                                s = n);
                                    return e ? g() : c > s + 1 ? (m.val(""),
                                        h(0, u)) : (g(),
                                        m.val(m.val().substring(0, s + 1))),
                                        c ? n : d
                                }
                                var m = n(this)
                                    , y = n.map(e.split(""), (function(e) {
                                        return "?" != e ? s[e] ? t.placeholder : e : void 0
                                    }
                                ))
                                    , b = m.val();
                                m.data(n.mask.dataName, (function() {
                                        return n.map(y, (function(e, n) {
                                                return l[n] && e != t.placeholder ? e : null
                                            }
                                        )).join("")
                                    }
                                )),
                                m.attr("readonly") || m.one("unmask", (function() {
                                        m.unbind(".mask").removeData(n.mask.dataName)
                                    }
                                )).bind("focus.mask", (function() {
                                        var t;
                                        clearTimeout(o),
                                            b = m.val(),
                                            t = v(),
                                            o = setTimeout((function() {
                                                    g(),
                                                        t == e.length ? m.caret(0, t) : m.caret(t)
                                                }
                                            ), 10)
                                    }
                                )).bind("blur.mask", (function() {
                                        v(),
                                        m.val() != b && m.change()
                                    }
                                )).bind("keydown.mask", (function(e) {
                                        var t, n, o, i = e.which;
                                        8 === i || 46 === i || r && 127 === i ? (n = (t = m.caret()).begin,
                                        0 == (o = t.end) - n && (n = 46 !== i ? function(e) {
                                            for (; --e >= 0 && !l[e]; )
                                                ;
                                            return e
                                        }(n) : o = p(n - 1),
                                            o = 46 === i ? p(o) : o),
                                            h(n, o),
                                            f(n, o - 1),
                                            e.preventDefault()) : 27 == i && (m.val(b),
                                            m.caret(0, v()),
                                            e.preventDefault())
                                    }
                                )).bind("keypress.mask", (function(e) {
                                        var o, i, s, r = e.which, c = m.caret();
                                        e.ctrlKey || e.altKey || e.metaKey || 32 > r || r && (0 != c.end - c.begin && (h(c.begin, c.end),
                                            f(c.begin, c.end - 1)),
                                            o = p(c.begin - 1),
                                        u > o && (i = String.fromCharCode(r),
                                        l[o].test(i) && (function(e) {
                                            var n, o, i, s;
                                            for (n = e,
                                                     o = t.placeholder; u > n; n++)
                                                if (l[n]) {
                                                    if (i = p(n),
                                                        s = y[n],
                                                        y[n] = o,
                                                        !(u > i && l[i].test(s)))
                                                        break;
                                                    o = s
                                                }
                                        }(o),
                                            y[o] = i,
                                            g(),
                                            s = p(o),
                                            a ? setTimeout(n.proxy(n.fn.caret, m, s), 0) : m.caret(s),
                                        t.completed && s >= u && t.completed.call(m))),
                                            e.preventDefault())
                                    }
                                )).bind(i, (function() {
                                        setTimeout((function() {
                                                var e = v(!0);
                                                m.caret(e),
                                                t.completed && e == m.val().length && t.completed.call(m)
                                            }
                                        ), 0)
                                    }
                                )),
                                    v()
                            }
                        )))
                }
            })
    }
    , function(e, t, n) {
        var o, i, s;
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    }
                    : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
            )(e)
        }
        !function(a) {
            "use strict";
            i = [n(0)],
            void 0 === (s = "function" == typeof (o = function(e) {
                    var t = window.Slick || {};
                    (t = function() {
                        var t = 0;
                        return function(n, o) {
                            var i, s = this;
                            s.defaults = {
                                accessibility: !0,
                                adaptiveHeight: !1,
                                appendArrows: e(n),
                                appendDots: e(n),
                                arrows: !0,
                                asNavFor: null,
                                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                                autoplay: !1,
                                autoplaySpeed: 3e3,
                                centerMode: !1,
                                centerPadding: "50px",
                                cssEase: "ease",
                                customPaging: function(t, n) {
                                    return e('<button type="button" />').text(n + 1)
                                },
                                dots: !1,
                                dotsClass: "slick-dots",
                                draggable: !0,
                                easing: "linear",
                                edgeFriction: .35,
                                fade: !1,
                                focusOnSelect: !1,
                                focusOnChange: !1,
                                infinite: !0,
                                initialSlide: 0,
                                lazyLoad: "ondemand",
                                mobileFirst: !1,
                                pauseOnHover: !0,
                                pauseOnFocus: !0,
                                pauseOnDotsHover: !1,
                                respondTo: "window",
                                responsive: null,
                                rows: 1,
                                rtl: !1,
                                slide: "",
                                slidesPerRow: 1,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                speed: 500,
                                swipe: !0,
                                swipeToSlide: !1,
                                touchMove: !0,
                                touchThreshold: 5,
                                useCSS: !0,
                                useTransform: !0,
                                variableWidth: !1,
                                vertical: !1,
                                verticalSwiping: !1,
                                waitForAnimate: !0,
                                zIndex: 1e3
                            },
                                s.initials = {
                                    animating: !1,
                                    dragging: !1,
                                    autoPlayTimer: null,
                                    currentDirection: 0,
                                    currentLeft: null,
                                    currentSlide: 0,
                                    direction: 1,
                                    $dots: null,
                                    listWidth: null,
                                    listHeight: null,
                                    loadIndex: 0,
                                    $nextArrow: null,
                                    $prevArrow: null,
                                    scrolling: !1,
                                    slideCount: null,
                                    slideWidth: null,
                                    $slideTrack: null,
                                    $slides: null,
                                    sliding: !1,
                                    slideOffset: 0,
                                    swipeLeft: null,
                                    swiping: !1,
                                    $list: null,
                                    touchObject: {},
                                    transformsEnabled: !1,
                                    unslicked: !1
                                },
                                e.extend(s, s.initials),
                                s.activeBreakpoint = null,
                                s.animType = null,
                                s.animProp = null,
                                s.breakpoints = [],
                                s.breakpointSettings = [],
                                s.cssTransitions = !1,
                                s.focussed = !1,
                                s.interrupted = !1,
                                s.hidden = "hidden",
                                s.paused = !0,
                                s.positionProp = null,
                                s.respondTo = null,
                                s.rowCount = 1,
                                s.shouldClick = !0,
                                s.$slider = e(n),
                                s.$slidesCache = null,
                                s.transformType = null,
                                s.transitionType = null,
                                s.visibilityChange = "visibilitychange",
                                s.windowWidth = 0,
                                s.windowTimer = null,
                                i = e(n).data("slick") || {},
                                s.options = e.extend({}, s.defaults, o, i),
                                s.currentSlide = s.options.initialSlide,
                                s.originalSettings = s.options,
                                void 0 !== document.mozHidden ? (s.hidden = "mozHidden",
                                    s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden",
                                    s.visibilityChange = "webkitvisibilitychange"),
                                s.autoPlay = e.proxy(s.autoPlay, s),
                                s.autoPlayClear = e.proxy(s.autoPlayClear, s),
                                s.autoPlayIterator = e.proxy(s.autoPlayIterator, s),
                                s.changeSlide = e.proxy(s.changeSlide, s),
                                s.clickHandler = e.proxy(s.clickHandler, s),
                                s.selectHandler = e.proxy(s.selectHandler, s),
                                s.setPosition = e.proxy(s.setPosition, s),
                                s.swipeHandler = e.proxy(s.swipeHandler, s),
                                s.dragHandler = e.proxy(s.dragHandler, s),
                                s.keyHandler = e.proxy(s.keyHandler, s),
                                s.instanceUid = t++,
                                s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
                                s.registerBreakpoints(),
                                s.init(!0)
                        }
                    }()).prototype.activateADA = function() {
                        this.$slideTrack.find(".slick-active").attr({
                            "aria-hidden": "false"
                        }).find("a, input, button, select").attr({
                            tabindex: "0"
                        })
                    }
                        ,
                        t.prototype.addSlide = t.prototype.slickAdd = function(t, n, o) {
                            var i = this;
                            if ("boolean" == typeof n)
                                o = n,
                                    n = null;
                            else if (n < 0 || n >= i.slideCount)
                                return !1;
                            i.unload(),
                                "number" == typeof n ? 0 === n && 0 === i.$slides.length ? e(t).appendTo(i.$slideTrack) : o ? e(t).insertBefore(i.$slides.eq(n)) : e(t).insertAfter(i.$slides.eq(n)) : !0 === o ? e(t).prependTo(i.$slideTrack) : e(t).appendTo(i.$slideTrack),
                                i.$slides = i.$slideTrack.children(this.options.slide),
                                i.$slideTrack.children(this.options.slide).detach(),
                                i.$slideTrack.append(i.$slides),
                                i.$slides.each((function(t, n) {
                                        e(n).attr("data-slick-index", t)
                                    }
                                )),
                                i.$slidesCache = i.$slides,
                                i.reinit()
                        }
                        ,
                        t.prototype.animateHeight = function() {
                            var e = this;
                            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                                e.$list.animate({
                                    height: t
                                }, e.options.speed)
                            }
                        }
                        ,
                        t.prototype.animateSlide = function(t, n) {
                            var o = {}
                                , i = this;
                            i.animateHeight(),
                            !0 === i.options.rtl && !1 === i.options.vertical && (t = -t),
                                !1 === i.transformsEnabled ? !1 === i.options.vertical ? i.$slideTrack.animate({
                                    left: t
                                }, i.options.speed, i.options.easing, n) : i.$slideTrack.animate({
                                    top: t
                                }, i.options.speed, i.options.easing, n) : !1 === i.cssTransitions ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft),
                                    e({
                                        animStart: i.currentLeft
                                    }).animate({
                                        animStart: t
                                    }, {
                                        duration: i.options.speed,
                                        easing: i.options.easing,
                                        step: function(e) {
                                            e = Math.ceil(e),
                                                !1 === i.options.vertical ? (o[i.animType] = "translate(" + e + "px, 0px)",
                                                    i.$slideTrack.css(o)) : (o[i.animType] = "translate(0px," + e + "px)",
                                                    i.$slideTrack.css(o))
                                        },
                                        complete: function() {
                                            n && n.call()
                                        }
                                    })) : (i.applyTransition(),
                                    t = Math.ceil(t),
                                    !1 === i.options.vertical ? o[i.animType] = "translate3d(" + t + "px, 0px, 0px)" : o[i.animType] = "translate3d(0px," + t + "px, 0px)",
                                    i.$slideTrack.css(o),
                                n && setTimeout((function() {
                                        i.disableTransition(),
                                            n.call()
                                    }
                                ), i.options.speed))
                        }
                        ,
                        t.prototype.getNavTarget = function() {
                            var t = this.options.asNavFor;
                            return t && null !== t && (t = e(t).not(this.$slider)),
                                t
                        }
                        ,
                        t.prototype.asNavFor = function(t) {
                            var n = this.getNavTarget();
                            null !== n && "object" == r(n) && n.each((function() {
                                    var n = e(this).slick("getSlick");
                                    n.unslicked || n.slideHandler(t, !0)
                                }
                            ))
                        }
                        ,
                        t.prototype.applyTransition = function(e) {
                            var t = this
                                , n = {};
                            !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase,
                                !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
                        }
                        ,
                        t.prototype.autoPlay = function() {
                            var e = this;
                            e.autoPlayClear(),
                            e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
                        }
                        ,
                        t.prototype.autoPlayClear = function() {
                            this.autoPlayTimer && clearInterval(this.autoPlayTimer)
                        }
                        ,
                        t.prototype.autoPlayIterator = function() {
                            var e = this
                                , t = e.currentSlide + e.options.slidesToScroll;
                            e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll,
                            e.currentSlide - 1 == 0 && (e.direction = 1))),
                                e.slideHandler(t))
                        }
                        ,
                        t.prototype.buildArrows = function() {
                            var t = this;
                            !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"),
                                t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"),
                                t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                                    t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                                t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
                                t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows),
                                !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                                    "aria-disabled": "true",
                                    tabindex: "-1"
                                }))
                        }
                        ,
                        t.prototype.buildDots = function() {
                            var t, n, o = this;
                            if (!0 === o.options.dots) {
                                for (o.$slider.addClass("slick-dotted"),
                                         n = e("<ul />").addClass(o.options.dotsClass),
                                         t = 0; t <= o.getDotCount(); t += 1)
                                    n.append(e("<li />").append(o.options.customPaging.call(this, o, t)));
                                o.$dots = n.appendTo(o.options.appendDots),
                                    o.$dots.find("li").first().addClass("slick-active")
                            }
                        }
                        ,
                        t.prototype.buildOut = function() {
                            var t = this;
                            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
                                t.slideCount = t.$slides.length,
                                t.$slides.each((function(t, n) {
                                        e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
                                    }
                                )),
                                t.$slider.addClass("slick-slider"),
                                t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(),
                                t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(),
                                t.$slideTrack.css("opacity", 0),
                            !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1),
                                e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
                                t.setupInfinite(),
                                t.buildArrows(),
                                t.buildDots(),
                                t.updateDots(),
                                t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
                            !0 === t.options.draggable && t.$list.addClass("draggable")
                        }
                        ,
                        t.prototype.buildRows = function() {
                            var e, t, n, o, i, s, r, a = this;
                            if (o = document.createDocumentFragment(),
                                s = a.$slider.children(),
                            a.options.rows > 1) {
                                for (r = a.options.slidesPerRow * a.options.rows,
                                         i = Math.ceil(s.length / r),
                                         e = 0; e < i; e++) {
                                    var l = document.createElement("div");
                                    for (t = 0; t < a.options.rows; t++) {
                                        var c = document.createElement("div");
                                        for (n = 0; n < a.options.slidesPerRow; n++) {
                                            var d = e * r + (t * a.options.slidesPerRow + n);
                                            s.get(d) && c.appendChild(s.get(d))
                                        }
                                        l.appendChild(c)
                                    }
                                    o.appendChild(l)
                                }
                                a.$slider.empty().append(o),
                                    a.$slider.children().children().children().css({
                                        width: 100 / a.options.slidesPerRow + "%",
                                        display: "inline-block"
                                    })
                            }
                        }
                        ,
                        t.prototype.checkResponsive = function(t, n) {
                            var o, i, s, r = this, a = !1, l = r.$slider.width(), c = window.innerWidth || e(window).width();
                            if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)),
                            r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                                for (o in i = null,
                                    r.breakpoints)
                                    r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[o] && (i = r.breakpoints[o]) : s > r.breakpoints[o] && (i = r.breakpoints[o]));
                                null !== i ? null !== r.activeBreakpoint ? (i !== r.activeBreakpoint || n) && (r.activeBreakpoint = i,
                                    "unslick" === r.breakpointSettings[i] ? r.unslick(i) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[i]),
                                    !0 === t && (r.currentSlide = r.options.initialSlide),
                                        r.refresh(t)),
                                    a = i) : (r.activeBreakpoint = i,
                                    "unslick" === r.breakpointSettings[i] ? r.unslick(i) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[i]),
                                    !0 === t && (r.currentSlide = r.options.initialSlide),
                                        r.refresh(t)),
                                    a = i) : null !== r.activeBreakpoint && (r.activeBreakpoint = null,
                                    r.options = r.originalSettings,
                                !0 === t && (r.currentSlide = r.options.initialSlide),
                                    r.refresh(t),
                                    a = i),
                                t || !1 === a || r.$slider.trigger("breakpoint", [r, a])
                            }
                        }
                        ,
                        t.prototype.changeSlide = function(t, n) {
                            var o, i, s = this, r = e(t.currentTarget);
                            switch (r.is("a") && t.preventDefault(),
                            r.is("li") || (r = r.closest("li")),
                                o = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll,
                                t.data.message) {
                                case "previous":
                                    i = 0 === o ? s.options.slidesToScroll : s.options.slidesToShow - o,
                                    s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - i, !1, n);
                                    break;
                                case "next":
                                    i = 0 === o ? s.options.slidesToScroll : o,
                                    s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + i, !1, n);
                                    break;
                                case "index":
                                    var a = 0 === t.data.index ? 0 : t.data.index || r.index() * s.options.slidesToScroll;
                                    s.slideHandler(s.checkNavigable(a), !1, n),
                                        r.children().trigger("focus");
                                    break;
                                default:
                                    return
                            }
                        }
                        ,
                        t.prototype.checkNavigable = function(e) {
                            var t, n;
                            if (n = 0,
                            e > (t = this.getNavigableIndexes())[t.length - 1])
                                e = t[t.length - 1];
                            else
                                for (var o in t) {
                                    if (e < t[o]) {
                                        e = n;
                                        break
                                    }
                                    n = t[o]
                                }
                            return e
                        }
                        ,
                        t.prototype.cleanUpEvents = function() {
                            var t = this;
                            t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
                            !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)),
                                t.$slider.off("focus.slick blur.slick"),
                            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
                            t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide),
                            !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler),
                            t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))),
                                t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
                                t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
                                t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
                                t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
                                t.$list.off("click.slick", t.clickHandler),
                                e(document).off(t.visibilityChange, t.visibility),
                                t.cleanUpSlideEvents(),
                            !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler),
                            !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler),
                                e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange),
                                e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
                                e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault),
                                e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
                        }
                        ,
                        t.prototype.cleanUpSlideEvents = function() {
                            var t = this;
                            t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
                                t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
                        }
                        ,
                        t.prototype.cleanUpRows = function() {
                            var e, t = this;
                            t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"),
                                t.$slider.empty().append(e))
                        }
                        ,
                        t.prototype.clickHandler = function(e) {
                            !1 === this.shouldClick && (e.stopImmediatePropagation(),
                                e.stopPropagation(),
                                e.preventDefault())
                        }
                        ,
                        t.prototype.destroy = function(t) {
                            var n = this;
                            n.autoPlayClear(),
                                n.touchObject = {},
                                n.cleanUpEvents(),
                                e(".slick-cloned", n.$slider).detach(),
                            n.$dots && n.$dots.remove(),
                            n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                            n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()),
                            n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                            n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()),
                            n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function() {
                                    e(this).attr("style", e(this).data("originalStyling"))
                                }
                            )),
                                n.$slideTrack.children(this.options.slide).detach(),
                                n.$slideTrack.detach(),
                                n.$list.detach(),
                                n.$slider.append(n.$slides)),
                                n.cleanUpRows(),
                                n.$slider.removeClass("slick-slider"),
                                n.$slider.removeClass("slick-initialized"),
                                n.$slider.removeClass("slick-dotted"),
                                n.unslicked = !0,
                            t || n.$slider.trigger("destroy", [n])
                        }
                        ,
                        t.prototype.disableTransition = function(e) {
                            var t = this
                                , n = {};
                            n[t.transitionType] = "",
                                !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
                        }
                        ,
                        t.prototype.fadeSlide = function(e, t) {
                            var n = this;
                            !1 === n.cssTransitions ? (n.$slides.eq(e).css({
                                zIndex: n.options.zIndex
                            }),
                                n.$slides.eq(e).animate({
                                    opacity: 1
                                }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e),
                                n.$slides.eq(e).css({
                                    opacity: 1,
                                    zIndex: n.options.zIndex
                                }),
                            t && setTimeout((function() {
                                    n.disableTransition(e),
                                        t.call()
                                }
                            ), n.options.speed))
                        }
                        ,
                        t.prototype.fadeSlideOut = function(e) {
                            var t = this;
                            !1 === t.cssTransitions ? t.$slides.eq(e).animate({
                                opacity: 0,
                                zIndex: t.options.zIndex - 2
                            }, t.options.speed, t.options.easing) : (t.applyTransition(e),
                                t.$slides.eq(e).css({
                                    opacity: 0,
                                    zIndex: t.options.zIndex - 2
                                }))
                        }
                        ,
                        t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
                            var t = this;
                            null !== e && (t.$slidesCache = t.$slides,
                                t.unload(),
                                t.$slideTrack.children(this.options.slide).detach(),
                                t.$slidesCache.filter(e).appendTo(t.$slideTrack),
                                t.reinit())
                        }
                        ,
                        t.prototype.focusHandler = function() {
                            var t = this;
                            t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", (function(n) {
                                    n.stopImmediatePropagation();
                                    var o = e(this);
                                    setTimeout((function() {
                                            t.options.pauseOnFocus && (t.focussed = o.is(":focus"),
                                                t.autoPlay())
                                        }
                                    ), 0)
                                }
                            ))
                        }
                        ,
                        t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
                            return this.currentSlide
                        }
                        ,
                        t.prototype.getDotCount = function() {
                            var e = this
                                , t = 0
                                , n = 0
                                , o = 0;
                            if (!0 === e.options.infinite)
                                if (e.slideCount <= e.options.slidesToShow)
                                    ++o;
                                else
                                    for (; t < e.slideCount; )
                                        ++o,
                                            t = n + e.options.slidesToScroll,
                                            n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                            else if (!0 === e.options.centerMode)
                                o = e.slideCount;
                            else if (e.options.asNavFor)
                                for (; t < e.slideCount; )
                                    ++o,
                                        t = n + e.options.slidesToScroll,
                                        n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                            else
                                o = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
                            return o - 1
                        }
                        ,
                        t.prototype.getLeft = function(e) {
                            var t, n, o, i, s = this, r = 0;
                            return s.slideOffset = 0,
                                n = s.$slides.first().outerHeight(!0),
                                !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1,
                                    i = -1,
                                !0 === s.options.vertical && !0 === s.options.centerMode && (2 === s.options.slidesToShow ? i = -1.5 : 1 === s.options.slidesToShow && (i = -2)),
                                    r = n * s.options.slidesToShow * i),
                                s.slideCount % s.options.slidesToScroll != 0 && e + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (e > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (e - s.slideCount)) * s.slideWidth * -1,
                                    r = (s.options.slidesToShow - (e - s.slideCount)) * n * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1,
                                    r = s.slideCount % s.options.slidesToScroll * n * -1))) : e + s.options.slidesToShow > s.slideCount && (s.slideOffset = (e + s.options.slidesToShow - s.slideCount) * s.slideWidth,
                                    r = (e + s.options.slidesToShow - s.slideCount) * n),
                            s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0,
                                r = 0),
                                !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow ? s.slideOffset = s.slideWidth * Math.floor(s.options.slidesToShow) / 2 - s.slideWidth * s.slideCount / 2 : !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0,
                                    s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)),
                                t = !1 === s.options.vertical ? e * s.slideWidth * -1 + s.slideOffset : e * n * -1 + r,
                            !0 === s.options.variableWidth && (o = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow),
                                t = !0 === s.options.rtl ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
                            !0 === s.options.centerMode && (o = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow + 1),
                                t = !0 === s.options.rtl ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
                                t += (s.$list.width() - o.outerWidth()) / 2)),
                                t
                        }
                        ,
                        t.prototype.getOption = t.prototype.slickGetOption = function(e) {
                            return this.options[e]
                        }
                        ,
                        t.prototype.getNavigableIndexes = function() {
                            var e, t = this, n = 0, o = 0, i = [];
                            for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll,
                                o = -1 * t.options.slidesToScroll,
                                e = 2 * t.slideCount); n < e; )
                                i.push(n),
                                    n = o + t.options.slidesToScroll,
                                    o += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
                            return i
                        }
                        ,
                        t.prototype.getSlick = function() {
                            return this
                        }
                        ,
                        t.prototype.getSlideCount = function() {
                            var t, n, o = this;
                            return n = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0,
                                !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each((function(i, s) {
                                        if (s.offsetLeft - n + e(s).outerWidth() / 2 > -1 * o.swipeLeft)
                                            return t = s,
                                                !1
                                    }
                                )),
                                Math.abs(e(t).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
                        }
                        ,
                        t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
                            this.changeSlide({
                                data: {
                                    message: "index",
                                    index: parseInt(e)
                                }
                            }, t)
                        }
                        ,
                        t.prototype.init = function(t) {
                            var n = this;
                            e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"),
                                n.buildRows(),
                                n.buildOut(),
                                n.setProps(),
                                n.startLoad(),
                                n.loadSlider(),
                                n.initializeEvents(),
                                n.updateArrows(),
                                n.updateDots(),
                                n.checkResponsive(!0),
                                n.focusHandler()),
                            t && n.$slider.trigger("init", [n]),
                            !0 === n.options.accessibility && n.initADA(),
                            n.options.autoplay && (n.paused = !1,
                                n.autoPlay())
                        }
                        ,
                        t.prototype.initADA = function() {
                            var t = this
                                , n = Math.ceil(t.slideCount / t.options.slidesToShow)
                                , o = t.getNavigableIndexes().filter((function(e) {
                                    return e >= 0 && e < t.slideCount
                                }
                            ));
                            t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                                "aria-hidden": "true",
                                tabindex: "-1"
                            }).find("a, input, button, select").attr({
                                tabindex: "-1"
                            }),
                            null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each((function(n) {
                                    var i = o.indexOf(n);
                                    e(this).attr({
                                        role: "tabpanel",
                                        id: "slick-slide" + t.instanceUid + n,
                                        tabindex: -1
                                    }),
                                    -1 !== i && e(this).attr({
                                        "aria-describedby": "slick-slide-control" + t.instanceUid + i
                                    })
                                }
                            )),
                                t.$dots.attr("role", "tablist").find("li").each((function(i) {
                                        var s = o[i];
                                        e(this).attr({
                                            role: "presentation"
                                        }),
                                            e(this).find("button").first().attr({
                                                role: "tab",
                                                id: "slick-slide-control" + t.instanceUid + i,
                                                "aria-controls": "slick-slide" + t.instanceUid + s,
                                                "aria-label": i + 1 + " of " + n,
                                                "aria-selected": null,
                                                tabindex: "-1"
                                            })
                                    }
                                )).eq(t.currentSlide).find("button").attr({
                                    "aria-selected": "true",
                                    tabindex: "0"
                                }).end());
                            for (var i = t.currentSlide, s = i + t.options.slidesToShow; i < s; i++)
                                t.$slides.eq(i).attr("tabindex", 0);
                            t.activateADA()
                        }
                        ,
                        t.prototype.initArrowEvents = function() {
                            var e = this;
                            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                                message: "previous"
                            }, e.changeSlide),
                                e.$nextArrow.off("click.slick").on("click.slick", {
                                    message: "next"
                                }, e.changeSlide),
                            !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler),
                                e.$nextArrow.on("keydown.slick", e.keyHandler)))
                        }
                        ,
                        t.prototype.initDotEvents = function() {
                            var t = this;
                            !0 === t.options.dots && (e("li", t.$dots).on("click.slick", {
                                message: "index"
                            }, t.changeSlide),
                            !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)),
                            !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
                        }
                        ,
                        t.prototype.initSlideEvents = function() {
                            var t = this;
                            t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
                                t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
                        }
                        ,
                        t.prototype.initializeEvents = function() {
                            var t = this;
                            t.initArrowEvents(),
                                t.initDotEvents(),
                                t.initSlideEvents(),
                                t.$list.on("touchstart.slick mousedown.slick", {
                                    action: "start"
                                }, t.swipeHandler),
                                t.$list.on("touchmove.slick mousemove.slick", {
                                    action: "move"
                                }, t.swipeHandler),
                                t.$list.on("touchend.slick mouseup.slick", {
                                    action: "end"
                                }, t.swipeHandler),
                                t.$list.on("touchcancel.slick mouseleave.slick", {
                                    action: "end"
                                }, t.swipeHandler),
                                t.$list.on("click.slick", t.clickHandler),
                                e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
                            !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler),
                            !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
                                e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)),
                                e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)),
                                e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault),
                                e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
                                e(t.setPosition)
                        }
                        ,
                        t.prototype.initUI = function() {
                            var e = this;
                            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(),
                                e.$nextArrow.show()),
                            !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
                        }
                        ,
                        t.prototype.keyHandler = function(e) {
                            var t = this;
                            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
                                data: {
                                    message: !0 === t.options.rtl ? "next" : "previous"
                                }
                            }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
                                data: {
                                    message: !0 === t.options.rtl ? "previous" : "next"
                                }
                            }))
                        }
                        ,
                        t.prototype.lazyLoad = function() {
                            function t(t) {
                                e("img[data-lazy]", t).each((function() {
                                        var t = e(this)
                                            , n = e(this).attr("data-lazy")
                                            , o = e(this).attr("data-srcset")
                                            , i = e(this).attr("data-sizes") || s.$slider.attr("data-sizes")
                                            , r = document.createElement("img");
                                        r.onload = function() {
                                            t.animate({
                                                opacity: 0
                                            }, 100, (function() {
                                                    o && (t.attr("srcset", o),
                                                    i && t.attr("sizes", i)),
                                                        t.attr("src", n).animate({
                                                            opacity: 1
                                                        }, 200, (function() {
                                                                t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                                                            }
                                                        )),
                                                        s.$slider.trigger("lazyLoaded", [s, t, n])
                                                }
                                            ))
                                        }
                                            ,
                                            r.onerror = function() {
                                                t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                                                    s.$slider.trigger("lazyLoadError", [s, t, n])
                                            }
                                            ,
                                            r.src = n
                                    }
                                ))
                            }
                            var n, o, i, s = this;
                            if (!0 === s.options.centerMode ? !0 === s.options.infinite ? i = (o = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2 : (o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)),
                                i = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide,
                                i = Math.ceil(o + s.options.slidesToShow),
                            !0 === s.options.fade && (o > 0 && o--,
                            i <= s.slideCount && i++)),
                                n = s.$slider.find(".slick-slide").slice(o, i),
                            "anticipated" === s.options.lazyLoad)
                                for (var r = o - 1, a = i, l = s.$slider.find(".slick-slide"), c = 0; c < s.options.slidesToScroll; c++)
                                    r < 0 && (r = s.slideCount - 1),
                                        n = (n = n.add(l.eq(r))).add(l.eq(a)),
                                        r--,
                                        a++;
                            t(n),
                                s.slideCount <= s.options.slidesToShow ? t(s.$slider.find(".slick-slide")) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? t(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)) : 0 === s.currentSlide && t(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow))
                        }
                        ,
                        t.prototype.loadSlider = function() {
                            var e = this;
                            e.setPosition(),
                                e.$slideTrack.css({
                                    opacity: 1
                                }),
                                e.$slider.removeClass("slick-loading"),
                                e.initUI(),
                            "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
                        }
                        ,
                        t.prototype.next = t.prototype.slickNext = function() {
                            this.changeSlide({
                                data: {
                                    message: "next"
                                }
                            })
                        }
                        ,
                        t.prototype.orientationChange = function() {
                            this.checkResponsive(),
                                this.setPosition()
                        }
                        ,
                        t.prototype.pause = t.prototype.slickPause = function() {
                            this.autoPlayClear(),
                                this.paused = !0
                        }
                        ,
                        t.prototype.play = t.prototype.slickPlay = function() {
                            var e = this;
                            e.autoPlay(),
                                e.options.autoplay = !0,
                                e.paused = !1,
                                e.focussed = !1,
                                e.interrupted = !1
                        }
                        ,
                        t.prototype.postSlide = function(t) {
                            var n = this;
                            n.unslicked || (n.$slider.trigger("afterChange", [n, t]),
                                n.animating = !1,
                            n.slideCount > n.options.slidesToShow && n.setPosition(),
                                n.swipeLeft = null,
                            n.options.autoplay && n.autoPlay(),
                            !0 === n.options.accessibility && (n.initADA(),
                            n.options.focusOnChange && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()))
                        }
                        ,
                        t.prototype.prev = t.prototype.slickPrev = function() {
                            this.changeSlide({
                                data: {
                                    message: "previous"
                                }
                            })
                        }
                        ,
                        t.prototype.preventDefault = function(e) {
                            e.preventDefault()
                        }
                        ,
                        t.prototype.progressiveLazyLoad = function(t) {
                            t = t || 1;
                            var n, o, i, s, r, a = this, l = e("img[data-lazy]", a.$slider);
                            l.length ? (n = l.first(),
                                o = n.attr("data-lazy"),
                                i = n.attr("data-srcset"),
                                s = n.attr("data-sizes") || a.$slider.attr("data-sizes"),
                                (r = document.createElement("img")).onload = function() {
                                    i && (n.attr("srcset", i),
                                    s && n.attr("sizes", s)),
                                        n.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                                    !0 === a.options.adaptiveHeight && a.setPosition(),
                                        a.$slider.trigger("lazyLoaded", [a, n, o]),
                                        a.progressiveLazyLoad()
                                }
                                ,
                                r.onerror = function() {
                                    t < 3 ? setTimeout((function() {
                                            a.progressiveLazyLoad(t + 1)
                                        }
                                    ), 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                                        a.$slider.trigger("lazyLoadError", [a, n, o]),
                                        a.progressiveLazyLoad())
                                }
                                ,
                                r.src = o) : a.$slider.trigger("allImagesLoaded", [a])
                        }
                        ,
                        t.prototype.refresh = function(t) {
                            var n, o, i = this;
                            o = i.slideCount - i.options.slidesToShow,
                            !i.options.infinite && i.currentSlide > o && (i.currentSlide = o),
                            i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0),
                                n = i.currentSlide,
                                i.destroy(!0),
                                e.extend(i, i.initials, {
                                    currentSlide: n
                                }),
                                i.init(),
                            t || i.changeSlide({
                                data: {
                                    message: "index",
                                    index: n
                                }
                            }, !1)
                        }
                        ,
                        t.prototype.registerBreakpoints = function() {
                            var t, n, o, i = this, s = i.options.responsive || null;
                            if ("array" === e.type(s) && s.length) {
                                for (t in i.respondTo = i.options.respondTo || "window",
                                    s)
                                    if (o = i.breakpoints.length - 1,
                                        s.hasOwnProperty(t)) {
                                        for (n = s[t].breakpoint; o >= 0; )
                                            i.breakpoints[o] && i.breakpoints[o] === n && i.breakpoints.splice(o, 1),
                                                o--;
                                        i.breakpoints.push(n),
                                            i.breakpointSettings[n] = s[t].settings
                                    }
                                i.breakpoints.sort((function(e, t) {
                                        return i.options.mobileFirst ? e - t : t - e
                                    }
                                ))
                            }
                        }
                        ,
                        t.prototype.reinit = function() {
                            var t = this;
                            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"),
                                t.slideCount = t.$slides.length,
                            t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
                            t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
                                t.registerBreakpoints(),
                                t.setProps(),
                                t.setupInfinite(),
                                t.buildArrows(),
                                t.updateArrows(),
                                t.initArrowEvents(),
                                t.buildDots(),
                                t.updateDots(),
                                t.initDotEvents(),
                                t.cleanUpSlideEvents(),
                                t.initSlideEvents(),
                                t.checkResponsive(!1, !0),
                            !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
                                t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
                                t.setPosition(),
                                t.focusHandler(),
                                t.paused = !t.options.autoplay,
                                t.autoPlay(),
                                t.$slider.trigger("reInit", [t])
                        }
                        ,
                        t.prototype.resize = function() {
                            var t = this;
                            e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay),
                                t.windowDelay = window.setTimeout((function() {
                                        t.windowWidth = e(window).width(),
                                            t.checkResponsive(),
                                        t.unslicked || t.setPosition()
                                    }
                                ), 50))
                        }
                        ,
                        t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, n) {
                            var o = this;
                            if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : o.slideCount - 1 : !0 === t ? --e : e,
                            o.slideCount < 1 || e < 0 || e > o.slideCount - 1)
                                return !1;
                            o.unload(),
                                !0 === n ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(e).remove(),
                                o.$slides = o.$slideTrack.children(this.options.slide),
                                o.$slideTrack.children(this.options.slide).detach(),
                                o.$slideTrack.append(o.$slides),
                                o.$slidesCache = o.$slides,
                                o.reinit()
                        }
                        ,
                        t.prototype.setCSS = function(e) {
                            var t, n, o = this, i = {};
                            !0 === o.options.rtl && (e = -e),
                                t = "left" == o.positionProp ? Math.ceil(e) + "px" : "0px",
                                n = "top" == o.positionProp ? Math.ceil(e) + "px" : "0px",
                                i[o.positionProp] = e,
                                !1 === o.transformsEnabled ? o.$slideTrack.css(i) : (i = {},
                                    !1 === o.cssTransitions ? (i[o.animType] = "translate(" + t + ", " + n + ")",
                                        o.$slideTrack.css(i)) : (i[o.animType] = "translate3d(" + t + ", " + n + ", 0px)",
                                        o.$slideTrack.css(i)))
                        }
                        ,
                        t.prototype.setDimensions = function() {
                            var e = this;
                            !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                                padding: "0px " + e.options.centerPadding
                            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow),
                            !0 === e.options.centerMode && e.$list.css({
                                padding: e.options.centerPadding + " 0px"
                            })),
                                e.listWidth = e.$list.width(),
                                e.listHeight = e.$list.height(),
                                !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow),
                                    e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth),
                                    e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
                            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
                            !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
                        }
                        ,
                        t.prototype.setFade = function() {
                            var t, n = this;
                            n.$slides.each((function(o, i) {
                                    t = n.slideWidth * o * -1,
                                        !0 === n.options.rtl ? e(i).css({
                                            position: "relative",
                                            right: t,
                                            top: 0,
                                            zIndex: n.options.zIndex - 2,
                                            opacity: 0
                                        }) : e(i).css({
                                            position: "relative",
                                            left: t,
                                            top: 0,
                                            zIndex: n.options.zIndex - 2,
                                            opacity: 0
                                        })
                                }
                            )),
                                n.$slides.eq(n.currentSlide).css({
                                    zIndex: n.options.zIndex - 1,
                                    opacity: 1
                                })
                        }
                        ,
                        t.prototype.setHeight = function() {
                            var e = this;
                            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                                e.$list.css("height", t)
                            }
                        }
                        ,
                        t.prototype.setOption = t.prototype.slickSetOption = function() {
                            var t, n, o, i, s, r = this, a = !1;
                            if ("object" === e.type(arguments[0]) ? (o = arguments[0],
                                a = arguments[1],
                                s = "multiple") : "string" === e.type(arguments[0]) && (o = arguments[0],
                                i = arguments[1],
                                a = arguments[2],
                                "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")),
                            "single" === s)
                                r.options[o] = i;
                            else if ("multiple" === s)
                                e.each(o, (function(e, t) {
                                        r.options[e] = t
                                    }
                                ));
                            else if ("responsive" === s)
                                for (n in i)
                                    if ("array" !== e.type(r.options.responsive))
                                        r.options.responsive = [i[n]];
                                    else {
                                        for (t = r.options.responsive.length - 1; t >= 0; )
                                            r.options.responsive[t].breakpoint === i[n].breakpoint && r.options.responsive.splice(t, 1),
                                                t--;
                                        r.options.responsive.push(i[n])
                                    }
                            a && (r.unload(),
                                r.reinit())
                        }
                        ,
                        t.prototype.setPosition = function() {
                            var e = this;
                            e.setDimensions(),
                                e.setHeight(),
                                !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(),
                                e.$slider.trigger("setPosition", [e])
                        }
                        ,
                        t.prototype.setProps = function() {
                            var e = this
                                , t = document.body.style;
                            e.positionProp = !0 === e.options.vertical ? "top" : "left",
                                "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
                            void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0),
                            e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex),
                            void 0 !== t.OTransform && (e.animType = "OTransform",
                                e.transformType = "-o-transform",
                                e.transitionType = "OTransition",
                            void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
                            void 0 !== t.MozTransform && (e.animType = "MozTransform",
                                e.transformType = "-moz-transform",
                                e.transitionType = "MozTransition",
                            void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
                            void 0 !== t.webkitTransform && (e.animType = "webkitTransform",
                                e.transformType = "-webkit-transform",
                                e.transitionType = "webkitTransition",
                            void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
                            void 0 !== t.msTransform && (e.animType = "msTransform",
                                e.transformType = "-ms-transform",
                                e.transitionType = "msTransition",
                            void 0 === t.msTransform && (e.animType = !1)),
                            void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform",
                                e.transformType = "transform",
                                e.transitionType = "transition"),
                                e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
                        }
                        ,
                        t.prototype.setSlideClasses = function(e) {
                            var t, n, o, i, s = this;
                            if (n = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
                                s.$slides.eq(e).addClass("slick-current"),
                            !0 === s.options.centerMode) {
                                var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
                                t = Math.floor(s.options.slidesToShow / 2),
                                !0 === s.options.infinite && (e >= t && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t + r, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = s.options.slidesToShow + e,
                                    n.slice(o - t + 1 + r, o + t + 2).addClass("slick-active").attr("aria-hidden", "false")),
                                    0 === e ? n.eq(n.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && n.eq(s.options.slidesToShow).addClass("slick-center")),
                                    s.$slides.eq(e).addClass("slick-center")
                            } else
                                e >= 0 && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= s.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (i = s.slideCount % s.options.slidesToShow,
                                    o = !0 === s.options.infinite ? s.options.slidesToShow + e : e,
                                    s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? n.slice(o - (s.options.slidesToShow - i), o + i).addClass("slick-active").attr("aria-hidden", "false") : n.slice(o, o + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
                            "ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad || s.lazyLoad()
                        }
                        ,
                        t.prototype.setupInfinite = function() {
                            var t, n, o, i = this;
                            if (!0 === i.options.fade && (i.options.centerMode = !1),
                            !0 === i.options.infinite && !1 === i.options.fade && (n = null,
                            i.slideCount > i.options.slidesToShow)) {
                                for (o = !0 === i.options.centerMode ? i.options.slidesToShow + 1 : i.options.slidesToShow,
                                         t = i.slideCount; t > i.slideCount - o; t -= 1)
                                    n = t - 1,
                                        e(i.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");
                                for (t = 0; t < o + i.slideCount; t += 1)
                                    n = t,
                                        e(i.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");
                                i.$slideTrack.find(".slick-cloned").find("[id]").each((function() {
                                        e(this).attr("id", "")
                                    }
                                ))
                            }
                        }
                        ,
                        t.prototype.interrupt = function(e) {
                            e || this.autoPlay(),
                                this.interrupted = e
                        }
                        ,
                        t.prototype.selectHandler = function(t) {
                            var n = this
                                , o = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide")
                                , i = parseInt(o.attr("data-slick-index"));
                            i || (i = 0),
                                n.slideCount <= n.options.slidesToShow ? n.slideHandler(i, !1, !0) : n.slideHandler(i)
                        }
                        ,
                        t.prototype.slideHandler = function(e, t, n) {
                            var o, i, s, r, a, l = null, c = this;
                            if (t = t || !1,
                                !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e))
                                if (!1 === t && c.asNavFor(e),
                                    o = e,
                                    l = c.getLeft(o),
                                    r = c.getLeft(c.currentSlide),
                                    c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft,
                                !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll))
                                    !1 === c.options.fade && (o = c.currentSlide,
                                        !0 !== n ? c.animateSlide(r, (function() {
                                                c.postSlide(o)
                                            }
                                        )) : c.postSlide(o));
                                else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll))
                                    !1 === c.options.fade && (o = c.currentSlide,
                                        !0 !== n ? c.animateSlide(r, (function() {
                                                c.postSlide(o)
                                            }
                                        )) : c.postSlide(o));
                                else {
                                    if (c.options.autoplay && clearInterval(c.autoPlayTimer),
                                        i = o < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + o : o >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : o - c.slideCount : o,
                                        c.animating = !0,
                                        c.$slider.trigger("beforeChange", [c, c.currentSlide, i]),
                                        s = c.currentSlide,
                                        c.currentSlide = i,
                                        c.setSlideClasses(c.currentSlide),
                                    c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide),
                                        c.updateDots(),
                                        c.updateArrows(),
                                    !0 === c.options.fade)
                                        return !0 !== n ? (c.fadeSlideOut(s),
                                            c.fadeSlide(i, (function() {
                                                    c.postSlide(i)
                                                }
                                            ))) : c.postSlide(i),
                                            void c.animateHeight();
                                    !0 !== n ? c.animateSlide(l, (function() {
                                            c.postSlide(i)
                                        }
                                    )) : c.postSlide(i)
                                }
                        }
                        ,
                        t.prototype.startLoad = function() {
                            var e = this;
                            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(),
                                e.$nextArrow.hide()),
                            !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
                                e.$slider.addClass("slick-loading")
                        }
                        ,
                        t.prototype.swipeDirection = function() {
                            var e, t, n, o, i = this;
                            return e = i.touchObject.startX - i.touchObject.curX,
                                t = i.touchObject.startY - i.touchObject.curY,
                                n = Math.atan2(t, e),
                            (o = Math.round(180 * n / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
                                o <= 45 && o >= 0 || o <= 360 && o >= 315 ? !1 === i.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === i.options.rtl ? "right" : "left" : !0 === i.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
                        }
                        ,
                        t.prototype.swipeEnd = function(e) {
                            var t, n, o = this;
                            if (o.dragging = !1,
                                o.swiping = !1,
                                o.scrolling)
                                return o.scrolling = !1,
                                    !1;
                            if (o.interrupted = !1,
                                o.shouldClick = !(o.touchObject.swipeLength > 10),
                            void 0 === o.touchObject.curX)
                                return !1;
                            if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]),
                            o.touchObject.swipeLength >= o.touchObject.minSwipe) {
                                switch (n = o.swipeDirection()) {
                                    case "left":
                                    case "down":
                                        t = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(),
                                            o.currentDirection = 0;
                                        break;
                                    case "right":
                                    case "up":
                                        t = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(),
                                            o.currentDirection = 1
                                }
                                "vertical" != n && (o.slideHandler(t),
                                    o.touchObject = {},
                                    o.$slider.trigger("swipe", [o, n]))
                            } else
                                o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide),
                                    o.touchObject = {})
                        }
                        ,
                        t.prototype.swipeHandler = function(e) {
                            var t = this;
                            if (!(!1 === t.options.swipe || "ontouchend"in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse")))
                                switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1,
                                    t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold,
                                !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
                                    e.data.action) {
                                    case "start":
                                        t.swipeStart(e);
                                        break;
                                    case "move":
                                        t.swipeMove(e);
                                        break;
                                    case "end":
                                        t.swipeEnd(e)
                                }
                        }
                        ,
                        t.prototype.swipeMove = function(e) {
                            var t, n, o, i, s, r, a = this;
                            return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null,
                            !(!a.dragging || a.scrolling || s && 1 !== s.length) && (t = a.getLeft(a.currentSlide),
                                a.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX,
                                a.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY,
                                a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))),
                                r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))),
                                !a.options.verticalSwiping && !a.swiping && r > 4 ? (a.scrolling = !0,
                                    !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r),
                                    n = a.swipeDirection(),
                                void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0,
                                    e.preventDefault()),
                                    i = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1),
                                !0 === a.options.verticalSwiping && (i = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                                    o = a.touchObject.swipeLength,
                                    a.touchObject.edgeHit = !1,
                                !1 === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (o = a.touchObject.swipeLength * a.options.edgeFriction,
                                    a.touchObject.edgeHit = !0),
                                    !1 === a.options.vertical ? a.swipeLeft = t + o * i : a.swipeLeft = t + o * (a.$list.height() / a.listWidth) * i,
                                !0 === a.options.verticalSwiping && (a.swipeLeft = t + o * i),
                                !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null,
                                    !1) : void a.setCSS(a.swipeLeft))))
                        }
                        ,
                        t.prototype.swipeStart = function(e) {
                            var t, n = this;
                            if (n.interrupted = !0,
                            1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow)
                                return n.touchObject = {},
                                    !1;
                            void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
                                n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX,
                                n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY,
                                n.dragging = !0
                        }
                        ,
                        t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
                            var e = this;
                            null !== e.$slidesCache && (e.unload(),
                                e.$slideTrack.children(this.options.slide).detach(),
                                e.$slidesCache.appendTo(e.$slideTrack),
                                e.reinit())
                        }
                        ,
                        t.prototype.unload = function() {
                            var t = this;
                            e(".slick-cloned", t.$slider).remove(),
                            t.$dots && t.$dots.remove(),
                            t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(),
                            t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(),
                                t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
                        }
                        ,
                        t.prototype.unslick = function(e) {
                            var t = this;
                            t.$slider.trigger("unslick", [t, e]),
                                t.destroy()
                        }
                        ,
                        t.prototype.updateArrows = function() {
                            var e = this;
                            Math.floor(e.options.slidesToShow / 2),
                            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                                e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                                0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                                    e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                                    e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
                        }
                        ,
                        t.prototype.updateDots = function() {
                            var e = this;
                            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(),
                                e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
                        }
                        ,
                        t.prototype.visibility = function() {
                            var e = this;
                            e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
                        }
                        ,
                        e.fn.slick = function() {
                            var e, n, o = this, i = arguments[0], s = Array.prototype.slice.call(arguments, 1), a = o.length;
                            for (e = 0; e < a; e++)
                                if ("object" == r(i) || void 0 === i ? o[e].slick = new t(o[e],i) : n = o[e].slick[i].apply(o[e].slick, s),
                                void 0 !== n)
                                    return n;
                            return o
                        }
                }
            ) ? o.apply(t, i) : o) || (e.exports = s)
        }()
    }
]);
