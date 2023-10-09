import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/Store/Features/products/productsApi";

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
    <div className="max-w-[1450px] px-5 md:px-0 mx-auto">
      <div className="flex gap-10">
        <img src={img}></img>
        <div>
          <h1 className="text-3xl font-bold mt-6">{name}</h1>
          <p>{stock}</p>
          <p>{price}</p>
          <p>{description}</p>
          <p>{category}</p>
          <p>
            {tags[0]}, {tags[1]}
          </p>

          <p>Review: 4.5</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
