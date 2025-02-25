import React from "react";
import { Link } from "react-router-dom";

const Filteration = () => {
  const categories = ["ني", "مشويات", "فراخ", "مشروبات", "ني", "مشويات", "فراخ", "مشروبات"];
  return (
    <div className="px-8 bg-mainColor text-white overflow-x-auto scrollbar-hide">
      <div className="flex items-center gap-8 whitespace-nowrap">
        {categories.map((category, index) => (
          <Link to={`/menu/${category}`} key={index} className="font-semibold py-2 px-4 my-1 text-[1.1rem] hover:bg-white hover:text-mainColor">{category}</Link>
        ))}
      </div>
    </div>
  );
};

export default Filteration;
