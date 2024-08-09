import React from 'react'
import './About.css'
import about_img from '../../assets/edusity_assets/about.png'
import play_icon from '../../assets/edusity_assets/play-icon.png'
const About = () => {
  return (
    <div className='about'>
        <div className="aboutleft">
            <img src={about_img} alt='' className='about-img'/>
            <img src={play_icon} alt='' className='play_icon'/>
        </div>
        <div className="aboutright">
            <h2>ABOUT UNIVERSITY</h2>
            <h3>NUTURING TOMORROWS LEADERS TODAY</h3>
        </div>
    </div>
  )
}

export default About
