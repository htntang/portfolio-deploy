import { Link } from "react-router-dom";
import Ecosystem from "./Projects/01_00_Ecosystem";
import PersonalProjects from "./Projects/02_00_Personal";

export default function Projects(){
    return(
        <>
        <div className="column">

{/* Projects*/}        
        <Ecosystem />

{/* Personal Projects*/}
        <PersonalProjects />

        </div>
        </>
    )
}