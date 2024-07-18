import React, { useState } from 'react';
import { Card, Form, Input, Row, Col, Button } from 'antd';
import './LoanRevision.css';
 
const LoanRevision = () => {
  const [loanDetails, setLoanDetails] = useState({});
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoanDetails({
      ...loanDetails,
      [name]: value,
    });
  };
 
  return (
    <Card title="Running Loan Details" className="loan-revision-container">
      <Form layout="vertical">
        <Row gutter={16} className="revision-form-row">
          <Col span={12} className="revision-form-col">
            <Form.Item label="Loan Amount">
              <Input
                value={loanDetails.loanAmount}
                name="loanAmount"
                onChange={handleChange}
                className="revision-input"
              />
            </Form.Item>
          </Col>
          <Col span={12} className="revision-form-col">
            <Form.Item label="Current Interest Rate">
              <Input
                value={loanDetails.currentInterestRate}
                name="currentInterestRate"
                onChange={handleChange}
                className="revision-input"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16} className="revision-form-row">
          <Col span={12} className="revision-form-col">
            <Form.Item label="Loan Type">
              <Input
                value={loanDetails.loanType}
                name="loanType"
                onChange={handleChange}
                className="revision-input"
              />
            </Form.Item>
          </Col>
          <Col span={12} className="revision-form-col">
            <Form.Item label="Total Installments">
              <Input
                value={loanDetails.totalInstallments}
                name="totalInstallments"
                onChange={handleChange}
                className="revision-input"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16} className="revision-form-row">
          <Col span={12} className="revision-form-col">
            <Form.Item label="Principal Balance">
              <Input
                value={loanDetails.principalBalance}
                name="principalBalance"
                onChange={handleChange}
                className="revision-input"
              />
            </Form.Item>
          </Col>
          <Col span={12} className="revision-form-col">
            <Form.Item label="No. of Installments Paid">
              <Input
                value={loanDetails.installmentsPaid}
                name="installmentsPaid"
                onChange={handleChange}
                className="revision-input"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16} className="revision-form-row">
          <Col span={12} className="revision-form-col">
            <Form.Item label="Top Up Amount">
              <Input
                value={loanDetails.topUpAmount}
                name="topUpAmount"
                onChange={handleChange}
                className="revision-input"
              />
            </Form.Item>
          </Col>
          <Col span={12} className="revision-form-col">
            <Form.Item label="New Loan Period">
              <Input
                value={loanDetails.newLoanPeriod}
                name="newLoanPeriod"
                onChange={handleChange}
                className="revision-input"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16} className="revision-form-row">
          <Col span={12} className="revision-form-col">
            <Form.Item label="New Interest Rate">
              <Input
                value={loanDetails.newInterestRate}
                name="newInterestRate"
                onChange={handleChange}
                className="revision-input"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
        <div className="loan-form-buttons-revision">
            <Button type="default" className="back-to-salary-button-revision">Back to Salary</Button>
            <Button type="primary" className="save-button-revision">Save</Button>
          </div>
        </Row>
      </Form>
    </Card>
  );
};
 
export default LoanRevision;