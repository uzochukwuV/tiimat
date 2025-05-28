import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Award,
  Zap,
  Rocket,
  ShieldCheck,
  BookOpen,
  HeartHandshake,
  Lightbulb,
  ArrowRight,
  Briefcase,
  Quote,
  Sparkles,
  Star,

} from 'lucide-react';

// Placeholder for actual image if you decide to use one in the Hero section
// import heroImagePlaceholder from './path-to-your-hero-image.jpg';
// Placeholder for CEO image
// import ceoImagePlaceholder from './path-to-ceo-image.jpg';

export const AboutUs = () => {
  const ceoName = "Amrasa Peter Ighofowe";
  const ceoQuote = "At Tiimat Solutions, we are dedicated to providing top-quality tech education and training. Our commitment to excellence ensures that our students receive the best possible learning experience to succeed in the digital world.";

  const values = [
    { icon: Star, title: "Excellence", description: "Committing to the highest standards in education and student support." },
    { icon: Sparkles, title: "Innovation", description: "Pioneering cutting-edge learning experiences and embracing new technologies." },
    { icon: Users, title: "Empowerment", description: "Unlocking potential and equipping students for global impact." },
    { icon: Briefcase, title: "Expertise", description: "Providing industry-leading knowledge from experienced and qualified tutors." },
    { icon: HeartHandshake, title: "Community", description: "Fostering a vibrant and supportive network of learners and professionals." },
    { icon: Rocket, title: "Global Impact", description: "Preparing students to make meaningful contributions worldwide." },
  ];

  const whyChooseTiimat = [
    { icon: Award, text: "Industry-leading courses designed for relevance and impact." },
    { icon: HeartHandshake, text: "Expert mentorship from seasoned professionals." },
    { icon: Zap, text: "Cutting-edge learning experiences with modern technology." },
    { icon: ShieldCheck, text: "Experienced and qualified tutors dedicated to your success." },
    { icon: BookOpen, text: "Focus on practical skills crucial for the digital world." },
    { icon: Users, text: "A supportive and vibrant learning community." },
  ];

  const SectionTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={`text-3xl lg:text-4xl font-bold text-slate-900 relative inline-block ${className}`}>
      {children}
      <span className="block w-16 h-[3px] bg-indigo-600 rounded-full mt-2.5 mx-auto"></span>
    </h2>
  );

  const CenteredSectionTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
     <h2 className={`text-3xl lg:text-4xl font-bold text-slate-900 relative mb-3 ${className}`}>
       {children}
       <span className="block w-16 h-[3px] bg-indigo-600 rounded-full mt-2.5"></span>
     </h2>
   );


  return (
    <div className="bg-white text-slate-700 antialiased">

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            About Tiimat Solutions
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed">
            Pioneering the Future of Education. We empower students through innovative learning for global impact, transforming futures with accessible, top-quality experiences in technology and management.
          </p>
          {/* Optional: Placeholder for a visual element */}
          {/* <div className="mt-10">
            <img src={heroImagePlaceholder} alt="Tiimat Solutions Learning Environment" className="rounded-lg shadow-xl mx-auto w-full max-w-2xl h-auto" />
          </div> */}
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <CenteredSectionTitle>Our Mission</CenteredSectionTitle>
              <p className="text-lg leading-relaxed text-slate-600 mt-4">
                To provide top-quality tech and management education and training, fostering a commitment to excellence that ensures our students receive the best possible learning experience to succeed and thrive in the digital world.
              </p>
            </div>
            <div>
              <CenteredSectionTitle>Our Vision</CenteredSectionTitle>
              <p className="text-lg leading-relaxed text-slate-600 mt-4">
                Innovative education for global impact. We envision a world where every individual has the opportunity to unlock their potential and make significant contributions through accessible, transformative learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Tiimat Story Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <SectionTitle>Our Journey</SectionTitle>
          <p className="text-lg leading-relaxed text-slate-600 mt-8">
            Founded on the principle that education should be a catalyst for real-world success, Tiimat Solutions began with a simple yet powerful idea: to bridge the gap between academic learning and industry demands. We saw a need for practical, expert-led training that not only imparts knowledge but also instills confidence and cultivates innovation. Our journey is one of continuous evolution, driven by the success of our students and our unwavering commitment to shaping the future of education.
          </p>
        </div>
      </section>

      {/* Meet the Leadership Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <SectionTitle>Leadership & Vision</SectionTitle>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-slate-50 p-8 md:p-12 rounded-xl shadow-lg">
            <div className="flex-shrink-0 md:w-1/4 flex justify-center">
              {/* Placeholder for CEO Image */}
              {/* <img src={ceoImagePlaceholder} alt={ceoName} className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-md" /> */}
               <div className="w-40 h-40 md:w-48 md:h-48 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-500">
                 <Briefcase size={64} strokeWidth={1.5}/>
               </div>
            </div>
            <div className="md:w-3/4 text-center md:text-left relative">
              <Quote className="absolute -top-4 left-0 text-indigo-300 w-10 h-10 md:w-12 md:h-12 opacity-50 hidden md:block" strokeWidth={1.5}/>
              <p className="text-xl lg:text-2xl italic text-slate-700 mb-6 leading-relaxed">
                {ceoQuote}
              </p>
              <h3 className="text-xl font-semibold text-slate-900">{ceoName}</h3>
              <p className="text-indigo-600 font-medium">CEO, Tiimat Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <SectionTitle>What We Stand For</SectionTitle>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-6">
              Our core values guide every decision we make and every course we offer, ensuring we stay true to our mission of empowerment and excellence.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-slate-50 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full mb-5">
                  <value.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Tiimat? Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <SectionTitle>Why Choose Tiimat Solutions?</SectionTitle>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-6">
              We provide more than just courses; we offer a pathway to success in the digital age, backed by a commitment to your growth.
            </p>
          </div>
          <div className="space-y-6">
            {whyChooseTiimat.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-5 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex-shrink-0 text-indigo-600 mt-1 bg-indigo-50 p-2.5 rounded-full">
                  <item.icon size={22} strokeWidth={1.5}/>
                </div>
                <p className="text-slate-700 leading-relaxed my-auto">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment to Learning Excellence Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <Lightbulb className="text-indigo-500 w-12 h-12 mx-auto mb-6" strokeWidth={1.5} />
          <SectionTitle>Commitment to Learning Excellence</SectionTitle>
          <p className="text-lg leading-relaxed mt-8 text-slate-600">
            At Tiimat Solutions, "Learning Excellence" isn't just a phrase; it's the cornerstone of our educational philosophy. We are dedicated to empowering minds through innovative education and technology, ensuring every student has the tools, knowledge, and support to achieve their full potential and make a lasting impact.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r  text-black">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-lg lg:text-xl text-indigo-100 mb-10 leading-relaxed">
            Join a vibrant community of learners and innovators at Tiimat Solutions. Explore our programs or get in touch to start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <Link
              to="/departments" // Or your courses page
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-slate-100 transition-all duration-300 flex items-center justify-center group text-base"
            >
              Explore Our Programs
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2}/>
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 border-2 border-indigo-300 text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-700 hover:border-white transition-all duration-300 flex items-center justify-center group text-base"
            >
              Contact Us
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2}/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs // Added default export for convenience