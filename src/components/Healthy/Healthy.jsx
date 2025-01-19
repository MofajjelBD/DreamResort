import { Helmet } from "react-helmet-async";
import HealthyP from "../../assets/Healthy.jpg";
const Healthy = () => {
  return (
    <>
      <Helmet>
        <title>Why Healthy | Dream Resort</title>
      </Helmet>
      <section className="py-8 relative xl:mr-0 lg:mr-5 mr-0">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h6 className="text-gray-400 text-base font-normal leading-relaxed"></h6>
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                      Wholesome Healthy Dishes
                    </h2>
                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                      Our restaurant takes pride in offering nutritious,
                      wholesome recipes that don’t compromise on flavor. From
                      vibrant salads to light, savory mains, each dish is
                      carefully crafted with fresh ingredients. Whether you are
                      in the mood for grilled proteins or plant-based options,
                      we ensure a delicious balance of taste and health in every
                      bite. Indulge in meals that nourish your body while
                      delighting your taste buds.
                    </p>
                  </div>
                </div>
                <div className="w-full flex-col justify-center items-start gap-6 flex">
                  <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        33+ Years Serving Memorable
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        Our long-standing expertise ensures that your dining
                        experience is nothing short of exceptional.
                      </p>
                    </div>
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        Decades of Culinary Passion
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        Each plate is a testament to our commitment to
                        excellence, ensuring that every meal is a memorable
                        experience, no matter how simple or extravagant.
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        Unforgettable Dining Moments
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        Our carefully curated menu and inviting ambiance are
                        designed to make every visit a celebration of food and
                        friendship.
                      </p>
                    </div>
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        99% Happy Clients
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        We take immense pride in knowing that 99% of our clients
                        leave with a smile. Their satisfaction fuels our
                        commitment to delivering exceptional culinary
                        experiences each day.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:justify-start justify-center items-start flex">
              <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                <img
                  className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                  src={HealthyP}
                  alt="about Us image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Healthy;
