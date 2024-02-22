import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Button from "./Button";

const Mainhead = (props) => {
  return (
    <>
      <div className="container h-full md:ml-[20%]  mt-5 w-full sm:max-w-[700px] flex flex-col ">
        <h1 className="flex items-center gap-1">
          <span className="flex items-center gap-1 text-gray">
            Docs <MdKeyboardArrowRight size={18} />
          </span>{" "}
          {props.head}{" "}
        </h1>
        <h1 className="text-4xl font-bold tracking-tight scroll-m-20 mt-4">
          {props.title}
        </h1>
        <p className="text-gray text-lg max-w-[500px] mt-3">
          {" "}
          {props.subtitle}
        </p>
        <p className="text-gray text-sm w-full mt-3"> {props.paragraph}</p>
        <div className="flex justify-between items-center">
          <Button text="Introduction" />
          <Button text="Components.json" />
        </div>
      </div>
    </>
  );
};

export default Mainhead;
