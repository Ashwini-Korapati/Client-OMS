import React, { useState } from "react";
import {
  FaUser,
  FaBuilding,
  FaIdCard,
  FaFileAlt,
  FaCheck,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaVenusMars,
  FaRing,
  FaFlag,
  FaPhone,
  FaEnvelope,
  FaTint,
  FaUniversity,
  FaMoneyCheckAlt,
  FaPassport,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";
// import "../Onboarding/Onboarding.css";
const EmployeeOnboardingForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    motherName: "",
    placeOfBirth: "",
    presentAddress: "",
    permanentAddress: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    nationality: "",
    contactNumber: "",
    alternateContactNumber: "",
    email: "",
    bloodGroup: "",
    bankName: "",
    bankAccountNumber: "",
    ifscCode: "",
    branchName: "",
    aadharNo: "",
    panCardNo: "",
    hasPfUan: "",
    pfUanNumber: "",
    hasPassport: "",
    emergencyContactNumber: "",
    emergencyContactName: "",
    emergencyContactRelation: "",
    emergencyContactAddress: "",
    hasPostGraduation: "",
    pgCollege: "",
    pgBranch: "",
    pgYearOfPassing: "",
    pgGrade: "",
    pgCourseName: "",
    ugCollege: "",
    ugBranch: "",
    ugYearOfPassing: "",
    ugGrade: "",
    ugCourseName: "",
    hscCollegeName: "",
    hscStream: "",
    hscYearOfPassing: "",
    hscGrade: "",
    sscSchoolName: "",
    sscYearOfPassing: "",
    sscGrade: "",
    hasExperience: "",
    consent: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("Selected file:", file);
    // Additional file handling logic
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/employee-onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);
      // Handle successful submission (e.g., show success message, redirect)
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2>PERSONAL INFORMATION</h2>
            <div className="form-group">
              <label htmlFor="fullName">
                <FaUser /> Full Name (As per Aadhar)
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="fatherName">
                <FaUser /> Father's Name
              </label>
              <input
                type="text"
                id="fatherName"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="motherName">
                <FaUser /> Mother's Name
              </label>
              <input
                type="text"
                id="motherName"
                name="motherName"
                value={formData.motherName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="placeOfBirth">
                <FaMapMarkerAlt /> Place of Birth
              </label>
              <input
                type="text"
                id="placeOfBirth"
                name="placeOfBirth"
                value={formData.placeOfBirth}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="presentAddress">
                <FaMapMarkerAlt /> Present Address
              </label>
              <textarea
                id="presentAddress"
                name="presentAddress"
                value={formData.presentAddress}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="permanentAddress">
                <FaMapMarkerAlt /> Permanent Address
              </label>
              <textarea
                id="permanentAddress"
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">
                <FaCalendarAlt /> Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">
                <FaVenusMars /> Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="maritalStatus">
                <FaRing /> Marital Status
              </label>
              <select
                id="maritalStatus"
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Marital Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="nationality">
                <FaFlag /> Nationality
              </label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactNumber">
                <FaPhone /> Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="alternateContactNumber">
                <FaPhone /> Alternate Contact Number
              </label>
              <input
                type="tel"
                id="alternateContactNumber"
                name="alternateContactNumber"
                value={formData.alternateContactNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <FaEnvelope /> E-Mail ID
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="bloodGroup">
                <FaTint /> Blood Group
              </label>
              <select
                id="bloodGroup"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleInputChange}
                required
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
            <div className="form-group">
              <label htmlFor="bankName">
                <FaUniversity /> Bank Name
              </label>
              <input
                type="text"
                id="bankName"
                name="bankName"
                value={formData.bankName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="bankAccountNumber">
                <FaMoneyCheckAlt /> Bank Account Number
              </label>
              <input
                type="text"
                id="bankAccountNumber"
                name="bankAccountNumber"
                value={formData.bankAccountNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="ifscCode">
                <FaBuilding /> IFSC Code
              </label>
              <input
                type="text"
                id="ifscCode"
                name="ifscCode"
                value={formData.ifscCode}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="branchName">
                <FaBuilding /> Branch Name
              </label>
              <input
                type="text"
                id="branchName"
                name="branchName"
                value={formData.branchName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="aadharNo">
                <FaIdCard /> Aadhar No
              </label>
              <input
                type="text"
                id="aadharNo"
                name="aadharNo"
                value={formData.aadharNo}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="panCardNo">
                <FaIdCard /> PAN Card No
              </label>
              <input
                type="text"
                id="panCardNo"
                name="panCardNo"
                value={formData.panCardNo}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>
                <FaUser /> Do You Have PF/UAN Number?
              </label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="hasPfUan"
                    value="yes"
                    checked={formData.hasPfUan === "yes"}
                    onChange={handleInputChange}
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="hasPfUan"
                    value="no"
                    checked={formData.hasPfUan === "no"}
                    onChange={handleInputChange}
                  />{" "}
                  No
                </label>
              </div>
            </div>
            {formData.hasPfUan === "yes" && (
              <div className="form-group">
                <label htmlFor="pfUanNumber">
                  <FaIdCard /> PF/UAN Number
                </label>
                <input
                  type="text"
                  id="pfUanNumber"
                  name="pfUanNumber"
                  value={formData.pfUanNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
            )}
          </>
        );

      case 2:
        return (
          <>
            <h1>Passport Details</h1>
            <div className="form-group">
              <label>
                <FaPassport /> Do you have passport?
              </label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="hasPassport"
                    value="yes"
                    checked={formData.hasPassport === "yes"}
                    onChange={handleInputChange}
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="hasPassport"
                    value="no"
                    checked={formData.hasPassport === "no"}
                    onChange={handleInputChange}
                  />{" "}
                  No
                </label>
              </div>
            </div>

            {formData.hasPassport === "yes" && (
              <>
                <div className="form-group">
                  <label htmlFor="passportNo">
                    <FaIdCard /> Passport No:
                  </label>
                  <input
                    type="text"
                    id="passportNo"
                    name="passportNo"
                    value={formData.passportNo}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="placeOfIssue">
                    <FaIdCard /> Place of Issue:
                  </label>
                  <input
                    type="text"
                    id="placeOfIssue"
                    name="placeOfIssue"
                    value={formData.placeOfIssue}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="issuedDate">
                    <FaCalendarAlt /> Issued On:
                  </label>
                  <input
                    type="date"
                    id="issuedDate"
                    name="issuedDate"
                    value={formData.issuedDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="validUpto">
                    <FaCalendarAlt /> Valid Upto:
                  </label>
                  <input
                    type="date"
                    id="validUpto"
                    name="validUpto"
                    value={formData.validUpto}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </>
            )}
          </>
        );
      case 3:
        return (
          <>
            <h1>EMERGENCY CONTACT INFORMATION</h1>
            <div className="form-group">
              <label htmlFor="emergencyContactNumber">
                <FaPhone /> Emergency Contact Number
              </label>
              <input
                type="tel"
                id="emergencyContactNumber"
                name="emergencyContactNumber"
                value={formData.emergencyContactNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="emergencyContactName">
                <FaUser /> Name
              </label>
              <input
                type="text"
                id="emergencyContactName"
                name="emergencyContactName"
                value={formData.emergencyContactName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="emergencyContactRelation">
                <FaUser /> Relation
              </label>
              <input
                type="text"
                id="emergencyContactRelation"
                name="emergencyContactRelation"
                value={formData.emergencyContactRelation}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="emergencyContactAddress">
                <FaMapMarkerAlt /> Address
              </label>
              <textarea
                id="emergencyContactAddress"
                name="emergencyContactAddress"
                value={formData.emergencyContactAddress}
                onChange={handleInputChange}
                required
              />
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h1>EDUCATIONAL QUALIFICATION</h1>
            <div className="form-group">
              <label>
                <FaGraduationCap /> Post Graduation?
              </label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="hasPostGraduation"
                    value="yes"
                    checked={formData.hasPostGraduation === "yes"}
                    onChange={handleInputChange}
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="hasPostGraduation"
                    value="no"
                    checked={formData.hasPostGraduation === "no"}
                    onChange={handleInputChange}
                  />{" "}
                  No
                </label>
              </div>
            </div>
            {formData.hasPostGraduation === "yes" && (
              <>
                <div className="form-group">
                  <label htmlFor="pgCollege">
                    <FaUniversity /> College/University/Board
                  </label>
                  <input
                    type="text"
                    id="pgCollege"
                    name="pgCollege"
                    value={formData.pgCollege}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pgBranch">
                    <FaGraduationCap /> Branch/Dept
                  </label>
                  <input
                    type="text"
                    id="pgBranch"
                    name="pgBranch"
                    value={formData.pgBranch}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pgYearOfPassing">
                    <FaCalendarAlt /> Year of Passing
                  </label>
                  <input
                    type="text"
                    id="pgYearOfPassing"
                    name="pgYearOfPassing"
                    value={formData.pgYearOfPassing}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pgGrade">
                    <FaGraduationCap /> Grade/Percentage
                  </label>
                  <input
                    type="text"
                    id="pgGrade"
                    name="pgGrade"
                    value={formData.pgGrade}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pgCourseName">
                    <FaGraduationCap /> Course Name
                  </label>
                  <input
                    type="text"
                    id="pgCourseName"
                    name="pgCourseName"
                    value={formData.pgCourseName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </>
            )}
            <div className="form-group">
              <label htmlFor="ugCollege">
                <FaUniversity /> College/University/Board
              </label>
              <input
                type="text"
                id="ugCollege"
                name="ugCollege"
                value={formData.ugCollege}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="ugBranch">
                <FaGraduationCap /> Branch/Dept
              </label>
              <input
                type="text"
                id="ugBranch"
                name="ugBranch"
                value={formData.ugBranch}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="ugYearOfPassing">
                <FaCalendarAlt /> Year of Passing
              </label>
              <input
                type="text"
                id="ugYearOfPassing"
                name="ugYearOfPassing"
                value={formData.ugYearOfPassing}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="ugGrade">
                <FaGraduationCap /> Grade/Percentage
              </label>
              <input
                type="text"
                id="ugGrade"
                name="ugGrade"
                value={formData.ugGrade}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="ugCourseName">
                <FaGraduationCap /> Course Name
              </label>
              <input
                type="text"
                id="ugCourseName"
                name="ugCourseName"
                value={formData.ugCourseName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="hscCollegeName">
                <FaUniversity /> College Name
              </label>
              <input
                type="text"
                id="hscCollegeName"
                name="hscCollegeName"
                value={formData.hscCollegeName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>
                <FaGraduationCap /> Streams
              </label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="hscStream"
                    value="Science"
                    checked={formData.hscStream === "Science"}
                    onChange={handleInputChange}
                  />{" "}
                  Science
                </label>
                <label>
                  <input
                    type="radio"
                    name="hscStream"
                    value="Commerce"
                    checked={formData.hscStream === "Commerce"}
                    onChange={handleInputChange}
                  />{" "}
                  Commerce
                </label>
                <label>
                  <input
                    type="radio"
                    name="hscStream"
                    value="Arts"
                    checked={formData.hscStream === "Arts"}
                    onChange={handleInputChange}
                  />{" "}
                  Arts
                </label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="hscYearOfPassing">
                <FaCalendarAlt /> Year of Passing
              </label>
              <input
                type="text"
                id="hscYearOfPassing"
                name="hscYearOfPassing"
                value={formData.hscYearOfPassing}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="hscGrade">
                <FaGraduationCap /> Grade/Percentage
              </label>
              <input
                type="text"
                id="hscGrade"
                name="hscGrade"
                value={formData.hscGrade}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="sscSchoolName">
                <FaUniversity /> School Name
              </label>
              <input
                type="text"
                id="sscSchoolName"
                name="sscSchoolName"
                value={formData.sscSchoolName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="sscYearOfPassing">
                <FaCalendarAlt /> Year of Passing
              </label>
              <input
                type="text"
                id="sscYearOfPassing"
                name="sscYearOfPassing"
                value={formData.sscYearOfPassing}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="sscGrade">
                <FaGraduationCap /> Grade/Percentage
              </label>
              <input
                type="text"
                id="sscGrade"
                name="sscGrade"
                value={formData.sscGrade}
                onChange={handleInputChange}
                required
              />
            </div>
          </>
        );
      case 5:
        return (
          <>
            <h1>Experience Information</h1>
            <div className="form-group">
              <label>
                <FaBriefcase /> Do You Have Any Experience?
              </label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="hasExperience"
                    value="yes"
                    checked={formData.hasExperience === "yes"}
                    onChange={handleInputChange}
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="hasExperience"
                    value="no"
                    checked={formData.hasExperience === "no"}
                    onChange={handleInputChange}
                  />{" "}
                  No
                </label>
              </div>
            </div>

            {formData.hasExperience === "yes" && (
              <>
                <div className="organization-details">
                  <h3>Organization Details</h3>
                  <div className="form-group">
                    <label htmlFor="organizationName">
                      <FaBuilding /> Organization Name:
                    </label>
                    <input
                      type="text"
                      id="organizationName"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="fromDate">
                      <FaCalendarAlt /> From Date:
                    </label>
                    <input
                      type="date"
                      id="fromDate"
                      name="fromDate"
                      value={formData.fromDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="toDate">
                      <FaCalendarAlt /> To Date:
                    </label>
                    <input
                      type="date"
                      id="toDate"
                      name="toDate"
                      value={formData.toDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="positionHeld">
                      <FaBriefcase /> Position Held:
                    </label>
                    <input
                      type="text"
                      id="positionHeld"
                      name="positionHeld"
                      value={formData.positionHeld}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="supervisorName">
                      <FaUser /> Immediate Supervisor Name:
                    </label>
                    <input
                      type="text"
                      id="supervisorName"
                      name="supervisorName"
                      value={formData.supervisorName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="supervisorDesignation">
                      <FaIdCard /> Immediate Supervisor Designation:
                    </label>
                    <input
                      type="text"
                      id="supervisorDesignation"
                      name="supervisorDesignation"
                      value={formData.supervisorDesignation}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="supervisorEmail">
                      <FaEnvelope /> Immediate Supervisor Email Address:
                    </label>
                    <input
                      type="email"
                      id="supervisorEmail"
                      name="supervisorEmail"
                      value={formData.supervisorEmail}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="supervisorContact">
                      <FaPhone /> Immediate Supervisor Contact Number:
                    </label>
                    <input
                      type="tel"
                      id="supervisorContact"
                      name="supervisorContact"
                      value={formData.supervisorContact}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Additional Organization Toggle */}
                <div className="form-group">
                  <label>
                    <FaBriefcase /> Add Other Organization Details
                  </label>
                  <div className="radio-group">
                    <label>
                      <input
                        type="radio"
                        name="hasAdditionalOrganization"
                        value="yes"
                        checked={formData.hasAdditionalOrganization === "yes"}
                        onChange={handleInputChange}
                      />{" "}
                      Yes
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="hasAdditionalOrganization"
                        value="no"
                        checked={formData.hasAdditionalOrganization === "no"}
                        onChange={handleInputChange}
                      />{" "}
                      No
                    </label>
                  </div>
                </div>

                {/* Additional Organization Details */}
                {formData.hasAdditionalOrganization === "yes" && (
                  <div className="additional-organization">
                    <h3>Additional Organization Details</h3>
                    <div className="form-group">
                      <label htmlFor="additionalOrgName">
                        <FaBuilding /> Organization Name:
                      </label>
                      <input
                        type="text"
                        id="additionalOrgName"
                        name="additionalOrgName"
                        value={formData.additionalOrgName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="additionalFromDate">
                        <FaCalendarAlt /> From Date:
                      </label>
                      <input
                        type="date"
                        id="additionalFromDate"
                        name="additionalFromDate"
                        value={formData.additionalFromDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="additionalToDate">
                        <FaCalendarAlt /> To Date:
                      </label>
                      <input
                        type="date"
                        id="additionalToDate"
                        name="additionalToDate"
                        value={formData.additionalToDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Documents Section */}
                <div className="documents-section">
                  <h3>Documents</h3>

                  {/* Form 16 */}
                  <div className="form-group">
                    <label>
                      <FaFileAlt /> Form 16
                    </label>
                    <div className="radio-group">
                      <label>
                        <input
                          type="radio"
                          name="hasForm16"
                          value="yes"
                          checked={formData.hasForm16 === "yes"}
                          onChange={handleInputChange}
                        />{" "}
                        Yes
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="hasForm16"
                          value="no"
                          checked={formData.hasForm16 === "no"}
                          onChange={handleInputChange}
                        />{" "}
                        No
                      </label>
                    </div>
                    {formData.hasForm16 === "yes" && (
                      <input
                        type="file"
                        name="form16File"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                      />
                    )}
                  </div>

                  {/* Offer Letter */}
                  <div className="form-group">
                    <label>
                      <FaFileAlt /> Offer Letter
                    </label>
                    <div className="radio-group">
                      <label>
                        <input
                          type="radio"
                          name="hasOfferLetter"
                          value="yes"
                          checked={formData.hasOfferLetter === "yes"}
                          onChange={handleInputChange}
                        />{" "}
                        Yes
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="hasOfferLetter"
                          value="no"
                          checked={formData.hasOfferLetter === "no"}
                          onChange={handleInputChange}
                        />{" "}
                        No
                      </label>
                    </div>
                    {formData.hasOfferLetter === "yes" && (
                      <input
                        type="file"
                        name="offerLetterFile"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                      />
                    )}
                  </div>

                  {/* Relieving Letter */}
                  <div className="form-group">
                    <label>
                      <FaFileAlt /> Relieving Letter
                    </label>
                    <div className="radio-group">
                      <label>
                        <input
                          type="radio"
                          name="hasRelievingLetter"
                          value="yes"
                          checked={formData.hasRelievingLetter === "yes"}
                          onChange={handleInputChange}
                        />{" "}
                        Yes
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="hasRelievingLetter"
                          value="no"
                          checked={formData.hasRelievingLetter === "no"}
                          onChange={handleInputChange}
                        />{" "}
                        No
                      </label>
                    </div>
                    {formData.hasRelievingLetter === "yes" && (
                      <input
                        type="file"
                        name="relievingLetterFile"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                      />
                    )}
                  </div>

                  {/* Experience Letter */}
                  <div className="form-group">
                    <label>
                      <FaFileAlt /> Experience Letter
                    </label>
                    <div className="radio-group">
                      <label>
                        <input
                          type="radio"
                          name="hasExperienceLetter"
                          value="yes"
                          checked={formData.hasExperienceLetter === "yes"}
                          onChange={handleInputChange}
                        />{" "}
                        Yes
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="hasExperienceLetter"
                          value="no"
                          checked={formData.hasExperienceLetter === "no"}
                          onChange={handleInputChange}
                        />{" "}
                        No
                      </label>
                    </div>
                    {formData.hasExperienceLetter === "yes" && (
                      <input
                        type="file"
                        name="experienceLetterFile"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                      />
                    )}
                  </div>

                  {/* Salary Slip */}
                  <div className="form-group">
                    <label>
                      <FaFileAlt /> Salary Slip
                    </label>
                    <div className="radio-group">
                      <label>
                        <input
                          type="radio"
                          name="hasSalarySlip"
                          value="yes"
                          checked={formData.hasSalarySlip === "yes"}
                          onChange={handleInputChange}
                        />{" "}
                        Yes
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="hasSalarySlip"
                          value="no"
                          checked={formData.hasSalarySlip === "no"}
                          onChange={handleInputChange}
                        />{" "}
                        No
                      </label>
                    </div>
                    {formData.hasSalarySlip === "yes" && (
                      <input
                        type="file"
                        name="salarySlipFile"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                      />
                    )}
                  </div>
                </div>
              </>
            )}
          </>
        );
      case 6:
        return (
          <div className="form-group consent-group">
            <label htmlFor="consent">
              <FaFileAlt /> Employee Consent
            </label>
            <p>
              I hereby authorize NM IT Solutions Pt Ltd to verify all the
              information which I have submitted to obtain and disclose all
              personal and professional information to conduct all necessary
              enquiries as per the company policy for employment with NM IT.
              This verification process can be conducted in any mode as
              determined by the company from time to time but not limited to
              only verbal or written, before personal information agents, former
              employers, associations, current employers, public agencies or any
              other source provided as reference. I also authorize NM IT
              Solutions Pt Ltd to verify my criminal record, as required. This
              verification can be conducted either by the company itself or by
              company authorized representatives.
            </p>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  required
                />
                I Agree
              </label>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="onboarding-form-container">
      <h1>ONBOARDING FORMS</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-content">{renderStep()}</div>
        <div className="form-actions">
          {step > 1 && (
            <button type="button" onClick={handleBack} className="back-btn">
              Back
            </button>
          )}
          {step < 6 ? (
            <button type="button" onClick={handleNext} className="next-btn">
              Next
            </button>
          ) : (
            <button type="submit" className="submit-btn">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default EmployeeOnboardingForm;
