// import React, { useState, useEffect } from 'react';
// import { Form, Input, Button, Checkbox } from 'antd';
// import { FaRegTrashCan } from "react-icons/fa6";
// import  '../../Addemployee/CostCenter/CostCenterForm.css'


// const CostCenterForm = ({ onFinish, existingCenters }) => {
//   const [centers, setCenters] = useState(existingCenters || [
//     { description: '', code: '', active: true }
//   ]);

//   useEffect(() => {
//     setCenters(existingCenters);
//   }, [existingCenters]);

//   const handleChange = (index, event) => {
//     const { name, value, type, checked } = event.target;
//     const newCenters = [...centers];
//     newCenters[index][name] = type === 'checkbox' ? checked : value;
//     setCenters(newCenters);
//   };

//   const handleAddCenter = () => {
//     setCenters([...centers, { description: '', code: '', active: true }]);
//   };

//   const handleDelete = (index) => {
//     const newCenters = centers.filter((_, i) => i !== index);
//     setCenters(newCenters);
//   };

//   const handleSubmit = () => {
//     if (onFinish) onFinish(centers);
//   };

//   return (
//     <div className="cost-center-form">
//       <Form layout="vertical" onFinish={handleSubmit}>
//         <table>
//           <thead>
//             <tr>
//               <th>Description</th>
//               <th>Active</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {centers.map((center, index) => (
//               <tr key={index}>
//                 <td>
//                   <Input
//                     type="text"
//                     name="description"
//                     value={center.description}
//                     onChange={(e) => handleChange(index, e)}
//                   />
//                 </td>
 
//                 <td>
//                   <Checkbox
//                     name="active"
//                     checked={center.active}
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
//         <Button type="dashed" onClick={handleAddCenter} className='add-button'>
//           Add Center
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

// export default CostCenterForm;



// CostCenterForm.jsx
// import React, { useState, useEffect } from 'react';
// import { Form, Input, Button, Checkbox } from 'antd';
// import { FaRegTrashCan } from "react-icons/fa6";
// import '../../Addemployee/CostCenter/CostCenterForm.css';

// const CostCenterForm = ({ onFinish, existingCenters = [] }) => {
//   const [centers, setCenters] = useState(existingCenters);

//   useEffect(() => {
//     setCenters(existingCenters);
//   }, [existingCenters]);

//   const handleChange = (index, event) => {
//     const { name, value, type, checked } = event.target;
//     const newCenters = [...centers];
//     newCenters[index][name] = type === 'checkbox' ? checked : value;
//     setCenters(newCenters);
//   };

//   const handleAddCenter = () => {
//     setCenters([...centers, { description: '', code: '', active: true }]);
//   };

//   const handleDelete = (index) => {
//     const newCenters = centers.filter((_, i) => i !== index);
//     setCenters(newCenters);
//   };

//   const handleSubmit = () => {
//     if (onFinish) onFinish(centers);
//   };

//   return (
//     <div className="cost-center-form">
//       <Form layout="vertical" onFinish={handleSubmit}>
//         <table>
//           <thead>
//             <tr>
//               <th>Description</th>
//               <th>Active</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {centers.map((center, index) => (
//               <tr key={index}>
//                 <td>
//                   <Input
//                     type="text"
//                     name="description"
//                     value={center.description}
//                     onChange={(e) => handleChange(index, e)}
//                   />
//                 </td>
//                 <td>
//                   <Checkbox
//                     name="active"
//                     checked={center.active}
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
//           <Button type="dashed" onClick={handleAddCenter} className='add-button'>
//             Add Center
//           </Button>
//           <Button type="primary" htmlType="submit" className="add-button">
//             Save
//           </Button>
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default CostCenterForm;



// import React, { useState, useEffect } from 'react';
// import { Form, Input, Button, Table, Popconfirm } from 'antd';
// import { DeleteOutlined } from '@ant-design/icons';
// import '../../Addemployee/CostCenter/CostCenterForm.css';

// const CostCenterForm = ({ onFinish }) => {
//   const [centers, setCenters] = useState([]);

//   useEffect(() => {
//     const storedCenters = JSON.parse(localStorage.getItem('costCenters')) || [];
//     setCenters(storedCenters);
//   }, []);

//   const handleFinish = (values) => {
//     const newCenters = [...centers, values];
//     setCenters(newCenters);
//     localStorage.setItem('costCenters', JSON.stringify(newCenters));
//     onFinish(newCenters); // Notify parent component of the updated list
//   };

//   const handleDelete = (index) => {
//     const newCenters = centers.filter((_, i) => i !== index);
//     setCenters(newCenters);
//     localStorage.setItem('costCenters', JSON.stringify(newCenters));
//     onFinish(newCenters); // Notify parent component of the updated list
//   };

//   const columns = [
//     {
//       title: 'Description',
//       dataIndex: 'description',
//       key: 'description',
//     },
//     {
//       title: 'Action',
//       key: 'action',
//       render: (_, record, index) => (
//         <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(index)}>
//           <DeleteOutlined className="trash-icon" />
//         </Popconfirm>
//       ),
//     },
//   ];

//   return (
//     <div className="cost-center-form">
//       <Form onFinish={handleFinish}>
//         <Form.Item
//           label="Description"
//           name="description"
//           rules={[{ required: true, message: 'Please input description!' }]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" htmlType="submit">
//             Add Center
//           </Button>
//         </Form.Item>
//       </Form>
//       <Table dataSource={centers} columns={columns} rowKey="description" />
//     </div>
//   );
// };

// export default CostCenterForm;


// import React, { useState, useEffect } from 'react';
// import { Form, Input, Button, Table, Popconfirm } from 'antd';
// import { DeleteOutlined } from '@ant-design/icons';
// import '../../Addemployee/CostCenter/CostCenterForm.css';

// const CostCenterForm = ({ onFinish }) => {
//   const [centers, setCenters] = useState([]);

//   useEffect(() => {
//     const storedCenters = JSON.parse(localStorage.getItem('costCenters')) || [];
//     setCenters(storedCenters);
//   }, []);

//   const handleFinish = (values) => {
//     console.log('Adding new center:', values);
//     const newCenters = [...centers, values];
//     setCenters(newCenters);
//     localStorage.setItem('costCenters', JSON.stringify(newCenters));
//     onFinish(newCenters); // Notify parent component of the updated list
//   };

//   const handleDelete = (index) => {
//     const newCenters = centers.filter((_, i) => i !== index);
//     setCenters(newCenters);
//     localStorage.setItem('costCenters', JSON.stringify(newCenters));
//     onFinish(newCenters); // Notify parent component of the updated list
//   };

//   const columns = [
//     {
//       title: 'Description',
//       dataIndex: 'description',
//       key: 'description',
//     },
//     {
//       title: 'Action',
//       key: 'action',
//       render: (_, record, index) => (
//         <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(index)}>
//           <DeleteOutlined className="trash-icon" />
//         </Popconfirm>
//       ),
//     },
//   ];

//   return (
//     <div className="cost-center-form">
//       <Form onFinish={handleFinish}>
//         <Form.Item
//           label="Description"
//           name="description"
//           rules={[{ required: true, message: 'Please input description!' }]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" htmlType="submit">
//             Add Center
//           </Button>
//         </Form.Item>
//       </Form>
//       <Table dataSource={centers} columns={columns} rowKey="description" />
//     </div>
//   );
// };

// export default CostCenterForm;



import React, { useState } from 'react';
import { Form, Input, Button, Table, Popconfirm } from 'antd';
import { useDispatch } from 'react-redux';
import { DeleteOutlined } from '@ant-design/icons';


const CostCenterForm = ({ onFinish }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [centers, setCenters] = useState([]);

  const handleFinish = (values) => {
    const newCenters = [...centers, values];
    setCenters(newCenters);
    localStorage.setItem('costCenters', JSON.stringify(newCenters));
    onFinish(newCenters); // Notify parent component
    form.resetFields();
  };

  const handleDelete = (record) => {
    const newCenters = centers.filter(center => center.id !== record.id);
    setCenters(newCenters);
    localStorage.setItem('costCenters', JSON.stringify(newCenters));
    onFinish(newCenters); // Notify parent component
  };

  return (
    <div>
      <Form form={form} onFinish={handleFinish}>
        <Form.Item
          label="Cost Center Name"
          name="name"
          rules={[{ required: true, message: 'Please input cost center name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Cost Center
          </Button>
        </Form.Item>
      </Form>
      <Table
        dataSource={centers}
        columns={[
          { title: 'Name', dataIndex: 'name', key: 'name' },
          {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
              <Popconfirm
                title="Are you sure to delete this cost center?"
                onConfirm={() => handleDelete(record)}
                okText="Yes"
                cancelText="No"
              >
          <DeleteOutlined className="trash-icon" />
          </Popconfirm>
            ),
          },
        ]}
        rowKey="id"
      />
    </div>
  );
};

export default CostCenterForm;
