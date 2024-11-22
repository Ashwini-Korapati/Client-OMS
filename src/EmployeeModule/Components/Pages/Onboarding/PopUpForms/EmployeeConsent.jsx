import React from "react";
import { FaFileAlt, FaCheckSquare } from "react-icons/fa";
import "./EmployeeConsent.css";

const EmployeeConsent = ({
  formData,
  handleInputChange,
  handleBack,
  handleNext,
  handleSubmit,
  
}) => {
  return (
    <div className="employee-consent-container">
      <h1 className="employee-consent-title">
        <FaFileAlt className="employee-consent-icon" /> Employee Consent
      </h1>
      <div className="employee-consent-form">
        <div className="employee-consent-section">
          <p className="employee-consent-text">
            I hereby authorize NM IT Solutions Pt Ltd to verify all the
            information which I have submitted to obtain and disclose all
            personal and professional information to conduct all necessary
            enquiries as per the company policy for employment with NM IT. This
            verification process can be conducted in any mode as determined by
            the company from time to time but not limited to only verbal or
            written, before personal information agents, former employers,
            associations, current employers, public agencies or any other source
            provided as reference. I also authorize NM IT Solutions Pt Ltd to
            verify my criminal record, as required. This verification can be
            conducted either by the company itself or by company authorized
            representatives.
          </p>
          <div className="employee-consent-checkbox-group">
            <label className="employee-consent-checkbox-label">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleInputChange}
                required
                className="employee-consent-checkbox"
              />
              {/* <FaCheckSquare className="employee-consent-checkbox-icon" /> */}
              I Agree
            </label>
          </div>
        </div>
      </div>
      <div className="employee-consent-button-group">
        <button className="employee-consent-back-button" onClick={handleBack}>
          Back
        </button>
        <button className="employee-consent-submit-button"onSubmit={handleSubmit} onClick={handleNext}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default EmployeeConsent;

