import React, { useEffect, useState } from "react";

const UseEffectCom = () => {
  const [state, setState] = useState("");
  useEffect(() => {
    console.log("mount");
    const timer = setTimeout(() => {
      console.log("wait for ", state);
    }, 2000);
    return () => {
      console.log("unmount");
      clearTimeout(timer);
    };
  }, [state]);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setState(e.target.value)}
        value={state}
      />
    </div>
  );
};

export default UseEffectCom;
