
import hero2 from "../assets/hero-2.png";
import hero3 from "../assets/hero-3.svg";
import Icon1 from "../assets/icons/icon-1.png";
import Icon2 from "../assets/icons/icon-2.png";
import Icon3 from "../assets/icons/icon-3.png";
import Icon4 from "../assets/icons/icon-4.png";
import Icon5 from "../assets/icons/icon-.png";

const Hero = () => {
  return (
    <section className=" relative min-h-screen flex flex-col h-full sm:px-10 md:px-16 xl:px-24 z-10 font-normal ">
      {/* <div className=" absolute  right-0 h-[60vh] md:h-[85%] w-[80%] bg1 rounded-s-full rounded-b-full"></div> */}
      <div className=" absolute  left-0 h-[70vh] md:h-[85%] w-[95%] md:w-80% bg1 opacity-5 rounded-s-full rounded-b-full"></div>
      <div className=" h-[80vh] grid grid-rows-2 grid-flow-col pt-6 md:pt-0  gap-6 md:flex flex-row-reverse md:items-center  ">
        <div
          id="hero-img"
          className="img relative bg-contain bg-no-repeat md:bg-center md:w-[50%] md:bg-cover md:h-[60%] flex justify-end items-center flex-1  "
        >
          <div
            className="absolute top-0 left-0 right-0 bottom-0 flex items-end justify-center"
            style={{ zIndex: -1 }}
          >
            <img
              src={hero3}
              alt="hero-2"
              className=" absolute bottom-0 right-32 md:right-44 lg:right-64 h-20 z-20 me-6 "
            />
          </div>

          <img
            src={hero2}
            alt="hero-2"
            className=" sm:me-0 w-[18rem] md:w-[20rem]"
            style={{ zIndex: 10 }}
          />
        </div>
        <div className="write-up flex flex-col gap-4 *:text-start px-6 py-8 md:px-0 flex-1">
          <h2 className=" text-[var(--text-primary)] font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Bridging the Gap{" "}
            <span className=" text-[var(--primary-color)]">Between</span> Tech
            And Seamless Innovation
          </h2>
          <p className=" *:text-[var(--text-secondary)] text-sm md:text-base lg:text-lg">
            <span>Tech doesnt have to feel like a different language.</span>
            <span>
              We build schematiq to make sure tech works for you, your business
              and your future
            </span>
          </p>
          <div className=" pt-4 *:py-2 *:min-w-[180px] *:px-4 *:text-sm *:text-[var(--text-primary)] *:md:text-base flex gap-4 ">
            <button className=" bg-[var(--primary-color)]">
              Start Innovating Now
            </button>
            <button className="bg-transparent hover:outline-0 focus:autline-0">
              How it Works
            </button>
          </div>
          
        </div>
        <div className=" absolute bottom-0 left-0 right-0 px-6 ">
          <div className=" flex justify-between items-center max-w-5xl mx-auto">
            <img
              src={Icon1}
              alt="icon-1"
              className=" w-[50px] inline-block "
              style={{ zIndex: 10 }}
            />
            <img
              src={Icon2}
              alt="icon-2"
              className=" w-[50px] inline-block "
              style={{ zIndex: 10 }}
            />
            <img
              src={Icon3}
              alt="icon-3"
              className=" w-[50px] inline-block "
              style={{ zIndex: 10 }}
            />
            <img
              src={Icon4}
              alt="icon-4"
              className=" w-[50px] inline-block "
              style={{ zIndex: 10 }}
            />
            <img
              src={Icon5}
              alt="icon-5"
              className=" w-[50px] inline-block "
              style={{ zIndex: 10 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
