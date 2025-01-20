import { Helmet } from "react-helmet-async";
import EssenceP from "../../assets/booking.jpg";
const Essence = () => {
  return (
    <>
      <Helmet>
        <title>Why Essence | Dream Resort</title>
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
                      Luxury Living, Crafted for Comfort
                    </h2>
                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                      Our resort takes pride in offering a lifestyle that blends
                      luxury with wellness. From serene surroundings to
                      thoughtfully designed living spaces, each residence is
                      crafted to promote relaxation and rejuvenation. Whether
                      you seek a tranquil retreat or a vibrant community, our
                      resort ensures a perfect balance of comfort and
                      health-focused amenities. Indulge in an environment that
                      nourishes your body and mind, offering a harmonious blend
                      of nature, wellness, and modern living. This focuses on
                      the well-being and luxurious aspects of a residential
                      resort, similar to how the original focuses on health and
                      flavor in dining. Let me know if you had like any
                      adjustments!
                    </p>
                  </div>
                </div>
                <div className="w-full flex-col justify-center items-start gap-6 flex">
                  <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        33+ Years of Luxurious Living
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        Our decades of experience guarantee that your stay at
                        our resort is nothing less than extraordinary. With a
                        commitment to quality and personalized service, we
                        ensure that every moment spent here becomes a cherished
                        memory.
                      </p>
                    </div>
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        Decades of Luxury and Expertise
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        Each residence is a testament to our commitment to
                        excellence, ensuring that every stay is a memorable
                        experience, whether it’s a serene retreat or an opulent
                        escape.
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        Unforgettable Living Experiences
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        Our thoughtfully designed living spaces and welcoming
                        environment are crafted to make every stay a celebration
                        of comfort and community.
                      </p>
                    </div>
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        99% Happy Clients
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        We take immense pride in knowing that 99% of our
                        residents leave with lasting memories. Their
                        satisfaction drives our commitment to delivering
                        exceptional living experiences each and every day.
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
                  src={EssenceP}
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

export default Essence;
