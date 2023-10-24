import { useRoutes, BrowserRouter } from 'react-router-dom'

import NavBar from '../../Components/NavBar/Navbar'
import Home from '../Home/Home'
import MyAccount from '../MyAccount/MyAccount'
import MyOrder from '../MyOrder/MyOrder'
import MyOrders from '../MyOrders/MyOrders'
import SignIn from '../SignIn/SignIn'
import NotFound from '../NotFound/NotFound'

import './App.css'

const AppRoutes = () => {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '*', element: <NotFound /> },
  ])
}

const App = () => {

  return (
    <BrowserRouter>
      <AppRoutes />
      <NavBar />
    </BrowserRouter>
  )
}

export default App
