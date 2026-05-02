import React from "react";
import CategoryPage from "../CategoryPage/CategoryPage";
import BeveragesBanner from "../../../assets/barBanner.jpg";

const Beverages = () => {
  return (
    <div>
      <CategoryPage
        title="Beverages"
        bgImage={BeveragesBanner}
        categories={["Cold Drings", "Juices", "Tea & Coffee", "Energy Drinks"]}
      />
    </div>
  );
};

export default Beverages;
