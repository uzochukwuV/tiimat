import { useState } from "react";
import { sendMessage } from "../services/read";

const ContactPage = () => {
    const [formState, setFormState] = useState({}) as any;
    

    const submitForm = ()=> {
        console.log(formState);
        if(formState.name === '') return
        if(formState.email === '') return
        sendMessage("Connect", formState.name, formState.email, formState.phone, formState.location, formState.info)
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
    <div className=" min-h-screen py-8 bg-zinc-50  bg-cover">
      <div className="h-full  max-w-2xl my-8 border   mx-6 backdrop-opacity-60  mx-auto rounded-xl ">
      <div className=" h-full z-50 pt-12 bg-white rounded-xl">
                <form className="h-full bg-white px-6 space-y-4 ">
                    <div>
                    <h3 className=" text-3xl pb-1 text-[#020202]">TIIMAT SOLUTIONS</h3>
                    <p className="text-[#020202]">Connect with us</p>
                    </div>
                    <div className=" *:text-[#000] space-y-3 pb-6">
                        <div>
                            <label htmlFor="name">Your Full Name</label>
                            <input type="text" required name="name" onChange={onChange} value={formState.name || ''}  id="name" placeholder="" className="w-full px-6 bg-transparent flex-1 block relative rounded-xl focus:outline-gray-300   h-14 border " />
                        </div>
                        <div>
                            <label htmlFor="name">Your Email</label>
                            <input type="email" required name="email" onChange={onChange} value={formState.email || ''}   id="email" placeholder="" className="w-full px-6 bg-transparent flex-1 block relative rounded-xl focus:outline-gray-300   h-14 border " />
                        </div>
                        <div>
                            <label htmlFor="name">Your Phone Number</label>
                            <input type="text" required name="phone" onChange={onChange} value={formState.phone || ''}   id="phone" placeholder="" className="w-full px-6 bg-transparent flex-1 block relative rounded-xl focus:outline-gray-300   h-14 border " />
                        </div>
                        <div>
                            <label htmlFor="name">Course of Interest</label>
                            <input type="text" name="info" onChange={onChange} value={formState.info || ''}   id="info" placeholder="" className="w-full px-6 bg-transparent flex-1 block relative rounded-xl focus:outline-gray-300   h-14 border " />
                        </div>
                        <div>
                            <label htmlFor="name">Your Location</label>
                            <input type="text" name="location" onChange={onChange} value={formState.location || ''}   id="location" placeholder="" className="w-full px-6 bg-transparent flex-1 block relative rounded-xl focus:outline-gray-300   h-14 border " />
                        </div>
                        <div>
                            <button onSubmit={submitForm} className="hover:border-white block w-full h-14 hover:opacity-90 b px-4 py-2 rounded-xl block bg-indigo-700 text-white">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
      </div>
      </div>
  
  )
}

export default ContactPage