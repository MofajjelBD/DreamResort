import BookingSeat from "../../../assets/Booking.jpg";
const Booking = () => {
  return (
    <div className="my-6 px-4">
      <div className="max-w-[691px] mx-auto text-center my-4">
        <h1 className="text-2xl md:text-4xl font-black dark:text-slate-200 text-opacity-100 dark:text-opacity-100">
          RESERVE YOUR SEAT
        </h1>
        <p className="text-sm md:text-lg font-normal leading-7 text-cPrimary dark:text-slate-200 text-opacity-100 dark:text-opacity-100 font-Inter pt-5 pb-2">
          Book Now for an Unforgettable Experience
        </p>
      </div>
      <div className="rounded-3xl bg-slate-400">
        <div className="grid grid-cols-12 gap-4 p-6 lg:-10">
          <div className="lg:col-span-6 col-span-12">
            <img src={BookingSeat} alt="" className="rounded-2xl" />
          </div>
          <div className="lg:col-span-6 col-span-12 items-center flex">
            <div className="lg:ps-12 h-full items-center grid">
              <h2 className="text-2xl md:text-4xl font-black text-[#002D74] text-opacity-100 dark:text-opacity-100">
                Join Our Delicious Snap
              </h2>
              <p className="text-sm md:text-lg font-normal text-[#002D74]  max-w-[652px] py-6">
                Reserve your table now for an unforgettable dining experience!
                With limited seating, booking ensures your spot to enjoy our
                delicious menu and welcoming atmosphere. Don’t miss out—secure
                your seat today for a perfect meal with us!
              </p>
              <div className="card-actions justify-start">
                <button className="btn btn-active text-lg bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium">
                  Booking Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
