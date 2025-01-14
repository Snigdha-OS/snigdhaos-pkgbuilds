/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 12801:
/***/ (() => {

(function () {
  /*
  
   Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at
   http://polymer.github.io/LICENSE.txt The complete set of authors may be found
   at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
   be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
   Google as part of the polymer project is also subject to an additional IP
   rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';

  var n = window.Document.prototype.createElement,
    p = window.Document.prototype.createElementNS,
    aa = window.Document.prototype.importNode,
    ba = window.Document.prototype.prepend,
    ca = window.Document.prototype.append,
    da = window.DocumentFragment.prototype.prepend,
    ea = window.DocumentFragment.prototype.append,
    q = window.Node.prototype.cloneNode,
    r = window.Node.prototype.appendChild,
    t = window.Node.prototype.insertBefore,
    u = window.Node.prototype.removeChild,
    v = window.Node.prototype.replaceChild,
    w = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
    y = window.Element.prototype.attachShadow,
    z = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
    A = window.Element.prototype.getAttribute,
    B = window.Element.prototype.setAttribute,
    C = window.Element.prototype.removeAttribute,
    D = window.Element.prototype.toggleAttribute,
    E = window.Element.prototype.getAttributeNS,
    F = window.Element.prototype.setAttributeNS,
    G = window.Element.prototype.removeAttributeNS,
    H = window.Element.prototype.insertAdjacentElement,
    fa = window.Element.prototype.insertAdjacentHTML,
    ha = window.Element.prototype.prepend,
    ia = window.Element.prototype.append,
    ja = window.Element.prototype.before,
    ka = window.Element.prototype.after,
    la = window.Element.prototype.replaceWith,
    ma = window.Element.prototype.remove,
    na = window.HTMLElement,
    I = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
    oa = window.HTMLElement.prototype.insertAdjacentElement,
    pa = window.HTMLElement.prototype.insertAdjacentHTML;
  var qa = new Set();
  "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function (a) {
    return qa.add(a);
  });
  function ra(a) {
    var b = qa.has(a);
    a = /^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(a);
    return !b && a;
  }
  var sa = document.contains ? document.contains.bind(document) : document.documentElement.contains.bind(document.documentElement);
  function J(a) {
    var b = a.isConnected;
    if (void 0 !== b) return b;
    if (sa(a)) return !0;
    for (; a && !(a.__CE_isImportDocument || a instanceof Document);) a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);
    return !(!a || !(a.__CE_isImportDocument || a instanceof Document));
  }
  function K(a) {
    var b = a.children;
    if (b) return Array.prototype.slice.call(b);
    b = [];
    for (a = a.firstChild; a; a = a.nextSibling) a.nodeType === Node.ELEMENT_NODE && b.push(a);
    return b;
  }
  function L(a, b) {
    for (; b && b !== a && !b.nextSibling;) b = b.parentNode;
    return b && b !== a ? b.nextSibling : null;
  }
  function M(a, b, d) {
    for (var f = a; f;) {
      if (f.nodeType === Node.ELEMENT_NODE) {
        var c = f;
        b(c);
        var e = c.localName;
        if ("link" === e && "import" === c.getAttribute("rel")) {
          f = c.import;
          void 0 === d && (d = new Set());
          if (f instanceof Node && !d.has(f)) for (d.add(f), f = f.firstChild; f; f = f.nextSibling) M(f, b, d);
          f = L(a, c);
          continue;
        } else if ("template" === e) {
          f = L(a, c);
          continue;
        }
        if (c = c.__CE_shadowRoot) for (c = c.firstChild; c; c = c.nextSibling) M(c, b, d);
      }
      f = f.firstChild ? f.firstChild : L(a, f);
    }
  }
  ;
  function N() {
    var a = !(null === O || void 0 === O || !O.noDocumentConstructionObserver),
      b = !(null === O || void 0 === O || !O.shadyDomFastWalk);
    this.m = [];
    this.g = [];
    this.j = !1;
    this.shadyDomFastWalk = b;
    this.I = !a;
  }
  function P(a, b, d, f) {
    var c = window.ShadyDOM;
    if (a.shadyDomFastWalk && c && c.inUse) {
      if (b.nodeType === Node.ELEMENT_NODE && d(b), b.querySelectorAll) for (a = c.nativeMethods.querySelectorAll.call(b, "*"), b = 0; b < a.length; b++) d(a[b]);
    } else M(b, d, f);
  }
  function ta(a, b) {
    a.j = !0;
    a.m.push(b);
  }
  function ua(a, b) {
    a.j = !0;
    a.g.push(b);
  }
  function Q(a, b) {
    a.j && P(a, b, function (d) {
      return R(a, d);
    });
  }
  function R(a, b) {
    if (a.j && !b.__CE_patched) {
      b.__CE_patched = !0;
      for (var d = 0; d < a.m.length; d++) a.m[d](b);
      for (d = 0; d < a.g.length; d++) a.g[d](b);
    }
  }
  function S(a, b) {
    var d = [];
    P(a, b, function (c) {
      return d.push(c);
    });
    for (b = 0; b < d.length; b++) {
      var f = d[b];
      1 === f.__CE_state ? a.connectedCallback(f) : T(a, f);
    }
  }
  function U(a, b) {
    var d = [];
    P(a, b, function (c) {
      return d.push(c);
    });
    for (b = 0; b < d.length; b++) {
      var f = d[b];
      1 === f.__CE_state && a.disconnectedCallback(f);
    }
  }
  function V(a, b, d) {
    d = void 0 === d ? {} : d;
    var f = d.J,
      c = d.upgrade || function (g) {
        return T(a, g);
      },
      e = [];
    P(a, b, function (g) {
      a.j && R(a, g);
      if ("link" === g.localName && "import" === g.getAttribute("rel")) {
        var h = g.import;
        h instanceof Node && (h.__CE_isImportDocument = !0, h.__CE_registry = document.__CE_registry);
        h && "complete" === h.readyState ? h.__CE_documentLoadHandled = !0 : g.addEventListener("load", function () {
          var k = g.import;
          if (!k.__CE_documentLoadHandled) {
            k.__CE_documentLoadHandled = !0;
            var l = new Set();
            f && (f.forEach(function (m) {
              return l.add(m);
            }), l.delete(k));
            V(a, k, {
              J: l,
              upgrade: c
            });
          }
        });
      } else e.push(g);
    }, f);
    for (b = 0; b < e.length; b++) c(e[b]);
  }
  function T(a, b) {
    try {
      var d = b.ownerDocument,
        f = d.__CE_registry;
      var c = f && (d.defaultView || d.__CE_isImportDocument) ? W(f, b.localName) : void 0;
      if (c && void 0 === b.__CE_state) {
        c.constructionStack.push(b);
        try {
          try {
            if (new c.constructorFunction() !== b) throw Error("The custom element constructor did not produce the element being upgraded.");
          } finally {
            c.constructionStack.pop();
          }
        } catch (k) {
          throw b.__CE_state = 2, k;
        }
        b.__CE_state = 1;
        b.__CE_definition = c;
        if (c.attributeChangedCallback && b.hasAttributes()) {
          var e = c.observedAttributes;
          for (c = 0; c < e.length; c++) {
            var g = e[c],
              h = b.getAttribute(g);
            null !== h && a.attributeChangedCallback(b, g, null, h, null);
          }
        }
        J(b) && a.connectedCallback(b);
      }
    } catch (k) {
      X(k);
    }
  }
  N.prototype.connectedCallback = function (a) {
    var b = a.__CE_definition;
    if (b.connectedCallback) try {
      b.connectedCallback.call(a);
    } catch (d) {
      X(d);
    }
  };
  N.prototype.disconnectedCallback = function (a) {
    var b = a.__CE_definition;
    if (b.disconnectedCallback) try {
      b.disconnectedCallback.call(a);
    } catch (d) {
      X(d);
    }
  };
  N.prototype.attributeChangedCallback = function (a, b, d, f, c) {
    var e = a.__CE_definition;
    if (e.attributeChangedCallback && -1 < e.observedAttributes.indexOf(b)) try {
      e.attributeChangedCallback.call(a, b, d, f, c);
    } catch (g) {
      X(g);
    }
  };
  function va(a, b, d, f) {
    var c = b.__CE_registry;
    if (c && (null === f || "http://www.w3.org/1999/xhtml" === f) && (c = W(c, d))) try {
      var e = new c.constructorFunction();
      if (void 0 === e.__CE_state || void 0 === e.__CE_definition) throw Error("Failed to construct '" + d + "': The returned value was not constructed with the HTMLElement constructor.");
      if ("http://www.w3.org/1999/xhtml" !== e.namespaceURI) throw Error("Failed to construct '" + d + "': The constructed element's namespace must be the HTML namespace.");
      if (e.hasAttributes()) throw Error("Failed to construct '" + d + "': The constructed element must not have any attributes.");
      if (null !== e.firstChild) throw Error("Failed to construct '" + d + "': The constructed element must not have any children.");
      if (null !== e.parentNode) throw Error("Failed to construct '" + d + "': The constructed element must not have a parent node.");
      if (e.ownerDocument !== b) throw Error("Failed to construct '" + d + "': The constructed element's owner document is incorrect.");
      if (e.localName !== d) throw Error("Failed to construct '" + d + "': The constructed element's local name is incorrect.");
      return e;
    } catch (g) {
      return X(g), b = null === f ? n.call(b, d) : p.call(b, f, d), Object.setPrototypeOf(b, HTMLUnknownElement.prototype), b.__CE_state = 2, b.__CE_definition = void 0, R(a, b), b;
    }
    b = null === f ? n.call(b, d) : p.call(b, f, d);
    R(a, b);
    return b;
  }
  function X(a) {
    var b = "",
      d = "",
      f = 0,
      c = 0;
    a instanceof Error ? (b = a.message, d = a.sourceURL || a.fileName || "", f = a.line || a.lineNumber || 0, c = a.column || a.columnNumber || 0) : b = "Uncaught " + String(a);
    var e = void 0;
    void 0 === ErrorEvent.prototype.initErrorEvent ? e = new ErrorEvent("error", {
      cancelable: !0,
      message: b,
      filename: d,
      lineno: f,
      colno: c,
      error: a
    }) : (e = document.createEvent("ErrorEvent"), e.initErrorEvent("error", !1, !0, b, d, f), e.preventDefault = function () {
      Object.defineProperty(this, "defaultPrevented", {
        configurable: !0,
        get: function () {
          return !0;
        }
      });
    });
    void 0 === e.error && Object.defineProperty(e, "error", {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return a;
      }
    });
    window.dispatchEvent(e);
    e.defaultPrevented || console.error(a);
  }
  ;
  function wa() {
    var a = this;
    this.g = void 0;
    this.F = new Promise(function (b) {
      a.l = b;
    });
  }
  wa.prototype.resolve = function (a) {
    if (this.g) throw Error("Already resolved.");
    this.g = a;
    this.l(a);
  };
  function xa(a) {
    var b = document;
    this.l = void 0;
    this.h = a;
    this.g = b;
    V(this.h, this.g);
    "loading" === this.g.readyState && (this.l = new MutationObserver(this.G.bind(this)), this.l.observe(this.g, {
      childList: !0,
      subtree: !0
    }));
  }
  function ya(a) {
    a.l && a.l.disconnect();
  }
  xa.prototype.G = function (a) {
    var b = this.g.readyState;
    "interactive" !== b && "complete" !== b || ya(this);
    for (b = 0; b < a.length; b++) for (var d = a[b].addedNodes, f = 0; f < d.length; f++) V(this.h, d[f]);
  };
  function Y(a) {
    this.s = new Map();
    this.u = new Map();
    this.C = new Map();
    this.A = !1;
    this.B = new Map();
    this.o = function (b) {
      return b();
    };
    this.i = !1;
    this.v = [];
    this.h = a;
    this.D = a.I ? new xa(a) : void 0;
  }
  Y.prototype.H = function (a, b) {
    var d = this;
    if (!(b instanceof Function)) throw new TypeError("Custom element constructor getters must be functions.");
    za(this, a);
    this.s.set(a, b);
    this.v.push(a);
    this.i || (this.i = !0, this.o(function () {
      return Aa(d);
    }));
  };
  Y.prototype.define = function (a, b) {
    var d = this;
    if (!(b instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
    za(this, a);
    Ba(this, a, b);
    this.v.push(a);
    this.i || (this.i = !0, this.o(function () {
      return Aa(d);
    }));
  };
  function za(a, b) {
    if (!ra(b)) throw new SyntaxError("The element name '" + b + "' is not valid.");
    if (W(a, b)) throw Error("A custom element with name '" + (b + "' has already been defined."));
    if (a.A) throw Error("A custom element is already being defined.");
  }
  function Ba(a, b, d) {
    a.A = !0;
    var f;
    try {
      var c = d.prototype;
      if (!(c instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
      var e = function (m) {
        var x = c[m];
        if (void 0 !== x && !(x instanceof Function)) throw Error("The '" + m + "' callback must be a function.");
        return x;
      };
      var g = e("connectedCallback");
      var h = e("disconnectedCallback");
      var k = e("adoptedCallback");
      var l = (f = e("attributeChangedCallback")) && d.observedAttributes || [];
    } catch (m) {
      throw m;
    } finally {
      a.A = !1;
    }
    d = {
      localName: b,
      constructorFunction: d,
      connectedCallback: g,
      disconnectedCallback: h,
      adoptedCallback: k,
      attributeChangedCallback: f,
      observedAttributes: l,
      constructionStack: []
    };
    a.u.set(b, d);
    a.C.set(d.constructorFunction, d);
    return d;
  }
  Y.prototype.upgrade = function (a) {
    V(this.h, a);
  };
  function Aa(a) {
    if (!1 !== a.i) {
      a.i = !1;
      for (var b = [], d = a.v, f = new Map(), c = 0; c < d.length; c++) f.set(d[c], []);
      V(a.h, document, {
        upgrade: function (k) {
          if (void 0 === k.__CE_state) {
            var l = k.localName,
              m = f.get(l);
            m ? m.push(k) : a.u.has(l) && b.push(k);
          }
        }
      });
      for (c = 0; c < b.length; c++) T(a.h, b[c]);
      for (c = 0; c < d.length; c++) {
        for (var e = d[c], g = f.get(e), h = 0; h < g.length; h++) T(a.h, g[h]);
        (e = a.B.get(e)) && e.resolve(void 0);
      }
      d.length = 0;
    }
  }
  Y.prototype.get = function (a) {
    if (a = W(this, a)) return a.constructorFunction;
  };
  Y.prototype.whenDefined = function (a) {
    if (!ra(a)) return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));
    var b = this.B.get(a);
    if (b) return b.F;
    b = new wa();
    this.B.set(a, b);
    var d = this.u.has(a) || this.s.has(a);
    a = -1 === this.v.indexOf(a);
    d && a && b.resolve(void 0);
    return b.F;
  };
  Y.prototype.polyfillWrapFlushCallback = function (a) {
    this.D && ya(this.D);
    var b = this.o;
    this.o = function (d) {
      return a(function () {
        return b(d);
      });
    };
  };
  function W(a, b) {
    var d = a.u.get(b);
    if (d) return d;
    if (d = a.s.get(b)) {
      a.s.delete(b);
      try {
        return Ba(a, b, d());
      } catch (f) {
        X(f);
      }
    }
  }
  Y.prototype.define = Y.prototype.define;
  Y.prototype.upgrade = Y.prototype.upgrade;
  Y.prototype.get = Y.prototype.get;
  Y.prototype.whenDefined = Y.prototype.whenDefined;
  Y.prototype.polyfillDefineLazy = Y.prototype.H;
  Y.prototype.polyfillWrapFlushCallback = Y.prototype.polyfillWrapFlushCallback;
  function Z(a, b, d) {
    function f(c) {
      return function (e) {
        for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
        h = [];
        for (var k = [], l = 0; l < g.length; l++) {
          var m = g[l];
          m instanceof Element && J(m) && k.push(m);
          if (m instanceof DocumentFragment) for (m = m.firstChild; m; m = m.nextSibling) h.push(m);else h.push(m);
        }
        c.apply(this, g);
        for (g = 0; g < k.length; g++) U(a, k[g]);
        if (J(this)) for (g = 0; g < h.length; g++) k = h[g], k instanceof Element && S(a, k);
      };
    }
    void 0 !== d.prepend && (b.prepend = f(d.prepend));
    void 0 !== d.append && (b.append = f(d.append));
  }
  ;
  function Ca(a) {
    Document.prototype.createElement = function (b) {
      return va(a, this, b, null);
    };
    Document.prototype.importNode = function (b, d) {
      b = aa.call(this, b, !!d);
      this.__CE_registry ? V(a, b) : Q(a, b);
      return b;
    };
    Document.prototype.createElementNS = function (b, d) {
      return va(a, this, d, b);
    };
    Z(a, Document.prototype, {
      prepend: ba,
      append: ca
    });
  }
  ;
  function Da(a) {
    function b(f) {
      return function (c) {
        for (var e = [], g = 0; g < arguments.length; ++g) e[g] = arguments[g];
        g = [];
        for (var h = [], k = 0; k < e.length; k++) {
          var l = e[k];
          l instanceof Element && J(l) && h.push(l);
          if (l instanceof DocumentFragment) for (l = l.firstChild; l; l = l.nextSibling) g.push(l);else g.push(l);
        }
        f.apply(this, e);
        for (e = 0; e < h.length; e++) U(a, h[e]);
        if (J(this)) for (e = 0; e < g.length; e++) h = g[e], h instanceof Element && S(a, h);
      };
    }
    var d = Element.prototype;
    void 0 !== ja && (d.before = b(ja));
    void 0 !== ka && (d.after = b(ka));
    void 0 !== la && (d.replaceWith = function (f) {
      for (var c = [], e = 0; e < arguments.length; ++e) c[e] = arguments[e];
      e = [];
      for (var g = [], h = 0; h < c.length; h++) {
        var k = c[h];
        k instanceof Element && J(k) && g.push(k);
        if (k instanceof DocumentFragment) for (k = k.firstChild; k; k = k.nextSibling) e.push(k);else e.push(k);
      }
      h = J(this);
      la.apply(this, c);
      for (c = 0; c < g.length; c++) U(a, g[c]);
      if (h) for (U(a, this), c = 0; c < e.length; c++) g = e[c], g instanceof Element && S(a, g);
    });
    void 0 !== ma && (d.remove = function () {
      var f = J(this);
      ma.call(this);
      f && U(a, this);
    });
  }
  ;
  function Ea(a) {
    function b(c, e) {
      Object.defineProperty(c, "innerHTML", {
        enumerable: e.enumerable,
        configurable: !0,
        get: e.get,
        set: function (g) {
          var h = this,
            k = void 0;
          J(this) && (k = [], P(a, this, function (x) {
            x !== h && k.push(x);
          }));
          e.set.call(this, g);
          if (k) for (var l = 0; l < k.length; l++) {
            var m = k[l];
            1 === m.__CE_state && a.disconnectedCallback(m);
          }
          this.ownerDocument.__CE_registry ? V(a, this) : Q(a, this);
          return g;
        }
      });
    }
    function d(c, e) {
      c.insertAdjacentElement = function (g, h) {
        var k = J(h);
        g = e.call(this, g, h);
        k && U(a, h);
        J(g) && S(a, h);
        return g;
      };
    }
    function f(c, e) {
      function g(h, k) {
        for (var l = []; h !== k; h = h.nextSibling) l.push(h);
        for (k = 0; k < l.length; k++) V(a, l[k]);
      }
      c.insertAdjacentHTML = function (h, k) {
        h = h.toLowerCase();
        if ("beforebegin" === h) {
          var l = this.previousSibling;
          e.call(this, h, k);
          g(l || this.parentNode.firstChild, this);
        } else if ("afterbegin" === h) l = this.firstChild, e.call(this, h, k), g(this.firstChild, l);else if ("beforeend" === h) l = this.lastChild, e.call(this, h, k), g(l || this.firstChild, null);else if ("afterend" === h) l = this.nextSibling, e.call(this, h, k), g(this.nextSibling, l);else throw new SyntaxError("The value provided (" + String(h) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
      };
    }
    y && (Element.prototype.attachShadow = function (c) {
      c = y.call(this, c);
      if (a.j && !c.__CE_patched) {
        c.__CE_patched = !0;
        for (var e = 0; e < a.m.length; e++) a.m[e](c);
      }
      return this.__CE_shadowRoot = c;
    });
    z && z.get ? b(Element.prototype, z) : I && I.get ? b(HTMLElement.prototype, I) : ua(a, function (c) {
      b(c, {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return q.call(this, !0).innerHTML;
        },
        set: function (e) {
          var g = "template" === this.localName,
            h = g ? this.content : this,
            k = p.call(document, this.namespaceURI, this.localName);
          for (k.innerHTML = e; 0 < h.childNodes.length;) u.call(h, h.childNodes[0]);
          for (e = g ? k.content : k; 0 < e.childNodes.length;) r.call(h, e.childNodes[0]);
        }
      });
    });
    Element.prototype.setAttribute = function (c, e) {
      if (1 !== this.__CE_state) return B.call(this, c, e);
      var g = A.call(this, c);
      B.call(this, c, e);
      e = A.call(this, c);
      a.attributeChangedCallback(this, c, g, e, null);
    };
    Element.prototype.setAttributeNS = function (c, e, g) {
      if (1 !== this.__CE_state) return F.call(this, c, e, g);
      var h = E.call(this, c, e);
      F.call(this, c, e, g);
      g = E.call(this, c, e);
      a.attributeChangedCallback(this, e, h, g, c);
    };
    Element.prototype.removeAttribute = function (c) {
      if (1 !== this.__CE_state) return C.call(this, c);
      var e = A.call(this, c);
      C.call(this, c);
      null !== e && a.attributeChangedCallback(this, c, e, null, null);
    };
    D && (Element.prototype.toggleAttribute = function (c, e) {
      if (1 !== this.__CE_state) return D.call(this, c, e);
      var g = A.call(this, c),
        h = null !== g;
      e = D.call(this, c, e);
      h !== e && a.attributeChangedCallback(this, c, g, e ? "" : null, null);
      return e;
    });
    Element.prototype.removeAttributeNS = function (c, e) {
      if (1 !== this.__CE_state) return G.call(this, c, e);
      var g = E.call(this, c, e);
      G.call(this, c, e);
      var h = E.call(this, c, e);
      g !== h && a.attributeChangedCallback(this, e, g, h, c);
    };
    oa ? d(HTMLElement.prototype, oa) : H && d(Element.prototype, H);
    pa ? f(HTMLElement.prototype, pa) : fa && f(Element.prototype, fa);
    Z(a, Element.prototype, {
      prepend: ha,
      append: ia
    });
    Da(a);
  }
  ;
  var Fa = {};
  function Ga(a) {
    function b() {
      var d = this.constructor;
      var f = document.__CE_registry.C.get(d);
      if (!f) throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");
      var c = f.constructionStack;
      if (0 === c.length) return c = n.call(document, f.localName), Object.setPrototypeOf(c, d.prototype), c.__CE_state = 1, c.__CE_definition = f, R(a, c), c;
      var e = c.length - 1,
        g = c[e];
      if (g === Fa) throw Error("Failed to construct '" + f.localName + "': This element was already constructed.");
      c[e] = Fa;
      Object.setPrototypeOf(g, d.prototype);
      R(a, g);
      return g;
    }
    b.prototype = na.prototype;
    Object.defineProperty(HTMLElement.prototype, "constructor", {
      writable: !0,
      configurable: !0,
      enumerable: !1,
      value: b
    });
    window.HTMLElement = b;
  }
  ;
  function Ha(a) {
    function b(d, f) {
      Object.defineProperty(d, "textContent", {
        enumerable: f.enumerable,
        configurable: !0,
        get: f.get,
        set: function (c) {
          if (this.nodeType === Node.TEXT_NODE) f.set.call(this, c);else {
            var e = void 0;
            if (this.firstChild) {
              var g = this.childNodes,
                h = g.length;
              if (0 < h && J(this)) {
                e = Array(h);
                for (var k = 0; k < h; k++) e[k] = g[k];
              }
            }
            f.set.call(this, c);
            if (e) for (c = 0; c < e.length; c++) U(a, e[c]);
          }
        }
      });
    }
    Node.prototype.insertBefore = function (d, f) {
      if (d instanceof DocumentFragment) {
        var c = K(d);
        d = t.call(this, d, f);
        if (J(this)) for (f = 0; f < c.length; f++) S(a, c[f]);
        return d;
      }
      c = d instanceof Element && J(d);
      f = t.call(this, d, f);
      c && U(a, d);
      J(this) && S(a, d);
      return f;
    };
    Node.prototype.appendChild = function (d) {
      if (d instanceof DocumentFragment) {
        var f = K(d);
        d = r.call(this, d);
        if (J(this)) for (var c = 0; c < f.length; c++) S(a, f[c]);
        return d;
      }
      f = d instanceof Element && J(d);
      c = r.call(this, d);
      f && U(a, d);
      J(this) && S(a, d);
      return c;
    };
    Node.prototype.cloneNode = function (d) {
      d = q.call(this, !!d);
      this.ownerDocument.__CE_registry ? V(a, d) : Q(a, d);
      return d;
    };
    Node.prototype.removeChild = function (d) {
      var f = d instanceof Element && J(d),
        c = u.call(this, d);
      f && U(a, d);
      return c;
    };
    Node.prototype.replaceChild = function (d, f) {
      if (d instanceof DocumentFragment) {
        var c = K(d);
        d = v.call(this, d, f);
        if (J(this)) for (U(a, f), f = 0; f < c.length; f++) S(a, c[f]);
        return d;
      }
      c = d instanceof Element && J(d);
      var e = v.call(this, d, f),
        g = J(this);
      g && U(a, f);
      c && U(a, d);
      g && S(a, d);
      return e;
    };
    w && w.get ? b(Node.prototype, w) : ta(a, function (d) {
      b(d, {
        enumerable: !0,
        configurable: !0,
        get: function () {
          for (var f = [], c = this.firstChild; c; c = c.nextSibling) c.nodeType !== Node.COMMENT_NODE && f.push(c.textContent);
          return f.join("");
        },
        set: function (f) {
          for (; this.firstChild;) u.call(this, this.firstChild);
          null != f && "" !== f && r.call(this, document.createTextNode(f));
        }
      });
    });
  }
  ;
  var O = window.customElements;
  function Ia() {
    var a = new N();
    Ga(a);
    Ca(a);
    Z(a, DocumentFragment.prototype, {
      prepend: da,
      append: ea
    });
    Ha(a);
    Ea(a);
    window.CustomElementRegistry = Y;
    a = new Y(a);
    document.__CE_registry = a;
    Object.defineProperty(window, "customElements", {
      configurable: !0,
      enumerable: !0,
      value: a
    });
  }
  O && !O.forcePolyfill && "function" == typeof O.define && "function" == typeof O.get || Ia();
  window.__CE_installPolyfill = Ia;
}).call(self);

/***/ }),

/***/ 54071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./src/autofill/utils/autofill-overlay.enum.ts
const AutofillOverlayElement = {
    Button: "autofill-overlay-button",
    List: "autofill-overlay-list",
};
const AutofillOverlayPort = {
    Button: "autofill-overlay-button-port",
    List: "autofill-overlay-list-port",
};
const RedirectFocusDirection = {
    Current: "current",
    Previous: "previous",
    Next: "next",
};


// EXTERNAL MODULE: ../../node_modules/@webcomponents/custom-elements/custom-elements.min.js
var custom_elements_min = __webpack_require__(12801);
;// CONCATENATED MODULE: ../../node_modules/lit/polyfill-support.js
!function (i) {
  "function" == typeof define && define.amd ? define(i) : i();
}(function () {
  "use strict";

  /**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */
  var i,
    n,
    o = "__scoped";
  null !== (i = globalThis.reactiveElementPolyfillSupport) && void 0 !== i || (globalThis.reactiveElementPolyfillSupport = function (i) {
    var n = i.ReactiveElement;
    if (void 0 !== window.ShadyCSS && (!window.ShadyCSS.nativeShadow || window.ShadyCSS.ApplyShim)) {
      var t = n.prototype;
      window.ShadyDOM && window.ShadyDOM.inUse && !0 === window.ShadyDOM.noPatch && window.ShadyDOM.patchElementProto(t);
      var d = t.createRenderRoot;
      t.createRenderRoot = function () {
        var i,
          n,
          t,
          w = this.localName;
        if (window.ShadyCSS.nativeShadow) return d.call(this);
        if (!this.constructor.hasOwnProperty(o)) {
          this.constructor[o] = !0;
          var v = this.constructor.elementStyles.map(function (i) {
            return i instanceof CSSStyleSheet ? Array.from(i.cssRules).reduce(function (i, n) {
              return i + n.cssText;
            }, "") : i.cssText;
          });
          null === (n = null === (i = window.ShadyCSS) || void 0 === i ? void 0 : i.ScopingShim) || void 0 === n || n.prepareAdoptedCssText(v, w), void 0 === this.constructor._$AJ && window.ShadyCSS.prepareTemplateStyles(document.createElement("template"), w);
        }
        return null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
      };
      var w = t.connectedCallback;
      t.connectedCallback = function () {
        w.call(this), this.hasUpdated && window.ShadyCSS.styleElement(this);
      };
      var v = t._$AE;
      t._$AE = function (i) {
        this.hasUpdated || window.ShadyCSS.styleElement(this), v.call(this, i);
      };
    }
  });
  var t,
    d = new Set(),
    w = new Map();
  null !== (n = globalThis.litHtmlPolyfillSupport) && void 0 !== n || (globalThis.litHtmlPolyfillSupport = function (i, n) {
    if (void 0 !== window.ShadyCSS && (!window.ShadyCSS.nativeShadow || window.ShadyCSS.ApplyShim)) {
      var o = function (i) {
          return void 0 !== i && !d.has(i);
        },
        t = function (i) {
          var n = w.get(i);
          return void 0 === n && w.set(i, n = []), n;
        },
        v = new Map(),
        l = i.createElement;
      i.createElement = function (n, d) {
        var w = l.call(i, n, d),
          v = null == d ? void 0 : d.scope;
        if (void 0 !== v && (window.ShadyCSS.nativeShadow || window.ShadyCSS.prepareTemplateDom(w, v), o(v))) {
          var r = t(v),
            u = w.content.querySelectorAll("style");
          r.push.apply(r, Array.from(u).map(function (i) {
            var n;
            return null === (n = i.parentNode) || void 0 === n || n.removeChild(i), i.textContent;
          }));
        }
        return w;
      };
      var r = document.createDocumentFragment(),
        u = document.createComment(""),
        s = n.prototype,
        e = s._$AI;
      s._$AI = function (i, n) {
        var v, l;
        void 0 === n && (n = this);
        var s = this._$AA.parentNode,
          a = null === (v = this.options) || void 0 === v ? void 0 : v.scope;
        if (s instanceof ShadowRoot && o(a)) {
          var h = this._$AA,
            f = this._$AB;
          r.appendChild(u), this._$AA = u, this._$AB = null, e.call(this, i, n);
          var c = (null == i ? void 0 : i._$litType$) ? this._$AH._$AD.el : document.createElement("template");
          if (function (i, n) {
            var o,
              v = t(i),
              l = 0 !== v.length;
            l && ((o = document.createElement("style")).textContent = v.join("\n"), n.content.appendChild(o)), d.add(i), w.delete(i), window.ShadyCSS.prepareTemplateStyles(n, i), l && window.ShadyCSS.nativeShadow && null !== (o = n.content.querySelector("style")) && n.content.appendChild(o);
          }(a, c), r.removeChild(u), null === (l = window.ShadyCSS) || void 0 === l ? void 0 : l.nativeShadow) {
            var y = c.content.querySelector("style");
            null !== y && r.appendChild(y.cloneNode(!0));
          }
          s.insertBefore(r, f), this._$AA = h, this._$AB = f;
        } else e.call(this, i, n);
      }, s._$AC = function (n) {
        var o,
          t = null === (o = this.options) || void 0 === o ? void 0 : o.scope,
          d = v.get(t);
        void 0 === d && v.set(t, d = new Map());
        var w = d.get(n.strings);
        return void 0 === w && d.set(n.strings, w = new i(n, this.options)), w;
      };
    }
  }), null !== (t = globalThis.litElementPolyfillSupport) && void 0 !== t || (globalThis.litElementPolyfillSupport = function (i) {
    var n = i.LitElement;
    if (void 0 !== window.ShadyCSS && (!window.ShadyCSS.nativeShadow || window.ShadyCSS.ApplyShim)) {
      n._$AJ = !0;
      var o = n.prototype,
        t = o.createRenderRoot;
      o.createRenderRoot = function () {
        return this.renderOptions.scope = this.localName, t.call(this);
      };
    }
  });
});
;// CONCATENATED MODULE: ../../libs/common/src/auth/enums/authentication-status.ts
var AuthenticationStatus;
(function (AuthenticationStatus) {
    AuthenticationStatus[AuthenticationStatus["LoggedOut"] = 0] = "LoggedOut";
    AuthenticationStatus[AuthenticationStatus["Locked"] = 1] = "Locked";
    AuthenticationStatus[AuthenticationStatus["Unlocked"] = 2] = "Unlocked";
})(AuthenticationStatus || (AuthenticationStatus = {}));

;// CONCATENATED MODULE: ../../libs/common/src/autofill/constants/index.ts
const TYPE_CHECK = {
    FUNCTION: "function",
    NUMBER: "number",
    STRING: "string",
};
const EVENTS = {
    CHANGE: "change",
    INPUT: "input",
    KEYDOWN: "keydown",
    KEYPRESS: "keypress",
    KEYUP: "keyup",
    BLUR: "blur",
    CLICK: "click",
    FOCUS: "focus",
    SCROLL: "scroll",
    RESIZE: "resize",
    DOMCONTENTLOADED: "DOMContentLoaded",
    LOAD: "load",
    MESSAGE: "message",
    VISIBILITYCHANGE: "visibilitychange",
    FOCUSOUT: "focusout",
};
const ClearClipboardDelay = {
    Never: null,
    TenSeconds: 10,
    TwentySeconds: 20,
    ThirtySeconds: 30,
    OneMinute: 60,
    TwoMinutes: 120,
    FiveMinutes: 300,
};
/* Context Menu item Ids */
const AUTOFILL_CARD_ID = "autofill-card";
const AUTOFILL_ID = "autofill";
const SHOW_AUTOFILL_BUTTON = "show-autofill-button";
const AUTOFILL_IDENTITY_ID = "autofill-identity";
const COPY_IDENTIFIER_ID = "copy-identifier";
const COPY_PASSWORD_ID = "copy-password";
const COPY_USERNAME_ID = "copy-username";
const COPY_VERIFICATION_CODE_ID = "copy-totp";
const CREATE_CARD_ID = "create-card";
const CREATE_IDENTITY_ID = "create-identity";
const CREATE_LOGIN_ID = "create-login";
const GENERATE_PASSWORD_ID = "generate-password";
const NOOP_COMMAND_SUFFIX = "noop";
const ROOT_ID = "root";
const SEPARATOR_ID = "separator";
const NOTIFICATION_BAR_LIFESPAN_MS = 150000; // 150 seconds
const AutofillOverlayVisibility = {
    Off: 0,
    OnButtonClick: 1,
    OnFieldFocus: 2,
};

;// CONCATENATED MODULE: ./src/autofill/enums/autofill-port.enums.ts
const autofill_port_enums_AutofillPort = {
    InjectedScript: "autofill-injected-script-port",
};


;// CONCATENATED MODULE: ./src/autofill/utils/index.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Generates a random string of characters that formatted as a custom element name.
 */
function generateRandomCustomElementName() {
    const generateRandomChars = (length) => {
        const chars = "abcdefghijklmnopqrstuvwxyz";
        const randomChars = [];
        const randomBytes = new Uint8Array(length);
        globalThis.crypto.getRandomValues(randomBytes);
        for (let byteIndex = 0; byteIndex < randomBytes.length; byteIndex++) {
            const byte = randomBytes[byteIndex];
            randomChars.push(chars[byte % chars.length]);
        }
        return randomChars.join("");
    };
    const length = Math.floor(Math.random() * 5) + 8; // Between 8 and 12 characters
    const numHyphens = Math.min(Math.max(Math.floor(Math.random() * 4), 1), length - 1); // At least 1, maximum of 3 hyphens
    const hyphenIndices = [];
    while (hyphenIndices.length < numHyphens) {
        const index = Math.floor(Math.random() * (length - 1)) + 1;
        if (!hyphenIndices.includes(index)) {
            hyphenIndices.push(index);
        }
    }
    hyphenIndices.sort((a, b) => a - b);
    let randomString = "";
    let prevIndex = 0;
    for (let index = 0; index < hyphenIndices.length; index++) {
        const hyphenIndex = hyphenIndices[index];
        randomString = randomString + generateRandomChars(hyphenIndex - prevIndex) + "-";
        prevIndex = hyphenIndex;
    }
    randomString += generateRandomChars(length - prevIndex);
    return randomString;
}
/**
 * Builds a DOM element from an SVG string.
 *
 * @param svgString - The SVG string to build the DOM element from.
 * @param ariaHidden - Determines whether the SVG should be hidden from screen readers.
 */
function buildSvgDomElement(svgString, ariaHidden = true) {
    const domParser = new DOMParser();
    const svgDom = domParser.parseFromString(svgString, "image/svg+xml");
    const domElement = svgDom.documentElement;
    domElement.setAttribute("aria-hidden", `${ariaHidden}`);
    return domElement;
}
/**
 * Sends a message to the extension.
 *
 * @param command - The command to send.
 * @param options - The options to send with the command.
 */
function sendExtensionMessage(command, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            chrome.runtime.sendMessage(Object.assign({ command }, options), (response) => {
                if (chrome.runtime.lastError) {
                    return;
                }
                resolve(response);
            });
        });
    });
}
/**
 * Sets CSS styles on an element.
 *
 * @param element - The element to set the styles on.
 * @param styles - The styles to set on the element.
 * @param priority - Determines whether the styles should be set as important.
 */
function setElementStyles(element, styles, priority) {
    if (!element || !styles || !Object.keys(styles).length) {
        return;
    }
    for (const styleProperty in styles) {
        element.style.setProperty(styleProperty.replace(/([a-z])([A-Z])/g, "$1-$2"), // Convert camelCase to kebab-case
        styles[styleProperty], priority ? "important" : undefined);
    }
}
/**
 * Get data from local storage based on the keys provided.
 *
 * @param keys - String or array of strings of keys to get from local storage
 * @deprecated Do not call this, use state-relevant services instead
 */
function getFromLocalStorage(keys) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            chrome.storage.local.get(keys, (storage) => resolve(storage));
        });
    });
}
/**
 * Sets up a long-lived connection with the extension background
 * and triggers an onDisconnect event if the extension context
 * is invalidated.
 *
 * @param callback - Callback function to run when the extension disconnects
 */
function setupExtensionDisconnectAction(callback) {
    const port = chrome.runtime.connect({ name: AutofillPort.InjectedScript });
    const onDisconnectCallback = (disconnectedPort) => {
        callback(disconnectedPort);
        port.onDisconnect.removeListener(onDisconnectCallback);
    };
    port.onDisconnect.addListener(onDisconnectCallback);
}
/**
 * Handles setup of the extension disconnect action for the autofill init class
 * in both instances where the overlay might or might not be initialized.
 *
 * @param windowContext - The global window context
 */
function setupAutofillInitDisconnectAction(windowContext) {
    if (!windowContext.bitwardenAutofillInit) {
        return;
    }
    const onDisconnectCallback = () => {
        windowContext.bitwardenAutofillInit.destroy();
        delete windowContext.bitwardenAutofillInit;
    };
    setupExtensionDisconnectAction(onDisconnectCallback);
}
/**
 * Identifies whether an element is a fillable form field.
 * This is determined by whether the element is a form field and not a span.
 *
 * @param formFieldElement - The form field element to check.
 */
function elementIsFillableFormField(formFieldElement) {
    return (formFieldElement === null || formFieldElement === void 0 ? void 0 : formFieldElement.tagName.toLowerCase()) !== "span";
}
/**
 * Identifies whether an element is an instance of a specific tag name.
 *
 * @param element - The element to check.
 * @param tagName -  The tag name to check against.
 */
function elementIsInstanceOf(element, tagName) {
    return (element === null || element === void 0 ? void 0 : element.tagName.toLowerCase()) === tagName;
}
/**
 * Identifies whether an element is a span element.
 *
 * @param element - The element to check.
 */
function elementIsSpanElement(element) {
    return elementIsInstanceOf(element, "span");
}
/**
 * Identifies whether an element is an input field.
 *
 * @param element - The element to check.
 */
function elementIsInputElement(element) {
    return elementIsInstanceOf(element, "input");
}
/**
 * Identifies whether an element is a select field.
 *
 * @param element - The element to check.
 */
function elementIsSelectElement(element) {
    return elementIsInstanceOf(element, "select");
}
/**
 * Identifies whether an element is a textarea field.
 *
 * @param element - The element to check.
 */
function elementIsTextAreaElement(element) {
    return elementIsInstanceOf(element, "textarea");
}
/**
 * Identifies whether an element is a form element.
 *
 * @param element - The element to check.
 */
function elementIsFormElement(element) {
    return elementIsInstanceOf(element, "form");
}
/**
 * Identifies whether an element is a label element.
 *
 * @param element - The element to check.
 */
function elementIsLabelElement(element) {
    return elementIsInstanceOf(element, "label");
}
/**
 * Identifies whether an element is a description details `dd` element.
 *
 * @param element - The element to check.
 */
function elementIsDescriptionDetailsElement(element) {
    return elementIsInstanceOf(element, "dd");
}
/**
 * Identifies whether an element is a description term `dt` element.
 *
 * @param element - The element to check.
 */
function elementIsDescriptionTermElement(element) {
    return elementIsInstanceOf(element, "dt");
}
/**
 * Identifies whether a node is an HTML element.
 *
 * @param node - The node to check.
 */
function nodeIsElement(node) {
    return (node === null || node === void 0 ? void 0 : node.nodeType) === Node.ELEMENT_NODE;
}
/**
 * Identifies whether a node is an input element.
 *
 * @param node - The node to check.
 */
function nodeIsInputElement(node) {
    return nodeIsElement(node) && elementIsInputElement(node);
}
/**
 * Identifies whether a node is a form element.
 *
 * @param node - The node to check.
 */
function nodeIsFormElement(node) {
    return nodeIsElement(node) && elementIsFormElement(node);
}


;// CONCATENATED MODULE: ./src/autofill/utils/svg-icons.ts
const logoIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path fill="#175DDC" d="M12.66.175A.566.566 0 0 0 12.25 0H1.75a.559.559 0 0 0-.409.175.561.561 0 0 0-.175.41v7c.002.532.105 1.06.305 1.554.189.488.444.948.756 1.368.322.42.682.81 1.076 1.163.365.335.75.649 1.152.939.35.248.718.483 1.103.706.385.222.656.372.815.45.16.08.29.141.386.182A.53.53 0 0 0 7 14a.509.509 0 0 0 .238-.055c.098-.043.225-.104.387-.182.162-.079.438-.23.816-.45.378-.222.75-.459 1.102-.707.403-.29.788-.604 1.154-.939a8.435 8.435 0 0 0 1.076-1.163c.312-.42.567-.88.757-1.367a4.19 4.19 0 0 0 .304-1.555v-7a.55.55 0 0 0-.174-.407Z"/><path fill="#fff" d="M7 12.365s4.306-2.18 4.306-4.717V1.5H7v10.865Z"/></svg>';
const logoLockedIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#a)"><path fill="#175DDC" d="M12.66.175A.566.566 0 0 0 12.25 0H1.75a.559.559 0 0 0-.409.175.561.561 0 0 0-.175.41v7c.002.532.105 1.06.305 1.554.189.488.444.948.756 1.368.322.42.682.81 1.076 1.163.365.335.75.649 1.152.939.35.248.718.483 1.103.706.385.222.656.372.815.45.16.08.29.141.386.182A.53.53 0 0 0 7 14a.509.509 0 0 0 .238-.055c.098-.043.225-.104.387-.182.162-.079.438-.23.816-.45.378-.222.75-.459 1.102-.707.403-.29.788-.604 1.154-.939a8.435 8.435 0 0 0 1.076-1.163c.312-.42.567-.88.757-1.367a4.19 4.19 0 0 0 .304-1.555v-7a.55.55 0 0 0-.174-.407Z"/><path fill="#fff" d="M7 12.365s4.306-2.18 4.306-4.717V1.5H7v10.865Z"/><circle cx="12.889" cy="12.889" r="4.889" fill="#F8F9FA"/><path fill="#555" d="M11.26 11.717h2.37v-.848c0-.313-.116-.58-.348-.8a1.17 1.17 0 0 0-.838-.332c-.327 0-.606.11-.838.332a1.066 1.066 0 0 0-.347.8v.848Zm3.851.424v2.546a.4.4 0 0 1-.13.3.44.44 0 0 1-.314.124h-4.445a.44.44 0 0 1-.315-.124.4.4 0 0 1-.13-.3V12.14a.4.4 0 0 1 .13-.3.44.44 0 0 1 .315-.124h.148v-.848c0-.542.204-1.008.612-1.397a2.044 2.044 0 0 1 1.462-.583c.568 0 1.056.194 1.463.583.408.39.611.855.611 1.397v.848h.149a.44.44 0 0 1 .315.124.4.4 0 0 1 .13.3Z"/></g><defs><clipPath id="a"><rect width="16" height="16" fill="#fff" rx="2"/></clipPath></defs></svg>';
const globeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path fill="#777" fill-rule="evenodd" d="M18.026 17.842c-1.418 1.739-3.517 2.84-5.86 2.84a7.364 7.364 0 0 1-3.431-.848l.062-.15.062-.151.063-.157c.081-.203.17-.426.275-.646.133-.28.275-.522.426-.68.026-.028.101-.075.275-.115.165-.037.376-.059.629-.073.138-.008.288-.014.447-.02.399-.016.847-.034 1.266-.092.314-.044.566-.131.755-.271a.884.884 0 0 0 .352-.555c.037-.2.008-.392-.03-.543-.035-.135-.084-.264-.12-.355l-.01-.03a4.26 4.26 0 0 0-.145-.33c-.126-.264-.237-.497-.288-1.085-.03-.344.09-.73.251-1.138l.089-.22c.05-.123.1-.247.14-.355.064-.171.129-.375.129-.566a1.51 1.51 0 0 0-.134-.569 2.573 2.573 0 0 0-.319-.547c-.246-.323-.635-.669-1.093-.669-.44 0-1.006.169-1.487.368-.246.102-.48.216-.68.33-.192.111-.372.235-.492.359-.93.96-1.48 1.239-1.81 1.258-.277.017-.478-.15-.736-.525a9.738 9.738 0 0 1-.19-.29l-.006-.01a11.568 11.568 0 0 0-.198-.305 2.76 2.76 0 0 0-.521-.6 1.39 1.39 0 0 0-1.088-.314 8.302 8.302 0 0 1 1.987-3.936c.055.342.146.626.272.856.23.42.561.64.926.716.406.086.857-.061 1.26-.216.125-.047.248-.097.372-.147.309-.125.618-.25.947-.341.26-.072.581-.057.959.012.264.049.529.118.8.19l.36.091c.379.094.782.178 1.135.148.374-.032.733-.197.934-.623a.874.874 0 0 0 .024-.752c-.087-.197-.24-.355-.35-.47-.26-.267-.412-.427-.412-.685 0-.125.037-.2.09-.263a.982.982 0 0 1 .303-.211c.059-.03.119-.058.183-.089l.036-.016a3.79 3.79 0 0 0 .236-.118c.047-.026.098-.056.148-.093 1.936.747 3.51 2.287 4.368 4.249a7.739 7.739 0 0 0-.031-.004c-.38-.047-.738-.056-1.063.061-.34.123-.603.368-.817.74-.122.211-.284.43-.463.67l-.095.129c-.207.281-.431.595-.58.92-.15.326-.245.705-.142 1.103.104.397.387.738.837 1.036.099.065.225.112.314.145l.02.008c.108.04.195.074.268.117.07.042.106.08.124.114.017.03.037.087.022.206-.047.376-.069.73-.052 1.034.017.292.071.59.218.809.118.174.12.421.108.786v.01a2.46 2.46 0 0 0 .021.518.809.809 0 0 0 .15.35Zm1.357.059a9.654 9.654 0 0 0 1.62-5.386c0-5.155-3.957-9.334-8.836-9.334-4.88 0-8.836 4.179-8.836 9.334 0 3.495 1.82 6.543 4.513 8.142v.093h.161a8.426 8.426 0 0 0 4.162 1.098c2.953 0 5.568-1.53 7.172-3.882a.569.569 0 0 0 .048-.062l-.004-.003ZM8.152 19.495a43.345 43.345 0 0 1 .098-.238l.057-.142c.082-.205.182-.455.297-.698.143-.301.323-.624.552-.864.163-.172.392-.254.602-.302.219-.05.473-.073.732-.088.162-.01.328-.016.495-.023.386-.015.782-.03 1.168-.084.255-.036.392-.099.461-.15.06-.045.076-.084.083-.12a.534.534 0 0 0-.02-.223 2.552 2.552 0 0 0-.095-.278l-.01-.027a3.128 3.128 0 0 0-.104-.232c-.134-.282-.31-.65-.374-1.381-.046-.533.138-1.063.3-1.472.035-.09.069-.172.1-.249.046-.11.086-.21.123-.31.062-.169.083-.264.083-.312a.812.812 0 0 0-.076-.283 1.867 1.867 0 0 0-.23-.394c-.21-.274-.428-.408-.577-.408-.315 0-.788.13-1.246.32a5.292 5.292 0 0 0-.603.293 1.727 1.727 0 0 0-.347.244c-.936.968-1.641 1.421-2.235 1.457-.646.04-1.036-.413-1.31-.813-.07-.103-.139-.21-.203-.311l-.005-.007c-.064-.101-.125-.197-.188-.29a2.098 2.098 0 0 0-.387-.453.748.748 0 0 0-.436-.18c-.1-.006-.22.005-.365.046a8.707 8.707 0 0 0-.056.992c0 2.957 1.488 5.547 3.716 6.98Zm10.362-2.316.003-.192.002-.046c.01-.305.026-.786-.232-1.169-.036-.054-.082-.189-.096-.444-.014-.243.003-.55.047-.9a1.051 1.051 0 0 0-.105-.649.987.987 0 0 0-.374-.374 2.285 2.285 0 0 0-.367-.166h-.003a1.243 1.243 0 0 1-.205-.088c-.369-.244-.505-.46-.549-.629-.044-.168-.015-.364.099-.61.115-.25.297-.511.507-.796l.089-.12c.178-.239.368-.495.512-.745.152-.263.302-.382.466-.441.18-.065.416-.073.77-.03.142.018.275.04.397.063.274.837.423 1.736.423 2.671a8.45 8.45 0 0 1-1.384 4.665Zm-4.632-12.63a7.362 7.362 0 0 0-1.715-.201c-1.89 0-3.621.716-4.965 1.905.025.54.12.887.24 1.105.13.238.295.34.482.38.2.042.484-.027.905-.188l.328-.13c.32-.13.681-.275 1.048-.377.398-.111.833-.075 1.24 0 .289.053.59.132.871.205l.326.084c.383.094.694.151.932.13.216-.017.326-.092.395-.237.039-.083.027-.114.014-.144-.027-.062-.088-.136-.212-.264l-.043-.044c-.218-.222-.567-.578-.567-1.142 0-.305.101-.547.262-.734.137-.159.308-.267.46-.347Z" clip-rule="evenodd"/></svg>';
const lockIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><g clip-path="url(#a)"><path fill="#175DDC" d="M8.799 11.633a.68.68 0 0 0-.639.422.695.695 0 0 0-.054.264.682.682 0 0 0 .374.6v1.13a.345.345 0 1 0 .693 0v-1.17a.68.68 0 0 0 .315-.56.695.695 0 0 0-.204-.486.682.682 0 0 0-.485-.2Zm4.554-4.657h-7.11a.438.438 0 0 1-.406-.26A3.81 3.81 0 0 1 5.584 4.3c.112-.435.312-.842.588-1.195A3.196 3.196 0 0 1 7.19 2.25a3.468 3.468 0 0 1 3.225-.059A3.62 3.62 0 0 1 11.94 3.71l.327.59a.502.502 0 1 0 .885-.483l-.307-.552a4.689 4.689 0 0 0-2.209-2.078 4.466 4.466 0 0 0-3.936.185A4.197 4.197 0 0 0 5.37 2.49a4.234 4.234 0 0 0-.768 1.565 4.714 4.714 0 0 0 .162 2.682.182.182 0 0 1-.085.22.173.173 0 0 1-.082.02h-.353a1.368 1.368 0 0 0-1.277.842c-.07.168-.107.348-.109.53v7.1a1.392 1.392 0 0 0 .412.974 1.352 1.352 0 0 0 .974.394h9.117c.363.001.711-.142.97-.4a1.39 1.39 0 0 0 .407-.972v-7.1a1.397 1.397 0 0 0-.414-.973 1.368 1.368 0 0 0-.972-.396Zm.37 8.469a.373.373 0 0 1-.11.26.364.364 0 0 1-.26.107H4.246a.366.366 0 0 1-.26-.107.374.374 0 0 1-.11-.261V8.349a.374.374 0 0 1 .11-.26.366.366 0 0 1 .26-.108h9.116a.366.366 0 0 1 .37.367l-.008 7.097Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.798.817h16v16h-16z"/></clipPath></defs></svg>';
const plusIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><g clip-path="url(#a)"><path fill="#175DDC" d="M15.222 7.914H8.963a.471.471 0 0 1-.34-.147.512.512 0 0 1-.142-.353V.99c0-.133-.05-.26-.14-.354a.471.471 0 0 0-.68 0 .51.51 0 0 0-.142.354v6.424c0 .132-.051.26-.142.353a.474.474 0 0 1-.34.147H.777a.47.47 0 0 0-.34.146.5.5 0 0 0-.14.354.522.522 0 0 0 .14.353.48.48 0 0 0 .34.147h6.26c.128 0 .25.052.34.146.09.094.142.221.142.354v6.576c0 .132.05.26.14.353a.471.471 0 0 0 .68 0 .512.512 0 0 0 .142-.353V9.414c0-.133.051-.26.142-.354a.474.474 0 0 1 .34-.146h6.26c.127 0 .25-.053.34-.147a.511.511 0 0 0 0-.707.472.472 0 0 0-.34-.146Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 .49h16v16H0z"/></clipPath></defs></svg>';
const viewCipherIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><g clip-path="url(#a)"><path fill="#175DDC" d="M16.587 7.932H5.9a.455.455 0 0 1-.31-.12.393.393 0 0 1-.127-.287c0-.108.046-.211.128-.288a.455.455 0 0 1 .309-.119h10.687c.117 0 .228.043.31.12.082.076.128.179.128.287a.393.393 0 0 1-.128.288.455.455 0 0 1-.31.119Zm0 2.474H5.9a.455.455 0 0 1-.31-.119.393.393 0 0 1-.127-.287c0-.108.046-.212.128-.288a.455.455 0 0 1 .309-.119h10.687c.117 0 .228.043.31.12.082.075.128.179.128.287a.393.393 0 0 1-.128.287.455.455 0 0 1-.31.12Zm0 2.468H5.9a.455.455 0 0 1-.31-.119.393.393 0 0 1-.127-.287c0-.108.046-.212.128-.288a.455.455 0 0 1 .309-.119h10.687c.117 0 .228.043.31.12.082.075.128.179.128.287a.393.393 0 0 1-.128.287.455.455 0 0 1-.31.12Zm2.163-8.103v10.457H1.25V4.771h17.5Zm0-1.162H1.25a1.3 1.3 0 0 0-.884.34A1.122 1.122 0 0 0 0 4.772v10.457c0 .308.132.604.366.822a1.3 1.3 0 0 0 .884.34h17.5a1.3 1.3 0 0 0 .884-.34c.234-.218.366-.514.366-.822V4.771c0-.308-.132-.603-.366-.821a1.3 1.3 0 0 0-.884-.34ZM3.213 8.01c.287 0 .52-.217.52-.484s-.234-.483-.52-.483c-.288 0-.52.216-.52.483s.233.483.52.483Zm0 4.903c.287 0 .52-.217.52-.484 0-.266-.234-.483-.52-.483-.287 0-.52.216-.52.483s.233.484.52.484Zm0-2.452c.287 0 .52-.216.52-.483 0-.268-.234-.484-.52-.484-.288 0-.52.216-.52.484 0 .267.233.483.52.483Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 .113h20v19.773H0z"/></clipPath></defs></svg>';


;// CONCATENATED MODULE: ./src/autofill/overlay/pages/shared/autofill-overlay-page-element.ts


class AutofillOverlayPageElement extends HTMLElement {
    constructor() {
        super();
        /**
         * Handles window messages from the parent window.
         *
         * @param event - The window message event
         */
        this.handleWindowMessage = (event) => {
            if (!this.windowMessageHandlers) {
                return;
            }
            if (!this.messageOrigin) {
                this.messageOrigin = event.origin;
            }
            if (event.origin !== this.messageOrigin) {
                return;
            }
            const message = event === null || event === void 0 ? void 0 : event.data;
            const handler = this.windowMessageHandlers[message === null || message === void 0 ? void 0 : message.command];
            if (!handler) {
                return;
            }
            handler({ message });
        };
        /**
         * Handles the window blur event.
         */
        this.handleWindowBlurEvent = () => {
            this.postMessageToParent({ command: "overlayPageBlurred" });
        };
        /**
         * Handles the document keydown event. Facilitates redirecting the
         * user focus in the right direction out of the overlay. Also facilitates
         * closing the overlay when the user presses the Escape key.
         *
         * @param event - The document keydown event
         */
        this.handleDocumentKeyDownEvent = (event) => {
            const listenedForKeys = new Set(["Tab", "Escape"]);
            if (!listenedForKeys.has(event.code)) {
                return;
            }
            event.preventDefault();
            event.stopPropagation();
            if (event.code === "Tab") {
                this.redirectOverlayFocusOutMessage(event.shiftKey ? RedirectFocusDirection.Previous : RedirectFocusDirection.Next);
                return;
            }
            this.redirectOverlayFocusOutMessage(RedirectFocusDirection.Current);
        };
        this.shadowDom = this.attachShadow({ mode: "closed" });
    }
    /**
     * Initializes the overlay page element. Facilitates ensuring that the page
     * is set up with the expected styles and translations.
     *
     * @param elementName - The name of the element, e.g. "button" or "list"
     * @param styleSheetUrl - The URL of the stylesheet to apply to the page
     * @param translations - The translations to apply to the page
     */
    initOverlayPage(elementName, styleSheetUrl, translations) {
        this.translations = translations;
        globalThis.document.documentElement.setAttribute("lang", this.getTranslation("locale"));
        globalThis.document.head.title = this.getTranslation(`${elementName}PageTitle`);
        this.shadowDom.innerHTML = "";
        const linkElement = globalThis.document.createElement("link");
        linkElement.setAttribute("rel", "stylesheet");
        linkElement.setAttribute("href", styleSheetUrl);
        return linkElement;
    }
    /**
     * Posts a window message to the parent window.
     *
     * @param message - The message to post
     */
    postMessageToParent(message) {
        if (!this.messageOrigin) {
            return;
        }
        globalThis.parent.postMessage(message, this.messageOrigin);
    }
    /**
     * Gets a translation from the translations object.
     *
     * @param key
     * @protected
     */
    getTranslation(key) {
        return this.translations[key] || "";
    }
    /**
     * Sets up global listeners for the window message, window blur, and
     * document keydown events.
     *
     * @param windowMessageHandlers - The window message handlers to use
     */
    setupGlobalListeners(windowMessageHandlers) {
        this.windowMessageHandlers = windowMessageHandlers;
        globalThis.addEventListener(EVENTS.MESSAGE, this.handleWindowMessage);
        globalThis.addEventListener(EVENTS.BLUR, this.handleWindowBlurEvent);
        globalThis.document.addEventListener(EVENTS.KEYDOWN, this.handleDocumentKeyDownEvent);
    }
    /**
     * Redirects the overlay focus out to the previous element on KeyDown of the `Tab+Shift` keys.
     * Redirects the overlay focus out to the next element on KeyDown of the `Tab` key.
     * Redirects the overlay focus out to the current element on KeyDown of the `Escape` key.
     *
     * @param direction - The direction to redirect the focus out
     */
    redirectOverlayFocusOutMessage(direction) {
        this.postMessageToParent({ command: "redirectOverlayFocusOut", direction });
    }
}
/* harmony default export */ const autofill_overlay_page_element = (AutofillOverlayPageElement);

;// CONCATENATED MODULE: ./src/autofill/overlay/pages/list/autofill-overlay-list.ts
var autofill_overlay_list_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







class AutofillOverlayList extends autofill_overlay_page_element {
    constructor() {
        super();
        this.eventHandlersMemo = {};
        this.ciphers = [];
        this.cipherListScrollIsDebounced = false;
        this.currentCipherIndex = 0;
        this.showCiphersPerPage = 6;
        this.overlayListWindowMessageHandlers = {
            initAutofillOverlayList: ({ message }) => this.initAutofillOverlayList(message),
            checkAutofillOverlayListFocused: () => this.checkOverlayListFocused(),
            updateOverlayListCiphers: ({ message }) => this.updateListItems(message.ciphers),
            focusOverlayList: () => this.focusOverlayList(),
        };
        /**
         * Handles the click event for the unlock button.
         * Sends a message to the parent window to unlock the vault.
         */
        this.handleUnlockButtonClick = () => {
            this.postMessageToParent({ command: "unlockVault" });
        };
        /**
         * Handles the click event for the new item button.
         * Sends a message to the parent window to add a new vault item.
         */
        this.handeNewItemButtonClick = () => {
            this.postMessageToParent({ command: "addNewVaultItem" });
        };
        /**
         * Handles updating the list of ciphers when the
         * user scrolls to the bottom of the list.
         */
        this.handleCiphersListScrollEvent = () => {
            if (this.cipherListScrollIsDebounced) {
                return;
            }
            this.cipherListScrollIsDebounced = true;
            if (this.cipherListScrollDebounceTimeout) {
                clearTimeout(this.cipherListScrollDebounceTimeout);
            }
            this.cipherListScrollDebounceTimeout = setTimeout(this.handleDebouncedScrollEvent, 300);
        };
        /**
         * Debounced handler for updating the list of ciphers when the user scrolls to
         * the bottom of the list. Triggers at most once every 300ms.
         */
        this.handleDebouncedScrollEvent = () => {
            this.cipherListScrollIsDebounced = false;
            if (globalThis.scrollY + globalThis.innerHeight >= this.ciphersList.clientHeight - 300) {
                this.loadPageOfCiphers();
            }
        };
        /**
         * Handles the click event for the fill cipher button.
         * Sends a message to the parent window to fill the selected cipher.
         *
         * @param cipher - The cipher to fill.
         */
        this.handleFillCipherClickEvent = (cipher) => {
            return this.useEventHandlersMemo(() => this.postMessageToParent({
                command: "fillSelectedListItem",
                overlayCipherId: cipher.id,
            }), `${cipher.id}-fill-cipher-button-click-handler`);
        };
        /**
         * Handles the keyup event for the fill cipher button. Facilitates
         * selecting the next/previous cipher item on ArrowDown/ArrowUp. Also
         * facilitates moving keyboard focus to the view cipher button on ArrowRight.
         *
         * @param event - The keyup event.
         */
        this.handleFillCipherKeyUpEvent = (event) => {
            const listenedForKeys = new Set(["ArrowDown", "ArrowUp", "ArrowRight"]);
            if (!listenedForKeys.has(event.code) || !(event.target instanceof Element)) {
                return;
            }
            event.preventDefault();
            const currentListItem = event.target.closest(".overlay-actions-list-item");
            if (event.code === "ArrowDown") {
                this.focusNextListItem(currentListItem);
                return;
            }
            if (event.code === "ArrowUp") {
                this.focusPreviousListItem(currentListItem);
                return;
            }
            this.focusViewCipherButton(currentListItem, event.target);
        };
        /**
         * Handles the click event for the view cipher button. Sends a
         * message to the parent window to view the selected cipher.
         *
         * @param cipher - The cipher to view.
         */
        this.handleViewCipherClickEvent = (cipher) => {
            return this.useEventHandlersMemo(() => this.postMessageToParent({ command: "viewSelectedCipher", overlayCipherId: cipher.id }), `${cipher.id}-view-cipher-button-click-handler`);
        };
        /**
         * Handles the keyup event for the view cipher button. Facilitates
         * selecting the next/previous cipher item on ArrowDown/ArrowUp.
         * Also facilitates moving keyboard focus to the current fill
         * cipher button on ArrowLeft.
         *
         * @param event - The keyup event.
         */
        this.handleViewCipherKeyUpEvent = (event) => {
            const listenedForKeys = new Set(["ArrowDown", "ArrowUp", "ArrowLeft"]);
            if (!listenedForKeys.has(event.code) || !(event.target instanceof Element)) {
                return;
            }
            event.preventDefault();
            const currentListItem = event.target.closest(".overlay-actions-list-item");
            const cipherContainer = currentListItem.querySelector(".cipher-container");
            cipherContainer === null || cipherContainer === void 0 ? void 0 : cipherContainer.classList.remove("remove-outline");
            if (event.code === "ArrowDown") {
                this.focusNextListItem(currentListItem);
                return;
            }
            if (event.code === "ArrowUp") {
                this.focusPreviousListItem(currentListItem);
                return;
            }
            const previousSibling = event.target.previousElementSibling;
            previousSibling === null || previousSibling === void 0 ? void 0 : previousSibling.focus();
        };
        /**
         * Handles the resize observer event. Facilitates updating the height of the
         * overlay list iframe when the height of the list changes.
         *
         * @param entries - The resize observer entries.
         */
        this.handleResizeObserver = (entries) => {
            for (let entryIndex = 0; entryIndex < entries.length; entryIndex++) {
                const entry = entries[entryIndex];
                if (entry.target !== this.overlayListContainer) {
                    continue;
                }
                const { height } = entry.contentRect;
                this.postMessageToParent({
                    command: "updateAutofillOverlayListHeight",
                    styles: { height: `${height}px` },
                });
                break;
            }
        };
        /**
         * Establishes a memoized event handler for a given event.
         *
         * @param eventHandler - The event handler to memoize.
         * @param memoIndex - The memo index to use for the event handler.
         */
        this.useEventHandlersMemo = (eventHandler, memoIndex) => {
            return this.eventHandlersMemo[memoIndex] || (this.eventHandlersMemo[memoIndex] = eventHandler);
        };
        this.setupOverlayListGlobalListeners();
    }
    /**
     * Initializes the overlay list and updates the list items with the passed ciphers.
     * If the auth status is not `Unlocked`, the locked overlay is built.
     *
     * @param translations - The translations to use for the overlay list.
     * @param styleSheetUrl - The URL of the stylesheet to use for the overlay list.
     * @param theme - The theme to use for the overlay list.
     * @param authStatus - The current authentication status.
     * @param ciphers - The ciphers to display in the overlay list.
     */
    initAutofillOverlayList({ translations, styleSheetUrl, theme, authStatus, ciphers, }) {
        return autofill_overlay_list_awaiter(this, void 0, void 0, function* () {
            const linkElement = this.initOverlayPage("button", styleSheetUrl, translations);
            const themeClass = `theme_${theme}`;
            globalThis.document.documentElement.classList.add(themeClass);
            this.overlayListContainer = globalThis.document.createElement("div");
            this.overlayListContainer.classList.add("overlay-list-container", themeClass);
            this.overlayListContainer.setAttribute("role", "dialog");
            this.overlayListContainer.setAttribute("aria-modal", "true");
            this.resizeObserver.observe(this.overlayListContainer);
            this.shadowDom.append(linkElement, this.overlayListContainer);
            if (authStatus === AuthenticationStatus.Unlocked) {
                this.updateListItems(ciphers);
                return;
            }
            this.buildLockedOverlay();
        });
    }
    /**
     * Builds the locked overlay, which is displayed when the user is not authenticated.
     * Facilitates the ability to unlock the extension from the overlay.
     */
    buildLockedOverlay() {
        const lockedOverlay = globalThis.document.createElement("div");
        lockedOverlay.id = "locked-overlay-description";
        lockedOverlay.classList.add("locked-overlay", "overlay-list-message");
        lockedOverlay.textContent = this.getTranslation("unlockYourAccount");
        const unlockButtonElement = globalThis.document.createElement("button");
        unlockButtonElement.id = "unlock-button";
        unlockButtonElement.tabIndex = -1;
        unlockButtonElement.classList.add("unlock-button", "overlay-list-button");
        unlockButtonElement.textContent = this.getTranslation("unlockAccount");
        unlockButtonElement.setAttribute("aria-label", `${this.getTranslation("unlockAccount")}, ${this.getTranslation("opensInANewWindow")}`);
        unlockButtonElement.prepend(buildSvgDomElement(lockIcon));
        unlockButtonElement.addEventListener(EVENTS.CLICK, this.handleUnlockButtonClick);
        const overlayListButtonContainer = globalThis.document.createElement("div");
        overlayListButtonContainer.classList.add("overlay-list-button-container");
        overlayListButtonContainer.appendChild(unlockButtonElement);
        this.overlayListContainer.append(lockedOverlay, overlayListButtonContainer);
    }
    /**
     * Updates the list items with the passed ciphers.
     * If no ciphers are passed, the no results overlay is built.
     *
     * @param ciphers - The ciphers to display in the overlay list.
     */
    updateListItems(ciphers) {
        this.ciphers = ciphers;
        this.currentCipherIndex = 0;
        if (this.overlayListContainer) {
            this.overlayListContainer.innerHTML = "";
        }
        if (!(ciphers === null || ciphers === void 0 ? void 0 : ciphers.length)) {
            this.buildNoResultsOverlayList();
            return;
        }
        this.ciphersList = globalThis.document.createElement("ul");
        this.ciphersList.classList.add("overlay-actions-list");
        this.ciphersList.setAttribute("role", "list");
        globalThis.addEventListener(EVENTS.SCROLL, this.handleCiphersListScrollEvent);
        this.loadPageOfCiphers();
        this.overlayListContainer.appendChild(this.ciphersList);
    }
    /**
     * Overlay view that is presented when no ciphers are found for a given page.
     * Facilitates the ability to add a new vault item from the overlay.
     */
    buildNoResultsOverlayList() {
        const noItemsMessage = globalThis.document.createElement("div");
        noItemsMessage.classList.add("no-items", "overlay-list-message");
        noItemsMessage.textContent = this.getTranslation("noItemsToShow");
        const newItemButton = globalThis.document.createElement("button");
        newItemButton.tabIndex = -1;
        newItemButton.id = "new-item-button";
        newItemButton.classList.add("add-new-item-button", "overlay-list-button");
        newItemButton.textContent = this.getTranslation("newItem");
        newItemButton.setAttribute("aria-label", `${this.getTranslation("addNewVaultItem")}, ${this.getTranslation("opensInANewWindow")}`);
        newItemButton.prepend(buildSvgDomElement(plusIcon));
        newItemButton.addEventListener(EVENTS.CLICK, this.handeNewItemButtonClick);
        const overlayListButtonContainer = globalThis.document.createElement("div");
        overlayListButtonContainer.classList.add("overlay-list-button-container");
        overlayListButtonContainer.appendChild(newItemButton);
        this.overlayListContainer.append(noItemsMessage, overlayListButtonContainer);
    }
    /**
     * Loads a page of ciphers into the overlay list container.
     */
    loadPageOfCiphers() {
        const lastIndex = Math.min(this.currentCipherIndex + this.showCiphersPerPage, this.ciphers.length);
        for (let cipherIndex = this.currentCipherIndex; cipherIndex < lastIndex; cipherIndex++) {
            this.ciphersList.appendChild(this.buildOverlayActionsListItem(this.ciphers[cipherIndex]));
            this.currentCipherIndex++;
        }
        if (this.currentCipherIndex >= this.ciphers.length) {
            globalThis.removeEventListener(EVENTS.SCROLL, this.handleCiphersListScrollEvent);
        }
    }
    /**
     * Builds the list item for a given cipher.
     *
     * @param cipher - The cipher to build the list item for.
     */
    buildOverlayActionsListItem(cipher) {
        const fillCipherElement = this.buildFillCipherElement(cipher);
        const viewCipherElement = this.buildViewCipherElement(cipher);
        const cipherContainerElement = globalThis.document.createElement("div");
        cipherContainerElement.classList.add("cipher-container");
        cipherContainerElement.append(fillCipherElement, viewCipherElement);
        const overlayActionsListItem = globalThis.document.createElement("li");
        overlayActionsListItem.setAttribute("role", "listitem");
        overlayActionsListItem.classList.add("overlay-actions-list-item");
        overlayActionsListItem.appendChild(cipherContainerElement);
        return overlayActionsListItem;
    }
    /**
     * Builds the fill cipher button for a given cipher.
     * Wraps the cipher icon and details.
     *
     * @param cipher - The cipher to build the fill cipher button for.
     */
    buildFillCipherElement(cipher) {
        const cipherIcon = this.buildCipherIconElement(cipher);
        const cipherDetailsElement = this.buildCipherDetailsElement(cipher);
        const fillCipherElement = globalThis.document.createElement("button");
        fillCipherElement.tabIndex = -1;
        fillCipherElement.classList.add("fill-cipher-button");
        fillCipherElement.setAttribute("aria-label", `${this.getTranslation("fillCredentialsFor")} ${cipher.name}`);
        fillCipherElement.setAttribute("aria-description", `${this.getTranslation("partialUsername")}, ${cipher.login.username}`);
        fillCipherElement.append(cipherIcon, cipherDetailsElement);
        fillCipherElement.addEventListener(EVENTS.CLICK, this.handleFillCipherClickEvent(cipher));
        fillCipherElement.addEventListener(EVENTS.KEYUP, this.handleFillCipherKeyUpEvent);
        return fillCipherElement;
    }
    /**
     * Builds the button that facilitates viewing a cipher in the vault.
     *
     * @param cipher - The cipher to view.
     */
    buildViewCipherElement(cipher) {
        const viewCipherElement = globalThis.document.createElement("button");
        viewCipherElement.tabIndex = -1;
        viewCipherElement.classList.add("view-cipher-button");
        viewCipherElement.setAttribute("aria-label", `${this.getTranslation("view")} ${cipher.name}, ${this.getTranslation("opensInANewWindow")}`);
        viewCipherElement.append(buildSvgDomElement(viewCipherIcon));
        viewCipherElement.addEventListener(EVENTS.CLICK, this.handleViewCipherClickEvent(cipher));
        viewCipherElement.addEventListener(EVENTS.KEYUP, this.handleViewCipherKeyUpEvent);
        return viewCipherElement;
    }
    /**
     * Builds the icon for a given cipher. Prioritizes the favicon from a given cipher url
     * and the default icon element within the extension. If neither are available, the
     * globe icon is used.
     *
     * @param cipher - The cipher to build the icon for.
     */
    buildCipherIconElement(cipher) {
        var _a, _b;
        const cipherIcon = globalThis.document.createElement("span");
        cipherIcon.classList.add("cipher-icon");
        cipherIcon.setAttribute("aria-hidden", "true");
        if ((_a = cipher.icon) === null || _a === void 0 ? void 0 : _a.image) {
            try {
                const url = new URL(cipher.icon.image);
                cipherIcon.style.backgroundImage = `url(${url.href})`;
                return cipherIcon;
            }
            catch (_c) {
                // Silently default to the globe icon element if the image URL is invalid
            }
        }
        if ((_b = cipher.icon) === null || _b === void 0 ? void 0 : _b.icon) {
            cipherIcon.classList.add("cipher-icon", "bwi", cipher.icon.icon);
            return cipherIcon;
        }
        cipherIcon.append(buildSvgDomElement(globeIcon));
        return cipherIcon;
    }
    /**
     * Builds the details for a given cipher. Includes the cipher name and username login.
     *
     * @param cipher - The cipher to build the details for.
     */
    buildCipherDetailsElement(cipher) {
        const cipherNameElement = this.buildCipherNameElement(cipher);
        const cipherUserLoginElement = this.buildCipherUserLoginElement(cipher);
        const cipherDetailsElement = globalThis.document.createElement("span");
        cipherDetailsElement.classList.add("cipher-details");
        if (cipherNameElement) {
            cipherDetailsElement.appendChild(cipherNameElement);
        }
        if (cipherUserLoginElement) {
            cipherDetailsElement.appendChild(cipherUserLoginElement);
        }
        return cipherDetailsElement;
    }
    /**
     * Builds the name element for a given cipher.
     *
     * @param cipher - The cipher to build the name element for.
     */
    buildCipherNameElement(cipher) {
        if (!cipher.name) {
            return null;
        }
        const cipherNameElement = globalThis.document.createElement("span");
        cipherNameElement.classList.add("cipher-name");
        cipherNameElement.textContent = cipher.name;
        cipherNameElement.setAttribute("title", cipher.name);
        return cipherNameElement;
    }
    /**
     * Builds the username login element for a given cipher.
     *
     * @param cipher - The cipher to build the username login element for.
     */
    buildCipherUserLoginElement(cipher) {
        var _a;
        if (!((_a = cipher.login) === null || _a === void 0 ? void 0 : _a.username)) {
            return null;
        }
        const cipherUserLoginElement = globalThis.document.createElement("span");
        cipherUserLoginElement.classList.add("cipher-user-login");
        cipherUserLoginElement.textContent = cipher.login.username;
        cipherUserLoginElement.setAttribute("title", cipher.login.username);
        return cipherUserLoginElement;
    }
    /**
     * Validates whether the overlay list iframe is currently focused.
     * If not focused, will check if the button element is focused.
     */
    checkOverlayListFocused() {
        if (globalThis.document.hasFocus()) {
            return;
        }
        this.postMessageToParent({ command: "checkAutofillOverlayButtonFocused" });
    }
    /**
     * Focuses the overlay list iframe. The element that receives focus is
     * determined by the presence of the unlock button, new item button, or
     * the first cipher button.
     */
    focusOverlayList() {
        const unlockButtonElement = this.overlayListContainer.querySelector("#unlock-button");
        if (unlockButtonElement) {
            unlockButtonElement.focus();
            return;
        }
        const newItemButtonElement = this.overlayListContainer.querySelector("#new-item-button");
        if (newItemButtonElement) {
            newItemButtonElement.focus();
            return;
        }
        const firstCipherElement = this.overlayListContainer.querySelector(".fill-cipher-button");
        firstCipherElement === null || firstCipherElement === void 0 ? void 0 : firstCipherElement.focus();
    }
    /**
     * Sets up the global listeners for the overlay list iframe.
     */
    setupOverlayListGlobalListeners() {
        this.setupGlobalListeners(this.overlayListWindowMessageHandlers);
        this.resizeObserver = new ResizeObserver(this.handleResizeObserver);
    }
    /**
     * Focuses the next list item in the overlay list. If the current list item is the last
     * item in the list, the first item is focused.
     *
     * @param currentListItem - The current list item.
     */
    focusNextListItem(currentListItem) {
        var _a;
        const nextListItem = currentListItem.nextSibling;
        const nextSibling = nextListItem === null || nextListItem === void 0 ? void 0 : nextListItem.querySelector(".fill-cipher-button");
        if (nextSibling) {
            nextSibling.focus();
            return;
        }
        const firstListItem = (_a = currentListItem.parentElement) === null || _a === void 0 ? void 0 : _a.firstChild;
        const firstSibling = firstListItem === null || firstListItem === void 0 ? void 0 : firstListItem.querySelector(".fill-cipher-button");
        firstSibling === null || firstSibling === void 0 ? void 0 : firstSibling.focus();
    }
    /**
     * Focuses the previous list item in the overlay list. If the current list item is the first
     * item in the list, the last item is focused.
     *
     * @param currentListItem - The current list item.
     */
    focusPreviousListItem(currentListItem) {
        var _a;
        const previousListItem = currentListItem.previousSibling;
        const previousSibling = previousListItem === null || previousListItem === void 0 ? void 0 : previousListItem.querySelector(".fill-cipher-button");
        if (previousSibling) {
            previousSibling.focus();
            return;
        }
        const lastListItem = (_a = currentListItem.parentElement) === null || _a === void 0 ? void 0 : _a.lastChild;
        const lastSibling = lastListItem === null || lastListItem === void 0 ? void 0 : lastListItem.querySelector(".fill-cipher-button");
        lastSibling === null || lastSibling === void 0 ? void 0 : lastSibling.focus();
    }
    /**
     * Focuses the view cipher button relative to the current fill cipher button.
     *
     * @param currentListItem - The current list item.
     * @param currentButtonElement - The current button element.
     */
    focusViewCipherButton(currentListItem, currentButtonElement) {
        const cipherContainer = currentListItem.querySelector(".cipher-container");
        cipherContainer.classList.add("remove-outline");
        const nextSibling = currentButtonElement.nextElementSibling;
        nextSibling === null || nextSibling === void 0 ? void 0 : nextSibling.focus();
    }
}
/* harmony default export */ const autofill_overlay_list = (AutofillOverlayList);

;// CONCATENATED MODULE: ./src/autofill/overlay/pages/list/bootstrap-autofill-overlay-list.ts


__webpack_require__(54071);
(function () {
    globalThis.customElements.define(AutofillOverlayElement.List, autofill_overlay_list);
})();

})();

/******/ })()
;