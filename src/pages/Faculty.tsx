
import FacultyTwo from "../assets/landing/tiimat/timothy-hales-bennett-OwvRB-M3GwE-unsplash.jpg";


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
          {loader!.map((program: any , index: any) => {
            return (
              <div
                key={`faculty-${index}`}
                className=" space-y-6 flex-1 p-4 bg-[var(--surface)] rounded-xl "
              >
                <div>
                  <img
                    src={FacultyTwo}
                    alt=""
                    className=" h-52 w-full rounded-xl hover:bg-left-top bg-center bg-cover"
                  />
                </div>
                <div className=" space-y-2">
                  <h3 className=" font-medium text-lg text-[var(--text-tertiary)]">
                    {program.name}
                  </h3>
                  

                  {program.courses.map((course:any, i:any) => {
                    return (
                      <Link
                        to={`/course/${course.id}`}
                        key={`course-${i}`}
                        className=" text-[#333] hover:scale-[102%] cursor-pointer hover:text-white border-b border-dashed flex justify-between items-center"
                      >
                        <span>{course.data.name}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#4e4e4e"
                        >
                          <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                        </svg>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FacultyPage;
