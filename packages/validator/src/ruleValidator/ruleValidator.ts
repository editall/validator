import { Result } from "../validator/result";
import { Validator } from "../validator/validator";
import { REPLACER, Rules } from "./rules";

export const FALSE = Object.freeze({});
const defaultReplacer:REPLACER = (message, value) => message;

export class RuleValidator extends Validator {
    static FALSE = FALSE;

    #validator:((v:any)=>boolean)|undefined;
    readonly #messageReplacer:REPLACER;
    readonly #ruleCases: Rules[] = [];
    constructor(
      block: (cases: (block: (rules: Rules) => void) => void) => void,
      defaultMessage = "",
      messageReplacer = defaultReplacer
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
    get validator():(v:any)=>boolean{
        if(!this.#validator) this.#validator = v=>this.check(v).isOk;
        return this.#validator;
    }
    override check(value: any, target?: any): Result {
        let result:any;
        let msg = "";
        let replacer:REPLACER|undefined;
        const isOk = this.#ruleCases.some((ruleCase)=> {
            result = value;
            return ruleCase.ruleList.every(([rule, message, repl]) => {
                replacer = repl;
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
          !isOk ? (replacer ?? this.#messageReplacer)(this.message(msg), value) : ""
        );
    }
}