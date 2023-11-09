import { useState, useEffect} from 'react'
import axios from 'axios'
import { useOutletContext, useParams } from 'react-router-dom';
import Card from '../components/Card'

const GetSearch = () => {
    
    const {searchValue} = useParams();
    const [searchResults, setSearchResults] = useState([])
    const {favorites,setFavorites} = useOutletContext();
    const [currentPage, setCurrentPage] = useState(1);
    


    const getResults = async() => {
        let response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${searchValue.split(" ").join("%20")}`);
        const newResults = response.data.results
        setSearchResults([...searchResults, ...newResults]);
        console.log(response.data.results) 
        
        if (response.data.info.next){
            setCurrentPage(currentPage+1);
        }
    }
    
    useEffect(()=>{
        setSearchResults([]);
        setCurrentPage(1);
    },[searchValue])

    useEffect(()=> {
        getResults()
        console.log(searchResults.length)
      },[currentPage])

    
    return (
        <>
        <h1 className="text-white ml-5" >Results for {searchValue}</h1>
        <div className='row p-5'>
        {searchResults.map((char, idx)=>(
        <div key = {idx} className='col-md-2 mb-4'>
            <Card
            id={char.id}
            name={char.name}
            image={char.image}
            species={char.species}
            origin={char.origin.name}
            setFavorites={setFavorites}
            favorites={favorites}
            />
            <br/>
            </div>
            ))};
            </div>
        </>
    ) ;
    

    
}

export default GetSearch;