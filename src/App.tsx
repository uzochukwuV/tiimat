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
import { getAllCourse, getAllSemester, getCourse, getFaculties, getFaculty } from "./services/read";
import EditCourse from "./admin/EditCourse";
import AddCourse from "./admin/AddCourse";
import AddCurriculum from "./admin/AddCurriculum";
import AddFaculty from "./admin/AddFaculty";
import AdminView from "./admin/AdminView";
import FacultyItem from "./pages/FacultyPage";
import AddSemester from "./admin/AddSemester";

function Home() {
  return (
    <>
      <Landing />
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
      path:"admin/course/add",
      element: <AddCourse />,
      loader: async () => {
        return await getAllCourse();
      },
    },
    {
      path:"admin/course/edit",
      element: <EditCourse />,
      loader: async () => {
        return await getAllCourse();
      },
    },
    {
      path:"admin/course/semester/add",
      element: <AddSemester />,
      loader: async () => {
        return await getAllCourse();
      },
    },
    {
      path:"admin/course/edit/curriculum",
      element: <AddCurriculum />,
      loader: async () => {
        return await getAllSemester();
      },
    },
    {
      path:"admin/faculty/add",
      element: <AddFaculty />,
      
    },
    {
      path:"admin/",
      element: <AdminView />,
      loader: async () => {
        return await getFaculties();
      },
     
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
