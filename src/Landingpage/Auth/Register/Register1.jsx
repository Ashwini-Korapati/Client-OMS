import {useEffect, useState} from 'react';
import {useDispatch, useSelector } from 'react-redux'
import { register , clearAuthError } from '../../Redux/Actions/userActions';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import "./Register.css";
// import img from "../../../HRModule/Assets/avatar.png"

export default function Register1() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password:"" 
    });
    const [avatar, setAvatar] = useState("");
    // const [avatarPreview, setAvatarPreview] = useState("../../../HRModule/Assets/avatar.png");
    const [avatarPreview, setAvatarPreview] = useState("images/avatar.png");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, isAuthenticateduser } = useSelector(state => state.authState)

    const onChange = (e) => {
        if(e.target.name === 'avatar') {
           const reader = new FileReader();
           reader.onload = () => {
                if(reader.readyState === 2) {
                    setAvatarPreview(reader.result);
                    setAvatar(e.target.files[0])
                }
           }


           reader.readAsDataURL(e.target.files[0])
        }else{
            setUserData({...userData, [e.target.name]:e.target.value })
        }
    }

    // console.log(userData)
    const submitHandler= (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('name', userData.name)
        formData.append('email', userData.email)
        formData.append('password', userData.password)
        formData.append('confirm_password', userData.confirm_password)
        formData.append('avatar', avatar);
        console.log(formData)
        dispatch(register(formData))
    }

    useEffect(()=>{
        if(isAuthenticateduser) {
            navigate('/login');
            return
        }
        if(error)  {
            toast(error, {
                position: "top-center",
                type: 'error',
                onOpen: ()=> { dispatch(clearAuthError) }
            })
            return
        }
    },[error, isAuthenticateduser, dispatch, navigate])

    return (
        <div className="register-container">
            <div className="register-form-container">
            <form onSubmit={submitHandler} className="register-form-container" encType='multipart/form-data'>
                <h1 className="mb-3">Register</h1>

            <div className="form-group">
                <label htmlFor="email_field">Name</label>
                <input name='name' onChange={onChange} type="name" id="name_field" className="form-control" />
            </div>

                <div className="form-group">
                <label htmlFor="email_field">Email</label>
                <input
                    type="email"
                    id="email_field"
                    name='email' 
                    onChange={onChange}
                    className="form-control"
                  
                />
                </div>
    
                <div className="form-group">
                <label htmlFor="password_field">Password</label>
                <input
                    name='password' 
                    onChange={onChange}
                    type="password"
                    id="password_field"
                    className="form-control"
                  
                />
                </div>
                <div className="form-group">
                <label htmlFor="confirm_password_field">confirm Password</label>
                <input
                    name='confirm_password' 
                    onChange={onChange}
                    type="password"
                    id="confirm_password_field"
                    className="form-control"
                  
                />
                </div>

                <div className='form-group'>
                <label htmlFor='avatar_upload'>Avatar</label>
                <div className='d-flex align-items-center'>
                    <div>
                        <figure className='avatar mr-3 item-rtl w-50'>
                            <img
                                src={avatarPreview}
                                className='rounded-circle'
                                alt='Avatar'
                            />
                        </figure>
                    </div>
                    <div className='custom-file'>
                        <input
                            type='file'
                            name='avatar'
                            onChange={onChange}
                            className='custom-file-input'
                            id='customFile'
                        />
                        <label className='custom-file-label' htmlFor='customFile'>
                            Choose Avatar
                        </label>
                    </div>
                </div>
            </div>
    
                <button
                id="register_button"
                type="submit"
                className="register-btn"
                // disabled={loading}
                >
                REGISTER
                </button>
            </form>
            </div>
        </div>
    )
}