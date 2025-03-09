import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import EditBar from "../components/EditBar";
import TodayToDo from "./TodayToDo";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = () => {
  const showSidebar = useSelector((state) => state.configuration.sideBar);
  return (
    <>
      <div className="flex flex-col lg:ps-12 h-screen dark:bg-[#242424]">
        {/* Header */}
        <Header />

        <div className="flex flex-1 h-full">
          {/* to show side bar */}
          {showSidebar && <SideBar />}

          {/* Main Content */}
          <Outlet />

          <EditBar />
        </div>
      </div>
    </>
  );
};

export default Layout;
