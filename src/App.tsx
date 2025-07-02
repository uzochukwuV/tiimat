import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout";

import FacultyPage from "./pages/Faculty";

import NotFound from "./NotFound";
import { getAllCourse, getAllCurriculum, getAllCurriculumInSemester, getAllSemester, getAllSemesterInCourse, getAppData, getCourse, getCoursesInFaculty, getFaculties, getFaculty, getMessage } from "./services/read";
import {CourseAdmin} from "./admin/AddCourse";
import  { CurriculumAdmin } from "./admin/AddCurriculum";
import  { FacultyAdmin } from "./admin/AddFaculty";

import FacultyItem from "./pages/FacultyPage";
import { TrimesterAdmin } from "./admin/AddSemester";

import {Dashboard} from "./admin/Dashboard"
import { SidebarProvider } from "./components/ui/sidebar";
import HomeScreen from "./screen/Home";
import Departments from "./screen/Departments";
import AboutUs from "./screen/AboutUs";
import Course from "./screen/Course";
import ContactUs from "./screen/ContactUs";
import CreateCertificate from "./admin/createCertificate";
import CertificateVerification from "./pages/certificate";
import CheckCertificate from "./screen/ui/checkCertificate";
import { SemesterCourseAdmin } from "./admin/AddSemesterInCourse";
import { CurriculumInTrimesterAdmin } from "./admin/AddCurriculumInTrimester";
import { AppAdmin } from "./admin/AddApp";
import { MessageAdmin } from "./admin/Message";
import { CerticicateAdmin } from "./admin/AddCertificate";
import { getAllCertificate } from "./services/actions";

function Home() {
  return (
    <>
      {/* <Landing /> */}
      <HomeScreen />
    </>
  );
}

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path:"/departments",
          element:<Departments />,
          loader: async () => {
            const data =  await getFaculties()
            const res =  data!.map(async(item:any)=>{
             const f =  await getCoursesInFaculty(item.id)
             return {faculty:item, courses:f}
            })
            return await Promise.all(res)
                  
          },
        },
        {
          path:"/certificate/:id",
          element: <CertificateVerification />
        },
        {
          path:"/departments/:id",
          element:<Course />,
          loader: async ({ params }) => {
            const course =  await getCourse(params.id as string);
            const semester = await getAllSemesterInCourse(course?.id!)
            const res =  semester!.map(async(item:any)=>{
              const curriculum =  await getAllCurriculumInSemester(item.id)
              return {semester:item, curriculum:curriculum}
             })
            const data = await Promise.all(res)
            return {course:course, semester:data}
          },
        },
       
        {
          path: "/faculty",
          element: <FacultyPage />,
          loader: async () => {
            return await getFaculties();
          },
        },
        {
          path: "/faculty/:id",
          element: <FacultyItem />,
          loader: async ({ params }) => {
            return await getFaculty(params.id as string);
          },
        },
        {
          path: "/about",
          element: <AboutUs />,
        },
        {
          path: "/check-certificate",
          element: <CheckCertificate />,
        },
        {
          path: "/contact",
          element: <ContactUs />,
           loader: async () => {
            // Example mock object for AppDataTpe
            return await getAppData();
          },
        },
      ],
    },
    {
      path:"dashboard/",
      element: <Dashboard />,
      // loader: async()=>{

      // },
      // handle:()=>{},
      children:[
        {
          path:"",
          element:<FacultyAdmin />,
          loader: async()=>{
            return await getFaculties()
          }
        },
        {
          path:"app",
          element:<AppAdmin />,
          loader: async()=>{
            // Example mock object for AppDataTpe

            return  [await getAppData()]
          }
        },
        {
          path:"course",
          element:<CourseAdmin />,
          loader: async()=>{
            return getAllCourse()
          }
        },
        {
          path:"trimester",
          element: <TrimesterAdmin />,
          loader: async ()=>{
            return getAllSemester()
          }
        },{
          path:"curriculum",
          element:<CurriculumAdmin />,
          loader: async ()=>{
            return getAllCurriculum()
          }
        },
        {
          path:"semester/:id/",
          element: <SemesterCourseAdmin />,
          loader: async ({params}) => {
             return getAllSemesterInCourse(params.id as string)
          }
        },
        {
          path:"certificate",
          element: <CerticicateAdmin />,
          loader: async () => {
             return getAllCertificate()
          }
        },
        
        {
          path:"curriculum/:id/",
          element: <CurriculumInTrimesterAdmin />,
          loader: async ({params}) => {
             return getAllCurriculumInSemester(params.id as string)
          }
        },
        
        {
          path:"course/upload/certificate",
          element: <CreateCertificate />,
          
        },
        {
          path:"message",
          element: <MessageAdmin />,
           loader: async () => {
             return getMessage()
          }
        },
        
      ]
    },
   
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <div>
      <SidebarProvider>
      <RouterProvider router={router} />
      </SidebarProvider>
    </div>
  );
};

export default App;
