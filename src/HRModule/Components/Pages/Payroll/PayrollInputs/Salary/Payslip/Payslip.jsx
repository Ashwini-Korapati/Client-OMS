// import React from 'react';
// import '../Payslip/Payslip.css'
 
// const Payslip = ({ onClose }) => {
//   const payslipData = {
//     companyName: "NM IT Solutions Pvt Ltd",
//     companyAddress: "5th Floor, Alpha Tech Park, Sector 3, Lucknow - 560054",
//     employeeName: "John Doe",
//     designation: "Software Trainee Intern",
//     bankName: "HDFC Bank",
//     employeeId: "7724",
//     accountNumber: "1234567890123456",
//     panNumber: "ABCDE1234F",
//     uanNumber: "101010101010",
//     pfNumber: "PN/12345/67890",
//     earnings: {
//       basic: 10000,
//       hra: 2000,
//       specialAllowance: 3000,
//       otherAllowance: 2000,
//       travellingAllowance: 1000,
//       totalEarnings: 18000
//     },
//     deductions: {
//       tax: 1200,
//       totalDeductions: 1200
//     },
//     netPay: 16800,
//     netPayWords: "Sixteen Thousand Eight Hundred Only",
//     tdsDetails: {
//       basic: 240000,
//       hra: 48000,
//       specialAllowance: 72000,
//       otherAllowance: 48000,
//       travellingAllowance: 24000,
//       total: 384000
//     },
//     incomeTax: {
//       underSection80c: 225000,
//       otherSections: 50000,
//       total: 275000
//     },
//     remarks: "This is a computer-generated payslip and does not require a signature."
//   };
 
//   return (
//     <div className="payslip-modal">
//       <div className="payslip-container">
//         <div className="payslip-header">
//           <h2>{payslipData.companyName}</h2>
//           <p>{payslipData.companyAddress}</p>
//           <button className="close-button" onClick={onClose}>X</button>
//         </div>
//         <div className="payslip-body">
//           <div className="payslip-details">
//             <p><strong>Name:</strong> {payslipData.employeeName}</p>
//             <p><strong>Designation:</strong> {payslipData.designation}</p>
//             <p><strong>Bank Name:</strong> {payslipData.bankName}</p>
//             <p><strong>Employee ID:</strong> {payslipData.employeeId}</p>
//             <p><strong>Account Number:</strong> {payslipData.accountNumber}</p>
//             <p><strong>PAN Number:</strong> {payslipData.panNumber}</p>
//             <p><strong>UAN Number:</strong> {payslipData.uanNumber}</p>
//             <p><strong>PF Number:</strong> {payslipData.pfNumber}</p>
//           </div>
//           <table className="payslip-table">
//             <thead>
//               <tr>
//                 <th>Earnings</th>
//                 <th>Amount</th>
//                 <th>Deductions</th>
//                 <th>Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>BASIC</td>
//                 <td>{payslipData.earnings.basic}</td>
//                 <td>Tax</td>
//                 <td>{payslipData.deductions.tax}</td>
//               </tr>
//               <tr>
//                 <td>HRA</td>
//                 <td>{payslipData.earnings.hra}</td>
//                 <td></td>
//                 <td></td>
//               </tr>
//               <tr>
//                 <td>Special Allowance</td>
//                 <td>{payslipData.earnings.specialAllowance}</td>
//                 <td></td>
//                 <td></td>
//               </tr>
//               <tr>
//                 <td>Other Allowance</td>
//                 <td>{payslipData.earnings.otherAllowance}</td>
//                 <td></td>
//                 <td></td>
//               </tr>
//               <tr>
//                 <td>Travelling Allowance</td>
//                 <td>{payslipData.earnings.travellingAllowance}</td>
//                 <td></td>
//                 <td></td>
//               </tr>
//               <tr>
//                 <td><strong>Total Earnings</strong></td>
//                 <td><strong>{payslipData.earnings.totalEarnings}</strong></td>
//                 <td><strong>Total Deductions</strong></td>
//                 <td><strong>{payslipData.deductions.totalDeductions}</strong></td>
//               </tr>
//             </tbody>
//           </table>
//           <p><strong>Net Pay:</strong> {payslipData.netPay} ({payslipData.netPayWords})</p>
//           <h3>TDS Details</h3>
//           <table className="tds-table">
//             <thead>
//               <tr>
//                 <th>Description</th>
//                 <th>Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Basic</td>
//                 <td>{payslipData.tdsDetails.basic}</td>
//               </tr>
//               <tr>
//                 <td>HRA</td>
//                 <td>{payslipData.tdsDetails.hra}</td>
//               </tr>
//               <tr>
//                 <td>Special Allowance</td>
//                 <td>{payslipData.tdsDetails.specialAllowance}</td>
//               </tr>
//               <tr>
//                 <td>Other Allowance</td>
//                 <td>{payslipData.tdsDetails.otherAllowance}</td>
//               </tr>
//               <tr>
//                 <td>Travelling Allowance</td>
//                 <td>{payslipData.tdsDetails.travellingAllowance}</td>
//               </tr>
//               <tr>
//                 <td><strong>Total</strong></td>
//                 <td><strong>{payslipData.tdsDetails.total}</strong></td>
//               </tr>
//             </tbody>
//           </table>
//           <h3>Income Tax</h3>
//           <table className="tax-table">
//             <thead>
//               <tr>
//                 <th>Section</th>
//                 <th>Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>80C</td>
//                 <td>{payslipData.incomeTax.underSection80c}</td>
//               </tr>
//               <tr>
//                 <td>Other Sections</td>
//                 <td>{payslipData.incomeTax.otherSections}</td>
//               </tr>
//               <tr>
//                 <td><strong>Total</strong></td>
//                 <td><strong>{payslipData.incomeTax.total}</strong></td>
//               </tr>
//             </tbody>
//           </table>
//           <p>{payslipData.remarks}</p>
//         </div>
//       </div>
//     </div>
//   );
// };
 
// export default Payslip;
import React from 'react';
import { useSelector } from 'react-redux';
import { Modal, Typography, Button, Spin } from 'antd';
import '../Payslip/Payslip.css'
import imagelogo from '../../../../../../Assets/nmitlogo.png'

const { Text } = Typography;

const Payslip = ({ onClose, employeeId }) => {
  // Select employee salary data from Redux state
  const employeeSalaryData = useSelector((state) => state.salary.salaryDetails);

  // Log the data to verify it's being fetched
  console.log('Employee Salary Data:', employeeSalaryData);

  // Check if the data is available
  if (!employeeSalaryData) {
    return <Spin size="large" />; // Show a loading spinner
  }

  // Find the data for the specific employee ID
  const payslipData = employeeSalaryData.find(emp => emp.emp_id === employeeId);

  if (!payslipData) {
    return <div>No data available for this employee.</div>;
  }

  // Destructure the data for easier access
  const {
    firstName,
    designation,
    total_amt,
    previous_annual_ctc,
    revised_annual_ctc,
    previous_monthly_ctc,
    revised_monthly_ctc,
    previous_full_basic,
    revised_full_basic,
    previous_full_hra,
    revised_full_hra,
    previous_full_special_allowance,
    revised_full_special_allowance,
    previous_full_other_allowance,
    revised_full_other_allowance,
    previous_full_employer_pf,
    revised_full_employer_pf,
    previous_full_travel_allowance,
    revised_full_travel_allowance,
  } = payslipData;

  return (
    <div className="payslip-modal">
      <div className="payslip-container">
        <img src={imagelogo} alt="Company Logo" className="logo" />
        <div className='payslip-close'>
        <button className="payslip-close-button" onClick={onClose}></button>

        </div>
        <div className="payslip-header">
          <h2>NM IT Solutions Pvt Ltd</h2>
          <p>: 5th, Samhita Villa, aspire building, 1st Cross Rd,  station,  Mahadevapura, <br/>Bengaluru, Karnataka 560016</p>
        </div>
        <div className="payslip-body">
          <div className="payslip-details">
            <p><strong>Name:</strong> {firstName}</p>
            <p><strong>Designation:</strong> {designation}</p>
            <p><strong>Employee ID:</strong> {payslipData.emp_id}</p>
          </div>
          <table className="payslip-table">
            <thead>
              <tr>
                <th>Earnings</th>
                <th>Previous</th>
                <th>Revised</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BASIC</td>
                <td>{previous_full_basic}</td>
                <td>{revised_full_basic}</td>
              </tr>
              <tr>
                <td>HRA</td>
                <td>{previous_full_hra}</td>
                <td>{revised_full_hra}</td>
              </tr>
              <tr>
                <td>Special Allowance</td>
                <td>{previous_full_special_allowance}</td>
                <td>{revised_full_special_allowance}</td>
              </tr>
              <tr>
                <td>Other Allowance</td>
                <td>{previous_full_other_allowance}</td>
                <td>{revised_full_other_allowance}</td>
              </tr>
              <tr>
                <td>Travelling Allowance</td>
                <td>{previous_full_travel_allowance}</td>
                <td>{revised_full_travel_allowance}</td>
              </tr>
              <tr>
                <td>Employer PF</td>
                <td>{previous_full_employer_pf}</td>
                <td>{revised_full_employer_pf}</td>
              </tr>
              <tr>
                <td><strong>Total Earnings</strong></td>
                <td><strong>{previous_monthly_ctc}</strong></td>
                <td><strong>{revised_monthly_ctc}</strong></td>
              </tr>
              <tr>
                <td><strong>Annual CTC</strong></td>
                <td><strong>{ previous_annual_ctc}</strong></td>
                <td><strong>{ revised_annual_ctc}</strong></td>

                
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
