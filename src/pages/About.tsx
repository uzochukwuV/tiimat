import About from "../components/About"


const AboutPage = () => {
  return (
    <div className=" text-gray-800">
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
        <div className="  text-justify text-lg antialiased mx-auto max-w-5xl space-y-2 my-12">
            <p>At Tiimat Solutions, we are dedicated to providing high-quality, accessible education that empowers individuals to succeed in today’s fast-paced digital and business environments. Our institution offers a wide range of beginner-friendly courses designed to equip students with practical skills and foundational knowledge across various fields, including Project Management, Social Media Management, Data Analysis, Human Resource Management, 2D & 3D Animation, Video Editing, Graphic Design, Virtual Assistance, Bookkeeping, and more.
            Our approach combines industry-relevant training with hands-on learning, ensuring that students not only understand the theory but also gain the practical experience needed to thrive in their chosen careers. Whether you are looking to develop technical expertise, boost your creativity, or enhance your business management skills, Tiimat Solutions is committed to helping you achieve your professional goals.
            We believe in providing personalized learning experiences with the support of expert instructors who are dedicated to your success. Our flexible course options, including both online and in-person formats, make it easier than ever to learn at your own pace and on your own terms.
            At Tiimat Solutions, we are more than just an educational institution—we are a community of learners, innovators, and future leaders, ready to take on the challenges of tomorrow. Join us today and start your journey toward a brighter, more successful future.</p>
        </div>
        <About />
        
    </div>
  )
}

export default AboutPage