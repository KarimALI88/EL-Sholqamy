import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";

const CartButton = () => {
  const cartLength = useSelector(state => state.cart.cart.length)

  return (
    <div className={`fixed right-9 my-1 bottom-8 p-4 rounded-full bg-mainColor shadow-2xl z-50 ${cartLength == 0 && "animate-pulse"}`}>
      <Link to={"/cart"} className="relative">
        <FaCartShopping size={24} color="white" />
        <span className="absolute -top-3 -right-2 bg-black text-white text-md font-semibold block h-6 w-6 text-center  rounded-full">{cartLength}</span>
      </Link>
    </div>
  );
};

export default CartButton;
