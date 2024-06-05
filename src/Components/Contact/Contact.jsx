import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <form className="contact-form">
          <h1>GET IN TOUCH WITH US</h1>
          <div className="form-row">
          <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-row">
            <input className="phone-input" type="number" placeholder="Phone Number" required />
            <input type="text" placeholder="Subject" required />
          </div>
          <textarea className="textarea" placeholder="Message" required />
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
