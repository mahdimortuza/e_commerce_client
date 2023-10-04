import { useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import { BiGame } from "react-icons/bi";
import {
  FaBars,
  FaCartArrowDown,
  FaHeadset,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  return (
    <>
      <div className="max-w-[1450px] mx-auto">
        {/* for the offer text  */}
        <div className="flex justify-between h-12 items-center">
          <div className="flex">
            <p className="font-semibold hidden md:block">
              Unlimited offer for limited time!
            </p>
            <div className="flex items-center ml-5 text-[#e6005c]">
              <FaHeadset />
              <a className="ml-2" href="tel:+015 544876">
                +015 544876
              </a>
            </div>
          </div>

          <ul className="flex gap-4 mr-5 md:mr-0 text-[#e6005c]">
            <li>
              <Link to="/">
                <FaCartArrowDown className="text-2xl" />
              </Link>
            </li>

            <li>
              <Link to="/">
                <BsPersonFill className="text-2xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* header logo and navigation bar  */}
      <div
        className="bg-[#e6005c] h-16 sticky top-0 flex items-center"
        style={{ zIndex: 2 }}
      >
        <div className="w-[1450px] mx-auto flex justify-between px-5 md:px-0">
          <Link className="flex items-center text-white" to="/">
            <BiGame className="text-3xl" />
            <span className="ml-1 text-2xl font-semibold">Console</span>
          </Link>

          {/* search bar  */}
          <div className="hidden md:flex join">
            <div className="w-full">
              <div>
                <input
                  className="text-m outline-none py-1 px-5 join-item"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="indicator">
              <button className="btn btn-sm join-item">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* main navigation bar  */}

          <ul className="hidden md:flex gap-3 text-white">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <select className="outline-none bg-[#e6005c]">
                <option>Category</option>
                <option>
                  <Link to="/">Food</Link>
                </option>
                <option>
                  <Link to="/">Chocolate</Link>
                </option>
                <option>
                  <Link to="/">Grocery</Link>
                </option>
              </select>
            </li>
            <li>
              <select className="outline-none bg-[#e6005c]">
                <option>Pages</option>
                <option>Offers</option>
                <option>About</option>
                <option>Team</option>
              </select>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>

          {/* hamburger icon for mobile */}
          <div onClick={handleClick} className="text-white md:hidden">
            {!open ? (
              <FaBars className="text-2xl" />
            ) : (
              <FaTimes className="text-2xl" />
            )}
          </div>
        </div>
      </div>

      {/* hamburger menu for mobile */}

      <ul
        className={
          !open
            ? "hidden"
            : "sticky top-16 bg-[#e6005c] text-white w-full px-5 z-20"
          // !open ? "hidden" : "absolute bg-[#e6005c] text-white w-full px-5 z-20"
        }
      >
        <li onClick={handleClick} className="border-b border-zinc-300 pt-3">
          <Link to="/">Home</Link>
        </li>
        <li className="border-b border-zinc-300 pt-3">
          <select className="outline-none bg-[#e6005c]">
            <option>Category</option>
            <option>
              <Link to="/food">Food</Link>
            </option>
            <option onClick={handleClick}>
              <Link to="/">Chocolate</Link>
            </option>
            <option onClick={handleClick}>
              <Link to="/">Grocery</Link>
            </option>
          </select>
        </li>

        <li className="border-b border-zinc-300 pt-3">
          <select className="outline-none bg-[#e6005c]">
            <option>Pages</option>
            <option>Offers</option>
            <option>About</option>
            <option>Team</option>
          </select>
        </li>

        <li className="border-b border-zinc-300 pt-3">
          <Link to="/">Contact</Link>
        </li>

        {/* search bar  */}
        <div className="join mt-4 mb-4 w-full">
          <div className="w-full">
            <div>
              <input
                className="text-m text-black outline-none py-1 px-5 w-full join-item"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="indicator">
            <button className="btn btn-sm join-item">
              <FaSearch />
            </button>
          </div>
        </div>
      </ul>
    </>
  );
};

export default Navbar;
