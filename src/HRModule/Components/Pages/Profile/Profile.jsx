import React, { useState } from 'react';
import './Profile.css'
import profileIcon from '../../../Assets/avatar.png'

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    id:'',
    // department: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="settings-form">
      <div className="profile-icon">
        <img src={profileIcon} alt="Profile Icon" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="ID">ID</label>
          <input 
            type="number" 
            id="id" 
            name="ID" 
            value={formData.ID} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="department">Department</label>
          <input 
            type="text" 
            id="department" 
            name="department" 
            value={formData.department} 
            onChange={handleChange} 
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <input 
            type="text" 
            id="role" 
            name="role" 
            value={formData.role} 
            onChange={handleChange} 
          />
        </div>
        <button className='profile-btn' type="submit">Update</button>
      </form>
    </div>
  );
};

export default Profile;
