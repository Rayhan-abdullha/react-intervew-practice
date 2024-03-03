import React, { useEffect, useState } from "react";
const App = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    useEffectCollection(state);
  }, [state]);
  return (
    <div>
      <h1>React</h1>
      <button onClick={() => setState((prev) => prev + 1)}>
        {state} Count
      </button>
    </div>
  );
};

export default App;

function useEffectCollection(state) {
  console.log("error");
  if (state > 5) {
    document.title = count;
  }
}
