import {Rule} from "./rule";
import { RuleValidator } from "./ruleValidator";

const FALSE = RuleValidator.FALSE;
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

export class Rules {
    ruleList: [Rule, string|undefined][] = [];
    #add(rule:Rule, message?:string){this.ruleList.push([rule, message]);}
    rule(rule:Rule, message?:string){this.#add(rule, message);}
    asNumber(message?:string){this.#add(asNumber, message);}
    asInt(message?:string){this.#add(asInt, message);}
    asBool(message?:string){this.#add(asBool, message);}
    asString(message?:string){this.#add(asString, message);}
    runTrim(message?:string){this.#add(runTrim, message);}
    runOneLine(message?:string){this.#add(runOneLine, message);}
    isLength(length:number, message?:string){this.#add(isLength(length), message);}
    isMinLength(length: number, message?:string){this.#add(isMinLength(length), message);}
    isMaxLength(length: number, message?:string){this.#add(isMaxLength(length), message);}
    isRangeLength(min: number, max: number, message?:string){this.#add(isRangeLength(min, max), message);}
    isNotRangeLength(min: number, max: number, message?:string){this.#add(isNotRangeLength(min, max), message);}
    isLessThan(base: number, message?:string){this.#add(isLessThan(base), message);}
    isGreaterThan(base: number, message?:string){this.#add(isGreaterThan(base), message);}
    isRange(min: number, max: number, message?:string){this.#add(isRange(min, max), message);}
    isNotRange(min: number, max: number, message?:string){this.#add(isNotRange(min, max), message);}
    isStartWith(v: string, message?:string){this.#add(isStartWith(v), message);}
    isNotStartWith(v: string, message?:string){this.#add(isNotStartWith(v), message);}
    isEndWith(v: string, message?:string){this.#add(isEndWith(v), message);}
    isNotEndWith(v: string, message?:string){this.#add(isNotEndWith(v), message);}
    isContains(message:string|undefined = undefined, ...goals: any[]){this.#add(isContains(...goals), message);}
    isNotContains(message:string|undefined = undefined, ...goals: any[]){this.#add(isNotContains(...goals), message);}
    isEqual(goal: any, message?:string){this.#add(isEqual(goal), message);}
    isNotEqual(goal: any, message?:string){this.#add(isNotEqual(goal), message);}
    isNumber(message?:string){this.#add(isNumber, message);}
    isNotNumber(message?:string){this.#add(isNotNumber, message);}
    isString(message?:string){this.#add(isString, message);}
    isNotString(message?:string){this.#add(isNotString, message);}
    isBool(message?:string){this.#add(isBool, message);}
    isNotBool(message?:string){this.#add(isNotBool, message);}
    isBlank(message?:string){this.#add(isBlank, message);}
    isNotBlank(message?:string){this.#add(isNotBlank, message);}
    isEmpty(message?:string){this.#add(isEmpty, message);}
    isNotEmpty(message?:string){this.#add(isNotEmpty, message);}
    isIp(message?:string){this.#add(IP, message);}
    isUrl(message?:string){this.#add(URL, message);}
    isEmail(message?:string){this.#add(EMAIL, message);}
    isLowerCase(message?:string){this.#add(LOWER, message);}
    isUpperCase(message?:string){this.#add(UPPER, message);}
    isNumberString(message?:string){this.#add(NUM, message);}
    isIntString(message?:string){this.#add(INTNUM, message);}
    isLowerNumber(message?:string){this.#add(LOWNUM, message);}
    isUpperNumber(message?:string){this.#add(UPNUM, message);}
    isAlphaNumber(message?:string){this.#add(ALPHANUM, message);}
    isAlphaNumberSpace(message?:string){this.#add(ALPHANUMSPACE, message);}
    isFirstLower(message?:string){this.#add(FIRSTLOW, message);}
    isFirstUpper(message?:string){this.#add(FIRSTUP, message);}
}