import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Harold Le,</span> Software Engineer student based in Canada</h1>
      <p>Hi! I'm Harold Le. Inspired by innovation and technology I want to use my creativity to help craft the future digital era and shape a brighter world. Feel free to reach out and connect with me.</p>
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
