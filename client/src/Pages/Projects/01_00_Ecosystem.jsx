import EtymoloTree from "./01_A_Etymology";
import EveryChildPlays from "./01_B_EveryChildPlays";
import StriveOpp from "./01_C_StriveOpp";
import TECYYC from "./01_D_TECYYC";
import { Link } from "react-router-dom";

export default function Ecosystem() {
    return(
        <>
        <h1 className="projects">contributions to our ecosystem</h1>

        <TECYYC />
        <hr />
        <StriveOpp />
        <hr />
        <EveryChildPlays />
        <hr />
        <EtymoloTree />
        <hr />
        </>
    )
}