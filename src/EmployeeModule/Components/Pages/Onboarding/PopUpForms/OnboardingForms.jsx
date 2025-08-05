// src/components/OnboardingForms.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PersonalInformation from "./PersonalInformation";
import PassportDetails from "./PassportDetails";
import ContactInfo from "./ContactInfo";
import EducationalQualification from "./EducationalQualification";
import ExperienceInformation from "./ExperienceInformation";
import EmployeeConsent from "./EmployeeConsent";
import { FaUser, FaPassport, FaPhone, FaGraduationCap, FaBriefcase, FaFileSignature } from "react-icons/fa";
import "./OnboardingForms.css";
import { httpUpload } from '../../../../../Httphandler'

const OnboardingForms = () => {
  const [currentStep, setCurrentStep] = useState(1);
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
    organizationName: "",
    fromDate: "",
    toDate: "",
    positionHeld: "",
    supervisorName: "",
    supervisorDesignation: "",
    supervisorEmail: "",
    supervisorContact: "",
    hasAdditionalOrganization: "",
    additionalOrgName: "",
    additionalFromDate: "",
    additionalToDate: "",
    hasForm16: "",
    hasOfferLetter: "",
    hasRelievingLetter: "",
    hasExperienceLetter: "",
    hasSalarySlip: "",
    form16File: null,
    offerLetterFile: null,
    relievingLetterFile: null,
    experienceLetterFile: null,
    salarySlipFile: null,
    consent: false,
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (token) => {
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key.endsWith("File") && formData[key]) {
          formDataToSend.append(key, formData[key]);
        } else {
          formDataToSend.append(key, formData[key]);
        }
      });

      const response = await httpUpload("/employee/onboarding", formDataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Onboarding form submitted successfully!");
      console.log("Onboarding successful:", response.data);
    } catch (error) {
      console.error("Error submitting onboarding form:", error);
      alert("Failed to submit onboarding form. Please try again.");
    }
  };

  const handleNext = () => {
    if (currentStep === steps.length) {
      handleSubmit();
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => setCurrentStep((prev) => prev - 1);

  const steps = [
    { number: 1, title: "Personal Details", icon: <FaUser />, active: true },
    { number: 2, title: "Passport Details", icon: <FaPassport />, active: false },
    { number: 3, title: "Contact Info", icon: <FaPhone />, active: false },
    { number: 4, title: "Educational Qualification", icon: <FaGraduationCap />, active: false },
    { number: 5, title: "Experience Information", icon: <FaBriefcase />, active: false },
    { number: 6, title: "Employee Consent", icon: <FaFileSignature />, active: false },
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInformation formData={formData} handleInputChange={handleInputChange} handleNext={handleNext} />;
      case 2:
        return <PassportDetails formData={formData} handleInputChange={handleInputChange} handleNext={handleNext} handleBack={handleBack} />;
      case 3:
        return <ContactInfo formData={formData} handleInputChange={handleInputChange} handleNext={handleNext} handleBack={handleBack} />;
      case 4:
        return <EducationalQualification formData={formData} handleInputChange={handleInputChange} handleNext={handleNext} handleBack={handleBack} />;
      case 5:
        return <ExperienceInformation formData={formData} handleInputChange={handleInputChange} handleFileChange={handleFileChange} handleNext={handleNext} handleBack={handleBack} />;
      case 6:
        return <EmployeeConsent formData={formData} handleInputChange={handleInputChange} handleNext={handleNext} handleBack={handleBack} />;
      default:
        return null;
    }
  };

  return (
    <div className="onboarding-container">
      <div className="onboarding-sidebar">
        {steps.map((step) => (
          <motion.div
            key={step.number}
            className={`onboarding-step-item ${currentStep === step.number ? "active" : ""} ${currentStep > step.number ? "completed" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: step.number * 0.1 }}
          >
            <div className="onboarding-step-icon">{step.icon}</div>
            <div className="onboarding-step-content">
              <div className="onboarding-step-number">{step.number}</div>
              <div className="onboarding-step-title">{step.title}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="onboarding-main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="onboarding-form-wrapper"
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OnboardingForms;
