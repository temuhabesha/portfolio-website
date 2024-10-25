import React from 'react'
import './Hero.css'
import profileimage from '../../assets/image/profileimage1.png'
import Anchorlink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
    <img src={profileimage} alt="" />      
    <h1><span>I'm Temesgen Wondim</span>,and also Fullstack Web Developer</h1>
    <p>I am a Fullstack Web developer </p>
    <div className="hero-action">
        <div className="hero-connect"><Anchorlink className='anchor-link' offset={50} href='#contact'>connect with me</Anchorlink></div>
        <div className="hero-resume">My resume</div>
    </div>
    </div>
  )
}

export default Hero
