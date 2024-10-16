
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import { Layout } from './Layout'
import Course from './pages/course'
import { Footer } from './components/Footer'
import Faculty from './components/Faculty'

function Home() {

  return (
    <>
     <Hero />
     <About />
     <Faculty />
     <Footer />
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
        }
      ]
    },
    {
      path: "*",
      element: <br />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};




export default App
