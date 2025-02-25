import React, { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Banners = () => {
  const [banners, setBanners] = useState([
    "https://img.freepik.com/free-psd/food-menu-restaurant-social-media-cover-template_120329-1339.jpg?ga=GA1.1.421455853.1676884464&semt=ais_hybrid",
    "https://img.freepik.com/free-psd/delicious-burger-food-menu-facebook-cover-template_106176-379.jpg?ga=GA1.1.421455853.1676884464&semt=ais_hybrid",
    "https://img.freepik.com/free-psd/delicious-burger-food-menu-facebook-cover-template_106176-373.jpg?ga=GA1.1.421455853.1676884464&semt=ais_hybrid",
  ]);
  const navigate = useNavigate()

  return (
    <Carousel
      className="sm:w-[20px] lg:w-3/4 mx-auto my-5 h-80"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {banners.map((banner, index) => (
        <img
          src={banner}
          alt="image 3"
          className="h-full w-full object-cover cursor-pointer"
          key={index}
          onClick={() => navigate("/menu")}
        />
      ))}
    </Carousel>
  );
};

export default Banners;
