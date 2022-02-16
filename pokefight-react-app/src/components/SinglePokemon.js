import { Card } from "react-bootstrap";
import PokeContext from "../context/pokeContext";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const SinglePokemon = () => {
  const { pokemonData } = useContext(PokeContext);
  const { id } = useParams();
  const singlePokemon = pokemonData[id - 1];
  console.log(pokemonData);

  return (
    <div className="pokecards-container">
      <h2>Details View:</h2>
      <div className="single">
        {singlePokemon && (
          <Card
            key={singlePokemon.id}
            style={{
              width: "18rem",
              border: "2px solid rgb(38, 38, 194)",
              backgroundColor: "rgb(255, 242, 167)",
            }}
          >
            <Card.Img
              variant="top"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${singlePokemon.id}.png`}
            />
            <Card.Body>
              <Card.Text>#{singlePokemon.id}</Card.Text>
              <Card.Title>
                <Link to={`/pokemon/${singlePokemon.id}`}>
                  {singlePokemon.name.english}
                </Link>
              </Card.Title>
              <Card.Text>
                Type{singlePokemon.type[1] && " 1"}: {singlePokemon.type[0]}
              </Card.Text>
              {singlePokemon.type[1] && (
                <Card.Text>Type 2: {singlePokemon.type[1]}</Card.Text>
              )}
              <Card.Subtitle>
                <h5>Base Stats</h5>
              </Card.Subtitle>
              <Card.Text>HP: {singlePokemon.base.HP}</Card.Text>
              <Card.Text>Attack: {singlePokemon.base.Attack}</Card.Text>
              <Card.Text>Defense: {singlePokemon.base.Defense}</Card.Text>
              <Card.Text>
                Sp. Attack: {singlePokemon.base["Sp. Attack"]}
              </Card.Text>
              <Card.Text>
                Sp. Defense: {singlePokemon.base["Sp. Defense"]}
              </Card.Text>
              <Card.Text>Speed: {singlePokemon.base.Speed}</Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SinglePokemon;
