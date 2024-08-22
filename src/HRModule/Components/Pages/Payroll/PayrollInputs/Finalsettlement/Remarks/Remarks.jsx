import React from 'react';
import { Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { updateRemarks } from '../../../../../../Redux/Slices/SettlementSlice'

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
    },
    sm: {
      span: 14,
    },
  },
};

const Remarks = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const remarks = useSelector((state) => state.settlement.remarks);

  const handleFinish = (values) => {
    dispatch(updateRemarks(values.remarks));
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      onFinish={handleFinish}
      style={{
        maxWidth: 600,
        marginTop: 100,
        marginLeft: 450,
      }}
      initialValues={{ remarks }}
    >
      <Form.Item
        label="Remarks"
        name="remarks"
      >
        <Input.TextArea />
      </Form.Item>
    </Form>
  );
};

export default Remarks;
