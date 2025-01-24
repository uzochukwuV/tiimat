import Services from "../assets/bg-services.svg"

function Departments() {
  return (
    <div>
        <section className=' h-[80vh] max-w-[1200px] mx-auto'>
            <div className=' h-full w-full flex items-end justify-start'>
                <div className=' max-h-[500px] mt-12 '>
                        <h1 className=" text-[24px] max-w-lg mb-12 font-semibold text-pretty antialiased">Building skills, shaping careers, and driving innovation forward.</h1>
                        <img src={Services} className=" rounded-[32px] h-[300px] w-full object-cover" alt="" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Departments



// function DepartmentCard() {
//   return (
//     <div>

//     </div>
//   )
// }
