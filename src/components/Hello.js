import React from "react";

const Hello = () => {
  //jsx component
  // return(<div class="dummyClass">
  //     <h1>Hello Vishwaw</h1>
  // </div>)

  return React.createElement(
    "div",
    { id: "helo", className: "dummyClass" },
    React.createElement(
      "h1",
      null,
      "<h1>Hello Component<br/>Hello Vishwas</h1>"
    )
  );
};

export default Hello;
