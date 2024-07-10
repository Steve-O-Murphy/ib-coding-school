export class GreetingBlockUser {
    
    #name: string;
    #cssClass: string;
    #message: string;
    
    constructor( name: string) {
        this.#name = name;
        this.#cssClass = 'user-block';
        this.#message = "Thank you for logging in again!";
    }

    public getName () {
        return this.#name;
    }

    public getCssClass () {
        return this.#cssClass;
    }

    public getMessage () {
        return this.#message;
    }

    public getHtml():HTMLDivElement {
        return this.makeDiv();
    }

    private makeDiv():HTMLDivElement {
        let userBlock = new GreetingBlockUser(this.#name);
        // create div class="user-block"
        let div:HTMLDivElement = document.createElement("div");
        div.classList.add(userBlock.getCssClass());
        div.append(this.makeGreeting())
        let hr:HTMLHRElement = document.createElement("hr");
        div.append(hr);
        div.append( this.makeMessage());  
        return div;    
    }

    private makeGreeting():HTMLParagraphElement {
        let p:HTMLParagraphElement = document.createElement("p");
        p.textContent= `Hello ${this.#name}`
        return p;
    }

    private makeMessage():HTMLParagraphElement {
        let pMessage:HTMLParagraphElement = document.createElement("p");
        pMessage.textContent = this.#message;
        return pMessage;
    }
}