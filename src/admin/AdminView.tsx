import { Link, useLoaderData } from "react-router-dom";
import { deleteCourse, deleteFaculty } from "../services/read";
import { useState } from "react";

function AdminView() {
  const loader = useLoaderData() as [];

  const courses = loader.map((data: any) => data?.courses)
  console.log(loader);


  if (!loader) return ".............";


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
        <h2 className=" mt-24 mb-4 text2xl">All Courses</h2>
        <Courses data={courses} />
      </div>
    </div>
  </div>


}

function AllFaculty(data: any) {
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
  if (data.data.length == 0) return "empty"
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
        data?.data!.map((f: any) => {
          return <tr key={f.id} className="*:text-start">
            <td>{f.name}</td>
            <td className=" h-14 text-xs md:text-sm overflow-hidden">{f.data?.description?.toString().slice(0, 35) || "no description"}</td>
            <td className=" text-xs md:text-sm">{f.data.image.toString().slice(0, 35) || "no image"}</td>
            <td><button disabled={loading} onClick={() => delFaculty(f.id)} className=" text-white">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff6361"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
            </button></td>
          </tr>
        })
      }

    </tbody>
  </table>
}


function Courses(data: any) {
  const [loading, setLoading] = useState(false)
  const delCourse = async (id: string) => {
    let con = confirm("are you sure you want to delete this");

    if (!con) return false
    setLoading(true)
    const isDeleted = await deleteCourse(id)
    if (isDeleted) {
      alert("deleted")
    } else {
      alert("not deleted")
    }
    setLoading(false)
  }
  if (data.data.length == 0) return "empty"
  return <table className="table-auto  *:text-start w-full">
    <thead>
      <tr className="*:text-start">
        <th>Name</th>
        <th>Description</th>
        <th>price</th>
      </tr>
    </thead>
    <tbody>
      {
        data?.data[0].map((e: any) => {
          console.log(e);

          if (e.id)
            return <tr key={e.id} className="text-start">
              {/* <td>{e.data.name}</td>
        <td>{e.id}</td> */}

              <td>{e.data.name}</td>
              <td>{e.data.description.toString().slice(0, 35)}</td>
              <td>{e.data.image.toString().slice(0, 35)}</td>
              <td><button disabled={loading} onClick={() => delCourse(e.id)} className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff6361"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>

              </button></td>

            </tr>
        })
      }

    </tbody>
  </table>
}

export default AdminView;