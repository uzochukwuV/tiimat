
import { useEffect, useState } from "react";
import { getFaculties } from "../services/read";
import { Link } from "react-router-dom";

const About = () => {

  const [data, setData] = useState(null) as any;
  const [loading, setLoading] = useState(false)
  
  
  useEffect(()=>{
    setLoading(true)
    getFaculties()
      .then((data)=>{
        console.log(data);
        setData(data)
        setLoading(false)
      })
      
  },[])
  return (
    <> 
      <div className="h-full flex flex-col bg-black rounded-xl  mt-12 px-6 sm:px-10 mx-4 md:mx-20 relative">
      <div className=" position-full absolute   rounded-xl  left-0 h-full w-full  opacity-50" style={{background:"url('https://cdn.pixabay.com/photo/2021/02/18/12/00/student-6027004_1280.jpg')", backgroundSize:"cover", backgroundPosition:"0 -50vw", backgroundRepeat:"no-repeat"}}>
        {/* <img src={BG} alt="hjh" className=" h-full w-full object-cover" /> */}
        </div>
        <div className='h-full text-white relative  rounded-xl flex-1 py-16 gap-8  flex flex-col md:flex-row justify-around '>
          <div className="fromRight opacity-100 translate-x-0">
            <div className="*:text-start  max-w-2xl space-y-2  ">
              <h2 className=" text-3xl md:text-4xl ">
                Our Vision <br /> 
              </h2>
              <p className=' text-xs md:text-sm'>
                Discover a new era of efficiency and collaboration with our
                cutting edge solutions. Tiimat brings Innovation to every aspect
                optimizing your business journey
              </p>
              <p className=" font-semibold text-xs pt-6 text-indigo-200">
                Management . Business
              </p>
            </div>
          </div>
          <div className=" fromLeft  flex">
            <div className="*  max-w-2xl space-y-2 me-0">
              <h2
                className=" text-3xl md:text-4xl "
                
              >
                Our <span className=" ">Goal</span>
              </h2>
              <p className="text-xs md:text-sm">
                Discover a new era of efficiency and collaboration with our
                cutting edge solutions. Tiimat brings Innovation to every aspect
                optimizing your business journey
              </p>
              <p className=" font-semibold text-xs pt-6 text-indigo-200">
                Software Development . Computer Technology
              </p>
            </div>
          </div>
          <div className="fromBottom  ">
            <div className="*:text-start  max-w-2xl space-y-2">
              <h2 className=" text-3xl text-white md:text-4xl ">
               Tiimat 
              </h2>
              <p className="text-xs md:text-sm ">
                Discover a new era of efficiency and collaboration with our
                cutting edge solutions. Tiimat brings Innovation to every aspect
                optimizing your business journey
              </p>
              <p className=" font-semibold text-xs pt-6 text-indigo-200">
                Videography . Multimedia Technology
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-16 px-6 sm:px-10 md:px-16 xl:px-24">
        <div className="h-full">
          <div className="h-full ">
                {/* <h2 className=" bg-red-300 font-semibold text-center text-3xl font-edu">Business, Tech and Multimedia <br></br> Solutions</h2> */}
                <div className="w-full s">
                  {/* <h3 className=" font-medium text-3xl text-center pb-6">Faculties</h3> */}
                  <div className=" space-y-8 md:space-y-0 gap-6 pace-y-8 md:grid md:grid-cols-3">
                  
                  {
                    loading && <div className=" space-y-6     rounded-xl  bg-[var(--surface)]">
                    <div className=" h-[200px]  bg-slate-50">
                        
                    </div>
                    <div className=" fromLeft space-y-2 px-4 pb-4">
                      <h3 className=" font-medium text-xl  leading-4  text-black"> </h3>
                      <p className=" text-[#111] pb-6 text-sm"></p>
                      <a href="" className=" text-blue-600 "></a>
                    </div>
                  </div>
                  }
                  { !loading &&
                    data?.map((e:any)=> {
                      console.log(e);
                      
                      return <div className=" space-y-6 rounded-xl  bg-[var(--surface)]">
                      <div className="h-[200px]  bg-slate-50">
                          <img src={e.data.image} alt="" className=" rounded-t-xl h-full  w-full object-cover" />
                      </div>
                      <div className="  space-y-2 px-4 pb-4">
                        <h3 className=" font-medium text-xl  leading-4 text-black">{e.data.name}</h3>
                        <p className=" text-[#111] pb-6 text-sm">{e.data.description.slice(0,201)}......</p>
                        <Link to={`/faculty/${e.id}`} className=" text-blue-600 ">View more ...</Link>
                      </div>
                    </div>
                    })
                  }
                  </div>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
