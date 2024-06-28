import React from "react";
import imageStep from "../assets/images/bg-sidebar-desktop.svg";
import imageMobil from "../assets/images/bg-sidebar-mobile.svg";

export default function Steps({ currentStep }) {
  return (
    <div className="sm:relative lg:relative w-full lg:w-60 lg:rounded-lg  lg:mb-0">
      <img
        src={imageStep}
        className="hidden lg:block w-full lg:w-auto"
        alt="Sidebar desktop"
      />
      <img
        src={imageMobil}
        className="block lg:hidden w-full"
        alt="Sidebar mobile"
      />
      <div className="absolute flex top-0  w-full justify-center gap-5 py-7 text-white uppercase lg:px-6 lg:w-full lg:block lg:absolute lg:top-0 lg:py-5 ">
        <div className="flex items-center gap-3 ">
          <span
            className={`flex justify-center items-center border w-6 rounded-full ${
              currentStep === 1 && "bg-blue-200 text-black"
            }`}
          >
            1
          </span>
          <div className="hidden lg:flex flex-col">
            <span className=" text-gray-300 text-sm">Step 1</span>
            <p>Your info</p>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <span
            className={`flex justify-center items-center border w-6 rounded-full ${
              currentStep === 2 && "bg-blue-200 text-black"
            }`}
          >
            2
          </span>
          <div className="hidden lg:flex flex-col">
            <span className="text-gray-300 text-sm">Step 2</span>
            <p>Select Plan</p>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <span
            className={`flex justify-center items-center border w-6 rounded-full ${
              currentStep === 3 && "bg-blue-200 text-black"
            }`}
          >
            3
          </span>
          <div className="hidden lg:flex flex-col">
            <span className="text-gray-300 text-sm">Step 3</span>
            <p>Add-ONS</p>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <span
            className={`flex justify-center items-center border w-6 rounded-full ${
              currentStep === 4 && "bg-blue-200 text-black"
            }`}
          >
            4
          </span>
          <div className="hidden lg:flex flex-col">
            <span className="text-gray-300 text-sm">Step 4</span>
            <p>Summary</p>
          </div>
        </div>
      </div>
    </div>
  );
}
