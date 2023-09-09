import React,{useContext} from 'react'
import pizaImg from '../../assets/peproni.png'
import { CartContext } from '../../CartContext'
import { Link} from 'react-router-dom'
const Product = ({product}) => {
  const{cart,setCart} = useContext(CartContext)


  const addToCart = (e,product) =>{
    e.preventDefault()
    console.log(product._id)
      const _cart = {...cart}
      // console.log(_cart)
     if(!_cart.items){
      _cart.items={}
     }
      if(_cart.items[product._id])
      {
        _cart.items[product._id]  += 1
      }
      else{
        _cart.items[product._id] = 1
      }
      if(!_cart.totalItems){
        _cart.totalItems = 0
      }
    
        _cart.totalItems += 1
    
      setCart(_cart)
  }

  return (

  <Link to={`/products/${product._id}`}>
      <div>
    <img src={product.image} alt="" />
    <div className='text-center'>
    <h2 className='font-bold mb-2'>{product.name}</h2>
    <span className='bg-gray-400 rounded-full px-4 py-2 text-white'>{product.size}</span>
    <div className='flex justify-around items-center mt-4'>
        <span>Rs {product.price}</span>
        <button onClick={(e)=>{addToCart(e,product)}} className='bg-yellow-400 rounded-full px-4 py-2 text-white'>ADD</button>
    </div>
    </div>
</div>
  </Link>
  )
}

export default Product