import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay, Pagination, FreeMode } from "swiper/modules";

import { useGetProductsQuery } from "../../redux/Store/Features/products/productsApi";
import MainHeader from "../MainHeader/MainHeader";
import ProductCard from "../ProductCard/ProductCard";

const ProductSuggestion = ({ product }) => {
  const { category } = product;

  const { data: products, isError, isLoading } = useGetProductsQuery();
  const suggestion = products?.filter(
    (item) => item.category === `${category}`
  );

  return (
    <div className="mt-10">
      <MainHeader
        heading="You may also like"
        subHeading="More products according to your search result"
      ></MainHeader>

      {/* filter data according to category name and show them on the slider */}
      <div className="mt-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
          {suggestion?.map((product) => (
            <SwiperSlide key={product._id}>
              <ProductCard product={product}></ProductCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSuggestion;
