
import { useState, useEffect } from 'react';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineGooglePlus, AiOutlineFacebook, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login, emplogin, clearAuthError } from '../../Redux/Actions/userActions';
import png1 from '../../images/form.png';
import png2 from '../../images/secure.png';

const Login = () => {
  const [isGuestLogin, setIsGuestLogin] = useState(false);
  const [emp_id, setEmp_id] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { 
    error, 
    isAuthenticateduser, 
    isAuthenticatedemployee, 
    emp 
  } = useSelector(state => state.authState);

  // Handle navigation based on authentication status
  useEffect(() => {
    if (isAuthenticatedemployee) {
      if (emp?.role === 'admin') {
        navigate("/admin-dashboard/adminhome");
      } else if (emp?.role === 'hr') {
        navigate("/hr-dashboard/hr-home");
      } else if (emp?.role === 'employee') {
        navigate("/emp-dashboard/emphome");
      }
    } else if (isAuthenticateduser) {
      navigate("/user-dashboard");
    }

    if (error) {
      toast.error(error);
      dispatch(clearAuthError());
    }
  }, [error, isAuthenticateduser, isAuthenticatedemployee, emp, navigate, dispatch]);

  const toggleForm = () => setIsGuestLogin(!isGuestLogin);
  const togglePassword = () => setShowPassword(!showPassword);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please fill all fields');
      return;
    }
    dispatch(login(email, password));
  };

  const employeeLoginSubmit = (e) => {
    e.preventDefault();
    if (!emp_id || !password) {
      toast.error('Please fill all fields');
      return;
    }
    dispatch(emplogin(emp_id, password));
  };

  return (
    <div className={`login-container ${isGuestLogin ? 'login-active' : ''}`}>
      <div className="login-form-container login-guest-login">
        <form onSubmit={handleLoginSubmit}>
          <h1>Login as Guest</h1>
          <div className="login-social-icons">
            <a href="#" className="login-icon"><AiOutlineGooglePlus /></a>
            <a href="#" className="login-icon"><AiOutlineFacebook /></a>
            <a href="#" className="login-icon"><AiOutlineGithub /></a>
            <a href="#" className="login-icon"><AiOutlineLinkedin /></a>
          </div>
          <span>or use your email for guest login</span>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span onClick={togglePassword} className="login-toggle-icon">
                {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
              </span>
            </div>
            <Link to="/registerr" className='guest-forget'>Don't Have an account? Sign Up</Link>
          </div>
          <button className='login-submit' type="submit">Login as Guest</button>
        </form>
      </div>
      <div className="login-form-container login-sign-in">
        <form onSubmit={employeeLoginSubmit}>
          <h1>Employee Login</h1>
          <div className="login-social-icons">
            <a href="#" className="login-icon"><AiOutlineGooglePlus /></a>
            <a href="#" className="login-icon"><AiOutlineFacebook /></a>
            <a href="#" className="login-icon"><AiOutlineGithub /></a>
            <a href="#" className="login-icon"><AiOutlineLinkedin /></a>
          </div>
          <span>or use your employee credentials</span>
          <input 
            type="text" 
            value={emp_id} 
            placeholder="EMP ID" 
            onChange={(e) => setEmp_id(e.target.value)} 
            required
          />
          <div className="input-group">
            <label htmlFor="empPassword">Password</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                id="empPassword"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span onClick={togglePassword} className="login-toggle-icon">
                {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
              </span>
            </div>
          </div>
          <Link to="/forget" className='forget'>Forgot Password?</Link>
          <button type='submit'>Sign In</button>
        </form>
      </div>
      <div className="login-toggle-container">
        <div className="login-toggle">
          <div className="login-toggle-panel login-toggle-left">
            <img className="login-image" src={png2} alt="Secure" />
            <p>Are you an employee? Login here</p>
            <button className="login-hidden" onClick={toggleForm}>Sign In</button>
          </div>
          <div className="login-toggle-panel login-toggle-right">
            <img className="login-image" src={png1} alt="Form" />
            <p>New here? Login as a guest</p>
            <button className="login-hidden" onClick={toggleForm}>Login as Guest</button>
          </div>
        </div>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default Login;