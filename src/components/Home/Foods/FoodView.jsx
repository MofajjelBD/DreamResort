import { useLoaderData, useLocation, useParams } from "react-router-dom";

const FoodView = () => {
  const Food = useLoaderData();
  const { id } = useParams();
  const locationDirectory = useLocation();

  const {
    // id,
    title,
    segment_name,
    description,
    status,
    price,
    size,
    location,
    facilities,
    image,
  } = Food;
  return (
    <div className="max-w-[1202px] mx-auto px-4 mt-8">
      <div className="grid grid-cols-2 gap-12">
        <div className="col-span-2 md:col-span-1 grid">
          <div className="bg-base-200 rounded-2xl w-full lg:p-20 py-8 justify-center flex">
            <img className="h-full w-auto" src={image}></img>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 grid items-center">
          <h2 className="card-title text-2xl font-bold font-Playfair text-Primary dark:text-Primary-dark">
            {title}
          </h2>
          <p className="text-base font-medium font-WorkSans text-Primary dark:text-Primary-dark text-opacity-80 py-2">
            {segment_name}
          </p>
          <div className="py-3 border-y my-1">
            <span className="text-base font-medium font-WorkSans text-Primary dark:text-Primary-dark text-opacity-80 flex gap-2">
              {description}
            </span>
          </div>
          <div className="py-2">
            <p className="text-base font-WorkSans text-Primary dark:text-Primary-dark leading-6 text-opacity-70">
              <span className="font-bold text-base font-WorkSans text-Primary dark:text-Primary-dark">
                Size :
              </span>
              {size}
            </p>
          </div>
          <div className="flex gap-4 flex-wrap py-2">
            <strong className="font-bold text-base leading-7 font-WorkSans text-Primary dark:text-Primary-dark items-center w-full md:w-auto flex">
              Tag
            </strong>
            {facilities.map((tags, Index) => (
              <span
                key={Index}
                className="text-base text-green-500 font-medium font-WorkSans rounded-full py-2 px-5 bg-green-50"
              >
                {tags}
              </span>
            ))}
          </div>
          <div className="my-2 border-b"></div>
          <div className="overflow-x-auto mb-6">
            <table className="table">
              <tbody>
                <tr className="border-0 my-2">
                  <td className="p-0 py-1 font-WorkSans text-base text-opacity-100 leading-7">
                    Price:
                  </td>
                  <td className="p-0 py-1 font-WorkSans text-base text-opacity-60 leading-7 font-semibold">
                    {price}
                  </td>
                </tr>
                <tr className="border-0 my-2">
                  <td className="p-0 py-1 font-WorkSans text-base text-opacity-100 leading-7">
                    Location:
                  </td>
                  <td className="p-0 py-1 font-WorkSans text-base text-opacity-60 leading-7 font-semibold">
                    {location}
                  </td>
                </tr>
                <tr className="border-0 my-2">
                  <td className="p-0 py-1 font-WorkSans text-base text-opacity-100 leading-7">
                    Year of Publishing:
                  </td>
                  <td className="p-0 py-1 font-WorkSans text-base text-opacity-60 leading-7 font-semibold">
                    {}
                  </td>
                </tr>
                <tr className="border-0 my-2">
                  <td className="p-0 py-1 font-WorkSans text-base text-opacity-100 leading-7">
                    Status:
                  </td>
                  <td className="p-0 py-1 font-WorkSans text-base text-opacity-60 leading-7 font-semibold">
                    {status}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <div className="flex gap-4">
            <a
              onClick={() => handleAddToBook(id, readStore)}
              className="btn font-WorkSans text-Primary dark:text-Primary-dark text-opacity-100 font-semibold text-lg border border-Primary dark:border-Primary-dark border-opacity-30 bg-transparent px-5"
            >
              {readStore}
            </a>
            <a
              onClick={() => handleStoreToBook(id, WishlistStore)}
              className="btn font-WorkSans text-white text-opacity-100 font-semibold text-lg border border-transparent bg-info px-5 hover:text-Primary dark:hover:text-Primary-dark"
            >
              {WishlistStore}
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FoodView;
