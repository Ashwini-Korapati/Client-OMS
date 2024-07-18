


import React, { useState, useEffect } from "react";
import { FaTrash, FaUpload } from "react-icons/fa";
import avatar from '../../../../HRModule/Assets/avatar.png'
import './EmpProfile.css'
import { useSelector, useDispatch } from "react-redux";
import { getProfile, updateProfile } from '../../../../HRModule/Redux/Reducers/ProfileSlice'

const EmployeeProfile = () => {
  const dispatch = useDispatch();
  const { emp, loading } = useSelector(state => state.profile.emp);
  const [currentStep, setCurrentStep] = useState("PersonalData");
  const [formData, setFormData] = useState({
    dateOfJoining: '',
    employeeType: '',
    emp_id: '',
    designation: '',
    reporting_to: '',
    role: '',
    firstName: '',
    lastName: '',
    password: '',
    phoneNumber: '',
    aadharNo: '',
    ifsc: '',
    address: '',
    zipCode: '',
    avatar: "",
    email: '',
    gender: '',
    accountNo: '',
    panNo: '',
    city: '',
    state: '',
  });
  const [profileImage, setProfileImage] = useState(avatar);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  useEffect(() => {
    if (emp) {
      setFormData(emp);
      setProfileImage(emp.avatar || avatar);
    }
  }, [emp]);

  const handlePersonalInfoSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('firstName', formData.firstName);
    formData.append('lastName', formData.lastName);
    formData.append('phoneNumber', formData.phoneNumber);
    formData.append('panNo', formData.panNo);
    formData.append('aadharNo', formData.aadharNo);
    formData.append('address', formData.address);
    formData.append('city', formData.city);
    formData.append('state', formData.state);
    formData.append('zipCode', formData.zipCode);
    if (profileImage !== avatar) {
      formData.append('avatar', profileImage);
    }

    dispatch(updateProfile(formData));
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
    if (!emp) {
      return <div>Loading...</div>;
    }

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
              {/* <button type="submit">Update Personal Info</button> */}
            </form>
          </div>
        );

      case "BankingDetails":
        return (
          <div>
            <h2>Banking Details</h2>
            <form>
              <label>
                Account Number:
                <input type="text" value={emp.accountNo} readOnly />
              </label>
              <br />
              <label>
                IFSC Code:
                <input type="text" value={emp.ifsc} readOnly />
              </label>
              <br />
            </form>
          </div>
        );

      default:
        return <div>Select a step</div>;
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!emp) {
    return <div>Employee data not available</div>;
  }

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

            <img className="profile-logo" src={profileImage} alt="Profile" />
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
            <p><strong>Name:</strong> {emp.FirstName}</p>
            <div className="employee-info">
              <div className="employee-profile-card">
                <p><strong>Employee ID:</strong> {emp.id}</p>
                <p><strong>Designation:</strong> {emp.designation}</p>
                <p><strong>Email:</strong> {emp.email}</p>
                <p><strong>Reports To:</strong> {emp.reporting_to}</p>
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
