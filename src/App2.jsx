import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState(["A", "B", "C", "D", "B"]);
  const [backup, setBackUp] = useState([]);
  function handleDelete() {
    if (name.length) {
      /**
       *
       * @param {Array} prev
       * @returns {Array}
       */
      function valDel(prev) {
        const res = prev.filter((item, index) => index !== 0);
        return res;
      }
      setName(valDel);
    } else {
      alert("Name is empty");
    }
  }

  function removeAllB(val) {
    /**
     * @param {Array} prev
     * @returns {Array}
     */
    const data = prompt("Enter char").toLocaleUpperCase();
    if (data) {
      setName((prev) => {
        const res = prev.filter((item) => {
          if (item.toString() !== data) {
            return item;
          }
        });
        return res;
      });
    }
  }
  return (
    <div>
      <button onClick={handleDelete}>Del</button>
      <button onClick={() => removeAllB("B")}>Remove all, B</button>
      <h1>{name.join(" , ")}</h1>
      {!name.length && <h1>Empty</h1>}
      <button onClick={() => setName([1, ...name])}>Add Start</button>
      <button onClick={() => setName([...name, 2])}>Add End</button>
      <button
        onClick={() => {
          setName([]);
          setBackUp([...name]);
        }}
      >
        Clear
      </button>
      <button
        onClick={() => {
          setName([...backup]);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default App;
