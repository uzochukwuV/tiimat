import { sendMessage } from "@/services/read";
import { useState } from "react";
import { Link } from "react-router-dom";


export const Footer = () => {
  const [formState, setFormState] = useState({}) as any;


  const submitForm = () => {
    console.log(formState);
    sendMessage("Subscription", "", formState.email)
      .then(() => {
        alert("message sent")

      })
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    setFormState((prev: any) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }



return (
  <footer className="bg-[#1E1F21] text-white py-24 px-6 md:px-24">
    <div className=" mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">TIIMAT</h3>
          <p className="text-gray-400">
            Empowering students through innovative online learning solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Comapany</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
            <li><Link to="/departments" className="text-gray-400 hover:text-white">Departments</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            <li><Link to="/dashboard" className="text-gray-400 hover:text-white">Dashboard</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-4">Subscribe to Newsletter</h3>
          <div className="flex flex-col space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={onChange}
              className="bg-gray-800 text-white px-4 py-2 rounded"
            />
            <button
              onClick={submitForm}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} TIIMAT. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

}