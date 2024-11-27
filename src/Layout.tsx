import {Outlet, useNavigation} from "react-router-dom";

import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";

// configDotenv()

export const Layout = () => {
 
  const navigate = useNavigation()
 
  
  
  return (
    <>
    
     <section id="app" className=' overflow-hidden absolute top-0 left-0 right-0 bg-[var(--background)] min-h-screen'>
    <Navbar />
     <Outlet />
     {
     navigate.state === "loading" ? 
<>
      <div className=" fixed z-50  top-0 left-0 right-0 bottom-0 grid place-items-center">
      <div className="loader"></div> 
      </div>
</>
     :""
     }
     <Footer />
     </section>
     
    </>
  )
}


