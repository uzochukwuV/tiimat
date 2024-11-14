import {
  ChangeEvent,
  FormEvent,
  useState,
} from "react";
import {  updateCourse } from "../services/read";
import { useLoaderData } from "react-router-dom";

function EditCourse() {
  
  const [onChange, setchange] = useState("") as any;
  const [price, setprice] = useState("") as any;
  const [desc, setdesc] = useState("") as any;
  const loader = useLoaderData();

  

  const UpdateCourse = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateCourse(onChange,price,desc).then((e)=>{
      console.log();
      
    })
  };

  const selectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setchange(e.target.value);
  };
  const updateValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.name === "price") {
      setprice(e.target.value);
    } else {
      setdesc(e.target.value);
    }
  };

  return (
    <>
      <h1 className=" -translate-y-8 text-3xl">Edit course</h1>
      <form onSubmit={UpdateCourse} method="post">
        <p> choose Course</p>
        <select
          onChange={selectChange}
          value={onChange}
          name=""
          id=""
          className="px-4 h-14 w-full mb-8 block bg-slate-50"
        >
          {loader.map((f: any) => {
            return (
              <option key={f.id} value={f.id}>
                {" "}
                {f.data.name}{" "}
              </option>
            );
          })}
        </select>

        <input
          value={price}
          name="price"
          onChange={updateValue}
          type="text"
          placeholder="Price"
          className=" mb-2 w-[80vw] px-6 flex-1 block relative rounded-xl focus:outline-gray-300 ring ring-white  h-14  bg-[var(--background)]"
        />
        <input
          value={desc}
          onChange={updateValue}
          type="text"
          placeholder="Description"
          className=" px-6 flex-1  w-[80vw] block relative rounded-xl focus:outline-gray-300 ring ring-white  h-14  bg-[var(--background)]"
        />

        <button
          type="submit"
          className=" mt-4 bg-black hover:opacity-70 px-4 h-14 rounded-xl text-white flex gap-1 justify-center items-center"
        >
          Add{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              fill="#fff"
              width="20"
              height="20"
              viewBox="0 0 48 48"
            >
              <path d="M 5.4453125 4.0019531 A 1.50015 1.50015 0 0 0 4.109375 6.0644531 L 11.380859 24 L 4.109375 41.935547 A 1.50015 1.50015 0 0 0 6.1699219 43.841797 L 43.169922 25.341797 A 1.50015 1.50015 0 0 0 43.169922 22.658203 L 6.1699219 4.1582031 A 1.50015 1.50015 0 0 0 5.4453125 4.0019531 z M 8.3828125 8.6191406 L 39.146484 24 L 8.3828125 39.380859 L 14.011719 25.5 L 27.5 25.5 A 1.50015 1.50015 0 1 0 27.5 22.5 L 14.011719 22.5 L 8.3828125 8.6191406 z"></path>
            </svg>
          </span>
        </button>
      </form>
    </>
  );
}

export default EditCourse;
