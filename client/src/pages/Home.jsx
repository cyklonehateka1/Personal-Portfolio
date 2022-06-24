import { MdKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div
      name="home"
      className="lg:h-[80vh] h-screen w-full bg-gradient-to-t from-blue-200"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 lg:flex-row">
        <div className="pb-10 lg:relative lg:right-60 lg:bottom-20 xl:right-36 hidden ">
          <h2 className="text-3xl font-bold xl:text-8xl xl:my--96 relative xl:top-auto xl:bottom-auto top-20 right-24">
            My Stack
          </h2>
        </div>
        <div>
          <img
            src="https://i.ibb.co/8D7VFg5/hero2.png"
            alt="Hero "
            className="w-2/3  relative left-20 lg:w-semiBig lg:left-96 xl:w-big"
          />
        </div>
        <div className="w-3/4 h-80 bg-white relative top-10 items-center flex flex-col pt-2 px-8 rounded-md lg:h-60 lg:pt-0 lg:top-60">
          <h2 className="text-2xl sm:text-6xl font-bold my-5 lg:text-3xl lg:">
            Hi, I'm Hateka,
          </h2>
          <p className="text-gray-700 text-2xl mb-4 lg:text-xl">
            a full stack developer who is problem solving driven and ready to
            help widen the scope of your brand through extensive web
            development.
          </p>
          <div>
            <button className="group text-white flex bg-gradient-to-r from-blue-500 to-blue-700 h-10 w-32 items-center justify-center rounded-md">
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
