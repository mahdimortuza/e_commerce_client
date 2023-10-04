import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="mt-8">
      <div className="grid xs:grid-cols-2 md:grid-cols-5 gap-3 md:gap-3">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
