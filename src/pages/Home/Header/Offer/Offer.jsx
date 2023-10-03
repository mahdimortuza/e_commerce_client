import offerimg1 from "../../../../assets/headphones/h2178d-black-4-500x500.jpg";
import offerimg2 from "../../../../assets/joystick/3d-pro-gaming-joystick-1-500x500.jpg";

import { useEffect, useState } from "react";

// some data for the offer section
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

const Offer = () => {
  const initialTime = 60;

  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const seconds = time % 60;
  const minutes = Math.floor(time / 60);
  const hours = 420;

  return (
    <div className="md:w-1/2 mt-5 md:mt-0">
      {/*  this is for offer section  */}
      <div className="border-2 rounded-md h-full border-[#e6005c] hover:border-[#626262]">
        <h1 className="offerText md:text-xl text-center mt-3">
          Special Gift Offer for You
        </h1>

        {/* this is for offer timer  */}

        <div className="px-5 md:px:0 pb-5">
          {offers.map((offer) => (
            <div key={offer.img}>
              <div className="mx:5 md:mx-10 mt-3 md:mt-1">
                <div className="md:flex gap-2 md:gap-5 items-center justify-between">
                  <div className="flex gap-2 md:gap-5 items-center">
                    <img className="w-20 md:w-24" src={offer.img}></img>
                    <div>
                      <h1 className="">
                        <span className="text-[#e6005c] text-xl md:text-3xl font-bold">
                          {offer.off}
                        </span>
                        <span className="badge badge-accent text-white ml-1">
                          {offer.status}
                        </span>
                      </h1>
                      <h1 className="text:md md:text-xl font-bold ">{offer.des}</h1>


                      {/* this is for the timer  */}`
                      <h1 className="text-md md:text-xl font-bold md:mt-2">
                        <span className="bg-[#36c2b4] text-white px-2 py-1 rounded-md mr-2">
                          {hours}
                        </span>
                        :
                        <span className="bg-[#36c2b4] text-white px-2 py-1 rounded-md ml-2 mr-2">
                          {minutes}
                        </span>
                        :
                        <span className="bg-[#36c2b4] text-white px-2 py-1 rounded-md ml-2 mr-2">
                          {seconds}
                        </span>
                      </h1>
                      `
                    </div>
                  </div>


                  {/* coupon section  */}
                  <div className="md:w-1/3 md:mt-5">
                    <h2 className="border border-dashed border-[#e6005c] px-2 py-1 md:px-4 md:py-3 rounded-md text-md md:text-3xl font-bold">
                      {offer.coupon}
                    </h2>
                    <p className="mt-1 text-xs">{offer.warn}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
