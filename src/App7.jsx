import React, { useEffect, useRef, useState } from "react";
const App = () => {
  const [data, setData] = useState({ name: "", email: "" });
  function handlesend(e) {
    e.preventDefault();
    console.log(data);
  }
  const styled = { background: data.name.length ? "white" : "red" };
  return (
    <div>
      <form onSubmit={handlesend}>
        <input
          style={styled}
          type="text"
          name="name"
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          value={data.name}
        />
        <input
          type="text"
          name="email"
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          value={data.email}
        />
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default App;
