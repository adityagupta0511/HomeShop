import React from 'react'
import Grocery from '../../assets/grocery.png'
import Button from '../Button/Button';

const Hero = () => {
  return (
    <section>
      <div className='min-h-screen max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col items-center md:pt-30 pt-35'>
        {/* Hero content */}
        <div className='flex-1'>
          <span className='bg-teal-100 text-teal-500 text-lg px-5 py-2 rounded-full'>
            Delivering Premium Quality...
          </span>
          <h1 className='md:text-6xl/17 text-5xl/14 mt-2 font-bold'>
            Fresh Organic Delights <span className='text-teal-500'>Fruits</span> & <span className='text-teal-500'>Veggies</span> Near You
          </h1>
          <p className='text-zinc-600 md:text-lg text-md max-w-[530px] mt-5 mb-8'>
            Fresh organic fruits & veggies, straight from local farms to your table.
          </p>
          <Button content="Shop Now" />
        </div>
        {/* Hero image */}
        <div className='flex-1'>
          <img src={Grocery} alt="Hero Image" />
        </div>
      </div>
    </section>
  )
}

export default Hero;