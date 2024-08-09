import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/edusity_assets/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
    const [sticky, setSticky]=useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 50? setSticky(true) :setSticky(false);
        })
    },[]);


  return (
    <nav className='darkNav'>
       <header className= {`' ${sticky ? 'bg-dark':'bg-transparent' } d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 '`}>
       
        <div className="col-md-3 mb-2 mb-md-0">
        <img src={logo} alt='' className='logo'/> 
        </div>

  
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
          <li><a href="#" className="nav-link px-2">Program</a></li>
          <li><a href="#" className="nav-link px-2">Testimonials</a></li>
          <li><a href="#" className="nav-link px-2">Contact</a></li>
          <li><a href="#" className="nav-link px-2">About</a></li>
        </ul>
  
        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">Login</button>
          <button type="button" className="btn btn-primary">Sign-up</button>
        </div>
       
      </header>
      
    </nav>
  )
}

export default Navbar
