/**
 * Contains functionality common to both GBUser and GBAdmin classes.
 */
export class GreetingBlockBase {

    // name to print in the block
    #name: string;
    // css class to distinguish user from admin
    #cssClass: string;
    // message to display in the block
    #message: string;

    constructor( name: string, cssClass: string, message:string) {
        this.#name = name;
        this.#cssClass = cssClass;
        this.#message = message;
    }

    // Future use
    public getHtml():HTMLDivElement {
        return this.makeDiv();
    }

    // Creates and returns the div with the user name and greeting.
    private makeDiv():HTMLDivElement {
        // let adminBlock = new GreetingBlockAdmin(this.#name);
        let div:HTMLDivElement = document.createElement("div");
        div.classList.add(this.#cssClass);
        div.append(this.makeGreeting())
        let hr:HTMLHRElement = document.createElement("hr");
        div.append(hr);
        div.append( this.makeMessage());  
        return div;    
    }
    // Function called by makeDiv to avoid monolith code.
    private makeGreeting():HTMLParagraphElement {
        let p:HTMLParagraphElement = document.createElement("p");
        p.textContent= `Hello ${this.#name}!`
        return p;
    }

    // Function called by makeDiv to avoid monolith code.
    private makeMessage():HTMLParagraphElement {
        let pMessage:HTMLParagraphElement = document.createElement("p");
        pMessage.textContent = this.#message;
        return pMessage;
    }

}


