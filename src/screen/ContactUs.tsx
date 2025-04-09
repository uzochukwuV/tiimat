
import React from 'react';
import { Label } from "@radix-ui/react-label";
import { toast, Toaster } from "sonner";
import { motion } from "framer-motion";
import { SendIcon } from "lucide-react";

const ContactUs = () => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        toast.success("Message sent successfully!");
        // Handle form submission logic here
        console.log("Form submitted");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="max-w-2xl mx-auto p-8 "
        >
            <Toaster />
            <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                        Name
                    </Label>
                    <input
                        id="name"
                        type="text"
                        className="w-full p-3 border rounded-md bg-white text-black font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                        Email
                    </Label>
                    <input
                        id="email"
                        type="email"
                        className="w-full p-3 border rounded-md bg-white text-black font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                        Message
                    </Label>
                    <textarea
                        id="message"
                        className="w-full p-3 border rounded-md h-32 resize-none bg-white text-black font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#333] text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
                >
                    Send Message
                    <SendIcon size={18} />
                </button>
            </form>
        </motion.div>
    );
};

export default ContactUs;