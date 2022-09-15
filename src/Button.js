// Created by Namish Kumar (2022)
export class Button {
     constructor(target){
        this.target = target;
     }
     text;
     style;
     id;
     onClick
     create() {
        if(this.style === undefined || this.style.length < 1 || this.style === "") {
             this.style = `
                padding: 15px;
                width: 12em;
                font-size:19px;
                border:none;
                background-color:#ff0077;
                color:white;
             `;
        }
        this.target.innerHTML = `<button id="${this.id}" style="${this.style}" onclick="function onClick(){
            ${this.onClick}
        }">${this.text}</button>`;
        return 0;
     }
}