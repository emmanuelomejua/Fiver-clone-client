import './features.scss';

const Features = () => {
  return (
    <div className='features'>
        <div className="featues-cont">
            <section className="f-items">
                <h2>A whole world  of freelance at your fingertips</h2>
                <div className="f-title">
                    <img src='./img/check.png' alt=''/>
                    <h4>The best for every budget</h4>
                </div>
                <p>Find high quality service for every price point. No hourly rate, just project based priicing</p>

                <div className="f-title">
                    <img src='./img/check.png' alt=''/>
                    <h4>The best for every budget</h4>
                </div>
                <p>Find high quality service for every price point. No hourly rate, just project based priicing</p>

                <div className="f-title">
                    <img src='./img/check.png' alt=''/>
                    <h4>The best for every budget</h4>
                </div>
                <p>Find high quality service for every price point. No hourly rate, just project based priicing</p>

                <div className="f-title">
                    <img src='./img/check.png' alt=''/>
                    <h4>The best for every budget</h4>
                </div>
                <p>Find high quality service for every price point. No hourly rate, just project based priicing</p>
            </section>

            <section className="f-videos">
                <video src='./img/fun.mp4' controls/>
            </section>
        </div>
    </div>
  )
}

export default Features
