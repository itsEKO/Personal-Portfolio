import Navbar from "./components/navbar/navbar";
import About from "./components/about/about"
import Projects from "./components/projects/projects"
import Contact from "./components/contact/contact"
import "./App.scss"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sections">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
