import React, { useState } from "react";

const ExampleFunctionalCompoents = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [state, setState] = useState({});
  const handleAdd = () => {
    setState({ name, age });
  };

  const handleAge = (props) => {
    if (props === "+") {
      setAge((prev) => prev + 1);
      console.log(age);
    } else {
      setAge((prev) => prev - 1);
    }
  };

  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        value={name}
      />
      <button onClick={() => handleAge("+")} style={{ marginLeft: "10px" }}>
        +
      </button>
      {age}
      <button onClick={() => handleAge("-")}>-</button>
      <button onClick={handleAdd}>Submit</button>
      <br />
      <div>
        <span>
          My name {state.name}. age is {state.age}
        </span>
      </div>
    </div>
  );
};

export default ExampleFunctionalCompoents;
