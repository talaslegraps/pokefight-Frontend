import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Pokedex = ({ data }) => {
  data && console.log(data);

  return (
    <>
      <div className="pokecards-container">
        <div className="pokedex">
          {data &&
            data.map((pokemon) => {
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
                    <Card.Title
                      style={{
                        fontWeight: "900",
                        fontSize: "2rem",
                      }}
                    >
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
