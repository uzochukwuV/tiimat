import {  useEffect, useState } from "react"
import {  getAllCourse } from "../services/read";
import { useLoaderData } from "react-router-dom";
import { Trimester, trimesterColumns } from "./data/columns";
import { DataTable } from "./data/data-table";
import { createAdminTimester, deleteAdminTrimester } from "@/services/actions";
import { toast } from "sonner";



export function TrimesterAdmin() {
  const loader = useLoaderData() as Trimester[];
  // const navigate = useNavigate()

  const [option, setOption] = useState({})

  useEffect(()=>{
    getAllCourse()
      .then((data:any)=>{
        setOption(data)
      })
  }, [])
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
  
  return (<>
      <DataTable columns={trimesterColumns} data={loader} deleteItems={handleDelete} create={createAdminTimester} optionInput={option} id="courseId"  />
  </>)
}
