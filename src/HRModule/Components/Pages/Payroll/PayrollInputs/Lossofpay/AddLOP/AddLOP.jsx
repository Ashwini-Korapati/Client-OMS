import React, { useState } from "react";
import "./AddLOP.css";
import { CiCirclePlus } from "react-icons/ci";
import { Form, Input, Select } from "antd";

const AddLOP = ({ onClose }) => {
  const [employee, setEmployee] = useState("");
  const [lopDays, setLopDays] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleSave = () => {
    console.log("Employee:", employee);
    console.log("LOP Days:", lopDays);
    console.log("Remarks:", remarks);
    onClose();
  };

  const [showSearchApplyingTo, setShowSearchApplyingTo] = useState(false);
  const toggleSearchApplyingTo = () => {
    setShowSearchApplyingTo(!showSearchApplyingTo);
  };

  const [showSearchCC, setShowSearchCC] = useState(false);
  const toggleSearchCC = () => {
    setShowSearchCC(!showSearchCC);
  };

  return (
    <div className="add-lop-popup">
      <div className="form">
        <div className="cc-row">
          <CiCirclePlus className="plus-icon" onClick={toggleSearchCC} />
          <span>Select Employee</span>
        </div>
        {showSearchCC && (
          <Form.Item
            name="hrEmail"
            rules={[
              { required: true, message: "Please select the persons to CC!" },
            ]}
          >
            <Select
              mode="multiple"
              allowClear
              style={{ width: 300 }}
              onChange={(value) =>
                dispatch(setLeaveField({ field: "hrEmail", value }))
              }
            >
              <Option value="Ashwini">Ashwini</Option>
              <Option value="lahari">Lahari</Option>
              <Option value="Salman">Narasimha</Option>
            </Select>
          </Form.Item>
        )}

        <div className="form-group">
          <label>LOP Days</label>
          <input
            type="number"
            value={lopDays}
            onChange={(e) => setLopDays(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Remarks</label>
          <textarea
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          ></textarea>
        </div>
        <div className="buttons">
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddLOP;
