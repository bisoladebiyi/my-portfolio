import React from 'react'
import img from '../images/IMG_3445.jpg'


const Header = () => {
   
    return (

        <div className="header" data-aos="fade-up">
            <div className="header-text">
                <p>Hi there! 👋</p>
                <p className="name">I'm <span>Adebiyi Abisola Oreoluwa</span></p>
                <p className="job">A FRONTEND WEB DEVELOPER</p>
                <button className="btn">HIRE ME</button>
            </div>

            <div className="image-container">
                <div className="circle"></div>
                <img className="image" src={img} alt="" />
            </div>


        </div>
    )
}

export default Header
