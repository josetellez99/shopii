import React from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { SignIn } from '../SignIn'
import { NavBar } from '../../Components/NavBar'
import { ShoppingCartProvider } from '../../Context'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'


const AppRoutes = () => {

  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/:category', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-order/:id', element: <MyOrder /> },
    { path: '/not-found', element: <NotFound /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '*', element: <NotFound /> }
  ])
  
  return routes
}


function App() {

  return (
    <>
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
    </>
  )
}

export { App }