import {Outlet} from "react-router-dom";

import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import Connect from "./components/Connect";
import {useGSAP} from "@gsap/react"
import gsap from "gsap";

gsap.registerPlugin();


export const Layout = () => {
  useGSAP(()=> {
    gsap.fromTo("#app", {opacity:0, duration:1000}, {opacity:1, animationDuration:2000})
  }, [])
  
  return (
    <>

     <section id="app" className=' absolute opacity-0 top-0 left-0 right-0 bg-[var(--background)] min-h-screen'>
     <Navbar />
     <Outlet />
     <Footer />
     </section>
     <Connect />
    </>
  )
}
