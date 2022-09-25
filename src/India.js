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
import { PageHandler } from "./Component/PageHandler.js";
import { RoundedButton } from "./ButtonStyle/RoundedButton.js";
import { DefaultColor } from "./Colors/DefaultColor.js";
import { Black } from "./Colors/Black.js";
import { WidgetStyler } from "./Component/WidgetStyler.js";
import { White } from "./Colors/White.js";
import { Box } from "./Box.js";
export const India = {
    Colors: {
      DefaultColor: DefaultColor,
      Black: Black,
      White: White,
    },
     Widget: {
         Button: Button,
         Text: Text,
         Heading: Heading,
         Image: Image,
         Box: Box,
         TextStyle: {
             UnderlinedText: UnderlinedText,
             BoldText: BoldText,
             CenteredText: CenteredText,
         },
        HeadingStyle: {
            UnderlinedHeading: UnderlinedHeading,
            CenteredHeading: CenteredHeading,
        },
        ButtonStyle: {
            RoundedButton: RoundedButton,
        }
     },
     Body: {
         get: function get() {
             return document.body;
         }
     },

     Head: {
        get: function get() {
            return document.head;
        }
     },
     
     Document: {
        get: function get() {
            return document.documentElement;
        }
     },

     Component: {
         Alert: Alert,
         LinkHandler: LinkHandler,
         WidgetStyler:WidgetStyler,
         PageHandler:PageHandler,
     },

     Handler: {
         onClicked: function onClicked(element, clickFunction) {
              element.onclick = function() {
                clickFunction();
              };
         },
         onLongPressed: function onLongPressed(element, clickFunction) {
             element.oncontextment = function() {
                 clickFunction();
             } 
         },
    }
}

