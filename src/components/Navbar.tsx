
import { Link, useLocation } from "react-router-dom";
import Logo1 from "../assets/logo-1.png";
import Logo2 from "../assets/logo-3.png";


const Navbar = () => {
  const location = useLocation()
  var bodyHasDark = document.querySelector("body")?.classList.contains("dark")
  const toggleTheme = ()=> {
      var body = document.querySelector("body");
      body?.classList.toggle("dark")
  }
  return (
    <div>
        <nav className={` box fixed top-0 left-0 right-0 z-50 pt-4 pb-2 px-6 sm:px-10 md:px-16 lg:px-24 backdrop:blur-md ${location.pathname.includes("course")? "bg-[var(--background)]/60": "bg-[var(--background)] shadow-sm"} `}>
            <div className=' w-full h-auto flex justify-between items-center text-[var(--text-primary)]'>
                <div className="logo flex gap-1">
                  <Link to={"/"}>
                     {
                      bodyHasDark ? <img src={Logo2} alt='Tiimat' width={50} className="" />:<img src={Logo1} alt='Tiimat' width={50} className=" " />
                     }
                  </Link>
                  
                </div>
                <div className=" fixed">

                </div>
                <div className="hidden md:flex gap-6 md:ga-12 lg:gap-16 lg:text-lg items-center">
                    <div>
                      <Link to={"/course"} >Faculty</Link>
                    </div>
                    
                    <div>About Us</div>
                    <div>Contact Us</div>
                    <div>
                      <button className=' border px-6 py-2 bg-transparent border-[var(--primary-color)]'>
                      See Courses
                      </button>
                    </div>
                </div>
                <div className="menu md:hidden">
                  <button onClick={toggleTheme}>dark</button>
                  <p>Menu</p>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar