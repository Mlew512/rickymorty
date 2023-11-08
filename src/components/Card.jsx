/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';

function Cards({ name, id, image, species, status, gender, location, origin, setFavorites, favorites }) {
  
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(false);
    
    useEffect(() =>{
        const isFavorite = favorites.some((favorite) => favorite.id === id);
        setIsFavorite(isFavorite);
        console.log(isFavorite)
    }, [favorites, id]);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Species: {species}
          <br />
          origin: {origin}
          <br />
          Status: {status}
        </Card.Text>
        <Button variant="primary" onClick={() => navigate(`/character/${id}/`)}>
          Get Shwifty
        </Button>
        <br />
        <button className={isFavorite ? "hidden" : "btn btn-success"}
          onClick={() => {
            if (favorites.length < 4) {
            setFavorites([...favorites, { "id": id, "name": name, "image": image }])
          }
            else {
                alert("Max number of favorites already added");
            }
          }
        }
        >
          Favorite
        </button>
        <button className={isFavorite ? "btn btn-danger" : "hidden"}
        onClick={() =>setFavorites(favorites.filter(favorite => favorite.id !== id))}>Remove</button>
      </Card.Body>
    </Card>
  );
}
export default Cards;
