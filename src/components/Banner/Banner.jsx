import { Carousel } from "@material-tailwind/react";
import img from '../../assets/images/banner.jpg';
const Banner = () => {
  return (
    <div>

      <Carousel className="rounded-xl">
        <div className="relative h-96 w-full">
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
              <div className="mt-10">
                <input
                  className="w-60 py-2 px-3 rounded-l outline-gray-200 border inset-0 bg-white/60  border-gray-100 "
                  placeholder="Search here..."
                ></input>
                <button className="bg-[#FF444A] py-2 rounded-r text-white px-3">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;

<div className="flex flex-col justify-center items-center h-[200px] md:h-[300px]">
  <h1 className="text-xl font-bold md:text-3xl lg:text-5xl">
    I Grow By Helping People In Need
  </h1>
  <div className="mt-10">
    <input
      className="w-60 py-2 px-3 rounded-l outline-gray-200 border border-gray-100 "
      placeholder="Search here..."
    ></input>
    <button className="bg-[#FF444A] py-2 rounded-r text-white px-3">
      Search
    </button>
  </div>
</div>;
