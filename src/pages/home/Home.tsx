import Featured from '../../components/featured/Featured';
import Slide from '../../components/slides/Slide';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import './home.scss';

const Home: React.FC = () => {
  return (
    <div>
      <Featured/>
      <TrustedBy/>
      <Slide/>
    </div>
  )
}

export default Home;
