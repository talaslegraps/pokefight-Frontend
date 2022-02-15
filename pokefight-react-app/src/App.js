import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import PokeContext from "./context/pokeContext";

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPokemonData(data);
      });
  }, []);

  console.log(pokemonData);

  return (
    <div className="App">
      <Navbar />
      <PokeContext.Provider value={pokemonData}>
        <Switch>
          <Route exact path="/">
            <h1>Welcome to Pokefight!</h1>
          </Route>
          <Route exact path="/pokemon">
            <Pokedex />
          </Route>
          <Route exact path="/pokemon/:id"></Route>
          <Route exact path="/pokemon/:id/:info"></Route>
        </Switch>
      </PokeContext.Provider>
    </div>
  );
}

export default App;
