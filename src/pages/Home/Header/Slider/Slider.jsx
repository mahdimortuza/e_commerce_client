import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import bg1 from "../../../../assets/banner/1.webp";
import bg2 from "../../../../assets/banner/2.webp";
import bg3 from "../../../../assets/banner/3.webp";
import bg5 from "../../../../assets/banner/5.webp";

import MainButton from "../../../../components/MainButton/MainButton";

// some data for the slider section

const items = [
  {
    img: bg1,
    link: "/",
    header: "Get all accessories you need",
    des: "Elevate your setup with RGB mouse pads, cable management solutions, headset stands, and controller charging docks for ultimate convenience and style.",
  },
  {
    img: bg2,
    link: "/contact",
    header: "Get all controllers you need",

    des: "Precision control for flight and simulation games, ergonomic grip, customizable buttons, and immersive force feedback for authentic gaming experiences.",
  },
  {
    img: bg3,
    link: "/about",
    header: "Get all accessories you need",

    des: " Elevate your setup with RGB mouse pads, cable management solutions, headset stands, and controller charging docks for ultimate convenience and style.",
  },
  // {
  //   img: bg4,
  //   link: "/cart",
  //   header: "Get all monitors you need",

  //   des: " High refresh rate, low response time, vibrant colors, adaptive sync technology, and immersive resolution for competitive and immersive gaming.",
  // },
  {
    img: bg5,
    link: "/cart",
    header: "We have all keyboard you need",

    des: "Mechanical switches, customizable RGB lighting, macro keys, anti-ghosting, and ergonomic design for precise and responsive gameplay.",
  },
];

const Slider = () => {
  return (
    <div className="md:w-1/2">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        // modules={[Pagination, Navigation]}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-full"
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.img}>
            <div className="relative">
              <img src={item.img} alt={item.header}></img>
              <div className="absolute top-[120px] left-24 right-36 bottom-0">
                <h1 className="text-3xl text-[#e6005c] mb-5">{item.header}</h1>
                <h3 className="mb-2">{item.des}</h3>
                <Link className="" to={item.link}>
                  <MainButton text="See more"></MainButton>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
