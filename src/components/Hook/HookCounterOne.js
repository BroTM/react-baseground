import React, { useState, useEffect } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  //everytime component render
  //run after every rendering in the component
  useEffect(() => {
    console.log("Useeffect - Updating document title");
    document.title = `You clicked ${count} times`;
  }, [count]); //second args for conditional run effects
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click {count} times.</button>
    </div>
  );
}

export default HookCounterOne;
