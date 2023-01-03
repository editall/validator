export class Result {
    readonly isOk:boolean;
    readonly value: any;
    readonly message:string;
    constructor(isOk:boolean = false, value:any = null, message:string = "") {
        this.isOk = isOk;
        this.value = value;
        this.message = message;
    }
}