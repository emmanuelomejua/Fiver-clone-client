import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import CatSlide from '../../section/slides/CatSlide';
import './home.scss';
import Features from '../../components/features/Features';
import Explore from '../../components/explore/Explore';
import ProjectSlide from '../../section/slides/ProjectSlide';


const Home = () => {
  return (
    <div className='home'>
        <Featured/>
        <TrustedBy/>
        <CatSlide/>
        <Features/>
        <Explore/>
        <ProjectSlide/>
   
    </div>
  )
}

export default Home;
