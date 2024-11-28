import {  useLoaderData } from "react-router-dom";
import { deleteCourse, deleteFaculty, getCoursesInFaculty } from "../services/read";
import { useEffect, useState } from "react";

function AdminView() {
  const loader = useLoaderData()as any[];

  if (!loader) return ".............";

  return <div className=" col-span-3 px-6 py-8">
  <h2 className=" mb-4 text-2xl font-bold">All faculties</h2>
  <AllFaculty data={loader} />
  <h2 className=" mt-24 mb-4 text2xl">All Courses</h2>
  
  {loader.map((data)=> <FacultyCourses key={data.id} data={data.id} />)}
</div>
}

function AllFaculty({data}:any) {
  const [loading, setLoading] = useState(false)
  const delFaculty = async (id: string) => {
    let con = confirm("are you sure you want to delete this");

    if (!con) return false
    setLoading(true)
    const isDeleted = await deleteFaculty(id)
    if (isDeleted) {
      alert("deleted")
    } else {
      alert("not deleted")
    }
    setLoading(false)
  }
  if (data.length == 0) return "empty"
  return <table className="table-auto *text-start w-full">
    <thead>
      <tr className="*:text-start">
        <th>Name</th>
        <th>Description</th>
        <th>Image</th>
      </tr>
    </thead>
    <tbody>
      {
        data!.map((f: any, i:any) => {
          return <tr key={i}  className="*:text-start border-collapse table-row">
            <td>{f.name}</td>
            <td className=" h-14 text-xs md:text-sm overflow-hidden">{f?.description?.toString().slice(0, 35) || "no description"}</td>
            <td className=" text-xs md:text-sm">{f.image.toString().slice(0, 35) || "no image"}</td>
            <td><button disabled={loading} onClick={() => delFaculty(f.id)} className=" text-white">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff6361"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
            </button></td>
          </tr>
        })
      }

    </tbody>
  </table>
}


const FacultyCourses = ({data}:any)=>{
  const [courses, setCourses] = useState<any>([])
  useEffect(()=>{
    getCoursesInFaculty(data)
      .then((data)=>{
        setCourses(data)
      })
  },[ data])

  console.log(courses);
  
  return  <table className="table-auto  *:text-start w-full">
  <thead>
    <tr className="*:text-start">
      <th>Name</th>
      <th>Description</th>
      <th>price</th>
    </tr>
  </thead>
  <tbody>
    {
      courses.map((data:any)=>{
        return <CourseItem key={data.id} props={data} />
      })
    }
  </tbody>
</table>
}


function CourseItem({props}:any) {
  const [loading, setLoading] = useState(false)

 
  
  const delCourse =  (id: string) => {
    let con = confirm("are you sure you want to delete this");

    if (!con) return false
    setLoading(true)
    deleteCourse(id)
    .then((data)=>{
      console.log(data);
  
    })
    setLoading(false)
  }
  return  <tr key={props.id} className="text-start">

  <td>{props.name}</td>
  <td>{props.description.toString().slice(0, 35)}</td>
  <td>{props?.image?.toString().slice(0, 35)}</td>
  <td><button disabled={loading} onClick={() => delCourse(props.id)} className="text-white">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff6361"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>

  </button></td>

</tr>
}

export default AdminView;