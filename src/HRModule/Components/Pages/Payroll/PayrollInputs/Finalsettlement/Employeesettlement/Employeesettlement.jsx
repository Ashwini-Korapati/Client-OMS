import React, { useState } from 'react';
import { Radio, Form, Select } from 'antd';
import { useDispatch } from 'react-redux';
import { updateEmployeeDetails } from '../../../../../../Redux/Slices/SettlementSlice';
import './Employeesettlement.css';
import { CiCirclePlus } from "react-icons/ci";


const { Option } = Select;

function Employeesettlement() {
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setValue(e.target.value);
    dispatch(updateEmployeeDetails({ employeeType: e.target.value }));
  };

  const [showSearchCC, setShowSearchCC] = useState(false);
  const toggleSearchCC = () => {
    setShowSearchCC(!showSearchCC);
  };


  return (
    <div className="form-container1">
      <div className="radio-group">
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>Separated Employee</Radio>
          <Radio value={2}>Search Employee</Radio>
        </Radio.Group>
      </div>
      <div className="form-heading1">
        <h5>Start searching to see specific employee details here</h5>
      </div>

      <Form.Item
        label="Leaving Reason"
        name="leavingreason"
      >
        <Select>
          <Select.Option value="workculture">--Select--</Select.Option>
          <Select.Option value="expired">Separated Employee</Select.Option>
        </Select>
      </Form.Item>

      <div className="selectemployee1">
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
          >
            <Option value="Ashwini">Ashwini</Option>
            <Option value="lahari">Lahari</Option>
            <Option value="Salman">Narasimha</Option>
          </Select>
        </Form.Item>
      )}
    </div>
  );
}

export default Employeesettlement;
