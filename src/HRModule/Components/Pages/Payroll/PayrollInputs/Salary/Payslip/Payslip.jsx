import React from 'react';
import '../Payslip/Payslip.css'
 
const Payslip = ({ onClose }) => {
  const payslipData = {
    companyName: "NM IT Solutions Pvt Ltd",
    companyAddress: "5th Floor, Alpha Tech Park, Sector 3, Lucknow - 560054",
    employeeName: "John Doe",
    designation: "Software Trainee Intern",
    bankName: "HDFC Bank",
    employeeId: "7724",
    accountNumber: "1234567890123456",
    panNumber: "ABCDE1234F",
    uanNumber: "101010101010",
    pfNumber: "PN/12345/67890",
    earnings: {
      basic: 10000,
      hra: 2000,
      specialAllowance: 3000,
      otherAllowance: 2000,
      travellingAllowance: 1000,
      totalEarnings: 18000
    },
    deductions: {
      tax: 1200,
      totalDeductions: 1200
    },
    netPay: 16800,
    netPayWords: "Sixteen Thousand Eight Hundred Only",
    tdsDetails: {
      basic: 240000,
      hra: 48000,
      specialAllowance: 72000,
      otherAllowance: 48000,
      travellingAllowance: 24000,
      total: 384000
    },
    incomeTax: {
      underSection80c: 225000,
      otherSections: 50000,
      total: 275000
    },
    remarks: "This is a computer-generated payslip and does not require a signature."
  };
 
  return (
    <div className="payslip-modal">
      <div className="payslip-container">
        <div className="payslip-header">
          <h2>{payslipData.companyName}</h2>
          <p>{payslipData.companyAddress}</p>
          <button className="close-button" onClick={onClose}>X</button>
        </div>
        <div className="payslip-body">
          <div className="payslip-details">
            <p><strong>Name:</strong> {payslipData.employeeName}</p>
            <p><strong>Designation:</strong> {payslipData.designation}</p>
            <p><strong>Bank Name:</strong> {payslipData.bankName}</p>
            <p><strong>Employee ID:</strong> {payslipData.employeeId}</p>
            <p><strong>Account Number:</strong> {payslipData.accountNumber}</p>
            <p><strong>PAN Number:</strong> {payslipData.panNumber}</p>
            <p><strong>UAN Number:</strong> {payslipData.uanNumber}</p>
            <p><strong>PF Number:</strong> {payslipData.pfNumber}</p>
          </div>
          <table className="payslip-table">
            <thead>
              <tr>
                <th>Earnings</th>
                <th>Amount</th>
                <th>Deductions</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BASIC</td>
                <td>{payslipData.earnings.basic}</td>
                <td>Tax</td>
                <td>{payslipData.deductions.tax}</td>
              </tr>
              <tr>
                <td>HRA</td>
                <td>{payslipData.earnings.hra}</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Special Allowance</td>
                <td>{payslipData.earnings.specialAllowance}</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Other Allowance</td>
                <td>{payslipData.earnings.otherAllowance}</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Travelling Allowance</td>
                <td>{payslipData.earnings.travellingAllowance}</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td><strong>Total Earnings</strong></td>
                <td><strong>{payslipData.earnings.totalEarnings}</strong></td>
                <td><strong>Total Deductions</strong></td>
                <td><strong>{payslipData.deductions.totalDeductions}</strong></td>
              </tr>
            </tbody>
          </table>
          <p><strong>Net Pay:</strong> {payslipData.netPay} ({payslipData.netPayWords})</p>
          <h3>TDS Details</h3>
          <table className="tds-table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Basic</td>
                <td>{payslipData.tdsDetails.basic}</td>
              </tr>
              <tr>
                <td>HRA</td>
                <td>{payslipData.tdsDetails.hra}</td>
              </tr>
              <tr>
                <td>Special Allowance</td>
                <td>{payslipData.tdsDetails.specialAllowance}</td>
              </tr>
              <tr>
                <td>Other Allowance</td>
                <td>{payslipData.tdsDetails.otherAllowance}</td>
              </tr>
              <tr>
                <td>Travelling Allowance</td>
                <td>{payslipData.tdsDetails.travellingAllowance}</td>
              </tr>
              <tr>
                <td><strong>Total</strong></td>
                <td><strong>{payslipData.tdsDetails.total}</strong></td>
              </tr>
            </tbody>
          </table>
          <h3>Income Tax</h3>
          <table className="tax-table">
            <thead>
              <tr>
                <th>Section</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>80C</td>
                <td>{payslipData.incomeTax.underSection80c}</td>
              </tr>
              <tr>
                <td>Other Sections</td>
                <td>{payslipData.incomeTax.otherSections}</td>
              </tr>
              <tr>
                <td><strong>Total</strong></td>
                <td><strong>{payslipData.incomeTax.total}</strong></td>
              </tr>
            </tbody>
          </table>
          <p>{payslipData.remarks}</p>
        </div>
      </div>
    </div>
  );
};
 
export default Payslip;