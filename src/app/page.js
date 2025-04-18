
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"

export default function Portfolio() {
  return (
    <div className="">
      <main >
        <Header/>
        <Home />
        <About/>
        <Projects/>
        <Contact/>
      </main>
      
    </div>
  );
}
