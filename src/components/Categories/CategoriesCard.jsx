import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CategoriesCard = ({ category }) => {
  const {
    id,
    campaign_name,
    category_name,
    picture,
    colorSetup,
  } = category || {};


  return (
    <Link to={`/categories/${id}`}>
      <div
        className="card w-72  shadow-xl grow h-full"
        style={{ backgroundColor: colorSetup.card_bg }}
      >
        <figure>
          <img src={picture} className="w-full" alt="Shoes" />
        </figure>
        <div className="p-4">
          <button
            className="py-0.5 px-2 rounded text-xs backdrop-brightness-95"
            style={{
              backgroundColor: colorSetup.button_bg,
              color: colorSetup.text_color,
            }}
          >
            {category_name}
          </button>
          <p
            className="my-2 text-xl font-semibold"
            style={{ color: colorSetup.text_color }}
          >
            {" "}
            {campaign_name}
          </p>
        </div>
      </div>
    </Link>
  );
};

CategoriesCard.propTypes = {
  category: PropTypes.object.isRequired,
};

export default CategoriesCard;
