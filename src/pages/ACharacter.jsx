import axios from 'axios';
import { useEffect, useState } from 'react';
import { useOutletContext,useParams } from 'react-router-dom';
import {Card, Button} from 'react-bootstrap'
import Cards from '../components/Card'

const ACharacter = () => {
    const [character,setCharacter]= useState({});
    const { id } = useParams()
    const { setFavorites,favorites } = useOutletContext();

    const getCharacter= async() =>{
        let response= await axios.get(`https://rickandmortyapi.com/api/character/${id}/`);
        setCharacter(response.data);
        console.log(response.data.origin.name);

    }
    useEffect(()=>{
        getCharacter()
    },[id])

    return(
        <>
        <Cards
        id={id}
        name={character.name}
        image={character.image}
        species={character.species}
        origin={character.origin ? character.origin.name : 'Unknown'}//it wasnt loading right away so it threw an error bc it was undefined
        setFavorites={setFavorites}
        favorites={favorites}
        />
            </>
    )
}

export default ACharacter ;