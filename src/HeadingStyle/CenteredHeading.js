//Created by Namish Kumar in 2022
export class CenteredHeading{
    constructor(target) {
       this.target = target
    }
    id;
    text;
    create() {
      const noStyle = this.style === undefined || this.style.length < 1 || this.style === "";
      if(noStyle) {
          this.style = `
          text-align:center;
            font-family: Arial, Helvetica, sans-serif;
          `;
      }
      const mainElement = document.createElement("h1");
      mainElement.id = this.id;
      mainElement.style = this.style;
      const textToDoSo = `${this.text}`;
      mainElement.innerHTML = textToDoSo;
      this.target.appendChild(mainElement);
      return mainElement;
    }
}