import { Helmet } from "react-helmet-async";
import Swiper from "../../components/slider/Swiper";
import Booking from "./Booking/Booking";
import Foods from "./Foods/Foods";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Dream Resort</title>
      </Helmet>
      <Swiper></Swiper>
      <Foods></Foods>
      <Testimonial></Testimonial>
      <Booking></Booking>
    </>
  );
};

export default Home;
