import { getAppData, sendMessage } from "@/services/read";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Facebook, Instagram,   ArrowRight, Mail, Send, LinkedinIcon } from "lucide-react";
import { AppDataType } from "@/services/types";

export const Footer = () => {
  const [formState, setFormState] = useState({}) as any;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [appData, setAppData] = useState<AppDataType| null>(null);

  useEffect(() => {
    getAppData().then((data) => {
     setAppData(data as any);
    })
    // Reset form state on unmount
   
  }, []);

  const submitForm = async () => {
    if (!formState.email) return;
    
    setIsSubmitting(true);
    try {
      await sendMessage(formState);
      alert("Message sent");
      setFormState({});
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormState((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <footer className="relative bg-gradient-to-br from-black via-slate-800 to-black text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.06),transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      
      <div className="relative px-6 md:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            {/* Company Info - Takes more space */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 via-white to-indigo-500 bg-clip-text text-transparent">
                  TIIMAT
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                  Empowering students through innovative education for global impact.
                </p>
              </div>
              
              <div className="flex items-start gap-4 text-slate-300 group">
                <div className="p-2 rounded-lg bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors duration-300">
                  <MapPin className="text-indigo-400 flex-shrink-0" size={20} />
                </div>
                <div className="text-sm leading-relaxed">
                  <span className="block font-medium text-white mb-1">Our Location</span>
                  Top floor, Peculiar Plaza, 123 Haruk Road,<br />
                  by Y-junction Rumuigbo, Port Harcourt
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                {[
                  { icon: Facebook, href: appData?.facebook, color: "hover:bg-indigo-600" },
                  { icon: Instagram, href: appData?.instagram, color: "hover:bg-gradient-to-r hover:from-white hover:to-pink-500" },
                  { icon: LinkedinIcon, href: appData?.linkedin, color: "hover:bg-sky-500" }
                ].map(({ icon: Icon, href, color }, index) => (
                  <Link
                    key={index}
                    to={href!}
                    target="_blank"
                    className={`p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 ${color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/25`}
                  >
                    <Icon size={20} className="text-white" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3 space-y-6">
              <h4 className="text-xl font-semibold text-white relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-indigo-400 to-white rounded-full" />
              </h4>
              <nav className="space-y-3">
                {[
                  { to: "/", label: "Home" },
                  { to: "/departments", label: "Departments" },
                  { to: "/about", label: "About Us" },
                  { to: "/contact", label: "Contact" }
                ].map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className="group flex items-center gap-2 text-slate-300 hover:text-white transition-all duration-300"
                  >
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-indigo-400" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {label}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-white relative mb-3">
                  Stay Connected
                  <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-indigo-400 to-white rounded-full" />
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  Get the latest updates and insights from our educational community.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-white/20 rounded-xl blur-xl group-focus-within:blur-lg transition-all duration-300" />
                  <div className="relative flex">
                    <div className="relative flex-1">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-400 transition-colors duration-300" size={18} />
                      <input
                        type="email"
                        name="email"
                        value={formState.email || ""}
                        placeholder="Enter your email address"
                        onChange={onChange}
                        className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-l-xl px-12 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-400/50 focus:bg-white/10 transition-all duration-300"
                      />
                    </div>
                    <button
                      onClick={submitForm}
                      disabled={!formState.email || isSubmitting}
                      className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-white hover:from-indigo-600 hover:to-white disabled:from-gray-600 disabled:to-gray-700 rounded-r-xl text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <Send size={18} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                      )}
                    </button>
                  </div>
                </div>
                
                <p className="text-xs text-slate-400 leading-relaxed">
                  By subscribing, you agree to receive educational updates and insights. 
                  We respect your privacy and never share your information.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-slate-400 text-sm">
                &copy; {new Date().getFullYear()} TIIMAT. All rights reserved.
              </div>
              <div className="flex gap-6 text-sm text-slate-400">
                <Link to="/privacy" className="hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="hover:text-white transition-colors duration-300">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};