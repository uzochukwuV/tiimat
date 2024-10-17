
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import { Layout } from './Layout'
import Course from './pages/course'
import FacultyPage from './pages/Faculty'

import Faculty from './components/Faculty'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import NotFound from './NotFound'

function Home() {

  return (
    <>
     <Hero />
     <About />
     <Faculty />
    </>
  )
}




const App = () => {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout  />
      ),
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "/course",
          element: <Course />
        },
        {
          path: "/faculty",
          element: <FacultyPage />
        },
        {
          path: "/about-us",
          element: <AboutPage />
        },
        {
          path: "/contact-us",
          element: <ContactPage />
        }
      ]
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




export default App
