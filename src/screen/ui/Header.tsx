
import Img from "../../assets/logo-1.png"
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
// import { ChevronDown } from "lucide-react";
import { Link, useLocation} from "react-router-dom";
import { cn } from "@/lib/utils";
import { AwardIcon, MenuIcon } from "lucide-react";



function Navigation({checked, setCheckedFunc}:any) {
  const route = useLocation()
  
  return (
    <div className={cn(" z-50 py-6 bg-black top-0 left-0 right-0  ", route.pathname == "/"? "bg-transparent absolute":"bg-transparent backdrop-blur" )}>
      {/* bg-[#1e1f21cc] */}
      <div className="  px-6 md:px-24 flex justify-between items-center ">
        <div className=" bg-white px-4 rounded-2xl">
          <Link to={"/"}>
          <img src={Img} alt="" width={100} /></Link>
        </div>

        <button  onClick={setCheckedFunc} className="  md:hidden">  
          <MenuIcon />
        </button>
        <input type="checkbox" id="menu" checked={checked} className="hidden peer"  name="menu" />
     
        <div className="hidden md:block peer-has-checked:block">
          <NavigationMenu.Root className=" ">
            <NavigationMenu.List className={cn(" flex gap-1 sm:gap-2 md:gap-3 lg:gap-8 items-center justify-between ", route.pathname == "/"? " text-white/50":"")}>
              <NavigationMenu.Item className=" text-base hover:bg-blue-600 hover:text-white  rounded-md leading-10 font-medium " >
                <NavigationMenu.Trigger >
                  <Link  viewTransition  to={""} className={cn(" px-4 py-2  font-semibold  ", route.pathname == "/" ? "rounded-lg  ":"") }>Home</Link>

                </NavigationMenu.Trigger>
              </NavigationMenu.Item>
              {/* <NavigationMenu.Item className=" text-base leading-10 font-medium " >
                <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-2 rounded  font-medium leading-none">
                  Faculties
                  <ChevronDown className="transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180" width={18} />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="absolute z-50 left-0 top-full py-4 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
                  <div className=" w-[600px] rounded-3xl h-[440px] bg-[#f9f9f9] ">
                    <div className=" h-full w-full grid grid-cols-2 p-4 ">
                      <div className=" col-span-1 h-full">

                      </div>
                      <div className=" col-span-1 h-full p-2 flex flex-col gap-2 bg-white/80 rounded-md">
                        <div className=" p-4 rounded-3xl flex-1   hover:shadow-2xl ">
                          <h2 className=" text-[#333] text-[16px]  font-semibold">Management</h2>
                          <p className=" text-[#464545] text-xs">Equip yourself with the skills to efficiently manage company assets and drive organizational success with confidence and ease.</p>
                        </div>
                        <div className=" p-4 rounded-3xl  text-[16px] flex-1   hover:shadow-2xl">
                          <h2 className=" text-[#333] font-semibold">Multimedia Technology</h2>
                          <p className=" text-[#464545]  text-xs">Master the art of digital creation, from graphic design to animation, and become a versatile professional in the rapidly evolving world of multimedia technology.</p>
                        </div>
                        <div className=" p-4 rounded-3xl  text-[16px] flex-1  hover:shadow-2xl">
                          <h2 className=" text-[#333] font-semibold">Computer Technology</h2>
                          <p className=" text-[#464545]  text-xs">Harness the power of cutting-edge technologies, from software development to cybersecurity, and become a proficient expert in the ever-growing field of computer technology.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenu.Content>
              </NavigationMenu.Item> */}
              <NavigationMenu.Item className=" text-base hover:bg-blue-600 hover:text-white  rounded-md  leading-10 font-medium " >
                <NavigationMenu.Trigger>
                  <Link  viewTransition to={"/departments"} className={cn(" px-5 py-2  border-indigo-500 shadow-sm  font-semibold ", route.pathname == "/departments" && "  text-black/50 ", route.pathname.includes("departments") ? "rounded-lg    backdrop-blur-sm":"") } >Departments</Link>
                </NavigationMenu.Trigger>
              </NavigationMenu.Item>
              
              <NavigationMenu.Item className=" text-base hover:bg-blue-600 hover:text-white  rounded-md leading-10 font-medium " >
                <NavigationMenu.Trigger>
                  <Link  viewTransition to={"/about"} className={cn(" px-5 py-2 border-indigo-500 shadow-sm  font-semibold ", route.pathname == "/about" && " text-black/50 ", route.pathname.includes("about") ? "rounded-lg    backdrop-blur-sm":"") } >About Us</Link>
                </NavigationMenu.Trigger>
              </NavigationMenu.Item>
              <NavigationMenu.Item className=" text-base hover:bg-blue-600 hover:text-white  rounded-md leading-10 font-medium " >
                <NavigationMenu.Trigger>
                <Link  viewTransition to={"/contact"} className={cn(" px-5 py-2 border-indigo-500 shadow-sm  font-semibold ", route.pathname == "/contact" && " text-black/50 ", route.pathname.includes("contact") ? "rounded-lg    backdrop-blur-sm":"") } >Contact Us</Link>
                </NavigationMenu.Trigger>
              </NavigationMenu.Item>
              <NavigationMenu.Item className=" text-base  hover:text-white py-1   rounded-md  font-medium " >
                <NavigationMenu.Trigger>
                  <Link  viewTransition to={"/check-certificate"} className={cn(" px-2 py-0 border-indigo-500 shadow-sm  font-semibold ", route.pathname == "/" && " text-white ", route.pathname.includes("check") ? "rounded-lg    backdrop-blur-sm":"") } >
                    <AwardIcon color="blue" fill="#11aaff" />
                  </Link>
                </NavigationMenu.Trigger>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </div>
      </div>
    </div>
  )
}

export default Navigation