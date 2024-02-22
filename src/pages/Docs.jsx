import React from "react";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Content from "../components/Content";
const Docs = () => {
  return (
    <div className=" sm:containers h-full px-5 mt-20 flex">
      <div className=" h-full sm:pl-[9.8%]">
        <Sidebar />
        <Main />
      </div>

      <Content />
    </div>
  );
};

export default Docs;
