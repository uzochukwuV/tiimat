import { Button } from "@/components/ui/button"
import Services from "../assets/bg-services.svg"
import DataAnalytics from "../assets/dept/datics.jpg"
import { Clock2 } from "lucide-react"
import { HoverEffect } from "./ui/Cards"

export const projects = [
  {
    title: "Data Analytics",
    description: "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Web Developmet",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "UI/UX",
    description: "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Graphic Design",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Human Resource Management",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Social media Management",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
]




function Departments() {
  return (
    <div>
      <section className='bg-[#F6F8F9] py-24 '>
        <div className=' max-w-[1200px] mx-auto h-full w-full flex items-end justify-start'>
          <div className=' max-h-[500px] mt-12 '>
            <h1 className=" text-[24px] max-w-lg mb-12 font-semibold text-pretty antialiased">Building skills, shaping careers, and driving innovation forward.</h1>
            <img src={Services} className=" rounded-[32px] h-[300px] w-full object-cover" alt="" />
          </div>
        </div>
      </section>
      {/* <section className=" py-24  bg-[#F6F8F9]">
        <div className=" h-full max-w-[1200px] mx-auto grid gap-8 grid-cols-2">
          <div className=" min-h-[500px] bg-[#fff] shadow-2xl shadow-slate-200 drop-shadow-2xl relative rounded-3xl ">
              <div>
                <div className=" absolute text-black top-8 right-8 rounded-3xl px-8 py-1 bg-white font-medium text-sm antialiased">Computer Technology</div>
                <img src={DataAnalytics} className=" object-cover aspect-video rounded-t-3xl " />
              </div>
              <div className=" px-8 py-8">
                    <h3 className="font-semibold text-xl text-[#222] mb-4">Data Analytics</h3>
                    <p className=" text-[#333]">Learn data analysis techniques, visualization tools, and statistical methods to derive meaningful insights from data.</p>
                    <div className=" space-y-6">
                    <div className="mt-4 antialiased text-pretty font-medium flex justify-between items-center">
                      <div className="text-[#444] text-sm flex gap-2 items-center">
                        <Clock2 />
                        3 Months
                      </div>
                      <div className=" text-[#444] text-sm">20 Enrolled</div>
                    </div>
                    <div className="">
                      <Button variant={"secondary"} className=" w-full block bg-black h-12 text-white font-semibold hover:text-black hover:border hover:border-gray-500 ">Apply</Button>
                    </div>
                    </div>
              </div>
          </div>
          <div className=" min-h-[500px] bg-[#fff] shadow-2xl shadow-slate-200 drop-shadow-2xl relative rounded-3xl ">
              <div>
                <div className=" absolute text-black top-8 right-8 rounded-3xl px-8 py-1 bg-white font-medium text-sm antialiased">Computer Technology</div>
                <img src={DataAnalytics} className=" object-cover aspect-video rounded-t-3xl " />
              </div>
              <div className=" px-8 py-8">
                    <h3 className="font-semibold text-xl text-[#222] mb-4">Data Analytics</h3>
                    <p className=" text-[#333]">Learn data analysis techniques, visualization tools, and statistical methods to derive meaningful insights from data.</p>
                    <div className=" space-y-6">
                    <div className="mt-4 antialiased text-pretty font-medium flex justify-between items-center">
                      <div className="text-[#444] text-sm flex gap-2 items-center">
                        <Clock2 />
                        3 Months
                      </div>
                      <div className=" text-[#444] text-sm">20 Enrolled</div>
                    </div>
                    <div className="">
                      <Button variant={"secondary"} className=" w-full block bg-black h-12 text-white font-semibold hover:text-black hover:border hover:border-gray-500 ">Apply</Button>
                    </div>
                    </div>
              </div>
          </div>
          <div className=" min-h-[500px] bg-[#fff] shadow-2xl shadow-slate-200 drop-shadow-2xl relative rounded-3xl ">
              <div>
                <div className=" absolute text-black top-8 right-8 rounded-3xl px-8 py-1 bg-white font-medium text-sm antialiased">Computer Technology</div>
                <img src={DataAnalytics} className=" object-cover aspect-video rounded-t-3xl " />
              </div>
              <div className=" px-8 py-8">
                    <h3 className="font-semibold text-xl text-[#222] mb-4">Data Analytics</h3>
                    <p className=" text-[#333]">Learn data analysis techniques, visualization tools, and statistical methods to derive meaningful insights from data.</p>
                    <div className=" space-y-6">
                    <div className="mt-4 antialiased text-pretty font-medium flex justify-between items-center">
                      <div className="text-[#444] text-sm flex gap-2 items-center">
                        <Clock2 />
                        3 Months
                      </div>
                      <div className=" text-[#444] text-sm">20 Enrolled</div>
                    </div>
                    <div className="">
                      <Button variant={"secondary"} className=" w-full block bg-black h-12 text-white font-semibold hover:text-black hover:border hover:border-gray-500 ">Apply</Button>
                    </div>
                    </div>
              </div>
          </div>
        </div>
      </section> */}
      <section className=" py-24">
          <div className="max-w-[1200px] mx-auto ">
          <HoverEffect items={projects} />
          </div>
      </section>
      

    </div>
  )
}

export default Departments



// function DepartmentCard() {
//   return (
//     <div>

//     </div>
//   )
// }
