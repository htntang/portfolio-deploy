import './AboutMe-Beta.css'

export default function AboutMeSolarSystem(){
    return(
        <div className="solarsystem">
            <h1>Hello!</h1>
            <h2>My name is Han</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Blanditiis porro odio aspernatur consectetur aperiam maiores, 
                nostrum quidem iure odit saepe quia sint accusamus et! 
                Illum ipsam est officia ullam temporibus.
            </p>

            <svg width="220" height="220" viewBox="0 0 220 220">
                <circle id="orbit1" cx="50%" cy="50%" r="55px" fill="none" stroke="#black" /> 
                <circle id="orbit2" cx="50%" cy="50%" r="75px" fill="none" stroke="#f8f3dc" /> 
                <circle id="orbit3" cx="50%" cy="50%" r="95px" fill="none" stroke="#f8f3dc" /> 
                <circle id="sun" cx="50%" cy="50%" r="28px" fill="#fecb2f" /> 
                <circle id="mars" cx="50%" cy="50%" r="8px" fill="#69b3b2" /> 
                <circle id="mercury" cx="50%" cy="50%" r="8px" fill="#fa3757" /> 
                <circle id="saturn" cx="50%" cy="50%" r="8px" fill="#ffa4a4" /> 
            </svg>

        </div>
    )
}