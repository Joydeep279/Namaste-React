// const heading = React.createElement("h1", {}, "Hello World From React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// // Experiment
// console.log(heading.props.children);
// console.log(root.render);

const heading = React.createElement("h1", { id: "parent" }, "Hello");
const root = ReactDOM.createRoot(document.getElementById("root"));

const jsxEle=<h1>Hello From JSX</h1>;

root.render(jsxEle);
