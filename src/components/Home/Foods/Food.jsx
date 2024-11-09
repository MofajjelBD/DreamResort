import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Food = ({ FoodData = {} }) => {
  const {
    id,
    title,
    segment_name,
    description,
    // status,
    price,
    size,
    location,
    // facilities,
    image,
  } = FoodData;
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
    });
  }, []);
  return (
    <>
      <div
        className="relative card bg-base-100 w-[400px] h-full"
        href="/books/6"
        data-aos="zoom-in-up"
      >
        <figure className="absolute top-0 left-0 !items-start rounded-full z-10">
          <div className="bg-transparent rounded-[16px] max-h-[240px] max-w-[240px] justify-center flex shadow-xl">
            <img className="h-full w-auto" src={image}></img>
          </div>
        </figure>
        <div className="mt-28 ml-auto card-body bg-slate-700  font-Mulish min-h-[340px] sm:w-[340px] max-w-[340px] p-6 justify-end border border-gray-400 rounded-3xl">
          <h2 className="card-title text-2xl font-bold text-white justify-end py-6 z-10">
            {price}$
          </h2>
          <div className="flex gap-4 flex-wrap z-10">
            {/* {facilities.map((facilities, Index) => (
              <span
                key={Index}
                className="text-base text-green-500 font-medium font-WorkSans rounded-full py-2 px-5 bg-green-50"
              >
                {facilities}
              </span>
            ))} */}
            <p className="my-auto text-white">{description}</p>
          </div>
          <div className="flex justify-between flex-wrap py-3">
            <div>
              <h2 className="card-title text-2xl font-bold text-white">
                {title}
              </h2>
              <p className="text-base font-medium  text-white text-opacity-80">
                {segment_name}
              </p>
            </div>
            <span className="my-auto text-white">{size}</span>
          </div>
          <div className="flex justify-between flex-wrap py-3">
            <span className="text-base font-medium  text-white text-opacity-80 flex gap-2">
              <Link
                to={`/food-view/${id}`}
                className="px-3 py-1 md:py-2 md:px-4 rounded-full text-white btn-success font-semibold border border-green hover:bg-inherit bg-green-700 hover:text-white"
              >
                Food view
              </Link>
            </span>
            <span className="text-lg font-medium  text-white text-opacity-80 flex items-center gap-2">
              {location}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
Food.propTypes = {
  FoodData: PropTypes.any,
  title: PropTypes.any,
};

export default Food;
