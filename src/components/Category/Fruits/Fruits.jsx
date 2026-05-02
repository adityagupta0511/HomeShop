import React from "react";
import CategoryPage from "../CategoryPage/CategoryPage";
import FruitsBanner from "../../../assets/fruits-banner.jpg";

const Fruits = () => {
  return (
    <div>
      <CategoryPage
        title="Fruits & Veggies"
        bgImage={FruitsBanner}
        categories={["Fruits", "Vegetables"]}
      />
    </div>
  );
};

export default Fruits;
