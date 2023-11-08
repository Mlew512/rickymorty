//api pull for each character'
import Cards from '../components/Card'
import axios from 'axios'
import { useState, useEffect } from 'react'
import portal from '../assets/portal.svg'
import {useOutletContext} from 'react-router-dom'




const Persons = () =>{
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { setFavorites,favorites } = useOutletContext();
   useEffect(() => {
    const getCharacters = async () => {
        try {
            const response = await axios.get('https://rickandmortyapi.com/api/character');
            const totalPages = response.data.info.pages;
            const allCharacters = [];
            for (let page=1; page <= totalPages; page++) {
                const pageResponse = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
                allCharacters.push(...pageResponse.data.results);
            }
            setCharacters(allCharacters);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching characters', error)
            setIsLoading(false);
        }
    };

    getCharacters();
   }, [])


    return (
        <div>
        {isLoading ? (
            <>
            <img className="portal h-10" src={portal}/>
            <p className="text-white">Loading...</p>
            </>
        ) : (
      
        <>
        <h1 className="text-white">
            Characters
        </h1>
        <div className="row">
        {characters.map((character, idx) =>(
        <div key={idx} className="col-md-4 mb-4">
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
    )
}

export default Persons;
