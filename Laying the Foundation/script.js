import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "display" }, "Hello");

const Msg = ()=>(
  <div>
    <h1>MSG from jsx</h1>
    <img src="d" alt="react-logo" />
  </div>
);

const Heading=()=>{


  return <div>
    {100+20}
    {Msg()}
    {<Msg/>}
    {<Msg></Msg>}
    <h3>Welcome to the world of React</h3>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);
