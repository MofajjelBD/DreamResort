import { useLoaderData } from "react-router-dom";
import Food from "./Food";
import { useState } from "react";

const Foods = () => {
  const FoodData = useLoaderData();
  const [FoodLength, setFoodLength] = useState(6);
  return (
    <>
      <div className="px-4">
        <div className="max-w-[691px] mx-auto text-center pt-8 md:pt-16">
          <h1 className="text-2xl md:text-4xl font-black dark:text-slate-200 text-opacity-100 dark:text-opacity-100">
            All Available Estates
          </h1>
          <p className="text-sm md:text-lg font-normal leading-7 text-cPrimary dark:text-slate-200 text-opacity-100 dark:text-opacity-100 font-Inter pt-5 pb-2">
            All our finest properties in one stunning view.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-6 my-2 md:my-8">
          {FoodData.slice(0, FoodLength).map((FoodData) => (
            <Food key={FoodData.id} FoodData={FoodData}></Food>
          ))}
          <div>
            <button
              onClick={() => setFoodLength(FoodData.length)}
              className={
                FoodLength === FoodData.length || FoodData.length <= 6
                  ? "hidden"
                  : "btn font-WorkSans text-white text-opacity-100 font-semibold text-base md:text-lg border border-transparent bg-green-500 px-5 hover:bg-green-500"
              }
            >
              Show All Foods
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Foods;
