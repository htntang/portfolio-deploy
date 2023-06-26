import { Link } from "react-router-dom";

export default function StriveOpp(){
    return(
        <div className="projects">
            <img className="projects" src="https://i.imgur.com/jdh9G07.png"/>
            
            <h2 className="projects">StriveOpp - Current (2023)</h2>

            <p className="projects">Worked in a team to create a full-stack web application that serves as a database for scholarships, bursaries, and funding opportunities for both domestic and international post-secondary students; and a platform to match mentors to student mentees via AI-powered sorting system.</p>
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
                <span class="tag tag-next">Next.JS</span>
                <span class="tag tag-javascript">JavaScript</span>                <span class="tag tag-googlecloud">Google Cloud Platform</span>
                <span class="tag tag-firebase">Firebase</span>
                <span class="tag tag-flutter">Flutter</span>
                <span class="tag tag-wordpress">TypeSense</span>
                <span class="tag tag-python">API / Web-Scraping</span>

            <br />

            <Link to="/" target="_blank"><button className="cv">Website</button></Link>
            <Link to="https://github.com/htntang" target="_blank"><button className="cv">Github</button></Link>
        </div>
    )
}