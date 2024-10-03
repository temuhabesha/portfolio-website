import React from 'react'
import './Contact.css'
import callicon from '../../assets/icons/icons8-call-50.png'
import locationicon from '../../assets/icons/icons8-location-50.png'
import mailicon from '../../assets/icons/icons8-mail-50.png'

const Contact = () => {


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a25a94d3-18c9-43c0-ba1a-e3bcc4741991");

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
  };


  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in teuch</h1>
        {/* <img src="" alt="" /> */}
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>if you have any client which you want full stack web developer you can get by the following social media</p>
            <div className="contact-details">
                <div className="contact-detail">
                   <img src={mailicon} alt="" /><p>temesgenwondim77@gmail.com</p>
                </div>
                <div className="contact-detail">
                   <img src={callicon} alt="" /><p>+251 910059801</p>
                </div>
                <div className="contact-detail">
                    <img src={locationicon} alt="" /><p>Bahir Dar,Ethiopia</p>
                </div>
                
            </div>
        </div>
       
       <form onSubmit={onSubmit} className='contact-right'>
        <label htmlFor="">Your Name</label>
        <input type="text" name="name" id="" placeholder='Enter your name'/>
        <label htmlFor="">Your Email</label>
        <input type="Email" name="Email" id="" placeholder='Enter your Email'/>
        <label htmlFor="">Write your message here</label>
        <textarea name="message" rows={8} placeholder='Enter your message'></textarea>
        <button type='submit' className="contact-submit">Submit Now</button>
       </form>

      </div>
    </div>
  )
}

export default Contact
