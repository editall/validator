import { RuleValidator } from "validator";

const vali1 = new RuleValidator(cases=>{
  cases(rules=>{
    rules.trim();
    rules.ip("noip");
  });
});
const result = vali1.check(" 422.11.1.4  ");
console.log(result.isOk, result.value, result.message);