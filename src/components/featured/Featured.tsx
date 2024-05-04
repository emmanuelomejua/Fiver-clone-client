import './featured.scss';

const Featured = () => {
  return (
    <div className='featured'>
        <section className="cont">
            <div className="feat-l">
                <h2>Find the perfect <em>freelance </em>services for your business</h2>

                <div className="search">
                    <div className="sInput">
                        <img src="/search-normal.png" alt="" className="" />
                        <input type="text" className="" placeholder='Try building a mobile app'/>
                    </div>
                    <button className='s-btn'>Search</button>
                </div>

                <div className="popular">
                    <span>Popular:</span>
                    <button className='p-btn'>Web Design</button>
                    <button className='p-btn'>Wordpress</button>
                    <button className='p-btn'>Logo Design</button>
                    <button className='p-btn'>AI Services</button>
                </div>
            </div>

            <div className="feat-r">
                <img src="/img/man.png" alt="" className="" />
            </div>
        </section>
    </div>
  )
}

export default Featured
