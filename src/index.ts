import { GBUser } from "./ex_30/GBUser";
import { GBAdmin } from "./ex_30/GBAdmin";

  const content = document.querySelector<HTMLDivElement>("#content")!
  main();
  function main() {

    const hd1 = document.createElement('h1');
    hd1.append("Exercise 30 - Login Greetings")
    content?.append(hd1);
    let nameList:HTMLUListElement = document.createElement("ul");
    content?.append(nameList);
    let usernames:string[] = ["Admin", "Steve", "Tyler", "Lauren", "Rebecca", "Andrew", "Peter"];

    if (usernames.length == 0) {
      showNoUsersError(content);
    }
    usernames.forEach (
      (name) => {
        createGreetingBlock(name, content);
      } 
    )
  }
  function createGreetingBlock(name:string, content:HTMLDivElement) {
    let gb = null;
    if (name === "Admin") {
      gb = new GBAdmin("admin");
      
    } else {
      gb = new GBUser(name);
    }
    content.append(gb.getHtml());
  }

  function showNoUsersError(content:HTMLDivElement) {
    let errorDiv:HTMLDivElement = document.createElement("div");
    errorDiv.classList.add('error-div');
    let p:HTMLParagraphElement = document.createElement("p");
    p.textContent = "There are no users.";
    errorDiv.append(p);
    content.append(errorDiv);
  }