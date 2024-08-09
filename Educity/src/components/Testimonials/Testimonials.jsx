import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/edusity_assets/next-icon.png'
import back_icon from '../../assets/edusity_assets/back-icon.png'
import user_1 from '../../assets/edusity_assets/user-1.png'
import user_2 from '../../assets/edusity_assets/user-2.png'
import user_3 from '../../assets/edusity_assets/user-3.png'
import user_4 from '../../assets/edusity_assets/user-4.png'

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideFoward =() =>{
    if(tx >-50){
      tx -=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  }
  const slideBackward =() =>{
    if(tx <0){
      tx +=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
    
  }
  return (
    <div className='testimonial' id='testimonials'>
        <img src={next_icon} alt='' className='next_iconb'onClick={slideFoward}/>
        <img src={back_icon} alt='' className='back_iconb'onClick={slideBackward}/>
        <div className="slider">
          <ul ref ={slider}>
            <li>
              <div className="slide">
                <div className="user_info">
                  <img src={user_1} alt=''/>
                  <div>
                    <h3>William Johnson</h3>
                    <span>Edisity USA</span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user_info">
                  <img src={user_2} alt=''/>
                  <div>
                    <h3>Partricis Seci</h3>
                    <span>Edisity USA</span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user_info">
                  <img src={user_3} alt=''/>
                  <div>
                    <h3>James Johnson</h3>
                    <span>Edisity USA</span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user_info">
                  <img src={user_4} alt=''/>
                  <div>
                    <h3>William James</h3>
                    <span>Edisity USA</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Testimonials
