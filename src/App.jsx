import './App.css'
import Experience from './assets/components/Experience'
import Header from './assets/components/Header'
import Hero from './assets/components/Hero'
import Projects from './assets/components/Projects'
import About from './assets/components/About'
import Technologies from './assets/components/Tecnhologies'
import Contact from './assets/components/Contact'
import Footer from './assets/components/Footer'

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Hero />
        <Experience />
        <Projects />
        <About />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
