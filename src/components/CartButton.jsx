import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const CartButton = () => {
  return (
    <div className="fixed right-9 my-5 bottom-10 p-4 rounded-full bg-mainColor shadow-2xl">
      <Link to={"/cart"}>
        <FaCartShopping size={30} color="white" />
      </Link>
    </div>
  );
};

export default CartButton;
