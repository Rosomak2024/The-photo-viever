import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const fetchPokemonList = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setPokemonList(result.results);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  const fetchPokemonDetails = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch details");
      }
      const result = await response.json();
      setSelectedPokemon(result);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    // console.log();
    fetchPokemonList();
  }, []);

  return (
    <div className="App">
      <h1>Pokémon API Explorer</h1>

      {loading && <p>loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && !selectedPokemon && !error && (
        <ul>
          {pokemonList.map((pokemon, index) => (
            <li key={index}>
              <button onClick={() => fetchPokemonDetails(pokemon.url)} />
              {pokemon.name}
            </li>
          ))}
        </ul>
      )}
      {!loading && selectedPokemon && (
        <div>
          <h2>{selectedPokemon.name.toUpperCase()}</h2>
          <img
            src={selectedPokemon.sprites.front_default}
            alt={selectedPokemon.name}
          />
          <h3>Abilities:</h3>
          <ul>
            {selectedPokemon.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
          <button onClick={() => setSelectedPokemon(null)}>Back</button>
        </div>
      )}
    </div>
  );
}
export default App;
