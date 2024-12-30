import React from 'react'
import './About.css'
import aboutimage from '../../assets/image/aboutimg.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            {/* <img src="" alt="" /> */}
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={aboutimage} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p> I'm a creative Full Stack Web Developer , and I'm very passionate and dedicated to my work. With few years experience as a professional Full Stack Developer, I have acquired the skills necessary to build great, appealing, and premium websites that meet the latest web standards.</p>
                    <p>Detail-orientated Web Developer adept at interpreting blueprints, working with others, and meeting production deadlines. Skilled at quickly learning new processes, technologies, and machinery. Self-motivated with strong organizational and time management abilities. Most importantly, I'm constantly trying to learn new skills to improve myself and my work.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p><hr style={{width:"50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>mediaquery & bootstrap</p><hr style={{width:"70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>javascript & react</p><hr style={{width:"60%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>jquery & API integretion</p><hr style={{width:"60%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>node.js & Mysql</p><hr style={{width:"50%"}}/>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About
