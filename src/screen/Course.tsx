
import { useLoaderData } from 'react-router-dom'

function Course() {
    const res = useLoaderData() as any;
    console.log(res)
    return (
        <div>
            <section
                className=' bg-[#222] h-screen w-full flex items-center px-24'
            >
                <div>
                    <h1 className=" text-white text-2xl md:text-5xl font-medium tracking-tight leading-snug ">
                        {res?.course.name} Programme Info
                    </h1> 
                </div>
            </section>
        </div>
    )
}

export default Course