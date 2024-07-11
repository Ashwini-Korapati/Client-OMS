
import React, { useState } from "react";
import { FaTrash, FaUpload } from "react-icons/fa";
import avatar from "../../../Assets/avatar.png";
import "./Profile.css";
import {useSelector} from 'react-redux'

const EmployeeProfile = () => {
  const { emp }  = useSelector(state => state.profile.emp);
 console.log(emp)
 
  

  const [currentStep, setCurrentStep] = useState("PersonalData");
  const [formData, setFormData] = useState({
    dateOfJoining: '',
    employeeType: '',
    emp_id: '',
    designation: '',
    reporting_to: '',
    role: '',
    firstName: '',
    lastName:'',
    password:'',
    phoneNumber: '',
    aadharNo: '',
    ifscCode: '',
    address: '',
    zipCode: '',
    avatar: null,
    email: '',
    gender: '',
    accountNo: '',
    panNo: '',
    city: '',
    state: '',
  });
 
  const [profileImage, setProfileImage] = useState(avatar);

  const handlePersonalInfoSubmit = (e) => {
    e.preventDefault();
    console.log("Personal info updated:", formData);
  
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  

  const handleDeleteImage = () => {
    setProfileImage(avatar);
  };

  const renderStep = () => {
    switch (currentStep) {
      case "PersonalData":
        return (
          <div>
            <h2>Personal Data</h2>
            <form onSubmit={handlePersonalInfoSubmit}>
              <label>
                Employee ID:
                <input type="text" value={emp.id} readOnly />
              </label>
              <br />
              <label>
                First Name:
                <input
                  type="text"
                  name="firstName"
                  value={emp.FirstName}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <br />
              <label>
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  value={emp.LastName}
                  onChange={handleInputChange}
                />
              </label>
              <br />
            
              <br />
              {/* <button type="submit">Update Personal Info</button> */}
            </form>
          </div>
        );
    
      case "BankingDetails":
        return (
          <div>
            <h2>Banking Details</h2>
            <form>
              <br />
              <label>
                Account Number:
                <input type="text" value={emp.accountNumber} readOnly />
              </label>
              <br />
              <label>
                IFSC Code:
                <input type="text" value={emp.ifscCode} readOnly />
              </label>
              <br />
            </form>
          </div>
        );
    
      default:
        return <div>Select a step</div>;
    }
  };
  // console.log(emp.avatar)
  return (
    <div className="employee-profile">
      <div className="employee-header">
        <div className="profile-left">
          <div className="profile-image-container">
            <div className="profile-image-actions">
              {profileImage === avatar ? (
                <button onClick={() => document.getElementById("profileImageInput").click()}>
                  <FaUpload className="icon" />
                </button>
              ) : (
                <button onClick={handleDeleteImage}>
                  <FaTrash className="icon" />
                </button>
              )}
            </div>
          
            <img className="profile-logo " src={emp.avatar ?? avatar} alt="Profile" />
            <input
              id="profileImageInput"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
          <div>
            <h1>Employee Profile</h1>
            <p> <strong>Name</strong> {emp.FirstName}</p>
            <div className="employee-info">
              <div className="employee-profile-card">
                <p>
                  <strong>Employee ID:</strong> {emp.id}
                </p>
                <p>
                  <strong>Designation:</strong> {emp.designation}
                </p>
          
                <p>
                  <strong>Email:</strong> {emp.email}
                </p>
           
                <p>
                  <strong>Reports To:</strong> {emp.reporting_to}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="step-navigation">
        <button
          className={currentStep === "PersonalData" ? "active" : ""}
          onClick={() => setCurrentStep("PersonalData")}
        >
          Personal Data
        </button>
     
        <button
          className={currentStep === "BankingDetails" ? "active" : ""}
          onClick={() => setCurrentStep("BankingDetails")}
        >
          Banking Details
        </button>
        
      </div>

      <div className="step-content">{renderStep()}</div>
    </div>
  );
};

export default EmployeeProfile;
