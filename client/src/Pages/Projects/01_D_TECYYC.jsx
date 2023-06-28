import { Link } from "react-router-dom";

export default function TECYYC(){
    return(
        <>
        <div className="projects">
            <img className="projects" src="https://i.imgur.com/N6qih7i.png" />

            <h2 className="projects">TEC-YYC Coalition - Current (2023)</h2>
            <p className="projects">Collaborated in a team as a web developer to create a WordPress website that acts as a database of educational and career resources for Albertans who wish to pivot their careers into the tech industry.</p>
            <br />

            <h6 className="projects">
                    <b>Tech Stack Used</b>:
            </h6>
            
            <span class="tag tag-wordpress">WordPress</span>
            <span class="tag tag-html">HTML / CSS</span>


            <br />
            <Link to="/" target="_blank"><button className="cv">Website</button></Link>
            <Link to="https://github.com/htntang" target="_blank"><button className="cv">Github</button></Link>
        </div>
        </>
    )
}