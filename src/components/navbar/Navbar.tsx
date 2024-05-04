import { Link, useLocation } from 'react-router-dom';
import './navbar.scss';
import { useEffect, useState } from 'react';
import pic1 from '../../assets/pic.jpeg'

const menuLinks =  [
    {
        name: 'Graphice and Design'
    },
    {
        name: 'Video and Animation'
    },
    {
        name: 'Writing and Transition'
    },
    {
        name: 'AI Services'
    },
    {
        name: 'Digital Marketing'
    },
    {
        name: 'Music and Audio'
    },
    {
        name: 'Programming and Tech'
    },
    {
        name: 'Business'
    },
    {
        name: 'Lifestyle'
    },
]


const Navbar = () => {

    const user = {
        id: 0,
        isSeller: true,
        username: 'Chibu'
    }

    const links = [
        {    
            id: 0,
            name: 'Fiver Business',
            url: '#'
        },
        {    
            id: 1,
            name: 'Explore',
            url: '#'
        },
        {    
            id: 2,
            name: 'English',
            url: '#'
        },
        {    
            id: 3,
            name: 'Sign In',
            url: '#'
        },
        {    
            id: 4,
            name: !user?.isSeller && 'Become a seller',
            url: '#'
        },
    ]

    const [active, setActive] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const { pathname } = useLocation()

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
    <div className={active || pathname !== '/' ? 'navbar active': 'navbar'}>
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
            <img src={pic1} alt="" className="" />
            <span onClick={() => setMenuOpen(!menuOpen)}>{user.username}</span>


            { menuOpen && 

            <div className="options">
                {user.isSeller && (
                    <>
                        <Link to='/gigs' className='link'>Gigs</Link>
                        <Link to='/addgig' className='link'>Add New Gig</Link>
                    </>
                )}
                <Link to='/orders' className='link'>Orders</Link>
                <Link to='/messages' className='link'>Messages</Link>
                <span>Logout</span>
            </div>
            }

        </div>
       )}
       </div>
       </div>

       {(active || pathname !== '/') && 
        <>
        <hr />

        <section className="menu">
            {menuLinks.map((l) => (
                <span className='link' key={l.name}>{l.name}</span>
            ))}
       </section>
        </>
       }
    </div>
  )
}

export default Navbar
