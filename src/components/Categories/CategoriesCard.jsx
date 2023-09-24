const CategoriesCard = ({ category }) => {
  const { id, title, price, description, category_name, picture, card_color } =
    category || {};

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={picture}
            className="w-full"
            alt="Shoes"
          />
        </figure>
        <div className="p-4">
          <button className="py-0.5 px-2 bg-blue-500 rounded text-white">{category_name}</button>
          <p className="my-2"><span className="font-medium">Title:</span> {title}</p>
          <p><span className="font-medium">description:</span> <br /> <p className="my-2">{description}</p></p>
          <p className="mt-2"><span className="font-medium">Price:</span> {price}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
