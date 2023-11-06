import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';


function SeasonalCarousel({ episodes, characters }) {
  return (
    <Carousel>
      {episodes.map((episode, idx) => (
      <Carousel.Item key={idx} style={{ backgroundImage: `url(${characters[idx]})`, backgroundSize: 'cover'}}>
     
       
        <Carousel.Caption>
          <h2>{episode.name}</h2>
          <h3>Episode: {episode.episode}</h3>
          <h3>Aired: {episode.air_date}</h3>          
        </Carousel.Caption>
      </Carousel.Item>
      ))}
    </Carousel>
  );
}
SeasonalCarousel.propTypes = {
  episodes: PropTypes.array.isRequired,
  characters: PropTypes.array.isRequired,

}

export default SeasonalCarousel