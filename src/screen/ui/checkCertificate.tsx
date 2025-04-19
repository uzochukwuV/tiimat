import { pinata } from "@/lib/pinata";
import { getCertificate } from "@/services/read";
import { useState } from "react";

function CheckCertificate() {
    const [reg, setRed] = useState("")
    const [data, setData] = useState<any>()
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit =async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true)
        const certificateId = (document.getElementById('certificate-id') as HTMLInputElement).value;
        const data = await getCertificate(certificateId);
        console.log(data)
        if(!data){
            alert("Certificate not found")
            return
        }
        
        console.log(`Verifying certificate with ID: ${certificateId}`);
        // You can make an API call or perform any other action needed for verification
        console.log(data.url)
        const id = await pinata.gateways.get(data.id)
        const newFile = URL.createObjectURL(new Blob([id.data as Blob], {type:id.contentType!}));
        setRed(newFile)
        setData(data)
        setIsLoading(false)
    };
  return (
    <div>
        <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-blue-50 to-indigo-100">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 tracking-tight">
                            Certificate Verification
                        </h1>
                    <div className="p-12 bg-white rounded-xl shadow-lg max-w-md w-full mx-4">
                        
                        <form className="space-y-6">
                            <div>
                                <label className="block text-gray-700 text-xl mb-3 font-medium">
                                    Certificate ID
                                </label>
                                <input
                                    type="text"
                                     id="certificate-id"
                                    className="w-full bg-transparent px-6 py-4 text-lg border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Enter certificate ID"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                onClick={handleSubmit}
                                className="w-full bg-blue-600 text-white text-xl py-4 rounded-lg hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-200 font-semibold shadow-md"
                            >
                                 {isLoading ? <span className="animate-spin ml-2">Verifying .. 🔄</span> :"Verify Certificate"}
                            </button>
                        </form>
                    </div>
                </div>
                <div>
                    {
                        reg && (
                            <div className="flex flex-col items-center justify-center mt-8">
                                <h2 className="text-2xl font-bold mb-4">Certificate Details</h2>
                                <img src={reg} alt="Certificate" className="w-full max-w-md rounded-lg shadow-lg" />
                                <p className="mt-4 text-lg font-semibold">Certificate ID: {data.id}</p>
                                <p className="mt-2 text-lg font-semibold">Description: {data.description}</p>
                                <p className="mt-2 text-lg font-semibold">Student Name: {data.studentName}</p>
                            </div>
                        )
                    }
                </div>
    </div>
  )
}

export default CheckCertificate