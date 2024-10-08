import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import '../../EmpSalary/Empitstatement/Empitstatement.css'
import { FaDownload } from "react-icons/fa";

const TaxCalculationForm = () => {
  const [expandedSections, setExpandedSections] = useState({
    'A. Income': true,
    'B. Deductions': false,
    'C. Perquisites': false,
    'D. Income Excluded From Tax': false,
    'F. Exemption Under Section 10': false,
    'G. Income From Previous Employer': false,
    'I. Less Deduction under Section 16': false,
    'K. Income From Other Sources (Including House Properties)': false,
    'Other Incomes': false,
    'Incomes/Loss from house properties': false,
    'M. Deduction Under Chapter VI A': false,
    'O. Annual Tax': false,
    'P. Tax Paid Till Date': false,
    'Q. Balance Payable': false,
    'R. TDS Recovered in Current Month': false,
    'Monthly tax': false,
   
  });

  const [allExpanded, setAllExpanded] = useState(false);

  
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  const handleExpandCollapseAll = () => {
    const newState = !allExpanded;
    const updatedSections = {};
    Object.keys(expandedSections).forEach(section => {
      updatedSections[section] = newState;
    });

    setExpandedSections(updatedSections);
    setAllExpanded(newState);
  };


  const renderMonthlyIncomeTable = () => (
    <table className="data-table">
      <thead>
        <tr>
          <th>Items</th>
          <th>Total</th>
          {['Apr 2024', 'May 2024', 'Jun 2024', 'Jul 2024', 'Aug 2024'].map(month => (
            <th key={month}>{month}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="7" className="sub-header">
            <span className="toggle-icon">▼</span> Monthly Income
          </td>
        </tr>
        {[
          ['Basic', '1,20,000.00', '10,000.00'],
          ['HRA', '48,000.00', '4,000.00'],
          ['Special Allowance', '24,000.00', '2,000.00'],
          ['Other Allowance', '33,600.00', '2,800.00'],
        ].map(([item, total, monthly]) => (
          <tr key={item}>
            <td>{item}</td>
            <td>{total}</td>
            {[...Array(5)].map((_, i) => (
              <td key={i}>{monthly}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderSection = (title, content, value) => (
    <div className="form-section">
      <div className="section-header" onClick={() => toggleSection(title)}>
        <span>
          <span className="toggle-icon">{expandedSections[title] ? '−' : '+'}</span>
          {title}
        </span>
        <span className="section-value">₹{value}</span>
      </div>
      {expandedSections[title] && (
        <div className="section-content">
          {content}
        </div>
      )}
    </div>
  );

  const renderKSection = () => (
    <>
      <div className="sub-section" onClick={() => toggleSection('Other Incomes')}>
        <span>
          <span className="toggle-icon">{expandedSections['Other Incomes'] ? '▼' : '▶'}</span>
          Other Incomes
        </span>
        <span className="section-value">₹0.00</span>
      </div>
      {expandedSections['Other Incomes'] && (
        <div className="no-data">No data to display !!!</div>
      )}
      <div className="sub-section" onClick={() => toggleSection('Incomes/Loss from house properties')}>
        <span>
          <span className="toggle-icon">{expandedSections['Incomes/Loss from house properties'] ? '▼' : '▶'}</span>
          Incomes/Loss from house properties
        </span>
        <span className="section-value">₹0.00</span>
      </div>
      {expandedSections['Incomes/Loss from house properties'] && (
        <table className="data-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Declared</th>
              <th>Eligible</th>
              <th>Considered</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Interest on housing loan (self-occupied)</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );

  const renderTaxTable = (rows = []) => (
    <table className="data-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Raw Tax</th>
          <th>Surcharge</th>
          <th>Health & Edu.Cess</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {rows.length > 0 ? rows.map((row, index) => (
          <tr key={index}>
            <td>{row}</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>
        )) : (
          <tr>
            <td>-</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>
        )}
      </tbody>
    </table>
  );

  return (
    <div className="tax-calculation-form">
      <div className="form-header">
        <div className="tax-regime"><span className="new-regime"></span></div>
        <div className="header-right">
          <button className="download-btn"><FaDownload /></button>
          <select className="month-select">
            <option>Aug 2024</option>
          </select>
        </div>
      </div>
      
      <div className="summary-boxes">

      <div className="summary-box">
          <div className="tax-regime">TAX CALCULATED AS PER</div>
          <span className="new-regime">NEW TAX REGIME</span>
        </div>

        <div className="summary-box">
          <div className="summary-label">NET TAX IN ₹</div>
          <div className="summary-value">0.00</div>
        </div>
        <div className="summary-box">
          <div className="summary-label">TOTAL TAX DUE IN ₹</div>
          <div className="summary-value">0.00</div>
        </div>
        <div className="summary-box">
          <div className="summary-label">TAX DEDUCTIBLE PER MONTH IN ₹</div>
          <div className="summary-value">0.00</div>
        </div>
        <div className="summary-box">
          <div className="summary-label">REMAINING MONTHS (SEP 2024 ONWARDS)</div>
          <div className="summary-value">7</div>
        </div>
      </div>

      <div className="collapse-all" onClick={handleExpandCollapseAll}>
        <div>
        <span className="toggle-icon">{allExpanded ? '▼Collapse all' : '▼Expand all'}</span>
        </div>
        <span className="value-label">Value in ₹</span>
      </div>

      <div className="form-sections">
        {renderSection('A. Income', renderMonthlyIncomeTable(), '2,25,600.00')}
        {renderSection('B. Deductions', 
          <table className="data-table">
            <thead>
              <tr>
                <th>Items</th>
                <th>Total</th>
                {['Apr 2024', 'May 2024', 'Jun 2024', 'Jul 2024', 'Aug 2024'].map(month => (
                  <th key={month}>{month}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PF</td>
                <td>14,400.00</td>
                {[...Array(5)].map((_, i) => (
                  <td key={i}>1,200.00</td>
                ))}
              </tr>
              <tr className="total-row">
                <td>Total</td>
                <td>14,400.00</td>
                {[...Array(5)].map((_, i) => (
                  <td key={i}>1,200.00</td>
                ))}
              </tr>
            </tbody>
          </table>
        , '14,400.00')}
        {renderSection('C. Perquisites', <div className="no-data">No data to display !!!</div>, '0.00')}
        {renderSection('D. Income Excluded From Tax', <div className="no-data">No data to display !!!</div>, '0.00')}
        
        <div className="form-section total-section">
          <div className="section-header">
            <span>E. Gross Salary (A + C - D)</span>
            <span className="section-value">₹2,25,600.00</span>
          </div>
        </div>
        
        {renderSection('F. Exemption Under Section 10', 
          <table className="data-table">
            <thead>
              <tr>
                <th>Items</th>
                <th>Exemption</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HOUSE RENT ALLOWANCE : SECTION10(13A)</td>
                <td>
                  <button className="link-btn">Show HRA Details</button>
                </td>
              </tr>
              <tr>
                <td>TOTAL RENT PAID P.A.</td>
                <td>0.00</td>
              </tr>
              <tr>
                <td>HRA RECEIVED</td>
                <td>48,000.00</td>
              </tr>
              <tr>
                <td>40% OF BASIC</td>
                <td>48,000.00</td>
              </tr>
              <tr>
                <td>RENT PAID  10% BASIC</td>
                <td>-12,000.00</td>
              </tr>
              <tr className="total-row">
                <td>Total</td>
                <td>0.00</td>
              </tr>
            </tbody>
          </table>
        , '0.00')}
        
        {renderSection('G. Income From Previous Employer', 
          <table className="data-table">
            <thead>
              <tr>
                <th>Items</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TOTAL INCOME</td>
                <td>0.00</td>
              </tr>
              <tr>
                <td>INCOME TAX</td>
                <td>0.00</td>
              </tr>
              <tr>
                <td>PROFESSIONAL TAX</td>
                <td>0.00</td>
              </tr>
              <tr>
                <td>PROVIDENT FUND</td>
                <td>0.00</td>
              </tr>
            </tbody>
          </table>
        , '0.00')}
        
        <div className="form-section total-section">
          <div className="section-header">
            <span>H. Income After Exemption(E - F + G)</span>
            <span className="section-value">₹2,25,600.00</span>
          </div>
        </div>
        
        {renderSection('I. Less Deduction under Section 16', 
          <table className="data-table">
            <thead>
              <tr>
                <th>Items</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TAX ON EMPLOYMENT : SEC 16(III)</td>
                <td>0.00</td>
              </tr>
              <tr>
                <td>STANDARD DEDUCTION : SEC 16(1A)</td>
                <td>50,000.00</td>
              </tr>
            </tbody>
          </table>
        , '50,000.00')}
        
        <div className="form-section total-section">
          <div className="section-header">
            <span>J. Income Chargeable Under The Head Salaries(H - I)</span>
            <span className="section-value">₹1,75,600.00</span>
          </div>
        </div>
        
        {renderSection('K. Income From Other Sources (Including House Properties)', renderKSection(), '0.00')}
        
        <div className="form-section total-section">
          <div className="section-header">
            <span>L. Gross Total Income (J + K)</span>
            <span className="section-value">₹1,75,600.00</span>
          </div>
        </div>

        {renderSection('M. Deduction Under Chapter VI A', <div className="no-data">No data to display !!!</div>, '0.00')}

        <div className="form-section total-section">
          <div className="section-header">
            <span>N. Taxable Income (L - M)</span>
            <span className="section-value">₹1,75,600.00</span>
          </div>
        </div>
        {renderSection('O. Annual Tax', renderTaxTable(), '0.00')}
        {renderSection('P. Tax Paid Till Date', renderTaxTable(['Deduction Through Payroll', 'Direct TDS', 'Previous Employment']), '0.00')}

        {renderSection('Q. Balance Payable', renderTaxTable(), '0.00')}

        {renderSection('R. TDS Recovered in Current Month', renderTaxTable(), '0.00')}
        {/* {renderSection('Monthly tax', renderTaxTable(), '0.00')} */}
      </div>
    </div>
  );
};

export default TaxCalculationForm;