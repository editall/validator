class a {
  isOk;
  value;
  message;
  constructor(t = !1, e = null, r = "") {
    this.isOk = t, this.value = e, this.message = r;
  }
}
let c = "invalid";
const d = new a();
class g {
  static set defaultMessage(t) {
    c = t;
  }
  defaultMessage = "";
  message(t) {
    return (t || this.defaultMessage) ?? c;
  }
  check(t, e) {
    return d;
  }
}
const f = (s) => parseFloat("" + s), p = (s) => parseInt("" + s), m = (s) => Boolean(s), A = (s) => "" + s, L = (s) => typeof s == "number" ? s : i.FALSE, S = (s) => typeof s == "string" ? s : i.FALSE, E = (s) => typeof s == "boolean" ? s : i.FALSE, F = /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)$/, y = (s) => typeof s == "string" && F.test(s) ? s : i.FALSE, R = /^https?:\/\/[a-zA-Z0-9.-]+(?:\.+[A-Za-z]{2,4})+(?::\d{2,4})?/, b = (s) => typeof s == "string" && R.test(s) ? s : i.FALSE, M = /^[0-9a-zA-Z-_.]+@[0-9a-zA-Z-.]+(?:[.]+[A-Za-z]{2,4})+$/, z = (s) => typeof s == "string" && M.test(s) ? s : i.FALSE, I = (s) => typeof s == "string" ? s.trim() : i.FALSE;
class k {
  ruleList = [];
  #t(t, e) {
    this.ruleList.push([t, e]);
  }
  rule(t, e) {
    this.#t(t, e);
  }
  convertNumber(t) {
    this.#t(f, t);
  }
  convertInt(t) {
    this.#t(p, t);
  }
  convertBool(t) {
    this.#t(m, t);
  }
  convertString(t) {
    this.#t(A, t);
  }
  isNumber(t) {
    this.#t(L, t);
  }
  isBool(t) {
    this.#t(E, t);
  }
  isString(t) {
    this.#t(S, t);
  }
  ip(t) {
    this.#t(y, t);
  }
  url(t) {
    this.#t(b, t);
  }
  email(t) {
    this.#t(z, t);
  }
  trim(t) {
    this.#t(I, t);
  }
}
const B = (s, t) => s;
class i extends g {
  static FALSE = Object.freeze({});
  #t;
  #s = [];
  constructor(t, e = "", r = B) {
    super(), this.defaultMessage = e, this.#t = r, t((n) => {
      const o = new k();
      n(o), this.#s.push(o);
    });
  }
  check(t, e) {
    let r, n = "";
    const o = this.#s.some((l) => (r = t, l.ruleList.every(([u, h]) => (r = u(r, e), r === i.FALSE ? (n = h + "", !1) : !0))));
    return new a(
      o,
      r,
      o ? "" : this.#t(this.message(n), t)
    );
  }
}
export {
  i as RuleValidator
};
