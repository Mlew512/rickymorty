import { useState, useEffect} from 'react'
import axios from 'axios'

const GetEpi = () => {
    const [episodes, setEpisodes] = useState([])

    const getEpisodes = async() => {
        try {
            let response = await axios.get('https://rickandmortyapi.com/api/episode')
            setEpisodes(response.data.results)
            
    } catch(error){
        console.error("Couldn't get the eps,rly srry", error);
    }
    }
    useEffect(() => {
        getEpisodes()
      },[])
    
    return {episodes} ;
    

    
}

export default GetEpi;