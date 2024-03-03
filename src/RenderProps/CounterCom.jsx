import React, { useState } from "react";

const CounterCom = ({ children }) => {
  const [state, setState] = useState(0);
  function handleInc() {
    setState(state + 1);
  }
  return children(state, handleInc);
};

export default CounterCom;
