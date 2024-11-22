import React from 'react';
import { FaUser, FaMapMarkerAlt, FaCalendarAlt, FaVenusMars, FaRing, FaFlag, FaPhone, FaEnvelope, FaTint, FaUniversity, FaMoneyCheckAlt, FaBuilding, FaIdCard } from 'react-icons/fa';
import './PersonalInformation.css';

const PersonalInformation = ({ formData, handleInputChange, handleNext }) => {
  return (
    <div className="personal-info-container">
      <h2 className="personal-info-title">PERSONAL INFORMATION</h2>
      <div className="personal-info-form">
        <div className="personal-info-grid">
          <div className="personal-info-form-group">
            <label htmlFor="fullName" className="personal-info-label">
              <FaUser className="personal-info-icon" /> Full Name (As per Aadhar)
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="personal-info-input"
            />
          </div>
          <div className="personal-info-form-group">
            <label htmlFor="fatherName" className="personal-info-label">
              <FaUser className="personal-info-icon" /> Father's Name
            </label>
            <input
              type="text"
              id="fatherName"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleInputChange}
              required
              className="personal-info-input"
            />
          </div>
          <div className="personal-info-form-group">
            <label htmlFor="motherName" className="personal-info-label">
              <FaUser className="personal-info-icon" /> Mother's Name
            </label>
            <input
              type="text"
              id="motherName"
              name="motherName"
              value={formData.motherName}
              onChange={handleInputChange}
              required
              className="personal-info-input"
            />
          </div>
          <div className="personal-info-form-group">
            <label htmlFor="placeOfBirth" className="personal-info-label">
              <FaMapMarkerAlt className="personal-info-icon" /> Place of Birth
            </label>
            <input
              type="text"
              id="placeOfBirth"
              name="placeOfBirth"
              value={formData.placeOfBirth}
              onChange={handleInputChange}
              required
              className="personal-info-input"
            />
          </div>
        </div>

        <div className="personal-info-form-group">
          <label htmlFor="presentAddress" className="personal-info-label">
            <FaMapMarkerAlt className="personal-info-icon" /> Present Address
          </label>
          <textarea
            id="presentAddress"
            name="presentAddress"
            value={formData.presentAddress}
            onChange={handleInputChange}
            required
            className="personal-info-textarea"
          />
        </div>
        <div className="personal-info-form-group">
          <label htmlFor="permanentAddress" className="personal-info-label">
            <FaMapMarkerAlt className="personal-info-icon" /> Permanent Address
          </label>
          <textarea
            id="permanentAddress"
            name="permanentAddress"
            value={formData.permanentAddress}
            onChange={handleInputChange}
            required
            className="personal-info-textarea"
          />
        </div>

        <div className="personal-info-grid">
          <div className="personal-info-form-group">
            <label htmlFor="dob" className="personal-info-label">
              <FaCalendarAlt className="personal-info-icon" /> Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              required
              className="personal-info-input"
            />
          </div>
          <div className="personal-info-form-group">
            <label htmlFor="gender" className="personal-info-label">
              <FaVenusMars className="personal-info-icon" /> Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
              className="personal-info-select"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="personal-info-form-group">
            <label htmlFor="maritalStatus" className="personal-info-label">
              <FaRing className="personal-info-icon" /> Marital Status
            </label>
            <select
              id="maritalStatus"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleInputChange}
              required
              className="personal-info-select"
            >
              <option value="">Select Marital Status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </div>
          <div className="personal-info-form-group">
            <label htmlFor="nationality" className="personal-info-label">
              <FaFlag className="personal-info-icon" /> Nationality
            </label>
            <input
              type="text"
              id="nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleInputChange}
              required
              className="personal-info-input"
            />
          </div>
        </div>

        <div className="personal-info-grid">
          <div className="personal-info-form-group">
            <label htmlFor="contactNumber" className="personal-info-label">
              <FaPhone className="personal-info-icon" /> Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              required
              className="personal-info-input"
            />
          </div>
          <div className="personal-info-form-group">
            <label htmlFor="alternateContactNumber" className="personal-info-label">
              <FaPhone className="personal-info-icon" /> Alternate Contact Number
            </label>
            <input
              type="tel"
              id="alternateContactNumber"
              name="alternateContactNumber"
              value={formData.alternateContactNumber}
              onChange={handleInputChange}
              className="personal-info-input"
            />
          </div>
          <div className="personal-info-form-group">
            <label htmlFor="email" className="personal-info-label">
              <FaEnvelope className="personal-info-icon" /> E-Mail ID
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="personal-info-input"
            />
          </div>
          <div className="personal-info-form-group">
            <label htmlFor="bloodGroup" className="personal-info-label">
              <FaTint className="personal-info-icon" /> Blood Group
            </label>
            <select
              id="bloodGroup"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleInputChange}
              required
              className="personal-info-select"
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
        </div>

        <div className="personal-info-grid">
          <div className="personal-info-form-group">
            <label htmlFor="bankName" className="personal-info-label">
              <FaUniversity className="personal-info-icon" /> Bank Name
            </label>
            <input
              type="text"
              id="bankName"
              name="bankName"
              value={formData.bankName}
              onChange={handleInputChange}
              required
              className="personal-info-input"
            />
          </div>
          <div className="personal-info-form-group">
            <label htmlFor="bankAccountNumber" className="personal-info-label">
              <FaMoneyCheckAlt className="personal-info-icon" /> Bank Account Number
            </label>
            <input
              type="text"
              id="bankAccountNumber"
              name="bankAccountNumber"
              value={formData.bankAccountNumber}
              onChange={handleInputChange}
              required
              className="personal-info-input"
            />
          </div>
          <div className="personal-info-form-group">
            <label htmlFor="ifscCode" className="personal-info-label">
              <FaBuilding className="personal-info-icon" /> IFSC Code
            </label>
            <input
              type="text"
              id="ifscCode"
              name="ifscCode"
              value={formData.ifscCode}
              onChange={handleInputChange}
              required
              className="personal-info-input"
            />
          </div>
          <div className="personal-info-form-group">
            <label htmlFor="branchName" className="personal-info-label">
              <FaBuilding className="personal-info-icon" /> Branch Name
            </label>
            <input
              type="text"
              id="branchName"
              name="branchName"
              value={formData.branchName}
              onChange={handleInputChange}
              required
              className="personal-info-input"
            />
          </div>
        </div>

        <div className="personal-info-grid">
          <div className="personal-info-form-group">
            <label htmlFor="aadharNo" className="personal-info-label">
              <FaIdCard className="personal-info-icon" /> Aadhar No
            </label>
            <input
              type="text"
              id="aadharNo"
              name="aadharNo"
              value={formData.aadharNo}
              onChange={handleInputChange}
              required
              className="personal-info-input"
            />
          </div>
          <div className="personal-info-form-group">
            <label htmlFor="panCardNo" className="personal-info-label">
              <FaIdCard className="personal-info-icon" /> PAN Card No
            </label>
            <input
              type="text"
              id="panCardNo"
              name="panCardNo"
              value={formData.panCardNo}
              onChange={handleInputChange}
              required
              className="personal-info-input"
            />
          </div>
        </div>

        <div className="personal-info-form-group">
          <label className="personal-info-label">
            <FaUser className="personal-info-icon" /> Do You Have PF/UAN Number?
          </label>
          <div className="personal-info-radio-group">
            <label className="personal-info-radio-label">
              <input
                type="radio"
                name="hasPfUan"
                value="yes"
                checked={formData.hasPfUan === "yes"}
                onChange={handleInputChange}
                className="personal-info-radio"
              />
              Yes
            </label>
            <label className="personal-info-radio-label">
              <input
                type="radio"
                name="hasPfUan"
                value="no"
                checked={formData.hasPfUan === "no"}
                onChange={handleInputChange}
                className="personal-info-radio"
              />
              No
            </label>
          </div>
        </div>
        {formData.hasPfUan === "yes" && (
          <div className="personal-info-form-group">
            <label htmlFor="pfUanNumber" className="personal-info-label">
              <FaIdCard className="personal-info-icon" /> PF/UAN Number
            </label>
            <input
              type="text"
              id="pfUanNumber"
              name="pfUanNumber"
              value={formData.pfUanNumber}
              onChange={handleInputChange}
              required
              className="personal-info-input"
            />
          </div>
        )}
      </div>
      <div className="personal-info-button-group">
        <button className="personal-info-next-button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default PersonalInformation;
