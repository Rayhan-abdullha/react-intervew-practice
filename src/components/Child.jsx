import React, { useState } from "react";

const Child = () => {
  const [state, setState] = useState(0);
  console.log("click");
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => setState((prev) => prev + 1)}>count</button>
    </div>
  );
};

export default Child;
