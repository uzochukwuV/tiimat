import ECOURSE from "../assets/ecourse.png";
import Course1 from "../assets/course1.jpg";
import ReactSVG from "../assets/react.svg";
import Icon4 from "../assets/icons/icon-4.png";
import Icon2 from "../assets/icons/icon-2.png";

const Sample = () => {
  return (
    <>
      <section className=" w-full min-h-screen py-12">
        <div
          className="course-hero min-h-[800px] h-full bg-no-repeat bg-cover bg-left-top flex flex-col px-2 gap-20 justify-center "
          style={{
            // background: "url('../../public/bg.svg')",
            background: 'url("../../public/bg.svg")',
            backgroundSize: "cover",
            backgroundPosition: "36% 50%",

            backgroundRepeat: "no-repeat",
          }}
        >
          <div className=" min-h-[800px] md:min-h-[600px]  h-full flex flex-col md:flex-row md:items-center px-2 gap-20 justify-center items-center">
            <div className=" flex justify-center items-center text-center md:text-start md:items-start md:max-w-[50%] flex-col gap-4 px-4">
              <h2 className=" text-4xl md:text-5xl xl:text-6xl  leading-10 text-[var(--text-primary)] font-extrabold font-['Nunito']">
                Learn Modern Web <br /> Development
              </h2>
              <p className=" text-sm sm:text-base text-[var(--text-tertiary)]">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                optio illo. Et facere repellat, similique sunt eveniet accusamus
                voluptate cupiditate reiciendis delectus rerum molestias nihil.
                Doloribus architecto suscipit sint laborum.{" "}
              </p>
              <a
                href=""
                className=" rounded-3xl text-[#f9f9f9] bg-[#0c0c0c] leading-5 inline-block text-sm font-semibold px-5 py-2 hover:text-white"
              >
                {" "}
                Start Learning Now
              </a>
            </div>
            <div>
              <img src={ECOURSE} alt="ecourse" />
            </div>
          </div>
          {/*  */}
          <div
            className=""
            style={{
              //   background: 'url("../../public/bg.svg")',

              backgroundRepeat: "no-repeat",
            }}
          >
            <div className=" md:flex  md:border-t-2 md:border-b-2 border-black md:mx-24 gap-4">
              <div className=" flex-1  py-6 border-t-2 border-b-2 md:border-0 border-black flex justify-between md:justify-start md:gap-20 items-center text-[var(--text-primary)]">
                <div className=" *:text-center">
                  <h3 className=" text-3xl md:text-4xl xl:text-5xl  font-semibold ">
                    12
                  </h3>
                  <p className=" text-sm">Weeks</p>
                </div>
                <div className=" *:text-center">
                  <h3 className=" text-3xl md:text-4xl xl:text-5xl font-semibold ">
                    120
                  </h3>
                  <p className=" text-sm">Learns</p>
                </div>
                <div className=" *:text-center">
                  <h3 className=" text-3xl md:text-4xl xl:text-5xl font-semibold ">
                    2
                  </h3>
                  <p className=" text-sm">Certificates</p>
                </div>
              </div>
              <div className=" flex-1  md:py-6 flex flex-col justify-center">
                <div>
                  <p className=" uppercase py-6 md:py-0 font-semibold md:font-bold text-center md:text-start text-[var(--text-primary)]">
                    As Featured In{" "}
                  </p>
                </div>
                <div className="flex justify-between md:me-12 px-8 md:px-0 items-center text-[var(--text-primary)] *:inline-block *:w-12">
                  <img src={ReactSVG} alt="" />
                  <img src={Icon2} alt="" />
                  <img src={Icon4} alt="" />
                </div>
              </div>
            </div>
            {/*  */}
            <div className=" h-[700px]"></div>
          </div>

          {/*  */}
        </div>
        <div className=" flex flex-col gap-6 py-8 md:py-12">
          <div className=" *:text-center px-6 flex justify-end max-w-xl mx-auto  items-center text-center flex-col gap-2">
            <p className=" text-sm text-[var(--text-primary)] font-extrabold font-['Nunito']">
              Courses
            </p>
            <p className=" text-2xl sm:text-3xl   leading-10 text-[var(--text-primary)] font-extrabold font-['Nunito']">
              What You Will Learn{" "}
            </p>
            <p className=" text-sm sm:text-base text-[var(--text-tertiary)]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              quae placeat a. Corporis atque blanditiis iste aliquid.
            </p>
          </div>
          <div className=" px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-[1240px]">
            {/* 1  */}
            <div className=" shadow rounded-xl">
              <div className=" relative">
                <p className=" text-white sm:text-sm bg-black px-4 py-1 absolute top-2 left-2 text-[9px] rounded-full">
                  {" "}
                  Week One
                </p>
                <img
                  src={Course1}
                  alt=""
                  className=" rounded-xl h-auto w-full object-cover"
                />
              </div>
              <div className="py-[2em] px-[1em] space-y-4">
                <p className=" text-xl sm:text-3xl  leading-10 text-[var(--text-primary)] font-extrabold font-['Nunito']">
                  Introduction{" "}
                </p>
                <p className=" text-black">wjhdbjwhb</p>
                <p className=" sm:text-base text-[11px] text-[var(--text-tertiary)]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident quae placeat a. Corporis atque blanditiis iste
                  aliquid.
                </p>
                {/* <div>
                    <div>
                        <label htmlFor="first" className=" text-black content-start before:bg-red-400">Introduction to Html</label>
                        <input type="checkbox" name="" id="first" className=" checkbox hidden" />
                        <p className=" text-black">
                            Lorem ipsum dolor 
                        </p>
                    </div>
                </div> */}
              </div>
            </div>

            {/* 2 */}
            <div className=" shadow rounded-xl">
              <div className=" relative">
                <p className=" text-white sm:text-sm bg-black px-4 py-1 absolute top-2 left-2 text-[9px] rounded-full">
                  {" "}
                  Week One
                </p>
                <img
                  src={Course1}
                  alt=""
                  className=" rounded-xl h-auto w-full object-cover"
                />
              </div>
              <div className="py-[2em] px-[1em] space-y-4">
                <p className=" text-xl sm:text-3xl  leading-10 text-[var(--text-primary)] font-extrabold font-['Nunito']">
                  Introduction{" "}
                </p>
                <p className=" text-black">wjhdbjwhb</p>
                <p className=" sm:text-base text-[11px] text-[var(--text-tertiary)]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident quae placeat a. Corporis atque blanditiis iste
                  aliquid.
                </p>
                {/* <div>
                    <div>
                        <label htmlFor="first" className=" text-black content-start before:bg-red-400">Introduction to Html</label>
                        <input type="checkbox" name="" id="first" className=" checkbox hidden" />
                        <p className=" text-black">
                            Lorem ipsum dolor 
                        </p>
                    </div>
                </div> */}
              </div>
            </div>
            {/* 3 */}
          </div>
        </div>
        {/* new */}
        <div className=" px-4">
          <div className=" min-h-[400px]">
            <div>
            <img
                  src={Course1}
                  alt=""
                  className=" rounded-xl h-auto w-full object-cover"
                />
            </div>
            <div className=" space-y-4">
              <h4 className="text-3xl  leading-10 text-[var(--text-primary)] font-extrabold font-['Nunito']">
                Beginner Friendly
              </h4>
              <p className=" sm:text-base text-[11px] text-[var(--text-tertiary)]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident quae placeat a. Corporis atque blanditiis iste
                aliquid.
              </p>
              <a
                href=""
                className=" rounded-3xl text-[#f9f9f9] bg-[#0c0c0c] leading-5 inline-block text-sm font-semibold px-5 py-2 hover:text-white"
              >
                {" "}
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sample;
