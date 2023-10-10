import Slider from "./Slider/Slider";
import Offer from "./Offer/Offer";
import SearchBar from "../../../components/SearchBar/SearchBar";

const Header = () => {
  return (
    <>
      <SearchBar></SearchBar>
      <div className="md:flex gap-8 mt-5 md:mt-10">
        <Slider></Slider>
        <Offer></Offer>
      </div>
    </>
  );
};

export default Header;
