

import { uploadFile } from "@/lib/supabase";
import { createAdminCertificate } from "@/services/actions";
import QrCode from "qrcode";
import {   useRef, useState } from "react";



const SIZE: number = 300;

export function CreateCertificate() {
    const [qrCodeData,setQrCodeData]=useState<string>("")
    const [reg, setRed] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [isUp, setIsUp] = useState(false);
    const imageRef = useRef(null);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        const name = (document.getElementById('name') as HTMLInputElement).value
        const description = (document.getElementById('description') as HTMLInputElement).value
        const image = (document.getElementById('image') as HTMLInputElement).files![0]
        const res = await uploadFile("tiimat", "certificate", image);
        
        const newFile = URL.createObjectURL(image);
        setRed(newFile)
        setIsUp(true)
        await createAdminCertificate({studentName : name, description:description,url: res.fullPath, id:res.id})
        
        const qrCodeDataUrl = await QrCode.toDataURL(`https://www.tiimatsolutions.com/certificate/${res.id}`, {
          width: SIZE,
        });
        setQrCodeData(qrCodeDataUrl);
        setIsLoading(false)
      }


     
    
  return (
    <>
     <h1 className=" px-6">Create Certificate</h1>
    
    <div className=" flex justify-center flex-wrap">
       
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="space-y-6 w-full max-w-md mx-auto p-6  rounded-lg shadow-md">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Student Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-transparent px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea 
                  id="description" 
                  className="w-full bg-transparent px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                ></textarea>
              </div>

              <div className="space-y-2">
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  Certficate
                </label>
                <input 
                  type="file" 
                  id="image" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  accept="image/*"
                />
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                 {isLoading? " Creating Certificate ....":"Create Certificate"}
              </button>
            </div>
        </form>
        
        {qrCodeData && isUp && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6">
          <button onClick={()=>setIsUp(false)}>hello</button>
          <img  src={reg} width={300} alt="" />
          <div className=" ">
          <img
            ref={imageRef}
            src={qrCodeData}
            alt="Generated QR Code"
            width={SIZE}
            height={SIZE}
          />

          <div className="flex gap-5">
            <a
              download
              href={qrCodeData}
              className="bg-sky-500 px-4 py-3 rounded text-white"
            >
              Download QR Code
            </a>

            <button
              // onClick={handleCopyImage}
              className="bg-green-600 py-3 px-4 rounded text-white"
              
            >
              Copy Image
            </button>
          </div>
          </div>
        </div>
      )}
    
     
    </div>
    </>
  )
}

export default CreateCertificate