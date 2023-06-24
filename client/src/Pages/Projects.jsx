import { Link } from "react-router-dom";

export default function Projects(){
    return(
        <>
        <div className="column">
        <h1 className="projects">contributions to our ecosystem</h1>
            <ul>
                <li>
                    TEC-YYC Coalition
                        <br />
                        <Link to="/" target="_blank"><button className="cv">Website</button></Link>
                        <Link to="https://github.com/htntang" target="_blank"><button className="cv">Github</button></Link>
                </li>

                <li>
                    StriveOpp
                    <br />
                    <Link to="/" target="_blank"><button className="cv">Website</button></Link>
                    <Link to="https://github.com/htntang" target="_blank"><button className="cv">Github</button></Link>
                </li>
                
                <li>
                    Every Child Plays
                    <br />
                    <Link to="/" target="_blank"><button className="cv">Website</button></Link>
                    <Link to="https://github.com/htntang" target="_blank"><button className="cv">Github</button></Link>
                </li>

                <li>
                    Etymolo-Tree
                    <br />
                    <Link to="/" target="_blank"><button className="cv">Website</button></Link>
                    <Link to="https://github.com/htntang" target="_blank"><button className="cv">Github</button></Link>
                </li>
            </ul>

        <h1 className="projects">personal projects</h1>
            <ul>
                <li>
                    perfume directory
                    <br />
                    <Link to="/" target="_blank"><button className="cv">Website</button></Link>
                    <Link to="https://github.com/htntang" target="_blank"><button className="cv">Github</button></Link>
                </li>

                <li>
                    swe career resources
                    <br />
                    <Link to="/" target="_blank"><button className="cv">Website</button></Link>
                    <Link to="https://github.com/htntang" target="_blank"><button className="cv">Github</button></Link>
                </li>

                <li>
                    annual ballon d'or top 3
                    <br />
                    <Link to="/" target="_blank"><button className="cv">Website</button></Link>
                    <Link to="https://github.com/htntang" target="_blank"><button className="cv">Github</button></Link>
                </li>
            </ul>
        </div>
        </>
    )
}