import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

const LoginComponent = ({ open, setOpen }) => {
  const [phone, setPhone] = useState("");
  const handleOpen = () => setOpen(!open);
  const { t } = useTranslation();

  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="mx-auto">{t("loginTitle")}</DialogHeader>
        <DialogBody>
          <Typography
            variant="h6"
            color="blue-gray"
            className="mb-1 font-bold"
          >
            {t("userPhoneLabel")}
          </Typography>
          <Input
            maxLength={11}
            minLength={11}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="01100000000"
            className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button className="bg-mainColor" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default LoginComponent;
