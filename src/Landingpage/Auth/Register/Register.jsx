

// // // Register.js

// // import React, { useState, useEffect } from "react";
// // import "./Register.css";
// // import {
// //   AiOutlineGooglePlus,
// //   AiOutlineFacebook,
// //   AiOutlineGithub,
// //   AiOutlineLinkedin,
// // } from "react-icons/ai";
// // import { IoMdEye, IoMdEyeOff } from "react-icons/io";
// // import { useDispatch, useSelector } from "react-redux";
// // import { register, clearAuthError } from '../../Redux/Actions/userActions';
// // import { toast } from "react-toastify";
// // import { useNavigate, NavLink } from "react-router-dom";
// // import imgavatar from '../../../HRModule/Assets/avatar.png';  // Make sure this path is correct
// // import { FaUpload } from "react-icons/fa";

// // const Register = () => {
// //   const [userData, setUserData] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //     confirm_password: "",
// //   });
// //   const [avatar, setAvatar] = useState("");
// //   const [avatarPreview, setAvatarPreview] = useState(imgavatar);
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [passwordStrength, setPasswordStrength] = useState("");

// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const { loading, error, isAuthenticated } = useSelector((state) => state.authState);

// //   const onChange = (e) => {
// //     if (e.target.name === "avatar") {
// //       const reader = new FileReader();
// //       reader.onload = () => {
// //         if (reader.readyState === 2) {
// //           setAvatarPreview(reader.result);
// //           setAvatar(e.target.files[0]);
// //         }
// //       };
// //       reader.readAsDataURL(e.target.files[0]);
// //     } else {
// //       setUserData({ ...userData, [e.target.name]: e.target.value });
// //       if (e.target.name === "password") handlePasswordStrength(e.target.value);
// //     }
// //   };

// //   const handlePasswordStrength = (password) => {
// //     if (password.length < 6) {
// //       setPasswordStrength("too short");
// //     } else if (password.length < 8) {
// //       setPasswordStrength("medium");
// //     } else {
// //       setPasswordStrength("strong");
// //     }
// //   };

// //   const togglePassword = () => {
// //     setShowPassword(!showPassword);
// //   };

// //   const submitHandler = (e) => {
// //     e.preventDefault();
// //     if (userData.password !== userData.confirm_password) {
// //       toast("Passwords do not match", {
// //         position: toast.POSITION.BOTTOM_CENTER,
// //         type: "error",
// //       });
// //       return;
// //     }
// //     const formData = new FormData();
// //     formData.append("name", userData.name);
// //     formData.append("email", userData.email);
// //     formData.append("password", userData.password);
// //     formData.append("avatar", avatar);
// //     dispatch(register(formData));
// //   };

// //   useEffect(() => {
// //     if (isAuthenticated) {
// //       navigate("/login");
// //       return;
// //     }
// //     if (error) {
// //       toast(error, {
// //         position: toast.POSITION.BOTTOM_CENTER,
// //         type: "error",
// //         onOpen: () => {
// //           dispatch(clearAuthError());
// //         },
// //       });
// //       return;
// //     }
// //   }, [error, isAuthenticated, dispatch, navigate]);

// //   return (
// //     <div className="register-container">
// //       <div className="register-form-container">
// //         <form onSubmit={submitHandler} encType="multipart/form-data">
// //           <h1>User Registration</h1>
// //           <div className="register-social-icons">
// //             <a href="#" className="register-icon"><AiOutlineGooglePlus /></a>
// //             <a href="#" className="register-icon"><AiOutlineFacebook /></a>
// //             <a href="#" className="register-icon"><AiOutlineGithub /></a>
// //             <a href="#" className="register-icon"><AiOutlineLinkedin /></a>
// //           </div>
// //           <span>or use your email for registration</span>
// //           {error && <div className="error-message">{error}</div>}
// //           <input
// //             type="text"
// //             name="name"
// //             placeholder="Name"
// //             value={userData.name}
// //             onChange={onChange}
// //           />
// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="Email"
// //             value={userData.email}
// //             onChange={onChange}
// //           />
// //           <div className="input-group">
// //             <label htmlFor="password">Password</label>
// //             <div className="password-input">
// //               <input
// //                 type={showPassword ? "text" : "password"}
// //                 id="password"
// //                 name="password"
// //                 value={userData.password}
// //                 onChange={onChange}
// //               />
// //               <span onClick={togglePassword} className="password-toggle-icon">
// //                 {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
// //               </span>
// //             </div>
// //             <div className="password-strength">
// //               <span>Your Password is {passwordStrength}</span>
// //             </div>
// //           </div>
// //           <div className="input-group">
// //             <label htmlFor="confirmPassword">Confirm Password</label>
// //             <div className="password-input">
// //               <input
// //                 type={showPassword ? "text" : "password"}
// //                 id="confirm_password"
// //                 name="confirm_password"
// //                 value={userData.confirm_Password}
// //                 onChange={onChange}
// //               />
// //               <span onClick={togglePassword} className="password-toggle-icon">
// //                 {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
// //               </span>
// //             </div>
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="avatar_upload">Upload Avatar</label>
// //             <div className="avatar-upload">
         
// //               <input
// //                 type="file"
// //                 name="avatar"
// //                 onChange={onChange}
// //                 className="custom-file-input"
// //                 id="customFile"
// //                 hidden
// //               />
// //             </div>
// //             <img src={avatarPreview} alt="Avatar Preview" className="avatar-preview" />
// //           </div>
// //           <label htmlFor="customFile" className="upload-icon">
// //                 <FaUpload />
// //               </label>
// //           <div className="register-btn">
// //             <NavLink to="/login">
// //               <button className="registerbtn2" type="button">Back</button>
// //             </NavLink>
// //             <button className="registerbtn1" type="submit" disabled={loading}>Sign Up</button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;




// // import React, { useState, useEffect } from "react";
// // import "./Register.css";
// // import {
// //   AiOutlineGooglePlus,
// //   AiOutlineFacebook,
// //   AiOutlineGithub,
// //   AiOutlineLinkedin,
// // } from "react-icons/ai";
// // import { IoMdEye, IoMdEyeOff } from "react-icons/io";
// // import { useDispatch, useSelector } from "react-redux";
// // // import { register, clearAuthError } from '../../Redux/Actions/userActions';
// // import { register } from "../../Redux/Actions/userActions";
// // import { toast } from "react-toastify";
// // import { useNavigate, NavLink } from "react-router-dom";
// // import imgavatar from '../../../HRModule/Assets/avatar.png';
// // import { FaUpload } from "react-icons/fa";
// // import axios from "axios";

// // const Register = () => {
// //   const [userData, setUserData] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //     confirm_password: "",
// //   });
// //   const [avatar, setAvatar] = useState("");
// //   const [avatarPreview, setAvatarPreview] = useState(imgavatar);
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [passwordStrength, setPasswordStrength] = useState("");

// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const { loading, error, isAuthenticated } = useSelector((state) => state.authState);

// //   const onChange = (e) => {
// //     if (e.target.name === "avatar") {
// //       const reader = new FileReader();
// //       reader.onload = () => {
// //         if (reader.readyState === 2) {
// //           setAvatarPreview(reader.result);
// //           setAvatar(e.target.files[0]);
// //         }
// //       };
// //       reader.readAsDataURL(e.target.files[0]);
// //     } else {
// //       setUserData({ ...userData, [e.target.name]: e.target.value });
// //       if (e.target.name === "password") handlePasswordStrength(e.target.value);
// //     }
// //   };

// //   const handlePasswordStrength = (password) => {
// //     if (password.length < 6) {
// //       setPasswordStrength("too short");
// //     } else if (password.length < 8) {
// //       setPasswordStrength("medium");
// //     } else {
// //       setPasswordStrength("strong");
// //     }
// //   };

// //   const togglePassword = () => {
// //     setShowPassword(!showPassword);
// //   };
 

// //   const submitHandler = (e) => {
// //     e.preventDefault();
// //     // const result = await axios.post("http//:localhost:8000/api/v1/register" , userData)
// //     const formData = new FormData();  
// //     formData.append("name", userData.name);
// //     formData.append("email", userData.email);
// //     formData.append("password", userData.password);
// //     formData.append("avatar", avatar);
// //     dispatch(register(formData));

// //   //  dispatch(register(userData))
// //   //   console.log("result :",result.data)
// //   //   if (userData.password !== userData.confirm_password) {
// //   //     toast("Passwords do not match", {
// //   //       position: toast.POSITION.BOTTOM_CENTER,
// //   //       type: "error",
// //   //     });
// //   //     return;
// //   //   }
   
// //   };

// //   useEffect(() => {
// //     if (isAuthenticated) {
// //       navigate("/login");
// //       return;
// //     }
// //     if (error) {
// //       toast(error, {
// //         position: toast.POSITION.BOTTOM_CENTER,
// //         type: "error",
// //         onOpen: () => {
// //           dispatch(clearAuthError());
// //         },
// //       });
// //       return;
// //     }
// //   }, [error, isAuthenticated, dispatch, navigate]);

// //   return (
// //     <div className="register-container">
// //       <div className="register-form-container">
// //         <form onSubmit={submitHandler} encType="multipart/form-data">
// //           <h1>User Registration</h1>
// //           <div className="register-social-icons">
// //             <a href="#" className="register-icon"><AiOutlineGooglePlus /></a>
// //             <a href="#" className="register-icon"><AiOutlineFacebook /></a>
// //             <a href="#" className="register-icon"><AiOutlineGithub /></a>
// //             <a href="#" className="register-icon"><AiOutlineLinkedin /></a>
// //           </div>
// //           <span>or use your email for registration</span>
// //           {error && <div className="error-message">{error}</div>}
// //           <input
// //             type="text"
// //             name="name"
// //             placeholder="Name"
// //             value={userData.name}
// //             onChange={onChange}
// //           />
// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="Email"
// //             value={userData.email}
// //             onChange={onChange}
// //           />
// //           <div className="input-group">
// //             <label htmlFor="password">Password</label>
// //             <div className="password-input">
// //               <input
// //                 type={showPassword ? "text" : "password"}
// //                 id="password"
// //                 name="password"
// //                 value={userData.password}
// //                 onChange={onChange}
// //               />
// //               <span onClick={togglePassword} className="password-toggle-icon">
// //                 {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
// //               </span>
// //             </div>
// //             <div className="password-strength">
// //               <span>Your Password is {passwordStrength}</span>
// //             </div>
// //           </div>
// //           <div className="input-group">
// //             <label htmlFor="confirmPassword">Confirm Password</label>
// //             <div className="password-input">
// //               <input
// //                 type={showPassword ? "text" : "password"}
// //                 id="confirm_password"
// //                 name="confirm_password"
// //                 value={userData.confirm_password}
// //                 onChange={onChange}
// //               />
// //               <span onClick={togglePassword} className="password-toggle-icon">
// //                 {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
// //               </span>
// //             </div>
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="avatar_upload">Upload Avatar</label>
// //             <div className="avatar-upload">
// //               <input
// //                 type="file"
// //                 name="avatar"
// //                 onChange={onChange}
// //                 className="custom-file-input"
// //                 id="customFile"
// //                 hidden
// //               />
// //             </div>
// //             <img src={avatarPreview} alt="Avatar Preview" className="avatar-preview" />
// //           </div>
// //           <label htmlFor="customFile" className="upload-icon">
// //             <FaUpload />
// //           </label>
// //           <div className="register-btn">
// //             <NavLink to="/login">
// //               <button className="registerbtn2" type="button">Back</button>
// //             </NavLink>
// //             <button className="registerbtn1" type="submit" disabled={loading}>Sign Up</button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;

// import {useEffect, useState} from 'react';
// import {useDispatch, useSelector } from 'react-redux'
// import { register, clearAuthError } from '../../Redux/Actions/userActions'
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import "./Register.css";
// // import img from "../../../HRModule/Assets/avatar.png"

// export default function Register() {
//     const [userData, setUserData] = useState({
//         name: "",
//         email: "",
//         password: "",
//         confirm_password:"" 
//     });
//     const [avatar, setAvatar] = useState("");
//     // const [avatarPreview, setAvatarPreview] = useState("../../../HRModule/Assets/avatar.png");
//     const [avatarPreview, setAvatarPreview] = useState("images/avatar.png");
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const { loading, error, isAuthenticated } = useSelector(state => state.authState)

//     const onChange = (e) => {
//         if(e.target.name === 'avatar') {
//            const reader = new FileReader();
//            reader.onload = () => {
//                 if(reader.readyState === 2) {
//                     setAvatarPreview(reader.result);
//                     setAvatar(e.target.files[0])
//                 }
//            }


//            reader.readAsDataURL(e.target.files[0])
//         }else{
//             setUserData({...userData, [e.target.name]:e.target.value })
//         }
//     }

//     // console.log(userData)
//     const submitHandler= (e) => {
//         e.preventDefault();
        
//         const formData = new FormData();
//         formData.append('name', userData.name)
//         formData.append('email', userData.email)
//         formData.append('password', userData.password)
//         formData.append('confirm_password', userData.confirm_password)
//         formData.append('avatar', avatar);
//         console.log(formData)
//         dispatch(register(formData))
//     }

//     useEffect(()=>{
//         if(isAuthenticated) {
//             navigate('/');
//             return
//         }
//         if(error)  {
//             toast(error, {
//                 position: toast.POSITION.BOTTOM_CENTER,
//                 type: 'error',
//                 onOpen: ()=> { dispatch(clearAuthError) }
//             })
//             return
//         }
//     },[error, isAuthenticated, dispatch, navigate])

//     return (
//         <div className="row wrapper">
//             <div className="col-10 col-lg-5">
//             <form onSubmit={submitHandler} className="shadow-lg" encType='multipart/form-data'>
//                 <h1 className="mb-3">Register</h1>

//             <div className="form-group">
//                 <label htmlFor="email_field">Name</label>
//                 <input name='name' onChange={onChange} type="name" id="name_field" className="form-control" />
//             </div>

//                 <div className="form-group">
//                 <label htmlFor="email_field">Email</label>
//                 <input
//                     type="email"
//                     id="email_field"
//                     name='email' 
//                     onChange={onChange}
//                     className="form-control"
                  
//                 />
//                 </div>
    
//                 <div className="form-group">
//                 <label htmlFor="password_field">Password</label>
//                 <input
//                     name='password' 
//                     onChange={onChange}
//                     type="password"
//                     id="password_field"
//                     className="form-control"
                  
//                 />
//                 </div>
//                 <div className="form-group">
//                 <label htmlFor="confirm_password_field">confirm Password</label>
//                 <input
//                     name='confirm_password' 
//                     onChange={onChange}
//                     type="password"
//                     id="confirm_password_field"
//                     className="form-control"
                  
//                 />
//                 </div>

//                 <div className='form-group'>
//                 <label htmlFor='avatar_upload'>Avatar</label>
//                 <div className='d-flex align-items-center'>
//                     <div>
//                         <figure className='avatar mr-3 item-rtl w-50'>
//                             <img
//                                 src={avatarPreview}
//                                 className='rounded-circle'
//                                 alt='Avatar'
//                             />
//                         </figure>
//                     </div>
//                     <div className='custom-file'>
//                         <input
//                             type='file'
//                             name='avatar'
//                             onChange={onChange}
//                             className='custom-file-input'
//                             id='customFile'
//                         />
//                         <label className='custom-file-label' htmlFor='customFile'>
//                             Choose Avatar
//                         </label>
//                     </div>
//                 </div>
//             </div>
    
//                 <button
//                 id="register_button"
//                 type="submit"
//                 className="registerbtn1"
//                 disabled={loading}
//                 >
//                 REGISTER
//                 </button>
//             </form>
//             </div>
//         </div>
//     )
// }



