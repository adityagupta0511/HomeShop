import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Cards = ({ image, name, price, discountPrice, quantity }) => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/shop-now", {
      state: {
        image,
        name,
        price,
        discountPrice,
        quantity,
      },
    });
  };

  return (
    <div className="bg-zinc-100 p-5 rounded-xl">
      <div className="flex justify-between">
        <span className="text-3xl text-zinc-300">
          <FaHeart />
        </span>
        <button
          className="bg-gradient-to-b from-teal-400 to-teal-500 text-white 
        text-xl px-4 py-3 rounded-lg"
        >
          <FaPlus />
        </button>
      </div>

      <div className="w-full h-50">
        <img src={image} className="w-full h-full object-contain" />
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="text-md text-zinc-500 mt-1">{quantity}</p>

        <p className="mt-4 mb-3 flex items-center justify-center gap-3">
          <span className="text-zinc-500 line-through text-xl font-semibold">
            ₹{price}
          </span>
          <span className="text-zinc-800 font-bold text-2xl">
            ₹{discountPrice}
          </span>
        </p>

        <Button content="Shop Now" onClick={handleShopNow} />
      </div>
    </div>
  );
};

export default Cards;
