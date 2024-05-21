import React from 'react';
import User from '../assets/images/User.png';
import Email from '../assets/images/Email.png';
import Message from '../assets/images/Message.png';

const Contact = () => {
  return (
    <div className="rightPanel contact-form">
      <h1>Contact me!</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">
            <img src={User} alt="Name Icon" />
          </label>
          <input type="text" id="name" name="name" placeholder="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <img src={Email} alt="Email Icon" />
          </label>
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">
            <img src={Message} alt="Message Icon" />
          </label>
          <textarea id="message" name="message" placeholder="Message"></textarea>
        </div>
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
