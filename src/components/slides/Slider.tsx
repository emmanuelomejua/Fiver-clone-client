import './slide.scss';
import Slider from "react-slick";
import { catData } from '../../data';
import CatCard from '../catcaard/CatCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 5
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
            {
              catData.map((c) => (
                <CatCard item={c} key={c.id}/>
              ))
            }
      </Slider>
    </div> 
  );
}

export default Slide;
