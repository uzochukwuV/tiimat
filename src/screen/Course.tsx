
import {  ArrowRight, Award, BookOpen, Calendar, CheckCircle, Clock, X } from 'lucide-react';
import { useLoaderData } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function Course() {
    const res = useLoaderData() as any;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        course: '',
        phone: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        setIsModalOpen(false);
        setFormData({ name: '', email: '', course: '', phone: '' });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="bg-white/95 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-md w-full shadow-2xl shadow-indigo-500/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
                                    Request Curriculum
                                </h2>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors duration-300"
                                >
                                    <X size={20} className="text-slate-600" />
                                </button>
                            </div>

                            <div onSubmit={handleSubmit} className="space-y-4">
                                {[
                                    { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Enter your full name' },
                                    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'Enter your email' },
                                    { name: 'course', label: 'Course of Interest', type: 'text', placeholder: 'Course you\'re interested in' },
                                    { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Enter your phone number' }
                                ].map((field, index) => (
                                    <motion.div
                                        key={field.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="space-y-2"
                                    >
                                        <label className="text-sm font-semibold text-slate-700">
                                            {field.label}
                                        </label>
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            value={formData[field.name as keyof typeof formData]}
                                            onChange={handleInputChange}
                                            placeholder={field.placeholder}
                                            className="w-full px-4 py-3 rounded-xl bg-white/50 border border-indigo-100 focus:border-indigo-300 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all duration-300"
                                            required
                                        />
                                    </motion.div>
                                ))}
                                
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="w-full py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
                                >
                                    Send Request
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <img 
                        src={res?.course.image} 
                        alt={res?.course.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-indigo-900/60 to-black/70" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.15),transparent_70%)]" />
                </div>

                {/* Content */}
                <div className="relative z-10 px-6 md:px-24 py-20 w-full">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <motion.h1 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-4xl md:text-6xl font-bold text-white leading-tight"
                            >
                                <span className="bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
                                    {res?.course.name}
                                </span>
                                <span className="block text-2xl md:text-3xl font-medium text-indigo-200 mt-2">
                                    Programme
                                </span>
                            </motion.h1>
                            
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl"
                            >
                                {res?.course.description}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="flex flex-wrap gap-8 pt-4"
                            >
                                <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                                    <Clock className="text-indigo-300" size={20} />
                                    <span className="text-white font-medium">{res?.course?.duration}</span>
                                </div>
                                <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                                    <Award className="text-indigo-300" size={20} />
                                    <span className="text-white font-medium">{res?.course?.certification}</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-white/10 rounded-full blur-xl" />
                <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-white/20 to-indigo-400/10 rounded-full blur-xl" />
            </section>

            {/* Main Content */}
            <section className="relative py-20 px-6 md:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Sidebar */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-4"
                        >
                            <div className="sticky top-8 space-y-8">
                                <div className="bg-white/70 backdrop-blur-xl border border-indigo-100 rounded-3xl p-8 shadow-lg shadow-indigo-500/5">
                                    <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                                        <BookOpen className="text-indigo-500" size={24} />
                                        Course Details
                                    </h2>
                                    
                                    <div className="space-y-6">
                                        {[
                                            { icon: Calendar, label: 'Semesters', value: res?.semester.length },
                                            { icon: Award, label: 'Certification', value: res?.course.certification },
                                            { icon: Clock, label: 'Duration', value: res?.course.duration }
                                        ].map((item, index) => (
                                            <motion.div
                                                key={item.label}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-white border border-indigo-100"
                                            >
                                                <div className="p-2 rounded-lg bg-indigo-100">
                                                    <item.icon className="text-indigo-600" size={20} />
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-slate-700">{item.label}</div>
                                                    <div className="text-slate-600">{item.value}</div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full py-4 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center gap-2"
                                >
                                    Request Full Curriculum
                                    <ArrowRight size={20} />
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* Course Content */}
                        <div className="lg:col-span-8 space-y-12">
                            {res?.semester.map((semesterData: any, semesterIndex: number) => (
                                <motion.div
                                    key={semesterIndex}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: semesterIndex * 0.1 }}
                                    className="bg-white/70 backdrop-blur-xl border border-indigo-100 rounded-3xl p-8 shadow-lg shadow-indigo-500/5"
                                >
                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                                                    {semesterIndex + 1}
                                                </div>
                                                {semesterData.semester.name}
                                            </h3>
                                            <p className="text-slate-600 leading-relaxed text-lg">
                                                {semesterData.semester.description}
                                            </p>
                                        </div>

                                        <div className="space-y-8">
                                            {semesterData.curriculum.map((curriculumItem: any, curriculumIndex: number) => {
                                                const topicList = curriculumItem.topics.split("@");
                                                
                                                return (
                                                    <motion.div
                                                        key={curriculumIndex}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: curriculumIndex * 0.1 }}
                                                        className="border-l-4 border-indigo-300 pl-6 space-y-4"
                                                    >
                                                        <h4 className="text-xl font-semibold text-slate-800">
                                                            {curriculumItem.title}
                                                        </h4>
                                                        
                                                        <div className="grid gap-3">
                                                            {topicList.map((topic: string, topicIndex: number) => (
                                                                <motion.div
                                                                    key={topicIndex}
                                                                    initial={{ opacity: 0, x: -20 }}
                                                                    whileInView={{ opacity: 1, x: 0 }}
                                                                    viewport={{ once: true }}
                                                                    transition={{ delay: topicIndex * 0.05 }}
                                                                    className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-slate-50 to-indigo-50 border border-indigo-100 hover:shadow-md transition-all duration-300"
                                                                >
                                                                    <CheckCircle className="text-indigo-500 flex-shrink-0 mt-0.5" size={16} />
                                                                    <span className="text-slate-700 font-medium leading-relaxed">
                                                                        {topic.trim()}
                                                                    </span>
                                                                </motion.div>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Background Decorations */}
                <div className="absolute top-40 -right-20 w-64 h-64 bg-gradient-to-br from-indigo-100 to-white opacity-50 rounded-full blur-3xl" />
                <div className="absolute bottom-40 -left-20 w-48 h-48 bg-gradient-to-br from-white to-indigo-100 opacity-50 rounded-full blur-3xl" />
            </section>
        </div>
    );
}

export default Course;

// function Course() {
//     const res = useLoaderData() as any;
//     console.log(res)
//     return (
//         <div>
//             <input type="checkbox" id="modal-curriculum" className=" hidden" />
//             <div id="dm" className=" transform invisible opacity-0  transition-all duration-300 delay-100 fixed top-0 right-0 left-0 bottom-0 bg-black/20 z-50">
//         	        <div className=" h-full w-full flex justify-center items-center">
//                             <div className=" max-w-[440px] w-full py-8 rounded-2xl bg-white px-6  relative">
//                                 <label htmlFor="modal-curriculum" className=" absolute right-6 top-6">
//                                     <EyeIcon />
//                                 </label>
//                                 <h1 className=" font-bold text-xl mb-6">Request Curriculum Now !!!</h1>
//                                 <div>
//                                     <form className=" space-y-4" >
//                                         <div>
//                                             <label htmlFor="username" className=" text-[12px] font-medium mb-1">Your Name</label>
//                                             <input type="text" id="username" className=" block w-full text-black focus:bg-white px-6 h-[40px] rounded-md border border-slate-100 bg-slate-200" />
//                                         </div>
//                                         <div>
//                                             <label htmlFor="email" className=" text-[12px] font-medium mb-1">Email</label>
//                                             <input type="email" id="email" className=" block w-full text-black focus:bg-white px-6 h-[40px] rounded-md border border-slate-100 bg-slate-200" />
//                                         </div>
                                       
//                                         <div>
//                                             <label htmlFor="course" className=" text-[12px] font-medium mb-1">Interested Course of Study</label>
//                                             <input type="text" id="course" className=" block w-full text-black focus:bg-white px-6 h-[40px] rounded-md border border-slate-100 bg-slate-200" />
//                                         </div>
//                                         <div>
//                                             <label htmlFor="phone" className=" text-[12px] font-medium mb-1">Your Phone Number</label>
//                                             <input type="text" id="phone" className=" block w-full text-black focus:bg-white px-6 h-[40px] rounded-md border border-slate-100 bg-slate-200" />
//                                         </div>
//                                         <div>
//                                             <input type="submit" id="submit" className=" block w-full  px-6 h-[40px] rounded-md border text-slate-100 bg-indigo-600" />
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                     </div>
//             </div>
//             <section
//                 className=' relative z-20 bg-[#222] h-[80vh] w-full flex items-center px-6 md:px-24'
//             >

//                 <div className=' max-w-[800px] mt-24 space-y-8 z-10'>
//                     <h1 className=" text-white text-3xl md:text-5xl font-medium tracking-tight leading-snug ">
//                         {res?.course.name} Programme Info
//                     </h1>
//                     <p className='text-white text-sm md:text-base  font-medium tracking-tight leading-snug '>{res?.course.description}</p>
//                     <div className=' text-white text-sm md:text-base  font-medium tracking-tight leading-snug  flex justify-between'>
//                         <div className=' flex gap-4 items-center'>
//                             <Clock1Icon /> {res?.course?.duration} 
//                         </div>
//                         <div className=' flex gap-4 items-center'>
//                             <StarHalf /> Certification : {res?.course?.certification}
//                         </div>
//                     </div>
//                 </div>
//                 <div className="absolute   inset-0 w-full h-full bg-[#222]/90 "></div>
//                 <img src={res?.course.image} alt="" className=" absolute -z-20  inset-0 w-full h-full object-cover" />

//             </section>
//             <section className=' relative z-20 min-h-[80vh] w-full grid md:grid-cols-6 gap-8 px-6 md:px-24 py-24'>
//                 <div className='space-y-8 font-medium text-[#333] col-span-2 text-lg'>
//                     <h2 className=' font-bold  md:text-2xl'>Details </h2>
//                     <div className=' flex gap-8 *:text-sm *:md:text-lg text-[#444]  md:flex-col'>
//                         <div className=' flex flex-col gap-1'>
//                             <span className=' font-bold'>Semesters </span>
//                             <span>{res?.semester.length}</span>
//                         </div>
//                         <div className=' flex flex-col gap-1'>
//                             <span className=' font-bold'>Certification</span>
//                             <span>
//                                 {res.course.certification}
//                             </span>
//                         </div>
//                         <div className=' flex flex-col gap-1'>
//                             <span className=' font-bold'>Duration </span>
//                             <span>
//                                 {res.course.duration}
//                             </span>
//                         </div>

                        
//                     </div>
//                 </div>
//                 <div className=' col-span-4 space-y-8'>
//                     {
//                         res.semester.map((data:any)=> {
//                             return <div className=' space-y-12'> 
//                                 <div>
//                                 <h3 className='font-semibold text-[#333] mb-4 text-2xl md:text-2xl'>{data.semester.name}</h3>
//                                 <p className=' font-medium text-[#444]  text-pretty tracking-wide leading-snug'>{data.semester.description}</p>
//                                 </div>
//                                 <div className=' space-y-8'>
                                   
//                                         {
//                                             data.curriculum.map((topics:any)=>{
//                                                 const topicList = topics.topics.split("@");
//                                                 console.log(topicList)
//                                                 return (
//                                                     <div>
//                                                         <h4 className='mb-4 font-medium text-lg'>{topics.title}</h4>
//                                                         <div>
//                                                             <ol role='list' className=' space-y-2   list-image-[/src/assets/computer.svg]'>
//                                                                 {
//                                                                     topicList.map((topic:any, i:any)=>{
//                                                                         return <li className={`before:absolute text-[#444] font-medium antialiased text-pretty before:h-2 before:w-2 before:-translate-x-4 before:translate-y-2 before:rounded-full before:content-["${i}"] before:text-white before:bg-green-700`}>
//                                                                             {topic}
//                                                                         </li>
//                                                                     })
//                                                                 }
//                                                             </ol>
//                                                         </div>
//                                                     </div>
//                                                 )
//                                             })
//                                         }
                                
//                                 </div>
//                             </div>
//                         })
//                     }
//                     <label htmlFor='modal-curriculum' className=' h-[50px] flex w-[360px] bg-indigo-700 hover:bg-indigo-500 rounded-2xl text-pretty font-bold text-white justify-center items-center '>
//                         Request full Curriculum
//                     </label>
//                 </div>
                
//             </section>
//         </div>
//     )
// }

// export default Course