import { useState, useEffect } from 'react'
import axios from 'axios'

function GetInfo() {
   
    const [characters, setCharacters] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
 

    const getCharacters = async() => {
        try {
            let response = await axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
            const newCharacters = response.data.results;
            setCharacters((prevCharacters) => [...prevCharacters, ...newCharacters]);

            if (response.data.info.next){
                setCurrentPage(currentPage+1);
            }


        } catch(error) {
            console.error("Couldn't get the characters", error);
        }
    }


    useEffect(() => {
        getCharacters()
    },[currentPage])

    
return { characters }
   

}

export default GetInfo;