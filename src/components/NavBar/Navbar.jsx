import React,{useContext} from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import CartImg from '../../assets/cart.png'
import { CartContext } from '../../CartContext'
const Navbar = () => {
  const {cart} = useContext(CartContext)
  const totalItems = cart ?cart.totalItems : 0
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
              <span>{totalItems}</span>
                <img src={CartImg}alt="" />
              </div>
            </li></Link>
        </ul>
    </nav>
  )
}

export default Navbar