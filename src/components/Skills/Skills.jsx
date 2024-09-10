import React from 'react'
import "./Skills.css"

const Skills = () => {
  return (
    <div id='skills' className='skills'>
        <h1>Skills</h1>
        <div className="skills-list">
          <div className="skill"><p>HTML</p><hr style={{"width":"90%"}}/></div>
          <div className="skill"><p>CSS</p><hr style= {{"width":"80%"}} /></div>
          <div className="skill"><p>JAVASCRIPT</p><hr style= {{"width":"70%"}}/></div>
          <div className="skill"><p>BOOTSTRAP</p><hr style={{"width":"70%"}} /></div>
          <div className="skill"><p>REACT JS</p><hr style={{"width":"80%"}} /></div>
          <div className="skill"><p>GIT</p><hr style={{"width":"70%"}} /></div>
        </div>
    </div>
  )
}

export default Skills