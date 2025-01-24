
import Img from "../../assets/logo-1.png"
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import Menu from "../../assets/ic-nav-menu-w.svg"
import { Link } from "react-router-dom";


function Navigation() {
  return (
    <div className=" z-40 fixed top-0 left-0 right-0  ">
      {/* bg-[#1e1f21cc] */}
      <div className=" relative px-6 md:px-24 py-4 flex justify-between items-center ">
        <div>
          <img src={Img} alt="" width={150} />
        </div>

        <label htmlFor="menu" className="peer  md:hidden">
          <input type="checkbox" className="hidden" name="menu" checked />
          <img src={Menu} alt="" width={40} />
        </label>
        <div className="hidden md:block peer-has-checked:block">
          <NavigationMenu.Root className=" ">
            <NavigationMenu.List className=" flex gap-16 items-center justify-between ">
              <NavigationMenu.Item className=" text-xl leading-10 font-medium text-[#f2f2f2] hover:text-white" >
                <NavigationMenu.Trigger >
                  Home

                </NavigationMenu.Trigger>
              </NavigationMenu.Item>
              <NavigationMenu.Item className=" text-xl leading-10 font-medium text-[#f2f2f2] hover:text-white" >
                <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-2 rounded  font-medium leading-none">
                  Faculties
                  <ChevronDown className="transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180" width={18} />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="absolute z-50 left-0 top-full py-4 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
                  <div className=" w-[600px] rounded-3xl h-[400px] bg-[#f9f9f9] ">
                    <div className=" h-full w-full grid grid-cols-2 p-4 ">
                      <div className=" col-span-1 h-full">

                      </div>
                      <div className=" col-span-1 h-full p-2 flex flex-col gap-2 bg-white/80 rounded-md">
                        <div className=" px-4 py-6 rounded-3xl flex-1   hover:shadow-2xl ">
                          <h2 className=" text-[#333]  font-semibold">Faculty of Management</h2>
                          <p className=" text-[#464545] text-sm">Get industrous and manage company asset with ease</p>
                        </div>
                        <div className=" px-4 py-6 rounded-3xl flex-1   hover:shadow-2xl">
                          <h2 className=" text-[#333] font-semibold">Faculty of Management</h2>
                          <p className=" text-[#464545]  text-sm">Get industrous and manage company asset with ease</p>
                        </div>
                        <div className=" px-4 py-6 rounded-3xl flex-1  hover:shadow-2xl">
                          <h2 className=" text-[#333] font-semibold">Faculty of Management</h2>
                          <p className=" text-[#464545]  text-sm">Get industrous and manage company asset with ease</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
              <NavigationMenu.Item className=" text-xl leading-10 font-medium text-[#f2f2f2] hover:text-white" >
                <NavigationMenu.Trigger>
                  <Link to={"/departments"} >Departments</Link>
                </NavigationMenu.Trigger>
              </NavigationMenu.Item>
              <NavigationMenu.Item className=" text-xl leading-10 font-medium text-[#f2f2f2] hover:text-white" >
                <NavigationMenu.Trigger>
                  About Us
                </NavigationMenu.Trigger>
              </NavigationMenu.Item>
              <NavigationMenu.Item className=" text-xl leading-10 font-medium text-[#f2f2f2] hover:text-white" >
                <NavigationMenu.Trigger>
                  Contact Us
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