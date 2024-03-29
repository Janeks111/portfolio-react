import {} from "react-icons/io";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";

const Hero = () => {
  return (
    <header
      id="home"
      className="container h-[95vh] sm:h-[650px] overflow-hidden sm:px-0"
    >
      <div className="w-full h-full relative flex items-end justify-center">
        {/* ------- character picture ------- */}
        <img
          className="character-img rounded-full absolute bottom-0 left-[50%] transform translate-x-[-50%] w-[35vw] sm:w-[80vw] h-[35vw] sm:h-[80vw] object-cover shadow select-none"
          src="../../public/6.jpg"
          alt="Character Picture"
        />
        {/* ------- heading------ */}
        <div className="absolute top-[20%] left-[50%] translate-x-[-50%] sm:top-[23%] w-full text-center">
          <h1 className="uppercase text-white text-[120px] sm:text-[60px] font-bold">
            Janeks Takayama
          </h1>
        </div>
        {/* ------- heading------ */}
        <div className="w-full flex items-end justify-between">
          <div className="left w-fit flex flex-col items-center gap-4 z-[5] sm:pl-6">
            <a href="https://github.com/Janeks111" title="Github">
              <IoLogoGithub
                size={21}
                className="text-[#5e5e5e] dark:text-[#9e9e9e]  cursor-pointer"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/janeks-t-048886264/"
              title="Linkedin"
            >
              <IoLogoLinkedin
                size={21}
                className="text-[#5e5e5e] dark:text-[#9e9e9e]  cursor-pointer"
              />
            </a>
            <a
              href="https://www.instagram.com/pharaohthefirst/"
              title="Instagram"
            >
              <IoLogoInstagram
                size={21}
                className="text-[#5e5e5e] dark:text-[#9e9e9e]  cursor-pointer"
              />
            </a>
            <div className="line h-[40px] w-[2px] bg-[#5e5e5e] dark:bg-[#9e9e9e]"></div>
          </div>
          <div className="right w-fit flex flex-col items-center gap-4 space-y-4">
            <a
              href="#about"
              className="rotate-90 text-[#5e5e5e] dark:text-[#9e9e9e] text-[20px] cursor-pointer"
            >
              SCROLL
            </a>
            <div className="line h-[40px] w-[2px] bg-[#5e5e5e] dark:bg-[#9e9e9e]"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
