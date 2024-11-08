import { useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  // const [response, setResponse] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random/1");

      const data = await response.data;
      console.log("data", data);
      setData(json);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // console.log();
    fetchData(handleClick);
  }, []);

  const handleClick = (e) => {
    const value = e.target;
    setForm(value);
  };

  return (
    <div>
      {loading ? <p>Loading...</p> : <p>Data fetched successfully!</p>}
      <h1>Post Fake API</h1>

      <button onClick={handleClick}>Submit</button>

      {response && (
        <div>
          <h2>Response:</h2>
          <img src="data.message"></img>
        </div>
      )}
    </div>
  );
}
export default App;
