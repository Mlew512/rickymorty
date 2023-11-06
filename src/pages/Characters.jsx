//api pull for each character'
import GetInfo from '../components/GetChar';
import Cards from '../components/Card'




const Persons = () =>{
    const { characters } = GetInfo();

    return (
        <>
        <div className='min-h-screen flex justify-center grid grid-cols-1 grid rows-2'>
        <h2 className="text-white">Rick and Morty Characters</h2>
        <div className='grid grid-cols-3 gap-4'>
        {characters.map((character, idx) => (
        <Cards
            key={idx}
            name={character.name}
            image={character.image}
            origin={character.origin.name}
        />
        ))}
        </div>
        </div>
        </>
    
    );
};

export default Persons;
