import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl">Oops!!</h1>
        <p className="my-3 text-lg">404 Page not found</p>
        <p className="my-3 text-lg">
          Sorry, 404 an unexpected error has occurred.
        </p>

        <Link to="/">
          <button className="btn bg-[#FF444A] btn-sm capitalize text-white hover:bg-[#ff6666]">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
