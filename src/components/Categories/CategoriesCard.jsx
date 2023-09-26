import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CategoriesCard = ({ category }) => {
  const {
    id,
    title,
    category_name,
    picture,
    healthCardColor,
  } = category || {};


  return (
    <Link to={`/categories/${id}`}>
      <div
        className="card w-72  shadow-xl grow h-full"
        style={{ backgroundColor: healthCardColor.card_bg }}
      >
        <figure>
          <img src={picture} className="w-full" alt="Shoes" />
        </figure>
        <div className="p-4">
          <button
            className="py-0.5 px-2 rounded text-xs backdrop-brightness-95"
            style={{
              backgroundColor: healthCardColor.button_bg,
              color: healthCardColor.text_color,
            }}
          >
            {category_name}
          </button>
          <p
            className="my-2 text-xl font-semibold"
            style={{ color: healthCardColor.text_color }}
          >
            {" "}
            {title}
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
