import { Result } from "../validator/result";
import { Validator } from "../validator/validator";
import { Rules } from "./rules";

export const FALSE = Object.freeze({});
const REPLACER: (message: string, value: any) => string = (message, value) => message;

export class RuleValidator extends Validator {
    static FALSE = FALSE;

    readonly #messageReplacer: (a: string, b: any) => string;
    readonly #ruleCases: Rules[] = [];
    constructor(
      block: (cases: (block: (rules: Rules) => void) => void) => void,
      defaultMessage = "",
      messageReplacer = REPLACER
    ) {
        super();
        this.defaultMessage = defaultMessage;
        this.#messageReplacer = messageReplacer;
        block((block:(rules:Rules)=>void)=>{
            const ruleCase = new Rules();
            block(ruleCase);
            this.#ruleCases.push(ruleCase);
        });
    }
    override check(value: any, target?: any): Result {
        let result:any;
        let msg = "";
        const isOk = this.#ruleCases.some((ruleCase)=> {
            result = value;
            return ruleCase.ruleList.every(([rule, message]) => {
                result = rule(result, target);
                if (result === FALSE) {
                    msg = message + "";
                    return false;
                } else return true;
            });
        });
        return new Result(
          isOk,
          isOk ? result : value,
          !isOk ? this.#messageReplacer(this.message(msg), value) : ""
        );
    }
}