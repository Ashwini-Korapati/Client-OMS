// // // import React, { useState } from 'react';
// // // import './Login.css';
// // // import { useNavigate } from 'react-router-dom';
// // // import { AiOutlineGooglePlus, AiOutlineFacebook, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
// // // import axios from 'axios';
// // // import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
// // // import png1 from '../../images/form.png';
// // // import png2 from '../../images/secure.png';
// // // import { Link, useLocation, useNavigate } from 'react-router-dom';
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import { clearAuthError, login } from '../../Redux/Actions/userActions'

// // // const initialState = {
// // //   emp_id: '',
// // //   password: '',
// // // };

// // // function Login() {
// // //   const [isGuestLogin, setIsGuestLogin] = useState(false);
// // //   const toggleForm = () => setIsGuestLogin(!isGuestLogin);
// // //   const [emp_id, setEmp_id] = useState("");
// // //   const [guestEmail, setGuestEmail] = useState("");
// // //   const [message, setMessage] = useState("");
// // //   const navigate = useNavigate();
// // //   const [password, setPassword] = useState("");
// // //   const [showPassword, setShowPassword] = useState(false);

// // //   const { loading, error, isAuthenticated } = useSelector(state => state.authState)
// // //   const redirect = location.search?'/'+location.search.split('=')[1]:'/';

// // //   axios.defaults.withCredentials = true;

// // //   const handlePassword = (passwordValue) => {
// // //     const StrengthChecks = {
// // //       length: passwordValue.length >= 8,
// // //       hasUpperCase: /[A-Z]+/.test(passwordValue),
// // //       hasLowerCase: /[a-z]+/.test(passwordValue),
// // //       hasDigit: /[0-9]+/.test(passwordValue),
// // //       hasSpecialChar: /[^A-Za-z0-9]+/.test(passwordValue),
// // //     };

// // //     let verifiedList = Object.values(StrengthChecks).filter(value => value);

// // //     let strength = verifiedList.length === 5
// // //       ? "Strong"
// // //       : verifiedList.length > 2
// // //         ? "Medium"
// // //         : "Weak";

// // //     setMessage(strength);
// // //   };

// // //   const togglePassword = () => setShowPassword(!showPassword);

// // //   const handleLoginSubmit = (e) => {
// // //     e.preventDefault();
// // //     console.log("Submitting login with emp_id:", emp_id, "password:", password); 

// // //     axios.post('http://localhost:8000/api/v1/employee/login', { emp_id, password })
// // //       .then(result => {
// // //         if (result.status === 200) {
// // //           setMessage("Login Successfully");
// // //           navigate('/hr-dashboard/hr-home');
// // //         } else {
// // //           setMessage('Error while login');
// // //         }
// // //       })
// // //       .catch(err => {
// // //         console.error("Error while logging in:", err); // Enhanced logging
// // //         setMessage("Error while login");
// // //       });
// // //   };

// // //   const handleGuestLoginSubmit = (e) => {
// // //     e.preventDefault();
// // //     console.log("Submitting guest login with email:", guestEmail, "password:", password); 

// // //     axios.post(`${BACKEND_URL}/api/v1/guest/login`, { email: guestEmail, password })
// // //       .then(result => {
// // //         if (result.status === 200) {
// // //           setMessage("Login Successfully");
// // //           navigate('/guest-dashboard');
// // //         } else {
// // //           setMessage('Error while login');
// // //         }
// // //       })
// // //       .catch(err => {
// // //         console.error("Error while logging in:", err); // Enhanced logging
// // //         setMessage("Error while login");
// // //       });
// // //   };

// // //   return (
// // //     <div className={`login-container ${isGuestLogin ? 'login-active' : ''}`}>
// // //       <div className="login-form-container login-guest-login">
// // //         <form onSubmit={handleGuestLoginSubmit}>
// // //           <h1>Login as Guest</h1>
// // //           <div className="login-social-icons">
// // //             <a href="#" className="login-icon"><AiOutlineGooglePlus /></a>
// // //             <a href="#" className="login-icon"><AiOutlineFacebook /></a>
// // //             <a href="#" className="login-icon"><AiOutlineGithub /></a>
// // //             <a href="#" className="login-icon"><AiOutlineLinkedin /></a>
// // //           </div>
// // //           <span>or use your email for guest login</span>
// // //           <input type="email" placeholder="Email" value={guestEmail} onChange={e => setGuestEmail(e.target.value)} />
// // //           <div className="input-group">
// // //             <label htmlFor="password">Password</label>
// // //             <div className="password-input">
// // //               <input
// // //                 type={showPassword ? 'text' : 'password'}
// // //                 id="password"
// // //                 name="password"
// // //                 value={password}
// // //                 onChange={(e) => {
// // //                   setPassword(e.target.value);
// // //                   handlePassword(e.target.value);
// // //                 }}
// // //               />
// // //               <span onClick={togglePassword} className="login-toggle-icon">
// // //                 {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
// // //               </span>
              
// // //             </div>
// // //             <a href="/register" className='guest-forget'>Dont Have an account? SignUp</a>
// // //           </div>
// // //           <button type="submit">Login as Guest</button>
// // //         </form>
// // //       </div>
// // //       <div className="login-form-container login-sign-in">
// // //         <form onSubmit={handleLoginSubmit}>
// // //           <h1>Login</h1>
// // //           <div className="login-social-icons">
// // //             <a href="#" className="login-icon"><AiOutlineGooglePlus /></a>
// // //             <a href="#" className="login-icon"><AiOutlineFacebook /></a>
// // //             <a href="#" className="login-icon"><AiOutlineGithub /></a>
// // //             <a href="#" className="login-icon"><AiOutlineLinkedin /></a>
// // //           </div>
// // //           <span>or use your email password</span>
// // //           <input type="text" value={emp_id} placeholder="EMP ID" onChange={e => setEmp_id(e.target.value)} />
// // //           <div className="input-group">
// // //             <label htmlFor="password">Password</label>
// // //             <div className="password-input">
// // //               <input
// // //                 type={showPassword ? 'text' : 'password'}
// // //                 name="password"
// // //                 value={password}
// // //                 onChange={e => setPassword(e.target.value)}
// // //               />
              
// // //               <span onClick={togglePassword} className="login-toggle-icon">
// // //                 {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
// // //               </span>
// // //             </div>
// // //           </div>
// // //           <a href="/forget" className='forget'>Forget Password?</a>
// // //           <button type='submit'>Sign In</button>
// // //         </form>
// // //       </div>
// // //       <div className="login-toggle-container">
// // //         <div className="login-toggle">
// // //           <div className="login-toggle-panel login-toggle-left">
// // //             <img className="login-image" src={png2} alt="Secure" />
// // //             <p>Are you a employee login here</p>
// // //             <button className="login-hidden" onClick={toggleForm}>Sign In</button>
// // //           </div>
// // //           <div className="login-toggle-panel login-toggle-right">
// // //             <img className="login-image" src={png1} alt="Form" />
// // //             <p>New here? Login as a guest</p>
// // //             <button className="login-hidden" onClick={toggleForm}>Login as Guest</button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Login;



// // import React, { useState, useEffect } from 'react';
// // import './Login.css';
// // import { useNavigate, useLocation, Link } from 'react-router-dom';
// // import { AiOutlineGooglePlus, AiOutlineFacebook, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
// // import axios from 'axios';
// // import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
// // import png1 from '../../images/form.png';
// // import png2 from '../../images/secure.png';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { clearAuthError, login , emplogin  } from '../../Redux/Actions/userActions';
// // import { NavLink } from 'react-router-dom';
// // import { toast } from 'react-toastify';

// // function Login() {
// //   const [isGuestLogin, setIsGuestLogin] = useState(false);
// //   const toggleForm = () => setIsGuestLogin(!isGuestLogin);
// //   const [emp_id, setEmp_id] = useState("");
// //   const [guestEmail, setGuestEmail] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [email , setEmail] = useState("")
  
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const location = useLocation();
  
// //   const { loading, error, isAuthenticateduser , isAuthenticatedemployee } = useSelector(state => state.authState);
// //   // const redirect = location.search ? '/' + location.search.split('=')[1] : '/';
// //   // const redirect = navigate("/hr-dashboard/hr-home")
  
// //   axios.defaults.withCredentials = true;
  
// //   useEffect(() => {
// //     if (isAuthenticatedemployee) {
// //       navigate("/hr-dashboard/hr-home");
// //     } else if (isAuthenticateduser) {
// //       navigate("/user-dashboard");
// //     }
  
// //     // Clean up error state
   
// //   }, [error, isAuthenticateduser, isAuthenticatedemployee, dispatch, navigate]);
  

// //   const handlePassword = (passwordValue) => {
// //     const StrengthChecks = {
// //       length: passwordValue.length >= 8,
// //       hasUpperCase: /[A-Z]+/.test(passwordValue),
// //       hasLowerCase: /[a-z]+/.test(passwordValue),
// //       hasDigit: /[0-9]+/.test(passwordValue),
// //       hasSpecialChar: /[^A-Za-z0-9]+/.test(passwordValue),
// //     };
  
// //     let verifiedList = Object.values(StrengthChecks).filter(value => value);
  
// //     let strength = verifiedList.length === 5
// //       ? "Strong"
// //       : verifiedList.length > 2
// //         ? "Medium"
// //         : "Weak";
  
// //     setMessage(strength);
// //   };
  
// //   const togglePassword = () => setShowPassword(!showPassword);

// //   const handleLoginSubmit = (e) => {
// //     e.preventDefault();
// //     dispatch(login(email, password));
// //   };

// //   const employeeLoginSubmit = (e) => {
// //     e.preventDefault();
// //     dispatch(emplogin(emp_id, password));
// //   };

// //   // const handleGuestLoginSubmit = (e) => {
// //   //   e.preventDefault();
// //   //   axios.post('http://localhost:8000/api/v1/login', { email, password })
// //   //     .then(result => {
// //   //       if (result.status === 200) {
// //   //         setMessage("Login Successfully");
// //   //         navigate('/hr-dashboard/hr-home');
// //   //       } else {
// //   //         setMessage('Error while login');
// //   //       }
// //   //     })
// //   //     .catch(err => {
// //   //       console.error("Error while logging in:", err);
// //   //       setMessage("Error while login");
// //   //     });
// //   // };

// //   return (
// //     <div className={`login-container ${isGuestLogin ? 'login-active' : ''}`}>
// //       <div className="login-form-container login-guest-login">
// //         <form onSubmit={handleLoginSubmit}>
// //           <h1>Login as Guest</h1>
// //           <div className="login-social-icons">
// //             <a href="#" className="login-icon"><AiOutlineGooglePlus /></a>
// //             <a href="#" className="login-icon"><AiOutlineFacebook /></a>
// //             <a href="#" className="login-icon"><AiOutlineGithub /></a>
// //             <a href="#" className="login-icon"><AiOutlineLinkedin /></a>
// //           </div>
// //           <span>or use your email for guest login</span>
// //           <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
// //           <div className="input-group">
// //             <label htmlFor="password">Password</label>
// //             <div className="password-input">
// //               <input
// //                 type={showPassword ? 'text' : 'password'}
// //                 id="password"
// //                 name="password"
// //                 value={password}
// //                 onChange={(e) => {
// //                   setPassword(e.target.value);
// //                   handlePassword(e.target.value);
// //                 }}
// //               />
// //               <span onClick={togglePassword} className="login-toggle-icon">
// //                 {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
// //               </span>
// //             </div>
// //             <Link to="/registerr" className='guest-forget'>Don't Have an account? Sign Up</Link>
// //           </div>
// //           <button type="submit">Login as Guest</button>
// //         </form>
// //       </div>
// //       <div className="login-form-container login-sign-in">
// //         <form onSubmit={employeeLoginSubmit}>
// //           <h1>Login</h1>
// //           <div className="login-social-icons">
// //             <a href="#" className="login-icon"><AiOutlineGooglePlus /></a>
// //             <a href="#" className="login-icon"><AiOutlineFacebook /></a>
// //             <a href="#" className="login-icon"><AiOutlineGithub /></a>
// //             <a href="#" className="login-icon"><AiOutlineLinkedin /></a>
// //           </div>
// //           <span>or use your email password</span>
// //           <input type="text" value={emp_id} placeholder="EMP ID" onChange={e => setEmp_id(e.target.value)} />
// //           <div className="input-group">
// //             <label htmlFor="password">Password</label>
// //             <div className="password-input">
// //               <input
// //                 type={showPassword ? 'text' : 'password'}
// //                 name="password"
// //                 value={password}
// //                 onChange={e => setPassword(e.target.value)}
// //               />
// //               <span onClick={togglePassword} className="login-toggle-icon">
// //                 {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
// //               </span>
// //             </div>
// //           </div>
// //           <Link to="/forget" className='forget'>Forget Password?</Link>
// //           <button type='submit'>Sign In</button>
// //         </form>
// //       </div>
// //       <div className="login-toggle-container">
// //         <div className="login-toggle">
// //           <div className="login-toggle-panel login-toggle-left">
// //             <img className="login-image" src={png2} alt="Secure" />
// //             <p>Are you an employee? Login here</p>
// //             <button className="login-hidden" onClick={toggleForm}>Sign In</button>
// //           </div>
// //           <div className="login-toggle-panel login-toggle-right">
// //             <img className="login-image" src={png1} alt="Form" />
// //             <p>New here? Login as a guest</p>
// //             <button className="login-hidden" onClick={toggleForm}>Login as Guest</button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;

// import React, { useState, useEffect } from 'react';
// import './Login.css';
// import { useNavigate, useLocation, Link } from 'react-router-dom';
// import { AiOutlineGooglePlus, AiOutlineFacebook, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
// import axios from 'axios';
// import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
// import png1 from '../../images/form.png';
// import png2 from '../../images/secure.png';
// import { useDispatch, useSelector } from 'react-redux';
// import { clearAuthError, login, emplogin } from '../../Redux/Actions/userActions';
// import { toast } from 'react-toastify';

// function Login() {
//   const [isGuestLogin, setIsGuestLogin] = useState(false);
//   const toggleForm = () => setIsGuestLogin(!isGuestLogin);
//   const [emp_id, setEmp_id] = useState("");
//   const [guestEmail, setGuestEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const { loading, error, isAuthenticateduser, isAuthenticatedemployee, emp} = useSelector(state => state.authState);

//   axios.defaults.withCredentials = true;

//   useEffect(() => {
//     if (isAuthenticatedemployee) {
//       if (emp.role === 'admin') {
//         navigate("/admin-dashboard");
//       } else if (emp.role === 'hr') {
//         navigate("/hr-dashboard/hr-home");
//       } else if (emp.role === 'employee') {
//         navigate("/employee-dashboard");
//       }
//     } else if (isAuthenticateduser) {
//       navigate("/user-dashboard");
//     }

//     if (error) {
//       toast.error(error);
//       dispatch(clearAuthError());
//     }
//   }, [error, isAuthenticateduser, isAuthenticatedemployee, emp, dispatch, navigate]);

//   const handlePassword = (passwordValue) => {
//     const StrengthChecks = {
//       length: passwordValue.length >= 8,
//       hasUpperCase: /[A-Z]+/.test(passwordValue),
//       hasLowerCase: /[a-z]+/.test(passwordValue),
//       hasDigit: /[0-9]+/.test(passwordValue),
//       hasSpecialChar: /[^A-Za-z0-9]+/.test(passwordValue),
//     };

//     let verifiedList = Object.values(StrengthChecks).filter(value => value);

//     let strength = verifiedList.length === 5
//       ? "Strong"
//       : verifiedList.length > 2
//         ? "Medium"
//         : "Weak";

//     setMessage(strength);
//   };

//   const togglePassword = () => setShowPassword(!showPassword);

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     dispatch(login(email, password));
//   };

//   const employeeLoginSubmit = (e) => {
//     e.preventDefault();
//     dispatch(emplogin(emp_id, password));
//   };

//   return (
//     <div className={`login-container ${isGuestLogin ? 'login-active' : ''}`}>
//       <div className="login-form-container login-guest-login">
//         <form onSubmit={handleLoginSubmit}>
//           <h1>Login as Guest</h1>
//           <div className="login-social-icons">
//             <a href="#" className="login-icon"><AiOutlineGooglePlus /></a>
//             <a href="#" className="login-icon"><AiOutlineFacebook /></a>
//             <a href="#" className="login-icon"><AiOutlineGithub /></a>
//             <a href="#" className="login-icon"><AiOutlineLinkedin /></a>
//           </div>
//           <span>or use your email for guest login</span>
//           <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
//           <div className="input-group">
//             <label htmlFor="password">Password</label>
//             <div className="password-input">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 id="password"
//                 name="password"
//                 value={password}
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                   handlePassword(e.target.value);
//                 }}
//               />
//               <span onClick={togglePassword} className="login-toggle-icon">
//                 {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
//               </span>
//             </div>
//             <Link to="/registerr" className='guest-forget'>Don't Have an account? Sign Up</Link>
//           </div>
//           <button type="submit">Login as Guest</button>
//         </form>
//       </div>
//       <div className="login-form-container login-sign-in">
//         <form onSubmit={employeeLoginSubmit}>
//           <h1>Login</h1>
//           <div className="login-social-icons">
//             <a href="#" className="login-icon"><AiOutlineGooglePlus /></a>
//             <a href="#" className="login-icon"><AiOutlineFacebook /></a>
//             <a href="#" className="login-icon"><AiOutlineGithub /></a>
//             <a href="#" className="login-icon"><AiOutlineLinkedin /></a>
//           </div>
//           <span>or use your email password</span>
//           <input type="text" value={emp_id} placeholder="EMP ID" onChange={e => setEmp_id(e.target.value)} />
//           <div className="input-group">
//             <label htmlFor="password">Password</label>
//             <div className="password-input">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 name="password"
//                 value={password}
//                 onChange={e => setPassword(e.target.value)}
//               />
//               <span onClick={togglePassword} className="login-toggle-icon">
//                 {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
//               </span>
//             </div>
//           </div>
//           <Link to="/forget" className='forget'>Forget Password?</Link>
//           <button type='submit'>Sign In</button>
//         </form>
//       </div>
//       <div className="login-toggle-container">
//         <div className="login-toggle">
//           <div className="login-toggle-panel login-toggle-left">
//             <img className="login-image" src={png2} alt="Secure" />
//             <p>Are you an employee? Login here</p>
//             <button className="login-hidden" onClick={toggleForm}>Sign In</button>
//           </div>
//           <div className="login-toggle-panel login-toggle-right">
//             <img className="login-image" src={png1} alt="Form" />
//             <p>New here? Login as a guest</p>
//             <button className="login-hidden" onClick={toggleForm}>Login as Guest</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
import React, { useState, useEffect } from 'react';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineGooglePlus, AiOutlineFacebook, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { toast } from 'react-toastify';
import axios from 'axios';
import { clearAuthError, login, emplogin } from '../../Redux/Actions/userActions';
import png1 from '../../images/form.png';
import png2 from '../../images/secure.png';

axios.defaults.withCredentials = true;

const Login = () => {
  const [isGuestLogin, setIsGuestLogin] = useState(false);
  const [emp_id, setEmp_id] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, isAuthenticateduser, isAuthenticatedemployee, emp } = useSelector(state => state.authState);

  useEffect(() => {
    if (isAuthenticatedemployee) {
      if (emp.role === 'admin') {
        navigate("/admin-dashboard");
      } else if (emp.role === 'hr') {
        navigate("/hr-dashboard/hr-home");
      } else if (emp.role === 'employee') {
        navigate("/employee-dashboard");
      }
    } else if (isAuthenticateduser) {
      navigate("/user-dashboard");
    }

    if (error) {
      toast.error(error);
      dispatch(clearAuthError());
    }
  }, [error, isAuthenticateduser, isAuthenticatedemployee, emp, dispatch, navigate]);

  const toggleForm = () => setIsGuestLogin(!isGuestLogin);
  const togglePassword = () => setShowPassword(!showPassword);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const employeeLoginSubmit = (e) => {
    e.preventDefault();
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
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <span onClick={togglePassword} className="login-toggle-icon">
                {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
              </span>
            </div>
            <Link to="/registerr" className='guest-forget'>Don't Have an account? Sign Up</Link>
          </div>
          <button type="submit">Login as Guest</button>
        </form>
      </div>
      <div className="login-form-container login-sign-in">
        <form onSubmit={employeeLoginSubmit}>
          <h1>Login</h1>
          <div className="login-social-icons">
            <a href="#" className="login-icon"><AiOutlineGooglePlus /></a>
            <a href="#" className="login-icon"><AiOutlineFacebook /></a>
            <a href="#" className="login-icon"><AiOutlineGithub /></a>
            <a href="#" className="login-icon"><AiOutlineLinkedin /></a>
          </div>
          <span>or use your email password</span>
          <input type="text" value={emp_id} placeholder="EMP ID" onChange={e => setEmp_id(e.target.value)} />
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <span onClick={togglePassword} className="login-toggle-icon">
                {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
              </span>
            </div>
          </div>
          <Link to="/forget" className='forget'>Forget Password?</Link>
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
      </div>
    </div>
  );
}

export default Login;
