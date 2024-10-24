import {Outlet} from "react-router-dom";

import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import Connect from "./components/Connect";
import {useGSAP} from "@gsap/react"
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import Logo from "./assets/logo-1.png"

gsap.registerPlugin(ScrollToPlugin);


export const Layout = () => {
  useGSAP(()=> {
    gsap.fromTo("#intro", {scale:1, opacity:1}, {scale:2, opacity:0, display:"none", delay:1, duration: 0.7 , ease:"back" })
  }, [])
  
  return (
    <>
    <div id="intro" className=' fixed  left-0 right-0 top-0  bottom-0 grid place-content-center bg-black z-[1000]'>
          <div>
            <img src={Logo} alt="" height={100} width={100} className=" animate-pulse" />
          </div>
    </div>
     <section id="app" className=' absolute top-0 left-0 right-0 bg-[var(--background)] min-h-screen'>
     <Navbar />
     <Outlet />
     <Footer />
     </section>
     <Connect />
    </>
  )
}
