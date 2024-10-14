
import Logo1 from "../assets/logo-1.png";

const Navbar = () => {
  return (
    <div>
        <nav className=' fixed top-0 left-0 right-0 z-50 pt-4 pb-2 px-6 sm:px-10 md:px-16 lg:px-24  bg-black'>
            <div className=' w-full h-auto flex justify-between items-center text-white'>
                <div className="logo">
                  <img src={Logo1} alt='Tiimat' width={60} />
                </div>
                <div className="hidden md:flex gap-6 lg:gap-24 lg:text-lg items-center">
                    <div>Faculty</div>
                    
                    <div>About Us</div>
                    <div>Contact Us</div>
                    <div>
                      <button className=' border px-6 py-2 bg-transparent border-[var(--primary-color)]'>
                      See Courses
                      </button>
                    </div>
                </div>
                <div className="menu md:hidden">Menu</div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar