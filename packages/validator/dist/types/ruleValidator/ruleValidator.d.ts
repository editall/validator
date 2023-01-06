import { Result } from "../validator/result";
import { Validator } from "../validator/validator";
import { REPLACER, Rules } from "./rules";
export declare const FALSE: Readonly<{}>;
export declare class RuleValidator extends Validator {
    #private;
    static FALSE: Readonly<{}>;
    constructor(block: (cases: (block: (rules: Rules) => void) => void) => void, defaultMessage?: string, messageReplacer?: REPLACER);
    get validator(): (v: any) => boolean;
    check(value: any, target?: any): Result;
}
