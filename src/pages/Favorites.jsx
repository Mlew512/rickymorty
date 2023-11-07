import { useOutletContext } from "react-router-dom";
import Card from "../components/Card";

const FavoritesPage =()=> {

    const {setFavorites, favorites} = useOutletContext()

    return(
        <>
        <h2 className="text-white">Favorites</h2>
        <div className='row'>
        {favorites.map((char, idx)=>(
        <div key = {idx} className='col-md-4 md-4'>
            <Card
            id={char.id}
            name={char.name}
            image={char.image}
            species={char.species}
            origin={char.origin}
            setFavorites={setFavorites}
            favorites={favorites}
            />
            </div>
            ))};
            </div>
        </>
    );
};   

export default FavoritesPage;