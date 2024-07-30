import React, { useState } from 'react';
import { Modal, Table, Button, Form, Input, DatePicker, message } from 'antd';
import { DeleteOutlined, SyncOutlined } from '@ant-design/icons';
import './EditTable.css';

const EditTable = ({ visible, onClose }) => {
  const [data, setData] = useState([
    {
      key: '1',
      fromDate: '1 Jun 2024',
      amount: '₹16.00',
      remarks: '',
      modifiedOn: '16 Jul 2024',
    },
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [form] = Form.useForm();

  const columns = [
    {
      title: 'From Date',
      dataIndex: 'fromDate',
      key: 'fromDate',
      render: text => <span>{text}</span>,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: text => <span>{text}</span>,
    },
    {
      title: 'Remarks',
      dataIndex: 'remarks',
      key: 'remarks',
      render: text => <span>{text}</span>,
    },
    {
      title: 'Modified On',
      dataIndex: 'modifiedOn',
      key: 'modifiedOn',
      render: text => <span>{text}</span>,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <div className="edit-table-actions">
          <DeleteOutlined style={{ marginRight: 16 }} onClick={() => handleDelete(record.key)} />
          <SyncOutlined onClick={() => handleSync(record.key)} />
        </div>
      ),
    },
  ];

  const handleDelete = key => {
    const newData = data.filter(item => item.key !== key);
    setData(newData);
    message.success('Row deleted successfully');
  };

  const handleSync = key => {
    console.log('Sync row:', key);
    message.info('Sync functionality not implemented');
  };

  const handleAddRow = values => {
    const newKey = (data.length + 1).toString();
    const newRow = {
      key: newKey,
      fromDate: values.fromDate.format('D MMM YYYY'),
      amount: values.amount,
      remarks: values.remarks,
      modifiedOn: new Date().toLocaleDateString(),
    };
    setData([...data, newRow]);
    setIsAdding(false);
    form.resetFields();
    message.success('Row added successfully');
  };

  return (
    <Modal
      title=""
      visible={visible}
      onCancel={onClose}
      footer={null}
      className="edit-table-modal"
    >
      <Button
        type="primary"
        style={{ marginBottom: 16 }}
        onClick={() => setIsAdding(true)}
      >
        + Add row
      </Button>
      {isAdding && (
        <Form
          form={form}
          layout="inline"
          onFinish={handleAddRow}
          style={{ marginBottom: 16 }}
        >
          <Form.Item
            name="fromDate"
            rules={[{ required: true, message: 'Please select the date!' }]}
          >
            <DatePicker format="D MMM YYYY" />
          </Form.Item>
          <Form.Item
            name="amount"
            rules={[{ required: true, message: 'Please enter the amount!' }]}
          >
            <Input placeholder="Amount" />
          </Form.Item>
          <Form.Item name="remarks">
            <Input placeholder="Remarks" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Add</Button>
            <Button
              style={{ marginLeft: 8 }}
              onClick={() => {
                setIsAdding(false);
                form.resetFields();
              }}
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      )}
      <div className="edit-table-container">
        <Table columns={columns} dataSource={data} pagination={false} className="edit-table-table" />
      </div>
    </Modal>
  );
};

export default EditTable;



// import React, { useEffect, useState } from 'react';
// import { Modal, Table, Button, Form, Input, DatePicker, message } from 'antd';
// import { DeleteOutlined, SyncOutlined } from '@ant-design/icons';
// import { useDispatch, useSelector } from 'react-redux';
// import './EditTable.css';

// const EditTable = ({ visible, onClose, employeeId }) => {
//   const dispatch = useDispatch();
//   const [data, setData] = useState([]);
//   const [isAdding, setIsAdding] = useState(false);
//   const [form] = Form.useForm();
//   const { employeeDetails } = useSelector(state => state.salary);

//   useEffect(() => {
//     if (employeeDetails && employeeDetails.components) {
//       setData(employeeDetails.components.map((comp, index) => ({
//         key: index.toString(),
//         fromDate: comp.fromDate,
//         amount: comp.amount,
//         remarks: comp.remarks,
//         modifiedOn: comp.modifiedOn,
//       })));
//     }
//   }, [employeeDetails]);

//   const columns = [
//     {
//       title: 'From Date',
//       dataIndex: 'fromDate',
//       key: 'fromDate',
//       render: text => <span>{text}</span>,
//     },
//     {
//       title: 'Amount',
//       dataIndex: 'amount',
//       key: 'amount',
//       render: text => <span>{text}</span>,
//     },
//     {
//       title: 'Remarks',
//       dataIndex: 'remarks',
//       key: 'remarks',
//       render: text => <span>{text}</span>,
//     },
//     {
//       title: 'Modified On',
//       dataIndex: 'modifiedOn',
//       key: 'modifiedOn',
//       render: text => <span>{text}</span>,
//     },
//     {
//       title: 'Actions',
//       key: 'actions',
//       render: (text, record) => (
//         <div className="edit-table-actions">
//           <DeleteOutlined style={{ marginRight: 16 }} onClick={() => handleDelete(record.key)} />
//           <SyncOutlined onClick={() => handleSync(record.key)} />
//         </div>
//       ),
//     },
//   ];

//   const handleDelete = key => {
//     const newData = data.filter(item => item.key !== key);
//     setData(newData);
//     dispatch(updateSalary({ employeeId, components: newData }))
//       .then(() => message.success('Row deleted successfully'))
//       .catch((error) => message.error(`Failed to delete row: ${error.message}`));
//   };

//   const handleSync = key => {
//     console.log('Sync row:', key);
//     message.info('Sync functionality not implemented');
//   };

//   const handleAddRow = values => {
//     const newKey = (data.length + 1).toString();
//     const newRow = {
//       key: newKey,
//       fromDate: values.fromDate.format('D MMM YYYY'),
//       amount: values.amount,
//       remarks: values.remarks,
//       modifiedOn: new Date().toLocaleDateString(),
//     };
//     const newData = [...data, newRow];
//     setData(newData);
//     dispatch(updateSalary({ employeeId, components: newData }))
//       .then(() => message.success('Row added successfully'))
//       .catch((error) => message.error(`Failed to add row: ${error.message}`));
//     setIsAdding(false);
//     form.resetFields();
//   };

//   return (
//     <Modal
//       title=""
//       visible={visible}
//       onCancel={onClose}
//       footer={null}
//       className="edit-table-modal"
//     >
//       <Button
//         type="primary"
//         style={{ marginBottom: 16 }}
//         onClick={() => setIsAdding(true)}
//       >
//         + Add row
//       </Button>
//       {isAdding && (
//         <Form
//           form={form}
//           layout="inline"
//           onFinish={handleAddRow}
//           style={{ marginBottom: 16 }}
//         >
//           <Form.Item
//             name="fromDate"
//             rules={[{ required: true, message: 'Please select the date!' }]}
//           >
//             <DatePicker format="D MMM YYYY" />
//           </Form.Item>
//           <Form.Item
//             name="amount"
//             rules={[{ required: true, message: 'Please enter the amount!' }]}
//           >
//             <Input placeholder="Amount" />
//           </Form.Item>
//           <Form.Item name="remarks">
//             <Input placeholder="Remarks" />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit">Add</Button>
//             <Button
//               style={{ marginLeft: 8 }}
//               onClick={() => {
//                 setIsAdding(false);
//                 form.resetFields();
//               }}
//             >
//               Cancel
//             </Button>
//           </Form.Item>
//         </Form>
//       )}
//       <div className="edit-table-container">
//         <Table columns={columns} dataSource={data} pagination={false} className="edit-table-table" />
//       </div>
//     </Modal>
//   );
// };

// export default EditTable;
