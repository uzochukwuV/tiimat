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
import { getAllCourse, getCourse, getFaculties } from "./services/read";
import EditCourse from "./admin/EditCourse";
import AddCourse from "./admin/AddCourse";
import AddCurriculum from "./admin/AddCurriculum";

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
      path:"admin/course/edit/curriculum",
      element: <AddCurriculum />,
      loader: async () => {
        return await getAllCourse();
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
