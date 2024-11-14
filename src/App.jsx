import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      const result = await response.json();
      setData(result.results);
      console.log(result.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // console.log();
    fetchData();
  }, []);

  // const handleClick = () => {
  //   fetchData();
  // };

  return (
    <div>
      <h1>Pokemnon Api</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((id, item) => (
            <li key={id}>{item}</li>
          ))}
        </ul>
      )}
      {/* <button onClick={handleClick}>Random</button> */}
    </div>
  );
}
export default App;

// {
//   /* <img src={data} alt="Pokemnon"></img> */
// }
