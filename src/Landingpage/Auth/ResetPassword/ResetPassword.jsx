import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Forgetimg from '../../images/sav3.png';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import './ResetPassword.css';

const initialState = {
  name: '',
  password: '',
};

const ResetPassword = () => {
  const [formData, setFormData] = useState(initialState);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { password } = formData;

  const [showPassword, setShowPassword] = useState(false);

  axios.defaults.withCredentials = true;

  const handlePassword = (passwordValue) => {
    const StrengthChecks = {
      length: passwordValue.length >= 8,
      hasUpperCase: /[A-Z]+/.test(passwordValue),
      hasLowerCase: /[a-z]+/.test(passwordValue),
      hasDigit: /[0-9]+/.test(passwordValue),
      hasSpecialChar: /[^A-Za-z0-9]+/.test(passwordValue),
    };

    let verifiedList = Object.values(StrengthChecks).filter((value) => value);

    let strength =
      verifiedList.length === 5
        ? "Strong"
        : verifiedList.length > 2
        ? "Medium"
        : "Weak";

    setMessage(strength);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "password") {
      handlePassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3030/reset-password', { password })
      .then(result => {
        if (result.data === 'Success') {
          setMessage("Password Changed Successfully");
          alert("Password changed successfully");
          navigate('/');
        } else {
          setMessage('Error changing password');
        }
      })
      .catch(err => {
        console.log(err);
        setMessage("Error changing password");
      });
  };

  return (
    <div className="forget-container">
      <div className="forget-card">
        <div className="forget-image-container">
          <img src={Forgetimg} alt="Forget Image" />
        </div>
        <div className="form1-container">
          <div className="formcont1">
            <h2>Change Password</h2>
            <p className='foregt-p'>In order to protect your account, make sure <br/>your password:</p>
            <ul>
              <li>Is longer than 8 characters</li>
              <li>Does not match or significantly contain your username, e.g. do not use 'usernamel23'</li>
            </ul>
            <form className="form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <div className="password-input">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={togglePassword}
                  >
                    {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                  </button>
                </div>
                <div className="password-strength">
                  <span>Your Password is {message}</span>
                </div>
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

export default ResetPassword;
