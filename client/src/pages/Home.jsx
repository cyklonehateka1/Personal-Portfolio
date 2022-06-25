import { MdKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div
      name="home"
      className="lg:h-[80vh] h-screen w-full bg-gradient-to-t from-blue-200"
    >
      <div className="md:max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 lg:flex-row">
        <div className="pb-10 lg:relative lg:right-60 lg:bottom-20 xl:right-36 hidden ">
          <h2 className="text-3xl font-bold xl:text-8xl xl:my--96 relative xl:top-auto xl:bottom-auto top-20 right-24">
            My Stack
          </h2>
        </div>
        <div>
          <img
            src="https://i.ibb.co/8D7VFg5/hero2.png"
            alt="Hero "
            className="w-2/3 left-16 top-6 relative sm:w-1/2 sm:left-28 md:left-20 lg:w-semiBig lg:left-96 xl:w-big xl:rounded-[5rem]"
          />
        </div>
        <div className="top-7 md:h-80 h-56 md:w-3/4  bg-white relative md:top-10 items-center flex flex-col pt-2 px-8 rounded-md lg:h-60 lg:pt-0 lg:top-60 xl:left-[26rem] xl:h-80 xl:top-20 xl:w-big xl:rounded-lg">
          <h2 className="text-2xl sm:text-4xl font-bold my-1  md:my-5 lg:text-3xl xl:text-5xl xl:mt-7 text-blue-900">
            Hi, I'm Hateka,
          </h2>
          <p className="text-[17px] sm:text-xl text-gray-700 md:text-2xl mb-4 lg:text-xl text-center xl:text-2xl">
            a full stack developer who is problem solving driven and ready to
            help widen the scope of your brand through extensive web
            development.
          </p>
          <div>
            <button className="group h-7 w-24 text-[15px] text-white flex bg-gradient-to-r from-blue-500 to-blue-700 md:h-10 md:w-32 items-center justify-center rounded-md">
              Portfolio
              <span className="group-hover:rotate-90 duration-500 ">
                <MdKeyboardArrowRight size={25} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
