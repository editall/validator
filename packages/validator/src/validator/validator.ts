import { Result } from "./result";

let defaultMessage = "invalid";
const defaultResult = new Result();

export class Validator{
    static set defaultMessage(message:string){
        defaultMessage = message;
    }
    protected defaultMessage:string = ""
    protected message(message:string):string{
        return (message || this.defaultMessage) ?? defaultMessage;
    }
    check(value:any, target?:any):Result{
        return defaultResult;
    }
}