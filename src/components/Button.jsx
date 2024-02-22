import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Button = (props) => {
  return (
    <div className="flex">
      <div className="flex gap-2  items-center mt-7 border border-black py-2 px-4 rounded-md text-sm font-medium ">
        <button>{props.text}</button>
        <IoIosArrowForward />
      </div>
    </div>
  );
};

export default Button;
