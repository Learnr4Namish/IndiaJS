// Created by Namish Kumar (2022)
import { Button } from "./Button.js"
import { Text } from "./Text.js";
import { Heading } from "./Heading.js";
import { Image } from "./Image.js";
import { UnderlinedText } from "./TextStyle/UnderlinedText.js";
import { Alert } from "./Component/Alert.js";
import { BoldText } from "./TextStyle/BoldText.js";
import { CenteredText } from "./TextStyle/CenteredText.js";
import { UnderlinedHeading } from "./HeadingStyle/UnderlinedHeading.js";
import { CenteredHeading } from "./HeadingStyle/CenteredHeading.js";
import { LinkHandler } from "./Component/LinkHandler.js";
export const India = {
     Widget: {
         Button: Button,
         Text: Text,
         Heading: Heading,
         Image: Image,
         TextStyle: {
             UnderlinedText: UnderlinedText,
             BoldText: BoldText,
             CenteredText: CenteredText,
         },
        HeadingStyle: {
            UnderlinedHeading: UnderlinedHeading,
            CenteredHeading: CenteredHeading,
        },
     },
     Body: {
         get: function get() {
             return document.body;
         }
     },
     
     Component: {
         Alert: Alert,
         LinkHandler: LinkHandler,
         
     },

     Handler: {
         onClicked: function onClicked(element, clickFunction) {
              element.onclick = function() {
                clickFunction()
              };
         },
    }
}

