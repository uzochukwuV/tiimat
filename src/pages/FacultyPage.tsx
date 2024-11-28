import { createContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getCoursesInFaculty } from "../services/read";

export const sampleContext = createContext(null!) as any;
function FacultyItem() {
    const loader = useLoaderData() as any;
    console.log(loader);
    
    
    return <>
       
        <section>
            <div className={`relative p-6 md:p-12`}>
                <div
                    
                className={` md:h-[240px] h-[160px] grid place-items-center relative   rounded-xl w-full  `}>
                    <img src={loader?.image} alt="" className="w-full h-full  absolute bottom-0 top-0 rounded-xl left-0 right-0 object-cover" />
                    <div className=" z-20 w-full h-full rounded-xl px-6 bg-blue-600/20 items-center flex justify-start">
                        <div className=" max-w-xl mx-auto">
                        <h2 className=" text-white font-bold text-center mb-4 text-4xl md:text-5xl z-50"> {loader?.name}</h2>
                       
                        </div>
                    </div>
                  
                </div>
                <div className=" h-12 border-b"></div>
                <div className=" py-6">
                    
                    <h3 className=" text-xl mb-4 text-[var(--back)]">Description</h3>
                    <p>{loader?.description}</p>
                </div>
                <div className=" min-h-[500px]">
                    <h3 className=" text-xl mb-4 text-[var(--back)]">Courses</h3>
                    <div>
                       <CorseItemComponent id={loader.id}  />
                    </div>
                </div>
            </div>
        </section>
    </>
}




const CorseItemComponent = ({id}:{id:string})=>{
    const [courses, setCourses] = useState([])
    const [loading, setloading] = useState(false)
    useEffect(()=>{
        setloading(true)
        getCoursesInFaculty(id)
            .then((data:any)=>{
                console.log(data);
                
                setCourses(data)
                setloading(false)
            })
    }, [id])
    if(loading) return <>
        {loading && courses.length <1 &&  [1,2,3,4,5,6,7].map(()=><div

className="h-10 relative flex-1 hover:scale-[1.03] flex items-center gap-6 bg-slate-50 w-full rounded-xl min-w-md ">
   <div>
   <div  className="mask bg-slate-100 rounded-xl h-10 "></div>
   </div>
   <div>
       <h2 className=" h-2 px-8 bg-slate-100">{""}</h2>
   </div>
</div>) }
    </>
    return (
    <div className=" relative space-y-6 sm:space-y-0 sm:grid grid-cols-2 lg:grid-cols-3  gap-6">
        
        {
            courses.map((data:any)=>{
                return (
                    <Link
                    to={`/course/${data.id}`}
                     className=" relative hover:scale-[1.03] w-full flex items-center gap-6 bg-slate-50 w-full h-20 sm:h-24 md:h-32 rounded-xl min-w-[320px] ">
                        <div className="">
                        <img src={data.image} alt=""  className="mask relative w-32 h-20 sm:h-24 md:h-32 rounded-xl object-cover "/>
                        </div>
                        <div>
                            <h2>{data.name}</h2>
                        </div>
                    </Link>
                )
            })
        }
    </div>
    )
}




export default FacultyItem;