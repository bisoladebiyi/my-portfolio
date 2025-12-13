import React from "react";
import Navbar from "../components/navbar";
import arrow from "../images/left-arrow.svg";

const About = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="about" id="about" data-aos="fade-right">
        <div>
          <h1>ABOUT ME</h1>
          <div className="about-container">
            <div className="vertical-line"></div>
            <div>
              <p>
                Hi! I’m Adebiyi Abisola, a Software Engineer with 5 years of
                hands-on experience building dynamic, responsive, and
                pixel-perfect web applications.
              </p>
              <p>
                When I’m not writing code, you’ll probably find me reading,
                watching anime… or enjoying good food (very important 😌).
              </p>
              <p className="work-techs">
                Here are some technologies and tools I work with:{" "}
              </p>
              <div className="technologies">
                <div>
                  <div className="tech">
                    <img className="arrow" src={arrow} alt="icon" />
                    <p>HTML</p>
                  </div>
                  <div className="tech">
                    <img className="arrow" src={arrow} alt="icon" />
                    <p>CSS / SASS</p>
                  </div>
                  <div className="tech">
                    <img className="arrow" src={arrow} alt="icon" />
                    <p>JavaScript</p>
                  </div>
                  <div className="tech">
                    <img className="arrow" src={arrow} alt="icon" />
                    <p>TypeScript</p>
                  </div>
                  <div className="tech">
                    <img className="arrow" src={arrow} alt="icon" />
                    <p>.NET</p>
                  </div>
                  <div className="tech">
                    <img className="arrow" src={arrow} alt="icon" />
                    <p>Python</p>
                  </div>
                  <div className="tech">
                    <img className="arrow" src={arrow} alt="icon" />
                    <p>Node.js</p>
                  </div>
                  <div className="tech">
                    <img className="arrow" src={arrow} alt="icon" />
                    <p>Ruby on Rails</p>
                  </div>
                  <div className="tech">
                    <img className="arrow" src={arrow} alt="icon" />
                    <p>AI Tools (Claude, ChatGPT)</p>
                  </div>
                </div>

                <div>
                  <div className="tech">
                    <img className="arrow" src={arrow} alt="icon" />
                    <p>Styled Components</p>
                  </div>
                  <div className="tech">
                    <img className="arrow" src={arrow} alt="icon" />
                    <p>TailwindCSS</p>
                  </div>
                  <div className="tech">
                    <img className="arrow" src={arrow} alt="icon" />
                    <p>React.js</p>
                  </div>
                  <div className="tech">
                    <img className="arrow" src={arrow} alt="icon" />
                    <p>Next.js</p>
                  </div>
                  <div className="tech">
                    <img className="arrow" src={arrow} alt="icon" />
                    <p>Redux</p>
                  </div>
                  <div className="tech">
                    <img className="arrow" src={arrow} alt="icon" />
                    <p>MobX</p>
                  </div>
                  <div className="tech">
                    <img className="arrow" src={arrow} alt="icon" />
                    <p>Vue.js</p>
                  </div>
                  <div className="tech">
                    <img className="arrow" src={arrow} alt="icon" />
                    <p>React Native</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            href="https://drive.google.com/file/d/1v2ess13VRezX-REZ6uXUwwy_Ww6mySWy/view?usp=sharing"
            target={"_blank"}
            rel="noreferrer"
          >
            <button className="resume">View Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
