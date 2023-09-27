import PropTypes from "prop-types";
import swal from "sweetalert";

const Details = ({ cardDetails }) => {
  const {picture, campaign_name, description, colorSetup, price } = cardDetails || {};
  const prices = parseInt(price)

  const handleAddToCard = () => {
    const donationCardAdd = [];

    const donationCardItems = JSON.parse(localStorage.getItem("donation"));
    if (!donationCardItems) {
      donationCardAdd.push(cardDetails);
      localStorage.setItem("donation", JSON.stringify(donationCardAdd));
      swal("Good job!", "Donation Selected successfully!", "success");
    } else {
      donationCardAdd.push(...donationCardItems, cardDetails);
      localStorage.setItem("donation", JSON.stringify(donationCardAdd));
      swal("Good job!", "Donation Selected successfully!", "success");
    }
  };

  return (
    <div className="pb-14">
      <div className="relative max-w-max flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 h-[235px] md:h-[400px] lg:h-[600px]  overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img src={picture} className="w-full" alt="ui/ux review check" />
          <div className="absolute top-[153px] md:top-[315px] lg:top-[480px] pl-4 lg:pl-8 backdrop-brightness-50 w-full py-6 md:py-7 lg:py-10">
            <button
              onClick={handleAddToCard}
              className="px-1 lg:px-2 py-1 lg:py-2 rounded text-white" style={{backgroundColor: colorSetup?.button_background}}
            >
              Donate ${prices}
            </button>
          </div>
        </div>
        <div className="p-6">
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {campaign_name}
          </h4>
          <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {
  cardDetails: PropTypes.object.isRequired,
};

export default Details;
