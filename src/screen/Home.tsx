
import { Button } from "@/components/ui/button"
import { ArrowRight, EyeIcon } from "lucide-react"
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
            <input type="checkbox" id="modal-dm" className=" hidden" />
            <div id="dm" className=" transform invisible opacity-0  transition-all duration-300 delay-100 fixed top-0 right-0 left-0 bottom-0 bg-black/20 z-50">
        	        <div className=" h-full w-full flex justify-center items-center">
                            <div className=" max-w-[440px] w-full h-[520px] rounded-2xl bg-white px-6 py-8 relative">
                                <label htmlFor="modal-dm" className=" absolute right-6 top-6">
                                    <EyeIcon />
                                </label>
                                <h1 className=" font-bold text-xl mb-6">Send us a DM</h1>
                                <div>
                                    <form className=" space-y-4" >
                                        <div>
                                            <label htmlFor="username" className=" text-[12px] font-medium mb-1">Your Name</label>
                                            <input type="text" id="username" className=" block w-full focus:bg-white px-6 h-[40px] rounded-md border border-slate-100 bg-slate-200" />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className=" text-[12px] font-medium mb-1">Email</label>
                                            <input type="email" id="email" className=" block w-full focus:bg-white px-6 h-[40px] rounded-md border border-slate-100 bg-slate-200" />
                                        </div>
                                        <div>
                                            <label htmlFor="address" className=" text-[12px] font-medium mb-1">Your Location</label>
                                            <input type="text" id="address" className=" block w-full focus:bg-white px-6 h-[40px] rounded-md border border-slate-100 bg-slate-200" />
                                        </div>
                                        <div>
                                            <label htmlFor="course" className=" text-[12px] font-medium mb-1">Interested Course of Study</label>
                                            <input type="text" id="course" className=" block w-full focus:bg-white px-6 h-[40px] rounded-md border border-slate-100 bg-slate-200" />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className=" text-[12px] font-medium mb-1">Your Phone Number</label>
                                            <input type="text" id="phone" className=" block w-full focus:bg-white px-6 h-[40px] rounded-md border border-slate-100 bg-slate-200" />
                                        </div>
                                        <div>
                                            <input type="submit" id="submit" className=" block w-full  px-6 h-[40px] rounded-md border text-slate-100 bg-indigo-600" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                    </div>
            </div>
            <section className=' relative -inset-1  bg-[#222]'>
                <div className="  absolute top-0 right-0  left-0 h-[80vh]" style={{ background: "rgba(30, 31, 33, .8)" }} >
                    <motion.div 
                        initial={{ opacity: 0 }}
                       
                        transition={{ duration: 0.8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="h-full w-full relative"
                    >
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            
                            transition={{ duration: 0.8, delay: 0.3 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="absolute top-[30vh] left-6 md:left-24 w-[60%] min-w-[300px] space-y-4"
                        >
                            <motion.h1 
                                initial={{ opacity: 0, x: -50 }}
                               
                                transition={{ duration: 0.8, delay: 0.5 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-white text-2xl md:text-8xl font-medium tracking-tight leading-snug"
                            >
                                Tiimat Solutions
                            </motion.h1>
                            <motion.p 
                                initial={{ opacity: 0, x: -50 }}
                               
                                transition={{ duration: 0.8, delay: 0.7 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="block mb-4 text-sm md:text-lg text-zinc-300"
                            >
                                Delivering high-quality, innovative educational programs that
                                empower individuals with the skills and knowledge to drive
                                meaningful change and impact in a globally connected world.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                            >
                                <Button 
                                    onClick={()=>navigate("/about", {viewTransition:true})} 
                                    variant={"secondary"} 
                                    className="py-6 text-lg bg-indigo-600 text-white rounded-2xl font-semibold px-12"
                                >
                                    Learn More
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
                <div className=" z-[20]">
                    <video autoPlay={true} loop={true} playsInline={true} className="myVideo  h-[80vh] object-cover w-screen"
                     poster="https://cdn.pixabay.com/photo/2020/04/25/12/14/circle-5090539_960_720.jpg" ><source data-v-423ee4fe="" src="https://cdn.pixabay.com/video/2024/01/24/198018-906226540_large.mp4" type="video/mp4" /></video>
                </div>
            </section>
            <section className=' bg-[#F6F8F9] min-h-screen py-12 md:py-24'>
                <Trust />
            </section>
            <section className="min-h-screen py-12 md:py-24 bg-gradient-to-br to-indigo-400 via-white from-transparent">
                <div className=" h-full  max-w-[1200px] w-full px-6 md:px-0 mx-auto">
                    <div id="experience" className=" space-y-8">
                        <h3 className=" text-[#333] font-medium">Our Departments span across fields …</h3>
                        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                           
                            {[
                                 { title: "Human Resource Management", icon: Management, id:"7QnTguPY2qQNKp0E1JsN" },
                                { title: "Project Management", icon: ProjectManagement, id:"LZkCidJrTrBnux1Nd7e9" },
                                { title: "Cyber Security", icon: CyberSecurity, id:"Z3TOvdBoHLuSEnFlUkQt" },
                                { title: "Social Media Management", icon: CyberSecurity, id:"ioSwPrXh8KybdaTDsaWk" }
                            ].map((item, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    onClick={()=>navigate(`/departments/${item.id}`, {viewTransition:true})}
                                    className="bg-[#f6f8f9] rounded-3xl px-6 py-8 space-y-8 cursor-pointer md:space-y-10 hover:bg-[#b3b1f5] flex flex-col justify-between"
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
                            
                            <div onClick={()=>navigate("/departments")} className=" bg-[#f6f8f9] rounded-3xl px-6 py-8 h-1/2   flex group hover:scale-105 justify-between">
                                <p className=" text-[#222] font-semibold  md:text-lg">
                                    More .......
                                </p>
                                <ArrowRight className=' group-hover:translate-x-2 transition -translate-x-5 duration-500' />
                                
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 pt-24 gap-16">
                        <motion.div 
                                    
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1}}
                                    className="space-y-6"
                                    
                                >
                                    <motion.h3 
                                        whileHover={{ x: 10 }}
                                        className="md:text-2xl text-xl font-semibold text-[#333]"
                                    >
                                        Join a vibrant community of learners
                                    </motion.h3>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <label 
                                            htmlFor="modal-dm"
                                            className={`group py-4 text-lg rounded-full border h-[45px] font-semibold px-12 `}
                                        >
                                           Join Now
                                           
                                        </label>
                                    </motion.div>
                                </motion.div>
                            {[
                                
                                {
                                    title: "High-quality education ensuring great value",
                                    buttonText: "Explore Courses",
                                    onClick: () => navigate("/departments", {viewTransition: true}),
                                    buttonClass: "border-black border-2"
                                },
                                {
                                    title: "...Learn from professionals and industrial experts",
                                    buttonText: "Tiimat Solution",
                                    onClick: () => navigate("/about", {viewTransition: true}),
                                    buttonClass: "border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 border-2"
                                }
                            ].map((item, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.1, delay: index * 0.2 }}
                                    className="space-y-6"
                                    onClick={item.onClick}
                                >
                                    <motion.h3 
                                        whileHover={{ x: 10 }}
                                        className="md:text-2xl text-xl font-semibold text-[#333]"
                                    >
                                        {item.title}
                                    </motion.h3>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Button 
                                            variant="outline" 
                                            className={`group py-6 text-lg rounded-full font-semibold px-12 ${item.buttonClass}`}
                                        >
                                            {item.buttonText}
                                            {index === 2 && <ArrowRight className='group-hover:translate-x-4 transition duration-500' />}
                                        </Button>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                        <div id="vision" className="md:pt-32 pt-16 grid md:grid-cols-2 gap-8">
                            <div className=" flex gap-6 items-center">
                                <motion.div 
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="flex gap-6"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: 0.1, duration: 0.5 }}
                                    >
                                        <img src={Quote} width={70} alt="" />
                                    </motion.div>
                                    <div className="max-w-md space-y-8">
                                        <motion.h3 
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2, duration: 0.5 }}
                                            className="text-black font-semibold text-5xl tracking-wide"
                                        >
                                            Our Vision
                                        </motion.h3>
                                        <motion.h3 
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2, duration: 0.5 }}
                                            className="text-slate-800 font-semibold text-2xl tracking-wide"
                                        >
                                            Innovative education for global impact.
                                        </motion.h3>
                                        <motion.p 
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            whileHover={{ x: 10 }}
                                            transition={{ delay: 0.2, duration: 0.5 }}
                                            className="text-lg flex gap-4 font-medium text-start text-blue-500"
                                        >
                                            GET STARTED HERE
                                            <ArrowRight className='group-hover:translate-x-4 transition duration-500' />
                                        </motion.p>
                                    </div>
                                </motion.div>
                            </div>
                            <div>
                                
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.1 }}
                            >
                                <img src="/src/assets/slider/cost.jpg" className=" rounded-3xl object-cover " alt="" />
                                </motion.div>
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