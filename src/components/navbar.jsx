import React from 'react'
const Navbar = () => {
    
    return (
      
        <div className="navbar" data-aos="fade-down">
            <div className="nav">
            <p className="logo">A.</p>
            <div>
                <ul className="nav-items">
                    <a href="#home"><li>Home</li></a>
                    <a href="#about"><li>About Me</li></a>
                    <a href="#works"><li>My Works</li></a> 
                    <a href="#contact" className="btn-contact"><li>Contact Me</li></a>
                </ul>
            </div>
            </div>
          
        </div> 

    )
}

export default Navbar
