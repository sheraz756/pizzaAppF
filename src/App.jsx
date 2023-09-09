import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import Navbar from './components/NavBar/Navbar';
import { CartContext } from './CartContext';
import SingleComponent from './components/ProductsCom/SingleComponent';

const App = () => {
  // Load cart data from localStorage on initial mount
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : null;
  });

  useEffect(() => {
    // Save cart data to localStorage whenever it changes
    if (cart !== null) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <Router>
      <CartContext.Provider value={{ cart, setCart }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<ProductPage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/products/:id" element={<SingleComponent />} />
        </Routes>
      </CartContext.Provider>
    </Router>
  );
};

export default App;
