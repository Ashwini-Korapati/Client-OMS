// import React, { useState, useEffect } from 'react';
// import { Form, Input, Button } from 'antd';
// import { FaRegTrashCan } from "react-icons/fa6";
// import  '../../Addemployee/CostCenter/CostCenterForm.css'

// const DepartmentForm = ({ onFinish, existingDepartments }) => {
//   const [departments, setDepartments] = useState(existingDepartments || [
//     { name: '' }
//   ]);

//   useEffect(() => {
//     setDepartments(existingDepartments);
//   }, [existingDepartments]);

//   const handleChange = (index, event) => {
//     const { value } = event.target;
//     const newDepartments = [...departments];
//     newDepartments[index].name = value;
//     setDepartments(newDepartments);
//   };

//   const handleAddDepartment = () => {
//     setDepartments([...departments, { name: '' }]);
//   };

//   const handleDelete = (index) => {
//     const newDepartments = departments.filter((_, i) => i !== index);
//     setDepartments(newDepartments);
//   };

//   const handleSubmit = () => {
//     if (onFinish) onFinish(departments);
//   };

//   return (
//     <div className="department-form">
//       <Form layout="vertical" onFinish={handleSubmit}>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {departments.map((department, index) => (
//               <tr key={index}>
//                 <td>
//                   <Input
//                     type="text"
//                     value={department.name}
//                     onChange={(e) => handleChange(index, e)}
//                   />
//                 </td>
//                 <td>
//                   <FaRegTrashCan
//                     className='trash-icon'
//                     onClick={() => handleDelete(index)}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
   
//         <div className="form-buttons">
//         <Button type="dashed" onClick={handleAddDepartment} className='add-button'>
//           Add Department
//         </Button>
//           <Button type="primary" htmlType="submit" className="add-button">
//             Save
//           </Button>
//           {/* <Button onClick={onFinish} className="cancel-button">
//             Cancel
//           </Button> */}
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default DepartmentForm;


import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Table, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const DepartmentForm = ({ onFinish }) => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const storedDepartments = JSON.parse(localStorage.getItem('departments')) || [];
    setDepartments(storedDepartments);
  }, []);

  const handleFinish = (values) => {
    const newDepartments = [...departments, values];
    setDepartments(newDepartments);
    localStorage.setItem('departments', JSON.stringify(newDepartments));
    onFinish(newDepartments);
  };

  const handleDelete = (index) => {
    const newDepartments = departments.filter((_, i) => i !== index);
    setDepartments(newDepartments);
    localStorage.setItem('departments', JSON.stringify(newDepartments));
    onFinish(newDepartments);
  };

  const columns = [
    {
      title: 'Department Name',
      dataIndex: 'name',
      key: 'name',
    },
  
    {
      title: 'Action',
      key: 'action',
      render: (_, record, index) => (
        <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(index)}>
          <DeleteOutlined className="trash-icon" />
        </Popconfirm>
      ),
    },
  ];

  return (
    <div className="department-form">
      <Form onFinish={handleFinish}>
        <Form.Item
          label="Department Name"
          name="name"
          rules={[{ required: true, message: 'Please input department name!' }]}
        >
          <Input />
        </Form.Item>
      
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Table dataSource={departments} columns={columns} rowKey={(record) => record.code} />
    </div>
  );
};

export default DepartmentForm;
