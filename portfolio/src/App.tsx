import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Education from './components/Education'
import Certification from './components/Certifications'
import Competition from './components/Competitions'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Certification />
        <Competition />
        <Projects />
        <Skills />
      </main>
    </>
  )
}