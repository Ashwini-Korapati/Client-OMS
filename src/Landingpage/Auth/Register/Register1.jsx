import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, clearAuthError } from '../../Redux/Actions/userActions';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import "./Register.css";

export default function Register() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
    });
    const [passwordStrength, setPasswordStrength] = useState('Weak');
    const [errors, setErrors] = useState({});
    const [submitAttempted, setSubmitAttempted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, isAuthenticateduser } = useSelector(state => state.authState);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });

        if (name === 'password') {
            checkPasswordStrength(value);
        }

        if (errors[name]) {
            setErrors({...errors, [name]: ''});
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!userData.name.trim()) newErrors.name = "Name is required";
        if (!userData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
            newErrors.email = "Please enter a valid email";
        }
        
        if (!userData.password) {
            newErrors.password = "Password is required";
        } else if (userData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        
        if (userData.password !== userData.confirm_password) {
            newErrors.confirm_password = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitAttempted(true);
        setIsSubmitting(true);

        if (!validateForm()) {
            toast.error("Please fix the errors in the form");
            setIsSubmitting(false);
            return;
        }

        try {
            const result = await dispatch(register({
                name: userData.name,
                email: userData.email,
                password: userData.password,
                confirm_password: userData.confirm_password
            }));
            
            if (register.fulfilled.match(result)) {
                toast.success("Registration successful! Please login.");
                navigate('/login');
            } else if (register.rejected.match(result)) {
                toast.error(result.payload || "Registration failed");
            }
        } catch (err) {
            console.error("Registration error:", err);
            toast.error("An unexpected error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const checkPasswordStrength = (password) => {
        let strength = 'Weak';
        if (password.length >= 8) {
            if (/[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*]/.test(password)) {
                strength = 'Strong';
            } else if (password.length >= 6) {
                strength = 'Medium';
            }
        } else if (password.length >= 6) {
            strength = 'Medium';
        }
        setPasswordStrength(strength);
    };

    useEffect(() => {
        if (isAuthenticateduser) {
            navigate('/login');
        }
        
        if (error) {
            toast.error(error, {
                position: "top-center",
                onOpen: () => { dispatch(clearAuthError()); }
            });
        }
        
        return () => {
            dispatch(clearAuthError());
        };
    }, [error, isAuthenticateduser, dispatch, navigate]);

    return (
        <div className="register-container">
            <div className="register-form-container">
                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>

                    <div className="form-group">
                        <label htmlFor="name_field">Name</label>
                        <input
                            name="name"
                            onChange={handleInputChange}
                            type="text"
                            id="name_field"
                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                            value={userData.name}
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email_field">Email</label>
                        <input
                            type="email"
                            id="email_field"
                            name="email"
                            onChange={handleInputChange}
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            value={userData.email}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password_field">Password</label>
                        <input
                            name="password"
                            onChange={handleInputChange}
                            type="password"
                            id="password_field"
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            value={userData.password}
                        />
                        <div className={`password-strength ${passwordStrength.toLowerCase()}`}>
                            Password Strength: {passwordStrength}
                        </div>
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirm_password_field">Confirm Password</label>
                        <input
                            name="confirm_password"
                            onChange={handleInputChange}
                            type="password"
                            id="confirm_password_field"
                            className={`form-control ${errors.confirm_password ? 'is-invalid' : ''}`}
                            value={userData.confirm_password}
                        />
                        {errors.confirm_password && <div className="invalid-feedback">{errors.confirm_password}</div>}
                    </div>

                    <button
                        id="register_button"
                        type="submit"
                        className="register-btn"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Registering...
                            </>
                        ) : (
                            "REGISTER"
                        )}
                    </button>
                    
                    <div className="href-register">
                        <a href="/login">Already have an account? Log In Here</a>
                    </div>
                </form>
            </div>
        </div>
    );
}   