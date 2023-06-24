import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";


export default function HomePage(){
    return(
    <body>
      <div className="column">
        <div className="row">
          <AboutMe />
        </div>

        <div className="row">
          <Skills />
        </div>

        <div className="row">
          <Projects />
        </div>

        <div className="row">
          <Education />
        </div>

        <div className="row">
          <Experience />
        </div>
      </div>
    </body>
    )
}