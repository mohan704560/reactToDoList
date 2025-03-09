import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleDarkMode,
  toggleGrid,
  toggleSideBar,
} from "../redux/slices/configurationSlice";
import logo from "../assets/logo.png";

const Header = () => {
  // get all configuration
  const state = useSelector((state) => state.configuration);
  const [dark, setDark] = useState(false);
  const dispatch = useDispatch();

  const darkmodeHandler = () => {
    const currentMode = !dark;
    // if (currentMode) {
    //   document.querySelector("body").classList.add("dark");
    // } else {
    //   document.querySelector("body").classList.remove("dark");
    // }
    setDark(currentMode);
  };

  return (
    <header className="text-white bg-white dark:bg-[#242424] py-3 px-4 w-full z-10 flex justify-between">
      <div className="flex gap-6">
        {/* button to shoe and hide side bar */}
        <button onClick={() => dispatch(toggleSideBar())} className="">
          <i className="ri-menu-line text-2xl text-black dark:text-white"></i>
        </button>
        <img src={logo} alt="logo" />
      </div>

      <div className="flex gap-6">
        {/* to search a given task  */}
        <button>
          <i className="ri-search-line text-2xl text-black dark:text-white"></i>
        </button>
        {/* to toggle between list and grid of the pages  */}
        <button onClick={() => dispatch(toggleGrid())}>
          {state.grid ? (
            <i className="ri-list-check text-2xl text-black dark:text-white"></i>
          ) : (
            <i className="ri-layout-grid-line text-2xl text-black dark:text-white"></i>
          )}
        </button>
        {/* to enable light and dark mode  */}
        <button onClick={darkmodeHandler}>
          {dark ? (
            <i className="ri-sun-line text-2xl text-black dark:text-white"></i>
          ) : (
            <i className="ri-moon-clear-line text-2xl text-black"></i>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
