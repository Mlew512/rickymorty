//api pull for each character'
import Cards from "../components/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import portal from "../assets/portal.svg";
import { useOutletContext } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/esm/Container";

const Persons = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setFavorites, favorites } = useOutletContext();
  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        const totalPages = response.data.info.pages;
        const allCharacters = [];
        for (let page = 1; page <= totalPages; page++) {
          const pageResponse = await axios.get(
            `https://rickandmortyapi.com/api/character?page=${page}`
          );
          allCharacters.push(...pageResponse.data.results);
        }
        setCharacters(allCharacters);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching characters", error);
        setIsLoading(false);
      }
    };

    getCharacters();
  }, []);

  return (
    <div>
      {isLoading ? (
        <>
          <div className="min-h-screen flex flex-col items-center justify-center relative">
        <img className="portal" src="./src/assets/portal.svg" alt="Portal" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="get-big" >Loading...</h1>
        </div>
      </div>
        </>
      ) : (
        <>
          <h1 className="text-white ml-10">Characters</h1>
          <div className="row p-5">
            {characters.map((character, idx) => (
              <div key={idx} className="col-md-2 mb-4">
                <Cards
                  key={idx}
                  id={character.id}
                  name={character.name}
                  image={character.image}
                  species={character.species}
                  status={character.status}
                  origin={character.origin.name}
                  setFavorites={setFavorites}
                  favorites={favorites}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Persons;
