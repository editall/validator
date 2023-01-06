import {Rule} from "./rule";
import { FALSE, RuleValidator } from "./ruleValidator";

const asNumber:Rule = value => parseFloat("" + value);
const asInt:Rule = value => parseInt("" + value);
const asBool:Rule = value => Boolean(value);
const asString:Rule = value => "" + value;
const runTrim:Rule = value=>typeof value === "string" ? value.trim() : FALSE;
const runOneLine:Rule = value=>{
    if(typeof value !== "string") return FALSE;
    const idx = value.indexOf("\n");
    return idx === -1 ? value : value.substring(0, idx);
};
const isLength: (length: number) => Rule = (length:number):Rule=>(value:any):any=>"length" in value && value.length === length ? value : FALSE;
const isMinLength: (length: number) => Rule = (length:number):Rule=>(value:any):any=>"length" in value && value.length >= length ? value : FALSE;
const isMaxLength: (length: number) => Rule = (length:number):Rule=>(value:any):any=>"length" in value && value.length <= length ? value : FALSE;
const isRangeLength: (min: number, max: number) => Rule = (min:number, max:number):Rule=>(value:any):any=>"length" in value && value.length >= min && value.length <= max ? value : FALSE;
const isNotRangeLength: (min: number, max: number) => Rule = (min:number, max:number):Rule=>(value:any):any=>"length" in value && value.length < min && value.length > max ? value : FALSE;
const isLessThan: (base: number) => Rule = (base:number):Rule=>(value:any):any=>typeof value === "number" && value < base ? value : FALSE;
const isGreaterThan: (base: number) => Rule = (base:number):Rule=>(value:any):any=>typeof value === "number" && value > base ? value : FALSE;
const isRange: (min: number, max: number) => Rule = (min:number, max:number):Rule=>(value:any):any=>typeof value === "number" && value >= min && value <= max ? value : FALSE;
const isNotRange: (min: number, max: number) => Rule = (min:number, max:number):Rule=>(value:any):any=>typeof value === "number" && value < min && value > max ? value : FALSE;
const isStartWith: (v: string) => Rule = (v:string):Rule=>(value:any):any=>typeof value === "string" && value.startsWith(v) ? value : FALSE;
const isNotStartWith: (v: string) => Rule = (v:string):Rule=>(value:any):any=>typeof value === "string" && !value.startsWith(v) ? value : FALSE;
const isEndWith: (v: string) => Rule = (v:string):Rule=>(value:any):any=>typeof value === "string" && value.endsWith(v) ? value : FALSE;
const isNotEndWith: (v: string) => Rule = (v:string):Rule=>(value:any):any=>typeof value === "string" && !value.endsWith(v) ? value : FALSE;
const isContains: (...goals: any[]) => Rule = (...goals:any[]):Rule=>(value:any):any=>goals.indexOf(value) !== -1 ? value : FALSE;
const isNotContains: (...goals: any[]) => Rule = (...goals:any[]):Rule=>(value:any):any=>goals.indexOf(value) === -1 ? value : FALSE;
const isEqual: (goal: any) => Rule = (goal:any):Rule=>(value:any):any=>value === goal ? value :FALSE;
const isNotEqual: (goal: any) => Rule = (goal:any):Rule=>(value:any):any=>value !== goal ? value :FALSE;
const isNumber:Rule = value => typeof value === "number" ? value : FALSE;
const isNotNumber:Rule = value => typeof value !== "number" ? value : FALSE;
const isString:Rule = value => typeof value === "string" ? value : FALSE;
const isNotString:Rule = value => typeof value !== "string" ? value : FALSE;
const isBool:Rule = value => typeof value === "boolean" ? value : FALSE;
const isNotBool:Rule = value => typeof value !== "boolean" ? value : FALSE;
const isBlank:Rule = value=>typeof value === "string" && !value.trim().length ? value : FALSE;
const isNotBlank:Rule = value=>typeof value === "string" && value.trim().length ? value : FALSE;
const isEmpty:Rule = value=>typeof value === "string" && !value.length ? value : FALSE;
const isNotEmpty:Rule = value=>typeof value === "string" && value.length ? value : FALSE;
const regRule: (r: RegExp) => Rule = (r:RegExp):Rule=>(value:any):any=>typeof value === "string" && r.test(value) ? value : FALSE;
const IP: Rule = regRule(/^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)$/);
const URL: Rule = regRule(/^https?:\/\/[a-zA-Z0-9.-]+(?:\.+[A-Za-z]{2,4})+(?::\d{2,4})?/);
const EMAIL: Rule = regRule(/^[0-9a-zA-Z-_.]+@[0-9a-zA-Z-.]+(?:[.]+[A-Za-z]{2,4})+$/);
const LOWER: Rule = regRule(/^[a-z]+$/);
const UPPER: Rule = regRule(/^[A-Z]+$/);
const NUM: Rule = regRule(/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][-+]?\d+)?$/);
const INTNUM = regRule(/^-?(?:0|[1-9]\d*)$/);
const LOWNUM = regRule(/^[a-z0-9]+$/);
const UPNUM = regRule(/^[A-Z0-9]+$/);
const ALPHANUM = regRule(/^[a-zA-Z0-9]+$/);
const ALPHANUMSPACE = regRule(/^[a-zA-Z0-9\s]+$/);
const FIRSTLOW = regRule(/^[a-z]/);
const FIRSTUP = regRule(/^[A-Z]/);

export type REPLACER = (message: string, value: any) => string;
export class Rules {
    ruleList: [Rule, string|undefined, REPLACER|undefined][] = [];
    #add(rule:Rule, message?:string, replacer?:REPLACER){this.ruleList.push([rule, message, replacer]);}
    rule(rule:Rule, message?:string, replacer?:REPLACER){this.#add(rule, message, replacer);}
    asNumber(message?:string){this.#add(asNumber, message);}
    asInt(message?:string){this.#add(asInt, message);}
    asBool(message?:string){this.#add(asBool, message);}
    asString(message?:string){this.#add(asString, message);}
    runTrim(message?:string){this.#add(runTrim, message);}
    runOneLine(message?:string){this.#add(runOneLine, message);}
    isLength(length:number, message?:string, replacer?:REPLACER){this.#add(isLength(length), message, replacer);}
    isMinLength(length: number, message?:string, replacer?:REPLACER){this.#add(isMinLength(length), message, replacer);}
    isMaxLength(length: number, message?:string, replacer?:REPLACER){this.#add(isMaxLength(length), message, replacer);}
    isRangeLength(min: number, max: number, message?:string, replacer?:REPLACER){this.#add(isRangeLength(min, max), message, replacer);}
    isNotRangeLength(min: number, max: number, message?:string, replacer?:REPLACER){this.#add(isNotRangeLength(min, max), message, replacer);}
    isLessThan(base: number, message?:string, replacer?:REPLACER){this.#add(isLessThan(base), message, replacer);}
    isGreaterThan(base: number, message?:string, replacer?:REPLACER){this.#add(isGreaterThan(base), message, replacer);}
    isRange(min: number, max: number, message?:string, replacer?:REPLACER){this.#add(isRange(min, max), message, replacer);}
    isNotRange(min: number, max: number, message?:string, replacer?:REPLACER){this.#add(isNotRange(min, max), message, replacer);}
    isStartWith(v: string, message?:string, replacer?:REPLACER){this.#add(isStartWith(v), message, replacer);}
    isNotStartWith(v: string, message?:string, replacer?:REPLACER){this.#add(isNotStartWith(v), message, replacer);}
    isEndWith(v: string, message?:string, replacer?:REPLACER){this.#add(isEndWith(v), message, replacer);}
    isNotEndWith(v: string, message?:string, replacer?:REPLACER){this.#add(isNotEndWith(v), message, replacer);}
    isContains(message:string|undefined = undefined, ...goals: any[]){this.#add(isContains(...goals), message);}
    isNotContains(message:string|undefined = undefined, ...goals: any[]){this.#add(isNotContains(...goals), message);}
    isEqual(goal: any, message?:string, replacer?:REPLACER){this.#add(isEqual(goal), message, replacer);}
    isNotEqual(goal: any, message?:string, replacer?:REPLACER){this.#add(isNotEqual(goal), message, replacer);}
    isNumber(message?:string, replacer?:REPLACER){this.#add(isNumber, message, replacer);}
    isNotNumber(message?:string, replacer?:REPLACER){this.#add(isNotNumber, message, replacer);}
    isString(message?:string, replacer?:REPLACER){this.#add(isString, message, replacer);}
    isNotString(message?:string, replacer?:REPLACER){this.#add(isNotString, message, replacer);}
    isBool(message?:string, replacer?:REPLACER){this.#add(isBool, message, replacer);}
    isNotBool(message?:string, replacer?:REPLACER){this.#add(isNotBool, message, replacer);}
    isBlank(message?:string, replacer?:REPLACER){this.#add(isBlank, message, replacer);}
    isNotBlank(message?:string, replacer?:REPLACER){this.#add(isNotBlank, message, replacer);}
    isEmpty(message?:string, replacer?:REPLACER){this.#add(isEmpty, message, replacer);}
    isNotEmpty(message?:string, replacer?:REPLACER){this.#add(isNotEmpty, message, replacer);}
    isIp(message?:string, replacer?:REPLACER){this.#add(IP, message, replacer);}
    isUrl(message?:string, replacer?:REPLACER){this.#add(URL, message, replacer);}
    isEmail(message?:string, replacer?:REPLACER){this.#add(EMAIL, message, replacer);}
    isLowerCase(message?:string, replacer?:REPLACER){this.#add(LOWER, message, replacer);}
    isUpperCase(message?:string, replacer?:REPLACER){this.#add(UPPER, message, replacer);}
    isNumberString(message?:string, replacer?:REPLACER){this.#add(NUM, message, replacer);}
    isIntString(message?:string, replacer?:REPLACER){this.#add(INTNUM, message, replacer);}
    isLowerNumber(message?:string, replacer?:REPLACER){this.#add(LOWNUM, message, replacer);}
    isUpperNumber(message?:string, replacer?:REPLACER){this.#add(UPNUM, message, replacer);}
    isAlphaNumber(message?:string, replacer?:REPLACER){this.#add(ALPHANUM, message, replacer);}
    isAlphaNumberSpace(message?:string, replacer?:REPLACER){this.#add(ALPHANUMSPACE, message, replacer);}
    isFirstLower(message?:string, replacer?:REPLACER){this.#add(FIRSTLOW, message, replacer);}
    isFirstUpper(message?:string, replacer?:REPLACER){this.#add(FIRSTUP, message, replacer);}
}