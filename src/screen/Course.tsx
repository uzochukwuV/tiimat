
import {  Clock1Icon, EyeIcon, StarHalf } from 'lucide-react';
import { useLoaderData } from 'react-router-dom'


function Course() {
    const res = useLoaderData() as any;
    console.log(res)
    return (
        <div>
            <input type="checkbox" id="modal-curriculum" className=" hidden" />
            <div id="dm" className=" transform invisible opacity-0  transition-all duration-300 delay-100 fixed top-0 right-0 left-0 bottom-0 bg-black/20 z-50">
        	        <div className=" h-full w-full flex justify-center items-center">
                            <div className=" max-w-[440px] w-full py-8 rounded-2xl bg-white px-6  relative">
                                <label htmlFor="modal-curriculum" className=" absolute right-6 top-6">
                                    <EyeIcon />
                                </label>
                                <h1 className=" font-bold text-xl mb-6">Request Curriculum Now !!!</h1>
                                <div>
                                    <form className=" space-y-4" >
                                        <div>
                                            <label htmlFor="username" className=" text-[12px] font-medium mb-1">Your Name</label>
                                            <input type="text" id="username" className=" block w-full text-black focus:bg-white px-6 h-[40px] rounded-md border border-slate-100 bg-slate-200" />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className=" text-[12px] font-medium mb-1">Email</label>
                                            <input type="email" id="email" className=" block w-full text-black focus:bg-white px-6 h-[40px] rounded-md border border-slate-100 bg-slate-200" />
                                        </div>
                                       
                                        <div>
                                            <label htmlFor="course" className=" text-[12px] font-medium mb-1">Interested Course of Study</label>
                                            <input type="text" id="course" className=" block w-full text-black focus:bg-white px-6 h-[40px] rounded-md border border-slate-100 bg-slate-200" />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className=" text-[12px] font-medium mb-1">Your Phone Number</label>
                                            <input type="text" id="phone" className=" block w-full text-black focus:bg-white px-6 h-[40px] rounded-md border border-slate-100 bg-slate-200" />
                                        </div>
                                        <div>
                                            <input type="submit" id="submit" className=" block w-full  px-6 h-[40px] rounded-md border text-slate-100 bg-indigo-600" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                    </div>
            </div>
            <section
                className=' relative z-20 bg-[#222] h-[80vh] w-full flex items-center px-6 md:px-24'
            >

                <div className=' max-w-[800px] mt-24 space-y-8 z-10'>
                    <h1 className=" text-white text-3xl md:text-5xl font-medium tracking-tight leading-snug ">
                        {res?.course.name} Programme Info
                    </h1>
                    <p className='text-white text-sm md:text-base  font-medium tracking-tight leading-snug '>{res?.course.description}</p>
                    <div className=' text-white text-sm md:text-base  font-medium tracking-tight leading-snug  flex justify-between'>
                        <div className=' flex gap-4 items-center'>
                            <Clock1Icon /> {res?.course?.duration} 
                        </div>
                        <div className=' flex gap-4 items-center'>
                            <StarHalf /> Certification : {res?.course?.certification}
                        </div>
                    </div>
                </div>
                <div className="absolute   inset-0 w-full h-full bg-[#222]/90 "></div>
                <img src={res?.course.image} alt="" className=" absolute -z-20  inset-0 w-full h-full object-cover" />

            </section>
            <section className=' relative z-20 min-h-[80vh] w-full grid md:grid-cols-6 gap-8 px-6 md:px-24 py-24'>
                <div className='space-y-8 font-medium text-[#333] col-span-2 text-lg'>
                    <h2 className=' font-bold  md:text-2xl'>Details </h2>
                    <div className=' flex gap-8 *:text-sm *:md:text-lg text-[#444]  md:flex-col'>
                        <div className=' flex flex-col gap-1'>
                            <span className=' font-bold'>Semesters </span>
                            <span>{res?.semester.length}</span>
                        </div>
                        <div className=' flex flex-col gap-1'>
                            <span className=' font-bold'>Certification</span>
                            <span>
                                {res.course.certification}
                            </span>
                        </div>
                        <div className=' flex flex-col gap-1'>
                            <span className=' font-bold'>Duration </span>
                            <span>
                                {res.course.duration}
                            </span>
                        </div>

                        
                    </div>
                </div>
                <div className=' col-span-4 space-y-8'>
                    {
                        res.semester.map((data:any)=> {
                            return <div className=' space-y-12'> 
                                <div>
                                <h3 className='font-semibold text-[#333] mb-4 text-2xl md:text-2xl'>{data.semester.name}</h3>
                                <p className=' font-medium text-[#444]  text-pretty tracking-wide leading-snug'>{data.semester.description}</p>
                                </div>
                                <div className=' space-y-8'>
                                   
                                        {
                                            data.curriculum.map((topics:any)=>{
                                                const topicList = topics.topics.split("@");
                                                console.log(topicList)
                                                return (
                                                    <div>
                                                        <h4 className='mb-4 font-medium text-lg'>{topics.title}</h4>
                                                        <div>
                                                            <ol role='list' className=' space-y-2   list-image-[/src/assets/computer.svg]'>
                                                                {
                                                                    topicList.map((topic:any, i:any)=>{
                                                                        return <li className={`before:absolute text-[#444] font-medium antialiased text-pretty before:h-2 before:w-2 before:-translate-x-4 before:translate-y-2 before:rounded-full before:content-["${i}"] before:text-white before:bg-green-700`}>
                                                                            {topic}
                                                                        </li>
                                                                    })
                                                                }
                                                            </ol>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                
                                </div>
                            </div>
                        })
                    }
                    <label htmlFor='modal-curriculum' className=' h-[50px] flex w-[360px] bg-indigo-700 hover:bg-indigo-500 rounded-2xl text-pretty font-bold text-white justify-center items-center '>
                        Request full Curriculum
                    </label>
                </div>
                
            </section>
        </div>
    )
}

export default Course