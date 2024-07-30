// // import React, { useState, useEffect } from 'react';
// // import { Form, Input, Button } from 'antd';
// // import { FaRegTrashCan } from "react-icons/fa6";
// // import  '../../Addemployee/CostCenter/CostCenterForm.css'

// // const LocationForm = ({ onFinish, existingLocations }) => {
// //   const [locations, setLocations] = useState(existingLocations || [
// //     { name: '' }
// //   ]);

// //   useEffect(() => {
// //     setLocations(existingLocations);
// //   }, [existingLocations]);

// //   const handleChange = (index, event) => {
// //     const { value } = event.target;
// //     const newLocations = [...locations];
// //     newLocations[index].name = value;
// //     setLocations(newLocations);
// //   };

// //   const handleAddLocation = () => {
// //     setLocations([...locations, { name: '' }]);
// //   };

// //   const handleDelete = (index) => {
// //     const newLocations = locations.filter((_, i) => i !== index);
// //     setLocations(newLocations);
// //   };

// //   const handleSubmit = () => {
// //     if (onFinish) onFinish(locations);
// //   };

// //   return (
// //     <div className="location-form">
// //       <Form layout="vertical" onFinish={handleSubmit}>
// //         <table>
// //           <thead>
// //             <tr>
// //               <th>Name</th>
// //               <th>Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {locations.map((location, index) => (
// //               <tr key={index}>
// //                 <td>
// //                   <Input
// //                     type="text"
// //                     value={location.name}
// //                     onChange={(e) => handleChange(index, e)}
// //                   />
// //                 </td>
// //                 <td>
// //                   <FaRegTrashCan
// //                     className='trash-icon'
// //                     onClick={() => handleDelete(index)}
// //                   />
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
    
// //         <div className="form-buttons">
// //         <Button type="dashed" onClick={handleAddLocation} className='add-button'>
// //           Add Location
// //         </Button>
// //           <Button type="primary" htmlType="submit" className="add-button">
// //             Save
// //           </Button>
// //           {/* <Button onClick={onFinish} className="cancel-button">
// //             Cancel
// //           </Button> */}
// //         </div>
// //       </Form>
// //     </div>
// //   );
// // };

// // export default LocationForm;
// import React, { useState, useEffect } from 'react';
// import { Form, Input, Button, Select } from 'antd';

// const { Option } = Select;

// const LocationForm = ({ onFinish }) => {
//   const [locations, setLocations] = useState([]);

//   useEffect(() => {
//     const storedLocations = JSON.parse(localStorage.getItem('locations')) || [];
//     setLocations(storedLocations);
//   }, []);

//   const handleFinish = (values) => {
//     const newLocations = [...locations, values];
//     setLocations(newLocations);
//     localStorage.setItem('locations', JSON.stringify(newLocations));
//     onFinish(newLocations);
//   };

//   return (
//     <Form onFinish={handleFinish}>
//       <Form.Item
//         label="Location Name"
//         name="name"
//         rules={[{ required: true, message: 'Please input location name!' }]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item
//         label="Location Code"
//         name="code"
//         rules={[{ required: true, message: 'Please input location code!' }]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//       <Form.Item label="Existing Locations">
//         <Select placeholder="Select a location" defaultValue={locations.length ? locations[0].name : ''}>
//           {locations.map((location, index) => (
//             <Option key={index} value={location.name}>
//               {location.name}
//             </Option>
//           ))}
//         </Select>
//       </Form.Item>
//     </Form>
//   );
// };

// export default LocationForm;




import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Table, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const LocationForm = ({ onFinish }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const storedLocations = JSON.parse(localStorage.getItem('locations')) || [];
    setLocations(storedLocations);
  }, []);

  const handleFinish = (values) => {
    const newLocations = [...locations, values];
    setLocations(newLocations);
    localStorage.setItem('locations', JSON.stringify(newLocations));
    onFinish(newLocations);
  };

  const handleDelete = (index) => {
    const newLocations = locations.filter((_, i) => i !== index);
    setLocations(newLocations);
    localStorage.setItem('locations', JSON.stringify(newLocations));
    onFinish(newLocations);
  };

  const columns = [
    {
      title: 'Location Name',
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
    <div className="location-form">
      <Form onFinish={handleFinish}>
        <Form.Item
          label="Location Name"
          name="name"
          rules={[{ required: true, message: 'Please input location name!' }]}
        >
          <Input />
        </Form.Item>
     
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Table dataSource={locations} columns={columns} rowKey={(record) => record.code} />
    </div>
  );
};

export default LocationForm;

