import { Link } from "react-router-dom";

export default function StriveOpp(){
    return(
        <div className="projects">
                    <h2 className="projects">StriveOpp - Current (2023)</h2>
                    <img className="projects" src="https://i.imgur.com/jdh9G07.png"/>
                    <p className="projects">Worked in a team to create a full-stack web application that serves as a database for scholarships, bursaries, and funding opportunities for both domestic and international post-secondary students; and a platform to match mentors to student mentees via AI-powered sorting system.</p>
                        <br />
                        <Link to="/" target="_blank"><button className="cv">Website</button></Link>
                        <Link to="https://github.com/htntang" target="_blank"><button className="cv">Github</button></Link>
        </div>
    )
}