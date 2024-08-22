import React, { useState } from 'react';
import { Table, InputNumber, Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { updateWorkDaysDetails } from '../../../../../../Redux/Slices/SettlementSlice'

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

const Workdays = () => {
  const dispatch = useDispatch();
  const workdaysData = useSelector(state => state.settlement.workDaysDetails);
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      workdays: record.workdays,
      daysworked: record.daysworked,
    });
    setEditingKey(record.key);
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const updatedRecord = { key, ...row, payrollmonth: workdaysData.find(item => item.key === key).payrollmonth };
      dispatch(updateWorkDaysDetails(updatedRecord));
      setEditingKey('');
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'Payroll Month',
      dataIndex: 'payrollmonth',
      key: 'payrollmonth',
      render: (text) => <div>{text}</div>, 
    },
    {
      title: 'Work Days',
      dataIndex: 'workdays',
      key: 'workdays',
      editable: true,
    },
    {
      title: 'Days Worked',
      dataIndex: 'daysworked',
      key: 'daysworked',
      editable: true,
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
        inputType: col.dataIndex === 'workdays' || col.dataIndex === 'daysworked' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const totalDaysWorked = workdaysData.reduce((total, record) => total + (record.daysworked || 0), 0);

  const summaryRow = {
    key: 'summary',
    payrollmonth: 'No. of days worked',
    workdays: '',
    daysworked: totalDaysWorked,
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
        dataSource={[...workdaysData, summaryRow]}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={false}
      />
    </Form>
  );
};

export default Workdays;
