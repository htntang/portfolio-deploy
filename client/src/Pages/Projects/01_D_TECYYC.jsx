import { Link } from "react-router-dom";

export default function TECYYC(){
    return(
        <>
        <div className="projects">
            <h2 className="projects">TEC-YYC Coalition - Current (2023)</h2>
            <img className="projects" src="https://i.imgur.com/N6qih7i.png" />
            <p className="projects">Collaborated in a team as a web developer to create a WordPress website that acts as a database of educational and career resources for Albertans who wish to pivot their careers into the tech industry.</p>
            
            <br />
            <Link to="/" target="_blank"><button className="cv">Website</button></Link>
            <Link to="https://github.com/htntang" target="_blank"><button className="cv">Github</button></Link>
        </div>
        </>
    )
}