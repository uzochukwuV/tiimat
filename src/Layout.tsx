"use client"
import { Link, Outlet } from "react-router-dom";
import Navigation from "./screen/ui/Header";
import { Footer } from "./screen/ui/Footer";
import Faq from "./screen/ui/Faq";
import FaqImage from "./assets/dept/faq.avif"
import { motion } from "framer-motion"
import { cn } from "./lib/utils";
import { useState } from "react";
import { Toaster } from "./components/ui/sonner";



export const Layout = () => {
  const [checked, setChecked] = useState(false)
  const setCheckedFunc = () => {
    setChecked(!checked)
   
  }

  return (
    <>

      <section id="app" className=' overflow-hidden absolute top-0 left-0 right-0 bg-[var(--background)] min-h-screen'>
        <Navigation checked={checked} setCheckedFunc={setCheckedFunc} />
        <Outlet />
        <section className=" sm:px-8  py-24">
                <div className=" h-full px-6 md:px-0  max-w-[1200px] w-full  mx-auto">
                    <div className="w-full h-full grid md:grid-cols-12 gap-12">
                            <div className=" col-span-6 flex flex-col justify-center">
                                <h3 className="md:text-3xl text-xl font-semibold mb-4 text-black">Join Tiimat</h3>
                                <Faq />
                            </div>
                            <div className=" h-full col-span-6">
                            <motion.div
                                initial={{ opacity: 0, scale:0.8 }}
                               
                                transition={{ delay: 0.1, duration: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                            >
                                <img src={FaqImage} className=" rounded-3xl object-cover w-full h-full " alt="" />
                                </motion.div>
                            </div>
                    </div>
                </div>
            </section>
            {
                   checked && <div id="sidebar" className={cn(" z-auto left-0 right-0 bottom-0 shadow-lg  md:hidden fixed top-20   transition-transform duration-300 ease-in-out transform translate-x-0 bg-black/80  backdrop-blur", checked? "w-full h-full":"hidden")}>
                   <div>
                     <div className=" z-50 bg-white text-black backdrop-blur p-8 transform transition-transform">
                       <motion.div
                         initial={{ x: 120 }}
                         animate={{ x: 0 }}
                         exit={{ x: 20 }}
                         transition={{ type: "spring", stiffness: 100 }}
                         className="flex flex-col *:font-medium *:w-full *:flex *:justify-start *:items-center space-y-8 gap-6 w-[300px] rounded-md "
                       >
                         <Link to="" onClick={setCheckedFunc} className="text-lg z-50 ">Home</Link>
                         <Link to="/departments" onClick={setCheckedFunc} className="text-lg ">Departments</Link>
                         <Link to="/about" onClick={setCheckedFunc} className="text-lg ">About Us</Link>
                         <Link to="/contact" onClick={setCheckedFunc}  className="text-lg ">Contact Us</Link>
                       </motion.div>
                     </div>
                   </div>
             </div>
                 }
        <Footer  />
        <Toaster />
      </section>

    </>
  )
}


