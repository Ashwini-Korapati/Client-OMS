import React from 'react';
import { DatePicker, Form, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { updateResignationDetails } from '../../../../../../Redux/Slices/SettlementSlice';
import './Resignation.css';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
      sm: {
        span: 14,
      },
    },
  },
};

const Resignation = () => {
  const dispatch = useDispatch();
  const resignationDetails = useSelector((state) => state.settlement.resignationDetails);

  const handleChange = (changedValues) => {
    dispatch(updateResignationDetails(changedValues));
  };

  return (
    <div className="centered-form">
      <div className="form-container">
        <Form
          {...formItemLayout}
          initialValues={resignationDetails}
          onValuesChange={(_, allValues) => handleChange(allValues)}
          style={{
            maxWidth: 800,
          }}
        >
          <Form.Item
            label="Resignation Submitted on"
            name="resignationSubmittedOn"
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            label="Leaving Date"
            name="leavingDate"
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            label="Leaving Reason"
            name="leavingReason"
          >
            <Select>
              <Select.Option value="">--Select--</Select.Option>
              <Select.Option value="expired">EXPIRED</Select.Option>
              <Select.Option value="abandoned">ABANDONED</Select.Option>
              <Select.Option value="others">OTHERS</Select.Option>
              <Select.Option value="transferred">TRANSFERRED</Select.Option>
              <Select.Option value="sick">SICK</Select.Option>
              <Select.Option value="terminatedonleave">TERMINATION ON LEAVE</Select.Option>
              <Select.Option value="resignedonleave">RESIGNED ON LEAVE</Select.Option>
              <Select.Option value="deported">DEPORTED</Select.Option>
              <Select.Option value="terminated">TERMINATED</Select.Option>
              <Select.Option value="contractexpired">CONTRACT EXPIRED</Select.Option>
              <Select.Option value="resigned">RESIGNED</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Statement Date"
            name="statementDate"
          >
            <DatePicker />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Resignation;
