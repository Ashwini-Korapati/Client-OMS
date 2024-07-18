import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Forgetimg from '../../images/sav3.png';  
import './Forget.css';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword, clearAuthError } from '../../Redux/Actions/userActions';
import { ToastContainer,toast } from 'react-toastify';

const Forget = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { error, message } = useSelector(state => state.authState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };

 

  useEffect(() => {
    if (message) {
            console.log(message);
        // navigate('/login');
    }
    if (error) {
        toast(error, {
          
            position: "top-center",
            type: 'error',
            onOpen: () => { dispatch(clearAuthError()) }
        });
    }
}, [error, error, dispatch, navigate]);

  return (
    <div className="forget-container">
      <div className="forget-card">
        <div className="forget-image-container">
          <img src={Forgetimg} alt="Forget Image" />
        </div>
        <div className="form1-container">
          <div className="formcont1">
            <h2>Forget Password?</h2>
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
              <ToastContainer/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forget;
