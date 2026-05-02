import React from "react";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import Products from "../Products/Products";
import Discount from "../Discount/Discount";
import Values from "../Values/Values";
import Process from "../Process/Process";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact"; 

const Home = () => {
  return (
    <div id="home">
      <Hero />
      
      {/* Products Section -> yahi scroll hoga search ke baad */}
      <div id="products">
        <Products />
        <Category />
        <Discount />
      </div>

      {/* About Section */}
      <div id="about">
        <Values />
      </div>

      {/* Process Section */}
      <div id="process">
        <Process />
      </div>

      <Testimonials />

      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
