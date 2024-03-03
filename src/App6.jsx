import { useState, useMemo, useCallback, useEffect } from "react";
import UseCallback from "./components/useCallback";
function App() {
  const [state, setState] = useState(0);
  const [state1, setState1] = useState(10);

  const res = useMemo(() => {
    return new Array(10000000)
      .fill(2)
      .map((item) => item * 10)
      .reduce((a, b) => a + b, 0);
  }, []);

  const handleClick = useCallback((val) => {
    setState((prev) => prev + val);
  }, []);
  console.log("render app");
  return (
    <div>
      <h1>Hello {state1}</h1>
      <UseCallback setCount={handleClick} count={res} />
      <button onClick={() => setState1((prev) => prev + 1)}>count app</button>
    </div>
  );
}

export default App;
