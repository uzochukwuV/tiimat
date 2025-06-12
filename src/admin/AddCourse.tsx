import { useEffect, useState } from "react"
import {  getFaculties } from "../services/read";
import { useLoaderData } from "react-router-dom";
import { DataTable } from "./data/data-table";
import { Course, courseColumns } from "./data/columns";
import { createAdminCourse } from "@/services/actions";
// import useSWR from "swr";
import { deleteAdminCourses } from "@/services/actions";
import { toast } from "sonner";



export function CourseAdmin() {
  const loader = useLoaderData() as Course[];
  const [faculty, setfaculty] = useState({})

  useEffect(()=>{
    getFaculties()
      .then((data:any)=>{
        setfaculty(data)
      })
  }, [])
  // const navigate = useNavigate()
  const handleDelete=async ( payload:any)=>{
 
    try {
      await deleteAdminCourses({payload:payload})
      toast("Item deleted Successfully")
      // navigate(0)
    } catch (error) {
     
      toast("Item delete error try again")
    }
   
  }
  return (<>
      <DataTable columns={courseColumns} data={loader} create={createAdminCourse} deleteItems={handleDelete} optionInput={faculty} id="facultyId" />
  </>)
}