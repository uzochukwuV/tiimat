import { Link, useLocation } from "react-router-dom";
import Logo1 from "../assets/logo-1.png";
import Logo2 from "../assets/logo-3.png";
import { useEffect, useState } from "react";
import Banner from "./Banner";
import { getFaculties } from "../services/read";

const Navbar = () => {
  const location = useLocation();
  const [bodyHasDark, setDark] = useState(false);
  const [sidebarHasShow, setShow] = useState(false);
  const [faculty, setFaculty] = useState() as any;

  useEffect(() => {
    document.querySelector("#sidebar")?.classList.replace("show", "hide");
    setDark(document.querySelector("body")?.classList.contains("dark")!);
    setShow(document.querySelector("#sidebar")?.classList.contains("show")!);

    getFaculties()
      .then((data)=>{
        console.log(data);
        
        setFaculty(data)
      })

    return () => {};
  }, [location]);

  useEffect(() => {
    if (
      sidebarHasShow == true &&
      document.querySelector("#sidebar")?.classList.contains("show")
    ) {
      document.querySelector("#sidebar")?.classList.replace("show", "hide");
    }
    document.body.scrollIntoView();
  }, [location.pathname]);

  
  const toggleSidebar = () => {
    var sidebar = document.querySelector("#sidebar");
    if (sidebar?.classList.contains("show")) {
      sidebar.classList.replace("show", "hide");
    } else {
      sidebar?.classList.replace("hide", "show");
    }
    setShow(document.querySelector("#sidebar")?.classList.contains("show")!);
  };
  return (
    <div className=" h-20">
      <nav
        className={` box fixed top-0 left-0 right-0 z-50  backdrop:blur-md ${
          location.pathname.includes("course")
            ? "bg-[var(--background)]  shadow-md"
            : "bg-[var(--background)] shadow-sm"
        } `}
      >
        <Banner />
        <div className=" w-full h-auto flex justify-between items-center text-[var(--text-primary)] pt-4 pb-2 px-6 sm:px-10 md:px-16 xl:px-24">
          <div className="logo flex gap-1">
            <Link to={"/"}>
              {bodyHasDark ? (
                <img src={Logo2} alt="Tiimat" width={50} className=" w-8 md:w-14" />
              ) : (
                <img src={Logo1} alt="Tiimat" width={50} className="w-8 md:w-14 " />
              )}
            </Link>
          </div>
          <div
            id="sidebar"
            className="hide transition-all pt-16 duration-700 -z-10 delay-75 fixed top-0 left-0 right-[0] bottom-0 bg-white "
          >
            <div className="logo flex gap-1 ps-8 h-6"></div>
            <div className="h-full flex items-start px-6 gap-2 flex-col pt-12 *:text-lg *:font-medium  ">
              <Link
                to={"/"}
                className="link w-full border-b py-4 rounded-md hover:bg-transparent hover:border-[var(--surface)] group flex justify-between items-center"
              >
                <div className=" text-black group-hover:text-[var(--text-primary)]">
                  Home
                </div>
                
              </Link>
              <Link
                to={"/faculty#"}
                nonce="u"
                suppressHydrationWarning
                preventScrollReset={false}
                viewTransition
                className="link w-full border-b overflow-hidden py-4 rounded-md hover:bg-transparent hover:border-[var(--surface)] group "
              >
                <div className="flex justify-between pb-4 items-center text-black group-hover:text-[var(--text-primary)]">
                  Faculty
                </div>
                  {
                    faculty?.map((data:any)=>{
                      return <div className=" flex justify-between items-center px-6 border-t h-14">
                      {data?.name}
                  </div>
                    })
                  }
                  
              </Link>
              <Link
                to={"/about-us#"}
                className="link w-full border-b py-4 rounded-md hover:bg-transparent hover:border-[var(--surface)] group flex justify-between items-center"
              >
                <div className=" text-black group-hover:text-[var(--text-primary)]">
                  About Us
                </div>
                
              </Link>
              <Link
                to={"/contact-us#"}
                className="link w-full border-b py-4 rounded-md hover:bg-transparent hover:border-[var(--surface)] group flex justify-between items-center"
              >
                <div className=" text-black group-hover:text-[var(--text-primary)]">
                  Contact Us
                </div>
                
              </Link>
            </div>
          </div>
          <div className="hidden md:flex gap-6 md:gap-8 lg:gap-12 text-sm items-center">
            <div className=" bg-transparent hover:outline-0 focus:autline-0 rounded-md hover:bg-blue-50/35 hover:backdrop-blur-md h-8 grid  w-24">
              <Link to={"/"} className=" hover:text-white h-full w-full grid place-content-center">Home</Link>
            </div>
            <div className=" bg-transparent hover:outline-0 focus:autline-0 rounded-md hover:bg-blue-50/35 hover:backdrop-blur-md h-8 grid  w-24">
              <Link to={"/faculty#"} className=" hover:text-white h-full w-full grid place-content-center">Faculty</Link>
            </div>

            <div className=" bg-transparent hover:outline-0 focus:autline-0 rounded-md hover:bg-blue-50/35 hover:backdrop-blur-md h-8 grid  w-24">
              <Link to={"/about-us#"} className=" hover:text-white h-full w-full grid place-content-center">About Us</Link>
            </div>
            <div className=" bg-transparent hover:outline-0 focus:autline-0 rounded-md hover:bg-blue-50/35 hover:backdrop-blur-md h-8 grid  w-24">
              <Link to={"/contact-us#"} className=" hover:text-white h-full w-full grid place-content-center">Contact Us</Link>
            </div>

            <div className=" space-x-4 flex items-center">
              
              {/* <button className=' focus:bg-[var(--primary-color)] hover:bg-[var(--primary-color)] text-sm border px-4 py-2 rounded-md bg-transparent border-[var(--primary-color)]'>
                      See Courses
                      </button> */}
            </div>
          </div>
          <div className="menu md:hidden flex gap-3">
           
            <button onClick={toggleSidebar} className=" bg-transparent">
              {sidebarHasShow ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="var(--icon)"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="var(--icon)"
                >
                  <path d="M160-360v-80h640v80H160Zm0-160v-80h640v80H160Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
