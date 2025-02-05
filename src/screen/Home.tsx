
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Trust from "./ui/Trust"
import Management from "../assets/ic-fintech.svg"
import ProjectManagement from "../assets/ic-real-estate.svg"
import CyberSecurity from "../assets/ic-security.svg"
import Quote from "../assets/ic-quote.svg"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"


function HomeScreen() {
    const navigate = useNavigate();
    return (
        <div className=' relative '>
           
            <section className=' relative bg-[#222]'>
                <div className="  absolute top-0 right-0 left-0 h-[80vh]" style={{ background: "rgba(30, 31, 33, .8)" }} >
                    <div className="h-full w-full relative">
                        <div className=" absolute top-[40vh] left-6 md:left-24 w-[40%] min-w-[300px] space-y-4">
                            <h1 className=" text-white text-2xl md:text-4xl font-medium tracking-tight leading-snug ">

                                Tiimat Solutions

                            </h1>
                            <p className=" block mb-4 text-sm md:text-lg text-zinc-300">
                                Delivering high-quality, innovative educational programs that
                                empower individuals with the skills and knowledge to drive
                                meaningful change and impact in a globally connected world.
                            </p>
                           <Button onClick={()=>navigate("/about", {viewTransition:true})} variant={"secondary"} className=" py-6 text-lg rounded-full font-semibold px-12" >Learn More</Button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <video autoPlay={true} loop={true} playsInline={true} className="myVideo  h-[80vh] object-cover w-screen"
                     poster="https://cdn.pixabay.com/photo/2020/04/25/12/14/circle-5090539_960_720.jpg" ><source data-v-423ee4fe="" src="https://cdn.pixabay.com/video/2024/01/24/198018-906226540_large.mp4" type="video/mp4" /></video>
                </div>
            </section>
            <section className=' bg-[#F6F8F9] min-h-screen py-12 md:py-24'>
                <Trust />
            </section>
            <section className="min-h-screen py-12 md:py-24">
                <div className=" h-full  max-w-[1200px] w-full px-6 md:px-0 mx-auto">
                    <div id="experience" className=" space-y-8">
                        <h3 className=" text-[#333] font-medium">Our Departments span across fields …</h3>
                        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                           
                            {[
                                 { title: "Human Resource Management", icon: Management },
                                { title: "Project Management", icon: ProjectManagement },
                                { title: "Cyber Security", icon: CyberSecurity },
                                { title: "Social Media Management", icon: CyberSecurity }
                            ].map((item, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-[#f6f8f9] rounded-3xl px-6 py-8 space-y-8 md:space-y-10 flex flex-col justify-between"
                                >
                                    <p className="text-[#222] font-semibold md:text-xl">{item.title}</p>
                                    <motion.div
                                        whileHover={{ rotate: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <img src={item.icon} alt={item.title} />
                                    </motion.div>
                                </motion.div>
                            ))}
                            {
                                [1, 2, 3, 4, 5].map((d) => <div key={d} className=" bg-[#f6f8f9] rounded-3xl px-6 py-8 space-y-8 md:space-y-10 flex flex-col justify-between">
                                    <p className=" text-[#222] font-semibold md:text-xl">Social Media Management</p>
                                    <div>
                                        <img src={CyberSecurity} alt="" />
                                    </div>
                                </div>)
                            }
                            <div onClick={()=>navigate("/departments")} className=" bg-[#f6f8f9] rounded-3xl px-6 py-8   flex group hover:scale-105 justify-between">
                                <p className=" text-[#222] font-semibold  md:text-xl">
                                    More .......
                                </p>
                                <ArrowRight className=' group-hover:translate-x-2 transition -translate-x-5 duration-500' />
                                
                            </div>
                        </div>
                        <div className=" grid md:grid-cols-2 lg:grid-cols-3 pt-24 gap-16">
                            <div className=" space-y-6">
                                <h3 className=" md:text-2xl text-xl font-semibold text-[#333]">Join a vibrant community of learners </h3>
                                <Button onClick={()=>navigate("/departments")} variant={"outline"} className=" py-6 text-lg rounded-full font-semibold px-12 border-black border-2" >Join Now</Button>
                            </div>
                            <div onClick={()=>navigate("/departments",{viewTransition:true})} className=" space-y-6">
                                <h3 className=" md:text-2xl text-xl font-semibold text-[#333]">High-quality education ensuring great value </h3>
                                <Button variant={"outline"} className=" py-6 text-lg rounded-full font-semibold px-12 border-black border-2" >Explore Courses</Button>
                            </div>
                            <div onClick={()=>navigate("/about", {viewTransition:true})} className=" space-y-6">
                                <h3 className=" md:text-2xl text-xl font-semibold text-[#333]">...Learn from professionals and industrial experts</h3>
                                <Button variant={"outline"} className="group py-6 text-lg rounded-full font-semibold px-12 border-rose-500 text-rose-500 hover:text-white hover:bg-rose-500 hover:border-rose-500 border-2 " >Tiimat Solution
                                    <ArrowRight className=' group-hover:translate-x-4 transition duration-500' />
                                </Button>
                            </div>
                        </div>
                        <div id="vision" className="md:pt-32 pt-16 grid md:grid-cols-2 gap-8">
                            <div className=" flex gap-6 items-center">
                                <div className="flex gap-6">
                                    <div>
                                        <img src={Quote} width={70} alt="" />
                                    </div>
                                    <div className=" max-w-md space-y-8">
                                        <h3 className="text-black font-semibold text-3xl tracking-wide">Our vision is to be your technology solutions provider of choice.</h3>
                                        <h3 className="text-black font-semibold text-3xl tracking-wide">Will you take the leap?</h3>
                                        <p className="text-lg flex gap-4 font-medium text-start text-rose-500" >
                                            GET STARTED HERE
                                            <ArrowRight className=' group-hover:translate-x-4 transition duration-500' />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src="https://cdn.pixabay.com/photo/2021/02/1/12/800/student-6027004_1280.jpg" className=" rounded-3xl object-cover " alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className=' bg-[#F6F8F9] min-h-[600px] py-24'>
                <div className=" h-full  max-w-[1200px] w-full px-6 md:px-0  mx-auto">
                    <div className="w-full h-full grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl md:text-2xl font-medium text-[#222]">Insights from Tiimat Solutions</h3>
                        </div>
                    </div>
                </div>
            </section> */}
            
            <section></section>
        </div>
    )
}

export default HomeScreen