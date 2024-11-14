import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Connect = () => {
    const [modal, setModal] = useState(false)
     useGSAP(()=> {
    gsap.to(".connect", {y:"100%", opacity:0, duration:"3s", ease:"back.in", delay:2},)
  }, [])
  

  useEffect(() => {
    setTimeout(() => {
      setModal(true)
    }, 5000);
  }, [])
  
  
    if(modal)
  return (
    <div>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        {/* <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  --> */}
        <div
          id="connect"
          className={`fixed inset-0 bg-black/90 transition-opacity ${modal? " ease-out duration-300 opacity-100": " opacity-0 duration-200"} ` }
          aria-hidden="true"
        ></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            {/* <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      --> */}
            <div className={`relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl ${modal? " opacity-100 translate-y-0 sm:scale-100 ease-out duration-300": " opacity-0 translate-y-24 sm:translate-y-0 sm:scale-95 ease-in duration-200"}`}>
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className=" flex justify-end">
                  <button className=" cursor-pointer" onClick={()=> setModal(false)}>

                  
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--surface)"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </button>
                </div>
                <div className="sm:flex flex-col sm:items-start">
                  <div className="mt-3 text-center sm:mx-4 sm:mt-0 sm:text-left">
                    <h3
                      className="text-base font-semibold leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Let Us connect with You
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Get Updates and Promotions from us
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 sm:ml-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 w-full sm:pe-8">
                  <div className="sm:col-span-6 ">
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="first-name"
                        placeholder="Your Email"
                        autoComplete="email"
                        className="block w-full rounded-md bg-transparent border-0 py-4 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-400 focus:outline-none   sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-6">
                    <div className="">
                      <input
                        type="text"
                        name="phone"
                        id="phone-number"
                        placeholder="Your Phone Number"
                        autoComplete="phone number"
                        className="block w-full rounded-md bg-transparent border-0 py-4 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-400 focus:outline-none   sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                </div>
                
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
                >
                  Send Info
                </button>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
