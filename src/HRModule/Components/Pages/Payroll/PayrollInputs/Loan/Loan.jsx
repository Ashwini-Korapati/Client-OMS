import React from 'react';
import { Tabs } from 'antd';
import './Loan.css';
import General from './General/General';
import LoanDetails from './LoanDetails/LoanDetails'
import LoanRepay from './LoanRepay/LoanRepay';
import LoanRevision from './LoanRevision/LoanRevision';
 
 
 
const { TabPane } = Tabs;
 
const Loan = () => {
  return (
    <div className="loan-container">
      <h1 className="loan-heading">LOAN</h1>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="General" key="1">
          <General />
        </TabPane>
        <TabPane tab="Loan Details" key="2">
         <LoanDetails/>
        </TabPane>
        <TabPane tab="Loan Repayment" key="3">
          <LoanRepay />
        </TabPane>
        <TabPane tab="Loan Revision" key="4">
          <LoanRevision/>
        </TabPane>
      </Tabs>
    </div>
  );
};
 
export default Loan;