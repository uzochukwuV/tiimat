
import { DataTable } from "./data/data-table";
import { appDataColumns } from "./data/columns";
import { useLoaderData } from "react-router-dom";
import {  updateAppData } from "@/services/actions";
import { toast } from "sonner";
import { AppDataType } from "@/services/types";




export function AppAdmin() {
  const loader = useLoaderData() as AppDataType[];
  // const navigate = useNavigate()
  const handleDelete=async ()=>{
  
    try {
    //   await deleteAdminCurriculum({payload:payload})
      toast("Item deleted Successfully")
      // navigate(0)
    } catch (error) {
   
      toast("Item delete error try again")
    }
   
  }
  return (<>
      <DataTable columns={appDataColumns} data={loader} create={updateAppData} deleteItems={handleDelete} />
  </>)
}
