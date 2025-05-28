
import { Button } from "@/components/ui/button"
import { ArrowRight, EyeIcon, X } from "lucide-react"
import Trust from "./ui/Trust"
import Management from "../assets/ic-fintech.svg"
import ProjectManagement from "../assets/ic-real-estate.svg"
import CyberSecurity from "../assets/ic-security.svg"
import Quote from "../assets/ic-quote.svg"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import FacultyCard from "@/components/FacultyCard"
import { sendMessage } from "@/services/read"
import { toast } from "sonner"


function HomeScreen() {
    const navigate = useNavigate();
   

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        
        const data = {
            title: "New Registration Request Message ", 
            username: formData.get('username') as string,
            email: formData.get('email') as string,
            address: formData.get('address') as string,
            course: formData.get('course') as string,
            phone: formData.get('phone') as string,
        };

        // Handle the form data here
        console.log(data);
        sendMessage(data)
            .then(() => {
                console.log("Message sent successfully!");
                toast.success("Message sent successfully!")
            }	)
            .catch((error) => { 
                console.error("Error sending message:", error);
                toast.error("Failed to send message. Please try again later.");
            });
        
        form.reset();
    };

    return (
        <div className=' relative '>
            <input type="checkbox" id="modal-dm" className=" hidden" />
            <div id="dm" className=" transform invisible opacity-0  transition-all duration-300 delay-100 fixed top-0 right-0 left-0 bottom-0 bg-black/20 z-50">
                <div className=" h-full w-full flex justify-center items-center">
                    <div className=" max-w-[440px] w-full h-[520px] rounded-2xl bg-white px-6 py-8 relative">
                        <label htmlFor="modal-dm" className=" absolute right-6 top-6">
                            <X />
                        </label>
                        <h1 className=" font-bold text-xl mb-6">Send us a DM</h1>
                        <div>
                            <form onSubmit={handleSubmit} className=" space-y-4" >
                                <div>
                                    <label htmlFor="username" className=" text-[12px] font-medium mb-1">Your Name</label>
                                    <input type="text" name="username" className=" block w-full focus:bg-white px-6 h-[40px] rounded-md border border-slate-100 bg-slate-200" />
                                </div>
                                <div>
                                    <label htmlFor="email" className=" text-[12px] font-medium mb-1">Email</label>
                                    <input type="email" name="email" className=" block w-full focus:bg-white px-6 h-[40px] rounded-md border border-slate-100 bg-slate-200" />
                                </div>
                                <div>
                                    <label htmlFor="address" className=" text-[12px] font-medium mb-1">Your Location</label>
                                    <input type="text" name="address" className=" block w-full focus:bg-white px-6 h-[40px] rounded-md border border-slate-100 bg-slate-200" />
                                </div>
                                <div>
                                    <label htmlFor="course" className=" text-[12px] font-medium mb-1">Interested Course of Study</label>
                                    <input type="text" name="course" className=" block w-full focus:bg-white px-6 h-[40px] rounded-md border border-slate-100 bg-slate-200" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className=" text-[12px] font-medium mb-1">Your Phone Number</label>
                                    <input type="text" name="phone" className=" block w-full focus:bg-white px-6 h-[40px] rounded-md border border-slate-100 bg-slate-200" />
                                </div>
                                <div>
                                    <input type="submit" id="submit" className=" block w-full  px-6 h-[40px] rounded-md border text-slate-100 bg-indigo-600" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <section className='relative min-h-[90vh] bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d]'>
                <div className="absolute inset-0 bg-black/60 z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1 }}
                        className="h-full w-full relative container mx-auto px-4 lg:px-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="absolute top-1/4  -translate-y-1/2 max-w-4xl space-y-6 md:space-y-8"
                        >
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-indigo-400 font-medium text-lg md:text-xl"
                            >
                                Welcome to the Future of Education
                            </motion.span>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[75px] font-bold tracking-tight leading-[1.1]"
                            >
                                Transform Your Future with <span className="text-indigo-500">Tiimat Solutions</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="text-zinc-300 text-lg md:text-xl max-w-2xl leading-relaxed"
                            >
                                Unlock your potential with industry-leading courses, expert mentorship, and cutting-edge learning experiences. Join thousands of successful graduates making an impact globally.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="flex flex-col sm:flex-row gap-4 pt-4"
                            >
                                <Button
                                    onClick={() => navigate("/departments")}
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full py-6 px-8 text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20"
                                >
                                    Explore Programs
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button
                                    onClick={() => navigate("/about")}
                                    variant="outline"
                                    className="border-2 border-white/20 text-white rounded-full py-6 px-8 text-lg font-semibold hover:bg-white/10 transition-all duration-300"
                                >
                                    Learn More
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="relative z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className=" h-screen w-full object-cover"
                        poster="https://cdn.pixabay.com/photo/2020/04/25/12/14/circle-5090539_960_720.jpg"
                    >
                        <source
                            src="https://cdn.pixabay.com/video/2023/07/27/173485-849645876_large.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
            </section>
            <section className=' bg-white min-h-screen py-12 md:py-24'>
                <Trust />
            </section>
            <section className="min-h-screen relative py-12 md:py-24 bg-blue-800/5 ">
               
                <div className=" h-full  max-w-[1200px] w-full px-6 md:px-0 mx-auto">
                    <div id="experience" className=" space-y-8">
                        <h3 className=" text-[#333] font-medium">Our Departments span across fields …</h3>
                        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">

                            {[
                                { title: "Human Resource Management", icon: Management, id: "7QnTguPY2qQNKp0E1JsN" },
                                { title: "Project Management", icon: ProjectManagement, id: "LZkCidJrTrBnux1Nd7e9" },
                                { title: "Cyber Security", icon: CyberSecurity, id: "Z3TOvdBoHLuSEnFlUkQt" },
                                { title: "Social Media Management", icon: CyberSecurity, id: "ioSwPrXh8KybdaTDsaWk" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    onClick={() => navigate(`/departments/${item.id}`, { viewTransition: true })}
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

                            <div onClick={() => navigate("/departments")} className=" bg-[#f6f8f9] rounded-3xl px-6 py-8 h-1/2   flex group hover:scale-105 justify-between">
                                <p className=" text-[#222] font-semibold  md:text-lg">
                                    More .......
                                </p>
                                <ArrowRight className=' group-hover:translate-x-2 transition -translate-x-5 duration-500' />

                            </div>
                        </div>

                        <FacultyCard />
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 pt-24 gap-16">
                            <motion.div

                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
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
                                    onClick: () => navigate("/departments", { viewTransition: true }),
                                    buttonClass: "border-black border-2"
                                },
                                {
                                    title: "...Learn from professionals and industrial experts",
                                    buttonText: "Tiimat Solution",
                                    onClick: () => navigate("/about", { viewTransition: true }),
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
        </div>


    )
}

export default HomeScreen


