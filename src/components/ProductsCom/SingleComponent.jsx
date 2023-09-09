import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
///products/:id
const SingleComponent = () => {
    const {id} = useParams()
    console.log(id)
    useEffect(()=>{
        const getSingleProduct = async()=>{
            try{
                const res = await axios.get(`http://154.41.229.104/api/products/${id}`)
                console.log(res.data)
            }
            catch(e)
            {
                 console.log(e)
            }
        }
        getSingleProduct()
    },[])
  return (
    <div>SingleComponent</div>
  )
}

export default SingleComponent