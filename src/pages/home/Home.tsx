import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/slides/Slider';
import './home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <div className="home_cont">
        <TrustedBy/>
        <Slide/>
      </div>
    </div>
  )
}

export default Home;
