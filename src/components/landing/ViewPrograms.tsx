import { Link } from "react-router-dom"
// import darkwave from  "../../assets/landing/tiimat/wave-dark.jpg"

export default function ViewPrograms() {
    return (
        <>
        <div className="relative mx-4 md:mx-16 border-[#fcfc54]  rounded-3xl h-[400px] mb-8 ">
                        
                        <img src={"https://cdn.pixabay.com/photo/2022/01/25/12/16/laptop-6966045_1280.jpg"} alt="" width={500} height={200} className=" block  h-[400px] object-cover  w-full absolute rounded-3xl" />
                        
                        <div className="flex rounded-3xl relative z-10 font-medium gap-8 h-full backdrop-blur-s bg-black/40  px-4 flex-col justify-center items-center text-center">
                            <h3 className=" text-whitefont-bold text-3xl ">Tiimat Solutions</h3>
                            <p className=" text-[var(--text-secondary)] max-w-2xl">Delivering high-quality, innovative educational programs that empower individuals with the skills and knowledge to drive meaningful change and impact in a globally connected world.</p>
                            <Link to={"/faculty"} className=" hover:border-white bg-black hover:bg-white hover:text-black border border-[#0c0c54] px-4 py-2 rounded-full block bg-transparent text-[#0c0c54]">View Programs</Link>
                        </div>
               </div>
        </>
    )
}