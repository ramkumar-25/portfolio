import React from 'react'
import "./Project.css"
import bmi_calculator from "../../assets/bmi-calculator.png"
import tomato from "../../assets/tomato.png"
import edusity from "../../assets/edusity.png"
import education from "../../assets/education.png"

const Project = () => {
  return (
    <div  id="project" className='project'>
        <h1>Projects</h1>
        <div className="projects-container">
          <div className="projects">
            <img src={bmi_calculator} alt="bmi-calculator website image" />
           <div className='btns'>
           <button><a href="https://github.com/ramkumar-25/BMI-Calculator" target='_blank'>View Code</a></button>
           <button><a href="https://bmicalu.netlify.app/" target='_blank'>Go live</a></button>
            </div>
          </div>
          <div className="projects">
            <img src={tomato} alt="food-ordering website" />
           <div className='btns'>
           <button><a href="https://github.com/ramkumar-25/react-project" target='_blank'>View Code</a></button>
           <button><a href="https://tomato-foodie.netlify.app" target='_blank'>Go live</a></button>
            </div> 
          </div>
          <div className="projects">
            <img src={edusity} alt="education website" />
          <div className='btns'>
            <button><a href="https://github.com/ramkumar-25/react-project2" target='_blank'>View Code</a></button>
            <button><a href="https://education-edusity.netlify.app" target='_blank'>Go live</a></button>
            </div>
            </div>  
            <div className="projects">
            <img src={education} alt="education website" />
          <div className='btns'>
          <button><a href="https://github.com/ramkumar-25/basic-website" target='_blank'>View Code</a></button>
          <button><a href="https://animated-chaja-e517d4.netlify.app" target='_blank'>Go live</a></button>
            </div>  
          </div>
        </div>
        
    </div>
  )
}

export default Project