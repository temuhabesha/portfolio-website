import React from 'react'
import './Footer.css'
import userprofile from '../../assets/icons/icons8-male-user-30.png'

const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src="footerlogo" alt="" />
                <p>simple text</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={userprofile} alt="" />
                    <input type="Email" name="" id="" placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
<hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">
                &copy; 2023 Tom Habesha,All rights
            </p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
