import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donationsCard, setDonations] = useState([]);

  const [noDataFound, setNoDataFound] = useState(false);

  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donation"));

    if (donationItems) {
      setDonations(donationItems);
    } else {
      setNoDataFound("No Data Found");
    }
  }, []);

  return (
    <div>
      {noDataFound ? (
        <p className="h-[80vh] flex justify-center items-center">
          {noDataFound}
        </p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 px-4 items-center">
            {isShow
              ? donationsCard.map((donations) => (
                  <DonationCard
                    key={donations.id}
                    donation={donations}
                  ></DonationCard>
                ))
              : donationsCard
                  .slice(0, 4)
                  .map((donations) => (
                    <DonationCard
                      key={donations.id}
                      donation={donations}
                    ></DonationCard>
                  ))}
          </div>

          <div className="flex justify-center items-center my-12 ">
            {donationsCard.length > 4 && (
              <button
                onClick={() => setIsShow(!isShow)}
                className={`px-5 bg-[#FF444A] text-white mx-auto rounded py-1 ${isShow ? 'hidden' : ''}`}
              >
                {!isShow ? "See All" : "hidden" }
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
