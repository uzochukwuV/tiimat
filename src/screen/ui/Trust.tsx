import { ArrowRight } from 'lucide-react'
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import { useIsMobile } from '@/hooks/use-mobile';
import { useEffect } from 'react';
import { useState } from 'react';
import Director from '@/assets/dir/director.jpg'
import { motion } from "framer-motion"
import PIC1 from '@/assets/slider/pic1.jpg'
import PIC2 from '@/assets/slider/pic2.jpg'
import PIC3 from '@/assets/slider/pic3.jpg'
import PIC4 from '@/assets/slider/pic4.jpg'
import PIC5 from '@/assets/slider/pic5.jpg'
import PIC6 from '@/assets/slider/pic8.jpg'
import PIC7 from '@/assets/slider/pic7.jpg'
import PIC8 from '@/assets/slider/pic6.jpg'
function Trust() {
    const ismobile = useIsMobile()
    const [slideCount, setSlideCount] = useState(2)
    var settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: slideCount,
        slidesToScroll: 1,
        speed: 5000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    useEffect(()=>{
        if(ismobile) {
            setSlideCount(2)
        }else{
            setSlideCount(4)
        }
    },[ismobile])
    return (
        <div className=' h-full w-full px-6 md:px-0 '>
            <div className='relative max-w-[1200px]  w-full mx-auto space-y-6 py-8 '>
                <h3 className='font-medium text-[#333]'>
                    {/* writeup */}
                      <span className=' text-black'></span></h3>
            </div>
           
            <div className=' relative h-full flex justify-center items-center'>
                <div className="grid md:grid-cols-2 max-w-[1000px] w-full gap-24">
                    <motion.div 
                        className=' col-span-1 h-full bg-white rounded-2xl py-12 px-8 space-y-8'
                        initial={{ opacity: 0, y: 20 }}
                        
                        transition={{ duration: 0.6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                          
                            transition={{ delay: 0.3, duration: 0.5 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <p className='text-xl md:text-2xl text-[#222] font-medium text-pretty tracking-wide'>
                            At Tiimat Solutions, we are dedicated to providing top-quality tech education and training. Our commitment to excellence ensures that our students receive the best possible learning experience to succeed in the digital world.
                            </p>
                        </motion.div>
                        <motion.div 
                            className=' flex justify-between items-center'
                            initial={{ opacity: 0, x: -20 }}
                            
                            transition={{ delay: 0.6, duration: 0.5 }}
                            whileInView={{ opacity: 1, x:0 }}
                        >
                            <div className='space-y-2'>
                                <h4 className='text-black text-xl font-medium'>Amrasa Peter Ighofowe</h4>
                                <p className=' text-[#333] text-sm font-medium'>CEO, TIIMAT Solutions {}</p>
                            </div>
                            <motion.div
                                initial={{ scale: 0 }}
                                
                                transition={{ delay: 0.9, duration: 0.5 }}
                                whileInView={{ scale: 1 }}
                            >
                                <img src={Director} alt="" className='rounded-2xl w-20 h-20 object-cover' />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <div className=' col-span-1 h-full rounded py-12 px-8 space-y-8' >
                        <motion.div 
                            className='h-full w-full flex flex-col justify-between gap-8'
                            initial={{ opacity: 0, x: 20 }}
                            
                            transition={{ duration: 0.6 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                
                                transition={{ delay: 0.3, duration: 0.5 }}
                                whileInView={{ opacity: 1}}
                            >
                                <p className='text-black font-semibold text-xl md:text-3xl tracking-wide'>We offer you experienced and qualified tutors with qualifications and certificates from top induatries in their specialised fields</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                               
                                transition={{ delay: 0.6, duration: 0.5 }}
                                whileInView={{ opacity: 1, y: 0 }}
                            >
                                <Link to={"/about"} className='text-lg md:text-xl text-rose-600 font-medium flex gap-2 group hover:text-rose-400'>
                                    Learn About Tiimat <ArrowRight className='group-hover:translate-x-4 transition duration-500' />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
             <div className='w-screen mb-12'>
                <div className='max-w-[1400px] mx-auto'>
                    <Slider {...settings}>
                        {[PIC2, PIC3, PIC4, PIC5, PIC6, PIC7, PIC8,PIC1].map((data, index) => (
                            <div key={index} className="h-[300px] md:h-[500px] pl-4 pr-4">
                                <div className='group relative h-full overflow-hidden rounded-xl bg-gradient-to-b from-indigo-50 to-white border border-indigo-100'>
                                    <img 
                                        src={data} 
                                        alt="Education Moment" 
                                        className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent'>
                                        <div className='absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500 translate-y-6 group-hover:translate-y-0'>
                                            <div className='space-y-2'>
                                                <h3 className='font-semibold text-xl md:text-2xl text-white'>
                                                    Learning Excellence
                                                </h3>
                                                <div className='h-0.5 w-12 bg-indigo-400'></div>
                                                <p className='text-indigo-50 text-sm md:text-base max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                                    Empowering minds through innovative education and technology
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                        <div className="h-[300px] md:h-[500px] pl-4 pr-4">
                            <div className='group relative h-full overflow-hidden rounded-xl bg-gradient-to-b from-indigo-50 to-white border border-indigo-100'>
                                <img 
                                    src={Director} 
                                    alt="Director" 
                                    className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' 
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent'>
                                    <div className='absolute bottom-0 left-0 right-0 p-6'>
                                        <h3 className='font-semibold text-xl md:text-2xl text-white'>
                                            Leadership & Vision
                                        </h3>
                                        <div className='h-0.5 w-12 bg-indigo-400 mt-2'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Trust