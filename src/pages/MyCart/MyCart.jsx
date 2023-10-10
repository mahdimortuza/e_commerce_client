import { Helmet } from "react-helmet";

const MyCart = () => {
    return (
        <div className="max-w-[1450px] px-5 md:px-0 mx-auto">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Cart || Console </title>
        </Helmet>
            Cart Page
        </div>
    );
};

export default MyCart;