import React, { useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";

const TopNavBar = ({ specificPage }) => {
  const [openNav, setOpenNav] = React.useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const navigation = useNavigate();

  // console.log(i18n)

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Switch language
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr"; // Set text direction
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-2 text-mainColor font-medium text-[1.2rem] hover:bg-mainColor hover:text-white"
      >
        <Link to={"/"}>{t("homeLink")}</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-2 text-mainColor font-medium text-[1.2rem] hover:bg-mainColor hover:text-white"
      >
        <Link to={"/about"}>{t("aboutLink")}</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-2 text-mainColor font-medium text-[1.2rem] hover:bg-mainColor hover:text-white"
      >
        <Link to={"/menu"}>{t("menuLink")}</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-2 text-mainColor font-medium text-[1.2rem] hover:bg-mainColor hover:text-white"
      >
        <Link to={"/gallery"}>{t("galleryLink")}</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-2 text-mainColor font-medium text-[1.2rem] hover:bg-mainColor hover:text-white"
      >
        <Link to={"/contact"}>{t("contactLink")}</Link>
      </Typography>
      {/* search */}
      <div className="max-w-[300px]">
        <div className="relative">
          <input
            className="w-full bg-transparent border-mainColor placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="مشويات / صواني"
          />
          <button
            className="absolute top-1 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-mainColor"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
            {t("search")}
          </button>
        </div>
      </div>
    </ul>
  );

  return (
    <div
      className={`max-h-[768px] w-[100%] pt-1 px-4 shadow-none ${
        scrolled || specificPage === true
          ? "bg-[#F3F3F3] shadow-lg"
          : "bg-transparent"
      } blur-0`}
    >
      <Navbar className=" z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-transparent shadow-none border-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div>
            <Typography as={Link} to="/" className="mr-4 cursor-pointer">
              <img src={logo} alt="logo" loading="lazy" className="w-14 h-14" />
            </Typography>
          </div>
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                onClick={() => navigation("/reservation")}
                size="md"
                className="hidden lg:inline-block bg-mainColor text-white hover:bg-transparent hover:text-mainColor rounded-none"
              >
                <span>{t("bookLink")}</span>
              </Button>
              <Button
                variant="text"
                onClick={() =>
                  changeLanguage(i18n.language == "ar" ? "en" : "ar")
                }
                size="md"
                className="hidden lg:inline-block bg-transparent border-mainColor text-mainColor border-2 hover:bg-mainColor hover:text-white rounded-none"
              >
                <span>{t("changeLang")}</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6 text-mainColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-mainColor"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav} className="block lg:hidden">
          {navList}
          <div className="flex flex-col gap-2 mt-4">
            <Button
              variant="text"
              onClick={() => navigation("/reservation")}
              size="md"
              className="bg-mainColor text-white hover:bg-transparent hover:text-mainColor rounded-none"
            >
              <span>{t("bookLink")}</span>
            </Button>
            <Button
              variant="text"
              onClick={() =>
                changeLanguage(i18n.language === "ar" ? "en" : "ar")
              }
              size="md"
              className="bg-transparent border-mainColor text-mainColor border-2 hover:bg-mainColor hover:text-white rounded-none"
            >
              <span>{t("changeLang")}</span>
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopNavBar;
