

function LandingModal() {
   
    return (<>
    <input type="checkbox" className=" hidden" id="modal" />
    <section id="lmodal" className=" animate-in z-50 fixed top-0 left-0 right-0 bottom-0 bg-black/20 ">
        <div className=" h-full flex items-end">
            <div autoFocus className=" relative h-[60vh] flex-1 bg-white rounded-t-xl shadow">
                <div><div className=" w-[20%] bg-indigo-800 h-2 mx-auto mt-1 rounded-full"></div>
                <label htmlFor="modal" className=" absolute right-4 top-0"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0,0,300,150">
<g fill-opacity="0.74118" fill="#a6a5a7" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M25,2c-12.69047,0 -23,10.30953 -23,23c0,12.69047 10.30953,23 23,23c12.69047,0 23,-10.30953 23,-23c0,-12.69047 -10.30953,-23 -23,-23zM25,4c11.60953,0 21,9.39047 21,21c0,11.60953 -9.39047,21 -21,21c-11.60953,0 -21,-9.39047 -21,-21c0,-11.60953 9.39047,-21 21,-21zM32.99023,15.98633c-0.26377,0.00624 -0.51439,0.11645 -0.69727,0.30664l-7.29297,7.29297l-7.29297,-7.29297c-0.18827,-0.19353 -0.4468,-0.30272 -0.7168,-0.30274c-0.40692,0.00011 -0.77321,0.24676 -0.92633,0.62377c-0.15312,0.37701 -0.06255,0.80921 0.22907,1.09303l7.29297,7.29297l-7.29297,7.29297c-0.26124,0.25082 -0.36648,0.62327 -0.27512,0.97371c0.09136,0.35044 0.36503,0.62411 0.71547,0.71547c0.35044,0.09136 0.72289,-0.01388 0.97371,-0.27512l7.29297,-7.29297l7.29297,7.29297c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-7.29297,-7.29297l7.29297,-7.29297c0.29724,-0.28583 0.38857,-0.7248 0.23,-1.10546c-0.15857,-0.38066 -0.53454,-0.62497 -0.94679,-0.61524z"></path></g></g>
</svg></label>
                </div>
                <div className="h-full p-6 space-y-4">
                    <div>
                    <h3 className="text-black font-bold text-3xl font-['Anta'] pb-1">TIIMAT SOLUTIONS</h3>
                    <p className="text-[#333] font-semibold">Let us connect with you</p>
                    </div>
                    <div className=" space-y-3">
                        <div>
                            <label htmlFor="name">Your Full Name</label>
                            <input type="text"  id="name" placeholder="John Doe" className="w-full px-6 flex-1 block relative rounded-xl focus:outline-gray-300   h-14 border " />
                        </div>
                        <div>
                            <label htmlFor="name">Your Email</label>
                            <input type="email"  id="name" placeholder="Johndoe@gmail.com" className="w-full px-6 flex-1 block relative rounded-xl focus:outline-gray-300   h-14 border " />
                        </div>
                        <div>
                            <label htmlFor="name">Phone Number</label>
                            <input type="text"  id="name" placeholder="+234 XXXXXXXXX" className="w-full px-6 flex-1 block relative rounded-xl focus:outline-gray-300   h-14 border " />
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