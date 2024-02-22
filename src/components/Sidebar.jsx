import React, { useState } from "react";
import { Link } from "react-router-dom";

const list = [
  { title: "Introduction", href: "/docs" },
  { title: "Installation", href: "/docs/installation" },
  { title: "Components", href: "/docs/components" },
  { title: "Theming", href: "/docs/theming" },
  { title: "Dark mode", href: "/docs/dark-mode" },
  { title: "CLI", href: "/docs/CLI" },
  { title: "Typography", href: "/docs/typography" },
  { title: "Figma", href: "/docs/figma" },
  { title: "Changelog", href: "/docs/changelog" },
];

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleNavLinkClick = (title) => {
    setActiveLink(title);
  };

  return (
    <div className="hidden sm:flex flex-col containers right-[80%] fixed left-0 top-24 bottom-0 h-full hover:overflow-auto">
      <h1 className="text-sm font-semibold px-2 py-1">Getting Started</h1>
      <ul>
        {list.map((item, index) => (
          <li key={index} className="text-base py-1 px-2">
            <Link
              to={item.href}
              className={`font-medium ${
                activeLink === item.title ? "text-white" : "text-gray"
              } hover:text-white`}
              onClick={() => handleNavLinkClick(item.title)}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
