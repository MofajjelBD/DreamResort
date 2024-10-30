import Food from "./Food";

const Foods = () => {
  return (
    <>
      <div className="max-w-[691px] mx-auto text-center pt-8 md:pt-16">
        <h1 className="text-2xl md:text-4xl font-black dark:text-slate-200 text-opacity-100 dark:text-opacity-100">
          Top List is Back
        </h1>
        <p className="text-sm md:text-lg font-normal leading-7 text-cPrimary dark:text-slate-200 text-opacity-100 dark:text-opacity-100 font-Inter pt-5 pb-2">
          All ours best meals in one delicious snap
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 my-8">
        <Food></Food>
        <Food></Food>
        <Food></Food>
        <Food></Food>
        <Food></Food>
        <Food></Food>
        <Food></Food>
      </div>
    </>
  );
};

export default Foods;
