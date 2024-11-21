import { useState } from "react";
import { sendMessage } from "../services/read";
import { Link } from "react-router-dom";


export const Footer = () => {
  const [formState, setFormState] = useState({}) as any;
    

    const submitForm = ()=> {
        console.log(formState);
        sendMessage("Subscription", "", formState.email)
            .then(()=>{
                alert("message sent")
                
            })
    }

    const onChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
      e.preventDefault()

      setFormState((prev:any)=> {
          return {...prev,  [e.target.name]: e.target.value}
  })
  }
  return (
   <footer className=" relative px-4 border-t shadow">

      <div className="  space-y-4 md:px-12 md:grid md:grid-cols-2 gap-12 rounded-2xl h-full">
            <div className="space-y-4 flex-1 pt-12  md:px-6 max-w-[500px] ">
            <div className=" space-y-2 mb-12">
              <p className=" text-sm">Email would be enough though</p>
               <div className=" flex gap-2 focus-within:border rounded-xl bg-[var(--background)]">
               <input value={formState.email || ""} onChange={onChange} type="text" name="email" placeholder="Your Email" className=" px-6 flex-1 block relative rounded-xl focus:outline-gray-300 ring ring-white  h-14  bg-[var(--surface)]" />
               <button onClick={submitForm} className=" bg-black hover:opacity-70 px-4 h-14 rounded-xl text-white flex gap-1 justify-center items-center" >Send <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="#fff" width="20" height="20" viewBox="0 0 48 48">
<path d="M 5.4453125 4.0019531 A 1.50015 1.50015 0 0 0 4.109375 6.0644531 L 11.380859 24 L 4.109375 41.935547 A 1.50015 1.50015 0 0 0 6.1699219 43.841797 L 43.169922 25.341797 A 1.50015 1.50015 0 0 0 43.169922 22.658203 L 6.1699219 4.1582031 A 1.50015 1.50015 0 0 0 5.4453125 4.0019531 z M 8.3828125 8.6191406 L 39.146484 24 L 8.3828125 39.380859 L 14.011719 25.5 L 27.5 25.5 A 1.50015 1.50015 0 1 0 27.5 22.5 L 14.011719 22.5 L 8.3828125 8.6191406 z"></path>
</svg></span></button>
               {/* <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/filled-sent.png" alt="filled-sent"/> */}
               </div>
            </div>
          <p className=" uppercase font-medium text-xs text-center">Join the Tiimat <span className=" text-rose-700">community</span></p>
          <div className=" gap-2 flex justify-between *:bg-[var(--background)] *:rounded-xl ">
            <div className=" ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#4535ff" x="0px" y="0px" width="40" height="40" viewBox="0 0 24 24">
    <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
</svg>
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#4535ee" x="0px" y="0px" width="40" height="40" viewBox="0 0 24 24">
    <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
</svg>
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000" x="0px" y="0px" width="40" height="40" viewBox="0 0 24 24">
    <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"></path>
</svg>
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#dd3566" x="0px" y="0px" width="40" height="40" viewBox="0 0 24 24">
    <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
</svg>
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#75eeaa" x="0px" y="0px" width="40" height="40" viewBox="0 0 24 24">
    <path d="M19.077,4.928C17.191,3.041,14.683,2.001,12.011,2c-5.506,0-9.987,4.479-9.989,9.985 c-0.001,1.76,0.459,3.478,1.333,4.992L2,22l5.233-1.237c1.459,0.796,3.101,1.215,4.773,1.216h0.004 c5.505,0,9.986-4.48,9.989-9.985C22.001,9.325,20.963,6.816,19.077,4.928z M16.898,15.554c-0.208,0.583-1.227,1.145-1.685,1.186 c-0.458,0.042-0.887,0.207-2.995-0.624c-2.537-1-4.139-3.601-4.263-3.767c-0.125-0.167-1.019-1.353-1.019-2.581 S7.581,7.936,7.81,7.687c0.229-0.25,0.499-0.312,0.666-0.312c0.166,0,0.333,0,0.478,0.006c0.178,0.007,0.375,0.016,0.562,0.431 c0.222,0.494,0.707,1.728,0.769,1.853s0.104,0.271,0.021,0.437s-0.125,0.27-0.249,0.416c-0.125,0.146-0.262,0.325-0.374,0.437 c-0.125,0.124-0.255,0.26-0.11,0.509c0.146,0.25,0.646,1.067,1.388,1.728c0.954,0.85,1.757,1.113,2.007,1.239 c0.25,0.125,0.395,0.104,0.541-0.063c0.146-0.166,0.624-0.728,0.79-0.978s0.333-0.208,0.562-0.125s1.456,0.687,1.705,0.812 c0.25,0.125,0.416,0.187,0.478,0.291C17.106,14.471,17.106,14.971,16.898,15.554z"></path>
</svg>
            </div>
          </div>
            </div>
          <div className=" flex-1 footer-link  bg-[var(--background)] rounded-xl font-medium">
              <div className="grid gap-4 p-8 row-gap-6 col-gap-8  grid-cols-2">
                <div>
                  <span className=" text-black font-medium text-xl mb-4 block">Solutions</span>
                  <ul className="  text-sm space-y-1 text-[#999]">
                    <li className=" hover:underline underline-offset-2">Programs</li>
                    <li><Link to={"/faculty"}>Faculties</Link></li>
                    <li>Courses</li>
                    <li>Programs</li>
                  </ul>
                </div>
                <div>
                <span className=" text-black font-medium text-xl mb-4 block">Company</span>
                  <ul className=" text-sm space-y-1 text-[#999]">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/contact-us"}>Conatct Us</Link></li>
                    <li><Link to={"/about-us"}>About Us</Link></li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
                <div>
                <span className=" text-black font-medium text-xl mb-4 block">Company</span>
                  <ul className=" text-sm space-y-1 text-[#999]">
                  <Link to={"/admin"} >Company 1</Link>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
          </div>
          
      </div>
      <div className=" text-center space-y-3 py-6">
            <h2 className=" text-center text-xl font-bold">TIIMAT</h2>
            <p className=" text-sm text-[#999] text-center">Innovating Education for global Impact through cutting edge spaced learning and real world practicals</p>
            <p className=" text-xs text-[#999] text-center">@ighofoweexperience</p>
          </div>
   </footer> 
  )
}
