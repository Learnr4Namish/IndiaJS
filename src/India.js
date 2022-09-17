// Created by Namish Kumar (2022)
import { Button } from "./Button.js"
import { Text } from "./Text.js";
import { Heading } from "./Heading.js";
import { UnderlinedText } from "./TextStyle/UnderlinedText.js";
import { Alert } from "./Component/Alert.js";
export const India = {
     Widget: {
         Button: Button,
         Text: Text,
         Heading: Heading,
         TextStyle: {
             UnderlinedText: UnderlinedText,
             
         },

     },
     Body: {
         get: function get() {
             return document.body;
         }
     },
     
     Component: {
         Alert: Alert,
     },

     Handler: {
         onClicked: function onClicked(element, clickFunction) {
              element.onClick = function clicked() {
                 clickFunction();
              }
         },
    }
}

