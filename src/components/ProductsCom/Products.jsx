import React,{useState,useEffect,useContext} from 'react'
import pizaImg from '../../assets/peproni.png'
import Product from './Product'
import axios from 'axios'
import { CartContext } from '../../CartContext'
const Products = () => {
    const {name} =useContext(CartContext)
    const [data,setData] = useState([])
    useEffect(()=>{
      const getProducts = async()=>{
            try{
                const resp = await axios.get('http://154.41.229.104:5501/api/products')
                console.log(resp.data)
                setData(resp.data)
            }catch(e)
            {
                console.log(e)
            }
      } 
      getProducts()     
    },[])

  return (
  <div className='container mx-auto'>
    <h1 className='font-bold'>Products {name}</h1>
    <div className='grid grid-cols-4 gap-24'>
{
    data.map((product,index)=><Product product={product} key={product._id} />)
}


    
    </div>
  </div>
  )
}

export default Products