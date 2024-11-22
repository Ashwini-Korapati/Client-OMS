import React from 'react';
import './ContactInfo.css';
import { FaMapMarkerAlt, FaPhone, FaUser } from 'react-icons/fa';

const ContactInfo = ({ formData, handleInputChange, handleNext,handleBack }) => {
  return (
    <div className="contact-info-container">
      <h1 className="contact-info-title">EMERGENCY CONTACT INFORMATION</h1>
      <div className="contact-info-form">
        <div className="contact-info-form-group">
          <label htmlFor="emergencyContactNumber" className="contact-info-label">
            <FaPhone className="contact-info-icon" /> Emergency Contact Number
          </label>
          <input
            type="tel"
            id="emergencyContactNumber"
            name="emergencyContactNumber"
            value={formData.emergencyContactNumber}
            onChange={handleInputChange}
            required
            className="contact-info-input"
          />
        </div>
        <div className="contact-info-form-group">
          <label htmlFor="emergencyContactName" className="contact-info-label">
            <FaUser className="contact-info-icon" /> Name
          </label>
          <input
            type="text"
            id="emergencyContactName"
            name="emergencyContactName"
            value={formData.emergencyContactName}
            onChange={handleInputChange}
            required
            className="contact-info-input"
          />
        </div>
        <div className="contact-info-form-group">
          <label htmlFor="emergencyContactRelation" className="contact-info-label">
            <FaUser className="contact-info-icon" /> Relation
          </label>
          <input
            type="text"
            id="emergencyContactRelation"
            name="emergencyContactRelation"
            value={formData.emergencyContactRelation}
            onChange={handleInputChange}
            required
            className="contact-info-input"
          />
        </div>
        <div className="contact-info-form-group">
          <label htmlFor="emergencyContactAddress" className="contact-info-label">
            <FaMapMarkerAlt className="contact-info-icon" /> Address
          </label>
          <textarea
            id="emergencyContactAddress"
            name="emergencyContactAddress"
            value={formData.emergencyContactAddress}
            onChange={handleInputChange}
            required
            className="contact-info-textarea"
          />
        </div>
      </div>
      <div className="contact-info-button-group">
        <button className="contact-info-next-button" onClick={handleNext}>Next</button>
      </div>
      <button className="employee-consent-back-button" onClick={handleBack}>
          Back
        </button>
    </div>
  );
};

export default ContactInfo;

