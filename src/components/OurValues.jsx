import React from "react";
import { useTranslation } from "react-i18next";
import aboutImg from "../assets/ourValues.png";

const OurValues = () => {
  const { t } = useTranslation();

  return (
    <div className="p-11 my-4 flex justify-center items-center gap-5 flex-wrap">
      {/* title and description */}
      <div className="text-center mx-auto my-5 lg:flex-1">
        <h2 className="font-semibold text-mainColor text-4xl my-3">
          {t("ourValuesTitle")}
        </h2>
        <ul className="text-start list-disc my-5 mx-5">
          <li className="text-lg my-3">{t("ourValues1")}</li>
          <li className="text-lg my-3">{t("ourValues2")}</li>
          <li className="text-lg my-3">{t("ourValues3")}</li>
          <li className="text-lg my-3">{t("ourValues4")}</li>
          <li className="text-lg my-3">{t("ourValues5")}</li>
          <li className="text-lg my-3">{t("ourValues6")}</li>
        </ul>
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

export default OurValues;
