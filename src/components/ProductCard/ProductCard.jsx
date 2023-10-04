import { FaCartPlus } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { _id, img, name, stock, price, description, category, tags } = product;
  return (
    <div className="rounded-md bg-white p-3 w-64 mx-auto xs:w-full">
      <div className="relative">
        <img className="w-full" src={img}></img>
        <p className="absolute top-2 right-2 text-[#237d74] bg-[#e6e6e6] rounded-xl font-semibold badge">Stock: <span className="text-[#e6005c]"> {stock}</span></p>
      </div>
      <h3 className="text-[#4B5563] font-bold text-lg">{name}</h3>
      {/* price, offer and buy now button */}
      <div className="flex justify-between">
        <div className="">
          <h2 className="text-black font-semibold text-sm mt-1">${price}</h2>
        </div>
        <button className="">
          <FaCartPlus className="text-2xl text-[#e6005c]" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
