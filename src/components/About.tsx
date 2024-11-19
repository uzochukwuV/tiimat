
import FacultyTwo from "../assets/landing/tiimat/multimedia.jpg"
import Com from '../assets/landing/tiimat/com.jpg'
import Lap from '../assets/landing/tiimat/laptopx.jpg'

const About = () => {
 
  return (
    <> 
      <div className="h-full flex flex-col bg-black rounded-xl  mt-12 px-6 sm:px-10 md:px-16 lg:px-24  relative">
      <div className=" absolute  left-0 h-full w-full  opacity-5 bg ">
        {/* <img src={BG} alt="hjh" className=" h-full w-full object-cover" /> */}
      </div>
        <div className='h-full text-white relative  flex-1 py-16 gap-8  flex flex-col md:flex-row justify-around '>
          <div className="reveal-2  opacity-100 translate-x-0">
            <div className="*:text-start  max-w-2xl space-y-2  ">
              <h2 className=" text-4xl md:text-5xl ">
                Our Vision <br /> 
              </h2>
              <p className=' text-sm md:text-base'>
                Discover a new era of efficiency and collaboration with our
                cutting edge solutions. Tiimat brings Innovation to every aspect
                optimizing your business journey
              </p>
              <p className=" font-semibold text-xs pt-8 text-indigo-200">
                Management . Business
              </p>
            </div>
          </div>
          <div className=" reveal-3  flex">
            <div className="*  max-w-2xl space-y-2 me-0">
              <h2
                className=" text-4xl md:text-5xl "
                
              >
                Our <span className=" ">Goal</span>
              </h2>
              <p className="text-sm md:text-base">
                Discover a new era of efficiency and collaboration with our
                cutting edge solutions. Tiimat brings Innovation to every aspect
                optimizing your business journey
              </p>
              <p className=" font-semibold text-xs pt-8 text-indigo-200">
                Software Development . Computer Technology
              </p>
            </div>
          </div>
          <div className="reveal-4  ">
            <div className="*:text-start  max-w-2xl space-y-2">
              <h2 className=" text-4xl text-white md:text-5xl ">
               Tiimat 
              </h2>
              <p className="text-sm md:text-base ">
                Discover a new era of efficiency and collaboration with our
                cutting edge solutions. Tiimat brings Innovation to every aspect
                optimizing your business journey
              </p>
              <p className=" font-semibold text-xs pt-8 text-indigo-200">
                Videography . Multimedia Technology
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-16 px-6 sm:px-10 md:px-16 xl:px-24">
        <div className="h-full">
          <div className="h-full ">
                {/* <h2 className=" bg-red-300 font-semibold text-center text-3xl font-edu">Business, Tech and Multimedia <br></br> Solutions</h2> */}
                <div className="w-full s">
                  <h3 className=" font-medium text-3xl text-center pb-6">Faculties</h3>
                  <div className=" space-y-8 md:space-y-0 gap-6 pace-y-8 md:grid md:grid-cols-3">
                  <div className=" space-y-6 reveal-1    rounded-xl shadow bg-white">
                    <div>
                        <img src={Lap} alt="" className=" rounded-t-xl max-h-[200px] w-full object-cover" />
                    </div>
                    <div className=" space-y-2 px-4 pb-4">
                      <h3 className=" font-medium text-xl leading-4  text-black">Management</h3>
                      <p className=" text-[#111] pb-6 text-sm">Get Globally Certified in Business Management and Book Keeping</p>
                      <a href="" className=" text-blue-600 ">View more ...</a>
                    </div>
                  </div>
                  <div className=" space-y-6 reveal-2    rounded-xl shadow bg-white">
                    <div>
                        <img src={Com} alt="" className=" rounded-t-xl max-h-[200px] w-full object-cover" />
                    </div>
                    <div className=" space-y-2 px-4 pb-4">
                      <h3 className=" font-medium text-xl  leading-4  text-black"> Computer Technology</h3>
                      <p className=" text-[#111] pb-6 text-sm">Web and app Development at your finger tips, Learn from the professionals</p>
                      <a href="" className=" text-blue-600 ">View more ...</a>
                    </div>
                  </div>
                  <div className=" space-y-6 reveal-3    rounded-xl shadow bg-white">
                    <div>
                        <img src={FacultyTwo} alt="" className=" rounded-t-xl max-h-[200px] w-full object-cover" />
                    </div>
                    <div className=" space-y-2 px-4 pb-4">
                      <h3 className=" font-medium text-xl  leading-4 text-black">Multimedia Technology</h3>
                      <p className=" text-[#111] pb-6 text-sm">Get Globally Certified in Business Management and Book Keeping</p>
                      <a href="" className=" text-blue-600 ">View more ...</a>
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
