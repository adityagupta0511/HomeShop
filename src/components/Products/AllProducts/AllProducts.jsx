import React from "react";
import CategoryPage from "../../Category/CategoryPage/CategoryPage";
import AllCatBanner from "../../../assets/all-banner.jpg";
import ProductList from "../../ProductList/ProductList";

const AllProducts = () => {
  // ProductList me se unique categories nikal lo
  const allCategories = Array.from(
    new Set(ProductList.map((item) => item.category))
  );

  return (
    <div>
      <CategoryPage
        title="All Products"
        bgImage={AllCatBanner}
        categories={allCategories}
      />
    </div>
  );
};

export default AllProducts;
