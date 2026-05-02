import React from "react";

const Button = ({ content, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-gradient-to-b from-teal-400 to-teal-500 text-white px-8 
      py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-teal-600 
      transition-all duration-300 cursor-pointer"
    >
      {content}
    </button>
  );
};

export default Button;
