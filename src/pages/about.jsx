import React from 'react'
import Navbar from '../components/navbar'
import arrow from '../images/left-arrow.svg'

const About = () => {


    return (
        <div className="container">
             <Navbar/>
            <div className="about" id="about"  data-aos="fade-right">
           <div>
           <h1>ABOUT ME</h1>
            <div className="about-container">
                <div className="vertical-line">
                </div>
                <div>
                    <p>I'm Adebiyi Abisola, a 19 year old frontend developer. I'm a student at Obafemi Awolowo University (OAU) studying Computer Science and Mathematics.</p>
                    <p>When i'm not coding, i enjoy reading, watching animes...and eating</p>
                    <p className="work-techs">Here are the few technologies i work with: </p>
                    <div className="technologies">
                        <div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon" />
                                <p>HTML</p>
                            </div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>CSS / SASS</p>
                            </div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>Javascript</p>
                            </div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>Typescript</p>
                            </div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>Styled Components</p>
                            </div>
                        </div>
                        <div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>Tailwind</p>
                            </div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>React.js</p>
                            </div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>Next.js</p>
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


        </div>
        </div>
        
    )
}



export default About
