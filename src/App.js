import About from "./compontes/about";
import Contact from "./compontes/contact";
import Education from "./compontes/education";
import Footer from "./compontes/Footer";
import Home from "./compontes/Home";
import Navbar1 from "./compontes/Navbar1";
import Projects from "./compontes/Projects";
import Skill from "./compontes/skill";

function App() {
  return (
    <div>
    <div className="navfix">
      <Navbar1 />
    </div >
    <Home/>
    <div  id="about">
    <About/>
    </div>
    <div id="education">
    <Education/>
    </div>
    <div id="skill">
      <Skill/>
    </div>  
    <div id="project">
      <Projects/>
    </div>
    <div id="contact">
      <Contact/>
    </div>

    <div className="footer">
      <Footer/>
    </div>
  </div>
  );
}

export default App;
