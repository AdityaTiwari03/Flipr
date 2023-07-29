import React, { useState } from "react";
import Navbar from "./Navbar";
import Photo from "../Images/image 1.png";
import Frame2 from "../Images/Frame 2.png";
import Frame3 from "../Images/Frame 3.png";
import Frame4 from "../Images/Frame 4.png";
export default function Landing() {
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);

  const handleSearchBarFocus = () => {
    setIsSearchBarActive(true);
  };

  const handleSearchBarBlur = () => {
    setIsSearchBarActive(false);
  };
  return (
    <>
      <div>
        <Navbar />
      </div>
      {isSearchBarActive ? null : (
        <div className="flex flex-col-reverse md:flex-row h-screen w-screen">
          <div className="w-full md:w-1/4 mt-0 md:mt-60 p-1 md:p-5 overflow-visible">
            <div className="md:w-3/4 text-4xl  overflow-visible">
              <b>Let your Website Work for you</b>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-96 md:w-fit mt-10 md:mt-20 w-96 z-3 m-auto md:flex-row rounded-full">
              <button className="bg-blue-500 text-white py-3 px-2 md:px-8 rounded-full">
                Get Started
              </button>
              <button className="bg-white text-blue-500 py-3 px-2 md:px-8 md:ml-2 rounded-full border border-blue-500">
                User Dashboard
              </button>
            </div>
          </div>
          <div class="w-full md:w-3/4 flex flex-row relative">
            <img
              src={Frame2}
              class="hidden md:block w-32 h-40 mr-20 z-10"
              alt="Frame 2"
            />
            <img
              src={Frame4}
              class="hidden md:block w-45 h-60 ml-20 mt-10 z-10"
              alt="Frame 4"
            />
            <img
              src={Frame3}
              class="hidden md:block w-50 h-60 ml-10 z-10 mt-10 self-end"
              alt="Frame 3"
            />
            <img src={Photo} class="md:absolute md:z-0 w-full" alt="No" />
          </div>
        </div>
      )}
      <div class="flex items-center w-full justify-center mt-10 mb-10 md:mt-50">
        <div class="relative w-4/5">
          <input
            onFocus={handleSearchBarFocus}
            onBlur={handleSearchBarBlur}
            type="text"
            placeholder="Search"
            class="w-full px-4 py-2 h-16 text-gray-700 bg-white border border-black md:mt-20 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          />
          <button class="absolute right-0 top-0 h-full px-4 text-gray-600 hover:text-gray-800 focus:outline-none">
            <svg
              class="h-10 w-10 border-black"
              fill="none"
              stroke="currentColor"
              viewBox="24 23 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 15l5-5-5-5"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
