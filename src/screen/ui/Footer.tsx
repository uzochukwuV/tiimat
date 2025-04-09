import { sendMessage } from "@/services/read";
import { useState } from "react";
import { Link } from "react-router-dom";

import {  MapPin } from "lucide-react";


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
  <footer className="bg-gradient-to-br from-[#1E1F21] to-indigo-950 text-white py-24 px-6 md:px-24">
    <div className=" mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className=" space-y-4">
          <h3 className="text-xl font-bold mb-4">TIIMAT</h3>
          <p
           
          className="text-gray-200 flex items-center gap-4">
            Empowering students through innovative education for global impact .
          </p>
          <p
           
          className="text-gray-200 flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="#fff">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#fff"/>
</svg>
            <span>Facebook</span>
          </p>
          <p
           
          className="text-gray-200 flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="#fff" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1"><path  d="M12.94,1.61V15.78a2.83,2.83,0,0,1-2.83,2.83h0a2.83,2.83,0,0,1-2.83-2.83h0a2.84,2.84,0,0,1,2.83-2.84h0V9.17h0A6.61,6.61,0,0,0,3.5,15.78h0a6.61,6.61,0,0,0,6.61,6.61h0a6.61,6.61,0,0,0,6.61-6.61V9.17l.2.1a8.08,8.08,0,0,0,3.58.84h0V6.33l-.11,0a4.84,4.84,0,0,1-3.67-4.7H12.94Z"/></svg>    <span>Tiktok</span>
          </p>
          <Link to={"https://www.instagram.com/tiimat_solutions/"} 
           
          className="text-gray-200 flex items-center gap-4">
           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="#fff">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#fff"/>
<path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#fff"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#fff"/>
</svg>
           <span>Instagram</span>
             </Link>
             <p
           
          className="text-gray-200 flex items-center gap-4">
            <img width={20} src="https://cdn.prod.website-files.com/62624e283b503f3e68275638/62624e283b503f517c275720_logo--linkedin.svg" loading="lazy" alt="" className="social-icon"></img>
              <span>LinkedIn</span>
            </p>
            <p className=" flex gap-4"> <MapPin /> Peculiar Plaza, 123 Haruk Road, by Y-junction Rumuigbo, Port Harcourt</p>
              </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Comapany</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-200 hover:text-white">Home</Link></li>
            <li><Link to="/departments" className="text-gray-200 hover:text-white">Departments</Link></li>
            <li><Link to="/about" className="text-gray-200 hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="text-gray-200 hover:text-white">Contact</Link></li>
            
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

      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-200">
        <p>&copy; {new Date().getFullYear()} TIIMAT. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

}