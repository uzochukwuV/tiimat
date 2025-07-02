
import { useLoaderData } from "react-router-dom";
import { DataTable } from "./data/data-table";
import { Certificate, CertificateColumns } from "./data/columns";
import { createAdminCourse, deleteAdminCertificate } from "@/services/actions";
import { toast } from "sonner";




export function CerticicateAdmin() {
  const loader = useLoaderData() as Certificate[];

  // const navigate = useNavigate()
  const handleDelete=async (payload:any)=>{
    try {
         await deleteAdminCertificate({payload:payload})
         toast("Item deleted Successfully")
         // navigate(0)
       } catch (error) {
        
         toast("Item delete error try again")
       }
  }
  return (<>
      <DataTable columns={CertificateColumns} data={loader} create={createAdminCourse} deleteItems={handleDelete} optionInput={[]} id="facultyId" />
  </>)
}