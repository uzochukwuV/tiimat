import {Outlet, useNavigation} from "react-router-dom";

import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";


export const Layout = () => {
  
  const navigate = useNavigation()
  return (
    <>
    
     <section id="app" className=' absolute top-0 left-0 right-0 bg-[var(--background)] min-h-screen'>
    <Navbar />
     <Outlet />
     {
     navigate.state === "loading" ? 
<>
      <h1 className="animate-ping opacity-90 z-50 ">Loading .....</h1>
</>
     :""
     }
     <Footer />
     </section>
     
    </>
  )
}


