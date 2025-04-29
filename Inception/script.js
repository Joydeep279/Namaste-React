const root = ReactDOM.createRoot(document.getElementsByClassName("root")[0]);
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Welcome To React"),
    React.createElement("h2", { id: "heading" }, "Welcome To Namaste React"),
  ])
);
console.log(parent.type);
console.log(root);
root.render(parent);
