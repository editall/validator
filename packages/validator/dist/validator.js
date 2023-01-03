class g {
  isOk;
  value;
  message;
  constructor(t = !1, i = null, o = "") {
    this.isOk = t, this.value = i, this.message = o;
  }
}
let c = "invalid";
const d = new g();
class f {
  static set defaultMessage(t) {
    c = t;
  }
  defaultMessage = "";
  message(t) {
    return (t || this.defaultMessage) ?? c;
  }
  check(t, i) {
    return d;
  }
}
const m = (s) => parseFloat("" + s), L = (s) => parseInt("" + s), y = (s) => Boolean(s), E = (s) => "" + s, b = (s) => typeof s == "string" ? s.trim() : n, A = (s) => {
  if (typeof s != "string")
    return n;
  const t = s.indexOf(`
`);
  return t === -1 ? s : s.substring(0, t);
}, R = (s) => (t) => "length" in t && t.length === s ? t : n, l = (s) => (t) => "length" in t && t.length >= s ? t : n, S = (s) => (t) => "length" in t && t.length <= s ? t : n, M = (s, t) => (i) => "length" in i && i.length >= s && i.length <= t ? i : n, W = (s, t) => (i) => "length" in i && i.length < s && i.length > t ? i : n, U = (s) => (t) => typeof t == "number" && t < s ? t : n, O = (s) => (t) => typeof t == "number" && t > s ? t : n, z = (s, t) => (i) => typeof i == "number" && i >= s && i <= t ? i : n, B = (s, t) => (i) => typeof i == "number" && i < s && i > t ? i : n, C = (s) => (t) => typeof t == "string" && t.startsWith(s) ? t : n, I = (s) => (t) => typeof t == "string" && !t.startsWith(s) ? t : n, Z = (s) => (t) => typeof t == "string" && t.endsWith(s) ? t : n, $ = (s) => (t) => typeof t == "string" && !t.endsWith(s) ? t : n, k = (...s) => (t) => s.indexOf(t) !== -1 ? t : n, P = (...s) => (t) => s.indexOf(t) === -1 ? t : n, T = (s) => (t) => t === s ? t : n, x = (s) => (t) => t !== s ? t : n, u = (s) => typeof s == "number" ? s : n, F = (s) => typeof s != "number" ? s : n, w = (s) => typeof s == "string" ? s : n, q = (s) => typeof s != "string" ? s : n, G = (s) => typeof s == "boolean" ? s : n, H = (s) => typeof s != "boolean" ? s : n, V = (s) => typeof s == "string" && !s.trim().length ? s : n, j = (s) => typeof s == "string" && s.trim().length ? s : n, _ = (s) => typeof s == "string" && !s.length ? s : n, D = (s) => typeof s == "string" && s.length ? s : n, e = (s) => (t) => typeof t == "string" && s.test(t) ? t : n, J = e(/^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)$/), K = e(/^https?:\/\/[a-zA-Z0-9.-]+(?:\.+[A-Za-z]{2,4})+(?::\d{2,4})?/), Q = e(/^[0-9a-zA-Z-_.]+@[0-9a-zA-Z-.]+(?:[.]+[A-Za-z]{2,4})+$/), X = e(/^[a-z]+$/), Y = e(/^[A-Z]+$/), v = e(/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][-+]?\d+)?$/), tt = e(/^-?(?:0|[1-9]\d*)$/), st = e(/^[a-z0-9]+$/), it = e(/^[A-Z0-9]+$/), nt = e(/^[a-zA-Z0-9]+$/), ot = e(/^[a-zA-Z0-9\s]+$/), et = e(/^[a-z]/), ht = e(/^[A-Z]/);
class rt {
  ruleList = [];
  #t(t, i) {
    this.ruleList.push([t, i]);
  }
  rule(t, i) {
    this.#t(t, i);
  }
  asNumber(t) {
    this.#t(m, t);
  }
  asInt(t) {
    this.#t(L, t);
  }
  asBool(t) {
    this.#t(y, t);
  }
  asString(t) {
    this.#t(E, t);
  }
  runTrim(t) {
    this.#t(b, t);
  }
  runOneLine(t) {
    this.#t(A, t);
  }
  isLength(t, i) {
    this.#t(R(t), i);
  }
  isMinLength(t, i) {
    this.#t(l(t), i);
  }
  isMaxLength(t, i) {
    this.#t(S(t), i);
  }
  isRangeLength(t, i, o) {
    this.#t(M(t, i), o);
  }
  isNotRangeLength(t, i, o) {
    this.#t(W(t, i), o);
  }
  isLessThan(t, i) {
    this.#t(U(t), i);
  }
  isGreaterThan(t, i) {
    this.#t(O(t), i);
  }
  isRange(t, i, o) {
    this.#t(z(t, i), o);
  }
  isNotRange(t, i, o) {
    this.#t(B(t, i), o);
  }
  isStartWith(t, i) {
    this.#t(C(t), i);
  }
  isNotStartWith(t, i) {
    this.#t(I(t), i);
  }
  isEndWith(t, i) {
    this.#t(Z(t), i);
  }
  isNotEndWith(t, i) {
    this.#t($(t), i);
  }
  isContains(t = void 0, ...i) {
    this.#t(k(...i), t);
  }
  isNotContains(t = void 0, ...i) {
    this.#t(P(...i), t);
  }
  isEqual(t, i) {
    this.#t(T(t), i);
  }
  isNotEqual(t, i) {
    this.#t(x(t), i);
  }
  isNumber(t) {
    this.#t(u, t);
  }
  isNotNumber(t) {
    this.#t(F, t);
  }
  isString(t) {
    this.#t(w, t);
  }
  isNotString(t) {
    this.#t(q, t);
  }
  isBool(t) {
    this.#t(G, t);
  }
  isNotBool(t) {
    this.#t(H, t);
  }
  isBlank(t) {
    this.#t(V, t);
  }
  isNotBlank(t) {
    this.#t(j, t);
  }
  isEmpty(t) {
    this.#t(_, t);
  }
  isNotEmpty(t) {
    this.#t(D, t);
  }
  isIp(t) {
    this.#t(J, t);
  }
  isUrl(t) {
    this.#t(K, t);
  }
  isEmail(t) {
    this.#t(Q, t);
  }
  isLowerCase(t) {
    this.#t(X, t);
  }
  isUpperCase(t) {
    this.#t(Y, t);
  }
  isNumberString(t) {
    this.#t(v, t);
  }
  isIntString(t) {
    this.#t(tt, t);
  }
  isLowerNumber(t) {
    this.#t(st, t);
  }
  isUpperNumber(t) {
    this.#t(it, t);
  }
  isAlphaNumber(t) {
    this.#t(nt, t);
  }
  isAlphaNumberSpace(t) {
    this.#t(ot, t);
  }
  isFirstLower(t) {
    this.#t(et, t);
  }
  isFirstUpper(t) {
    this.#t(ht, t);
  }
}
const n = Object.freeze({}), ct = (s, t) => s;
class gt extends f {
  static FALSE = n;
  #t;
  #s = [];
  constructor(t, i = "", o = ct) {
    super(), this.defaultMessage = i, this.#t = o, t((r) => {
      const h = new rt();
      r(h), this.#s.push(h);
    });
  }
  check(t, i) {
    let o, r = "";
    const h = this.#s.some((a) => (o = t, a.ruleList.every(([p, N]) => (o = p(o, i), o === n ? (r = N + "", !1) : !0))));
    return new g(
      h,
      h ? o : t,
      h ? "" : this.#t(this.message(r), t)
    );
  }
}
export {
  gt as RuleValidator
};
