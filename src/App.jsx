import { useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: "", email: "" });
  const [response, setResponse] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            userId: form.id,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      const json = await response.json();
      setResponse(json); // Save the response from POST request
      setLoading(false); // Set loading to false after the fetch is done
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Set loading to false even if there's an error
    }
  };

  // useEffect(() => {
  //   // console.log();
  //   fetchData();
  // }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    fetchData(); // Submit the form data via fetch
  };

  return (
    <div>
      {loading ? <p>Loading...</p> : <p>Data fetched successfully!</p>}
      <h1>Post Fake API</h1>

      <label htmlFor="name">Name: </label>
      <input
        autoComplete="on"
        id="name"
        value={form.name}
        onChange={handleInputChange}
      />

      <label htmlFor="email">Email: </label>
      <input
        autoComplete="on"
        id="email"
        value={form.email}
        onChange={handleInputChange}
      />

      <button onClick={handleSubmit}>Submit</button>

      {response && (
        <div>
          <h2>Response:</h2>
          <p>ID: {response.id}</p>
          <p>Name: {response.name}</p>
          <p>Email: {response.email}</p>
        </div>
      )}
    </div>
  );
}
export default App;
