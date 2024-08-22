import React, { useState } from 'react';
import { Table, InputNumber, Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { updateLeaveEncashmentDetails } from '../../../../../../Redux/Slices/SettlementSlice'

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : null;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const Leaveencashment = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const leaveEncashmentDetails = useSelector((state) => state.settlement.leaveEncashmentDetails);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      leaveType: '',
      balance: '',
      encash: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...leaveEncashmentDetails];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        dispatch(updateLeaveEncashmentDetails({ ...item, ...row })); 
        setEditingKey('');
      } else {
        newData.push(row);
        dispatch(updateLeaveEncashmentDetails(row)); 
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'Leave Type',
      dataIndex: 'leaveType',
      key: 'leaveType',
      render: (text, record) => {
        if (record.key === 'summary') {
          return {
            children: <div style={{ textAlign: 'center' }}>{text}</div>,
            props: {
              colSpan: 2,
            },
          };
        }
        return <a>{text}</a>;
      },
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance',
      editable: true,
      responsive: ['md'],
      render: (text, record) => {
        if (record.key === 'summary') {
          return {
            props: {
              colSpan: 0,
            },
          };
        }
        return text;
      },
    },
    {
      title: 'Encash',
      dataIndex: 'encash',
      key: 'encash',
      editable: true,
      responsive: ['lg'],
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a onClick={() => save(record.key)} style={{ marginRight: 8 }}>
              Save
            </a>
          </span>
        ) : (
          <a disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </a>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'balance' || col.dataIndex === 'encash' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const totalEncash = leaveEncashmentDetails.reduce((total, record) => total + record.encash, 0);

  const summaryRow = {
    key: 'summary',
    leaveType: 'Total Encash',
    balance: '',
    encash: totalEncash,
  };

  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={[...leaveEncashmentDetails, summaryRow]}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={false}
      />
    </Form>
  );
};

export default Leaveencashment;
