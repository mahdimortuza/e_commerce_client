import { RxCross1 } from "react-icons/rx";
import { BsBagDash } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="drawer drawer-end z-10">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <div className="flex justify-end fixed top-80 right-0 bg-white rounded-l-md pt-1 cursor-pointer">
          <label
            htmlFor="my-drawer-4"
            className="drawer-button"
          >
            <div className="">
              <BsBagDash className="text-2xl md:text-3xl text-[#e6005c] mx-auto" />
              <p className="mx-auto  text-center">5 Items</p>
              <h3 className="bg-[#e6005c] mx-auto text-white rounded-l-md px-2 py-1">
                $ 2500
              </h3>
            </div>
          </label>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
