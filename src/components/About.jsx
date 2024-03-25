import React from "react";

const About = () => {
  // Function to handle the download action
  const handleDownloadCV = () => {
    // Assuming 'cv.pdf' is the name of the file you want to download
    const url = "/path/to/cv.pdf"; // Replace this with the actual path to your CV
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "cv.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="container px-0 flex sm:flex-col relative h-fit mt-[8rem] sm:mt-[5rem] py-4"
    >
      {/* heading */}
      <div className="right w-fit flex flex-col sm:flex-row sm:justify-center sm:items-center items-center gap-8 sm:gap-2 space-y-4 sm:space-y-0 space-x-0 mt-[2.2rem]">
        <div className="rotate-[-90deg] sm:rotate-0 min-w-[120px] flex items-center justify-center uppercase text-[#5e5e5e] dark:text-[#9e9e9e] text-[20px]">
          ABOUT ME
        </div>
        <div className="line h-[40px] w-[2px] sm:w-[40px] sm:h-[2px] bg-[#5e5e5e] dark:bg-[#9e9e9e]"></div>
      </div>

      {/* content  */}
      <div className="flex sm:flex-col items-start sm:items-center w-full sm:px-4 sm:gap-8">
        <div className="left flex-1 ">
          <h2 className="text-[35px] font-bold text-black dark:text-white">
            Who I am?
          </h2>
          <p className="w-[78%] sm:w-[90%] text-[#5e5e5e] dark:text-[#9e9e9e]">
            I am a front-end web developer passionate about creating interactive
            and user-friendly web applications!
          </p>
        </div>
        <div className="right flex-1 flex flex-col gap-4">
          <p className="text-justify w-[85%] sm:w-full text-[#5e5e5e] dark:text-[#9e9e9e]">
            Hi! I’m{" "}
            <span className=" text-[20px] text-black dark:text-white font-medium">
              Janeks Takayama
            </span>
            , and I’m a developer who has passion for building clean web
            applications with intuitive functionalities. I enjoy the process of
            turning ideas into reality using creative solutions. I’m always
            curious about learning new skills, tools, and concepts. In addition
            to working on various solo front-end projects, I have worked with
            creative teams, which involves communications, source control, and
            project management.
          </p>
          <div className="btns">
            {/* Attach onClick event to trigger handleDownloadCV function */}
            <button
              onClick={handleDownloadCV}
              className="uppercase border border-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black dark:border-white rounded-md p-2 px-4 font-semibold text-black dark:text-white"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
