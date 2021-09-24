import React from 'react'
import works from '../works'


const MyWorks = () => {
    return (
        <div className="works" id="works">
            <h1>MY WORKS</h1>
            
            {works.map(({ img, id, desc, addclass, title, github, site})=> {
                return (
                    <div className={addclass} key={id}>
                        <div className="work-img">
                            <a href={site} target="_blank" rel="noreferrer" ><figure className="img-figure-2"><img src={img} className="w-image" alt="project-img"/></figure></a>
                            
                            
                        </div>
                        <div className="info">
                            <div className="icon-name">
                            <div className="icons-work">
                                <a className="icon-work" href={github} target="_blank" rel="noreferrer"><svg  xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                                <a  className="icon-work" href={site} target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                </a>
                            </div>
                            <h3>{title}</h3>
                            </div>
                        
                            <div className="desc">
                            <p>{desc}</p>
                            </div>
                        
                            
                        </div>
                    </div>
                )
            })}
            <div className="viewmore">
            <a href="#" className="btn" >View More...</a>
            </div>
            
        </div>
    )
}

export default MyWorks
