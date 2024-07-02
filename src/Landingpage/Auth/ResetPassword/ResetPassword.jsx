import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Forgetimg from '../../images/sav3.png';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { resetPassword, clearAuthError } from '../../Redux/Actions/userActions';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import './ResetPassword.css';

const initialState = {
  name: '',
  password: '',
};

const ResetPassword = () => {
  const [message, setMessage] = useState('Weak');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector(state => state.authState);
  const navigate = useNavigate();
  const { token } = useParams();

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
        ? 'Strong'
        : verifiedList.length > 2
        ? 'Medium'
        : 'Weak';

    setMessage(strength);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('password', password);
    formData.append('confirmPassword', confirm_password);

    dispatch(resetPassword(formData, token)); // axios.post('http://localhost:3030/reset-password', { password })
  };

  useEffect(() => {
    if (isAuthenticated) {
      // toast('Password Reset Success!', {
      //   type: 'success',
      //   position: toast.POSITION.BOTTOM_CENTER,
      // });
      navigate('/login');
      return;
    }
    if (error) {
      // toast(error, {
      //   position: toast.POSITION.BOTTOM_CENTER,
      //   type: 'error',
      //   onOpen: () => {
        console.log(error)

          dispatch(clearAuthError());
        }
      
      return;
 } ,[isAuthenticated, error, dispatch, navigate]);

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
                <label htmlFor="password">Enter the Password</label>
                <div className="password-input">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={password}
                    onChange={e => {
                      setPassword(e.target.value);
                      handlePassword(e.target.value);
                    }}
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
              <div className="input-group">
                <label htmlFor="confirmPassword">Re-enter your Password</label>
                <div className="password-input">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirm_password}
                    onChange={e => setConfirmPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={togglePassword}
                  >
                    {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                  </button>
                </div>
              </div>
              <div className='Forget-password'>
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </div>
              <p className="back-link1">
                Back to{' '}
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
};

export default ResetPassword;
