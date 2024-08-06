// import React, { useState } from 'react';
// import { Layout, Input, Button, Card, Row, Col, Typography, Space, Select, Collapse } from 'antd';
// import { DownOutlined, RightOutlined, EditOutlined } from '@ant-design/icons';
// import { useNavigate } from 'react-router-dom';
// import './Salary.css';
// import EditTable from './EditTable';
// import components from './componentsData';

// const { Header, Content } = Layout;
// const { Text } = Typography;
// const { Option } = Select;
// const { Panel } = Collapse;

// const Salary = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isTableVisible, setIsTableVisible] = useState(false);
//   const [expandedKeys, setExpandedKeys] = useState([]);
//   const navigate = useNavigate();

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };

//   const handleIconClick = (name) => {
//     console.log(`Icon clicked for ${name}`);
//     setIsTableVisible(true);
//   };

//   const handleTableClose = () => {
//     setIsTableVisible(false);
//   };

//   const filterComponents = (components) => {
//     return components.reduce((acc, component) => {
//       const children = component.children ? filterComponents(component.children) : [];
//       const isMatch = component.name.toLowerCase().includes(searchTerm);

//       if (isMatch || children.length > 0) {
//         acc.push({
//           ...component,
//           children
//         });
//       }

//       return acc;
//     }, []);
//   };

//   const filteredComponents = filterComponents(components);

//   const handleExpandAll = () => {
//     if (expandedKeys.length === 0) {
//       const allKeys = filteredComponents.map(component => component.name);
//       setExpandedKeys(allKeys);
//     } else {
//       setExpandedKeys([]);
//     }
//   };

//   const renderChildren = (children) => (
//     children.map(child => (
//       <div key={child.name} className="panel-header common-child">
//         <span>{child.name}</span>
//         {child.editable && (
//           <EditOutlined
//             style={{ marginLeft: 8, color: 'grey' }}
//             onClick={() => handleIconClick(child.name)}
//           />
//         )}
//         <span className="salary-amount">{child.amount}</span>
//       </div>
//     ))
//   );

//   return (
//     <Layout className="salary-dashboard">
//       <Header className="salary-header">
//         <Row justify="space-between" align="middle">
//           <Col>
//             <Space>
//               <Text strong>Employee Type:</Text>
//               <Select defaultValue="SELECT" style={{ width: 140 }}>
//                 <Option value="DEMO">DEMO</Option>
//                 <Option value="Employee1">Employee1</Option>
//                 <Option value="Employee2">Employee2</Option>
//               </Select>
//             </Space>
//           </Col>
//           <Col>
//             <Space>
//               <Text strong>Payroll Processed On:</Text>
//               <Input value="" readOnly style={{ width: 120 }} />
//             </Space>
//           </Col>
//         </Row>
//       </Header>
//       <Content className="salary-content">
//         <Row justify="end" style={{ marginBottom: 20 }}>
//           <Space>
//             <Button type="primary">Preview Payslip</Button>
//             <Button type="primary" onClick={() => navigate('/hr-dashboard/updatesalary')}>Update Salary</Button>
//             <Button type="primary">Process Payroll</Button>
//           </Space>
//         </Row>
//         <Row gutter={16}>
//           <Col span={16}>
//             <Card title="Components" className="salary-components-card">
//               <Input.Search
//                 placeholder="Search"
//                 style={{ marginBottom: 10 }}
//                 onChange={handleSearch}
//                 enterButton
//               />
//               <Button type="link" style={{ marginBottom: 10 }} onClick={handleExpandAll}>
//                 {expandedKeys.length === 0 ? 'Expand All' : 'Collapse All'}
//               </Button>
//               <Collapse
//                 activeKey={expandedKeys}
//                 onChange={keys => setExpandedKeys(keys)}
//                 expandIcon={({ isActive }) => isActive ? <DownOutlined /> : <RightOutlined />}
//               >
//                 {filteredComponents.map(component => (
//                   <Panel
//                     header={(
//                       <div className="panel-header">
//                         <span>{component.name}</span>
//                         <span className="salary-amount">{component.amount}</span>
//                       </div>
//                     )}
//                     key={component.name}
//                   >
//                     {component.children.length > 0 ? (
//                       component.name === 'EMPLOYEE WORKDAYS' ? (
//                         <div className="employee-workdays-container">
//                           {renderChildren(component.children)}
//                         </div>
//                       ) : (
//                         (['SETTLEMENT RELATED ITEMS', 'PROJECTION ITEMS', 'MISCELLANEOUS ITEMS', 'REIMBURSEMENT ITEMS', 'LEAVE ENCASHMENT RELATED ITEMS', 'GRATUITY ITEMS', 'PF ARREAR RELATED ITEMS', 'STATUTORY ITEMS', 'EXCLUDE WEEKOFFS AND HOLIDAYS', 'ANNUAL ITEMS'].includes(component.name)) ? (
//                           <div className="other-items-container">
//                             {renderChildren(component.children)}
//                           </div>
//                         ) : (
//                           <Collapse
//                             expandIcon={({ isActive }) => isActive ? <DownOutlined /> : <RightOutlined />}
//                           >
//                             {component.children.map(child => (
//                               <Panel
//                                 header={(
//                                   <div className="panel-header common-child">
//                                     <span>{child.name}</span>
//                                     <span className="salary-amount">{child.amount}</span>
//                                   </div>
//                                 )}
//                                 key={child.name}
//                               >
//                                 {child.children && child.children.length > 0 ? (
//                                   <div className="employee-workdays-container">
//                                     {renderChildren(child.children)}
//                                   </div>
//                                 ) : (
//                                   <p>{child.name}</p>
//                                 )}
//                               </Panel>
//                             ))}
//                           </Collapse>
//                         )
//                       )
//                     ) : (
//                       <p>{component.name}</p>
//                     )}
//                   </Panel>
//                 ))}
//               </Collapse>
//             </Card>
//           </Col>
//           <Col span={8}>
//             <Card title="Details" className="salary-details-card">
//               <p><Text strong>Join Date:</Text></p>
//               <p><Text strong>Date Of Birth:</Text></p>
//               <p><Text strong>Location:</Text></p>
//             </Card>
//           </Col>
//         </Row>
//       </Content>
//       <EditTable visible={isTableVisible} onClose={handleTableClose} />
//     </Layout>
//   );
// };

// export default Salary;


// // import React, { useEffect, useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { Layout, Input, Button, Card, Row, Col, Typography, Space, Select, Collapse, DatePicker, message } from 'antd';
// // import { DownOutlined, RightOutlined, EditOutlined } from '@ant-design/icons';
// // import { useNavigate } from 'react-router-dom';
// // import './Salary.css';
// // import EditTable from './EditTable';
// // import {
// //   setSearchTerm,
// //   setTableVisibility,
// //   setExpandedKeys,
// //   setPayrollDate,
// //   fetchEmployees,
// //   fetchEmployeeDetails,
// //   updateSalary,
// // } from '../../../../../Redux/Slices/SalarySlice';

// // const { Header, Content } = Layout;
// // const { Text } = Typography;
// // const { Option } = Select;
// // const { Panel } = Collapse;

// // const Salary = () => {
// //   const dispatch = useDispatch();
// //     // const employees = useSelector(state => state.employees.employees.employees);

// //   const navigate = useNavigate();

// //   // const {
// //   //   // employees = [], // Ensure this defaults to an empty array
// //   //   employeeDetails,
// //   //   employees,
// //   //   searchTerm,
// //   //   isTableVisible,
// //   //   expandedKeys,
// //   //   payrollDate,
// //   //   components = [], // Ensure this defaults to an empty array
// //   //   status,
// //   // } = useSelector(state => state.employees.employees.salary);


  
// //   const [selectedEmployee, setSelectedEmployee] = useState(null);
// //   const [editableComponents, setEditableComponents] = useState([]);

// //   useEffect(() => {
// //     dispatch(fetchEmployees());
// //   }, [dispatch]);

// //   const handleSearch = (e) => {
// //     dispatch(setSearchTerm(e.target.value.toLowerCase()));
// //   };

// //   const handleIconClick = (name) => {
// //     console.log(`Icon clicked for ${name}`);
// //     dispatch(setTableVisibility(true));
// //   };

// //   const handleTableClose = () => {
// //     dispatch(setTableVisibility(false));
// //   };

// //   const handleEmployeeChange = (employeeId) => {
// //     setSelectedEmployee(employeeId);
// //     dispatch(fetchEmployeeDetails(employeeId));
// //   };

// //   const handleExpandAll = () => {
// //     if (expandedKeys.length === 0) {
// //       const allKeys = components.map(component => component.name);
// //       dispatch(setExpandedKeys(allKeys));
// //     } else {
// //       dispatch(setExpandedKeys([]));
// //     }
// //   };

// //   const handleUpdateSalary = () => {
// //     const salaryData = {
// //       employeeId: selectedEmployee,
// //       components: editableComponents,
// //     };
// //     dispatch(updateSalary(salaryData))
// //       .then(() => message.success('Salary updated successfully'))
// //       .catch((error) => message.error(`Failed to update salary: ${error.message}`));
// //   };

// //   const handleAddSalary = () => {
// //     const salaryData = {
// //       employeeId: selectedEmployee,
// //       components: editableComponents,
// //     };
// //     dispatch(updateSalary(salaryData))
// //       .then(() => message.success('Salary added successfully'))
// //       .catch((error) => message.error(`Failed to add salary: ${error.message}`));
// //   };

// //   const renderChildren = (children) => (
// //     children.map(child => (
// //       <div key={child.name} className="panel-header common-child">
// //         <span>{child.name}</span>
// //         {child.editable && (
// //           <EditOutlined
// //             style={{ marginLeft: 8, color: 'grey' }}
// //             onClick={() => handleIconClick(child.name)}
// //           />
// //         )}
// //         <span className="salary-amount">{child.amount}</span>
// //       </div>
// //     ))
// //   );

// //   useEffect(() => {
// //     if (employeeDetails) {
// //       setEditableComponents(employeeDetails.components.filter(component => component.editable));
// //     }
// //   }, [employeeDetails]);

// //   return (
// //     <Layout className="salary-dashboard">
// //       <Header className="salary-header">
// //         <Row justify="space-between" align="middle">
// //           <Col>
// //             <Space>
// //               <Text strong>Employee Type:</Text>
// //               <Select
// //                 value={selectedEmployee}
// //                 style={{ width: 140 }}
// //                 onChange={handleEmployeeChange}
// //               >
// //                 {employees.map(employee => (
// //                   <Option key={employee.id} value={employee.id}>{employee.id}</Option>
// //                 ))}
// //               </Select>
// //             </Space>
// //           </Col>
// //           <Col>
// //             <Space>
// //               <Text strong>Payroll Processed On:</Text>
// //               <DatePicker
// //                 value={payrollDate}
// //                 onChange={(date, dateString) => dispatch(setPayrollDate(dateString))}
// //               />
// //             </Space>
// //           </Col>
// //         </Row>
// //       </Header>
// //       <Content className="salary-content">
// //         <Row justify="end" style={{ marginBottom: 20 }}>
// //           <Space>
// //             <Button type="primary" disabled={!employeeDetails}>Preview Payslip</Button>
// //             <Button
// //               type="primary"
// //               disabled={!employeeDetails || employeeDetails.salary.length === 0}
// //               onClick={handleUpdateSalary}
// //             >
// //               Update Salary
// //             </Button>
// //             <Button
// //               type="primary"
// //               disabled={!employeeDetails || employeeDetails.salary.length > 0}
// //               onClick={handleAddSalary}
// //             >
// //               Add Salary
// //             </Button>
// //             <Button type="primary" disabled={!employeeDetails}>Process Payroll</Button>
// //           </Space>
// //         </Row>
// //         <Row gutter={16}>
// //           <Col span={16}>
// //             <Card title="Components" className="salary-components-card">
// //               <Input.Search
// //                 placeholder="Search"
// //                 style={{ marginBottom: 10 }}
// //                 onChange={handleSearch}
// //                 enterButton
// //               />
// //               <Button type="link" style={{ marginBottom: 10 }} onClick={handleExpandAll}>
// //                 {expandedKeys.length === 0 ? 'Expand All' : 'Collapse All'}
// //               </Button>
// //               <Collapse
// //                 activeKey={expandedKeys}
// //                 onChange={keys => dispatch(setExpandedKeys(keys))}
// //                 expandIcon={({ isActive }) => isActive ? <DownOutlined /> : <RightOutlined />}
// //               >
// //                 {components.map(component => (
// //                   <Panel
// //                     header={(
// //                       <div className="panel-header">
// //                         <span>{component.name}</span>
// //                         <span className="salary-amount">{component.amount}</span>
// //                       </div>
// //                     )}
// //                     key={component.name}
// //                   >
// //                     {component.children && component.children.length > 0 ? (
// //                       component.name === 'EMPLOYEE WORKDAYS' ? (
// //                         <div className="employee-workdays-container">
// //                           {renderChildren(component.children)}
// //                         </div>
// //                       ) : (
// //                         (['SETTLEMENT RELATED ITEMS', 'PROJECTION ITEMS', 'MISCELLANEOUS ITEMS', 'REIMBURSEMENT ITEMS', 'LEAVE ENCASHMENT RELATED ITEMS', 'GRATUITY ITEMS', 'PF ARREAR RELATED ITEMS', 'STATUTORY ITEMS', 'EXCLUDE WEEKOFFS AND HOLIDAYS', 'ANNUAL ITEMS'].includes(component.name)) ? (
// //                           <div className="other-items-container">
// //                             {renderChildren(component.children)}
// //                           </div>
// //                         ) : (
// //                           <Collapse
// //                             expandIcon={({ isActive }) => isActive ? <DownOutlined /> : <RightOutlined />}
// //                           >
// //                             {component.children.map(child => (
// //                               <Panel
// //                                 header={(
// //                                   <div className="panel-header common-child">
// //                                     <span>{child.name}</span>
// //                                     <span className="salary-amount">{child.amount}</span>
// //                                   </div>
// //                                 )}
// //                                 key={child.name}
// //                               >
// //                                 {child.children && child.children.length > 0 ? (
// //                                   <div className="employee-workdays-container">
// //                                     {renderChildren(child.children)}
// //                                   </div>
// //                                 ) : (
// //                                   <p>{child.name}</p>
// //                                 )}
// //                               </Panel>
// //                             ))}
// //                           </Collapse>
// //                         )
// //                       )
// //                     ) : (
// //                       <p>{component.name}</p>
// //                     )}
// //                   </Panel>
// //                 ))}
// //               </Collapse>
// //             </Card>
// //           </Col>
// //           <Col span={8}>
// //             <Card title="Details" className="salary-details-card">
// //               <p><Text strong>Join Date:</Text> {employeeDetails ? employeeDetails.joinDate : '-'}</p>
// //               <p><Text strong>Date Of Birth:</Text> {employeeDetails ? employeeDetails.dob : '-'}</p>
// //               <p><Text strong>Location:</Text> {employeeDetails ? employeeDetails.location : '-'}</p>
// //             </Card>
// //           </Col>
// //         </Row>
// //       </Content>
// //       <EditTable visible={isTableVisible} onClose={handleTableClose} employeeId={selectedEmployee} />
// //     </Layout>
// //   );
// // };

// // export default Salary;




// // import React, { useEffect, useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { Layout, Input, Button, Card, Row, Col, Typography, Space, Select, Collapse, DatePicker, message } from 'antd';
// // import { DownOutlined, RightOutlined, EditOutlined } from '@ant-design/icons';
// // import { useNavigate } from 'react-router-dom';
// // import moment from 'moment';
// // import './Salary.css';
// // import EditTable from './EditTable';
// // import {
// //   setSearchTerm,
// //   setTableVisibility,
// //   setExpandedKeys,
// //   setPayrollDate,
// //   fetchEmployees,
// //   fetchEmployeeDetails,
// //   updateSalary,
// // } from '../../../../../Redux/Slices/SalarySlice';

// // const { Header, Content } = Layout;
// // const { Text } = Typography;
// // const { Option } = Select;
// // const { Panel } = Collapse;

// // const Salary = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   // Use optional chaining and provide default empty objects/arrays to prevent undefined errors
// //   const salaryState = useSelector(state => state.employees?.employees?.salary || {});
// //   const {
// //     employeeDetails = {},
// //     employees = [],
// //     searchTerm = '',
// //     isTableVisible = false,
// //     expandedKeys = [],
// //     payrollDate = '',
// //     components = [],
// //     status = 'idle',
// //   } = salaryState;

// //   const [selectedEmployee, setSelectedEmployee] = useState(null);
// //   const [editableComponents, setEditableComponents] = useState([]);

// //   useEffect(() => {
// //     dispatch(fetchEmployees());
// //   }, [dispatch]);

// //   const handleSearch = (e) => {
// //     dispatch(setSearchTerm(e.target.value.toLowerCase()));
// //   };

// //   const handleIconClick = (name) => {
// //     console.log(`Icon clicked for ${name}`);
// //     dispatch(setTableVisibility(true));
// //   };

// //   const handleTableClose = () => {
// //     dispatch(setTableVisibility(false));
// //   };

// //   const handleEmployeeChange = (employeeId) => {
// //     setSelectedEmployee(employeeId);
// //     dispatch(fetchEmployeeDetails(employeeId));
// //   };

// //   const handleExpandAll = () => {
// //     if (expandedKeys.length === 0) {
// //       const allKeys = components.map(component => component.name);
// //       dispatch(setExpandedKeys(allKeys));
// //     } else {
// //       dispatch(setExpandedKeys([]));
// //     }
// //   };

// //   const handleUpdateSalary = () => {
// //     const salaryData = {
// //       employeeId: selectedEmployee,
// //       components: editableComponents,
// //     };
// //     dispatch(updateSalary(salaryData))
// //       .then(() => message.success('Salary updated successfully'))
// //       .catch((error) => message.error(`Failed to update salary: ${error.message}`));
// //   };

// //   const handleAddSalary = () => {
// //     const salaryData = {
// //       employeeId: selectedEmployee,
// //       components: editableComponents,
// //     };
// //     dispatch(updateSalary(salaryData))
// //       .then(() => message.success('Salary added successfully'))
// //       .catch((error) => message.error(`Failed to add salary: ${error.message}`));
// //   };

// //   const renderChildren = (children = []) => (
// //     children.map(child => (
// //       <div key={child.name} className="panel-header common-child">
// //         <span>{child.name}</span>
// //         {child.editable && (
// //           <EditOutlined
// //             style={{ marginLeft: 8, color: 'grey' }}
// //             onClick={() => handleIconClick(child.name)}
// //           />
// //         )}
// //         <span className="salary-amount">{child.amount}</span>
// //       </div>
// //     ))
// //   );

// //   useEffect(() => {
// //     if (employeeDetails?.components) {
// //       setEditableComponents(employeeDetails.components.filter(component => component.editable));
// //     }
// //   }, [employeeDetails]);

// //   return (
// //     <Layout className="salary-dashboard">
// //       <Header className="salary-header">
// //         <Row justify="space-between" align="middle">
// //           <Col>
// //             <Space>
// //               <Text strong>Employee Type:</Text>
// //               <Select
// //                 value={selectedEmployee || undefined}
// //                 style={{ width: 140 }}
// //                 onChange={handleEmployeeChange}
// //               >
// //                 {employees.map(employee => (
// //                   <Option key={employee.id} value={employee.id}>{employee.id}</Option>
// //                 ))}
// //               </Select>
// //             </Space>
// //           </Col>
// //           <Col>
// //             <Space>
// //               <Text strong>Payroll Processed On:</Text>
// //               <DatePicker
// //                 value={payrollDate ? moment(payrollDate) : null}
// //                 onChange={(date, dateString) => dispatch(setPayrollDate(dateString))}
// //               />
// //             </Space>
// //           </Col>
// //         </Row>
// //       </Header>
// //       <Content className="salary-content">
// //         <Row justify="end" style={{ marginBottom: 20 }}>
// //           <Space>
// //             <Button type="primary" disabled={!employeeDetails}>Preview Payslip</Button>
// //             <Button
// //               type="primary"
// //               disabled={!employeeDetails?.salary || employeeDetails.salary.length === 0}
// //               onClick={handleUpdateSalary}
// //             >
// //               Update Salary
// //             </Button>
// //             <Button
// //               type="primary"
// //               disabled={!employeeDetails || (employeeDetails.salary && employeeDetails.salary.length > 0)}
// //               onClick={handleAddSalary}
// //             >
// //               Add Salary
// //             </Button>
// //             <Button type="primary" disabled={!employeeDetails}>Process Payroll</Button>
// //           </Space>
// //         </Row>
// //         <Row gutter={16}>
// //           <Col span={16}>
// //             <Card title="Components" className="salary-components-card">
// //               <Input.Search
// //                 placeholder="Search"
// //                 style={{ marginBottom: 10 }}
// //                 onChange={handleSearch}
// //                 enterButton
// //               />
// //               <Button type="link" style={{ marginBottom: 10 }} onClick={handleExpandAll}>
// //                 {expandedKeys.length === 0 ? 'Expand All' : 'Collapse All'}
// //               </Button>
// //               <Collapse
// //                 activeKey={expandedKeys}
// //                 onChange={keys => dispatch(setExpandedKeys(keys))}
// //                 expandIcon={({ isActive }) => isActive ? <DownOutlined /> : <RightOutlined />}
// //               >
// //                 {components.map(component => (
// //                   <Panel
// //                     header={(
// //                       <div className="panel-header">
// //                         <span>{component.name}</span>
// //                         <span className="salary-amount">{component.amount}</span>
// //                       </div>
// //                     )}
// //                     key={component.name}
// //                   >
// //                     {component.children && component.children.length > 0 ? (
// //                       component.name === 'EMPLOYEE WORKDAYS' ? (
// //                         <div className="employee-workdays-container">
// //                           {renderChildren(component.children)}
// //                         </div>
// //                       ) : (
// //                         (['SETTLEMENT RELATED ITEMS', 'PROJECTION ITEMS', 'MISCELLANEOUS ITEMS', 'REIMBURSEMENT ITEMS', 'LEAVE ENCASHMENT RELATED ITEMS', 'GRATUITY ITEMS', 'PF ARREAR RELATED ITEMS', 'STATUTORY ITEMS', 'EXCLUDE WEEKOFFS AND HOLIDAYS', 'ANNUAL ITEMS'].includes(component.name)) ? (
// //                           <div className="other-items-container">
// //                             {renderChildren(component.children)}
// //                           </div>
// //                         ) : (
// //                           <Collapse
// //                             expandIcon={({ isActive }) => isActive ? <DownOutlined /> : <RightOutlined />}
// //                           >
// //                             {component.children.map(child => (
// //                               <Panel
// //                                 header={(
// //                                   <div className="panel-header common-child">
// //                                     <span>{child.name}</span>
// //                                     <span className="salary-amount">{child.amount}</span>
// //                                   </div>
// //                                 )}
// //                                 key={child.name}
// //                               >
// //                                 {child.children && child.children.length > 0 ? (
// //                                   <div className="employee-workdays-container">
// //                                     {renderChildren(child.children)}
// //                                   </div>
// //                                 ) : (
// //                                   <p>{child.name}</p>
// //                                 )}
// //                               </Panel>
// //                             ))}
// //                           </Collapse>
// //                         )
// //                       )
// //                     ) : (
// //                       <p>{component.name}</p>
// //                     )}
// //                   </Panel>
// //                 ))}
// //               </Collapse>
// //             </Card>
// //           </Col>
// //           <Col span={8}>
// //             <Card title="Details" className="salary-details-card">
// //               <p><Text strong>Join Date:</Text> {employeeDetails.joinDate || '-'}</p>
// //               <p><Text strong>Date Of Birth:</Text> {employeeDetails.dob || '-'}</p>
// //               <p><Text strong>Location:</Text> {employeeDetails.location || '-'}</p>
// //             </Card>
// //           </Col>
// //         </Row>
// //       </Content>
// //       <EditTable visible={isTableVisible} onClose={handleTableClose} employeeId={selectedEmployee} />
// //     </Layout>
// //   );
// // };

// // export default Salary;


import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Input, Button, Card, Row, Col, Typography, Space, Collapse, Spin, Modal } from 'antd';
import { DownOutlined, RightOutlined, EditOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './Salary.css';
import EditTable from './EditTable';
import components from './componentsData';
import { setSearchTerm, setIsTableVisible, setExpandedKeys, toggleExpandAll, setSelectedEmployee, fetchEmployeeDetails, fetchEmployees, selectFilteredEmployees } from './../../../../../Redux/Slices/SalarySlice';
import payslip from '../../../../../Assets/payslip.jpg'
 
const { Header, Content } = Layout;
const { Text } = Typography;
const { Panel } = Collapse;
 
const Salary = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const searchTerm = useSelector((state) => state.salary.searchTerm);
  const isTableVisible = useSelector((state) => state.salary.isTableVisible);
  const expandedKeys = useSelector((state) => state.salary.expandedKeys);
  const selectedEmployee = useSelector((state) => state.salary.selectedEmployee);
  const employeeDetails = useSelector((state) => state.salary.employeeDetails);
  const employeeStatus = useSelector((state) => state.salary.status);
  const filteredEmployees = useSelector(selectFilteredEmployees);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  useEffect(() => {
    dispatch(fetchEmployees());
    if (selectedEmployee) {
      dispatch(fetchEmployeeDetails(selectedEmployee));
    }
  }, [selectedEmployee, dispatch]);
 
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    dispatch(setSearchTerm(searchTerm));
    dispatch(fetchEmployeeDetails(searchTerm));
  };
 
  const handleIconClick = (name) => {
    console.log(`Icon clicked for ${name}`);
    dispatch(setIsTableVisible(true));
  };
 
  const handleTableClose = () => {
    dispatch(setIsTableVisible(false));
  };
 
  const handleEmployeeChange = (value) => {
    dispatch(setSelectedEmployee(value));
  };
 
  const filterComponents = (components) => {
    return components.reduce((acc, component) => {
      const children = component.children ? filterComponents(component.children) : [];
      const isMatch = component.name.toLowerCase().includes(searchTerm.toLowerCase());
 
      if (isMatch || children.length > 0) {
        acc.push({
          ...component,
          children,
        });
      }
 
      return acc;
    }, []);
  };
 
  const filteredComponents = filterComponents(components);
 
  const handleExpandAll = () => {
    if (expandedKeys.length === 0) {
      const allKeys = filteredComponents.map((component) => component.name);
      dispatch(toggleExpandAll(allKeys));
    } else {
      dispatch(toggleExpandAll([]));
    }
  };
 
  const renderChildren = (children) =>
    children.map((child) => (
      <div key={child.name} className="panel-header common-child">
        <span>{child.name}</span>
        {child.editable && (
          <EditOutlined style={{ marginLeft: 8, color: 'grey' }} onClick={() => handleIconClick(child.name)} />
        )}
        <span className="salary-amount">{child.amount}</span>
      </div>
    ));
 
  const showModal = () => {
    setIsModalVisible(true);
  };
 
  const handleOk = () => {
    setIsModalVisible(false);
  };
 
  const handleCancel = () => {
    setIsModalVisible(false);
  };
 
  return (
    <Layout className="salary-dashboard">
      <Header className="salary-header">
        <Row justify="space-between" align="middle">
          <Col>
            <Space>
              <Text strong>Search Employee:</Text>
              <Input.Search
                placeholder="Search employees"
                style={{ width: 200 }}
                onChange={handleSearch}
                enterButton
              />
            </Space>
          </Col>
          <Col>
            <Space>
              <Text strong>Payroll Processed On:</Text>
              <Input value="" readOnly style={{ width: 120 }} />
            </Space>
          </Col>
        </Row>
      </Header>
      <Content className="salary-content">
        <Row justify="end" style={{ marginBottom: 20 }}>
          <Space>
            <Button type="primary" onClick={showModal}>Preview Payslip</Button>
            <Button type="primary" onClick={() => navigate('/hr-dashboard/updatesalary')}>
              Update Salary
            </Button>
            <Button type="primary">Process Payroll</Button>
          </Space>
        </Row>
        <Row gutter={16}>
          <Col span={16}>
            <Card title="Components" className="salary-components-card">
              <Button type="link" style={{ marginBottom: 10 }} onClick={handleExpandAll}>
                {expandedKeys.length === 0 ? 'Expand All' : 'Collapse All'}
              </Button>
              <Collapse
                activeKey={expandedKeys}
                onChange={(keys) => dispatch(setExpandedKeys(keys))}
                expandIcon={({ isActive }) => (isActive ? <DownOutlined /> : <RightOutlined />)}
              >
                {filteredComponents.map((component) => (
                  <Panel
                    header={
                      <div className="panel-header">
                        <span>{component.name}</span>
                        <span className="salary-amount">{component.amount}</span>
                      </div>
                    }
                    key={component.name}
                  >
                    {component.children.length > 0 ? (
                      component.name === 'EMPLOYEE WORKDAYS' ? (
                        <div className="employee-workdays-container">{renderChildren(component.children)}</div>
                      ) : (
                        ['SETTLEMENT RELATED ITEMS', 'PROJECTION ITEMS', 'MISCELLANEOUS ITEMS', 'REIMBURSEMENT ITEMS', 'LEAVE ENCASHMENT RELATED ITEMS', 'GRATUITY ITEMS', 'PF ARREAR RELATED ITEMS', 'STATUTORY ITEMS', 'EXCLUDE WEEKOFFS AND HOLIDAYS', 'ANNUAL ITEMS'].includes(component.name) ? (
                          <div className="other-items-container">{renderChildren(component.children)}</div>
                        ) : (
                          <Collapse expandIcon={({ isActive }) => (isActive ? <DownOutlined /> : <RightOutlined />)}>
                            {component.children.map((child) => (
                              <Panel
                                header={
                                  <div className="panel-header common-child">
                                    <span>{child.name}</span>
                                    <span className="salary-amount">{child.amount}</span>
                                  </div>
                                }
                                key={child.name}
                              >
                                {child.children && child.children.length > 0 ? (
                                  <div className="employee-workdays-container">{renderChildren(child.children)}</div>
                                ) : (
                                  <p>{child.name}</p>
                                )}
                              </Panel>
                            ))}
                          </Collapse>
                        )
                      )
                    ) : (
                      <p>{component.name}</p>
                    )}
                  </Panel>
                ))}
              </Collapse>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Details" className="salary-details-card">
              {employeeStatus === 'loading' ? (
                <Spin />
              ) : (
                <>
                  <p>
                    <Text strong>Join Date:</Text> {employeeDetails.joinDate}
                  </p>
                  <p>
                    <Text strong>Date Of Birth:</Text> {employeeDetails.dob}
                  </p>
                  <p>
                    <Text strong>Location:</Text> {employeeDetails.location}
                  </p>
                </>
              )}
            </Card>
          </Col>
        </Row>
      </Content>
      <EditTable visible={isTableVisible} onClose={handleTableClose} />
      <Modal
        title="Payslip Preview"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <img src={(payslip)} alt="Payslip" style={{ width: '100%' }} />
      </Modal>
    </Layout>
  );
};
 
export default Salary;