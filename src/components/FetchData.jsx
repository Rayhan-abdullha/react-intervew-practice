import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  console.log("render");
  useEffect(() => {
    setLoading(true);
    setError("");
    setData([]);
    let abortControll = new AbortController();
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: abortControll.signal,
    })
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setData(json);
        setError("");
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          return Promise.reject(err);
        }
        setError("Error");
      })
      .finally((res) => {
        setLoading(false);
      });

    return () => {
      abortControll.abort();
    };
  }, []);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {data.map((item) => (
        <>
          console.log(item)
          <ItemList key={item.id} {...item} />
        </>
      ))}
      <button onClick={() => setCount((prev) => prev + 1)}>onclick</button>
    </div>
  );
};

export default FetchData;

function ItemList({ name, userName, id }) {
  return (
    <p>
      {name}
      {userName}
      {id}
    </p>
  );
}
