


// import Icon2 from "../assets/icons/icon-2.png";
import { useLoaderData } from "react-router-dom";
import CourseModal from "../components/course/CourseModal";
import { data } from "../services/data";

const Sample = () => {
  const res = useLoaderData()
  console.log(res);
  
  return (
    <>
      <section>
        <div
        id="sample" 
          className=""
        >
          <div className=" relative bg-black h-72 border-b-2 border-['dotted'] ">
              <div className=" p-6 flex flex-col justify-center h-full">
                <p className=" text-[#eee] font-bold">Course</p>
                  <h1 className=" text-white text-3xl font-bold ">{res?.name} Programme Info</h1>
                  <div className=" absolute bottom-6 left-6">
                    <p className=" text-white font-bold text-xl font-['Anta']"><span className="line-through">N</span> {res?.price || ""}</p>
                  </div>
              </div>
          </div>
          
          {/*  */}
          </div>
            

  
        <div className=" flex flex-col gap-6 mt-4 md:py-12">
          <div className=" *:text-center px-6 flex justify-end max-w-xl mx-auto  items-center text-center flex-col gap-2">
            
            <p className=" text-2xl sm:text-3xl   leading-10 text-white font-extrabold ">
              What You Will Learn{" "}
            </p>
            <p className=" text-sm sm:text-base text-[var(--text-tertiary)]">
            {res?.description || ""}
            </p>
          </div>
          <div className=" px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-[1240px]">
          
            {
              data.curriculum.map((week)=> {
                return (
                  <div className=" space-y-4 mt-4">
              <div className=" relative">
                {/* <p className=" text-white sm:text-sm bg-black px-4 py-1 absolute top-2 left-2 text-[9px] rounded-full">
                  {" "}
                  Week {week.week}
                </p> */}
                {/* <img
                  src={Course1}
                  alt=""
                  className=" rounded-xl h-auto w-full object-cover"
                /> */}
              </div>
              <div className=" px-[1em] space-y-4">
                <p className=" text-2xl sm:text-3xl  leading-10 text-black font-extrabold ">
                  {week.name}{" "}
                </p>
                
                <div className=" space-y-2">
                {
                  week.topics.map((topic)=> {
                    return (
                      <div>
                    <div>
                        <label htmlFor="first" className=" list-topic text-[var(--text-tertiary)] content-start before:bg-red-400">{topic}</label>
                        <input type="checkbox" name="" id="first" className=" checkbox hidden" />
                        <p className=" text-black">
                          
                        </p>
                    </div>
                </div> 
                    )
                  })
                }
                </div>
                
              </div>
            </div>
                )
              })
            }
            {/* 3 */}
          </div>
        </div>
        {/* new */}
        <div className=" px-4 md:px-6">
          <div className=" min-h-[400px] flex flex-col md:px-24 md:flex-row md:gap-6 md:items-center ">
            <div className=" flex-1">
            {/* <img
                  src={Course1}
                  alt=""
                  className=" rounded-xl h-auto w-full object-cover"
                /> */}
            </div>
            <div className=" bg-black rounded-xl flex gap-4 flex-col items-center justify-center py-6 mb-8 flex-1 gap-6 ">
              <h4 className="text-3xl  leading-10 text-white font-extrabold ">
                Beginner Friendly
              </h4>
              <p className=" max-w-md sm:text-base text-[11px] text-white px-4 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident quae placeat a. Corporis atque blanditiis iste
                aliquid.
              </p>
              <label
                htmlFor="cmodal"
                className=" rounded-3xl text-[#f9f9f9] bg-[#0c0c0c] leading-5 inline-block text-sm font-semibold px-5 py-2 hover:text-white"
              >
                {" "}
                Get Started Now
              </label>
            </div>
          </div>
        </div>
      </section>
      <CourseModal />
    </>
    
  );
};

export default Sample;
