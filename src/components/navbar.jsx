import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar" data-aos="fade-down">
      <div className="nav">
        <Link to="/" className="logo">abisola.</Link>
      </div>
    </div>
  );
};

export default Navbar;
