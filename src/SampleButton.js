//Created by Namish Kumar in 2022
import {India} from "./India.js"
const AppBrand = new India.Widget.HeadingStyle.CenteredHeading(India.Body.get());
AppBrand.text = "IndiaJS";
AppBrand.id = "IndiaJS";
const MainAppBrand = AppBrand.create();
const AppShort = new India.Widget.TextStyle.CenteredText(India.Body.get());
AppShort.text = "IndisJS is a simple JS Framework and module made by Namish Kumar to facilitate web development in a faster way.";
AppShort.create();
const AppHow = new India.Widget.HeadingStyle.CenteredHeading(India.Body.get());
AppHow.text = "<u>How is it helpful?</u>";
AppHow.create();
const AppHowAnswer = new India.Widget.TextStyle.CenteredText(India.Body.get());
AppHowAnswer.text = "It is helpful in many ways. First of all, it helps to create beautiful web applications using just a little difficult objects. To make such beautiful applications, You have to handle those complicated objects, right? In fact, this webpage has been created with <b>IndiaJS</b>!";
AppHowAnswer.create();
const AppButton = new India.Widget.Button(India.Body.get());
AppButton.text = "Show source code";
const finalButton = AppButton.create();
finalButton.style.textAlign = "center";
India.Body.get().style.textAlign = 'center';
India.Body.get().style.backgroundColor = "#010101";
India.Body.get().style.color = "white";
India.Handler.onClicked(finalButton, function openNew() {
     const MyLinkHandler = new India.Component.LinkHandler("https://github.com/Learnr4Namish/IndiaJS/blob/main/src/India.js", false);
     MyLinkHandler.OpenLink();
});