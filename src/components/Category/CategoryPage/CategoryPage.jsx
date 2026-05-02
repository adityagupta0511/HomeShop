import React, { useState, useMemo } from "react";
import Banner from "../../Banner/Banner";
import ProductList from "../../ProductList/ProductList";
import CategoryList from "../CategoryList/CategoryList";
import Cards from "../../Cards/Cards";
import { Link } from "react-router-dom";

const CategoryPage = ({
  title,
  bgImage,
  categories = [],
  showCategories = false,
  subCategories = [],
}) => {
  // Decide initial active tab -> always "All"
  const initialActive = "All";
  const [activeTab, setActiveTab] = useState(initialActive);

  const filteredItems = useMemo(() => {
    let items = Array.isArray(ProductList) ? ProductList.slice() : [];

    if (Array.isArray(categories) && categories.length > 0) {
      if (!categories.includes("All")) {
        items = items.filter((item) => categories.includes(item.category));
      }
    }

    if (Array.isArray(subCategories) && subCategories.length > 0) {
      if (activeTab !== "All") {
        items = items.filter((item) => item.subCategory === activeTab);
      }
      return items;
    }

    if (Array.isArray(categories) && categories.length > 1) {
      if (activeTab && activeTab !== "All") {
        items = items.filter((item) => item.category === activeTab);
      }
      return items;
    }

    return items;
  }, [categories, subCategories, activeTab]);

  if (showCategories) {
    return (
      <div>
        <Banner title={title} bgImage={bgImage} />
        <div className="max-w-[1400px] mx-auto px-10 py-16">
          {Array.isArray(CategoryList) && CategoryList.length > 0 ? (
            <div className="flex flex-wrap gap-10 mt-20 -mb-20">
              {CategoryList.map((cat) => (
                <div className="flex-1 basis-[300px]" key={cat.id}>
                  <div className="w-full min-h-[30vh] relative -mb-10">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="absolute bottom-0"
                    />
                  </div>
                  <div className="bg-zinc-100 pt-15 p-8 rounded-xl mb-15">
                    <h3 className="text-zinc-800 font-bold text-3xl">
                      {cat.title}
                    </h3>
                    <p className="text-zinc-600 mt-3 mb-9">{cat.description}</p>
                    <Link
                      to={cat.path}
                      className="bg-gradient-to-b from-teal-400 to-teal-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-teal-600 transition-all duration-300 cursor-pointer"
                    >
                      See All
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-zinc-600">
              No categories available.
            </p>
          )}
        </div>
      </div>
    );
  }

  const showSubTabs = Array.isArray(subCategories) && subCategories.length > 0;
  const showMainTabs =
    !showSubTabs && Array.isArray(categories) && categories.length > 1;

  const tabs = showSubTabs
    ? ["All", ...subCategories]
    : showMainTabs
    ? ["All", ...categories]
    : null;

  return (
    <div>
      <Banner title={title} bgImage={bgImage} />
      <div className="max-w-[1400px] mx-auto px-10 py-12">
        {tabs && (
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-5 py-2 text-lg whitespace-nowrap rounded-lg cursor-pointer
                  ${
                    activeTab === tab
                      ? "bg-gradient-to-b from-teal-400 to-teal-500 text-white"
                      : "bg-zinc-100"
                  }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-9 pt-10">
          {filteredItems && filteredItems.length > 0 ? (
            filteredItems.map((product) => (
              <Cards
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                discountPrice={product.discountPrice}
                quantity={product.quantity}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-zinc-600 text-lg">No products found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
