import { Link } from "react-router-dom";

export default function BallonDOr(){
    return(
        <>
        <div className="projects">
            <h2 className="projects">
            annual ballon d'or top 3 (2023)</h2>
            <h6 className="projects">lorem ipsum</h6>
            <br />
            <Link to="/" target="_blank"><button className="cv">Website</button></Link>
            <Link to="https://github.com/htntang" target="_blank"><button className="cv">Github</button></Link>
        </div>
        </>
    )
}