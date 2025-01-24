const data = [
    "Learn from seasoned professionals and industry experts passionate about mentoring and empowering the next generation of innovators.",
    "Our programs emphasize practical, project-based learning to equip you with real-world skills and a competitive edge in the job market.",
    "Stay ahead of the curve with courses designed around the latest technologies, trends, and industry standards.",
    "Join a vibrant community of learners and innovators who inspire and support each other’s growth.",
    "High-quality education at competitive tuition rates, ensuring great value for your investment in your future."
]

function Learning() {
    return <>
    <div className=" py-6 relative fromScale px-6 md:px-24">
        <div className=" grid md:grid-cols-2 gap-12">
            <div className=" h-[450px] w-full rounded-2xl fromLeft " style={{background:"url('https://cdn.pixabay.com/photo/2021/02/18/12/00/student-6027004_1280.jpg')", backgroundSize:"700px 900px", backgroundPosition:"-50px -200px", backgroundRepeat:"no-repeat"}}>

            </div>
            <div className=" md:py-12">
                <h2 className=" text-2xl font-bold text-[#0c0c54] fromRight ">Start Learning with Us</h2>
                <div className=" mt-6">
                    <ol className=" space-y-4 text-sm font-medium text-[#333]">
                        {data.map((e)=>

                            <li className=" ps-6 before:content-[''] before:absolute before:top-1 relative before:bg-[#0c0c54] before:h-2 before:w-2 before:rounded-full before:shadow-md before:-translate-x-6">{e}</li>
                        )}
                    </ol>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default Learning;