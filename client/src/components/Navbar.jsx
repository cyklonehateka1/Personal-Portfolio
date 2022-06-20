import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import MobileNavMenu from "./MobileNavMenu";
import Close from "@mui/icons-material/Close";
const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const mobileMeuOpener = () => {
    setMenuIsOpen(true);
  };

  const mobileMenuClose = () => {
    setMenuIsOpen(false);
  };

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
          <DarkModeIcon style={{ color: "yellow", cursor: "pointer" }} />
        </div>
        <div className="md:hidden" onClick={mobileMeuOpener}>
          <MenuIcon />
        </div>
        {menuIsOpen && <MobileNavMenu />}
        {menuIsOpen && (
          <div className="z-20" onClick={mobileMenuClose}>
            <Close
              style={{
                width: "2.5rem",
                height: "2.5rem",
                color: "white",
                zIndex: "999",
                position: "relative",
                top: "5px",
                right: "auto",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
