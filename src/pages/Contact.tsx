import { useState } from "react";
import { sendMessage } from "../services/read";

const ContactPage = () => {
    const [formState, setFormState] = useState({}) as any;
    

    const submitForm = (e)=> {
        console.log(formState);
        sendMessage("Connect", formState.name, formState.email, formState.phone, formState.location, formState.info)
            .then((e)=>{
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
                            <input type="text" name="name" onChange={onChange} value={formState.name || ''}  id="name" placeholder="" className="w-full px-6 flex-1 block relative rounded-xl focus:outline-gray-300   h-14 border " />
                        </div>
                        <div>
                            <label htmlFor="name">Your Email</label>
                            <input type="email" name="email" onChange={onChange} value={formState.email || ''}   id="email" placeholder="" className="w-full px-6 flex-1 block relative rounded-xl focus:outline-gray-300   h-14 border " />
                        </div>
                        <div>
                            <label htmlFor="name">Your Phone Number</label>
                            <input type="text" name="phone" onChange={onChange} value={formState.phone || ''}   id="phone" placeholder="" className="w-full px-6 flex-1 block relative rounded-xl focus:outline-gray-300   h-14 border " />
                        </div>
                        <div>
                            <label htmlFor="name">Course of Interest</label>
                            <input type="text" name="info" onChange={onChange} value={formState.info || ''}   id="info" placeholder="" className="w-full px-6 flex-1 block relative rounded-xl focus:outline-gray-300   h-14 border " />
                        </div>
                        <div>
                            <label htmlFor="name">Your Location</label>
                            <input type="text" name="location" onChange={onChange} value={formState.location || ''}   id="location" placeholder="" className="w-full px-6 flex-1 block relative rounded-xl focus:outline-gray-300   h-14 border " />
                        </div>
                        <div>
                            <button onClick={submitForm} className="hover:border-white block w-full h-14 hover:opacity-90 border border-white px-4 py-2 rounded-xl block bg-black text-white">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      </div>
  
  )
}

export default ContactPage