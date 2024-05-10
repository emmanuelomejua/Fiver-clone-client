import { Link } from 'react-router-dom';
import './catcard.scss';

type cType = {
    item: {
        img: string;
        title: string;
        desc: string;
    }
}

const CatCard = ({item}: cType) => {
  return (
    <Link to='gigs/:id'>
      <div className='gigcart'>
        <img src={item.img} alt="" className="" />
        <span className="title">{item.title}</span>
        <span className="desc">{item.desc}</span>
      </div>
    </Link>
  )
}

export default CatCard;

