import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import sidebarImg from "../../Assets/icons/sidebarIco.svg";
import arrowDown from "../../Assets/icons/arrowDown.svg";

function Sidebar() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const menuItem = [
    {
      name: "Products",
      path: "/products",
      img: sidebarImg,
      subItems: [
        { name: "All products", path: "/products" },
        { name: "Categories", path: "/products/categories" },
        { name: "Brands", path: "/products/brands" },
      ],
    },
    {
      name: "Ads and Promotions",
      path: "/adsandpromo",
      img: sidebarImg,
      subItems: [
        { name: "Hero banner", path: "/adsandpromo" },
        { name: "Brands", path: "/adsandpromo/brands" },
        { name: "Category banner", path: "/adsandpromo/category-banner" },
        { name: "Promotion Posters", path: "/adsandpromo/promotion-poster" },
      ],
    },
  ];

  return (
    <div className="fixed w-[244px] h-[calc(100vh-72px)] mt-[72px] bg-[#2B2342] px-4 py-4 overflow-y-auto">
      {menuItem.map((item, index) => {
        const isActive = location.pathname.startsWith(item.path);
        const isDropdownOpen = openDropdown === index;

        return (
          <div key={index}>
            <div
              className={`px-4 py-[14px] mt-4 cursor-pointer ${
                isActive
                  ? "bg-[#423664] rounded-lg"
                  : "hover:bg-[#423664] hover:rounded-lg"
              }`}
              onClick={() => toggleDropdown(index)}
            >
              <div className="flex items-center justify-between text-[14px] leading-4 font-normal text-white">
                <div className="flex">
                  <img className="mr-2" src={item.img} alt="" />
                  <h1>{item.name}</h1>
                </div>
                {item.subItems && (
                  <img
                    className={`ml-auto transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    src={arrowDown}
                    alt=""
                  />
                )}
              </div>
            </div>
            {isDropdownOpen && item.subItems && (
              <div className="pl-8 py-2 space-y-6 text-white text-sm  leading-4 font-normal">
                {item.subItems.map((subItem, subIndex) => (
                  <Link
                    to={subItem.path}
                    key={subIndex}
                    className="block py-1 hover:text-[#B1AEF9]"
                  >
                  -  <span className="ml-2">{subItem.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
