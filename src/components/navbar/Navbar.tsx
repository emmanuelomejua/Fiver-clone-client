import './navbar.scss';

const links = [
    {    
        id: 0,
        name: 'Fiver Business'
    },
    {    
        id: 1,
        name: 'Explore'
    },
    {    
        id: 2,
        name: 'English'
    },
    {    
        id: 3,
        name: 'Sign In'
    },
    {    
        id: 4,
        name: 'Become a seller'
    },
]

const Navbar = () => {
  return (
    <div className='navbar'>
       <div className="cont">
       <div className="logo">
        <span className='text'>fiver</span>
        <span className='dot'>.</span>
       </div>

       <div className="links">
        {
            links.map((l) => (
                <span key={l.id}>{l.name}</span>
            ))
        }

        <button>Sign In</button>
       </div>
       </div>
    </div>
  )
}

export default Navbar
