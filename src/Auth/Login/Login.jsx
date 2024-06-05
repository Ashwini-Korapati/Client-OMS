import React, { useState } from 'react';
import './Login.css';
import { AiOutlineGooglePlus, AiOutlineFacebook, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import png1 from '../../images/form.png'
import png2 from '../../images/secure.png'
 
function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
 
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
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
<input type="password" placeholder="Password" />
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
<input type="password" placeholder="Password" />
<a href="#">Forget Password?</a>
<button>Sign In</button>
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