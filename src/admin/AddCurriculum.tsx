import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { addCurriculum, getAllSemester } from "../services/read";
import {  useLoaderData } from "react-router-dom";
import { Curriculum, curriculumColumns } from "./data/columns";
import { DataTable } from "./data/data-table";
import { createAdminCurriculum, deleteAdminCurriculum } from "@/services/actions";
import { toast } from "sonner";



function AddCurriculum() {
  
    const [onChange, setchange] = useState("") as any;
    const [courseName, setCourseName] = useState("") as any;
    const [topics, setTopic] = useState("") as any;
    const loader = useLoaderData() as any[];
   
    
    useEffect(()=>{
      console.log(loader);
      
    setchange(loader![0]?.id)
  },[])

   

      const addCurriculumToCourse = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        addCurriculum(onChange, courseName, topics).then((data)=>{
            console.log(data);
            alert("Curriculum Added")
            
        })
      }

      const selectChange =(e:ChangeEvent<HTMLSelectElement>)=>{
        e.preventDefault()
        setchange(e.target.value);
      }
      const updateName=(e:ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setCourseName(e.target.value);
      }

      const updateTopic=(e:ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setTopic(e.target.value);
      }


    return (
        <>
       
         <h1 className=" -translate-y-8 text-3xl">Add Curriculum</h1>
            <form onSubmit={addCurriculumToCourse}>
            <label htmlFor="topics">Choose Course to add Curriculum</label>
                <select onChange={selectChange} value={onChange} name="" id="" className=" px-4 h-14 w-full mb-8 block bg-slate-50">
                    {
                        loader!.map((f:any)=>{
                            return (
                            <option key={f.id} value={f.id}> {f.data.name} </option>
                            )
                        })
                    }
                </select>
                <label htmlFor="title">Title</label>
                <input value={courseName} id="title" onChange={updateName} type="text" placeholder="title" className="w-[80vw] mb-4  px-6 flex-1 block relative rounded-xl focus:outline-gray-300 ring ring-white  h-14  bg-[var(--background)]" />
                <label htmlFor="topics">Topics <span className=" text-xs text-blue-800 mt-4">separted by @</span></label>
                <input value={topics} id="topics" onChange={updateTopic} type="text" placeholder="Introduction to Game Engine @ Basics of Gaming" className="w-[80vw] placeholder:text-sm  px-6 flex-1 block relative rounded-xl focus:outline-gray-300 ring ring-white  h-14  bg-[var(--background)]" />
                <button type="submit" className=" mt-4 bg-black disabled:bg-red-400 hover:opacity-70 px-4 h-14 rounded-xl text-white flex gap-1 justify-center items-center" >Add <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="#fff" width="20" height="20" viewBox="0 0 48 48">
<path d="M 5.4453125 4.0019531 A 1.50015 1.50015 0 0 0 4.109375 6.0644531 L 11.380859 24 L 4.109375 41.935547 A 1.50015 1.50015 0 0 0 6.1699219 43.841797 L 43.169922 25.341797 A 1.50015 1.50015 0 0 0 43.169922 22.658203 L 6.1699219 4.1582031 A 1.50015 1.50015 0 0 0 5.4453125 4.0019531 z M 8.3828125 8.6191406 L 39.146484 24 L 8.3828125 39.380859 L 14.011719 25.5 L 27.5 25.5 A 1.50015 1.50015 0 1 0 27.5 22.5 L 14.011719 22.5 L 8.3828125 8.6191406 z"></path>
</svg></span></button>
               {/* <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/filled-sent.png" alt="filled-sent"/> */}
              
            </form>

            {/* {
              loader.map((data)=>{
                return <div id={data.id} className=" grid grid-cols-2 mt-6">
                    <p>{data?.data.name}</p>
                    <p>{data?.data.courseId||"no id"}</p>
                    <button onClick={()=>delSemester(data?.id)} className=" btn border bg-red-200">del </button>
                </div>
              })
            } */}
        </>
    )
}

export default AddCurriculum;


export function CurriculumAdmin() {
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
    console.log(payload)
    try {
      await deleteAdminCurriculum({payload:payload})
      toast("Item deleted Successfully")
      // navigate(0)
    } catch (error) {
      console.log(error)
      toast("Item delete error try again")
    }
   
  }
  return (<>
      <DataTable columns={curriculumColumns} data={loader} create={createAdminCurriculum} deleteItems={handleDelete} optionInput={option} id="semesterId" />
  </>)
}