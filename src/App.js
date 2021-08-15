import React, { useEffect } from "react";
import './App.css';
import Navbar from './navbar';
import element from './images/element (2).svg'
import img from "./images/github.svg"
import img2 from "./images/linkedin.svg"
import twitter from "./images/twitter.svg"
import instagram from "./images/instagram.svg"
import Header from "./pages/home";
import About from "./pages/about";
import Aos from 'aos'
import "aos/dist/aos.css";

function App() {
  useEffect(()=> {
    Aos.init({ duration: 1000 })

  },[])

  return (
       <div className="App">
         
       <Navbar className="navbar"/>
       <Header/>
       <About/>
       
        
      <div className="icons">
      <img className="icon" src={img} alt=""/>
      <img className="icon" src={twitter} alt=""/>
      <img className="icon" src={img2} alt=""/>
      <img className="icon" src={instagram} alt=""/>
      </div>
      
      <img className="element-1" src={element} alt=""/>
      <img className="element-2" src={element} alt=""/>
      
    </div>


  );
}

export default App;





