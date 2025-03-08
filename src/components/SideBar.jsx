import React from "react";
import profileImage from "../assets/profile.png";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-[80%] lg:w-[20%] h-fit fixed top-14 lg:top-0 left-0 lg:static z-100 bg-white">
      <div className="relative bg-[#EEF6EF] w-full h-full mt-24 pt-32 pb-4">
        <div className="flex items-center flex-col absolute -top-16 w-full">
          <img src={profileImage} alt="profileImage" className="w-32 h-32" />
          <h1 className="text-xl mt-4 font-medium">Hey, Rashmika</h1>
        </div>

        <div>
          <div className="bg-white py-6 mx-4">
            <Link to="/todo/all">
              <div className="flex w-full gap-4 items-center px-4 py-2 hover:bg-[#EEF6EF] rounded-xl navRoute">
                <i className="ri-file-list-line text-2xl "></i>
                <span className="text-lg font-medium ">All Tasks</span>
              </div>
            </Link>
            <Link to="/todo">
              <div className="flex w-full gap-4 items-center hover:bg-[#EEF6EF] rounded-xl px-4 py-2 navRoute">
                <i className="ri-calendar-line text-2xl"></i>
                <span className="text-lg font-medium">Today</span>
              </div>
            </Link>
            <Link to="/todo/important">
              <div className="flex w-full gap-4 items-center hover:bg-[#EEF6EF] rounded-xl px-4 py-2 navRoute">
                <i className="ri-star-line text-2xl"></i>
                <span className="text-lg font-medium">Important</span>
              </div>
            </Link>
            <Link to="/todo/planned">
              <div className="flex w-full gap-4 items-center hover:bg-[#EEF6EF] rounded-xl px-4 py-2 navRoute">
                <i className="ri-map-2-line text-2xl"></i>
                <span className="text-lg font-medium">Planned</span>
              </div>
            </Link>
            <Link to="/todo/all">
              <div className="flex w-full gap-4 items-center hover:bg-[#EEF6EF] rounded-xl px-4 py-2 navRoute">
                <i className="ri-user-community-line text-2xl"></i>
                <span className="text-lg font-medium">Assign To me</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="mx-4 mt-2 bg-white py-6">
          <div className="flex w-full gap-4 items-center px-4 py-2">
            <i className="ri-add-line text-3xl "></i>
            <span className="text-lg font-medium ">Add list</span>
          </div>
        </div>

        <div className="mx-4 mt-2 bg-white py-6">
          <div className="flex w-full px-4 py-2 flex-col">
            <div className="flex justify-between ">
              <span className="text-lg font-medium ">Total Tasks</span>
              <span className="text-lg font-medium ">
                <i className="ri-information-2-fill text-gray-400 text-xl"></i>
              </span>
            </div>
            <p className="text-2xl font-bold">11</p>
            <div className="h-60 w-full "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
