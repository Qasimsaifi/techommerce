import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ThemeSwitcher from "./ThemeSwitch";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-10">
      <div className="navbar-start">
        <label
          htmlFor="my-drawer"
          className="drawer-button btn btn-ghost btn-circle"
        >
          <HiMenuAlt2 size={24} />
        </label>
      </div>
      <div className="navbar-center">
        <a href="/" className="cursor-pointer">
          <div className="avatar ">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 bg-primary ring-offset-2">
              <img src="/logo.png" className=""/>
            </div>
          </div>
        </a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <AiOutlineShoppingCart size={20} />
            <span className="badge badge-xs border-none indicator-item">9+</span>
          </div>
        </button>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
