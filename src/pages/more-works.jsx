import React from 'react'
import works from '../works'
import Navbar from '../components/navbar'

const MoreWorks = () => {
    return (
        <div>
            <Navbar />
            <h1 className="work-page-title">MY WORKS</h1>
            <div className="work-page"  data-aos="fade-up">
            {works.map(({img, id, desc, tech, title, github, site })=> {
                return (
                   <a href={site} target="_blank" rel="noreferrer" > <div key={id} className="work-page-container">
                        <img src={img} alt="" />
                        <div className="work-info">
                            <div className="work-info-content">
                            <div className="title-icon">
                            <p className="work-title">{title}</p>
                            <a target="_blank" rel="noreferrer" href={github} className="icon-2"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#2c2c2c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                            </div>
                            
                            <div className="techs">
                            {tech.map((tech)=> {
                                return (
                                    <div className="technology">{tech}</div>
                                )
                            })}
                            </div>
                            </div>
                           
                            
                        </div>
                    </div></a>
                )
            })}
            </div>
        </div>
    )
}

export default MoreWorks
