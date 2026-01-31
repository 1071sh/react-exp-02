import { useState, useEffect } from "react";

const useForm = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      console.log("response", response);
      const json = await response.json();
      console.log("json", json);
      setData(json);
    };
    fetchData();
  }, []);

  return {
    data,
  };
};

export default useForm;
