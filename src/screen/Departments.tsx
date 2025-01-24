import { cn } from "@/lib/utils"
import NO1 from "../assets/no-1.svg"
import NO2 from "../assets/no-2.svg"
import NO3 from "../assets/no-3.svg"
import NO4 from "../assets/no-4.svg"
import Management from "../assets/management.svg"
import Computer from "../assets/computer.svg"
import Unknow from "../assets/unknown.svg"



type Plan = {
    id: number;
    title: string;
    subtitle1: string;
    subtitle2: string;
    image: string
}

const PlanList: Plan[] = [
    {
        id: 1,
        title: "Defining Our Mission",
        subtitle1: "At Tiimat, the journey begins with a clear mission: to empower students with practical skills and knowledge tailored to meet industry demands. ",
        subtitle2: "We envisioned a dynamic institution where each department reflects a blend of academic rigor and hands-on learning, ensuring every student is prepared for real-world challenges",
        image: NO1
    },
    {
        id: 2,
        title: "Research & Strategy",
        subtitle1: "To create impactful departments, we conducted extensive research into emerging trends, industry requirements, and student aspirations. This phase involved collaborating with professionals, educators, and industry leaders to identify key disciplines.",
        subtitle2: " The result was the formation of faculties and departments that cover critical fields like management, software development, creative arts, and technology.",
        image: NO2
    },
    {
        id: 3,
        title: "Crafting the Curriculum",
        subtitle1: "Once the disciplines were identified, our focus shifted to designing comprehensive curriculums for each department. By integrating cutting-edge technologies, innovative teaching methodologies, and real-world applications.",
        subtitle2: " we created a learning experience that bridges theory and practice. From beginner courses to advanced certifications, each program is tailored to student and market needs",
        image: NO3
    },
    {
        id: 4,
        title: "Building a Legacy",
        subtitle1: "Our departments are more than just academic divisions—they are ecosystems of growth, innovation, and excellence. With state-of-the-art facilities, expert instructors, and a commitment to continuous improvement, Tiimat’s departments evolve with the times. ",
        subtitle2: " Whether it’s expanding course offerings or adopting new teaching tools, we remain dedicated to staying ahead of the curve and fostering student success.",
        image: NO4
    }
]



function Departments() {
    return (
        <div className=" text-pretty bg-[#F6F8F9]">
            <section className=" py-24 max-w-[1200px] mx-auto antialiased">
                <div className="  space-y-4 mt-24 max-w-xl">
                    <h2 className=" text-[#222] font-bold text-4xl ">One Stop </h2>
                    <p className=" text-[#333] font-medium text-2xl ">We work with ambitious teams to design, build, and maintain digital products that make news.</p>
                </div>
            </section>
            <section className="py-24  max-w-[1200px] mx-auto antialiased">
                <div>
                    <h2 className=" font-bold text-4xl mb-8">Let us take you on a Journey</h2>
                    <div className=" grid grid-cols-2 gap-24 transform">

                        {
                            PlanList.map((plan: Plan) => {
                                return (<div className={cn(" relative min-h-[280px]", plan.id % 2 == 0 ? "transform translate-y-24 " : "")}>
                                    <div className="pl-16 pt-16 space-y-6 z-50 relative">
                                        <h2 className=" font-bold text-xl text-[#222]">{plan.title}</h2>
                                        <div className=" text-[#333] space-y-4 font-medium text-pretty">
                                            <p>{plan.subtitle1}</p>
                                            <p> {plan.subtitle2} </p>
                                        </div>
                                    </div>
                                    <img src={plan.image} alt="" width={150} className=" absolute top-0 left-0 -z-0 " />
                                </div>)
                            })
                        }
                    </div>
                </div>
            </section>
            <section className="py-24 max-w-[1200px]  mx-auto antialiased">
                <div className=" max-w-3xl mb-12">
                    <h3 className="font-medium text-2xl text-[#222] mb-4"> Explore Our Diverse Departments</h3>
                    <p className=" text-[#333] font-medium">Our departments are thoughtfully structured under specialized faculties, offering a wide range of in-person courses designed to equip students with industry-relevant skills, practical expertise, and a pathway to professional success.</p>
                </div>
                <div className="flex justify-between items-start ">
                    <div className=" flex flex-col gap-8 flex-1">
                        <div>
                            <img src={Management} width={80} alt="" />
                        </div>
                        <div>
                            <h2 className=" text-[#222] font-semibold text-2xl mt-6">Management</h2>
                        </div>
                        <div>
                            <p></p>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-8 flex-1">
                        <div >
                            <img src={Unknow} width={80} alt="" />
                        </div>
                        <div>
                            <h2 className=" text-[#222] font-semibold text-2xl mt-6">Multimedia Technology</h2>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-8 flex-1">
                        <div >
                            <img src={Computer} width={80} alt="" />
                        </div>
                        <div>
                            <h2 className=" text-[#222] font-semibold text-2xl mt-6">Computer Technology</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section></section>
            <section></section>
            <section></section>
        </div>
    )
}

export default Departments