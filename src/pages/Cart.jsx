import React, { useState } from "react";
import TopNavBar from "../components/TopNavBar";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      image:
        "https://img.youm7.com/ArticleImgs/2022/9/29/69151-%D9%83%D9%81%D8%AA%D8%A9-%D8%A7%D9%84%D8%AD%D8%A7%D8%AA%D9%8A.jpg",
      name: "كفتة",
      description: "4 صوابع وطبق رز ",
      quantity: 5,
      singlePrice: 100,
    },
    {
      image:
        "https://img.youm7.com/ArticleImgs/2022/9/29/69151-%D9%83%D9%81%D8%AA%D8%A9-%D8%A7%D9%84%D8%AD%D8%A7%D8%AA%D9%8A.jpg",
      name: "كفتة",
      description: "4 صوابع وطبق رز ",
      quantity: 5,
      singlePrice: 100,
    },
  ]);
  const { t } = useTranslation();

  return (
    <div>
      <TopNavBar specificPage={true} />
      <h1 className='text-4xl text-mainColor font-black my-5 text-center'>{t("cartTitle")}</h1>
      {/*cart items and total  */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 my-10 px-5 bg-[#fff]">
        {/* cart items */}
        <div className="lg:basis-2/3">
          {cartItems.map((item, index) => (
            <Card
              className="w-full max-w-[40rem] flex-row my-6 shadow-lg rounded-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300 bg-[#f5f5f5]"
              key={index}
            >
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none overflow-hidden"
              >
                <img
                  src={item.image}
                  alt="card-image"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </CardHeader>
              <CardBody className="relative p-6">
                <Typography
                  variant="h6"
                  color="gray"
                  className="mb-2 uppercase tracking-wide text-gray-500"
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="mb-10 font-semibold"
                >
                  {item.description}
                </Typography>
                <div className="absolute bottom-4 right-4 left-4 flex justify-between items-center w-[90%] mt-5 flex-wrap">
                  <Typography
                    variant="h4"
                    className="text-lg font-bold text-mainColor"
                  >
                    {item.singlePrice}
                  </Typography>
                  <div className="flex gap-3 items-center">
                    <button className="w-8 h-8 flex items-center justify-center bg-mainColor text-white rounded-md shadow-md hover:bg-opacity-80 transition">
                      +
                    </button>
                    <Typography
                      variant="h6"
                      color="gray"
                      className="text-lg font-semibold"
                    >
                      5
                    </Typography>
                    <button className="w-8 h-8 flex items-center justify-center bg-gray-300 text-gray-700 rounded-md shadow-md hover:bg-gray-400 transition">
                      -
                    </button>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        {/* ====================================================== */}
        {/* total div */}
        <div className="lg:basis-1/3 w-full rounded-md bg-[#f5f5f5] shadow-lg p-5">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-xl my-3">{t("totalTitle")}</h3>
            <h3 className="font-bold text-xl my-3 text-mainColor">500</h3>
          </div>
          <hr />
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-mainColor mt-5 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            {t("addToCart")}
          </Button>
        </div>
        {/* ====================================================== */}
      </div>
    </div>
  );
};

export default Cart;
