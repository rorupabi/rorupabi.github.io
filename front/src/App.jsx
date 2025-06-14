import Navbar from './components/navbar'
import BodySection from './components/bodySection'
import Skills from './components/skills'
import Projects from './components/projects'
import Experience from './components/experience'
import Contact from './components/contact'
import GoBackTop from './components/goBackTop'
import './App.css'

function App() {
  return (
    <>
      <div className="overflow-x-hidden text-stone-300 antialiased">
        {/* Background effects */}
        <div className="fixed inset-0 -z-10">
          <div className="relative h-full w-full bg-slate-950">
            <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
            <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
          </div>
        </div>

        {/**Navigation bar */}
        <div className="container mx-auto px-8">
          <Navbar />
        </div>

        {/* Content */}
        <div className="container mx-auto px-8">
          <BodySection />
          <Skills />
          <Projects />
          <Experience/>
          <Contact/>
          <GoBackTop/>
        </div>
      </div>
    </>
  )
}

export default App
