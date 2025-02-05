
import { Building2, Clock1Icon, StarHalf } from 'lucide-react';
import { Link, useLoaderData } from 'react-router-dom'

function Course() {
    const res = useLoaderData() as any;
    console.log(res)
    return (
        <div>
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
                            <Clock1Icon /> 8 weeks
                        </div>
                        <div className=' flex gap-4 items-center'>
                            <StarHalf /> Certification
                        </div>
                    </div>
                </div>
                <div className="absolute   inset-0 w-full h-full bg-[#222]/90 "></div>
                <img src={res?.course.image} alt="" className=" absolute -z-20  inset-0 w-full h-full object-cover" />

            </section>
            <section className=' relative z-20 min-h-[80vh] w-full grid md:grid-cols-6 gap-8 px-6 md:px-24 py-24'>
                <div className='space-y-8 font-medium text-[#333] col-span-2 text-lg'>
                    <h2 className=' font-bold  text-2xl'>Details </h2>
                    <div className=' flex gap-8  md:flex-col'>
                        <div className=' flex flex-col gap-1'>
                            <span className=' font-bold'>Semesters </span>
                            <span>{res?.semester.length}</span>
                        </div>
                        <div className=' flex flex-col gap-1'>
                            <span className=' font-bold'>Certification</span>
                            <span>NIYTT Certification</span>
                        </div>
                        <div className=' flex flex-col gap-1'>
                            <span className=' font-bold'>Duration </span>
                            <span>8 Weeks</span>
                        </div>

                        <Link to={`/faculty/${res.course.facultyId}`}><Building2></Building2> </Link>
                    </div>
                </div>
                <div className=' col-span-4 space-y-8'>
                    {
                        res.semester.map((data:any)=> {
                            return <div className=' space-y-12'> 
                                <div>
                                <h3 className='font-semibold text-[#333] mb-4 text-xl md:text-2xl'>{data.semester.name}</h3>
                                <p className=' font-medium text-[#333] text-sm text-pretty'>{data.semester.description}</p>
                                </div>
                                <div className=' space-y-8'>
                                   
                                        {
                                            data.curriculum.map((topics:any)=>{
                                                const topicList = topics.topics.split("@");
                                                console.log(topicList)
                                                return (
                                                    <div>
                                                        <h4 className=' font-medium text-lg'>{topics.title}</h4>
                                                        <div>
                                                            <ol role='list'>
                                                                {
                                                                    topicList.map((topic:any)=>{
                                                                        return <li>
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
                </div>
            </section>
        </div>
    )
}

export default Course