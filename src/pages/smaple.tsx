

import { useLoaderData } from "react-router-dom";
import CourseModal from "../components/course/CourseModal";
import { useEffect, useState } from "react";
import { getSemester } from "../services/read";

const Sample = () => {
  const res = useLoaderData() as {data?:any, semesters?:any, id?:string};

  console.log(res);
  
  // return ""
  return (
    <>
      <section>
        <div
        id="sample" 
          className=""
        >
          <div className={` relative bg-[url()] bg-cover bg-slate-300  h-72 border-b-2 `} style={{background:`url(${res?.data.image!})`, backgroundSize:"cover" , backgroundPosition:"center"}}>
              <div className=" p-6 flex flex-col justify-center h-full">
                <p className=" text-[#eee] font-bold">Course</p>
                
                  <h1 className=" text-white text-3xl font-bold ">{res?.data?.name} Programme Info</h1>
                  <div className=" absolute bottom-6 left-6">
                    <p className=" text-white font-bold text-xl font-['Anta']"><span className="line-through">N</span> {res?.data.price || "no price set"}</p>
                  </div>
              </div>
          </div>
          
          {/*  */}
          </div>
            

  
        <div className=" flex flex-col gap-6 mt-4 md:py-12">
          <div className=" *:text-center px-6 flex justify-end max-w-3xl mx-auto  items-center text-center flex-col gap-2">
            
            <p className=" text-2xl sm:text-3xl   leading-10 text-black font-extrabold ">
              What You Will Learn{" "}
            </p>
            <p className=" text-sm sm:text-base ">
            {res?.data.description || ""}
            </p>
          </div>
          <div className=" relative px-4 min-h-32 h-full md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto w-full max-w-[1240px]">
          <div className=" py-12 w-full translate-y-1/2 backdrop-blur-sm bg-gradient-to-b from-transparent to-black/20 shadow-xl z-50 absolute bottom-0 left-0 right-0 grid place-items-center">
                    <button className=" text-white bg-indigo-700 font-bold  rounded-xl h-14 px-8 border-0">Request Full Curriculum</button>
                </div>
            
            {
              res.data.semesters!.map((data:any)=> <Curriculum id={data.id}  />)
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

const Curriculum =({id}:any)=> {

  
  const [data, setData] = useState(null) as any;
  const [loading, setLoading] = useState(null) as any;
  useEffect(()=>{
    setLoading(true)
      getSemester(id)
        .then((data)=> {
         console.log(data);
         
          
          setData(data)
          setLoading(false)
        })
  },[id])
  if(loading) "Loading ........"

  
  return <div className=" py-8">
    <h3 className=" mb-4 font-bold">{data?.data?.name}</h3>
    { data&& data?.curriculum[0] !== null &&
              data?.curriculum?.map((cur: {data?:any, id?:any})=> {
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
              <div className=" relative px-[1em] space-y-4">
                
                <p className=" text-2xl sm:text-3xl  leading-10 text-black font-extrabold ">
                  {cur.data?.title}{" "}
                </p>
                
                <div className=" space-y-2">
                {
                  cur.data?.topics.split("@").map((topic: string)=> {
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
              })}
  </div>
}



export default Sample;
