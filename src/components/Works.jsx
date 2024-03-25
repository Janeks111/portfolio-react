import { MdLink } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";

import project1 from "/8.png";
import project2 from "/2.jpg";
import project3 from "/3.jpg";
import project4 from "/4.jpg";
import project5 from "/5.jpg";

const worksData = [
  { icon: project1, name: "project 1" },
  { icon: project2, name: "project 2" },
  { icon: project3, name: "project 3" },
  { icon: project4, name: "project 4" },
  { icon: project5, name: "project 5" },
];

const Works = () => {
  return (
    <section
      id="works"
      className="container px-0 flex sm:flex-col relative h-fit mt-[8rem] sm:mt-[5rem] py-4"
    >
      {/* heading */}
      <div className="right w-fit flex flex-col sm:flex-row sm:justify-center sm:items-center items-center gap-8 sm:gap-2 space-y-4 sm:space-y-0 space-x-0 mt-[2.2rem]">
        <div className="rotate-[-90deg] sm:rotate-0 min-w-[120px] flex items-center justify-center uppercase text-[#5e5e5e] dark:text-[#9e9e9e] text-[20px]">
          my works
        </div>
        <div className="line h-[40px] w-[2px] sm:w-[40px] sm:h-[2px] bg-[#5e5e5e] dark:bg-[#9e9e9e]"></div>
      </div>

      {/* content */}
      <div className="flex sm:flex-col items-start sm:items-center w-full sm:px-4 sm:gap-8">
        <div className="left flex-1 ">
          <h2 className="text-[35px] font-bold text-black dark:text-white">
            See My Works
          </h2>
          <p className="w-[78%] sm:w-[90%] text-[#5e5e5e] dark:text-[#9e9e9e]">
            Explore my portfolio to witness the fusion of creativity and
            technical expertise. From captivating web designs to seamless user
            experiences, my work showcases the mastery of HTML, JavaScript,
            React, CSS, and more. Dive in to discover how I bring ideas to life
            in the digital realm.
          </p>
        </div>
        <div className="right flex-[2] sm:w-full flex flex-col gap-4">
          <div className="skills text-justify w-[92%] sm:w-full text-[#5e5e5e] dark:text-[#9e9e9e] columns-3 sm:columns-1 space-y-4">
            {worksData?.map((data) => (
              <div
                key={data.icon}
                className="relative group overflow-hidden shadow-md"
              >
                <img
                  className="rounded-md overflow-hidden "
                  src={data.icon}
                  alt=""
                />
                <div className="absolute bottom-[-50px] capitalize group-hover:bottom-4 rounded-[4px] left-[50%] translate-x-[-50%] p-1 px-3   w-[90%] flex items-center justify-between">
                  <p className="text-black font-medium bg-[#fff] shadow-md p-1 px-2 rounded-full">
                    {data.name}
                  </p>
                  <div className=" flex items-center gap-3">
                    <a href="#" title="Link">
                      <MdLink
                        size={28}
                        className=" rounded-full text-black text-[18px] bg-[#fff] shadow-md p-1"
                      />
                    </a>
                    <a href="#" title="Github">
                      <IoLogoGithub
                        size={28}
                        className=" rounded-full text-black text-[18px] bg-[#fff] shadow-md p-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
            <p className=" text-center capitalize text-black dark:text-white text-[16px] font-semibold cursor-pointer">
              <a href="#skills" title="Skills">
                See more <span className=" text-red-500 text-[20px]">.</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
