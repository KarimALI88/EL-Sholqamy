import React, { useState } from "react";
import MainHeader from "./../components/MainHeader";
import bookBg from "./../assets/bookBg.jpeg";
import tablesPdf from "../assets/tables.pdf";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

const Reservation = () => {
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [numberOfChairs, setNumberOfChairs] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState("");
  const [orderDetails, setOrderDetails] = useState("");
  const { t } = useTranslation();
  return (
    <div>
      <MainHeader title={"bookHeaderTitle"} image={bookBg} />
      <div className="text-center">
        <h2 className="text-mainColor font-bold text-[2rem]">{t("reservationTitle")}</h2>
        <h6 className="text-gray-600">{t("reservationDesc")}</h6>
      </div>
      {/* tables pdf */}
      <div className="px-10 w-full h-96 my-5">
        <div onContextMenu={(e) => e.preventDefault()} className="h-96">
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
          >
            <Viewer fileUrl={tablesPdf} />
          </Worker>
        </div>
      </div>
      {/* inputs */}
      <div className="px-6 w-full my-5 flex justify-center items-center flex-wrap">
        {/* user name */}
        <div className="w-full sm:w-80 lg:w-2/5 sm:mx-auto lg:mx-3 my-3">
          <Typography
            variant="h6"
            color="blue-gray"
            className="mb-1 font-semibold"
          >
            {t("userNameLabel")}
          </Typography>
          <input
            className="reservation-input"
            placeholder="Ahmed Mohamed"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        {/* phone */}
        <div className="w-full sm:w-80 lg:w-2/5 sm:mx-auto lg:mx-3 my-3">
          <Typography
            variant="h6"
            color="blue-gray"
            className="mb-1 font-semibold"
          >
            {t("userPhoneLabel")}
          </Typography>
          <input
            className="reservation-input"
            placeholder="01*********"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        {/* chairs number */}
        <div className="w-full sm:w-80 lg:w-2/5 sm:mx-auto lg:mx-3 my-3">
          <Typography
            variant="h6"
            color="blue-gray"
            className="mb-1 font-semibold"
          >
            {t("tabeleChairsNumberLabel")}
          </Typography>
          <select
            className="reservation-input"
            value={numberOfChairs}
            onChange={(e) => setNumberOfChairs(e.target.value)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>other</option>
          </select>
        </div>
        {/* table number */}
        <div className="w-full sm:w-80 lg:w-2/5 sm:mx-auto lg:mx-3 my-3">
          <Typography
            variant="h6"
            color="blue-gray"
            className="mb-1 font-semibold"
          >
            {t("tableNumberLabel")}
          </Typography>
          <select
            className="reservation-input"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>other</option>
          </select>
        </div>
        {/* date */}
        <div className="w-full sm:w-80 lg:w-2/5 sm:mx-auto lg:mx-3 my-3">
          <Typography
            variant="h6"
            color="blue-gray"
            className="mb-1 font-semibold"
          >
            {t("dateLabel")}
          </Typography>
          <input
            className="reservation-input"
            type="date"
            value={reservationDate}
            onChange={(e) => setReservationDate(e.target.value)}
          />
        </div>
        {/* time */}
        <div className="w-full sm:w-80 lg:w-2/5 sm:mx-auto lg:mx-3 my-3">
          <Typography
            variant="h6"
            color="blue-gray"
            className="mb-1 font-semibold"
          >
            {t("timeLabel")}
          </Typography>
          <input
            className="reservation-input"
            type="time"
            value={reservationTime}
            onChange={(e) => setReservationTime(e.target.value)}
          />
        </div>
        {/* order details */}
        <div className="w-full sm:w-80 lg:w-2/5 sm:mx-auto lg:mx-3 my-3">
          <Typography
            variant="h6"
            color="blue-gray"
            className="mb-1 font-semibold"
          >
            {t("orderDetailsLabel")}
          </Typography>
          <textarea
            className="w-full border-2 p-3 border-[gray] "
            cols={5}
            rows={7}
            type="time"
            value={orderDetails}
            onChange={(e) => setOrderDetails(e.target.value)}
          />
        </div>
      </div>
      {/* submit button */}
      <div className="sm:w-[70%] lg:w-[50%] mx-auto">
        <button className="w-full bg-mainColor text-white p-2 my-3 font-semibold text-xl">{t("resSubmitButton")}</button>
      </div>
    </div>
  );
};

export default Reservation;
