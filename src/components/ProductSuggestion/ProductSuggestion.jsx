import { useGetProductsQuery } from "../../redux/Store/Features/products/productsApi";
import MainHeader from "../MainHeader/MainHeader";

const ProductSuggestion = ({ product }) => {
  const { img, name, stock, price, description, category, tags } = product;

  const { data: products, isError, isLoading } = useGetProductsQuery();
  const suggestion = products?.filter(
    (item) => item.category === `${category}`
  );

  console.log(suggestion);

  return (
    <div className="mt-10">
      <MainHeader
        heading="You may also like"
        subHeading="More products according to your search result"
      ></MainHeader>

      {/* filter data according to category name and show them on  the slider  */}
    </div>
  );
};

export default ProductSuggestion;
