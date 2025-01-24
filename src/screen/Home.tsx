import Navigation from "./ui/Header"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Trust from "./ui/Trust"
import Management from "../assets/ic-fintech.svg"
import ProjectManagement from "../assets/ic-real-estate.svg"
import CyberSecurity from "../assets/ic-security.svg"
import Quote from "../assets/ic-quote.svg"
import Faq from "./ui/Faq"


function HomeScreen() {
    return (
        <div className=' relative '>
            <Navigation />
            <section className=' relative bg-white '>
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
                            <Button variant={"secondary"} className=" py-6 flex group" >
                                Get started
                                <ArrowRight className=' group-hover:translate-x-4 transition  duration-500' />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <video autoPlay={true} loop={true} playsInline={true} className="myVideo h-[80vh] object-cover w-screen" poster="https://chigisoft.com/_nuxt/bg-bg.6f9096ee.svg" ><source data-v-423ee4fe="" src="https://chigisoft.com/_nuxt/Chigisoft_2.28e5818c.mp4" type="video/mp4" /></video>
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
                            <div className=" bg-[#f6f8f9] rounded-3xl px-6 py-8 space-y-8 md:space-y-10 flex flex-col justify-between">
                                <p className=" text-[#222] font-semibold  md:text-xl">Human Resource Management</p>
                                <div>
                                    <img src={Management} alt="" />
                                </div>
                            </div>
                            <div className=" bg-[#f6f8f9] rounded-3xl px-6 py-8 space-y-8 md:space-y-10 flex flex-col justify-between">
                                <p className=" text-[#222] font-semibold  md:text-xl">Project Management</p>
                                <div>
                                    <img src={ProjectManagement} alt="" />
                                </div>
                            </div>
                            <div className=" bg-[#f6f8f9] rounded-3xl px-6 py-8 space-y-8 md:space-y-10 flex flex-col justify-between">
                                <p className=" text-[#222] font-semibold  md:text-xl">Cyber Security</p>
                                <div>
                                    <img src={CyberSecurity} alt="" />
                                </div>
                            </div>
                            <div className=" bg-[#f6f8f9] rounded-3xl px-6 py-8 space-y-8 md:space-y-10 flex flex-col justify-between">
                                <p className=" text-[#222] font-semibold  md:text-xl">Social Media Management</p>
                                <div>
                                    <img src="" alt="" />
                                </div>
                            </div>
                            {
                                [1, 2, 3, 4, 5, 6].map((d) => <div key={d} className=" bg-[#f6f8f9] rounded-3xl px-6 py-8 space-y-8 md:space-y-10 flex flex-col justify-between">
                                    <p className=" text-[#222] font-semibold md:text-xl">Social Media Management</p>
                                    <div>
                                        <img src={CyberSecurity} alt="" />
                                    </div>
                                </div>)
                            }
                        </div>
                        <div className=" grid md:grid-cols-2 lg:grid-cols-3 pt-24 gap-16">
                            <div className=" space-y-6">
                                <h3 className=" md:text-2xl text-xl font-semibold text-[#333]">Join a vibrant community of learners </h3>
                                <Button variant={"outline"} className=" py-6 text-lg rounded-full font-semibold px-12 border-black border-2" >Join Now</Button>
                            </div>
                            <div className=" space-y-6">
                                <h3 className=" md:text-2xl text-xl font-semibold text-[#333]">High-quality education ensuring great value </h3>
                                <Button variant={"outline"} className=" py-6 text-lg rounded-full font-semibold px-12 border-black border-2" >Explore Courses</Button>
                            </div>
                            <div className=" space-y-6">
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
            <section className=' bg-[#F6F8F9] min-h-[600px] py-24'>
                <div className=" h-full  max-w-[1200px] w-full px-6 md:px-0  mx-auto">
                    <div className="w-full h-full grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl md:text-2xl font-medium text-[#222]">Insights from Tiimat Solutions</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" min-h-[600px] py-32">
                <div className=" h-full px-6 md:px-0  max-w-[900px] w-full  mx-auto">
                    <div className="w-full h-full grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="md:text-3xl text-xl font-semibold mb-4 text-black">Join Tiimat</h3>
                                <Faq />
                            </div>
                            <div className=" h-full">
                                <img src="https://cdn.pixabay.com/photo/2021/02/1/12/800/student-6027004_1280.jpg" className=" rounded-3xl object-cover " alt="" />
                            </div>
                    </div>
                </div>
            </section>
            <section></section>
        </div>
    )
}

export default HomeScreen