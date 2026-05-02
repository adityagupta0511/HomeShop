import React from "react";
import CategoryPage from "../CategoryPage/CategoryPage";
import FoodGrains from "../../../assets/foodgrainsBanner.jpg";

const Foodgrains = () => {
  return (
    <div>
      <CategoryPage
        title="FoodGrains, Oil & Masala"
        bgImage={FoodGrains}
        categories={[
          "Food Grains",
          "Pulses/Dal",
          "Spices & Masala",
          "Oils & Ghee",
        ]}
      />
    </div>
  );
};

export default Foodgrains;
