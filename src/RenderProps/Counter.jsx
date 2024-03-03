import React from "react";

const Counter1 = ({ count, handleInc }) => {
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleInc}>count</button>
    </>
  );
};

export default Counter1;
