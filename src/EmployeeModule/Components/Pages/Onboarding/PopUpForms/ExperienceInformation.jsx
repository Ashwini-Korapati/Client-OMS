import React from 'react';
import { FaPassport, FaIdCard, FaCalendarAlt, FaBriefcase, FaBuilding, FaUser, FaEnvelope, FaPhone, FaFileAlt } from 'react-icons/fa';
import './ExperienceInformation.css';

const ExperienceInformation = ({ formData, handleInputChange,handleBack, handleNext, handleFileChange }) => {
  return (
    <div className="experience-info-container">
      <h1 className="experience-info-title">Experience Information</h1>
      <div className="experience-info-form">
        <div className="experience-info-form-group">
          <label className="experience-info-label">
            <FaBriefcase className="experience-info-icon" /> Do You Have Any Experience?
          </label>
          <div className="experience-info-radio-group">
            <label className="experience-info-radio-label">
              <input
                type="radio"
                name="hasExperience"
                value="yes"
                checked={formData.hasExperience === "yes"}
                onChange={handleInputChange}
                className="experience-info-radio"
              />
              Yes
            </label>
            <label className="experience-info-radio-label">
              <input
                type="radio"
                name="hasExperience"
                value="no"
                checked={formData.hasExperience === "no"}
                onChange={handleInputChange}
                className="experience-info-radio"
              />
              No
            </label>
          </div>
        </div>

        {formData.hasExperience === "yes" && (
          <>
            <div className="experience-info-section">
              <h3 className="experience-info-subtitle">Organization Details</h3>
              <div className="experience-info-grid">
                <div className="experience-info-form-group">
                  <label htmlFor="organizationName" className="experience-info-label">
                    <FaBuilding className="experience-info-icon" /> Organization Name:
                  </label>
                  <input
                    type="text"
                    id="organizationName"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleInputChange}
                    required
                    className="experience-info-input"
                  />
                </div>

                <div className="experience-info-form-group">
                  <label htmlFor="fromDate" className="experience-info-label">
                    <FaCalendarAlt className="experience-info-icon" /> From Date:
                  </label>
                  <input
                    type="date"
                    id="fromDate"
                    name="fromDate"
                    value={formData.fromDate}
                    onChange={handleInputChange}
                    required
                    className="experience-info-input"
                  />
                </div>

                <div className="experience-info-form-group">
                  <label htmlFor="toDate" className="experience-info-label">
                    <FaCalendarAlt className="experience-info-icon" /> To Date:
                  </label>
                  <input
                    type="date"
                    id="toDate"
                    name="toDate"
                    value={formData.toDate}
                    onChange={handleInputChange}
                    required
                    className="experience-info-input"
                  />
                </div>

                <div className="experience-info-form-group">
                  <label htmlFor="positionHeld" className="experience-info-label">
                    <FaBriefcase className="experience-info-icon" /> Position Held:
                  </label>
                  <input
                    type="text"
                    id="positionHeld"
                    name="positionHeld"
                    value={formData.positionHeld}
                    onChange={handleInputChange}
                    required
                    className="experience-info-input"
                  />
                </div>
              </div>

              <div className="experience-info-grid">
                <div className="experience-info-form-group">
                  <label htmlFor="supervisorName" className="experience-info-label">
                    <FaUser className="experience-info-icon" /> Immediate Supervisor Name:
                  </label>
                  <input
                    type="text"
                    id="supervisorName"
                    name="supervisorName"
                    value={formData.supervisorName}
                    onChange={handleInputChange}
                    required
                    className="experience-info-input"
                  />
                </div>

                <div className="experience-info-form-group">
                  <label htmlFor="supervisorDesignation" className="experience-info-label">
                    <FaIdCard className="experience-info-icon" /> Immediate Supervisor Designation:
                  </label>
                  <input
                    type="text"
                    id="supervisorDesignation"
                    name="supervisorDesignation"
                    value={formData.supervisorDesignation}
                    onChange={handleInputChange}
                    required
                    className="experience-info-input"
                  />
                </div>

                <div className="experience-info-form-group">
                  <label htmlFor="supervisorEmail" className="experience-info-label">
                    <FaEnvelope className="experience-info-icon" /> Immediate Supervisor Email Address:
                  </label>
                  <input
                    type="email"
                    id="supervisorEmail"
                    name="supervisorEmail"
                    value={formData.supervisorEmail}
                    onChange={handleInputChange}
                    required
                    className="experience-info-input"
                  />
                </div>

                <div className="experience-info-form-group">
                  <label htmlFor="supervisorContact" className="experience-info-label">
                    <FaPhone className="experience-info-icon" /> Immediate Supervisor Contact Number:
                  </label>
                  <input
                    type="tel"
                    id="supervisorContact"
                    name="supervisorContact"
                    value={formData.supervisorContact}
                    onChange={handleInputChange}
                    required
                    className="experience-info-input"
                  />
                </div>
              </div>
            </div>

            <div className="experience-info-form-group">
              <label className="experience-info-label">
                <FaBriefcase className="experience-info-icon" /> Add Other Organization Details
              </label>
              <div className="experience-info-radio-group">
                <label className="experience-info-radio-label">
                  <input
                    type="radio"
                    name="hasAdditionalOrganization"
                    value="yes"
                    checked={formData.hasAdditionalOrganization === "yes"}
                    onChange={handleInputChange}
                    className="experience-info-radio"
                  />
                  Yes
                </label>
                <label className="experience-info-radio-label">
                  <input
                    type="radio"
                    name="hasAdditionalOrganization"
                    value="no"
                    checked={formData.hasAdditionalOrganization === "no"}
                    onChange={handleInputChange}
                    className="experience-info-radio"
                  />
                  No
                </label>
              </div>
            </div>

            {formData.hasAdditionalOrganization === "yes" && (
              <div className="experience-info-section">
                <h3 className="experience-info-subtitle">Additional Organization Details</h3>
                <div className="experience-info-grid">
                  <div className="experience-info-form-group">
                    <label htmlFor="additionalOrgName" className="experience-info-label">
                      <FaBuilding className="experience-info-icon" /> Organization Name:
                    </label>
                    <input
                      type="text"
                      id="additionalOrgName"
                      name="additionalOrgName"
                      value={formData.additionalOrgName}
                      onChange={handleInputChange}
                      required
                      className="experience-info-input"
                    />
                  </div>

                  <div className="experience-info-form-group">
                    <label htmlFor="additionalFromDate" className="experience-info-label">
                      <FaCalendarAlt className="experience-info-icon" /> From Date:
                    </label>
                    <input
                      type="date"
                      id="additionalFromDate"
                      name="additionalFromDate"
                      value={formData.additionalFromDate}
                      onChange={handleInputChange}
                      required
                      className="experience-info-input"
                    />
                  </div>

                  <div className="experience-info-form-group">
                    <label htmlFor="additionalToDate" className="experience-info-label">
                      <FaCalendarAlt className="experience-info-icon" /> To Date:
                    </label>
                    <input
                      type="date"
                      id="additionalToDate"
                      name="additionalToDate"
                      value={formData.additionalToDate}
                      onChange={handleInputChange}
                      required
                      className="experience-info-input"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="experience-info-section">
              <h3 className="experience-info-subtitle">Documents</h3>
              {['Form 16', 'Offer Letter', 'Relieving Letter', 'Experience Letter', 'Salary Slip'].map((doc) => (
                <div key={doc} className="experience-info-form-group">
                  <label className="experience-info-label">
                    <FaFileAlt className="experience-info-icon" /> {doc}
                  </label>
                  <div className="experience-info-radio-group">
                    <label className="experience-info-radio-label">
                      <input
                        type="radio"
                        name={`has${doc.replace(/\s+/g, '')}`}
                        value="yes"
                        checked={formData[`has${doc.replace(/\s+/g, '')}`] === "yes"}
                        onChange={handleInputChange}
                        className="experience-info-radio"
                      />
                      Yes
                    </label>
                    <label className="experience-info-radio-label">
                      <input
                        type="radio"
                        name={`has${doc.replace(/\s+/g, '')}`}
                        value="no"
                        checked={formData[`has${doc.replace(/\s+/g, '')}`] === "no"}
                        onChange={handleInputChange}
                        className="experience-info-radio"
                      />
                      No
                    </label>
                  </div>
                  {formData[`has${doc.replace(/\s+/g, '')}`] === "yes" && (
                    <input
                      type="file"
                      name={`${doc.replace(/\s+/g, '')}File`}
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="experience-info-file-input"
                    />
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="experience-info-button-group">
      <button className="employee-consent-back-button" onClick={handleBack}>
          Back
        </button>
        <button className="experience-info-next-button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default ExperienceInformation;
