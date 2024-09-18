import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, DatePicker, Select, Button, Upload, message } from "antd";
import { UploadOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import { CgProfile } from "react-icons/cg";
import { CiCirclePlus } from "react-icons/ci";
import { setLeaveField, setFile, resetForm, submitLeaveForm } from '../../../Redux/EmpApplyLeaveSlice'
import '../EmpLeave/EmpApplyLeave.css'

const { Option } = Select;
const { TextArea } = Input;

const LeaveMetrics = () => {
  const state = useSelector((state) => state.leave);
  const dispatch = useDispatch();

  const [showSearchApplyingTo, setShowSearchApplyingTo] = useState(false);
  const [showSearchCC, setShowSearchCC] = useState(false);

  const toggleSearchApplyingTo = () => {
    setShowSearchApplyingTo(!showSearchApplyingTo);
  };

  const toggleSearchCC = () => {
    setShowSearchCC(!showSearchCC);
  };

  const balanceLeaves = 10;

  const handleSubmit = async (values) => {
    console.log("Submitting form with values:", values);
    dispatch(submitLeaveForm(values))
      .unwrap()
      .then(() => {
        alert("Form submitted successfully");
        dispatch(resetForm()); 
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        message.error("Failed to submit form. Please try again later.");
      });
  };

  return (
    <div className="leave-application-form">
      <div className="leave-heading">
        <h4>Applying for Leave</h4>
        <p>Leave Balance: {balanceLeaves}</p>
      </div>
      <Form layout="vertical" onFinish={handleSubmit} initialValues={state}>
        <Form.Item
          label="Leave type"
          name="leave_type"
          rules={[{ required: true, message: "Please select a leave type!" }]}
        >
          <Select
            placeholder="Select type"
            style={{ width: 400 }}
            onChange={(value) =>
              dispatch(setLeaveField({ field: "leave_type", value }))
            }
          >
            <Option value="sick">Sick Leave</Option>
            <Option value="casual">Casual Leave</Option>
          </Select>
        </Form.Item>
        <div className="form-row">
          <Form.Item
            label="From date"
            name="start_date"
            rules={[{ required: true, message: "Please select a start date!" }]}
          >
            <DatePicker
              placeholder="Select date"
              format="DD/MM/YYYY"
              style={{ width: 400 }}
              onChange={(date, dateString) =>
                dispatch(
                  setLeaveField({ field: "start_date", value: dateString })
                )
              }
            />
          </Form.Item>
          <Form.Item
            label="Session"
            name="session1"
            rules={[{ required: true, message: "Please select a session!" }]}
          >
            <Select
              defaultValue="Session 1"
              style={{ width: 350 }}
              onChange={(value) =>
                dispatch(setLeaveField({ field: "session1", value }))
              }
            >
              <Option value="session1">Session 1</Option>
              <Option value="session2">Session 2</Option>
            </Select>
          </Form.Item>
        </div>
        <div className="form-row">
          <Form.Item
            label="To date"
            name="end_date"
            rules={[{ required: true, message: "Please select an end date!" }]}
          >
            <DatePicker
              placeholder="Select date"
              format="DD/MM/YYYY"
              style={{ width: 400 }}
              onChange={(date, dateString) =>
                dispatch(setLeaveField({ field: "end_date", value: dateString }))
              }
            />
          </Form.Item>
          <Form.Item
            label="Session"
            name="session2"
            rules={[{ required: true, message: "Please select a session!" }]}
          >
            <Select
              defaultValue="Session 2"
              style={{ width: 350 }}
              onChange={(value) =>
                dispatch(setLeaveField({ field: "session2", value }))
              }
            >
              <Option value="session1">Session 1</Option>
              <Option value="session2">Session 2</Option>
            </Select>
          </Form.Item>
        </div>
        <div className="form-row">
   
        </div>
        <div className="apply-to-row">
          <CgProfile className="profile-icon" />
          <span>Applying to</span>
          <Button
            type="link"
            icon={showSearchApplyingTo ? <UpOutlined /> : <DownOutlined />}
            onClick={toggleSearchApplyingTo}
          />
        </div>
        {showSearchApplyingTo && (
          <Form.Item
            name="teamLeaderEmail"
            rules={[
              {
                required: true,
                message: "Please enter the person to apply to!",
              },
            ]}
          >
            <Input
              placeholder="Search"
              style={{ width: 300 }}
              onChange={(e) =>
                dispatch(
                  setLeaveField({ field: "teamLeaderEmail", value: e.target.value })
                )
              }
            />
          </Form.Item>
        )}
        <div className="cc-row">
          <CiCirclePlus className="plus-icon" onClick={toggleSearchCC} />
          <span>CC to</span>
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
              <Option value="lahari">A Sasikumar</Option>
              <Option value="Ashwini">Amarayya</Option>
              <Option value="Salman">Amit Chauhan</Option>
            </Select>
          </Form.Item>
        )}
        <Form.Item label="Contact details" name="contact_list">
          <Input
            style={{ width: 500 }}
            onChange={(e) =>
              dispatch(
                setLeaveField({
                  field: "contact_list",
                  value: e.target.value,
                })
              )
            }
          />
        </Form.Item>
        <Form.Item label="Reason" name="reason">
          <TextArea
            rows={4}
            placeholder="Enter a reason"
            style={{ width: 500 }}
            onChange={(e) =>
              dispatch(
                setLeaveField({ field: "reason", value: e.target.value })
              )
            }
          />
        </Form.Item>
        <Form.Item label="Attach File">
          <Upload
            onChange={(info) => {
              if (info.file.status === "done") {
                dispatch(setFile(info.file.originFileObj));
              }
            }}
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button
            style={{ marginLeft: "10px" }}
            onClick={() => dispatch(resetForm())}
          >
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LeaveMetrics;
