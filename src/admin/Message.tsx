

import { useLoaderData, useParams } from "react-router-dom";
import { Message, MessageColumns } from "./data/columns";
import { DataTable } from "./data/data-table";
import {  createMessage, deleteAdminTrimester } from "@/services/actions";
import { toast } from "sonner";



export function MessageAdmin() {
  const loader = useLoaderData() as Message[];
  const params = useParams()
  // const navigate = useNavigate()

  const handleDelete=async ( payload:any)=>{
    console.log(payload)
    try {
      await deleteAdminTrimester({payload:payload})
      toast("Item deleted Successfully")
      // navigate(0)
    } catch (error) {
      console.log(error)
      toast("Item delete error try again")
    }
   
  }

  

  const createTrimtester = async ({payload}:any)=>{
    try {
      await createMessage({payload:{...payload, courseId:params.id}})
      toast("Item created Successfully")
      // navigate(0)
    }
    catch (error) {
      console.log(error)
      toast("Item create error try again")
    }
  }
  
  return (<>
      <DataTable columns={MessageColumns} data={loader} deleteItems={handleDelete} create={createTrimtester} optionInput={[]} id="courseId"  />
  </>)
}
