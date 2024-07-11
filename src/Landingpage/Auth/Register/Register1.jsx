import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, clearAuthError } from '../../Redux/Actions/userActions';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import "./Register.css";
import { FiEdit } from "react-icons/fi";
import { LuUpload } from 'react-icons/lu';

export default function Register1() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        avatar: null,
    });
    const [isImageSelected, setIsImageSelected] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('Weak'); 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, isAuthenticateduser } = useSelector(state => state.authState);

    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setUserData({ ...userData, avatar: e.target.files[0] });
        setIsImageSelected(true);
    };

    const handleUploadClick = () => {
        document.getElementById('customFile').click();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', userData.name);
        formData.append('email', userData.email);
        formData.append('password', userData.password);
        formData.append('confirm_password', userData.confirm_password);
        formData.append('avatar', userData.avatar);
        dispatch(register(formData));
    };

    // Function to check password strength
    const checkPasswordStrength = (password) => {
        if (password.length >= 8) {
            setPasswordStrength('Strong');
        } else if (password.length >= 6) {
            setPasswordStrength('Medium');
        } else {
            setPasswordStrength('Weak');
        }
    };

    useEffect(() => {
        if (isAuthenticateduser) {
            navigate('/login');
        }
        if (error) {
            toast(error, {
                position: "top-center",
                type: 'error',
                onOpen: () => { dispatch(clearAuthError()) }
            });
        }
    }, [error, isAuthenticateduser, dispatch, navigate]);

    return (
        <div className="register-container">
            <div className="register-form-container">
                <form onSubmit={handleSubmit} encType='multipart/form-data'>
                    <h1 className="mb-3">Register</h1>

                    <div className="form-group">
                        <label htmlFor="name_field">Name</label>
                        <input
                            name='name'
                            onChange={handleInputChange}
                            type="text"
                            id="name_field"
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email_field">Email</label>
                        <input
                            type="email"
                            id="email_field"
                            name='email'
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password_field">Password</label>
                        <input
                            name='password'
                            onChange={(e) => {
                                handleInputChange(e);
                                checkPasswordStrength(e.target.value);
                            }}
                            type="password"
                            id="password_field"
                            className="form-control"
                        />
                        <small className={`password-strength ${passwordStrength.toLowerCase()}`}>
                            {passwordStrength}
                        </small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirm_password_field">Confirm Password</label>
                        <input
                            name='confirm_password'
                            onChange={handleInputChange}
                            type="password"
                            id="confirm_password_field"
                            className="form-control"
                        />
                    </div>

                    <div className='form-group'>
                        <div className='upload-icon' onClick={handleUploadClick}>
                            {isImageSelected ? <FiEdit /> : <LuUpload />}
                        </div>
                        <input
                            type='file'
                            name='avatar'
                            onChange={handleFileChange}
                            className='custom-file-input'
                            style={{ display: "none" }}
                            id='customFile'
                        />
                        {userData.avatar && (
                            <div className='avatar'>
                                <img
                                    src={URL.createObjectURL(userData.avatar)}
                                    alt='Avatar Preview'
                                />
                            </div>
                        )}
                    </div>

                    <button
                        id="register_button"
                        type="submit"
                        className="register-btn"
                        // disabled={loading}
                    >
                        REGISTER
                    </button>
                    <a href="/login" className="href-register">Already have an account? Log In Here</a>
                </form>
            </div>
        </div>
    );
}

