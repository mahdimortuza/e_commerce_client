import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center text-3xl font-bold mt-[200px] text-red-500">
      <h1>dang, 404 content not found...:-)</h1>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default ErrorPage;
