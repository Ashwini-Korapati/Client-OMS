import React, { useState, useContext, useEffect } from 'react';
import { Form, Input, Checkbox, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { updateNoticePayDetails, updateNoticePayPayrollData } from '../../../../../../Redux/Slices/SettlementSlice';
import './Noticepay.css';

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
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = React.useRef();
  const form = useContext(EditableContext);

  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
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
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

const Noticepay = () => {
  const dispatch = useDispatch();
  const noticePayDetails = useSelector((state) => state.settlement.noticePayDetails);
  const { noticeRequired, noticePeriod, noOfDaysServed, excessInNotice, payrollData, proratedExcessInNotice } = noticePayDetails;

  const handleSave = (row) => {
    dispatch(updateNoticePayPayrollData(row));
  };

  const handleChange = (changedValues) => {
    dispatch(updateNoticePayDetails(changedValues));
  };

  const columns = [
    {
      title: 'Payroll Month',
      dataIndex: 'payrollMonth',
      key: 'payrollMonth',
      editable: true,
    },
    {
      title: 'Excess In Notice',
      dataIndex: 'excessInNotice',
      key: 'excessInNotice',
      editable: true,
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
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  return (
    <Form
      layout="vertical"
      className="noticepay-form"
      initialValues={{
        noticeRequired,
        noticePeriod,
        noOfDaysServed,
        excessInNotice,
        proratedExcessInNotice,
      }}
      onValuesChange={(_, allValues) => handleChange(allValues)}
    >
      <Form.Item name="noticeRequired" valuePropName="checked">
        <Checkbox>Notice Required</Checkbox>
      </Form.Item>
      <Form.Item label="Notice Period" name="noticePeriod">
        <Input type="number" suffix="days" />
      </Form.Item>
      <Form.Item label="No of Days Served" name="noOfDaysServed">
        <Input type="number" suffix="days" />
      </Form.Item>
      <Form.Item label="Excess in Notice" name="excessInNotice">
        <Input type="number" suffix="days" />
      </Form.Item>
      <Table
        components={{
          body: {
            row: EditableRow,
            cell: EditableCell,
          },
        }}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={payrollData}
        columns={mergedColumns}
        pagination={false}
        className="noticepay-table"
      />
      <Form.Item label="Prorated excess in notice" name="proratedExcessInNotice">
        <Input type="number" />
      </Form.Item>
    </Form>
  );
};

export default Noticepay;
