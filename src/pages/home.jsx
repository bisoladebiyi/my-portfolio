import React from 'react'
import Header from "../components/home";
import About from "../components/about";
import Navbar from '../components/navbar';
import SideNav from "../components/side-nav";
import MyWorks from "../components/my-works";
import Contact from "../components/contact";

const Home = () => {
    return (
        <div>
              
       <Navbar className="navbar"/>
       <Header/>
       <About/>
       <MyWorks />
       <Contact/>
       <SideNav />
        </div>
    )
}

export default Home
