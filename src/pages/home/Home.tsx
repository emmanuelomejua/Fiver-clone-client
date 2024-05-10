import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import './home.scss';

const Home: React.FC = () => {
  return (
    <div>
      <Featured/>
      <TrustedBy/>
    </div>
  )
}

export default Home;
