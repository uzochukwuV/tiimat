import { pinata } from "@/lib/pinata";
import { getCertificate } from "@/services/read";
import { useState } from "react";
import { CheckCircle, XCircle, Loader2, Download } from "lucide-react";

function CheckCertificate() {
    const [certificateImage, setCertificateImage] = useState("");
    const [certificateData, setCertificateData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [verificationStatus, setVerificationStatus] = useState<"unverified" | "verified" | "error">("unverified");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const certificateId = (document.getElementById('certificate-id') as HTMLInputElement).value.trim();
        
        if (!certificateId) {
            setError("Please enter a certificate ID");
            return;
        }

        setIsLoading(true);
        setError("");
        setVerificationStatus("unverified");

        try {
            // Fetch certificate data
            const data = await getCertificate(certificateId);
            
            if (!data) {
                throw new Error("Certificate not found");
            }

            // Fetch certificate image
            const imageResponse = await pinata.gateways.get(data.id);
            const imageUrl = URL.createObjectURL(new Blob([imageResponse.data as Blob], { type: imageResponse.contentType! }));
            
            setCertificateImage(imageUrl);
            setCertificateData(data);
            setVerificationStatus("verified");
        } catch (err) {
            console.error("Verification failed:", err);
            setError(err instanceof Error ? err.message : "Failed to verify certificate");
            setVerificationStatus("error");
        } finally {
            setIsLoading(false);
        }
    };

    const handleDownload = () => {
        if (!certificateImage) return;
        
        const link = document.createElement('a');
        link.href = certificateImage;
        link.download = `certificate-${certificateData?.studentName || certificateData?.id || 'unknown'}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto px-4 py-12">
                {/* Verification Form Section */}
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                            Certificate Verification
                        </h1>
                        <p className="text-lg text-gray-600">
                            Verify the authenticity of your digital certificate
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="certificate-id" className="block text-gray-700 text-lg mb-2 font-medium">
                                    Certificate ID
                                </label>
                                <input
                                    type="text"
                                    id="certificate-id"
                                    className="w-full px-6 py-3 text-lg border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Enter certificate ID"
                                    disabled={isLoading}
                                />
                            </div>

                            {error && (
                                <div className="flex items-center gap-2 p-4 bg-red-50 text-red-600 rounded-lg">
                                    <XCircle className="w-5 h-5" />
                                    <span>{error}</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full text-white text-lg py-3 rounded-lg font-semibold shadow-md transition-all flex items-center justify-center gap-2 ${
                                    isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                                }`}
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Verifying...
                                    </>
                                ) : (
                                    "Verify Certificate"
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Results Section */}
                    {verificationStatus === "verified" && certificateData && (
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            {/* Verification Banner */}
                            <div className="bg-green-50 p-6 border-b border-green-100">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-500" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-green-800">
                                            Certificate Verified
                                        </h3>
                                        <p className="text-green-600">
                                            This certificate has been successfully verified
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Certificate Details */}
                            <div className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-500 mb-1">
                                            Certificate ID
                                        </h4>
                                        <p className="text-gray-900 font-medium">
                                            {certificateData.id}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-500 mb-1">
                                            Student Name
                                        </h4>
                                        <p className="text-gray-900 font-medium">
                                            {certificateData.studentName}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-500 mb-1">
                                            Issued On
                                        </h4>
                                        <p className="text-gray-900 font-medium">
                                            {new Date(certificateData.issuedAt || Date.now()).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                                        Description
                                    </h4>
                                    <p className="text-gray-700">
                                        {certificateData.description}
                                    </p>
                                </div>

                                {/* Certificate Image */}
                                <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
                                    <img 
                                        src={certificateImage} 
                                        alt="Certificate" 
                                        className="w-full h-auto object-contain" 
                                    />
                                </div>

                                {/* Actions */}
                                <div className="flex justify-end">
                                    <button
                                        onClick={handleDownload}
                                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        <Download className="w-5 h-5" />
                                        Download Certificate
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CheckCertificate;