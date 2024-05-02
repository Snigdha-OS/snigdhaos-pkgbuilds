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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

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
;// CONCATENATED MODULE: ../../node_modules/tabbable/dist/index.esm.js
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
// NOTE: separate `:not()` selectors has broader browser support than the newer
//  `:not([inert], [inert] *)` (Feb 2023)
// CAREFUL: JSDom does not support `:not([inert] *)` as a selector; using it causes
//  the entire query to fail, resulting in no nodes found, which will break a lot
//  of things... so we have to rely on JS to identify nodes inside an inert container
var candidateSelectors = ['input:not([inert])', 'select:not([inert])', 'textarea:not([inert])', 'a[href]:not([inert])', 'button:not([inert])', '[tabindex]:not(slot):not([inert])', 'audio[controls]:not([inert])', 'video[controls]:not([inert])', '[contenteditable]:not([contenteditable="false"]):not([inert])', 'details>summary:first-of-type:not([inert])', 'details:not([inert])'];
var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
var NoElement = typeof Element === 'undefined';
var matches = NoElement ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function (element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function (element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};

/**
 * Determines if a node is inert or in an inert ancestor.
 * @param {Element} [node]
 * @param {boolean} [lookUp] If true and `node` is not inert, looks up at ancestors to
 *  see if any of them are inert. If false, only `node` itself is considered.
 * @returns {boolean} True if inert itself or by way of being in an inert ancestor.
 *  False if `node` is falsy.
 */
var isInert = function isInert(node, lookUp) {
  var _node$getAttribute;
  if (lookUp === void 0) {
    lookUp = true;
  }
  // CAREFUL: JSDom does not support inert at all, so we can't use the `HTMLElement.inert`
  //  JS API property; we have to check the attribute, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's an active element
  var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, 'inert');
  var inert = inertAtt === '' || inertAtt === 'true';

  // NOTE: this could also be handled with `node.matches('[inert], :is([inert] *)')`
  //  if it weren't for `matches()` not being a function on shadow roots; the following
  //  code works for any kind of node
  // CAREFUL: JSDom does not appear to support certain selectors like `:not([inert] *)`
  //  so it likely would not support `:is([inert] *)` either...
  var result = inert || lookUp && node && isInert(node.parentNode); // recursive

  return result;
};

/**
 * Determines if a node's content is editable.
 * @param {Element} [node]
 * @returns True if it's content-editable; false if it's not or `node` is falsy.
 */
var isContentEditable = function isContentEditable(node) {
  var _node$getAttribute2;
  // CAREFUL: JSDom does not support the `HTMLElement.isContentEditable` API so we have
  //  to use the attribute directly to check for this, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's a non-editable element
  var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, 'contenteditable');
  return attValue === '' || attValue === 'true';
};

/**
 * @param {Element} el container to check in
 * @param {boolean} includeContainer add container to check
 * @param {(node: Element) => boolean} filter filter candidates
 * @returns {Element[]}
 */
var getCandidates = function getCandidates(el, includeContainer, filter) {
  // even if `includeContainer=false`, we still have to check it for inertness because
  //  if it's inert, all its children are inert
  if (isInert(el)) {
    return [];
  }
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};

/**
 * @callback GetShadowRoot
 * @param {Element} element to check for shadow root
 * @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
 */

/**
 * @callback ShadowRootFilter
 * @param {Element} shadowHostNode the element which contains shadow content
 * @returns {boolean} true if a shadow root could potentially contain valid candidates.
 */

/**
 * @typedef {Object} CandidateScope
 * @property {Element} scopeParent contains inner candidates
 * @property {Element[]} candidates list of candidates found in the scope parent
 */

/**
 * @typedef {Object} IterativeOptions
 * @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
 *  if a function, implies shadow support is enabled and either returns the shadow root of an element
 *  or a boolean stating if it has an undisclosed shadow root
 * @property {(node: Element) => boolean} filter filter candidates
 * @property {boolean} flatten if true then result will flatten any CandidateScope into the returned list
 * @property {ShadowRootFilter} shadowRootFilter filter shadow roots;
 */

/**
 * @param {Element[]} elements list of element containers to match candidates from
 * @param {boolean} includeContainer add container list to check
 * @param {IterativeOptions} options
 * @returns {Array.<Element|CandidateScope>}
 */
var getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element = elementsToCheck.shift();
    if (isInert(element, false)) {
      // no need to look up since we're drilling down
      // anything inside this container will also be inert
      continue;
    }
    if (element.tagName === 'SLOT') {
      // add shadow dom slot scope (slot itself cannot be focusable)
      var assigned = element.assignedElements();
      var content = assigned.length ? assigned : element.children;
      var nestedCandidates = getCandidatesIteratively(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scopeParent: element,
          candidates: nestedCandidates
        });
      }
    } else {
      // check candidate element
      var validCandidate = matches.call(element, candidateSelector);
      if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
        candidates.push(element);
      }

      // iterate over shadow content if possible
      var shadowRoot = element.shadowRoot ||
      // check for an undisclosed shadow
      typeof options.getShadowRoot === 'function' && options.getShadowRoot(element);

      // no inert look up because we're already drilling down and checking for inertness
      //  on the way down, so all containers to this root node should have already been
      //  vetted as non-inert
      var validShadowRoot = !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
      if (shadowRoot && validShadowRoot) {
        // add shadow dom scope IIF a shadow root node was given; otherwise, an undisclosed
        //  shadow exists, so look at light dom children as fallback BUT create a scope for any
        //  child candidates found because they're likely slotted elements (elements that are
        //  children of the web component element (which has the shadow), in the light dom, but
        //  slotted somewhere _inside_ the undisclosed shadow) -- the scope is created below,
        //  _after_ we return from this recursive call
        var _nestedCandidates = getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scopeParent: element,
            candidates: _nestedCandidates
          });
        }
      } else {
        // there's not shadow so just dig into the element's (light dom) children
        //  __without__ giving the element special scope treatment
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }
  return candidates;
};

/**
 * @private
 * Determines if the node has an explicitly specified `tabindex` attribute.
 * @param {HTMLElement} node
 * @returns {boolean} True if so; false if not.
 */
var hasTabIndex = function hasTabIndex(node) {
  return !isNaN(parseInt(node.getAttribute('tabindex'), 10));
};

/**
 * Determine the tab index of a given node.
 * @param {HTMLElement} node
 * @returns {number} Tab order (negative, 0, or positive number).
 * @throws {Error} If `node` is falsy.
 */
var getTabIndex = function getTabIndex(node) {
  if (!node) {
    throw new Error('No node provided');
  }
  if (node.tabIndex < 0) {
    // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
    // `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
    // yet they are still part of the regular tab order; in FF, they get a default
    // `tabIndex` of 0; since Chrome still puts those elements in the regular tab
    // order, consider their tab index to be 0.
    // Also browsers do not return `tabIndex` correctly for contentEditable nodes;
    // so if they don't have a tabindex attribute specifically set, assume it's 0.
    if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
      return 0;
    }
  }
  return node.tabIndex;
};

/**
 * Determine the tab index of a given node __for sort order purposes__.
 * @param {HTMLElement} node
 * @param {boolean} [isScope] True for a custom element with shadow root or slot that, by default,
 *  has tabIndex -1, but needs to be sorted by document order in order for its content to be
 *  inserted into the correct sort position.
 * @returns {number} Tab order (negative, 0, or positive number).
 */
var getSortOrderTabIndex = function getSortOrderTabIndex(node, isScope) {
  var tabIndex = getTabIndex(node);
  if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
    return 0;
  }
  return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput(node) {
  return node.tagName === 'INPUT';
};
var isHiddenInput = function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
};
var isDetailsWithSummary = function isDetailsWithSummary(node) {
  var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
    return child.tagName === 'SUMMARY';
  });
  return r;
};
var getCheckedRadio = function getCheckedRadio(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};
var isTabbableRadio = function isTabbableRadio(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode(node);
  var queryRadios = function queryRadios(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio(node) {
  return isInput(node) && node.type === 'radio';
};
var isNonTabbableRadio = function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
};

// determines if a node is ultimately attached to the window's document
var isNodeAttached = function isNodeAttached(node) {
  var _nodeRoot;
  // The root node is the shadow root if the node is in a shadow DOM; some document otherwise
  //  (but NOT _the_ document; see second 'If' comment below for more).
  // If rootNode is shadow root, it'll have a host, which is the element to which the shadow
  //  is attached, and the one we need to check if it's in the document or not (because the
  //  shadow, and all nodes it contains, is never considered in the document since shadows
  //  behave like self-contained DOMs; but if the shadow's HOST, which is part of the document,
  //  is hidden, or is not in the document itself but is detached, it will affect the shadow's
  //  visibility, including all the nodes it contains). The host could be any normal node,
  //  or a custom element (i.e. web component). Either way, that's the one that is considered
  //  part of the document, not the shadow root, nor any of its children (i.e. the node being
  //  tested).
  // To further complicate things, we have to look all the way up until we find a shadow HOST
  //  that is attached (or find none) because the node might be in nested shadows...
  // If rootNode is not a shadow root, it won't have a host, and so rootNode should be the
  //  document (per the docs) and while it's a Document-type object, that document does not
  //  appear to be the same as the node's `ownerDocument` for some reason, so it's safer
  //  to ignore the rootNode at this point, and use `node.ownerDocument`. Otherwise,
  //  using `rootNode.contains(node)` will _always_ be true we'll get false-positives when
  //  node is actually detached.
  // NOTE: If `nodeRootHost` or `node` happens to be the `document` itself (which is possible
  //  if a tabbable/focusable node was quickly added to the DOM, focused, and then removed
  //  from the DOM as in https://github.com/focus-trap/focus-trap-react/issues/905), then
  //  `ownerDocument` will be `null`, hence the optional chaining on it.
  var nodeRoot = node && getRootNode(node);
  var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;

  // in some cases, a detached node will return itself as the root instead of a document or
  //  shadow root object, in which case, we shouldn't try to look further up the host chain
  var attached = false;
  if (nodeRoot && nodeRoot !== node) {
    var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
    attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
    while (!attached && nodeRootHost) {
      var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
      // since it's not attached and we have a root host, the node MUST be in a nested shadow DOM,
      //  which means we need to get the host's host and check if that parent host is contained
      //  in (i.e. attached to) the document
      nodeRoot = getRootNode(nodeRootHost);
      nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
      attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
    }
  }
  return attached;
};
var isZeroArea = function isZeroArea(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(),
    width = _node$getBoundingClie.width,
    height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden(node, _ref) {
  var displayCheck = _ref.displayCheck,
    getShadowRoot = _ref.getShadowRoot;
  // NOTE: visibility will be `undefined` if node is detached from the document
  //  (see notes about this further down), which means we will consider it visible
  //  (this is legacy behavior from a very long way back)
  // NOTE: we check this regardless of `displayCheck="none"` because this is a
  //  _visibility_ check, not a _display_ check
  if (getComputedStyle(node).visibility === 'hidden') {
    return true;
  }
  var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
    return true;
  }
  if (!displayCheck || displayCheck === 'full' || displayCheck === 'legacy-full') {
    if (typeof getShadowRoot === 'function') {
      // figure out if we should consider the node to be in an undisclosed shadow and use the
      //  'non-zero-area' fallback
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true // check if there's an undisclosed shadow
        ) {
          // node has an undisclosed shadow which means we can only treat it as a black box, so we
          //  fall back to a non-zero-area test
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          // iterate up slot
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          // cross shadow boundary
          node = rootNode.host;
        } else {
          // iterate up normal dom
          node = parentElement;
        }
      }
      node = originalNode;
    }
    // else, `getShadowRoot` might be true, but all that does is enable shadow DOM support
    //  (i.e. it does not also presume that all nodes might have undisclosed shadows); or
    //  it might be a falsy value, which means shadow DOM support is disabled

    // Since we didn't find it sitting in an undisclosed shadow (or shadows are disabled)
    //  now we can just test to see if it would normally be visible or not, provided it's
    //  attached to the main document.
    // NOTE: We must consider case where node is inside a shadow DOM and given directly to
    //  `isTabbable()` or `isFocusable()` -- regardless of `getShadowRoot` option setting.

    if (isNodeAttached(node)) {
      // this works wherever the node is: if there's at least one client rect, it's
      //  somehow displayed; it also covers the CSS 'display: contents' case where the
      //  node itself is hidden in place of its contents; and there's no need to search
      //  up the hierarchy either
      return !node.getClientRects().length;
    }

    // Else, the node isn't attached to the document, which means the `getClientRects()`
    //  API will __always__ return zero rects (this can happen, for example, if React
    //  is used to render nodes onto a detached tree, as confirmed in this thread:
    //  https://github.com/facebook/react/issues/9117#issuecomment-284228870)
    //
    // It also means that even window.getComputedStyle(node).display will return `undefined`
    //  because styles are only computed for nodes that are in the document.
    //
    // NOTE: THIS HAS BEEN THE CASE FOR YEARS. It is not new, nor is it caused by tabbable
    //  somehow. Though it was never stated officially, anyone who has ever used tabbable
    //  APIs on nodes in detached containers has actually implicitly used tabbable in what
    //  was later (as of v5.2.0 on Apr 9, 2021) called `displayCheck="none"` mode -- essentially
    //  considering __everything__ to be visible because of the innability to determine styles.
    //
    // v6.0.0: As of this major release, the default 'full' option __no longer treats detached
    //  nodes as visible with the 'none' fallback.__
    if (displayCheck !== 'legacy-full') {
      return true; // hidden
    }
    // else, fallback to 'none' mode and consider the node visible
  } else if (displayCheck === 'non-zero-area') {
    // NOTE: Even though this tests that the node's client rect is non-zero to determine
    //  whether it's displayed, and that a detached node will __always__ have a zero-area
    //  client rect, we don't special-case for whether the node is attached or not. In
    //  this mode, we do want to consider nodes that have a zero area to be hidden at all
    //  times, and that includes attached or not.
    return isZeroArea(node);
  }

  // visible, as far as we can tell, or per current `displayCheck=none` mode, we assume
  //  it's visible
  return false;
};

// form fields (nested) inside a disabled fieldset are not focusable/tabbable
//  unless they are in the _first_ <legend> element of the top-most disabled
//  fieldset
var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    // check if `node` is contained in a disabled <fieldset>
    while (parentNode) {
      if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
        // look for the first <legend> among the children of the disabled <fieldset>
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);
          // when the first <legend> (in document order) is found
          if (child.tagName === 'LEGEND') {
            // if its parent <fieldset> is not nested in another disabled <fieldset>,
            // return whether `node` is a descendant of its first <legend>
            return matches.call(parentNode, 'fieldset[disabled] *') ? true : !child.contains(node);
          }
        }
        // the disabled <fieldset> containing `node` has no <legend>
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }

  // else, node's tabbable/focusable state should not be affected by a fieldset's
  //  enabled/disabled state
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
  if (node.disabled ||
  // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  isInert(node) || isHiddenInput(node) || isHidden(node, options) ||
  // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
  if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isValidShadowRootTabbable = function isValidShadowRootTabbable(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute('tabindex'), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  // If a custom element has an explicit negative tabindex,
  // browsers will not allow tab targeting said element's children.
  return false;
};

/**
 * @param {Array.<Element|CandidateScope>} candidates
 * @returns Element[]
 */
var sortByOrder = function sortByOrder(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function (item, i) {
    var isScope = !!item.scopeParent;
    var element = isScope ? item.scopeParent : item;
    var candidateTabindex = getSortOrderTabIndex(element, isScope);
    var elements = isScope ? sortByOrder(item.candidates) : element;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        item: item,
        isScope: isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function (acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isValidShadowRootTabbable
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return sortByOrder(candidates);
};
var focusable = function focusable(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorFocusable.bind(null, options),
      flatten: true,
      getShadowRoot: options.getShadowRoot
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  }
  return candidates;
};
var isTabbable = function isTabbable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, candidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* #__PURE__ */(/* unused pure expression or super */ null && (candidateSelectors.concat('iframe').join(',')));
var isFocusable = function isFocusable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorFocusable(options, node);
};

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


;// CONCATENATED MODULE: ../../libs/common/src/platform/enums/encryption-type.enum.ts
var EncryptionType;
(function (EncryptionType) {
    EncryptionType[EncryptionType["AesCbc256_B64"] = 0] = "AesCbc256_B64";
    EncryptionType[EncryptionType["AesCbc128_HmacSha256_B64"] = 1] = "AesCbc128_HmacSha256_B64";
    EncryptionType[EncryptionType["AesCbc256_HmacSha256_B64"] = 2] = "AesCbc256_HmacSha256_B64";
    EncryptionType[EncryptionType["Rsa2048_OaepSha256_B64"] = 3] = "Rsa2048_OaepSha256_B64";
    EncryptionType[EncryptionType["Rsa2048_OaepSha1_B64"] = 4] = "Rsa2048_OaepSha1_B64";
    EncryptionType[EncryptionType["Rsa2048_OaepSha256_HmacSha256_B64"] = 5] = "Rsa2048_OaepSha256_HmacSha256_B64";
    EncryptionType[EncryptionType["Rsa2048_OaepSha1_HmacSha256_B64"] = 6] = "Rsa2048_OaepSha1_HmacSha256_B64";
})(EncryptionType || (EncryptionType = {}));
/** The expected number of parts to a serialized EncString of the given encryption type.
 * For example, an EncString of type AesCbc256_B64 will have 2 parts, and an EncString of type
 * AesCbc128_HmacSha256_B64 will have 3 parts.
 *
 * Example of annotated serialized EncStrings:
 * 0.iv|data
 * 1.iv|data|mac
 * 2.iv|data|mac
 * 3.data
 * 4.data
 *
 * @see EncString
 * @see EncryptionType
 * @see EncString.parseEncryptedString
 */
const EXPECTED_NUM_PARTS_BY_ENCRYPTION_TYPE = {
    [EncryptionType.AesCbc256_B64]: 2,
    [EncryptionType.AesCbc128_HmacSha256_B64]: 3,
    [EncryptionType.AesCbc256_HmacSha256_B64]: 3,
    [EncryptionType.Rsa2048_OaepSha256_B64]: 1,
    [EncryptionType.Rsa2048_OaepSha1_B64]: 1,
    [EncryptionType.Rsa2048_OaepSha256_HmacSha256_B64]: 2,
    [EncryptionType.Rsa2048_OaepSha1_HmacSha256_B64]: 2,
};

;// CONCATENATED MODULE: ../../libs/common/src/platform/enums/file-upload-type.enum.ts
var FileUploadType;
(function (FileUploadType) {
    FileUploadType[FileUploadType["Direct"] = 0] = "Direct";
    FileUploadType[FileUploadType["Azure"] = 1] = "Azure";
})(FileUploadType || (FileUploadType = {}));

;// CONCATENATED MODULE: ../../libs/common/src/platform/enums/hash-purpose.enum.ts
var HashPurpose;
(function (HashPurpose) {
    HashPurpose[HashPurpose["ServerAuthorization"] = 1] = "ServerAuthorization";
    HashPurpose[HashPurpose["LocalAuthorization"] = 2] = "LocalAuthorization";
})(HashPurpose || (HashPurpose = {}));

;// CONCATENATED MODULE: ../../libs/common/src/platform/enums/html-storage-location.enum.ts
var HtmlStorageLocation;
(function (HtmlStorageLocation) {
    HtmlStorageLocation["Local"] = "local";
    HtmlStorageLocation["Memory"] = "memory";
    HtmlStorageLocation["Session"] = "session";
})(HtmlStorageLocation || (HtmlStorageLocation = {}));

;// CONCATENATED MODULE: ../../libs/common/src/auth/models/domain/kdf-config.ts
class KdfConfig {
    constructor(iterations, memory, parallelism) {
        this.iterations = iterations;
        this.memory = memory;
        this.parallelism = parallelism;
    }
}

;// CONCATENATED MODULE: ../../libs/common/src/platform/misc/range-with-default.ts
/**
 * A range with a default value.
 *
 * Enforces constraints to ensure min > default > max.
 */
class RangeWithDefault {
    constructor(min, max, defaultValue) {
        this.min = min;
        this.max = max;
        this.defaultValue = defaultValue;
        if (min > max) {
            throw new Error(`${min} is greater than ${max}.`);
        }
        if (this.inRange(defaultValue) === false) {
            throw new Error("Default value is not in range.");
        }
    }
    inRange(value) {
        return value >= this.min && value <= this.max;
    }
}

;// CONCATENATED MODULE: ../../libs/common/src/platform/enums/kdf-type.enum.ts


var KdfType;
(function (KdfType) {
    KdfType[KdfType["PBKDF2_SHA256"] = 0] = "PBKDF2_SHA256";
    KdfType[KdfType["Argon2id"] = 1] = "Argon2id";
})(KdfType || (KdfType = {}));
const ARGON2_MEMORY = new RangeWithDefault(16, 1024, 64);
const ARGON2_PARALLELISM = new RangeWithDefault(1, 16, 4);
const ARGON2_ITERATIONS = new RangeWithDefault(2, 10, 3);
const DEFAULT_KDF_TYPE = KdfType.PBKDF2_SHA256;
const PBKDF2_ITERATIONS = new RangeWithDefault(600000, 2000000, 600000);
const DEFAULT_KDF_CONFIG = new KdfConfig(PBKDF2_ITERATIONS.defaultValue);

;// CONCATENATED MODULE: ../../libs/common/src/platform/enums/key-suffix-options.enum.ts
var KeySuffixOptions;
(function (KeySuffixOptions) {
    KeySuffixOptions["Auto"] = "auto";
    KeySuffixOptions["Biometric"] = "biometric";
    KeySuffixOptions["Pin"] = "pin";
})(KeySuffixOptions || (KeySuffixOptions = {}));

;// CONCATENATED MODULE: ../../libs/common/src/platform/enums/log-level-type.enum.ts
var LogLevelType;
(function (LogLevelType) {
    LogLevelType[LogLevelType["Debug"] = 0] = "Debug";
    LogLevelType[LogLevelType["Info"] = 1] = "Info";
    LogLevelType[LogLevelType["Warning"] = 2] = "Warning";
    LogLevelType[LogLevelType["Error"] = 3] = "Error";
})(LogLevelType || (LogLevelType = {}));

;// CONCATENATED MODULE: ../../libs/common/src/platform/enums/storage-location.enum.ts
var StorageLocation;
(function (StorageLocation) {
    StorageLocation["Both"] = "both";
    StorageLocation["Disk"] = "disk";
    StorageLocation["Memory"] = "memory";
})(StorageLocation || (StorageLocation = {}));

;// CONCATENATED MODULE: ../../libs/common/src/platform/enums/theme-type.enum.ts
var ThemeType;
(function (ThemeType) {
    ThemeType["System"] = "system";
    ThemeType["Light"] = "light";
    ThemeType["Dark"] = "dark";
    ThemeType["Nord"] = "nord";
    ThemeType["SolarizedDark"] = "solarizedDark";
})(ThemeType || (ThemeType = {}));

;// CONCATENATED MODULE: ../../libs/common/src/platform/enums/index.ts










;// CONCATENATED MODULE: ./src/autofill/enums/autofill-port.enums.ts
const AutofillPort = {
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


;// CONCATENATED MODULE: ./src/autofill/overlay/iframe-content/autofill-overlay-iframe.service.ts



class AutofillOverlayIframeService {
    constructor(iframePath, portName, shadow) {
        this.iframePath = iframePath;
        this.portName = portName;
        this.shadow = shadow;
        this.port = null;
        this.iframeStyles = {
            all: "initial",
            position: "fixed",
            display: "block",
            zIndex: "2147483647",
            lineHeight: "0",
            overflow: "hidden",
            transition: "opacity 125ms ease-out 0s",
            visibility: "visible",
            clipPath: "none",
            pointerEvents: "auto",
            margin: "0",
            padding: "0",
            colorScheme: "normal",
            opacity: "0",
        };
        this.defaultIframeAttributes = {
            src: "",
            title: "",
            sandbox: "allow-scripts",
            allowtransparency: "true",
            tabIndex: "-1",
        };
        this.foreignMutationsCount = 0;
        this.mutationObserverIterations = 0;
        this.windowMessageHandlers = {
            updateAutofillOverlayListHeight: (message) => this.updateElementStyles(this.iframe, message.styles),
            getPageColorScheme: () => this.updateOverlayPageColorScheme(),
        };
        this.backgroundPortMessageHandlers = {
            initAutofillOverlayList: ({ message }) => this.initAutofillOverlayList(message),
            updateIframePosition: ({ message }) => this.updateIframePosition(message.styles),
            updateOverlayHidden: ({ message }) => this.updateElementStyles(this.iframe, message.styles),
        };
        /**
         * Sets up the port message listener to the extension background script. This
         * listener is used to communicate between the iframe and the background script.
         * This also facilitates announcing to screen readers when the iframe is loaded.
         */
        this.setupPortMessageListener = () => {
            this.port = chrome.runtime.connect({ name: this.portName });
            this.port.onDisconnect.addListener(this.handlePortDisconnect);
            this.port.onMessage.addListener(this.handlePortMessage);
            globalThis.addEventListener(EVENTS.MESSAGE, this.handleWindowMessage);
            this.announceAriaAlert();
        };
        /**
         * Handles disconnecting the port message listener from the extension background
         * script. This also removes the listener that facilitates announcing to screen
         * readers when the iframe is loaded.
         *
         * @param port - The port that is disconnected
         */
        this.handlePortDisconnect = (port) => {
            var _a, _b, _c;
            if (port.name !== this.portName) {
                return;
            }
            this.updateElementStyles(this.iframe, { opacity: "0", height: "0px", display: "block" });
            globalThis.removeEventListener("message", this.handleWindowMessage);
            this.unobserveIframe();
            (_a = this.port) === null || _a === void 0 ? void 0 : _a.onMessage.removeListener(this.handlePortMessage);
            (_b = this.port) === null || _b === void 0 ? void 0 : _b.onDisconnect.removeListener(this.handlePortDisconnect);
            (_c = this.port) === null || _c === void 0 ? void 0 : _c.disconnect();
            this.port = null;
        };
        /**
         * Handles messages sent from the extension background script to the iframe.
         * Triggers behavior within the iframe as well as on the custom element that
         * contains the iframe element.
         *
         * @param message
         * @param port
         */
        this.handlePortMessage = (message, port) => {
            var _a;
            if (port.name !== this.portName) {
                return;
            }
            if (this.backgroundPortMessageHandlers[message.command]) {
                this.backgroundPortMessageHandlers[message.command]({ message, port });
                return;
            }
            (_a = this.iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.postMessage(message, "*");
        };
        /**
         * Handles messages sent from the iframe. If the message does not have a
         * specified handler set, it passes the message to the background script.
         *
         * @param event - The message event
         */
        this.handleWindowMessage = (event) => {
            if (!this.port ||
                event.source !== this.iframe.contentWindow ||
                !this.isFromExtensionOrigin(event.origin.toLowerCase())) {
                return;
            }
            const message = event.data;
            if (this.windowMessageHandlers[message.command]) {
                this.windowMessageHandlers[message.command](message);
                return;
            }
            this.port.postMessage(event.data);
        };
        /**
         * Handles mutations to the iframe element. The ensures that the iframe
         * element's styles are not modified by a third party source.
         *
         * @param mutations - The mutations to the iframe element
         */
        this.handleMutations = (mutations) => {
            if (this.isTriggeringExcessiveMutationObserverIterations()) {
                return;
            }
            for (let index = 0; index < mutations.length; index++) {
                const mutation = mutations[index];
                if (mutation.type !== "attributes") {
                    continue;
                }
                const element = mutation.target;
                if (mutation.attributeName !== "style") {
                    this.handleElementAttributeMutation(element);
                    continue;
                }
                this.iframe.removeAttribute("style");
                this.updateElementStyles(this.iframe, this.iframeStyles);
            }
        };
        this.extensionOriginsSet = new Set([
            chrome.runtime.getURL("").slice(0, -1).toLowerCase(),
            "null",
        ]);
        this.iframeMutationObserver = new MutationObserver(this.handleMutations);
    }
    /**
     * Handles initialization of the iframe which includes applying initial styles
     * to the iframe, setting the source, and adding listener that connects the
     * iframe to the background script each time it loads. Can conditionally
     * create an aria alert element to announce to screen readers when the iframe
     * is loaded. The end result is append to the shadowDOM of the custom element
     * that is declared.
     *
     *
     * @param initStyles - Initial styles to apply to the iframe
     * @param iframeTitle - Title to apply to the iframe
     * @param ariaAlert - Text to announce to screen readers when the iframe is loaded
     */
    initOverlayIframe(initStyles, iframeTitle, ariaAlert) {
        this.defaultIframeAttributes.src = chrome.runtime.getURL(this.iframePath);
        this.defaultIframeAttributes.title = iframeTitle;
        this.iframe = globalThis.document.createElement("iframe");
        this.updateElementStyles(this.iframe, Object.assign(Object.assign({}, this.iframeStyles), initStyles));
        for (const [attribute, value] of Object.entries(this.defaultIframeAttributes)) {
            this.iframe.setAttribute(attribute, value);
        }
        this.iframe.addEventListener(EVENTS.LOAD, this.setupPortMessageListener);
        if (ariaAlert) {
            this.createAriaAlertElement(ariaAlert);
        }
        this.shadow.appendChild(this.iframe);
    }
    /**
     * Creates an aria alert element that is used to announce to screen readers
     * when the iframe is loaded.
     *
     * @param ariaAlertText - Text to announce to screen readers when the iframe is loaded
     */
    createAriaAlertElement(ariaAlertText) {
        this.ariaAlertElement = globalThis.document.createElement("div");
        this.ariaAlertElement.setAttribute("role", "status");
        this.ariaAlertElement.setAttribute("aria-live", "polite");
        this.ariaAlertElement.setAttribute("aria-atomic", "true");
        this.updateElementStyles(this.ariaAlertElement, {
            position: "absolute",
            top: "-9999px",
            left: "-9999px",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            opacity: "0",
            pointerEvents: "none",
        });
        this.ariaAlertElement.textContent = ariaAlertText;
    }
    /**
     * Announces the aria alert element to screen readers when the iframe is loaded.
     */
    announceAriaAlert() {
        if (!this.ariaAlertElement) {
            return;
        }
        this.ariaAlertElement.remove();
        if (this.ariaAlertTimeout) {
            clearTimeout(this.ariaAlertTimeout);
        }
        this.ariaAlertTimeout = setTimeout(() => this.shadow.appendChild(this.ariaAlertElement), 2000);
    }
    /**
     * Handles messages sent from the iframe to the extension background script.
     * Will adjust the border element to fit the user's set theme.
     *
     * @param message - The message sent from the iframe
     */
    initAutofillOverlayList(message) {
        var _a;
        const { theme } = message;
        let borderColor;
        let verifiedTheme = theme;
        if (verifiedTheme === ThemeType.System) {
            verifiedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? ThemeType.Dark
                : ThemeType.Light;
        }
        if (verifiedTheme === ThemeType.Dark) {
            borderColor = "#4c525f";
        }
        if (theme === ThemeType.Nord) {
            borderColor = "#2E3440";
        }
        if (theme === ThemeType.SolarizedDark) {
            borderColor = "#073642";
        }
        if (borderColor) {
            this.updateElementStyles(this.iframe, { borderColor });
        }
        message.theme = verifiedTheme;
        (_a = this.iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.postMessage(message, "*");
    }
    /**
     * Updates the position of the iframe element. Will also announce
     * to screen readers that the iframe is open.
     *
     * @param position - The position styles to apply to the iframe
     */
    updateIframePosition(position) {
        if (!globalThis.document.hasFocus()) {
            return;
        }
        this.updateElementStyles(this.iframe, position);
        setTimeout(() => this.updateElementStyles(this.iframe, { opacity: "1" }), 0);
        this.announceAriaAlert();
    }
    /**
     * Gets the page color scheme meta tag and sends a message to the iframe
     * to update its color scheme. Will default to "normal" if the meta tag
     * does not exist.
     */
    updateOverlayPageColorScheme() {
        var _a, _b;
        const colorSchemeValue = (_a = globalThis.document
            .querySelector("meta[name='color-scheme']")) === null || _a === void 0 ? void 0 : _a.getAttribute("content");
        (_b = this.iframe.contentWindow) === null || _b === void 0 ? void 0 : _b.postMessage({ command: "updateOverlayPageColorScheme", colorScheme: colorSchemeValue || "normal" }, "*");
    }
    /**
     * Accepts an element and updates the styles for that element. This method
     * will also unobserve the element if it is the iframe element. This is
     * done to ensure that we do not trigger the mutation observer when we
     * update the styles for the iframe.
     *
     * @param customElement - The element to update the styles for
     * @param styles - The styles to apply to the element
     */
    updateElementStyles(customElement, styles) {
        if (!customElement) {
            return;
        }
        this.unobserveIframe();
        setElementStyles(customElement, styles, true);
        this.iframeStyles = Object.assign(Object.assign({}, this.iframeStyles), styles);
        this.observeIframe();
    }
    /**
     * Chrome returns null for any sandboxed iframe sources.
     * Firefox references the extension URI as its origin.
     * Any other origin value is a security risk.
     *
     * @param messageOrigin - The origin of the window message
     */
    isFromExtensionOrigin(messageOrigin) {
        return this.extensionOriginsSet.has(messageOrigin);
    }
    /**
     * Handles mutations to the iframe element's attributes. This ensures that
     * the iframe element's attributes are not modified by a third party source.
     *
     * @param element - The element to handle attribute mutations for
     */
    handleElementAttributeMutation(element) {
        var _a;
        const attributes = Array.from(element.attributes);
        for (let attributeIndex = 0; attributeIndex < attributes.length; attributeIndex++) {
            const attribute = attributes[attributeIndex];
            if (attribute.name === "style") {
                continue;
            }
            if (this.foreignMutationsCount >= 10) {
                (_a = this.port) === null || _a === void 0 ? void 0 : _a.postMessage({ command: "forceCloseAutofillOverlay" });
                break;
            }
            const defaultIframeAttribute = this.defaultIframeAttributes[attribute.name];
            if (!defaultIframeAttribute) {
                this.iframe.removeAttribute(attribute.name);
                this.foreignMutationsCount++;
                continue;
            }
            if (attribute.value === defaultIframeAttribute) {
                continue;
            }
            this.iframe.setAttribute(attribute.name, defaultIframeAttribute);
            this.foreignMutationsCount++;
        }
    }
    /**
     * Observes the iframe element for mutations to its style attribute.
     */
    observeIframe() {
        this.iframeMutationObserver.observe(this.iframe, { attributes: true });
    }
    /**
     * Unobserves the iframe element for mutations to its style attribute.
     */
    unobserveIframe() {
        var _a;
        (_a = this.iframeMutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    /**
     * Identifies if the mutation observer is triggering excessive iterations.
     * Will remove the autofill overlay if any set mutation observer is
     * triggering excessive iterations.
     */
    isTriggeringExcessiveMutationObserverIterations() {
        var _a;
        const resetCounters = () => {
            this.mutationObserverIterations = 0;
            this.foreignMutationsCount = 0;
        };
        if (this.mutationObserverIterationsResetTimeout) {
            clearTimeout(this.mutationObserverIterationsResetTimeout);
        }
        this.mutationObserverIterations++;
        this.mutationObserverIterationsResetTimeout = setTimeout(() => resetCounters(), 2000);
        if (this.mutationObserverIterations > 20) {
            clearTimeout(this.mutationObserverIterationsResetTimeout);
            resetCounters();
            (_a = this.port) === null || _a === void 0 ? void 0 : _a.postMessage({ command: "forceCloseAutofillOverlay" });
            return true;
        }
        return false;
    }
}
/* harmony default export */ const autofill_overlay_iframe_service = (AutofillOverlayIframeService);

;// CONCATENATED MODULE: ./src/autofill/overlay/iframe-content/autofill-overlay-iframe-element.ts

class AutofillOverlayIframeElement {
    constructor(element, iframePath, portName, initStyles, iframeTitle, ariaAlert) {
        const shadow = element.attachShadow({ mode: "closed" });
        const autofillOverlayIframeService = new autofill_overlay_iframe_service(iframePath, portName, shadow);
        autofillOverlayIframeService.initOverlayIframe(initStyles, iframeTitle, ariaAlert);
    }
}
/* harmony default export */ const autofill_overlay_iframe_element = (AutofillOverlayIframeElement);

;// CONCATENATED MODULE: ./src/autofill/overlay/iframe-content/autofill-overlay-button-iframe.ts


class AutofillOverlayButtonIframe extends autofill_overlay_iframe_element {
    constructor(element) {
        super(element, "overlay/button.html", AutofillOverlayPort.Button, {
            background: "transparent",
            border: "none",
        }, chrome.i18n.getMessage("bitwardenOverlayButton"), chrome.i18n.getMessage("bitwardenOverlayMenuAvailable"));
    }
}
/* harmony default export */ const autofill_overlay_button_iframe = (AutofillOverlayButtonIframe);

;// CONCATENATED MODULE: ./src/autofill/overlay/iframe-content/autofill-overlay-list-iframe.ts


class AutofillOverlayListIframe extends autofill_overlay_iframe_element {
    constructor(element) {
        super(element, "overlay/list.html", AutofillOverlayPort.List, {
            height: "0px",
            minWidth: "250px",
            maxHeight: "180px",
            boxShadow: "rgba(0, 0, 0, 0.1) 2px 4px 6px 0px",
            borderRadius: "4px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "rgb(206, 212, 220)",
        }, chrome.i18n.getMessage("bitwardenVault"));
    }
}
/* harmony default export */ const autofill_overlay_list_iframe = (AutofillOverlayListIframe);

;// CONCATENATED MODULE: ./src/autofill/services/autofill-constants.ts
class AutoFillConstants {
}
AutoFillConstants.UsernameFieldNames = [
    // English
    "username",
    "user name",
    "email",
    "email address",
    "e-mail",
    "e-mail address",
    "userid",
    "user id",
    "customer id",
    "login id",
    "login",
    // German
    "benutzername",
    "benutzer name",
    "email adresse",
    "e-mail adresse",
    "benutzerid",
    "benutzer id",
];
AutoFillConstants.TotpFieldNames = [
    "totp",
    "2fa",
    "mfa",
    "totpcode",
    "2facode",
    "approvals_code",
    "code",
    "mfacode",
    "otc",
    "otc-code",
    "otp-code",
    "otpcode",
    "pin",
    "security_code",
    "twofactor",
    "twofa",
    "twofactorcode",
    "verificationCode",
];
AutoFillConstants.SearchFieldNames = ["search", "query", "find", "go"];
AutoFillConstants.FieldIgnoreList = ["captcha", "findanything", "forgot"];
AutoFillConstants.PasswordFieldExcludeList = [
    ...AutoFillConstants.FieldIgnoreList,
    "onetimepassword",
];
AutoFillConstants.ExcludedAutofillLoginTypes = [
    "hidden",
    "file",
    "button",
    "image",
    "reset",
    "search",
];
AutoFillConstants.ExcludedAutofillTypes = [
    "radio",
    "checkbox",
    ...AutoFillConstants.ExcludedAutofillLoginTypes,
];
AutoFillConstants.ExcludedOverlayTypes = [
    "textarea",
    ...AutoFillConstants.ExcludedAutofillTypes,
];
class CreditCardAutoFillConstants {
}
CreditCardAutoFillConstants.CardAttributes = [
    "autoCompleteType",
    "data-stripe",
    "htmlName",
    "htmlID",
    "label-tag",
    "placeholder",
    "label-left",
    "label-top",
    "data-recurly",
];
CreditCardAutoFillConstants.CardAttributesExtended = [
    ...CreditCardAutoFillConstants.CardAttributes,
    "label-right",
];
CreditCardAutoFillConstants.CardHolderFieldNames = [
    "cc-name",
    "card-name",
    "cardholder-name",
    "cardholder",
    "name",
    "nom",
];
CreditCardAutoFillConstants.CardHolderFieldNameValues = [
    "cc-name",
    "card-name",
    "cardholder-name",
    "cardholder",
    "tbName",
];
CreditCardAutoFillConstants.CardNumberFieldNames = [
    "cc-number",
    "cc-num",
    "card-number",
    "card-num",
    "number",
    "cc",
    "cc-no",
    "card-no",
    "credit-card",
    "numero-carte",
    "carte",
    "carte-credit",
    "num-carte",
    "cb-num",
    "card-pan",
];
CreditCardAutoFillConstants.CardNumberFieldNameValues = [
    "cc-number",
    "cc-num",
    "card-number",
    "card-num",
    "cc-no",
    "card-no",
    "numero-carte",
    "num-carte",
    "cb-num",
];
CreditCardAutoFillConstants.CardExpiryFieldNames = [
    "cc-exp",
    "card-exp",
    "cc-expiration",
    "card-expiration",
    "cc-ex",
    "card-ex",
    "card-expire",
    "card-expiry",
    "validite",
    "expiration",
    "expiry",
    "mm-yy",
    "mm-yyyy",
    "yy-mm",
    "yyyy-mm",
    "expiration-date",
    "payment-card-expiration",
    "payment-cc-date",
];
CreditCardAutoFillConstants.CardExpiryFieldNameValues = [
    "mm-yy",
    "mm-yyyy",
    "yy-mm",
    "yyyy-mm",
    "expiration-date",
    "payment-card-expiration",
];
CreditCardAutoFillConstants.ExpiryMonthFieldNames = [
    "exp-month",
    "cc-exp-month",
    "cc-month",
    "card-month",
    "cc-mo",
    "card-mo",
    "exp-mo",
    "card-exp-mo",
    "cc-exp-mo",
    "card-expiration-month",
    "expiration-month",
    "cc-mm",
    "cc-m",
    "card-mm",
    "card-m",
    "card-exp-mm",
    "cc-exp-mm",
    "exp-mm",
    "exp-m",
    "expire-month",
    "expire-mo",
    "expiry-month",
    "expiry-mo",
    "card-expire-month",
    "card-expire-mo",
    "card-expiry-month",
    "card-expiry-mo",
    "mois-validite",
    "mois-expiration",
    "m-validite",
    "m-expiration",
    "expiry-date-field-month",
    "expiration-date-month",
    "expiration-date-mm",
    "exp-mon",
    "validity-mo",
    "exp-date-mo",
    "cb-date-mois",
    "date-m",
];
CreditCardAutoFillConstants.ExpiryYearFieldNames = [
    "exp-year",
    "cc-exp-year",
    "cc-year",
    "card-year",
    "cc-yr",
    "card-yr",
    "exp-yr",
    "card-exp-yr",
    "cc-exp-yr",
    "card-expiration-year",
    "expiration-year",
    "cc-yy",
    "cc-y",
    "card-yy",
    "card-y",
    "card-exp-yy",
    "cc-exp-yy",
    "exp-yy",
    "exp-y",
    "cc-yyyy",
    "card-yyyy",
    "card-exp-yyyy",
    "cc-exp-yyyy",
    "expire-year",
    "expire-yr",
    "expiry-year",
    "expiry-yr",
    "card-expire-year",
    "card-expire-yr",
    "card-expiry-year",
    "card-expiry-yr",
    "an-validite",
    "an-expiration",
    "annee-validite",
    "annee-expiration",
    "expiry-date-field-year",
    "expiration-date-year",
    "cb-date-ann",
    "expiration-date-yy",
    "expiration-date-yyyy",
    "validity-year",
    "exp-date-year",
    "date-y",
];
CreditCardAutoFillConstants.CVVFieldNames = [
    "cvv",
    "cvc",
    "cvv2",
    "cc-csc",
    "cc-cvv",
    "card-csc",
    "card-cvv",
    "cvd",
    "cid",
    "cvc2",
    "cnv",
    "cvn2",
    "cc-code",
    "card-code",
    "code-securite",
    "security-code",
    "crypto",
    "card-verif",
    "verification-code",
    "csc",
    "ccv",
];
CreditCardAutoFillConstants.CardBrandFieldNames = [
    "cc-type",
    "card-type",
    "card-brand",
    "cc-brand",
    "cb-type",
];
// Each index represents a language. These three arrays should all be the same length.
// 0: English, 1: Danish, 2: German/Dutch, 3: French/Spanish/Italian, 4: Russian, 5: Portuguese
CreditCardAutoFillConstants.MonthAbbr = ["mm", "mm", "mm", "mm", "мм", "mm"];
CreditCardAutoFillConstants.YearAbbrShort = ["yy", "åå", "jj", "aa", "гг", "rr"];
CreditCardAutoFillConstants.YearAbbrLong = ["yyyy", "åååå", "jjjj", "aa", "гггг", "rrrr"];
class IdentityAutoFillConstants {
}
IdentityAutoFillConstants.IdentityAttributes = [
    "autoCompleteType",
    "data-stripe",
    "htmlName",
    "htmlID",
    "label-tag",
    "placeholder",
    "label-left",
    "label-top",
    "data-recurly",
];
IdentityAutoFillConstants.FullNameFieldNames = ["name", "full-name", "your-name"];
IdentityAutoFillConstants.FullNameFieldNameValues = ["full-name", "your-name"];
IdentityAutoFillConstants.TitleFieldNames = [
    "honorific-prefix",
    "prefix",
    "title",
    // German
    "anrede",
];
IdentityAutoFillConstants.FirstnameFieldNames = [
    // English
    "f-name",
    "first-name",
    "given-name",
    "first-n",
    // German
    "vorname",
];
IdentityAutoFillConstants.MiddlenameFieldNames = [
    "m-name",
    "middle-name",
    "additional-name",
    "middle-initial",
    "middle-n",
    "middle-i",
];
IdentityAutoFillConstants.LastnameFieldNames = [
    // English
    "l-name",
    "last-name",
    "s-name",
    "surname",
    "family-name",
    "family-n",
    "last-n",
    // German
    "nachname",
    "familienname",
];
IdentityAutoFillConstants.EmailFieldNames = ["e-mail", "email-address"];
IdentityAutoFillConstants.AddressFieldNames = [
    "address",
    "street-address",
    "addr",
    "street",
    "mailing-addr",
    "billing-addr",
    "mail-addr",
    "bill-addr",
    // German
    "strasse",
    "adresse",
];
IdentityAutoFillConstants.AddressFieldNameValues = [
    "mailing-addr",
    "billing-addr",
    "mail-addr",
    "bill-addr",
];
IdentityAutoFillConstants.Address1FieldNames = [
    "address-1",
    "address-line-1",
    "addr-1",
    "street-1",
];
IdentityAutoFillConstants.Address2FieldNames = [
    "address-2",
    "address-line-2",
    "addr-2",
    "street-2",
];
IdentityAutoFillConstants.Address3FieldNames = [
    "address-3",
    "address-line-3",
    "addr-3",
    "street-3",
];
IdentityAutoFillConstants.PostalCodeFieldNames = [
    "postal",
    "zip",
    "zip2",
    "zip-code",
    "postal-code",
    "post-code",
    "address-zip",
    "address-postal",
    "address-code",
    "address-postal-code",
    "address-zip-code",
    // German
    "plz",
    "postleitzahl",
];
IdentityAutoFillConstants.CityFieldNames = [
    "city",
    "town",
    "address-level-2",
    "address-city",
    "address-town",
    // German
    "ort",
    "stadt",
    "wohnort",
];
IdentityAutoFillConstants.StateFieldNames = [
    "state",
    "province",
    "provence",
    "address-level-1",
    "address-state",
    "address-province",
    // German
    "bundesland",
];
IdentityAutoFillConstants.CountryFieldNames = [
    "country",
    "country-code",
    "country-name",
    "address-country",
    "address-country-name",
    "address-country-code",
    // German
    "land",
];
IdentityAutoFillConstants.PhoneFieldNames = [
    "phone",
    "mobile",
    "mobile-phone",
    "tel",
    "telephone",
    "phone-number",
    // German
    "telefon",
    "telefonnummer",
    "mobil",
    "handy",
];
IdentityAutoFillConstants.UserNameFieldNames = ["user-name", "user-id", "screen-name"];
IdentityAutoFillConstants.CompanyFieldNames = [
    "company",
    "company-name",
    "organization",
    "organization-name",
    // German
    "firma",
];
IdentityAutoFillConstants.IsoCountries = {
    afghanistan: "AF",
    "aland islands": "AX",
    albania: "AL",
    algeria: "DZ",
    "american samoa": "AS",
    andorra: "AD",
    angola: "AO",
    anguilla: "AI",
    antarctica: "AQ",
    "antigua and barbuda": "AG",
    argentina: "AR",
    armenia: "AM",
    aruba: "AW",
    australia: "AU",
    austria: "AT",
    azerbaijan: "AZ",
    bahamas: "BS",
    bahrain: "BH",
    bangladesh: "BD",
    barbados: "BB",
    belarus: "BY",
    belgium: "BE",
    belize: "BZ",
    benin: "BJ",
    bermuda: "BM",
    bhutan: "BT",
    bolivia: "BO",
    "bosnia and herzegovina": "BA",
    botswana: "BW",
    "bouvet island": "BV",
    brazil: "BR",
    "british indian ocean territory": "IO",
    "brunei darussalam": "BN",
    bulgaria: "BG",
    "burkina faso": "BF",
    burundi: "BI",
    cambodia: "KH",
    cameroon: "CM",
    canada: "CA",
    "cape verde": "CV",
    "cayman islands": "KY",
    "central african republic": "CF",
    chad: "TD",
    chile: "CL",
    china: "CN",
    "christmas island": "CX",
    "cocos (keeling) islands": "CC",
    colombia: "CO",
    comoros: "KM",
    congo: "CG",
    "congo, democratic republic": "CD",
    "cook islands": "CK",
    "costa rica": "CR",
    "cote d'ivoire": "CI",
    croatia: "HR",
    cuba: "CU",
    cyprus: "CY",
    "czech republic": "CZ",
    denmark: "DK",
    djibouti: "DJ",
    dominica: "DM",
    "dominican republic": "DO",
    ecuador: "EC",
    egypt: "EG",
    "el salvador": "SV",
    "equatorial guinea": "GQ",
    eritrea: "ER",
    estonia: "EE",
    ethiopia: "ET",
    "falkland islands": "FK",
    "faroe islands": "FO",
    fiji: "FJ",
    finland: "FI",
    france: "FR",
    "french guiana": "GF",
    "french polynesia": "PF",
    "french southern territories": "TF",
    gabon: "GA",
    gambia: "GM",
    georgia: "GE",
    germany: "DE",
    ghana: "GH",
    gibraltar: "GI",
    greece: "GR",
    greenland: "GL",
    grenada: "GD",
    guadeloupe: "GP",
    guam: "GU",
    guatemala: "GT",
    guernsey: "GG",
    guinea: "GN",
    "guinea-bissau": "GW",
    guyana: "GY",
    haiti: "HT",
    "heard island & mcdonald islands": "HM",
    "holy see (vatican city state)": "VA",
    honduras: "HN",
    "hong kong": "HK",
    hungary: "HU",
    iceland: "IS",
    india: "IN",
    indonesia: "ID",
    "iran, islamic republic of": "IR",
    iraq: "IQ",
    ireland: "IE",
    "isle of man": "IM",
    israel: "IL",
    italy: "IT",
    jamaica: "JM",
    japan: "JP",
    jersey: "JE",
    jordan: "JO",
    kazakhstan: "KZ",
    kenya: "KE",
    kiribati: "KI",
    "republic of korea": "KR",
    "south korea": "KR",
    "democratic people's republic of korea": "KP",
    "north korea": "KP",
    kuwait: "KW",
    kyrgyzstan: "KG",
    "lao people's democratic republic": "LA",
    latvia: "LV",
    lebanon: "LB",
    lesotho: "LS",
    liberia: "LR",
    "libyan arab jamahiriya": "LY",
    liechtenstein: "LI",
    lithuania: "LT",
    luxembourg: "LU",
    macao: "MO",
    macedonia: "MK",
    madagascar: "MG",
    malawi: "MW",
    malaysia: "MY",
    maldives: "MV",
    mali: "ML",
    malta: "MT",
    "marshall islands": "MH",
    martinique: "MQ",
    mauritania: "MR",
    mauritius: "MU",
    mayotte: "YT",
    mexico: "MX",
    "micronesia, federated states of": "FM",
    moldova: "MD",
    monaco: "MC",
    mongolia: "MN",
    montenegro: "ME",
    montserrat: "MS",
    morocco: "MA",
    mozambique: "MZ",
    myanmar: "MM",
    namibia: "NA",
    nauru: "NR",
    nepal: "NP",
    netherlands: "NL",
    "netherlands antilles": "AN",
    "new caledonia": "NC",
    "new zealand": "NZ",
    nicaragua: "NI",
    niger: "NE",
    nigeria: "NG",
    niue: "NU",
    "norfolk island": "NF",
    "northern mariana islands": "MP",
    norway: "NO",
    oman: "OM",
    pakistan: "PK",
    palau: "PW",
    "palestinian territory, occupied": "PS",
    panama: "PA",
    "papua new guinea": "PG",
    paraguay: "PY",
    peru: "PE",
    philippines: "PH",
    pitcairn: "PN",
    poland: "PL",
    portugal: "PT",
    "puerto rico": "PR",
    qatar: "QA",
    reunion: "RE",
    romania: "RO",
    "russian federation": "RU",
    rwanda: "RW",
    "saint barthelemy": "BL",
    "saint helena": "SH",
    "saint kitts and nevis": "KN",
    "saint lucia": "LC",
    "saint martin": "MF",
    "saint pierre and miquelon": "PM",
    "saint vincent and grenadines": "VC",
    samoa: "WS",
    "san marino": "SM",
    "sao tome and principe": "ST",
    "saudi arabia": "SA",
    senegal: "SN",
    serbia: "RS",
    seychelles: "SC",
    "sierra leone": "SL",
    singapore: "SG",
    slovakia: "SK",
    slovenia: "SI",
    "solomon islands": "SB",
    somalia: "SO",
    "south africa": "ZA",
    "south georgia and sandwich isl.": "GS",
    spain: "ES",
    "sri lanka": "LK",
    sudan: "SD",
    suriname: "SR",
    "svalbard and jan mayen": "SJ",
    swaziland: "SZ",
    sweden: "SE",
    switzerland: "CH",
    "syrian arab republic": "SY",
    taiwan: "TW",
    tajikistan: "TJ",
    tanzania: "TZ",
    thailand: "TH",
    "timor-leste": "TL",
    togo: "TG",
    tokelau: "TK",
    tonga: "TO",
    "trinidad and tobago": "TT",
    tunisia: "TN",
    turkey: "TR",
    turkmenistan: "TM",
    "turks and caicos islands": "TC",
    tuvalu: "TV",
    uganda: "UG",
    ukraine: "UA",
    "united arab emirates": "AE",
    "united kingdom": "GB",
    "united states": "US",
    "united states outlying islands": "UM",
    uruguay: "UY",
    uzbekistan: "UZ",
    vanuatu: "VU",
    venezuela: "VE",
    vietnam: "VN",
    "virgin islands, british": "VG",
    "virgin islands, u.s.": "VI",
    "wallis and futuna": "WF",
    "western sahara": "EH",
    yemen: "YE",
    zambia: "ZM",
    zimbabwe: "ZW",
};
IdentityAutoFillConstants.IsoStates = {
    alabama: "AL",
    alaska: "AK",
    "american samoa": "AS",
    arizona: "AZ",
    arkansas: "AR",
    california: "CA",
    colorado: "CO",
    connecticut: "CT",
    delaware: "DE",
    "district of columbia": "DC",
    "federated states of micronesia": "FM",
    florida: "FL",
    georgia: "GA",
    guam: "GU",
    hawaii: "HI",
    idaho: "ID",
    illinois: "IL",
    indiana: "IN",
    iowa: "IA",
    kansas: "KS",
    kentucky: "KY",
    louisiana: "LA",
    maine: "ME",
    "marshall islands": "MH",
    maryland: "MD",
    massachusetts: "MA",
    michigan: "MI",
    minnesota: "MN",
    mississippi: "MS",
    missouri: "MO",
    montana: "MT",
    nebraska: "NE",
    nevada: "NV",
    "new hampshire": "NH",
    "new jersey": "NJ",
    "new mexico": "NM",
    "new york": "NY",
    "north carolina": "NC",
    "north dakota": "ND",
    "northern mariana islands": "MP",
    ohio: "OH",
    oklahoma: "OK",
    oregon: "OR",
    palau: "PW",
    pennsylvania: "PA",
    "puerto rico": "PR",
    "rhode island": "RI",
    "south carolina": "SC",
    "south dakota": "SD",
    tennessee: "TN",
    texas: "TX",
    utah: "UT",
    vermont: "VT",
    "virgin islands": "VI",
    virginia: "VA",
    washington: "WA",
    "west virginia": "WV",
    wisconsin: "WI",
    wyoming: "WY",
};
IdentityAutoFillConstants.IsoProvinces = {
    alberta: "AB",
    "british columbia": "BC",
    manitoba: "MB",
    "new brunswick": "NB",
    "newfoundland and labrador": "NL",
    "nova scotia": "NS",
    ontario: "ON",
    "prince edward island": "PE",
    quebec: "QC",
    saskatchewan: "SK",
};

;// CONCATENATED MODULE: ./src/autofill/services/autofill-overlay-content.service.ts
var autofill_overlay_content_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










class AutofillOverlayContentService {
    constructor() {
        this.isFieldCurrentlyFocused = false;
        this.isCurrentlyFilling = false;
        this.isOverlayCiphersPopulated = false;
        this.pageDetailsUpdateRequired = false;
        this.isFirefoxBrowser = globalThis.navigator.userAgent.indexOf(" Firefox/") !== -1 ||
            globalThis.navigator.userAgent.indexOf(" Gecko/") !== -1;
        this.generateRandomCustomElementName = generateRandomCustomElementName;
        this.findTabs = tabbable;
        this.sendExtensionMessage = sendExtensionMessage;
        this.formFieldElements = new Set([]);
        this.ignoredFieldTypes = new Set(AutoFillConstants.ExcludedOverlayTypes);
        this.userFilledFields = {};
        this.focusableElements = [];
        this.isOverlayButtonVisible = false;
        this.isOverlayListVisible = false;
        this.mutationObserverIterations = 0;
        this.autofillFieldKeywordsMap = new WeakMap();
        this.eventHandlersMemo = {};
        this.customElementDefaultStyles = {
            all: "initial",
            position: "fixed",
            display: "block",
            zIndex: "2147483647",
        };
        /**
         * Removes the autofill overlay from the page. This will initially
         * unobserve the body element to ensure the mutation observer no
         * longer triggers.
         */
        this.removeAutofillOverlay = () => {
            this.removeBodyElementObserver();
            this.removeAutofillOverlayButton();
            this.removeAutofillOverlayList();
        };
        /**
         * Helper method that facilitates registration of an event handler to a form field element.
         *
         * @param eventHandler - The event handler to memoize.
         * @param memoIndex - The memo index to use for the event handler.
         */
        this.useEventHandlersMemo = (eventHandler, memoIndex) => {
            return this.eventHandlersMemo[memoIndex] || (this.eventHandlersMemo[memoIndex] = eventHandler);
        };
        /**
         * Form Field blur event handler. Updates the value identifying whether
         * the field is focused and sends a message to check if the overlay itself
         * is currently focused.
         */
        this.handleFormFieldBlurEvent = () => {
            this.isFieldCurrentlyFocused = false;
            // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.sendExtensionMessage("checkAutofillOverlayFocused");
        };
        /**
         * Form field keyup event handler. Facilitates the ability to remove the
         * autofill overlay using the escape key, focusing the overlay list using
         * the ArrowDown key, and ensuring that the overlay is repositioned when
         * the form is submitted using the Enter key.
         *
         * @param event - The keyup event.
         */
        this.handleFormFieldKeyupEvent = (event) => {
            const eventCode = event.code;
            if (eventCode === "Escape") {
                this.removeAutofillOverlay();
                return;
            }
            if (eventCode === "Enter" && !this.isCurrentlyFilling) {
                this.handleOverlayRepositionEvent();
                return;
            }
            if (eventCode === "ArrowDown") {
                event.preventDefault();
                event.stopPropagation();
                // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                this.focusOverlayList();
            }
        };
        /**
         * Sets up and memoizes the form field input event handler.
         *
         * @param formFieldElement - The form field element that triggered the input event.
         */
        this.handleFormFieldInputEvent = (formFieldElement) => {
            return this.useEventHandlersMemo(() => this.triggerFormFieldInput(formFieldElement), this.getFormFieldHandlerMemoIndex(formFieldElement, EVENTS.INPUT));
        };
        /**
         * Sets up and memoizes the form field click event handler.
         *
         * @param formFieldElement - The form field element that triggered the click event.
         */
        this.handleFormFieldClickEvent = (formFieldElement) => {
            return this.useEventHandlersMemo(() => this.triggerFormFieldClickedAction(formFieldElement), this.getFormFieldHandlerMemoIndex(formFieldElement, EVENTS.CLICK));
        };
        /**
         * Sets up and memoizes the form field focus event handler.
         *
         * @param formFieldElement - The form field element that triggered the focus event.
         */
        this.handleFormFieldFocusEvent = (formFieldElement) => {
            return this.useEventHandlersMemo(() => this.triggerFormFieldFocusedAction(formFieldElement), this.getFormFieldHandlerMemoIndex(formFieldElement, EVENTS.FOCUS));
        };
        /**
         * Handles the resize or scroll events that enact
         * repositioning of the overlay.
         */
        this.handleOverlayRepositionEvent = () => {
            if (!this.isOverlayButtonVisible && !this.isOverlayListVisible) {
                return;
            }
            this.toggleOverlayHidden(true);
            this.clearUserInteractionEventTimeout();
            this.userInteractionEventTimeout = setTimeout(this.triggerOverlayRepositionUpdates, 750);
        };
        /**
         * Triggers the overlay reposition updates. This method ensures that the overlay elements
         * are correctly positioned when the viewport scrolls or repositions.
         */
        this.triggerOverlayRepositionUpdates = () => autofill_overlay_content_service_awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            if (!this.recentlyFocusedFieldIsCurrentlyFocused()) {
                this.toggleOverlayHidden(false);
                this.removeAutofillOverlay();
                return;
            }
            yield this.updateMostRecentlyFocusedField(this.mostRecentlyFocusedField);
            this.updateOverlayElementsPosition();
            this.toggleOverlayHidden(false);
            this.clearUserInteractionEventTimeout();
            if (((_a = this.focusedFieldData.focusedFieldRects) === null || _a === void 0 ? void 0 : _a.top) > 0 &&
                ((_b = this.focusedFieldData.focusedFieldRects) === null || _b === void 0 ? void 0 : _b.top) < window.innerHeight) {
                return;
            }
            this.removeAutofillOverlay();
        });
        /**
         * Sets up global event listeners and the mutation
         * observer to facilitate required changes to the
         * overlay elements.
         */
        this.setupGlobalEventListeners = () => {
            globalThis.document.addEventListener(EVENTS.VISIBILITYCHANGE, this.handleVisibilityChangeEvent);
            globalThis.addEventListener(EVENTS.FOCUSOUT, this.handleFormFieldBlurEvent);
            this.setupMutationObserver();
        };
        /**
         * Handles the visibility change event. This method will remove the
         * autofill overlay if the document is not visible.
         */
        this.handleVisibilityChangeEvent = () => {
            if (document.visibilityState === "visible") {
                return;
            }
            this.mostRecentlyFocusedField = null;
            this.removeAutofillOverlay();
        };
        /**
         * Sets up mutation observers for the overlay elements, the body element, and the
         * document element. The mutation observers are used to remove any styles that are
         * added to the overlay elements by the website. They are also used to ensure that
         * the overlay elements are always present at the bottom of the body element.
         */
        this.setupMutationObserver = () => {
            this.overlayElementsMutationObserver = new MutationObserver(this.handleOverlayElementMutationObserverUpdate);
            this.bodyElementMutationObserver = new MutationObserver(this.handleBodyElementMutationObserverUpdate);
        };
        /**
         * Handles the mutation observer update for the overlay elements. This method will
         * remove any attributes or styles that might be added to the overlay elements by
         * a separate process within the website where this script is injected.
         *
         * @param mutationRecord - The mutation record that triggered the update.
         */
        this.handleOverlayElementMutationObserverUpdate = (mutationRecord) => {
            if (this.isTriggeringExcessiveMutationObserverIterations()) {
                return;
            }
            for (let recordIndex = 0; recordIndex < mutationRecord.length; recordIndex++) {
                const record = mutationRecord[recordIndex];
                if (record.type !== "attributes") {
                    continue;
                }
                const element = record.target;
                if (record.attributeName !== "style") {
                    this.removeModifiedElementAttributes(element);
                    continue;
                }
                element.removeAttribute("style");
                this.updateCustomElementDefaultStyles(element);
            }
        };
        /**
         * Handles the mutation observer update for the body element. This method will
         * ensure that the overlay elements are always present at the bottom of the body
         * element.
         */
        this.handleBodyElementMutationObserverUpdate = () => {
            if ((!this.overlayButtonElement && !this.overlayListElement) ||
                this.isTriggeringExcessiveMutationObserverIterations()) {
                return;
            }
            const lastChild = globalThis.document.body.lastElementChild;
            const secondToLastChild = lastChild === null || lastChild === void 0 ? void 0 : lastChild.previousElementSibling;
            const lastChildIsOverlayList = lastChild === this.overlayListElement;
            const lastChildIsOverlayButton = lastChild === this.overlayButtonElement;
            const secondToLastChildIsOverlayButton = secondToLastChild === this.overlayButtonElement;
            if ((lastChildIsOverlayList && secondToLastChildIsOverlayButton) ||
                (lastChildIsOverlayButton && !this.isOverlayListVisible)) {
                return;
            }
            if ((lastChildIsOverlayList && !secondToLastChildIsOverlayButton) ||
                (lastChildIsOverlayButton && this.isOverlayListVisible)) {
                globalThis.document.body.insertBefore(this.overlayButtonElement, this.overlayListElement);
                return;
            }
            globalThis.document.body.insertBefore(lastChild, this.overlayButtonElement);
        };
    }
    /**
     * Initializes the autofill overlay content service by setting up the mutation observers.
     * The observers will be instantiated on DOMContentLoaded if the page is current loading.
     */
    init() {
        if (globalThis.document.readyState === "loading") {
            globalThis.document.addEventListener(EVENTS.DOMCONTENTLOADED, this.setupGlobalEventListeners);
            return;
        }
        this.setupGlobalEventListeners();
    }
    /**
     * Sets up the autofill overlay listener on the form field element. This method is called
     * during the page details collection process.
     *
     * @param formFieldElement - Form field elements identified during the page details collection process.
     * @param autofillFieldData - Autofill field data captured from the form field element.
     */
    setupAutofillOverlayListenerOnField(formFieldElement, autofillFieldData) {
        return autofill_overlay_content_service_awaiter(this, void 0, void 0, function* () {
            if (this.isIgnoredField(autofillFieldData)) {
                return;
            }
            this.formFieldElements.add(formFieldElement);
            if (!this.autofillOverlayVisibility) {
                yield this.getAutofillOverlayVisibility();
            }
            this.setupFormFieldElementEventListeners(formFieldElement);
            if (this.getRootNodeActiveElement(formFieldElement) === formFieldElement) {
                yield this.triggerFormFieldFocusedAction(formFieldElement);
                return;
            }
            if (!this.mostRecentlyFocusedField) {
                yield this.updateMostRecentlyFocusedField(formFieldElement);
            }
        });
    }
    /**
     * Handles opening the autofill overlay. Will conditionally open
     * the overlay based on the current autofill overlay visibility setting.
     * Allows you to optionally focus the field element when opening the overlay.
     * Will also optionally ignore the overlay visibility setting and open the
     *
     * @param options - Options for opening the autofill overlay.
     */
    openAutofillOverlay(options = {}) {
        const { isFocusingFieldElement, isOpeningFullOverlay, authStatus } = options;
        if (!this.mostRecentlyFocusedField) {
            return;
        }
        if (this.pageDetailsUpdateRequired) {
            // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.sendExtensionMessage("bgCollectPageDetails", {
                sender: "autofillOverlayContentService",
            });
            this.pageDetailsUpdateRequired = false;
        }
        if (isFocusingFieldElement && !this.recentlyFocusedFieldIsCurrentlyFocused()) {
            this.focusMostRecentOverlayField();
        }
        if (typeof authStatus !== "undefined") {
            this.authStatus = authStatus;
        }
        if (this.autofillOverlayVisibility === AutofillOverlayVisibility.OnButtonClick &&
            !isOpeningFullOverlay) {
            this.updateOverlayButtonPosition();
            return;
        }
        this.updateOverlayElementsPosition();
    }
    /**
     * Focuses the most recently focused field element.
     */
    focusMostRecentOverlayField() {
        var _a;
        (_a = this.mostRecentlyFocusedField) === null || _a === void 0 ? void 0 : _a.focus();
    }
    /**
     * Removes focus from the most recently focused field element.
     */
    blurMostRecentOverlayField() {
        var _a;
        (_a = this.mostRecentlyFocusedField) === null || _a === void 0 ? void 0 : _a.blur();
    }
    /**
     * Removes the overlay button from the DOM if it is currently present. Will
     * also remove the overlay reposition event listeners.
     */
    removeAutofillOverlayButton() {
        if (!this.overlayButtonElement) {
            return;
        }
        this.overlayButtonElement.remove();
        this.isOverlayButtonVisible = false;
        // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.sendExtensionMessage("autofillOverlayElementClosed", {
            overlayElement: AutofillOverlayElement.Button,
        });
        this.removeOverlayRepositionEventListeners();
    }
    /**
     * Removes the overlay list from the DOM if it is currently present.
     */
    removeAutofillOverlayList() {
        if (!this.overlayListElement) {
            return;
        }
        this.overlayListElement.remove();
        this.isOverlayListVisible = false;
        // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.sendExtensionMessage("autofillOverlayElementClosed", {
            overlayElement: AutofillOverlayElement.List,
        });
    }
    /**
     * Formats any found user filled fields for a login cipher and sends a message
     * to the background script to add a new cipher.
     */
    addNewVaultItem() {
        var _a, _b;
        if (!this.isOverlayListVisible) {
            return;
        }
        const login = {
            username: ((_a = this.userFilledFields["username"]) === null || _a === void 0 ? void 0 : _a.value) || "",
            password: ((_b = this.userFilledFields["password"]) === null || _b === void 0 ? void 0 : _b.value) || "",
            uri: globalThis.document.URL,
            hostname: globalThis.document.location.hostname,
        };
        // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.sendExtensionMessage("autofillOverlayAddNewVaultItem", { login });
    }
    /**
     * Redirects the keyboard focus out of the overlay, selecting the element that is
     * either previous or next in the tab order. If the direction is current, the most
     * recently focused field will be focused.
     *
     * @param direction - The direction to redirect the focus.
     */
    redirectOverlayFocusOut(direction) {
        if (!this.isOverlayListVisible || !this.mostRecentlyFocusedField) {
            return;
        }
        if (direction === RedirectFocusDirection.Current) {
            this.focusMostRecentOverlayField();
            setTimeout(this.removeAutofillOverlay, 100);
            return;
        }
        if (!this.focusableElements.length) {
            this.focusableElements = this.findTabs(globalThis.document.body, { getShadowRoot: true });
        }
        const focusedElementIndex = this.focusableElements.findIndex((element) => element === this.mostRecentlyFocusedField);
        const indexOffset = direction === RedirectFocusDirection.Previous ? -1 : 1;
        const redirectFocusElement = this.focusableElements[focusedElementIndex + indexOffset];
        redirectFocusElement === null || redirectFocusElement === void 0 ? void 0 : redirectFocusElement.focus();
    }
    /**
     * Sets up the event listeners that facilitate interaction with the form field elements.
     * Will clear any cached form field element handlers that are encountered when setting
     * up a form field element to the overlay.
     *
     * @param formFieldElement - The form field element to set up the event listeners for.
     */
    setupFormFieldElementEventListeners(formFieldElement) {
        this.removeCachedFormFieldEventListeners(formFieldElement);
        formFieldElement.addEventListener(EVENTS.BLUR, this.handleFormFieldBlurEvent);
        formFieldElement.addEventListener(EVENTS.KEYUP, this.handleFormFieldKeyupEvent);
        formFieldElement.addEventListener(EVENTS.INPUT, this.handleFormFieldInputEvent(formFieldElement));
        formFieldElement.addEventListener(EVENTS.CLICK, this.handleFormFieldClickEvent(formFieldElement));
        formFieldElement.addEventListener(EVENTS.FOCUS, this.handleFormFieldFocusEvent(formFieldElement));
    }
    /**
     * Removes any cached form field element handlers that are encountered
     * when setting up a form field element to present the overlay.
     *
     * @param formFieldElement - The form field element to remove the cached handlers for.
     */
    removeCachedFormFieldEventListeners(formFieldElement) {
        const handlers = [EVENTS.INPUT, EVENTS.CLICK, EVENTS.FOCUS];
        for (let index = 0; index < handlers.length; index++) {
            const event = handlers[index];
            const memoIndex = this.getFormFieldHandlerMemoIndex(formFieldElement, event);
            const existingHandler = this.eventHandlersMemo[memoIndex];
            if (!existingHandler) {
                return;
            }
            formFieldElement.removeEventListener(event, existingHandler);
            delete this.eventHandlersMemo[memoIndex];
        }
    }
    /**
     * Formats the memoIndex for the form field event handler.
     *
     * @param formFieldElement - The form field element to format the memo index for.
     * @param event - The event to format the memo index for.
     */
    getFormFieldHandlerMemoIndex(formFieldElement, event) {
        return `${formFieldElement.opid}-${formFieldElement.id}-${event}-handler`;
    }
    /**
     * Triggers a focus of the overlay list, if it is visible. If the list is not visible,
     * the overlay will be opened and the list will be focused after a short delay. Ensures
     * that the overlay list is focused when the user presses the down arrow key.
     */
    focusOverlayList() {
        return autofill_overlay_content_service_awaiter(this, void 0, void 0, function* () {
            if (!this.isOverlayListVisible && this.mostRecentlyFocusedField) {
                yield this.updateMostRecentlyFocusedField(this.mostRecentlyFocusedField);
                this.openAutofillOverlay({ isOpeningFullOverlay: true });
                setTimeout(() => this.sendExtensionMessage("focusAutofillOverlayList"), 125);
                return;
            }
            // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.sendExtensionMessage("focusAutofillOverlayList");
        });
    }
    /**
     * Triggers when the form field element receives an input event. This method will
     * store the modified form element data for use when the user attempts to add a new
     * vault item. It also acts to remove the overlay list while the user is typing.
     *
     * @param formFieldElement - The form field element that triggered the input event.
     */
    triggerFormFieldInput(formFieldElement) {
        if (!elementIsFillableFormField(formFieldElement)) {
            return;
        }
        this.storeModifiedFormElement(formFieldElement);
        if (formFieldElement.value && (this.isOverlayCiphersPopulated || !this.isUserAuthed())) {
            this.removeAutofillOverlayList();
            return;
        }
        this.openAutofillOverlay();
    }
    /**
     * Stores the modified form element data for use when the user attempts to add a new
     * vault item. This method will also store the most recently focused field, if it is
     * not already stored.
     *
     * @param formFieldElement
     * @private
     */
    storeModifiedFormElement(formFieldElement) {
        if (formFieldElement === this.mostRecentlyFocusedField) {
            this.mostRecentlyFocusedField = formFieldElement;
        }
        if (formFieldElement.type === "password") {
            this.userFilledFields.password = formFieldElement;
            return;
        }
        this.userFilledFields.username = formFieldElement;
    }
    /**
     * Triggers when the form field element receives a click event. This method will
     * trigger the focused action for the form field element if the overlay is not visible.
     *
     * @param formFieldElement - The form field element that triggered the click event.
     */
    triggerFormFieldClickedAction(formFieldElement) {
        return autofill_overlay_content_service_awaiter(this, void 0, void 0, function* () {
            if (this.isOverlayButtonVisible || this.isOverlayListVisible) {
                return;
            }
            yield this.triggerFormFieldFocusedAction(formFieldElement);
        });
    }
    /**
     * Triggers when the form field element receives a focus event. This method will
     * update the most recently focused field and open the autofill overlay if the
     * autofill process is not currently active.
     *
     * @param formFieldElement - The form field element that triggered the focus event.
     */
    triggerFormFieldFocusedAction(formFieldElement) {
        return autofill_overlay_content_service_awaiter(this, void 0, void 0, function* () {
            if (this.isCurrentlyFilling) {
                return;
            }
            this.isFieldCurrentlyFocused = true;
            this.clearUserInteractionEventTimeout();
            const initiallyFocusedField = this.mostRecentlyFocusedField;
            yield this.updateMostRecentlyFocusedField(formFieldElement);
            const formElementHasValue = Boolean(formFieldElement.value);
            if (this.autofillOverlayVisibility === AutofillOverlayVisibility.OnButtonClick ||
                (formElementHasValue && initiallyFocusedField !== this.mostRecentlyFocusedField)) {
                this.removeAutofillOverlayList();
            }
            if (!formElementHasValue || (!this.isOverlayCiphersPopulated && this.isUserAuthed())) {
                // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                this.sendExtensionMessage("openAutofillOverlay");
                return;
            }
            this.updateOverlayButtonPosition();
        });
    }
    /**
     * Validates whether the user is currently authenticated.
     */
    isUserAuthed() {
        return this.authStatus === AuthenticationStatus.Unlocked;
    }
    /**
     * Identifies if the autofill field's data contains any of
     * the keyboards matching the passed list of keywords.
     *
     * @param autofillFieldData - Autofill field data captured from the form field element.
     * @param keywords - Keywords to search for in the autofill field data.
     */
    keywordsFoundInFieldData(autofillFieldData, keywords) {
        const searchedString = this.getAutofillFieldDataKeywords(autofillFieldData);
        return keywords.some((keyword) => searchedString.includes(keyword));
    }
    /**
     * Aggregates the autofill field's data into a single string
     * that can be used to search for keywords.
     *
     * @param autofillFieldData - Autofill field data captured from the form field element.
     */
    getAutofillFieldDataKeywords(autofillFieldData) {
        if (this.autofillFieldKeywordsMap.has(autofillFieldData)) {
            return this.autofillFieldKeywordsMap.get(autofillFieldData);
        }
        const keywordValues = [
            autofillFieldData.htmlID,
            autofillFieldData.htmlName,
            autofillFieldData.htmlClass,
            autofillFieldData.type,
            autofillFieldData.title,
            autofillFieldData.placeholder,
            autofillFieldData.autoCompleteType,
            autofillFieldData["label-data"],
            autofillFieldData["label-aria"],
            autofillFieldData["label-left"],
            autofillFieldData["label-right"],
            autofillFieldData["label-tag"],
            autofillFieldData["label-top"],
        ]
            .join(",")
            .toLowerCase();
        this.autofillFieldKeywordsMap.set(autofillFieldData, keywordValues);
        return keywordValues;
    }
    /**
     * Validates that the most recently focused field is currently
     * focused within the root node relative to the field.
     */
    recentlyFocusedFieldIsCurrentlyFocused() {
        return (this.getRootNodeActiveElement(this.mostRecentlyFocusedField) === this.mostRecentlyFocusedField);
    }
    /**
     * Updates the position of both the overlay button and overlay list.
     */
    updateOverlayElementsPosition() {
        this.updateOverlayButtonPosition();
        this.updateOverlayListPosition();
    }
    /**
     * Updates the position of the overlay button.
     */
    updateOverlayButtonPosition() {
        if (!this.overlayButtonElement) {
            this.createAutofillOverlayButton();
            this.updateCustomElementDefaultStyles(this.overlayButtonElement);
        }
        if (!this.isOverlayButtonVisible) {
            this.appendOverlayElementToBody(this.overlayButtonElement);
            this.isOverlayButtonVisible = true;
            this.setOverlayRepositionEventListeners();
        }
        // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.sendExtensionMessage("updateAutofillOverlayPosition", {
            overlayElement: AutofillOverlayElement.Button,
        });
    }
    /**
     * Updates the position of the overlay list.
     */
    updateOverlayListPosition() {
        if (!this.overlayListElement) {
            this.createAutofillOverlayList();
            this.updateCustomElementDefaultStyles(this.overlayListElement);
        }
        if (!this.isOverlayListVisible) {
            this.appendOverlayElementToBody(this.overlayListElement);
            this.isOverlayListVisible = true;
        }
        // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.sendExtensionMessage("updateAutofillOverlayPosition", {
            overlayElement: AutofillOverlayElement.List,
        });
    }
    /**
     * Appends the overlay element to the body element. This method will also
     * observe the body element to ensure that the overlay element is not
     * interfered with by any DOM changes.
     *
     * @param element - The overlay element to append to the body element.
     */
    appendOverlayElementToBody(element) {
        this.observeBodyElement();
        globalThis.document.body.appendChild(element);
    }
    /**
     * Sends a message that facilitates hiding the overlay elements.
     *
     * @param isHidden - Indicates if the overlay elements should be hidden.
     */
    toggleOverlayHidden(isHidden) {
        const displayValue = isHidden ? "none" : "block";
        void this.sendExtensionMessage("updateAutofillOverlayHidden", { display: displayValue });
        this.isOverlayButtonVisible = !!this.overlayButtonElement && !isHidden;
        this.isOverlayListVisible = !!this.overlayListElement && !isHidden;
    }
    /**
     * Updates the data used to position the overlay elements in relation
     * to the most recently focused form field.
     *
     * @param formFieldElement - The form field element that triggered the focus event.
     */
    updateMostRecentlyFocusedField(formFieldElement) {
        return autofill_overlay_content_service_awaiter(this, void 0, void 0, function* () {
            this.mostRecentlyFocusedField = formFieldElement;
            const { paddingRight, paddingLeft } = globalThis.getComputedStyle(formFieldElement);
            const { width, height, top, left } = yield this.getMostRecentlyFocusedFieldRects(formFieldElement);
            this.focusedFieldData = {
                focusedFieldStyles: { paddingRight, paddingLeft },
                focusedFieldRects: { width, height, top, left },
            };
            // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.sendExtensionMessage("updateFocusedFieldData", {
                focusedFieldData: this.focusedFieldData,
            });
        });
    }
    /**
     * Gets the bounding client rects for the most recently focused field. This method will
     * attempt to use an intersection observer to get the most recently focused field's
     * bounding client rects. If the intersection observer is not supported, or the
     * intersection observer does not return a valid bounding client rect, the form
     * field element's bounding client rect will be used.
     *
     * @param formFieldElement - The form field element that triggered the focus event.
     */
    getMostRecentlyFocusedFieldRects(formFieldElement) {
        return autofill_overlay_content_service_awaiter(this, void 0, void 0, function* () {
            const focusedFieldRects = yield this.getBoundingClientRectFromIntersectionObserver(formFieldElement);
            if (focusedFieldRects) {
                return focusedFieldRects;
            }
            return formFieldElement.getBoundingClientRect();
        });
    }
    /**
     * Gets the bounds of the form field element from the IntersectionObserver API.
     *
     * @param formFieldElement - The form field element that triggered the focus event.
     */
    getBoundingClientRectFromIntersectionObserver(formFieldElement) {
        return autofill_overlay_content_service_awaiter(this, void 0, void 0, function* () {
            if (!("IntersectionObserver" in window) && !("IntersectionObserverEntry" in window)) {
                return null;
            }
            return new Promise((resolve) => {
                const intersectionObserver = new IntersectionObserver((entries) => {
                    var _a;
                    let fieldBoundingClientRects = (_a = entries[0]) === null || _a === void 0 ? void 0 : _a.boundingClientRect;
                    if (!(fieldBoundingClientRects === null || fieldBoundingClientRects === void 0 ? void 0 : fieldBoundingClientRects.width) || !fieldBoundingClientRects.height) {
                        fieldBoundingClientRects = null;
                    }
                    intersectionObserver.disconnect();
                    resolve(fieldBoundingClientRects);
                }, {
                    root: globalThis.document.body,
                    rootMargin: "0px",
                    threshold: 0.9999, // Safari doesn't seem to function properly with a threshold of 1
                });
                intersectionObserver.observe(formFieldElement);
            });
        });
    }
    /**
     * Identifies if the field should have the autofill overlay setup on it. Currently, this is mainly
     * determined by whether the field correlates with a login cipher. This method will need to be
     * updated in the future to support other types of forms.
     *
     * @param autofillFieldData - Autofill field data captured from the form field element.
     */
    isIgnoredField(autofillFieldData) {
        if (autofillFieldData.readonly ||
            autofillFieldData.disabled ||
            !autofillFieldData.viewable ||
            this.ignoredFieldTypes.has(autofillFieldData.type) ||
            this.keywordsFoundInFieldData(autofillFieldData, ["search", "captcha"])) {
            return true;
        }
        const isLoginCipherField = autofillFieldData.type === "password" ||
            this.keywordsFoundInFieldData(autofillFieldData, AutoFillConstants.UsernameFieldNames);
        return !isLoginCipherField;
    }
    /**
     * Creates the autofill overlay button element. Will not attempt
     * to create the element if it already exists in the DOM.
     */
    createAutofillOverlayButton() {
        var _a;
        if (this.overlayButtonElement) {
            return;
        }
        if (this.isFirefoxBrowser) {
            this.overlayButtonElement = globalThis.document.createElement("div");
            new autofill_overlay_button_iframe(this.overlayButtonElement);
            return;
        }
        const customElementName = this.generateRandomCustomElementName();
        (_a = globalThis.customElements) === null || _a === void 0 ? void 0 : _a.define(customElementName, class extends HTMLElement {
            constructor() {
                super();
                new autofill_overlay_button_iframe(this);
            }
        });
        this.overlayButtonElement = globalThis.document.createElement(customElementName);
    }
    /**
     * Creates the autofill overlay list element. Will not attempt
     * to create the element if it already exists in the DOM.
     */
    createAutofillOverlayList() {
        var _a;
        if (this.overlayListElement) {
            return;
        }
        if (this.isFirefoxBrowser) {
            this.overlayListElement = globalThis.document.createElement("div");
            new autofill_overlay_list_iframe(this.overlayListElement);
            return;
        }
        const customElementName = this.generateRandomCustomElementName();
        (_a = globalThis.customElements) === null || _a === void 0 ? void 0 : _a.define(customElementName, class extends HTMLElement {
            constructor() {
                super();
                new autofill_overlay_list_iframe(this);
            }
        });
        this.overlayListElement = globalThis.document.createElement(customElementName);
    }
    /**
     * Updates the default styles for the custom element. This method will
     * remove any styles that are added to the custom element by other methods.
     *
     * @param element - The custom element to update the default styles for.
     */
    updateCustomElementDefaultStyles(element) {
        this.unobserveCustomElements();
        setElementStyles(element, this.customElementDefaultStyles, true);
        this.observeCustomElements();
    }
    /**
     * Queries the background script for the autofill overlay visibility setting.
     * If the setting is not found, a default value of OnFieldFocus will be used
     * @private
     */
    getAutofillOverlayVisibility() {
        return autofill_overlay_content_service_awaiter(this, void 0, void 0, function* () {
            const overlayVisibility = yield this.sendExtensionMessage("getAutofillOverlayVisibility");
            this.autofillOverlayVisibility = overlayVisibility || AutofillOverlayVisibility.OnFieldFocus;
        });
    }
    /**
     * Sets up event listeners that facilitate repositioning
     * the autofill overlay on scroll or resize.
     */
    setOverlayRepositionEventListeners() {
        globalThis.addEventListener(EVENTS.SCROLL, this.handleOverlayRepositionEvent, {
            capture: true,
        });
        globalThis.addEventListener(EVENTS.RESIZE, this.handleOverlayRepositionEvent);
    }
    /**
     * Removes the listeners that facilitate repositioning
     * the autofill overlay on scroll or resize.
     */
    removeOverlayRepositionEventListeners() {
        globalThis.removeEventListener(EVENTS.SCROLL, this.handleOverlayRepositionEvent, {
            capture: true,
        });
        globalThis.removeEventListener(EVENTS.RESIZE, this.handleOverlayRepositionEvent);
    }
    /**
     * Clears the user interaction event timeout. This is used to ensure that
     * the overlay is not repositioned while the user is interacting with it.
     */
    clearUserInteractionEventTimeout() {
        if (this.userInteractionEventTimeout) {
            clearTimeout(this.userInteractionEventTimeout);
        }
    }
    /**
     * Sets up mutation observers to verify that the overlay
     * elements are not modified by the website.
     */
    observeCustomElements() {
        var _a, _b;
        if (this.overlayButtonElement) {
            (_a = this.overlayElementsMutationObserver) === null || _a === void 0 ? void 0 : _a.observe(this.overlayButtonElement, {
                attributes: true,
            });
        }
        if (this.overlayListElement) {
            (_b = this.overlayElementsMutationObserver) === null || _b === void 0 ? void 0 : _b.observe(this.overlayListElement, { attributes: true });
        }
    }
    /**
     * Disconnects the mutation observers that are used to verify that the overlay
     * elements are not modified by the website.
     */
    unobserveCustomElements() {
        var _a;
        (_a = this.overlayElementsMutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    /**
     * Sets up a mutation observer for the body element. The mutation observer is used
     * to ensure that the overlay elements are always present at the bottom of the body
     * element.
     */
    observeBodyElement() {
        var _a;
        (_a = this.bodyElementMutationObserver) === null || _a === void 0 ? void 0 : _a.observe(globalThis.document.body, { childList: true });
    }
    /**
     * Disconnects the mutation observer for the body element.
     */
    removeBodyElementObserver() {
        var _a;
        (_a = this.bodyElementMutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    /**
     * Removes all elements from a passed overlay
     * element except for the style attribute.
     *
     * @param element - The element to remove the attributes from.
     */
    removeModifiedElementAttributes(element) {
        const attributes = Array.from(element.attributes);
        for (let attributeIndex = 0; attributeIndex < attributes.length; attributeIndex++) {
            const attribute = attributes[attributeIndex];
            if (attribute.name === "style") {
                continue;
            }
            element.removeAttribute(attribute.name);
        }
    }
    /**
     * Identifies if the mutation observer is triggering excessive iterations.
     * Will trigger a blur of the most recently focused field and remove the
     * autofill overlay if any set mutation observer is triggering
     * excessive iterations.
     */
    isTriggeringExcessiveMutationObserverIterations() {
        if (this.mutationObserverIterationsResetTimeout) {
            clearTimeout(this.mutationObserverIterationsResetTimeout);
        }
        this.mutationObserverIterations++;
        this.mutationObserverIterationsResetTimeout = setTimeout(() => (this.mutationObserverIterations = 0), 2000);
        if (this.mutationObserverIterations > 100) {
            clearTimeout(this.mutationObserverIterationsResetTimeout);
            this.mutationObserverIterations = 0;
            this.blurMostRecentOverlayField();
            this.removeAutofillOverlay();
            return true;
        }
        return false;
    }
    /**
     * Gets the root node of the passed element and returns the active element within that root node.
     *
     * @param element - The element to get the root node active element for.
     */
    getRootNodeActiveElement(element) {
        const documentRoot = element.getRootNode();
        return documentRoot === null || documentRoot === void 0 ? void 0 : documentRoot.activeElement;
    }
    /**
     * Destroys the autofill overlay content service. This method will
     * disconnect the mutation observers and remove all event listeners.
     */
    destroy() {
        var _a;
        (_a = this.documentElementMutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
        this.clearUserInteractionEventTimeout();
        this.formFieldElements.forEach((formFieldElement) => {
            this.removeCachedFormFieldEventListeners(formFieldElement);
            formFieldElement.removeEventListener(EVENTS.BLUR, this.handleFormFieldBlurEvent);
            formFieldElement.removeEventListener(EVENTS.KEYUP, this.handleFormFieldKeyupEvent);
            this.formFieldElements.delete(formFieldElement);
        });
        globalThis.document.removeEventListener(EVENTS.VISIBILITYCHANGE, this.handleVisibilityChangeEvent);
        globalThis.removeEventListener(EVENTS.FOCUSOUT, this.handleFormFieldBlurEvent);
        this.removeAutofillOverlay();
        this.removeOverlayRepositionEventListeners();
    }
}
/* harmony default export */ const autofill_overlay_content_service = (AutofillOverlayContentService);

;// CONCATENATED MODULE: ./src/autofill/services/collect-autofill-content.service.ts
var collect_autofill_content_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class CollectAutofillContentService {
    constructor(domElementVisibilityService, autofillOverlayContentService) {
        this.noFieldsFound = false;
        this.domRecentlyMutated = true;
        this.autofillFormElements = new Map();
        this.autofillFieldElements = new Map();
        this.currentLocationHref = "";
        this.updateAfterMutationTimeoutDelay = 1000;
        this.ignoredInputTypes = new Set([
            "hidden",
            "submit",
            "reset",
            "button",
            "image",
            "file",
        ]);
        /**
         * Builds an AutofillField object from the given form element. Will only return
         * shared field values if the element is a span element. Will not return any label
         * values if the element is a hidden input element.
         * @param {ElementWithOpId<FormFieldElement>} element
         * @param {number} index
         * @returns {Promise<AutofillField>}
         * @private
         */
        this.buildAutofillFieldItem = (element, index) => collect_autofill_content_service_awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            element.opid = `__${index}`;
            const existingAutofillField = this.autofillFieldElements.get(element);
            if (index >= 0 && existingAutofillField) {
                existingAutofillField.opid = element.opid;
                existingAutofillField.elementNumber = index;
                this.autofillFieldElements.set(element, existingAutofillField);
                return existingAutofillField;
            }
            const autofillFieldBase = {
                opid: element.opid,
                elementNumber: index,
                maxLength: this.getAutofillFieldMaxLength(element),
                viewable: yield this.domElementVisibilityService.isFormFieldViewable(element),
                htmlID: this.getPropertyOrAttribute(element, "id"),
                htmlName: this.getPropertyOrAttribute(element, "name"),
                htmlClass: this.getPropertyOrAttribute(element, "class"),
                tabindex: this.getPropertyOrAttribute(element, "tabindex"),
                title: this.getPropertyOrAttribute(element, "title"),
                tagName: this.getAttributeLowerCase(element, "tagName"),
            };
            if (elementIsSpanElement(element)) {
                this.cacheAutofillFieldElement(index, element, autofillFieldBase);
                // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                (_a = this.autofillOverlayContentService) === null || _a === void 0 ? void 0 : _a.setupAutofillOverlayListenerOnField(element, autofillFieldBase);
                return autofillFieldBase;
            }
            let autofillFieldLabels = {};
            const elementType = this.getAttributeLowerCase(element, "type");
            if (elementType !== "hidden") {
                autofillFieldLabels = {
                    "label-tag": this.createAutofillFieldLabelTag(element),
                    "label-data": this.getPropertyOrAttribute(element, "data-label"),
                    "label-aria": this.getPropertyOrAttribute(element, "aria-label"),
                    "label-top": this.createAutofillFieldTopLabel(element),
                    "label-right": this.createAutofillFieldRightLabel(element),
                    "label-left": this.createAutofillFieldLeftLabel(element),
                    placeholder: this.getPropertyOrAttribute(element, "placeholder"),
                };
            }
            const fieldFormElement = element.form;
            const autofillField = Object.assign(Object.assign(Object.assign({}, autofillFieldBase), autofillFieldLabels), { rel: this.getPropertyOrAttribute(element, "rel"), type: elementType, value: this.getElementValue(element), checked: this.getAttributeBoolean(element, "checked"), autoCompleteType: this.getAutoCompleteAttribute(element), disabled: this.getAttributeBoolean(element, "disabled"), readonly: this.getAttributeBoolean(element, "readonly"), selectInfo: elementIsSelectElement(element)
                    ? this.getSelectElementOptions(element)
                    : null, form: fieldFormElement ? this.getPropertyOrAttribute(fieldFormElement, "opid") : null, "aria-hidden": this.getAttributeBoolean(element, "aria-hidden", true), "aria-disabled": this.getAttributeBoolean(element, "aria-disabled", true), "aria-haspopup": this.getAttributeBoolean(element, "aria-haspopup", true), "data-stripe": this.getPropertyOrAttribute(element, "data-stripe") });
            this.cacheAutofillFieldElement(index, element, autofillField);
            // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            (_b = this.autofillOverlayContentService) === null || _b === void 0 ? void 0 : _b.setupAutofillOverlayListenerOnField(element, autofillField);
            return autofillField;
        });
        /**
         * Map over all the label elements and creates a
         * string of the text content of each label element.
         * @param {Set<HTMLElement>} labelElementsSet
         * @returns {string}
         * @private
         */
        this.createLabelElementsTag = (labelElementsSet) => {
            return Array.from(labelElementsSet)
                .map((labelElement) => {
                const textContent = labelElement
                    ? labelElement.textContent || labelElement.innerText
                    : null;
                return this.trimAndRemoveNonPrintableText(textContent || "");
            })
                .join("");
        };
        /**
         * Handles observed DOM mutations and identifies if a mutation is related to
         * an autofill element. If so, it will update the autofill element data.
         * @param {MutationRecord[]} mutations
         * @private
         */
        this.handleMutationObserverMutation = (mutations) => {
            if (this.currentLocationHref !== globalThis.location.href) {
                this.handleWindowLocationMutation();
                return;
            }
            for (let mutationsIndex = 0; mutationsIndex < mutations.length; mutationsIndex++) {
                const mutation = mutations[mutationsIndex];
                if (mutation.type === "childList" &&
                    (this.isAutofillElementNodeMutated(mutation.removedNodes, true) ||
                        this.isAutofillElementNodeMutated(mutation.addedNodes))) {
                    this.domRecentlyMutated = true;
                    if (this.autofillOverlayContentService) {
                        this.autofillOverlayContentService.pageDetailsUpdateRequired = true;
                    }
                    this.noFieldsFound = false;
                    continue;
                }
                if (mutation.type === "attributes") {
                    this.handleAutofillElementAttributeMutation(mutation);
                }
            }
            if (this.domRecentlyMutated) {
                this.updateAutofillElementsAfterMutation();
            }
        };
        this.domElementVisibilityService = domElementVisibilityService;
        this.autofillOverlayContentService = autofillOverlayContentService;
    }
    /**
     * Builds the data for all forms and fields found within the page DOM.
     * Sets up a mutation observer to verify DOM changes and returns early
     * with cached data if no changes are detected.
     * @returns {Promise<AutofillPageDetails>}
     * @public
     */
    getPageDetails() {
        return collect_autofill_content_service_awaiter(this, void 0, void 0, function* () {
            if (!this.mutationObserver) {
                this.setupMutationObserver();
            }
            if (!this.domRecentlyMutated && this.noFieldsFound) {
                return this.getFormattedPageDetails({}, []);
            }
            if (!this.domRecentlyMutated && this.autofillFieldElements.size) {
                this.updateCachedAutofillFieldVisibility();
                return this.getFormattedPageDetails(this.getFormattedAutofillFormsData(), this.getFormattedAutofillFieldsData());
            }
            const { formElements, formFieldElements } = this.queryAutofillFormAndFieldElements();
            const autofillFormsData = this.buildAutofillFormsData(formElements);
            const autofillFieldsData = yield this.buildAutofillFieldsData(formFieldElements);
            this.sortAutofillFieldElementsMap();
            if (!autofillFieldsData.length) {
                this.noFieldsFound = true;
            }
            this.domRecentlyMutated = false;
            return this.getFormattedPageDetails(autofillFormsData, autofillFieldsData);
        });
    }
    /**
     * Find an AutofillField element by its opid, will only return the first
     * element if there are multiple elements with the same opid. If no
     * element is found, null will be returned.
     * @param {string} opid
     * @returns {FormFieldElement | null}
     */
    getAutofillFieldElementByOpid(opid) {
        const cachedFormFieldElements = Array.from(this.autofillFieldElements.keys());
        const formFieldElements = (cachedFormFieldElements === null || cachedFormFieldElements === void 0 ? void 0 : cachedFormFieldElements.length)
            ? cachedFormFieldElements
            : this.getAutofillFieldElements();
        const fieldElementsWithOpid = formFieldElements.filter((fieldElement) => fieldElement.opid === opid);
        if (!fieldElementsWithOpid.length) {
            const elementIndex = parseInt(opid.split("__")[1], 10);
            return formFieldElements[elementIndex] || null;
        }
        if (fieldElementsWithOpid.length > 1) {
            // eslint-disable-next-line no-console
            console.warn(`More than one element found with opid ${opid}`);
        }
        return fieldElementsWithOpid[0];
    }
    /**
     * Queries the DOM for all the nodes that match the given filter callback
     * and returns a collection of nodes.
     * @param {Node} rootNode
     * @param {Function} filterCallback
     * @param {boolean} isObservingShadowRoot
     * @returns {Node[]}
     */
    queryAllTreeWalkerNodes(rootNode, filterCallback, isObservingShadowRoot = true) {
        const treeWalkerQueryResults = [];
        this.buildTreeWalkerNodesQueryResults(rootNode, treeWalkerQueryResults, filterCallback, isObservingShadowRoot);
        return treeWalkerQueryResults;
    }
    /**
     * Sorts the AutofillFieldElements map by the elementNumber property.
     * @private
     */
    sortAutofillFieldElementsMap() {
        if (!this.autofillFieldElements.size) {
            return;
        }
        this.autofillFieldElements = new Map([...this.autofillFieldElements].sort((a, b) => a[1].elementNumber - b[1].elementNumber));
    }
    /**
     * Formats and returns the AutofillPageDetails object
     *
     * @param autofillFormsData - The data for all the forms found in the page
     * @param autofillFieldsData - The data for all the fields found in the page
     */
    getFormattedPageDetails(autofillFormsData, autofillFieldsData) {
        return {
            title: document.title,
            url: (document.defaultView || window).location.href,
            documentUrl: document.location.href,
            forms: autofillFormsData,
            fields: autofillFieldsData,
            collectedTimestamp: Date.now(),
        };
    }
    /**
     * Re-checks the visibility for all form fields and updates the
     * cached data to reflect the most recent visibility state.
     *
     * @private
     */
    updateCachedAutofillFieldVisibility() {
        this.autofillFieldElements.forEach((autofillField, element) => collect_autofill_content_service_awaiter(this, void 0, void 0, function* () {
            return (autofillField.viewable =
                yield this.domElementVisibilityService.isFormFieldViewable(element));
        }));
    }
    /**
     * Queries the DOM for all the forms elements and
     * returns a collection of AutofillForm objects.
     * @returns {Record<string, AutofillForm>}
     * @private
     */
    buildAutofillFormsData(formElements) {
        for (let index = 0; index < formElements.length; index++) {
            const formElement = formElements[index];
            formElement.opid = `__form__${index}`;
            const existingAutofillForm = this.autofillFormElements.get(formElement);
            if (existingAutofillForm) {
                existingAutofillForm.opid = formElement.opid;
                this.autofillFormElements.set(formElement, existingAutofillForm);
                continue;
            }
            this.autofillFormElements.set(formElement, {
                opid: formElement.opid,
                htmlAction: this.getFormActionAttribute(formElement),
                htmlName: this.getPropertyOrAttribute(formElement, "name"),
                htmlID: this.getPropertyOrAttribute(formElement, "id"),
                htmlMethod: this.getPropertyOrAttribute(formElement, "method"),
            });
        }
        return this.getFormattedAutofillFormsData();
    }
    /**
     * Returns the action attribute of the form element. If the action attribute
     * is a relative path, it will be converted to an absolute path.
     * @param {ElementWithOpId<HTMLFormElement>} element
     * @returns {string}
     * @private
     */
    getFormActionAttribute(element) {
        return new URL(this.getPropertyOrAttribute(element, "action"), window.location.href).href;
    }
    /**
     * Iterates over all known form elements and returns an AutofillForm object
     * containing a key value pair of the form element's opid and the form data.
     * @returns {Record<string, AutofillForm>}
     * @private
     */
    getFormattedAutofillFormsData() {
        const autofillForms = {};
        const autofillFormElements = Array.from(this.autofillFormElements);
        for (let index = 0; index < autofillFormElements.length; index++) {
            const [formElement, autofillForm] = autofillFormElements[index];
            autofillForms[formElement.opid] = autofillForm;
        }
        return autofillForms;
    }
    /**
     * Queries the DOM for all the field elements and
     * returns a list of AutofillField objects.
     * @returns {Promise<AutofillField[]>}
     * @private
     */
    buildAutofillFieldsData(formFieldElements) {
        return collect_autofill_content_service_awaiter(this, void 0, void 0, function* () {
            const autofillFieldElements = this.getAutofillFieldElements(100, formFieldElements);
            const autofillFieldDataPromises = autofillFieldElements.map(this.buildAutofillFieldItem);
            return Promise.all(autofillFieldDataPromises);
        });
    }
    /**
     * Queries the DOM for all the field elements that can be autofilled,
     * and returns a list limited to the given `fieldsLimit` number that
     * is ordered by priority.
     * @param {number} fieldsLimit - The maximum number of fields to return
     * @param {FormFieldElement[]} previouslyFoundFormFieldElements - The list of all the field elements
     * @returns {FormFieldElement[]}
     * @private
     */
    getAutofillFieldElements(fieldsLimit, previouslyFoundFormFieldElements) {
        var _a;
        const formFieldElements = previouslyFoundFormFieldElements ||
            this.queryAllTreeWalkerNodes(document.documentElement, (node) => this.isNodeFormFieldElement(node));
        if (!fieldsLimit || formFieldElements.length <= fieldsLimit) {
            return formFieldElements;
        }
        const priorityFormFields = [];
        const unimportantFormFields = [];
        const unimportantFieldTypesSet = new Set(["checkbox", "radio"]);
        for (const element of formFieldElements) {
            if (priorityFormFields.length >= fieldsLimit) {
                return priorityFormFields;
            }
            const fieldType = (_a = this.getPropertyOrAttribute(element, "type")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
            if (unimportantFieldTypesSet.has(fieldType)) {
                unimportantFormFields.push(element);
                continue;
            }
            priorityFormFields.push(element);
        }
        const numberUnimportantFieldsToInclude = fieldsLimit - priorityFormFields.length;
        for (let index = 0; index < numberUnimportantFieldsToInclude; index++) {
            priorityFormFields.push(unimportantFormFields[index]);
        }
        return priorityFormFields;
    }
    /**
     * Caches the autofill field element and its data.
     * Will not cache the element if the index is less than 0.
     *
     * @param index - The index of the autofill field element
     * @param element - The autofill field element to cache
     * @param autofillFieldData - The autofill field data to cache
     */
    cacheAutofillFieldElement(index, element, autofillFieldData) {
        if (index < 0) {
            return;
        }
        this.autofillFieldElements.set(element, autofillFieldData);
    }
    /**
     * Identifies the autocomplete attribute associated with an element and returns
     * the value of the attribute if it is not set to "off".
     * @param {ElementWithOpId<FormFieldElement>} element
     * @returns {string}
     * @private
     */
    getAutoCompleteAttribute(element) {
        const autoCompleteType = this.getPropertyOrAttribute(element, "x-autocompletetype") ||
            this.getPropertyOrAttribute(element, "autocompletetype") ||
            this.getPropertyOrAttribute(element, "autocomplete");
        return autoCompleteType !== "off" ? autoCompleteType : null;
    }
    /**
     * Returns a boolean representing the attribute value of an element.
     * @param {ElementWithOpId<FormFieldElement>} element
     * @param {string} attributeName
     * @param {boolean} checkString
     * @returns {boolean}
     * @private
     */
    getAttributeBoolean(element, attributeName, checkString = false) {
        if (checkString) {
            return this.getPropertyOrAttribute(element, attributeName) === "true";
        }
        return Boolean(this.getPropertyOrAttribute(element, attributeName));
    }
    /**
     * Returns the attribute of an element as a lowercase value.
     * @param {ElementWithOpId<FormFieldElement>} element
     * @param {string} attributeName
     * @returns {string}
     * @private
     */
    getAttributeLowerCase(element, attributeName) {
        var _a;
        return (_a = this.getPropertyOrAttribute(element, attributeName)) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    }
    /**
     * Returns the value of an element's property or attribute.
     * @returns {AutofillField[]}
     * @private
     */
    getFormattedAutofillFieldsData() {
        return Array.from(this.autofillFieldElements.values());
    }
    /**
     * Creates a label tag used to autofill the element pulled from a label
     * associated with the element's id, name, parent element or from an
     * associated description term element if no other labels can be found.
     * Returns a string containing all the `textContent` or `innerText`
     * values of the label elements.
     * @param {FillableFormFieldElement} element
     * @returns {string}
     * @private
     */
    createAutofillFieldLabelTag(element) {
        var _a;
        const labelElementsSet = new Set(element.labels);
        if (labelElementsSet.size) {
            return this.createLabelElementsTag(labelElementsSet);
        }
        const labelElements = this.queryElementLabels(element);
        for (let labelIndex = 0; labelIndex < (labelElements === null || labelElements === void 0 ? void 0 : labelElements.length); labelIndex++) {
            labelElementsSet.add(labelElements[labelIndex]);
        }
        let currentElement = element;
        while (currentElement && currentElement !== document.documentElement) {
            if (elementIsLabelElement(currentElement)) {
                labelElementsSet.add(currentElement);
            }
            currentElement = (_a = currentElement.parentElement) === null || _a === void 0 ? void 0 : _a.closest("label");
        }
        if (!labelElementsSet.size &&
            elementIsDescriptionDetailsElement(element.parentElement) &&
            elementIsDescriptionTermElement(element.parentElement.previousElementSibling)) {
            labelElementsSet.add(element.parentElement.previousElementSibling);
        }
        return this.createLabelElementsTag(labelElementsSet);
    }
    /**
     * Queries the DOM for label elements associated with the given element
     * by id or name. Returns a NodeList of label elements or null if none
     * are found.
     * @param {FillableFormFieldElement} element
     * @returns {NodeListOf<HTMLLabelElement> | null}
     * @private
     */
    queryElementLabels(element) {
        let labelQuerySelectors = element.id ? `label[for="${element.id}"]` : "";
        if (element.name) {
            const forElementNameSelector = `label[for="${element.name}"]`;
            labelQuerySelectors = labelQuerySelectors
                ? `${labelQuerySelectors}, ${forElementNameSelector}`
                : forElementNameSelector;
        }
        if (!labelQuerySelectors) {
            return null;
        }
        return element.getRootNode().querySelectorAll(labelQuerySelectors.replace(/\n/g, ""));
    }
    /**
     * Gets the maxLength property of the passed FormFieldElement and
     * returns the value or null if the element does not have a
     * maxLength property. If the element has a maxLength property
     * greater than 999, it will return 999.
     * @param {FormFieldElement} element
     * @returns {number | null}
     * @private
     */
    getAutofillFieldMaxLength(element) {
        const elementHasMaxLengthProperty = elementIsInputElement(element) || elementIsTextAreaElement(element);
        const elementMaxLength = elementHasMaxLengthProperty && element.maxLength > -1 ? element.maxLength : 999;
        return elementHasMaxLengthProperty ? Math.min(elementMaxLength, 999) : null;
    }
    /**
     * Iterates over the next siblings of the passed element and
     * returns a string of the text content of each element. Will
     * stop iterating if it encounters a new section element.
     * @param {FormFieldElement} element
     * @returns {string}
     * @private
     */
    createAutofillFieldRightLabel(element) {
        const labelTextContent = [];
        let currentElement = element;
        while (currentElement && currentElement.nextSibling) {
            currentElement = currentElement.nextSibling;
            if (this.isNewSectionElement(currentElement)) {
                break;
            }
            const textContent = this.getTextContentFromElement(currentElement);
            if (textContent) {
                labelTextContent.push(textContent);
            }
        }
        return labelTextContent.join("");
    }
    /**
     * Recursively gets the text content from an element's previous siblings
     * and returns a string of the text content of each element.
     * @param {FormFieldElement} element
     * @returns {string}
     * @private
     */
    createAutofillFieldLeftLabel(element) {
        const labelTextContent = this.recursivelyGetTextFromPreviousSiblings(element);
        return labelTextContent.reverse().join("");
    }
    /**
     * Assumes that the input elements that are to be autofilled are within a
     * table structure. Queries the previous sibling of the parent row that
     * the input element is in and returns the text content of the cell that
     * is in the same column as the input element.
     * @param {FormFieldElement} element
     * @returns {string | null}
     * @private
     */
    createAutofillFieldTopLabel(element) {
        var _a, _b;
        const tableDataElement = element.closest("td");
        if (!tableDataElement) {
            return null;
        }
        const tableDataElementIndex = tableDataElement.cellIndex;
        const parentSiblingTableRowElement = (_a = tableDataElement.closest("tr")) === null || _a === void 0 ? void 0 : _a.previousElementSibling;
        return ((_b = parentSiblingTableRowElement === null || parentSiblingTableRowElement === void 0 ? void 0 : parentSiblingTableRowElement.cells) === null || _b === void 0 ? void 0 : _b.length) > tableDataElementIndex
            ? this.getTextContentFromElement(parentSiblingTableRowElement.cells[tableDataElementIndex])
            : null;
    }
    /**
     * Check if the element's tag indicates that a transition to a new section of the
     * page is occurring. If so, we should not use the element or its children in order
     * to get autofill context for the previous element.
     * @param {HTMLElement} currentElement
     * @returns {boolean}
     * @private
     */
    isNewSectionElement(currentElement) {
        if (!currentElement) {
            return true;
        }
        const transitionalElementTagsSet = new Set([
            "html",
            "body",
            "button",
            "form",
            "head",
            "iframe",
            "input",
            "option",
            "script",
            "select",
            "table",
            "textarea",
        ]);
        return ("tagName" in currentElement &&
            transitionalElementTagsSet.has(currentElement.tagName.toLowerCase()));
    }
    /**
     * Gets the text content from a passed element, regardless of whether it is a
     * text node, an element node or an HTMLElement.
     * @param {Node | HTMLElement} element
     * @returns {string}
     * @private
     */
    getTextContentFromElement(element) {
        if (element.nodeType === Node.TEXT_NODE) {
            return this.trimAndRemoveNonPrintableText(element.nodeValue);
        }
        return this.trimAndRemoveNonPrintableText(element.textContent || element.innerText);
    }
    /**
     * Removes non-printable characters from the passed text
     * content and trims leading and trailing whitespace.
     * @param {string} textContent
     * @returns {string}
     * @private
     */
    trimAndRemoveNonPrintableText(textContent) {
        return (textContent || "")
            .replace(/[^\x20-\x7E]+|\s+/g, " ") // Strip out non-primitive characters and replace multiple spaces with a single space
            .trim(); // Trim leading and trailing whitespace
    }
    /**
     * Get the text content from the previous siblings of the element. If
     * no text content is found, recursively get the text content from the
     * previous siblings of the parent element.
     * @param {FormFieldElement} element
     * @returns {string[]}
     * @private
     */
    recursivelyGetTextFromPreviousSiblings(element) {
        const textContentItems = [];
        let currentElement = element;
        while (currentElement && currentElement.previousSibling) {
            // Ensure we are capturing text content from nodes and elements.
            currentElement = currentElement.previousSibling;
            if (this.isNewSectionElement(currentElement)) {
                return textContentItems;
            }
            const textContent = this.getTextContentFromElement(currentElement);
            if (textContent) {
                textContentItems.push(textContent);
            }
        }
        if (!currentElement || textContentItems.length) {
            return textContentItems;
        }
        // Prioritize capturing text content from elements rather than nodes.
        currentElement = currentElement.parentElement || currentElement.parentNode;
        if (!currentElement) {
            return textContentItems;
        }
        let siblingElement = nodeIsElement(currentElement)
            ? currentElement.previousElementSibling
            : currentElement.previousSibling;
        while ((siblingElement === null || siblingElement === void 0 ? void 0 : siblingElement.lastChild) && !this.isNewSectionElement(siblingElement)) {
            siblingElement = siblingElement.lastChild;
        }
        if (this.isNewSectionElement(siblingElement)) {
            return textContentItems;
        }
        const textContent = this.getTextContentFromElement(siblingElement);
        if (textContent) {
            textContentItems.push(textContent);
            return textContentItems;
        }
        return this.recursivelyGetTextFromPreviousSiblings(siblingElement);
    }
    /**
     * Get the value of a property or attribute from a FormFieldElement.
     * @param {HTMLElement} element
     * @param {string} attributeName
     * @returns {string | null}
     * @private
     */
    getPropertyOrAttribute(element, attributeName) {
        if (attributeName in element) {
            return element[attributeName];
        }
        return element.getAttribute(attributeName);
    }
    /**
     * Gets the value of the element. If the element is a checkbox, returns a checkmark if the
     * checkbox is checked, or an empty string if it is not checked. If the element is a hidden
     * input, returns the value of the input if it is less than 254 characters, or a truncated
     * value if it is longer than 254 characters.
     * @param {FormFieldElement} element
     * @returns {string}
     * @private
     */
    getElementValue(element) {
        if (!elementIsFillableFormField(element)) {
            const spanTextContent = element.textContent || element.innerText;
            return spanTextContent || "";
        }
        const elementValue = element.value || "";
        const elementType = String(element.type).toLowerCase();
        if ("checked" in element && elementType === "checkbox") {
            return element.checked ? "✓" : "";
        }
        if (elementType === "hidden") {
            const inputValueMaxLength = 254;
            return elementValue.length > inputValueMaxLength
                ? `${elementValue.substring(0, inputValueMaxLength)}...SNIPPED`
                : elementValue;
        }
        return elementValue;
    }
    /**
     * Get the options from a select element and return them as an array
     * of arrays indicating the select element option text and value.
     * @param {HTMLSelectElement} element
     * @returns {{options: (string | null)[][]}}
     * @private
     */
    getSelectElementOptions(element) {
        const options = Array.from(element.options).map((option) => {
            const optionText = option.text
                ? String(option.text)
                    .toLowerCase()
                    .replace(/[\s~`!@$%^&#*()\-_+=:;'"[\]|\\,<.>?]/gm, "") // Remove whitespace and punctuation
                : null;
            return [optionText, option.value];
        });
        return { options };
    }
    /**
     * Queries all potential form and field elements from the DOM and returns
     * a collection of form and field elements. Leverages the TreeWalker API
     * to deep query Shadow DOM elements.
     * @returns {{formElements: Node[], formFieldElements: Node[]}}
     * @private
     */
    queryAutofillFormAndFieldElements() {
        const formElements = [];
        const formFieldElements = [];
        this.queryAllTreeWalkerNodes(document.documentElement, (node) => {
            if (nodeIsFormElement(node)) {
                formElements.push(node);
                return true;
            }
            if (this.isNodeFormFieldElement(node)) {
                formFieldElements.push(node);
                return true;
            }
            return false;
        });
        return { formElements, formFieldElements };
    }
    /**
     * Checks if the passed node is a form field element.
     * @param {Node} node
     * @returns {boolean}
     * @private
     */
    isNodeFormFieldElement(node) {
        if (!nodeIsElement(node)) {
            return false;
        }
        const nodeTagName = node.tagName.toLowerCase();
        const nodeIsSpanElementWithAutofillAttribute = nodeTagName === "span" && node.hasAttribute("data-bwautofill");
        if (nodeIsSpanElementWithAutofillAttribute) {
            return true;
        }
        const nodeHasBwIgnoreAttribute = node.hasAttribute("data-bwignore");
        const nodeIsValidInputElement = nodeTagName === "input" && !this.ignoredInputTypes.has(node.type);
        if (nodeIsValidInputElement && !nodeHasBwIgnoreAttribute) {
            return true;
        }
        return ["textarea", "select"].includes(nodeTagName) && !nodeHasBwIgnoreAttribute;
    }
    /**
     * Attempts to get the ShadowRoot of the passed node. If support for the
     * extension based openOrClosedShadowRoot API is available, it will be used.
     * Will return null if the node is not an HTMLElement or if the node has
     * child nodes.
     *
     * @param {Node} node
     */
    getShadowRoot(node) {
        var _a;
        if (!nodeIsElement(node) || node.childNodes.length !== 0) {
            return null;
        }
        if (node.shadowRoot) {
            return node.shadowRoot;
        }
        if ((_a = chrome.dom) === null || _a === void 0 ? void 0 : _a.openOrClosedShadowRoot) {
            try {
                return chrome.dom.openOrClosedShadowRoot(node);
            }
            catch (error) {
                return null;
            }
        }
        return node.openOrClosedShadowRoot;
    }
    /**
     * Recursively builds a collection of nodes that match the given filter callback.
     * If a node has a ShadowRoot, it will be observed for mutations.
     * @param {Node} rootNode
     * @param {Node[]} treeWalkerQueryResults
     * @param {Function} filterCallback
     * @param {boolean} isObservingShadowRoot
     * @private
     */
    buildTreeWalkerNodesQueryResults(rootNode, treeWalkerQueryResults, filterCallback, isObservingShadowRoot) {
        const treeWalker = document === null || document === void 0 ? void 0 : document.createTreeWalker(rootNode, NodeFilter.SHOW_ELEMENT);
        let currentNode = treeWalker === null || treeWalker === void 0 ? void 0 : treeWalker.currentNode;
        while (currentNode) {
            if (filterCallback(currentNode)) {
                treeWalkerQueryResults.push(currentNode);
            }
            const nodeShadowRoot = this.getShadowRoot(currentNode);
            if (nodeShadowRoot) {
                if (isObservingShadowRoot) {
                    this.mutationObserver.observe(nodeShadowRoot, {
                        attributes: true,
                        childList: true,
                        subtree: true,
                    });
                }
                this.buildTreeWalkerNodesQueryResults(nodeShadowRoot, treeWalkerQueryResults, filterCallback, isObservingShadowRoot);
            }
            currentNode = treeWalker === null || treeWalker === void 0 ? void 0 : treeWalker.nextNode();
        }
    }
    /**
     * Sets up a mutation observer on the body of the document. Observes changes to
     * DOM elements to ensure we have an updated set of autofill field data.
     * @private
     */
    setupMutationObserver() {
        this.currentLocationHref = globalThis.location.href;
        this.mutationObserver = new MutationObserver(this.handleMutationObserverMutation);
        this.mutationObserver.observe(document.documentElement, {
            attributes: true,
            childList: true,
            subtree: true,
        });
    }
    /**
     * Handles a mutation to the window location. Clears the autofill elements
     * and updates the autofill elements after a timeout.
     * @private
     */
    handleWindowLocationMutation() {
        this.currentLocationHref = globalThis.location.href;
        this.domRecentlyMutated = true;
        if (this.autofillOverlayContentService) {
            this.autofillOverlayContentService.pageDetailsUpdateRequired = true;
        }
        this.noFieldsFound = false;
        this.autofillFormElements.clear();
        this.autofillFieldElements.clear();
        this.updateAutofillElementsAfterMutation();
    }
    /**
     * Checks if the passed nodes either contain or are autofill elements.
     * @param {NodeList} nodes
     * @param {boolean} isRemovingNodes
     * @returns {boolean}
     * @private
     */
    isAutofillElementNodeMutated(nodes, isRemovingNodes = false) {
        if (!nodes.length) {
            return false;
        }
        let isElementMutated = false;
        const mutatedElements = [];
        for (let index = 0; index < nodes.length; index++) {
            const node = nodes[index];
            if (!nodeIsElement(node)) {
                continue;
            }
            const autofillElementNodes = this.queryAllTreeWalkerNodes(node, (walkerNode) => nodeIsFormElement(walkerNode) || this.isNodeFormFieldElement(walkerNode));
            if (autofillElementNodes.length) {
                isElementMutated = true;
                mutatedElements.push(...autofillElementNodes);
            }
        }
        if (isRemovingNodes) {
            for (let elementIndex = 0; elementIndex < mutatedElements.length; elementIndex++) {
                const node = mutatedElements[elementIndex];
                this.deleteCachedAutofillElement(node);
            }
        }
        else if (this.autofillOverlayContentService) {
            setTimeout(() => this.setupOverlayListenersOnMutatedElements(mutatedElements), 1000);
        }
        return isElementMutated;
    }
    /**
     * Sets up the overlay listeners on the passed mutated elements. This ensures
     * that the overlay can appear on elements that are injected into the DOM after
     * the initial page load.
     *
     * @param mutatedElements - HTML elements that have been mutated
     */
    setupOverlayListenersOnMutatedElements(mutatedElements) {
        for (let elementIndex = 0; elementIndex < mutatedElements.length; elementIndex++) {
            const node = mutatedElements[elementIndex];
            if (this.isNodeFormFieldElement(node) &&
                !this.autofillFieldElements.get(node)) {
                // We are setting this item to a -1 index because we do not know its position in the DOM.
                // This value should be updated with the next call to collect page details.
                // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                this.buildAutofillFieldItem(node, -1);
            }
        }
    }
    /**
     * Deletes any cached autofill elements that have been
     * removed from the DOM.
     * @param {ElementWithOpId<HTMLFormElement> | ElementWithOpId<FormFieldElement>} element
     * @private
     */
    deleteCachedAutofillElement(element) {
        if (elementIsFormElement(element) && this.autofillFormElements.has(element)) {
            this.autofillFormElements.delete(element);
            return;
        }
        if (this.autofillFieldElements.has(element)) {
            this.autofillFieldElements.delete(element);
        }
    }
    /**
     * Updates the autofill elements after a DOM mutation has occurred.
     * Is debounced to prevent excessive updates.
     * @private
     */
    updateAutofillElementsAfterMutation() {
        if (this.updateAutofillElementsAfterMutationTimeout) {
            clearTimeout(this.updateAutofillElementsAfterMutationTimeout);
        }
        this.updateAutofillElementsAfterMutationTimeout = setTimeout(this.getPageDetails.bind(this), this.updateAfterMutationTimeoutDelay);
    }
    /**
     * Handles observed DOM mutations related to an autofill element attribute.
     * @param {MutationRecord} mutation
     * @private
     */
    handleAutofillElementAttributeMutation(mutation) {
        var _a;
        const targetElement = mutation.target;
        if (!nodeIsElement(targetElement)) {
            return;
        }
        const attributeName = (_a = mutation.attributeName) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        const autofillForm = this.autofillFormElements.get(targetElement);
        if (autofillForm) {
            this.updateAutofillFormElementData(attributeName, targetElement, autofillForm);
            return;
        }
        const autofillField = this.autofillFieldElements.get(targetElement);
        if (!autofillField) {
            return;
        }
        // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.updateAutofillFieldElementData(attributeName, targetElement, autofillField);
    }
    /**
     * Updates the autofill form element data based on the passed attribute name.
     * @param {string} attributeName
     * @param {ElementWithOpId<HTMLFormElement>} element
     * @param {AutofillForm} dataTarget
     * @private
     */
    updateAutofillFormElementData(attributeName, element, dataTarget) {
        const updateAttribute = (dataTargetKey) => {
            this.updateAutofillDataAttribute({ element, attributeName, dataTarget, dataTargetKey });
        };
        const updateActions = {
            action: () => (dataTarget.htmlAction = this.getFormActionAttribute(element)),
            name: () => updateAttribute("htmlName"),
            id: () => updateAttribute("htmlID"),
            method: () => updateAttribute("htmlMethod"),
        };
        if (!updateActions[attributeName]) {
            return;
        }
        updateActions[attributeName]();
        if (this.autofillFormElements.has(element)) {
            this.autofillFormElements.set(element, dataTarget);
        }
    }
    /**
     * Updates the autofill field element data based on the passed attribute name.
     * @param {string} attributeName
     * @param {ElementWithOpId<FormFieldElement>} element
     * @param {AutofillField} dataTarget
     * @returns {Promise<void>}
     * @private
     */
    updateAutofillFieldElementData(attributeName, element, dataTarget) {
        return collect_autofill_content_service_awaiter(this, void 0, void 0, function* () {
            const updateAttribute = (dataTargetKey) => {
                this.updateAutofillDataAttribute({ element, attributeName, dataTarget, dataTargetKey });
            };
            const updateActions = {
                maxlength: () => (dataTarget.maxLength = this.getAutofillFieldMaxLength(element)),
                id: () => updateAttribute("htmlID"),
                name: () => updateAttribute("htmlName"),
                class: () => updateAttribute("htmlClass"),
                tabindex: () => updateAttribute("tabindex"),
                title: () => updateAttribute("tabindex"),
                rel: () => updateAttribute("rel"),
                tagname: () => (dataTarget.tagName = this.getAttributeLowerCase(element, "tagName")),
                type: () => (dataTarget.type = this.getAttributeLowerCase(element, "type")),
                value: () => (dataTarget.value = this.getElementValue(element)),
                checked: () => (dataTarget.checked = this.getAttributeBoolean(element, "checked")),
                disabled: () => (dataTarget.disabled = this.getAttributeBoolean(element, "disabled")),
                readonly: () => (dataTarget.readonly = this.getAttributeBoolean(element, "readonly")),
                autocomplete: () => (dataTarget.autoCompleteType = this.getAutoCompleteAttribute(element)),
                "data-label": () => updateAttribute("label-data"),
                "aria-label": () => updateAttribute("label-aria"),
                "aria-hidden": () => (dataTarget["aria-hidden"] = this.getAttributeBoolean(element, "aria-hidden", true)),
                "aria-disabled": () => (dataTarget["aria-disabled"] = this.getAttributeBoolean(element, "aria-disabled", true)),
                "aria-haspopup": () => (dataTarget["aria-haspopup"] = this.getAttributeBoolean(element, "aria-haspopup", true)),
                "data-stripe": () => updateAttribute("data-stripe"),
            };
            if (!updateActions[attributeName]) {
                return;
            }
            updateActions[attributeName]();
            if (this.autofillFieldElements.has(element)) {
                this.autofillFieldElements.set(element, dataTarget);
            }
        });
    }
    /**
     * Gets the attribute value for the passed element, and returns it. If the dataTarget
     * and dataTargetKey are passed, it will set the value of the dataTarget[dataTargetKey].
     * @param UpdateAutofillDataAttributeParams
     * @returns {string}
     * @private
     */
    updateAutofillDataAttribute({ element, attributeName, dataTarget, dataTargetKey, }) {
        const attributeValue = this.getPropertyOrAttribute(element, attributeName);
        if (dataTarget && dataTargetKey) {
            dataTarget[dataTargetKey] = attributeValue;
        }
        return attributeValue;
    }
    /**
     * Destroys the CollectAutofillContentService. Clears all
     * timeouts and disconnects the mutation observer.
     */
    destroy() {
        var _a;
        if (this.updateAutofillElementsAfterMutationTimeout) {
            clearTimeout(this.updateAutofillElementsAfterMutationTimeout);
        }
        (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
}
/* harmony default export */ const collect_autofill_content_service = (CollectAutofillContentService);

;// CONCATENATED MODULE: ./src/autofill/services/dom-element-visibility.service.ts
var dom_element_visibility_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class DomElementVisibilityService {
    constructor() {
        this.cachedComputedStyle = null;
    }
    /**
     * Checks if a form field is viewable. This is done by checking if the element is within the
     * viewport bounds, not hidden by CSS, and not hidden behind another element.
     * @param {FormFieldElement} element
     * @returns {Promise<boolean>}
     */
    isFormFieldViewable(element) {
        return dom_element_visibility_service_awaiter(this, void 0, void 0, function* () {
            const elementBoundingClientRect = element.getBoundingClientRect();
            if (this.isElementOutsideViewportBounds(element, elementBoundingClientRect) ||
                this.isElementHiddenByCss(element)) {
                return false;
            }
            return this.formFieldIsNotHiddenBehindAnotherElement(element, elementBoundingClientRect);
        });
    }
    /**
     * Check if the target element is hidden using CSS. This is done by checking the opacity, display,
     * visibility, and clip-path CSS properties of the element. We also check the opacity of all
     * parent elements to ensure that the target element is not hidden by a parent element.
     * @param {HTMLElement} element
     * @returns {boolean}
     * @public
     */
    isElementHiddenByCss(element) {
        this.cachedComputedStyle = null;
        if (this.isElementInvisible(element) ||
            this.isElementNotDisplayed(element) ||
            this.isElementNotVisible(element) ||
            this.isElementClipped(element)) {
            return true;
        }
        let parentElement = element.parentElement;
        while (parentElement && parentElement !== element.ownerDocument.documentElement) {
            this.cachedComputedStyle = null;
            if (this.isElementInvisible(parentElement)) {
                return true;
            }
            parentElement = parentElement.parentElement;
        }
        return false;
    }
    /**
     * Gets the computed style of a given element, will only calculate the computed
     * style if the element's style has not been previously cached.
     * @param {HTMLElement} element
     * @param {string} styleProperty
     * @returns {string}
     * @private
     */
    getElementStyle(element, styleProperty) {
        if (!this.cachedComputedStyle) {
            this.cachedComputedStyle = (element.ownerDocument.defaultView || window).getComputedStyle(element);
        }
        return this.cachedComputedStyle.getPropertyValue(styleProperty);
    }
    /**
     * Checks if the opacity of the target element is less than 0.1.
     * @param {HTMLElement} element
     * @returns {boolean}
     * @private
     */
    isElementInvisible(element) {
        return parseFloat(this.getElementStyle(element, "opacity")) < 0.1;
    }
    /**
     * Checks if the target element has a display property of none.
     * @param {HTMLElement} element
     * @returns {boolean}
     * @private
     */
    isElementNotDisplayed(element) {
        return this.getElementStyle(element, "display") === "none";
    }
    /**
     * Checks if the target element has a visibility property of hidden or collapse.
     * @param {HTMLElement} element
     * @returns {boolean}
     * @private
     */
    isElementNotVisible(element) {
        return new Set(["hidden", "collapse"]).has(this.getElementStyle(element, "visibility"));
    }
    /**
     * Checks if the target element has a clip-path property that hides the element.
     * @param {HTMLElement} element
     * @returns {boolean}
     * @private
     */
    isElementClipped(element) {
        return new Set([
            "inset(50%)",
            "inset(100%)",
            "circle(0)",
            "circle(0px)",
            "circle(0px at 50% 50%)",
            "polygon(0 0, 0 0, 0 0, 0 0)",
            "polygon(0px 0px, 0px 0px, 0px 0px, 0px 0px)",
        ]).has(this.getElementStyle(element, "clipPath"));
    }
    /**
     * Checks if the target element is outside the viewport bounds. This is done by checking if the
     * element is too small or is overflowing the viewport bounds.
     * @param {HTMLElement} targetElement
     * @param {DOMRectReadOnly | null} targetElementBoundingClientRect
     * @returns {boolean}
     * @private
     */
    isElementOutsideViewportBounds(targetElement, targetElementBoundingClientRect = null) {
        const documentElement = targetElement.ownerDocument.documentElement;
        const documentElementWidth = documentElement.scrollWidth;
        const documentElementHeight = documentElement.scrollHeight;
        const elementBoundingClientRect = targetElementBoundingClientRect || targetElement.getBoundingClientRect();
        const elementTopOffset = elementBoundingClientRect.top - documentElement.clientTop;
        const elementLeftOffset = elementBoundingClientRect.left - documentElement.clientLeft;
        const isElementSizeInsufficient = elementBoundingClientRect.width < 10 || elementBoundingClientRect.height < 10;
        const isElementOverflowingLeftViewport = elementLeftOffset < 0;
        const isElementOverflowingRightViewport = elementLeftOffset + elementBoundingClientRect.width > documentElementWidth;
        const isElementOverflowingTopViewport = elementTopOffset < 0;
        const isElementOverflowingBottomViewport = elementTopOffset + elementBoundingClientRect.height > documentElementHeight;
        return (isElementSizeInsufficient ||
            isElementOverflowingLeftViewport ||
            isElementOverflowingRightViewport ||
            isElementOverflowingTopViewport ||
            isElementOverflowingBottomViewport);
    }
    /**
     * Checks if a passed FormField is not hidden behind another element. This is done by
     * checking if the element at the center point of the FormField is the FormField itself
     * or one of its labels.
     * @param {FormFieldElement} targetElement
     * @param {DOMRectReadOnly | null} targetElementBoundingClientRect
     * @returns {boolean}
     * @private
     */
    formFieldIsNotHiddenBehindAnotherElement(targetElement, targetElementBoundingClientRect = null) {
        var _a;
        const elementBoundingClientRect = targetElementBoundingClientRect || targetElement.getBoundingClientRect();
        const elementRootNode = targetElement.getRootNode();
        const rootElement = elementRootNode instanceof ShadowRoot ? elementRootNode : targetElement.ownerDocument;
        const elementAtCenterPoint = rootElement.elementFromPoint(elementBoundingClientRect.left + elementBoundingClientRect.width / 2, elementBoundingClientRect.top + elementBoundingClientRect.height / 2);
        if (elementAtCenterPoint === targetElement) {
            return true;
        }
        const targetElementLabelsSet = new Set(targetElement.labels);
        if (targetElementLabelsSet.has(elementAtCenterPoint)) {
            return true;
        }
        const closestParentLabel = (_a = elementAtCenterPoint === null || elementAtCenterPoint === void 0 ? void 0 : elementAtCenterPoint.parentElement) === null || _a === void 0 ? void 0 : _a.closest("label");
        return targetElementLabelsSet.has(closestParentLabel);
    }
}
/* harmony default export */ const dom_element_visibility_service = (DomElementVisibilityService);

;// CONCATENATED MODULE: ./src/autofill/services/insert-autofill-content.service.ts
var insert_autofill_content_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class InsertAutofillContentService {
    /**
     * InsertAutofillContentService constructor. Instantiates the
     * DomElementVisibilityService and CollectAutofillContentService classes.
     */
    constructor(domElementVisibilityService, collectAutofillContentService) {
        this.autofillInsertActions = {
            fill_by_opid: ({ opid, value }) => this.handleFillFieldByOpidAction(opid, value),
            click_on_opid: ({ opid }) => this.handleClickOnFieldByOpidAction(opid),
            focus_by_opid: ({ opid }) => this.handleFocusOnFieldByOpidAction(opid),
        };
        /**
         * Runs the autofill action based on the action type and the opid.
         * Each action is subsequently delayed by 20 milliseconds.
         * @param {"click_on_opid" | "focus_by_opid" | "fill_by_opid"} action
         * @param {string} opid
         * @param {string} value
         * @param {number} actionIndex
         * @returns {Promise<void>}
         * @private
         */
        this.runFillScriptAction = ([action, opid, value], actionIndex) => {
            if (!opid || !this.autofillInsertActions[action]) {
                return;
            }
            const delayActionsInMilliseconds = 20;
            return new Promise((resolve) => setTimeout(() => {
                this.autofillInsertActions[action]({ opid, value });
                resolve();
            }, delayActionsInMilliseconds * actionIndex));
        };
        this.domElementVisibilityService = domElementVisibilityService;
        this.collectAutofillContentService = collectAutofillContentService;
    }
    /**
     * Handles autofill of the forms on the current page based on the
     * data within the passed fill script object.
     * @param {AutofillScript} fillScript
     * @returns {Promise<void>}
     * @public
     */
    fillForm(fillScript) {
        var _a;
        return insert_autofill_content_service_awaiter(this, void 0, void 0, function* () {
            if (!((_a = fillScript.script) === null || _a === void 0 ? void 0 : _a.length) ||
                this.fillingWithinSandboxedIframe() ||
                this.userCancelledInsecureUrlAutofill(fillScript.savedUrls) ||
                this.userCancelledUntrustedIframeAutofill(fillScript)) {
                return;
            }
            const fillActionPromises = fillScript.script.map(this.runFillScriptAction);
            yield Promise.all(fillActionPromises);
        });
    }
    /**
     * Identifies if the execution of this script is happening
     * within a sandboxed iframe.
     * @returns {boolean}
     * @private
     */
    fillingWithinSandboxedIframe() {
        var _a;
        return (String(self.origin).toLowerCase() === "null" ||
            ((_a = window.frameElement) === null || _a === void 0 ? void 0 : _a.hasAttribute("sandbox")) ||
            window.location.hostname === "");
    }
    /**
     * Checks if the autofill is occurring on a page that can be considered secure. If the page is not secure,
     * the user is prompted to confirm that they want to autofill on the page.
     * @param {string[] | null} savedUrls
     * @returns {boolean}
     * @private
     */
    userCancelledInsecureUrlAutofill(savedUrls) {
        if (!(savedUrls === null || savedUrls === void 0 ? void 0 : savedUrls.some((url) => url.startsWith(`https://${window.location.hostname}`))) ||
            window.location.protocol !== "http:" ||
            !this.isPasswordFieldWithinDocument()) {
            return false;
        }
        const confirmationWarning = [
            chrome.i18n.getMessage("insecurePageWarning"),
            chrome.i18n.getMessage("insecurePageWarningFillPrompt", [window.location.hostname]),
        ].join("\n\n");
        return !confirm(confirmationWarning);
    }
    /**
     * Checks if there is a password field within the current document. Includes
     * password fields that are present within the shadow DOM.
     * @returns {boolean}
     * @private
     */
    isPasswordFieldWithinDocument() {
        var _a;
        return Boolean((_a = this.collectAutofillContentService.queryAllTreeWalkerNodes(document.documentElement, (node) => nodeIsInputElement(node) && node.type === "password", false)) === null || _a === void 0 ? void 0 : _a.length);
    }
    /**
     * Checking if the autofill is occurring within an untrusted iframe. If the page is within an untrusted iframe,
     * the user is prompted to confirm that they want to autofill on the page. If the user cancels the autofill,
     * the script will not continue.
     *
     * Note: confirm() is blocked by sandboxed iframes, but we don't want to fill sandboxed iframes anyway.
     * If this occurs, confirm() returns false without displaying the dialog box, and autofill will be aborted.
     * The browser may print a message to the console, but this is not a standard error that we can handle.
     * @param {AutofillScript} fillScript
     * @returns {boolean}
     * @private
     */
    userCancelledUntrustedIframeAutofill(fillScript) {
        if (!fillScript.untrustedIframe) {
            return false;
        }
        const confirmationWarning = [
            chrome.i18n.getMessage("autofillIframeWarning"),
            chrome.i18n.getMessage("autofillIframeWarningTip", [window.location.hostname]),
        ].join("\n\n");
        return !confirm(confirmationWarning);
    }
    /**
     * Queries the DOM for an element by opid and inserts the passed value into the element.
     * @param {string} opid
     * @param {string} value
     * @private
     */
    handleFillFieldByOpidAction(opid, value) {
        const element = this.collectAutofillContentService.getAutofillFieldElementByOpid(opid);
        this.insertValueIntoField(element, value);
    }
    /**
     * Handles finding an element by opid and triggering a click event on the element.
     * @param {string} opid
     * @private
     */
    handleClickOnFieldByOpidAction(opid) {
        const element = this.collectAutofillContentService.getAutofillFieldElementByOpid(opid);
        this.triggerClickOnElement(element);
    }
    /**
     * Handles finding an element by opid and triggering click and focus events on the element.
     * To ensure that we trigger a blur event correctly on a filled field, we first check if the
     * element is already focused. If it is, we blur the element before focusing on it again.
     *
     * @param {string} opid - The opid of the element to focus on.
     */
    handleFocusOnFieldByOpidAction(opid) {
        const element = this.collectAutofillContentService.getAutofillFieldElementByOpid(opid);
        if (document.activeElement === element) {
            element.blur();
        }
        this.simulateUserMouseClickAndFocusEventInteractions(element, true);
    }
    /**
     * Identifies the type of element passed and inserts the value into the element.
     * Will trigger simulated events on the element to ensure that the element is
     * properly updated.
     * @param {FormFieldElement | null} element
     * @param {string} value
     * @private
     */
    insertValueIntoField(element, value) {
        const elementCanBeReadonly = elementIsInputElement(element) || elementIsTextAreaElement(element);
        const elementCanBeFilled = elementCanBeReadonly || elementIsSelectElement(element);
        if (!element ||
            !value ||
            (elementCanBeReadonly && element.readOnly) ||
            (elementCanBeFilled && element.disabled)) {
            return;
        }
        if (!elementIsFillableFormField(element)) {
            this.handleInsertValueAndTriggerSimulatedEvents(element, () => (element.innerText = value));
            return;
        }
        const isFillableCheckboxOrRadioElement = elementIsInputElement(element) &&
            new Set(["checkbox", "radio"]).has(element.type) &&
            new Set(["true", "y", "1", "yes", "✓"]).has(String(value).toLowerCase());
        if (isFillableCheckboxOrRadioElement) {
            this.handleInsertValueAndTriggerSimulatedEvents(element, () => (element.checked = true));
            return;
        }
        this.handleInsertValueAndTriggerSimulatedEvents(element, () => (element.value = value));
    }
    /**
     * Simulates pre- and post-insert events on the element meant to mimic user interactions
     * while inserting the autofill value into the element.
     * @param {FormFieldElement} element
     * @param {Function} valueChangeCallback
     * @private
     */
    handleInsertValueAndTriggerSimulatedEvents(element, valueChangeCallback) {
        this.triggerPreInsertEventsOnElement(element);
        valueChangeCallback();
        this.triggerPostInsertEventsOnElement(element);
        this.triggerFillAnimationOnElement(element);
    }
    /**
     * Simulates a mouse click event on the element, including focusing the event, and
     * the triggers a simulated keyboard event on the element. Will attempt to ensure
     * that the initial element value is not arbitrarily changed by the simulated events.
     * @param {FormFieldElement} element
     * @private
     */
    triggerPreInsertEventsOnElement(element) {
        const initialElementValue = "value" in element ? element.value : "";
        this.simulateUserMouseClickAndFocusEventInteractions(element);
        this.simulateUserKeyboardEventInteractions(element);
        if ("value" in element && initialElementValue !== element.value) {
            element.value = initialElementValue;
        }
    }
    /**
     * Simulates a keyboard event on the element before assigning the autofilled value to the element, and then
     * simulates an input change event on the element to trigger expected events after autofill occurs.
     * @param {FormFieldElement} element
     * @private
     */
    triggerPostInsertEventsOnElement(element) {
        const autofilledValue = "value" in element ? element.value : "";
        this.simulateUserKeyboardEventInteractions(element);
        if ("value" in element && autofilledValue !== element.value) {
            element.value = autofilledValue;
        }
        this.simulateInputElementChangedEvent(element);
    }
    /**
     * Identifies if a passed element can be animated and sets a class on the element
     * to trigger a CSS animation. The animation is removed after a short delay.
     * @param {FormFieldElement} element
     * @private
     */
    triggerFillAnimationOnElement(element) {
        const skipAnimatingElement = elementIsFillableFormField(element) &&
            !new Set(["email", "text", "password", "number", "tel", "url"]).has(element === null || element === void 0 ? void 0 : element.type);
        if (this.domElementVisibilityService.isElementHiddenByCss(element) || skipAnimatingElement) {
            return;
        }
        element.classList.add("com-bitwarden-browser-animated-fill");
        setTimeout(() => element.classList.remove("com-bitwarden-browser-animated-fill"), 200);
    }
    /**
     * Simulates a click  event on the element.
     * @param {HTMLElement} element
     * @private
     */
    triggerClickOnElement(element) {
        if (typeof (element === null || element === void 0 ? void 0 : element.click) !== TYPE_CHECK.FUNCTION) {
            return;
        }
        element.click();
    }
    /**
     * Simulates a focus event on the element. Will optionally reset the value of the element
     * if the element has a value property.
     * @param {HTMLElement | undefined} element
     * @param {boolean} shouldResetValue
     * @private
     */
    triggerFocusOnElement(element, shouldResetValue = false) {
        if (typeof (element === null || element === void 0 ? void 0 : element.focus) !== TYPE_CHECK.FUNCTION) {
            return;
        }
        let initialValue = "";
        if (shouldResetValue && "value" in element) {
            initialValue = String(element.value);
        }
        element.focus();
        if (initialValue && "value" in element) {
            element.value = initialValue;
        }
    }
    /**
     * Simulates a mouse click and focus event on the element.
     * @param {FormFieldElement} element
     * @param {boolean} shouldResetValue
     * @private
     */
    simulateUserMouseClickAndFocusEventInteractions(element, shouldResetValue = false) {
        this.triggerClickOnElement(element);
        this.triggerFocusOnElement(element, shouldResetValue);
    }
    /**
     * Simulates several keyboard events on the element, mocking a user interaction with the element.
     * @param {FormFieldElement} element
     * @private
     */
    simulateUserKeyboardEventInteractions(element) {
        const simulatedKeyboardEvents = [EVENTS.KEYDOWN, EVENTS.KEYPRESS, EVENTS.KEYUP];
        for (let index = 0; index < simulatedKeyboardEvents.length; index++) {
            element.dispatchEvent(new KeyboardEvent(simulatedKeyboardEvents[index], { bubbles: true }));
        }
    }
    /**
     * Simulates an input change event on the element, mocking behavior that would occur if a user
     * manually changed a value for the element.
     * @param {FormFieldElement} element
     * @private
     */
    simulateInputElementChangedEvent(element) {
        const simulatedInputEvents = [EVENTS.INPUT, EVENTS.CHANGE];
        for (let index = 0; index < simulatedInputEvents.length; index++) {
            element.dispatchEvent(new Event(simulatedInputEvents[index], { bubbles: true }));
        }
    }
}
/* harmony default export */ const insert_autofill_content_service = (InsertAutofillContentService);

;// CONCATENATED MODULE: ./src/autofill/content/autofill-init.ts
var autofill_init_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class AutofillInit {
    /**
     * AutofillInit constructor. Initializes the DomElementVisibilityService,
     * CollectAutofillContentService and InsertAutofillContentService classes.
     *
     * @param autofillOverlayContentService - The autofill overlay content service, potentially undefined.
     */
    constructor(autofillOverlayContentService) {
        this.extensionMessageHandlers = {
            collectPageDetails: ({ message }) => this.collectPageDetails(message),
            collectPageDetailsImmediately: ({ message }) => this.collectPageDetails(message, true),
            fillForm: ({ message }) => this.fillForm(message),
            openAutofillOverlay: ({ message }) => this.openAutofillOverlay(message),
            closeAutofillOverlay: ({ message }) => this.removeAutofillOverlay(message),
            addNewVaultItemFromOverlay: () => this.addNewVaultItemFromOverlay(),
            redirectOverlayFocusOut: ({ message }) => this.redirectOverlayFocusOut(message),
            updateIsOverlayCiphersPopulated: ({ message }) => this.updateIsOverlayCiphersPopulated(message),
            bgUnlockPopoutOpened: () => this.blurAndRemoveOverlay(),
            bgVaultItemRepromptPopoutOpened: () => this.blurAndRemoveOverlay(),
            updateAutofillOverlayVisibility: ({ message }) => this.updateAutofillOverlayVisibility(message),
        };
        /**
         * Handles the extension messages sent to the content script.
         *
         * @param message - The extension message.
         * @param sender - The message sender.
         * @param sendResponse - The send response callback.
         */
        this.handleExtensionMessage = (message, sender, sendResponse) => {
            const command = message.command;
            const handler = this.extensionMessageHandlers[command];
            if (!handler) {
                return;
            }
            const messageResponse = handler({ message, sender });
            if (!messageResponse) {
                return;
            }
            // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            Promise.resolve(messageResponse).then((response) => sendResponse(response));
            return true;
        };
        this.autofillOverlayContentService = autofillOverlayContentService;
        this.domElementVisibilityService = new dom_element_visibility_service();
        this.collectAutofillContentService = new collect_autofill_content_service(this.domElementVisibilityService, this.autofillOverlayContentService);
        this.insertAutofillContentService = new insert_autofill_content_service(this.domElementVisibilityService, this.collectAutofillContentService);
    }
    /**
     * Initializes the autofill content script, setting up
     * the extension message listeners. This method should
     * be called once when the content script is loaded.
     */
    init() {
        var _a;
        this.setupExtensionMessageListeners();
        (_a = this.autofillOverlayContentService) === null || _a === void 0 ? void 0 : _a.init();
        this.collectPageDetailsOnLoad();
    }
    /**
     * Triggers a collection of the page details from the
     * background script, ensuring that autofill is ready
     * to act on the page.
     */
    collectPageDetailsOnLoad() {
        const sendCollectDetailsMessage = () => setTimeout(() => sendExtensionMessage("bgCollectPageDetails", { sender: "autofillInit" }), 250);
        if (document.readyState === "complete") {
            sendCollectDetailsMessage();
        }
        window.addEventListener("load", sendCollectDetailsMessage);
    }
    /**
     * Collects the page details and sends them to the
     * extension background script. If the `sendDetailsInResponse`
     * parameter is set to true, the page details will be
     * returned to facilitate sending the details in the
     * response to the extension message.
     *
     * @param message - The extension message.
     * @param sendDetailsInResponse - Determines whether to send the details in the response.
     */
    collectPageDetails(message, sendDetailsInResponse = false) {
        return autofill_init_awaiter(this, void 0, void 0, function* () {
            const pageDetails = yield this.collectAutofillContentService.getPageDetails();
            if (sendDetailsInResponse) {
                return pageDetails;
            }
            // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            chrome.runtime.sendMessage({
                command: "collectPageDetailsResponse",
                tab: message.tab,
                details: pageDetails,
                sender: message.sender,
            });
        });
    }
    /**
     * Fills the form with the given fill script.
     *
     * @param {AutofillExtensionMessage} message
     */
    fillForm({ fillScript, pageDetailsUrl }) {
        return autofill_init_awaiter(this, void 0, void 0, function* () {
            if ((document.defaultView || window).location.href !== pageDetailsUrl) {
                return;
            }
            this.blurAndRemoveOverlay();
            this.updateOverlayIsCurrentlyFilling(true);
            yield this.insertAutofillContentService.fillForm(fillScript);
            if (!this.autofillOverlayContentService) {
                return;
            }
            setTimeout(() => this.updateOverlayIsCurrentlyFilling(false), 250);
        });
    }
    /**
     * Handles updating the overlay is currently filling value.
     *
     * @param isCurrentlyFilling - Indicates if the overlay is currently filling
     */
    updateOverlayIsCurrentlyFilling(isCurrentlyFilling) {
        if (!this.autofillOverlayContentService) {
            return;
        }
        this.autofillOverlayContentService.isCurrentlyFilling = isCurrentlyFilling;
    }
    /**
     * Opens the autofill overlay.
     *
     * @param data - The extension message data.
     */
    openAutofillOverlay({ data }) {
        if (!this.autofillOverlayContentService) {
            return;
        }
        this.autofillOverlayContentService.openAutofillOverlay(data);
    }
    /**
     * Blurs the most recent overlay field and removes the overlay. Used
     * in cases where the background unlock or vault item reprompt popout
     * is opened.
     */
    blurAndRemoveOverlay() {
        if (!this.autofillOverlayContentService) {
            return;
        }
        this.autofillOverlayContentService.blurMostRecentOverlayField();
        this.removeAutofillOverlay();
    }
    /**
     * Removes the autofill overlay if the field is not currently focused.
     * If the autofill is currently filling, only the overlay list will be
     * removed.
     */
    removeAutofillOverlay(message) {
        var _a, _b;
        if ((_a = message === null || message === void 0 ? void 0 : message.data) === null || _a === void 0 ? void 0 : _a.forceCloseOverlay) {
            (_b = this.autofillOverlayContentService) === null || _b === void 0 ? void 0 : _b.removeAutofillOverlay();
            return;
        }
        if (!this.autofillOverlayContentService ||
            this.autofillOverlayContentService.isFieldCurrentlyFocused) {
            return;
        }
        if (this.autofillOverlayContentService.isCurrentlyFilling) {
            this.autofillOverlayContentService.removeAutofillOverlayList();
            return;
        }
        this.autofillOverlayContentService.removeAutofillOverlay();
    }
    /**
     * Adds a new vault item from the overlay.
     */
    addNewVaultItemFromOverlay() {
        if (!this.autofillOverlayContentService) {
            return;
        }
        this.autofillOverlayContentService.addNewVaultItem();
    }
    /**
     * Redirects the overlay focus out of an overlay iframe.
     *
     * @param data - Contains the direction to redirect the focus.
     */
    redirectOverlayFocusOut({ data }) {
        if (!this.autofillOverlayContentService) {
            return;
        }
        this.autofillOverlayContentService.redirectOverlayFocusOut(data === null || data === void 0 ? void 0 : data.direction);
    }
    /**
     * Updates whether the current tab has ciphers that can populate the overlay list
     *
     * @param data - Contains the isOverlayCiphersPopulated value
     *
     */
    updateIsOverlayCiphersPopulated({ data }) {
        if (!this.autofillOverlayContentService) {
            return;
        }
        this.autofillOverlayContentService.isOverlayCiphersPopulated = Boolean(data === null || data === void 0 ? void 0 : data.isOverlayCiphersPopulated);
    }
    /**
     * Updates the autofill overlay visibility.
     *
     * @param data - Contains the autoFillOverlayVisibility value
     */
    updateAutofillOverlayVisibility({ data }) {
        if (!this.autofillOverlayContentService || isNaN(data === null || data === void 0 ? void 0 : data.autofillOverlayVisibility)) {
            return;
        }
        this.autofillOverlayContentService.autofillOverlayVisibility = data === null || data === void 0 ? void 0 : data.autofillOverlayVisibility;
    }
    /**
     * Sets up the extension message listeners for the content script.
     */
    setupExtensionMessageListeners() {
        chrome.runtime.onMessage.addListener(this.handleExtensionMessage);
    }
    /**
     * Handles destroying the autofill init content script. Removes all
     * listeners, timeouts, and object instances to prevent memory leaks.
     */
    destroy() {
        var _a;
        chrome.runtime.onMessage.removeListener(this.handleExtensionMessage);
        this.collectAutofillContentService.destroy();
        (_a = this.autofillOverlayContentService) === null || _a === void 0 ? void 0 : _a.destroy();
    }
}
/* harmony default export */ const autofill_init = (AutofillInit);

;// CONCATENATED MODULE: ./src/autofill/content/bootstrap-autofill-overlay.ts



(function (windowContext) {
    if (!windowContext.bitwardenAutofillInit) {
        const autofillOverlayContentService = new autofill_overlay_content_service();
        windowContext.bitwardenAutofillInit = new autofill_init(autofillOverlayContentService);
        setupAutofillInitDisconnectAction(windowContext);
        windowContext.bitwardenAutofillInit.init();
    }
})(window);

})();

/******/ })()
;