import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Details from "./Details";

const CategoryCardDetails = () => {
  const [cardDetails, setCardDetails] = useState([]);

  const { id } = useParams();
  const idInt = parseInt(id);

  const details = useLoaderData();

  useEffect(() => {
    const detailsFind = details.find((detail) => detail.id === idInt);

    setCardDetails(detailsFind);

  }, [idInt, details]);

  return (
    <>
      <Details cardDetails={cardDetails}></Details>
    </>
  );
};


export default CategoryCardDetails;
