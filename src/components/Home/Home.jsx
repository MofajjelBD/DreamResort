import { Helmet } from "react-helmet-async";
import Swiper from "../../components/slider/Swiper";
import Booking from "./Booking/Booking";
import Property_s from "./Property_s/Property_s";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Dream Resort</title>
      </Helmet>
      <Swiper></Swiper>
      <Property_s></Property_s>
      <Testimonial></Testimonial>
      <Booking></Booking>
    </>
  );
};

export default Home;
