import Slider from "./Slider/Slider";
import Offer from "./Offer/Offer";

const Header = () => {
  return (
    <div className="flex gap-8 mt-10">
      <Slider></Slider>
      <Offer></Offer>
    </div>
  );
};

export default Header;
