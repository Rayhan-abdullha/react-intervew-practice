import React from "react";
import withCounter from "./withCounter";

const Counter = ({ counter, handleCounter }) => {
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleCounter}>Counter</button>
    </div>
  );
};

export default withCounter(Counter);
