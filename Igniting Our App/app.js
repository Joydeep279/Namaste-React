import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { className: "parent" },
  React.createElement("div", { className: "child" }, [
    React.createElement("h1", {}, "Hello EveryOne"),
    React.createElement("h2", {}, "Welcome To React"),
  ])
);
console.log(parent);

const JSXelement = <h1>Created by JSX</h1>;
const multiLine = <h1>Hello World</h1>;
const target = document.getElementsByClassName("root")[0];
const root = ReactDOM.createRoot(target);

root.render(multiLine);
root.render(JSXelement);
const clearBTN = document.getElementById("clearBTN");
clearBTN.addEventListener("click", (e) => {
  root.unmount();
  console.log(e);
});
