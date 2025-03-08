import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import EditBar from "../components/EditBar";
import TodayToDo from "./TodayToDo";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = () => {
  const showSidebar = useSelector((state) => state.configuration.sideBar);
  console.log("showSidebar :>> ", showSidebar);
  return (
    <>
      <div className="flex flex-col lg:ps-12 h-screen">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <div className="flex flex-1 h-full">
          {/* Left Sidebar */}
          {/* {showLeftSidebar && (
          <aside className="w-64 bg-gray-200 p-4 h-full">Left Sidebar</aside>
        )} */}
          {showSidebar && <SideBar />}

          {/* Body Section */}
          <Outlet />

          <EditBar />

          {/* Right Sidebar */}
          {/* {showRightSidebar && (
          <aside className="w-64 bg-gray-200 p-4 h-full">Right Sidebar</aside>
        )} */}
        </div>
      </div>
    </>
  );
};

export default Layout;
