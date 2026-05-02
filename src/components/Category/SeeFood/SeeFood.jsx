import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage';
import SeefoodBanner from '../../../assets/seafood-banner.jpg';

const SeeFood = () => {
  return (
    <div>
      <CategoryPage 
        title='Fruits & Veggies' 
        bgImage={SeefoodBanner}
        categories={['Meat & SeaFood']}
      />
    </div>
  )
}

export default SeeFood;