import { GreetingBlockBase } from "./GreetingBlockBase";

/**
 * Inherits from GreetingBlockBase. Requires only the user name. The css class and message are known to GBAdmin so the caller does not have to pass them.
 */
export class GBAdmin extends GreetingBlockBase {
    constructor(name:string) {   
        super(name, "admin-block", "Would you like to see the status reports?" );
    }
}