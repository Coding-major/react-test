//var React = require("react");
// var ReactDom = require("react-dom");
import React from "react";
import ReactDOM from "react-dom";
import img1 from "./noodles-me.jpg";
import img2 from "./the-noodles.jpg";
import img3 from "./vegan-noodles.jpg";


// ReactDom.render(what to show, Where to show it);
const myStyle = {
    color: "green",
    border: "yellow",
}

var d = new Date();
var time = d.getHours();
let currenttime;
var timecolor = {color:""};

if(time < 12 ) {
    currenttime = "GOOD MORNING";
    timecolor = {color:"yellow"};
} else if (time < 18){
    currenttime = "GOOD AFTERNOON";
    timecolor = {color:"green"};
} else {
    currenttime = "GOOD EVENING";
    timecolor = {color:"black"};
}

const img4 = "https://picsum.photos/200";
ReactDOM.render(
    <div>
        <h1 className="heading" contentEditable="true" spellCheck="false">items to buy </h1>
        <div>
            <h2 style={timecolor}>WELCOME, {currenttime}</h2>
            <h2 style={{color:"red", background:"blue"}}>WELCOME, {currenttime}</h2>
            <h3 style={myStyle}>this is the third heading</h3>
            <img src={img1} alt="google.com" className="noodles"/>
            <img src={img2} alt="www.google.com" className="noodles"/>
            <img src={img3} alt="www.google.com" className="noodles"/>
            <img alt="new" src={img4}/>
            <br/>
        </div>
        
    </div>, document.getElementById("root")
) 