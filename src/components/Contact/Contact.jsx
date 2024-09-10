import React from 'react'
import "./Contact.css"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-png.png"
import email_icon from "../../assets/email-icon-white-png-35.png"

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "457651c5-daae-4f1b-9def-1772eeeaaae1");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
    }
  return (
    <div id='contact' className="contact">
        <h1>Get in touch</h1>
        <div className="contact-container">
            <div className="contact-left">
                <h2>let's Connect</h2>
                <p>Get in touch with me and feel free to send me message about anything that you want me to work on. You can contact me anytime.</p>
             <div className="contacts">
                 <img src={email_icon} alt=""/>
                <p>ramkumar43540@gmail.com</p>
             </div> 
             <div className="contacts">
                <img src={phone_icon} alt=""></img>
                <p>9514445072</p>
            </div> 
                <div className="contacts">
                 <img src={location_icon} alt=""></img>
                  <p>Chennai,TamilNadu,India</p>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="name">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' id='name' />
                <label htmlFor="email">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' id='email' />
                <label htmlFor="message">Write your message</label>
                <textarea placeholder='Enter your message' name='message' id='message' rows="8" />
                <button className='contact-submit' type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact