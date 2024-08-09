import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/edusity_assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero' id='hero'>
        <div className='herotext'>
      <h1>We ensure better Education for a better world</h1>
      <p>Our cutting edge curriculum is designed to empower students with knowledge, skills, and experince needed to excel in the dynamic field of education</p>
      <button className='btn btn-light'>Explore More <img src={dark_arrow} alt=''/></button>
    </div>
    </div>
  )
}

export default Hero
