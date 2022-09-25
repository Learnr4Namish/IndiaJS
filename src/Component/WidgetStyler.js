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

    setMargin(margin, unit) {
        if(margin === undefined || margin === null || margin === "") {
            return console.error("IndiaJS Fatal error: Expected a valid margin number to style your widget!");
        }
        this.widget.style.margin = String(margin) + unit;
    }
    
    setPadding(padding, unit) {
        if(padding === undefined || padding === null || padding === "") {
            return console.error("IndiaJS Fatal error: Expected a valid padding number to style your widget!");
        }
        this.widget.style.padding = String(padding) + unit;
    }
    
    setTextColor(color) {
        if(color === undefined || color === null || color === "") {
            return console.error("IndiaJS Fatal error: Expected a valid color name to style your widget!");
        }
        this.widget.style.color = color;
    }
}