import React, { useState } from "react";
import Icon from "../Images/SvgjsG1021.png";
import d from "../Images/ci_hamburger-md.png";
const Navbar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="ml">
      <div className="flex items-center justify-between px-4 md:h-16">
        <div className="flex items-center">
          <img
            src={Icon} // Replace this with the URL of your small photo
            alt="Logo"
            className="w-12 h-12 rounded-full md:mr-10"
          />
          <div className="hidden md:flex items-center space-x-4">
            <div
              className={`cursor-pointer ${
                activeTab === 0 ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => handleTabClick(0)}
            >
              Home
            </div>
            <div
              className={`cursor-pointer ${
                activeTab === 1 ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => handleTabClick(1)}
            >
              About
            </div>
            <div
              className={`cursor-pointer ${
                activeTab === 2 ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => handleTabClick(2)}
            >
              Contact
            </div>
          </div>
        </div>
        <div className="flex justify-end px-4 py-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            Sign Up
          </button>
        </div>

        <button
          className="md:hidden text-white px-4 py-2"
          onClick={handleDropdownClick}
        >
          <img src={d}></img>
        </button>
      </div>

      {showDropdown && (
        <div className="md:hidden ml flex flex-col space-y-4 items-center">
          <div
            className={`cursor-pointer ${
              activeTab === 0 ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => {
              handleDropdownClick();
              handleTabClick(0);
            }}
          >
            Home
          </div>
          <div
            className={`cursor-pointer ${
              activeTab === 1 ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => {
              handleDropdownClick();
              handleTabClick(1);
            }}
          >
            About
          </div>
          <div
            className={`cursor-pointer ${
              activeTab === 2 ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => {
              handleDropdownClick();
              handleTabClick(2);
            }}
          >
            Contact
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
