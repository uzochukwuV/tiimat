

function LandingModal() {
   
    return (<>
    <input type="checkbox" className=" hidden" id="modal" />
    <section id="lmodal" className=" animate-in z-50 fixed top-0 left-0 right-0 bottom-0 bg-black/20 ">
        <div className=" h-full flex items-end">
            <div autoFocus className=" relative h-[60vh] flex-1 bg-white rounded-t-xl shadow">
                <div><div className=" w-[20%] bg-indigo-800 h-2 mx-auto mt-1 rounded-full"></div>
                <label htmlFor="modal" className=" absolute right-4 top-0">cancel</label>
                </div>
                <div className="h-full p-6 space-y-4">
                    <div>
                    <h3 className="text-black font-bold text-3xl font-['Anta'] pb-1">TIIMAT SOLUTIONS</h3>
                    <p className="text-[#333] font-semibold">Let us connect with you</p>
                    </div>
                    <div className=" space-y-3">
                        <div>
                            <label htmlFor="name">Your Full Name</label>
                            <input type="text"  id="name" placeholder="" className="w-full px-6 flex-1 block relative rounded-xl focus:outline-gray-300   h-14 border " />
                        </div>
                        <div>
                            <label htmlFor="name">Your Email</label>
                            <input type="text"  id="name" placeholder="Name" className="w-full px-6 flex-1 block relative rounded-xl focus:outline-gray-300   h-14 border " />
                        </div>
                        <div>
                            <label htmlFor="name">Your Location</label>
                            <input type="text"  id="name" placeholder="Name" className="w-full px-6 flex-1 block relative rounded-xl focus:outline-gray-300   h-14 border " />
                        </div>
                        <div>
                            <button className="hover:border-white block w-full h-14 hover:opacity-90 border border-white px-4 py-2 rounded-xl block bg-black text-white">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>)
}

export default LandingModal;