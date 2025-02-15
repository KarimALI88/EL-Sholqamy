import React from "react";
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer class="w-full mt-10 bg-[#130F0C] p-10 ">
      <div className="flex flex-wrap justify-start items-start gap-10">
        <div className="lg:flex-1">
          <img src={logo} alt="logo" loading="lazy" className="w-24 h-24" />
          <p className="my-5 text-gray-600 text-lg font-semibold">
            {t("footerDesc")}
          </p>
        </div>
        {/* ===================================================================== */}
        <div className="lg:flex-1">
          <h6 className="text-mainColor text-xl font-semibold mb-5">
            {t("footerLinkTitle1")}
          </h6>
          <ul>
            <Link to={"/"}>
              <li className="text-gray-600 font-medium cursor-pointer text-lg my-3 hover:text-mainColor">
                {t("homeLink")}
              </li>
            </Link>
            <Link to={"/about"}>
              <li className="text-gray-600 font-medium cursor-pointer text-lg my-3 hover:text-mainColor">
                {t("aboutLink")}
              </li>
            </Link>
            <Link to={"/menu"}>
              <li className="text-gray-600 font-medium cursor-pointer text-lg my-3 hover:text-mainColor">
                {t("menuLink")}
              </li>
            </Link>
            <Link to={"/gallery"}>
              <li className="text-gray-600 font-medium cursor-pointer text-lg my-3 hover:text-mainColor">
                {t("galleryLink")}
              </li>
            </Link>
            <Link to={"/contact"}>
              <li className="text-gray-600 font-medium cursor-pointer text-lg my-3 hover:text-mainColor">
                {t("contactLink")}
              </li>
            </Link>
          </ul>
        </div>
        {/* ===================================================================== */}
        <div className="lg:flex-1">
          <h6 className="text-mainColor text-xl font-semibold mb-5">
            {t("footerLinkTitle2")}
          </h6>
          <div className="flex flex-wrap gap-5 justify-start items-center">
            <a href="https://www.facebook.com/gamalsholqamy/" target="_blank">
              <FaFacebook
                className="text-gray-600 hover:text-mainColor"
                size={30}
              />
            </a>
            <a
              href="https://www.instagram.com/gamalsholqamy?igshid=YmMyMTA2M2Y%3D"
              target="_blank"
            >
              <FaInstagramSquare
                className="text-gray-600 hover:text-mainColor"
                size={30}
              />
            </a>
            <a
              href="https://www.tiktok.com/@gamal_sholqamy?is_from_webapp=1&sender_device=pc"
              target="_blank"
            >
              <FaTiktok
                className="text-gray-600 hover:text-mainColor"
                size={30}
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCuTHCYvU7mTAzts4v18rdjQ"
              target="_blank"
            >
              <FaYoutube
                className="text-gray-600 hover:text-mainColor"
                size={30}
              />
            </a>
          </div>
        </div>
      </div>
      <hr className="w-[90%] mx-auto my-5"/>
      <div className="mt-5">
        <p className="text-lg font-normal text-gray-600 text-center">Powered By <Link className="text-mainColor">ZYNC</Link> 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
