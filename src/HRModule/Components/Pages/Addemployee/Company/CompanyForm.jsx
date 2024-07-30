// import React, { useState, useEffect } from 'react';
// import { Form, Input, Button } from 'antd';
// import { FaRegTrashCan } from "react-icons/fa6";
// import  '../../Addemployee/CostCenter/CostCenterForm.css'

// const CompanyForm = ({ onFinish, existingCompanies }) => {
//   const [companies, setCompanies] = useState(existingCompanies || [
//     { name: '' }
//   ]);

//   useEffect(() => {
//     setCompanies(existingCompanies);
//   }, [existingCompanies]);

//   const handleChange = (index, event) => {
//     const { value } = event.target;
//     const newCompanies = [...companies];
//     newCompanies[index].name = value;
//     setCompanies(newCompanies);
//   };

//   const handleAddCompany = () => {
//     setCompanies([...companies, { name: '' }]);
//   };

//   const handleDelete = (index) => {
//     const newCompanies = companies.filter((_, i) => i !== index);
//     setCompanies(newCompanies);
//   };

//   const handleSubmit = () => {
//     if (onFinish) onFinish(companies);
//   };

//   return (
//     <div className="company-form">
//       <Form layout="vertical" onFinish={handleSubmit}>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {companies.map((company, index) => (
//               <tr key={index}>
//                 <td>
//                   <Input
//                     type="text"
//                     value={company.name}
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
//         <Button type="dashed" onClick={handleAddCompany} className='add-button'>
//           Add Company
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

// export default CompanyForm;


import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Table, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const CompanyForm = ({ onFinish }) => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const storedCompanies = JSON.parse(localStorage.getItem('companies')) || [];
    setCompanies(storedCompanies);
  }, []);

  const handleFinish = (values) => {
    const newCompanies = [...companies, values];
    setCompanies(newCompanies);
    localStorage.setItem('companies', JSON.stringify(newCompanies));
    onFinish(newCompanies);
  };

  const handleDelete = (index) => {
    const newCompanies = companies.filter((_, i) => i !== index);
    setCompanies(newCompanies);
    localStorage.setItem('companies', JSON.stringify(newCompanies));
    onFinish(newCompanies);
  };

  const columns = [
    {
      title: 'Company Name',
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
    <div className="company-form">
      <Form onFinish={handleFinish}>
        <Form.Item
          label="Company Name"
          name="name"
          rules={[{ required: true, message: 'Please input company name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Table dataSource={companies} columns={columns} rowKey={(record) => record.code} />
    </div>
  );
};

export default CompanyForm;
