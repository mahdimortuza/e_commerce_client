import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/Store/Features/products/productsApi";
import {
  FaClock,
  FaEuroSign,
  FaMoneyCheckAlt,
  FaShippingFast,
  FaTimesCircle,
} from "react-icons/fa";
import { Helmet } from "react-helmet";
import ProductSuggestion from "../../components/ProductSuggestion/ProductSuggestion";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useGetSingleProductQuery(id);

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <progress className="progress w-56 mx-auto mt-10"></progress>
      </div>
    );
  }

  if (!isLoading && isError) {
    return (
      <div className="flex justify-center">
        <h1 className="text-red-600 font-semibold text-md mt-10">
          Please check your connection :)
        </h1>
      </div>
    );
  }
  const { img, name, stock, price, description, category, tags } = product;

  return (
    <div className="max-w-[1450px] mx-auto px-5 md:px-0  mt-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{name} </title>
      </Helmet>

      <div className="md:flex gap-10">
        <div className="md:flex gap-10 ">
          <img className="w-[320px] mx-auto" src={img}></img>
          <div>
            <h1 className="text-3xl font-bold mt-6">{name}</h1>
            <p className="mt-2">Stock: {stock}</p>
            <p className="md:mt-10 font-bold text-xl">
              <span className="text-[#e6005c]">${price}</span>
            </p>
            <p className="mt-2">{description}</p>
            <p className="mt-2 font-bold">{category}</p>
            <p>
              {tags[0]}, {tags[1]}
            </p>

            <p>Review: 4.5</p>
          </div>
        </div>
        <div className="">
          <div className="flex gap-4 items-center mt-10 md:mt-0">
            <FaShippingFast className="text-2xl text-gray-500" />
            <p>Free shipping apply to all orders over shipping $100</p>
          </div>
          <div className="flex gap-4 items-center mt-2">
            <FaClock className="text-2xl text-gray-500" />
            <p>Home Delivery within 1 Hour</p>
          </div>
          <div className="flex gap-4 items-center mt-2">
            <FaEuroSign className="text-2xl text-gray-500" />
            <p>Cash on Delivery Available</p>
          </div>
          <div className="flex gap-4 items-center mt-2">
            <FaMoneyCheckAlt className="text-2xl text-gray-500" />
            <p>7 Days returns money back guarantee</p>
          </div>
          <div className="flex gap-4 items-center mt-2">
            <FaTimesCircle className="text-2xl text-gray-500" />
            <p>Warranty not available this item</p>
          </div>
        </div>
      </div>
      <ProductSuggestion product={product}></ProductSuggestion>
    </div>
  );
};

export default ProductDetails;
