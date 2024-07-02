import React, { useState } from "react";
import axios from "axios";
import "./Addemployee.css";
import { Button } from "react-bootstrap";
import { AiTwotoneCloseCircle } from "react-icons/ai";

const AddEmployeeform = () => {
  const [formData, setFormData] = useState({
    dateOfJoining: "",
    employeeType: "",
    id: "",
    designation: "",
    reportsTo: "",
    role: "",
    name: "",
    contact: "",
    aadharNo: "",
    ifscCode: "",
    address: "",
    zipCode: "",
    profilePicture: null,
    email: "",
    gender: "",
    accountNo: "",
    panNo: "",
    city: "",
    state: "",
    graduationCertificate: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      // const response = await axios.post("http://192.168.10.63:8000/api/v1/admin/addEmployee", formDataToSend, {
      const response = await axios.post("http://localhost:8000/api/v1/admin/addEmployee", formDataToSend, {
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
      });
      console.log("Employee added successfully:", response.data);
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <div className="containerStyle">
      <div className="cont">
        <form onSubmit={handleSubmit}>
          <div className="form-header">
            <h1>New Employee Initiation</h1>
          </div>
          <div className="row">
            <div className="col-half">
              <div className="input-box">
                <label>Date of Joining</label>
                <input
                  type="text"
                  name="dateOfJoining"
                  value={formData.dateOfJoining}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-box">
                <label>Employee Type</label>
                <select
                  name="employeeType"
                  value={formData.employeeType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Type of Work</option>
                  <option value="Full time employee">Full time employee</option>
                  <option value="Intern">Intern</option>
                </select>
              </div>
              <div className="input-box">
                <label>ID</label>
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-half">
              <div className="input-box">
                <label>Designation</label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-box">
                <label>Reports to</label>
                <input
                  type="text"
                  name="reportsTo"
                  value={formData.reportsTo}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-box">
                <label>Role</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Role</option>
                  <option value="Admin">Admin</option>
                  <option value="HR">HR</option>
                  <option value="Employee">Employee</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-header">
            <h2>Personal Details</h2>
          </div>
          <div className="row">
            <div className="col-half">
              <div className="input-box">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-box">
                <label>Contact</label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-box">
                <label>Aadhar No</label>
                <input
                  type="text"
                  name="aadharNo"
                  value={formData.aadharNo}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-box">
                <label>IFSC Code</label>
                <input
                  type="text"
                  name="ifscCode"
                  value={formData.ifscCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-box">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-box">
                <label>Zip code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-box">
                <label>Profile Picture</label>
                <input
                  type="file"
                  name="profilePicture"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="file-input"
                />
              </div>
            </div>
            <div className="col-half">
              <div className="input-box">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-box">
                <label>Gender</label>
                <select
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
              <div className="input-box">
                <label>Account No</label>
                <input
                  type="text"
                  name="accountNo"
                  value={formData.accountNo}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-box">
                <label>Pan No</label>
                <input
                  type="text"
                  name="panNo"
                  value={formData.panNo}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-box">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-box">
                <label>State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-box">
                <label>Graduation Certificate</label>
                <input
                  type="file"
                  name="graduationCertificate"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="file-input"
                />
              </div>
            </div>
          </div>
          <Button type="submit" className="hr-add-button">Add</Button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeeform;