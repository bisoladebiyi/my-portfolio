import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header" data-aos="fade-right">
      <div className="header-text">
        <p>Hello, I'm Abisola</p>
        <p className="job">
          A SOFTWARE <br />
          ENGINEER
        </p>
        <p>
          I code cool stuff! <Link to="/projects">Check it out.</Link>
        </p>
      </div>
    </div>
  );
};

export default Header;
