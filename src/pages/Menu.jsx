import React, { useState } from "react";
// import MainHeader from "../components/MainHeader";
// import menuBg from "../assets/menuBg.png";
import { useTranslation } from "react-i18next";
import { FaLocationDot } from "react-icons/fa6";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import MapComponent from "../components/MapComponent";
import ProductsComponent from "../components/ProductsComponent";
import TopNavBar from "../components/TopNavBar";
import Banners from "../components/Banners";

const Menu = () => {
  const [userLocation, setUserLocation] = useState("");
  const [nearestBranch, setNearestBranch] = useState(null);
  const [data, setData] = useState([
    {
      label: <FaLocationDot size={24} color="black" />,
      value: "location",
      content: <MapComponent lat={nearestBranch?.lat || 30.0444} lng={nearestBranch?.lon || 31.2357}/>,
    },
    {
      label: <MdOutlineRestaurantMenu size={24} color="black" />,
      content: <ProductsComponent />,
      value: "menu", 
    },
  ]);
  const { t } = useTranslation();

  // function to get user location
  const getNearestBranch = () => {
    // Restaurant branches' coordinates (latitude, longitude)
    const branches = [
      { name: "Branch A", lat: 30.0444, lon: 31.2357 }, // Example: Cairo, Egypt
      { name: "Branch B", lat: 29.9714, lon: 31.1325 }, // Example: Giza, Egypt
    ];

    // Function to calculate distance using Haversine formula
    const getDistance = (lat1, lon1, lat2, lon2) => {
      const toRad = (value) => (value * Math.PI) / 180;
      const R = 6371; // Radius of Earth in km
      const dLat = toRad(lat2 - lat1);
      const dLon = toRad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) *
          Math.cos(toRad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c; // Distance in km
    };

    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLon = position.coords.longitude;

          // Calculate distance to each branch
          let nearestBranch = branches[0];
          let minDistance = getDistance(
            userLat,
            userLon,
            branches[0].lat,
            branches[0].lon
          );

          branches.forEach((branch) => {
            const distance = getDistance(
              userLat,
              userLon,
              branch.lat,
              branch.lon
            );
            if (distance < minDistance) {
              nearestBranch = branch;
              minDistance = distance;
            }
          });

          console.log(
            `Nearest branch: ${
              nearestBranch.name
            }, Distance: ${minDistance.toFixed(2)} km`
          );
          setNearestBranch(nearestBranch);
          alert(
            `Nearest branch: ${
              nearestBranch.name
            }, Distance: ${minDistance.toFixed(2)} km`
          );
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Unable to retrieve your location.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      {/* <MainHeader title={"menuHeaderTitle"} image={menuBg} /> */}
      <TopNavBar specificPage={true}/>
      <Banners />
      <div className="my-5 mb-10 mx-auto px-5 flex flex-col gap-5 justify-center items-center">
        <h3 className="text-mainColor text-2xl font-semibold my-6">
          {t("titleOfGetLocation")}
        </h3>
        <button
          onClick={getNearestBranch}
          className="bg-mainColor p-4 rounded-md text-white font-bold"
        >
          <FaLocationDot size={24} color="white" />
        </button>
      </div>
      {/* display menu based on branch */}
      <div className="menuSection my-6 px-10 mx-auto lg:w-[90%] sm:w-full">
        <h4 className="text-xl my-3 font-extrabold">{nearestBranch?.name}</h4>
        <Tabs value="html">
          <TabsHeader>
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, content }) => (
              <TabPanel key={value} value={value}>
                {content}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default Menu;
