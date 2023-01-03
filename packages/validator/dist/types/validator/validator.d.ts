import { Result } from "./result";
export declare class Validator {
    static set defaultMessage(message: string);
    protected defaultMessage: string;
    protected message(message: string): string;
    check(value: any, target?: any): Result;
}
