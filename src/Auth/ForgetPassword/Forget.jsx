import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Forgetimg from '../../images/sav3.png';
import './Forget.css';

const Forget = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3030/forget', { email })
      .then(result => {
        if (result.data === 'Success') {
          setMessage("Reset Link Sent Successfully");
          alert("Link sent successfully");
          navigate('/');
        } else {
          setMessage('Invalid Email');
        }
      })
      .catch(err => {
        console.log(err);
        setMessage("Error sending mail");
      });
  }

  return (
    <div className="forget-container">
      <div className="forget-card">
        <div className="forget-image-container">
          <img src={Forgetimg} alt="Forget Image" />
        </div>
        <div className="form1-container">
          <div className="formcont1">
            <h2 className="">
              Forget Password?
            </h2>
            <p className='foregt-p'>No Worries, We'll send you reset instructions</p>
            <form className="form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder='Enter your email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='Forget-password'>
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </div>
              <p className="back-link1">
                Back to{" "}
                <NavLink to="/login" className="back-link">
                  Signin
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forget;
