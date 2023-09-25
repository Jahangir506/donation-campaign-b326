const Banner = () => {
  return (
    <div className="h-[40vh] bg-gray-200">
      <div className="flex flex-col justify-center items-center h-[200px] md:h-[300px]">
        <h1 className="text-xl font-bold md:text-3xl lg:text-5xl">I Grow By Helping People In Need</h1>
        <div className="mt-10">
          <input className="w-60 py-2 px-3 rounded-l outline-gray-200 border border-gray-100 " placeholder="Search here..."></input>
          <button className="bg-[#FF444A] py-2 rounded-r text-white px-3">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
