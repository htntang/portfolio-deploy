import { Link } from "react-router-dom";
import SWEResource from "./02_A_SWEResource";
import BallonDOr from "./02_B_BallonDOr";
import PerfumeDirectory from "./02_C_PerfumeDirectory";

export default function PersonalProjects(){
    return(
        <>
        <h1 className="projects">personal projects</h1>

        <PerfumeDirectory />
        <hr />
        <SWEResource />
        <hr />
        <BallonDOr />
        <hr />

        </>
    )
}