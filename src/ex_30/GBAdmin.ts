import { GreetingBlockBase } from "./GreetingBlockBase";

export class GBAdmin extends GreetingBlockBase {
    constructor(name:string) {   
        super(name, "admin-block", "Would you like to see the status reports?" );
    }
}