import html from "/skills/html.png";
import css from "/skills/css.png";
import js from "/skills/javascript.png";
import typescript from "/skills/typescript.png";
import react from "/skills/react js.png";
import nextjs from "/skills/next js.png";
import redux from "/skills/redux toolkit.png";
import vite from "/skills/vite.png";
import tailwind from "/skills/tailwind css.png";
import node from "/skills/node js.png";

const skillsData = [
  { icon: html, name: "HTML" },
  { icon: css, name: "CSS" },
  { icon: js, name: "JavaScript" },
  { icon: typescript, name: "TypeScript" },
  { icon: tailwind, name: "Tailwind CSS" },
  { icon: vite, name: "Vite" },
  { icon: react, name: "React.js" },
  { icon: nextjs, name: "Next.js" },
  { icon: redux, name: "Redux Toolkit" },
  { icon: node, name: "Node.js" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="container px-0 flex sm:flex-col relative h-fit mt-[8rem] sm:mt-[5rem] py-4"
    >
      {/* heading */}
      <div className="right w-fit flex flex-col sm:flex-row sm:justify-center sm:items-center items-center gap-8 sm:gap-2 space-y-4 sm:space-y-0 space-x-0 mt-[2.2rem]">
        <div className="rotate-[-90deg] sm:rotate-0 min-w-[120px] flex items-center justify-center uppercase text-[#5e5e5e] dark:text-[#9e9e9e] text-[20px]">
          my skills
        </div>
        <div className="line h-[40px] w-[2px] sm:w-[40px] sm:h-[2px] bg-[#5e5e5e] dark:bg-[#9e9e9e]"></div>
      </div>

      {/* content */}
      <div className="flex sm:flex-col items-start sm:items-center w-full sm:px-4 sm:gap-10">
        <div className="left flex-1">
          <h2 className="text-[35px] font-bold text-black dark:text-white">
            My Programming <br /> Skills
          </h2>
          <p className="w-[78%] sm:w-[90%] text-[#5e5e5e] dark:text-[#9e9e9e]">
            I possess a diverse skill set in front-end development and web
            design, proficient in HTML, JavaScript, React, and CSS, with a
            strong foundation in TypeScript and jQuery. Experienced in utilizing
            frameworks such as Bootstrap and Tailwind CSS for responsive and
            visually appealing designs. Proficient in version control systems
            like Git, GitHub, and GitLab for efficient collaboration.
            Additionally, I have a keen understanding of project management
            principles and strive to deliver optimal user experiences through
            effective design and development practices.
          </p>
        </div>
        <div className="right flex-1 flex flex-col gap-4">
          <div className="skills text-justify w-[85%] sm:w-full text-[#5e5e5e] dark:text-[#9e9e9e] grid grid-cols-5 place-content-center items-center gap-4">
            {skillsData.map((data) => (
              <div
                key={data.icon}
                className="tooltip-container group relative flex items-center justify-center w-fit h-fit mb-4 "
              >
                <img
                  src={data.icon}
                  alt={data.name}
                  className="image drop-shadow-lg"
                />

                <div className="bg-dark dark:bg-[#303030] absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded-[5px] py-1.5 px-3.5 text-sm text-white opacity-0 group-hover:opacity-100 uppercase">
                  <span className="bg-dark dark:bg-[#303030] absolute bottom-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45"></span>
                  {data.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
