import Food_1 from "../../../assets/Food_3.png";

const Food = () => {
  return (
    <>
      <div
        className="relative card bg-base-100 w-[408px] h-[408px]"
        href="/books/6"
      >
        <figure className="absolute top-0 left-0 !items-start rounded-full z-10">
          <div className="bg-transparent rounded-[16px] max-h-[240px] max-w-[240px] justify-center flex shadow-xl">
            <img className="h-full w-auto" src={Food_1}></img>
          </div>
        </figure>
        <div className="absolute bottom-0 right-0 card-body bg-slate-700  font-Mulish max-h-[340px] sm:w-[340px] max-w-[340px] p-6 justify-end border border-gray-400 rounded-3xl">
          <h2 className="card-title text-2xl font-bold text-white justify-end py-6 z-10">
            10.99$
          </h2>
          <div className="flex gap-4 flex-wrap z-10">
            <span className="text-base text-green-500 font-medium rounded-full py-2 px-5 bg-green-50">
              History
            </span>
            <span className="text-base text-green-500 font-medium rounded-full py-2 px-5 bg-green-50">
              Anthropology
            </span>
          </div>
          <div className="flex justify-between flex-wrap py-3">
            <div>
              <h2 className="card-title text-2xl font-bold text-white">
                Chessy Pizza
              </h2>
              <p className="text-base font-medium  text-white text-opacity-80">
                With Special Sauce
              </p>
            </div>
            <span className="my-auto text-white">Cart</span>
          </div>
          <div className="flex justify-between flex-wrap py-3">
            <span className="text-base font-medium  text-white text-opacity-80 flex gap-2">
              Review:
            </span>
            <span className="text-base font-medium  text-white text-opacity-80 flex items-center gap-2">
              4.7
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 576 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Food;
