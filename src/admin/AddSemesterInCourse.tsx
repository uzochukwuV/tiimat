import {  useEffect, useState } from "react"
import {  getAllCourse } from "../services/read";
import { useLoaderData, useParams } from "react-router-dom";
import { Trimester, trimesterColumns } from "./data/columns";
import { DataTable } from "./data/data-table";
import { createAdminTimester, deleteAdminTrimester } from "@/services/actions";
import { toast } from "sonner";



export function SemesterCourseAdmin() {
  const loader = useLoaderData() as Trimester[];
  const params = useParams()
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

  const createTrimtester = async ({payload}:any)=>{
    try {
      await createAdminTimester({payload:{...payload, courseId:params.id}})
      toast("Item created Successfully")
      // navigate(0)
    }
    catch (error) {
      console.log(error)
      toast("Item create error try again")
    }
  }
  
  return (<>
      <DataTable columns={trimesterColumns} data={loader} deleteItems={handleDelete} create={createTrimtester} optionInput={option} id="courseId"  />
  </>)
}
