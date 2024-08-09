import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/edusity_assets/msg-icon.png'
import mail_icon from '../../assets/edusity_assets/mail-icon.png'
import phone_icon from '../../assets/edusity_assets/phone-icon.png'
import location_icon from '../../assets/edusity_assets/location-icon.png'
import white_arrow from '../../assets/edusity_assets/white-arrow.png'

const Contact = () => {
    
        const [result, setResult] = React.useState("");
      
        const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "30192149-96f2-4763-aa7f-3ec9088e3f5f");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
      
          if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
          } else {
            console.log("Error", data);
            setResult(data.message);
          }
        };
  return (
    <div className='contact' id='contact'>
        <div className='contact_col'>
            <h3>Send us a message<img src={msg_icon} alt=''/></h3>
            <p>Feel Free to reach out through form.Your feedback,question and suggesstion are important to us as we strive to provide expentional servises to our university community</p>
            <ul>
                <li ><img src={mail_icon} alt=''/>Contact@gamil.com</li>
                <li><img src={phone_icon} alt=''/>+1234677</li>
                <li><img src={location_icon} alt=''/>Nairobi,Kenya</li>
            </ul>
            
        </div>
        <div className="contact_col">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type="text" name='name' placeholder='Enter your name' required/>
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter phone number' required />
                    <label>Write your message</label>
                    <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn btn-dark'>Submit<img src={mail_icon} alt=''/></button>
                </form>
                <span>{result}</span>
            </div>
    </div>
  )
}

export default Contact
