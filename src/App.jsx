import React from "react";
import Counter from "./HOC/Counter";
import HoverCounter from "./HOC/HoverCounter";
import Counter1 from "./RenderProps/Counter";
import CounterCom from "./RenderProps/CounterCom";

const App = () => {
  return (
    <div>
      <h1>Higer Order Components Example: </h1>
      <Counter />
      <HoverCounter />

      <h1>Render Props Example: </h1>
      <CounterCom>
        {(count, handleInc) => <Counter1 count={count} handleInc={handleInc} />}
      </CounterCom>
    </div>
  );
};

export default App;
