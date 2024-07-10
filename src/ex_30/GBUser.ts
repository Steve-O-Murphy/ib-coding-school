import { GreetingBlockBase } from "./GreetingBlockBase";

export class GBUser extends GreetingBlockBase {
    constructor(name:string) {   
        super(name, "user-block", "Thank you for logging in again!" );
    }
}