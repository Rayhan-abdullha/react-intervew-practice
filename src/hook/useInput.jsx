import React, { useState } from "react";

const useInput = () => {
  const [input, setInput] = useState("");
  return {
    value: input,
    onChange: (e) => setInput(e.target.value),
  };
};

export default useInput;
