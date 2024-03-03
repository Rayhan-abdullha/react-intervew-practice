import React, { memo } from "react";

const UseCallback = ({ setCount, count }) => {
  console.log("reder usecallback");
  return (
    <div>
      {count}
      <button onClick={() => setCount(1)}>count</button>
    </div>
  );
};

export default memo(UseCallback);
