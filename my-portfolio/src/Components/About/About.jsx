import React from 'react'
import './About.css'
import mac_logo from '../../assets/mac_logo.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={mac_logo} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I'm an experience Software Developer with over 3 years of experiences</p>
                <p>My passion for front end development is not only bla bla</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "70%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width: "50%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width: "50%"}}/></div>
                <div className="about-skill"><p>Python</p><hr style={{width: "80%"}}/></div>
                <div className="about-skill"><p>Java</p><hr style={{width: "80%"}}/></div>
                <div className="about-skill"><p>C</p><hr style={{width: "70%"}}/></div>
                <div className="about-skill"><p>Bash</p><hr style={{width: "60%"}}/></div>
            </div>
            
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>3+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>3.7</h1>
            <p>GPA</p>
        </div>
      </div>
    </div>
  )
}

export default About
