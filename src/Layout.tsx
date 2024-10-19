import {Outlet} from "react-router-dom";

import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import Connect from "./components/Connect";



export const Layout = () => {

  return (
    <>

     <section className=' absolute top-0 left-0 right-0 bg-[var(--background)] min-h-screen'>
     <Navbar />
     <Outlet />
     <Footer />
     </section>
     <Connect />
    </>
  )
}
