import React from 'react'
import { ReactDOM } from 'react-dom';

//Using React

const heading2 = React.createElement("div",
    { id: "container", xyz: "abc" },
    [React.createElement("h1",
        { id: "heading", xyz: "abc" },
        "This is React"),
        React.createElement("h2",
        { id: "heading2", xyz: "abc" },
        "This is React2")]); // or we can have array also

console.log(heading2) //It returns an Object, not an HTML element

const root2 = ReactDOM.createRoot(document.getElementById("rootContainer"));

console.log(root2);  //It returns an Object
root2.render(heading2);

//lets add second Root

const divTag = React.createElement("div",{},"This is second root");
const root3 = ReactDOM.createRoot(document.getElementById("heading"));
root3.render(divTag); 

//using JS . This code will be replaced by React 

const heading = document.createElement("h1");
heading.innerHTML = "Hello World from JS";
const root = document.getElementById("rootContainer");
root.appendChild(heading);