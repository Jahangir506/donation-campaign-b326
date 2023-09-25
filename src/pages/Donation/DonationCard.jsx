const DonationCard = ({ donation }) => {
  const { id, picture, title, description, category_name, price } =
    donation || {};

  return (
    <div>
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={picture} alt="image" className="h-full md:h-full lg:h-52 w-full object-cover" />
        </div>
        <div className="py-4 px-5">
          <p className="py-1 px-2 max-w-max text-xs  bg-blue-500 rounded text-white">
            {category_name}
          </p>
          <p className="my-1 text-lg font-bold">{title}</p>
          <p className="text-lg font-semibold">${price}</p>
          <div className="mt-6">
            <button className="py-1 px-2 text-white bg-[#FF444A] rounded">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
