import { ChangeEvent, FormEvent, useState } from "react"
import {  addFaculty } from "../services/read";
import { DataTable } from "./data/data-table";
import { Faculty, facultyColums } from "./data/columns";
import { useLoaderData } from "react-router-dom";



function AddFaculty() {
    const [facultyName, setFacultyName] = useState("") as any;
    const [facultyDesc, setFacultyDesc] = useState("") as any;
    const [facultyImg,setFacultyImg] = useState("") as any;


   

      const addcoursetofaculty = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        addFaculty(facultyName, facultyDesc, facultyImg).then(()=>{
            setFacultyDesc("")
            setFacultyImg("")
            setFacultyName("")
        })
      }

     
      const updateName=(e:ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setFacultyName(e.target.value);
      }
      const updateDesc=(e:ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setFacultyDesc(e.target.value);
      }
      const updateImg=(e:ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setFacultyImg(e.target.value);
      }


    return (
        <>
        
         <h1 className=" -translate-y-8 text-3xl">Add Faculty</h1>
            <form onSubmit={addcoursetofaculty}>
                
                <p>Faculty Name</p>
                <input value={facultyName} onChange={updateName} type="text" placeholder="Faculty name" className="w-[80vw] mb-4 px-6 flex-1 block relative rounded-xl focus:outline-gray-300 ring ring-white  h-14  bg-[var(--background)]" />
                <input value={facultyDesc} onChange={updateDesc} type="text" placeholder="Description" className="w-[80vw] mb-4 px-6 flex-1 block relative rounded-xl focus:outline-gray-300 ring ring-white  h-14  bg-[var(--background)]" />
                <input value={facultyImg} onChange={updateImg} type="text" placeholder="Faculty image" className="w-[80vw]  px-6 flex-1 block relative rounded-xl focus:outline-gray-300 ring ring-white  h-14  bg-[var(--background)]" />
                <button type="submit" className=" mt-4 bg-black hover:opacity-70 px-4 h-14 rounded-xl text-white flex gap-1 justify-center items-center" >Add <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="#fff" width="20" height="20" viewBox="0 0 48 48">
<path d="M 5.4453125 4.0019531 A 1.50015 1.50015 0 0 0 4.109375 6.0644531 L 11.380859 24 L 4.109375 41.935547 A 1.50015 1.50015 0 0 0 6.1699219 43.841797 L 43.169922 25.341797 A 1.50015 1.50015 0 0 0 43.169922 22.658203 L 6.1699219 4.1582031 A 1.50015 1.50015 0 0 0 5.4453125 4.0019531 z M 8.3828125 8.6191406 L 39.146484 24 L 8.3828125 39.380859 L 14.011719 25.5 L 27.5 25.5 A 1.50015 1.50015 0 1 0 27.5 22.5 L 14.011719 22.5 L 8.3828125 8.6191406 z"></path>
</svg></span></button>
               {/* <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/filled-sent.png" alt="filled-sent"/> */}
              
            </form>
        </>
    )
}

export default AddFaculty;


export function FacultyAdmin() {
  const loader = useLoaderData() as Faculty[];
  return (<>
      <DataTable columns={facultyColums} data={loader} />
  </>)
}
