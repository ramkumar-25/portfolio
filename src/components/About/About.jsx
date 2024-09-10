import React from 'react'
import "./About.css"
import about_img from "../../assets/profile_img.jpg"

const About = () => {
  return (
    <div id='about' className='about'>
        <img src={about_img} alt="profile image" />
        <div className="about-me">
            <h1>About Me</h1>
            <p>I am a dynamic frontend developer with a passion for crafting visually appealing and functional user interfaces. With six months of hands-on experience in React.js development, I excel in creating dynamic and responsive web applications. My journey as a self-taught developer has been filled with challenges, but it has also honed my ability to work end-to-end on frontend development projects.</p>
        </div>
    </div>
  )
}

export default About