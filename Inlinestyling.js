import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");
const customStyle={
  color:""
}
//inline styling

/*
const num=Math.floor(Math.random()*10);
if(num <= 5){
  customStyle.color="red";
}else{
  customStyle.color="green";
}

ReactDOM.render(
<h1 style={customStyle}>{num}</h1>
  
  ,rootElement
);*/
const date= new Date(2020,5,29,19);
const currentTime = date.getHours();
let gretting;

if( currentTime < 12){
  
} else if(currentTime < 18){
  gretting="Good afternoon";
  customStyle.color="green";
}else{
  gretting="Good Night"
  customStyle.color="blue";
}
ReactDOM.render(
<h1 className="heading" style={customStyle}> {gretting} </h1>
  ,rootElement
);
