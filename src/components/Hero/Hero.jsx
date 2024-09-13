import React from 'react'
import "./Hero.css"
import profile_img from "../../assets/profile_img.jpg"
import resume from "../../assets/Resume.pdf"

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1>Hi I'm Ramkumar <span>Front End Developer</span></h1>
        <p>Working with my hands to make magic happen on the internet. View my <span>Projects</span> <span>resume</span> contact me or send me an email at ramkumar43540@gmail.com.</p>
        <p>Chennai,TamilNadu,India</p>
        <button><a href={resume} download="resume">Resume</a></button>        
    </div>
  )
}

export default Hero