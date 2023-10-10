import { CiSearch } from "react-icons/ci";
import { useGetProductsQuery } from "../../redux/Store/Features/products/productsApi";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";

const SearchBar = () => {
  const { data: products, isError, isLoading } = useGetProductsQuery();
  if (products) {
    console.log(products);
  } else {
    console.log("no data found");
  }

  return (
    <div className="flex justify-between mt-5">
      <div className="">
        <div className="flex items-center">
          <input
            className=" outline-none border border-[#e6005c] py-1 px-5"
            placeholder="Search here..."
          />
          <CiSearch className="-ml-8  text-2xl" />
        </div>
        <div className="relative">
          <ul className="bg-white z-10 w-[235px] mt-1 absolute">
            <li>aa</li>
            <li>aa</li>
            <li>aa</li>
          </ul>
        </div>
      </div>
      <ul className="text-[#e6005c] flex gap-4">
        <li>
          <Link to="/myCart">
            <FaCartArrowDown className="text-3xl" />
          </Link>
        </li>

        <li>
          <Link to="/">
            <BsPersonFill className="text-3xl" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SearchBar;
