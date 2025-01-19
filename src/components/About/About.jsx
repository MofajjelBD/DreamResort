import About1 from "../../assets/About_2.jpg";
import About2 from "../../assets/About_1.jpg";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Dream Resort</title>
      </Helmet>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-indigo-700 text-4xl tracking-tight font-extrabold dark:text-white">
              Crafted with Care Just for You
            </h2>
            <p className="mb-4">
              At <strong className="font-bold italic ">Dream Resort</strong> our
              company, we take pride in offering homes that are rooted in
              quality and elevated by modern design. Each property is
              thoughtfully curated with the finest materials, expert
              craftsmanship, and a touch of innovation. From cozy apartments to
              luxurious estates, every home is designed to provide comfort and
              style. Whether it's a charming townhouse, a spacious family home,
              or a contemporary apartment, each property promises a perfect
              blend of functionality, aesthetics, and value. We believe in
              making every living experience a memorable one, where attention to
              detail meets excellence, and where quality is always our top
              priority.
            </p>
            <p>
              This version adapts the focus from food to homes and real estate,
              while keeping a similar tone and structure. Let me know if you'd
              like any further changes!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src={About1}
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-14 rounded-lg"
              src={About2}
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
