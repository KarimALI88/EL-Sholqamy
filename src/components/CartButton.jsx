import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const CartButton = () => {
  return (
    <div className="fixed right-9 my-1 bottom-10 p-4 rounded-full bg-mainColor shadow-2xl z-50">
      <Link to={"/cart"} className="relative">
        <FaCartShopping size={30} color="white" />
        <span className="absolute -top-3 -right-2 bg-black text-white text-md font-semibold block h-6 w-6 text-center  rounded-full">5</span>
      </Link>
    </div>
  );
};

export default CartButton;
