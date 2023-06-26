import { Link } from "react-router-dom";
import '/Users/maryofmagdala/broccolibeef/personal/portfolio-deploy/client/src/Pages/Skills.css'

export default function EtymoloTree(){
return(
    <>
        <div className="projects">
            <img className="projects" src="https://i.imgur.com/uflALRx.png"/>

                    <h2 className="projects">Etymolo-Tree (2023)</h2>
                    <p className="projects">An etymology rolodex that tracks linguistic family trees and the development of language and meaning of words through cultural change, time, and political upheaval.</p>
                    <br />

                        <h6 className="projects">
                            <b>Tech Stack Used</b>:
                        </h6>
                        <span class="tag tag-mongodb">MongoDB</span>
                        <span class="tag tag-express">Express.JS</span>
                        <span class="tag tag-rxjs">React.JS</span>
                        <span class="tag tag-node">Node.JS</span>
                        <span class="tag tag-html">HTML / CSS</span>
                        <span class="tag tag-firebase">Server-Side APIs</span>
                    <br />
                    <Link to="/" target="_blank"><button className="cv">Website</button></Link>
                    <Link to="https://github.com/htntang" target="_blank"><button className="cv">Github</button></Link>
        </div>
    </>
)
}