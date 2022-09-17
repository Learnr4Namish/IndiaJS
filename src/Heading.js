//Created by Namish Kumar in 2022
export class Heading {
     constructor(target) {
         this.target = target;
     }
     id;
     text;
     style;
     create() {
        const noStyle = this.style === undefined || this.style.length < 1 || this.style === "";
        if(noStyle) {
            this.style = `
              font-family: Arial, Helvetica, sans-serif;
            `;
        }
        const mainElement = document.createElement("h1");
        mainElement.id = this.id;
        mainElement.style = this.style;
        const textMain = document.createTextNode(this.text);
        mainElement.appendChild(textMain);
        this.target.appendChild(mainElement);
        return mainElement;
     }
}