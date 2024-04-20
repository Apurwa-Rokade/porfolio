import styles from "./App.module.css";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Hero from "./components/Hero/Hero";
import Navbar from './components/Navbar/Navbar'
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Gototop from "./components/gototop/gototop";

function App() {


  return (
    <>
    <div className={styles.App}>
  
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Gototop/>
    </div>
      
    </>
  )
}

export default App
