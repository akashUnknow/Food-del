import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/pages/Home/Home'
import Cart from './components/pages/Cart/Cart'
import PlaceOrder from './components/pages/PlaceOrder/PlaceOrder'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/PlaceOrder' element={<PlaceOrder />} />
      </Routes>
    </div>
  )
}

export default App
