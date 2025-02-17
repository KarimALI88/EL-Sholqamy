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

const TopNavBar = ({specificPage=false}) => {
  const [openNav, setOpenNav] = React.useState(false);
  const [scrolled,setScrolled] = useState(false)
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
        className="p-1 text-mainColor font-medium text-[1.2rem] hover:text-mainColor"
      >
        <Link to={"/"}>{t("homeLink")}</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-mainColor font-medium text-[1.2rem] hover:text-mainColor"
      >
        <Link to={"/about"}>{t("aboutLink")}</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-mainColor font-medium text-[1.2rem] hover:text-mainColor"
      >
        <Link to={"/menu"}>{t("menuLink")}</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-mainColor font-medium text-[1.2rem] hover:text-mainColor"
      >
        <Link to={"/gallery"}>{t("galleryLink")}</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-mainColor font-medium text-[1.2rem] hover:text-mainColor"
      >
        <Link to={"/contact"}>{t("contactLink")}</Link>
      </Typography>
    </ul>
  );

  return (
    <div className={`max-h-[768px] w-[100%] pt-1 px-8 shadow-none ${scrolled || specificPage === true ? "bg-[#F3F3F3] shadow-lg" : "bg-transparent"} blur-0`}>
      <Navbar className=" z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-transparent shadow-none border-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div>
            <Typography as={Link} to="/" className="mr-4 cursor-pointer">
              <img src={logo} alt="logo" loading="lazy" className="w-20 h-20" />
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
