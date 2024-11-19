import { useEffect, useState } from "react"
import { sendMessage } from "../../services/read";


function LandingModal() {
    const [formState, setFormState] = useState({}) as any;
    const [ishidden, sethidden] = useState(false)
    
    useEffect(()=>{
        const sessionStorage = window.sessionStorage.getItem("modalM");
        if(sessionStorage === "true"){
            sethidden(true)
        }
    
    }, [])
    const submitForm = ()=> {
        console.log(formState);
        sendMessage("Connect", formState.name, formState.email, formState.phone)
            .then(()=>{
                alert("message sent")
                window.sessionStorage.setItem("modalM", "true")
                sethidden(true)
            })
    }

    const onChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()

        setFormState((prev:any)=> {
            return {...prev,  [e.target.name]: e.target.value}
    })
    }
    const changeSessionStorage =(e:React.ChangeEvent<HTMLInputElement>)=>{
        window.sessionStorage.setItem("modalM", `${e.target!.checked || "true"}`)
        sethidden(true)
    }
    const changeSessionStorageDiv =()=>{
        window.sessionStorage.setItem("modalM", `${"true"}`)
        sethidden(true)
    }
    if(ishidden) {
        return ""
    };
   
    return (<>
    <input type="checkbox" onChange={changeSessionStorage}  className=" hidden" id="modal" />
    <section id="lmodal" className=" animate-in z-50 fixed top-0 left-0 right-0 bottom-0 bg-black/20 ">
        <div className=" h-full flex flex-col  justify-end">
        <div onClick={changeSessionStorageDiv} className="flex-1  w-full">

</div>
            <div className=" md:flex md:justify-end">
            <div onClick={changeSessionStorageDiv} className="flex-1  w-full">

</div>
            <div autoFocus className="rounded-xl relative h-[70vh] w-full md:w-[45%] md:mb-10 md:me-5  bg-white rounded-t-xl shadow">
                <div><div className=" w-[20%] bg-indigo-800 h-2 mx-auto mt-1 rounded-full"></div>
                <label htmlFor="modal" className=" absolute right-4 top-0"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0,0,300,150">
<g fillOpacity="0.74118" fill="#a6a5a7" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><g transform="scale(5.12,5.12)"><path d="M25,2c-12.69047,0 -23,10.30953 -23,23c0,12.69047 10.30953,23 23,23c12.69047,0 23,-10.30953 23,-23c0,-12.69047 -10.30953,-23 -23,-23zM25,4c11.60953,0 21,9.39047 21,21c0,11.60953 -9.39047,21 -21,21c-11.60953,0 -21,-9.39047 -21,-21c0,-11.60953 9.39047,-21 21,-21zM32.99023,15.98633c-0.26377,0.00624 -0.51439,0.11645 -0.69727,0.30664l-7.29297,7.29297l-7.29297,-7.29297c-0.18827,-0.19353 -0.4468,-0.30272 -0.7168,-0.30274c-0.40692,0.00011 -0.77321,0.24676 -0.92633,0.62377c-0.15312,0.37701 -0.06255,0.80921 0.22907,1.09303l7.29297,7.29297l-7.29297,7.29297c-0.26124,0.25082 -0.36648,0.62327 -0.27512,0.97371c0.09136,0.35044 0.36503,0.62411 0.71547,0.71547c0.35044,0.09136 0.72289,-0.01388 0.97371,-0.27512l7.29297,-7.29297l7.29297,7.29297c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-7.29297,-7.29297l7.29297,-7.29297c0.29724,-0.28583 0.38857,-0.7248 0.23,-1.10546c-0.15857,-0.38066 -0.53454,-0.62497 -0.94679,-0.61524z"></path></g></g>
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
                            <input onChange={onChange} value={formState.name || ""} type="text" name="name"  id="name" placeholder="John Doe" className="w-full px-6 flex-1 block relative rounded-xl focus:outline-gray-300   h-14 border " />
                        </div>
                        <div>
                            <label htmlFor="name">Your Email</label>
                            <input onChange={onChange} value={formState.email || ""} type="email"  id="email" name="email" placeholder="Johndoe@gmail.com" className="w-full px-6 flex-1 block relative rounded-xl focus:outline-gray-300   h-14 border " />
                        </div>
                        <div>
                            <label htmlFor="name">Phone Number</label>
                            <input onChange={onChange} value={formState.phone || ""} type="text"  id="phone" name="phone" placeholder="+234 XXXXXXXXX" className="w-full px-6 flex-1 block relative rounded-xl focus:outline-gray-300   h-14 border " />
                        </div>
                        <div>
                            <button onClick={submitForm} className="hover:border-white block w-full h-14 hover:opacity-90 border border-white px-4 py-2 rounded-xl block bg-black text-white">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>)
}

export default LandingModal;