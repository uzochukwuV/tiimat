import { Outlet } from "react-router-dom";

import { useEffect, useState } from "react";
import { getAllCourse } from "./services/read";
import Navigation from "./screen/ui/Header";
import { Footer } from "./screen/ui/Footer";
import Faq from "./screen/ui/Faq";



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
        <section className="  py-24">
                <div className=" h-full px-6 md:px-0  max-w-[900px] w-full  mx-auto">
                    <div className="w-full h-full grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="md:text-3xl text-xl font-semibold mb-4 text-black">Join Tiimat</h3>
                                <Faq />
                            </div>
                            <div className=" h-full">
                                <img src="https://cdn.pixabay.com/photo/2021/02/1/12/800/student-6027004_1280.jpg" className=" rounded-3xl object-cover " alt="" />
                            </div>
                    </div>
                </div>
            </section>
        <Footer courses={courses} />
      </section>

    </>
  )
}


