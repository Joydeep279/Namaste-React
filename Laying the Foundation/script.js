import React from "react";
import ReactDom from "react-dom/client.js";

const ele = React.createElement("h1", { id: "heading" }, "Welcome to React");
// JSX element
const JsxEle = () => <h1>Welcome to React</h1>;
//JSX component
function JsxComp() {
  return (
    <div>
      {/* Composite Component => Component inside */}
      <JsxEle />
      <h1>Lecture 03</h1>
      <h2>Welcome To React</h2>
      <p>Complete Component Render</p>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<JsxComp />);
