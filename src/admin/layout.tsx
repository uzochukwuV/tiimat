import { Link } from "react-router-dom";
import {Outlet} from "react-router-dom";
export function AdminLayout() {
    
  
    return <div className="absolute top-0 right-0 left-0 bottom-0 flex flex-col ">
      <div className=" border-b px-8 py-4">
          <h1 className=" text-lg font-semibold">Short term admin</h1>
      </div>
      <div className="sm:grid sm:grid-cols-4 w-full flex-1 ">
        <div className=" col-span-1 flex overflow-scroll py-6 px-6 md:flex md:overflow-hidden md:flex-col md:gap-4 md: ">
         <div className=""><Link className=" min-w-40 text-center block text-black hover:underline md:text-start md:shadow md:px-6 md:py-1  " to={"/admin/course/edit/curriculum"}  >Edit curriculum</Link></div> 
         <div className=""><Link className=" min-w-40 text-center block text-black hover:underline md:text-start md:shadow md:px-6 md:py-1 " to={"/admin/course/add"} >Add Course</Link></div> 
         <div className=""><Link className=" min-w-40 text-center block text-black hover:underline md:text-start md:shadow md:px-6 md:py-1 " to={"/admin/faculty/add"} >Add Faculty </Link></div> 
         <div className=""><Link className=" min-w-40 text-center block text-black hover:underline md:text-start md:shadow md:px-6 md:py-1 " to={"/admin"}>Admin</Link></div> 
         <div className=""><Link className=" min-w-40 text-center block text-black hover:underline md:text-start md:shadow md:px-6 md:py-1 " to={"/admin/course/semester/add"}>Add semester</Link></div> 
        </div>
      <div className=" col-span-3 px-6 py-8">
      <Outlet />
      </div>
         
      </div>
    </div>
  
  
  }