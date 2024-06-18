import React, {  useState } from 'react';
import './gigs.scss'
import down from './down.png';
import GigCard from '../../components/cards/GigCard';
import { gigs } from '../../data';


// type sortType = {
//   type: SetStateAction<string> 
// }

const Gigs = () => {

  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState('sales');

  const reSort = (type: any) => {
    setSort(type);
    setOpen(false);
  }

  return ( 
    <main className='gigs'>
      <section className="gigs-cont">
        <span className='bc'>FIVER, GRAPHICS & DESIGN </span>
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
          <span className='sortType'>{sort === 'sales' ? 'Best Selling' : 'Newest'}</span>
          <img src={down} alt="" onClick={() => setOpen(!open)}/>

          { open &&
          <div className="r-menu">
            { sort === 'sales' ?
              <span onClick={() => reSort('createdAt')}>Newest</span>:
              <span onClick={() => reSort('sales')}>Best Selling</span>
            }
          </div>
          }
        </div>
      </div>

        <section className="cards">
          { 
          gigs.map((gig) => (
            <GigCard key={gig.id} item={gig}/>
          ))
          }
        </section>
        
      </section>
    </main>
  )
}

export default Gigs;
