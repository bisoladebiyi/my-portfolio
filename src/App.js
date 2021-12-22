import React, { useEffect } from "react";
import "./css/main.css";
import Aos from "aos";
import "aos/dist/aos.css";

import Home from "./pages/home";
import MoreWorks from "./pages/more-works";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<MoreWorks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div className="side-nav" data-aos="fade-left">
          <ul>
            <Link to="/about">
              <li className="about-link">/ about</li>
            </Link>
            <Link to="/projects">
              <li className="works-link">/ projects</li>
            </Link>
            <Link to="/contact">
              <li className="contact-link">/ contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </Router>
  );
}

export default App;
