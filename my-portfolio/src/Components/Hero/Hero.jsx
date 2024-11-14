import React, {useEffect} from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Typed from 'typed.js';
const Hero = () => {
  useEffect(() => {
    const typed = new Typed(".typewritter", {
      strings: [
        "Student at McMaster University",
        "Programmer",
        "Web Developer",
        "Software Engineer",
        "High School Athlete",
        "Engineering Student",
      ],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true,
    });
    // Cleanup Typed instance on component unmount
    return () => typed.destroy();
  }, []);
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1>
        <span className="hero-name">Hi! I'm Harold,</span>{" "}
        <span className="typewritter"></span>
      </h1>
      <p>
        Inspired by innovation and technology I want to use my creativity to help craft the future digital era and shape a brighter world. 
        Feel free to reach out and connect with me.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">
          <a href="/Harold_Le_Resume.pdf" download="Harold_Le_Resume.pdf">My Resume</a>
        </div>
      </div>
    </div>
  )


}

export default Hero
