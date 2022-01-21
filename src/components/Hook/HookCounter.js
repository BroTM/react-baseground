import React, { useState } from "react";

function HookCounter() {
  //array destructuring- feature of es6
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Basic Hook - Count{count}
      </button>
    </div>
  );
}

export default HookCounter;
