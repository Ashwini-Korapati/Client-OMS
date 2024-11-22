import React from 'react';
import { FaPassport, FaIdCard, FaCalendarAlt, FaGraduationCap, FaUniversity } from 'react-icons/fa';
import './EducationalQualification.css';

const EducationalQualification = ({ formData, handleInputChange, handleNext, handleBack }) => {
  return (
    <div className="edu-qual-container">
      <h1 className="edu-qual-title">EDUCATIONAL QUALIFICATION</h1>
      <div className="edu-qual-form">
        <div className="edu-qual-form-group">
          <label className="edu-qual-label">
            <FaGraduationCap className="edu-qual-icon" /> Post Graduation?
          </label>
          <div className="edu-qual-radio-group">
            <label className="edu-qual-radio-label">
              <input
                type="radio"
                name="hasPostGraduation"
                value="yes"
                checked={formData.hasPostGraduation === "yes"}
                onChange={handleInputChange}
                className="edu-qual-radio"
              />
              Yes
            </label>
            <label className="edu-qual-radio-label">
              <input
                type="radio"
                name="hasPostGraduation"
                value="no"
                checked={formData.hasPostGraduation === "no"}
                onChange={handleInputChange}
                className="edu-qual-radio"
              />
              No
            </label>
          </div>
        </div>
        {formData.hasPostGraduation === "yes" && (
          <div className="edu-qual-grid">
            <div className="edu-qual-form-group">
              <label htmlFor="pgCollege" className="edu-qual-label">
                <FaUniversity className="edu-qual-icon" /> College/University/Board
              </label>
              <input
                type="text"
                id="pgCollege"
                name="pgCollege"
                value={formData.pgCollege}
                onChange={handleInputChange}
                required
                className="edu-qual-input"
              />
            </div>
            <div className="edu-qual-form-group">
              <label htmlFor="pgBranch" className="edu-qual-label">
                <FaGraduationCap className="edu-qual-icon" /> Branch/Dept
              </label>
              <input
                type="text"
                id="pgBranch"
                name="pgBranch"
                value={formData.pgBranch}
                onChange={handleInputChange}
                required
                className="edu-qual-input"
              />
            </div>
            <div className="edu-qual-form-group">
              <label htmlFor="pgYearOfPassing" className="edu-qual-label">
                <FaCalendarAlt className="edu-qual-icon" /> Year of Passing
              </label>
              <input
                type="text"
                id="pgYearOfPassing"
                name="pgYearOfPassing"
                value={formData.pgYearOfPassing}
                onChange={handleInputChange}
                required
                className="edu-qual-input"
              />
            </div>
            <div className="edu-qual-form-group">
              <label htmlFor="pgGrade" className="edu-qual-label">
                <FaGraduationCap className="edu-qual-icon" /> Grade/Percentage
              </label>
              <input
                type="text"
                id="pgGrade"
                name="pgGrade"
                value={formData.pgGrade}
                onChange={handleInputChange}
                required
                className="edu-qual-input"
              />
            </div>
            <div className="edu-qual-form-group">
              <label htmlFor="pgCourseName" className="edu-qual-label">
                <FaGraduationCap className="edu-qual-icon" /> Course Name
              </label>
              <input
                type="text"
                id="pgCourseName"
                name="pgCourseName"
                value={formData.pgCourseName}
                onChange={handleInputChange}
                required
                className="edu-qual-input"
              />
            </div>
          </div>
        )}
        <div className="edu-qual-grid">
          <div className="edu-qual-form-group">
            <label htmlFor="ugCollege" className="edu-qual-label">
              <FaUniversity className="edu-qual-icon" /> College/University/Board
            </label>
            <input
              type="text"
              id="ugCollege"
              name="ugCollege"
              value={formData.ugCollege}
              onChange={handleInputChange}
              required
              className="edu-qual-input"
            />
          </div>
          <div className="edu-qual-form-group">
            <label htmlFor="ugBranch" className="edu-qual-label">
              <FaGraduationCap className="edu-qual-icon" /> Branch/Dept
            </label>
            <input
              type="text"
              id="ugBranch"
              name="ugBranch"
              value={formData.ugBranch}
              onChange={handleInputChange}
              required
              className="edu-qual-input"
            />
          </div>
          <div className="edu-qual-form-group">
            <label htmlFor="ugYearOfPassing" className="edu-qual-label">
              <FaCalendarAlt className="edu-qual-icon" /> Year of Passing
            </label>
            <input
              type="text"
              id="ugYearOfPassing"
              name="ugYearOfPassing"
              value={formData.ugYearOfPassing}
              onChange={handleInputChange}
              required
              className="edu-qual-input"
            />
          </div>
          <div className="edu-qual-form-group">
            <label htmlFor="ugGrade" className="edu-qual-label">
              <FaGraduationCap className="edu-qual-icon" /> Grade/Percentage
            </label>
            <input
              type="text"
              id="ugGrade"
              name="ugGrade"
              value={formData.ugGrade}
              onChange={handleInputChange}
              required
              className="edu-qual-input"
            />
          </div>
          <div className="edu-qual-form-group">
            <label htmlFor="ugCourseName" className="edu-qual-label">
              <FaGraduationCap className="edu-qual-icon" /> Course Name
            </label>
            <input
              type="text"
              id="ugCourseName"
              name="ugCourseName"
              value={formData.ugCourseName}
              onChange={handleInputChange}
              required
              className="edu-qual-input"
            />
          </div>
        </div>
        <div className="edu-qual-grid">
          <div className="edu-qual-form-group">
            <label htmlFor="hscCollegeName" className="edu-qual-label">
              <FaUniversity className="edu-qual-icon" /> College Name
            </label>
            <input
              type="text"
              id="hscCollegeName"
              name="hscCollegeName"
              value={formData.hscCollegeName}
              onChange={handleInputChange}
              required
              className="edu-qual-input"
            />
          </div>
          <div className="edu-qual-form-group">
            <label className="edu-qual-label">
              <FaGraduationCap className="edu-qual-icon" /> Streams
            </label>
            <div className="edu-qual-radio-group">
              <label className="edu-qual-radio-label">
                <input
                  type="radio"
                  name="hscStream"
                  value="Science"
                  checked={formData.hscStream === "Science"}
                  onChange={handleInputChange}
                  className="edu-qual-radio"
                />
                Science
              </label>
              <label className="edu-qual-radio-label">
                <input
                  type="radio"
                  name="hscStream"
                  value="Commerce"
                  checked={formData.hscStream === "Commerce"}
                  onChange={handleInputChange}
                  className="edu-qual-radio"
                />
                Commerce
              </label>
              <label className="edu-qual-radio-label">
                <input
                  type="radio"
                  name="hscStream"
                  value="Arts"
                  checked={formData.hscStream === "Arts"}
                  onChange={handleInputChange}
                  className="edu-qual-radio"
                />
                Arts
              </label>
            </div>
          </div>
          <div className="edu-qual-form-group">
            <label htmlFor="hscYearOfPassing" className="edu-qual-label">
              <FaCalendarAlt className="edu-qual-icon" /> Year of Passing
            </label>
            <input
              type="text"
              id="hscYearOfPassing"
              name="hscYearOfPassing"
              value={formData.hscYearOfPassing}
              onChange={handleInputChange}
              required
              className="edu-qual-input"
            />
          </div>
          <div className="edu-qual-form-group">
            <label htmlFor="hscGrade" className="edu-qual-label">
              <FaGraduationCap className="edu-qual-icon" /> Grade/Percentage
            </label>
            <input
              type="text"
              id="hscGrade"
              name="hscGrade"
              value={formData.hscGrade}
              onChange={handleInputChange}
              required
              className="edu-qual-input"
            />
          </div>
        </div>
        <div className="edu-qual-grid">
          <div className="edu-qual-form-group">
            <label htmlFor="sscSchoolName" className="edu-qual-label">
              <FaUniversity className="edu-qual-icon" /> School Name
            </label>
            <input
              type="text"
              id="sscSchoolName"
              name="sscSchoolName"
              value={formData.sscSchoolName}
              onChange={handleInputChange}
              required
              className="edu-qual-input"
            />
          </div>
          <div className="edu-qual-form-group">
            <label htmlFor="sscYearOfPassing" className="edu-qual-label">
              <FaCalendarAlt className="edu-qual-icon" /> Year of Passing
            </label>
            <input
              type="text"
              id="sscYearOfPassing"
              name="sscYearOfPassing"
              value={formData.sscYearOfPassing}
              onChange={handleInputChange}
              required
              className="edu-qual-input"
            />
          </div>
          <div className="edu-qual-form-group">
            <label htmlFor="sscGrade" className="edu-qual-label">
              <FaGraduationCap className="edu-qual-icon" /> Grade/Percentage
            </label>
            <input
              type="text"
              id="sscGrade"
              name="sscGrade"
              value={formData.sscGrade}
              onChange={handleInputChange}
              required
              className="edu-qual-input"
            />
          </div>
        </div>
      </div>
      <div className="edu-qual-button-group">
      <button className="employee-consent-back-button" onClick={handleBack}>
          Back
        </button>
        <button className="edu-qual-next-button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default EducationalQualification;

