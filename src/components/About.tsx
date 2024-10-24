
import FacultyTwo from "../assets/faculty/chart.jpg"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const About = () => {
  useGSAP(()=> {
    gsap.from(".slideIn", {x:-400, opacity:0, duration:2, delay:"5s" })
  }, [])
  return (
    <>
      <div className=" min-h-screen h-full flex flex-col  mt-24 px-6 sm:px-10 md:px-16 lg:px-24  relative">
      <div className=" absolute  left-0 h-full w-full  opacity-5 bg ">
        {/* <img src={BG} alt="hjh" className=" h-full w-full object-cover" /> */}
      </div>
        <div className='h-full relative  flex-1 py-16  flex flex-col justify-between font-["Nunito"]'>
          <div className=" slideIn opacity-100 translate-x-0">
            <div className="*:text-start  max-w-2xl space-y-2">
              <h2 className="text-[var(--text-primary)] text-4xl md:text-5xl ">
                Our Vision <br /> 
              </h2>
              <p className='text-[var(--text-secondary)] font-["Nunito"] text-sm md:text-base'>
                Discover a new era of efficiency and collaboration with our
                cutting edge solutions. Tiimat brings Innovation to every aspect
                optimizing your business journey
              </p>
              <p className=" font-semibold text-[var(--text-tertiary)]">
                Management . Business
              </p>
            </div>
          </div>
          <div className=" flex justify-end">
            <div className="*:text-end  max-w-2xl space-y-2 me-0">
              <h2
                className="text-[var(--text-primary)] text-4xl md:text-5xl "
                style={{ fontFamily: "Nunito" }}
              >
                Our <span className=" text-[var(--primary-color)]">Goal</span>
              </h2>
              <p className="text-[var(--text-secondary)] text-sm md:text-base">
                Discover a new era of efficiency and collaboration with our
                cutting edge solutions. Tiimat brings Innovation to every aspect
                optimizing your business journey
              </p>
              <p className=" font-semibold text-[var(--text-tertiary)]">
                Software Development . Computer Technology
              </p>
            </div>
          </div>
          <div className="slideIn ">
            <div className="*:text-start  max-w-2xl space-y-2">
              <h2 className="text-[var(--text-primary)] text-4xl md:text-5xl ">
               Tiimat Solutions
              </h2>
              <p className="text-[var(--text-secondary)] text-sm md:text-base">
                Discover a new era of efficiency and collaboration with our
                cutting edge solutions. Tiimat brings Innovation to every aspect
                optimizing your business journey
              </p>
              <p className=" font-semibold text-[var(--text-tertiary)]">
                Videography . Multimedia Technology
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen py-16 px-6 sm:px-10 md:px-16 xl:px-24">
        <div className="h-full">
          <div className="space-y-16 ">
                {/* <h2 className="text-[var(--text-primary)] bg-red-300 font-semibold text-center text-3xl font-edu">Business, Tech and Multimedia <br></br> Solutions</h2> */}
                <div className=" space-y-8">
                  <h3 className=" font-medium text-3xl">Faculties</h3>
                  <div className=" space-y-8 md:space-y-0 md:flex gap-6">
                  <div className=" space-y-6   bg-[var(--surface)] rounded-xl">
                    <div>
                        <img src={FacultyTwo} alt="" className=" rounded-t-xl" />
                    </div>
                    <div className=" space-y-2 px-4 pb-4">
                      <h3 className=" font-medium text-lg text-[var(--text-tertiary)]">Faculty of Management</h3>
                      <p className=" text-[var(--text-secondary)]">Get Globally Certified in Business Management and Book Keeping</p>
                    </div>
                  </div>
                  <div className=" space-y-6   bg-[var(--surface)] rounded-xl">
                    <div>
                        <img src={FacultyTwo} alt="" className=" rounded-t-xl" />
                    </div>
                    <div className=" space-y-2 px-4 pb-4">
                      <h3 className=" font-medium text-lg text-[var(--text-tertiary)]">Faculty of Computer Technology</h3>
                      <p className=" text-[var(--text-secondary)]">Get Globally Certified in Business Management and Book Keeping</p>
                    </div>
                  </div>
                  <div className=" space-y-6    bg-[var(--surface)] rounded-xl">
                    <div>
                        <img src={FacultyTwo} alt="" className=" rounded-t-xl" />
                    </div>
                    <div className=" space-y-2 px-4 pb-4">
                      <h3 className=" font-medium text-lg text-[var(--text-tertiary)]">Faculty of Multimedia Technology</h3>
                      <p className=" text-[var(--text-secondary)]">Get Globally Certified in Business Management and Book Keeping</p>
                    </div>
                  </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
