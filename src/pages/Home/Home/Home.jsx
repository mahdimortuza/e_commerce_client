import { Helmet } from "react-helmet";
import MainHeader from "../../../components/MainHeader/MainHeader";
import Header from "../Header/Header";
import AllProducts from "../AllProducts/AllProducts";

const Home = () => {
  return (
    <div className="max-w-[1450px] px-5 md:px-0 mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home || Console </title>
      </Helmet>

      <Header></Header>

      {/* This is for section heading  */}
      <MainHeader
        heading="Our All Products"
        subHeading="You got one place to find our premium products."
      ></MainHeader>

      {/* This is for loading all products in tab  */}
      <AllProducts></AllProducts>
    </div>
  );
};

export default Home;
