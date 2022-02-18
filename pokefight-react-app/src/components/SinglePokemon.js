import { Card } from "react-bootstrap";
import PokeContext from "../context/pokeContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SinglePokemon = () => {
  const { pokemonData } = useContext(PokeContext);
  const { id } = useParams();
  const singlePokemon = pokemonData[id - 1];
  console.log(pokemonData);

  return (
    <div className="pokecards-container">
      <div className="single">
        {singlePokemon && (
          <>
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
                <Card.Title
                  style={{
                    fontWeight: "900",
                    fontSize: "2rem",
                  }}
                >
                  {singlePokemon.name.english}
                </Card.Title>
                <Card.Text>
                  Type{singlePokemon.type[1] && " 1"}:{" "}
                  <span>{singlePokemon.type[0]}</span>
                </Card.Text>
                {singlePokemon.type[1] && (
                  <Card.Text>Type 2: {singlePokemon.type[1]}</Card.Text>
                )}
                <Card.Subtitle
                  style={{
                    fontWeight: "700",
                    fontSize: "1.5rem",
                  }}
                >
                  Base Stats
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
            <Link to="/pokemon" className="standard-btn">
              Back to Pokédex
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default SinglePokemon;
