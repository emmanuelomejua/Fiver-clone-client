import './trusted.scss';
import img from '../../assets/hajiya.jpeg'

const TrustedBy = () => {
  return (
    <div className='trusted'>
        <div className="cont">
            <span>TrustedBy: </span>
            <img src={img} alt="" className="" />
            <img src={img} alt="" className="" />
            <img src={img} alt="" className="" />
            <img src={img} alt="" className="" />
        </div>
    </div>
  )
}

export default TrustedBy

