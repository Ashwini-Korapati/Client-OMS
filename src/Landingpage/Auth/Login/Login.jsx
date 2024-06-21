import React, { useState } from 'react';
import './Login.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineGooglePlus, AiOutlineFacebook, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import axios from 'axios';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import png1 from '../../images/form.png';
import png2 from '../../images/secure.png';
 
const initialState = {
  name: '',
  password: '',
};
 
function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const toggleForm = () => setIsSignUp(!isSignUp);
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
 
    let verifiedList = Object.values(StrengthChecks).filter(value => value);
 
    let strength =
      verifiedList.length === 5
        ? "Strong"
        : verifiedList.length > 2
        ? "Medium"
        : "Weak";
 
    setMessage(strength);
  };
 
  const togglePassword = () => setShowPassword(!showPassword);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "password") handlePassword(value);
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
<div className={`login-container ${isSignUp ? 'login-active' : ''}`}>
<div className="login-form-container login-sign-up">
<form>
<h1>Register</h1>
<div className="login-social-icons">
<a href="#" className="login-icon"><AiOutlineGooglePlus /></a>
<a href="#" className="login-icon"><AiOutlineFacebook /></a>
<a href="#" className="login-icon"><AiOutlineGithub /></a>
<a href="#" className="login-icon"><AiOutlineLinkedin /></a>
</div>
<span>or use your email for registration</span>
<input type="text" placeholder="Name" />
<input type="email" placeholder="Email" />
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
<span onClick={togglePassword} className="password-toggle-icon">
                {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
</span>
</div>
<div className="password-strength">
<span>Your Password is {message}</span>
</div>
</div>
<button>Sign Up</button>
</form>
</div>
<div className="login-form-container login-sign-in">
<form>
<h1>Login</h1>
<div className="login-social-icons">
<a href="#" className="login-icon"><AiOutlineGooglePlus /></a>
<a href="#" className="login-icon"><AiOutlineFacebook /></a>
<a href="#" className="login-icon"><AiOutlineGithub /></a>
<a href="#" className="login-icon"><AiOutlineLinkedin /></a>
</div>
<span>or use your email password</span>
<input type="email" placeholder="Email" />
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
<span onClick={togglePassword} className="password-toggle-icon">
                {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
</span>
</div>
</div>
<a href="/forget" className='forget'>Forget Password?</a>
<NavLink to='/hr-dashboard/hr-home'>
<button>Sign In</button>
</NavLink>
</form>
</div>
<div className="login-toggle-container">
<div className="login-toggle">
<div className="login-toggle-panel login-toggle-left">
<img className="login-image" src={png2} alt="Secure" />
<p>Already a member? Log in here</p>
<button className="login-hidden" onClick={toggleForm}>Sign In</button>
</div>
<div className="login-toggle-panel login-toggle-right">
<img className="login-image" src={png1} alt="Form" />
<p>New here? Start by logging in</p>
<button className="login-hidden" onClick={toggleForm}>Sign Up</button>
</div>
</div>
</div>
</div>
  );
}
 
export default Login;