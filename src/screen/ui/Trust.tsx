import { ArrowRight } from 'lucide-react'
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import { useIsMobile } from '@/hooks/use-mobile';
import { useEffect } from 'react';
import { useState } from 'react';
function Trust() {
    const ismobile = useIsMobile()
    const [slideCount, setSlideCount] = useState(2)
    var settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: slideCount,
        slidesToScroll: 1,
        speed: 2000,
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
                        <div className=" h-[240px] md:h-[400px] pl-8">
                            <div className=' bg-zinc-200 rounded-2xl p-6 w-full relative h-full'>
efef
                            </div>
                           
                        </div>
                        <div className=" h-[240px] md:h-[400px] pl-8">
                            <div className=' bg-zinc-200 rounded-2xl p-6 w-full relative h-full'>

                            </div>
                            
                        </div>
                        <div className=" h-[240px] md:h-[400px] pl-8">
                            <div className=' bg-zinc-200 rounded-2xl p-6 w-full relative h-full'>

                            </div>
                           
                        </div>
                        <div className=" h-[240px] md:h-[400px] pl-8">
                            <div className=' bg-zinc-200 rounded-2xl p-6 w-full relative h-full'>

                            </div>
                           
                        </div>
                        <div className=" h-[240px] md:h-[400px] pl-8">
                            <div className=' bg-zinc-200 rounded-2xl p-6 w-full relative h-full'>

                            </div>
                           
                        </div>
                        <div className=" h-[240px] md:h-[400px] pl-8">
                            <div className=' bg-zinc-200 rounded-2xl p-6 w-full relative h-full'>

                            </div>
                            
                        </div>
                    </Slider>

                </div>
            <div className=' relative h-full flex justify-center items-center'>
                <div className="grid md:grid-cols-2 max-w-[1000px] w-full gap-24">
                    <div className=' col-span-1 h-full bg-white rounded-2xl py-12 px-8 space-y-8'>
                        <div>
                            <p className='text-xl md:text-2xl text-[#222] font-medium text-pretty tracking-wide'>“Because we are building what we will not only be proud of, but what will become a global export, we hired one of the very best — Chigisoft. The truth is, they have delivered excellently.”</p>
                        </div>
                        <div className=' flex justify-between items-center'>
                            <div className='space-y-2'>
                                <h4 className='text-black text-xl font-medium'>Name</h4>
                                <p className=' text-[#333] text-lg'>CEO Tiimat</p>
                            </div>
                            <div>
                                img
                            </div>
                        </div>
                    </div>
                    <div className=' col-span-1 h-full rounded py-12 px-8 space-y-8' >
                        <div className=' h-full w-full flex flex-col justify-between gap-8'>
                            <div>
                                <p className=' text-black font-semibold text-xl md:text-3xl tracking-wide'>We offer you experienced and qualified tutors with qualifications and certificates from top induatries in their specialised fields</p>
                            </div>
                            <div>
                                <Link to={""} className='text-lg md:text-xl text-rose-600 font-medium flex gap-2 group hover:text-rose-400'>
                                    Learn About Tiimat <ArrowRight className=' group-hover:translate-x-4 transition  duration-500' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trust