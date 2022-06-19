import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState();
  return (
    <div className="w-full fixed top-0 bg-white">
      <div className="container mx-auto py-5 flex items-center justify-between ">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">C.HATEKA</h1>
        </div>
        <ul className="hidden md:flex md:space-x-5 space-x-10 text-gray-700 font-bold text-small uppercase">
          <li className="hover:text-gray-500 duration-500">
            <span>home</span>
          </li>
          <li className="hover:text-gray-500 duration-500">
            <span>services</span>
          </li>
          <li className="hover:text-gray-500 duration-500">
            <span>about</span>
          </li>
          <li className="hover:text-gray-500 duration-500">
            <span>works</span>
          </li>
          <li className="hover:text-gray-500 duration-500">
            <span>contact</span>
          </li>
        </ul>
        <div className="hidden md:block">
          <DarkModeIcon
            style={{ color: "yellow", width: "2.5rem", cursor: "pointer" }}
          />
        </div>
        <div className="md:hidden">
          <MenuIcon />
        </div>
        <ul className="bg-blue-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center text-xl uppercase hidden">
          <li>
            <span>home</span>
          </li>
          <li>
            <span>services</span>
          </li>
          <li>
            <span>about</span>
          </li>
          <li>
            <span>works</span>
          </li>
          <li>
            <span>contact</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
