export class WidgetStyler {
    constructor(widget) {
        this.widget = widget;
    }
    // Sets the background color of the element
    setBackgroundColor(color) {
         if(color === undefined || color === null || color === "") {
             return console.error("IndiaJS Fatal error: Expected a valid color name to style your widget!");
         }
         this.widget.style.backgroundColor = color;
    }
}