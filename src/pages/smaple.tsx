

import { Link, useLoaderData } from "react-router-dom";
// import CourseModal from "../components/course/CourseModal";
import { useEffect, useState } from "react";
import {  getAllCurriculum, getAllCurriculumInSemester, getAllSemesterInCourse } from "../services/read";

const Sample = () => {
  const res = useLoaderData() as any;

  getAllCurriculum()
    .then((data)=>{
      console.log(data);
      
    })
  
  // return ""
  return (
    <>
      <section>
        <div
        id="sample" 
          className=" p-6 md:p-12"
        >
          <div className={` rounded-xl relative bg-[url()] bg-cover   h-72 md:h-96 border-b-2 `} style={{background:`url($!})`, backgroundSize:"cover" ,backgroundRepeat:"no-repeat",  backgroundPosition:"top"}}>
            <img src={res.image} alt="" className="w-full h-full  absolute bottom-0 top-0 rounded-xl left-0 right-0 object-cover" />
            <div className=" absolute bottom-0 top-0 rounded-xl left-0 right-0 bg-black/10 backdrop-blur-xs"></div>
              <div className=" p-6 md:px-12 flex z-50 flex-col justify-center h-full ">
              <p className=" text-[#fefefe] z-50 font-bold">Course</p><div></div>
                
                  <h1 className=" text-white text-3xl font-bold z-50 ">{res?.name} Programme Info</h1>
                  <div className=" z-20 mt-10">
                    <p className=" text-indigo-700 font-bold text-2xl"><span className="line-through">N</span> {res.price || "no price set"}</p>
                  </div>
              </div>
          </div>
          
          {/*  */}
          </div>
            

  
        <div className=" flex flex-col gap-6 mt-4 md:py-12 bg-zinc-50">
          <div className=" *:text-center px-6 flex justify-end max-w-3xl mx-auto  items-center text-center flex-col gap-2">
            
            <p className=" text-2xl sm:text-3xl   leading-10 text-black font-extrabold ">
              What You Will Learn{" "}
            </p>
            <p className=" text-sm sm:text-base ">
            {res.description || ""}
            </p>
          </div>
          <div className=" relative px-4 min-h-32 h-full md:px-10  grid-cols-1 md:grid-cols-2 gap-8 mx-auto w-full max-w-[1240px]">
          
            
            <Curriculum id={res.id} />
           
          </div>
          <div className="mx-6  z-50  grid place-items-center">
                    <Link to="mailto:timat@gmail.com" className=" text-white bg-indigo-700 grid place-items-center font-bold  rounded-xl h-14 px-8 border-0">Request Full Curriculum</Link>
                </div>
        </div>
        {/* new */}
        <div className=" px-4 md:px-6">
          <div className=" min-h-[240px] flex flex-col md:px-24 md:flex-row md:gap-6 md:items-center ">
            <div className=" flex-1">
            </div>
            <div className=" bg-black h-full rounded-xl flex gap-4 flex-col items-center justify-center py-6 mb-8 flex-1 gap-6 ">
              <h4 className="text-3xl  leading-10 text-white font-extrabold ">
                Beginner Friendly
              </h4>
              <p className=" max-w-md sm:text-base text-[11px] text-white px-4 text-center">
              Our programs offer beginner-friendly courses that are designed to introduce fundamental concepts in a clear and approachable way.
              </p>
              <Link
                to={"/contact-us"}
                className=" rounded-3xl text-[#f9f9f9] bg-[#0c0c0c] leading-5 inline-block text-sm font-semibold px-5 py-2 hover:text-white"
              >
                {" "}
                Join Us Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <CourseModal /> */}
    </>
    
  );
};

const Curriculum =({id}:any)=> {

  
  const [data, setData] = useState([]) as any;
  const [loading, setLoading] = useState(null) as any;
  useEffect(()=>{
    setLoading(true)
      getAllSemesterInCourse(id)
        .then((data)=> {
         console.log(data);
         
          
          setData(data)
          setLoading(false)
        })
  },[id])
  if(loading) "....."
  return  data.map((curriculum:any)=>{
    return  <div className=" py-8">
    <h3 className=" mb-4 font-bold text-center">{curriculum.name}</h3>
    <h3 className=" text-sm text-center">{curriculum.description}</h3>
    <CurriculumItem params={curriculum.id} />
  </div>
  })
}


function CurriculumItem({params}:any) {
  const [data, setData] = useState([]) as any;
  const [loading, setLoading] = useState(null) as any;
  useEffect(()=>{
    console.log(params);
    setLoading(true)
      getAllCurriculumInSemester(params)
        .then((data)=> {
          setData(data)
          setLoading(false)
        })
  },[params])
    if(loading) "loading ......."
      return data.map((item:any)=>(
        <div className=" space-y-4 mt-4">
    <div className=" relative">
    </div>
    <div className=" relative space-y-4">
      
      <p className=" text-xl sm:text-sm  md:text-base leading-10 text-black font-extrabold ">
        {item?.title}{" "}
      </p>
      
      <div className=" space-y-2">
        {/* SwzfdZbAAgeMnqktjq2u  xdNiW8XPe74RCUvxm3MK */}
      {
        item?.topics.split("@").map((topic: string)=> {
          return (
            <div>
          <div>
              <p className="  text-xs md:text-sm text-black/80 content-start before:bg-red-400 flex items-center gap-2"> <span className="inline-block w-3 h-3 bg-black/70 rounded-full"></span> {topic}</p>
      
          </div>
      </div> 
          )
        })
      }
      </div>
      
    </div>
  </div>
      ))
   
}


export default Sample;
