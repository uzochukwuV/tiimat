import Flutter from "../assets/icons/icon-4.png";
import Web from "../assets/web.png";


const Course = () => {
  return (
    <div className=" md:h-[600px] bg-gradient-to-b from-transparent to-teal-400 flex justify-center  flex-col">
        <div className=" px-6 sm:px-12 md:px-16 pt-32 pb-12 md:pb-0 lg:px-24 flex flex-col-reverse md:grid grid-cols-6 lg:gap-8 md:pt-8">
            <div className=" flex justify-between flex-col gap-4 items-start col-span-4">
                <p className=" bg-[var(--primary-color)] text-white text-xs  md:text-sm py-1 px-4 rounded-xl">Course 001</p>
                <h2 className=" text-[var(--text-primary)] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-6xl">Flutter Application Development</h2>
                <p className="text-[var(--text-tertiary)] text-xs sm:text-sm md:text-base ">Master Android Application Development by building data-driven responsive apps from scratch with our exclusive course</p>
                <div className=" flex justify-start items-center gap-6 *:text-sm">
                    <button className="  backdrop-blur-md backdrop-opacity-60 text-[var(--primary-color)] w-20 h-8 font-medium md:w-32 md:h-12  rounded-md">Apply</button>
                    <p>N 230,000</p>
                    <img src={Flutter} alt="" height={60} width={60} className=" backdrop-blur-xl" />
                </div>
                
            </div>
            <div className=" col-span-2">
                <img src={Web} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Course