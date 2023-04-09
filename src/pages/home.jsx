import React from "react";
import Header from "../components/home";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <div className="container">
      <Navbar className="navbar" />
      <Header />
    </div>
  );
};

export default Home;
