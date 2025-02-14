import React from "react";
import { useTranslation } from "react-i18next";
import aboutImg from "../assets/aboutPart.png";
import { Link } from "react-router-dom";

const AboutUsPart = () => {
  const { t } = useTranslation();
  return (
    <div className="p-11 my-4 flex justify-center items-center gap-5 flex-wrap">
      {/* title and description */}
      <div className="text-center mx-auto my-5 lg:flex-1">
        <h2 className="font-semibold text-mainColor text-4xl my-3">
          {t("aboutusPartTitle")}
        </h2>
        <p className="text-gray-700 font-medium text-lg my-2 text-start leading-7">
          {t("aboutusPartDesc")}
        </p>
        <Link to={"/about"}>
          <button className="px-8 py-4 bg-mainColor text-white text-center text-[1rem] my-5 font-semibold hover:bg-secondColor">
            {t("aboutBtn")}
          </button>
        </Link>
      </div>
      {/* image */}
      <div className="mx-auto my-5 lg:flex-1">
        <img
          src={aboutImg}
          alt="الحاج الشلقامي والفنان محمد جمعة"
          className="w-full h-80 shadow-2xl rounded-2xl"
        />
      </div>
    </div>
  );
};

export default AboutUsPart;
