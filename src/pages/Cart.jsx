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
import LoginComponent from "../components/LoginComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/reducers/cartSlice";
import { IoCloseSharp } from "react-icons/io5";
import Swal from "sweetalert2";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    Swal.fire({
      title: t("alertTitle"),
      text: t("alertDesc2"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: t("alertConfirm"),
      cancelButtonText: t("cancel")
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart(id));
        Swal.fire({
          icon: "success",
          title: t("deleted"),
          confirmButtonText: t("ok")
        });
      }
    });
    
  };

  const handleClearCart = () => {
    Swal.fire({
      title: t("alertTitle"),
      text: t("alertDesc"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: t("alertConfirm"),
      cancelButtonText: t("cancel")
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearCart());
        Swal.fire({
          icon: "success",
          title: t("deleted"),
          confirmButtonText: t("ok")
        });
      }
    });
  };

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <div>
      <TopNavBar specificPage={true} />
      <h1 className="text-4xl text-mainColor font-black my-5 text-center">
        {t("cartTitle")}
      </h1>
      <div className="w-52 mx-5">
        <Button
          ripple={false}
          fullWidth={true}
          onClick={handleClearCart}
          className="bg-mainColor mt-5 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          {t("clearCart")}
        </Button>
      </div>
      {/*cart items and total  */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 my-10 px-5 bg-[#fff]">
        {/* cart items */}
        <div className="lg:basis-2/3">
          {cartItems.map((item, index) => (
            <Card
              className="relative flex flex-row w-full max-w-[40rem] bg-white shadow-md border border-gray-300 hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden my-3"
              key={index}
            >
              {/* Remove Button */}
              <IoCloseSharp
                className="absolute top-3 end-3 text-gray-600 hover:text-red-500 cursor-pointer transition-all"
                size={22}
                onClick={() => handleRemoveFromCart(item.id)}
              />

              {/* Image Section */}
              <CardHeader
                shadow={false}
                floated={false}
                className="w-1/3 shrink-0 overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </CardHeader>

              {/* Card Details */}
              <CardBody className="flex flex-col justify-between p-5 w-2/3">
                <div>
                  {/* Category */}
                  <Typography
                    variant="small"
                    color="gray"
                    className="uppercase text-gray-500 tracking-widest font-semibold"
                  >
                    {item.category}
                  </Typography>

                  {/* Item Name */}
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-bold text-mainColor mt-1"
                  >
                    {item.name}
                  </Typography>

                  {/* Price Calculation */}
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="font-semibold text-gray-600 mt-2"
                  >
                    {item.price} x {item.quantity} ={" "}
                    <span className="text-mainColor font-bold">
                      {item.price * item.quantity}
                    </span>
                  </Typography>
                </div>

                {/* Quantity Buttons */}
                <div className="flex items-center gap-3 mt-4">
                  <button
                    onClick={() => handleIncrease(item.id)}
                    className="w-8 h-8 flex items-center justify-center bg-mainColor text-white rounded-lg shadow-md hover:bg-opacity-80 transition transform active:scale-95"
                  >
                    +
                  </button>

                  <Typography
                    variant="h6"
                    color="gray"
                    className="text-lg font-semibold"
                  >
                    {item.quantity}
                  </Typography>

                  <button
                    onClick={() => handleDecrease(item.id)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-300 text-gray-700 rounded-lg shadow-md hover:bg-gray-400 transition transform active:scale-95"
                  >
                    -
                  </button>
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
            <h3 className="font-bold text-xl my-3 text-mainColor">
              {totalPrice.toFixed(2)} {/* Ensure 2 decimal places */}{" "}
            </h3>
          </div>
          <hr />
          <Button
            ripple={false}
            fullWidth={true}
            onClick={() => setOpen(true)}
            className="bg-mainColor mt-5 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            {t("pay")}
          </Button>
          <LoginComponent open={open} setOpen={setOpen} />
        </div>
        {/* ====================================================== */}
      </div>
    </div>
  );
};

export default Cart;
