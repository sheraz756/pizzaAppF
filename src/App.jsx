import React, { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import Cart from './pages/Cart'
import Navbar from './components/NavBar/Navbar'
import { CartContext } from './CartContext'
const App = () => {
  const [cart,setCart] = useState({})
  return (
<Router>
  <CartContext.Provider value={{name:"sheraz"}}>
  <Navbar />
  <Routes>
  <Route path='/' element={<Home />}></Route>
  <Route path='/Products' element={<ProductPage />}></Route>
  <Route path='/Cart' element={<Cart />}></Route>

  </Routes>
  </CartContext.Provider>
</Router>
  )
}

export default App