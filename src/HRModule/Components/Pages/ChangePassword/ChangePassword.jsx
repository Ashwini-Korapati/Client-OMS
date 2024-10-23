import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { changePassword, clearPasswordError, resetPasswordState } from '../../../Redux/Slices/changepasswordReducer'
import '../ChangePassword/ChangePassword.css';
 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
const Changepassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('Weak');
  const [showPassword, setShowPassword] = useState(false);
 
  const dispatch = useDispatch();
  const { loading, success, error: passwordError, message } = useSelector(state => state.changepasswordState);
  const navigate = useNavigate();
 
  useEffect(() => {
    if (success) {
      toast.success(message || 'Password changed successfully');
      setTimeout(() => {
        dispatch(resetPasswordState());
        navigate('/hr-dashboard/hr-home');
      }, 1000);
    }
 
    if (passwordError) {
      toast.error(passwordError);
      dispatch(clearPasswordError());
    }
  }, [success, passwordError, message, dispatch, navigate]);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changePassword({ oldPassword, newPassword }));
  };
 
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
 
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setNewPassword(newPassword);
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
        <div className="form1-container">
          <div className="formcont1">
            <h2>Change Password</h2>
            <form className="form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="oldPassword">Enter Old Password</label>
                <div className="password-input">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="oldPassword"
                    name="oldPassword"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={togglePassword}
                  >
                    {showPassword ? <IoMdEyeOff style={{ color: 'black' }} /> : <IoMdEye style={{ color: 'black' }} />}
                  </button>
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="newPassword">Change Your Password Here</label>
                <div className="password-input">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="newPassword"
                    name="newPassword"
                    value={newPassword}
                    onChange={handlePasswordChange}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={togglePassword}
                  >
                    {showPassword ? <IoMdEyeOff style={{ color: 'black' }} /> : <IoMdEye style={{ color: 'black' }} />}
                  </button>
                </div>
                <small className={`password-strength ${passwordStrength.toLowerCase()}`}>
                  {passwordStrength}
                </small>
              </div>
              <div className='Forget-password'>
                <button type="submit" className="submit-button" disabled={loading}>
                  {loading ? 'Submitting...' : 'Submit' }
                  <ToastContainer />
                </button>
              </div>
            </form>
          </div>  
        </div>
      </div>
    </div>
  );
};
 
export default Changepassword;