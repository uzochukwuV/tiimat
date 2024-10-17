import About from "../components/About"
import Tutors from "../components/Tutors"


const AboutPage = () => {
  return (
    <div>
                <div className="relative clear-start h-[80vh] about-bg bg-cover bg-top bg-blend-screen bg-no-repeat" >
            <div className=" absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-[#101014]"></div>
            <div className=" absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-l from-transparent to-black/50"></div>
            <div className="h-full flex justify-start items-center px-6 sm:px-10 md:px-16 lg:px-24 relative">
                <div className=" max-w-md md:max-w-2xl">
                    <h2 className=" text-3xl md:text-5xl font-medium  text-white">
                        Tiimat Solutions
                    </h2>
                    <p className=" text-sm  text-gray-100 md:text-base mt-4">We believe that everyone should have access to the limitless potential of opportunity.

                    Our programmes are designed to be responsive and agile, training our learners in skills that will remain future-proof. We strive to ensure that each individual is empowered to be their most exceptional self through the power of opportunity.
                    </p>
                </div>
            </div>
        </div>
        <About />
        <Tutors />
    </div>
  )
}

export default AboutPage