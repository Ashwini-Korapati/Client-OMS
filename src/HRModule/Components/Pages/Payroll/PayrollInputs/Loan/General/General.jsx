import React from 'react';
import { Form, Input, Button, Row, Col, DatePicker, Checkbox, Divider, Select } from 'antd';
import './General.css';
 
const { Option } = Select;
 
const General = () => {
  return (
    <div className="loan-container">
      <div className="loan-details">
        {/* Top Section with Dropdown and Buttons */}
        <Row gutter={16} className="loan-top-row">
          <Col span={12} className="loan-form-col">
            <Form.Item label="Loan as on">
              <Select
                showSearch
                placeholder="Search to Select"
                optionFilterProp="label"
                size="small"
                className="loan-input"
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={[
                  { value: '1', label: 'Not Identified' },
                  { value: '2', label: 'Closed' },
                  { value: '3', label: 'Communicated' },
                  { value: '4', label: 'Identified' },
                  { value: '5', label: 'Resolved' },
                  { value: '6', label: 'Cancelled' },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={12} className="loan-buttons-col">
            <Button type="primary">Create New</Button>
            <Button type="danger">Remove</Button>
          </Col>
        </Row>
 
        <Form layout="vertical">
          {/* Loan Details Section */}
          <h3 className="section-title">Loan Details</h3>
          <Divider />
          <Row gutter={16} className="loan-form-row">
            <Col span={12} className="loan-form-col">
              <Form.Item label="Date of Loan">
                <DatePicker size="small" className="loan-input" />
              </Form.Item>
            </Col>
            <Col span={12} className="loan-form-col">
              <Form.Item label="Amount">
                <Input size="small" className="loan-input" />
              </Form.Item>
            </Col>
            <Col span={12} className="loan-form-col">
              <Form.Item label="Deduct From">
                <Input size="small" className="loan-input" />
              </Form.Item>
            </Col>
            <Col span={12} className="loan-form-col">
              <Form.Item label="Interest Rate">
                <Input size="small" className="loan-input" />
              </Form.Item>
            </Col>
            <Col span={12} className="loan-form-col">
              <Form.Item label="Created Date">
                <DatePicker size="small" className="loan-input" />
              </Form.Item>
            </Col>
            <Col span={12} className="loan-form-col">
              <Form.Item label="No of Installments">
                <Input size="small" className="loan-input" />
              </Form.Item>
            </Col>
            <Col span={12} className="loan-form-col">
              <Form.Item label="Loan Type">
                <Input size="small" className="loan-input" />
              </Form.Item>
            </Col>
            <Col span={12} className="loan-form-col">
              <Form.Item label="Loan Account No">
                <Input size="small" className="loan-input" />
              </Form.Item>
            </Col>
          </Row>
 
          {/* Installment Details Section */}
          <h3 className="section-title">Installment Details</h3>
          <Divider />
          <Row gutter={16} className="loan-form-row">
            <Col span={12} className="loan-form-col">
              <Form.Item label="Monthly Installment">
                <Input size="small" className="loan-input" />
              </Form.Item>
            </Col>
            <Col span={12} className="loan-form-col">
              <Form.Item label="Principal Balance">
                <Input size="small" className="loan-input" />
              </Form.Item>
            </Col>
            <Col span={12} className="loan-form-col">
              <Form.Item label="Interest Balance">
                <Input size="small" className="loan-input" />
              </Form.Item>
            </Col>
          </Row>
 
          {/* Other Information Section */}
          <h3 className="section-title">Other Information</h3>
          <Divider />
          <Row gutter={16} className="loan-form-row">
            <Col span={12} className="loan-form-col">
              <Form.Item label="Demand Promissory Note">
                <Checkbox className="loan-checkbox" />
              </Form.Item>
            </Col>
            <Col span={12} className="loan-form-col">
              <Form.Item label="Loan Completed">
                <Checkbox className="loan-checkbox" />
              </Form.Item>
            </Col>
            <Col span={12} className="loan-form-col">
              <Form.Item label="Perquisite Rate">
                <Input size="small" className="loan-input" />
              </Form.Item>
            </Col>
            <Col span={12} className="loan-form-col">
              <Form.Item label="Completed Date">
                <DatePicker size="small" className="loan-input" />
              </Form.Item>
            </Col>
            <Col span={24} className="loan-form-col">
              <Form.Item label="Remarks">
                <Input.TextArea rows={2} className="loan-input" />
              </Form.Item>
            </Col>
          </Row>
 
          <div className="loan-form-buttons">
            <Button type="default" className="back-to-salary-button">Back to Salary</Button>
            <Button type="primary" className="save-button">Save</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
 
export default General;