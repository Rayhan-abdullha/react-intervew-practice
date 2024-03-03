import React, { useState } from "react";
import ExampleFunctionalCompoents from "./components/ExampleFunctionalCompoents";
import ExampleClassComponents from "./components/ExampleClassComponents";

const App = () => {
  return (
    <div>
      <h1>Functional Componetns example:</h1>
      <ExampleFunctionalCompoents />
      <br />
      <br />
      <h1>Class Componetns example:</h1>
      <ExampleClassComponents />
    </div>
  );
};

export default App;
