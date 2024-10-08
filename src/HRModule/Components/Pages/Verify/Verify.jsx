

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSalaryByMonth } from '../../../Redux/Slices/SalaryReport';
import * as XLSX from 'xlsx-js-style';
import { saveAs } from 'file-saver';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Verify.css';

const Verify = () => {
  const dispatch = useDispatch();
  const { salaryRecords, status } = useSelector((state) => state.reportSlice);

  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const handleFetchSalary = () => {
    if (selectedMonth && selectedYear) {
      dispatch(fetchSalaryByMonth({ month: selectedMonth, year: selectedYear }))
        .unwrap() // Use unwrap() to catch rejected actions
        .then(() => {
          toast.success('Salary data fetched successfully!');
        })
        .catch((error) => {
          console.error('Error fetching salary data:', error);
          toast.error(error.message || 'Error fetching salary data. Please try again.');
        });
    } else {
      toast.warn('Please select both month and year.');
    }
  };

  const downloadSalaryRegister = () => {
    if (!salaryRecords || salaryRecords.length === 0) {
      toast.warn('No salary data available for export.');
      return;
    }

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet([]);

    // Company details (centered)
    const companyDetails = [
      ['NM IT SOLUTIONS PRIVATE LIMITED'],
      ['5th Floor, Samhitha Aspire, 1st main pai layout, Tinfactory - 560016'],
      [`Salary Register For The Month ${selectedMonth} ${selectedYear}`],
      []
    ];

    companyDetails.forEach((row, index) => {
      const cellRef = XLSX.utils.encode_cell({ r: index, c: 0 });
      XLSX.utils.sheet_add_aoa(worksheet, [row], { origin: cellRef });
      if (!worksheet[cellRef]) {
        worksheet[cellRef] = {};
      }
      worksheet[cellRef].s = { 
        alignment: { horizontal: 'center', vertical: 'center' },
        font: { bold: true, sz: 14 }
      };
    });

    worksheet['!merges'] = [
      { s: { r: 0, c: 0 }, e: { r: 0, c: 18 } },
      { s: { r: 1, c: 0 }, e: { r: 1, c: 18 } },
      { s: { r: 2, c: 0 }, e: { r: 2, c: 18 } }
    ];

    const headers = [
      'Employee ID', 'Name', 'Join Date', 'Designation', 'Email', 'Gender', 'Location', 
      'Bank Name', 'Account No', 'IFSC Code', 'PAN No', 'PF Number', 
      'UAN Number', 'FULL BASIC', 'FULL HRA', 'FULL SPECIAL ALLOWANCE', 
      'MONTHLY CTC', 'ANNUAL CTC', 'BASIC', 'HRA', 'SPECIAL ALLOWANCE', 
      'OTHER ALLOWANCE', 'TRAVELLING ALLOWANCE', 'GROSS', 'PF', 
      'PROF TAX', 'TOTAL DEDUCTIONS', 'NET PAY'
    ];
    
    XLSX.utils.sheet_add_aoa(worksheet, [headers], { origin: 'A5' });

    // Apply styles to headers
    headers.forEach((_, index) => {
      const cellRef = XLSX.utils.encode_cell({ r: 4, c: index });
      if (!worksheet[cellRef]) {
        worksheet[cellRef] = {};
      }
      worksheet[cellRef].s = {
        fill: { fgColor: { rgb: "CCCCCC" } },
        font: { bold: true },
        alignment: { horizontal: 'center', vertical: 'center' }
      };
    });

    const data = salaryRecords.map(employee => [
      employee.emp_id || '',
      employee.firstName || '',
      employee.dateOfJoining || '',
      employee.designation || '',
      employee.email || '',
      employee.gender || '',
      employee.location || '',
      employee.bankName || '',
      employee.accountNo || '',
      employee.ifscCode || '',
      employee.panNo || '',
      employee.pfNumber || '',
      employee.uanNumber || '',
      parseFloat(employee.revised_full_basic || 0).toFixed(2),
      parseFloat(employee.revised_full_hra || 0).toFixed(2),
      parseFloat(employee.revised_full_special_allowance || 0).toFixed(2),
      parseFloat(employee.revised_monthly_ctc || 0).toFixed(2),
      parseFloat(employee.revised_annual_ctc || 0).toFixed(2),
      parseFloat(employee.revised_full_basic || 0).toFixed(2),
      parseFloat(employee.revised_full_hra || 0).toFixed(2),
      parseFloat(employee.revised_full_special_allowance || 0).toFixed(2),
      parseFloat(employee.revised_full_other_allowance || 0).toFixed(2),
      parseFloat(employee.revised_full_travel_allowance  || 0).toFixed(2),
      parseFloat(employee.gross || 0).toFixed(2),
      parseFloat(employee.revised_full_employer_pf || 0).toFixed(2),
      parseFloat(employee.profTax || 0).toFixed(2),
      parseFloat(employee.total_deductions  || 0).toFixed(2),
      parseFloat(employee.total_amt || 0).toFixed(2)
    ]);
    
    console.log("Mapped Data:", data);
    
    XLSX.utils.sheet_add_aoa(worksheet, data, { origin: 'A6' });
    const grandTotal = data.reduce((acc, row) => {
      headers.forEach((_, index) => {
        if (index > 11) { // Adjust this based on where your numeric fields start
          acc[index] = (parseFloat(acc[index]) || 0) + (parseFloat(row[index]) || 0);
        }
      });
      return acc;
    }, Array(headers.length).fill(0)); // Initialize with 0
    
    grandTotal[0] = 'Grand Total';
    XLSX.utils.sheet_add_aoa(worksheet, [grandTotal], { origin: `A${6 + data.length}` });

    grandTotal.forEach((_, index) => {
      const cellRef = XLSX.utils.encode_cell({ r: 5 + data.length, c: index });
      worksheet[cellRef].s = {
        font: { bold: true },
        alignment: { horizontal: 'center', vertical: 'center' }
      };
    });

    // Set column widths
    const colWidths = headers.map(() => ({ wch: 15 }));
    worksheet['!cols'] = colWidths;

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Salary Register');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    saveAs(blob, `SalaryRegister_${selectedMonth}_${selectedYear}.xlsx`);
    toast.success('Salary Register downloaded successfully!');
  };

  const downloadCTCReport = () => {
    if (!salaryRecords || salaryRecords.length === 0) {
      toast.warn('No salary data available for export.');
      return;
    }
  
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet([]);
  
    // Get company details (centered)
    const companyDetails = [
      ['NM IT SOLUTIONS PRIVATE LIMITED'],
      ['5th Floor, Samhitha Aspire, 1st main pai layout, Tinfactory - 560016'],
      [`CTC Report For The Month ${selectedMonth} ${selectedYear}`],
      []
    ];
  
    companyDetails.forEach((row, index) => {
      const cellRef = XLSX.utils.encode_cell({ r: index, c: 0 });
      XLSX.utils.sheet_add_aoa(worksheet, [row], { origin: cellRef });
      if (!worksheet[cellRef]) {
        worksheet[cellRef] = {};
      }
      worksheet[cellRef].s = { 
        alignment: { horizontal: 'center', vertical: 'center' },
        font: { bold: true, sz: 14 }
      };
    });
  
    worksheet['!merges'] = [
      { s: { r: 0, c: 0 }, e: { r: 0, c: 18 } },
      { s: { r: 1, c: 0 }, e: { r: 1, c: 18 } },
      { s: { r: 2, c: 0 }, e: { r: 2, c: 18 } }
    ];
  
    const headers = [
      'Employee ID', 'Name', 'Join Date', 'Location', 'FULL BASIC', 'FULL HRA', 'FULL SPECIAL ALLOWANCE', 
      'MONTHLY CTC', 'ANNUAL CTC'
    ];
    
    XLSX.utils.sheet_add_aoa(worksheet, [headers], { origin: 'A5' });
  
    // Apply styles to headers
    headers.forEach((_, index) => {
      const cellRef = XLSX.utils.encode_cell({ r: 4, c: index });
      if (!worksheet[cellRef]) {
        worksheet[cellRef] = {};
      }
      worksheet[cellRef].s = {
        fill: { fgColor: { rgb: "CCCCCC" } },
        font: { bold: true },
        alignment: { horizontal: 'center', vertical: 'center' }
      };
    });
  
    const data = salaryRecords.map(employee => [
      employee.emp_id || '',
      employee.firstName || '',
      employee.dateOfJoining || '',
      employee.location || '',
      parseFloat(employee.revised_full_basic || 0).toFixed(2),
      parseFloat(employee.revised_full_hra || 0).toFixed(2),
      parseFloat(employee.revised_full_special_allowance || 0).toFixed(2),
      parseFloat(employee.revised_monthly_ctc || 0).toFixed(2),
      parseFloat(employee.revised_annual_ctc || 0).toFixed(2)
    ]);
  
    XLSX.utils.sheet_add_aoa(worksheet, data, { origin: 'A7' });
    const grandTotal = data.reduce((acc, row) => {
      acc[12] = (parseFloat(acc[12]) || 0) + (parseFloat(row[12]) || 0);
      acc[13] = (parseFloat(acc[13]) || 0) + (parseFloat(row[13]) || 0);
      return acc;
    }, Array(14).fill(0));
  
    grandTotal[0] = 'Grand Total';
    XLSX.utils.sheet_add_aoa(worksheet, [grandTotal], { origin: `A${7 + data.length}` });
  
    grandTotal.forEach((_, index) => {
      const cellRef = XLSX.utils.encode_cell({ r: 6 + data.length, c: index });
      worksheet[cellRef].s = {
        font: { bold: true },
        alignment: { horizontal: 'center', vertical: 'center' }
      };
    });
  
    // Set column widths
    const colWidths = headers.map(() => ({ wch: 15 }));
    worksheet['!cols'] = colWidths;
  
    XLSX.utils.book_append_sheet(workbook, worksheet, 'CTC Report');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    saveAs(blob, `CTCReport_${selectedMonth}_${selectedYear}.xlsx`);
    toast.success('CTC Report downloaded successfully!');
  };

  useEffect(() => {
    console.log('Salary Records:', salaryRecords);
  }, [salaryRecords]);

  return (
    <div>
      <ToastContainer /> 
      <select className='div-dropdown' value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
        <option value="">Select Month</option>
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>

      <select className='div-dropdown' value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
        <option value="">Select Year</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
      </select>

      <button className='sal-btn' onClick={handleFetchSalary}>Fetch Salary Data</button>

      {status === 'loading' && <p>Loading...</p>}

      <button className='sal-btn' onClick={downloadSalaryRegister} disabled={!salaryRecords || salaryRecords.length === 0}>
        Download Salary Register
      </button>

      <button className='sal-btn' onClick={downloadCTCReport} disabled={!salaryRecords || salaryRecords.length === 0}>
        Download CTC Report
      </button>

      {Array.isArray(salaryRecords) && salaryRecords.length > 0 ? (
        <table border="1" style={{ marginTop: '20px' }}>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Date of Joining</th>
              <th>Designation</th>
              <th>Monthly CTC</th>
              <th>Annual CTC</th>
            </tr>
          </thead>
          <tbody>
            {salaryRecords.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.emp_id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.dateOfJoining}</td>
                <td>{employee.designation}</td>
                <td>{employee.revised_monthly_ctc}</td>
                <td>{employee.revised_annual_ctc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No salary data available.</p>
      )}
    </div>
  );
};

export default Verify;
