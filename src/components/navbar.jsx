import React from 'react'
const Navbar = () => {

    const showMenu = () => {
        let menu = document.querySelector(".side-nav")
        if (menu.style.right !== "0px") {
          menu.setAttribute("style", "right: 0;");
        }
         else {
          menu.setAttribute("style", "right: -300px;");
        }
    };
    
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
                    <button className="hamburger" onClick={showMenu}><svg fill="#6DECB9" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"/></svg></button>
                </ul>
            </div>
            </div>
          
        </div> 

    )
}

export default Navbar
