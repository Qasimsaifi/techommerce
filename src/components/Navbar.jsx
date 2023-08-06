import {HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <label
            htmlFor="my-drawer"
            className="drawer-button btn btn-ghost btn-circle"
          >
            <HiMenuAlt2 size={24}/>
          </label>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">TECOMMERCE</a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <AiOutlineShoppingCart size={20} />
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
