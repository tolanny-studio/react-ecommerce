import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css'
import HomePage from './pages/HomePage'
import { Routes,Route } from 'react-router'
import CheckoutPage from './pages/checkout/CheckoutPage'
import OrdersPage from './pages/OrdersPage'
import TrackingPage from './pages/TrackingPage'
import Page404 from './pages/Page404'



function App() {

  const cartURL = "/api/cart-items"

  const [cart,setCart] = useState([])

  useEffect(()=>{
    axios.get(cartURL).then((response)=>{
      setCart(response.data);
    })
  },[])

  return (
    <Routes>
      <Route index element={<HomePage cart={cart}/>} />
      <Route path='/checkout' element={<CheckoutPage cart={cart}/>} />
      <Route path='/orders' element={<OrdersPage />}/>
      <Route path='/tracking' element={< TrackingPage/>}/>
      <Route path='*' element={<Page404/>}/>
    </Routes>
    
  )
}

export default App
