import { createContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

export const sampleContext = createContext(null!) as any;
function FacultyItem() {
    const loader = useLoaderData() as any;
    const [context, setContext] = useState({name:"Victor"});
    console.log(loader.courses);
    
    
    return <>
        <sampleContext.Provider value={{context, setx:setContext}} >
        <section>
            <div className={`relative p-12`}>
                <div className={` md:h-[240px] h-[420px]   bg-[url(${loader?.data.image})] bg-cover bg-center h-full rounded-xl w-full  `}>
                    <div className=" z-20 w-full h-full rounded-xl px-6 bg-blue-600/20 items-center flex justify-start">
                        <div className=" max-w-xl mx-auto">
                        <h2 className=" text-white font-bold text-center mb-4 text-4xl md:text-5xl"> {loader?.data.name}</h2>
                        <p className=" text-gray-100 font-bold text-center text-xs">{loader?.data.description.slice(0,201)}.....</p>
                        </div>
                    </div>
                    {/* <img src={`${loader?.data.image}`} alt="" /> */}
                </div>
                <div className=" h-12 border-b"></div>
                <div className=" py-6">
                    
                    <h3 className=" text-xl mb-4 text-[var(--back)]">Description</h3>
                    <p>{loader?.data.description}</p>
                </div>
                <div>
                    <h3 className=" text-xl mb-4 text-[var(--back)]">Courses</h3>
                    <div>
                        {loader.courses.map((e:any)=> {
                            return <Link to={`/course/${e.id}`} style={{background:`${e.data.image} cover`}}  className={`inline-block bg-[url(${e.data.image})]  max-w-xl h-24  hover:shadow text-indigo-800 font-bold hover:text-indigo-900 px-12 grid place-items-center rounded border`}>
                                {e.data.name}
                            </Link>
                        })}
                    </div>
                </div>
            </div>
        </section>
        </sampleContext.Provider>
    </>
}




export default FacultyItem;