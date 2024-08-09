import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Title subtitle='our program' title='what we offer'/>
      <Programs/>
      <About/>
      <Title subtitle='Gallery' title='Campus photos'/>
      <Gallery/>
      <Title subtitle='Testimonials' title='What a student says'/>
      <Testimonials/>
      <Title subtitle='Contact' title='Talk to us'/>
      <Contact/>
    </div>
  )
}

export default App
