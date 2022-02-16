import { Card } from "react-bootstrap";
import PokeContext from "../context/pokeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import pokedexHeader from "../media/Pokedex-header.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Pokedex = () => {
  const { pokemonData } = useContext(PokeContext);
  console.log(pokemonData);

  return (
    <>
      <img src={pokedexHeader} alt="Pokedex header" />
      <div className="pokecards-container">
        <div className="pokedex">
          {pokemonData.map((pokemon) => {
            return (
              <Card
                key={pokemon.id}
                style={{
                  width: "18rem",
                  border: "2px solid rgb(38, 38, 194)",
                  backgroundColor: "rgb(255, 242, 167)",
                }}
              >
                <Card.Img
                  variant="top"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                />
                <Card.Body>
                  <Card.Text>#{pokemon.id}</Card.Text>
                  <Card.Title>
                    <Link to={`/pokemon/${pokemon.id}`}>
                      {pokemon.name.english}
                    </Link>
                  </Card.Title>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pokedex;
