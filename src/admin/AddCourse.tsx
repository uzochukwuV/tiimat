import { ChangeEvent,   useEffect, useState } from "react"
import { addCourse, getFaculties, getAllCourse } from "../services/read";
import { useLoaderData, useNavigate } from "react-router-dom";
import { DataTable } from "./data/data-table";
import { Course, courseColumns } from "./data/columns";
import { createAdminCourse } from "@/services/actions";
// import useSWR from "swr";
import { deleteAdminCourses } from "@/services/actions";
import { toast } from "sonner";



function AddCourse() {
    const [faculty, setFaculty] = useState([]) as any;
    const [onChange, setchange] = useState("") as any;
    const [formState, setFormState] = useState({
      name:"",
      description:"",
      image:"",
      price:""
    }) as any;
    const [loading, setLoading] = useState(false) ;

    useEffect(()=>{
      getFaculties().then((data)=>{
        setFaculty(data
        )
        
      })
      getAllCourse()
        .then((data)=>{
          console.log(data);
          
        })
    },[faculty])
    
    
      const selectChange =(e:ChangeEvent<HTMLSelectElement>)=>{
        e.preventDefault()
        setchange(e.target.value);
      }
      const updateForm=(e:ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        const {name, value} = e.target
        setFormState((prev:any)=>{
          return {...prev, [name]:value}
        })
      }

      const addcoursetofaculty = async (e:any)=>{
        e.preventDefault()
        setLoading(true)
        console.log(formState);
        
        if(formState.name == "")return
        await addCourse({...formState, facultyId:onChange})
        setLoading(false)
      }


    return (
        <>
        
         <h1 className=" -translate-y-8 text-3xl">Add course</h1>
            <form onSubmit={addcoursetofaculty}>
                <select onChange={selectChange} value={onChange} name="" id="" className=" px-4 h-14 w-full mb-8 block bg-slate-50">
                    {
                        faculty.map((f:any)=>{
                            return (
                            <option key={f.id}  value={f.id}> 
                              
                              {f.name} </option>
                            )
                        })
                    }
                </select>
                <p>Course Name</p>
                <input value={formState.name} onChange={updateForm} name="name" type="text" placeholder="Course" className="w-[80vw]  px-6 flex-1 block relative rounded-xl focus:outline-gray-300 ring ring-white  h-14  bg-[var(--background)]" />
                <input
          value={formState.price}
          name="price"
          onChange={updateForm}
          type="text"
          placeholder="Price"
          className=" mb-2 w-[80vw] px-6 flex-1 block relative rounded-xl focus:outline-gray-300 ring ring-white  h-14  bg-[var(--background)]"
        />
        <input
          value={formState.description}
          onChange={updateForm}
          type="text"
          name="description"
          placeholder="Description"
          className=" px-6 flex-1  w-[80vw] block relative rounded-xl focus:outline-gray-300 ring ring-white  h-14  bg-[var(--background)]"
        />
        <input
          value={formState.image}
          onChange={updateForm}
          type="text"
          name="image"
          placeholder="image Link"
          className=" px-6 flex-1  w-[80vw] block relative rounded-xl focus:outline-gray-300 ring ring-white  h-14  bg-[var(--background)]"
        />
                <button onClick={addcoursetofaculty}  disabled={loading} className=" disabled:bg-red-400 mt-4 bg-black hover:opacity-90 px-4 h-14 rounded-xl text-white flex gap-1 justify-center items-center" >Add <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="#fff" width="20" height="20" viewBox="0 0 48 48">
<path d="M 5.4453125 4.0019531 A 1.50015 1.50015 0 0 0 4.109375 6.0644531 L 11.380859 24 L 4.109375 41.935547 A 1.50015 1.50015 0 0 0 6.1699219 43.841797 L 43.169922 25.341797 A 1.50015 1.50015 0 0 0 43.169922 22.658203 L 6.1699219 4.1582031 A 1.50015 1.50015 0 0 0 5.4453125 4.0019531 z M 8.3828125 8.6191406 L 39.146484 24 L 8.3828125 39.380859 L 14.011719 25.5 L 27.5 25.5 A 1.50015 1.50015 0 1 0 27.5 22.5 L 14.011719 22.5 L 8.3828125 8.6191406 z"></path>
</svg></span></button>
              {loading && "......"}
              
            </form>
        </>
    )
}

export default AddCourse;


export function CourseAdmin() {
  const loader = useLoaderData() as Course[];
  const navigate = useNavigate()
  const handleDelete=async ( payload:any)=>{
    console.log(payload)
    try {
      await deleteAdminCourses({payload:payload})
      toast("Item deleted Successfully")
      navigate(0)
    } catch (error) {
      console.log(error)
      toast("Item delete error try again")
    }
   
  }
  return (<>
      <DataTable columns={courseColumns} data={loader} create={createAdminCourse} deleteItems={handleDelete} />
  </>)
}