const Banner = () => {
  return (
    <div className="h-[60vh] bg-green-200">
      <div className="flex flex-col justify-center items-center h-[60vh]">
        <h1 className="text-5xl font-bold">I Grow By Helping People In Need</h1>
        <div className="mt-10">
          <input className="w-60 py-2 px-3 rounded-l" placeholder="Search here..."></input>
          <button className="bg-[#FF444A] py-2 rounded-r text-white px-3">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
