import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopNavBar from "../components/TopNavBar";
import Filteration from "../components/Filteration";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { addToCart } from "../redux/reducers/cartSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products.products);
  const [singleProduct, setSingleProduct] = useState({});
  const dispatch = useDispatch();
  const { t } = useTranslation();

  console.log("single product", singleProduct);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    setSingleProduct(products.find((product) => product.id == id))
  }, [id])
  return (
    <div>
      <TopNavBar specificPage={true} />
      <Filteration />
      {/* single product card */}
      <div className="my-14 mx-auto">
        <Card className="w-full max-w-[48rem] flex-row mx-8 bg-[#f5f5f5]">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
            <img
              src={singleProduct.image}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography
              variant="h4"
              color="black"
              className="mb-4 uppercase font-bold"
            >
              {singleProduct.name}
            </Typography>
            <Typography color="gray" className="mb-4 font-semibold">
              {singleProduct.description}
            </Typography>
            <Typography variant="h5" className="mb-4 uppercase text-mainColor">
              {singleProduct.price}
            </Typography>
            <Button
              ripple={false}
              onClick={() => handleAddToCart(singleProduct)}
              fullWidth={true}
              className="bg-mainColor text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              {t("addToCart")}
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default SingleProduct;
