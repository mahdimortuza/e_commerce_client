import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-green-400">
      <div className="max-w-[1450px] mx-auto">
        <div className="flex justify-between text-pink-600">
          <h1>Navbar</h1>
          <ul className="flex gap-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
