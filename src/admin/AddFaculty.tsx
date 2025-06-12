
import { DataTable } from "./data/data-table";
import { Faculty, facultyColums } from "./data/columns";
import { useLoaderData } from "react-router-dom";
import {  createAdminFaculty, deleteAdminCurriculum } from "@/services/actions";
import { toast } from "sonner";




export function FacultyAdmin() {
  const loader = useLoaderData() as Faculty[];
  // const navigate = useNavigate()
  const handleDelete=async ( payload:any)=>{

    try {
      await deleteAdminCurriculum({payload:payload})
      toast("Item deleted Successfully")
      // navigate(0)
    } catch (error) {
   
      toast("Item delete error try again")
    }
   
  }
  return (<>
      <DataTable columns={facultyColums} data={loader} create={createAdminFaculty} deleteItems={handleDelete} />
  </>)
}
