import React from "react";
import Mainhead from "./Mainhead";
import Button from "./Button";

const Main = () => {
  return (
    <>
      <Mainhead
        head="Introduction"
        title="Introduction"
        subtitle="Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source."
      />
      <div className="container md:pl-[20%]  max-w-[900px] flex flex-col h-full">
        <div className="mt-8 leading-7 max-w-[750px] h-full">
          <p>
            This is NOT a component library. It's a collection of re-usable
            components that you can copy and paste into your apps.
          </p>
          <p className="mt-6 font-bold">
            What do you mean by not a component library?
          </p>
          <p className="mt-6 ">
            I mean you do not install it as a dependency. It is not available or
            distributed via npm.
          </p>
          <p className="mt-6 ">
            Pick the components you need. Copy and paste the code into your
            project and customize to your needs. The code is yours.
          </p>
          <p className="mt-6 italic">
            Use this as a reference to build your own component libraries.
          </p>
        </div>
        <Button text="installation" />
      </div>
    </>
  );
};

export default Main;
