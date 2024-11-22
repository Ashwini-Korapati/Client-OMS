import React from 'react';
import { FaPassport, FaIdCard, FaCalendarAlt } from 'react-icons/fa';
import './PassportDetails.css';

const PassportDetails = ({ formData, handleInputChange, handleNext ,handleBack}) => {
  return (
    <div className="passport-details-container">
      <h2 className="passport-details-title">PASSPORT DETAILS</h2>
      <div className="passport-details-form">
        <div className="passport-details-form-group">
          <label className="passport-details-label">
            <FaPassport className="passport-details-icon" /> Do you have passport?
          </label>
          <div className="passport-details-radio-group">
            <label className="passport-details-radio-label">
              <input
                type="radio"
                name="hasPassport"
                value="yes"
                checked={formData.hasPassport === "yes"}
                onChange={handleInputChange}
                className="passport-details-radio"
              />
              Yes
            </label>
            <label className="passport-details-radio-label">
              <input
                type="radio"
                name="hasPassport"
                value="no"
                checked={formData.hasPassport === "no"}
                onChange={handleInputChange}
                className="passport-details-radio"
              />
              No
            </label>
          </div>
        </div>

        {formData.hasPassport === "yes" && (
          <div className="passport-details-grid">
            <div className="passport-details-form-group">
              <label htmlFor="passportNo" className="passport-details-label">
                <FaIdCard className="passport-details-icon" /> Passport No:
              </label>
              <input
                type="text"
                id="passportNo"
                name="passportNo"
                value={formData.passportNo}
                onChange={handleInputChange}
                required
                className="passport-details-input"
              />
            </div>

            <div className="passport-details-form-group">
              <label htmlFor="placeOfIssue" className="passport-details-label">
                <FaIdCard className="passport-details-icon" /> Place of Issue:
              </label>
              <input
                type="text"
                id="placeOfIssue"
                name="placeOfIssue"
                value={formData.placeOfIssue}
                onChange={handleInputChange}
                required
                className="passport-details-input"
              />
            </div>

            <div className="passport-details-form-group">
              <label htmlFor="issuedDate" className="passport-details-label">
                <FaCalendarAlt className="passport-details-icon" /> Issued On:
              </label>
              <input
                type="date"
                id="issuedDate"
                name="issuedDate"
                value={formData.issuedDate}
                onChange={handleInputChange}
                required
                className="passport-details-input"
              />
            </div>

            <div className="passport-details-form-group">
              <label htmlFor="validUpto" className="passport-details-label">
                <FaCalendarAlt className="passport-details-icon" /> Valid Upto:
              </label>
              <input
                type="date"
                id="validUpto"
                name="validUpto"
                value={formData.validUpto}
                onChange={handleInputChange}
                required
                className="passport-details-input"
              />
            </div>
          </div>
        )}
      </div>
      <div className="passport-details-button-group">

        <button className="employee-consent-back-button" onClick={handleBack}>
          Back
        </button>
        <button className="passport-details-next-button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default PassportDetails;
