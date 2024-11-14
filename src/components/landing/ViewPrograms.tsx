import { Link } from "react-router-dom"
import darkwave from  "../../assets/landing/tiimat/wave-dark.jpg"

export default function ViewPrograms() {
    return (
        <>
        <div className="relative rounded-2xl h-[400px] my-6 ">
                        
                        <img src={darkwave} alt="" width={500} height={200} className=" block h-[400px] object-cover absolute rounded-3xl" />
                        
                        <div className="flex relative z-10 font-medium gap-8 h-full  px-4 flex-col justify-center items-center text-center">
                            <h3 className=" text-white font-bold text-3xl">Tiimat Solutions</h3>
                            <p className=" text-[#cececc]">Delivering high-quality, innovative educational programs that empower individuals with the skills and knowledge to drive meaningful change and impact in a globally connected world.</p>
                            <Link to={"/faculty"} className=" hover:border-white hover:bg-white hover:text-black border border-white px-4 py-2 rounded-full block bg-transparent text-white">View Programs</Link>
                        </div>
               </div>
        </>
    )
}