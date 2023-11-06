import SeasonalCarousel from '../components/SeasonalCarousel'
import GetEpi from '../components/GetEpi'
import {useState, useEffect} from 'react'
import axios from 'axios'

const AboutPage = () =>{
    const [selectedSeason, setSelectedSeason] = useState('s01')
    const [characters, setCharacters] = useState([])
    const [episodes, setEpisodes] = useState([]);

        const handleSeasonChange = (event) => {
            setSelectedSeason(event.target.value);
            console.log(episodes.episodes)

        }
        useEffect(() => {
            const fetchEpisodes = async() => {
                try {
                    const response = await axios.get('https://rickandmortyapi.com/api/episode');
                    setEpisodes(response.data.results);
                    console.log(response.data.results)
                } catch (error) {
                    console.error('no episodes here', error);
                }
                }
            const fetchCharacters = async () => {
                try {
                    const response = await axios.get('https://rickandmortyapi.com/api/character');
                    const characterImages = response.data.results.map((character) => character.image);
                    setCharacters(characterImages);
                    console.log(characterImages)
                } catch (error) {
                    console.error('no images here', error);
                }
                }
        fetchEpisodes();
        fetchCharacters();
        
      
    }, []);
        
    return(
        <div>
        <h2 className='text-white'>About Rick and Morty</h2>
        <label className='text-white'>Select a Season:</label>
        <select value={selectedSeason} onChange={handleSeasonChange}>
            <option value="s01">Season 1</option>
            <option value="s02">Season 2</option>
            
        </select>
        {episodes.length > 0 && characters.length > 0 && (
            <SeasonalCarousel
            episodes={episodes.filter((episode) => episode.episode.includes(selectedSeason))}
            characters={characters}
            />
        )}
        </div>
        );
}
export default AboutPage
        {/* <GetEpi>
       
        {({ episodes }) => {
            handleCharacterData(episodes);

            return (
            <SeasonalCarousel 
                episodes={episodes.filter(episode =>
                episode.episode.includes(selectedSeason))}
                characters={characters}
              
                />             
            );           
        }}
         </GetEpi>
        </div>
    );
            
}
export default AboutPage; */}