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
                    <p>I'm Adebiyi Abisola, a frontend developer. I'm a student at Obafemi Awolowo University (OAU) studying Computer Science and Mathematics.</p>
                    <p>When i'm not coding, i enjoy reading, watching animes...and eating</p>
                    <p className="work-techs">Here are the technologies and tools I work with: </p>
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
                                <p>Git / GitHub</p>
                            </div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>BitBucket</p>
                            </div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>Firebase</p>
                            </div>
                        </div>
                        <div>
                        <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>Jira</p>
                            </div>
                        <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>Styled Components</p>
                            </div>
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
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>Vue.js</p>
                            </div>
                        </div>
                        
                    </div>

                </div>

            </div>
            <a href='https://drive.google.com/file/d/1QGGIBlG3kqXVpZdUpuNW4ID5rd5485-r/view?usp=sharing' target={"_blank"} rel="noreferrer"><button className='resume'>View Resume</button></a>

           </div>


        </div>
        </div>
        
    )
}



export default About
