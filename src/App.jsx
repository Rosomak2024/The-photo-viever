import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://swapi.dev/api/people?page=${page}`);
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
  }, [page]);

  return (
    <div>
      {/* Loading Indicator */}
      {loading && <p>Loading...</p>}
      <h1>Star Wars</h1>
      <ul>
        {data.slice(0, 5).map((character) => (
          <li
            key={character.name}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              margin: "10px 0",
            }}
          >
            {character.name}
          </li>
        ))}
      </ul>
      <button onClick={() => setPage((prev) => prev + 1)}>Next Page</button>
      {page > 1 && (
        <button onClick={() => setPage((prev) => prev - 1)}>Last Page</button>
      )}
      {/* return <button onClick={() => setPage((prev) => prev - 1)}>Last Page</button> */}
    </div>
  );
}
export default App;
