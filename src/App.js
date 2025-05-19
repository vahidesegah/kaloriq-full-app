import Axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState("");

  const getData = async () => {
    const response = await Axios.get("http://localhost:3000");
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>{data}</div>;
};

export default App;
