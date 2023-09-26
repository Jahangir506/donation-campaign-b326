import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const CategoriesCard = ({ category }) => {
  const { id, title, price, description, category_name, picture, card_color } =
    category || {};


  return (
    <Link to={`/categories/${id}`} >
      <div className="card w-72 bg-base-100 shadow-xl grow h-full">
        <figure>
          <img
            src={picture}
            className="w-full"
            alt="Shoes"
          />
        </figure>
        <div className="p-4">
          <button className="py-0.5 px-2 bg-blue-500 rounded text-white">{category_name}</button>
          <p className="my-2 text-xl"><span className="font-medium">Title:</span> {title}</p>
        </div>
      </div>
    </Link>
  );
};

CategoriesCard.propTypes = {
  category: PropTypes.object.isRequired
}

export default CategoriesCard;
