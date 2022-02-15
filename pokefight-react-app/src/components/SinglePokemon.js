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
    <div className="single-container">
      <h2>Single View:</h2>
      <div className="single">
        {singlePokemon && (
          <Card key={singlePokemon.id} style={{ width: "18rem" }}>
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
              <Card.Text>
                <h5>Base Stats</h5>
              </Card.Text>
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
