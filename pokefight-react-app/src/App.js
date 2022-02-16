import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import PokeContext from "./context/pokeContext";
import SinglePokemon from "./components/SinglePokemon";
import pokefightHeader from "./media/Pokefight-header.png";
import pokegang from "./media/pokegang.png";

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <PokeContext.Provider value={{ pokemonData }}>
        <Switch>
          <Route exact path="/">
            <div className="home-container">
              <img src={pokefightHeader} alt="Pokefight header" />
              <img
                src={pokegang}
                alt="Bulbasaur, Squirtle, Charmander and Pikachu"
              />
            </div>
          </Route>
          <Route exact path="/pokemon">
            <Pokedex />
          </Route>
          <Route exact path="/pokemon/:id">
            <SinglePokemon />
          </Route>
          <Route exact path="/pokemon/:id/:info"></Route>
        </Switch>
      </PokeContext.Provider>
    </div>
  );
}

export default App;
