import './style.scss';
import Slider from '../../components/slides/Slider';
import CatCard from '../../components/cards/CatCard';
import { catData } from '../../data';

const CatSlide = () => {
  return (
    <div className='slider-cont'>
      <Slider deviceType=''>
        {
          catData.map((item) => (
            <CatCard key={item.id} item={item}/>
          ))
        }
      </Slider>
    </div>
  )
}

export default CatSlide
