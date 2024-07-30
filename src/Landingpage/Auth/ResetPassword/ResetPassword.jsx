import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Forgetimg from '../../images/sav3.png';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { resetPassword, clearAuthError } from '../../Redux/Actions/userActions';
import { useParams } from 'react-router-dom';
import './ResetPassword.css';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('Weak'); // State for password strength
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector(state => state.authState);
  const navigate = useNavigate();
  const { token } = useParams();
  const [showPassword, setShowPassword] = useState(false);
  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('password', password);
    formData.append('confirmPassword', confirm_password);

    dispatch(resetPassword(formData, token));
  };

  useEffect(() => {
    if (isAuthenticated) {
      toast.success('Password has been reset successfully!', {
        position: "top-center",
        onClose: () => navigate('/login')
      });
    }
    if (error) {
      toast.error(error, {
        position: "top-center",
        onOpen: () => dispatch(clearAuthError())
      });
    }
  }, [isAuthenticated, error, dispatch, navigate]);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordStrength(checkPasswordStrength(newPassword));
  };

  const checkPasswordStrength = (password) => {
    if (password.length >= 8) {
      return 'Strong';
    } else if (password.length >= 6) {
      return 'Medium';
    } else {
      return 'Weak';
    }
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
                <label htmlFor="password">Enter the Password</label>
                <div className="password-input">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={togglePassword}
                  >
                    {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                  </button>
                </div>
                <small className={`password-strength ${passwordStrength.toLowerCase()}`}>
                  {passwordStrength}
                </small>
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
