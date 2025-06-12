import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight,  Code, Star } from 'lucide-react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const getIcon = (courseName:string) => {
  // if (courseName.toLowerCase().includes('ui') || courseName.toLowerCase().includes('design')) {
  //   return <Palette className="w-5 h-5" />;
  // }
  // if (courseName.toLowerCase().includes('video') || courseName.toLowerCase().includes('editing')) {
  //   return <Play className="w-5 h-5" />;
  // }
  // if (courseName.toLowerCase().includes('animation') || courseName.toLowerCase().includes('3d')) {
  //   return <Zap className="w-5 h-5" />;
  // }
  // if (courseName.toLowerCase().includes('manage')) {
  //   return <DollarSign className="w-5 h-5" />;
  // }
  // if(courseName.toLowerCase().includes('assistant')){
  //   return <Volume1Icon className="w-5 h-5" />;
  // }
  // if (courseName.toLowerCase().includes('code') || courseName.toLowerCase().includes('programming')) {
  //   return <Code className="w-5 h-5" />;
  // }

  return <div className=' hidden'>{courseName}</div>;
};

const HoverEffect = ({ items, className = "" }: any) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
   const router = useNavigate()
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {items.map((item:any, idx:any) => (
        <motion.div
          key={item.id}
          className="group cursor-pointer"
          onHoverStart={() => setHoveredIndex(idx)}
          onHoverEnd={() => setHoveredIndex(null)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          onClick={()=>router(`/departments/${item.id}`) }
        >
          <Card item={item} isHovered={hoveredIndex === idx} />
        </motion.div>
      ))}
    </div>
  );
};

const Card = ({ item, isHovered }:any) => {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    console.log(item)
    if (isHovered) {
      const timer = setTimeout(() => setGlitchActive(true), 200);
      return () => clearTimeout(timer);
    } else {
      setGlitchActive(false);
    }
  }, []);

  return (
    <div className="relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-indigo-500 transition-all duration-300 group shadow-sm hover:shadow-md">
      {/* Image Section */}
      <div className="relative h-40 overflow-hidden">
        <motion.img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
        
        {/* Course Icon */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 border border-gray-200 shadow-sm">
          {getIcon(item.name)}
        </div>
        
        {/* Price Tag */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 border border-gray-200 shadow-sm">
          <div className="flex items-center space-x-1 text-indigo-600">
            {/* <DollarSign className="w-4 h-4" /> */}
            <span className="text-sm font-bold">₦{parseInt(item.price).toLocaleString()}</span>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-5 relative bg-white">
        {/* Status Indicator */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-600 font-medium">ACTIVE</span>
          </div>
          <motion.div
            className="text-indigo-600"
            animate={{ 
              rotate: isHovered ? 45 : 0,
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight className="w-5 h-5" />
          </motion.div>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
          {item.name}
        </h3>
        
        <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed mb-4">
          {item.description}
        </p>
        
        {/* Tech Stats */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          {/* <div className="flex items-center space-x-1">
            <Star className="w-3 h-3 text-indigo-600" />
            <span>4.{Math.floor(Math.random() * 9) + 1}</span>
          </div> */}
          <div className="flex items-center space-x-1">
             <Star className="w-3 h-3 text-indigo-600" />
            <span>
              {item.certification ? "Certification" : "No Certification"} 
            </span>
          </div>
          <div className="font-medium">
            <span className="text-indigo-600">{item.duration|| "3 months"}</span>
          </div>
        </div>
        
        {/* Action Button */}
        <motion.button
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link to={`/departments/${item.id}`} className="flex items-center space-x-2">
            <span>Access Course</span>
            {glitchActive && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-600 opacity-50 blur-lg"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>
          <motion.div
            animate={{ x: isHovered ? 3 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>
      
      {/* Hover Glow Effect */}
      {isHovered && (
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-xl border-2 border-indigo-400/30" />
        </div>
      )}
    </div>
  );
};

function Departments() {
   const res = useLoaderData() as any;
   const router = useNavigate()

   useEffect(() => {
   window.scrollTo(0, 0)
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-8 md:px-0 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tech Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-gray-100 border border-gray-200 text-gray-700 px-5 py-2 rounded-full text-sm font-medium mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
              <span>DEPARTMENTS</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Building <span className="text-indigo-600">Skills</span>
              <br />
              <span className="text-gray-800">Shaping Futures</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Driving innovation through next-generation multimedia technology education
            </p>
            
            {/* Tech Stats */}
            <div className="flex items-center justify-center space-x-12 mt-12">
              {[
                { label: 'Active Courses', value: '10+' },
                { label: 'Students', value: '10+' },
                { label: 'Success Rate', value: '95%' }
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                >
                  <div className="text-2xl font-bold text-indigo-600">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="relative py-20 px-8 md:px-0 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {res.map((item:any, index:any) => (
            <motion.div
              key={item.faculty.id}
              className="mb-16 last:mb-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // onClick={()=> router(`/departments/${item.course.id}`)}
            >
              {/* Faculty Header */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-6">
                    <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center">
                      <Code className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        {item.faculty.name}
                      </h2>
                      <div className="flex items-center space-x-4">
                        <div className="h-px bg-indigo-600 w-24" />
                        <span className="text-indigo-600 text-sm font-medium">FACULTY</span>
                      </div>
                    </div>
                  </div>
                  
                  <motion.button
                    className="hidden md:flex items-center space-x-2 bg-white border border-gray-200 text-indigo-600 hover:text-indigo-700 px-5 py-2 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    onClick={()=> router(`/faculty/${item.faculty.id}`) }
                  >
                    <span>View All Courses</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.button>
                </div>
                
                <p className="text-gray-600 max-w-4xl leading-relaxed">
                  {item.faculty.description}
                </p>
              </div>

              <HoverEffect items={item.courses} />
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-20 px-8 md:px-0 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gray-50 rounded-2xl p-12 border border-gray-200"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to <span className="text-indigo-600">Get Started</span>?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the next generation of multimedia technology professionals
            </p>
            <motion.button
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 4px 12px rgba(79, 70, 229, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Launch Your Career
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Departments;