import React, { useState } from "react";

const withCounter = (Components) => {
  function newComponents() {
    const [state, setState] = useState(0);
    function handleCounter() {
      setState((prev) => prev + 1);
    }
    return <Components counter={state} handleCounter={handleCounter} />;
  }
  return newComponents;
};

export default withCounter;
