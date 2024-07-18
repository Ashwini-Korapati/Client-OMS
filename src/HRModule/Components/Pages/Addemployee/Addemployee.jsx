

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Select, Upload, DatePicker } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import {
  setField,
  setFile,
  resetForm,
  addEmployee,
} from "../../../Redux/Actions/Addempactions";
import "./Addemployee.css";
import add from '../../../Assets/add.png'

const { Option } = Select;

const AddEmployeeForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const formData = useSelector((state) => state.addemployee);
  const [fileList, setFileList] = useState([]);

  const handleInputChange = (name, value) => {
    dispatch(setField({ name, value }));
  };

  const handleFileChange = ({ file, fileList }) => {
    setFileList(fileList);
    dispatch(setFile({ name: "avatar", file }));
  };

  const handleSubmit = () => {
    // Dispatch the addEmployee action which is async and handled by Redux thunk
    dispatch(addEmployee(formData)).then(() => {
      form.resetFields(); // Reset the form fields
      setFileList([]); // Reset the file list
      // navigate("hr-dashboard/hr-home"); // Corrected the navigation function call
    });
  };

  return (
    <>
     
      <div className="containerStyle">
        <div className="cont">
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            <div className="form-header">
              <img
        src={add}
        alt="Top right corner"
        className="top-right-image"
      />
                    <h1>New Employee Initiation</h1>

            </div>
            <div className="row">
              <div className="col-half">
                <Form.Item
                  label="Date of Joining"
                  name="dateOfJoining"
                  rules={[{ required: true }]}
                >
                  <DatePicker
                    onChange={(date, dateString) =>
                      handleInputChange("dateOfJoining", dateString)
                    }
                  />
                </Form.Item>
                <Form.Item
                  label="Employee Type"
                  name="employeeType"
                  rules={[{ required: true }]}
                >
                  <Select
                    onChange={(value) => handleInputChange("employeeType", value)}
                  >
                    <Option value="">Select Type of Work</Option>
                    <Option value="Full time employee">Full time employee</Option>
                    <Option value="Intern">Intern</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="ID" name="emp_id" rules={[{ required: true }]}>
                  <Input
                    onChange={(e) => handleInputChange("emp_id", e.target.value)}
                  />
                </Form.Item>
              </div>
              <div className="col-half">
                <Form.Item
                  label="Designation"
                  name="designation"
                  rules={[{ required: true }]}
                >
                  <Input
                    onChange={(e) =>
                      handleInputChange("designation", e.target.value)
                    }
                  />
                </Form.Item>
                <Form.Item
                  label="Reports to"
                  name="reporting_to"
                  rules={[{ required: true }]}
                >
                  <Input
                    onChange={(e) =>
                      handleInputChange("reporting_to", e.target.value)
                    }
                  />
                </Form.Item>
                <Form.Item label="Role" name="role" rules={[{ required: true }]}>
                  <Select onChange={(value) => handleInputChange("role", value)}>
                    <Option value="">Select Role</Option>
                    <Option value="admin">Admin</Option>
                    <Option value="hr">Hr</Option>
                    <Option value="employee">Employee</Option>
                  </Select>
                </Form.Item>
              </div>
            </div>
            <div className="form-header">
              <h2>Personal Details</h2>
            </div>
            <div className="row">
              <div className="col-half">
                <Form.Item
                  label="Name"
                  name="firstName"
                  rules={[{ required: true }]}
                >
                  <Input
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                  />
                </Form.Item>
                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[{ required: true }]}
                >
                  <Input
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                  />
                </Form.Item>
                <Form.Item
                  label="Contact"
                  name="phoneNumber"
                  rules={[{ required: true }]}
                >
                  <Input
                    onChange={(e) =>
                      handleInputChange("phoneNumber", e.target.value)
                    }
                  />
                </Form.Item>
                <Form.Item
                  label="Aadhar No"
                  name="aadharNo"
                  rules={[{ required: true }]}
                >
                  <Input
                    onChange={(e) =>
                      handleInputChange("aadharNo", e.target.value)
                    }
                  />
                </Form.Item>

                <Form.Item
                  label="Default Password"
                  name="password"
                  rules={[{ required: true }]}
                >
                  <Input
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                  />
                </Form.Item>
                <Form.Item
                  label="IFSC Code"
                  name="ifscCode"
                  rules={[{ required: true }]}
                >
                  <Input
                    onChange={(e) => handleInputChange("ifscCode", e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  label="Address"
                  name="address"
                  rules={[{ required: true }]}
                >
                  <Input
                    onChange={(e) => handleInputChange("address", e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  label="Zip Code"
                  name="zipCode"
                  rules={[{ required: true }]}
                >
                  <Input
                    onChange={(e) => handleInputChange("zipCode", e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Profile Picture" name="avatar">
                  <Upload
                    listType="picture"
                    fileList={fileList}
                    beforeUpload={(file) => {
                      handleFileChange({ file, fileList: [file] });
                      return false;
                    }}
                    onRemove={() => {
                      setFileList([]);
                    }}
                  >
                    <Button icon={<UploadOutlined />}>Upload</Button>
                  </Upload>
                </Form.Item>
              </div>
              <div className="col-half">
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, type: "email" }]}
                >
                  <Input
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  label="Gender"
                  name="gender"
                  rules={[{ required: true }]}
                >
                  <Select
                    onChange={(value) => handleInputChange("gender", value)}
                  >
                    <Option value="">Select Gender</Option>
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Account No"
                  name="accountNo"
                  rules={[{ required: true }]}
                >
                  <Input
                    onChange={(e) =>
                      handleInputChange("accountNo", e.target.value)
                    }
                  />
                </Form.Item>
                <Form.Item
                  label="Pan No"
                  name="panNo"
                  rules={[{ required: true }]}
                >
                  <Input
                    onChange={(e) => handleInputChange("panNo", e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="City" name="city" rules={[{ required: true }]}>
                  <Input
                    onChange={(e) => handleInputChange("city", e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  label="State"
                  name="state"
                  rules={[{ required: true }]}
                >
                  <Input
                    onChange={(e) => handleInputChange("state", e.target.value)}
                  />
                </Form.Item>
              </div>
            </div>
            <Button type="primary" htmlType="submit" className="hr-add-button">
              Add
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddEmployeeForm;
