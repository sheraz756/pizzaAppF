import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import CartImg from '../../assets/cart.png'
const Navbar = () => {
    const cartStyle ={
        display:'flex',
        backgroundColor:'#FFC463',
        borderRadius:'50px',
        padding:'2px 10px'
    }
  return (
    <nav className='container mx-auto mt-3 flex items-center justify-between'>
        <Link to='/'><img src={logo} alt="" /></Link>
        <ul className='flex items-center'>
            <Link to='/'><li>Home</li></Link>
            <Link to='/products'><li className='ml-6'>Products</li></Link>
           <Link to='/cart'> <li className='ml-6'>
              <div style={cartStyle}>
              <span>10</span>
                <img src={CartImg}alt="" />
              </div>
            </li></Link>
        </ul>
    </nav>
  )
}

export default Navbar