import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "animate.css";

import Banner_1 from "../../assets/1.jpg";
import Banner_2 from "../../assets/2.jpg";
import Banner_3 from "../../assets/3.jpg";
import Banner_4 from "../../assets/4.jpg";
export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="">
          <div className="relative lg:max-h-[80vh] card image-full before:!bg-inherit before:bg-gradient-to-t before:from-[#150B2B]">
            <div className="h-full bg-cover bg-no-repeat bg-center">
              <img
                src={Banner_1}
                alt=""
                className="w-full h-auto md:aspect-video"
              />
            </div>
            <div className="my-auto mx-auto py-0 px-10 md:px-24 justify-center w-full h-full !absolute card-body flex md:items-start">
              <div className="max-w-[420px] text-start">
                <h1 className="animate__animated animate__bounce font-bold text-lg md:leading-8 lg:leading-10 md:text-[26px] lg:text-[36px] text-white text-center sm:text-start mx-auto lg:mb-2">
                  Finally, the dish you have been waiting for your table
                </h1>
                <p className="animate__animated animate__fadeIn text-white text-sm md:text-base lg:leading-8 text-center sm:text-start md:mb-2">
                  For super nutrition, the chic and health conscious flock to
                  Freshy.
                </p>
                <div className="text-center sm:text-start mt-3">
                  <button className="px-3 py-1 md:py-2 md:px-4 rounded-full text-white btn-success font-semibold border border-green hover:bg-inherit bg-green-700 hover:text-white">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="relative lg:max-h-[80vh] card image-full before:!bg-inherit before:bg-gradient-to-t before:from-[#150B2B]">
            <div className="h-full bg-cover bg-no-repeat bg-center">
              <img
                src={Banner_2}
                alt=""
                className="w-full h-auto md:aspect-video"
              />
            </div>
            <div className="my-auto mx-auto py-0 px-10 md:px-24 justify-center w-full h-full !absolute card-body flex md:items-start">
              <div className="max-w-[420px] text-start">
                <h1 className="animate__animated animate__bounce font-bold text-lg md:leading-8 lg:leading-10 md:text-[26px] lg:text-[36px] text-white text-center sm:text-start mx-auto lg:mb-2">
                  Finally, the dish you have been waiting for your table
                </h1>
                <p className="animate__animated animate__fadeIn text-white text-sm md:text-base lg:leading-8 text-center sm:text-start md:mb-2">
                  For super nutrition, the chic and health conscious flock to
                  Freshy.
                </p>
                <div className="text-center sm:text-start mt-3">
                  <button className="px-3 py-1 md:py-2 md:px-4 rounded-full text-white btn-success font-semibold border border-green hover:bg-inherit bg-green-700 hover:text-white">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="relative lg:max-h-[80vh] card image-full before:!bg-inherit before:bg-gradient-to-t before:from-[#150B2B]">
            <div className="h-full bg-cover bg-no-repeat bg-center">
              <img
                src={Banner_3}
                alt=""
                className="w-full h-auto md:aspect-video"
              />
            </div>
            <div className="my-auto mx-auto py-0 px-10 md:px-24 justify-center w-full h-full !absolute card-body flex md:items-start">
              <div className="max-w-[420px] text-start">
                <h1 className="animate__animated animate__bounce font-bold text-lg md:leading-8 lg:leading-10 md:text-[26px] lg:text-[36px] text-white text-center sm:text-start mx-auto lg:mb-2">
                  Finally, the dish you have been waiting for your table
                </h1>
                <p className="animate__animated animate__fadeIn text-white text-sm md:text-base lg:leading-8 text-center sm:text-start md:mb-2">
                  For super nutrition, the chic and health conscious flock to
                  Freshy.
                </p>
                <div className="text-center sm:text-start mt-3">
                  <button className="px-3 py-1 md:py-2 md:px-4 rounded-full text-white btn-success font-semibold border border-green hover:bg-inherit bg-green-700 hover:text-white">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="relative lg:max-h-[80vh] card image-full before:!bg-inherit before:bg-gradient-to-t before:from-[#150B2B]">
            <div className="h-full bg-cover bg-no-repeat bg-center">
              <img
                src={Banner_4}
                alt=""
                className="w-full h-auto md:aspect-video"
              />
            </div>
            <div className="my-auto mx-auto py-0 px-10 md:px-24 justify-center w-full h-full !absolute card-body flex md:items-start">
              <div className="max-w-[420px] text-start">
                <h1 className="animate__animated animate__bounce font-bold text-lg md:leading-8 lg:leading-10 md:text-[26px] lg:text-[36px] text-white text-center sm:text-start mx-auto lg:mb-2">
                  Finally, the dish you have been waiting for your table
                </h1>
                <p className="animate__animated animate__fadeIn text-white text-sm md:text-base lg:leading-8 text-center sm:text-start md:mb-2">
                  For super nutrition, the chic and health conscious flock to
                  Freshy.
                </p>
                <div className="text-center sm:text-start mt-3">
                  <button className="px-3 py-1 md:py-2 md:px-4 rounded-full text-white btn-success font-semibold border border-green hover:bg-inherit bg-green-700 hover:text-white">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
