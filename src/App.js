import React, { useEffect, useState } from "react";
import "./css/main.css";
import Aos from "aos";
import "aos/dist/aos.css";

import Loading from "./components/loading";

import Home from "./pages/home";
import MoreWorks from "./pages/more-works";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  // const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 2000);
    Aos.init({ duration: 1000 });
  }, []);

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<MoreWorks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div className="side-nav" data-aos="fade-left">
          <ul>
            <Link to="/about">
            <li>
              / about
            </li>
            </Link>
            <Link to="/works">
            <li>
              / projects
            </li>
            </Link>
            <Link to="/contact">
            <li>
              / contact
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </Router>
  );
}

export default App;
