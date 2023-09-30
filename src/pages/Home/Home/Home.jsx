import { Helmet } from "react-helmet";
import MainHeader from "../../../components/MainHeader/MainHeader";

const Home = () => {
  return (
    <div className="max-w-[1450px] px-5 md:px-0 mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home || Baba's Store</title>
      </Helmet>
      <MainHeader
        heading="Our All Products"
        subHeading="You got one place to find our premium products."
      ></MainHeader>
    </div>
  );
};

export default Home;
