import React from 'react'
import Heading from '../Heading/Heading';
import { FaHeart, FaLeaf, FaSeedling } from "react-icons/fa";
import { FaShieldHeart } from "react-icons/fa6";
import Basket from '../../assets/basket-full-vegetables.png';

const Values = () => {

  const leftValues = value.slice(0, 2).map(item => {
    return (
      <div 
        key={item.id}
        className='flex flex-col items-end gap-2' 
      >
        <h3 className='flex items-center gap-3 text-zinc-800 text-2xl md:text-3xl font-bold'>
          {item.title}
          <span className="w-15 h-15 flex items-center justify-center border-2 border-teal-500 rounded-full text-3xl bg-teal-500 text-white">
            {item.icon}
          </span>
        </h3>
        <p className='text-zinc-600 text-right text-sm md:text-base'>
          {item.para}
        </p>
      </div>
    )
  })

  const rightValues = value.slice(2).map(item => {
    return (
      <div 
        key={item.id}
        className='flex flex-col items-start gap-2' 
      >
        <h3 className='flex items-center gap-3 text-zinc-800 text-2xl md:text-3xl font-bold'>
          <span className="w-15 h-15 flex items-center justify-center border-2 border-teal-500 rounded-full text-3xl bg-teal-500 text-white">
            {item.icon}
          </span>

          {item.title}
        </h3>
        <p className='text-zinc-600 text-sm md:text-base'>
          {item.para}
        </p>
      </div>
    )
  })

  return (
    <section>
      <div className='max-w-[1400px] mx-auto px-6 md:px-10'>
        <Heading highlight="Our" heading="Values"/>

        {/* mobile layout */}
        <div className='flex flex-col md:hidden items-center my-8'>
          <img 
            src={Basket} 
            alt="Basket" 
            className="w-48 mb-6"
          />
          <div className="flex flex-col gap-8 w-full">
            {value.map(item => (
              <div 
                key={item.id}
                className='flex flex-col items-start gap-2' 
              >
                <h3 className='flex items-center gap-3 text-zinc-800 text-2xl md:text-3xl font-bold'>
                  <span className="w-15 h-15 flex items-center justify-center border-2 border-teal-500 rounded-full text-3xl bg-teal-500 text-white">
                    {item.icon}
                  </span>
                  {item.title}
                </h3>
                <p className='text-zinc-600 text-sm md:text-base'>
                  {item.para}
                </p>
              </div>
            ))}
          </div>
        </div>


        {/* desktop layout */}
        <div className='hidden md:flex gap-7 mt-[60px]'>
          <div className='min-h-[100px] flex flex-col justify-between gap-10'>
            {leftValues}
          </div>
          <div className='w-1/2 flex justify-center'>
            <img src={Basket} alt="Basket"/>
          </div>
          <div className='min-h-[100px] flex flex-col justify-between gap-10'>
            {rightValues}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values;


const value = [
  {
    id: 1,
    title: 'Trust',
    para: 'It is a long established fact that a reader will be distracted by the readable.',
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: 'Always Fresh',
    para: 'We ensure freshness in every product, straight from the source.',
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: 'Food Safety',
    para: 'Our food is handled with the highest standards of safety and care.',
    icon: <FaShieldHeart />,
  },
  {
    id: 4,
    title: '100% Organic',
    para: 'All our products are completely organic and chemical-free.',
    icon: <FaSeedling />,
  },
]
