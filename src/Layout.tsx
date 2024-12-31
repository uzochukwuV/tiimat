import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import { getAllCourse, getFaculties } from "./services/read";



export const Layout = () => {
  const [courses, setCourses] = useState([]) as any;
  const [faculty, setFaculty] = useState() as any;
  useEffect(() => {
    getAllCourse()
      .then((data) => {
        setCourses(data)
      })
    getFaculties()
      .then((data) => {
        setFaculty(data)
      })
  }, [])


  return (
    <>

      <section id="app" className=' overflow-hidden absolute top-0 left-0 right-0 bg-[var(--background)] min-h-screen'>
        <Navbar faculty={faculty} />
        <Outlet />
        <Footer courses={courses} />
      </section>

    </>
  )
}


