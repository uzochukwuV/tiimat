import { ChangeEvent, FormEvent,  useEffect, useState } from "react"
import { addCourse, getFaculties, getAllCourse } from "../services/read";
import { Link } from "react-router-dom";
import useSWR from "swr";



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
    },[])
    
    
      const selectChange =(e:ChangeEvent<HTMLSelectElement>)=>{
        e.preventDefault()
        setchange(e.target.value);
      }
      const updateForm=(e:ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        const {name, value} = e.target
        setFormState((prev)=>{
          return {...prev, [name]:value}
        })
      }

      const addcoursetofaculty = (e:any)=>{
        e.preventDefault()
        setLoading(true)
        console.log(formState);
        
        if(formState.name == "")return
        addCourse({...formState, facultyId:onChange}).then(()=>{
          setLoading(false)
        })
      }


    return (
        <>
        <div className=" flex justify-end gap-2 z-50 absolute top-20 *:text-blue-400 *:underline">
        <Link to={"/admin/course/edit/curriculum"} >Edit curriculum</Link>
        <Link to={"/admin/course/add"} >Add Course</Link>
        <Link to={"/admin/course/edit/"} >Edit course</Link>
        <Link to={"/admin/faculty/add"} >Add Faculty(dont add) </Link>
        
        </div>
         <h1 className=" -translate-y-8 text-3xl">Add course</h1>
            <form onSubmit={addcoursetofaculty} method="post">
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
                <button onClick={addcoursetofaculty}  disabled={loading} className=" mt-4 bg-black hover:opacity-70 px-4 h-14 rounded-xl text-white flex gap-1 justify-center items-center" >Add <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="#fff" width="20" height="20" viewBox="0 0 48 48">
<path d="M 5.4453125 4.0019531 A 1.50015 1.50015 0 0 0 4.109375 6.0644531 L 11.380859 24 L 4.109375 41.935547 A 1.50015 1.50015 0 0 0 6.1699219 43.841797 L 43.169922 25.341797 A 1.50015 1.50015 0 0 0 43.169922 22.658203 L 6.1699219 4.1582031 A 1.50015 1.50015 0 0 0 5.4453125 4.0019531 z M 8.3828125 8.6191406 L 39.146484 24 L 8.3828125 39.380859 L 14.011719 25.5 L 27.5 25.5 A 1.50015 1.50015 0 1 0 27.5 22.5 L 14.011719 22.5 L 8.3828125 8.6191406 z"></path>
</svg></span></button>
               {/* <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/filled-sent.png" alt="filled-sent"/> */}
              
            </form>
        </>
    )
}

export default AddCourse;