import React, { useState } from "react";
import Child from "./components/Child";

const App = () => {
  const [state, setState] = useState(true);
  const ChilcComponent = state ? <Child /> : null;
  console.log("app render click");

  return (
    <div>
      <button onClick={() => setState((prev) => !prev)}>count</button>
      {ChilcComponent}
    </div>
  );
};

export default App;
