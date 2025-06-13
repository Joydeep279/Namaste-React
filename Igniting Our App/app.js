import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "i'am H1 Tag!"),
    React.createElement("h2", {}, "i'am H1 Tag!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i'am H1 Tag!"),
    React.createElement("h2", {}, "i'am H1 Tag!"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
const reactEle=React.createElement("")