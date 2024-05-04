import { Link } from 'react-router-dom';
import './navbar.scss';
import { useEffect, useState } from 'react';


const Navbar = () => {

    const user = {
        id: 0,
        isSeller: true,
        username: 'Chibu'
    }

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
            name: !user?.isSeller && 'Become a seller'
        },
    ]

    const [active, setActive] = useState(false);

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', isActive)

        return () => {
            window.removeEventListener('scroll', isActive)
        }
    }, [])


  return (
    <div className={active ? 'navbar active': 'navbar'}>
       <div className="cont">
       <div className="logo">
        <Link to='/' className='link'>
            <span className='text'>fiver</span>
        </Link>
        <span className='dot'>.</span>
       </div>

       <div className="links">
        {
            links.map((l) => (
                <span key={l.id}>{l.name}</span>
            ))
        }
       {!user && <button>Join</button>}

       {user && (
        <div className="user">
            <img src="" alt="" className="" />
            <span>{user.username}</span>

            <div className="options">
                {user.isSeller && (
                    <>
                        <span>Gigs</span>
                        <span>Add New Gig</span>
                    </>
                )}
                <span>Orders</span>
                <span>Messages</span>
                <span>Logout</span>
            </div>
        </div>
       )}
       </div>
       </div>

       {
        active && 
        <>
        <hr />

        <section className="menu">
            <span>Testin</span>
            <span>Test</span>
            <span>Test</span>
       </section>
        </>
       }
    </div>
  )
}

export default Navbar
