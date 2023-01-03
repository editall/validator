class g {
  isOk;
  value;
  message;
  constructor(t = !1, i = null, o = "") {
    this.isOk = t, this.value = i, this.message = o;
  }
}
let c = "invalid";
const f = new g();
class m {
  static set defaultMessage(t) {
    c = t;
  }
  defaultMessage = "";
  message(t) {
    return (t || this.defaultMessage) ?? c;
  }
  check(t, i) {
    return f;
  }
}
const L = (s) => parseFloat("" + s), y = (s) => parseInt("" + s), E = (s) => Boolean(s), A = (s) => "" + s, b = (s) => typeof s == "string" ? s.trim() : n, R = (s) => {
  if (typeof s != "string")
    return n;
  const t = s.indexOf(`
`);
  return t === -1 ? s : s.substring(0, t);
}, l = (s) => (t) => "length" in t && t.length === s ? t : n, S = (s) => (t) => "length" in t && t.length >= s ? t : n, M = (s) => (t) => "length" in t && t.length <= s ? t : n, W = (s, t) => (i) => "length" in i && i.length >= s && i.length <= t ? i : n, U = (s, t) => (i) => "length" in i && i.length < s && i.length > t ? i : n, O = (s) => (t) => typeof t == "number" && t < s ? t : n, z = (s) => (t) => typeof t == "number" && t > s ? t : n, B = (s, t) => (i) => typeof i == "number" && i >= s && i <= t ? i : n, C = (s, t) => (i) => typeof i == "number" && i < s && i > t ? i : n, I = (s) => (t) => typeof t == "string" && t.startsWith(s) ? t : n, Z = (s) => (t) => typeof t == "string" && !t.startsWith(s) ? t : n, $ = (s) => (t) => typeof t == "string" && t.endsWith(s) ? t : n, k = (s) => (t) => typeof t == "string" && !t.endsWith(s) ? t : n, P = (...s) => (t) => s.indexOf(t) !== -1 ? t : n, T = (...s) => (t) => s.indexOf(t) === -1 ? t : n, x = (s) => (t) => t === s ? t : n, F = (s) => (t) => t !== s ? t : n, u = (s) => typeof s == "number" ? s : n, w = (s) => typeof s != "number" ? s : n, q = (s) => typeof s == "string" ? s : n, G = (s) => typeof s != "string" ? s : n, H = (s) => typeof s == "boolean" ? s : n, j = (s) => typeof s != "boolean" ? s : n, V = (s) => typeof s == "string" && !s.trim().length ? s : n, D = (s) => typeof s == "string" && s.trim().length ? s : n, J = (s) => typeof s == "string" && !s.length ? s : n, K = (s) => typeof s == "string" && s.length ? s : n, e = (s) => (t) => typeof t == "string" && s.test(t) ? t : n, Q = e(/^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)$/), X = e(/^https?:\/\/[a-zA-Z0-9.-]+(?:\.+[A-Za-z]{2,4})+(?::\d{2,4})?/), Y = e(/^[0-9a-zA-Z-_.]+@[0-9a-zA-Z-.]+(?:[.]+[A-Za-z]{2,4})+$/), _ = e(/^[a-z]+$/), v = e(/^[A-Z]+$/), tt = e(/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][-+]?\d+)?$/), st = e(/^-?(?:0|[1-9]\d*)$/), it = e(/^[a-z0-9]+$/), nt = e(/^[A-Z0-9]+$/), ot = e(/^[a-zA-Z0-9]+$/), et = e(/^[a-zA-Z0-9\s]+$/), ht = e(/^[a-z]/), rt = e(/^[A-Z]/);
class ct {
  ruleList = [];
  #t(t, i) {
    this.ruleList.push([t, i]);
  }
  rule(t, i) {
    this.#t(t, i);
  }
  asNumber(t) {
    this.#t(L, t);
  }
  asInt(t) {
    this.#t(y, t);
  }
  asBool(t) {
    this.#t(E, t);
  }
  asString(t) {
    this.#t(A, t);
  }
  runTrim(t) {
    this.#t(b, t);
  }
  runOneLine(t) {
    this.#t(R, t);
  }
  isLength(t, i) {
    this.#t(l(t), i);
  }
  isMinLength(t, i) {
    this.#t(S(t), i);
  }
  isMaxLength(t, i) {
    this.#t(M(t), i);
  }
  isRangeLength(t, i, o) {
    this.#t(W(t, i), o);
  }
  isNotRangeLength(t, i, o) {
    this.#t(U(t, i), o);
  }
  isLessThan(t, i) {
    this.#t(O(t), i);
  }
  isGreaterThan(t, i) {
    this.#t(z(t), i);
  }
  isRange(t, i, o) {
    this.#t(B(t, i), o);
  }
  isNotRange(t, i, o) {
    this.#t(C(t, i), o);
  }
  isStartWith(t, i) {
    this.#t(I(t), i);
  }
  isNotStartWith(t, i) {
    this.#t(Z(t), i);
  }
  isEndWith(t, i) {
    this.#t($(t), i);
  }
  isNotEndWith(t, i) {
    this.#t(k(t), i);
  }
  isContains(t = void 0, ...i) {
    this.#t(P(...i), t);
  }
  isNotContains(t = void 0, ...i) {
    this.#t(T(...i), t);
  }
  isEqual(t, i) {
    this.#t(x(t), i);
  }
  isNotEqual(t, i) {
    this.#t(F(t), i);
  }
  isNumber(t) {
    this.#t(u, t);
  }
  isNotNumber(t) {
    this.#t(w, t);
  }
  isString(t) {
    this.#t(q, t);
  }
  isNotString(t) {
    this.#t(G, t);
  }
  isBool(t) {
    this.#t(H, t);
  }
  isNotBool(t) {
    this.#t(j, t);
  }
  isBlank(t) {
    this.#t(V, t);
  }
  isNotBlank(t) {
    this.#t(D, t);
  }
  isEmpty(t) {
    this.#t(J, t);
  }
  isNotEmpty(t) {
    this.#t(K, t);
  }
  isIp(t) {
    this.#t(Q, t);
  }
  isUrl(t) {
    this.#t(X, t);
  }
  isEmail(t) {
    this.#t(Y, t);
  }
  isLowerCase(t) {
    this.#t(_, t);
  }
  isUpperCase(t) {
    this.#t(v, t);
  }
  isNumberString(t) {
    this.#t(tt, t);
  }
  isIntString(t) {
    this.#t(st, t);
  }
  isLowerNumber(t) {
    this.#t(it, t);
  }
  isUpperNumber(t) {
    this.#t(nt, t);
  }
  isAlphaNumber(t) {
    this.#t(ot, t);
  }
  isAlphaNumberSpace(t) {
    this.#t(et, t);
  }
  isFirstLower(t) {
    this.#t(ht, t);
  }
  isFirstUpper(t) {
    this.#t(rt, t);
  }
}
const n = Object.freeze({}), gt = (s, t) => s;
class a extends m {
  static FALSE = n;
  #t;
  #s = [];
  constructor(t, i = "", o = gt) {
    super(), this.defaultMessage = i, this.#t = o, t((r) => {
      const h = new ct();
      r(h), this.#s.push(h);
    });
  }
  check(t, i) {
    let o, r = "";
    const h = this.#s.some((p) => (o = t, p.ruleList.every(([N, d]) => (o = N(o, i), o === a.FALSE ? (r = d + "", !1) : !0))));
    return new g(
      h,
      o,
      h ? "" : this.#t(this.message(r), t)
    );
  }
}
export {
  a as RuleValidator
};
