import { useEffect, useState } from "react"
import {  getAllSemester } from "../services/read";
import {  useLoaderData } from "react-router-dom";
import { Curriculum, curriculumColumns } from "./data/columns";
import { DataTable } from "./data/data-table";
import { createAdminCurriculum, deleteAdminCurriculum } from "@/services/actions";
import { toast } from "sonner";




export function CurriculumInTrimesterAdmin() {
  const loader = useLoaderData() as Curriculum[];
  // const navigate = useNavigate()

  const [option, setOption] = useState({})

  useEffect(()=>{
    getAllSemester()
      .then((data:any)=>{
        setOption(data)
      })
  }, [])
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
      <DataTable columns={curriculumColumns} data={loader} create={createAdminCurriculum} deleteItems={handleDelete} optionInput={option} id="semesterId" />
  </>)
}