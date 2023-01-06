class a {
  isOk;
  value;
  message;
  constructor(t = !1, s = null, n = "") {
    this.isOk = t, this.value = s, this.message = n;
  }
}
let g = "invalid";
const m = new a();
class L {
  static set defaultMessage(t) {
    g = t;
  }
  defaultMessage = "";
  message(t) {
    return (t || this.defaultMessage) ?? g;
  }
  check(t, s) {
    return m;
  }
}
const l = (i) => parseFloat("" + i), y = (i) => parseInt("" + i), b = (i) => Boolean(i), A = (i) => "" + i, E = (i) => typeof i == "string" ? i.trim() : e, R = (i) => {
  if (typeof i != "string")
    return e;
  const t = i.indexOf(`
`);
  return t === -1 ? i : i.substring(0, t);
}, S = (i) => (t) => "length" in t && t.length === i ? t : e, M = (i) => (t) => "length" in t && t.length >= i ? t : e, W = (i) => (t) => "length" in t && t.length <= i ? t : e, U = (i, t) => (s) => "length" in s && s.length >= i && s.length <= t ? s : e, O = (i, t) => (s) => "length" in s && s.length < i && s.length > t ? s : e, k = (i) => (t) => typeof t == "number" && t < i ? t : e, z = (i) => (t) => typeof t == "number" && t > i ? t : e, B = (i, t) => (s) => typeof s == "number" && s >= i && s <= t ? s : e, I = (i, t) => (s) => typeof s == "number" && s < i && s > t ? s : e, Z = (i) => (t) => typeof t == "string" && t.startsWith(i) ? t : e, $ = (i) => (t) => typeof t == "string" && !t.startsWith(i) ? t : e, u = (i) => (t) => typeof t == "string" && t.endsWith(i) ? t : e, C = (i) => (t) => typeof t == "string" && !t.endsWith(i) ? t : e, T = (...i) => (t) => i.indexOf(t) !== -1 ? t : e, x = (...i) => (t) => i.indexOf(t) === -1 ? t : e, P = (i) => (t) => t === i ? t : e, F = (i) => (t) => t !== i ? t : e, w = (i) => typeof i == "number" ? i : e, q = (i) => typeof i != "number" ? i : e, G = (i) => typeof i == "string" ? i : e, H = (i) => typeof i != "string" ? i : e, V = (i) => typeof i == "boolean" ? i : e, j = (i) => typeof i != "boolean" ? i : e, _ = (i) => typeof i == "string" && !i.trim().length ? i : e, D = (i) => typeof i == "string" && i.trim().length ? i : e, J = (i) => typeof i == "string" && !i.length ? i : e, K = (i) => typeof i == "string" && i.length ? i : e, o = (i) => (t) => typeof t == "string" && i.test(t) ? t : e, Q = o(/^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)$/), X = o(/^https?:\/\/[a-zA-Z0-9.-]+(?:\.+[A-Za-z]{2,4})+(?::\d{2,4})?/), Y = o(/^[0-9a-zA-Z-_.]+@[0-9a-zA-Z-.]+(?:[.]+[A-Za-z]{2,4})+$/), v = o(/^[a-z]+$/), tt = o(/^[A-Z]+$/), st = o(/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][-+]?\d+)?$/), it = o(/^-?(?:0|[1-9]\d*)$/), nt = o(/^[a-z0-9]+$/), et = o(/^[A-Z0-9]+$/), ot = o(/^[a-zA-Z0-9]+$/), rt = o(/^[a-zA-Z0-9\s]+$/), ht = o(/^[a-z]/), ct = o(/^[A-Z]/);
class gt {
  ruleList = [];
  #t(t, s, n) {
    this.ruleList.push([t, s, n]);
  }
  rule(t, s, n) {
    this.#t(t, s, n);
  }
  asNumber(t) {
    this.#t(l, t);
  }
  asInt(t) {
    this.#t(y, t);
  }
  asBool(t) {
    this.#t(b, t);
  }
  asString(t) {
    this.#t(A, t);
  }
  runTrim(t) {
    this.#t(E, t);
  }
  runOneLine(t) {
    this.#t(R, t);
  }
  isLength(t, s, n) {
    this.#t(S(t), s, n);
  }
  isMinLength(t, s, n) {
    this.#t(M(t), s, n);
  }
  isMaxLength(t, s, n) {
    this.#t(W(t), s, n);
  }
  isRangeLength(t, s, n, r) {
    this.#t(U(t, s), n, r);
  }
  isNotRangeLength(t, s, n, r) {
    this.#t(O(t, s), n, r);
  }
  isLessThan(t, s, n) {
    this.#t(k(t), s, n);
  }
  isGreaterThan(t, s, n) {
    this.#t(z(t), s, n);
  }
  isRange(t, s, n, r) {
    this.#t(B(t, s), n, r);
  }
  isNotRange(t, s, n, r) {
    this.#t(I(t, s), n, r);
  }
  isStartWith(t, s, n) {
    this.#t(Z(t), s, n);
  }
  isNotStartWith(t, s, n) {
    this.#t($(t), s, n);
  }
  isEndWith(t, s, n) {
    this.#t(u(t), s, n);
  }
  isNotEndWith(t, s, n) {
    this.#t(C(t), s, n);
  }
  isContains(t = void 0, ...s) {
    this.#t(T(...s), t);
  }
  isNotContains(t = void 0, ...s) {
    this.#t(x(...s), t);
  }
  isEqual(t, s, n) {
    this.#t(P(t), s, n);
  }
  isNotEqual(t, s, n) {
    this.#t(F(t), s, n);
  }
  isNumber(t, s) {
    this.#t(w, t, s);
  }
  isNotNumber(t, s) {
    this.#t(q, t, s);
  }
  isString(t, s) {
    this.#t(G, t, s);
  }
  isNotString(t, s) {
    this.#t(H, t, s);
  }
  isBool(t, s) {
    this.#t(V, t, s);
  }
  isNotBool(t, s) {
    this.#t(j, t, s);
  }
  isBlank(t, s) {
    this.#t(_, t, s);
  }
  isNotBlank(t, s) {
    this.#t(D, t, s);
  }
  isEmpty(t, s) {
    this.#t(J, t, s);
  }
  isNotEmpty(t, s) {
    this.#t(K, t, s);
  }
  isIp(t, s) {
    this.#t(Q, t, s);
  }
  isUrl(t, s) {
    this.#t(X, t, s);
  }
  isEmail(t, s) {
    this.#t(Y, t, s);
  }
  isLowerCase(t, s) {
    this.#t(v, t, s);
  }
  isUpperCase(t, s) {
    this.#t(tt, t, s);
  }
  isNumberString(t, s) {
    this.#t(st, t, s);
  }
  isIntString(t, s) {
    this.#t(it, t, s);
  }
  isLowerNumber(t, s) {
    this.#t(nt, t, s);
  }
  isUpperNumber(t, s) {
    this.#t(et, t, s);
  }
  isAlphaNumber(t, s) {
    this.#t(ot, t, s);
  }
  isAlphaNumberSpace(t, s) {
    this.#t(rt, t, s);
  }
  isFirstLower(t, s) {
    this.#t(ht, t, s);
  }
  isFirstUpper(t, s) {
    this.#t(ct, t, s);
  }
}
const e = Object.freeze({}), at = (i, t) => i;
class pt extends L {
  static FALSE = e;
  #t;
  #s;
  #i = [];
  constructor(t, s = "", n = at) {
    super(), this.defaultMessage = s, this.#s = n, t((r) => {
      const h = new gt();
      r(h), this.#i.push(h);
    });
  }
  get validator() {
    return this.#t || (this.#t = (t) => this.check(t).isOk), this.#t;
  }
  check(t, s) {
    let n, r = "", h;
    const c = this.#i.some((p) => (n = t, p.ruleList.every(([d, N, f]) => (h = f, n = d(n, s), n === e ? (r = N + "", !1) : !0))));
    return new a(
      c,
      c ? n : t,
      c ? "" : (h ?? this.#s)(this.message(r), t)
    );
  }
}
export {
  pt as RuleValidator
};
