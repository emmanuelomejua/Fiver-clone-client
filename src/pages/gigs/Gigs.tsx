import React from 'react';
import './gigs.scss'

const Gigs = () => {
  return (
    <main className='gigs'>
      <section className="gigs-cont">
        <span>FIVER, GRAPHICS & DESIGN </span>
        <h1>AI Artist</h1>
        <p>Explore the boundary of art and technologies with fiver AI artist</p>

      <div className="menu">
        <div className="left">
          <span>Budget</span>
          <input type="text" placeholder='min' />
          <input type="text" placeholder='max' />
          <button>Apply</button>
        </div>

        <div className="right">
          <span className='sortby'>Sort By</span>
          <span className='sortType'>Best Selling</span>
          <img src="./img/down.png" alt="" />

          <div className="r-menu">
            <span>Newest</span>
            <span>Best Selling</span>
          </div>
        </div>
      </div>
      </section>
    </main>
  )
}

export default Gigs;
