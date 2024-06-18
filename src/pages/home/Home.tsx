import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/slides/Slider';
import './home.scss';
import Features from '../../components/features/Features';
import Explore from '../../components/explore/Explore';
// import ProjectSlide from '../../components/slides/ProjectSlide';

const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <div className="home_cont">
        <TrustedBy/>
        <Slide deviceType=''/>
        <Features/>
      </div>
        <Explore/>
        {/* <ProjectSlide deviceType=''/> */}
    </div>
  )
}

export default Home;
