import PropTypes from "prop-types";

const DonationCard = ({ donation }) => {
  const { campaign_name, price, category_name, picture, colorSetup } =
    donation || {};
    

  return (
    <div className="flex grow h-full">
      <div
        className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-clip-border text-gray-700 shadow-md"
        style={{ backgroundColor: colorSetup.card_bg }}
      >
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={picture}
            alt="image"
            className="h-full md:h-full lg:h-52 w-full object-cover"
          />
        </div>
        <div className="py-4 px-5">
          <p
            className="py-1 px-2 max-w-max text-xs  bg-blue-500 rounded text-white"
            style={{
              backgroundColor: colorSetup.button_bg,
              color: colorSetup.text_color,
            }}
          >
            {category_name}
          </p>
          <p className="my-2 text-lg font-bold">{campaign_name}</p>
          <p
            className="text-lg font-semibold"
            style={{ color: colorSetup.text_color }}
          >
            ${price}
          </p>
          <div className="mt-5">
            <button
              className="py-1 px-2 text-white rounded"
              style={{ backgroundColor: colorSetup.button_background }}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

DonationCard.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default DonationCard;
