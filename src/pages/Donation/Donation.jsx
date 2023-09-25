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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-12">
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

          <div className="flex justify-center items-center my-12">
            {donationsCard.length > 4 && (
              <button
                onClick={() => setIsShow(!isShow)}
                className="px-6 bg-red-400 text-white block mx-auto rounded py-2"
              >
                {isShow ? " See less" : "See All"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
