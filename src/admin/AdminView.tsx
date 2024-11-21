import { Link, useLoaderData } from "react-router-dom";
import { deleteCourse, deleteFaculty } from "../services/read";
import { useState } from "react";

function  AdminView() {
    const loader = useLoaderData() as [];
  
    const courses = loader.map((data:any)=> data?.courses)
    console.log(loader);
    
    
    if(!loader) return ".............";
   
    
    return <div className="absolute top-0 right-0 left-0 bottom-0 flex flex-col ">
        <div className="h-14">

        </div>
        <div className="sm:grid sm:grid-cols-4 w-full flex-1 ">
        <div className=" col-span-1  sm:ps-12 *:text-sm space-x-3 *:bg-blue-50 *:rounded-xl *:px-6 *:py-2 space-y-4 *:block flex md:flex-col flex-wrap ">
            <></>
            <Link to={"/admin/course/edit/curriculum"} >Edit curriculum</Link>
        <Link to={"/admin/course/add"} >Add Course</Link>
        <Link to={"/admin/course/edit/"} >Edit course</Link>
        <Link to={"/admin/faculty/add"} >Add Faculty(dont add) </Link>
        <Link to={"/admin"}>Admin</Link>
        </div>
        <div className=" col-span-3 px-6">
          <h2 className=" mb-4 text2xl">All faculties</h2>
            <AllFaculty data={loader} />
            <h2 className=" mb-4 text2xl">All Courses</h2>
            <Courses data={courses} />
        </div>
        </div>
    </div>


}

function AllFaculty(data:any) {
    const [loading, setLoading]= useState(false)
    const delFaculty= async(id:string)=>{
      setLoading(true)
        const isDeleted = await deleteFaculty(id)
        if(isDeleted){
          alert("deleted")
        }else {
          alert("not deleted")
        }
        setLoading(false)
    }
     if(data.data.length ==0) return "empty"
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
    data?.data!.map((f:any)=>{
        return  <tr key={f.id} className="*:text-start">
        <td>{f.name}</td>
        <td className=" h-14 text-xs md:text-sm overflow-hidden">{f.data?.description?.toString().slice(0,125) ||"no description"}</td>
        <td className=" text-xs md:text-sm">{f.data.image|| "no image"}</td>
        <td><button disabled={loading} onClick={()=>delFaculty(f.id)} className=" bg-red-500 text-white">del</button></td>
      </tr>
    })
   }
    
  </tbody>
</table>
}


function Courses(data:any) {
  const [loading, setLoading]= useState(false)
  const delCourse= async(id:string)=>{
    setLoading(true)
      const isDeleted = await deleteCourse(id)
      if(isDeleted){
        alert("deleted")
      }else {
        alert("not deleted")
      }
      setLoading(false)
  }
   if(data.data.length ==0) return "empty"
    return <table className="table-auto *:text-start w-full">
  <thead>
    <tr className="*:text-start">
      <th>Name</th>
      <th>Description</th>
      <th>price</th>
    </tr>
  </thead>
  <tbody>
    {
      data?.data[0].map((e:any)=>{
        console.log(e);
        
        if(e.id)
        return <tr key={e.id} className="text-start">
        {/* <td>{e.data.name}</td>
        <td>{e.id}</td> */}
        <td>{loading?"Loading ..":"done"}</td>
        <td><button disabled={loading} onClick={()=>delCourse(e.id)} className=" bg-red-500 text-white">del</button></td>
      
      </tr>
      })
    }
    
  </tbody>
</table>
}

export default AdminView;