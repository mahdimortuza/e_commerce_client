import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import bg1 from "../../../assets/banner/1.webp";
import bg2 from "../../../assets/banner/2.webp";
import bg3 from "../../../assets/banner/3.webp";
// import bg4 from "../../../assets/banner/4.webp";
import bg5 from "../../../assets/banner/5.webp";
import MainButton from "../../../components/MainButton/MainButton";
import offerimg1 from "../../../assets/headphones/h2178d-black-4-500x500.jpg";
import offerimg2 from "../../../assets/joystick/3d-pro-gaming-joystick-1-500x500.jpg";

const offers = [
  {
    img: offerimg1,
    off: "50% Off",
    status: "Active",
    des: "This winter",
    coupon: "#gs354e8",
    warn: "This coupon will be applied if you buy more than $1222",
  },
  {
    img: offerimg2,
    off: "20% Off",
    status: "Active",
    des: "Hot sell",
    coupon: "#gs354e8",
    warn: "This coupon will be applied if you buy more than $2222",
  },
];

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
    <div className="flex gap-8 mt-10">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Set the delay in milliseconds (e.g., 3000ms = 3 seconds)
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-1/2"
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

      {/*  this is for offer section  */}
      <div className="w-1/2">
        <div className="border-2 rounded-md h-full border-[#e6005c] hover:border-[#626262]">
          <h1 className="offerText text-xl text-center mt-3">
            Special Gift Offer for You
          </h1>

          {/* this is for offer timer  */}

          <div>
            {offers.map((offer) => (
              <div key={offer.coupon}>
                <div className="mx-10 mt-1">
                  <div className="flex gap-5 items-center justify-between">
                    <div className="flex gap-5 items-center">
                      <img className="w-24" src={offer.img}></img>
                      <div>
                        <h1 className="">
                          <span className="text-[#e6005c] text-3xl font-bold">
                            {offer.off}
                          </span>
                          <span className="badge badge-accent text-white ml-1">
                            {offer.status}
                          </span>
                        </h1>
                        <h1 className="text-xl font-bold ">{offer.des}</h1>
                        <h1 className="text-xl font-bold mt-2">
                          <span className="bg-[#36c2b4] text-white px-2 py-1 rounded-md mr-2">
                            202
                          </span>
                          :
                          <span className="bg-[#36c2b4] text-white px-2 py-1 rounded-md ml-2 mr-2">
                            12
                          </span>
                          :
                          <span className="bg-[#36c2b4] text-white px-2 py-1 rounded-md ml-2 mr-2">
                            32
                          </span>
                        </h1>
                      </div>
                    </div>
                    {/* coupon section  */}
                    <div className="w-1/3 mt-5">
                      <h2 className="border border-dashed border-[#e6005c] px-4 py-3 rounded-md text-3xl font-bold">{offer.coupon}</h2>
                      <p className="mt-1 text-xs">{offer.warn}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
