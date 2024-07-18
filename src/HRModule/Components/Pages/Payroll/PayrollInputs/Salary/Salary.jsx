import React from 'react';
import { Layout, Input, Button, Card, Row, Col, Typography, Space } from 'antd';
import './Salary.css';
 
const { Header, Content } = Layout;
const { Title, Text } = Typography;
 
const Salary = () => {
  return (
    <Layout className="payroll-dashboard">
      <Header className="header">
        <Row justify="space-between" align="middle">
          <Col>
            <Space>
              <Text strong>Employee Type:</Text>
              <Input value="DEMO" readOnly style={{ width: 100 }} />
            </Space>
          </Col>
          <Col>
            <Space>
              <Text strong>Payroll Processed On:</Text>
              <Input value="-" readOnly style={{ width: 100 }} />
            </Space>
          </Col>
        </Row>
      </Header>
      <Content className="content">
        <Row justify="end" style={{ marginBottom: 20 }}>
          <Space>
            <Button type="primary">Preview Payslip</Button>
            <Button type="primary">Update Salary</Button>
            <Button type="primary">Process Payroll</Button>
          </Space>
        </Row>
        <Row gutter={16}>
          <Col span={16}>
            <Card title="Components" className="components-card">
              <Input.Search
                placeholder="Search by component"
                style={{ marginBottom: 10 }}
                enterButton
              />
              <Button type="link" style={{ marginBottom: 10 }}>Expand All</Button>
              <Card type="inner" size="small">NET PAY</Card>
              <Card type="inner" size="small">GROSS</Card>
              <Card type="inner" size="small">TOTAL DEDUCTIONS</Card>
              <Card type="inner" size="small">SALARY MASTER</Card>
              <Card type="inner" size="small">CALCULATION FIELDS</Card>
              <Card type="inner" size="small">CTC ITEMS</Card>
              <Card type="inner" size="small">PF RELATED ITEMS</Card>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Details" className="details-card">
              <p><Text strong>Join Date:</Text> 01 Feb 2024</p>
              <p><Text strong>Date Of Birth:</Text> 25 Feb 1991 (33 Yrs 3 Months)</p>
              <p><Text strong>Location:</Text> -</p>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
 
export default Salary;