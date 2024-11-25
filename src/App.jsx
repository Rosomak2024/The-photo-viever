import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random/1");
      const result = await response.json();
      setData(result.message);
      console.log(result.message);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    fetchData();
  };

  return (
    <div>
      <h1>Dog Api</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Dog image:</h2>
          <img src={data} alt="Random dog"></img>
        </div>
      )}
      <button onClick={handleClick}>Random</button>
    </div>
  );
}
export default App;
