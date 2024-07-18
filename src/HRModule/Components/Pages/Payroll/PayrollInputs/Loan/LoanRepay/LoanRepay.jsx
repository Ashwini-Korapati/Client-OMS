import React, { useEffect, useState } from 'react';
import { Card, Form, Input, Row, Col, Button, DatePicker } from 'antd';
import axios from 'axios';
import './LoanRepay.css';
 
const LoanRepay = () => {
  const [loanDetails, setLoanDetails] = useState({});
 
  useEffect(() => {
    axios.get('/api/loan-details')
      .then(response => {
        setLoanDetails(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the loan details!', error);
      });
  }, []);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoanDetails({
      ...loanDetails,
      [name]: value,
    });
  };
 
  const handleDateChange = (date, dateString) => {
    setLoanDetails({
      ...loanDetails,
      repaymentDate: dateString,
    });
  };
 
  return (
    <Card title="Loan Repayment" className="loan-repayment-container">
      <Form layout="vertical">
        <Row gutter={16} className="repayment-form-row">
          <Col span={12} className="repayment-form-col">
            <Form.Item label="Total Loan Amount">
              <Input
                value={loanDetails.totalLoanAmount}
                name="totalLoanAmount"
                onChange={handleChange}
                className="repayment-input"
              />
            </Form.Item>
          </Col>
          <Col span={12} className="repayment-form-col">
            <Form.Item label="Installment No">
              <Input
                value={loanDetails.installmentNo}
                name="installmentNo"
                onChange={handleChange}
                className="repayment-input"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16} className="repayment-form-row">
          <Col span={12} className="repayment-form-col">
            <Form.Item label="Repayment Amount">
              <Input
                value={loanDetails.repaymentAmount}
                name="repaymentAmount"
                onChange={handleChange}
                className="repayment-input"
              />
            </Form.Item>
          </Col>
          <Col span={12} className="repayment-form-col">
            <Form.Item label="Repayment Date">
              <DatePicker
                value={loanDetails.repaymentDate}
                onChange={handleDateChange}
                className="repayment-input"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24} className="repayment-form-buttons">
            <Button type="primary">Submit</Button>
            <Button type="default">Next</Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};
 
export default LoanRepay;
 