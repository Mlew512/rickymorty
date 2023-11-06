import { useState, useEffect } from 'react'
import axios from 'axios'

function GetInfo() {
   
    const [characters, setCharacters] = useState([])
 

    const getCharacters = async() => {
        try {
            let response = await axios.get('https://rickandmortyapi.com/api/character')
            setCharacters(response.data.results)
            console.log(response.data.results);
        } catch(error) {
            console.error("Couldn't get the characters", error);
        }
    }


    useEffect(() => {
        getCharacters()
    },[])

    
return { characters }
   

}

export default GetInfo;