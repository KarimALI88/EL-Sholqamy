import React from "react";
import { Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import octoberBranch from "../assets/october-branch.jpg";
import gizaBranch from "../assets/giza-branch.jpg";
import { FaLocationPin } from "react-icons/fa6";

const OurBranches = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-5">
      <h2 className="font-bold text-mainColor text-3xl my-2 text-center">
        {t("ourBranches")}
      </h2>
      <div className="p-11 my-2 flex justify-center items-center gap-5 sm:flex-wrap lg:flex-wrap">
        <div className="flex-1">
          <figure className="relative h-96 w-full">
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src={octoberBranch}
              alt="october branch"
            />
            <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div>
                <Typography variant="h5" color="blue-gray">
                  {t("octoberBranch")}
                </Typography>
              </div>
              <Typography variant="h5" color="blue-gray" className="cursor-pointer">
                <FaLocationPin size={30} />
              </Typography>
            </figcaption>
          </figure>
        </div>
        <div className="flex-1">
          <figure className="relative h-96 w-full">
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src={gizaBranch}
              alt="giza branch"
            />
            <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div>
                <Typography variant="h5" color="blue-gray">
                  {t("gizaBranch")}
                </Typography>
              </div>
              <Typography variant="h5" color="blue-gray" className="cursor-pointer">
                <FaLocationPin size={30} />
              </Typography>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default OurBranches;
