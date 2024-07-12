import { GreetingBlockBase } from "./GreetingBlockBase";

/**
 * Inherits from GreetingBlockBase. Requires only the user name. The css class and message are known to GBUser class so the caller does not have to pass them.
 */

export class GBUser extends GreetingBlockBase {
    constructor(name:string) {   
        super(name, "user-block", "Thank you for logging in again!" );
    }
}