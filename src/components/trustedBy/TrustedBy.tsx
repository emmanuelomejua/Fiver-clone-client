import './trusted.scss';
import { lg, apple, hp, samsung, dell } from './imgaes'



const TrustedBy = () => {
  return (
    <div className='trusted'>
        <div className="cont">
            <span>TrustedBy: </span>
            <img src={lg} alt="" className="" />
            <img src={apple} alt="" className="" />
            <img src={hp} alt="" className="" />
            <img src={samsung} alt="" className="" />
            <img src={dell} alt="" className="" />
       
        </div>
    </div>
  )
}

export default TrustedBy

