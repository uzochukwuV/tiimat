import { pinata } from "@/lib/pinata";

import { createAdminCertificate, getAllCertificate } from "@/services/actions";
import QrCode from "qrcode";
import {  useEffect, useRef, useState } from "react";
import { toast, Toaster } from "sonner";


const SIZE: number = 300;

export function CreateCertificate() {
    const [qrCodeData,setQrCodeData]=useState<string>("")
    const [reg, setRed] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<any[]>([])
    const [isUp, setIsUp] = useState(false);
    const imageRef = useRef(null);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        const name = (document.getElementById('name') as HTMLInputElement).value
        const description = (document.getElementById('description') as HTMLInputElement).value
        const image = (document.getElementById('image') as HTMLInputElement).files![0]
        const url = await pinata.upload.file(image);
        const id = await pinata.gateways.get(url.IpfsHash)
        const newFile = URL.createObjectURL(new Blob([id.data as Blob], {type:id.contentType!}));
        setRed(newFile)
        setIsUp(true)
        
        const qrCodeDataUrl = await QrCode.toDataURL(`https://www.tiimatsolutions.com/certificate/${url.IpfsHash}`, {
          width: SIZE,
        });
        setQrCodeData(qrCodeDataUrl);
        try {
        
          await createAdminCertificate({studentName : name, description:description,url: `${import.meta.env.VITE_GATEWAY_URL}/${url.IpfsHash}`, id:url.IpfsHash})
        } catch (error) {
        
          toast.error("Failed to create certificate")
        }
        setIsLoading(false)
      }


      useEffect(() => {
        getAllCertificate().then((data) => {
          
          setData(data)
          
        }).catch((error) => {
          
        })
      }, [])
    
  return (
    <>
     <h1>Create Certificate</h1>
    <Toaster />
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
      <div className=" border-r bg-black mx-6"></div>
      <div>
        <h1>All Certs</h1>
          {
            data.map((data:any) => {
              return (
                <div key={data.id} className="flex flex-col gap-5 p-4 bg-white rounded-lg shadow-md m-4">
                  <img src={data.url} alt="" />
                  <p>{data.id}</p>
                  <h1>{data.studentName}</h1>
                  <p>{data.description}</p>
                </div>
              )
            })
          }
      </div>
    </div>
    </>
  )
}

export default CreateCertificate