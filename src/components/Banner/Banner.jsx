import PropTypes from 'prop-types';
import img from "../../assets/images/banner.png";
const Banner = ({ handleSearch }) => {
  return (
    <div>
        <div className="relative h-80 lg:h-96  w-full">
          <img
            src={img}
            alt="image 1"
            className="h-full w-full object-cover rounded-b-md"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-white/90">
            <div className="flex flex-col justify-center items-center h-[200px] md:h-[300px]">
              <h1 className="text-xl font-bold md:text-3xl text-black lg:text-5xl">
                I Grow By Helping People In Need
              </h1>
              <form onSubmit={handleSearch}>
                <div className="mt-10">
                  <input
                    type="text"
                    name="textSearch"
                    className="w-60 py-2 px-3 rounded-l outline-gray-200 border inset-0 bg-white/60  border-gray-100 "
                    placeholder="Search here..."
                  ></input>
                  <button
                    type="submit"
                    className="bg-[#FF444A] py-2 rounded-r text-white px-3"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  );
};

Banner.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Banner;

