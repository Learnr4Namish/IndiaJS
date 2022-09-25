// Created by Namish Kumar (2022)
export class RoundedButton {
    constructor(target){
       this.target = target;
    }
    text;
    style;
    id;
    create() {
       if(this.style === undefined || this.style.length < 1 || this.style === "") {
            this.style = `
            border-radius:360px;
               padding: 15px;
               width: 12em;
               font-size:19px;
               border:none;
               background-color:#ff0077;
               color:white;
            `;
       }
       const mainElement = document.createElement("button");
       mainElement.id = this.id;
       mainElement.style = this.style;
       const textMain = document.createTextNode(this.text);
       mainElement.appendChild(textMain);
       this.target.appendChild(mainElement);
       mainElement.style.transition = "0.3s";
       return mainElement;
    }
}