

import { useLoaderData } from "react-router-dom";
import CourseModal from "../components/course/CourseModal";
import { useEffect, useState } from "react";
import { getAllCurriculum, getAllCurriculumInSemester, getAllSemesterInCourse } from "../services/read";

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
          <div className={` rounded-xl relative bg-[url()] bg-cover bg-slate-300  h-72 border-b-2 `} style={{background:`url(${res.image!})`, backgroundSize:"cover" , backgroundPosition:"center"}}>
              <div className=" p-6 flex flex-col justify-center h-full">
                <p className=" text-[#eee] font-bold">Course</p>
                
                  <h1 className=" text-white text-3xl font-bold ">{res?.name} Programme Info</h1>
                  <div className=" absolute bottom-6 left-6">
                    <p className=" text-white font-bold text-xl font-['Anta']"><span className="line-through">N</span> {res.price || "no price set"}</p>
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
            {res.description || ""}
            </p>
          </div>
          <div className=" relative px-4 min-h-32 h-full md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto w-full max-w-[1240px]">
          {/* <div className="mx-6 py-12 w-full translate-y-1/2 backdrop-blur-sm bg-gradient-to-b from-transparent to-black/20  z-50 absolute bottom-0 left-0 right-0 grid place-items-center">
                    <Link to="mailto:timat@gmail.com" className=" text-white bg-indigo-700 grid place-items-center font-bold  rounded-xl h-14 px-8 border-0">Request Full Curriculum</Link>
                </div> */}
            
            <Curriculum id={res.id} />
          </div>
        </div>
        {/* new */}
        <div className=" px-4 md:px-6">
          <div className=" min-h-[400px] flex flex-col md:px-24 md:flex-row md:gap-6 md:items-center ">
            <div className=" flex-1">
            </div>
            <div className=" bg-black rounded-xl flex gap-4 flex-col items-center justify-center py-6 mb-8 flex-1 gap-6 ">
              <h4 className="text-3xl  leading-10 text-white font-extrabold ">
                Beginner Friendly
              </h4>
              <p className=" max-w-md sm:text-base text-[11px] text-white px-4 text-center">
              Our programs offer beginner-friendly courses that are designed to introduce fundamental concepts in a clear and approachable way.
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
    <h3 className=" mb-4 font-bold">{curriculum.name}</h3>
    <h3 className=" text-sm">{curriculum.description}</h3>
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
      getAllCurriculumInSemester("ucykILSWtnmVQuA7MjHy")
        .then((data)=> {
         console.log(data);
         
          
          setData(data)
          setLoading(false)
        })
  },[params])
    if(loading) "loading ......."
      return data.map((item:any)=>(
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
        {item?.title}{" "}
      </p>
      
      <div className=" space-y-2">
      {
        item?.topics.split("@").map((topic: string)=> {
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
      ))
   
}


export default Sample;
