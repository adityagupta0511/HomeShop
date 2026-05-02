import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ShopNow = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state;

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    pincode: "",
    quantity: 1,
    paymentMethod: "COD",
  });

  // message state ab nahi chahiye kyunki naya page pe dikhayenge
  // const [message, setMessage] = useState("");

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-100">
        <div className="bg-white p-8 rounded-xl shadow-md text-center space-y-4">
          <p className="text-lg font-semibold">No product selected.</p>
          <button
            className="bg-teal-500 text-white px-4 py-2 rounded-lg"
            onClick={() => navigate("/")}
          >
            Go Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // yahi par tum future me backend API call bhi kar sakte ho

    //ab yahan se success page pe navigate karenge
    navigate("/order-success", {
      state: {
        product,
        formData,
      },
    });
  };

  return (
    <div className="min-h-screen bg-zinc-100 flex items-center justify-center p-4 mt-20">
      <div className="bg-white max-w-4xl w-full rounded-2xl shadow-lg grid md:grid-cols-2 gap-6 p-6">
        <div className="flex flex-col items-center text-center">
          {/* PRODUCT IMAGE */}
          <img
            src={product.image}
            alt={product.name}
            className="w-48 h-48 object-contain mb-4"
          />

          {/* PRODUCT NAME & QUANTITY */}
          <h2 className="text-2xl font-bold mb-1">{product.name}</h2>
          <p className="text-zinc-500 mb-2">{product.quantity}</p>

          {/* PRICE SECTION */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-zinc-500 line-through text-xl">
              ₹{product.price}
            </span>
            <span className="text-2xl font-bold text-teal-600">
              ₹{product.discountPrice}
            </span>
          </div>

          {/* ⭐ IMPROVED CUSTOMER REVIEW SECTION */}
          <div className="mt-3 w-full px-5">
            <div className="bg-white shadow-md rounded-xl p-5 border border-zinc-200">
              {/* reviewer header */}
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="https://i.pravatar.cc/60?img=12"
                  alt="reviewer"
                  className="w-10 h-10 rounded-full border"
                />
                <div className="text-left">
                  <p className="font-semibold text-zinc-800">Aman Sharma</p>
                  <p className="text-sm text-green-600 font-medium">
                    ✔ Verified Customer
                  </p>
                </div>
              </div>

              {/* stars */}
              <div className="flex gap-1 mb-2 text-yellow-400 text-xl">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* review text */}
              <p className="text-zinc-700 leading-relaxed italic">
                "Product bahut hi accha tha, quality bilkul fresh aur price bhi
                best. Delivery bhi time pe mil gaya! Value for money 👌"
              </p>

              {/* purchase date */}
              <p className="text-sm text-zinc-500 mt-3 text-right">
                — Reviewed on 12 Nov 2025
              </p>
            </div>
          </div>
        </div>

        {/* Order Form */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Enter your details</h3>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows="3"
                className="w-full border rounded-lg px-3 py-2 outline-none"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Pincode</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Quantity</label>
              <input
                type="number"
                name="quantity"
                min="1"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Payment Method
              </label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 outline-none"
              >
                <option value="COD">Cash on Delivery</option>
                <option value="UPI">UPI</option>
                <option value="Card">Card</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-lg"
            >
              Confirm Order
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default ShopNow;
