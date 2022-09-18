export class BoldText {
     constructor(target) {
         this.target = target;
     }
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
        const textToDoSo = `<b>${this.text}</b>`;
        mainElement.innerHTML = textToDoSo;
        this.target.appendChild(mainElement);
        return mainElement;
     }
}