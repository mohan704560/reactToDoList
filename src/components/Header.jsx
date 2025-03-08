import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../redux/slices/configurationSlice";
import logo from "../assets/logo.png";

const Header = () => {
  const state = useSelector((state) => state.configuration);
  const mode = "light";
  console.log("state", state);
  const dispatch = useDispatch();

  return (
    <header className="text-white py-3 px-4 w-full z-10 flex justify-between">
      <div className="flex gap-6">
        <button onClick={() => dispatch(toggleSideBar())} className="">
          <i className="ri-menu-line text-2xl text-black"></i>
        </button>
        <img src={logo} alt="logo" />
      </div>

      <div className="flex gap-6">
        <button>
          <i class="ri-search-line text-2xl text-black"></i>
        </button>
        <button>
          <i class="ri-layout-grid-line text-2xl text-black"></i>
        </button>
        <button>
          {mode === "light" ? (
            <i class="ri-sun-line text-2xl text-black"></i>
          ) : (
            <i class="ri-moon-clear-line text-2xl text-black"></i>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
