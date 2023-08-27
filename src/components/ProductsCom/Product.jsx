import React from 'react'
import pizaImg from '../../assets/peproni.png'
const Product = ({product}) => {
    console.log(product)
  return (
    <div>
    <img src={product.image} alt="" />
    <div className='text-center'>
    <h2 className='font-bold mb-2'>{product.name}</h2>
    <span className='bg-gray-400 rounded-full px-4 py-2 text-white'>{product.size}</span>
    <div className='flex justify-around items-center mt-4'>
        <span>Rs {product.price}</span>
        <button className='bg-yellow-400 rounded-full px-4 py-2 text-white'>Add to Cart</button>
    </div>
    </div>
</div>
  )
}

export default Product