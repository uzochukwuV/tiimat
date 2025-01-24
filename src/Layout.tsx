import { Outlet } from "react-router-dom";

import { useEffect, useState } from "react";
import { getAllCourse } from "./services/read";
import Navigation from "./screen/ui/Header";
import { Footer } from "./screen/ui/Footer";



export const Layout = () => {
  const [courses, setCourses] = useState([]) as any;
  useEffect(() => {
    getAllCourse()
      .then((data) => {
        setCourses(data)
      })
  }, [])


  return (
    <>

      <section id="app" className=' overflow-hidden absolute top-0 left-0 right-0 bg-[var(--background)] min-h-screen'>
        <Navigation />
        <Outlet />
        <Footer courses={courses} />
      </section>

    </>
  )
}


