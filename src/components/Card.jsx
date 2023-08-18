import { PropTypes } from "prop-types";

const Card = ({ id, name, imgUrl, price }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow p-3 flex flex-col justify-between">
      <div className="">
        <img
          className="w-full object-contain sm:w-90 md:w-80 lg:w-70"
          src={imgUrl}
          alt={name}
        />
      </div>

      <div className="flex flex-col">
        <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
          {name}
        </h5>

        <p className="mb-3 font-normal text-gray-700 flex items-center">
          {price}€
        </p>
        <a
          href={`/productos/${id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          Read more
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
