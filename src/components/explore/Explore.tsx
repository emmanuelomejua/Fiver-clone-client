import './explore.scss';
import ad from '../../assets/hajiya.jpeg';

const Explore = () => {
  return (
    <div className='explore'>
        <div className="e-cont">
            <div className="e-left">
                <h2>fiver business</h2>
                <h2>A business solution designed for teams</h2>

                <p className='p-text'>Upgrade to a curated experience packed with tools and benefit dedicate for business</p>

                <div className="e-item">
                    <img src='./img/check.png' alt=''/>
                    <p>Connect with freelancers with proven business experience</p>
                </div>

                <div className="e-item">
                    <img src='./img/check.png' alt=''/>
                    <p>Get matched with perfect talent by a customer success manager</p>
                </div>

                <div className="e-item">
                    <img src='./img/check.png' alt=''/>
                    <p>Manage teamwork and boost productivity with one perfect workspace</p>
                </div>

                <button className='e-btn'>Explore fiver business</button>
            </div>

            <div className="e-right">
                <img src={ad} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Explore
