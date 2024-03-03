import React, { useEffect, useRef } from "react";
import useInput from "../hook/useInput";

const StoreLocalStorage = () => {
  const input = useInput();
  const itemsString = localStorage.getItem("data");
  const items = itemsString ? JSON.parse(itemsString) : null;

  const handleSend = () => {
    let newData;
    if (items) {
      newData = {
        data: [...items.data, input.value],
      };
    } else {
      newData = {
        data: [input.value],
      };
    }
    localStorage.setItem("data", JSON.stringify(newData));
  };
  const inputRef = useRef(null);
  return (
    <div>
      <label onClick={() => inputRef.current.focus()}>Input: </label>
      <input ref={inputRef} id="coder" type="text" {...input} />
      <button onClick={handleSend}>Send</button>
      {items &&
        items.data.map((item, index) => (
          <div onClick={() => inputRef.current.focus()} key={index}>
            {item}
          </div>
        ))}
    </div>
  );
};

export default StoreLocalStorage;
