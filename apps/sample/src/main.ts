import { RuleValidator } from "@edit-all/validator";

const vali1 = new RuleValidator(cases=>{
  cases(rules=>{
    rules.runTrim();
    rules.isIp("noip");
  });
});
const result = vali1.check(" 422.11.1.4  ");
console.log(result.isOk, result.value, result.message);