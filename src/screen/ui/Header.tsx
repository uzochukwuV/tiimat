
import Img from "../../assets/logo-1.png"
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
// import { ChevronDown } from "lucide-react";
import Menu from "../../assets/ic-nav-menu-w.svg"
import { Link, useLocation} from "react-router-dom";
import { cn } from "@/lib/utils";
import { MenuIcon, XIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";


function Navigation() {
  const route = useLocation()
  const [checked, setChecked] = useState(false)
  const setCheckedFunc = () => {
    setChecked(!checked)
   
  }
  return (
    <div className={cn(" z-50 bg-black top-0 left-0 right-0  backdrop-blur", route.pathname == "/"? "bg-[ rgba(30, 31, 33, .8)]":"bg-transparent" )}>
      {/* bg-[#1e1f21cc] */}
      <div className="  px-6 md:px-24 flex justify-between items-center ">
        <div>
          <img src={Img} alt="" width={150} />
        </div>

        <button  onClick={setCheckedFunc} className="  md:hidden">  
          <MenuIcon />
        </button>
        <input type="checkbox" id="menu" checked={checked} className="hidden peer"  name="menu" />
      {
        checked && <div id="sidebar" className={cn("  z-[100000] left-0 right-0 bottom-0 shadow-lg  md:hidden absolute top-20  h-scree transition-transform duration-300 ease-in-out transform translate-x-0 bg-black/80  backdrop-blur", checked? "w-full h-full":"hidden")}>
        <div>
          <div className=" z-50 bg-white text-black backdrop-blur p-8 transform transition-transform">
            <motion.div
              initial={{ x: 120 }}
              animate={{ x: 0 }}
              exit={{ x: 20 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="flex flex-col *:font-medium *:w-full *:flex *:justify-start *:items-center space-y-8 gap-6 w-[300px] rounded-md "
            >
              <Link to="" className="text-lg z-50 ">Home</Link>
              <Link to="/departments" className="text-lg ">Departments</Link>
              <Link to="/about" className="text-lg ">About Us</Link>
              <Link to="/contact" className="text-lg ">Contact Us</Link>
            </motion.div>
          </div>
        </div>
  </div>
      }
        <div className="hidden md:block peer-has-checked:block">
          <NavigationMenu.Root className=" ">
            <NavigationMenu.List className={cn(" flex gap-8 md:gap-16 items-center justify-between ", route.pathname == "/"? "*:text-[#2f2f2f] hover:text-white":"text-[#222] hover:text-black")}>
              <NavigationMenu.Item className=" text-base leading-10 font-medium " >
                <NavigationMenu.Trigger >
                  <Link  viewTransition  to={""}>Home</Link>

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
              <NavigationMenu.Item className=" text-base leading-10 font-medium " >
                <NavigationMenu.Trigger>
                  <Link  viewTransition to={"/departments"} >Departments</Link>
                </NavigationMenu.Trigger>
              </NavigationMenu.Item>
              <NavigationMenu.Item className=" text-base leading-10 font-medium " >
                <NavigationMenu.Trigger>
                  <Link  viewTransition to={"/about"} >About Us</Link>
                </NavigationMenu.Trigger>
              </NavigationMenu.Item>
              <NavigationMenu.Item className=" text-base leading-10 font-medium " >
                <NavigationMenu.Trigger>
                <Link  viewTransition to={"/contact"} >Contact Us</Link>
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