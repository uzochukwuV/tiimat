import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout";

import FacultyPage from "./pages/Faculty";

import NotFound from "./NotFound";
import Sample from "./pages/smaple";
import { getAllCourse, getAllCurriculum, getAllCurriculumInSemester, getAllSemester, getAllSemesterInCourse, getCourse, getCoursesInFaculty, getFaculties, getFaculty } from "./services/read";
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
          path: "/course/:id",
          element: <Sample />,
          loader: async ({ params }) => {
            return await getCourse(params.id as string);
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
          path: "/contact",
          element: <ContactUs />,
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
          path:"course/upload/certificate",
          element: <CreateCertificate />,
          
        },
        
      ]
    },
    // {
    //   path:"admin/",
    //   element: <AdminLayout />,
    //   children:[
    //     {
    //       path:"",
    //       element: <AdminView />,
    //       loader: async () => {
    //         return await getFaculties();
    //       },
         
    //     },
    //     {
    //       path:"course/add",
    //       element: <AddCourse />,
    //       loader: async () => {
    //         return await getAllCourse();
    //       },
    //     },
    //     {
    //       path:"course/edit",
    //       element: <EditCourse />,
    //       loader: async () => {
    //         return await getAllCourse();
    //       },
    //     },
    //     {
    //       path:"course/semester/add",
    //       element: <AddSemester />,
    //       loader: async () => {
    //         return await getAllCourse();
    //       },
    //     },
        
    //     {
    //       path:"course/edit/curriculum",
    //       element: <AddCurriculum />,
    //       loader: async () => {
    //         return await getAllSemester();
    //       },
    //     },
    //     {
    //       path:"faculty/add",
    //       element: <AddFaculty />,
          
    //     },
        
    //   ]
    // },
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
