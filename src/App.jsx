import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import Cart from './pages/Cart'
import Navbar from './components/NavBar/Navbar'
import { CartContext } from './CartContext'
import SingleComponent from './components/ProductsCom/SingleComponent'
const App = () => {
  const [cart,SetCart] = useState(null)
useEffect(()=>{
  if(cart!==null){
    const getCart = localStorage.getItem('cart')
    SetCart(getCart)
  }
  
},[])
  useEffect(()=>{
    if(cart!==null){
      localStorage.setItem('cart',JSON.stringify(cart))
    }
      
      
  },[cart])
  return (
<Router>
  <CartContext.Provider value={{cart,SetCart}}>
  <Navbar />
  <Routes>
  <Route path='/' element={<Home />}></Route>
  <Route path='/Products' element={<ProductPage />}></Route>
  <Route path='/Cart' element={<Cart />}></Route>
  <Route path='/products/:id' element={<SingleComponent />}></Route>


  </Routes>
  </CartContext.Provider>
</Router>
  )
}

export default App