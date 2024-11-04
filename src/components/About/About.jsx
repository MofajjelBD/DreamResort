import About1 from "../../assets/About_2.jpg";
import About2 from "../../assets/About_1.jpg";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Freshy Recipe Restaurant</title>
      </Helmet>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-indigo-700 text-4xl tracking-tight font-extrabold dark:text-white">
              Freshly Made for You
            </h2>
            <p className="mb-4">
              At <strong className="font-bold italic ">Freshy</strong> Freshy,
              our recipes are rooted in tradition and elevated by creativity.
              Every dish is thoughtfully crafted with fresh ingredients, rich
              flavors, and a touch of culinary innovation. From savory
              appetizers to mouthwatering main courses, each recipe is designed
              to bring out the best in every ingredient. Whether it’s our
              signature pasta, slow-cooked meats, or indulgent desserts, every
              bite promises a balance of flavor, texture, and taste. We believe
              in making every meal a memorable experience, where passion meets
              the plate, and where quality is always the key ingredient.
            </p>
            <p>
              At our restaurant, we take pride in crafting dishes with the
              freshest ingredients, combining traditional flavors with
              innovative techniques
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
