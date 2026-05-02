import React from "react";
import CategoryPage from "../CategoryPage/CategoryPage";
import PackFoodbanner from "../../../assets/packfoodBanner.jpg";

const PackagedFood = () => {
  return (
    <div>
      <CategoryPage
        title="Packaged Food"
        bgImage={PackFoodbanner}
        categories={[
          "Dry Fruits",
          "Cookies",
          "Noodles",
          "Snacks",
          "Chocolates",
        ]}
      />
    </div>
  );
};

export default PackagedFood;
