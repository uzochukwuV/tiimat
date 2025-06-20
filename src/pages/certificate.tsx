
import { getCertificate } from '@/services/read';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CheckCircle, Download, Share2 } from 'lucide-react';


const CertificateVerification = () => {
  const params = useParams();
  const [imgSrc, setImgSrc] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const certResponse = await getCertificate(params.id!)
      
        
       
        setImgSrc(certResponse.url);
        setUsername(certResponse.username);
        setDescription(certResponse.description);
      } catch (err) {
        setError("Failed to load certificate. Please check the ID and try again.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      if (imgSrc) URL.revokeObjectURL(imgSrc);
    };
  }, [params.id]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imgSrc;
    link.download = `certificate-${username || 'unknown'}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Verifying certificate...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md p-6 bg-white rounded-lg shadow-md text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
            <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h3 className="mt-3 text-lg font-medium text-gray-900">Verification Failed</h3>
          <p className="mt-2 text-sm text-gray-500">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Verification Header */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
          <div className="px-6 py-5 border-b border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-medium text-gray-900">Certificate Verified</h2>
                
                <p className="text-sm text-gray-500">This certificate has been successfully verified on our platform</p>
              </div>
            </div>
          </div>
          
          {/* Certificate Details */}
          <div className="px-6 py-4">
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-500">Recipient</h3>
              <p className="mt-1 text-lg font-semibold text-gray-900">{username}</p>
            </div>
            
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-500">Description</h3>
              <p className="mt-1 text-gray-600">{description}</p>
            </div>
          </div>
        </div>

        {/* Certificate Image */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <img 
                src={imgSrc} 
                alt="Certificate" 
                className="w-full h-auto object-contain" 
              />
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end space-x-3">
            <button
              onClick={handleDownload}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Download className="-ml-1 mr-2 h-5 w-5" />
              Download
            </button>
            <button
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Share2 className="-ml-1 mr-2 h-5 w-5" />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateVerification;