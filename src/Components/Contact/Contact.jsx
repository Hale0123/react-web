import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Feel free to reach out and connect with me.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p>haroldle2735@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>902-626-5831</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>ON, Canada</p>
                    </div>
                </div>
            </div>
            <form  action="https://api.web3forms.com/submit" method="POST" className="contact-right">
                <input type="hidden" name="access_key" value="5ac8e2a9-814e-41e2-aac1-08cbbe7eca48" />
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
        </form>
        </div>
    </div>
  )
}

export default Contact
