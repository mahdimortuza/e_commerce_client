import { Helmet } from "react-helmet";
import MainButton from "../../../components/MainButton/MainButton";
import MainHeader from "../../../components/MainHeader/MainHeader";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div className="max-w-[1450px] px-5 md:px-0 mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home || Baba's Store</title>
      </Helmet>

      <Header></Header>

      <MainHeader
        heading="Our All Products"
        subHeading="You got one place to find our premium products."
      ></MainHeader>
      <MainButton text="Hello world"></MainButton>
    </div>
  );
};

export default Home;
