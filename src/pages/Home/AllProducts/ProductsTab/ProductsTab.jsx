import ProductCard from "../../../../components/ProductCard/ProductCard";

const ProductsTab = ({ items }) => {
  return (
    <div className="mt-8">
      <div className="grid xs:grid-cols-2 md:grid-cols-5 gap-3 md:gap-3">
        {items.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductsTab;
