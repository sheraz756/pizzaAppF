import React from 'react'
import hero from '../../assets/pizza.png'

const Hero = () => {
  return (
    <div className='mt-20 container mx-auto items-center justify-between flex'>
        <div>
            <p className='text-lg font-semibold italic ml-2'>Are you hungry?</p>
            <h2 className='text-8xl font-bold '>Don't Wait</h2>
            <button className='bg-[#FFC438] rounded-full px-20 py-2 font-bold mt-4'>Order Now</button>
        </div>
        <div>
            <img src={hero} alt="Hero" width={'500px'} />
        </div>
    </div>
  )
}

export default Hero