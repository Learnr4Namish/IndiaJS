// Created by Namish Kumar (2022)
export class Text {
    constructor(target) {
         this.target = target;
    }
    text;
    id;
    style;
    create() {
        const noStyle = this.style === undefined || this.style.length < 1 || this.style === "";
        if(noStyle) {
            this.style = `
              font-size: 20px;
              font-family: Arial, Helvetica, sans-serif;
            `;
        }
        const mainElement = document.createElement("p");
        mainElement.id = this.id;
        mainElement.style = this.style;
        const textMain = document.createTextNode(this.text);
        mainElement.appendChild(textMain);
        this.target.appendChild(mainElement);
        return mainElement;
    }
}