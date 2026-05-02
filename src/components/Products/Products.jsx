import React, { useState, useEffect } from "react";
import Heading from "../Heading/Heading";
import ProductList from "../ProductList/ProductList";
import Cards from "../Cards/Cards";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "swiper/css";
import "swiper/css/navigation";

const Products = () => {
  const categories = [
    "All",
    "Fruits",
    "Vegetables",
    "Dairy & Bakery",
    "Meat & SeaFood",
    "Food Grains",
    "Pulses/Dal",
    "Spices & Masala",
    "Oils & Ghee",
    "Cold Drings",
    "Juices",
    "Tea & Coffee",
    "Energy Drinks",
    "Dry Fruits",
    "Cookies",
    "Noodles",
    "Snacks",
    "Chocolates",
  ];

  // "All" ko slide se bahar rakhenge
  const slideCategories = categories.filter((cat) => cat !== "All");

  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);

  // URL se values
  const searchQuery = (params.get("search") || "").toLowerCase();
  const categoryParam = params.get("category");

  // URL se active tab decide karna (category > search > All)
  const getInitialTab = () => {
    if (categoryParam && categories.includes(categoryParam)) {
      return categoryParam;
    }

    if (!searchQuery) return "All";

    const matchedProduct = ProductList.find((item) =>
      item.name.toLowerCase().includes(searchQuery)
    );

    return matchedProduct ? matchedProduct.category : "All";
  };

  const [activeTab, setActiveTab] = useState(getInitialTab);

  useEffect(() => {
    setActiveTab(getInitialTab());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, categoryParam]);

  // pehle category ke hisaab se filter
  let filteredItems =
    activeTab === "All"
      ? ProductList
      : ProductList.filter((item) => item.category === activeTab);

  // agar search hai to us category ke andar hi naam se filter
  if (searchQuery) {
    filteredItems = filteredItems.filter((item) =>
      item.name.toLowerCase().includes(searchQuery)
    );
  }

  // All tab => sirf 8 products
  // Baaki tabs => poore category ke products
  const itemsToShow =
    activeTab === "All" ? filteredItems.slice(0, 8) : filteredItems;

  const renderCards = itemsToShow.map((product) => (
    <Cards
      key={product.id}
      image={product.image}
      name={product.name}
      price={product.price}
      discountPrice={product.discountPrice}
      quantity={product.quantity}
    />
  ));

  // Category button click par URL bhi change + scroll up to products
  const handleCategoryClick = (cat) => {
    setActiveTab(cat);

    if (cat === "All") {
      navigate("/");
    } else {
      navigate(`/?category=${encodeURIComponent(cat)}`);
    }

    setTimeout(() => {
      const section = document.getElementById("products");
      if (!section) return;
      const y = section.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 150);
  };

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20 -mb-20">
        <Heading highlight="Our" heading="Products" />

        {/* Categories Section */}
        <div className="md:mt-0 mt-10">
          {/* Arrow icons upar right side (pahle jaisa) */}
          <div className="flex justify-end mb-4 gap-x-3">
            <button className="text-2xl cat-prev text-zinc-800 flex justify-center items-center rounded-lg w-9 h-9 bg-zinc-100 hover:bg-gradient-to-b hover:from-teal-400 hover:to-teal-500 hover:text-white cursor-pointer">
              <IoIosArrowBack />
            </button>
            <button className="text-2xl cat-next text-zinc-800 flex justify-center items-center rounded-lg w-9 h-9 bg-zinc-100 hover:bg-gradient-to-b hover:from-teal-400 hover:to-teal-500 hover:text-white cursor-pointer">
              <IoIosArrowForward />
            </button>
          </div>

          {/* Category buttons row */}
          <div className="flex items-center gap-4 overflow-hidden pb-2">
            {/* Fixed All Button */}
            <button
              className={`px-5 py-2 text-lg whitespace-nowrap rounded-lg cursor-pointer
                ${
                  activeTab === "All"
                    ? "bg-gradient-to-b from-teal-400 to-teal-500 text-white"
                    : "bg-zinc-100"
                }`}
              onClick={() => handleCategoryClick("All")}
            >
              All
            </button>

            {/* Swiper inside fixed width box */}
            <div className="flex-1 overflow-hidden">
              <Swiper
                navigation={{
                  nextEl: ".cat-next",
                  prevEl: ".cat-prev",
                }}
                slidesPerView={"auto"}
                spaceBetween={12}
                loop={false}
                modules={[Navigation]}
                className="categorySwiper"
              >
                {slideCategories.map((category) => (
                  <SwiperSlide key={category} className="!w-auto">
                    <button
                      className={`px-5 py-2 text-lg whitespace-nowrap rounded-lg cursor-pointer
                        ${
                          activeTab === category
                            ? "bg-gradient-to-b from-teal-400 to-teal-500 text-white"
                            : "bg-zinc-100"
                        }`}
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-9 mt-10">
          {renderCards}
        </div>

        {/* View All button wapas */}
        <div className="mt-15 mx-auto w-fit">
          <Link
            to="/all-products"
            className="bg-gradient-to-b from-teal-400 to-teal-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-teal-600 transition-all duration-300 cursor-pointer"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
