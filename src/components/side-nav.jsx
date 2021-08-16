import React from 'react'

const SideNav = () => {
    
    const showMenu = () => {
        let menu = document.querySelector(".side-nav")
        
        if (menu.style.right !== "0px") {
          menu.setAttribute("style", "right: 0;");
        }
         else {
          menu.setAttribute("style", "right: -1000px;");
        }
    };

    const closeOnClick = () => {
        showMenu()
    }
 
    return (
        <div className="side-nav">
            <ul className="side-nav-items">
                <button className="close" onClick={showMenu}><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z" fill="#0000000" fill-rule="evenodd"/></svg></button>
                    <a href="#home" onClick={closeOnClick}><li>Home</li></a>
                    <a href="#about" onClick={closeOnClick}><li>About Me</li></a>
                    <a href="#works" onClick={closeOnClick}><li>My Works</li></a> 
                    <a href="#contact" onClick={closeOnClick}><li>Contact Me</li></a>
                </ul>
        </div>
    )
}

export default SideNav
