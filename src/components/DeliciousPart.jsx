import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const DeliciousPart = () => {
  const { t } = useTranslation();
  const [deliciousRecipes, setDeliciousRecipes] = useState([
    {
      image: "https://img.youm7.com/ArticleImgs/2022/9/29/69151-%D9%83%D9%81%D8%AA%D8%A9-%D8%A7%D9%84%D8%AD%D8%A7%D8%AA%D9%8A.jpg",
      name: "كفتة",
      price: "100.00",
      description: "4 صوابع وطبق رز ",
    },
    {
      image: "https://i.ytimg.com/vi/ha06JmZUigQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDgexEXrtshKiDbR6Qil4Mc2N_BgQ",
      name: "كفتة",
      price: "100.00",
      description: "4 صوابع وطبق رز ",
    },
    {
      image: "https://img.youm7.com/ArticleImgs/2022/9/29/69151-%D9%83%D9%81%D8%AA%D8%A9-%D8%A7%D9%84%D8%AD%D8%A7%D8%AA%D9%8A.jpg",
      name: "كفتة",
      price: "100.00",
      description: "4 صوابع وطبق رز ",
    },
  ]);
  return (
    <div className="p-10 text-center ">
      <h2 className="font-bold text-mainColor text-3xl my-3">
        {t("deliciousPartTitle")}
      </h2>
      <div className="mx-auto flex flex-wrap justify-center items-center gap-5 my-5">
        {deliciousRecipes.map((recipe, index) => (
          <Card className="w-96 bg-[#f5f5f5]" key={index}>
            <CardHeader shadow={false} floated={false} className="h-52">
              <img
                src={recipe.image}
                alt="card-image"
                className="h-52 w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium text-lg ">
                  {recipe.name}
                </Typography>
                <Typography color="blue-gray" className="font-medium text-lg">
                  {recipe.price}
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-semibold opacity-75 text-lg text-start"
              >
                {recipe.description}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-mainColor text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                {t("addToCart")}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="text-center my-10">
        <Link to={"/menu"} className="bg-mainColor px-8 py-4 text-white font-semibold text-lg">{t("readMore")}</Link>
      </div>
    </div>
  );
};

export default DeliciousPart;
