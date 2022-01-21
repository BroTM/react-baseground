import React from "react";

function MemoComp({ name }) {
  console.log("Rendering meno component");
  return <div>{name}</div>;
}

export default React.memo(MemoComp);
