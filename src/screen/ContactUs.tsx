import React, { useState } from 'react';
import { Label } from "@radix-ui/react-label";
import { toast, Toaster } from "sonner";
import { motion } from "framer-motion";
import { SendIcon, MailIcon, UserIcon, MessageSquareIcon, PhoneIcon, MapPinIcon, ClockIcon } from "lucide-react";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitting(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        toast.success("Message sent successfully! We'll get back to you soon.", {
            description: "Thank you for reaching out to TIIMAT."
        });
        
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
        
        setIsSubmitting(false);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <div className="min-h-screen bg-black/5 py-12 px-4">
            <Toaster position="top-right" richColors />
            
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-6xl mx-auto"
            >
                {/* Header Section */}
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h1 className="text-5xl font-bold bg-gradient-to-r   mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Ready to transform your educational journey? We'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Contact Info */}
                    <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Contact Information</h2>
                            
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-indigo-500/10 rounded-xl group-hover:bg-indigo-500/20 transition-colors duration-300">
                                        <MapPinIcon className="text-indigo-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800 mb-1">Address</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            Top floor, Peculiar Plaza, 123 Haruk Road,<br />
                                            by Y-junction Rumuigbo, Port Harcourt
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-green-500/10 rounded-xl group-hover:bg-green-500/20 transition-colors duration-300">
                                        <PhoneIcon className="text-green-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800 mb-1">Phone</h3>
                                        <p className="text-slate-600 text-sm">+234 (0) 123 456 7890</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-indigo-500/10 rounded-xl group-hover:bg-indigo-500/20 transition-colors duration-300">
                                        <MailIcon className="text-indigo-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                                        <p className="text-slate-600 text-sm">hello@tiimat.edu.ng</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-orange-500/10 rounded-xl group-hover:bg-orange-500/20 transition-colors duration-300">
                                        <ClockIcon className="text-orange-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800 mb-1">Office Hours</h3>
                                        <p className="text-slate-600 text-sm">
                                            Mon - Fri: 8:00 AM - 6:00 PM<br />
                                            Sat: 9:00 AM - 2:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Response Promise */}
                        <motion.div 
                            variants={itemVariants}
                            className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl p-6 text-white"
                        >
                            <h3 className="font-semibold text-lg mb-2">Quick Response Guarantee</h3>
                            <p className="text-indigo-100 text-sm leading-relaxed">
                                We typically respond to all inquiries within 24 hours during business days.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div variants={itemVariants} className="lg:col-span-3">
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Send us a Message</h2>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                            <UserIcon size={16} className="text-slate-500" />
                                            Full Name
                                        </Label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full p-4 border border-slate-200 rounded-xl bg-white/50 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-300 placeholder-slate-400"
                                            placeholder="Enter your full name"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                            <MailIcon size={16} className="text-slate-500" />
                                            Email Address
                                        </Label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full p-4 border border-slate-200 rounded-xl bg-white/50 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-300 placeholder-slate-400"
                                            placeholder="your.email@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                            <PhoneIcon size={16} className="text-slate-500" />
                                            Phone Number
                                        </Label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full p-4 border border-slate-200 rounded-xl bg-white/50 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-300 placeholder-slate-400"
                                            placeholder="+234 (0) 123 456 7890"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject" className="text-sm font-medium text-slate-700">
                                            Subject
                                        </Label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="w-full p-4 border border-slate-200 rounded-xl bg-white/50 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-300"
                                            required
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="general">General Inquiry</option>
                                            <option value="admission">Admission Information</option>
                                            <option value="courses">Course Information</option>
                                            <option value="technical">Technical Support</option>
                                            <option value="partnership">Partnership Opportunities</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                        <MessageSquareIcon size={16} className="text-slate-500" />
                                        Message
                                    </Label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full p-4 border border-slate-200 rounded-xl h-32 resize-none bg-white/50 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-300 placeholder-slate-400"
                                        placeholder="Tell us how we can help you..."
                                        required
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Sending Message...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <SendIcon size={20} />
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactUs;