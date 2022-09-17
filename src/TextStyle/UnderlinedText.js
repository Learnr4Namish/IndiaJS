//Created by Namish Kumar in 2022

export class UnderlinedText{
      constructor(target) {
         this.target = target
      }
      id;
      text;
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
        const textToDoSo = `<u>${this.text}</u>`;
        mainElement.innerHTML = textToDoSo;
        this.target.appendChild(mainElement);
        return mainElement;
      }
}