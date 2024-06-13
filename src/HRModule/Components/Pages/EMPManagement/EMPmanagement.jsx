import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
// import './EmployeeManagement.css'

 
const EditableContext = React.createContext(null);
 
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
 
const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  editing,
  inputType,
  ...restProps
}) => {
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
 
  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
    }
  }, [editing]);
 
  useEffect(() => {
    if (editing) {
      form.setFieldsValue({ [dataIndex]: record[dataIndex] });
    }
  }, [editing, dataIndex, record, form]);
 
  const save = async () => {
    try {
      const values = await form.validateFields();
      handleSave({
        ...record,
        ...values,
      });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };
 
  let childNode = children;
 
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        {inputType === 'number' ? (
          <InputNumber ref={inputRef} onPressEnter={save} onBlur={save} />
        ) : (
          <Input ref={inputRef} onPressEnter={save} onBlur={save} />
        )}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={() => form.setFieldsValue({ [dataIndex]: record[dataIndex] })}
      >
        {children}
      </div>
    );
  }
 
  return <td {...restProps}>{childNode}</td>;
};
 
const EMPmanagement = () => {
  const [dataSource, setDataSource] = useState([]);
  const [count, setCount] = useState(0);
  const [editingKey, setEditingKey] = useState('');
 
  const isEditing = (record) => record.key === editingKey;
 
  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };
 
  const handleAdd = () => {
    const newData = {
      key: count.toString(),
      name: '',
      age: '',
      address: '',
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
    setEditingKey(count.toString());
  };
 
  const edit = (record) => {
    setEditingKey(record.key);
  };
 
  const cancel = () => {
    setEditingKey('');
  };
 
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...dataSource];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setDataSource(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setDataSource(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };
 
  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };
 
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
 
  const defaultColumns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '15%',
      editable: true,
    },
    {
      title: 'ID',
      dataIndex: 'id',
      width: '10%',
      editable: true,
    },
    {
      title: 'Position',
      dataIndex: 'position',
      width: '15%',
      editable: true,
    },
    {
        title: 'Department',
        dataIndex: 'department',
        width: '15%',
        editable: true,
      },
      {
        title: 'Contact',
        dataIndex: 'contact',
        width: '30%',
        editable: true,
      },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <span>
            <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
              Edit
            </Typography.Link>
            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
              <a style={{ marginLeft: 8 }}>Delete</a>
            </Popconfirm>
          </span>
        );
      },
    },
  ];
 
  const mergedColumns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        editing: isEditing(record),
      }),
    };
  });
 
  const [form] = Form.useForm();
 
  return (
    <>
    {/* <Sidebar/> */}
    <div className='table-container'>
      <Button
        onClick={handleAdd}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        Add a row
      </Button>
      <Form form={form} component={false}>
      <Table
  className="editable-row"
  components={components}
  bordered
  dataSource={dataSource}
  columns={mergedColumns}
  pagination={{ onChange: cancel }}
/>
 
      </Form>
    </div>
    </>
  );
};
 
export default EMPmanagement;