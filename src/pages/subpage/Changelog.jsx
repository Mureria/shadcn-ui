import React from "react";
import Sidebar from "../../components/Sidebar";
import Mainhead from "../../components/Mainhead";

const Changelog = () => {
  return (
    <div className="sm:containers px-5 mt-20 h-screen">
      <Sidebar />
      <Mainhead
        head="Changelog"
        title="Changelog"
        subtitle="Latest updates and announcements."
      />
    </div>
  );
};

export default Changelog;
