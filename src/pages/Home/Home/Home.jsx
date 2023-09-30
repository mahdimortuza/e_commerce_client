import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="max-w-[1450px] px-[1.5rem] mx-auto bg-slate-400">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home || Baba's Store</title>
      </Helmet>
      This is Home
    </div>
  );
};

export default Home;
