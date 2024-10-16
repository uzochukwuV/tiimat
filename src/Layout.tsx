import {Outlet} from "react-router-dom";

import Navbar from "./components/Navbar";

export const Layout = () => {
  return (
    <>
     <section className=' absolute top-0 left-0 right-0 bg-[var(--background)] min-h-screen'>
     <Navbar />
     <Outlet />
     </section>
    </>
  )
}
