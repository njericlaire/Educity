import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/edusity_assets/msg-icon.png'
import mail_icon from '../../assets/edusity_assets/mail-icon.png'
import phone_icon from '../../assets/edusity_assets/phone-icon.png'
import location_icon from '../../assets/edusity_assets/location-icon.png'
import white_arrow from '../../assets/edusity_assets/white-arrow.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact_col'>
            <h3>Send us a message<img src={msg_icon} alt=''/></h3>
            <p>Feel Free to reach out through form.Your feedback,question and suggesstion are important to us as we strive to provide expentional servises to our university community</p>
            <ul>
                <li ><img src={mail_icon} alt=''/>Contact@gamil.com</li>
                <li><img src={phone_icon} alt=''/>+1234677</li>
                <li><img src={location_icon} alt=''/>Nairobi,Kenya</li>
            </ul>
            <div className="contact_col">
                <form>
                    <label>Your name</label>
                    <input type="text" name='name' placeholder='Enter your name' required/>
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter phone number' required />
                    <label>Write your message</label>
                    <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn btn-dark'>Submit<img src={mail_icon} alt=''/></button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
