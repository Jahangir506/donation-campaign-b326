import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl">Oops!!</h1>
        <p className="my-3 text-lg">Sorry, an unexpected error has occurred.</p>
        <p className="mb-3">
          <i>{error.statusText || error.message}</i>
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
