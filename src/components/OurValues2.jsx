import React from "react";
import { useTranslation } from "react-i18next";
import { AiFillCustomerService } from "react-icons/ai";
import { FaClock, FaHandsHelping } from "react-icons/fa";
import { IoIosRestaurant } from "react-icons/io";
import { GiCampfire } from "react-icons/gi";
import { MdOutlineHighQuality } from "react-icons/md";

const OurValues2 = () => {
  const values = [
    {
      img: <AiFillCustomerService size={100} color="white"/>,
      value: "ourValues1",
    },
    {
      img: <FaClock size={100} color="white"/>,
      value: "ourValues2",
    },
    {
      img: <IoIosRestaurant size={100} color="white"/>,
      value: "ourValues3",
    },
    {
      img: <FaHandsHelping size={100} color="white"/>,
      value: "ourValues4",
    },
    {
      img: <GiCampfire size={100} color="white"/>,
      value: "ourValues5",
    },
    {
      img: <MdOutlineHighQuality size={100} color="white"/>,
      value: "ourValues6",
    },
  ];
  const { t } = useTranslation();
  return (
    <div className="p-10 text-center">
      <h2 className="font-semibold text-black text-5xl my-3">
        {t("ourValuesTitle")}
      </h2>
      <div className="flex justify-center items-center gap-5 flex-wrap my-10">
        {values.map((val, index) => (
          <div
            className="bg-mainColor w-80 shadow-2xl p-4 flex flex-col gap-3 items-center justify-center rounded-2xl my-5"
            key={index}
          >
            {val.img}
            <h5 className="text-white font-bold text-lg">{t(val.value)}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues2;
