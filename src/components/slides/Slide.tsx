import './slide.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { catData } from '../../data';
import CatCard from '../catcaard/CatCard';

const Slide = () => {
  return (
    <div className='slider-container'>
    <Carousel
        showThumbs={false}
        infiniteLoop={true}
        useKeyboardArrows={true}
        autoPlay={true}
        width='100%'
      >
            {
              catData.map((c) => (
                <CatCard item={c} key={c.id}/>
              ))
            }
      </Carousel>
    </div>
  )
}

export default Slide
