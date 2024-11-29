import { ChangeEvent, FormEvent, useState } from "react"
import { addSemester } from "../services/read";
import { useLoaderData } from "react-router-dom";



function AddSemester() {
  
    const [onChange, setchange] = useState("") as any;
    const [courseName, setCourseName] = useState("") as any;
    const [topics, setTopic] = useState("") as any;
    const loader = useLoaderData() as any[];
    const [Loading, setLoading] = useState(false) as any;
  
      const addSemesterToCourse = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setLoading(true)
        console.log("adding");
        
       await addSemester(onChange, courseName, topics);
       console.log("adding finied");
       setLoading(false)
      }

      const selectChange =(e:ChangeEvent<HTMLSelectElement>)=>{
        e.preventDefault()
        setchange(e.target.value);
        console.log(e.target.value);
        
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
        
         <h1 className=" -translate-y-8 text-3xl">Add Semester</h1>
            <form onSubmit={addSemesterToCourse} >
            <label htmlFor="topics">Choose Course to add Semester</label>
                <select onChange={selectChange} value={onChange} name="" id="" className=" px-4 h-14 w-full mb-8 block bg-slate-50">
                    {
                        loader!.map((f:any)=>{
                            return (
                            <option key={f.id} value={f.id}> {f.name} </option>
                            )
                        })
                    }
                </select>
                <label htmlFor="title">Title</label>
                <input value={courseName} id="title" onChange={updateName} type="text" placeholder="name for editting (eg: web dev first trimester)" className="w-[80vw] mb-4  px-6 flex-1 block relative rounded-xl focus:outline-gray-300 ring ring-white  h-14  bg-[var(--background)]" />
                <label htmlFor="topics">Description <span className=" text-xs text-blue-800 mt-4"></span></label>
                <input value={topics} id="topics" onChange={updateTopic} type="text" placeholder="Description of trimester to show" className="w-[80vw] placeholder:text-sm  px-6 flex-1 block relative rounded-xl focus:outline-gray-300 ring ring-white  h-14  bg-[var(--background)]" />
                <button disabled={Loading} type="submit" className=" disabled:bg-red-400 mt-4 bg-black hover:opacity-70 px-4 h-14 rounded-xl text-white flex gap-1 justify-center items-center" >Add <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="#fff" width="20" height="20" viewBox="0 0 48 48">
<path d="M 5.4453125 4.0019531 A 1.50015 1.50015 0 0 0 4.109375 6.0644531 L 11.380859 24 L 4.109375 41.935547 A 1.50015 1.50015 0 0 0 6.1699219 43.841797 L 43.169922 25.341797 A 1.50015 1.50015 0 0 0 43.169922 22.658203 L 6.1699219 4.1582031 A 1.50015 1.50015 0 0 0 5.4453125 4.0019531 z M 8.3828125 8.6191406 L 39.146484 24 L 8.3828125 39.380859 L 14.011719 25.5 L 27.5 25.5 A 1.50015 1.50015 0 1 0 27.5 22.5 L 14.011719 22.5 L 8.3828125 8.6191406 z"></path>
</svg></span>
{Loading && "......."}
</button>
              
              
            </form>
        </>
    )
}

export default AddSemester;
