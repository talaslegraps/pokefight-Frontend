import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import PokeContext from "./context/pokeContext";
import SinglePokemon from "./components/SinglePokemon";
import pokefightHeader from "./media/Pokefight-header.png";
import pokegang from "./media/pokegang.png";
import pokedexHeader from "./media/Pokedex-header.png";
import MyPagination from "./components/MyPagination";
import Footer from "./components/Footer";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [pagData, setPagData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("https://my-pokefight-api.herokuapp.com/pokemon")
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error(
          "Something went wrong while trying to fetch Pokemon data."
        );
      })
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let startIndex = currentPage * 50 - 50;
    let endIndex = startIndex + 50;
    setPagData(pokemonData.slice(startIndex, endIndex));
  }, [pokemonData, currentPage]);

  return (
    <div className="App">
      <Navbar pageReset={setCurrentPage} />
      <PokeContext.Provider value={{ pokemonData }}>
        <Switch>
          <Route exact path="/">
            <img
              className="header-img"
              src={pokefightHeader}
              alt="Pokefight header"
            />
            <img
              className="header-img"
              src={pokegang}
              alt="Bulbasaur, Squirtle, Charmander and Pikachu"
            />
          </Route>
          <Route exact path="/pokemon">
            <img
              className="header-img"
              src={pokedexHeader}
              alt="Pokedex header"
            />
            <Pokedex data={pagData} />
            <MyPagination
              page={currentPage}
              dataLength={pokemonData.length}
              setPage={setCurrentPage}
            />
          </Route>
          <Route exact path="/pokemon/:id">
            <SinglePokemon />
          </Route>
          <Route exact path="/pokemon/:id/:info"></Route>
          <Route exact path="/fight"></Route>
        </Switch>
        <Footer />
      </PokeContext.Provider>
    </div>
  );
}

export default App;
