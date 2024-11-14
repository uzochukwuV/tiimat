
const ContactPage = () => {
  return (
    <div className=" h-screen">
      <div className="h-full  ">
      <div className=" h-full pt-12">
            <div autoFocus className=" relative mx-2  flex-1 bg-white rounded-t-xl shadow">
                
                
                </div>
                <div className="h-full p-6 space-y-4">
                    <div>
                    <h3 className="text-black font-bold text-3xl font-['Anta'] pb-1">TIIMAT SOLUTIONS</h3>
                    <p className="text-[#333] font-semibold">Connect with us</p>
                    </div>
                    <div className=" space-y-3">
                        <div>
                            <label htmlFor="name">Your Full Name</label>
                            <input type="text"  id="name" placeholder="" className="w-full px-6 flex-1 block relative rounded-xl focus:outline-gray-300   h-14 border " />
                        </div>
                        <div>
                            <label htmlFor="name">Your Email</label>
                            <input type="text"  id="name" placeholder="" className="w-full px-6 flex-1 block relative rounded-xl focus:outline-gray-300   h-14 border " />
                        </div>
                        <div>
                            <label htmlFor="name">Your Phone Number</label>
                            <input type="text"  id="name" placeholder="" className="w-full px-6 flex-1 block relative rounded-xl focus:outline-gray-300   h-14 border " />
                        </div>
                        <div>
                            <label htmlFor="name">Course of Interest</label>
                            <input type="text"  id="name" placeholder="" className="w-full px-6 flex-1 block relative rounded-xl focus:outline-gray-300   h-14 border " />
                        </div>
                        <div>
                            <label htmlFor="name">Your Location</label>
                            <input type="text"  id="name" placeholder="" className="w-full px-6 flex-1 block relative rounded-xl focus:outline-gray-300   h-14 border " />
                        </div>
                        <div>
                            <button className="hover:border-white block w-full h-14 hover:opacity-90 border border-white px-4 py-2 rounded-xl block bg-black text-white">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      </div>
  
  )
}

export default ContactPage