import { India } from "./India.js";

export class Box {
    constructor(target) {
         this.target = target;
    }
    id;
    class;
    style;
    create() {
      const MainBox = document.createElement("div");
      MainBox.id = this.id;
      MainBox.style = this.style;
      MainBox.className = this.class;
      India.Body.get().appendChild(MainBox);
      return MainBox;   
    }
}