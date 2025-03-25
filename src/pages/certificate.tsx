import { pinata } from '@/lib/pinata';
import { getCertificate } from '@/services/read';

import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const CertificateVerification = () => {
  const params = useParams()
 
  const [imgSrc, setImgSrc] = useState("")
  const [username, setUsername] = useState("")
  const [description, setDescription] = useState("")

  useEffect(()=>{
    console.log(params.id)
    pinata.gateways.get(params.id!).then((id)=>{
      const newFile = URL.createObjectURL(new Blob([id.data as Blob], {type:id.contentType!}));
      setImgSrc(newFile)
    })
    getCertificate(params.id!).then((cert)=>{
      console.log(cert.username)
      setUsername(cert.username)
      setDescription(cert.description)
    })
  },[])
 

  

 

  return (
    <div className=" min-h-screen py-8">
      <div className="container mx-auto px-4">
        
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            {/* Status Banner */}
            <div className="px-6 py-3 border-l-4 border-green-500 bg-green-100">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-green-700 font-medium">Certificate Verified</p>
                  <p>{username}</p>
                  <p>{description}</p>
                </div>
              </div>
            </div>

            {/* Certificate Image and Username */}
            <div className="p-6 text-center">
              
              <div className="mb-4">
                <img 
                  src={imgSrc} 
                  alt="Certificate" 
                  className="mx-auto rounded border aspect-auto border-gray-200 shadow-sm" 
                />
              </div>
            </div>
          </div>
       
      </div>
    </div>
  );
};

export default CertificateVerification;