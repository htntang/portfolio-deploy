import { Link } from "react-router-dom";

export default function EveryChildPlays(){
    return(
        <>

        <div className="projects">
            <div className="column">
                <img className="projects" src="https://i.imgur.com/YxnA6XI.png"/>
            </div>

            <div className="column">
                <h2 className="projects">Every Child Plays (2023)</h2>
                <p className="projects">Worked in a team to create a web-based application that acts as a directory to catalogue, search, and filter through the playgrounds of Calgary by its accessible features to allow parents and/or guardians of neuro-diverse children of all physical abilities to find a place to play according to their needs.</p>
                
                <br />

                <h6 className="projects">
                    <b>Tech Stack Used</b>:
                </h6>

                <span class="tag tag-mongodb">MongoDB</span>
                <span class="tag tag-express">Express.JS</span>
                <span class="tag tag-rxjs">React.JS</span>
                <span class="tag tag-node">Node.JS</span>
                <span class="tag tag-html">HTML / CSS</span>
                <span class="tag tag-googlecloud">MUI Libraries</span>

                <br />

                <Link to="/" target="_blank"><button className="cv">Website</button></Link>
                <Link to="https://github.com/htntang" target="_blank"><button className="cv">Github</button></Link>
            </div>
        </div>

        </>
    )
}