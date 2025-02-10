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
                <h3 className='font-medium text-[#333]'>Our solutions affect over <span className=' text-black'>1,000,000</span> people… Trusted by:</h3>
            </div>
            <div className=' w-screen mb-6'>
                    {/* slider */}
                    <Slider {...settings} >
                        {
                            [PIC1, PIC2, PIC3, PIC4, PIC5].map((data)=>{
                                return (
                                    <div className="h-[240px] md:h-[400px] pl-8 transform transition-transform duration-500 hover:scale-95">
                                        <div className='bg-zinc-200 rounded-2xl p-6 w-full relative h-full transition-all duration-500 hover:shadow-xl'>
                                            <img 
                                                src={data} 
                                                alt="" 
                                                className='absolute rounded-2xl top-0 left-0 right-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105' 
                                            />
                                            <div className='rounded-2xl w-full relative h-full'>
                                                <h3 className='font-semibold text-pretty text-[#fff] backdrop:blur-sm text-xl transform transition-all duration-500 hover:translate-y-[-5px]'></h3>
                                                <p className='text-white transform transition-all duration-500 hover:translate-y-[-5px]'></p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                        <div className=" h-[240px] md:h-[400px] pl-8">
                            <div className=' bg-zinc-200  rounded-2xl p-6 w-full relative h-full'>
                                <img src={Director} alt="" className=' absolute  rounded-2xl top-0 left-0 right-0 w-full h-full object-cover' />
                                <div className=' rounded-2xl  w-full relative h-full  '>
                                    <h3 className=' font-semibold text-pretty text-[#fff] backdrop:blur-sm text-xl '>Director ,Tiimat Solution</h3>
                                    <p className=' text-white' >Happy Birthday™ </p>
                                </div>
                            </div>
                           
                        </div>
                        
                    </Slider>

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
                            <p className='text-xl md:text-2xl text-[#222] font-medium text-pretty tracking-wide'>"Because we are building what we will not only be proud of, but what will become a global export, we hired one of the very best — Chigisoft. The truth is, they have delivered excellently."</p>
                        </motion.div>
                        <motion.div 
                            className=' flex justify-between items-center'
                            initial={{ opacity: 0, x: -20 }}
                            
                            transition={{ delay: 0.6, duration: 0.5 }}
                            whileInView={{ opacity: 1, x:0 }}
                        >
                            <div className='space-y-2'>
                                <h4 className='text-black text-xl font-medium'>Amrasa Peter Ighowofe</h4>
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
                                <Link to={""} className='text-lg md:text-xl text-rose-600 font-medium flex gap-2 group hover:text-rose-400'>
                                    Learn About Tiimat <ArrowRight className='group-hover:translate-x-4 transition duration-500' />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trust