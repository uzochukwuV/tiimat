import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout";
// import Course from './pages/course'
import FacultyPage from "./pages/Faculty";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import NotFound from "./NotFound";
import Sample from "./pages/smaple";
import Landing from "./pages/Landing";
import { getAllCourse, getAllCurriculum, getAllSemester, getCourse, getFaculties, getFaculty } from "./services/read";
import EditCourse from "./admin/EditCourse";
import AddCourse, {CourseAdmin} from "./admin/AddCourse";
import AddCurriculum, { CurriculumAdmin } from "./admin/AddCurriculum";
import AddFaculty, { FacultyAdmin } from "./admin/AddFaculty";
import AdminView from "./admin/AdminView";
import FacultyItem from "./pages/FacultyPage";
import AddSemester, { TrimesterAdmin } from "./admin/AddSemester";
import { AdminLayout } from "./admin/layout";
import {Dashboard} from "./admin/Dashboard"
import { SidebarProvider } from "./components/ui/sidebar";
import HomeScreen from "./screen/Home";
import Departments from "./screen/Departments";

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
          element:<Departments />
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
          path: "/about-us",
          element: <AboutPage />,
        },
        {
          path: "/contact-us",
          element: <ContactPage />,
        },
      ],
    },
    {
      path:"dashboard/",
      element: <Dashboard />,
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
        }
      ]
    },
    {
      path:"admin/",
      element: <AdminLayout />,
      children:[
        {
          path:"",
          element: <AdminView />,
          loader: async () => {
            return await getFaculties();
          },
         
        },
        {
          path:"course/add",
          element: <AddCourse />,
          loader: async () => {
            return await getAllCourse();
          },
        },
        {
          path:"course/edit",
          element: <EditCourse />,
          loader: async () => {
            return await getAllCourse();
          },
        },
        {
          path:"course/semester/add",
          element: <AddSemester />,
          loader: async () => {
            return await getAllCourse();
          },
        },
        {
          path:"course/edit/curriculum",
          element: <AddCurriculum />,
          loader: async () => {
            return await getAllSemester();
          },
        },
        {
          path:"faculty/add",
          element: <AddFaculty />,
          
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
