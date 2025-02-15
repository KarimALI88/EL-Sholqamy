import React from "react";
import MainHeader from "../components/MainHeader";
import contactBg from "../assets/contact-us.png";
import { useTranslation } from "react-i18next";
import { IoPhonePortrait, IoTimer } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <div>
      <MainHeader title={"contactHeaderTitle"} image={contactBg} />
      {/* Get In Touch */}
      <div className="-mt-10 bg-[#130F0C] p-10 text-center">
        <div>
          <h2 className="text-5xl font-black p-2 text-mainColor">
            {t("contactTitle")}
          </h2>
          <p className="text-gray-500 text-xl font-medium p-2 sm:w-[80%]  lg:w-[60%] mx-auto">
            {t("contactDesc")}
          </p>
        </div>
        {/* -------------------------------------------------------------- */}
        <div className="flex sm:justify-start lg:justify-center items-center mx-auto gap-5 my-10 flex-wrap">
          {/* address */}
          <div className="flex items-center gap-2">
            <div>
              <FaLocationDot className="text-mainColor" size={60} />
            </div>
            <div>
              <h6 className="font-semibold text-xl text-gray-600 my-2">
                - El-Sheikh Zayed
              </h6>
              <h6 className="font-semibold text-xl text-gray-600 my-2">
                - Waslt Dahshour
              </h6>
            </div>
          </div>
          {/* phone numbers */}
          <div className="flex items-center gap-2">
            <div>
              <IoPhonePortrait className="text-mainColor" size={60} />
            </div>
            <div>
              <h6 className="font-semibold text-xl text-gray-600">
                01061472186
              </h6>
            </div>
          </div>

          {/* times */}
          <div className="flex items-center gap-2">
            <div>
              <IoTimer className="text-mainColor" size={60} />
            </div>
            <div>
              <h6 className="font-semibold text-xl text-gray-600">1AM-12AM</h6>
            </div>
          </div>
          {/* email */}
          <div className="flex items-center gap-2">
            <div>
              <MdOutlineMail className="text-mainColor" size={60} />
            </div>
            <div>
              <h6 className="font-semibold text-xl text-gray-600">
                sholqamy@gmail.com
              </h6>
            </div>
          </div>
        </div>
        {/* -------------------------------------------------------------- */}
        <hr className="w-[90%] mx-auto" />
        <div className="my-10 text-center">
          <h3 className="text-3xl font-black p-2 text-mainColor">
            {t("followUs")}
          </h3>
          <div className="flex justify-center items-center gap-10 my-10 flex-wrap">
            <div>
              <a href="https://www.facebook.com/gamalsholqamy/" target="_blank">
                <FaFacebook size={100} className="text-mainColor" />
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/gamalsholqamy?igshid=YmMyMTA2M2Y%3D"
                target="_blank"
              >
                <FaInstagramSquare size={100} className="text-mainColor" />
              </a>
            </div>
            <div>
              <a
                href="https://www.tiktok.com/@gamal_sholqamy?is_from_webapp=1&sender_device=pc"
                target="_blank"
              >
                <FaTiktok size={100} className="text-mainColor" />
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/channel/UCuTHCYvU7mTAzts4v18rdjQ"
                target="_blank"
              >
                <FaYoutube size={100} className="text-mainColor" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
