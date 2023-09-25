import { Link } from "react-router-dom";

const Details = ( {cardDetails} ) => {
  const { id, picture, title, description } = cardDetails || {};
  console.log(cardDetails);

  return (
    <div className="pb-14">
      <div className="relative max-w-max  flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img src={picture} className="w-full" alt="ui/ux review check" />
          <div className="absolute top-[688px] pl-8 backdrop-brightness-50 w-full py-10">
            <Link to={`/donation/${id}`}>
              <button className="px-2 py-2 rounded text-white bg-[#FF444A]">
                Donate $290
              </button>
            </Link>
          </div>
        </div>
        <div className="p-6">
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
           {title}
          </h4>
          <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
