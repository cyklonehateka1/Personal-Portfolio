import { MdKeyboardArrowRight } from "react-icons/md";
import TypeIt from "typeit-react";
const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-t from-blue-200">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div>
          <h2>My Stack</h2>
          <TypeIt
            getBeforeInit={(instance) => {
              instance
                .type("MongoDB")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("Express")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("React")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("NodeJs")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("MongoDB")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("Express")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("React")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("NodeJs")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("MongoDB")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("Express")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("React")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("NodeJs")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("MongoDB")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("Express")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("React")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("NodeJs")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("MongoDB")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("Express")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("React")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("NodeJs")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("MongoDB")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("Express")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("React")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("NodeJs")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("MongoDB")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("Express")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("React")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("NodeJs")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("MongoDB")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("Express")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("React")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("NodeJs")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("MongoDB")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("Express")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("React")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("NodeJs")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("MongoDB")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("Express")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("React")
                .pause(750)
                .delete(7)
                .pause(750)
                .type("NodeJs");

              // Remember to return it!
              return instance;
            }}
          />
          <span></span>
        </div>
        <div>
          <img
            src="https://i.ibb.co/8D7VFg5/hero2.png"
            alt="Hero image"
            className="mx-auto w-2/3 md:w-full"
          />
        </div>
        <div className="bg-white lg:h-60 lg:w-semiBig lg:absolute lg:right-10 lg:bottom-80 rounded-lg py-6 text-center items-center flex flex-col">
          <h2 className="text-3xl sm:text-6xl font-bold">Hi, I'm Hateka</h2>
          <p className="text-gray-700 py-4 max-w-md md:text-2xl">
            I'm a full stack developer who helps widen the scope of your brand
            through extensive web development.
          </p>
          <div>
            <button className="text-white w-fit px-6 py-3 ny-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-blue-900 h-9">
              Portfolio
              <span>
                <MdKeyboardArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
