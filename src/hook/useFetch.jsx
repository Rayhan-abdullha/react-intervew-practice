import { useEffect, useState } from "react";

const useFetch = (url, cb) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setState(data));
  }, []);
  return cb(state);
};

export default useFetch;
