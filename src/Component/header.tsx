import React from "react";
import Button from "./button";

const logo = require("../assets/logo.png");

type Props = {};

function Header({}: Props) {
  return (
    <div className="bg-gradient-to-r from-myBlue to-myPink px-5 py-5 md:py-2 text-white flex flex-wrap sm:flex-row gap-5 items-center justify-between drop-shadow-md">
      <img
        className="w-10 drop-shadow-md cursor-pointer"
        src={logo}
        alt="logo"
      />
      <Button text="Add New List Board" secondary />
    </div>
  );
}

export default Header;
