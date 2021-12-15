import React, { useEffect, useState } from "react";
import './App.css';
import Aos from 'aos'
import "aos/dist/aos.css";

import Loading from "./components/loading";

import Home from "./pages/home";
import MoreWorks from "./pages/more-works";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [isLoading, setIsLoading]=useState(true)
  useEffect(()=> {
    setTimeout(()=> {
      setIsLoading(false)
    }, 2000)
    Aos.init({ duration: 1000 })

  },[])


  if(isLoading) {
    return <Loading />
  }

  return (
<Router>
<div className="App">
  <Routes>
  <Route path="/" exact element={<Home />} />
  <Route path="/works" element={<MoreWorks />} />
  </Routes>
  
       
       
      
    </div>

</Router>
 


  );
}

export default App;





