import { GrFormClose } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import ThemeSelector from "./ThemeSelector";

const Sidebar = () => {
  return (
    <>
      <div className="drawer  z-20">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{/* Page content here */}</div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>

          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            <li className="text-end">
              <label
                htmlFor="my-drawer"
                className="drawer-button text-right ml-full"
              >
                <AiOutlineClose size={20} />
              </label>
            </li>

            {/* Sidebar content here */}
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/products">PRODUCTS</a>
            </li>
            {/* <li>
              <a>CART</a>
            </li> */}
            <li>
              <ThemeSelector />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
