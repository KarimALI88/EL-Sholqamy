import React from "react";
// import MainHeader from '../components/MainHeader'
// import homeBg from "../assets/homebg.webp"
import AboutUsPart from "../components/AboutUsPart";
import { useTranslation } from "react-i18next";
import lambBg from "../assets/menuBg.png";
import OurValues2 from "../components/OurValues2";
import DeliciousPart from "../components/DeliciousPart";
import TopNavBar from "../components/TopNavBar";
import Banners from "../components/Banners";
import Filteration from "../components/Filteration";
import OurBranches from "../components/OurBranches";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home-page">
      {/* <MainHeader title={"headerHomeTitle"} image={homeBg}/> */}
      <TopNavBar specificPage={true} />
      <Filteration />
      <Banners />
      <DeliciousPart />
      <div
        className="h-96 w-full text-center flex flex-col justify-center items-center my-5"
        style={{
          backgroundImage: `linear-gradient(rgba(17, 17, 17, 0.75), rgba(17, 17, 17, 0.75)), url(${lambBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <h3 className="text-5xl text-mainColor my-3 font-black">
          {t("bestTitle")}
        </h3>
        <h4 className="text-4xl text-white my-3 font-bold">
          {t("bestTitle2")}
        </h4>
      </div>
      <AboutUsPart />
      <OurValues2 />
      <OurBranches />
    </div>
  );
};

export default Home;
