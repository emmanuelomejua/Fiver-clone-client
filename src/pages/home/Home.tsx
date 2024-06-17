import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Splider from '../../components/slides/Splide';
import './home.scss';

const Home: React.FC = () => {
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
      <Splider/>
    </div>
  )
}

export default Home;
