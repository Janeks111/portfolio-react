import { useEffect, useState } from "react";
import useDarkMode from "../context/themeToggle";
import { MdOutlineWbSunny } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import { CgMenuMotion } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const { toggleTheme } = useDarkMode();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav
      className={`navbar px-10 sm:px-5   flex items-center justify-between z-10   ${
        scrollPosition > 10
          ? "h-[82px] sm:h-[75px] shadow-md bg-white dark:bg-[#303030]"
          : "h-[105px] sm:h-[90px]"
      }`}
    >
      <div className="container sm:p-0 flex items-center justify-between w-full">
        {/* --------Left part: Logo--------- */}
        <div className="left-side sm:z-[30]">
          <a className="text-[30px] font-bold cursor-pointer text-black dark:text-white ">
            Portfolio
            <span className=" text-red-500 text-[35px] font-bold">.</span>
          </a>
        </div>
        {/* --------Left part: Logo--------- */}

        {/* ---------Mid part: links--------- */}
        <div
          className={`middle  sm:fixed sm:flex-col sm:top-[0%] sm:h-[100vh] sm:left-[-50%] sm:bg-[#fff] sm:dark:bg-[#333333]  ${
            isNavOpen ? "sm:translate-x-[50%]" : "sm:translate-x-[-50%]"
          }  sm:w-full flex items-center justify-center gap-[28px] `}
        >
          <li className=" text-[16px] sm:text-[20px] font-semibold cursor-pointer text-black dark:text-white">
            <a onClick={() => handleToggleNav(false)} href="#home" title="Home">
              Home <span className=" text-red-500 text-[20px]">.</span>
            </a>
          </li>
          <li className=" text-[16px] sm:text-[20px] font-semibold cursor-pointer text-black dark:text-white">
            <a
              onClick={() => handleToggleNav(false)}
              href="#about"
              title="About"
            >
              About <span className=" text-red-500 text-[20px]">.</span>
            </a>
          </li>
          <li className=" text-[16px] sm:text-[20px] font-semibold cursor-pointer text-black dark:text-white">
            <a
              onClick={() => handleToggleNav(false)}
              href="#skills"
              title="Skills"
            >
              Skills <span className=" text-red-500 text-[20px]">.</span>
            </a>
          </li>
          <li className=" text-[16px] sm:text-[20px] font-semibold cursor-pointer text-black dark:text-white">
            <a onClick={() => handleToggleNav(false)} href="#works" title="">
              Works <span className=" text-red-500 text-[20px]">.</span>
            </a>
          </li>
          <li className=" text-[16px] sm:text-[20px] font-semibold cursor-pointer text-black dark:text-white">
            <a onClick={() => handleToggleNav(false)} href="#contact" title="">
              Contact <span className=" text-red-500 text-[20px]">.</span>
            </a>
          </li>
        </div>
        {/* ---------Mid part: links--------- */}

        {/* ---------Right part: Toggle Theme------- */}
        <div className="right-side flex items-center justify-center gap-4">
          <div
            onClick={toggleTheme}
            className={`cursor-pointer p-3 w-fit rounded-[10px]  ${
              scrollPosition > 10
                ? " bg-[#e6e6e6] dark:bg-[#1f1f1f]"
                : "bg-white dark:bg-[#303030]"
            }`}
          >
            <MdOutlineWbSunny className="hidden dark:flex cursor-pointer text-black dark:text-white" />
            <MdNightlight className="visible dark:hidden cursor-pointer text-black dark:text-white" />
          </div>

          {/* hamburger */}
          <div
            onClick={() => handleToggleNav()}
            className="hidden sm:flex flex-col gap-2 "
          >
            {!isNavOpen ? (
              <CgMenuMotion
                className="flex z-[20] cursor-pointer text-black dark:text-white"
                size={30}
              />
            ) : (
              <RxCross2
                className="flex z-[20] cursor-pointer text-black dark:text-white"
                size={30}
              />
            )}
          </div>
        </div>
        {/* ---------Right part: Toggle Theme------- */}
      </div>

      <style>{`
        html {
          overflow-y: ${isNavOpen ? "hidden" : "visible"};
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
