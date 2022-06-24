import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const NavBar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "stack",
    },
    {
      id: 4,
      link: "works",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-black bg-white px-4 fixed z-50">
      <div>
        <h1 className="text-3xl font-bold text-blue-900 ml-2">C.HATEKA</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-800 hover:scale-105 duration-300 sm:text-xl"
          >
            {link}
          </li>
        ))}
      </ul>
      <div
        className="pr-4 z-20 md:hidden"
        onClick={() => setMobileNav(!mobileNav)}
      >
        {mobileNav && <FaTimes size={30} className="text-white" />}
        {!mobileNav && <FaBars size={30} />}
      </div>
      {mobileNav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-blue-700 to-blue-200 duration-1000 z-10">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 capitalize py-6 text-3xl text-white">
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
