import { Link } from "react-router-dom";

export default function Projects(){
    return(
        <>
        <div className="column">

{/* Projects*/}        

        <h1 className="projects">contributions to our ecosystem</h1>

                <div className="projects">
                    <h2 className="projects">TEC-YYC Coalition - Current (2023)</h2>
                    <img className="projects" src="https://i.imgur.com/N6qih7i.png" />
                    <p className="projects">Collaborated in a team as a web developer to create a WordPress website that acts as a database of educational and career resources for Albertans who wish to pivot their careers into the tech industry.</p>
                        <br />
                        <Link to="/" target="_blank"><button className="cv">Website</button></Link>
                        <Link to="https://github.com/htntang" target="_blank"><button className="cv">Github</button></Link>
                </div>

                <hr />

                <div className="projects">
                    <h2 className="projects">StriveOpp - Current (2023)</h2>
                    <img className="projects" src="https://i.imgur.com/jdh9G07.png"/>
                    <p className="projects">Worked in a team to create a full-stack web application that serves as a database for scholarships, bursaries, and funding opportunities for both domestic and international post-secondary students; and a platform to match mentors to student mentees via AI-powered sorting system.</p>
                        <br />
                        <Link to="/" target="_blank"><button className="cv">Website</button></Link>
                        <Link to="https://github.com/htntang" target="_blank"><button className="cv">Github</button></Link>
                </div>

                <hr />
                
                <div className="projects">
                <h2 className="projects">Every Child Plays (2023)</h2>
                <img className="projects" src="https://i.imgur.com/YxnA6XI.png"/>
                    <p className="projects">Worked in a team to create a web-based application that acts as a directory to catalogue, search, and filter through the playgrounds of Calgary by its accessible features to allow parents and/or guardians of neuro-diverse children of all physical abilities to find a place to play according to their needs.</p>
                    <br />
                    <Link to="/" target="_blank"><button className="cv">Website</button></Link>
                    <Link to="https://github.com/htntang" target="_blank"><button className="cv">Github</button></Link>
                </div>

                <hr />

                <div className="projects">
                <h2 className="projects">Etymolo-Tree (2023)</h2>
                <img className="projects" src="https://i.imgur.com/uflALRx.png"/>
                    <p className="projects">An etymology rolodex that tracks linguistic family trees and the development of language and meaning of words through cultural change, time, and political upheaval.</p>
                    <br />
                    <Link to="/" target="_blank"><button className="cv">Website</button></Link>
                    <Link to="https://github.com/htntang" target="_blank"><button className="cv">Github</button></Link>
                </div>

                <hr />

{/* Personal Projects*/}
        <h1 className="projects">personal projects</h1>

            <div className="projects">
                <h2 className="projects">
                    perfume directory (2023)
                    </h2>
                    <h6 className="projects">lorem ipsum</h6>
                    <br />
                    <Link to="/" target="_blank"><button className="cv">Website</button></Link>
                    <Link to="https://github.com/htntang" target="_blank"><button className="cv">Github</button></Link>
            </div>

            <hr />

            <div className="projects">
                <h2 className="projects">
                    swe career resources (2023)</h2>
                    <h6 className="projects">lorem ipsum</h6>
                    <br />
                    <Link to="/" target="_blank"><button className="cv">Website</button></Link>
                    <Link to="https://github.com/htntang" target="_blank"><button className="cv">Github</button></Link>
            </div>

            <hr />

            <div className="projects">
                 <h2 className="projects">
                    annual ballon d'or top 3 (2023)</h2>
                    <h6 className="projects">lorem ipsum</h6>
                    <br />
                    <Link to="/" target="_blank"><button className="cv">Website</button></Link>
                    <Link to="https://github.com/htntang" target="_blank"><button className="cv">Github</button></Link>
            </div>

            <hr />

        </div>
        </>
    )
}