// // import React, { useState } from "react";
// // import "./LeaveMetrics.css";
// // import { Button } from "react-bootstrap";

// // const LeaveMetrics = () => {
// //   const [formData, setFormData] = useState({
// //     employeeId: "",
// //     employeeName: "",
// //     designation: "",
// //     leaveType: "",
// //     startDate: "",
// //     endDate: "",
// //     reason: ""
// //   });

// //   const handleChange = (event) => {
// //     const { name, value } = event.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value
// //     });
// //   };

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     const { employeeId, employeeName, designation, leaveType, startDate, endDate, reason } = formData;
// //     if (!employeeId || !employeeName || !designation || !leaveType || !startDate || !endDate || !reason) {
// //       alert('Please fill in all required fields.');
// //       return;
// //     }

// //     // Prepare data to send
// //     const dataToSend = { ...formData };

// //     // Send data to backend
// //     try {
// //       const response = await fetch('YOUR_BACKEND_ENDPOINT', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify(dataToSend)
// //       });
// //       const data = await response.json();
// //       console.log('Success:', data);
// //     } catch (error) {
// //       console.error('Error:', error);
// //     }
// //   };

// //   return (
// //     <div className="containerStyle1">
// //       <div className="cont1">
// //         <form onSubmit={handleSubmit}>
// //           <div className="form-header1">
// //             <h1>Leave Form</h1>
// //           </div>

// //           <div className="row">
// //             <div className="col-half">
// //               <div className="input-box">
// //                 <label>Employee ID</label>
// //                 <input
// //                   type="text"
// //                   name="employeeId"
// //                   value={formData.employeeId}
// //                   onChange={handleChange}
// //                   required
// //                 />
// //               </div>

// //               <div className="input-box">
// //                 <label>Leave Type</label>
// //                 <select
// //                   name="leaveType"
// //                   value={formData.leaveType}
// //                   onChange={handleChange}
// //                   required
// //                 >
// //                   <option value="">Select Leave Type</option>
// //                   <option value="earned">Earned Leave</option>
// //                   <option value="sick">Sick Leave</option>
// //                   <option value="withoutPay">Leave without Pay</option>
// //                   <option value="maternity">Maternity Leave</option>
// //                   <option value="paternity">Paternity Leave</option>
// //                   <option value="compOff">Compensatory Off</option>
// //                   <option value="halfDay">Half Day</option>
// //                   <option value="paidHoliday">Paid Holiday</option>
// //                   <option value="workFromHome">Work From Home</option>
// //                 </select>
// //               </div>

// //               <div className="input-box">
// //                 <label>Start Date</label>
// //                 <input
// //                   type="date"
// //                   name="startDate"
// //                   value={formData.startDate}
// //                   onChange={handleChange}
// //                   required
// //                 />
// //               </div>
// //             </div>

// //             <div className="col-half">
// //               <div className="input-box">
// //                 <label>Employee Name</label>
// //                 <input
// //                   type="text"
// //                   name="employeeName"
// //                   value={formData.employeeName}
// //                   onChange={handleChange}
// //                   required
// //                 />
// //               </div>

// //               <div className="input-box">
// //                 <label>Designation</label>
// //                 <input
// //                   type="text"
// //                   name="designation"
// //                   value={formData.designation}
// //                   onChange={handleChange}
// //                   required
// //                 />
// //               </div>

// //               <div className="input-box">
// //                 <label>End Date</label>
// //                 <input
// //                   type="date"
// //                   name="endDate"
// //                   value={formData.endDate}
// //                   onChange={handleChange}
// //                   required
// //                 />
// //               </div>
// //             </div>
// //           </div>

// //           <div className="input-box">
// //             <label>Reason for Leave</label>
// //             <textarea
// //               name="reason"
// //               value={formData.reason}
// //               onChange={handleChange}
// //               rows="4"
// //               required
// //             ></textarea>
// //           </div>

// //           <Button type="submit" className="hr-add-button1">Submit</Button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LeaveMetrics;

// // import React, { useState } from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import { Form, Input, DatePicker, Select, Button, Upload, message } from "antd";
// // import { UploadOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
// // import { CgProfile } from "react-icons/cg";
// // import { CiCirclePlus } from "react-icons/ci";
// // import {
// //   setLeaveField,
// //   setFile,
// //   resetForm,
// // } from "../../../Redux/Slices/LeaveFormSlice";
// // import "./LeaveMetrics.css";

// // const { Option } = Select;
// // const { TextArea } = Input;

// // const LeaveMetrics = () => {
// //   const state = useSelector((state) => state.leave);
// //   const dispatch = useDispatch();

// //   const [showSearchApplyingTo, setShowSearchApplyingTo] = useState(false);
// //   const [showSearchCC, setShowSearchCC] = useState(false);

// //   const toggleSearchApplyingTo = () => {
// //     setShowSearchApplyingTo(!showSearchApplyingTo);
// //   };

// //   const toggleSearchCC = () => {
// //     setShowSearchCC(!showSearchCC);
// //   };

// //   const balanceLeaves = 10;

// //   const handleSubmit = async (values) => {
// //     try {
// //       console.log("Form values:", values);

// //       const response = await fetch(
// //         "http://localhost:8000/api/vi/employee/submitLeave",
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify(values),
// //         }
// //       );

// //       if (!response.ok) {
// //         throw new Error("Failed to submit form");
// //       }

// //       const data = await response.json();
// //       console.log("Response from backend:", data);
// //       dispatch(resetForm());

// //       message.success("Form submitted successfully");
// //     } catch (error) {
// //       console.error("Error submitting form:", error);
// //       message.error("Failed to submit form. Please try again later.");
// //     }
// //   };

// //   return (
// //     <div className="leave-application-form">
// //       <div className="leave-heading">
// //         <h4>Applying for Leave</h4>
// //         <p>Leave Balance: {balanceLeaves}</p>
// //       </div>
// //       <Form layout="vertical" onFinish={handleSubmit} initialValues={state}>
// //         <Form.Item
// //           label="Leave type"
// //           name="leave_type"
// //           rules={[{ required: true, message: "Please select a leave type!" }]}
// //         >
// //           <Select
// //             placeholder="Select type"
// //             style={{ width: 400 }}
// //             onChange={(value) =>
// //               dispatch(setLeaveField({ field: "leave_type", value }))
// //             }
// //           >
// //             <Option value="sick">Sick Leave</Option>
// //             <Option value="casual">Casual Leave</Option>
// //           </Select>
// //         </Form.Item>
// //         <div className="form-row">
// //           <Form.Item
// //             label="From date"
// //             name="start_date"
// //             rules={[{ required: true, message: "Please select a start date!" }]}
// //           >
// //             <DatePicker
// //               placeholder="Select date"
// //               format="DD/MM/YYYY"
// //               style={{ width: 400 }}
// //               onChange={(date, dateString) =>
// //                 dispatch(
// //                   setLeaveField({ field: "start_date", value: dateString })
// //                 )
// //               }
// //             />
// //           </Form.Item>
// //           <Form.Item
// //             label="Session"
// //             name="session1"
// //             rules={[{ required: true, 
// //               message: "Please select a session!" }]}
// //           >
// //             <Select
// //               defaultValue="Session 1"
// //               style={{ width: 350 }}
// //               onChange={(value) =>
// //                 dispatch(setLeaveField({ field: "session1", value }))
// //               }
// //             >
// //               <Option value="session1">Session 1</Option>
// //               <Option value="session2">Session 2</Option>
// //             </Select>
// //           </Form.Item>
// //         </div>
// //         <div className="form-row">
// //           <Form.Item
// //             label="To date"
// //             name="end_date"
// //             rules={[{ required: true, message: "Please select an end date!" }]}
// //           >
// //             <DatePicker
// //               placeholder="Select date"
// //               format="DD/MM/YYYY"
// //               style={{ width: 400 }}
// //               onChange={(date, dateString) =>
// //                 dispatch(setLeaveField({ field: "end_date", value: dateString }))
// //               }
// //             />
// //           </Form.Item>
// //           <Form.Item
// //             label="Session"
// //             name="session2"
// //             rules={[{ required: true, message: "Please select a session!" }]}
// //           >
// //             <Select
// //               defaultValue="Session 2"
// //               style={{ width: 350 }}
// //               onChange={(value) =>
// //                 dispatch(setLeaveField({ field: "session2", value }))
// //               }
// //             >
// //               <Option value="session1">Session 1</Option>
// //               <Option value="session2">Session 2</Option>
// //             </Select>
// //           </Form.Item>
// //         </div>
// //         <div className="apply-to-row">
// //           <CgProfile className="profile-icon" />
// //           <span>Applying to</span>
// //           <Button
// //             type="link"
// //             icon={showSearchApplyingTo ? <UpOutlined /> : <DownOutlined />}
// //             onClick={toggleSearchApplyingTo}
// //           />
// //         </div>
// //         {showSearchApplyingTo && (
// //           <Form.Item
// //             name="teamLeaderEmail"
// //             rules={[
// //               {
// //                 required: true,
// //                 message: "Please enter the person to apply to!",
// //               },
// //             ]}
// //           >
// //             <Input
// //               placeholder="Search"
// //               style={{ width: 300 }}
// //               onChange={(e) =>
// //                 dispatch(
// //                   setLeaveField({ field: "teamLeaderEmail", value: e.target.value })
// //                 )
// //               }
// //             />
// //           </Form.Item>
// //         )}
// //         <div className="cc-row">
// //           <CiCirclePlus className="plus-icon" onClick={toggleSearchCC} />
// //           <span>CC to</span>
// //         </div>
// //         {showSearchCC && (
// //           <Form.Item
// //             name="hrEmail"
// //             rules={[
// //               { required: true, message: "Please select the persons to CC!" },
// //             ]}
// //           >
// //             <Select
// //               mode="multiple"
// //               allowClear
// //               style={{ width: 300 }}
// //               onChange={(value) =>
// //                 dispatch(setLeaveField({ field: "hrEmail", value }))
// //               }
// //             >
// //               <Option value="lahari">A Sasikumar</Option>
// //               <Option value="Ashwini">Amarayya</Option>
// //               <Option value="Salman">Amit Chauhan</Option>
// //             </Select>
// //           </Form.Item>
// //         )}
// //         <Form.Item label="Contact details" name="contactDetails">
// //           <Input
// //             style={{ width: 500 }}
// //             onChange={(e) =>
// //               dispatch(
// //                 setLeaveField({
// //                   field: "contactDetails",
// //                   value: e.target.value,
// //                 })
// //               )
// //             }
// //           />
// //         </Form.Item>
// //         <Form.Item label="Reason" name="reason">
// //           <TextArea
// //             rows={4}
// //             placeholder="Enter a reason"
// //             style={{ width: 500 }}
// //             onChange={(e) =>
// //               dispatch(
// //                 setLeaveField({ field: "reason", value: e.target.value })
// //               )
// //             }
// //           />
// //         </Form.Item>
// //         <Form.Item label="Attach File">
// //           <Upload
// //             onChange={(info) => {
// //               if (info.file.status === "done") {
// //                 dispatch(setFile(info.file.originFileObj));
// //               }
// //             }}
// //           >
// //             <Button icon={<UploadOutlined />}>Click to Upload</Button>
// //           </Upload>
// //         </Form.Item>
// //         <Form.Item>
// //           <Button type="primary" htmlType="submit">
// //             Submit
// //           </Button>
// //           <Button
// //             style={{ marginLeft: "10px" }}
// //             onClick={() => dispatch(resetForm())}
// //           >
// //             Cancel
// //           </Button>
// //         </Form.Item>
// //       </Form>
// //     </div>
// //   );
// // };

// // export default LeaveMetrics;

// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Form, Input, DatePicker, Select, Button, Upload, message } from "antd";
// import { UploadOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
// import { CgProfile } from "react-icons/cg";
// import { CiCirclePlus } from "react-icons/ci";
// import {
//   setLeaveField,
//   setFile,
//   resetForm,
// } from "../../../Redux/Slices/LeaveFormSlice";
// import "./LeaveMetrics.css";

// const { Option } = Select;
// const { TextArea } = Input;

// const LeaveMetrics = () => {
//   const state = useSelector((state) => state.leave);
//   const dispatch = useDispatch();

//   const [showSearchApplyingTo, setShowSearchApplyingTo] = useState(false);
//   const [showSearchCC, setShowSearchCC] = useState(false);

//   const toggleSearchApplyingTo = () => {
//     setShowSearchApplyingTo(!showSearchApplyingTo);
//   };

//   const toggleSearchCC = () => {
//     setShowSearchCC(!showSearchCC);
//   };

//   const balanceLeaves = 10;

//   const handleSubmit = async (values) => {
//     try {
//       console.log("Form values:", values);

//       const response = await fetch(
//         "http://localhost:8000/api/vi/employee/submitLeave",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(values),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to submit form");
//       }

//       const data = await response.json();
//       console.log("Response from backend:", data);
//       dispatch(resetForm());

//       message.success("Form submitted successfully");
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       message.error("Failed to submit form. Please try again later.");
//     }
//   };

//   return (
//     <div className="leave-application-form">
//       <div className="leave-heading">
//         <h4>Applying for Leave</h4>
//         <p>Leave Balance: {balanceLeaves}</p>
//       </div>
//       <Form layout="vertical" onFinish={handleSubmit} initialValues={state}>
//         <Form.Item
//           label="Leave type"
//           name="leave_type"
//           rules={[{ required: true, message: "Please select a leave type!" }]}
//         >
//           <Select
//             placeholder="Select type"
//             style={{ width: 400 }}
//             onChange={(value) =>
//               dispatch(setLeaveField({ field: "leave_type", value }))
//             }
//           >
//             <Option value="sick">Sick Leave</Option>
//             <Option value="casual">Casual Leave</Option>
//           </Select>
//         </Form.Item>
//         <div className="form-row">
//           <Form.Item
//             label="From date"
//             name="start_date"
//             rules={[{ required: true, message: "Please select a start date!" }]}
//           >
//             <DatePicker
//               placeholder="Select date"
//               format="DD/MM/YYYY"
//               style={{ width: 400 }}
//               onChange={(date, dateString) =>
//                 dispatch(
//                   setLeaveField({ field: "start_date", value: dateString })
//                 )
//               }
//             />
//           </Form.Item>
//           <Form.Item
//             label="Session"
//             name="session1"
//             rules={[{ required: true, message: "Please select a session!" }]}
//           >
//             <Select
//               defaultValue="Session 1"
//               style={{ width: 350 }}
//               onChange={(value) =>
//                 dispatch(setLeaveField({ field: "session1", value }))
//               }
//             >
//               <Option value="session1">Session 1</Option>
//               <Option value="session2">Session 2</Option>
//             </Select>
//           </Form.Item>
//         </div>
//         <div className="form-row">
//           <Form.Item
//             label="To date"
//             name="end_date"
//             rules={[{ required: true, message: "Please select an end date!" }]}
//           >
//             <DatePicker
//               placeholder="Select date"
//               format="DD/MM/YYYY"
//               style={{ width: 400 }}
//               onChange={(date, dateString) =>
//                 dispatch(setLeaveField({ field: "end_date", value: dateString }))
//               }
//             />
//           </Form.Item>
//           <Form.Item
//             label="Session"
//             name="session2"
//             rules={[{ required: true, message: "Please select a session!" }]}
//           >
//             <Select
//               defaultValue="Session 2"
//               style={{ width: 350 }}
//               onChange={(value) =>
//                 dispatch(setLeaveField({ field: "session2", value }))
//               }
//             >
//               <Option value="session1">Session 1</Option>
//               <Option value="session2">Session 2</Option>
//             </Select>
//           </Form.Item>
//         </div>
//         <div className="form-row">
//           <Form.Item
//             label="Designation"
//             name="designation"
//             rules={[{ required: true, message: "Please enter your designation!" }]}
//           >
//             <Input
//               placeholder="Enter designation"
//               style={{ width: 400 }}
//               onChange={(e) =>
//                 dispatch(setLeaveField({ field: "designation", value: e.target.value }))
//               }
//             />
//           </Form.Item>
//           <Form.Item
//             label="Employee ID"
//             name="emp_id"
//             rules={[{ required: true, message: "Please enter your employee ID!" }]}
//           >
//             <Input
//               placeholder="Enter employee ID"
//               style={{ width: 350 }}
//               onChange={(e) =>
//                 dispatch(setLeaveField({ field: "emp_id", value: e.target.value }))
//               }
//             />
//           </Form.Item>
//           <Form.Item
//             label="First Name"
//             name="firstname"
//             rules={[{ required: true, message: "Please enter your first name!" }]}
//           >
//             <Input
//               placeholder="Enter your first name"
//               style={{ width: 350 }}
//               onChange={(e) =>
//                 dispatch(setLeaveField({ field: "firstname", value: e.target.value }))
//               }
//             />
//           </Form.Item>
//         </div>
//         <div className="apply-to-row">
//           <CgProfile className="profile-icon" />
//           <span>Applying to</span>
//           <Button
//             type="link"
//             icon={showSearchApplyingTo ? <UpOutlined /> : <DownOutlined />}
//             onClick={toggleSearchApplyingTo}
//           />
//         </div>
//         {showSearchApplyingTo && (
//           <Form.Item
//             name="teamLeaderEmail"
//             rules={[
//               {
//                 required: true,
//                 message: "Please enter the person to apply to!",
//               },
//             ]}
//           >
//             <Input
//               placeholder="Search"
//               style={{ width: 300 }}
//               onChange={(e) =>
//                 dispatch(
//                   setLeaveField({ field: "teamLeaderEmail", value: e.target.value })
//                 )
//               }
//             />
//           </Form.Item>
//         )}
//         <div className="cc-row">
//           <CiCirclePlus className="plus-icon" onClick={toggleSearchCC} />
//           <span>CC to</span>
//         </div>
//         {showSearchCC && (
//           <Form.Item
//             name="hrEmail"
//             rules={[
//               { required: true, message: "Please select the persons to CC!" },
//             ]}
//           >
//             <Select
//               mode="multiple"
//               allowClear
//               style={{ width: 300 }}
//               onChange={(value) =>
//                 dispatch(setLeaveField({ field: "hrEmail", value }))
//               }
//             >
//               <Option value="lahari">A Sasikumar</Option>
//               <Option value="Ashwini">Amarayya</Option>
//               <Option value="Salman">Amit Chauhan</Option>
//             </Select>
//           </Form.Item>
//         )}
//         <Form.Item label="Contact details" name="contactDetails">
//           <Input
//             style={{ width: 500 }}
//             onChange={(e) =>
//               dispatch(
//                 setLeaveField({
//                   field: "contactDetails",
//                   value: e.target.value,
//                 })
//               )
//             }
//           />
//         </Form.Item>
//         <Form.Item label="Reason" name="reason">
//           <TextArea
//             rows={4}
//             placeholder="Enter a reason"
//             style={{ width: 500 }}
//             onChange={(e) =>
//               dispatch(
//                 setLeaveField({ field: "reason", value: e.target.value })
//               )
//             }
//           />
//         </Form.Item>
//         <Form.Item label="Attach File">
//           <Upload
//             onChange={(info) => {
//               if (info.file.status === "done") {
//                 dispatch(setFile(info.file.originFileObj));
//               }
//             }}
//           >
//             <Button icon={<UploadOutlined />}>Click to Upload</Button>
//           </Upload>
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" htmlType="submit">
//             Submit
//           </Button>
//           <Button
//             style={{ marginLeft: "10px" }}
//             onClick={() => dispatch(resetForm())}
//           >
//             Cancel
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default LeaveMetrics;
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, DatePicker, Select, Button, Upload, message } from "antd";
import { UploadOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import { CgProfile } from "react-icons/cg";
import { CiCirclePlus } from "react-icons/ci";
import { setLeaveField, setFile, resetForm, submitLeaveForm } from "../../../Redux/Slices/LeaveFormSlice";
import "./LeaveMetrics.css";

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
