import React from 'react'
import arrow from '../images/left-arrow.svg'

const About = () => {


    return (
        <div className="about" data-oas="fade-up" id="about">
            <h1>ABOUT ME</h1>
            <div className="about-container">
                <div className="vertical-line">
                </div>
                <div>
                    <p>I'm Adebiyi Abisola, a 19 year old frontend developer. I'm a first year at Obafemi Awolowo University (OAU) studying Computer Science and Mathematics.</p>
                    <p>When i'm not coding, i enjoy reading...and eating 😅 </p>
                    <p className="techs">Here are the few technologies i work with: </p>
                    <div className="technologies">
                        <div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon" />
                                <p>HTML</p>
                            </div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>CSS</p>
                            </div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>Javascript</p>
                            </div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>Typescript</p>
                            </div>
                        </div>
                        <div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>Tailwind</p>
                            </div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>Node.js</p>
                            </div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>React.js</p>
                            </div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>Redux</p>
                            </div>
                            
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}



export default About
