import './app.scss';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { AddGig, Message, Messages, Orders, Home, MyGigs, SingleGig, Gigs, Login, Register } from './pages';


function Routes(){

  function AppLayout(){
    return(
      <main className='app'>
        <Navbar/>
        <Outlet/>
      </main>
    )
  }

  
  const router = createBrowserRouter([
   { 
    path: '/',
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/addgig',
        element: <AddGig/>
      },
      {
        path: '/orders',
        element: <Orders/>
      },
      {
        path: '/message',
        element: <Message/>
      },
      {
        path: '/messages',
        element: <Messages/>
      },
      {
        path: '/mygig',
        element: <MyGigs/>
      },
      {
        path: '/gigs',
        element: <Gigs/>
      },
      {
        path: '/gigs/:id',
        element: <SingleGig/>
      },
    ]
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/register',
      element: <Register/>
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default Routes
