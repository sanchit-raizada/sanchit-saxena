import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkData } from "./navProps";
import { useTheme } from "../../theme/themeContext";
import { useState } from "react";
import Portfolio from "./Portfolio";
import StickyScroll from "./StickyScroll";

const NavBar = () => {
  const { isDarkMode, setDarkMode } = useTheme();
  const [MobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="w-full flex px-4 py-4 items-center justify-between fixed top-0 shadow-md  bg-white dark:bg-black z-50">
        <section className="w-[180px] relative">
          <h1 className="text-4xl font-medium relative text-center  text-black dark:text-white transition-colors duration-500">
            Portfolio
          </h1>
          <Portfolio />
        </section>

        {/* Desktop Nav */}
        <ul className="hidden md:flex md:space-x-4 text-gray-600 dark:text-gray-300 items-center">
          {LinkData.map(({ icon, link, href }, index) => (
            <li
              key={index}
              className="group flex items-center gap-1 capitalize"
            >
              <FontAwesomeIcon
                icon={icon}
                className="group-hover:text-black dark:group-hover:text-white transition-colors duration-300"
              />
              <a
                target="_blank"
                rel={link === "resume" ? "noopener noreferrer" : ""}
                href={href}
                className="group-hover:text-black dark:group-hover:text-white transition-colors duration-300"
              >
                {link}
              </a>
            </li>
          ))}
          {/* Dark Mode Toggle */}
          <li>
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="text-xl hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              <FontAwesomeIcon
                icon={["fas", isDarkMode ? "moon" : "sun"]}
                className="text-lg"
              />
            </button>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenu(true)}
          className="md:hidden text-xl hover:text-black dark:text-white transition-colors duration-300"
        >
          <FontAwesomeIcon icon={["fas", "bars"]} className="text-lg" />
        </button>
      </header>
      <StickyScroll />

      {/* Mobile Slide Menu */}
      <section
        className={`md:hidden fixed top-0 right-0 min-h-screen w-[300px] bg-white dark:bg-black text-black dark:text-white shadow-lg z-999 transform transition-transform duration-300 ${
          MobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMobileMenu(false)}>
            <FontAwesomeIcon icon={["fas", "times"]} className="text-2xl" />
          </button>
        </div>
        <ul className="flex flex-col items-center  text-xl font-medium">
          {LinkData.map(({ link, icon, href }, index) => (
            <li key={index} className="mt-8 uppercase">
              <FontAwesomeIcon icon={icon} className="text-xl  mr-3" />
              <a
                target="_blank"
                rel={link === "resume" ? "noopener noreferrer" : ""}
                href={href}
                onClick={() => setMobileMenu(false)}
                className="text-xl font-light"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default NavBar;
