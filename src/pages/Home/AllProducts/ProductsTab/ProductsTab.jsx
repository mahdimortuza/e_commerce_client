import ProductCard from "../../../../components/ProductCard/ProductCard";

const ProductsTab = ({ items, isLoading, isError }) => {
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
        <h1 className="text-red-600 font-semibold text-md mt-10"> Please check your connection :)</h1>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <div className="grid xs:grid-cols-2 md:grid-cols-5 gap-3 md:gap-3">
        {items?.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductsTab;
