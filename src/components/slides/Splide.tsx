import './slide.scss';
import { Splide, SplideSlide,SplideTrack } from '@splidejs/react-splide';
import { catData } from '../../data';
import CatCard from '../catcaard/CatCard';
import '@splidejs/react-splide/css';

const options = {
    perPage: 10,
    // type         : 'loop',
    gap          : '1rem',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
  };

const Sliderr = () => {
  return (
    <div className="slider-container">
        <Splide  
            options={options}
            onMoved={ ( splide, newIndex ) => {
                console.log( 'moved', newIndex );
                console.log( 'length', splide.length );
              } }
            aria-label="slider-container"
            >
            <SplideTrack>
                {
                    catData.map((card) => (
                        <SplideSlide>
                            <CatCard item={card} key={card.id}/>
                        </SplideSlide>
                    ))
                }
            </SplideTrack>
        </Splide>
    </div>
  )
}

export default Sliderr
