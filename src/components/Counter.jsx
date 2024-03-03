import React, { useState } from "react";

const Counter = ({ isShow }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1
        style={{ color: isShow ? "red" : "blue" }}
        onClick={() => setCount((prev) => prev + 1)}
      >
        {count}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        harum.
      </h1>
    </div>
  );
};

export default Counter;
