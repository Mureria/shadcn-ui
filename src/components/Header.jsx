import React, { useState } from "react";
import { FiZap } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [activeLink, setActiveLink] = useState("Home"); // Set initial active link
  const [open, setOpen] = useState(false);
  const closeNavbar = () => {
    setOpen(false);
  };

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleNav = () => {
    setOpen(!open);
  };
  return (
    <div className="fixed top-0 left-0 right-0  px-4 sm:px-8  py-3 border-b border-bg text-sm backdrop-blur-sm">
      <div className="flex items-center">
        <Link to="/">
          <div className="flex gap-2 items-center mr-6">
            <FiZap className="hidden sm:flex" size={24} />
            <div onClick={handleNav}>
              {open ? (
                <oMdClose />
              ) : (
                <RxHamburgerMenu className="sm:hidden" size={24} />
              )}
            </div>
            <h1 className="hidden font-bold sm:flex">Shadcn/UI</h1>
          </div>
        </Link>

        {/* Desktop */}
        <div className="text-sm hidden sm:flex">
          <ul className="flex gap-6 text-sm text-[#FAFAFA99]  cursor-pointer">
            <Link to="/docs">
              <li
                className={`active:text-white font-medium ${
                  activeLink === "Docs" ? "text-white" : ""
                }`}
                onClick={() => handleNavLinkClick("Docs")}
              >
                Docs
              </li>
            </Link>
            <Link to="/docs/components">
              <li
                className={`active:text-white font-medium ${
                  activeLink === "Components" ? "text-white" : ""
                }`}
                onClick={() => handleNavLinkClick("Components")}
              >
                Components
              </li>
            </Link>
            <Link to="/themes">
              <li
                className={`active:text-white font-medium ${
                  activeLink === "Themes" ? "text-white" : ""
                }`}
                onClick={() => handleNavLinkClick("Themes")}
              >
                Themes
              </li>
            </Link>
            <Link to="/examples">
              <li
                className={`active:text-white font-medium ${
                  activeLink === "Examples" ? "text-white" : ""
                }`}
                onClick={() => handleNavLinkClick("Examples")}
              >
                Examples
              </li>
            </Link>
          </ul>
        </div>

        {/* Mobile */}

        {open ? (
          <div className="duration-500 bg-blacked h-screen fixed left-0 top-0 bottom-0 right-[20%] px-10 py-5 text-base sm:hidden">
            <div className="flex justify-between items-center">
              <Link to="/">
                <div className="flex gap-2 items-center mr-6">
                  <FiZap className="flex" size={24} />
                  <h1 className="font-bold sm:flex">Shadcn/UI</h1>
                </div>
              </Link>
              <IoMdClose onClick={handleNav} size={21} />
            </div>

            <div className="flex flex-col gap-3 text-lg font-semibold">
              <Link className="pt-4 mt-6  border-t" to='docs' onClick={closeNavbar}>
                Documentation
              </Link>
              <Link to='docs/components' onClick={closeNavbar}>
                Components
              </Link>
              <Link to='/examples' onClick={closeNavbar}>
                Examples
              </Link>
              <Link to='docs/figma' onClick={closeNavbar}>
                Figma
              </Link>
              <Link to='docs/dark-mode' onClick={closeNavbar}>
                Dark mode
              </Link>
              <Link to='github' onClick={closeNavbar}>
                Github
              </Link>
              <Link to='twitter' onClick={closeNavbar}>
                Twitter
              </Link>
              <Link to=''>
                Get Started
              </Link>
              <div className="text-gray flex flex-col gap-2" onClick={closeNavbar}>
              <Link to='docs'>
                Introduction
              </Link>
              <Link to='docs/installation' onClick={closeNavbar}>
                Installation
              </Link>
              <Link to='docs/components' onClick={closeNavbar}>
                Components.json
              </Link>
              <Link to='docs/theming' onClick={closeNavbar}>
                Theming
              </Link>
              <Link to='docs/changelog' onClick={closeNavbar}>
                Changelog
              </Link>
              </div>
             
            </div>

          </div>
        ) : (
          <div className="ease-in-out duration-1000 bg-black h-screen fixed left-0 bottom-0 right-[1000px] px-0 py-0 text-base sm:hidden">
            <div className="flex justify-between items-center">
              <Link to="/">
                <div className="flex gap-2 items-center mr-6">
                  <FiZap className="flex" size={24} />
                  <h1 className="font-bold sm:flex">Shadcn/UI</h1>
                </div>
              </Link>
              <IoMdClose onClick={handleNav} size={21} />
            </div>
          </div>
        )}

        <div className="flex items-center gap-1  flex-1 justify-end">
          <div className=" flex items-center py-1 px-4 border- rounded-md border border-bg">
            <input
              type="text"
              placeholder="Search documentation..."
              className="  hidden sm:flex bg-transparent  focus:outline-none"
            />
            <input
              type="text"
              placeholder="Search..."
              className=" w-full sm:hidden bg-transparent  focus:outline-none"
            />
            <IoSearch size={18} color="#FAFAFA99" />
          </div>
          <div className="flex items-center">
            <div className="p-2 hover:bg-[#242424] rounded-md">
              <FaGithub size={18} />
            </div>
            <div className="p-2 hover:bg-[#242424] rounded-md">
              <RiTwitterXFill size={14} />
            </div>
            <div className="p-2 hover:bg-[#242424] rounded-md">
              <MdOutlineDarkMode size={19} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
