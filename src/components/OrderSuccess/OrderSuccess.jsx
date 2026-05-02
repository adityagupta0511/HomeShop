import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { product, formData } = location.state || {};

  return (
    <div className="min-h-screen bg-zinc-100 flex items-center justify-center p-4 mt-20">
      <div className="bg-white max-w-xl w-full rounded-2xl shadow-lg p-8 text-center space-y-4">
        {/* big tick icon */}
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-3xl text-green-600">✓</span>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-zinc-800">
          Your order is booked!
        </h1>

        <p className="text-zinc-600">
          Thank you for shopping with{" "}
          <span className="font-semibold">HomeShop</span>. We&apos;ve received
          your order and will start processing it shortly.
        </p>

        {product && (
          <div className="mt-4 border rounded-xl p-4 flex items-center gap-4 text-left">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-contain"
            />
            <div>
              <p className="font-semibold text-zinc-800">{product.name}</p>
              <p className="text-sm text-zinc-500">{product.quantity}</p>
              <p className="font-bold text-teal-600 mt-1">
                ₹{product.discountPrice}
              </p>
            </div>
          </div>
        )}

        {formData && (
          <div className="text-left text-sm text-zinc-600 mt-3">
            <p>
              <span className="font-semibold">Deliver to:</span>{" "}
              {formData.fullName}
            </p>
            <p>{formData.address}</p>
            <p>Pincode: {formData.pincode}</p>
            <p>Phone: {formData.phone}</p>
          </div>
        )}

        <div className="flex gap-3 justify-center mt-6">
          <button
            className="bg-teal-500 text-white px-5 py-2 rounded-lg font-semibold"
            onClick={() => navigate("/")}
          >
            Go to Home
          </button>
          <button
            className="border border-teal-500 text-teal-600 px-5 py-2 rounded-lg font-semibold"
            onClick={() => navigate("/all-products")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
