import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/reducers/cartSlice";

const ProductsComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { t } = useTranslation();
  const products = useSelector((state) => state.products.products);
  const categories = ["مشويات", "صواني", "ني", "عزومات"];
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      {/* filteration */}
      <div className="flex justify-center items-center gap-5 my-5 flex-wrap">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(cat)}
            className={`${
              selectedCategory == cat ? "bg-secondColor" : "bg-gray-300"
            } font-medium text-lg py-2 px-8 text-black rounded-xl shadow-md`}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* products */}
      <div className="flex justify-center items-center gap-5 my-5 flex-wrap">
        {products.map((product, index) => (
          <Card className="w-80 bg-[#f5f5f5]" key={index}>
            <CardHeader shadow={false} floated={false} className="h-52">
              <img
                src={product.image}
                alt="card-image"
                className="h-52 w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium text-lg ">
                  {product.name}
                </Typography>
                <Typography color="blue-gray" className="font-medium text-lg">
                  {product.price}
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-semibold opacity-75 text-lg text-start"
              >
                {product.description}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                onClick={() => handleAddToCart(product)}
                fullWidth={true}
                className="bg-mainColor text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                {t("addToCart")}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductsComponent;
