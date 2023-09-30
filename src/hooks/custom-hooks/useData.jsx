import { useDebugValue, useEffect, useState } from "react";

const useData = (path) => {
  const [data, setData] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [isError, setIsError] = useState(null);

  const getDataAPI = async () => {
    try {
      console.log("using useData Hooks");
      const url = "https://jsonplaceholder.typicode.com/" + path;
      const req = await fetch(url);
      if (!req.ok) {
        throw new Error("Network response was not ok");
      }
      const res = await req.json();

      setData(res);
      setIsReady(true);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getDataAPI();
  }, []);

  return [data, isReady, isError];
};

export default useData;
