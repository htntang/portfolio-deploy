import { Link } from 'react-router-dom';
import AboutMeSolarSystem from './AboutMe-Beta';
import AboutMeRolodex from './AboutMe/AboutMeRolodex';
 

export default function AboutMe(){
    return(
        <div className="aboutme">
            <AboutMeSolarSystem />

            {/* <div className="row">
                <div className="column">
                    <img 
                        src="https://i.imgur.com/709rwAU.png" 
                        className="aboutme"
                    />
                </div>

            <div className="column">
                <div className="aboutme-blurb">

                <div className="row">
                    <h1 className="aboutme">hello! my name is Han</h1>
                </div>
                <br />

                <div className="row">
                    <AboutMeRolodex />
                </div>
            
                <div className="row">
                    <p className="aboutme">
                        A full stack developer with an eye for detail and design, UX/UI; and a front-end focus, I am an
                        innovative and versatile professional with a unique combination of skills in web development, content creation, and marketing strategy. 
                        With a passion for technology, storytelling, and understanding human behavior, I bring a holistic approach to drive impactful results and exceed expectations.
                        <br />
                        <br />
                        In my free time, I am known to indulge in museums, powerlifting, and stanning FC Barcelona.
                        
                    </p>
                </div>

                <div className="row">
                    <div className="buttons_socials">
                        <Link to="https://github.com/htntang" target="_blank"><button className="aboutme">Github</button></Link>
                        <Link to="https://www.linkedin.com/in/htntang/" target="_blank"><button className="aboutme">LinkedIn</button></Link>
                    </div>
                </div>

                
            </div>
            </div>
            </div> */}
        </div>
    )
}