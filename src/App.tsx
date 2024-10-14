
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

function App() {

  return (
    <>
     <section className=' absolute top-0 left-0 right-0 bg-black min-h-screen'>
     <Navbar />
     <Hero />
     <About />
     </section>
    </>
  )
}

export default App
