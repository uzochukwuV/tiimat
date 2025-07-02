
import { useLoaderData } from "react-router-dom";
import { DataTable } from "./data/data-table";
import { Certificate, CertificateColumns } from "./data/columns";
import { createAdminCourse } from "@/services/actions";




export function CerticicateAdmin() {
  const loader = useLoaderData() as Certificate[];

  // const navigate = useNavigate()
  const handleDelete=async ()=>{
   
  }
  return (<>
      <DataTable columns={CertificateColumns} data={loader} create={createAdminCourse} deleteItems={handleDelete} optionInput={[]} id="facultyId" />
  </>)
}