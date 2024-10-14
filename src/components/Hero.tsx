import React from 'react'
import hero2 from "../assets/hero-2.png";
import hero1 from "../assets/hero-1.png";
import hero3 from "../assets/hero-3.svg";

const Hero = () => {
  return (
    <section className=' relative min-h-screen flex flex-col h-full pt-16 py-8 sm:px-10 md:px-16 lg:px-24 z-10 font-normal '>
        <div className=' h-screen grid grid-rows-2 pt-4 grid-flow-col gap-6 md:flex flex-row-reverse md:items-center '>
            <div id='hero-img'  className="img relative bg-contain bg-no-repeat bg-center flex justify-end items-center flex-1  ">
                
                <div className='absolute top-0 left-0 right-0 bottom-0 flex items-end justify-center' style={{zIndex:-1}}>
                <img src={hero3} alt='hero-2' className=' absolute bottom-0  h-24 z-20 me-6 ' />
                </div>
                
                <img src={hero2} alt='hero-2' className='mx-auto -me-4 sm:me-0 w-[18rem] md:w-[20rem]' style={{zIndex:10}} />
               
                
            </div>
            <div className="write-up flex flex-col gap-4 *:text-start px-6 md:px-0 flex-1">
                <h2 className=' text-[#f2f2f2] text-3xl md:text-4xl lg:text-6xl'>Bridging the Gap <span className=' text-[var(--primary-color)]'>Between</span> Tech And Seamless Innovation</h2>
                <p className=' *:text-[#fafafa] text-sm md:text-base lg:text-lg'>
                    <span>Tech doesnt have to feel like a different language.</span>
                    <span>We build schematiq to make sure tech works for you, your business and your future</span>
                </p>
                <div className=' pt-4 *:py-2 *:min-w-[180px] *:px-4 *:text-sm *:text-[#fafafa] *:md:text-base '>
                    <button className=' bg-[var(--primary-color)]'>Start Innovating Now</button>
                    <button className='bg-transparent'>How it Works</button>
                </div>
                <div className='text-[#fafafa] mt-12'>
                    <p>Companies trust us</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero