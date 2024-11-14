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
import { getAllCourse, getCourse } from "./services/read";
import EditCourse from "./admin/EditCourse";
import AddCourse from "./admin/AddCourse";

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
