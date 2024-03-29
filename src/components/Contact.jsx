const Conatct = () => {
  return (
    <section
      id="contact"
      className="container px-0 flex sm:flex-col relative h-fit mt-[8rem] sm:mt-[5rem] py-4"
    >
      {/* heading */}
      <div className="right w-fit flex flex-col sm:flex-row sm:justify-center sm:items-center items-center gap-8 sm:gap-2 space-y-4 sm:space-y-0 space-x-0 mt-[2.2rem]">
        <div className="rotate-[-90deg] sm:rotate-0 min-w-[120px] flex items-center justify-center uppercase text-[#5e5e5e] dark:text-[#9e9e9e] text-[20px]">
          contact
        </div>
        <div className="line h-[40px] w-[2px] sm:w-[40px] sm:h-[2px] bg-[#5e5e5e] dark:bg-[#9e9e9e]"></div>
      </div>

      {/* content */}
      <div className="flex sm:flex-col items-start sm:items-center w-full sm:px-4 sm:gap-8">
        <div className="left flex-1">
          <h2 className="text-[35px] font-bold text-black dark:text-white">
            Do You Have Any Project? <br /> Please Drop a Message
          </h2>
          <p className="w-[78%] sm:w-[90%] text-[#5e5e5e] dark:text-[#9e9e9e]">
            Feel free to contact me.
          </p>
        </div>
        <div className="right flex-1 flex items-center justify-center w-full">
          <div className="skills text-justify w-[85%] sm:w-full">
            <form className="w-[95%] sm:w-full p-6 py-8 rounded-[10px] bg-white dark:bg-[#303030] flex flex-col gap-7 shadow-lg">
              <div className=" flex flex-col gap-1">
                <label className="text-[16px] font-semibold cursor-pointer text-black dark:text-white">
                  Name
                </label>
                <input
                  className="  bg-[#e6e6e6] dark:bg-[#1f1f1f] p-2 rounded-[8px] text-[15px] text-black dark:text-white"
                  placeholder="e.g, Janeks Takayama"
                  type="text"
                />
              </div>
              <div className=" flex flex-col gap-1">
                <label className="text-[16px] font-semibold cursor-pointer text-black dark:text-white">
                  Email
                </label>
                <input
                  className="  bg-[#e6e6e6] dark:bg-[#1f1f1f] p-2 rounded-[8px] text-[15px] text-black dark:text-white"
                  placeholder="e.g, yourEmail@gmail.com"
                  type="email"
                />
              </div>
              <div className=" flex flex-col gap-1">
                <label className="text-[16px] font-semibold cursor-pointer text-black dark:text-white">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="  bg-[#e6e6e6] dark:bg-[#1f1f1f] p-2 rounded-[8px] text-[15px] text-black dark:text-white"
                  placeholder="Write message..."
                  type="text"
                />
              </div>
              <button className="flex items-center justify-center w-full bg-[#1f1f1f] dark:bg-[#e6e6e6] text-white hover:opacity-85 dark:text-[#1f1f1f] uppercase font-semibold p-2 rounded-[6px] mt-2">
                {" "}
                Send <span className="text-red-500 text-[20px]">.</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conatct;
