

import React from 'react';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import '../Payslip/Payslip.css';
import imagelogo from '../../../../../../Assets/nmitlogo.png';

const Payslip = ({ onClose, employeeId }) => {
  const employeeSalaryData = useSelector((state) => state.salary.salaryDetails);

  if (!employeeSalaryData) {
    return <Spin size="large" />; // Show a loading spinner
  }

  const payslipData = employeeSalaryData.find(emp => emp.emp_id === employeeId);

  if (!payslipData) {
    return <div>No data available for this employee.</div>;
  }

  const {
    firstName,
    designation,
    emp_id,
    location,
    total_amt,
    previous_annual_ctc,
    revised_annual_ctc,
    revised_monthly_ctc,
    revised_full_basic,
    revised_full_hra,
    revised_full_special_allowance,
    revised_full_other_allowance,
    revised_full_employer_pf,
    revised_full_travel_allowance,
    joiningDate,
    department,
    effectiveWorkDays,
    lop,
    bankName,
    bankAccountNo,
    panNumber,
    pfNumber,
    pfUAN
  } = payslipData;

  return (
    <div className="payslip-modal">
      <div className="payslip-container1">
        <img src={imagelogo} alt="Company Logo" className="logo" />
        <div className='payslip-close'>
          <button className="payslip-close-button" onClick={onClose}></button>
        </div>
        <div className="payslip-header">
          <h2>NM IT Solutions Pvt Ltd</h2>
          <p>5th, Samhita Villa, aspire building, 1st Cross Rd, station, Mahadevapura, <br />Bengaluru, Karnataka 560016</p>
        </div>
        <div className="payslip-body">
          <table className="payslip-details-table">
            <tbody>
              <tr>
                <td><strong>Name:</strong> {firstName}</td>
                <td><strong>Employee No:</strong> {emp_id}</td>
              </tr>
              <tr>
                <td><strong>Joining Date:</strong> {joiningDate}</td>
                <td><strong>Bank Name:</strong> {bankName || '-'}</td>
              </tr>
              <tr>
                <td><strong>Designation:</strong> {designation}</td>
                <td><strong>Bank Account No:</strong> {bankAccountNo || '-'}</td>
              </tr>
              <tr>
                <td><strong>Department:</strong> {department || '-'}</td>
                <td><strong>PAN Number:</strong> {panNumber || '-'}</td>
              </tr>
              <tr>
                <td><strong>Location:</strong> {location || '-'}</td>
                <td><strong>PF No:</strong> {pfNumber || '-'}</td>
              </tr>
              <tr>
                <td><strong>Effective Work Days:</strong> {effectiveWorkDays}</td>
                <td><strong>PF UAN:</strong> {pfUAN || '-'}</td>
              </tr>
              <tr>
                <td><strong>LOP:</strong> {lop}</td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <table className="payslip-table">
            <thead>
              <tr>
                <th>Earnings</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BASIC</td>
                <td>{revised_full_basic}</td>
              </tr>
              <tr>
                <td>HRA</td>
                <td>{revised_full_hra}</td>
              </tr>
              <tr>
                <td>Special Allowance</td>
                <td>{revised_full_special_allowance}</td>
              </tr>
              <tr>
                <td>Other Allowance</td>
                <td>{revised_full_other_allowance}</td>
              </tr>
              <tr>
                <td>Travelling Allowance</td>
                <td>{revised_full_travel_allowance}</td>
              </tr>
              <tr>
                <td><strong>Total Earnings</strong></td>
                <td><strong>{revised_monthly_ctc}</strong></td>
              </tr>
              <tr>
                <td><strong>Annual CTC</strong></td>
                <td><strong>{revised_annual_ctc}</strong></td>
              </tr>
            </tbody>
          </table>

          <table className="payslip-table">
            <thead>
              <tr>
                <th>Deductions</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Employer PF</td>
                <td>{revised_full_employer_pf}</td>
              </tr>
              <tr>
                <td><strong>Total Deductions</strong></td>
                <td><strong>{revised_full_employer_pf}</strong></td>
              </tr>
            </tbody>
          </table>
          
          <p><strong>Net Pay:</strong> {total_amt}</p>
          <p>This is a computer-generated payslip and does not require a signature.</p>
        </div>
      </div>
    </div>
  );
};

export default Payslip;
