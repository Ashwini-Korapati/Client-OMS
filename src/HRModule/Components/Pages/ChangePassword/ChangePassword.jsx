import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { changePassword, clearPasswordError } from '../../../Redux/Reducers/changepasswordReducer'
import '../ChangePassword/ChangePassword.css'
// import change from '../../../Assets/changpsd.jpg';
 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
const Changepassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('Weak');
  const [showPassword, setShowPassword] = useState(false);
 
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector(state => state.authState);
  const { loading, success, error: passwordError, message } = useSelector(state => state.changepasswordState);
  const navigate = useNavigate();
 
  useEffect(() => {
    if (success) {
      console.log('password changed successfully')
      toast.success(message || 'Password changed successfully');
    //   navigate('/login');
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
        <div className="forget-image-container">
          {/* <img src={change} alt="Forget Image" /> */}
        </div>
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
                    {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
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
                    {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
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