import React from "react";
import close from "../images/close.svg";

const SideNav = () => {
  const showMenu = () => {
    let menu = document.querySelector(".side-nav");

    if (menu.style.right !== "0px") {
      menu.setAttribute("style", "right: 0;");
    } else {
      menu.setAttribute("style", "right: -1000px;");
    }
  };

  const closeOnClick = () => {
    showMenu();
  };

  return (
    <div className="side-nav">
      <ul className="side-nav-items">
        <button className="close" onClick={showMenu}>
          <img src={close} alt="" />
        </button>
        <a className="links" href="#home" onClick={closeOnClick}>
          <li>Home</li>
        </a>
        <a className="links" href="#about" onClick={closeOnClick}>
          <li>About Me</li>
        </a>
        <a className="links" href="#works" onClick={closeOnClick}>
          <li>My Works</li>
        </a>
        <a className="links" href="#contact" onClick={closeOnClick}>
          <li>Contact Me</li>
        </a>
      </ul>
    </div>
  );
};

export default SideNav;
