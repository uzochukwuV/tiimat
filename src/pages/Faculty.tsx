
import { Link, useLoaderData } from "react-router-dom";

function FacultyPage() {

  const loader = useLoaderData() as [];

  return (
    <div className=" min-h-screen h-full antialiased">
      <div className="relative clear-start h-[80vh] faculty-bg bg-cover bg-top bg-blend-screen bg-no-repeat">
        <div className=" absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-[#101014]"></div>
        <div className=" absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-l from-transparent to-black/50"></div>
        <div className="h-full flex justify-start items-center px-6 sm:px-10 md:px-16 xl:px-24 relative">
          <div className=" max-w-md md:max-w-2xl">
            <h2 className=" text-3xl md:text-5xl font-medium  text-white">
              Explore Our Programmes
            </h2>
            <p className=" text-sm  text-gray-100 md:text-base mt-4">
              We believe that everyone should have access to the limitless
              potential of opportunity. Our programmes are designed to be
              responsive and agile, training our learners in skills that will
              remain future-proof. We strive to ensure that each individual is
              empowered to be their most exceptional self through the power of
              opportunity.
            </p>
          </div>
        </div>
      </div>
      <div className="py-12 px-6 sm:px-10 md:px-16 xl:px-24">
        <h1 className=" text-[var(--text-primary)] text-center font-medium text-3xl mb-4">
          Our Faculties
        </h1>

        <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loader!.map((program: any, index: any) => {
         
            
            return (
              <Link
              to={`/faculty/${program.id}`}
                key={`faculty-${index}`}
                style={{background:`url(${program.image})`}}
                className={` space-y-6 flex-1 p-4 h-[120px] grid place-items-center bg-[url(${program.image})] bg-cover bg-top rounded-xl `}
              >
      
                <div className="">
                  <h3 className=" font-medium text-2xl text-white ">
                    {program.name}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FacultyPage;
