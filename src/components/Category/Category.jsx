import React from 'react'
import Heading from '../Heading/Heading';
import CategoryList from './CategoryList/CategoryList';
import { Link } from 'react-router-dom';

const Category = () => {

  const renderCards = CategoryList.slice(0, 3).map(card => {
    return (
      <div 
        key={card.id}
        className='flex-1 basis-[300px]' 
      >
        <div className='w-full min-h-[30vh] relative -mb-10'>
          <img 
            src={card.image} 
            className='absolute bottom-0' 
          />
        </div>
        <div className='bg-zinc-100 pt-15 p-8 rounded-xl mb-15'>
          <h3 className='text-zinc-800 font-bold text-3xl'>
            {card.title}
          </h3>
          <p className='text-zinc-600 mt-3 mb-9'>
            {card.description}
          </p>
          <Link 
            to={card.path}
            className='bg-gradient-to-b from-teal-400 to-teal-500 text-white px-8 py-3 rounded-full md:text-lg text-md hover:scale-105 hover:to-teal-600 transition-all duration-300 cursor-pointer'
          >
            See All
          </Link>
        </div>
      </div>
    )
  })

  return (
    <section>
      <div className='max-w-[1400px] mx-auto px-10 py-20'>
        <Heading highlight="Shop" heading="by Category"/>

        {/* Category Cards */}
        <div className='flex flex-wrap gap-10 mt-20'>
          {renderCards}
        </div>

        <div className='mx-auto w-fit'>
          <Link 
            to='/all-category'
            className='bg-gradient-to-b from-teal-400 to-teal-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-teal-600 transition-all duration-300 cursor-pointer'
          >
            View All Category
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Category;


