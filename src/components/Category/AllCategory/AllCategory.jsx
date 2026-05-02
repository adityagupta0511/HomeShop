import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage';
import AllCatBanner from '../../../assets/all-catBanner.jpg';

const AllCategory = () => {
  return (
    <div>
      <CategoryPage 
        title='All Category' 
        bgImage={AllCatBanner}
        showCategories={true}   
      />
    </div>
  )
}

export default AllCategory;
